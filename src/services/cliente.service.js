const prisma = require('../config/prisma');

async function crearCliente(datos, idOperacion = null) {
  const correoNormalizado = datos.correo.trim().toLowerCase();

  // Si la operaciÃ³n ya fue procesada anteriormente,
  // devolvemos el cliente existente y no lo duplicamos.
  if (idOperacion) {
    const clientePorOperacion =
      await prisma.cliente.findUnique({
        where: {
          idOperacion,
        },
      });

    if (clientePorOperacion) {
      return clientePorOperacion;
    }
  }

  const clienteExistente = await prisma.cliente.findUnique({
    where: {
      correo: correoNormalizado,
    },
  });

  if (clienteExistente) {
    const error = new Error(
      'Ya existe un cliente registrado con ese correo'
    );
    error.statusCode = 409;
    throw error;
  }

  try {
    return await prisma.cliente.create({
      data: {
        nombre: datos.nombre.trim(),
        correo: correoNormalizado,
        telefono: datos.telefono.trim(),
        direccion: datos.direccion?.trim() || null,
        idOperacion,
      },
    });
  } catch (error) {
    // ProtecciÃ³n adicional ante dos solicitudes iguales
    // que lleguen prÃ¡cticamente al mismo tiempo.
    if (error.code === 'P2002' && idOperacion) {
      const clienteProcesado =
        await prisma.cliente.findUnique({
          where: {
            idOperacion,
          },
        });

      if (clienteProcesado) {
        return clienteProcesado;
      }
    }

    if (error.code === 'P2002') {
      const conflicto = new Error(
        'Ya existe otro cliente registrado con ese correo'
      );
      conflicto.statusCode = 409;
      throw conflicto;
    }

    throw error;
  }
}

async function listarClientes() {
  return prisma.cliente.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

async function obtenerClientePorId(id) {
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!cliente) {
    const error = new Error('Cliente no encontrado');
    error.statusCode = 404;
    throw error;
  }

  return cliente;
}

async function actualizarCliente(id, datos) {
  await obtenerClientePorId(id);

  const data = {};

  if (datos.nombre !== undefined) {
    data.nombre = datos.nombre.trim();
  }

  if (datos.correo !== undefined) {
    data.correo = datos.correo.trim().toLowerCase();
  }

  if (datos.telefono !== undefined) {
    data.telefono = datos.telefono.trim();
  }

  if (datos.direccion !== undefined) {
    data.direccion = datos.direccion?.trim() || null;
  }

  try {
    return await prisma.cliente.update({
      where: {
        id: Number(id),
      },
      data,
    });
  } catch (error) {
    if (error.code === 'P2002') {
      const conflicto = new Error(
        'Ya existe otro cliente registrado con ese correo'
      );
      conflicto.statusCode = 409;
      throw conflicto;
    }

    throw error;
  }
}

async function eliminarCliente(id) {
  await obtenerClientePorId(id);

  return prisma.cliente.delete({
    where: {
      id: Number(id),
    },
  });
}

async function guardarEvidenciaCliente(
  id,
  evidenciaArchivo
) {
  await obtenerClientePorId(id);

  if (!evidenciaArchivo) {
    const error = new Error(
      'No se recibió un archivo de evidencia'
    );
    error.statusCode = 400;
    throw error;
  }

  return prisma.cliente.update({
    where: {
      id: Number(id),
    },
    data: {
      evidenciaArchivo,
    },
  });
}

module.exports = {
  crearCliente,
  listarClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
  guardarEvidenciaCliente,
};