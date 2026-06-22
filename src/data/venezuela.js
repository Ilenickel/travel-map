export const VENEZUELA = {
  code: "VEN",
  numericId: 862,
  name: "Venezuela",
  emoji: "🇻🇪",
  capital: "Caracas",
  language: "Espagnol",
  currency: "Bolívar soberano (VES)",
  timezone: "UTC-4",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1500,
    tripMid: 2800,
  },
  description:
    "Le Venezuela possède l'une des plus grandes biodiversités au monde : le Salto Ángel (plus haute chute du monde), les tepuys de la Gran Sabana, les Llanos (plaines à jaguar et anaconda) et les plages des Caraïbes. Attention : la situation politique et économique est instable — vérifiez impérativement les derniers conseils aux voyageurs du ministère des Affaires étrangères avant tout départ.",

  bestPeriods: [
    {
      months: "Décembre – Avril",
      label: "Saison sèche",
      color: "#fbbf24",
      description:
        "Meilleure période pour visiter les tepuys, la Gran Sabana et les côtes. Routes praticables, chutes visibles.",
      icon: "☀️",
    },
    {
      months: "Juin – Novembre",
      label: "Saison des pluies (Llanos)",
      color: "#22c55e",
      description:
        "Les Llanos inondés accueillent une faune extraordinaire (caïmans, capybaras, oiseaux). Certaines zones inaccessibles.",
      icon: "🐊",
    },
  ],

  weatherCities: [
    {
      id: "caracas",
      name: "Caracas",
      region: "Région Capitale",
      data: [
        { month: "Jan", temp: 23, rain: 20, icon: "☀️" },
        { month: "Fév", temp: 23, rain: 15, icon: "☀️" },
        { month: "Mar", temp: 24, rain: 25, icon: "☀️" },
        { month: "Avr", temp: 25, rain: 65, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 26, rain: 105, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 90, icon: "☀️" },
        { month: "Aoû", temp: 27, rain: 95, icon: "⛅" },
        { month: "Sep", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 24, rain: 85, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 40, icon: "☀️" },
      ],
    },
    {
      id: "ciudad-bolivar",
      name: "Ciudad Bolívar",
      region: "Bolívar (Gran Sabana)",
      data: [
        { month: "Jan", temp: 28, rain: 30, icon: "☀️" },
        { month: "Fév", temp: 29, rain: 20, icon: "☀️" },
        { month: "Mar", temp: 31, rain: 25, icon: "🌡️" },
        { month: "Avr", temp: 31, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 145, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 90, icon: "⛅" },
        { month: "Déc", temp: 27, rain: 40, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Salto Ángel",
      region: "Bolívar",
      description:
        "La plus haute chute d'eau du monde (979 m, soit 15 fois Niagara) plonge depuis le sommet du Tepuy Auyán depuis des millénaires. Accessible en avion ou en pirogue depuis Ciudad Bolívar ou Canaima, c'est l'une des merveilles naturelles absolues de la planète.",
      wikipedia: "File:Salto del Angel-Canaima-Venezuela03.JPG",
      tags: ["cascade", "unique", "nature", "tepuy"],
      mustSee: [
        { name: "Tepuy Auyán-tepui", wikipedia: "File:Auyan Tepui 01.JPG" },
        { name: "Lagune de Canaima", wikipedia: "File:Canaima 34.JPG" },
        { name: "Parc national Canaima", wikipedia: "File:Canaima National Park.JPG" },
        { name: "Pirogue sur le Río Carrao", wikipedia: "File:Canaima 21.jpg" },
      ],
    },
    {
      id: 2,
      name: "Gran Sabana & Roraima",
      region: "Bolívar",
      description:
        "La Gran Sabana est un plateau mystique de savanes et tepuys (montagnes tabulaires) à la frontière brésilienne. Le Tepuy Roraima, dont le sommet perdu dans les nuages a inspiré Conan Doyle pour Le Monde Perdu, se trek en 6 jours depuis San Francisco de Yuruaní.",
      wikipedia: "Gran_Sabana",
      tags: ["tepuys", "randonnée", "nature", "mystique"],
      mustSee: [
        { name: "Tepuy Roraima", wikipedia: "Mount_Roraima" },
        { name: "Salto Kama", wikipedia: "File:Kamá Falls - Salto Kama (23495860840).jpg" },
        { name: "Quebrada de Jaspe (rivière rouge)", wikipedia: "File:Quebrada del Jaspe-La Gran Sabana-Venezuela07.JPG" },
        { name: "San Francisco de Yuruaní", wikipedia: "File:San Francisco de Yuruani.jpg" },
      ],
    },
    {
      id: 3,
      name: "Llanos (plaines)",
      region: "Apure / Barinas",
      description:
        "Les Llanos vénézuéliens sont l'un des meilleurs endroits au monde pour observer la faune sauvage : anacondas, caïmans, capybaras, jaguars et plus de 400 espèces d'oiseaux. Les hatos (ranchs) proposent des safaris à cheval ou en 4x4.",
      wikipedia: "File:Los_Llanos_Colombia_by_David.png",
      tags: ["safari", "faune", "jaguar", "nature"],
      mustSee: [
        { name: "Hato El Cedral", wikipedia: "Capybara" },
        { name: "Hato Piñero", wikipedia: "File:Hato Piñero 2002 001.jpg" },
        { name: "Caïmans du Llanos", wikipedia: "Spectacled_caiman" },
        { name: "Anaconda géant", wikipedia: "Green_anaconda" },
      ],
    },
    {
      id: 4,
      name: "Archipel Los Roques",
      region: "Caraïbes",
      description:
        "L'archipel Los Roques est un parc national marin d'eaux turquoise et de plages de sable blanc à 160 km au nord de Caracas. Pêche à la mouche, plongée et voile dans un cadre préservé des Caraïbes.",
      wikipedia: "File:CayoCareneroLosRoquesVenezuelapic1.jpg",
      tags: ["plages", "plongée", "île", "Caraïbes"],
      mustSee: [
        { name: "Cayo de Agua", wikipedia: "File:Cayo de Agua in Los Roques.jpg" },
        { name: "Francisquí", wikipedia: "File:Cayo Francisqui apacible.JPG" },
        { name: "Gran Roque (village)", wikipedia: "File:Village Gran Roque.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Venezuela connaît une situation économique très instable avec une inflation élevée. Les prix sont difficiles à estimer avec précision. La monnaie locale est peu fiable ; le dollar américain et l'euro sont largement acceptés.",
    currency: "Bolívar soberano (VES) / Dollar américain (USD)",
    exchangeRate: "Taux officiel instable — vérifiez avant le départ",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Posada simple", price: "15–30 USD", detail: "Qualité variable, payer en USD" },
          { label: "Hôtel correct (Caracas)", price: "40–80 USD", detail: "Avec sécurité, quartiers sûrs" },
          { label: "Hato (ranch Llanos)", price: "80–200 USD", detail: "Tout compris, safaris inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Arepa (plat national)", price: "1–3 USD", detail: "Galette de maïs fourrée, partout" },
          { label: "Menu local", price: "5–10 USD", detail: "Soupe + plat, dans les comedores" },
          { label: "Restaurant touristique", price: "15–30 USD", detail: "Payer en USD, qualité variable" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Vol Caracas–Canaima (Salto Ángel)", price: "100–200 USD", detail: "Vol charter, inclus dans les tours" },
          { label: "Bus longue distance", price: "5–20 USD", detail: "Réseau variable selon la région" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Tour Salto Ángel (3 jours)", price: "250–450 USD", detail: "Tout compris, pirogue + camping" },
          { label: "Trek Roraima (6 jours)", price: "300–500 USD", detail: "Guide + porteur + nourriture obligatoires" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Posada, arepas, transport local, prudence requise", color: "#22c55e" },
      { type: "Confort", daily: "65–100 €/j", desc: "Hôtel sécurisé, tours guidés, USD recommandé", color: "#3b82f6" },
      { type: "Luxe", daily: "150 €+/j", desc: "Hatos, lodges privés, vols charters", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Caracas – Gran Sabana/Canaima – Llanos – Los Roques",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Caracas", amount: "700–900 €" },
            { label: "Hébergement (14 nuits)", amount: "250–400 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Tours Salto Ángel + transport", amount: "300–450 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Caracas", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "500–700 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Tours + vols intérieurs", amount: "600–900 €" },
            { label: "Activités & imprévus", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Caracas (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 500–2 200 €" },
            { label: "Tours privés + vols charters", amount: "1 000–1 500 €" },
            { label: "Nourriture & restaurants", amount: "400–600 €" },
            { label: "Activités premium + sécurité", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~11–13h avec escale (Bogotá, Panama, Madrid)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours) — vérifiez avant départ" },
    { icon: "💰", label: "Monnaie", value: "USD/EUR largement préférés au bolivar local" },
    { icon: "🗣️", label: "Langue", value: "Espagnol" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B – 120 V (adaptateur nécessaire)" },
    { icon: "📱", label: "Réseau", value: "Couverture variable, évitez de dépendre du réseau local" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune obligatoire ; vérifiez les derniers conseils sécurité MEAE" },
  ],
};
