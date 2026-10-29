import React, { useState } from 'react';
import { SCHEDULE, PRICING_TIERS, PriceTier, ScheduleItem, STUDIO_INFO } from '../data/yogaData';
import { Calendar, CreditCard, Clock, MapPin, User, Check, Phone } from 'lucide-react';

interface ScheduleAndPricingProps {
  onSelectSlot: (slot: ScheduleItem) => void;
  onSelectTier: (tier: PriceTier) => void;
}

export const ScheduleAndPricing: React.FC<ScheduleAndPricingProps> = ({
  onSelectSlot,
  onSelectTier,
}) => {
  const [viewMode, setViewMode] = useState<'schedule' | 'pricing'>('schedule');
  const [selectedDay, setSelectedDay] = useState<string>('Tous');

  const days = ['Tous', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  const filteredSchedule = selectedDay === 'Tous'
    ? SCHEDULE
    : SCHEDULE.filter((item) => item.day === selectedDay);

  return (
    <section id="planning" className="py-20 lg:py-28 bg-[#F5F1EB] border-y border-[#E7E0D6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55695C]">
            <span>Organisation & Transparence</span>
            <span aria-hidden="true" className="text-[#8FA596]">·</span>
            <span>Sans Engagement Caché</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C231E]">
            Planning & Tarifs du Studio
          </h2>
          <p className="text-sm sm:text-base text-[#4A544C] leading-relaxed font-light">
            Une grille tarifaire claire et un emploi du temps équilibré. Les réservations se font directement
            avec Angèle pour garantir un accueil sur mesure et le respect des jauges de confort.
          </p>

          {/* View Mode Toggle (Interactive Filter Control) */}
          <div className="inline-flex items-center p-1 bg-[#E8E1D5] rounded-lg mt-6">
            <button
              type="button"
              onClick={() => setViewMode('schedule')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                viewMode === 'schedule'
                  ? 'bg-white text-[#1C231E] shadow-xs'
                  : 'text-[#5C665E] hover:text-[#1C231E]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Planning des cours</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('pricing')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                viewMode === 'pricing'
                  ? 'bg-white text-[#1C231E] shadow-xs'
                  : 'text-[#5C665E] hover:text-[#1C231E]'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Cartes & Tarifs</span>
            </button>
          </div>
        </div>

        {/* View 1: Schedule */}
        {viewMode === 'schedule' && (
          <div className="space-y-6">
            {/* Days Filter Buttons */}
            <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              {days.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setSelectedDay(d)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer border ${
                    selectedDay === d
                      ? 'bg-[#2E4034] text-white border-[#2E4034]'
                      : 'bg-white text-[#4A544C] border-[#E7E0D6] hover:bg-[#F3EFEA]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Schedule List */}
            <div className="bg-white border border-[#E7E0D6] rounded-2xl overflow-hidden shadow-xs divide-y divide-[#EFEAE2]">
              {filteredSchedule.map((slot) => (
                <div
                  key={slot.id}
                  className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                >
                  {/* Time & Day */}
                  <div className="flex items-start sm:items-center gap-4 min-w-[200px]">
                    <div className="w-10 h-10 rounded-lg bg-[#F3EFEA] text-[#2E4034] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#55695C]">
                        {slot.day}
                      </div>
                      <div className="font-mono text-sm sm:text-base font-semibold text-[#1C231E] tabular-nums">
                        {slot.time}
                      </div>
                    </div>
                  </div>

                  {/* Class Info */}
                  <div className="flex-1 space-y-1">
                    <h3 className="font-serif text-lg font-medium text-[#1C231E]">
                      {slot.className}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B756C]">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {slot.teacher}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {slot.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{slot.level}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                    <button
                      type="button"
                      onClick={() => onSelectSlot(slot)}
                      className="w-full md:w-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2E4034] bg-[#F3EFEA] hover:bg-[#2E4034] hover:text-white rounded-sm border border-[#D5CEC2] transition-colors cursor-pointer whitespace-nowrap text-center"
                    >
                      Demander ce créneau
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical notice */}
            <div className="p-4 sm:p-5 bg-white border border-[#E7E0D6] rounded-xl text-xs sm:text-sm text-[#4E564F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <strong className="text-[#1C231E]">Important : </strong>
                Pour respecter l’intimité du lieu et le confort de chacun, les effectifs sont limités.
                Contactez directement Angèle pour confirmer votre venue ou poser une question.
              </div>
              <a
                href={`tel:${STUDIO_INFO.phoneClean}`}
                className="inline-flex items-center gap-1.5 font-semibold text-[#2E4034] hover:underline whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{STUDIO_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}

        {/* View 2: Pricing */}
        {viewMode === 'pricing' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all border ${
                    tier.popular
                      ? 'border-[#2E4034] ring-2 ring-[#2E4034] shadow-md'
                      : 'border-[#E7E0D6] hover:border-[#C7BEAF] shadow-xs'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2E4034] text-white px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                      Le plus choisi
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C231E]">
                        {tier.title}
                      </h3>
                      <p className="text-xs text-[#6B756C] mt-1">{tier.ideal}</p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-4xl sm:text-5xl font-medium text-[#1C231E] tabular-nums">
                          {tier.price} €
                        </span>
                        {tier.period && (
                          <span className="text-xs text-[#7A847B]">/ {tier.period}</span>
                        )}
                      </div>
                      {tier.perClass && (
                        <div className="text-xs font-semibold text-[#55695C] mt-1">
                          Soit {tier.perClass}
                        </div>
                      )}
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-4 border-t border-[#EFEAE2]">
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E564F]">
                          <Check className="w-4 h-4 text-[#2E4034] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={() => onSelectTier(tier)}
                      className={`w-full py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                        tier.popular
                          ? 'bg-[#2E4034] text-white hover:bg-[#233228] shadow-xs'
                          : 'bg-[#F3EFEA] text-[#1C231E] hover:bg-[#2E4034] hover:text-white border border-[#D5CEC2]'
                      }`}
                    >
                      Choisir cette formule
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Formats Bar */}
            <div className="bg-white border border-[#E7E0D6] rounded-xl p-6 sm:p-8">
              <h4 className="font-serif text-xl text-[#1C231E] font-medium mb-3">
                Formules sur mesure & Tarifs spécifiques
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#4E564F]">
                <div>
                  <strong className="text-[#1C231E] block mb-1">Tarifs réduits & Solidaires</strong>
                  Pour étudiants, jeunes de moins de 25 ans et demandeurs d'emploi sur justificatif. Renseignements directs auprès d'Angèle.
                </div>
                <div>
                  <strong className="text-[#1C231E] block mb-1">Visio interactive en direct</strong>
                  Cours à distance avec corrections en temps réel pour pratiquer depuis chez vous ou en déplacement.
                </div>
                <div>
                  <strong className="text-[#1C231E] block mb-1">Entreprises & Événements (EVJF)</strong>
                  Ateliers bien-être sur mesure, réveil corporel en entreprise, sessions privatisées au studio ou au bord de l'océan.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
