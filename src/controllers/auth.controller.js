// src/controllers/auth.controller.js
const {
  registrarUsuario,
  iniciarSesion,
} = require('../services/auth.service');

async function registro(req, res) {
  try {
    const resultado = await registrarUsuario(req.body);

    res.status(201).json({
      exito: true,
      mensaje: 'Usuario registrado correctamente',
      datos: resultado,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al registrar el usuario',
    });
  }
}

async function login(req, res) {
  try {
    const resultado = await iniciarSesion(req.body);

    res.status(200).json({
      exito: true,
      mensaje: 'Inicio de sesión correcto',
      datos: resultado,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al iniciar sesión',
    });
  }
}

module.exports = {
  registro,
  login,
};