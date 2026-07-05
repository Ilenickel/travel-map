export const GUATEMALA = {
  code: "GTM",
  numericId: 320,
  name: { fr: "Guatemala", en: "Guatemala" },
  emoji: "🇬🇹",
  capital: { fr: "Guatemala City", en: "Guatemala City" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Quetzal (GTQ)", en: "Quetzal (GTQ)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1200, tripMid: 2800,
  },
  description: {
    fr: "Le Guatemala concentre l'essence de l'Amérique centrale : Antigua, joyau colonial classé UNESCO, le lac Atitlán cerné de volcans — l'un des plus beaux du monde — et Tikal, cité maya surgissant de la jungle péténère. Un pays surprenant, peu cher et profondément authentique.",
    en: "Guatemala captures the essence of Central America: Antigua, a UNESCO-listed colonial gem; Lake Atitlán ringed by volcanoes — one of the most beautiful in the world — and Tikal, a Maya city rising from the Petén jungle. A surprising, affordable and deeply authentic country.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour Antigua, Tikal et les randonnées. Températures parfaites, pluies rares, visibilité maximale sur les volcans.",
        en: "Ideal for Antigua, Tikal and hiking. Perfect temperatures, rare rain and maximum visibility of the volcanoes.",
      },
      icon: "🌋",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August" },
      label: { fr: "Caniculot (semi-sec)", en: "Canícula (semi-dry spell)" },
      color: "#fb923c",
      description: {
        fr: "Pause relative dans les pluies (veranillo). Moins cher, jungles verdoyantes, moins de touristes.",
        en: "A relative break in the rains (veranillo). Cheaper, greener jungles and fewer tourists.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "antigua",
      name: "Antigua",
      region: { fr: "Sacatepéquez", en: "Sacatepéquez" },
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
      region: { fr: "Petén", en: "Petén" },
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
      region: { fr: "Sacatepéquez", en: "Sacatepéquez" },
      description: {
        fr: "Antigua est l'une des villes coloniales espagnoles les mieux conservées d'Amérique centrale, classée UNESCO. Rues pavées, arcs baroques, ruines de couvents, et volcans en arrière-plan : Agua, Fuego et Acatenango. La Semana Santa (Pâques) y est la plus impressionnante du monde hispanique.",
        en: "Antigua is one of the best-preserved Spanish colonial cities in Central America and is UNESCO-listed. Cobblestone streets, baroque arches, convent ruins and volcanoes in the background — Agua, Fuego and Acatenango. Its Holy Week (Easter) celebrations are the most impressive in the Spanish-speaking world.",
      },
      wikipedia: "Antigua_Guatemala",
      tags: ["UNESCO", "Colonial", "Volcans", "Culture", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Arc de Santa Catalina & vue volcans", en: "Santa Catalina Arch & volcano views" }, wikipedia: "Arco_de_Santa_Catalina" },
        { name: { fr: "Ruines Cathédrale Santiago", en: "Santiago Cathedral ruins" }, wikipedia: "File:Antigua Guatemala 1979 - Colonial ruins.jpg" },
        { name: { fr: "Ascension Volcan Acatenango (3 976 m)", en: "Acatenango Volcano hike (3,976 m)" }, wikipedia: "Acatenango" },
        { name: { fr: "Semana Santa — processions de tapis (Pâques)", en: "Holy Week — sawdust carpet processions (Easter)" }, wikipedia: "File:Antigua, Guatemala - Semana Santa 2011.jpg" },
      ],
    },
    {
      id: 2,
      name: "Tikal",
      region: { fr: "Petén", en: "Petén" },
      description: {
        fr: "Tikal est le plus grand site maya du monde : une cité précolombienne enfouie dans la forêt tropicale du Petén. Les temples I et IV dépassent la canopée, offrant une vue à couper le souffle sur la jungle infinie. Toucans, singes hurleurs et coatis peuplent les ruines.",
        en: "Tikal is the largest Maya site in the world: a pre-Columbian city buried in the Petén rainforest. Temples I and IV rise above the canopy, offering breathtaking views over the endless jungle. Toucans, howler monkeys and coatis inhabit the ruins.",
      },
      wikipedia: "Tikal",
      tags: ["UNESCO", "Mayas", "Jungle", "Archéologie", "Randonnée", "Nature", "Architecture"],
      mustSee: [
        { name: { fr: "Temple I — Gran Jaguar (70 m)", en: "Temple I — Great Jaguar (70 m)" }, wikipedia: "File:Tikal Temple I 02.jpg" },
        { name: { fr: "Temple IV — vue au-dessus de la canopée", en: "Temple IV — views above the canopy" }, wikipedia: "File:Tikal Temple IV, 2022 02.jpg" },
        { name: { fr: "Acropole Nord — nécropole royale", en: "North Acropolis — royal necropolis" }, wikipedia: "File:Temples I & II from Temple IV (3267626478).jpg" },
        { name: { fr: "Faune : toucans, singes araignées", en: "Wildlife: toucans, spider monkeys" }, wikipedia: "Keel-billed_toucan" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lago de Atitlán", en: "Lake Atitlán" },
      region: { fr: "Sololá", en: "Sololá" },
      description: {
        fr: "Le lac Atitlán, à 1 562 m d'altitude, est entouré de trois volcans et de villages mayas encore vivants. Aldous Huxley le décrivait comme « le lac le plus beau du monde ». Chaque village riverain a sa propre identité culturelle et son marché traditionnel.",
        en: "Lake Atitlán, at an altitude of 1,562 m, is surrounded by three volcanoes and still-living Maya villages. Aldous Huxley described it as \"the most beautiful lake in the world.\" Each lakeside village has its own cultural identity and traditional market.",
      },
      wikipedia: "Lake_Atitlán",
      tags: ["Nature", "Culture Maya", "Lac", "Volcans", "Randonnée"],
      mustSee: [
        { name: { fr: "Village San Juan La Laguna (artisans mayas)", en: "San Juan La Laguna village (Maya artisans)" }, wikipedia: "San_Juan_La_Laguna" },
        { name: { fr: "Ascension Volcan San Pedro (3 020 m)", en: "San Pedro Volcano hike (3,020 m)" }, wikipedia: "File:Volcán San Pedro, Chile, 2016-02-09, DD 18.JPG" },
        { name: { fr: "Panajachel — marché & vie locale", en: "Panajachel — market & local life" }, wikipedia: "File:Panajachel - Cityscape.jpg" },
        { name: { fr: "San Marcos La Laguna — retraite spirituelle", en: "San Marcos La Laguna — spiritual retreat" }, wikipedia: "San_Marcos_La_Laguna" },
      ],
    },
    {
      id: 4,
      name: "Chichicastenango",
      region: { fr: "Quiché", en: "Quiché" },
      description: {
        fr: "Chichicastenango abrite le plus grand marché indigène d'Amérique centrale, le jeudi et le dimanche. Les K'iche' Mayas y vendent textiles, masques, poteries et copal, dans une atmosphère de fumée d'encens sur le parvis de l'église Santo Tomás.",
        en: "Chichicastenango is home to the largest indigenous market in Central America, held on Thursdays and Sundays. K'iche' Maya vendors sell textiles, masks, pottery and copal there, amid incense smoke on the forecourt of Santo Tomás Church.",
      },
      wikipedia: "Chichicastenango",
      tags: ["Marché", "Culture Maya", "Artisanat", "Traditions"],
      mustSee: [
        { name: { fr: "Marché maya (jeu & dim) — textiles & copal", en: "Maya market (Thu & Sun) — textiles & copal" }, wikipedia: "File:Chichicastenango market.jpg" },
        { name: { fr: "Église Santo Tomás — syncrétisme maya-catholique", en: "Santo Tomás Church — Maya-Catholic syncretism" }, wikipedia: "File:Chichicastenango Guatemala, March 2020 - Santo Tomas.jpg" },
        { name: { fr: "Cimetière coloré aux offrandes", en: "Colourful cemetery with offerings" }, wikipedia: "Chichicastenango" },
        { name: { fr: "Idole maya Pascual Abaj (colline sacrée)", en: "Pascual Abaj Maya idol (sacred hill)" }, wikipedia: "Pascual_Abaj" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Guatemala est l'une des destinations les moins chères d'Amérique centrale. Antigua est légèrement plus onéreuse mais reste très abordable. Les marchés et le transport local sont accessibles à tous.",
      en: "Guatemala is one of the cheapest destinations in Central America. Antigua is slightly more expensive but still very affordable. Markets and local transport are accessible to everyone.",
    },
    currency: "GTQ",
    exchangeRate: "1€ ≈ 8,5 GTQ",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / hostel Antigua", en: "Hostel / guesthouse in Antigua" }, price: "10–20 €", detail: { fr: "Dortoir ou chambre simple", en: "Dorm bed or simple room" } },
          { label: { fr: "Hôtel colonial 3★", en: "3★ colonial hotel" }, price: "40–80 €", detail: { fr: "Patio, bonne literie", en: "Patio, comfortable bedding" } },
          { label: { fr: "Boutique hôtel de charme", en: "Charming boutique hotel" }, price: "100–180 €", detail: { fr: "Vue volcans, confort supérieur", en: "Volcano views, superior comfort" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Pepián ou pollo al ajillo (local)", en: "Pepián or pollo al ajillo (local)" }, price: "2–5 €", detail: { fr: "Marché local, excellent", en: "Local market, excellent" } },
          { label: { fr: "Restaurant Antigua", en: "Restaurant in Antigua" }, price: "8–15 €", detail: { fr: "Cuisine fusion ou traditionnelle", en: "Fusion or traditional cuisine" } },
          { label: { fr: "Gastronomie & rooftop", en: "Fine dining & rooftop" }, price: "20–35 €", detail: { fr: "Avec vue volcans", en: "With volcano views" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Chicken bus (interurbain)", en: "Chicken bus (intercity)" }, price: "1–3 €", detail: { fr: "Lent, coloré, authentique", en: "Slow, colourful, authentic" } },
          { label: { fr: "Shuttle touristique Antigua–Atitlán", en: "Tourist shuttle Antigua–Atitlán" }, price: "15–20 €", detail: { fr: "Confortable, direct", en: "Comfortable, direct" } },
          { label: { fr: "Vol Guatemala City–Flores (Tikal)", en: "Guatemala City–Flores flight (Tikal)" }, price: "80–150 €", detail: { fr: "A/R, 45 min vs 9h bus", en: "Return, 45 min vs 9h by bus" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée site Tikal", en: "Tikal site entry" }, price: "20–25 €", detail: { fr: "Journée complète", en: "Full day" } },
          { label: { fr: "Guide Tikal (bilingual)", en: "Tikal guide (bilingual)" }, price: "25–40 €", detail: { fr: "Recommandé pour comprendre", en: "Recommended to fully understand the site" } },
          { label: { fr: "Trekking Acatenango (2j/1n)", en: "Acatenango trek (2d/1n)" }, price: "30–60 €", detail: { fr: "Guide + bivouac", en: "Guide + bivouac" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Hostel + cuisine locale + chicken bus", en: "Hostel + local food + chicken bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + shuttles", en: "3★ hotel + restaurants + shuttles" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Boutique hôtel + guide privé + vol Tikal", en: "Boutique hotel + private guide + Tikal flight" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Antigua (3j) → Lac Atitlán (2j) → Chichicastenango (1j) → Tikal (3j) → Antigua (1j)",
        en: "Antigua (3d) → Lake Atitlán (2d) → Chichicastenango (1d) → Tikal (3d) → Antigua (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Guatemala City", en: "Return flight Paris–Guatemala City" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–300 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Guatemala City", en: "Return flight Paris–Guatemala City" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transports & excursions", en: "Transport & excursions" }, amount: "500–800 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides" }, amount: "350–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Guatemala City", en: "Return flight Paris–Guatemala City" }, amount: "1 200–2 000 €" },
            { label: { fr: "Boutique hôtels (10 nuits)", en: "Boutique hotels (10 nights)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Vols intérieurs + privé", en: "Domestic flights + private transport" }, amount: "500–800 €" },
            { label: { fr: "Gastronomie", en: "Fine dining" }, amount: "500–800 €" },
            { label: { fr: "Guides privés & extras", en: "Private guides & extras" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flights from Paris" }, value: { fr: "~12h avec escale (Air France via Miami ou Dallas)", en: "~12h with a stopover (Air France via Miami or Dallas)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 90 jours (Français)", en: "No visa for 90 days (French citizens)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Quetzal (1€ ≈ 8,5 GTQ) — dollars acceptés", en: "Quetzal (1€ ≈ 8.5 GTQ) — US dollars accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol (officiel) + 22 langues mayas", en: "Spanish (official) + 22 Mayan languages" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B – 120 V (comme USA)", en: "Type A/B – 120 V (same as the USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture Antigua & villes, faible Petén", en: "Good coverage in Antigua and the cities, weak in Petén" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille ou filtrée", en: "Not drinkable — bottled or filtered water" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé en zones basses (Petén)", en: "Antimalarial recommended in lowland areas (Petén)" } },
  ],
};
