// src/routes/caso.routes.js

const express = require('express');

const {
  crear,
  listar,
  listarSinOptimizar,
  obtenerPorId,
  actualizar,
  eliminar,
} = require('../controllers/caso.controller');

const {
  validarIdCaso,
  validarCrearCaso,
  validarActualizarCaso,
  manejarValidaciones,
} = require('../validators/caso.validator');

const {
  autenticarUsuario,
} = require('../middleware/auth.middleware');

const {
  autorizarRoles,
} = require('../middleware/role.middleware');

const router = express.Router();

// Todas las rutas de casos requieren autenticación JWT.
router.use(autenticarUsuario);

// Crear un caso jurídico.
// El usuario responsable se obtiene automáticamente del token.
router.post(
  '/',
  validarCrearCaso,
  manejarValidaciones,
  crear
);

// Listado optimizado con cliente y usuario mediante eager loading.
router.get('/', listar);

// Ruta especial para demostrar el problema N+1.
// Debe ir antes de /:id para que Express no interprete
// "sin-optimizar" como el ID de un caso.
router.get(
  '/rendimiento/sin-optimizar',
  listarSinOptimizar
);

// Obtener un caso jurídico por su ID.
router.get(
  '/:id',
  validarIdCaso,
  manejarValidaciones,
  obtenerPorId
);

// Actualizar parcialmente un caso jurídico.
router.patch(
  '/:id',
  validarIdCaso,
  validarActualizarCaso,
  manejarValidaciones,
  actualizar
);

// Solo un administrador puede eliminar casos.
router.delete(
  '/:id',
  autorizarRoles('ADMINISTRADOR'),
  validarIdCaso,
  manejarValidaciones,
  eliminar
);

module.exports = router;
