import React, { useState } from 'react';
import { PRACTICES, YogaClass } from '../data/yogaData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PracticesSectionProps {
  onSelectPracticeForBooking: (practiceName: string) => void;
}

export const PracticesSection: React.FC<PracticesSectionProps> = ({
  onSelectPracticeForBooking,
}) => {
  const [activeId, setActiveId] = useState<string>(PRACTICES[0].id);
  const activePractice = PRACTICES.find((p) => p.id === activeId) || PRACTICES[0];

  const getIntensityColor = (intensity: YogaClass['intensity']) => {
    switch (intensity) {
      case 'Doux':
        return 'text-[#4A7C59]';
      case 'Modéré':
        return 'text-[#B07238]';
      case 'Dynamique':
        return 'text-[#A44330]';
      case 'Thérapeutique':
        return 'text-[#3E6B77]';
      default:
        return 'text-[#55695C]';
    }
  };

  return (
    <section id="pratiques" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55695C]">
            <span>Nos Disciplines</span>
            <span aria-hidden="true" className="text-[#8FA596]">·</span>
            <span>Pour Tous Niveaux</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C231E]">
            L’art du mouvement conscient
          </h2>
          <p className="text-sm sm:text-base text-[#4A544C] leading-relaxed font-light">
            Chaque pratique répond à un besoin spécifique : trouver le calme, fortifier les appuis,
            gagner en mobilité ou soulager des tensions persistantes.
          </p>
        </div>

        {/* Interactive Segmented Selector (Permitted interactive control with click handlers) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2">
          {PRACTICES.map((practice) => {
            const isSelected = practice.id === activeId;
            return (
              <button
                key={practice.id}
                type="button"
                onClick={() => setActiveId(practice.id)}
                className={`px-4 py-2.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#2E4034] text-white border-[#2E4034] shadow-xs'
                    : 'bg-white text-[#4A544C] border-[#E7E0D6] hover:bg-[#F3EFEA] hover:text-[#1C231E]'
                }`}
              >
                {practice.name}
              </button>
            );
          })}
        </div>

        {/* Practice Detail Showcase (Clean Bento card layout) */}
        <div className="bg-white border border-[#E7E0D6] rounded-2xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative bg-[#EFEAE2] min-h-[260px] lg:min-h-full">
              <img
                src="/src/assets/images/yoga_practice_yin_1793253493040.jpg"
                alt="Postures et accessoires de yoga dans l'ambiance du studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs uppercase tracking-widest opacity-80">Durée standard</div>
                  <div className="font-serif text-2xl font-normal">{activePractice.duration}</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Zero-Pill unboxed metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B756C]">
                  <span>Rythme : <strong className={getIntensityColor(activePractice.intensity)}>{activePractice.intensity}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>Durée : {activePractice.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>Matériel inclus</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C231E] font-medium">
                    {activePractice.name}
                  </h3>
                  <p className="text-sm font-medium text-[#55695C] mt-1">
                    {activePractice.subtitle}
                  </p>
                </div>

                <p className="text-[#3A423C] text-sm sm:text-base leading-relaxed font-light">
                  {activePractice.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1C231E] block">
                    Bénéfices constatés :
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A544C]">
                    {activePractice.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2E4034] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal for note */}
                <div className="p-4 bg-[#F8F6F2] rounded-lg border border-[#E7E0D6] text-xs text-[#4E564F]">
                  <strong className="text-[#1C231E]">Idéal pour : </strong>
                  {activePractice.idealFor}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-[#EFEAE2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <a
                  href="#planning"
                  className="text-xs font-semibold text-[#2E4034] hover:underline flex items-center gap-1.5"
                >
                  <span>Voir les créneaux dans le planning</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => onSelectPracticeForBooking(activePractice.name)}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm hover:bg-[#233228] transition-colors cursor-pointer"
                >
                  Réserver en {activePractice.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Quick Grid Overview (Subtle cards with editorial numbering) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRACTICES.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                p.id === activeId
                  ? 'bg-white border-[#2E4034] ring-1 ring-[#2E4034]'
                  : 'bg-white border-[#E7E0D6] hover:border-[#BDB4A5]'
              }`}
            >
              <div className="text-xs font-mono text-[#8C968E] mb-2">0{idx + 1}.</div>
              <h4 className="font-serif text-base font-medium text-[#1C231E] mb-1">{p.name}</h4>
              <p className="text-xs text-[#6B756C] line-clamp-2">{p.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
