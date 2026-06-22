export const NORTH_KOREA = {
  code: "PRK",
  numericId: 408,
  name: "Corée du Nord",
  emoji: "🇰🇵",
  capital: "Pyongyang",
  language: "Coréen",
  currency: "Won nord-coréen (KPW)",
  timezone: "UTC+9",
  filter: { budgetMin: 150, budgetMid: 250, tripMin: 2500, tripMid: 4000 },
  description:
    "La Corée du Nord est la destination la plus fermée et la plus mystérieuse du monde, accessible uniquement via des circuits touristiques strictement encadrés par des guides gouvernementaux. Derrière le rideau de fer, le pays révèle une architecture monumentale d'inspiration soviétique, des paysages naturels intacts et une culture profondément singulière façonnée par des décennies d'isolement. Visiter la RPDC est une expérience radicalement différente de tout autre voyage, qui soulève des questions éthiques profondes.",
  bestPeriods: [
    {
      months: "Avril–Mai",
      label: "Idéal",
      color: "#22c55e",
      description: "Printemps agréable, cerisiers en fleurs, Jeux de masse d'Arirang parfois organisés en avril.",
      icon: "☀️",
    },
    {
      months: "Septembre–Octobre",
      label: "Très bon",
      color: "#22c55e",
      description: "Automne doré, températures clémentes, fêtes nationales du 9 septembre et du 10 octobre.",
      icon: "☀️",
    },
    {
      months: "Juillet–Août",
      label: "Acceptable",
      color: "#f59e0b",
      description: "Chaud et humide avec pluies de mousson, mais festivals d'été parfois organisés.",
      icon: "🌧️",
    },
    {
      months: "Décembre–Mars",
      label: "Hiver rigoureux",
      color: "#ef4444",
      description: "Froid intense, certains sites fermés, mais atmosphère unique sous la neige.",
      icon: "❄️",
    },
  ],
  weatherCities: [
    {
      id: "pyongyang",
      name: "Pyongyang",
      region: "Capitale",
      data: [
        { month: "Jan", temp: -8, rain: 15, icon: "❄️" },
        { month: "Fév", temp: -5, rain: 15, icon: "❄️" },
        { month: "Mar", temp: 3, rain: 20, icon: "❄️" },
        { month: "Avr", temp: 11, rain: 40, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 55, icon: "☀️" },
        { month: "Jun", temp: 22, rain: 100, icon: "☀️" },
        { month: "Jul", temp: 25, rain: 360, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 280, icon: "⛅" },
        { month: "Sep", temp: 19, rain: 80, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 35, icon: "⛅" },
        { month: "Nov", temp: 3, rain: 30, icon: "❄️" },
        { month: "Déc", temp: -8, rain: 10, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Pyongyang",
      region: "Capitale",
      description:
        "Pyongyang est une capitale conçue comme un décor de propagande, avec ses boulevards immenses, ses monuments colossaux et ses immeubles aux façades pastel dans une ville étonnamment peu encombrée. La place Kim Il-sung, les fontaines du parc Mansu et l'Arc de Triomphe (plus grand que celui de Paris) témoignent des ambitions monumentales du régime. Les Coréens du Nord que les touristes sont autorisés à rencontrer offrent un aperçu fascinant et partiel d'une société totalement différente.",
      wikipedia: "Pyongyang",
      tags: ["Capitale", "Architecture", "Propagande", "Histoire"],
      mustSee: [
        { name: "Place Kim Il-sung — cœur cérémonial de la capitale", wikipedia: "File:Practising a torch march on Kim il-sung square 11.JPG" },
        { name: "Grand Monument de Mansu — statues colossales des leaders", wikipedia: "Mansudae_Grand_Monument" },
        { name: "Tour du Juche — idéologie officielle en béton de 170 m", wikipedia: "Juche_Tower" },
        { name: "Arc de Triomphe — plus grand arc du monde, dédié à Kim Il-sung", wikipedia: "Arch_of_Triumph_(Pyongyang)" },
      ],
    },
    {
      id: 2,
      name: "Zone démilitarisée (DMZ)",
      region: "Frontière avec la Corée du Sud",
      description:
        "La Zone démilitarisée coréenne est la frontière la plus militarisée du monde, une cicatrice de 4 km de large qui divise la péninsule coréenne depuis l'armistice de 1953. Depuis le côté nord-coréen, les visiteurs peuvent apercevoir les postes frontières du village de Panmunjom et observer, à quelques centaines de mètres, les bâtiments de la partie sud. L'atmosphère chargée d'histoire et de tension politique rend cette visite particulièrement saisissante.",
      wikipedia: "Korean_Demilitarized_Zone",
      tags: ["Géopolitique", "Histoire", "Frontière", "Guerre de Corée"],
      mustSee: [
        { name: "Panmunjom — salle des négociations de l'armistice", wikipedia: "Panmunjom" },
        { name: "Kaesong — ancienne capitale médiévale Goryeo à proximité", wikipedia: "Kaesong" },
        { name: "Train de l'Unification — gare symbolique de Dorasan", wikipedia: "Korean_Demilitarized_Zone" },
        { name: "Mémorial de la guerre — monuments aux soldats nord-coréens", wikipedia: "Korean_War" },
      ],
    },
    {
      id: 3,
      name: "Mont Paektu",
      region: "Province de Ryanggang",
      description:
        "Le mont Paektu est le point culminant de la péninsule coréenne à 2 744 mètres et un lieu de pèlerinage fondamental dans la mythologie nationale nord-coréenne, décrit comme le berceau de la nation coréenne et lieu de naissance légendaire de Kim Jong-il. Son cratère abrite le lac du Ciel, l'un des plus beaux lacs de cratère au monde, dont les eaux d'un bleu profond contrastent avec les falaises de basalte noir. Le volcan actif, à la frontière avec la Chine, est entouré de forêts vierges et de cascades spectaculaires.",
      wikipedia: "File:長白山 Changbai Mountain - panoramio.jpg",
      tags: ["Volcan", "Montagne", "Mythologie", "Nature"],
      mustSee: [
        { name: "Lac du Ciel (Chon Ji) — lac de cratère à 2 150 m d'altitude", wikipedia: "Heaven_Lake" },
        { name: "Cascade de Rimyongsu — chutes de 76 m dans une forêt de bouleaux", wikipedia: "File:Rimyongsu Falls5.jpg" },
        { name: "Ville de Samjiyon — ville modèle reconstruite au pied du volcan", wikipedia: "Samjiyon" },
      ],
    },
    {
      id: 4,
      name: "Jeux de masse d'Arirang",
      region: "Pyongyang (événement saisonnier)",
      description:
        "Les Jeux de masse d'Arirang, ou Festival de la Jeunesse et des Étudiants, constituent le plus grand spectacle de masse au monde, rassemblant jusqu'à 100 000 participants dans le stade Rungrado le plus grand du monde. Des dizaines de milliers de gymnastes, danseurs et enfants tenant des cartes colorées créent une fresque vivante d'une précision stupéfiante illustrant l'histoire et les idéaux de la RPDC. L'événement, quand il est organisé, est l'une des expériences les plus extraordinaires et les plus troublantes que le voyageur puisse vivre.",
      wikipedia: "Arirang_Mass_Games",
      tags: ["Festival", "Propagande", "Spectacle", "Unique"],
      mustSee: [
        { name: "Stade de Rungrado — plus grand stade du monde (114 000 places)", wikipedia: "Rungrado_1st_of_May_Stadium" },
        { name: "Fresque humaine — mosaïque vivante de 20 000 enfants avec des cartes", wikipedia: "Arirang_Mass_Games" },
        { name: "Chorégraphies de masse — gymnastes et danseurs synchronisés", wikipedia: "Arirang_Mass_Games" },
        { name: "Feux d'artifice de clôture — finale pyrotechnique spectaculaire", wikipedia: "Arirang_Mass_Games" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Toutes les visites en Corée du Nord doivent passer par une agence de voyages spécialisée (Koryo Tours, Young Pioneer Tours...) depuis Pékin ou via Air Koryo. Les touristes paient tout en devises étrangères (euros, dollars, yuans). Les prix semblent modérés mais les visas, les vols et le circuit obligatoire font grimper le budget total.",
    currency: "EUR / USD",
    exchangeRate: "Paiements en euros, dollars ou yuans — pas de won pour les touristes",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel Yanggakdo (île de Pyongyang)", range: "60–100 €" },
          { label: "Hôtel Koryo (Pyongyang centre)", range: "80–120 €" },
          { label: "Hébergement en province (inclus circuit)", range: "50–80 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas inclus dans le circuit (buffet)", range: "Inclus" },
          { label: "Bière Taedong au restaurant touristique", range: "2–4 €" },
          { label: "Repas supplémentaire en option", range: "15–25 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Vol Pékin–Pyongyang (Air Koryo A/R)", range: "300–500 €" },
          { label: "Transport en bus dans le circuit (inclus)", range: "Inclus" },
          { label: "Train Pékin–Pyongyang (2 jours, optionnel)", range: "150–250 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Frais de visite inclus dans le circuit", range: "Inclus" },
          { label: "Supplément Jeux de masse d'Arirang", range: "50–150 €" },
          { label: "Achat de souvenirs officiels (affiches, pins)", range: "10–50 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "150–200 €/j",
        desc: "Circuit économique via agence budget (Young Pioneer Tours), groupe de voyageurs.",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "200–350 €/j",
        desc: "Circuit premium avec Koryo Tours, chambre individuelle, options supplémentaires.",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Pékin → Pyongyang → DMZ → Mont Paektu → Pyongyang → Pékin",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2500 – 3200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Pékin", amount: "600–900 €" },
            { label: "Vol Pékin–Pyongyang A/R (Air Koryo)", amount: "350–500 €" },
            { label: "Circuit 7 nuits (hébergement + repas + guides)", amount: "1200–1500 €" },
            { label: "Visa et frais d'agence", amount: "200–300 €" },
            { label: "Souvenirs et dépenses personnelles", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3500 – 5000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Pékin (business ou direct)", amount: "800–1200 €" },
            { label: "Vol Pékin–Pyongyang A/R (Air Koryo)", amount: "350–500 €" },
            { label: "Circuit premium 7 nuits (chambre individuelle)", amount: "1800–2500 €" },
            { label: "Suppléments activités (Arirang, excursions)", amount: "300–500 €" },
            { label: "Dépenses personnelles", amount: "200–400 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vol Paris–Pékin (10h), puis Air Koryo Pékin–Pyongyang (2h). Train optionnel 2 jours" },
    { icon: "🪪", label: "Visa", value: "Visa obligatoire, obtenu uniquement via une agence de voyage agréée. Passeport américain ou coréen du Sud refusé" },
    { icon: "💰", label: "Monnaie", value: "Paiements en euros, USD ou yuan. Les touristes n'ont pas accès au won nord-coréen" },
    { icon: "🗣️", label: "Langue", value: "Coréen uniquement. Guides interprètes officiels obligatoires et toujours présents" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/C (220V) — adaptateur recommandé. Coupures de courant fréquentes" },
    { icon: "💊", label: "Santé", value: "Hépatite A recommandée. Médicaments personnels à apporter impérativement (pharmacies inexistantes pour touristes)" },
    { icon: "📷", label: "Photographie", value: "Strictement encadrée. Toujours demander l'autorisation du guide avant de photographier. Certains sujets interdits" },
    { icon: "⚠️", label: "Avertissement", value: "Pays sous sanctions internationales. Vérifier les restrictions de votre pays. Respect des règles obligatoire sous peine d'expulsion" },
  ],
};
