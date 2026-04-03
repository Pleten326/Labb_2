import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-900'} min-h-screen p-4 md:p-12 transition-colors duration-500 relative`}>
      
      {/* Кнопка для перемикання теми */}
      <button 
        onClick={toggleTheme} 
        className="absolute top-4 right-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors z-50"
      >
        {theme === 'dark' ? 'Денна тема' : 'Нічна тема'}
      </button>

      <div className="max-w-4xl mx-auto space-y-6">
        <Header />

        <main className="space-y-6">
          <Experience />
          <Education />
          <Reviews />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;