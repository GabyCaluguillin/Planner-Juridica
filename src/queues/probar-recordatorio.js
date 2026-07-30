// src/queues/probar-recordatorio.js

const colaRecordatorios = require('./recordatorio.queue');

async function agregarRecordatorioDePrueba() {
  try {
    const trabajo = await colaRecordatorios.add(
      'enviar-recordatorio',
      {
        destinatario: 'admin@planner.com',
        asunto: 'Audiencia próxima',
        mensaje: 'Tiene una audiencia programada para mañana.',
        fechaEnvio: new Date().toISOString(),
      }
    );

    console.log('✅ Recordatorio agregado a la cola');
    console.log(`📌 Trabajo ID: ${trabajo.id}`);
  } catch (error) {
    console.error(
      `❌ No se pudo agregar el recordatorio: ${error.message}`
    );
  } finally {
    await colaRecordatorios.close();
  }
}

agregarRecordatorioDePrueba();
