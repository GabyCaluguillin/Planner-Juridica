// src/server.js
const express = require('express');

const authRoutes = require('./routes/auth.routes');
const protectedRoutes = require('./routes/protected.routes');
const clienteRoutes = require('./routes/cliente.routes');
const usuarioRoutes = require('./routes/usuario.routes');
const casoRoutes = require('./routes/caso.routes');

const prisma = require('./config/prisma');
const redis = require('./config/redis');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer datos JSON
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/casos', casoRoutes);

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({
    exito: true,
    mensaje: 'Servidor, PostgreSQL y Redis funcionando correctamente ✅'
  });
});

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`🚀 Servidor ejecutándose en: http://localhost:${PORT}`);

  try {
    await prisma.$connect();
    console.log('🗄️  Conectado a PostgreSQL: planner_juridica');
  } catch (error) {
    console.error('❌ Error de conexión con PostgreSQL:', error.message);
  }

  try {
    const respuestaRedis = await redis.ping();
    console.log(`⚡ Redis conectado: ${respuestaRedis}`);
  } catch (error) {
    console.error('❌ Error de conexión con Redis:', error.message);
  }
});
