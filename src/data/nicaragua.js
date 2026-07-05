export const NICARAGUA = {
  code: "NIC",
  numericId: 558,
  name: { fr: "Nicaragua", en: "Nicaragua" },
  emoji: "🇳🇮",
  capital: { fr: "Managua", en: "Managua" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Córdoba (NIO)", en: "Córdoba (NIO)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 25, budgetMid: 60,
    tripMin: 900, tripMid: 2200,
  },
  description: {
    fr: "Le Nicaragua est le pays le moins cher et le plus authentique d'Amérique centrale : Granada, joyau colonial aux façades colorées, León et ses façades aux fresques révolutionnaires, l'île volcanique d'Ometepe posée sur un lac géant, et la côte Caraïbe sauvage des Corn Islands.",
    en: "Nicaragua is Central America's cheapest and most authentic country: Granada, a colonial gem with colourful façades, León with its walls covered in revolutionary murals, the volcanic island of Ometepe rising from a giant lake, and the wild Caribbean coast of the Corn Islands.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison idéale : ciel bleu, routes praticables, lagune Apoyo limpide, températures agréables. Très peu de touristes.",
        en: "Ideal season: blue skies, passable roads, clear Apoyo Lagoon, pleasant temperatures. Very few tourists.",
      },
      icon: "🌋",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August" },
      label: { fr: "Veranillo (pause sèche)", en: "Veranillo (dry spell)" },
      color: "#fb923c",
      description: {
        fr: "Pause relative dans les pluies. Végétation luxuriante, moins de monde, tarifs au plus bas.",
        en: "A relative break in the rains. Lush vegetation, fewer crowds, lowest prices.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "granada",
      name: "Granada",
      region: { fr: "Pacifique Sud", en: "South Pacific" },
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
      region: { fr: "Caraïbes", en: "Caribbean" },
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
      region: { fr: "Pacifique", en: "Pacific" },
      description: {
        fr: "Granada est la première ville coloniale espagnole du continent américain (1524), avec ses rues pavées, ses iglesias jaune et blanc, et ses façades colorées encadrant le lac Nicaragua. Les Îlots de Granada (365 petites îles dans le lac) se visitent en bateau depuis la rive.",
        en: "Granada is the first Spanish colonial city on the American continent (1524), with its cobbled streets, yellow and white churches, and colourful façades framing Lake Nicaragua. The Isletas de Granada (365 small islands in the lake) are visited by boat from the shore.",
      },
      wikipedia: "Granada,_Nicaragua",
      tags: ["Colonial", "Histoire", "Lac", "Archipel"],
      mustSee: [
        { name: { fr: "Îlots de Granada (365 îles en bateau)", en: "Isletas de Granada (365 islands by boat)" }, wikipedia: "File:Calle_Hermanos_Jorge_Marrero_by_the_coast_of_Las_Palmas_de_Gran_Canaria,_La_Isleta,_Gran_Canaria,_2023_May.jpg" },
        { name: { fr: "Iglesia de La Merced (vue depuis le clocher)", en: "Iglesia de La Merced (view from the bell tower)" }, wikipedia: "File:La Merced Church-Granada, Nicaragua.jpg" },
        { name: { fr: "Volcan Mombacho", en: "Mombacho Volcano" }, wikipedia: "File:Mombacho taken from the Pan-American Highway.jpg" },
        { name: { fr: "Lagune Apoyo — nage en eau volcanique", en: "Apoyo Lagoon — swimming in volcanic waters" }, wikipedia: "File:Laguna de apoyo.jpg" },
      ],
    },
    {
      id: 2,
      name: "León",
      region: { fr: "Pacifique Nord", en: "North Pacific" },
      description: {
        fr: "León est la capitale intellectuelle et révolutionnaire du Nicaragua : sa cathédrale classée UNESCO est la plus grande d'Amérique centrale, ses murs sont couverts de fresques sandinistes, et le volcan Cerro Negro voisin est le spot de sandboarding le plus célèbre au monde.",
        en: "León is Nicaragua's intellectual and revolutionary capital: its UNESCO-listed cathedral is the largest in Central America, its walls are covered in Sandinista murals, and the nearby Cerro Negro volcano is the world's most famous sandboarding spot.",
      },
      wikipedia: "File:Calvario 2575.jpg",
      tags: ["UNESCO", "Révolution", "Volcans", "Surf des sables"],
      mustSee: [
        { name: { fr: "Cathédrale de León (UNESCO) — toit panoramique", en: "León Cathedral (UNESCO) — panoramic rooftop" }, wikipedia: "León_Cathedral" },
        { name: { fr: "Sandboarding Cerro Negro (volcan actif)", en: "Sandboarding Cerro Negro (active volcano)" }, wikipedia: "Cerro_Negro" },
        { name: { fr: "Plage Los Brasiles — surf Pacifique", en: "Los Brasiles Beach — Pacific surfing" }, wikipedia: "File:Big_Corn_Island,_aka_Great_Corn_Island,_Nicaragua_06.jpg" },
      ],
    },
    {
      id: 3,
      name: "Isla de Ometepe",
      region: { fr: "Lago Nicaragua", en: "Lake Nicaragua" },
      description: {
        fr: "Ometepe est une île unique formée de deux volcans jumeaux — Concepción et Maderas — émergés du Lac Nicaragua, le plus grand lac d'Amérique centrale. Pétroghyphes précolombiens, singes hurleurs et sources thermales jalonnent ses pentes verdoyantes.",
        en: "Ometepe is a unique island formed of two twin volcanoes — Concepción and Maderas — rising from Lake Nicaragua, Central America's largest lake. Pre-Columbian petroglyphs, howler monkeys and hot springs dot its green slopes.",
      },
      wikipedia: "File:Ometepe banner.jpg",
      tags: ["Volcans", "Nature", "Île", "Randonnée"],
      mustSee: [
        { name: { fr: "Ascension Volcan Concepción (1 610 m)", en: "Concepción Volcano ascent (1,610 m)" }, wikipedia: "Concepción_(volcano)" },
        { name: { fr: "Randonnée Volcan Maderas & cratère-lagune", en: "Maderas Volcano hike & crater lagoon" }, wikipedia: "File:Looking down onto Maderas (192935764).jpg" },
        { name: { fr: "Pétroglyphes mayas de Finca Magdalena", en: "Mayan petroglyphs at Finca Magdalena" }, wikipedia: "Petroglyph" },
        { name: { fr: "Singes hurleurs et oiseaux endémiques", en: "Howler monkeys and endemic birds" }, wikipedia: "Mantled_howler" },
      ],
    },
    {
      id: 4,
      name: "Corn Islands",
      region: { fr: "Caraïbes", en: "Caribbean" },
      description: {
        fr: "Les Corn Islands sont les joyaux caraïbes méconnus du Nicaragua : Little Corn Island est un paradis sans voiture, avec des récifs coralliens immaculés et des eaux turquoise. Homard frais, hammocks et plages sauvages composent l'essentiel du programme.",
        en: "The Corn Islands are Nicaragua's little-known Caribbean gems: Little Corn Island is a car-free paradise, with pristine coral reefs and turquoise waters. Fresh lobster, hammocks and wild beaches make up most of the itinerary.",
      },
      wikipedia: "Corn_Islands",
      tags: ["Île", "Caraïbes", "Snorkel", "Détente"],
      mustSee: [
        { name: { fr: "Little Corn — snorkel récifs (sans voitures)", en: "Little Corn — reef snorkelling (no cars)" }, wikipedia: "File:Big Corn Island aka Great Corn island, Nicaragua 14.jpg" },
        { name: { fr: "Bioluminescence la nuit dans la baie", en: "Bioluminescence at night in the bay" }, wikipedia: "Bioluminescence" },
        { name: { fr: "Bluefields — ville créole et musique", en: "Bluefields — Creole town and music" }, wikipedia: "Bluefields" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Nicaragua est le pays le moins cher d'Amérique centrale. Les prix sont très accessibles et la córdoba est faible. Un budget routard serré est tout à fait possible. Les Corn Islands coûtent un peu plus cher.",
      en: "Nicaragua is the cheapest country in Central America. Prices are very affordable and the córdoba is weak. A tight backpacker budget is entirely possible. The Corn Islands cost a bit more.",
    },
    currency: "NIO",
    exchangeRate: "1€ ≈ 39 NIO",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hostel / guesthouse coloniale", en: "Hostel / colonial guesthouse" }, price: "8–15 €", detail: { fr: "Granada ou León", en: "Granada or León" } },
          { label: { fr: "Guesthouse Little Corn", en: "Little Corn guesthouse" }, price: "20–40 €", detail: { fr: "Vue mer, sans clim", en: "Sea view, no AC" } },
          { label: { fr: "Hôtel boutique de charme", en: "Charming boutique hotel" }, price: "50–100 €", detail: { fr: "Patio colonial fleuri", en: "Flowering colonial courtyard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Gallo pinto + viande (marché)", en: "Gallo pinto + meat (market)" }, price: "2–4 €", detail: { fr: "Plat national", en: "National dish" } },
          { label: { fr: "Homard entier (Corn Islands)", en: "Whole lobster (Corn Islands)" }, price: "8–15 €", detail: { fr: "Pêche du jour, délicieux", en: "Catch of the day, delicious" } },
          { label: { fr: "Restaurant colonial (Granada)", en: "Colonial restaurant (Granada)" }, price: "6–12 €", detail: { fr: "Vue cathédrale", en: "Cathedral view" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Managua–Granada ou León", en: "Bus Managua–Granada or León" }, price: "1–2 €", detail: { fr: "Très bon marché", en: "Very cheap" } },
          { label: { fr: "Ferry Ometepe (San Jorge)", en: "Ometepe ferry (San Jorge)" }, price: "2–3 €", detail: { fr: "45 min ou 1h30", en: "45 min or 1h30" } },
          { label: { fr: "Vol Managua–Corn Islands", en: "Flight Managua–Corn Islands" }, price: "80–140 €", detail: { fr: "A/R La Costena, 1h", en: "Return, La Costeña, 1h" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Sandboarding Cerro Negro", en: "Cerro Negro sandboarding" }, price: "20–30 €", detail: { fr: "Transport + guide + planche", en: "Transport + guide + board" } },
          { label: { fr: "Tour Îlots Granada (2h)", en: "Isletas de Granada tour (2h)" }, price: "15–20 €", detail: { fr: "Bateau partagé", en: "Shared boat" } },
          { label: { fr: "Ascension Mombacho + canopée", en: "Mombacho ascent + canopy tour" }, price: "25–40 €", detail: { fr: "Guide inclus", en: "Guide included" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Hostel + gallo pinto + bus local", en: "Hostel + gallo pinto + local bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "60–100 €/j", desc: { fr: "Hôtel colonial + restos + excursions", en: "Colonial hotel + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "180 €+/j", desc: { fr: "Boutique hôtel + guide privé + vols intérieurs", en: "Boutique hotel + private guide + domestic flights" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "León (2j) → Granada & Îlots (2j) → Lagune Apoyo (1j) → Ometepe (2j) → Corn Islands (3j)",
        en: "León (2d) → Granada & Isletas (2d) → Apoyo Lagoon (1d) → Ometepe (2d) → Corn Islands (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nicaragua", en: "Return flight Paris–Nicaragua" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "130–220 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "120–200 €" },
            { label: { fr: "Transports (bus + ferry + vol)", en: "Transport (bus + ferry + flight)" }, amount: "100–180 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nicaragua", en: "Return flight Paris–Nicaragua" }, amount: "550–850 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "350–550 €" },
            { label: { fr: "Transports", en: "Transport" }, amount: "250–400 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nicaragua (Business)", en: "Return flight Paris–Nicaragua (Business)" }, amount: "1 800–3 000 €" },
            { label: { fr: "Boutique hôtels (10 nuits)", en: "Boutique hotels (10 nights)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "500–800 €" },
            { label: { fr: "Vols intérieurs & transferts", en: "Domestic flights & transfers" }, amount: "400–600 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "200 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~14h avec escale (via Miami ou Bogotá)", en: "~14h with a layover (via Miami or Bogotá)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 90 jours CA-4 (Français)", en: "No visa required, 90-day CA-4 stay (French citizens)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Córdoba (1€ ≈ 39 NIO) — dollars US acceptés", en: "Córdoba (1€ ≈ 39 NIO) — US dollars accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol (officiel) — créole anglais sur la côte Caraïbe", en: "Spanish (official) — English creole on the Caribbean coast" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B – 120 V (comme USA)", en: "Type A/B – 120 V (like the USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture Pacifique, très limitée Corn Islands", en: "Good Pacific coverage, very limited on the Corn Islands" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen en zones rurales basses et côte Caraïbe", en: "Antimalarials for lowland rural areas and the Caribbean coast" } },
  ],
};
