// src/config/redis.js

const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: Number(process.env.REDIS_PORT) || 6379,

  // Evita reintentos ilimitados si Redis deja de responder.
  maxRetriesPerRequest: 3,

  retryStrategy(intentos) {
    return Math.min(intentos * 200, 2000);
  },
});

redis.on('connect', () => {
  console.log('🔄 Conectando con Redis...');
});

redis.on('ready', () => {
  console.log('⚡ Redis conectado correctamente');
});

redis.on('error', (error) => {
  console.error('❌ Error de Redis:', error.message);
});

module.exports = redis;
