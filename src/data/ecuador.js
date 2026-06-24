export const ECUADOR = {
  code: "ECU",
  numericId: 218,
  name: "Équateur",
  emoji: "🇪🇨",
  capital: "Quito",
  language: "Espagnol",
  currency: "Dollar américain (USD)",
  timezone: "UTC-5 (continent) / UTC-6 (Galápagos)",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1500,
    tripMid: 2800,
  },
  description:
    "L'Équateur est un concentré de merveilles naturelles : les Galápagos (sanctuaire de la faune unique), la cordillère des Andes avec ses volcans géants, l'Amazonie primaire et la côte Pacifique. Quito, capitale coloniale UNESCO, est l'une des plus belles d'Amérique latine.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Saison sèche (Highlands & Galápagos)",
      color: "#fbbf24",
      description:
        "Meilleure période pour Quito et les Andes : ciel dégagé, volcans visibles. Galápagos fraiches mais idéales pour les manchots et otaries.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mai",
      label: "Galápagos (saison chaude)",
      color: "#38bdf8",
      description:
        "Eaux chaudes, bonne visibilité sous-marine, tortues et iguanes marins actifs. Quelques pluies mais courtes.",
      icon: "🐢",
    },
  ],

  weatherCities: [
    {
      id: "quito",
      name: "Quito",
      region: "Andes (2 850 m)",
      data: [
        { month: "Jan", temp: 15, rain: 105, icon: "⛅" },
        { month: "Fév", temp: 15, rain: 135, icon: "⛅" },
        { month: "Mar", temp: 15, rain: 155, icon: "⛅" },
        { month: "Avr", temp: 15, rain: 140, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 85, icon: "⛅" },
        { month: "Jun", temp: 14, rain: 45, icon: "⛅" },
        { month: "Jul", temp: 14, rain: 25, icon: "☀️" },
        { month: "Aoû", temp: 14, rain: 30, icon: "☀️" },
        { month: "Sep", temp: 14, rain: 60, icon: "⛅" },
        { month: "Oct", temp: 15, rain: 120, icon: "⛅" },
        { month: "Nov", temp: 15, rain: 100, icon: "⛅" },
        { month: "Déc", temp: 15, rain: 90, icon: "⛅" },
      ],
    },
    {
      id: "galapagos",
      name: "Galápagos (Santa Cruz)",
      region: "Archipel des Galápagos",
      data: [
        { month: "Jan", temp: 26, rain: 35, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 45, icon: "⛅" },
        { month: "Mar", temp: 27, rain: 40, icon: "⛅" },
        { month: "Avr", temp: 26, rain: 20, icon: "⛅" },
        { month: "Mai", temp: 25, rain: 10, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 5, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 3, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 2, icon: "☀️" },
        { month: "Sep", temp: 21, rain: 3, icon: "☀️" },
        { month: "Oct", temp: 22, rain: 10, icon: "☀️" },
        { month: "Nov", temp: 23, rain: 15, icon: "☀️" },
        { month: "Déc", temp: 25, rain: 25, icon: "☀️" },
      ],
    },
    {
      id: "cuenca",
      name: "Cuenca",
      region: "Andes méridionales",
      data: [
        { month: "Jan", temp: 15, rain: 80, icon: "⛅" },
        { month: "Fév", temp: 15, rain: 90, icon: "⛅" },
        { month: "Mar", temp: 15, rain: 110, icon: "⛅" },
        { month: "Avr", temp: 15, rain: 120, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 90, icon: "⛅" },
        { month: "Jun", temp: 14, rain: 40, icon: "⛅" },
        { month: "Jul", temp: 14, rain: 25, icon: "☀️" },
        { month: "Aoû", temp: 14, rain: 30, icon: "☀️" },
        { month: "Sep", temp: 14, rain: 60, icon: "⛅" },
        { month: "Oct", temp: 15, rain: 100, icon: "⛅" },
        { month: "Nov", temp: 15, rain: 90, icon: "⛅" },
        { month: "Déc", temp: 15, rain: 75, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Galápagos",
      region: "Archipel du Pacifique",
      description:
        "Les îles Galápagos sont un laboratoire naturel unique qui inspira Darwin. Iguanes marins, tortues géantes, otaries, manchots équatoriaux et fous à pieds bleus vivent ici sans craindre l'homme. La plongée et le snorkeling y sont parmi les meilleurs au monde.",
      wikipedia: "File:Lobo_marino_(Zalophus_californianus_wollebaeki),_Punta_Pitt,_isla_de_San_Cristóbal,_islas_Galápagos,_Ecuador,_2015-07-24,_DD_11.JPG",
      tags: ["Faune", "Plongée", "Darwin", "UNESCO", "Safari", "Plage", "Nature"],
      mustSee: [
        { name: "Isla Santa Cruz", wikipedia: "File:Costa_de_isla_Santa_Cruz,_islas_Galápagos,_Ecuador,_2015-07-26,_DD_48.JPG" },
        { name: "Isla Española (fous à pieds bleus)", wikipedia: "File:Isla Espanola - Punta Suarez - panoramio.jpg" },
        { name: "Isla Fernandina (iguanes)", wikipedia: "File:View at Fernandina Island.jpg" },
      ],
    },
    {
      id: 2,
      name: "Quito & Centre Historique",
      region: "Andes",
      description:
        "Quito est la plus haute capitale du monde (2 850 m) avec un centre historique remarquablement préservé, premier site inscrit au patrimoine UNESCO en 1978. Les iglesias dorées et les places coloniales sont saisissantes.",
      wikipedia: "Quito",
      tags: ["Colonial", "UNESCO", "Architecture", "Altitude", "Ville", "Gastronomie"],
      mustSee: [
        { name: "Basilique du Vœu National", wikipedia: "File:Basilica of the National Vow, Quito, Ecuador.JPG" },
        { name: "La Compañía de Jesús", wikipedia: "File:Iglesia_de_La_Compañía,_Quito,_Ecuador,_2015-07-22,_DD_149-151_HDR.JPG" },
        { name: "Mitad del Mundo", wikipedia: "Ciudad_Mitad_del_Mundo" },
        { name: "Teleferico Quito", wikipedia: "File:Teleferico de quito23.JPG" },
      ],
    },
    {
      id: 3,
      name: "Amazonie équatorienne",
      region: "Oriente",
      description:
        "La selva équatorienne est l'une des plus riches en biodiversité au monde. Depuis Tena ou Coca, des lodges écolodge permettent d'explorer la forêt primaire, de rencontrer des communautés kichwa et d'observer une faune extraordinaire.",
      wikipedia: "File:The Amazon Basin, Brazil.jpg",
      tags: ["Jungle", "Faune", "Culture", "Nature", "Randonnée"],
      mustSee: [
        { name: "Parc national Yasuní", wikipedia: "File:Estacion_Cientifica_Yasuni_(ECY)_Yasuni_Research_Station.jpg" },
        { name: "Tena (kayak)", wikipedia: "File:Capuchin monkeys in Tena, Ecuador.JPG" },
        { name: "Cuyabeno Wildlife Reserve", wikipedia: "File:Laguna, parque nacional de Cuyabeno, Ecuador.jpg" },
      ],
    },
    {
      id: 4,
      name: "Avenue des Volcans",
      region: "Andes centrales",
      description:
        "L'Avenue des Volcans est une rangée de sommets andins dont le Cotopaxi (5 897 m) et le Chimborazo (6 268 m, point le plus proche du soleil). Randonnées, ascensions et paysages grandioses au programme.",
      wikipedia: "File:Cotopaxi (37399959476).jpg",
      tags: ["Volcans", "Randonnée", "Andes", "Aventure"],
      mustSee: [
        { name: "Cotopaxi", wikipedia: "Cotopaxi" },
        { name: "Chimborazo", wikipedia: "Chimborazo" },
        { name: "Quilotoa (lac de cratère)", wikipedia: "Quilotoa" },
        { name: "Baños de Agua Santa", wikipedia: "File:Baños de agua santa.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "L'Équateur utilise le dollar américain, ce qui facilite les calculs. Les prix sont modérés sur le continent ; les Galápagos sont bien plus chères.",
    currency: "Dollar américain (USD)",
    exchangeRate: "1€ ≈ 1,05–1,10 USD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "8–15 €", detail: "Quito, Cuenca, très bon réseau" },
          { label: "Chambre double hôtel 3★", price: "30–60 €", detail: "Confort correct, petit-déj souvent inclus" },
          { label: "Lodge Galápagos (milieu de gamme)", price: "100–250 €", detail: "Îles, croisière possible en supplément" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Almuerzo (menu local)", price: "2–4 €", detail: "Sopa + segundo + jugo, très copieux" },
          { label: "Ceviche de camarones", price: "4–8 €", detail: "Plat national, frais et délicieux" },
          { label: "Restaurant mid-range Quito", price: "10–20 €", detail: "Cuisine andine ou internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus intercités", price: "3–8 €", detail: "Ex: Quito–Baños (3h), très pratique" },
          { label: "Vol Quito–Galápagos", price: "200–350 €", detail: "A/R, TAME ou Avianca, obligatoire" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Entrée Parc Galápagos + taxe", price: "200 €", detail: "Obligatoire, à régler à l'arrivée" },
          { label: "Croisière Galápagos (3–4 jours)", price: "600–1 500 €", detail: "Tout compris, meilleure façon de visiter" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Auberge, almuerzo, bus, sans Galápagos", color: "#22c55e" },
      { type: "Confort", daily: "65–120 €/j", desc: "Hôtel 3★, restaurants, excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Lodge luxe, croisière Galápagos, privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Quito – Galápagos – Amazonie – Cuenca",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Quito", amount: "600–850 €" },
            { label: "Hébergement (14 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transport local + vol Galápagos", amount: "300–450 €" },
            { label: "Taxe & activités Galápagos", amount: "250–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Quito", amount: "800–1 100 €" },
            { label: "Hébergement (14 nuits)", amount: "500–700 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport + vols intérieurs", amount: "450–650 €" },
            { label: "Activités & Galápagos", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Quito (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 500–2 200 €" },
            { label: "Croisière Galápagos premium", amount: "1 500–2 500 €" },
            { label: "Transport & excursions privées", amount: "500–800 €" },
            { label: "Activités premium", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~12–14h avec escale (Bogotá, Lima ou Madrid)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Dollar américain (1€ ≈ 1,05–1,10 USD)" },
    { icon: "🗣️", label: "Langue", value: "Espagnol (quechua dans certaines communautés)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B – 120 V (adaptateur nécessaire)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, limité en Amazonie et Galápagos" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille partout" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune obligatoire pour l'Amazonie" },
  ],
};
