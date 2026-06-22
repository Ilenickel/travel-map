export const CHILE = {
  code: "CHL",
  numericId: 152,
  name: "Chili",
  emoji: "🇨🇱",
  capital: "Santiago",
  language: "Espagnol",
  currency: "Peso chilien (CLP)",
  timezone: "UTC-4 (été) / UTC-3 (hiver)",
  filter: {
    budgetMin: 40,
    budgetMid: 90,
    tripMin: 1900,
    tripMid: 3600,
  },
  description:
    "Le Chili est un pays-ruban de 4 300 km de long entre les Andes et le Pacifique : du désert d'Atacama le plus aride au monde aux glaciers de Patagonie, en passant par les vignobles et Santiago cosmopolite. Un pays d'extrêmes à l'infrastructure touristique excellente.",

  bestPeriods: [
    {
      months: "Novembre – Mars",
      label: "Été austral",
      color: "#fbbf24",
      description:
        "Meilleure période pour la Patagonie et le sud. Santiago et Atacama sont idéaux toute l'année, mais l'été est parfait.",
      icon: "☀️",
    },
    {
      months: "Juin – Août",
      label: "Ski dans les Andes",
      color: "#93c5fd",
      description:
        "Excellente saison de ski près de Santiago (Valle Nevado, Portillo). L'Atacama reste parfait en toute saison.",
      icon: "⛷️",
    },
    {
      months: "Septembre – Octobre",
      label: "Printemps, moindre affluence",
      color: "#86efac",
      description:
        "Patagonie déjà accessible, Santiago agréable, moins de touristes que l'été. Bon compromis qualité-prix.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "santiago",
      name: "Santiago",
      region: "Région Métropolitaine",
      data: [
        { month: "Jan", temp: 23, rain: 3, icon: "☀️" },
        { month: "Fév", temp: 22, rain: 5, icon: "☀️" },
        { month: "Mar", temp: 20, rain: 10, icon: "☀️" },
        { month: "Avr", temp: 15, rain: 25, icon: "⛅" },
        { month: "Mai", temp: 11, rain: 55, icon: "⛅" },
        { month: "Jun", temp: 8, rain: 80, icon: "⛅" },
        { month: "Jul", temp: 7, rain: 75, icon: "❄️" },
        { month: "Aoû", temp: 9, rain: 55, icon: "⛅" },
        { month: "Sep", temp: 11, rain: 35, icon: "⛅" },
        { month: "Oct", temp: 15, rain: 20, icon: "⛅" },
        { month: "Nov", temp: 19, rain: 10, icon: "☀️" },
        { month: "Déc", temp: 22, rain: 5, icon: "☀️" },
      ],
    },
    {
      id: "puerto-natales",
      name: "Puerto Natales",
      region: "Patagonie",
      data: [
        { month: "Jan", temp: 13, rain: 50, icon: "⛅" },
        { month: "Fév", temp: 13, rain: 45, icon: "⛅" },
        { month: "Mar", temp: 10, rain: 50, icon: "⛅" },
        { month: "Avr", temp: 7, rain: 55, icon: "❄️" },
        { month: "Mai", temp: 4, rain: 60, icon: "❄️" },
        { month: "Jun", temp: 2, rain: 50, icon: "❄️" },
        { month: "Jul", temp: 1, rain: 50, icon: "❄️" },
        { month: "Aoû", temp: 3, rain: 50, icon: "❄️" },
        { month: "Sep", temp: 5, rain: 40, icon: "⛅" },
        { month: "Oct", temp: 8, rain: 45, icon: "⛅" },
        { month: "Nov", temp: 11, rain: 50, icon: "⛅" },
        { month: "Déc", temp: 13, rain: 50, icon: "⛅" },
      ],
    },
    {
      id: "san-pedro-atacama",
      name: "San Pedro de Atacama",
      region: "Atacama",
      data: [
        { month: "Jan", temp: 20, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 20, rain: 20, icon: "☀️" },
        { month: "Mar", temp: 19, rain: 5, icon: "☀️" },
        { month: "Avr", temp: 17, rain: 2, icon: "☀️" },
        { month: "Mai", temp: 13, rain: 1, icon: "☀️" },
        { month: "Jun", temp: 10, rain: 0, icon: "☀️" },
        { month: "Jul", temp: 9, rain: 0, icon: "☀️" },
        { month: "Aoû", temp: 11, rain: 0, icon: "☀️" },
        { month: "Sep", temp: 14, rain: 0, icon: "☀️" },
        { month: "Oct", temp: 18, rain: 1, icon: "☀️" },
        { month: "Nov", temp: 21, rain: 0, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 0, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Torres del Paine",
      region: "Patagonie",
      description:
        "Le parc national Torres del Paine est l'un des plus beaux du monde, avec ses trois tours granitiques, ses glaciers et sa faune sauvage (guanacos, condors, pumas). Le trekking en W ou en O est une aventure de référence.",
      wikipedia: "File:Towers of Paine - Torres del Paine National Park 13.jpg",
      tags: ["randonnée", "glaciers", "faune", "nature"],
      mustSee: [
        { name: "Mirador Las Torres", wikipedia: "File:Mirador las Torres.jpg" },
        { name: "Glacier Grey", wikipedia: "Grey_Glacier" },
        { name: "Valle del Francés", wikipedia: "File:Valle francés en invierno.jpg" },
        { name: "Lago Pehoé", wikipedia: "File:Lago Pehoé .jpg" },
      ],
    },
    {
      id: 2,
      name: "Désert d'Atacama",
      region: "Norte Grande",
      description:
        "Le désert d'Atacama est le plus aride au monde et offre des paysages martiens époustouflants : geysers du Tatio à 4 500 m, Vallée de la Lune, lagunes colorées et ciel étoilé parmi les plus clairs du monde.",
      wikipedia: "File:Paisaje cerca de Calama, Chile, 2016-02-01, DD 83.JPG",
      tags: ["désert", "astronomie", "geysers", "paysages"],
      mustSee: [
        { name: "Geysers del Tatio", wikipedia: "El_Tatio" },
        { name: "Valle de la Luna", wikipedia: "Valle_de_la_Luna_(Chile)" },
        { name: "Laguna Cejar", wikipedia: "File:Laguna-cejar-rodrigo-gonzalez-01.jpg" },
        { name: "Salar de Atacama", wikipedia: "Salar_de_Atacama" },
      ],
    },
    {
      id: 3,
      name: "Santiago & Valparaíso",
      region: "Chili Central",
      description:
        "Santiago est une capitale moderne avec les Andes en toile de fond. À 1h30, Valparaíso est une ville-port bohème aux funiculaires et fresques murales colorées, inscrite au patrimoine UNESCO.",
      wikipedia: "File:Edificios en Santiago de Chile II.jpg",
      tags: ["capitale", "art", "UNESCO", "vin"],
      mustSee: [
        { name: "Valparaíso (cerros)", wikipedia: "File:Templeman y Almirante Montt, Valparaíso.jpg" },
        { name: "Museo Chileno de Arte Precolombino", wikipedia: "File:Museo Chileno de Arte Precolombino - 2020 - 10.jpg" },
        { name: "Cerro San Cristóbal", wikipedia: "File:Mirador Cordillera en cerro San Cristóbal.jpg" },
        { name: "Vignobles de Casablanca", wikipedia: "File:Viñedo_Puente_Alto.jpg" },
      ],
    },
    {
      id: 4,
      name: "Île de Pâques",
      region: "Polynésie (territoire chilien)",
      description:
        "Île mythique du Pacifique à 3 700 km des côtes chiliennes, Rapa Nui est célèbre pour ses moaïs, ces statues monumentales érigées par les anciens Polynésiens. Un mystère archéologique fascinant dans un cadre volcanique.",
      wikipedia: "Easter_Island",
      tags: ["île", "archéologie", "mystère", "volcans"],
      mustSee: [
        { name: "Ahu Tongariki (15 moaïs)", wikipedia: "Ahu_Tongariki" },
        { name: "Rano Raraku (carrière)", wikipedia: "Rano_Raraku" },
        { name: "Anakena (plage)", wikipedia: "Anakena" },
        { name: "Orongo (village cérémoniel)", wikipedia: "File:Orongohaeuser.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Chili est l'un des pays les plus chers d'Amérique du Sud, avec une infrastructure touristique développée. La Patagonie et l'Île de Pâques sont particulièrement onéreuses.",
    currency: "Peso chilien (CLP)",
    exchangeRate: "1€ ≈ 950–1 000 CLP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "12–20 €", detail: "Santiago, Puerto Natales" },
          { label: "Chambre double hôtel 3★", price: "50–90 €", detail: "Bon confort, petit-déjeuner inclus" },
          { label: "Refugio Torres del Paine", price: "80–200 €", detail: "Demi-pension, réservation obligatoire tôt" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Menu du midi (almuerzo)", price: "6–10 €", detail: "Soupe + plat, dans les restos locaux" },
          { label: "Empanadas de pino", price: "1,5–3 €", detail: "Spécialité chilienne, très rassasiant" },
          { label: "Restaurant mid-range avec vin", price: "20–35 €", detail: "Vins chiliens excellents et abordables" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus longue distance (Santiago–Puerto Montt)", price: "25–50 €", detail: "Nuit en cama, très confortable" },
          { label: "Vol Santiago–Punta Arenas", price: "80–200 €", detail: "LATAM, Sky Airline, selon réservation" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Entrée Torres del Paine", price: "35 €", detail: "Tarif étranger, obligatoire" },
          { label: "Excursion geysers Tatio (Atacama)", price: "25–40 €", detail: "Départ 4h du matin depuis San Pedro" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–65 €/j", desc: "Auberge, almuerzo, transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "90–150 €/j", desc: "Hôtel 3★, restaurants mid-range, excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Hôtel de luxe, gastronomie, vols intérieurs", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Santiago – San Pedro de Atacama – Puerto Natales – Torres del Paine",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 900 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Santiago", amount: "750–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "400–600 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Transport local + vols intérieurs", amount: "250–400 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 600 – 4 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Santiago", amount: "950–1 300 €" },
            { label: "Hébergement (14 nuits)", amount: "900–1 300 €" },
            { label: "Nourriture", amount: "700–900 €" },
            { label: "Transport + vols intérieurs", amount: "600–800 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Santiago (Business)", amount: "3 000–4 500 €" },
            { label: "Hébergement (14 nuits)", amount: "2 500–3 500 €" },
            { label: "Nourriture & restaurants gastronomiques", amount: "800–1 200 €" },
            { label: "Transport & excursions privées", amount: "600–900 €" },
            { label: "Activités premium", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~14–15h (Air France, Iberia, KLM via connexion)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Peso chilien (1€ ≈ 950–1 000 CLP)" },
    { icon: "🗣️", label: "Langue", value: "Espagnol (chilien)" },
    { icon: "🔌", label: "Prise électrique", value: "Type L – 220 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, couverture limitée en Patagonie" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable à Santiago, bouteille conseillée en Patagonie" },
    { icon: "💊", label: "Santé", value: "Pas de vaccins obligatoires, altitude à prendre en compte en Atacama" },
  ],
};
