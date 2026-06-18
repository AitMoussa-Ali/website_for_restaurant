import { useEffect, useRef } from 'react';
import { Smartphone, Clock, Star } from 'lucide-react';

export default function Commander() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="commander" className="py-24 px-6 relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.08),transparent)]" />

      <div className="max-w-4xl mx-auto section-reveal text-center relative z-10" ref={ref}>
        <p className="text-flame-400 text-sm uppercase tracking-[4px] font-semibold mb-3">Livraison & Commande</p>
        <h2 className="font-display text-6xl md:text-8xl tracking-wider text-white mb-4">
          COMMANDER
        </h2>
        <p className="text-white/50 max-w-md mx-auto leading-relaxed text-sm mb-16">
          Commandez depuis chez vous via Uber Eats — livré chaud à votre porte, directement depuis Bois-Colombes.
        </p>

        {/* Main CTA card */}
        <div className="gradient-border rounded-3xl p-10 mb-12 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-flame-500/5 to-gold/5 group-hover:from-flame-500/10 group-hover:to-gold/10 transition-all duration-500" />
          <div className="relative z-10">
            {/* Uber Eats logo-ish */}
            <div className="w-16 h-16 bg-[#06C167]/20 border border-[#06C167]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🛵
            </div>
            <h3 className="font-display text-4xl tracking-wide text-white mb-2">Uber Eats</h3>
            <p className="text-white/50 text-sm mb-8">Livraison rapide · Menu complet disponible</p>
            <a
              href="https://www.ubereats.com/fr/store/burger-station-92/Y7Fk9FgrTLmu-XuhWhAMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#06C167] hover:bg-[#05a657] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#06C167]/30 hover:scale-105 active:scale-95"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              Commander sur Uber Eats
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: <Smartphone size={20} />, title: 'Simple', desc: 'Commandez en quelques clics depuis votre téléphone' },
            { icon: <Clock size={20} />, title: 'Rapide', desc: 'Livraison express depuis Bois-Colombes' },
            { icon: <Star size={20} />, title: 'Frais', desc: 'Préparé à la commande, jamais réchauffé' },
          ].map(f => (
            <div key={f.title} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-flame-500/20 hover:bg-white/[0.05] transition-all duration-300">
              <div className="text-flame-400 mb-3 flex justify-center">{f.icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
              <div className="text-white/40 text-xs leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}