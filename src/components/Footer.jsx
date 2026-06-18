import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coal-900 border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-flame-500 rounded-full flex items-center justify-center">
              <Flame size={14} className="text-white" />
            </div>
            <span className="font-display text-xl tracking-widest ember-text">BURGER STATION</span>
            <span className="text-flame-500 font-display">92</span>
          </div>

          {/* Address */}
          <p className="text-white/30 text-sm text-center">
            3 Avenue Gambetta · 92270 Bois-Colombes
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/burger.station92/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/10 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a
              href="https://www.ubereats.com/fr/store/burger-station-92/Y7Fk9FgrTLmu-XuhWhAMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-flame-400 transition-colors uppercase tracking-widest"
            >
              Uber Eats
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-white/20 text-xs">
          © {new Date().getFullYear()} Burger Station 92 · Bois-Colombes · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
