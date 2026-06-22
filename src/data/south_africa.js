export const SOUTH_AFRICA = {
  code: "ZAF",
  numericId: 710,
  name: "Afrique du Sud",
  emoji: "🇿🇦",
  capital: "Pretoria",
  language: "Afrikaans, Anglais (+ 9 langues)",
  currency: "Rand (ZAR)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 45, budgetMid: 100,
    tripMin: 2000, tripMid: 4000,
  },
  description:
    "L'Afrique du Sud est la destination africaine la plus complète : safaris dans le Kruger (Big Five), Cap de Bonne Espérance sauvage, vignobles de Stellenbosch, Garden Route spectaculaire et les plages de la côte du KwaZulu-Natal. Le tout avec une infrastructure touristique parmi les meilleures du continent.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Saison sèche & Safari",
      color: "#22c55e",
      description:
        "Meilleure période pour les safaris (végétation rase, animaux visibles autour des points d'eau). Hiver austral doux dans le Kruger (15–25 °C).",
      icon: "🦁",
    },
    {
      months: "Novembre – Avril",
      label: "Été & Cape Town",
      color: "#fb923c",
      description:
        "Cape Town au mieux de sa forme : soleil, mer turquoise, vignobles en fleurs. Plus pluvieux dans le Kruger (herbe haute, difficile pour les safaris).",
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "cape_town",
      name: "Le Cap",
      region: "Western Cape",
      data: [
        { month: "Jan", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 20, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 17, rain: 70,  icon: "☀️" },
        { month: "Jun", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 13, rain: 100, icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 85,  icon: "⛅" },
        { month: "Sep", temp: 16, rain: 50,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Déc", temp: 24, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "kruger",
      name: "Kruger (Phalaborwa)",
      region: "Limpopo / Mpumalanga",
      data: [
        { month: "Jan", temp: 27, rain: 105, icon: "🌧️" },
        { month: "Fév", temp: 26, rain: 95,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 80,  icon: "☀️" },
        { month: "Avr", temp: 22, rain: 45,  icon: "☀️" },
        { month: "Mai", temp: 18, rain: 12,  icon: "☀️" },
        { month: "Jun", temp: 15, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 15, rain: 4,   icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Nov", temp: 26, rain: 95,  icon: "☀️" },
        { month: "Déc", temp: 26, rain: 120, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Kruger National Park",
      region: "Limpopo / Mpumalanga",
      description:
        "L'un des plus grands parcs africains (20 000 km²), où vivent les Big Five en liberté : lion, léopard, éléphant, rhinocéros, buffle. Les safaris en 4x4 guidés ou en autonomie depuis les camps officiels sont une expérience inoubliable.",
      wikipedia: "Kruger_National_Park",
      tags: ["Safari", "Big Five", "Faune", "Nature"],
      mustSee: [
        { name: "Lion & Léopard — Big Five", wikipedia: "File:Big Five Game.jpg" },
        { name: "Rhinocéros blanc & noir", wikipedia: "White_rhinoceros" },
        { name: "Camp de Satara — zone aux lions", wikipedia: "Kruger_National_Park" },
        { name: "Blyde River Canyon — panorama", wikipedia: "Blyde_River_Canyon" },
      ],
    },
    {
      id: 2,
      name: "Le Cap & Péninsule du Cap",
      region: "Western Cape",
      description:
        "Cape Town, régulièrement élue plus belle ville du monde, est dominée par la Table Mountain. La péninsule du Cap offre des plages sauvages, des pingouins africains et le célèbre Cap de Bonne Espérance.",
      wikipedia: "Cape_Town",
      tags: ["Ville", "Plage", "Nature", "Gastronomie"],
      mustSee: [
        { name: "Table Mountain — téléphérique ou trek", wikipedia: "Table_Mountain" },
        { name: "Cap de Bonne Espérance", wikipedia: "Cape_of_Good_Hope" },
        { name: "Pingouins africains de Boulders Beach", wikipedia: "Boulders_Beach" },
        { name: "Robben Island — prison de Mandela", wikipedia: "Robben_Island" },
      ],
    },
    {
      id: 3,
      name: "Cape Winelands — Stellenbosch & Franschhoek",
      region: "Western Cape",
      description:
        "À 45 km du Cap, les vallées de Stellenbosch et Franschhoek produisent certains des meilleurs vins de l'hémisphère Sud : pinotage, chenin blanc, cab-sauvignon. Villages aux maisons Cap Dutch et restaurants gastronomiques.",
      wikipedia: "Stellenbosch",
      tags: ["Vin", "Gastronomie", "Architecture", "Nature"],
      mustSee: [
        { name: "Vignobles de Franschhoek", wikipedia: "Franschhoek" },
        { name: "Dégustation à Stellenbosch", wikipedia: "Stellenbosch" },
        { name: "Boschendal — pique-nique en vigne", wikipedia: "Boschendal" },
      ],
    },
    {
      id: 4,
      name: "Garden Route",
      region: "Western Cape / Eastern Cape",
      description:
        "La Garden Route est l'une des routes côtières les plus spectaculaires au monde : Knysna Lagoon turquoise, Tsitsikamma avec ses forêts millénaires et ses activités de plein air, et les plages sauvages d'Hermanus (baleines en sept.–nov.).",
      wikipedia: "File:Garden_Route,_Eastern_Cape,_South_Africa_(20485656206).jpg",
      tags: ["Route", "Nature", "Plage", "Aventure"],
      mustSee: [
        { name: "Knysna — lagon & forêts", wikipedia: "Knysna" },
        { name: "Tsitsikamma — pont de singe & kayak", wikipedia: "Tsitsikamma_National_Park" },
        { name: "Hermanus — observation des baleines", wikipedia: "Hermanus" },
        { name: "Oudtshoorn — autruches & cango caves", wikipedia: "Oudtshoorn" },
      ],
    },
    {
      id: 5,
      name: "Drakensberg",
      region: "KwaZulu-Natal",
      description:
        "Le « Dragon's Mountain » est le massif le plus spectaculaire d'Afrique australe, avec des falaises vertigineuses de 3 000 m, des peintures rupestres des San (Bushmen) et des randonnées exceptionnelles.",
      wikipedia: "Drakensberg",
      tags: ["Randonnée", "Nature", "Art rupestre", "UNESCO"],
      mustSee: [
        { name: "Amphithéâtre — falaise de 5 km", wikipedia: "Amphitheatre_(Drakensberg)" },
        { name: "Cathkin Peak", wikipedia: "Drakensberg" },
        { name: "Tugela Falls — 2e chute du monde", wikipedia: "Tugela_Falls" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Afrique du Sud offre un excellent rapport qualité-prix, surtout pour les Européens (rand faible). Les lodges de safari haut de gamme restent chers mais abordables vs. autres destinations africaines.",
    currency: "ZAR",
    exchangeRate: "1€ ≈ 20 ZAR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / B&B", price: "25–50 €", detail: "Très bon rapport qualité-prix" },
          { label: "Hôtel 4★ Cape Town", price: "80–150 €", detail: "Standard ville" },
          { label: "Safari Lodge (Kruger)", price: "200–800 €", detail: "All-inclusive avec safaris" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Braai (BBQ) & bunny chow", price: "4–8 €", detail: "Plats nationaux délicieux" },
          { label: "Restaurant mid-range", price: "12–25 €", detail: "Très abordable vs. Europe" },
          { label: "Gastronomie Cape Town", price: "35–70 €", detail: "Certains des meilleurs au monde" },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: "Transport",
        items: [
          { label: "Location voiture / jour", price: "25–50 €", detail: "Indispensable (conduite à gauche)" },
          { label: "Vol intérieur Johannesburg–Le Cap", price: "60–120 €", detail: "FlySafair, Kulula" },
          { label: "Uber (ville)", price: "3–8 €", detail: "Très développé, recommandé" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Safari game drive (matinée)", price: "40–80 €", detail: "Dans le Kruger ou privé" },
          { label: "Table Mountain (téléphérique)", price: "20–28 €", detail: "Vue à 360°" },
          { label: "Saut à l'élastique Bloukrans (216m)", price: "120–150 €", detail: "Record du monde" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–70 €/j", desc: "Guesthouses + restaurants locaux + location voiture partagée", color: "#22c55e" },
      { type: "Confort", daily: "100–180 €/j", desc: "Hôtel 4★ + bons restaurants + safaris", color: "#3b82f6" },
      { type: "Luxe", daily: "350 €+/j", desc: "Safari lodges + gastronomie + expériences exclusives", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Johannesburg (1j) → Kruger National Park (4j) → Drakensberg (2j) → Le Cap (4j) → Cape Winelands (2j) → Garden Route (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Johannesburg", amount: "500–700 €" },
            { label: "Hébergement (14 nuits)", amount: "400–700 €" },
            { label: "Nourriture", amount: "350–500 €" },
            { label: "Location voiture (14j)", amount: "400–600 €" },
            { label: "Activités & safaris", amount: "400–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Johannesburg", amount: "600–900 €" },
            { label: "Hébergement (14 nuits)", amount: "1 200–1 800 €" },
            { label: "Nourriture", amount: "600–900 €" },
            { label: "Location voiture + vols intérieurs", amount: "500–800 €" },
            { label: "Safaris & activités", amount: "700–1 100 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "10 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Johannesburg (Business)", amount: "3 000–5 000 €" },
            { label: "Safari lodges + hôtels design (14 nuits)", amount: "3 000–6 000 €" },
            { label: "Gastronomie & dégustations", amount: "1 000–2 000 €" },
            { label: "Vols charter + transport privé", amount: "1 000–2 000 €" },
            { label: "Expériences exclusives", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~11h direct (Air France, Corsair)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Rand (1€ ≈ 20 ZAR) — très favorable" },
    { icon: "🗣️", label: "Langue",            value: "Anglais (lingua franca) + 10 langues officielles" },
    { icon: "🔌", label: "Prise électrique",  value: "Type M (3 broches) – 230 V (adaptateur universel)" },
    { icon: "📱", label: "Réseau",            value: "Très bonne couverture, SIM locale ~3€ (Vodacom, MTN)" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable dans les villes, eau en bouteille en zone rurale" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen pour le Kruger (nord) — consulter médecin" },
  ],
};
