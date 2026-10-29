import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/yogaData';
import { Award, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="a-propos" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E7E0D6] bg-[#EFEAE2] shadow-sm aspect-3/4 max-w-md mx-auto lg:max-w-none">
              {!imageError ? (
                <img
                  src="/src/assets/images/angele_yoga_portrait_1793253492291.jpg"
                  alt="Angèle, professeure et fondatrice d'Angèle Om Yoga à La Rochelle"
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
                  <p className="font-serif text-2xl text-[#1C231E]">Angèle</p>
                  <p className="text-xs text-[#6B756C] mt-1">Professeure certifiée de Yoga & Thérapeute</p>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-[#E7E0D6] text-xs">
                <span className="font-serif text-base font-medium text-[#1C231E] block">Angèle</span>
                <span className="text-[#6B756C]">Fondatrice & Enseignante Principale</span>
              </div>
            </div>
          </div>

          {/* Biography & Vision Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55695C]">
              <span>Votre Enseignante</span>
              <span aria-hidden="true" className="text-[#8FA596]">·</span>
              <span>Parcours & Diplômes</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C231E] leading-[1.2]">
              Une pratique guidée par la douceur, l'anatomie et la bienveillance
            </h2>

            <div className="space-y-4 text-[#4A544C] leading-relaxed text-sm sm:text-base font-light">
              <p>
                Après plusieurs années d’immersion personnelle et de transmission, j’ai fondé le studio
                <strong> Angèle Om Yoga</strong> à La Rochelle pour offrir un refuge où l’on réapprend
                à respirer, à écouter les signaux subtils de son corps et à se reconnecter à son calme intérieur.
              </p>
              <p>
                Mon enseignement est enraciné dans les traditions du Hatha et du Vinyasa, enrichi d’une compréhension
                anatomique rigoureuse acquise en <strong>Yogathérapie</strong>. Je veille à ce que chaque élève,
                qu’il débute ou pratique depuis dix ans, trouve des variations adaptées à ses articulations et à son énergie du jour.
              </p>
            </div>

            {/* Quote */}
            <div className="p-6 bg-[#F8F6F2] rounded-xl border border-[#E7E0D6] italic font-serif text-base sm:text-lg text-[#2E362F] leading-snug">
              « Le yoga n’est pas une quête de posture idéale ou de souplesse spectaculaire, mais un chemin sincère
              de réconciliation avec soi-même, pas à pas, souffle après souffle. »
            </div>

            {/* Certifications Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1C231E] mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#2E4034]" />
                <span>Certifications et Titres Professionnels</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="p-4 bg-white border border-[#E7E0D6] rounded-xl space-y-1">
                    <div className="text-xs font-semibold text-[#1C231E]">{cert.title}</div>
                    <div className="text-[11px] font-medium text-[#55695C]">{cert.org}</div>
                    <div className="text-[11px] text-[#6B756C] leading-normal pt-1">{cert.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
