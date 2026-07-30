// src/services/caso.service.js

const prisma = require('../config/prisma');
const redis = require('../config/redis');

const CACHE_TTL_SEGUNDOS = Number(
  process.env.CACHE_TTL_SEGUNDOS || 300
);

const ESTADOS_PERMITIDOS = [
  'TRAMITE',
  'EN_PROCESO',
  'FINALIZADO',
  'ARCHIVADO',
];

const camposCaso = {
  id: true,
  numero: true,
  asunto: true,
  tipo: true,
  estado: true,
  fechaInicio: true,
  fechaCierre: true,
  usuarioId: true,
  clienteId: true,
  createdAt: true,
  updatedAt: true,

  cliente: {
    select: {
      id: true,
      nombre: true,
      correo: true,
      telefono: true,
    },
  },

  usuario: {
    select: {
      id: true,
      nombre: true,
      correo: true,
      rol: true,
    },
  },
};

function crearError(mensaje, statusCode) {
  const error = new Error(mensaje);
  error.statusCode = statusCode;
  return error;
}

function obtenerClaveListaCasos(usuarioAutenticado) {
  if (usuarioAutenticado.rol === 'ADMINISTRADOR') {
    return 'cache:casos:lista:administrador';
  }

  return `cache:casos:lista:usuario:${usuarioAutenticado.id}`;
}

async function leerCache(clave) {
  try {
    const valor = await redis.get(clave);

    if (valor === null) {
      return null;
    }

    return JSON.parse(valor);
  } catch (error) {
    console.error(
      `⚠️ No se pudo leer el caché de Redis: ${error.message}`
    );

    return null;
  }
}

async function guardarCache(clave, datos) {
  try {
    await redis.set(
      clave,
      JSON.stringify(datos),
      'EX',
      CACHE_TTL_SEGUNDOS
    );
  } catch (error) {
    console.error(
      `⚠️ No se pudo guardar el caché en Redis: ${error.message}`
    );
  }
}

async function invalidarCacheListas(usuarioId) {
  const claves = [
    'cache:casos:lista:administrador',
    `cache:casos:lista:usuario:${usuarioId}`,
  ];

  try {
    await redis.del(...claves);

    console.log(
      `🧹 Caché de casos invalidado para el usuario ${usuarioId}`
    );
  } catch (error) {
    console.error(
      `⚠️ No se pudo invalidar el caché: ${error.message}`
    );
  }
}

function convertirFecha(valor, nombreCampo) {
  const fecha = new Date(valor);

  if (Number.isNaN(fecha.getTime())) {
    throw crearError(
      `La fecha enviada en ${nombreCampo} no es válida`,
      400
    );
  }

  return fecha;
}

function validarOrdenFechas(fechaInicio, fechaCierre) {
  if (fechaCierre && fechaCierre < fechaInicio) {
    throw crearError(
      'La fecha de cierre no puede ser anterior a la fecha de inicio',
      400
    );
  }
}

async function verificarCliente(clienteId) {
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: Number(clienteId),
    },
    select: {
      id: true,
    },
  });

  if (!cliente) {
    throw crearError('Cliente no encontrado', 404);
  }

  return cliente;
}

async function crearCaso(datos, usuarioAutenticado) {
  const numeroNormalizado = datos.numero.trim().toUpperCase();

  const casoExistente = await prisma.caso.findUnique({
    where: {
      numero: numeroNormalizado,
    },
    select: {
      id: true,
    },
  });

  if (casoExistente) {
    throw crearError(
      'Ya existe un caso jurídico registrado con ese número',
      409
    );
  }

  await verificarCliente(datos.clienteId);

  const fechaInicio = convertirFecha(
    datos.fechaInicio,
    'fechaInicio'
  );

  const fechaCierre = datos.fechaCierre
    ? convertirFecha(datos.fechaCierre, 'fechaCierre')
    : null;

  validarOrdenFechas(fechaInicio, fechaCierre);

  const estado = datos.estado || 'TRAMITE';

  if (!ESTADOS_PERMITIDOS.includes(estado)) {
    throw crearError('El estado del caso no es válido', 400);
  }

  const nuevoCaso = await prisma.caso.create({
  data: {
    numero: numeroNormalizado,
    asunto: datos.asunto.trim(),
    tipo: datos.tipo.trim(),
    estado,
    fechaInicio,
    fechaCierre,

    // El usuario responsable se obtiene del token JWT.
    usuarioId: Number(usuarioAutenticado.id),

    clienteId: Number(datos.clienteId),
  },
  select: camposCaso,
});

// Elimina la lista antigua guardada en Redis.
await invalidarCacheListas(nuevoCaso.usuarioId);

return nuevoCaso;
}

// Consulta principal optimizada.
// Obtiene los casos, clientes y usuarios sin consultas dentro de ciclos.
async function listarCasos(usuarioAutenticado) {
  const claveCache =
    obtenerClaveListaCasos(usuarioAutenticado);

  const casosEnCache = await leerCache(claveCache);

  if (casosEnCache !== null) {
    console.log(`✅ CACHE HIT: ${claveCache}`);
    return casosEnCache;
  }

  console.log(`❌ CACHE MISS: ${claveCache}`);

  const filtro =
    usuarioAutenticado.rol === 'ADMINISTRADOR'
      ? {}
      : {
          usuarioId: Number(usuarioAutenticado.id),
        };

  const casos = await prisma.caso.findMany({
    where: filtro,
    select: camposCaso,
    orderBy: {
      createdAt: 'desc',
    },
  });

  await guardarCache(claveCache, casos);

  console.log(
    `💾 Casos guardados en Redis por ${CACHE_TTL_SEGUNDOS} segundos`
  );

  return casos;
}

