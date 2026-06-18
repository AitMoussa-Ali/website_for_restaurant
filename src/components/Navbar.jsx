import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const links = ['Menu', 'Nos Burgers', 'Spécialités', 'Commander', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (section) => {
    const el = document.getElementById(section.toLowerCase().replace(' ', '-').replace('é', 'e').replace('è', 'e'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-coal-900/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-flame-500 rounded-full flex items-center justify-center animate-glow-pulse">
            <Flame size={16} className="text-white" />
          </div>
          <span className="font-display text-2xl tracking-widest ember-text">BURGER STATION</span>
          <span className="text-flame-500 font-display text-xl">92</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm text-white/60 hover:text-flame-400 transition-colors duration-200 font-medium tracking-wide uppercase hover:tracking-widest"
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://www.ubereats.com/fr/store/burger-station-92/Y7Fk9FgrTLmu-XuhWhAMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-flame-500 hover:bg-flame-600 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-flame-500/30 active:scale-95"
            >
              🛵 Commander
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-flame-400 transition-colors">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-coal-800/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="text-left text-white/70 hover:text-flame-400 py-2 border-b border-white/5 transition-colors font-medium uppercase tracking-wide text-sm">
              {link}
            </button>
          ))}
          <a
            href="https://www.ubereats.com/fr/store/burger-station-92/Y7Fk9FgrTLmu-XuhWhAMMA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-flame-500 text-white text-center py-3 rounded-full font-semibold"
          >
            🛵 Commander sur Uber Eats
          </a>
        </div>
      </div>
    </nav>
  );
}
