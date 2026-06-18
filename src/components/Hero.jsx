import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layered */}
      <div className="absolute inset-0 bg-gradient-to-br from-coal-900 via-coal-800 to-coal-900" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(249,115,22,0.12),transparent)]" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Smoke/steam circles */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-flame-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        

        {/* Main title */}
        <div
          ref={titleRef}
          className="transition-all duration-1000"
          style={{ opacity: 0, transform: 'translateY(50px)' }}
        >
          <h1 className="font-display text-[clamp(60px,14vw,180px)] leading-none tracking-wider mb-2">
            <span className="ember-text">BURGER</span>
          </h1>
          <h1 className="font-display text-[clamp(60px,14vw,180px)] leading-none tracking-wider text-white mb-2">
            STATION
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-flame-500/50" />
            <span className="font-display text-[clamp(40px,8vw,100px)] ember-text">92</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-flame-500/50" />
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-8 text-lg md:text-xl text-white/60 font-light max-w-lg mx-auto leading-relaxed">
          L'arrêt <span className="text-flame-400 font-semibold">obligatoire</span> pour un burger bien fat,<br />
          bien frais et ultra savoureux 🔥
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.ubereats.com/fr/store/burger-station-92/Y7Fk9FgrTLmu-XuhWhAMMA"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-flame-500 hover:bg-flame-600 text-white px-8 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-flame-500/40 hover:scale-105 active:scale-95 animate-glow-pulse"
          >
            <span className="flex items-center gap-2 justify-center">
              🛵 Commander maintenant
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/20 hover:border-flame-500/60 text-white/80 hover:text-white px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:bg-flame-500/10"
          >
            Voir le menu
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: '7+', label: 'Burgers signature' },
            { value: '3+', label: 'Pizzas artisanales' },
            { value: '100%', label: 'Fait maison' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl ember-text">{stat.value}</div>
              <div className="text-white/40 text-xs mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
