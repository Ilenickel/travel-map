export const SRI_LANKA = {
  code: "LKA",
  numericId: 144,
  name: "Sri Lanka",
  emoji: "🇱🇰",
  capital: "Sri Jayawardenepura Kotte (Colombo)",
  language: "Cingalais, tamoul",
  currency: "Roupie sri-lankaise (LKR)",
  timezone: "UTC+5:30",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1200,
    tripMid: 2400,
  },
  description:
    "Le Sri Lanka, « Perle de l'Océan Indien », concentre sur une petite île une diversité extraordinaire : temples bouddhistes à rocher (Sigiriya), safaris à éléphants (Yala), plages de la côte sud, collines de thé de Nuwara Eliya et sites UNESCO. Une destination complète et accessible en 2 semaines.",

  bestPeriods: [
    {
      months: "Décembre – Mars",
      label: "Côte Ouest (saison sèche)",
      color: "#fbbf24",
      description:
        "Idéal pour Colombo, Galle et la côte ouest : temps ensoleillé, mer calme. Les collines sont fraîches et verdoyantes.",
      icon: "☀️",
    },
    {
      months: "Mai – Septembre",
      label: "Côte Est (Trincomalee)",
      color: "#38bdf8",
      description:
        "La côte est bénéficie d'un microclimat inversé : c'est la meilleure période pour Trincomalee et Arugam Bay (surf).",
      icon: "🏄",
    },
  ],

  weatherCities: [
    {
      id: "colombo",
      name: "Colombo",
      region: "Province Occidentale",
      data: [
        { month: "Jan", temp: 27, rain: 80, icon: "⛅" },
        { month: "Fév", temp: 27, rain: 65, icon: "⛅" },
        { month: "Mar", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 240, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 360, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 225, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 340, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 310, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 165, icon: "🌧️" },
      ],
    },
    {
      id: "trincomalee",
      name: "Trincomalee",
      region: "Province du Nord-Est",
      data: [
        { month: "Jan", temp: 26, rain: 270, icon: "⛅" },
        { month: "Fév", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 65, icon: "⛅" },
        { month: "Avr", temp: 29, rain: 40, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 50, icon: "⛅" },
        { month: "Jun", temp: 31, rain: 30, icon: "⛅" },
        { month: "Jul", temp: 32, rain: 45, icon: "🌡️" },
        { month: "Aoû", temp: 31, rain: 60, icon: "⛅" },
        { month: "Sep", temp: 30, rain: 90, icon: "⛅" },
        { month: "Oct", temp: 29, rain: 200, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 330, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 410, icon: "🌧️" },
      ],
    },
    {
      id: "nuwara-eliya",
      name: "Nuwara Eliya",
      region: "Province Centrale (collines de thé)",
      data: [
        { month: "Jan", temp: 15, rain: 120, icon: "⛅" },
        { month: "Fév", temp: 16, rain: 100, icon: "☀️" },
        { month: "Mar", temp: 17, rain: 130, icon: "☀️" },
        { month: "Avr", temp: 17, rain: 175, icon: "☀️" },
        { month: "Mai", temp: 17, rain: 215, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 170, icon: "☀️" },
        { month: "Jul", temp: 17, rain: 155, icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 165, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 175, icon: "☀️" },
        { month: "Oct", temp: 17, rain: 200, icon: "⛅" },
        { month: "Nov", temp: 16, rain: 170, icon: "☀️" },
        { month: "Déc", temp: 15, rain: 130, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Sigiriya & Triangle Culturel",
      region: "Province Centrale du Nord",
      description:
        "Le rocher-forteresse de Sigiriya (5e siècle), inscrit au patrimoine UNESCO, est accessible par un escalier spectaculaire au milieu de fresques et jardins en eau. Nearby, Dambulla (cave temple), Polonnaruwa et Anuradhapura forment le triangle culturel du Sri Lanka.",
      wikipedia: "Sigiriya",
      tags: ["UNESCO", "archéologie", "Histoire", "fresques", "Architecture"],
      mustSee: [
        { name: "Sigiriya Rock Fortress", wikipedia: "Sigiriya" },
        { name: "Dambulla Cave Temple", wikipedia: "Dambulla_cave_temple" },
        { name: "Polonnaruwa (ruines)", wikipedia: "Polonnaruwa" },
        { name: "Anuradhapura (ancienne capitale)", wikipedia: "Anuradhapura" },
      ],
    },
    {
      id: 2,
      name: "Kandy & Temple de la Dent",
      region: "Province Centrale",
      description:
        "Kandy, dernière capitale royale du Sri Lanka, abrite le Temple de la Dent Sacrée du Bouddha (Sri Dalada Maligawa), inscrit au patrimoine UNESCO. Le lac artificiel de Kandy, les danses kandyennes et les jardins botaniques de Peradeniya complètent cette ville sainte.",
      wikipedia: "Kandy",
      tags: ["bouddhisme", "UNESCO", "Culture", "danses", "Architecture", "Gastronomie", "Ville"],
      mustSee: [
        { name: "Temple de la Dent (Sri Dalada)", wikipedia: "Temple_of_the_Tooth" },
        { name: "Jardin botanique de Peradeniya", wikipedia: "Royal_Botanic_Gardens,_Peradeniya" },
        { name: "Danses kandyennes", wikipedia: "Kandyan_dance" },
        { name: "Lac de Kandy", wikipedia: "Kandy_Lake" },
      ],
    },
    {
      id: 3,
      name: "Parc national de Yala",
      region: "Province du Sud",
      description:
        "Yala est l'un des meilleurs endroits au monde pour observer les léopards sauvages, avec la plus haute densité de léopards au monde. Éléphants, crocodiles, ours lippu et oiseaux migrateurs peuplent ce parc de 979 km².",
      wikipedia: "Yala_National_Park",
      tags: ["safari", "léopards", "éléphants", "Faune", "Safari", "Nature"],
      mustSee: [
        { name: "Léopard du Sri Lanka", wikipedia: "File:Sri Lankan leopard (Panthera pardus kotiya) female 5.jpg" },
        { name: "Bloc 1 (zone principale)", wikipedia: "Yala_National_Park" },
        { name: "Éléphants d'Asie", wikipedia: "Asian_elephant" },
        { name: "Bundala (oiseaux)", wikipedia: "Bundala_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Galle & Côte Sud",
      region: "Province du Sud",
      description:
        "Galle Fort, forteresse hollandaise du XVIIe siècle inscrite au patrimoine UNESCO, est l'un des forts coloniaux les mieux préservés d'Asie. La côte sud offre de belles plages (Mirissa pour les baleines), des villages de pêcheurs et une atmosphère détendue.",
      wikipedia: "Galle_Fort",
      tags: ["colonial", "UNESCO", "Plage", "baleines", "Architecture", "Ville"],
      mustSee: [
        { name: "Galle Fort (ramparts)", wikipedia: "Galle_Fort" },
        { name: "Mirissa (whale watching)", wikipedia: "Mirissa" },
        { name: "Hikkaduwa (snorkeling)", wikipedia: "Hikkaduwa" },
        { name: "Unawatuna (plage)", wikipedia: "Unawatuna" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Sri Lanka offre un excellent rapport qualité-prix. Depuis la crise économique de 2022, les prix ont augmenté mais restent abordables. La situation s'est stabilisée.",
    currency: "Roupie sri-lankaise (LKR)",
    exchangeRate: "1€ ≈ 310–330 LKR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse double", price: "10–20 €", detail: "Partout dans le pays, confort basique" },
          { label: "Hôtel 3★ en ville", price: "35–70 €", detail: "Colombo ou Kandy, petit-déj inclus" },
          { label: "Resort côtier 4★", price: "80–200 €", detail: "Galle ou Mirissa, avec piscine" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Rice & Curry (repas local)", price: "2–4 €", detail: "Riz + 4–5 currys, très copieux" },
          { label: "Kottu roti (plat de rue)", price: "1,50–3 €", detail: "Roti haché + légumes/viande sur plancha" },
          { label: "Restaurant mid-range", price: "8–18 €", detail: "Poissons frais, fruits de mer, buffet" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train panoramique Kandy–Ella", price: "2–5 €", detail: "Parmi les plus beaux trajets du monde" },
          { label: "Bus intercités", price: "1–3 €", detail: "Réseau dense, peu confortable mais très bon marché" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Safari jeep Yala (demi-journée)", price: "25–50 €", detail: "Par personne en groupe, guide inclus" },
          { label: "Entrée Sigiriya", price: "20–30 €", detail: "Tarif étranger, UNESCO" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse, rice & curry, bus/train", color: "#22c55e" },
      { type: "Confort", daily: "65–120 €/j", desc: "Hôtel 3★, restaurants, safaris, excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Resort côtier 5★, spa, tours privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Colombo – Triangle Culturel – Kandy – Ella – Yala – Galle",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Colombo", amount: "500–750 €" },
            { label: "Hébergement (14 nuits)", amount: "180–300 €" },
            { label: "Nourriture", amount: "180–280 €" },
            { label: "Transport local (bus/train)", amount: "80–150 €" },
            { label: "Activités & imprévus", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 400 – 3 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Colombo", amount: "700–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "600–900 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport + excursions", amount: "350–550 €" },
            { label: "Safaris + activités", amount: "250–400 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Colombo (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 500–2 200 €" },
            { label: "Nourriture & restaurants", amount: "500–700 €" },
            { label: "Transport & excursions privées", amount: "400–600 €" },
            { label: "Activités premium + spa", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~11h (SriLankan Airlines, Air France via connexion)" },
    { icon: "🪪", label: "Visa", value: "ETA (Electronic Travel Authorization) en ligne obligatoire (~50 USD, 30 jours). Site : eta.gov.lk" },
    { icon: "💰", label: "Monnaie", value: "Roupie sri-lankaise (1€ ≈ 310–330 LKR)" },
    { icon: "🗣️", label: "Langue", value: "Cingalais et tamoul (l'anglais est très répandu)" },
    { icon: "🔌", label: "Prise électrique", value: "Type D/G – 230 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, SIM locale chez Dialog ou Mobitel" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Vaccin hépatite A recommandé, antipaludéens pour certaines zones" },
  ],
};
