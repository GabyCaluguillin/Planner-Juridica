const express = require('express');

const {
  registro,
  login,
  refresh,
} = require('../controllers/auth.controller');

const {
  validarRegistro,
  validarLogin,
  validarRefreshToken,
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

router.post(
  '/refresh',
  validarRefreshToken,
  manejarValidaciones,
  refresh
);

module.exports = router;
