const fs = require('fs/promises');
const clienteService = require('../services/cliente.service');

async function eliminarArchivoTemporal(rutaArchivo) {
  if (!rutaArchivo) return;

  try {
    await fs.unlink(rutaArchivo);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(
        'No se pudo eliminar la evidencia temporal:',
        error.message
      );
    }
  }
}

async function crear(req, res) {
  try {
    const idOperacion =
      req.get('X-Idempotency-Key') || null;

    const cliente = await clienteService.crearCliente(
      req.body,
      idOperacion
    );

    res.status(201).json({
      exito: true,
      mensaje: 'Cliente creado correctamente',
      datos: cliente,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message || 'Error al crear el cliente',
    });
  }
}

async function listar(req, res) {
  try {
    const clientes =
      await clienteService.listarClientes();

    res.status(200).json({
      exito: true,
      mensaje: 'Clientes obtenidos correctamente',
      datos: clientes,
    });
  } catch (error) {
    res.status(500).json({
      exito: false,
      mensaje: 'Error al obtener los clientes',
    });
  }
}

async function obtenerPorId(req, res) {
  try {
    const cliente =
      await clienteService.obtenerClientePorId(
        req.params.id
      );

    res.status(200).json({
      exito: true,
      mensaje: 'Cliente obtenido correctamente',
      datos: cliente,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al obtener el cliente',
    });
  }
}

async function actualizar(req, res) {
  try {
    const cliente =
      await clienteService.actualizarCliente(
        req.params.id,
        req.body
      );

    res.status(200).json({
      exito: true,
      mensaje: 'Cliente actualizado correctamente',
      datos: cliente,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al actualizar el cliente',
    });
  }
}

async function eliminar(req, res) {
  try {
    await clienteService.eliminarCliente(
      req.params.id
    );

    res.status(200).json({
      exito: true,
      mensaje: 'Cliente eliminado correctamente',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al eliminar el cliente',
    });
  }
}

async function subirEvidencia(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        exito: false,
        mensaje:
          'Debe seleccionar una imagen de evidencia',
      });
    }

    const cliente =
      await clienteService.guardarEvidenciaCliente(
        req.params.id,
        req.file.filename
      );

    return res.status(200).json({
      exito: true,
      mensaje: 'Evidencia guardada correctamente',
      datos: cliente,
    });
  } catch (error) {
    await eliminarArchivoTemporal(req.file?.path);

    return res.status(error.statusCode || 500).json({
      exito: false,
      mensaje:
        error.message ||
        'Error al guardar la evidencia del cliente',
    });
  }
}

module.exports = {
  crear,
  listar,
  obtenerPorId,
  actualizar,
  eliminar,
  subirEvidencia,
};