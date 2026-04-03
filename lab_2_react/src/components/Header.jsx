function Header() {
  return (
    <header className="flex flex-col items-center bg-slate-900 text-white p-10 rounded-3xl shadow-2xl border-b-4 border-sky-500 mb-8">
      <h1 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
        ПАВЛО
      </h1>
      <p className="text-lg font-light tracking-widest uppercase text-slate-400 mb-6">
        Cybersecurity Student & Video Editor
      </p>
      <a href="mailto:pavlo@example.com" 
         className="bg-sky-600 hover:bg-sky-500 hover:scale-110 transition-transform px-8 py-3 rounded-full font-bold shadow-lg shadow-sky-500/20">
        Надіслати листа
      </a>
    </header>
  );
}
export default Header;