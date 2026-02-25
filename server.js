// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// 🔥 Conexión a MongoDB Atlas
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ⚡ solo URI, sin useNewUrlParser ni useUnifiedTopology
    console.log("✅ Conectado a MongoDB Atlas");
    console.log("📂 Base de datos actual:", mongoose.connection.name);
    console.log("🔗 URI usada:", mongoose.connection.client.s.url);
  } catch (error) {
    console.error("❌ Error de conexión:", error);
    process.exit(1);
  }
}

connectDB();

// Modelo de Habit
const habitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true },
    streak: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Habit = mongoose.model('Habit', habitSchema);

// Rutas

// Ruta principal
app.get('/', (req, res) => {
  res.send('🚀 Servidor Express funcionando correctamente');
});

// Crear hábito
app.post('/api/habits', async (req, res) => {
  try {
    const { name, userId } = req.body;
    const habit = new Habit({ name, userId });
    await habit.save();
    res.status(201).json(habit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Listar hábitos
app.get('/api/habits', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});