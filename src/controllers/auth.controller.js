const {
  registrarUsuario,
  iniciarSesion,
  renovarSesion,
} = require('../services/auth.service');

async function registro(req, res) {
  try {
    const resultado =
      await registrarUsuario(req.body);

    res.status(201).json({
      exito: true,
      mensaje:
          'Usuario registrado correctamente',
      datos: resultado,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
          error.message ||
          'Error al registrar el usuario',
    });
  }
}

async function login(req, res) {
  try {
    const resultado =
      await iniciarSesion(req.body);

    res.status(200).json({
      exito: true,
      mensaje:
          'Inicio de sesión correcto',
      datos: resultado,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
          error.message ||
          'Error al iniciar sesión',
    });
  }
}

async function refresh(req, res) {
  try {
    const resultado =
      await renovarSesion(
        req.body.refreshToken
      );

    res.status(200).json({
      exito: true,
      mensaje:
          'Sesión renovada correctamente',
      datos: resultado,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
          error.message ||
          'Error al renovar la sesión',
    });
  }
}

module.exports = {
  registro,
  login,
  refresh,
};