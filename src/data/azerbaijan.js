export const AZERBAIJAN = {
  code: "AZE",
  numericId: 31,
  name: "Azerbaïdjan",
  emoji: "🇦🇿",
  capital: "Bakou",
  language: "Azerbaïdjanais",
  currency: "Manat (AZN)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 1200, tripMid: 2200,
  },
  description:
    "L'Azerbaïdjan, « Pays du Feu », surprend avec sa capitale Bakou aux tours flammes ultramodernes surplombant une vieille ville médiévale classée à l'UNESCO. Au-delà, des villages de montagne préservés, les forêts de Sheki et des feux naturels éternels font de ce pays du Caucase une découverte authentique.",

  bestPeriods: [
    {
      months: "Avril – Juin",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures agréables (13–24 °C), fleurs dans les montagnes, idéal pour Bakou et les régions rurales.",
      icon: "🌸",
    },
    {
      months: "Septembre – Octobre",
      label: "Automne",
      color: "#fb923c",
      description:
        "Chaleur retombée, feuillages magnifiques dans les forêts de Sheki, raisins en Kuba.",
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "baku",
      name: "Bakou",
      region: "Bakou",
      data: [
        { month: "Jan", temp: 5,  rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 5,  rain: 20,  icon: "⛅" },
        { month: "Mar", temp: 8,  rain: 25,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 25,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Sep", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 17, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 11, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 7,  rain: 25,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Bakou",
      region: "Bakou",
      description:
        "Capitale fascinante où cohabitent la tour de la Vierge (XIIe s.) et les Flame Towers futuristes, la vieille ville médiévale UNESCO et les boutiques Chanel de l'avenue Neftçiler.",
      wikipedia: "File:Baku city at night.jpg",
      tags: ["Ville", "Architecture", "Histoire", "Culture"],
      mustSee: [
        { name: "Flame Towers — skyline de Bakou", wikipedia: "Flame_Towers" },
        { name: "Tour de la Vierge (Qız Qalası)", wikipedia: "File:Baku Maiden Tower.jpg" },
        { name: "Palais des Shirvanshahs (UNESCO)", wikipedia: "Palace_of_the_Shirvanshahs" },
        { name: "Vieille ville Icherisheher (UNESCO)", wikipedia: "File:Fuente en Baku, Azerbaiyán, 2016-09-26, DD 227-229 HDR.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sheki",
      region: "Sheki-Zagatala",
      description:
        "Ancienne capitale des khans, Sheki est l'une des plus belles villes historiques du Caucase, avec son caravansérail ottoman et le palais aux vitraux de mosaïque incomparables.",
      wikipedia: "File:Şəki,_Azerbaijan_-_overview_1987.jpg",
      tags: ["Histoire", "Architecture", "Forêts"],
      mustSee: [
        { name: "Palais des Khans de Sheki", wikipedia: "File:Shaki KhanPalace 004 3718.jpg" },
        { name: "Caravansérail de Sheki", wikipedia: "File:Palace of Shaki Khans 1.jpg" },
        { name: "Forêts et sentiers de montagne", wikipedia: "File:Shaki Forest.jpg" },
      ],
    },
    {
      id: 3,
      name: "Gobustan",
      region: "Gobustan",
      description:
        "Réserve nationale avec des milliers de pétroglyphes préhistoriques (jusqu'à 40 000 ans), des volcans de boue bouillonnants et un environnement lunaire spectaculaire.",
      wikipedia: "File:Gobustan State Reserve 7.jpg",
      tags: ["Nature", "Archéologie", "UNESCO"],
      mustSee: [
        { name: "Pétroglyphes de Gobustan (UNESCO)", wikipedia: "File:Petroglyphs of Qobustan 2.jpg" },
        { name: "Volcans de boue de Gobustan", wikipedia: "File:Gobustan mud volcanoes 02.jpg" },
        { name: "Temple du Feu Ateshgah", wikipedia: "File:Ateshgah of Baku.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Azerbaïdjan est abordable, surtout hors de Bakou. Bakou a connu une forte hausse des prix mais reste moins cher que l'Europe.",
    currency: "AZN",
    exchangeRate: "1€ ≈ 1,85 AZN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse", price: "15–30 €", detail: "Vieille ville ou province" },
          { label: "Hôtel 3★ Bakou", price: "40–70 €", detail: "Centre-ville" },
          { label: "Hôtel boutique 4★", price: "80–150 €", detail: "Vieille ville ou bord de mer" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Piti (soupe traditionnelle)", price: "3–6 €", detail: "Mouton dans une marmite en terre" },
          { label: "Restaurant local", price: "6–12 €", detail: "Kebabs, dolma, plats caucasiens" },
          { label: "Restaurant Bakou", price: "15–35 €", detail: "Cuisine internationale disponible" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Bakou (trajet)", price: "0,30 €", detail: "Très bien desservi" },
          { label: "Minibus intercités", price: "3–8 €", detail: "Bakou–Sheki ~5h" },
          { label: "Taxi (application)", price: "2–5 €", detail: "Bolt ou taxi local" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Gobustan UNESCO", price: "4–6 €", detail: "Pétroglyphes + musée" },
          { label: "Palais des Khans de Sheki", price: "3–5 €", detail: "Incontournable" },
          { label: "Tour de la Vierge", price: "4–6 €", detail: "Vue sur Bakou" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse + restaurants locaux + transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "65–100 €/j", desc: "Hôtel 3★ + bonnes tables + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "180 €+/j", desc: "Hôtel boutique + gastronomie + circuit privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Bakou (4j) → Gobustan (1j) → Sheki (2j) → Guba/Khinalug (2j) → Bakou (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bakou", amount: "350–550 €" },
            { label: "Hébergement (10 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transports", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "150–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bakou", amount: "450–700 €" },
            { label: "Hébergement (10 nuits)", amount: "550–900 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport & guide", amount: "400–600 €" },
            { label: "Activités & imprévus", amount: "300–400 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bakou (Business)", amount: "1 500–2 500 €" },
            { label: "Hébergement boutique (10 nuits)", amount: "1 200–2 000 €" },
            { label: "Gastronomie & expériences", amount: "600–1 000 €" },
            { label: "Circuit privé", amount: "500–800 €" },
            { label: "Activités premium", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~5h (Azerbaijan Airlines, Turkish Airlines)" },
    { icon: "🪪", label: "Visa",              value: "e-Visa en ligne (~23$, 30 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Manat (1€ ≈ 1,85 AZN)" },
    { icon: "🗣️", label: "Langue",            value: "Azerbaïdjanais (russe compris, anglais à Bakou)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture, SIM locale ~3€" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire" },
  ],
};
