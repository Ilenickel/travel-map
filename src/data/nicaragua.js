export const NICARAGUA = {
  code: "NIC",
  numericId: 558,
  name: { fr: "Nicaragua", en: "Nicaragua", es: "Nicaragua", de: "Nicaragua" },
  emoji: "🇳🇮",
  capital: { fr: "Managua", en: "Managua", es: "Managua", de: "Managua" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" },
  currency: { fr: "Córdoba (NIO)", en: "Córdoba (NIO)", es: "Córdoba (NIO)", de: "Córdoba (NIO)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 25, budgetMid: 60,
    tripMin: 900, tripMid: 2200,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Nicaragua est le pays le moins cher et le plus authentique d'Amérique centrale : Granada, joyau colonial aux façades colorées, León et ses façades aux fresques révolutionnaires, l'île volcanique d'Ometepe posée sur un lac géant, et la côte Caraïbe sauvage des Corn Islands.", en: "Nicaragua is Central America's cheapest and most authentic country: Granada, a colonial gem with colourful façades, León with its walls covered in revolutionary murals, the volcanic island of Ometepe rising from a giant lake, and the wild Caribbean coast of the Corn Islands.", es: "Nicaragua es el país más barato y auténtico de Centroamérica: Granada, joya colonial de fachadas coloridas, León y sus muros con murales revolucionarios, la isla volcánica de Ometepe posada sobre un lago gigante, y la costa Caribe salvaje de las Corn Islands.", de: "Nicaragua ist das günstigste und authentischste Land Mittelamerikas: Granada, ein koloniales Juwel mit farbenfrohen Fassaden, León und seine Fassaden mit revolutionären Fresken, die Vulkaninsel Ometepe auf einem riesigen See und die wilde Karibikküste der Corn Islands.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Saison idéale : ciel bleu, routes praticables, lagune Apoyo limpide, températures agréables. Très peu de touristes.", en: "Ideal season: blue skies, passable roads, clear Apoyo Lagoon, pleasant temperatures. Very few tourists.", es: "Temporada ideal: cielo azul, carreteras transitables, laguna de Apoyo cristalina, temperaturas agradables. Muy pocos turistas.", de: "Ideale Jahreszeit: blauer Himmel, befahrbare Straßen, klare Apoyo-Lagune, angenehme Temperaturen. Sehr wenige Touristen.",
      },
      icon: "🌋",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August", es: "Julio – Agosto", de: "Juli – August" },
      label: { fr: "Veranillo (pause sèche)", en: "Veranillo (dry spell)", es: "Veranillo (pausa seca)", de: "Veranillo (Trockenpause)" },
      color: "#fb923c",
      description: {
        fr: "Pause relative dans les pluies. Végétation luxuriante, moins de monde, tarifs au plus bas.", en: "A relative break in the rains. Lush vegetation, fewer crowds, lowest prices.", es: "Pausa relativa en las lluvias. Vegetación exuberante, menos gente, precios más bajos.", de: "Relative Regenpause. Üppige Vegetation, weniger Menschen, niedrigere Preise.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "granada",
      name: "Granada",
      region: { fr: "Pacifique Sud", en: "South Pacific", es: "Pacífico Sur", de: "Südpazifik" },
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
      region: { fr: "Caraïbes", en: "Caribbean", es: "Caribe", de: "Karibik" },
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
      region: { fr: "Pacifique", en: "Pacific", es: "Pacífico", de: "Friedlich" },
      description: {
        fr: "Granada est la première ville coloniale espagnole du continent américain (1524), avec ses rues pavées, ses iglesias jaune et blanc, et ses façades colorées encadrant le lac Nicaragua. Les Îlots de Granada (365 petites îles dans le lac) se visitent en bateau depuis la rive.", en: "Granada is the first Spanish colonial city on the American continent (1524), with its cobbled streets, yellow and white churches, and colourful façades framing Lake Nicaragua. The Isletas de Granada (365 small islands in the lake) are visited by boat from the shore.", es: "Granada es la primera ciudad colonial española del continente americano (1524), con sus calles empedradas, sus iglesias amarillas y blancas, y sus fachadas coloridas enmarcando el lago Nicaragua. Las Isletas de Granada (365 pequeñas islas en el lago) se visitan en barco desde la orilla.", de: "Granada ist die erste spanische Kolonialstadt auf dem amerikanischen Kontinent (1524) mit ihren gepflasterten Straßen, ihren gelben und weißen Iglesias und ihren farbenfrohen Fassaden, die den Nicaraguasee umrahmen. Die Inseln von Granada (365 kleine Inseln im See) können vom Ufer aus mit dem Boot besucht werden.",
      },
      wikipedia: "Granada,_Nicaragua",
      tags: ["Histoire", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Îlots de Granada (365 îles en bateau)", en: "Isletas de Granada (365 islands by boat)", es: "Isletas de Granada (365 islas en barco)", de: "Inseln von Granada (365 Inseln mit dem Boot)" }, wikipedia: "File:Calle_Hermanos_Jorge_Marrero_by_the_coast_of_Las_Palmas_de_Gran_Canaria,_La_Isleta,_Gran_Canaria,_2023_May.jpg" },
        { name: { fr: "Iglesia de La Merced (vue depuis le clocher)", en: "Iglesia de La Merced (view from the bell tower)", es: "Iglesia de La Merced (vista desde el campanario)", de: "Iglesia de La Merced (Blick vom Glockenturm)" }, wikipedia: "File:La Merced Church-Granada, Nicaragua.jpg" },
        { name: { fr: "Volcan Mombacho", en: "Mombacho Volcano", es: "Volcán Mombacho", de: "Vulkan Mombacho" }, wikipedia: "File:Mombacho taken from the Pan-American Highway.jpg" },
        { name: { fr: "Lagune Apoyo — nage en eau volcanique", en: "Apoyo Lagoon — swimming in volcanic waters", es: "Laguna de Apoyo — baño en agua volcánica", de: "Apoyo-Lagune – Schwimmen im vulkanischen Wasser" }, wikipedia: "File:Laguna de apoyo.jpg" },
      ],
    },
    {
      id: 2,
      name: "León",
      region: { fr: "Pacifique Nord", en: "North Pacific", es: "Pacífico Norte", de: "Nordpazifik" },
      description: {
        fr: "León est la capitale intellectuelle et révolutionnaire du Nicaragua : sa cathédrale classée UNESCO est la plus grande d'Amérique centrale, ses murs sont couverts de fresques sandinistes, et le volcan Cerro Negro voisin est le spot de sandboarding le plus célèbre au monde.", en: "León is Nicaragua's intellectual and revolutionary capital: its UNESCO-listed cathedral is the largest in Central America, its walls are covered in Sandinista murals, and the nearby Cerro Negro volcano is the world's most famous sandboarding spot.", es: "León es la capital intelectual y revolucionaria de Nicaragua: su catedral, declarada Patrimonio de la Humanidad, es la más grande de Centroamérica, sus muros están cubiertos de murales sandinistas, y el vecino volcán Cerro Negro es el lugar de sandboarding más famoso del mundo.", de: "León ist die intellektuelle und revolutionäre Hauptstadt Nicaraguas: Die zum UNESCO-Weltkulturerbe gehörende Kathedrale ist die größte in Mittelamerika, ihre Wände sind mit sandinistischen Fresken bedeckt und der benachbarte Vulkan Cerro Negro ist der berühmteste Sandboarding-Spot der Welt.",
      },
      wikipedia: "File:Calvario 2575.jpg",
      tags: ["UNESCO", "Histoire", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Cathédrale de León (UNESCO) — toit panoramique", en: "León Cathedral (UNESCO) — panoramic rooftop", es: "Catedral de León (UNESCO) — azotea panorámica", de: "Kathedrale von León (UNESCO) – Panoramadach" }, wikipedia: "León_Cathedral" },
        { name: { fr: "Sandboarding Cerro Negro (volcan actif)", en: "Sandboarding Cerro Negro (active volcano)", es: "Sandboarding en el Cerro Negro (volcán activo)", de: "Sandboarding Cerro Negro (aktiver Vulkan)" }, wikipedia: "Cerro_Negro" },
        { name: { fr: "Plage Los Brasiles — surf Pacifique", en: "Los Brasiles Beach — Pacific surfing", es: "Playa Los Brasiles — surf en el Pacífico", de: "Strand von Los Braziles – Pazifikbrandung" }, wikipedia: "File:Big_Corn_Island,_aka_Great_Corn_Island,_Nicaragua_06.jpg" },
      ],
    },
    {
      id: 3,
      name: "Isla de Ometepe",
      region: { fr: "Lago Nicaragua", en: "Lake Nicaragua", es: "Lago Nicaragua", de: "Nicaragua-See" },
      description: {
        fr: "Ometepe est une île unique formée de deux volcans jumeaux — Concepción et Maderas — émergés du Lac Nicaragua, le plus grand lac d'Amérique centrale. Pétroghyphes précolombiens, singes hurleurs et sources thermales jalonnent ses pentes verdoyantes.", en: "Ometepe is a unique island formed of two twin volcanoes — Concepción and Maderas — rising from Lake Nicaragua, Central America's largest lake. Pre-Columbian petroglyphs, howler monkeys and hot springs dot its green slopes.", es: "Ometepe es una isla única formada por dos volcanes gemelos —Concepción y Maderas— emergidos del lago Nicaragua, el más grande de Centroamérica. Petroglifos precolombinos, monos aulladores y aguas termales jalonan sus laderas verdes.", de: "Ometepe ist eine einzigartige Insel, die aus zwei Zwillingsvulkanen – Concepción und Maderas – besteht, die aus dem Nicaragua-See, dem größten See Mittelamerikas, entspringen. Präkolumbianische Petroghyphen, Brüllaffen und Thermalquellen säumen die grünen Hänge.",
      },
      wikipedia: "File:Ometepe banner.jpg",
      tags: ["Nature", "Plage", "Randonnée"],
      mustSee: [
        { name: { fr: "Ascension Volcan Concepción (1 610 m)", en: "Concepción Volcano ascent (1,610 m)", es: "Ascensión al volcán Concepción (1.610 m)", de: "Besteigung des Vulkans Concepción (1.610 m)" }, wikipedia: "Concepción_(volcano)" },
        { name: { fr: "Randonnée Volcan Maderas & cratère-lagune", en: "Maderas Volcano hike & crater lagoon", es: "Ruta al volcán Maderas y laguna del cráter", de: "Wanderung zum Vulkan Maderas und zur Krater-Lagune" }, wikipedia: "File:Looking down onto Maderas (192935764).jpg" },
        { name: { fr: "Pétroglyphes mayas de Finca Magdalena", en: "Mayan petroglyphs at Finca Magdalena", es: "Petroglifos mayas de Finca Magdalena", de: "Maya-Petroglyphen auf der Finca Magdalena" }, wikipedia: "Petroglyph" },
        { name: { fr: "Singes hurleurs et oiseaux endémiques", en: "Howler monkeys and endemic birds", es: "Monos aulladores y aves endémicas", de: "Brüllaffen und endemische Vögel" }, wikipedia: "Mantled_howler" },
      ],
    },
    {
      id: 4,
      name: "Corn Islands",
      region: { fr: "Caraïbes", en: "Caribbean", es: "Caribe", de: "Karibik" },
      description: {
        fr: "Les Corn Islands sont les joyaux caraïbes méconnus du Nicaragua : Little Corn Island est un paradis sans voiture, avec des récifs coralliens immaculés et des eaux turquoise. Homard frais, hammocks et plages sauvages composent l'essentiel du programme.", en: "The Corn Islands are Nicaragua's little-known Caribbean gems: Little Corn Island is a car-free paradise, with pristine coral reefs and turquoise waters. Fresh lobster, hammocks and wild beaches make up most of the itinerary.", es: "Las Corn Islands son las joyas caribeñas desconocidas de Nicaragua: Little Corn Island es un paraíso sin coches, con arrecifes de coral inmaculados y aguas turquesas. Langosta fresca, hamacas y playas salvajes componen la mayor parte del programa.", de: "Die Corn Islands sind Nicaraguas wenig bekannte Juwelen in der Karibik: Little Corn Island ist ein autofreies Paradies mit unberührten Korallenriffen und türkisfarbenem Wasser. Frischer Hummer, Hängematten und wilde Strände machen den Großteil des Programms aus.",
      },
      wikipedia: "Corn_Islands",
      tags: ["Plage", "Détente"],
      mustSee: [
        { name: { fr: "Little Corn — snorkel récifs (sans voitures)", en: "Little Corn — reef snorkelling (no cars)", es: "Little Corn — buceo de superficie en los arrecifes (sin coches)", de: "Little Corn – Riffschnorchel (ohne Autos)" }, wikipedia: "File:Big Corn Island aka Great Corn island, Nicaragua 14.jpg" },
        { name: { fr: "Bioluminescence la nuit dans la baie", en: "Bioluminescence at night in the bay", es: "Bioluminiscencia nocturna en la bahía", de: "Biolumineszenz in der Nacht in der Bucht" }, wikipedia: "Bioluminescence" },
        { name: { fr: "Bluefields — ville créole et musique", en: "Bluefields — Creole town and music", es: "Bluefields — ciudad criolla y música", de: "Bluefields – kreolische Stadt und Musik" }, wikipedia: "Bluefields" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Nicaragua est le pays le moins cher d'Amérique centrale. Les prix sont très accessibles et la córdoba est faible. Un budget routard serré est tout à fait possible. Les Corn Islands coûtent un peu plus cher.", en: "Nicaragua is the cheapest country in Central America. Prices are very affordable and the córdoba is weak. A tight backpacker budget is entirely possible. The Corn Islands cost a bit more.", es: "Nicaragua es el país más barato de Centroamérica. Los precios son muy accesibles y la córdoba es débil. Un presupuesto mochilero ajustado es totalmente posible. Las Corn Islands cuestan un poco más.", de: "Nicaragua ist das günstigste Land in Mittelamerika. Die Preise sind sehr erschwinglich und der Córdoba ist niedrig. Ein knappes Backpacking-Budget ist durchaus möglich. Die Corn Islands kosten etwas mehr.",
    },
    currency: "NIO",
    exchangeRate: "1€ ≈ 39 NIO",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Hostel / guesthouse coloniale", en: "Hostel / colonial guesthouse", es: "Hostel / guesthouse colonial", de: "Koloniale Herberge/Gästehaus" }, price: "8–15 €", detail: { fr: "Granada ou León", en: "Granada or León", es: "Granada o León", de: "Granada oder León" } },
          { label: { fr: "Guesthouse Little Corn", en: "Little Corn guesthouse", es: "Guesthouse en Little Corn", de: "Gästehaus Little Corn" }, price: "20–40 €", detail: { fr: "Vue mer, sans clim", en: "Sea view, no AC", es: "Vista al mar, sin aire acondicionado", de: "Meerblick, keine Klimaanlage" } },
          { label: { fr: "Hôtel boutique de charme", en: "Charming boutique hotel", es: "Hotel boutique con encanto", de: "Charmantes Boutique-Hotel" }, price: "50–100 €", detail: { fr: "Patio colonial fleuri", en: "Flowering colonial courtyard", es: "Patio colonial florido", de: "Geblümte Kolonialterrasse" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Gallo pinto + viande (marché)", en: "Gallo pinto + meat (market)", es: "Gallo pinto + carne (mercado)", de: "Gallo Pinto + Fleisch (Markt)" }, price: "2–4 €", detail: { fr: "Plat national", en: "National dish", es: "Plato nacional", de: "Nationalgericht" } },
          { label: { fr: "Homard entier (Corn Islands)", en: "Whole lobster (Corn Islands)", es: "Langosta entera (Corn Islands)", de: "Ganzer Hummer (Maisinseln)" }, price: "8–15 €", detail: { fr: "Pêche du jour, délicieux", en: "Catch of the day, delicious", es: "Pesca del día, delicioso", de: "Fang des Tages, lecker" } },
          { label: { fr: "Restaurant colonial (Granada)", en: "Colonial restaurant (Granada)", es: "Restaurante colonial (Granada)", de: "Kolonialrestaurant (Granada)" }, price: "6–12 €", detail: { fr: "Vue cathédrale", en: "Cathedral view", es: "Vista a la catedral", de: "Blick auf die Kathedrale" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Managua–Granada ou León", en: "Bus Managua–Granada or León", es: "Autobús Managua–Granada o León", de: "Bus Managua–Granada oder León" }, price: "1–2 €", detail: { fr: "Très bon marché", en: "Very cheap", es: "Muy económico", de: "Sehr günstig" } },
          { label: { fr: "Ferry Ometepe (San Jorge)", en: "Ometepe ferry (San Jorge)", es: "Ferry a Ometepe (San Jorge)", de: "Fähre Ometepe (San Jorge)" }, price: "2–3 €", detail: { fr: "45 min ou 1h30", en: "45 min or 1h30", es: "45 min o 1h30", de: "45 Minuten oder 1 Std. 30 Min." } },
          { label: { fr: "Vol Managua–Corn Islands", en: "Flight Managua–Corn Islands", es: "Vuelo Managua–Corn Islands", de: "Flug Managua–Corn Islands" }, price: "80–140 €", detail: { fr: "A/R La Costena, 1h", en: "Return, La Costeña, 1h", es: "Ida y vuelta, La Costeña, 1h", de: "Hin- und Rückflug mit La Costeña, 1 Stunde" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Sandboarding Cerro Negro", en: "Cerro Negro sandboarding", es: "Sandboarding en el Cerro Negro", de: "Sandboarding Cerro Negro" }, price: "20–30 €", detail: { fr: "Transport + guide + planche", en: "Transport + guide + board", es: "Transporte + guía + tabla", de: "Transport + Führer + Verpflegung" } },
          { label: { fr: "Tour Îlots Granada (2h)", en: "Isletas de Granada tour (2h)", es: "Tour por las isletas de Granada (2h)", de: "Tour zu den Granada-Inseln (2 Stunden)" }, price: "15–20 €", detail: { fr: "Bateau partagé", en: "Shared boat", es: "Barco compartido", de: "Geteiltes Boot" } },
          { label: { fr: "Ascension Mombacho + canopée", en: "Mombacho ascent + canopy tour", es: "Ascensión al Mombacho + canopy", de: "Mombacho-Aufstieg + Baldachin" }, price: "25–40 €", detail: { fr: "Guide inclus", en: "Guide included", es: "Guía incluido", de: "Anleitung inklusive" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Hostel + gallo pinto + bus local", en: "Hostel + gallo pinto + local bus", es: "Hostel + gallo pinto + autobús local", de: "Hostel + Gallo Pinto + lokaler Bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "60–100 €/j", desc: { fr: "Hôtel colonial + restos + excursions", en: "Colonial hotel + restaurants + excursions", es: "Hotel colonial + restaurantes + excursiones", de: "Kolonialhotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "180 €+/j", desc: { fr: "Boutique hôtel + guide privé + vols intérieurs", en: "Boutique hotel + private guide + domestic flights", es: "Hotel boutique + guía privado + vuelos interiores", de: "Boutique-Hotel + privater Reiseführer + Inlandsflüge" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "León (2j) → Granada & Îlots (2j) → Lagune Apoyo (1j) → Ometepe (2j) → Corn Islands (3j)", en: "León (2d) → Granada & Isletas (2d) → Apoyo Lagoon (1d) → Ometepe (2d) → Corn Islands (3d)", es: "León (2d) → Granada e islotes (2d) → Laguna de Apoyo (1d) → Ometepe (2d) → Corn Islands (3d)", de: "León (2 Tage) → Granada und Inseln (2 Tage) → Apoyo-Lagune (1 Tage) → Ometepe (2 Tage) → Korninseln (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nicaragua", en: "Return flight Paris–Nicaragua", es: "Vuelo ida y vuelta Madrid–Nicaragua", de: "Hin- und Rückflug Paris–Nicaragua" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "130–220 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "120–200 €" },
            { label: { fr: "Transports (bus + ferry + vol)", en: "Transport (bus + ferry + flight)", es: "Transporte (autobús + ferry + vuelo)", de: "Transport (Bus + Fähre + Flug)" }, amount: "100–180 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nicaragua", en: "Return flight Paris–Nicaragua", es: "Vuelo ida y vuelta Madrid–Nicaragua", de: "Hin- und Rückflug Paris–Nicaragua" }, amount: "550–850 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "350–550 €" },
            { label: { fr: "Transports", en: "Transport", es: "Transporte", de: "Transport" }, amount: "250–400 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions", es: "Actividades y excursiones", de: "Aktivitäten & Ausflüge" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nicaragua (Business)", en: "Return flight Paris–Nicaragua (Business)", es: "Vuelo ida y vuelta Madrid–Nicaragua (Business)", de: "Hin- und Rückflug Paris–Nicaragua (Business)" }, amount: "1 800–3 000 €" },
            { label: { fr: "Boutique hôtels (10 nuits)", en: "Boutique hotels (10 nights)", es: "Hoteles boutique (10 noches)", de: "Boutique-Hotels (10 Nächte)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias", de: "Gastronomie & Erlebnisse" }, amount: "500–800 €" },
            { label: { fr: "Vols intérieurs & transferts", en: "Domestic flights & transfers", es: "Vuelos interiores y traslados", de: "Inlandsflüge und Transfers" }, amount: "400–600 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "200 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~14h avec escale (via Miami ou Bogotá)", en: "~14h with a layover (via Miami or Bogotá)", es: "~14h con escala (vía Miami o Bogotá)", de: "ca. 14 Std. mit Zwischenstopp (über Miami oder Bogotá)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa 90 jours CA-4 (Français)", en: "No visa required, 90-day CA-4 stay (French citizens)", es: "Sin visado, estancia de 90 días CA-4 (ciudadanos de la UE)", de: "Visumfrei 90 Tage CA-4 (Französisch)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Córdoba (1€ ≈ 39 NIO) — dollars US acceptés", en: "Córdoba (1€ ≈ 39 NIO) — US dollars accepted", es: "Córdoba (1€ ≈ 39 NIO) — dólares estadounidenses aceptados", de: "Córdoba (1€ ≈ 39 NIO) – US-Dollar akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol (officiel) — créole anglais sur la côte Caraïbe", en: "Spanish (official) — English creole on the Caribbean coast", es: "Español (oficial) — criollo inglés en la costa Caribe", de: "Spanisch (offiziell) – Englisch-Kreolisch an der Karibikküste" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B – 120 V (comme USA)", en: "Type A/B – 120 V (like the USA)", es: "Tipo A/B – 120 V (como en EE. UU.)", de: "Typ A/B – 120 V (wie USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture Pacifique, très limitée Corn Islands", en: "Good Pacific coverage, very limited on the Corn Islands", es: "Buena cobertura en el Pacífico, muy limitada en las Corn Islands", de: "Gute Pazifikabdeckung, sehr begrenzte Corn Islands" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water essential", es: "No potable — agua embotellada obligatoria", de: "Nicht trinkbar – Wasser in Flaschen erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen en zones rurales basses et côte Caraïbe", en: "Antimalarials for lowland rural areas and the Caribbean coast", es: "Antipalúdico en zonas rurales bajas y en la costa Caribe", de: "Antimalariamittel in flachen ländlichen Gebieten und an der Karibikküste" } },
  ],
};
