// src/validators/usuario.validator.js

const { body, param, validationResult } = require('express-validator');

// Validar el ID enviado en la ruta
const validarIdUsuario = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('El ID del usuario debe ser un número entero válido'),
];

// Validar los datos enviados para actualizar un usuario
const validarActualizarUsuario = [
  body('nombre')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El nombre no puede estar vacío')
    .isLength({ max: 100 })
    .withMessage('El nombre no puede superar los 100 caracteres'),

  body('correo')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Debe ingresar un correo válido')
    .isLength({ max: 150 })
    .withMessage('El correo no puede superar los 150 caracteres')
    .normalizeEmail(),

  body('clave')
    .optional()
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

  body('rol')
    .optional()
    .isIn(['ADMINISTRADOR', 'ASISTENTE_LEGAL'])
    .withMessage(
      'El rol debe ser ADMINISTRADOR o ASISTENTE_LEGAL'
    ),
];

// Enviar los errores encontrados
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
  validarIdUsuario,
  validarActualizarUsuario,
  manejarValidaciones,
};
