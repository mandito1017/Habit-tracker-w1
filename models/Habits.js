const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  icon: { type: String, default: '📌' },
  category: { type: String, default: 'General' },
  targetDays: { type: Number, default: 66 },
  userId: { type: String, required: true },
  streak: { type: Number, default: 0 },
  lastCompletedDate: { type: Date, default: null },
  isCompleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Habit', habitSchema);