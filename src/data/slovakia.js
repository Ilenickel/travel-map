export const SLOVAKIA = {
  code: "SVK",
  numericId: 703,
  name: { fr: "Slovaquie", en: "Slovakia", es: "Eslovaquia" },
  emoji: "🇸🇰",
  capital: { fr: "Bratislava", en: "Bratislava", es: "Bratislava" },
  language: { fr: "Slovaque", en: "Slovak", es: "Eslovaco" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 80,
    tripMin: 800, tripMid: 1700,
  },
  description: {
    fr: "La Slovaquie est la perle méconnue d'Europe centrale : les Hautes Tatras (les Alpes les plus au nord-est d'Europe, 2 655m), les châteaux médiévaux en ruines sur les collines (plus de 180 châteaux par km² — record d'Europe), les gorges du Paradis slovaque, Bratislava et sa Vieille Ville baroque à 1h de Vienne. Un pays abordable à la nature extraordinaire.",
    en: "Slovakia is the little-known gem of Central Europe: the High Tatras (Europe's north-easternmost Alps, 2,655m), ruined medieval castles on the hills (over 180 castles — a European density record), the gorges of the Slovak Paradise, and Bratislava with its baroque Old Town just an hour from Vienna. An affordable country with extraordinary nature.",
    es: "Eslovaquia es la joya poco conocida de Europa Central: los Altos Tatras (los Alpes más al noreste de Europa, 2.655 m), castillos medievales en ruinas sobre las colinas (más de 180 castillos, récord de densidad europeo), los desfiladeros del Paraíso Eslovaco, y Bratislava con su casco antiguo barroco a solo una hora de Viena. Un país asequible de naturaleza extraordinaria.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre" },
      label: { fr: "Saison idéale", en: "Ideal season", es: "Temporada ideal" },
      color: "#22c55e",
      description: {
        fr: "Randonnées dans les Tatras (juin–sept), châteaux et villages fleuris (mai-juin), couleurs d'automne splendides (octobre). Températures 18–26°C en plaine.",
        en: "Hiking in the Tatras (Jun–Sep), castles and blooming villages (May–Jun), splendid autumn colours (October). Temperatures 18–26°C in the lowlands.",
        es: "Senderismo en los Tatras (jun–sep), castillos y pueblos en flor (may-jun), espléndidos colores otoñales (octubre). Temperaturas de 18–26 °C en la llanura.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo" },
      label: { fr: "Ski dans les Tatras", en: "Skiing in the Tatras", es: "Esquí en los Tatras" },
      color: "#3b82f6",
      description: {
        fr: "Ski alpin et nordique dans les Tatras (Jasná, Štrbské Pleso). Marchés de Noël à Bratislava. Températures -5 à -15°C en montagne.",
        en: "Alpine and cross-country skiing in the Tatras (Jasná, Štrbské Pleso). Christmas markets in Bratislava. Temperatures -5 to -15°C in the mountains.",
        es: "Esquí alpino y nórdico en los Tatras (Jasná, Štrbské Pleso). Mercados navideños en Bratislava. Temperaturas de -5 a -15 °C en la montaña.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "bratislava",
      name: "Bratislava",
      region: { fr: "Petit-Danube (capitale)", en: "Little Danube (capital)", es: "Pequeño Danubio (capital)" },
      data: [
        { month: "Jan", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 60,  icon: "☀️" },
        { month: "Sep", temp: 17, rain: 45,  icon: "⛅" },
        { month: "Oct", temp: 11, rain: 40,  icon: "⛅" },
        { month: "Nov", temp:  5, rain: 45,  icon: "⛅" },
        { month: "Déc", temp:  1, rain: 40,  icon: "❄️" },
      ],
    },
    {
      id: "tatry",
      name: { fr: "Hautes Tatras", en: "High Tatras", es: "Altos Tatras" },
      region: { fr: "Tatry (nord, altitude 800–2 655m)", en: "Tatras (north, 800–2,655m altitude)", es: "Tatras (norte, altitud 800–2.655 m)" },
      data: [
        { month: "Jan", temp: -8, rain: 60,  icon: "❄️" },
        { month: "Fév", temp: -7, rain: 55,  icon: "❄️" },
        { month: "Mar", temp: -2, rain: 60,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 10, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 13, rain: 120, icon: "⛅" },
        { month: "Jul", temp: 15, rain: 130, icon: "⛅" },
        { month: "Aoû", temp: 15, rain: 110, icon: "⛅" },
        { month: "Sep", temp: 11, rain: 80,  icon: "⛅" },
        { month: "Oct", temp:  5, rain: 65,  icon: "⛅" },
        { month: "Nov", temp: -1, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: -6, rain: 65,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Hautes Tatras — Les Alpes slovaques", en: "High Tatras — The Slovak Alps", es: "Altos Tatras — Los Alpes eslovacos" },
      region: { fr: "Tatry (nord)", en: "Tatras (north)", es: "Tatras (norte)" },
      description: {
        fr: "Les Hautes Tatras sont le massif montagneux le plus au nord-est d'Europe : 29 sommets au-dessus de 2 500m, des lacs glaciaires (Štrbské Pleso), des cascades, et des randonnées balisées parmi les plus belles d'Europe centrale. L'ours brun, le chamois des Tatras et l'aigle royal sont encore présents. Ski alpin à Jasná en hiver.",
        en: "The High Tatras are Europe's north-easternmost mountain range: 29 peaks above 2,500m, glacial lakes (Štrbské Pleso), waterfalls, and marked trails among the most beautiful in Central Europe. Brown bears, Tatra chamois and golden eagles still live here. Alpine skiing in Jasná in winter.",
        es: "Los Altos Tatras son la cordillera más al noreste de Europa: 29 picos por encima de los 2.500 m, lagos glaciares (Štrbské Pleso), cascadas, y senderos señalizados entre los más bellos de Europa Central. El oso pardo, la rebeco de los Tatras y el águila real todavía viven aquí. Esquí alpino en Jasná en invierno.",
      },
      wikipedia: "High_Tatras",
      tags: ["Montagne", "Randonnée", "Nature", "Ski", "UNESCO"],
      mustSee: [
        { name: { fr: "Lac Štrbské Pleso — vue sur les crêtes des Tatras", en: "Lake Štrbské Pleso — view of the Tatra ridges", es: "Lago Štrbské Pleso — vista de las crestas de los Tatras" }, wikipedia: "Štrbské_Pleso" },
        { name: { fr: "Randonnée Rysy (2 503m) — sommet accessible depuis la Pologne", en: "Rysy hike (2,503m) — a summit accessible from Poland", es: "Ruta al Rysy (2.503 m) — cumbre accesible desde Polonia" }, wikipedia: "Rysy" },
        { name: { fr: "Cascade de Skok — sentier des lacs Tatry", en: "Skok Waterfall — the Tatra lakes trail", es: "Cascada de Skok — sendero de los lagos Tatra" }, wikipedia: "High_Tatras" },
        { name: { fr: "Ski à Jasná Nízke Tatry (feb–avr)", en: "Skiing at Jasná Nízke Tatry (Feb–Apr)", es: "Esquí en Jasná Nízke Tatry (feb–abr)" }, wikipedia: "File:Jasná Ski Resort - gondola lift Kosodrevina - Chopok (3).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Bratislava — Petite grande capitale", en: "Bratislava — a small great capital", es: "Bratislava — Una pequeña gran capital" },
      region: { fr: "Danube occidental", en: "Western Danube", es: "Danubio occidental" },
      description: {
        fr: "Bratislava est la seule capitale au monde à longer deux pays (Autriche et Hongrie). Sa Vieille Ville baroque est compacte et piétonne, dominée par le château blanc (vue sur le Danube), et animée par les rues Michael et Laurinska. À 1h de Vienne et 2h de Budapest par train, c'est aussi une base idéale pour un circuit des capitales danubiennes.",
        en: "Bratislava is the only capital in the world bordering two countries (Austria and Hungary). Its baroque Old Town is compact and pedestrian-friendly, overlooked by the white castle (with views over the Danube), and enlivened by Michalská and Laurinská streets. Just 1h from Vienna and 2h from Budapest by train, it's also an ideal base for a Danube capitals tour.",
        es: "Bratislava es la única capital del mundo que limita con dos países (Austria y Hungría). Su casco antiguo barroco es compacto y peatonal, dominado por el castillo blanco (con vistas al Danubio), y animado por las calles Michalská y Laurinská. A 1h de Viena y 2h de Budapest en tren, es también una base ideal para un circuito de capitales del Danubio.",
      },
      wikipedia: "Bratislava",
      tags: ["Ville", "Architecture", "Nature", "Gastronomie"],
      mustSee: [
        { name: { fr: "Château de Bratislava — vue sur le Danube, Autriche et Hongrie", en: "Bratislava Castle — views over the Danube, Austria and Hungary", es: "Castillo de Bratislava — vistas al Danubio, Austria y Hungría" }, wikipedia: "Bratislava_Castle" },
        { name: { fr: "Vieille Ville baroque — rues Michael et Hlavné námestie", en: "Baroque Old Town — Michalská street and Hlavné námestie", es: "Casco antiguo barroco — calle Michalská y Hlavné námestie" }, wikipedia: "Old_Town,_Bratislava" },
        { name: { fr: "UFO Bridge — restaurant sur le pont du Danube avec vue panoramique", en: "UFO Bridge — restaurant on the Danube bridge with panoramic views", es: "UFO Bridge — restaurante en el puente del Danubio con vistas panorámicas" }, wikipedia: "File:Most SNP, Bratislava (by Pudelek).JPG" },
        { name: { fr: "Ruines du Devin Castle — falaise au confluent Danube–Morava", en: "Devín Castle ruins — cliff at the Danube-Morava confluence", es: "Ruinas del castillo de Devín — acantilado en la confluencia Danubio-Morava" }, wikipedia: "Devín_Castle" },
      ],
    },
    {
      id: 3,
      name: { fr: "Paradis slovaque — Gorges et échelles", en: "Slovak Paradise — Gorges and ladders", es: "Paraíso Eslovaco — Desfiladeros y escaleras" },
      region: { fr: "Spis (centre-est)", en: "Spiš (centre-east)", es: "Spiš (centro-este)" },
      description: {
        fr: "Le Paradis slovaque (Slovenský Raj) est un parc national unique : ses gorges encaissées sont équipées d'échelles, de passerelles et de chaînes métalliques fixées dans la roche — on se hisse littéralement dans les cascades. C'est l'aventure à portée de tous, sans équipement d'escalade. Les gorges de Sucha Bela et Piecky sont les plus spectaculaires.",
        en: "The Slovak Paradise (Slovenský Raj) is a unique national park: its narrow gorges are fitted with ladders, walkways and metal chains bolted into the rock — you literally climb up through waterfalls. Adventure within everyone's reach, no climbing gear needed. The Suchá Belá and Piecky gorges are the most spectacular.",
        es: "El Paraíso Eslovaco (Slovenský Raj) es un parque nacional único: sus desfiladeros encajonados están equipados con escaleras, pasarelas y cadenas metálicas fijadas en la roca — literalmente se sube por dentro de las cascadas. Aventura al alcance de todos, sin equipo de escalada. Los desfiladeros de Suchá Belá y Piecky son los más espectaculares.",
      },
      wikipedia: "Slovak_Paradise",
      tags: ["Nature", "Aventure", "Randonnée"],
      mustSee: [
        { name: { fr: "Gorge de Sucha Bela — échelles dans une cascade de 300m", en: "Suchá Belá gorge — ladders through a 300m waterfall", es: "Desfiladero de Suchá Belá — escaleras en una cascada de 300 m" }, wikipedia: "File:Slovenský_ráj,_Korytový_vodopád.JPG" },
        { name: { fr: "Cascade de Závojový — la plus haute de la région (65m)", en: "Závojový Waterfall — the tallest in the region (65m)", es: "Cascada de Závojový — la más alta de la región (65 m)" }, wikipedia: "File:Zavojovy vodopad detail.JPG" },
        { name: { fr: "Château de Spiš (UNESCO) — le plus grand château ruiné d'Europe", en: "Spiš Castle (UNESCO) — the largest castle ruin in Europe", es: "Castillo de Spiš (UNESCO) — la mayor ruina de castillo de Europa" }, wikipedia: "File:Spišský hrad, 2019 (54).jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Route des châteaux médiévaux", en: "Route of medieval castles", es: "Ruta de los castillos medievales" },
      region: { fr: "Slovaquie centrale", en: "Central Slovakia", es: "Eslovaquia central" },
      description: {
        fr: "La Slovaquie compte plus de 180 châteaux et forteresses — le plus grand nombre par km² d'Europe. Bojnice (le plus romantique, style néo-gothique), Trenčín (sur un piton de basalte au-dessus de la ville), Oravský Podzámok (perché sur une falaise de 112m au-dessus de la rivière Orava) sont parmi les plus spectaculaires des Carpates.",
        en: "Slovakia has over 180 castles and fortresses — the highest density in Europe. Bojnice (the most romantic, neo-Gothic style), Trenčín (on a basalt outcrop above the town), and Oravský Podzámok (perched on a 112m cliff above the Orava River) are among the most spectacular in the Carpathians.",
        es: "Eslovaquia cuenta con más de 180 castillos y fortalezas — la mayor densidad de Europa. Bojnice (el más romántico, estilo neogótico), Trenčín (sobre un espolón basáltico que domina la ciudad), y Oravský Podzámok (encaramado en un acantilado de 112 m sobre el río Orava) están entre los más espectaculares de los Cárpatos.",
      },
      wikipedia: "Bojnice_Castle",
      tags: ["Architecture", "Histoire", "Montagne"],
      mustSee: [
        { name: { fr: "Château de Bojnice — le plus romantique de Slovaquie (XIVe s.)", en: "Bojnice Castle — Slovakia's most romantic (14th century)", es: "Castillo de Bojnice — el más romántico de Eslovaquia (siglo XIV)" }, wikipedia: "Bojnice_Castle" },
        { name: { fr: "Château d'Oravský — falaise de 112m au-dessus de l'Orava", en: "Orava Castle — 112m cliff above the Orava River", es: "Castillo de Oravský — acantilado de 112 m sobre el Orava" }, wikipedia: "File:JBZamekOrawski v2.jpg" },
        { name: { fr: "Château de Trenčín — piton de basalte dominant la ville", en: "Trenčín Castle — basalt outcrop overlooking the town", es: "Castillo de Trenčín — espolón basáltico que domina la ciudad" }, wikipedia: "Trenčín_Castle" },
        { name: { fr: "Château de Krásna Hôrka (ruin romantique dans les Carpates)", en: "Krásna Hôrka Castle (romantic ruin in the Carpathians)", es: "Castillo de Krásna Hôrka (ruina romántica en los Cárpatos)" }, wikipedia: "File:Krásna Hôrka.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Slovaquie utilise l'euro depuis 2009 — pas de surprise de change. Les prix sont 35–40% inférieurs à ceux de la France, surtout hors Bratislava. La montagne et les zones rurales sont particulièrement abordables.",
      en: "Slovakia has used the euro since 2009 — no exchange rate surprises. Prices are 35–40% lower than in France, especially outside Bratislava. The mountains and rural areas are particularly affordable.",
      es: "Eslovaquia usa el euro desde 2009 — sin sorpresas de cambio. Los precios son un 35–40% más bajos que en Francia, especialmente fuera de Bratislava. Las montañas y las zonas rurales son particularmente asequibles.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Chata (chalet) dans les Tatras", en: "Chata (chalet) in the Tatras", es: "Chata (chalé) en los Tatras" }, price: "20–50 €", detail: { fr: "Dortoir ou chambre, repas disponibles", en: "Dorm or room, meals available", es: "Dormitorio o habitación, comidas disponibles" } },
          { label: { fr: "Hôtel 3★ Bratislava", en: "3★ hotel in Bratislava", es: "Hotel 3★ en Bratislava" }, price: "55–100 €", detail: { fr: "Bien situé, bon confort", en: "Well located, good comfort", es: "Bien situado, buen confort" } },
          { label: { fr: "Pension de famille (ubytovňa) en province", en: "Family guesthouse (ubytovňa) in the countryside", es: "Pensión familiar (ubytovňa) en el interior" }, price: "20–40 €", detail: { fr: "Simple, accueil chaleureux", en: "Simple, warm welcome", es: "Sencilla, acogida cálida" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Bryndzové halušky (gnocchis au fromage de brebis)", en: "Bryndzové halušky (potato dumplings with sheep cheese)", es: "Bryndzové halušky (ñoquis con queso de oveja)" }, price: "6–10 €", detail: { fr: "Plat national slovaque", en: "The Slovak national dish", es: "Plato nacional eslovaco" } },
          { label: { fr: "Restaurant mid-range Bratislava", en: "Mid-range restaurant in Bratislava", es: "Restaurante de gama media en Bratislava" }, price: "12–22 €", detail: { fr: "Grillade, soupe de goulasch, bière Zlatý Bažant", en: "Grilled meat, goulash soup, Zlatý Bažant beer", es: "Carne a la parrilla, sopa de gulasch, cerveza Zlatý Bažant" } },
          { label: { fr: "Langoš (beignet frit) au marché", en: "Langoš (fried flatbread) at the market", es: "Langoš (masa frita) en el mercado" }, price: "2–4 €", detail: { fr: "Snack d'Europe centrale typique", en: "A typical Central European snack", es: "Aperitivo típico de Europa Central" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Train Bratislava–Košice (5h, RegioJet)", en: "Train Bratislava–Košice (5h, RegioJet)", es: "Tren Bratislava–Košice (5h, RegioJet)" }, price: "15–30 €", detail: { fr: "Traversée de la Slovaquie", en: "Crossing Slovakia", es: "Travesía de Eslovaquia" } },
          { label: { fr: "Bus régional (SAD) dans les Tatras", en: "Regional bus (SAD) in the Tatras", es: "Autobús regional (SAD) en los Tatras" }, price: "3–8 €", detail: { fr: "Relie les stations entre elles", en: "Links the resorts together", es: "Conecta las estaciones entre sí" } },
          { label: { fr: "Train Bratislava–Vienne (1h, ÖBB)", en: "Train Bratislava–Vienna (1h, ÖBB)", es: "Tren Bratislava–Viena (1h, ÖBB)" }, price: "12–20 €", detail: { fr: "Les deux capitales à 1h", en: "The two capitals, 1h apart", es: "Ambas capitales a 1h" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée Paradis slovaque (parc national)", en: "Slovak Paradise entry (national park)", es: "Entrada al Paraíso Eslovaco (parque nacional)" }, price: "3–5 €", detail: { fr: "Accès aux gorges et sentiers", en: "Access to the gorges and trails", es: "Acceso a los desfiladeros y senderos" } },
          { label: { fr: "Visite château de Bojnice + spectacle médiéval", en: "Bojnice Castle visit + medieval show", es: "Visita al castillo de Bojnice + espectáculo medieval" }, price: "10–15 €", detail: { fr: "Festival fantômes en mai", en: "Ghost festival in May", es: "Festival de fantasmas en mayo" } },
          { label: { fr: "Forfait ski Jasná (journée)", en: "Jasná ski pass (day)", es: "Forfait de esquí en Jasná (día)" }, price: "35–50 €", detail: { fr: "Meilleure station de Slovaquie", en: "Slovakia's best resort", es: "La mejor estación de Eslovaquia" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "45–75 €/j", desc: { fr: "Chata + halušky + bus régional", en: "Chata + halušky + regional bus", es: "Chata + halušky + autobús regional" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "80–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités guidées", en: "3★ hotel + restaurants + guided activities", es: "Hotel 3★ + restaurantes + actividades guiadas" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días" },
      route: { fr: "Bratislava (2j) → Paradis slovaque (2j) → Hautes Tatras (3j) → retour (1j)", en: "Bratislava (2d) → Slovak Paradise (2d) → High Tatras (3d) → return (1d)", es: "Bratislava (2d) → Paraíso Eslovaco (2d) → Altos Tatras (3d) → regreso (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bratislava (Ryanair, Wizz Air)", en: "Return flight Paris–Bratislava (Ryanair, Wizz Air)", es: "Vuelo ida y vuelta Madrid–Bratislava (Ryanair, Wizz Air)" }, amount: "70–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)" }, amount: "200–380 €" },
            { label: { fr: "Transports (train + bus)", en: "Transport (train + bus)", es: "Transporte (tren + autobús)" }, amount: "100–180 €" },
            { label: { fr: "Nourriture + bières", en: "Food + beer", es: "Comida + cervezas" }, amount: "220–380 €" },
            { label: { fr: "Activités + châteaux", en: "Activities + castles", es: "Actividades + castillos" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 700 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bratislava ou Vienne", en: "Return flight Paris–Bratislava or Vienna", es: "Vuelo ida y vuelta Madrid–Bratislava o Viena" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)" }, amount: "500–900 €" },
            { label: { fr: "Voiture de location (8 jours)", en: "Car rental (8 days)", es: "Coche de alquiler (8 días)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes" }, amount: "350–650 €" },
            { label: { fr: "Ski, randonnées guidées, châteaux", en: "Skiing, guided hikes, castles", es: "Esquí, rutas guiadas, castillos" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~2h (Ryanair direct Beauvais–Bratislava, Wizz Air). Aussi Vienne (1h de train depuis Bratislava).", en: "~2h (Ryanair direct Beauvais–Bratislava, Wizz Air). Also Vienna (1h by train from Bratislava).", es: "~3h (Ryanair, Wizz Air). También Viena (1h en tren desde Bratislava)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient.", es: "Sin visado — espacio Schengen. DNI suficiente." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Euro (€). Carte bancaire bien acceptée en ville. Espèces utiles dans les chaty de montagne et en zone rurale.", en: "Euro (€). Bank cards widely accepted in towns. Cash useful at mountain chaty and in rural areas.", es: "Euro (€). Tarjeta bancaria bien aceptada en la ciudad. Efectivo útil en las chatas de montaña y en zonas rurales." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Slovaque. Anglais parlé par les jeunes. Tchèque compris (langues très proches). Moins d'anglais en zone rurale.", en: "Slovak. English spoken by young people. Czech is understood (very similar languages). Less English in rural areas.", es: "Eslovaco. Los jóvenes hablan inglés. El checo se entiende (lenguas muy cercanas). Menos inglés en zonas rurales." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/E (European) — 230V. No adapter needed.", es: "Tipo C/E (europeo) — 230V. No se necesita adaptador." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucune précaution. CEAM valide. Tiques dans les forêts (pantalon long recommandé).", en: "No particular precautions. EHIC valid. Ticks in the forests (long trousers recommended).", es: "Ninguna precaución especial. TSE válida. Garrapatas en los bosques (se recomienda pantalón largo)." } },
    { icon: "🏰", label: { fr: "Châteaux", en: "Castles", es: "Castillos" }, value: { fr: "La Slovaquie a 180 châteaux et ruines — le record d'Europe par surface. La plupart sont accessibles à pied depuis un village, souvent gratuits ou très bon marché.", en: "Slovakia has 180 castles and ruins — the European density record. Most are reachable on foot from a village, often free or very cheap.", es: "Eslovaquia tiene 180 castillos y ruinas — el récord de densidad de Europa. La mayoría son accesibles a pie desde un pueblo, a menudo gratuitos o muy baratos." } },
    { icon: "🎿", label: { fr: "Ski", en: "Skiing", es: "Esquí" }, value: { fr: "Jasná est la meilleure station : 49km de pistes, forfait 35–50€/jour — le rapport qualité-prix le meilleur d'Europe centrale.", en: "Jasná is the best resort: 49km of slopes, day pass 35–50€ — the best value in Central Europe.", es: "Jasná es la mejor estación: 49 km de pistas, forfait de 35–50€/día — la mejor relación calidad-precio de Europa Central." } },
  ],
};
