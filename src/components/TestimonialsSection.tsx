import React from 'react';
import { TESTIMONIALS } from '../data/yogaData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F1EB] border-t border-[#E7E0D6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55695C]">
            <span>Retours d'Expérience</span>
            <span aria-hidden="true" className="text-[#8FA596]">·</span>
            <span>Paroles d'Élèves</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C231E]">
            Ce qu’en disent les pratiquants
          </h2>
          <p className="text-sm sm:text-base text-[#4A544C] leading-relaxed font-light">
            Des habitués du quartier aux visiteurs de passage à La Rochelle, chacun trouve au studio un espace de confiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E7E0D6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#C4BCB0] transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#B0BCAE] stroke-[1.5]" />
                <p className="text-sm sm:text-base text-[#3A423C] leading-relaxed font-light italic">
                  « {t.text} »
                </p>
              </div>

              <div className="pt-6 border-t border-[#EFEAE2] mt-6">
                <div className="font-serif text-base font-medium text-[#1C231E]">{t.name}</div>
                <div className="text-xs text-[#6B756C] mt-0.5">{t.role} · <span className="text-[#55695C]">{t.practice}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
