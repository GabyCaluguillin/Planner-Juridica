// src/workers/recordatorio.worker.js

const { Worker } = require('bullmq');
const conexionBullMQ = require('../config/bullmq');

function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

const workerRecordatorios = new Worker(
  'recordatorios',

  async (trabajo) => {
    console.log(
      `🔔 Procesando recordatorio. Trabajo ID: ${trabajo.id}`
    );

    console.log('📦 Datos recibidos:', trabajo.data);

    await trabajo.updateProgress(50);

    // Simula el envío de una notificación o recordatorio.
    await esperar(1500);

    await trabajo.updateProgress(100);

    return {
      exito: true,
      mensaje: 'Recordatorio procesado correctamente',
      procesadoEn: new Date().toISOString(),
    };
  },

  {
    connection: conexionBullMQ,
    concurrency: 2,
  }
);

workerRecordatorios.on('ready', () => {
  console.log('👷 Worker de recordatorios listo');
});

workerRecordatorios.on(
  'completed',
  (trabajo, resultado) => {
    console.log(
      `✅ Trabajo ${trabajo.id} completado:`,
      resultado
    );
  }
);

workerRecordatorios.on(
  'failed',
  (trabajo, error) => {
    console.error(
      `❌ Trabajo ${trabajo?.id || 'desconocido'} falló:`,
      error.message
    );
  }
);

workerRecordatorios.on('error', (error) => {
  console.error(
    `❌ Error en el worker de recordatorios: ${error.message}`
  );
});

async function cerrarWorker() {
  console.log('🛑 Cerrando worker de recordatorios...');
  await workerRecordatorios.close();
  process.exit(0);
}

process.once('SIGINT', cerrarWorker);
process.once('SIGTERM', cerrarWorker);

module.exports = workerRecordatorios;
