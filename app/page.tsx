import HabitList from "./components/HabitList";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950 sticky top-0">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
              🌿
            </div>
            <span className="font-bold text-white text-lg">HabitFlow</span>
          </div>
          <span className="text-slate-400 text-sm">Semana 3</span>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Buenos días 👋
          </h1>
          <p className="text-slate-400">
            Pequeños pasos diarios crean grandes cambios.
          </p>

          {/* Frase del libro */}
          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 flex gap-4 items-center">
            <span className="text-3xl">📖</span>
            <div>
              <p className="text-slate-300 text-sm italic">
                "El éxito es el producto de los hábitos diarios, no de las transformaciones drásticas ocasionales."
              </p>
              <p className="text-slate-500 text-xs mt-1">— James Clear, Hábitos Atómicos</p>
            </div>
          </div>
        </div>

        {/* Lista de hábitos desde Redux */}
        <HabitList />

        <footer className="mt-12 text-center text-slate-600 text-xs pb-8">
          Entrega Semana 3 · Next.js + Tailwind CSS + Redux
        </footer>
      </div>
    </main>
  );
}