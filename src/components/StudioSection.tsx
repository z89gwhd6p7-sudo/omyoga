import React, { useState } from 'react';
import { Check, Sparkles, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/yogaData';

export const StudioSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const features = [
    {
      title: 'Effectifs limités à 8-10 personnes',
      desc: 'Pour un enseignement individualisé, loin des grandes salles bondées. Angèle prend le temps d\'ajuster chaque posture avec bienveillance et précision anatomique.',
    },
    {
      title: 'Matériel naturel et complet fourni',
      desc: 'Tapis confortables en matières éco-responsables, bolsters en lin, briques en liège, sangles et couvertures douillettes : vous n\'avez rien à transporter.',
    },
    {
      title: 'Un havre de paix en fond de cour',
      desc: 'Situé au 1 bis rue Fleuriau, à deux pas de la place de Verdun, le studio est abrité de toute nuisance sonore pour une immersion méditative totale.',
    },
    {
      title: 'Infusion bio & moment d’échange',
      desc: 'Chaque séance se prolonge paisiblement autour d’une tisane biologique pour reprendre contact avec le quotidien en douceur.',
    },
  ];

  return (
    <section id="studio" className="py-20 lg:py-28 bg-[#F5F1EB] border-y border-[#E7E0D6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55695C]">
              <span>Le Sanctuaire</span>
              <span aria-hidden="true" className="text-[#8FA596]">·</span>
              <span>La Rochelle</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C231E] leading-[1.2]">
              Un cocon de sérénité au cœur de la ville
            </h2>

            <p className="text-[#4A544C] leading-relaxed text-base sm:text-lg font-light">
              Pousser la porte du 1 bis rue Fleuriau, c'est s'offrir une parenthèse loin du tumulte urbain.
              Niché au fond d'une cour pavée confidentielle, le studio a été pensé comme un espace chaleureux
              et ressourçant où chacun évolue à son rythme, sans jugement ni esprit de compétition.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#2E4034]/10 text-[#2E4034] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C231E]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5C665E] leading-normal mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-[#55695C]">
              <MapPin className="w-4 h-4 shrink-0 text-[#2E4034]" />
              <span>{STUDIO_INFO.locationDetails} · {STUDIO_INFO.address}, {STUDIO_INFO.city}</span>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#DCD5C9] bg-[#EAE4D9] shadow-sm max-w-md w-full aspect-3/4 sm:aspect-4/5">
              {!imageError ? (
                <img
                  src="./assets/aistudio/Image_October_29__2026_-_7_12AM_7b05544d"
                  alt="Atmosphère intime et chaleureuse du studio Angèle Om Yoga à La Rochelle"
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
                  <p className="font-serif text-xl text-[#1C231E]">Le Cocon Fleuriau</p>
                  <p className="text-xs text-[#6B756C] mt-1">Espace dédié à la pratique et au bien-être</p>
                </div>
              )}

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-sm border border-[#E7E0D6] text-xs font-medium text-[#1C231E]">
                Le Studio · 1 bis rue Fleuriau
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
