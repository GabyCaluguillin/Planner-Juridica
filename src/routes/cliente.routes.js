// src/routes/cliente.routes.js
const express = require('express');

const {
  crear,
  listar,
  obtenerPorId,
  actualizar,
  eliminar,
} = require('../controllers/cliente.controller');

const {
  validarIdCliente,
  validarCrearCliente,
  validarActualizarCliente,
  manejarValidaciones,
} = require('../validators/cliente.validator');

const { autenticarUsuario } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(autenticarUsuario);

router.post(
  '/',
  validarCrearCliente,
  manejarValidaciones,
  crear
);

router.get('/', listar);

router.get(
  '/:id',
  validarIdCliente,
  manejarValidaciones,
  obtenerPorId
);

router.put(
  '/:id',
  validarIdCliente,
  validarActualizarCliente,
  manejarValidaciones,
  actualizar
);

router.delete(
  '/:id',
  validarIdCliente,
  manejarValidaciones,
  eliminar
);

module.exports = router;