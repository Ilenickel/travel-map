export const JORDAN = {
  code: "JOR",
  numericId: 400,
  name: "Jordanie",
  emoji: "🇯🇴",
  capital: "Amman",
  language: "Arabe",
  currency: "Dinar jordanien (JOD)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "La Jordanie est un joyau du Moyen-Orient : Pétra, cité nabatéenne taillée dans la roche rose, le désert de Wadi Rum aux teintes martiennes, la mer Morte où l'on flotte sans effort et les ruines romaines de Jérash. Un pays ouvert, sûr et accueillant.",

  bestPeriods: [
    {
      months: "Mars – Mai",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures parfaites (18–25 °C), fleurs dans les vallées, idéal pour Pétra et Wadi Rum. Éviter Ramadan si possible.",
      icon: "🌸",
    },
    {
      months: "Septembre – Novembre",
      label: "Automne doré",
      color: "#fb923c",
      description:
        "Chaleur moins intense (22–28 °C), ciel clair, parfait pour explorer les sites archéologiques.",
      icon: "🏺",
    },
    {
      months: "Décembre – Février",
      label: "Hiver doux",
      color: "#93c5fd",
      description:
        "Frais mais agréable pour visiter (8–16 °C). Pétra sous la neige est spectaculaire. Mer Morte accessible.",
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "amman",
      name: "Amman",
      region: "Nord",
      data: [
        { month: "Jan", temp: 8,  rain: 65,  icon: "⛅" },
        { month: "Fév", temp: 9,  rain: 65,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 18, rain: 20,  icon: "☀️" },
        { month: "Mai", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Jul", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 10, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "wadi_rum",
      name: "Wadi Rum",
      region: "Sud",
      data: [
        { month: "Jan", temp: 10, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 12, rain: 8,   icon: "☀️" },
        { month: "Mar", temp: 17, rain: 5,   icon: "☀️" },
        { month: "Avr", temp: 23, rain: 2,   icon: "☀️" },
        { month: "Mai", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Jun", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 24, rain: 2,   icon: "☀️" },
        { month: "Nov", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 12, rain: 8,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Pétra",
      region: "Ma'an",
      description:
        "L'une des sept merveilles du monde moderne : une cité nabatéenne entière sculptée dans la roche rose, avec le Trésor (Al-Khazneh) comme symbole absolu.",
      wikipedia: "Petra",
      tags: ["Histoire", "Archéologie", "UNESCO"],
      mustSee: [
        { name: "Le Trésor (Al-Khazneh)", wikipedia: "Al-Khazneh" },
        { name: "Le Monastère (Ad Deir)", wikipedia: "File:The Monastery, Petra, Jordan8.jpg" },
        { name: "Le Siq (gorge d'entrée)", wikipedia: "File:Al hakem mosque.jpg" },
        { name: "Pétra by Night", wikipedia: "File:Petra by Night, Jordan.jpg" },
      ],
    },
    {
      id: 2,
      name: "Wadi Rum",
      region: "Aqaba",
      description:
        "Désert de grès et de granit aux teintes rouges et orangées, décor de science-fiction qui a servi pour plusieurs films. Nuits sous les étoiles en camp bédouin inoubliables.",
      wikipedia: "Wadi_Rum",
      tags: ["Désert", "Nature", "Aventure", "Randonnée"],
      mustSee: [
        { name: "Dunes de sable rouge", wikipedia: "Wadi_Rum" },
        { name: "Pont naturel de Burdah", wikipedia: "File:Wadi Rum in December.jpg" },
      ],
    },
    {
      id: 3,
      name: "Amman",
      region: "Amman",
      description:
        "Capitale moderne et ancienne à la fois, avec la Citadelle sur une colline, l'amphithéâtre romain du IIe siècle et les ruelles animées du quartier Rainbow Street.",
      wikipedia: "Amman",
      tags: ["Ville", "Histoire", "Culture"],
      mustSee: [
        { name: "Citadelle d'Amman", wikipedia: "Amman_Citadel" },
        { name: "Théâtre romain d'Amman", wikipedia: "File:Roman theater of Amman 01.jpg" },
        { name: "Jérash — ruines romaines", wikipedia: "Jerash" },
      ],
    },
    {
      id: 4,
      name: "Mer Morte",
      region: "Ghor",
      description:
        "Le point le plus bas de la Terre (430 m sous le niveau de la mer). Baignade flottante dans une eau ultra-salée aux propriétés minérales uniques, enduire de boue noire.",
      wikipedia: "Dead_Sea",
      tags: ["Nature", "Bien-être", "Unique"],
      mustSee: [
        { name: "Bain flottant (sel 30%)", wikipedia: "File:Dead Sea salt crystals.jpg" },
        { name: "Coucher de soleil sur la mer", wikipedia: "File:The dead sea.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Jordanie est relativement onéreuse pour la région mais offre un excellent rapport qualité/expérience. Pétra à elle seule représente un budget conséquent (entrée ~60 €/jour).",
    currency: "JOD",
    exchangeRate: "1€ ≈ 0,78 JOD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse", price: "10–20 €", detail: "Amman, Petra" },
          { label: "Hôtel 3★", price: "40–70 €", detail: "Confort correct" },
          { label: "Camp bédouin Wadi Rum", price: "60–120 €", detail: "Dîner inclus souvent" },
          { label: "Resort Mer Morte", price: "150–300 €", detail: "Accès piscine/plage privée inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Falafel/shawarma de rue", price: "1–3 €", detail: "Excellent et partout" },
          { label: "Restaurant local (mansaf)", price: "8–15 €", detail: "Plat national jordanien" },
          { label: "Restaurant touristique", price: "20–40 €", detail: "Près de Pétra" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Minibus intercités", price: "2–8 €", detail: "Amman–Pétra ~4h" },
          { label: "Location voiture / jour", price: "30–50 €", detail: "Indispensable pour flexibilité" },
          { label: "Taxi à Amman", price: "3–8 €", detail: "Trajets urbains" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Pétra (1 jour)", price: "55 €", detail: "Tarif plein — incontournable" },
          { label: "Tour Wadi Rum (demi-journée)", price: "25–40 €", detail: "En 4×4 avec guide" },
          { label: "Jordan Pass", price: "~80 €", detail: "Visa + Pétra inclus — recommandé" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–60 €/j", desc: "Auberge + street food + transports partagés", color: "#22c55e" },
      { type: "Confort", daily: "90–150 €/j", desc: "Hôtel 3★ + restos + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Resort + camp glamping + expériences guidées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Amman (2j) → Jérash (1j) → Wadi Rum (2j) → Pétra (2j) → Mer Morte (2j) → Amman (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Amman", amount: "400–600 €" },
            { label: "Hébergement (10 nuits)", amount: "250–400 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transport local", amount: "150–200 €" },
            { label: "Entrées (Pétra, Jordan Pass)", amount: "200–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Amman", amount: "500–800 €" },
            { label: "Hébergement (10 nuits)", amount: "700–1 200 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Location voiture", amount: "300–500 €" },
            { label: "Activités & entrées", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Amman (Business)", amount: "1 500–2 500 €" },
            { label: "Hébergement 5★ (10 nuits)", amount: "2 000–4 000 €" },
            { label: "Gastronomie & expériences", amount: "1 000–2 000 €" },
            { label: "Transport & guide privé", amount: "800–1 500 €" },
            { label: "Activités premium", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~4–5h (Royal Jordanian, Air France)" },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée (40 JOD ≈ 56 USD) ou Jordan Pass recommandé (~70–100 USD, inclut visa + entrée Pétra + autres sites)" },
    { icon: "💰", label: "Monnaie",           value: "Dinar (1€ ≈ 0,78 JOD)" },
    { icon: "🗣️", label: "Langue",            value: "Arabe (anglais répandu dans le tourisme)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type B/D/F/G – 230 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture, SIM locale dès l'aéroport" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, hépatite A recommandée" },
  ],
};
