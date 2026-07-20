// src/services/auth.service.js
const bcrypt = require('bcryptjs');
const prisma = require('../config/prisma');
const { generarToken } = require('../utils/jwt');

async function registrarUsuario({ nombre, correo, clave, rol }) {
  const correoNormalizado = correo.trim().toLowerCase();

  const usuarioExistente = await prisma.usuario.findUnique({
    where: {
      correo: correoNormalizado,
    },
  });

  if (usuarioExistente) {
    const error = new Error('Ya existe un usuario registrado con ese correo');
    error.statusCode = 409;
    throw error;
  }

  const claveCifrada = await bcrypt.hash(clave, 10);

  const usuario = await prisma.usuario.create({
    data: {
      nombre: nombre.trim(),
      correo: correoNormalizado,
      clave: claveCifrada,
      rol: rol || 'ASISTENTE_LEGAL',
    },
    select: {
      id: true,
      nombre: true,
      correo: true,
      rol: true,
      createdAt: true,
    },
  });

  const token = generarToken(usuario);

  return {
    usuario,
    token,
  };
}

async function iniciarSesion({ correo, clave }) {
  const correoNormalizado = correo.trim().toLowerCase();

  const usuario = await prisma.usuario.findUnique({
    where: {
      correo: correoNormalizado,
    },
  });

  if (!usuario) {
    const error = new Error('Correo o contraseña incorrectos');
    error.statusCode = 401;
    throw error;
  }

  const claveCorrecta = await bcrypt.compare(clave, usuario.clave);

  if (!claveCorrecta) {
    const error = new Error('Correo o contraseña incorrectos');
    error.statusCode = 401;
    throw error;
  }

  const token = generarToken(usuario);

  return {
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      correo: usuario.correo,
      rol: usuario.rol,
    },
    token,
  };
}

module.exports = {
  registrarUsuario,
  iniciarSesion,
};