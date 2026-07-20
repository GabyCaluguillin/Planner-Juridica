// src/routes/auth.routes.js
const express = require('express');

const {
  registro,
  login,
} = require('../controllers/auth.controller');

const {
  validarRegistro,
  validarLogin,
  manejarValidaciones,
} = require('../validators/auth.validator');

const router = express.Router();

router.post(
  '/registro',
  validarRegistro,
  manejarValidaciones,
  registro
);

router.post(
  '/login',
  validarLogin,
  manejarValidaciones,
  login
);

module.exports = router;