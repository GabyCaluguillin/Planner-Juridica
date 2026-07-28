// src/services/usuario.service.js

const bcrypt = require('bcryptjs');
const prisma = require('../config/prisma');

const camposPublicosUsuario = {
  id: true,
  nombre: true,
  correo: true,
  rol: true,
  createdAt: true,
  updatedAt: true,
};

// Listar todos los usuarios sin mostrar sus contraseñas
async function listarUsuarios() {
  return prisma.usuario.findMany({
    select: camposPublicosUsuario,
    orderBy: {
      createdAt: 'desc',
    },
  });
}

// Obtener un usuario por su identificador
async function obtenerUsuarioPorId(id) {
  const usuario = await prisma.usuario.findUnique({
    where: {
      id: Number(id),
    },
    select: camposPublicosUsuario,
  });

  if (!usuario) {
    const error = new Error('Usuario no encontrado');
    error.statusCode = 404;
    throw error;
  }

  return usuario;
}

// Actualizar los datos de un usuario
async function actualizarUsuario(id, datos, usuarioAutenticado) {
  const idUsuario = Number(id);

  await obtenerUsuarioPorId(idUsuario);

  const esAdministrador =
    usuarioAutenticado.rol === 'ADMINISTRADOR';

  const esPropietario =
    Number(usuarioAutenticado.id) === idUsuario;

  // Solo el administrador o el dueño del perfil pueden actualizarlo
  if (!esAdministrador && !esPropietario) {
    const error = new Error(
      'No tiene permisos para actualizar este usuario'
    );
    error.statusCode = 403;
    throw error;
  }

  // Solo el administrador puede cambiar roles
  if (!esAdministrador && datos.rol !== undefined) {
    const error = new Error(
      'Solo un administrador puede modificar el rol'
    );
    error.statusCode = 403;
    throw error;
  }

  const data = {};

  if (datos.nombre !== undefined) {
    data.nombre = datos.nombre.trim();
  }

  if (datos.correo !== undefined) {
    data.correo = datos.correo.trim().toLowerCase();
  }

  if (datos.clave !== undefined) {
    data.clave = await bcrypt.hash(datos.clave, 10);
  }

  if (datos.rol !== undefined && esAdministrador) {
    data.rol = datos.rol;
  }

  if (Object.keys(data).length === 0) {
    const error = new Error(
      'Debe proporcionar al menos un dato para actualizar'
    );
    error.statusCode = 400;
    throw error;
  }

  try {
    return await prisma.usuario.update({
      where: {
        id: idUsuario,
      },
      data,
      select: camposPublicosUsuario,
    });
  } catch (error) {
    if (error.code === 'P2002') {
      const conflicto = new Error(
        'Ya existe otro usuario registrado con ese correo'
      );
      conflicto.statusCode = 409;
      throw conflicto;
    }

    throw error;
  }
}

// Eliminar un usuario
async function eliminarUsuario(id, usuarioAutenticado) {
  const idUsuario = Number(id);

  if (usuarioAutenticado.rol !== 'ADMINISTRADOR') {
    const error = new Error(
      'Solo un administrador puede eliminar usuarios'
    );
    error.statusCode = 403;
    throw error;
  }

  if (Number(usuarioAutenticado.id) === idUsuario) {
    const error = new Error(
      'No puede eliminar su propio usuario mientras mantiene la sesión activa'
    );
    error.statusCode = 400;
    throw error;
  }

  const usuario = await prisma.usuario.findUnique({
    where: {
      id: idUsuario,
    },
    select: {
      id: true,
      _count: {
        select: {
          casos: true,
          audiencias: true,
          citas: true,
          recordatorios: true,
        },
      },
    },
  });

  if (!usuario) {
    const error = new Error('Usuario no encontrado');
    error.statusCode = 404;
    throw error;
  }

  const registrosRelacionados =
    usuario._count.casos +
    usuario._count.audiencias +
    usuario._count.citas +
    usuario._count.recordatorios;

  if (registrosRelacionados > 0) {
    const error = new Error(
      'No se puede eliminar el usuario porque tiene información jurídica relacionada'
    );
    error.statusCode = 409;
    throw error;
  }

  return prisma.usuario.delete({
    where: {
      id: idUsuario,
    },
    select: camposPublicosUsuario,
  });
}

module.exports = {
  listarUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
};
