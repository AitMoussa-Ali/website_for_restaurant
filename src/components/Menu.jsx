import { useState, useEffect, useRef } from 'react';

const categories = [
  {
    id: 'burgers',
    label: '🍔 Burgers',
    emoji: '🍔',
    items: [
      { name: 'Burger Façon US', desc: 'Pain brioché, steak haché bacon, cheddar, tomate, salade et sauce BBQ', tag: 'Bestseller', color: 'from-red-500/20 to-flame-600/20' },
      { name: "L'Avocado Chicken", desc: 'Pain brioché, poulet pané, guacamole, oignons caramélisés, tomate, salade, cheddar, mozzarella et sauce maison', tag: 'Coup de cœur', color: 'from-green-600/20 to-emerald-700/20' },
      { name: 'Le Pesto Burger', desc: 'Pain brioché, steak haché, tomate, oignons, salade, mozzarella et pesto', tag: 'Végétal', color: 'from-emerald-500/20 to-green-600/20' },
      { name: 'Le Burger Qui Rit', desc: 'Pain brioché, steak haché, tomate, oignons, pickles, œuf à cheval, Vache Qui Rit et sauce au poivre allégée maison', tag: 'Original', color: 'from-yellow-500/20 to-gold/20' },
      { name: 'Le Sweet Goat', desc: "Pain brioché, steak haché, tomate, oignons caramélisés, pickles, cheddar, chèvre gratiné au miel et sauce maison", tag: 'Gourmand', color: 'from-amber-500/20 to-yellow-600/20' },
      { name: 'Le Titane Gourmand', desc: 'Pain brioché, 2 steaks hachés, bacon, 2 cheddars, oignons caramélisés, tomate, salade, pickles et sauce BBQ maison', tag: 'XXL', color: 'from-flame-600/20 to-red-700/20' },
      { name: 'Le Surf & Turf', desc: 'Pain brioché, bavette, crevettes grillées, fromage bleu, avocat, oignons et sauce aiolli', tag: 'Premium', color: 'from-blue-500/20 to-cyan-600/20' },
    ],
  },
  {
    id: 'sandwichs',
    label: '🥖 Sandwichs',
    emoji: '🥖',
    items: [
      { name: 'Bœuf Mariné', desc: 'Pain maison, bœuf mariné, crudités, légumes grillés marinés, cheddar et sauce maison', tag: null, color: 'from-amber-600/20 to-flame-600/20' },
      { name: 'Chicken Gourmand', desc: 'Pain maison, poulet mariné, guacamole, salade, tomate, cheddar et sauce maison', tag: 'Populaire', color: 'from-yellow-500/20 to-amber-600/20' },
      { name: 'Le Duo', desc: 'Pain maison, poulet mariné, bœuf mariné, guacamole, salade, tomate, cheddar et sauce du chef', tag: 'Best Of', color: 'from-flame-500/20 to-orange-600/20' },
    ],
  },
  {
    id: 'pizzas',
    label: '🍕 Pizzas',
    emoji: '🍕',
    items: [
      { name: 'Quattro Formaggi', desc: 'Tomate, mozzarella, gorgonzola, parmesan et chèvre', tag: 'Fromage lover', color: 'from-yellow-400/20 to-amber-500/20' },
      { name: 'Burrata', desc: 'Tomate, mozzarella, burrata, roquette, tomates cerises et sauce pesto', tag: 'Premium', color: 'from-green-500/20 to-emerald-600/20' },
      { name: 'Margherita', desc: 'Tomate, mozzarella, basilic frais et huile d\'olive', tag: 'Classique', color: 'from-red-400/20 to-rose-500/20' },
      { name: 'Tonatta', desc: 'Tomate, mozzarella, thon et olives noires', tag: null, color: 'from-blue-400/20 to-indigo-500/20' },
      { name: 'Végétarienne', desc: 'Tomate, mozzarella, et légumes grillés (poivrons, aubergines, courgettes et champignons)', tag: 'Végé', color: 'from-emerald-400/20 to-green-500/20' },
      { name: 'Chicken', desc: 'Tomate, mozzarella, poulet mariné, poivrons et oignons', tag: 'Populaire', color: 'from-flame-400/20 to-orange-500/20' },
      { name: 'Campione', desc: 'Tomate, mozzarella, viande hachée et champignons', tag: null, color: 'from-amber-500/20 to-brown-600/20' },
    ],
  },
  {
    id: 'tacos',
    label: '🌮 Tacos',
    emoji: '🌮',
    items: [
      { name: 'Taille M', desc: 'Tacos garni avec les ingrédients de votre choix — sauce, viande, fromage fondu', tag: 'Individuel', color: 'from-yellow-500/20 to-flame-500/20' },
      { name: 'Taille L', desc: 'Grand tacos pour les appétits costauds — sauce, viande, fromage fondu et garnitures', tag: 'Généreux', color: 'from-flame-500/20 to-red-600/20' },
      { name: 'Taille XL', desc: 'Le géant ! Tacos XL avec double garniture, idéal pour partager ou les très gros appétits', tag: 'Méga', color: 'from-red-600/20 to-rose-700/20' },
    ],
  },
];

function MenuCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative gradient-border rounded-2xl p-5 cursor-default transition-all duration-300 overflow-hidden ${hovered ? 'scale-[1.02] shadow-xl shadow-flame-500/10' : ''}`}
    >
      {/* Bg gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-50'}`} />

      <div className="relative z-10">
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className={`font-bold text-base leading-tight transition-colors duration-200 ${hovered ? 'text-flame-300' : 'text-white'}`}>
            {item.name}
          </h3>
          {item.tag && (
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest bg-flame-500/20 text-flame-300 border border-flame-500/30 px-2 py-0.5 rounded-full whitespace-nowrap">
              {item.tag}
            </span>
          )}
        </div>
        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
      </div>

      {/* Glow on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ boxShadow: 'inset 0 0 40px rgba(249,115,22,0.05)' }}
      />
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('burgers');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = categories.find(c => c.id === active);

  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-6xl mx-auto section-reveal" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-flame-400 text-sm uppercase tracking-[4px] font-semibold mb-3">Ce qu'on propose</p>
          <h2 className="font-display text-6xl md:text-8xl tracking-wider text-white">
            NOTRE <span className="ember-text">MENU</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-flame-500 to-gold rounded-full" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat.id
                  ? 'bg-flame-500 text-white shadow-lg shadow-flame-500/30 scale-105'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.items.map((item, i) => (
            <div key={item.name} style={{ animationDelay: `${i * 80}ms` }} className="animate-slide-up">
              <MenuCard item={item} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.ubereats.com/fr/store/burger-station-92/Y7Fk9FgrTLmu-XuhWhAMMA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-coal-700 border border-white/10 hover:border-flame-500/40 text-white/80 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-flame-500/10 group"
          >
            <span>Voir le menu complet sur Uber Eats</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}