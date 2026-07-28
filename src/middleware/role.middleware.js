// src/middleware/role.middleware.js

function autorizarRoles(...rolesPermitidos) {
  return function verificarRol(req, res, next) {
    if (!req.usuario) {
      return res.status(401).json({
        exito: false,
        mensaje: 'Usuario no autenticado',
      });
    }

    if (!rolesPermitidos.includes(req.usuario.rol)) {
      return res.status(403).json({
        exito: false,
        mensaje: 'No tiene permisos para realizar esta operación',
      });
    }

    next();
  };
}

module.exports = {
  autorizarRoles,
};
