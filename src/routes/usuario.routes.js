// src/routes/usuario.routes.js

const express = require('express');

const {
  obtenerPerfil,
  listar,
  obtenerPorId,
  actualizar,
  eliminar,
} = require('../controllers/usuario.controller');

const {
  validarIdUsuario,
  validarActualizarUsuario,
  manejarValidaciones,
} = require('../validators/usuario.validator');

const {
  autenticarUsuario,
} = require('../middleware/auth.middleware');

const {
  autorizarRoles,
} = require('../middleware/role.middleware');

const router = express.Router();

// Todas las rutas de usuarios requieren un token JWT válido.
router.use(autenticarUsuario);

// Perfil del usuario que inició sesión.
// Debe ir antes de /:id para evitar que "perfil" se interprete como un ID.
router.get('/perfil', obtenerPerfil);

// Solo un administrador puede consultar la lista completa.
router.get(
  '/',
  autorizarRoles('ADMINISTRADOR'),
  listar
);

// Solo un administrador puede consultar otro usuario por ID.
router.get(
  '/:id',
  autorizarRoles('ADMINISTRADOR'),
  validarIdUsuario,
  manejarValidaciones,
  obtenerPorId
);

// Un administrador puede actualizar cualquier usuario.
// Un asistente legal solo puede actualizar su propio perfil.
// Esta comprobación adicional se realiza dentro del servicio.
router.patch(
  '/:id',
  validarIdUsuario,
  validarActualizarUsuario,
  manejarValidaciones,
  actualizar
);

// Solo un administrador puede eliminar usuarios.
router.delete(
  '/:id',
  autorizarRoles('ADMINISTRADOR'),
  validarIdUsuario,
  manejarValidaciones,
  eliminar
);

module.exports = router;
