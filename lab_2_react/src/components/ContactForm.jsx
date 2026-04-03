import { useState, useEffect } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Відкриття модалки через 1 хвилину
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer); // очищення таймера при демонтажі
  }, []);

  if (!isOpen) return null; // якщо модалка закрита, нічого не рендеримо

  return (
    <>
      {/* Фон під модалкою */}
      <div 
        className="fixed inset-0 bg-black/70 z-40"
        onClick={() => setIsOpen(false)} // закриття при кліку на фон
      ></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white p-8 rounded-xl border border-slate-700 shadow-lg z-50 w-11/12 max-w-md">
        <h2 className="text-center text-2xl text-sky-400 mb-6">Форма зворотнього зв'язку</h2>
        <form action="https://formspree.io/f/xgoplpyk" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Ім’я" required className="w-full p-2 rounded border border-slate-600 bg-slate-900 text-white" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-2 rounded border border-slate-600 bg-slate-900 text-white" />
          <input type="tel" name="phone" placeholder="Номер телефону" className="w-full p-2 rounded border border-slate-600 bg-slate-900 text-white" />
          <textarea name="message" placeholder="Повідомлення" required className="w-full p-2 rounded border border-slate-600 bg-slate-900 text-white min-h-[80px]"></textarea>
          <button type="submit" className="w-full p-2 rounded bg-sky-400 text-slate-900 font-bold hover:bg-sky-500 transition-colors">Відправити</button>
        </form>
        <button 
          onClick={() => setIsOpen(false)} 
          className="mt-4 w-full p-2 rounded border border-slate-600 bg-slate-700 hover:bg-slate-600 transition-colors"
        >
          Закрити
        </button>
      </div>
    </>
  );
}

export default ContactForm;