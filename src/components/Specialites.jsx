import { useEffect, useRef } from 'react';

const specials = [
  {
    category: 'Pizzas Artisanales',
    emoji: '🍕',
    color: '#f97316',
    items: ['Quattro Formaggi', 'Burrata', 'Margherita', 'Tonatta', 'Végétarienne', 'Chicken', 'Campione'],
    desc: '7 pizzas cuites au four, avec des ingrédients frais et une pâte maison moelleuse.',
  },
  {
    category: 'Tacos Généreux',
    emoji: '🌮',
    color: '#f5c842',
    items: ['Taille M', 'Taille L', 'Taille XL'],
    desc: 'Des tacos bien garnis, sauce maison, viande fondante et fromage coulant. En M, L ou XL selon votre appétit.',
  },
  {
    category: 'Sandwichs Maison',
    emoji: '🥖',
    color: '#22c55e',
    items: ['Bœuf Mariné', 'Chicken Gourmand', 'Le Duo'],
    desc: 'Pain maison, viandes marinées, légumes frais. Simple, généreux, délicieux.',
  },
];

export default function Specialites() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="specialites" className="py-24 px-6">
      <div className="max-w-6xl mx-auto section-reveal" ref={ref}>
        <div className="text-center mb-14">
          <p className="text-flame-400 text-sm uppercase tracking-[4px] font-semibold mb-3">Au-delà du burger</p>
          <h2 className="font-display text-6xl md:text-8xl tracking-wider">
            NOS <span className="ember-text">SPÉCIALITÉS</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-gold to-flame-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specials.map((s, i) => (
            <div
              key={s.category}
              className="bg-coal-800 border border-white/5 rounded-3xl p-8 hover:border-white/15 transition-all duration-500 hover:scale-[1.02] group cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top */}
              <div className="mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {s.emoji}
                </div>
                <h3 className="font-display text-3xl tracking-wide text-white mb-2">{s.category}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${s.color}40, transparent)` }} />

              {/* Items */}
              <ul className="space-y-2">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/75 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div
                className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                style={{ color: `${s.color}80` }}
              >
                <span className="group-hover:tracking-[3px] transition-all duration-500" style={{ color: s.color }}>
                  {s.items.length} recettes disponibles
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}