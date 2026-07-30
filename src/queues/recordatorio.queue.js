// src/queues/recordatorio.queue.js

const { Queue } = require('bullmq');
const conexionBullMQ = require('../config/bullmq');

const colaRecordatorios = new Queue('recordatorios', {
  connection: conexionBullMQ,

  defaultJobOptions: {
    // El trabajo puede intentarse hasta tres veces.
    attempts: 3,

    // Espera progresivamente antes de cada reintento.
    backoff: {
      type: 'exponential',
      delay: 2000,
    },

    // Conserva los últimos 100 trabajos terminados.
    removeOnComplete: 100,

    // Conserva los últimos 100 trabajos fallidos.
    removeOnFail: 100,
  },
});

colaRecordatorios.on('error', (error) => {
  console.error(
    `❌ Error en la cola de recordatorios: ${error.message}`
  );
});

module.exports = colaRecordatorios;
