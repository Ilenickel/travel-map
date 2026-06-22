export const EL_SALVADOR = {
  code: "SLV",
  numericId: 222,
  name: "El Salvador",
  emoji: "🇸🇻",
  capital: "San Salvador",
  language: "Espagnol",
  currency: "Dollar américain (USD)",
  timezone: "UTC-6",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1000, tripMid: 2200,
  },
  description:
    "El Salvador, le plus petit pays d'Amérique centrale, surprend par sa densité d'expériences : Joya de Cerén, la « Pompéi américaine » classée UNESCO, les plages de surf légendaires d'El Tunco et d'El Zonte (Bitcoin Beach), et la Ruta de las Flores, village après village de gastronomie et d'artisanat.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Idéal pour visiter le pays. Temperatures agréables, routes praticables, plages ensoleillées et surf régulier.",
      icon: "🏄",
    },
    {
      months: "Juin – Août",
      label: "Verano de San Juan",
      color: "#fb923c",
      description:
        "Pause relative dans les pluies (mi-juin à mi-juillet). Végétation luxuriante, cafetales en fleurs.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "san_salvador",
      name: "San Salvador",
      region: "Centre",
      data: [
        { month: "Jan", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 290, icon: "⛅" },
        { month: "Jul", temp: 26, rain: 260, icon: "⛅" },
        { month: "Aoû", temp: 26, rain: 270, icon: "⛅" },
        { month: "Sep", temp: 26, rain: 310, icon: "⛅" },
        { month: "Oct", temp: 26, rain: 220, icon: "⛅" },
        { month: "Nov", temp: 25, rain: 35,  icon: "☀️" },
        { month: "Déc", temp: 24, rain: 15,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Joya de Cerén — Pompéi américaine",
      region: "La Libertad",
      description:
        "Joya de Cerén est un village maya enseveli par une éruption volcanique en l'an 590 apr. J.-C., conservant maisons, jardins et réserves alimentaires intacts. Classé UNESCO, il est la seule fenêtre au monde sur la vie quotidienne maya d'un villageois ordinaire.",
      wikipedia: "Joya_de_Cerén",
      tags: ["UNESCO", "Archéologie", "Histoire", "Unique"],
      mustSee: [
        { name: "Village maya fossilisé (structures in situ)", wikipedia: "File:Joya de Cerén, domestic complex.jpg" },
        { name: "Musée de site — vaisselle et outils mayas", wikipedia: "File:ES Estructura 12 y 10 Area 1 Joya Ceren 05 2012 1516.jpg" },
        { name: "San Andrés — grand site maya voisin", wikipedia: "File:ES San Andres 05 2012 Estructura 1 La Acropolis 1562.JPG" },
      ],
    },
    {
      id: 2,
      name: "El Tunco & El Zonte (Bitcoin Beach)",
      region: "La Libertad",
      description:
        "El Tunco est la capitale du surf en Amérique centrale : vagues régulières pour tous niveaux, ambiance bohème, et couchers de soleil sur le Pacifique. El Zonte (Bitcoin Beach) est devenu mondialement connu comme premier village au monde à adopter Bitcoin comme monnaie locale.",
      wikipedia: "File:El tunco.png",
      tags: ["Surf", "Plage", "Vie nocturne", "Pacifique"],
      mustSee: [
        { name: "Surf à El Sunzal et La Bocana", wikipedia: "Surfing" },
        { name: "Rocher El Tunco — coucher de soleil", wikipedia: "File:El tunco.png" },
        { name: "La Libertad — port & poissons frais", wikipedia: "La_Libertad,_El_Salvador" },
      ],
    },
    {
      id: 3,
      name: "Lago de Coatepeque",
      region: "Santa Ana",
      description:
        "Le Lac de Coatepeque est un lac volcanique de cratère, avec des eaux bleues et chaudes à 22°C toute l'année, entouré de collines verdoyantes. Le Volcan Santa Ana voisin (2 381 m) offre l'une des meilleures randonnées du pays avec vue sur la caldera.",
      wikipedia: "File:Coatepeque Vista.jpg",
      tags: ["Nature", "Lac", "Randonnée", "Volcans"],
      mustSee: [
        { name: "Baignade et kayak dans le lac volcanique", wikipedia: "File:Coatepeque Vista.jpg" },
        { name: "Volcan Santa Ana — caldera fumante (2 381 m)", wikipedia: "Santa_Ana_Volcano" },
        { name: "Cerro Verde — forêt nuageuse et oiseaux", wikipedia: "File:Cerro Verde and Izalco Volcano.jpg" },
        { name: "Lagune Ilopango — plus grand lac du pays", wikipedia: "Lake_Ilopango" },
      ],
    },
    {
      id: 4,
      name: "Ruta de las Flores",
      region: "Sonsonate / Ahuachapán",
      description:
        "La Ruta de las Flores traverse quatre villages montagnards aux maisons colorées : Nahuizalco (artisanat en rotin), Juayúa (festival gastronomique chaque week-end), Apaneca (café de spécialité) et Ataco (murales géants). L'une des plus belles routes culturelles d'Amérique centrale.",
      wikipedia: "File:RUTA DE LAS FLORES EN ATACO. - panoramio.jpg",
      tags: ["Culture", "Gastronomie", "Artisanat", "Café"],
      mustSee: [
        { name: "Juayúa — festival gastronomique (week-ends)", wikipedia: "Juayúa" },
        { name: "Nahuizalco — artisanat en rotin et bois", wikipedia: "Nahuizalco" },
        { name: "Ataco — murales géants & café de spécialité", wikipedia: "Concepción_de_Ataco" },
        { name: "Apaneca — plantations de café et ULM", wikipedia: "Apaneca" },
      ],
    },
  ],

  costOfLiving: {
    intro: "El Salvador est l'un des pays les moins chers d'Amérique centrale et utilise le dollar américain depuis 2001. Les prix sont stables et transparents. La scène gastronomique s'est énormément développée.",
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel surf (El Tunco)", price: "10–20 €", detail: "Dortoir ou chambre ventilée" },
          { label: "Hôtel 3★ San Salvador", price: "40–70 €", detail: "Climatisé, bon confort" },
          { label: "Boutique hôtel de charme", price: "80–150 €", detail: "Vue lac ou plage" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pupusas (plat national)", price: "0,5–1 €", detail: "Galettes de maïs, partout" },
          { label: "Festival gastronomique Juayúa", price: "3–8 €", detail: "Plats copieux le week-end" },
          { label: "Restaurant San Salvador", price: "10–20 €", detail: "Cuisine créative ou fusion" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus local (interurbain)", price: "1–3 €", detail: "Lent mais pittoresque" },
          { label: "Shuttle touristique", price: "15–25 €", detail: "Confortable et rapide" },
          { label: "Mototaxi ou Uber (San Salvador)", price: "2–6 €", detail: "Pratique en ville" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Leçon de surf (2h)", price: "20–30 €", detail: "Planches incluses, El Tunco" },
          { label: "Randonnée Volcan Santa Ana", price: "15–25 €", detail: "Guide obligatoire" },
          { label: "Visite Joya de Cerén + San Andrés", price: "5–10 €", detail: "Les deux sites" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–45 €/j", desc: "Hostel + pupusas + bus local", color: "#22c55e" },
      { type: "Confort", daily: "70–110 €/j", desc: "Hôtel 3★ + restos + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Boutique hôtel + cuisine créative + privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "San Salvador (1j) → Joya de Cerén & Lac (2j) → Ruta de las Flores (2j) → El Tunco & surf (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–San Salvador", amount: "450–700 €" },
            { label: "Hébergement (8 nuits)", amount: "150–250 €" },
            { label: "Nourriture", amount: "100–180 €" },
            { label: "Transports locaux", amount: "80–120 €" },
            { label: "Activités & imprévus", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–San Salvador", amount: "550–850 €" },
            { label: "Hébergement (8 nuits)", amount: "500–750 €" },
            { label: "Nourriture", amount: "350–550 €" },
            { label: "Transports & shuttles", amount: "250–400 €" },
            { label: "Activités & extras", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–San Salvador", amount: "1 500–2 500 €" },
            { label: "Boutique hôtels (8 nuits)", amount: "1 200–2 000 €" },
            { label: "Gastronomie & expériences", amount: "500–800 €" },
            { label: "Transferts privés", amount: "300–500 €" },
            { label: "Extras", amount: "200 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~13h avec escale (via Miami, Madrid ou Bogotá)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours CA-4 (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Dollar américain (USD) — Bitcoin légal depuis 2021" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 120 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture nationale (Claro, Tigo)" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille recommandée" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen en zone rurale basse ; Zika possible (femmes enceintes)" },
  ],
};
