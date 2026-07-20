// src/utils/jwt.js
const jwt = require('jsonwebtoken');

function generarToken(usuario) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET no está configurado en el archivo .env');
  }

  return jwt.sign(
    {
      id: usuario.id,
      rol: usuario.rol,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '8h',
    }
  );
}

function verificarToken(token) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET no está configurado en el archivo .env');
  }

  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  generarToken,
  verificarToken,
};