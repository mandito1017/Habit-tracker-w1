const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

console.log("Iniciando servidor...");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a MongoDB 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("❌ Error de conexión a MongoDB:", err);
  });

// Ruta inicial
app.get('/', (req, res) => {
  res.send('🚀 Servidor Express funcionando');
});

// Rutas de hábitos
const habitRoutes = require('./routes/habits');
app.use('/api/habits', habitRoutes);

// Arrancar servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});