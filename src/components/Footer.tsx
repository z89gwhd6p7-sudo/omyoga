import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/yogaData';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  return (
    <footer className="bg-[#1C231E] text-[#D8DED9] pt-16 pb-24 md:pb-16 border-t border-[#2F3931]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#2F3931]/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl lg:text-3xl font-normal text-white block">
              Angèle Om Yoga
            </span>
            <p className="text-xs sm:text-sm text-[#A2ADA4] leading-relaxed max-w-sm font-light">
              Studio intime dédié à la pratique du Hatha, Yin, Vinyasa et à la Yogathérapie.
              Un havre de paix au 1 bis rue Fleuriau, 17000 La Rochelle.
            </p>
            <div className="text-xs text-[#89978C] space-y-1">
              <p>Certifiée Yoga Alliance International & Europe</p>
              <p>Habilitée Activité Physique sur Prescription Médicale (APSPM)</p>
            </div>
          </div>

          {/* Quick Nav Mirror */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A2ADA4]">
              <li><a href="#studio" className="hover:text-white transition-colors">Le Studio</a></li>
              <li><a href="#pratiques" className="hover:text-white transition-colors">Les Pratiques</a></li>
              <li><a href="#planning" className="hover:text-white transition-colors">Planning des cours</a></li>
              <li><a href="#planning" className="hover:text-white transition-colors">Grille des tarifs</a></li>
              <li><a href="#a-propos" className="hover:text-white transition-colors">À propos d'Angèle</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Accès</a></li>
            </ul>
          </div>

          {/* Practical & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Nous trouver
            </div>
            <div className="text-xs sm:text-sm text-[#A2ADA4] space-y-2 leading-relaxed">
              <p>
                <strong>Adresse :</strong><br />
                {STUDIO_INFO.address}<br />
                {STUDIO_INFO.city} (Au fond de la cour à droite)
              </p>
              <p>
                <strong>Téléphone :</strong><br />
                <a href={`tel:${STUDIO_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </p>
              <p>
                <strong>E-mail :</strong><br />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7F8D82] gap-4">
          <p>© {new Date().getFullYear()} Angèle Om Yoga. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Mentions Légales & Confidentialité
            </button>
            <span className="hidden sm:inline">·</span>
            <span>La Rochelle, Charente-Maritime</span>
          </div>
        </div>
      </div>

      {/* Mentions Légales Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#1C231E] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3">
              <h3 className="font-serif text-xl font-medium">Mentions Légales</h3>
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="text-sm font-semibold text-[#6B756C] hover:text-[#1C231E] p-1"
              >
                Fermer
              </button>
            </div>
            <div className="text-xs text-[#4A544C] space-y-3 leading-relaxed">
              <p>
                <strong>Éditeur du site :</strong><br />
                Angèle Om Yoga — Enseignante indépendante certifiée.<br />
                Siège : 1 bis rue Fleuriau, 17000 La Rochelle, France.<br />
                Téléphone : 06 08 66 07 00 · Contact : contact@angele.yoga
              </p>
              <p>
                <strong>Hébergement :</strong><br />
                Site statique conçu pour être hébergé sur GitHub Pages ou tout serveur web statique haute disponibilité.
              </p>
              <p>
                <strong>Données personnelles :</strong><br />
                Les données transmises via le formulaire de contact (nom, e-mail, téléphone) sont exclusivement utilisées pour répondre à votre demande de cours et ne sont en aucun cas cédées à des tiers.
              </p>
              <p>
                <strong>Certifications professionnelles :</strong><br />
                Professeur de Yoga certifiée Yoga Alliance International et Yoga Alliance Europe. Titulaire du CQP ALS AGEE (Ministère des Sports) et habilitation Activité Physique sur Prescription Médicale (APSPM).
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
