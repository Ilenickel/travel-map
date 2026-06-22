export const NICARAGUA = {
  code: "NIC",
  numericId: 558,
  name: "Nicaragua",
  emoji: "🇳🇮",
  capital: "Managua",
  language: "Espagnol",
  currency: "Córdoba (NIO)",
  timezone: "UTC-6",
  filter: {
    budgetMin: 25, budgetMid: 60,
    tripMin: 900, tripMid: 2200,
  },
  description:
    "Le Nicaragua est le pays le moins cher et le plus authentique d'Amérique centrale : Granada, joyau colonial aux façades colorées, León et ses façades aux fresques révolutionnaires, l'île volcanique d'Ometepe posée sur un lac géant, et la côte Caraïbe sauvage des Corn Islands.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison idéale : ciel bleu, routes praticables, lagune Apoyo limpide, températures agréables. Très peu de touristes.",
      icon: "🌋",
    },
    {
      months: "Juillet – Août",
      label: "Veranillo (pause sèche)",
      color: "#fb923c",
      description:
        "Pause relative dans les pluies. Végétation luxuriante, moins de monde, tarifs au plus bas.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "granada",
      name: "Granada",
      region: "Pacifique Sud",
      data: [
        { month: "Jan", temp: 28, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 29, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Avr", temp: 33, rain: 20,  icon: "🌡️" },
        { month: "Mai", temp: 32, rain: 120, icon: "🌡️" },
        { month: "Jun", temp: 30, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 30, rain: 180, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 10,  icon: "⛅" },
      ],
    },
    {
      id: "corn_islands",
      name: "Corn Islands",
      region: "Caraïbes",
      data: [
        { month: "Jan", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 240, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 190, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 310, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Granada",
      region: "Pacifique",
      description:
        "Granada est la première ville coloniale espagnole du continent américain (1524), avec ses rues pavées, ses iglesias jaune et blanc, et ses façades colorées encadrant le lac Nicaragua. Les Îlots de Granada (365 petites îles dans le lac) se visitent en bateau depuis la rive.",
      wikipedia: "Granada,_Nicaragua",
      tags: ["Colonial", "Histoire", "Lac", "Archipel"],
      mustSee: [
        { name: "Îlots de Granada (365 îles en bateau)", wikipedia: "File:Calle_Hermanos_Jorge_Marrero_by_the_coast_of_Las_Palmas_de_Gran_Canaria,_La_Isleta,_Gran_Canaria,_2023_May.jpg" },
        { name: "Iglesia de La Merced (vue depuis le clocher)", wikipedia: "File:La Merced Church-Granada, Nicaragua.jpg" },
        { name: "Volcan Mombacho", wikipedia: "File:Mombacho taken from the Pan-American Highway.jpg" },
        { name: "Lagune Apoyo — nage en eau volcanique", wikipedia: "File:Laguna de apoyo.jpg" },
      ],
    },
    {
      id: 2,
      name: "León",
      region: "Pacifique Nord",
      description:
        "León est la capitale intellectuelle et révolutionnaire du Nicaragua : sa cathédrale classée UNESCO est la plus grande d'Amérique centrale, ses murs sont couverts de fresques sandinistes, et le volcan Cerro Negro voisin est le spot de sandboarding le plus célèbre au monde.",
      wikipedia: "File:Calvario 2575.jpg",
      tags: ["UNESCO", "Révolution", "Volcans", "Surf des sables"],
      mustSee: [
        { name: "Cathédrale de León (UNESCO) — toit panoramique", wikipedia: "León_Cathedral" },
        { name: "Sandboarding Cerro Negro (volcan actif)", wikipedia: "Cerro_Negro" },
        { name: "Plage Los Brasiles — surf Pacifique", wikipedia: "File:Big_Corn_Island,_aka_Great_Corn_Island,_Nicaragua_06.jpg" },
      ],
    },
    {
      id: 3,
      name: "Isla de Ometepe",
      region: "Lago Nicaragua",
      description:
        "Ometepe est une île unique formée de deux volcans jumeaux — Concepción et Maderas — émergés du Lac Nicaragua, le plus grand lac d'Amérique centrale. Pétroghyphes précolombiens, singes hurleurs et sources thermales jalonnent ses pentes verdoyantes.",
      wikipedia: "File:Ometepe banner.jpg",
      tags: ["Volcans", "Nature", "Île", "Randonnée"],
      mustSee: [
        { name: "Ascension Volcan Concepción (1 610 m)", wikipedia: "Concepción_(volcano)" },
        { name: "Randonnée Volcan Maderas & cratère-lagune", wikipedia: "File:Looking down onto Maderas (192935764).jpg" },
        { name: "Pétroglyphes mayas de Finca Magdalena", wikipedia: "Petroglyph" },
        { name: "Singes hurleurs et oiseaux endémiques", wikipedia: "Mantled_howler" },
      ],
    },
    {
      id: 4,
      name: "Corn Islands",
      region: "Caraïbes",
      description:
        "Les Corn Islands sont les joyaux caraïbes méconnus du Nicaragua : Little Corn Island est un paradis sans voiture, avec des récifs coralliens immaculés et des eaux turquoise. Homard frais, hammocks et plages sauvages composent l'essentiel du programme.",
      wikipedia: "Corn_Islands",
      tags: ["Île", "Caraïbes", "Snorkel", "Détente"],
      mustSee: [
        { name: "Little Corn — snorkel récifs (sans voitures)", wikipedia: "File:Big Corn Island aka Great Corn island, Nicaragua 14.jpg" },
        { name: "Bioluminescence la nuit dans la baie", wikipedia: "Bioluminescence" },
        { name: "Bluefields — ville créole et musique", wikipedia: "Bluefields" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Nicaragua est le pays le moins cher d'Amérique centrale. Les prix sont très accessibles et la córdoba est faible. Un budget routard serré est tout à fait possible. Les Corn Islands coûtent un peu plus cher.",
    currency: "NIO",
    exchangeRate: "1€ ≈ 39 NIO",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel / guesthouse coloniale", price: "8–15 €", detail: "Granada ou León" },
          { label: "Guesthouse Little Corn", price: "20–40 €", detail: "Vue mer, sans clim" },
          { label: "Hôtel boutique de charme", price: "50–100 €", detail: "Patio colonial fleuri" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Gallo pinto + viande (marché)", price: "2–4 €", detail: "Plat national" },
          { label: "Homard entier (Corn Islands)", price: "8–15 €", detail: "Pêche du jour, délicieux" },
          { label: "Restaurant colonial (Granada)", price: "6–12 €", detail: "Vue cathédrale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Managua–Granada ou León", price: "1–2 €", detail: "Très bon marché" },
          { label: "Ferry Ometepe (San Jorge)", price: "2–3 €", detail: "45 min ou 1h30" },
          { label: "Vol Managua–Corn Islands", price: "80–140 €", detail: "A/R La Costena, 1h" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Sandboarding Cerro Negro", price: "20–30 €", detail: "Transport + guide + planche" },
          { label: "Tour Îlots Granada (2h)", price: "15–20 €", detail: "Bateau partagé" },
          { label: "Ascension Mombacho + canopée", price: "25–40 €", detail: "Guide inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–40 €/j", desc: "Hostel + gallo pinto + bus local", color: "#22c55e" },
      { type: "Confort", daily: "60–100 €/j", desc: "Hôtel colonial + restos + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "180 €+/j", desc: "Boutique hôtel + guide privé + vols intérieurs", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "León (2j) → Granada & Îlots (2j) → Lagune Apoyo (1j) → Ometepe (2j) → Corn Islands (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nicaragua", amount: "450–700 €" },
            { label: "Hébergement (10 nuits)", amount: "130–220 €" },
            { label: "Nourriture", amount: "120–200 €" },
            { label: "Transports (bus + ferry + vol)", amount: "100–180 €" },
            { label: "Activités & imprévus", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nicaragua", amount: "550–850 €" },
            { label: "Hébergement (10 nuits)", amount: "500–800 €" },
            { label: "Nourriture", amount: "350–550 €" },
            { label: "Transports", amount: "250–400 €" },
            { label: "Activités & excursions", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nicaragua (Business)", amount: "1 800–3 000 €" },
            { label: "Boutique hôtels (10 nuits)", amount: "1 000–1 800 €" },
            { label: "Gastronomie & expériences", amount: "500–800 €" },
            { label: "Vols intérieurs & transferts", amount: "400–600 €" },
            { label: "Extras", amount: "200 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~14h avec escale (via Miami ou Bogotá)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours CA-4 (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Córdoba (1€ ≈ 39 NIO) — dollars US acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol (officiel) — créole anglais sur la côte Caraïbe" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 120 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture Pacifique, très limitée Corn Islands" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen en zones rurales basses et côte Caraïbe" },
  ],
};
