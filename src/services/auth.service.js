const bcrypt = require('bcryptjs');

const prisma = require('../config/prisma');

const {
  generarToken,
  generarRefreshToken,
  verificarRefreshToken,
} = require('../utils/jwt');

function generarTokens(usuario) {
  const accessToken = generarToken(usuario);
  const refreshToken = generarRefreshToken(usuario);

  return {
    // Se mantiene temporalmente para compatibilidad
    // con la aplicación móvil actual.
    token: accessToken,
    accessToken,
    refreshToken,
  };
}

async function registrarUsuario({
  nombre,
  correo,
  clave,
}) {
  const correoNormalizado =
    correo.trim().toLowerCase();

  const usuarioExistente =
    await prisma.usuario.findUnique({
      where: {
        correo: correoNormalizado,
      },
    });

  if (usuarioExistente) {
    const error = new Error(
      'Ya existe un usuario registrado con ese correo'
    );

    error.statusCode = 409;

    throw error;
  }

  const claveCifrada =
    await bcrypt.hash(clave, 10);

  const usuario =
    await prisma.usuario.create({
      data: {
        nombre: nombre.trim(),
        correo: correoNormalizado,
        clave: claveCifrada,
        rol: 'ASISTENTE_LEGAL',
      },
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true,
        createdAt: true,
      },
    });

  const tokens =
    generarTokens(usuario);

  return {
    usuario,
    ...tokens,
  };
}

async function iniciarSesion({
  correo,
  clave,
}) {
  const correoNormalizado =
    correo.trim().toLowerCase();

  const usuario =
    await prisma.usuario.findUnique({
      where: {
        correo: correoNormalizado,
      },
    });

  if (!usuario) {
    const error = new Error(
      'Correo o contraseña incorrectos'
    );

    error.statusCode = 401;

    throw error;
  }

  const claveCorrecta =
    await bcrypt.compare(
      clave,
      usuario.clave
    );

  if (!claveCorrecta) {
    const error = new Error(
      'Correo o contraseña incorrectos'
    );

    error.statusCode = 401;

    throw error;
  }

  const usuarioSeguro = {
    id: usuario.id,
    nombre: usuario.nombre,
    correo: usuario.correo,
    rol: usuario.rol,
  };

  const tokens =
    generarTokens(usuarioSeguro);

  return {
    usuario: usuarioSeguro,
    ...tokens,
  };
}

async function renovarSesion(refreshToken) {
  let payload;

  try {
    payload =
      verificarRefreshToken(
        refreshToken
      );
  } catch (_) {
    const error = new Error(
      'El refresh token no es válido o ha expirado'
    );

    error.statusCode = 401;

    throw error;
  }

  const usuario =
    await prisma.usuario.findUnique({
      where: {
        id: payload.id,
      },
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true,
      },
    });

  if (!usuario) {
    const error = new Error(
      'El usuario asociado al token ya no existe'
    );

    error.statusCode = 401;

    throw error;
  }

  const tokens =
    generarTokens(usuario);

  return {
    usuario,
    ...tokens,
  };
}

module.exports = {
  registrarUsuario,
  iniciarSesion,
  renovarSesion,
};