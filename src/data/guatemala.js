export const GUATEMALA = {
  code: "GTM",
  numericId: 320,
  name: "Guatemala",
  emoji: "🇬🇹",
  capital: "Guatemala City",
  language: "Espagnol",
  currency: "Quetzal (GTQ)",
  timezone: "UTC-6",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1200, tripMid: 2800,
  },
  description:
    "Le Guatemala concentre l'essence de l'Amérique centrale : Antigua, joyau colonial classé UNESCO, le lac Atitlán cerné de volcans — l'un des plus beaux du monde — et Tikal, cité maya surgissant de la jungle péténère. Un pays surprenant, peu cher et profondément authentique.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Idéal pour Antigua, Tikal et les randonnées. Températures parfaites, pluies rares, visibilité maximale sur les volcans.",
      icon: "🌋",
    },
    {
      months: "Juillet – Août",
      label: "Caniculot (semi-sec)",
      color: "#fb923c",
      description:
        "Pause relative dans les pluies (veranillo). Moins cher, jungles verdoyantes, moins de touristes.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "antigua",
      name: "Antigua",
      region: "Sacatepéquez",
      data: [
        { month: "Jan", temp: 22, rain: 8,   icon: "☀️" },
        { month: "Fév", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 25, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 140, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 200, icon: "⛅" },
        { month: "Jul", temp: 24, rain: 170, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 160, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 23, rain: 130, icon: "☀️" },
        { month: "Nov", temp: 22, rain: 30,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 10,  icon: "☀️" },
      ],
    },
    {
      id: "peten",
      name: "Petén (Tikal)",
      region: "Petén",
      data: [
        { month: "Jan", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 28, rain: 30,  icon: "☀️" },
        { month: "Mar", temp: 30, rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 32, rain: 55,  icon: "🌡️" },
        { month: "Mai", temp: 30, rain: 150, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 190, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 230, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 210, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 60,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Antigua Guatemala",
      region: "Sacatepéquez",
      description:
        "Antigua est l'une des villes coloniales espagnoles les mieux conservées d'Amérique centrale, classée UNESCO. Rues pavées, arcs baroques, ruines de couvents, et volcans en arrière-plan : Agua, Fuego et Acatenango. La Semana Santa (Pâques) y est la plus impressionnante du monde hispanique.",
      wikipedia: "Antigua_Guatemala",
      tags: ["UNESCO", "Colonial", "Volcans", "Culture", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Arc de Santa Catalina & vue volcans", wikipedia: "Arco_de_Santa_Catalina" },
        { name: "Ruines Cathédrale Santiago", wikipedia: "File:Antigua Guatemala 1979 - Colonial ruins.jpg" },
        { name: "Ascension Volcan Acatenango (3 976 m)", wikipedia: "Acatenango" },
        { name: "Semana Santa — processions de tapis (Pâques)", wikipedia: "File:Antigua, Guatemala - Semana Santa 2011.jpg" },
      ],
    },
    {
      id: 2,
      name: "Tikal",
      region: "Petén",
      description:
        "Tikal est le plus grand site maya du monde : une cité précolombienne enfouie dans la forêt tropicale du Petén. Les temples I et IV dépassent la canopée, offrant une vue à couper le souffle sur la jungle infinie. Toucans, singes hurleurs et coatis peuplent les ruines.",
      wikipedia: "Tikal",
      tags: ["UNESCO", "Mayas", "Jungle", "Archéologie", "Randonnée", "Nature", "Architecture"],
      mustSee: [
        { name: "Temple I — Gran Jaguar (70 m)", wikipedia: "File:Tikal Temple I 02.jpg" },
        { name: "Temple IV — vue au-dessus de la canopée", wikipedia: "File:Tikal Temple IV, 2022 02.jpg" },
        { name: "Acropole Nord — nécropole royale", wikipedia: "File:Temples I & II from Temple IV (3267626478).jpg" },
        { name: "Faune : toucans, singes araignées", wikipedia: "Keel-billed_toucan" },
      ],
    },
    {
      id: 3,
      name: "Lago de Atitlán",
      region: "Sololá",
      description:
        "Le lac Atitlán, à 1 562 m d'altitude, est entouré de trois volcans et de villages mayas encore vivants. Aldous Huxley le décrivait comme « le lac le plus beau du monde ». Chaque village riverain a sa propre identité culturelle et son marché traditionnel.",
      wikipedia: "Lake_Atitlán",
      tags: ["Nature", "Culture Maya", "Lac", "Volcans", "Randonnée"],
      mustSee: [
        { name: "Village San Juan La Laguna (artisans mayas)", wikipedia: "San_Juan_La_Laguna" },
        { name: "Ascension Volcan San Pedro (3 020 m)", wikipedia: "File:Volcán San Pedro, Chile, 2016-02-09, DD 18.JPG" },
        { name: "Panajachel — marché & vie locale", wikipedia: "File:Panajachel - Cityscape.jpg" },
        { name: "San Marcos La Laguna — retraite spirituelle", wikipedia: "San_Marcos_La_Laguna" },
      ],
    },
    {
      id: 4,
      name: "Chichicastenango",
      region: "Quiché",
      description:
        "Chichicastenango abrite le plus grand marché indigène d'Amérique centrale, le jeudi et le dimanche. Les K'iche' Mayas y vendent textiles, masques, poteries et copal, dans une atmosphère de fumée d'encens sur le parvis de l'église Santo Tomás.",
      wikipedia: "Chichicastenango",
      tags: ["Marché", "Culture Maya", "Artisanat", "Traditions"],
      mustSee: [
        { name: "Marché maya (jeu & dim) — textiles & copal", wikipedia: "File:Chichicastenango market.jpg" },
        { name: "Église Santo Tomás — syncrétisme maya-catholique", wikipedia: "File:Chichicastenango Guatemala, March 2020 - Santo Tomas.jpg" },
        { name: "Cimetière coloré aux offrandes", wikipedia: "Chichicastenango" },
        { name: "Idole maya Pascual Abaj (colline sacrée)", wikipedia: "Pascual_Abaj" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Guatemala est l'une des destinations les moins chères d'Amérique centrale. Antigua est légèrement plus onéreuse mais reste très abordable. Les marchés et le transport local sont accessibles à tous.",
    currency: "GTQ",
    exchangeRate: "1€ ≈ 8,5 GTQ",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / hostel Antigua", price: "10–20 €", detail: "Dortoir ou chambre simple" },
          { label: "Hôtel colonial 3★", price: "40–80 €", detail: "Patio, bonne literie" },
          { label: "Boutique hôtel de charme", price: "100–180 €", detail: "Vue volcans, confort supérieur" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pepián ou pollo al ajillo (local)", price: "2–5 €", detail: "Marché local, excellent" },
          { label: "Restaurant Antigua", price: "8–15 €", detail: "Cuisine fusion ou traditionnelle" },
          { label: "Gastronomie & rooftop", price: "20–35 €", detail: "Avec vue volcans" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Chicken bus (interurbain)", price: "1–3 €", detail: "Lent, coloré, authentique" },
          { label: "Shuttle touristique Antigua–Atitlán", price: "15–20 €", detail: "Confortable, direct" },
          { label: "Vol Guatemala City–Flores (Tikal)", price: "80–150 €", detail: "A/R, 45 min vs 9h bus" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée site Tikal", price: "20–25 €", detail: "Journée complète" },
          { label: "Guide Tikal (bilingual)", price: "25–40 €", detail: "Recommandé pour comprendre" },
          { label: "Trekking Acatenango (2j/1n)", price: "30–60 €", detail: "Guide + bivouac" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Hostel + cuisine locale + chicken bus", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel 3★ + restaurants + shuttles", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Boutique hôtel + guide privé + vol Tikal", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Antigua (3j) → Lac Atitlán (2j) → Chichicastenango (1j) → Tikal (3j) → Antigua (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Guatemala City", amount: "450–700 €" },
            { label: "Hébergement (10 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transports locaux", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Guatemala City", amount: "600–900 €" },
            { label: "Hébergement (10 nuits)", amount: "700–1 100 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transports & excursions", amount: "500–800 €" },
            { label: "Activités & guides", amount: "350–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Guatemala City", amount: "1 200–2 000 €" },
            { label: "Boutique hôtels (10 nuits)", amount: "1 500–2 500 €" },
            { label: "Vols intérieurs + privé", amount: "500–800 €" },
            { label: "Gastronomie", amount: "500–800 €" },
            { label: "Guides privés & extras", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12h avec escale (Air France via Miami ou Dallas)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Quetzal (1€ ≈ 8,5 GTQ) — dollars acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol (officiel) + 22 langues mayas" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 120 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture Antigua & villes, faible Petén" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille ou filtrée" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé en zones basses (Petén)" },
  ],
};
