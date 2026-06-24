export const ETHIOPIA = {
  code: "ETH",
  numericId: 231,
  name: "Éthiopie",
  emoji: "🇪🇹",
  capital: "Addis-Abeba",
  language: "Amharique",
  currency: "Birr éthiopien (ETB)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 40, budgetMid: 100,
    tripMin: 1500, tripMid: 3500,
  },
  description:
    "L'Éthiopie est le berceau de l'humanité et une civilisation millénaire à part : Lalibela et ses 11 églises monolithiques taillées dans le roc (UNESCO), la Dépression de Danakil — l'endroit le plus chaud et inhospitalier de la planète —, les tribus Mursi et Hamar de la vallée de l'Omo et le monastère insulaire du lac Tana. Un voyage hors du temps.",

  bestPeriods: [
    {
      months: "Octobre – Janvier",
      label: "Saison sèche principale",
      color: "#22c55e",
      description:
        "Meilleure période : après les pluies, paysages verts, routes praticables, températures idéales. Timkat (Épiphanie éthiopienne) en janvier est extraordinaire à Lalibela.",
      icon: "⛪",
    },
    {
      months: "Juillet",
      label: "Lalibela verdoyant",
      color: "#3b82f6",
      description:
        "Juillet (saison des pluies) : Lalibela est noyée dans la brume et entourée de fleurs, les pèlerins moins nombreux. Ambiance mystique unique.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "addis_abeba",
      name: "Addis-Abeba",
      region: "Addis-Abeba",
      data: [
        { month: "Jan", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Avr", temp: 25, rain: 80,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 80,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 210, icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 200, icon: "⛅" },
        { month: "Sep", temp: 21, rain: 100, icon: "☀️" },
        { month: "Oct", temp: 23, rain: 25,  icon: "☀️" },
        { month: "Nov", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 10,  icon: "☀️" },
      ],
    },
    {
      id: "lalibela",
      name: "Lalibela",
      region: "Amhara",
      data: [
        { month: "Jan", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 24, rain: 25,  icon: "☀️" },
        { month: "Avr", temp: 24, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 50,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 150, icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 140, icon: "☀️" },
        { month: "Sep", temp: 20, rain: 60,  icon: "☀️" },
        { month: "Oct", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Déc", temp: 21, rain: 5,   icon: "☀️" },
      ],
    },
    {
      id: "danakil",
      name: "Dépression Danakil",
      region: "Afar",
      data: [
        { month: "Jan", temp: 38, rain: 5,  icon: "🌡️" },
        { month: "Fév", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Mar", temp: 40, rain: 5,  icon: "🌡️" },
        { month: "Avr", temp: 40, rain: 5,  icon: "🌡️" },
        { month: "Mai", temp: 42, rain: 5,  icon: "🌡️" },
        { month: "Jun", temp: 43, rain: 5,  icon: "🌡️" },
        { month: "Jul", temp: 41, rain: 5,  icon: "🌡️" },
        { month: "Aoû", temp: 40, rain: 5,  icon: "🌡️" },
        { month: "Sep", temp: 40, rain: 5,  icon: "🌡️" },
        { month: "Oct", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Nov", temp: 38, rain: 5,  icon: "🌡️" },
        { month: "Déc", temp: 37, rain: 5,  icon: "🌡️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lalibela — Jérusalem d'Afrique",
      region: "Amhara",
      description:
        "Lalibela est l'une des merveilles du monde médiéval : 11 églises monolithiques taillées directement dans la roche basaltique rouge au XIIe siècle, reliées par des tunnels et des tranchées. Le roi Lalibela voulait recréer la Jérusalem chrétienne. Les moines y officient encore chaque jour depuis 800 ans.",
      wikipedia: "Lalibela",
      tags: ["UNESCO", "Chrétienté", "Moyen Âge", "Unique", "Architecture", "Histoire"],
      mustSee: [
        { name: "Bete Giyorgis — église monolithique cruciforme", wikipedia: "File:Lalibela, san giorgio, esterno 24.jpg" },
        { name: "Groupe Nord des 7 églises (Bete Medhane Alem)", wikipedia: "File:Lalibela, chiesa di bete medhane alem, esterno 01.jpg" },
        { name: "Timkat (Épiphanie) — fête la plus spectaculaire d'Éthiopie (jan)", wikipedia: "Timkat" },
        { name: "Moines et prêtres en robe blanche à l'aube", wikipedia: "Ethiopian_Orthodox_Tewahedo_Church" },
      ],
    },
    {
      id: 2,
      name: "Dépression de Danakil",
      region: "Afar",
      description:
        "La Dépression de Danakil (−116 m, jusqu'à +63°C en été) est l'endroit habité le plus chaud de la Terre. Le volcan Erta Ale abrite un lac de lave permanente — l'un des rares au monde. Les formations sulfuriques de Dallol, jaunes et vertes, ressemblent à une planète extraterrestre.",
      wikipedia: "File:A Sulphur Pond, Danakil Depression, Ethiopia.jpg",
      tags: ["Volcan", "Extrême", "Lava lake", "Unique", "Désert", "Nature"],
      mustSee: [
        { name: "Erta Ale — lac de lave permanente (descente la nuit)", wikipedia: "File:Erta Ale.jpg" },
        { name: "Dallol — formations sulfuriques multicolores", wikipedia: "File:ET Afar asv2018-01 img48 Dallol.jpg" },
        { name: "Caravanes de sel des Afar (chameaux)", wikipedia: "File:Dallol fumarole solne - panoramio.jpg" },
        { name: "Lac Assal — cratère de sel coloré", wikipedia: "File:Dallol-2001.jpg" },
      ],
    },
    {
      id: 3,
      name: "Montagnes du Simien",
      region: "Amhara",
      description:
        "Les Simien (UNESCO) sont les « Alpes d'Afrique » : un plateau escarpé culminant à 4 550 m (Ras Dashen, point culminant d'Éthiopie) où vivent les géladas — babouins endémiques aux poitrines rouges —, les walia ibex (bouquetins endémiques) et les loups d'Éthiopie.",
      wikipedia: "Simien_Mountains_National_Park",
      tags: ["UNESCO", "Randonnée", "Géladas", "Altitude", "Nature"],
      mustSee: [
        { name: "Géladas (babouins aux poitrines rouges) à 2 m", wikipedia: "Gelada" },
        { name: "Trek Ras Dashen (4 550 m) — toit de l'Éthiopie", wikipedia: "Ras_Dashen" },
        { name: "Walia Ibex — bouquetins endémiques Simien", wikipedia: "Walia_ibex" },
        { name: "Loup d'Éthiopie — canidé le plus rare d'Afrique", wikipedia: "Ethiopian_wolf" },
      ],
    },
    {
      id: 4,
      name: "Axoum & Gondar",
      region: "Tigray / Amhara",
      description:
        "Axoum, capitale de l'empire aksumite (classée UNESCO), abrite les stèles géantes obélisques, l'Arche d'Alliance (selon la tradition orthodoxe) et les tombeaux royaux. Gondar, la « Camelot africaine », possède un complexe de châteaux médiévaux du XVIIe siècle uniques en Afrique.",
      wikipedia: "Axum",
      tags: ["UNESCO", "Stèles", "Châteaux", "Histoire", "Architecture"],
      mustSee: [
        { name: "Stèles d'Axoum (obélisques de 24 m)", wikipedia: "Obelisk_of_Axum" },
        { name: "Complexe de châteaux de Gondar (Fasil Ghebbi)", wikipedia: "Fasil_Ghebbi" },
        { name: "Monastères des îles du lac Tana (bateau)", wikipedia: "Lake_Tana" },
        { name: "Chutes du Nil Bleu (Tis Issat) — en saison", wikipedia: "Blue_Nile_Falls" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Éthiopie est l'une des destinations les moins chères d'Afrique. Addis-Abeba est très abordable pour une capitale. Le Danakil nécessite une excursion organisée (sécurité et guide obligatoires). Ethiopian Airlines est excellent et peu cher pour les vols intérieurs.",
    currency: "ETB",
    exchangeRate: "1€ ≈ 60 ETB",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / hôtel local", price: "10–25 €", detail: "Propre, basique, partout" },
          { label: "Hôtel 3★ Addis-Abeba ou Lalibela", price: "40–80 €", detail: "Confort correct" },
          { label: "Lodge Simien Mountains", price: "80–150 €", detail: "Base trek, repas inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Injera + wot (plat national)", price: "2–5 €", detail: "Pain fermenté + ragoût épicé" },
          { label: "Restaurant Addis-Abeba", price: "6–12 €", detail: "Cuisine éthiopienne variée" },
          { label: "Café cérémonial éthiopien", price: "1–2 €", detail: "Rituel de 3 tasses — incontournable" },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: "Transport",
        items: [
          { label: "Vol intérieur Ethiopian Airlines", price: "50–120 €", detail: "A/R Addis–Lalibela–Axoum–Gondar" },
          { label: "Bus Addis-Abeba–Awash (intercités)", price: "5–10 €", detail: "Long mais économique" },
          { label: "Excursion Danakil (2j/1n minimum)", price: "200–350 €/pers", detail: "Obligatoire — guide armé requis" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Guide Lalibela (obligatoire pour les 11 églises)", price: "25–40 €", detail: "Demi-journée ou journée" },
          { label: "Trek Simien (guide + mulet, par jour)", price: "40–70 €", detail: "Guide obligatoire en zone UNESCO" },
          { label: "Tour lac Tana (monastères insulaires)", price: "20–35 €", detail: "Bateau + entrée" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–70 €/j", desc: "Guesthouse + injera + bus + vols intérieurs partagés", color: "#22c55e" },
      { type: "Confort", daily: "100–180 €/j", desc: "Hôtel 3★ + guides + vols intérieurs + Danakil", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Hôtels supérieurs + circuit privé + guide expert", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Addis-Abeba (2j) → Lalibela (2j) → Axoum (1j) → Gondar & Simien (3j) → Danakil (2j) → Addis (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Addis-Abeba (direct)", amount: "350–600 €" },
            { label: "Vols intérieurs Ethiopian (4–5 segments)", amount: "300–500 €" },
            { label: "Hébergement (12 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Guides + Danakil + activités", amount: "400–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Addis-Abeba", amount: "450–750 €" },
            { label: "Vols intérieurs (circuit complet)", amount: "400–700 €" },
            { label: "Hébergement (12 nuits)", amount: "600–1 000 €" },
            { label: "Nourriture & restos", amount: "350–550 €" },
            { label: "Guides + Danakil + Simien + extras", amount: "700–1 200 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Addis (Business)", amount: "2 500–4 000 €" },
            { label: "Hôtels premium (12 nuits)", amount: "1 500–2 500 €" },
            { label: "Circuit privé complet avec guide expert", amount: "2 000–3 500 €" },
            { label: "Danakil privé + Simien lodge", amount: "inclus circuit" },
            { label: "Extras", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~8h direct (Ethiopian Airlines — meilleure compagnie africaine)" },
    { icon: "🪪", label: "Visa",              value: "e-Visa en ligne (~52$) ou Visa on arrival à Addis" },
    { icon: "💰", label: "Monnaie",           value: "Birr éthiopien (1€ ≈ 60 ETB) — espèces indispensables hors Addis" },
    { icon: "🗣️", label: "Langue",            value: "Amharique (officiel) — anglais compris Addis et sites touristiques" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F/L – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Couverture villes, très limitée Simien et Danakil" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire partout" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen pour les basses terres (Danakil, Gambela). Fièvre jaune si transit pays à risque." },
  ],
};
