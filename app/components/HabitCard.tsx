"use client";

import { Habit } from "../store/slices/habitsSlice";
import { useAppDispatch } from "../store/hooks";
import { markDone } from "../store/slices/habitsSlice";
import ProgressBar from "./ProgressBar";

interface HabitCardProps {
  habit: Habit;
  index: number;
}

export default function HabitCard({ habit, index }: HabitCardProps) {
  const dispatch = useAppDispatch();

  const handleDone = () => {
    dispatch(markDone(habit.id));
  };

  if (!habit) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-slate-600 transition-all duration-300">
      
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-2xl">
            {habit.icon}
          </div>
          <div>
            <h3 className="font-semibold text-white text-base">
              {habit.name}
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              {habit.description}
            </p>
          </div>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full border bg-slate-800 text-slate-300 border-slate-700 whitespace-nowrap">
          {habit.category}
        </span>
      </div>

      <ProgressBar currentDays={habit.currentStreak} targetDays={habit.targetDays} />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-1.5">
          <span className="text-amber-400 text-sm">🔥</span>
          <span className="font-bold text-white text-sm">{habit.currentStreak}</span>
          <span className="text-slate-400 text-xs">días</span>
        </div>

        <button
          onClick={handleDone}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 border border-green-600"
        >
          ✓ Done
        </button>
      </div>
    </div>
  );
}