export const GUYANA = {
  code: "GUY",
  numericId: 328,
  name: "Guyana",
  emoji: "🇬🇾",
  capital: "Georgetown",
  language: "Anglais",
  currency: "Dollar du Guyana (GYD)",
  timezone: "UTC-4",
  filter: {
    budgetMin: 35,
    budgetMid: 70,
    tripMin: 1700,
    tripMid: 3000,
  },
  description:
    "Le Guyana est l'unique pays anglophone d'Amérique du Sud, une terre de jungle primaire quasi-intacte couvrant 80% du territoire. Chutes de Kaieteur (cinq fois Niagara), tepuys, jaguars et une biodiversité exceptionnelle en font une destination d'écotourisme de premier plan pour les aventuriers.",

  bestPeriods: [
    {
      months: "Septembre – Novembre",
      label: "Saison sèche courte",
      color: "#fbbf24",
      description:
        "Meilleure période pour explorer l'intérieur : routes praticables et faune visible autour des points d'eau.",
      icon: "☀️",
    },
    {
      months: "Février – Avril",
      label: "Saison sèche principale",
      color: "#86efac",
      description:
        "Deuxième saison sèche, idéale pour les chutes de Kaieteur et la Rupununi. Georgetown plus agréable.",
      icon: "🌤" ,
    },
  ],

  weatherCities: [
    {
      id: "georgetown",
      name: "Georgetown",
      region: "Demerara-Mahaica",
      data: [
        { month: "Jan", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 265, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 320, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 320, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 255, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 165, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 80, icon: "⛅" },
        { month: "Oct", temp: 28, rain: 90, icon: "⛅" },
        { month: "Nov", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 230, icon: "🌧️" },
      ],
    },
    {
      id: "lethem",
      name: "Lethem",
      region: "Rupununi (Savanes)",
      data: [
        { month: "Jan", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Fév", temp: 31, rain: 60, icon: "⛅" },
        { month: "Mar", temp: 32, rain: 70, icon: "🌡️" },
        { month: "Avr", temp: 31, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 30, rain: 195, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 260, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 230, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 155, icon: "🌧️" },
        { month: "Sep", temp: 31, rain: 65, icon: "⛅" },
        { month: "Oct", temp: 31, rain: 55, icon: "⛅" },
        { month: "Nov", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Déc", temp: 29, rain: 160, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Chutes de Kaieteur",
      region: "Potaro-Siparuni",
      description:
        "Les chutes de Kaieteur sont l'une des plus puissantes au monde : 226 m de hauteur et 100 m de large, avec un débit impressionnant. Accessibles uniquement en avion depuis Georgetown, elles sont entourées d'une forêt primaire abritant la grenouille poison dorée unique au monde.",
      wikipedia: "Kaieteur_Falls",
      tags: ["cascade", "nature", "unique", "jungle"],
      mustSee: [
        { name: "Kaieteur Falls (chute principale)", wikipedia: "Kaieteur_Falls" },
        { name: "Parc national Kaieteur", wikipedia: "File:Potato River (Kaieteur) 23 20 35 006000.jpeg" },
        { name: "Gorge de Kaieteur", wikipedia: "File:Kaieteur Falls Guyana (2) 2007.jpg" },
      ],
    },
    {
      id: 2,
      name: "Savanes de Rupununi",
      region: "Upper Takutu-Upper Essequibo",
      description:
        "Les savanes de Rupununi sont une vaste plaine à la frontière brésilienne, mosaïque de prairies, forêts galeries et zones humides. Ici vivent les communautés indigènes Makushi et Wapishana, ainsi que jaguars, loutres géantes et arapaïmas géants.",
      wikipedia: "File:Rupununi River.jpg",
      tags: ["safari", "cultures indigènes", "faune", "nature"],
      mustSee: [
        { name: "Parc national Iwokrama", wikipedia: "File:Iwokrama Rainforest, Guyana (12179378186).jpg" },
        { name: "Canopy Walkway Iwokrama", wikipedia: "File:Canopy walkway in Kakum National Park 7.jpg" },
        { name: "Arapaïma (pêche)", wikipedia: "Arapaima" },
      ],
    },
    {
      id: 3,
      name: "Georgetown",
      region: "Demerara-Mahaica",
      description:
        "La capitale est un mélange unique de cultures créole, indienne, amérindienne et hollandaise. Ses maisons victoriennes en bois peintes de couleurs vives, son marché de Stabroek et sa cathédrale Saint-George (plus haute cathédrale en bois du monde) sont remarquables.",
      wikipedia: "Georgetown,_Guyana",
      tags: ["capitale", "colonial", "multiculturel", "architecture"],
      mustSee: [
        { name: "Marché de Stabroek", wikipedia: "Stabroek_Market" },
        { name: "Cathédrale Saint-George", wikipedia: "File:20191121 Guyana 0048 Georgetown sRGB (49295795336).jpg" },
        { name: "Musée National du Guyana", wikipedia: "Guyana_National_Museum" },
        { name: "Promenade du Seawall", wikipedia: "Georgetown,_Guyana" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Guyana est en développement et les coûts touristiques restent modérés. L'écotourisme dans l'intérieur peut être onéreux en raison des vols et lodges.",
    currency: "Dollar du Guyana (GYD)",
    exchangeRate: "1€ ≈ 220–240 GYD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse simple Georgetown", price: "20–40 €", detail: "Basique mais fonctionnel" },
          { label: "Hôtel 3★ Georgetown", price: "60–100 €", detail: "Bon confort, avec AC" },
          { label: "Ecolodge Iwokrama", price: "100–200 €", detail: "Tout compris, immersion en jungle" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas local (cook shop)", price: "3–6 €", detail: "Curry, riz, roti, typique créole-indien" },
          { label: "Restaurant mid-range Georgetown", price: "10–20 €", detail: "Cuisine variée, ambiance décontractée" },
          { label: "Repas en ecolodge", price: "15–25 €", detail: "Inclus dans certains forfaits" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Vol Georgetown–Kaieteur (charter)", price: "120–180 €", detail: "Avion bi-moteur, durée 45 min A/R" },
          { label: "Minibus Georgetown–Lethem", price: "15–25 €", detail: "8–10h de piste, aventureux" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Tour Kaieteur (journée)", price: "150–220 €", detail: "Vol charter + guide, depuis Georgetown" },
          { label: "Séjour Rupununi (3 jours)", price: "200–400 €", detail: "Lodge, safari, communautés indigènes" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Guesthouse, cook shop, minibus", color: "#22c55e" },
      { type: "Confort", daily: "70–120 €/j", desc: "Hôtel 3★, restaurants, excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Ecolodge premium, tours privés, vols charters", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Georgetown – Kaieteur – Iwokrama – Rupununi",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 700 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Georgetown", amount: "800–1 100 €" },
            { label: "Hébergement (14 nuits)", amount: "300–450 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transport local + vol Kaieteur", amount: "200–350 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Georgetown", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "700–1 000 €" },
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
            { label: "Vol A/R Paris–Georgetown (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 800–2 500 €" },
            { label: "Nourriture & restaurants", amount: "400–600 €" },
            { label: "Tours privés + vols charters", amount: "800–1 200 €" },
            { label: "Activités premium", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~12–14h avec escale (Port of Spain, Miami, Amsterdam)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Dollar du Guyana (1€ ≈ 220–240 GYD)" },
    { icon: "🗣️", label: "Langue", value: "Anglais (langue officielle)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B/G – 120 V (adaptateur nécessaire)" },
    { icon: "📱", label: "Réseau", value: "4G à Georgetown, quasi inexistant à l'intérieur" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune obligatoire + antipaludéens pour l'intérieur" },
  ],
};
