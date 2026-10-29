import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/yogaData';
import { Phone, Mail, MapPin, CheckCircle, Navigation, MessageSquare, Clock } from 'lucide-react';

interface ContactSectionProps {
  preselectedClassOrTier?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedClassOrTier,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    choice: preselectedClassOrTier || 'Cours d’essai (16 €)',
    level: 'Débutant',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedClassOrTier) {
      setFormData((prev) => ({ ...prev, choice: preselectedClassOrTier }));
    }
  }, [preselectedClassOrTier]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous clean submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      choice: 'Cours d’essai (16 €)',
      level: 'Débutant',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#55695C]">
            <span>Réservation Directe</span>
            <span aria-hidden="true" className="text-[#8FA596]">·</span>
            <span>À Votre Écoute</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C231E]">
            Réserver un cours ou poser une question
          </h2>
          <p className="text-sm sm:text-base text-[#4A544C] leading-relaxed font-light">
            Pour un accompagnement serein et personnalisé, Angèle vous répond directement
            par téléphone ou via ce formulaire pour confirmer votre créneau.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Direct Details & Practical Access Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-white border border-[#E7E0D6] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-serif text-2xl font-medium text-[#1C231E]">
                Coordonnées du studio
              </h3>

              <div className="space-y-4 text-sm text-[#3E4740]">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F3EFEA] text-[#2E4034] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[#6B756C]">Téléphone / SMS</div>
                    <a
                      href={`tel:${STUDIO_INFO.phoneClean}`}
                      className="font-mono text-base font-semibold text-[#1C231E] hover:text-[#2E4034] transition-colors block"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                    <p className="text-xs text-[#7A847B]">N'hésitez pas à laisser un message ou un SMS</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F3EFEA] text-[#2E4034] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[#6B756C]">Courriel</div>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-sm font-medium text-[#1C231E] hover:underline"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F3EFEA] text-[#2E4034] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[#6B756C]">Adresse</div>
                    <p className="font-medium text-[#1C231E]">
                      {STUDIO_INFO.address}, {STUDIO_INFO.city}
                    </p>
                    <p className="text-xs text-[#55695C] italic">
                      {STUDIO_INFO.locationDetails}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F3EFEA] text-[#2E4034] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[#6B756C]">Horaires d’accueil</div>
                    <p className="text-xs text-[#4A544C]">{STUDIO_INFO.openingHours}</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp / SMS trigger */}
              <div className="pt-4 border-t border-[#EFEAE2]">
                <a
                  href={`sms:${STUDIO_INFO.phoneClean}?body=Bonjour Angèle, je souhaite obtenir des renseignements pour un cours de yoga.`}
                  className="w-full py-3 px-4 bg-[#F3EFEA] hover:bg-[#E7E0D6] text-[#2E4034] rounded-sm text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Envoyer un SMS direct</span>
                </a>
              </div>
            </div>

            {/* Practical Access Card */}
            <div className="bg-[#F8F6F2] border border-[#E7E0D6] rounded-2xl p-6 space-y-3 text-xs sm:text-sm text-[#4E564F]">
              <h4 className="font-serif text-lg text-[#1C231E] font-medium flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#2E4034]" />
                <span>Venir au studio facilement</span>
              </h4>
              <ul className="space-y-2 list-disc list-inside text-xs leading-relaxed text-[#556056]">
                <li><strong>Stationnement :</strong> {STUDIO_INFO.transport.parking}.</li>
                <li><strong>Vélo :</strong> {STUDIO_INFO.transport.bike}.</li>
                <li><strong>Bus :</strong> {STUDIO_INFO.transport.bus}.</li>
                <li><strong>Repère :</strong> Entrez sous le porche du 1 bis rue Fleuriau, avancez au fond de la cour pavée à droite.</li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=1+bis+rue+Fleuriau+17000+La+Rochelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2E4034] hover:underline inline-flex items-center gap-1"
                >
                  <span>Ouvrir dans Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E7E0D6] rounded-2xl p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#2E4034]/10 text-[#2E4034] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C231E]">
                    Merci pour votre message !
                  </h3>
                  <p className="text-sm text-[#556056] max-w-md mx-auto leading-relaxed">
                    Votre demande pour <strong>{formData.choice}</strong> a bien été enregistrée.
                    Angèle vous recontactera sous 24h par SMS ou e-mail pour finaliser votre venue.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2E4034] border border-[#D5CEC2] rounded-sm hover:bg-[#F3EFEA] transition-colors cursor-pointer"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#EFEAE2] pb-4 mb-4">
                    <h3 className="font-serif text-2xl font-medium text-[#1C231E]">
                      Demande d’inscription & Information
                    </h3>
                    <p className="text-xs text-[#6B756C] mt-1">
                      Remplissez ces quelques informations, sans engagement.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1.5">
                      Nom et Prénom *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: Camille Dubois"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034] focus:ring-1 focus:ring-[#2E4034] transition-colors"
                    />
                  </div>

                  {/* Two columns: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1.5">
                        Adresse e-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="camille@exemple.fr"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034] focus:ring-1 focus:ring-[#2E4034] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1.5">
                        Numéro de téléphone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034] focus:ring-1 focus:ring-[#2E4034] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Formula or Practice */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="choice" className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1.5">
                        Formule ou Cours souhaité
                      </label>
                      <select
                        id="choice"
                        value={formData.choice}
                        onChange={(e) => setFormData({ ...formData, choice: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034] focus:ring-1 focus:ring-[#2E4034] transition-colors text-[#1C231E]"
                      >
                        <option value="Cours d’essai (16 €)">Cours d’essai découverte (16 €)</option>
                        <option value="Carte 6 cours (80 €)">Carte 6 cours (80 €)</option>
                        <option value="Carte 10 cours (139 €)">Carte 10 cours (139 €)</option>
                        <option value="Carte 20 cours (269 €)">Carte 20 cours (269 €)</option>
                        <option value="Cours Particulier Solo (49 €)">Cours Particulier Solo (49 €)</option>
                        <option value="Cours Particulier Duo (79 €)">Cours Particulier Duo (79 €)</option>
                        <option value="Hatha Yoga Traditionnel">Hatha Yoga Traditionnel</option>
                        <option value="Yin Yoga & Bain Sonore">Yin Yoga & Bain Sonore</option>
                        <option value="Vinyasa Flow">Vinyasa Flow</option>
                        <option value="Pilates Postural">Pilates Postural</option>
                        <option value="Yogathérapie">Yogathérapie & Accompagnement</option>
                        <option value="Séance Entreprise ou EVJF">Séance Entreprise ou EVJF</option>
                        <option value="Autre demande">Autre demande d'information</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="level" className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1.5">
                        Votre pratique actuelle
                      </label>
                      <select
                        id="level"
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034] focus:ring-1 focus:ring-[#2E4034] transition-colors text-[#1C231E]"
                      >
                        <option value="Débutant">Débutant total (jamais pratiqué)</option>
                        <option value="Quelques cours">Initiation (quelques cours)</option>
                        <option value="Pratique régulière">Pratiquant régulier</option>
                        <option value="Douleurs / Thérapeutique">Douleurs spécifiques / Maux de dos</option>
                        <option value="Grossesse">Femme enceinte</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#2E362F] mb-1.5">
                      Message ou créneau préféré (facultatif)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Indiquez par exemple un jour ou une heure qui vous conviendrait, ou une question particulière..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CEC2] rounded-md focus:outline-none focus:border-[#2E4034] focus:ring-1 focus:ring-[#2E4034] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm hover:bg-[#233228] transition-all cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer ma demande à Angèle'}
                    </button>
                    <p className="text-[11px] text-[#7E867E] text-center mt-2">
                      Vos coordonnées restent strictement confidentielles et ne sont jamais transmises à des tiers.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
