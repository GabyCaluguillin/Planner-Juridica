// src/validators/caso.validator.js

const {
  body,
  param,
  validationResult,
} = require('express-validator');

const ESTADOS_PERMITIDOS = [
  'TRAMITE',
  'EN_PROCESO',
  'FINALIZADO',
  'ARCHIVADO',
];

// Validar el ID enviado en la URL
const validarIdCaso = [
  param('id')
    .isInt({ min: 1 })
    .withMessage(
      'El ID del caso debe ser un número entero válido'
    ),
];

// Validaciones para crear un caso jurídico
const validarCrearCaso = [
  body('numero')
    .trim()
    .notEmpty()
    .withMessage('El número del caso es obligatorio')
    .isLength({ max: 50 })
    .withMessage(
      'El número del caso no puede superar los 50 caracteres'
    ),

  body('asunto')
    .trim()
    .notEmpty()
    .withMessage('El asunto del caso es obligatorio'),

  body('tipo')
    .trim()
    .notEmpty()
    .withMessage('El tipo de caso es obligatorio')
    .isLength({ max: 50 })
    .withMessage(
      'El tipo de caso no puede superar los 50 caracteres'
    ),

  body('estado')
    .optional()
    .isIn(ESTADOS_PERMITIDOS)
    .withMessage(
      'El estado debe ser TRAMITE, EN_PROCESO, FINALIZADO o ARCHIVADO'
    ),

  body('fechaInicio')
    .notEmpty()
    .withMessage('La fecha de inicio es obligatoria')
    .isISO8601()
    .withMessage(
      'La fecha de inicio debe tener un formato válido'
    ),

  body('fechaCierre')
    .optional({ nullable: true })
    .isISO8601()
    .withMessage(
      'La fecha de cierre debe tener un formato válido'
    ),

  body('clienteId')
    .notEmpty()
    .withMessage('El cliente es obligatorio')
    .isInt({ min: 1 })
    .withMessage(
      'El ID del cliente debe ser un número entero válido'
    ),
];

// Validaciones para actualizar parcialmente un caso
const validarActualizarCaso = [
  body('numero')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El número del caso no puede estar vacío')
    .isLength({ max: 50 })
    .withMessage(
      'El número del caso no puede superar los 50 caracteres'
    ),

  body('asunto')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El asunto no puede estar vacío'),

  body('tipo')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El tipo de caso no puede estar vacío')
    .isLength({ max: 50 })
    .withMessage(
      'El tipo de caso no puede superar los 50 caracteres'
    ),

  body('estado')
    .optional()
    .isIn(ESTADOS_PERMITIDOS)
    .withMessage(
      'El estado debe ser TRAMITE, EN_PROCESO, FINALIZADO o ARCHIVADO'
    ),

  body('fechaInicio')
    .optional()
    .isISO8601()
    .withMessage(
      'La fecha de inicio debe tener un formato válido'
    ),

  body('fechaCierre')
    .optional({ nullable: true })
    .isISO8601()
    .withMessage(
      'La fecha de cierre debe tener un formato válido'
    ),

  body('clienteId')
    .optional()
    .isInt({ min: 1 })
    .withMessage(
      'El ID del cliente debe ser un número entero válido'
    ),
];

// Enviar los errores de validación encontrados
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
  validarIdCaso,
  validarCrearCaso,
  validarActualizarCaso,
  manejarValidaciones,
};
