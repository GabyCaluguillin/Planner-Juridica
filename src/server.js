// src/server.js
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const protectedRoutes = require('./routes/protected.routes');
const clienteRoutes = require('./routes/cliente.routes');
const prisma = require('./config/prisma');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer datos JSON
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/clientes', clienteRoutes);

// Ruta de prueba de conexión
app.get('/api/health', (req, res) => {
  res.json({
    exito: true,
    mensaje: 'Servidor y base de datos conectados correctamente ✅'
  });
});

// Importaremos las rutas más adelante
// app.use('/api/usuarios', require('./routes/usuario.routes'));
// app.use('/api/casos', require('./routes/caso.routes'));

// Iniciar servidor
app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log(`🚀 Servidor ejecutándose en: http://localhost:${PORT}`);
    console.log(`🗄️  Conectado a PostgreSQL: planner_juridica`);
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
});