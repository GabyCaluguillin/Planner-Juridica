// src/validators/cliente.validator.js
const { body, param, validationResult } = require('express-validator');

const validarIdCliente = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('El ID del cliente debe ser un número entero válido'),
];

const validarCrearCliente = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ max: 150 })
    .withMessage('El nombre no puede superar los 150 caracteres'),

  body('correo')
    .trim()
    .isEmail()
    .withMessage('Debe ingresar un correo válido')
    .isLength({ max: 150 })
    .withMessage('El correo no puede superar los 150 caracteres'),

  body('telefono')
    .trim()
    .notEmpty()
    .withMessage('El teléfono es obligatorio')
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede superar los 20 caracteres'),

  body('direccion')
    .optional({ nullable: true })
    .isString()
    .withMessage('La dirección debe ser texto'),
];

const validarActualizarCliente = [
  body('nombre')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El nombre no puede estar vacío')
    .isLength({ max: 150 })
    .withMessage('El nombre no puede superar los 150 caracteres'),

  body('correo')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Debe ingresar un correo válido')
    .isLength({ max: 150 })
    .withMessage('El correo no puede superar los 150 caracteres'),

  body('telefono')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El teléfono no puede estar vacío')
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede superar los 20 caracteres'),

  body('direccion')
    .optional({ nullable: true })
    .isString()
    .withMessage('La dirección debe ser texto'),
];

function manejarValidaciones(req, res, next) {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      exito: false,
      mensaje: 'Datos inválidos',
      errores: errores.array(),
    });
  }

  next();
}

module.exports = {
  validarIdCliente,
  validarCrearCliente,
  validarActualizarCliente,
  manejarValidaciones,
};