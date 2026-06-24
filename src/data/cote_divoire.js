export const COTE_DIVOIRE = {
  code: "CIV",
  numericId: 384,
  name: "Côte d'Ivoire",
  emoji: "🇨🇮",
  capital: "Yamoussoukro",
  language: "Français, Dioula, Baoulé, Bété",
  currency: "Franc CFA (XOF)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "La Côte d'Ivoire est la première économie d'Afrique de l'Ouest : Abidjan sa métropole ultramoderne surnommée 'Paris de l'Afrique', la basilique Notre-Dame de la Paix de Yamoussoukro (la plus grande église du monde), les forêts primaires du Parc de Taï (UNESCO) avec chimpanzés, et les villages Senoufo du nord aux masques sacrés Poro.",

  bestPeriods: [
    {
      months: "Novembre – Mars",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Idéal pour voyager. Harmattan doux, peu de pluie. Nord du pays sec et accessible. Meilleure période pour les parcs.",
      icon: "☀️",
    },
    {
      months: "Juin – Septembre",
      label: "Grande saison des pluies",
      color: "#ef4444",
      description:
        "Pluies abondantes au sud (150–250mm/mois), routes difficiles en brousse, parcs peu accessibles.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "abidjan",
      name: "Abidjan",
      region: "Lagunes (sud)",
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 300, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 560, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 100, icon: "⛅" },
        { month: "Oct", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "korhogo",
      name: "Korhogo",
      region: "Savanes (nord)",
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 20,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 60,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 190, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Abidjan — Métropole africaine",
      region: "Lagunes",
      description:
        "Abidjan est la capitale économique de l'Afrique de l'Ouest francophone : le quartier du Plateau avec ses gratte-ciels sur la lagune Ébrié, Cocody et ses ambassades, Treichville et son marché nocturne animé, et la Cité d'Ivoire (luxe). Une ville de contrastes fascinante, avec une scène musicale (coupé-décalé) et gastronomique remarquable.",
      wikipedia: "Abidjan",
      tags: ["Ville", "Métropole", "Gastronomie", "Musique"],
      mustSee: [
        { name: "Cathédrale Saint-Paul du Plateau — architecture audacieuse de Aldo Spirito", wikipedia: "File:La cathédrale Saint-Paul Abidjan 03.jpg" },
        { name: "Marché de Treichville — artisanat et ambiance nocturne", wikipedia: "Treichville" },
        { name: "Musée des Civilisations de Côte d'Ivoire", wikipedia: "Abidjan" },
        { name: "Lagune Ébrié — tour en pirogue", wikipedia: "File:La lagune Ebrié - Abidjan.jpg" },
      ],
    },
    {
      id: 2,
      name: "Yamoussoukro — La Basilique",
      region: "Bélier",
      description:
        "Yamoussoukro, capitale officielle, abrite Notre-Dame de la Paix — la plus grande basilique chrétienne du monde (158m de haut, 7 000 places), financée par Félix Houphouët-Boigny et consacrée par Jean-Paul II en 1990. Le contraste avec les villages environnants est saisissant. Également : les caïmans sacrés du palais présidentiel.",
      wikipedia: "Basilica_of_Our_Lady_of_Peace",
      tags: ["Architecture", "Religion", "Unique", "Ville"],
      mustSee: [
        { name: "Basilique Notre-Dame de la Paix — la plus grande du monde (UNESCO)", wikipedia: "Basilica_of_Our_Lady_of_Peace" },
        { name: "Caïmans sacrés du lac du palais présidentiel", wikipedia: "File:Crocodile de Yamoussoukro.jpg" },
        { name: "Fondation Houphouët-Boigny pour la Paix", wikipedia: "File:Fondation_Félix_Houphouët-Boigny.jpg" },
        { name: "Mairie de Yamoussoukro et artère centrale démesurée", wikipedia: "File:Cihotelvilleyakro.jpg" },
      ],
    },
    {
      id: 3,
      name: "Parc de Taï — Forêt primaire et chimpanzés",
      region: "Bas-Sassandra",
      description:
        "Le Parc national de Taï (UNESCO) est l'une des dernières grandes forêts primaires d'Afrique de l'Ouest : 3 300 km² de forêt dense avec des chimpanzés (étudiés depuis 50 ans), des léopards, des hippopotames pygmées (espèce en danger critique) et une biodiversité exceptionnelle. Un voyage au cœur de l'Afrique profonde.",
      wikipedia: "Taï_National_Park",
      tags: ["Forêt", "UNESCO", "Chimpanzés", "Nature"],
      mustSee: [
        { name: "Observation chimpanzés de Bossou (habituées aux humains)", wikipedia: "File:Schimpansen im Nationalpark Tai.jpg" },
        { name: "Hippopotame pygmée (espèce en danger critique)", wikipedia: "Pygmy_hippopotamus" },
        { name: "Randonnée en forêt primaire avec guide", wikipedia: "Taï_National_Park" },
        { name: "Village de Taï et culture Dan", wikipedia: "File:Parc national de Taï.jpg" },
      ],
    },
    {
      id: 4,
      name: "Grand-Bassam — Ville coloniale",
      region: "Sud-Comoé",
      description:
        "Grand-Bassam, ancienne capitale coloniale française (UNESCO), est à 40km d'Abidjan : ses demeures coloniales en ruines le long de la lagune, ses plages de sable blanc et la quartier France avec ses maisons des comptoirs commerciaux du XIXe siècle. Station balnéaire et patrimoine mêlés.",
      wikipedia: "Grand-Bassam",
      tags: ["Coloniale", "UNESCO", "Plage", "Histoire"],
      mustSee: [
        { name: "Quartier France — maisons coloniales classées UNESCO", wikipedia: "File:Mairie de Grand-Bassam façade avant.jpg" },
        { name: "Musée National du Costume", wikipedia: "File:Mairie de Grand-Bassam portail.jpg" },
        { name: "Plage de Grand-Bassam — détente et fruits de mer", wikipedia: "File:Grand Bassam ap 003.jpg" },
        { name: "Rue des Boutiques coloniales restaurées", wikipedia: "File:Grand-Bassam women.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Côte d'Ivoire est la plus chère des destinations d'Afrique de l'Ouest francophone. Abidjan est une ville de prix élevés pour les hébergements. La cuisine locale reste abordable. Le franc CFA arrimé à l'euro facilite la gestion du budget.",
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / guesthouse", price: "25–50 €", detail: "Quartiers résidentiels" },
          { label: "Hôtel 3★ Abidjan (Cocody, Plateau)", price: "70–120 €", detail: "Clim, sécurité, petit-déj" },
          { label: "Hôtel de luxe (Radisson, Sofitel)", price: "180–350 €", detail: "Standard international" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Attiéké / alloco dans un maquis populaire", price: "2–6 €", detail: "Cuisine ivoirienne typique" },
          { label: "Restaurant mid-range Abidjan", price: "12–25 €", detail: "Menu + boisson, bonne cuisine" },
          { label: "Restaurant gastronomique Zone 4", price: "40–80 €", detail: "Fruits de mer, cuisine fusion" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Woro-woro (taxi collectif) — trajet urbain", price: "0,30–1 €", detail: "Transport local Abidjan" },
          { label: "Taxi clim Abidjan (Uber, Yango)", price: "3–8 €", detail: "Selon distance" },
          { label: "Bus UTB (Abidjan–Yamoussoukro, 3h)", price: "5–10 €", detail: "Confortable, climatisé" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite Basilique Notre-Dame de la Paix", price: "5–10 €", detail: "Visite guidée disponible" },
          { label: "Safari Parc de Taï avec guide", price: "50–100 €/j", detail: "Nuit en lodge incluse" },
          { label: "Tour Grand-Bassam depuis Abidjan", price: "30–50 €", detail: "Transport + guide" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Guesthouse + maquis + transport local", color: "#22c55e" },
      { type: "Confort", daily: "100–160 €/j", desc: "Hôtel 3★ Abidjan + restaurants + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Grand hôtel international + safaris privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Abidjan (3j) → Grand-Bassam (1j) → Yamoussoukro (2j) → Parc de Taï (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Abidjan", amount: "500–700 €" },
            { label: "Hébergement (10 nuits)", amount: "350–600 €" },
            { label: "Transports locaux", amount: "150–250 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Activités & entrées", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Abidjan", amount: "600–800 €" },
            { label: "Hébergement (10 nuits)", amount: "900–1 400 €" },
            { label: "Transports / chauffeur", amount: "350–600 €" },
            { label: "Nourriture & sorties", amount: "400–700 €" },
            { label: "Activités & excursions", amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h direct (Air France, Ethiopian Airlines, Air Côte d'Ivoire)" },
    { icon: "🪪", label: "Visa",              value: "Visa requis — e-Visa disponible en ligne (~30€). Valable 30 jours." },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Euros acceptés dans hôtels." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel) — communication facile pour francophones." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V. Adaptateur non nécessaire pour appareils européens." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable (Malarone/Doxycycline)." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture 4G Abidjan et grandes villes. SIM locale recommandée (MTN, Orange CI)." },
  ],
};
