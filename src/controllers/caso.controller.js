// src/controllers/caso.controller.js

const casoService = require('../services/caso.service');

// Crear un caso jurídico
async function crear(req, res) {
  try {
    const caso = await casoService.crearCaso(
      req.body,
      req.usuario
    );

    return res.status(201).json({
      exito: true,
      mensaje: 'Caso jurídico creado correctamente',
      datos: caso,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      exito: false,
      mensaje: error.message || 'Error al crear el caso jurídico',
    });
  }
}

// Listar casos con la consulta optimizada
async function listar(req, res) {
  try {
    const inicio = process.hrtime.bigint();

    const casos = await casoService.listarCasos(
      req.usuario
    );

    const fin = process.hrtime.bigint();
    const tiempoMs = Number(fin - inicio) / 1_000_000;

    return res.status(200).json({
      exito: true,
      mensaje: 'Casos jurídicos obtenidos correctamente',
      optimizacion: 'Eager loading mediante select de Prisma',
      tiempoMs: Number(tiempoMs.toFixed(3)),
      total: casos.length,
      datos: casos,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al obtener los casos jurídicos',
    });
  }
}

// Listar casos mediante la consulta N+1 sin optimizar.
// Esta ruta se utilizará únicamente para comparar rendimiento.
async function listarSinOptimizar(req, res) {
  try {
    const inicio = process.hrtime.bigint();

    const casos =
      await casoService.listarCasosSinOptimizar(
        req.usuario
      );

    const fin = process.hrtime.bigint();
    const tiempoMs = Number(fin - inicio) / 1_000_000;

    return res.status(200).json({
      exito: true,
      mensaje:
        'Casos obtenidos mediante consulta sin optimizar',
      optimizacion: 'Sin eager loading: demostración de N+1',
      tiempoMs: Number(tiempoMs.toFixed(3)),
      total: casos.length,
      datos: casos,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al ejecutar la consulta sin optimizar',
    });
  }
}

// Obtener un caso por ID
async function obtenerPorId(req, res) {
  try {
    const caso = await casoService.obtenerCasoPorId(
      req.params.id,
      req.usuario
    );

    return res.status(200).json({
      exito: true,
      mensaje: 'Caso jurídico obtenido correctamente',
      datos: caso,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al obtener el caso jurídico',
    });
  }
}

// Actualizar parcialmente un caso jurídico
async function actualizar(req, res) {
  try {
    const caso = await casoService.actualizarCaso(
      req.params.id,
      req.body,
      req.usuario
    );

    return res.status(200).json({
      exito: true,
      mensaje: 'Caso jurídico actualizado correctamente',
      datos: caso,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al actualizar el caso jurídico',
    });
  }
}

// Eliminar un caso jurídico
async function eliminar(req, res) {
  try {
    const caso = await casoService.eliminarCaso(
      req.params.id,
      req.usuario
    );

    return res.status(200).json({
      exito: true,
      mensaje: 'Caso jurídico eliminado correctamente',
      datos: caso,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al eliminar el caso jurídico',
    });
  }
}

module.exports = {
  crear,
  listar,
  listarSinOptimizar,
  obtenerPorId,
  actualizar,
  eliminar,
};
