export interface YogaClass {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  intensity: 'Doux' | 'Modéré' | 'Dynamique' | 'Thérapeutique';
  duration: string;
  idealFor: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  dayIndex: number;
  time: string;
  className: string;
  teacher: string;
  location: string;
  level: string;
  spots: string;
}

export interface PriceTier {
  id: string;
  title: string;
  price: number;
  period?: string;
  perClass?: string;
  features: string[];
  popular?: boolean;
  ideal: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  practice: string;
}

export const PRACTICES: YogaClass[] = [
  {
    id: 'hatha',
    name: 'Hatha Yoga Traditionnel',
    subtitle: 'Équilibre, souffle et alignement postural',
    description: 'Une pratique complète qui pose les bases solides du yoga. Les postures (asanas) sont maintenues avec conscience pour développer la force, la souplesse et la stabilité, associées à des techniques de respiration (pranayama) et une relaxation finale.',
    benefits: ['Tonification musculaire harmonieuse', 'Amélioration de la posture corporelle', 'Gestion du souffle et apaisement mental'],
    intensity: 'Modéré',
    duration: '1h15',
    idealFor: 'Tous niveaux, idéal pour débuter ou approfondir ses alignements anatomiques',
  },
  {
    id: 'yin',
    name: 'Yin Yoga & Bain Sonore',
    subtitle: 'Lenteur régénératrice et lâcher-prise profond',
    description: 'Pratique douce et méditative où les postures sont tenues au sol pendant 3 à 5 minutes avec le soutien de bolsters, briques et couvertures. Elle cible les tissus conjonctifs profonds (fascias, ligaments, articulations) pour libérer les tensions accumulées.',
    benefits: ['Libération des raideurs et tensions profondes', 'Régulation du système nerveux parasympathique', 'Qualité de sommeil et détente musculaire'],
    intensity: 'Doux',
    duration: '1h15',
    idealFor: 'Besoin de déconnexion, récupération physique, stress, manque de souplesse',
  },
  {
    id: 'vinyasa',
    name: 'Vinyasa Flow',
    subtitle: 'Fluidité, créativité et énergie du mouvement',
    description: 'Un yoga dynamique où les postures s\'enchaînent de manière créative et continue, guidées par le rythme du souffle. Les séquences éveillent le cardio, renforcent le corps dans sa globalité et favorisent la concentration dans le mouvement.',
    benefits: ['Endurance et mobilité articulaire', 'Détoxification par la chaleur corporelle', 'Vitalité et présence dans l\'instant'],
    intensity: 'Dynamique',
    duration: '1h15',
    idealFor: 'Pratiquants en quête d\'un rythme actif et d\'une pratique fluide',
  },
  {
    id: 'pilates',
    name: 'Pilates & Renforcement Doux',
    subtitle: 'Centre du corps, stabilité lombaire et maintien',
    description: 'Inspiré de la méthode Pilates et des principes posturaux du yoga. L\'accent est mis sur le renforcement des muscles profonds (transverse, plancher pelvien, fixateurs d\'omoplates) pour soulager le dos et affiner la silhouette.',
    benefits: ['Maintien de la colonne vertébrale', 'Renforcement profond de la sangle abdominale', 'Conscience corporelle et équilibre'],
    intensity: 'Modéré',
    duration: '1h00',
    idealFor: 'Soulagement du mal de dos, reprise du sport, post-rééducation',
  },
  {
    id: 'yogatherapie',
    name: 'Yogathérapie & Accompagnement',
    subtitle: 'Adaptation personnalisée pour la santé et le bien-être',
    description: 'Séances spécifiques adaptées aux personnes rencontrant des problématiques de santé ciblées (douleurs chroniques, troubles digestifs, anxiété, burn-out ou prescription médicale APSPM). Un accompagnement individualisé et sécurisant.',
    benefits: ['Approche sur mesure et bienveillante', 'Gestion durable de la douleur et du stress', 'Autonomie et confiance corporelle'],
    intensity: 'Thérapeutique',
    duration: '1h00 à 1h15',
    idealFor: 'Prescription médicale, douleurs chroniques ou accompagnement individuel',
  },
];

