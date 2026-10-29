import React, { useState } from 'react';
import { X, CheckCircle, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/yogaData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialClass,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [choice, setChoice] = useState(initialClass || 'Cours d’essai (16 €)');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#E7E0D6] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6B756C] hover:text-[#1C231E] p-1.5 rounded-md hover:bg-[#F3EFEA] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-[#2E4034]/10 text-[#2E4034] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#1C231E]">
              Demande transmise !
            </h3>
            <p className="text-xs sm:text-sm text-[#4E564F] leading-relaxed">
              Merci {name}. Votre souhait pour <strong>{choice}</strong> a bien été reçu.
              Angèle vous contacte très rapidement par SMS ou appel au {phone}.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm hover:bg-[#233228]"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#55695C]">
                Studio La Rochelle · 1 bis rue Fleuriau
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1C231E] mt-1">
                Réserver une séance
              </h3>
              <p className="text-xs text-[#6B756C] mt-1">
                Tarif découverte à 16 € · Matériel complet fourni sur place
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Marie Laurent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1">
                  Téléphone (pour validation SMS) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="06 12 34 56 78"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="marie@exemple.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1">
                  Formule ou Cours
                </label>
                <select
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034] text-[#1C231E]"
                >
                  <option value="Cours d’essai (16 €)">Cours d’essai découverte (16 €)</option>
                  <option value="Carte 6 cours (80 €)">Carte 6 cours (80 €)</option>
                  <option value="Carte 10 cours (139 €)">Carte 10 cours (139 €)</option>
                  <option value="Carte 20 cours (269 €)">Carte 20 cours (269 €)</option>
                  <option value="Cours Particulier Solo (49 €)">Cours Particulier Solo (49 €)</option>
                  <option value="Hatha Yoga Traditionnel">Hatha Yoga Traditionnel</option>
                  <option value="Yin Yoga & Bain Sonore">Yin Yoga & Bain Sonore</option>
                  <option value="Vinyasa Flow">Vinyasa Flow</option>
                  <option value="Pilates & Renforcement">Pilates & Renforcement</option>
                  <option value="Yogathérapie">Yogathérapie & Accompagnement</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm hover:bg-[#233228] transition-colors cursor-pointer"
                >
                  {loading ? 'Validation en cours...' : 'Confirmer ma demande de réservation'}
                </button>
              </div>
            </form>

            <div className="pt-2 border-t border-[#EFEAE2] flex items-center justify-between text-xs text-[#6B756C]">
              <span>Ou appelez directement :</span>
              <a
                href={`tel:${STUDIO_INFO.phoneClean}`}
                className="font-semibold text-[#2E4034] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{STUDIO_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
