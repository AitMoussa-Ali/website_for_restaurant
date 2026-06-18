import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Copy, Check } from 'lucide-react';

const PHONE = ''; // Not publicly listed
const ADDRESS = '3 Avenue Gambetta, 92270 Bois-Colombes';
const INSTAGRAM = 'https://www.instagram.com/burger.station92/';
const GOOGLE_MAPS = 'https://www.google.com/maps/search/3+Avenue+Gambetta+92270+Bois-Colombes';

export default function Contact() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-coal-800">
      <div className="max-w-5xl mx-auto section-reveal" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-flame-400 text-sm uppercase tracking-[4px] font-semibold mb-3">On est là</p>
          <h2 className="font-display text-6xl md:text-8xl tracking-wider text-white">
            NOUS <span className="ember-text">TROUVER</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map / Address card */}
          <div className="gradient-border rounded-3xl overflow-hidden group">
            {/* Map embed */}
            <div className="h-56 bg-coal-700 relative overflow-hidden">
              <iframe
                title="Burger Station 92 map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.8!2d2.2722!3d48.9204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3+Avenue+Gambetta%2C+92270+Bois-Colombes!5e0!3m2!1sfr!2sfr!4v1700000000000"
                className="w-full h-full border-0 opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-flame-500/5" />
            </div>

            <div className="p-7">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-flame-500/20 border border-flame-500/30 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-flame-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Adresse</p>
                  <p className="text-white font-semibold">3 Avenue Gambetta</p>
                  <p className="text-white/70">92270 Bois-Colombes</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={GOOGLE_MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-flame-500 hover:bg-flame-600 text-white py-3 rounded-full font-semibold text-sm text-center transition-all duration-200 hover:shadow-lg hover:shadow-flame-500/30 active:scale-95"
                >
                  📍 Ouvrir dans Maps
                </a>
                <button
                  onClick={copyAddress}
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all duration-200 text-white/60 hover:text-white"
                  title="Copier l'adresse"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Contacts + social */}
          <div className="flex flex-col gap-4">
            {/* Phone */}
            <a
              href="tel:+33"
              className="group gradient-border rounded-2xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-flame-500/15 border border-flame-500/25 rounded-2xl flex items-center justify-center group-hover:bg-flame-500/25 transition-colors duration-200 shrink-0">
                <Phone size={22} className="text-flame-400" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Téléphone</p>
                <p className="text-white font-bold text-lg group-hover:text-flame-300 transition-colors">Nous appeler</p>
                <p className="text-white/50 text-sm">Disponible aux heures d'ouverture</p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-flame-400 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group gradient-border rounded-2xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Instagram</p>
                <p className="text-white font-bold text-lg group-hover:text-pink-300 transition-colors">@burger.station92</p>
                <p className="text-white/50 text-sm">Photos, actu, nouveautés</p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-pink-400 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Uber Eats */}
            <a
              href="https://www.ubereats.com/fr/store/burger-station-92/Y7Fk9FgrTLmu-XuhWhAMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="group gradient-border rounded-2xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#06C167]/15 border border-[#06C167]/25 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[#06C167]/25 transition-colors shrink-0">
                🛵
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Commandes</p>
                <p className="text-white font-bold text-lg group-hover:text-[#06C167] transition-colors">Uber Eats</p>
                <p className="text-white/50 text-sm">Livraison à domicile</p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-[#06C167] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Hours */}
            <div className="gradient-border rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Horaires</p>
              <div className="space-y-2">
                {[
                  { day: 'Lundi – Vendredi', hours: '11h00 – 22h00' },
                  { day: 'Samedi', hours: '11h00 – 23h00' },
                  { day: 'Dimanche', hours: '12h00 – 22h00' },
                ].map(h => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-white/60">{h.day}</span>
                    <span className="text-flame-400 font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
