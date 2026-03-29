const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a MongoDB Atlas
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB Atlas');
    console.log('📁 Base de datos actual:', mongoose.connection.name);
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    process.exit(1);
  }
}

connectDB();

// Rutas
app.use('/api/habits', require('./routes/habits'));
app.use('/api/auth', require('./routes/auth'));

// Ruta principal
app.get('/', (req, res) => {
  res.send('🚀 Servidor Express funcionando correctamente');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});