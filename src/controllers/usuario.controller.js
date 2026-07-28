// src/controllers/usuario.controller.js

const usuarioService = require('../services/usuario.service');

// Obtener el perfil completo del usuario autenticado
async function obtenerPerfil(req, res) {
  try {
    const usuario = await usuarioService.obtenerUsuarioPorId(
      req.usuario.id
    );

    res.status(200).json({
      exito: true,
      mensaje: 'Perfil obtenido correctamente',
      datos: usuario,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al obtener el perfil',
    });
  }
}

// Listar todos los usuarios
async function listar(req, res) {
  try {
    const usuarios = await usuarioService.listarUsuarios();

    res.status(200).json({
      exito: true,
      mensaje: 'Usuarios obtenidos correctamente',
      datos: usuarios,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al obtener los usuarios',
    });
  }
}

// Obtener un usuario por su identificador
async function obtenerPorId(req, res) {
  try {
    const usuario = await usuarioService.obtenerUsuarioPorId(
      req.params.id
    );

    res.status(200).json({
      exito: true,
      mensaje: 'Usuario obtenido correctamente',
      datos: usuario,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al obtener el usuario',
    });
  }
}

// Actualizar un usuario
async function actualizar(req, res) {
  try {
    const usuario = await usuarioService.actualizarUsuario(
      req.params.id,
      req.body,
      req.usuario
    );

    res.status(200).json({
      exito: true,
      mensaje: 'Usuario actualizado correctamente',
      datos: usuario,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al actualizar el usuario',
    });
  }
}

// Eliminar un usuario
async function eliminar(req, res) {
  try {
    const usuario = await usuarioService.eliminarUsuario(
      req.params.id,
      req.usuario
    );

    res.status(200).json({
      exito: true,
      mensaje: 'Usuario eliminado correctamente',
      datos: usuario,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al eliminar el usuario',
    });
  }
}

module.exports = {
  obtenerPerfil,
  listar,
  obtenerPorId,
  actualizar,
  eliminar,
};
