export const PHILIPPINES = {
  code: "PHL",
  numericId: 608,
  name: "Philippines",
  emoji: "🇵🇭",
  capital: "Manille",
  language: "Filipino (tagalog), anglais",
  currency: "Peso philippin (PHP)",
  timezone: "UTC+8",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1300,
    tripMid: 2500,
  },
  description:
    "L'archipel des Philippines compte plus de 7 100 îles baignées par des eaux parmi les plus riches en biodiversité marine au monde. Des rizières en terrasses de Banaue aux lagons de Palawan, des volcans d'Albay aux plages d'El Nido, c'est l'une des destinations les plus spectaculaires d'Asie du Sud-Est.",

  bestPeriods: [
    {
      months: "Novembre – Mai",
      label: "Saison sèche (amihan)",
      color: "#fbbf24",
      description:
        "Vent du nord-est qui apporte temps sec et ensoleillé sur la côte ouest et les îles Visayas. Idéal pour Palawan, Boracay et Cebu.",
      icon: "☀️",
    },
    {
      months: "Juin – Octobre",
      label: "Côte Est (Mindanao, Siargao)",
      color: "#22c55e",
      description:
        "La côte est reste ensoleillée pendant la saison des pluies de la côte ouest. Siargao et Davao sont idéaux.",
      icon: "🏄",
    },
  ],

  weatherCities: [
    {
      id: "manila",
      name: "Manille",
      region: "Luzon",
      data: [
        { month: "Jan", temp: 25, rain: 20, icon: "☀️" },
        { month: "Fév", temp: 26, rain: 10, icon: "☀️" },
        { month: "Mar", temp: 27, rain: 15, icon: "☀️" },
        { month: "Avr", temp: 30, rain: 30, icon: "🌤" },
        { month: "Mai", temp: 31, rain: 115, icon: "🌦" },
        { month: "Jun", temp: 30, rain: 265, icon: "🌧" },
        { month: "Jul", temp: 29, rain: 440, icon: "🌧" },
        { month: "Aoû", temp: 29, rain: 435, icon: "🌧" },
        { month: "Sep", temp: 29, rain: 345, icon: "🌧" },
        { month: "Oct", temp: 29, rain: 200, icon: "🌧" },
        { month: "Nov", temp: 27, rain: 65, icon: "🌤" },
        { month: "Déc", temp: 26, rain: 25, icon: "☀️" },
      ],
    },
    {
      id: "palawan",
      name: "Palawan (Puerto Princesa)",
      region: "Palawan",
      data: [
        { month: "Jan", temp: 25, rain: 15, icon: "☀️" },
        { month: "Fév", temp: 26, rain: 10, icon: "☀️" },
        { month: "Mar", temp: 27, rain: 20, icon: "☀️" },
        { month: "Avr", temp: 29, rain: 35, icon: "🌤" },
        { month: "Mai", temp: 30, rain: 80, icon: "🌦" },
        { month: "Jun", temp: 29, rain: 170, icon: "🌧" },
        { month: "Jul", temp: 28, rain: 230, icon: "🌧" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧" },
        { month: "Sep", temp: 28, rain: 190, icon: "🌧" },
        { month: "Oct", temp: 28, rain: 165, icon: "🌧" },
        { month: "Nov", temp: 27, rain: 80, icon: "🌦" },
        { month: "Déc", temp: 25, rain: 30, icon: "🌤" },
      ],
    },
    {
      id: "cebu",
      name: "Cebu",
      region: "Visayas",
      data: [
        { month: "Jan", temp: 26, rain: 90, icon: "🌦" },
        { month: "Fév", temp: 26, rain: 70, icon: "⛅" },
        { month: "Mar", temp: 27, rain: 60, icon: "🌤" },
        { month: "Avr", temp: 29, rain: 50, icon: "☀️" },
        { month: "Mai", temp: 30, rain: 80, icon: "🌤" },
        { month: "Jun", temp: 29, rain: 130, icon: "🌦" },
        { month: "Jul", temp: 29, rain: 140, icon: "🌧" },
        { month: "Aoû", temp: 28, rain: 145, icon: "🌧" },
        { month: "Sep", temp: 28, rain: 155, icon: "🌧" },
        { month: "Oct", temp: 28, rain: 160, icon: "🌧" },
        { month: "Nov", temp: 27, rain: 140, icon: "🌧" },
        { month: "Déc", temp: 26, rain: 115, icon: "🌦" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Palawan & El Nido",
      region: "Palawan",
      description:
        "Palawan est régulièrement élue plus belle île du monde. El Nido et Coron offrent des lagons émeraude entourés de falaises karstiques, des plages secrètes et une vie sous-marine exceptionnelle. La rivière souterraine de Puerto Princesa est classée UNESCO.",
      wikipedia: "Palawan",
      tags: ["lagons", "plongée", "île", "UNESCO"],
      mustSee: [
        { name: "El Nido (Bacuit Archipelago)", wikipedia: "El_Nido,_Palawan" },
        { name: "Coron (épaves)", wikipedia: "Coron,_Palawan" },
        { name: "Rivière souterraine de Puerto Princesa", wikipedia: "Puerto_Princesa_Subterranean_River_National_Park" },
        { name: "Big Lagoon", wikipedia: "El_Nido,_Palawan" },
      ],
    },
    {
      id: 2,
      name: "Boracay",
      region: "Visayas (Aklan)",
      description:
        "La plage White Beach de Boracay est l'une des plus belles d'Asie : sable poudreux blanc, eaux turquoise et ambiance festive. Après sa fermeture pour nettoyage en 2018, l'île est revenue plus belle et plus réglementée.",
      wikipedia: "Boracay",
      tags: ["plages", "nightlife", "sports nautiques", "soleil"],
      mustSee: [
        { name: "White Beach", wikipedia: "Boracay" },
        { name: "Puka Shell Beach", wikipedia: "File:Puka Beach Boracay - panoramio.jpg" },
        { name: "Diniwid Beach", wikipedia: "File:Sunset_at_Diniwid_Beach,_Boracay_Island.jpg" },
        { name: "Mount Luho (point de vue)", wikipedia: "File:View_from_Mount_Luho_View_Deck_Boracay_-_panoramio.jpg" },
      ],
    },
    {
      id: 3,
      name: "Rizières de Banaue",
      region: "Ifugao (Cordillère de Luzon)",
      description:
        "Les rizières en terrasses des Cordillères de Luzon, sculptées il y a 2 000 ans par les ancêtres des peuples Ifugao, sont inscrites au patrimoine UNESCO. Un paysage agricole extraordinaire à 1 200 m d'altitude.",
      wikipedia: "File:Pana_Banaue_Rice_Terraces_(Cropped).jpg",
      tags: ["UNESCO", "culture", "randonnée", "paysages"],
      mustSee: [
        { name: "Batad (terrasses)", wikipedia: "File:Batad Rice Terraces 4.jpg" },
        { name: "Banaue viewpoint", wikipedia: "File:Pana_Banaue_Rice_Terraces_(Cropped).jpg" },
        { name: "Bangaan village", wikipedia: "File:Banaue Viewpoint (3294295523).jpg" },
        { name: "Sagada (grottes)", wikipedia: "Sagada" },
      ],
    },
    {
      id: 4,
      name: "Siargao",
      region: "Surigao del Norte",
      description:
        "Siargao est la capitale philippine du surf grâce à la vague Cloud 9, l'une des plus belles d'Asie. L'île conserve une atmosphère détendue avec ses mangroves, ses lagons secrets et sa faune marine exceptionnelle.",
      wikipedia: "File:Siargao Island.jpg",
      tags: ["surf", "île", "plongée", "nature"],
      mustSee: [
        { name: "Cloud 9 (vague surf)", wikipedia: "File:Catching the Wave.jpg" },
        { name: "Sugba Lagoon", wikipedia: "File:SUGBA LAGOON (MAY 2019).jpg" },
        { name: "Sohoton Cove", wikipedia: "File:Middle Bucas Grande in Dapa, Siargao.jpg" },
        { name: "Naked Island", wikipedia: "File:Naked Island.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Les Philippines sont une destination très abordable. Les coûts varient entre les îles touristiques (Palawan, Boracay) et les zones moins fréquentées. Les transports inter-îles en avion sont nécessaires pour les grandes distances.",
    currency: "Peso philippin (PHP)",
    exchangeRate: "1€ ≈ 60–65 PHP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "6–12 €", detail: "Manille, Cebu, bonne qualité" },
          { label: "Bungalow sur la plage", price: "20–45 €", detail: "Fan ou AC, qualité variable" },
          { label: "Resort 4★ bord de mer", price: "80–180 €", detail: "El Nido ou Boracay, avec piscine" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Turo-turo (resto local)", price: "2–4 €", detail: "Adobo, kare-kare, sinigang" },
          { label: "Lechon (cochon rôti, portion)", price: "3–6 €", detail: "Spécialité nationale de Cebu" },
          { label: "Restaurant touristique", price: "8–20 €", detail: "Fruits de mer frais, poisson grillé" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Vol intérieur (ex: Manille–Palawan)", price: "25–80 €", detail: "Cebu Pacific ou AirAsia, réserver tôt" },
          { label: "Jeepney (transport local)", price: "0,20–0,50 €", detail: "Emblème culturel philippin, partout" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Island hopping (journée) El Nido", price: "15–25 €", detail: "Tour A, B, C ou D en groupe" },
          { label: "Plongée (baptême ou fun dive)", price: "25–50 €", detail: "Sites exceptionnels à Coron ou Tubbataha" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Auberge/bungalow, turo-turo, transports locaux", color: "#22c55e" },
      { type: "Confort", daily: "65–120 €/j", desc: "Resort, restos mid-range, island hopping", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Resort 5★, plongée privée, vols intérieurs fréquents", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Manille – Palawan (El Nido) – Cebu – Siargao",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 300 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Manille", amount: "550–800 €" },
            { label: "Hébergement (14 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Vols intérieurs + bateaux", amount: "200–300 €" },
            { label: "Activités & imprévus", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Manille", amount: "750–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "600–900 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Vols intérieurs + transports", amount: "350–550 €" },
            { label: "Activités & imprévus", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Manille (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 800–2 500 €" },
            { label: "Nourriture & restaurants", amount: "500–800 €" },
            { label: "Transport & excursions privées", amount: "500–800 €" },
            { label: "Plongée & activités premium", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~14–15h avec escale (Bangkok, HK, KL)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (30 jours, prolongeable à 59 jours)" },
    { icon: "💰", label: "Monnaie", value: "Peso philippin (1€ ≈ 60–65 PHP)" },
    { icon: "🗣️", label: "Langue", value: "Filipino (tagalog) et anglais (officiel)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B – 220 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes et grandes îles, SIM locale chez Globe ou Smart" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Antipaludéens pour certaines îles (Palawan rural), vaccin hépatite A recommandé" },
  ],
};
