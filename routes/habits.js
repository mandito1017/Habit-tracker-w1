const express = require('express');
const router = express.Router();
const Habit = require('../models/Habits');
const authMiddleware = require('../middleware/auth');

// Obtener todos los hábitos del usuario autenticado
router.get('/', authMiddleware, async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.userId });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener hábitos', error });
  }
});

// Crear hábito
router.post('/', authMiddleware, async (req, res) => {
  try {
    const habit = new Habit({ ...req.body, userId: req.userId });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear hábito', error });
  }
});

// Marcar hábito como completado o reiniciar racha
router.put('/:id/done', authMiddleware, async (req, res) => {
  try {
    const habit = await Habit.findOne({ _id: req.params.id, userId: req.userId });
    if (!habit) return res.status(404).json({ message: 'Hábito no encontrado' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastCompleted = habit.lastCompletedDate
      ? new Date(habit.lastCompletedDate)
      : null;

    if (lastCompleted) {
      lastCompleted.setHours(0, 0, 0, 0);
      const diffDays = Math.floor((today - lastCompleted) / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        return res.status(400).json({ message: 'Ya completaste este hábito hoy' });
      } else if (diffDays === 1) {
        habit.streak += 1;
      } else {
        habit.streak = 1;
      }
    } else {
      habit.streak = 1;
    }

    habit.lastCompletedDate = today;
    habit.isCompleted = habit.streak >= habit.targetDays;
    await habit.save();

    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar hábito', error });
  }
});

// Eliminar hábito
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Habit.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ message: 'Hábito eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar hábito', error });
  }
});

module.exports = router;