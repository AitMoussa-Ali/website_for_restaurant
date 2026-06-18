import { useEffect, useRef } from 'react';

const burgers = [
  {
    name: 'Le Titane Gourmand',
    subtitle: 'Pour les vrais',
    desc: '2 steaks hachés, bacon double, 2 cheddars, oignons caramélisés, sauce BBQ maison. Le colosse de la carte.',
    tag: 'XXL',
    emoji: '💪',
    accent: '#f97316',
  },
  {
    name: "L'Avocado Chicken",
    subtitle: 'Le favori',
    desc: 'Poulet pané croustillant, guacamole frais, mozzarella fondante, cheddar et sauce maison. Frais et savoureux.',
    tag: 'Coup de cœur',
    emoji: '🥑',
    accent: '#22c55e',
  },
  {
    name: 'Le Surf & Turf',
    subtitle: 'L\'exception',
    desc: 'Bavette + crevettes grillées, fromage bleu, avocat crémeux, sauce aiolli. Terre et mer se rencontrent.',
    tag: 'Premium',
    emoji: '🦐',
    accent: '#38bdf8',
  },
];

export default function Signatures() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nos-burgers" className="py-24 px-6 bg-gradient-to-b from-coal-900 to-coal-800">
      <div className="max-w-6xl mx-auto section-reveal" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-flame-400 text-sm uppercase tracking-[4px] font-semibold mb-3">Incontournables</p>
          <h2 className="font-display text-6xl md:text-8xl tracking-wider">
            NOS <span className="ember-text">SIGNATURES</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            Pain moelleux, steak grillé à la perfection, sauces 100% maison.
            Embarque pour un aller simple vers le kiff.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {burgers.map((burger, i) => (
            <div
              key={burger.name}
              className="group relative bg-coal-800 rounded-3xl p-8 border border-white/5 hover:border-white/15 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 cursor-default overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Accent glow */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: burger.accent }}
              />

              {/* Emoji big */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {burger.emoji}
              </div>

              {/* Tag */}
              <div
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                style={{ background: `${burger.accent}20`, color: burger.accent, border: `1px solid ${burger.accent}40` }}
              >
                {burger.tag}
              </div>

              <h3 className="font-display text-3xl tracking-wide text-white mb-1">{burger.name}</h3>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">{burger.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed">{burger.desc}</p>

              {/* Bottom line accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${burger.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
