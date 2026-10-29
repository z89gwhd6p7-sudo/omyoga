import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/yogaData';

interface QuickMobileBarProps {
  onOpenBooking: () => void;
}

export const QuickMobileBar: React.FC<QuickMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E7E0D6] px-4 py-2.5 shadow-lg">
      <div className="flex items-center gap-2.5 max-w-sm mx-auto">
        <a
          href={`tel:${STUDIO_INFO.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#1C231E] bg-[#F3EFEA] border border-[#D5CEC2] rounded-sm transition-colors active:bg-[#E7E0D6]"
          aria-label="Appeler le studio"
        >
          <Phone className="w-3.5 h-3.5 text-[#2E4034]" />
          <span>Appeler</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm transition-colors active:bg-[#233228]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Réserver</span>
        </button>
      </div>
    </div>
  );
};
