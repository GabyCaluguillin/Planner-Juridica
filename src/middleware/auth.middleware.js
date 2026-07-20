// src/middleware/auth.middleware.js
const { verificarToken } = require('../utils/jwt');

function autenticarUsuario(req, res, next) {
  try {
    const encabezado = req.headers.authorization;

    if (!encabezado || !encabezado.startsWith('Bearer ')) {
      return res.status(401).json({
        exito: false,
        mensaje: 'Token de acceso no proporcionado',
      });
    }

    const token = encabezado.split(' ')[1];
    const usuarioDecodificado = verificarToken(token);

    req.usuario = usuarioDecodificado;

    next();
  } catch (error) {
    return res.status(401).json({
      exito: false,
      mensaje: 'Token inválido o expirado',
    });
  }
}

module.exports = {
  autenticarUsuario,
};