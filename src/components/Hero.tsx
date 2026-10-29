import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/yogaData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12 lg:mb-16">
          {/* Quiet unboxed kicker (no pill badge) */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55695C]">
            <span>La Rochelle Centre</span>
            <span aria-hidden="true" className="text-[#8FA596]">·</span>
            <span>Studio Fleuriau</span>
            <span aria-hidden="true" className="text-[#8FA596]">·</span>
            <span>Enseignement Certifié</span>
          </div>

          <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-6xl font-normal text-[#1C231E] leading-[1.15] text-balance">
            Retrouver l’harmonie du souffle et du mouvement
          </h1>

          <p className="text-base sm:text-lg text-[#4A544C] leading-relaxed max-w-2xl mx-auto font-light">
            Hatha Yoga, Yin Yoga, Vinyasa et Yogathérapie. Des séances bienveillantes en petit comité
            au fond d’une cour calme du centre-ville, en plein air et en cours particuliers.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm hover:bg-[#233228] transition-all cursor-pointer shadow-sm active:scale-[0.99] whitespace-nowrap"
            >
              Réserver un cours d'essai (16 €)
            </button>
            <a
              href="#planning"
              className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#2E4034] bg-white border border-[#D5CEC2] rounded-sm hover:bg-[#F3EFEA] hover:border-[#B8AFA1] transition-all whitespace-nowrap text-center"
            >
              Consulter le planning
            </a>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E7E0D6] bg-[#EFEAE2] shadow-sm aspect-16/9 max-w-5xl mx-auto">
          {!imageError ? (
            <img
              src="/src/assets/images/hero_yoga_larochelle_1793253490288.jpg"
              alt="Pratique sereine du yoga dans un espace lumineux et chaleureux avec vue sur la nature"
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#E7E0D6] p-8 text-center">
              <Sparkles className="w-10 h-10 text-[#55695C] mb-3" />
              <h2 className="font-serif text-2xl text-[#1C231E]">Studio Angèle Om Yoga</h2>
              <p className="text-sm text-[#55695C] mt-1">{STUDIO_INFO.address}, {STUDIO_INFO.city}</p>
            </div>
          )}

          {/* Subtle caption scrim */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col sm:flex-row sm:items-center sm:justify-between text-white text-xs gap-2">
            <span className="font-light tracking-wide opacity-95">
              1 bis rue Fleuriau · Au fond de la cour pavée · 17000 La Rochelle
            </span>
            <span className="opacity-80">
              Tapis & accessoires fournis sur place
            </span>
          </div>
        </div>

        {/* 4-Item Proof Bar below hero split (Zero-Pill Discipline, clean editorial text) */}
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 px-4 sm:px-8 bg-white border border-[#E7E0D6] rounded-xl text-center">
          <div className="space-y-1">
            <div className="font-serif text-xl sm:text-2xl text-[#1C231E] font-medium">Centre-Ville</div>
            <p className="text-xs text-[#6B756C]">Havre de paix au calme</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-xl sm:text-2xl text-[#1C231E] font-medium">8 à 10 max</div>
            <p className="text-xs text-[#6B756C]">Groupes intimistes</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-xl sm:text-2xl text-[#1C231E] font-medium">100% Certifié</div>
            <p className="text-xs text-[#6B756C]">Yoga Alliance & Santé</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-xl sm:text-2xl text-[#1C231E] font-medium">Dès 13,30 €</div>
            <p className="text-xs text-[#6B756C]">Tarifs clairs sans engagement</p>
          </div>
        </div>
      </div>

      {/* Gentle scroll indicator */}
      <div className="flex justify-center mt-8">
        <a
          href="#studio"
          aria-label="Défiler vers le studio"
          className="p-2 text-[#7E867E] hover:text-[#2E4034] transition-colors"
        >
          <ArrowDown className="w-5 h-5 animate-bounce opacity-60" />
        </a>
      </div>
    </section>
  );
};
