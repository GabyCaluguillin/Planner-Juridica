// src/routes/protected.routes.js
const express = require('express');
const { autenticarUsuario } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/perfil', autenticarUsuario, (req, res) => {
  res.status(200).json({
    exito: true,
    mensaje: 'Acceso autorizado a la ruta protegida',
    usuario: req.usuario,
  });
});

module.exports = router;