// Versión temporal para comparar el problema N+1.
// Se utilizará únicamente en las pruebas de rendimiento del taller.
async function listarCasosSinOptimizar(usuarioAutenticado) {
  const filtro =
    usuarioAutenticado.rol === 'ADMINISTRADOR'
      ? {}
      : {
          usuarioId: Number(usuarioAutenticado.id),
        };

  // Primera consulta: obtiene todos los casos.
  const casos = await prisma.caso.findMany({
    where: filtro,
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Por cada caso se ejecutan consultas adicionales.
  const casosCompletos = await Promise.all(
    casos.map(async (caso) => {
      const [cliente, usuario] = await Promise.all([
        prisma.cliente.findUnique({
          where: {
            id: caso.clienteId,
          },
          select: {
            id: true,
            nombre: true,
            correo: true,
            telefono: true,
          },
        }),

        prisma.usuario.findUnique({
          where: {
            id: caso.usuarioId,
          },
          select: {
            id: true,
            nombre: true,
            correo: true,
            rol: true,
          },
        }),
      ]);

      return {
        ...caso,
        cliente,
        usuario,
      };
    })
  );

  return casosCompletos;
}

async function obtenerCasoPorId(id, usuarioAutenticado) {
  const caso = await prisma.caso.findUnique({
    where: {
      id: Number(id),
    },
    select: camposCaso,
  });

  if (!caso) {
    throw crearError('Caso jurídico no encontrado', 404);
  }

  const esAdministrador =
    usuarioAutenticado.rol === 'ADMINISTRADOR';

  const esResponsable =
    Number(caso.usuarioId) === Number(usuarioAutenticado.id);

  if (!esAdministrador && !esResponsable) {
    throw crearError(
      'No tiene permisos para consultar este caso',
      403
    );
  }

  return caso;
}

async function actualizarCaso(
  id,
  datos,
  usuarioAutenticado
) {
  const casoActual = await obtenerCasoPorId(
    id,
    usuarioAutenticado
  );

  const data = {};

  if (datos.numero !== undefined) {
    data.numero = datos.numero.trim().toUpperCase();
  }

  if (datos.asunto !== undefined) {
    data.asunto = datos.asunto.trim();
  }

  if (datos.tipo !== undefined) {
    data.tipo = datos.tipo.trim();
  }

  if (datos.estado !== undefined) {
    if (!ESTADOS_PERMITIDOS.includes(datos.estado)) {
      throw crearError('El estado del caso no es válido', 400);
    }

    data.estado = datos.estado;
  }

  if (datos.clienteId !== undefined) {
    await verificarCliente(datos.clienteId);
    data.clienteId = Number(datos.clienteId);
  }

  if (datos.fechaInicio !== undefined) {
    data.fechaInicio = convertirFecha(
      datos.fechaInicio,
      'fechaInicio'
    );
  }

  if (datos.fechaCierre !== undefined) {
    data.fechaCierre =
      datos.fechaCierre === null
        ? null
        : convertirFecha(
            datos.fechaCierre,
            'fechaCierre'
          );
  }

  if (Object.keys(data).length === 0) {
    throw crearError(
      'Debe proporcionar al menos un dato para actualizar',
      400
    );
  }

  const fechaInicioFinal =
    data.fechaInicio || casoActual.fechaInicio;

  const fechaCierreFinal =
    data.fechaCierre !== undefined
      ? data.fechaCierre
      : casoActual.fechaCierre;

  validarOrdenFechas(
    fechaInicioFinal,
    fechaCierreFinal
  );

  try {
  const casoActualizado = await prisma.caso.update({
    where: {
      id: Number(id),
    },
    data,
    select: camposCaso,
  });

  await invalidarCacheListas(casoActualizado.usuarioId);

  return casoActualizado;
  } catch (error) {
    if (error.code === 'P2002') {
      throw crearError(
        'Ya existe otro caso registrado con ese número',
        409
      );
    }

    throw error;
  }
}

async function eliminarCaso(id, usuarioAutenticado) {
  if (usuarioAutenticado.rol !== 'ADMINISTRADOR') {
    throw crearError(
      'Solo un administrador puede eliminar casos jurídicos',
      403
    );
  }

  const caso = await prisma.caso.findUnique({
  where: {
    id: Number(id),
  },
  select: {
    id: true,
    usuarioId: true,
  },
});

  if (!caso) {
    throw crearError('Caso jurídico no encontrado', 404);
  }

  const casoEliminado = await prisma.caso.delete({
  where: {
    id: Number(id),
  },
  select: camposCaso,
});

await invalidarCacheListas(caso.usuarioId);

return casoEliminado;
}

module.exports = {
  crearCaso,
  listarCasos,
  listarCasosSinOptimizar,
  obtenerCasoPorId,
  actualizarCaso,
  eliminarCaso,
};
