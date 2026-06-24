export const COLOMBIA = {
  code: "COL",
  numericId: 170,
  name: "Colombie",
  emoji: "🇨🇴",
  capital: "Bogotá",
  language: "Espagnol",
  currency: "Peso colombien (COP)",
  timezone: "UTC-5",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1400,
    tripMid: 2600,
  },
  description:
    "La Colombie est l'une des destinations les plus en vogue d'Amérique latine, mêlant Caraïbes turquoise, Amazonie, Andes verdoyantes et villes colorées. De Cartagena coloniale à Medellín l'innovante, en passant par la Vallée de Cocora, le pays offre une incroyable diversité.",

  bestPeriods: [
    {
      months: "Décembre – Mars",
      label: "Saison sèche",
      color: "#fbbf24",
      description:
        "Meilleure période pour Cartagena et la côte Caraïbes : soleil garanti, mer calme. Bogotá et Medellín sont agréables.",
      icon: "☀️",
    },
    {
      months: "Juillet – Août",
      label: "Été caraïbes",
      color: "#38bdf8",
      description:
        "Deuxième saison sèche, idéale pour les îles San Andrés et la côte Pacifique. Quelques pluies possibles dans les Andes.",
      icon: "🏖️",
    },
  ],

  weatherCities: [
    {
      id: "bogota",
      name: "Bogotá",
      region: "Andes (2 600 m)",
      data: [
        { month: "Jan", temp: 14, rain: 45, icon: "⛅" },
        { month: "Fév", temp: 15, rain: 60, icon: "⛅" },
        { month: "Mar", temp: 15, rain: 90, icon: "⛅" },
        { month: "Avr", temp: 15, rain: 135, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 125, icon: "⛅" },
        { month: "Jun", temp: 14, rain: 70, icon: "⛅" },
        { month: "Jul", temp: 14, rain: 55, icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 65, icon: "⛅" },
        { month: "Sep", temp: 14, rain: 95, icon: "⛅" },
        { month: "Oct", temp: 14, rain: 155, icon: "⛅" },
        { month: "Nov", temp: 14, rain: 125, icon: "⛅" },
        { month: "Déc", temp: 14, rain: 60, icon: "⛅" },
      ],
    },
    {
      id: "cartagena",
      name: "Carthagène",
      region: "Côte Caraïbes",
      data: [
        { month: "Jan", temp: 28, rain: 20, icon: "☀️" },
        { month: "Fév", temp: 29, rain: 10, icon: "☀️" },
        { month: "Mar", temp: 30, rain: 5, icon: "☀️" },
        { month: "Avr", temp: 30, rain: 30, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 80, icon: "⛅" },
        { month: "Jun", temp: 30, rain: 70, icon: "⛅" },
        { month: "Jul", temp: 31, rain: 60, icon: "⛅" },
        { month: "Aoû", temp: 31, rain: 85, icon: "⛅" },
        { month: "Sep", temp: 30, rain: 110, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 200, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 50, icon: "⛅" },
      ],
    },
    {
      id: "medellin",
      name: "Medellín",
      region: "Antioquia",
      data: [
        { month: "Jan", temp: 22, rain: 80, icon: "☀️" },
        { month: "Fév", temp: 22, rain: 80, icon: "☀️" },
        { month: "Mar", temp: 23, rain: 115, icon: "☀️" },
        { month: "Avr", temp: 23, rain: 145, icon: "☀️" },
        { month: "Mai", temp: 23, rain: 145, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 90, icon: "☀️" },
        { month: "Jul", temp: 24, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 80, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 120, icon: "☀️" },
        { month: "Oct", temp: 22, rain: 175, icon: "☀️" },
        { month: "Nov", temp: 22, rain: 145, icon: "☀️" },
        { month: "Déc", temp: 22, rain: 90, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Cartagena de Indias",
      region: "Côte Caraïbes",
      description:
        "Ville coloniale inscrite au patrimoine UNESCO, Cartagena éblouit par ses rues colorées, ses fortifications imposantes et ses plages des îles du Rosario proches. L'ambiance caribéenne, la musique cumbia et la gastronomie côtière en font un incontournable.",
      wikipedia: "Cartagena,_Colombia",
      tags: ["Colonial", "Plage", "UNESCO", "Histoire", "Architecture"],
      mustSee: [
        { name: "Ciudad Amurallada (vieille ville)", wikipedia: "File:City walls of Cartagena 01.jpg" },
        { name: "Castillo de San Felipe", wikipedia: "Castillo_San_Felipe_de_Barajas" },
        { name: "Îles du Rosario", wikipedia: "Rosario_Islands" },
        { name: "Convento de la Popa", wikipedia: "Convento_de_la_Popa" },
      ],
    },
    {
      id: 2,
      name: "Medellín",
      region: "Antioquia",
      description:
        "Ancienne ville gangrenée par les cartels, Medellín est devenue un modèle d'innovation urbaine et de renaissance sociale. Le système de métrocâble, les escaliers mécaniques de la commune 13 et les parcs-bibliothèques en témoignent.",
      wikipedia: "File:Ball court - Comuna 13 - Medellín - Colombia 2024.jpg",
      tags: ["Ville", "Culture", "Transformation", "Art", "Architecture"],
      mustSee: [
        { name: "Comuna 13", wikipedia: "File:Ball court - Comuna 13 - Medellín - Colombia 2024.jpg" },
        { name: "Plaza Botero", wikipedia: "File:Medellín, Plaza Botero, 2023-07 CN-01.jpg" },
        { name: "Parque Arví", wikipedia: "File:MetrocableArví1.JPG" },
        { name: "Musée d'Antioquia", wikipedia: "Museum_of_Antioquia" },
      ],
    },
    {
      id: 3,
      name: "Vallée de Cocora",
      region: "Quindío (Zona Cafetera)",
      description:
        "La Vallée de Cocora abrite les palmiers de cire géants, arbres nationaux de Colombie, qui s'élèvent jusqu'à 60 m dans les nuages. La randonnée dans ce paysage unique est l'une des plus belles d'Amérique du Sud.",
      wikipedia: "Cocora_Valley",
      tags: ["Randonnée", "Nature", "Palmiers", "Café"],
      mustSee: [
        { name: "Palmiers de cire", wikipedia: "File:Ceroxylon quindiuense cocora.jpg" },
        { name: "Salento", wikipedia: "File:Campanile di Salento.jpg" },
        { name: "Finca caféière", wikipedia: "File:Cafetales, en Colombia.jpg" },
        { name: "Los Nevados (volcans)", wikipedia: "Los_Nevados_National_Natural_Park" },
      ],
    },
    {
      id: 4,
      name: "Bogotá",
      region: "Cundinamarca",
      description:
        "La haute capitale (2 600 m) est le cœur culturel de la Colombie avec ses musées de classe mondiale, le quartier historique de La Candelaria et le célèbre Musée de l'Or. Le marché de Paloquemao et la Ciclovía du dimanche sont des expériences locales authentiques.",
      wikipedia: "File:Capitalio National de Colombia, Bogotá.jpg",
      tags: ["Ville", "Culture", "Musées", "Gastronomie"],
      mustSee: [
        { name: "Musée de l'Or", wikipedia: "File:BOG Museo del Oro.JPG" },
        { name: "Candelaria", wikipedia: "File:La Candelaria, Bogota, Colombia (5818105341).jpg" },
        { name: "Cerro Monserrate", wikipedia: "File:Cerro Monserrate - Bogotá.JPG" },
        { name: "Marché Paloquemao", wikipedia: "File:Bogotá_plaza_de_Paloquemao.JPG" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "La Colombie est l'une des destinations les plus abordables d'Amérique latine. Les coûts sont très variables selon la région : Cartagena est plus chère que les villes andines.",
    currency: "Peso colombien (COP)",
    exchangeRate: "1€ ≈ 4 300–4 500 COP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "8–14 €", detail: "Bogotá, Medellín, très bon réseau" },
          { label: "Chambre double hôtel 3★", price: "25–50 €", detail: "Confort correct, souvent piscine" },
          { label: "Boutique hôtel Cartagena", price: "70–150 €", detail: "Maisons coloniales dans la vieille ville" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Almuerzo (menu du midi)", price: "3–5 €", detail: "Soupe + plat + boisson, très copieux" },
          { label: "Bandeja paisa (plat national)", price: "5–8 €", detail: "Riz, haricots, chicharron, œuf, avocat" },
          { label: "Restaurant mid-range", price: "10–20 €", detail: "Poisson ou viande avec verre de vin" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Transmilenio Bogotá (BRT)", price: "0,50 €", detail: "Trajet unique, réseau étendu" },
          { label: "Vol intérieur (ex: Bogotá–Cartagena)", price: "40–80 €", detail: "VivaAir, Avianca selon réservation" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Excursion Îles du Rosario (journée)", price: "25–40 €", detail: "Bateau + snorkeling" },
          { label: "Tour à vélo Bogotá", price: "15–25 €", detail: "Visite des quartiers en petit groupe" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–45 €/j", desc: "Auberge, almuerzo, transports locaux", color: "#22c55e" },
      { type: "Confort", daily: "65–100 €/j", desc: "Hôtel 3★, restaurants mid-range, excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "180 €+/j", desc: "Hôtel colonial, gastronomie, voiture avec chauffeur", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Bogotá – Medellín – Zona Cafetera – Cartagena",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 400 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bogotá", amount: "600–800 €" },
            { label: "Hébergement (14 nuits)", amount: "250–400 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transport local + vols intérieurs", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 600 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bogotá", amount: "800–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "600–900 €" },
            { label: "Nourriture", amount: "500–700 €" },
            { label: "Transport + vols intérieurs", amount: "350–500 €" },
            { label: "Activités & imprévus", amount: "300–450 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bogotá (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 500–2 200 €" },
            { label: "Nourriture & restaurants", amount: "600–900 €" },
            { label: "Transport & excursions privées", amount: "400–600 €" },
            { label: "Activités premium", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~11–12h (Air France, Iberia, KLM)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Peso colombien (1€ ≈ 4 300–4 500 COP)" },
    { icon: "🗣️", label: "Langue", value: "Espagnol" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B – 110 V (adaptateur nécessaire)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, SIM locale chez Claro ou Tigo" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable partout, eau en bouteille recommandée" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune recommandé pour les zones forestières" },
  ],
};