export const SCHEDULE: ScheduleItem[] = [
  // Lundi
  { id: 'lun-1', day: 'Lundi', dayIndex: 1, time: '12h30 - 13h30', className: 'Hatha Yoga Pause Méridienne', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Places limitées' },
  { id: 'lun-2', day: 'Lundi', dayIndex: 1, time: '18h30 - 19h45', className: 'Hatha Yoga Aligné & Respiration', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Intermédiaire & Débutant', spots: 'Disponible' },
  // Mardi
  { id: 'mar-1', day: 'Mardi', dayIndex: 2, time: '09h30 - 10h45', className: 'Yin Yoga & Relâchement', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Disponible' },
  { id: 'mar-2', day: 'Mardi', dayIndex: 2, time: '18h30 - 19h45', className: 'Vinyasa Flow Dynamique', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Dynamique', spots: 'Disponible' },
  // Mercredi
  { id: 'mer-1', day: 'Mercredi', dayIndex: 3, time: '12h30 - 13h30', className: 'Pilates Postural & Renforcement', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Disponible' },
  { id: 'mer-2', day: 'Mercredi', dayIndex: 3, time: '19h00 - 20h15', className: 'Hatha Yoga Doux & Méditation', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Disponible' },
  // Jeudi
  { id: 'jeu-1', day: 'Jeudi', dayIndex: 4, time: '10h00 - 11h15', className: 'Yogathérapie & Mobilité du Dos', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Adapté / Thérapeutique', spots: 'Places limitées' },
  { id: 'jeu-2', day: 'Jeudi', dayIndex: 4, time: '18h30 - 19h45', className: 'Yin Yoga & Bain Sonore', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Forte demande' },
  // Vendredi
  { id: 'ven-1', day: 'Vendredi', dayIndex: 5, time: '12h30 - 13h30', className: 'Vinyasa Énergie & Mobilité', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Disponible' },
  { id: 'ven-2', day: 'Vendredi', dayIndex: 5, time: '18h00 - 19h15', className: 'Hatha Flow Fin de Semaine', teacher: 'Angèle', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Disponible' },
  // Samedi
  { id: 'sam-1', day: 'Samedi', dayIndex: 6, time: '10h00 - 11h15', className: 'Hatha Yoga Éveil du Week-end', teacher: 'Angèle', location: 'Studio Fleuriau / Parc en été', level: 'Tous niveaux', spots: 'Disponible' },
  { id: 'sam-2', day: 'Samedi', dayIndex: 6, time: '11h30 - 12h45', className: 'Atelier Thématique / Yin Approfondi', teacher: 'Angèle & Invités', location: 'Studio Fleuriau', level: 'Tous niveaux', spots: 'Sur inscription' },
];

export const PRICING_TIERS: PriceTier[] = [
  {
    id: 'essai',
    title: 'Cours d’essai / À l’unité',
    price: 16,
    period: 'par cours',
    features: [
      'Valable sur l\'ensemble des cours collectifs',
      'Sans engagement ni frais d’adhésion',
      'Accès à tout le matériel du studio (tapis, briques, bolsters)',
      'Idéal pour découvrir le studio et la pédagogie d\'Angèle',
    ],
    ideal: 'Découverte sans contrainte',
  },
  {
    id: 'carte-6',
    title: 'Carte 6 cours',
    price: 80,
    perClass: '13,30 € / cours',
    period: 'valable 3 mois',
    features: [
      'Validité de 3 mois consécutifs',
      'Flexibilité sur tous les cours de la semaine',
      'Réservation simplifiée de vos créneaux',
      'Suspension temporaire possible en cas de vacances',
    ],
    ideal: 'Pratique ponctuelle ou reprise en douceur',
  },
  {
    id: 'carte-10',
    title: 'Carte 10 cours',
    price: 139,
    perClass: '13,90 € / cours',
    period: 'valable 6 mois',
    popular: true,
    features: [
      'Validité de 6 mois consécutifs',
      'La formule privilégiée par nos élèves réguliers',
      'Accès prioritaire aux créneaux en forte demande',
      'Matériel de qualité inclus & thé bio après la séance',
    ],
    ideal: 'Pratique régulière 1 fois par semaine',
  },
  {
    id: 'carte-20',
    title: 'Carte 20 cours',
    price: 269,
    perClass: '13,45 € / cours',
    period: 'valable 1 an',
    features: [
      'Validité pleine de 12 mois',
      'Accès à tous les cours hebdomadaires',
      'Possibilité de paiement fractionné (2 ou 3 fois)',
      'Progression continue et accompagnement postural approfondi',
    ],
    ideal: 'Pratique assidue tout au long de l\'année',
  },
  {
    id: 'particulier',
    title: 'Cours Particulier Solo',
    price: 49,
    period: 'la séance (1h15)',
    features: [
      'Séance personnalisée 100% dédiée à vos besoins',
      'Au studio ou à domicile (secteur La Rochelle)',
      'Bilan postural et adaptation thérapeutique sur mesure',
      'Formule Duo disponible à 79 €',
    ],
    ideal: 'Accompagnement individuel ou thérapeutique',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sophie M.',
    role: 'Pratiquante depuis 2 ans',
    practice: 'Hatha & Yin Yoga',
    text: 'Le studio d’Angèle est un vrai havre de paix au centre de La Rochelle. Les effectifs réduits permettent une attention rare, avec des corrections douces et très précises. On s’y sent immédiatement accueillie et apaisée.',
  },
  {
    name: 'Julien T.',
    role: 'Élève régulier',
    practice: 'Vinyasa & Pilates',
    text: 'Après des années de mal de dos dû au travail sur écran, les cours d’Angèle ont transformé mon quotidien. Sa double compétence en yoga et en renforcement postural fait toute la différence.',
  },
  {
    name: 'Claire & Pierre',
    role: 'Cours Particulier Duo',
    practice: 'Yin Yoga & Bain Sonore',
    text: 'Une parenthèse enchantée au fond de cette cour fleurie. La bienveillance d\'Angèle et la qualité des accessoires font de chaque séance un moment de profonde régénération.',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Yoga Alliance International & Europe',
    org: 'Certification Internationale Enseignante Hatha & Vinyasa',
    detail: 'Formation certifiée dirigée par Laurence Schroeder (Balance Zone) et Deepu (disciple de Shri Sacha Hansraaj Maharaj Ji).',
  },
  {
    title: 'Yogathérapie Spécialisée',
    org: 'École Shantyoga — Emeline Diaz-Roman',
    detail: 'Spécialisation dans l’accompagnement du stress, des pathologies digestives et des troubles ostéo-articulaires.',
  },
  {
    title: 'CQP ALS AGEE Reconnu par l\'État',
    org: 'Ministère des Sports / Fédération Sports pour Tous',
    detail: 'Certificat de Qualification Professionnelle d’Animateur de Loisir Sportif (Activités Gymniques d’Entretien et d’Expression).',
  },
  {
    title: 'Habilitation Sport-Santé APSPM',
    org: 'Activité Physique sur Prescription Médicale',
    detail: 'Accompagnement sécurisé de personnes orientées par leur médecin traitant pour affection de longue durée ou rééducation.',
  },
];

export const STUDIO_INFO = {
  name: 'Angèle Om Yoga',
  instructor: 'Angèle',
  address: '1 bis rue Fleuriau',
  city: '17000 La Rochelle',
  locationDetails: 'En centre-ville, au fond de la cour pavée à droite',
  phone: '06 08 66 07 00',
  phoneClean: '+33608660700',
  email: 'contact@angele.yoga',
  instagram: 'angele_yoga_larochelle',
  openingHours: 'Lundi au Samedi : 09h00 – 20h30',
  transport: {
    parking: 'Parking Verdun (à 3 min à pied) & Parking de l\'Esplanade',
    bike: 'Station vélos Yélo « Place de Verdun » à 150 mètres',
    bus: 'Arrêt Place de Verdun (lignes 1, 2, 3, 4, 6, 7)',
  },
};
