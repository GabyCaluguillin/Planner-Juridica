// src/validators/auth.validator.js
const { body, validationResult } = require('express-validator');

const validarRegistro = [
  body('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),

  body('correo')
    .isEmail()
    .withMessage('Debe ingresar un correo válido'),

  body('clave')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),
];

const validarLogin = [
  body('correo')
    .isEmail()
    .withMessage('Debe ingresar un correo válido'),

  body('clave')
    .notEmpty()
    .withMessage('La contraseña es obligatoria'),
];

function manejarValidaciones(req, res, next) {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      exito: false,
      errores: errores.array(),
    });
  }

  next();
}

module.exports = {
  validarRegistro,
  validarLogin,
  manejarValidaciones,
};