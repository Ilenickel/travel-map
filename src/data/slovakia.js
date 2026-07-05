export const SLOVAKIA = {
  code: "SVK",
  numericId: 703,
  name: { fr: "Slovaquie", en: "Slovakia" },
  emoji: "🇸🇰",
  capital: { fr: "Bratislava", en: "Bratislava" },
  language: { fr: "Slovaque", en: "Slovak" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 80,
    tripMin: 800, tripMid: 1700,
  },
  description: {
    fr: "La Slovaquie est la perle méconnue d'Europe centrale : les Hautes Tatras (les Alpes les plus au nord-est d'Europe, 2 655m), les châteaux médiévaux en ruines sur les collines (plus de 180 châteaux par km² — record d'Europe), les gorges du Paradis slovaque, Bratislava et sa Vieille Ville baroque à 1h de Vienne. Un pays abordable à la nature extraordinaire.",
    en: "Slovakia is the little-known gem of Central Europe: the High Tatras (Europe's north-easternmost Alps, 2,655m), ruined medieval castles on the hills (over 180 castles — a European density record), the gorges of the Slovak Paradise, and Bratislava with its baroque Old Town just an hour from Vienna. An affordable country with extraordinary nature.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison idéale", en: "Ideal season" },
      color: "#22c55e",
      description: {
        fr: "Randonnées dans les Tatras (juin–sept), châteaux et villages fleuris (mai-juin), couleurs d'automne splendides (octobre). Températures 18–26°C en plaine.",
        en: "Hiking in the Tatras (Jun–Sep), castles and blooming villages (May–Jun), splendid autumn colours (October). Temperatures 18–26°C in the lowlands.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Ski dans les Tatras", en: "Skiing in the Tatras" },
      color: "#3b82f6",
      description: {
        fr: "Ski alpin et nordique dans les Tatras (Jasná, Štrbské Pleso). Marchés de Noël à Bratislava. Températures -5 à -15°C en montagne.",
        en: "Alpine and cross-country skiing in the Tatras (Jasná, Štrbské Pleso). Christmas markets in Bratislava. Temperatures -5 to -15°C in the mountains.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "bratislava",
      name: "Bratislava",
      region: { fr: "Petit-Danube (capitale)", en: "Little Danube (capital)" },
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
      name: { fr: "Hautes Tatras", en: "High Tatras" },
      region: { fr: "Tatry (nord, altitude 800–2 655m)", en: "Tatras (north, 800–2,655m altitude)" },
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
      name: { fr: "Hautes Tatras — Les Alpes slovaques", en: "High Tatras — The Slovak Alps" },
      region: { fr: "Tatry (nord)", en: "Tatras (north)" },
      description: {
        fr: "Les Hautes Tatras sont le massif montagneux le plus au nord-est d'Europe : 29 sommets au-dessus de 2 500m, des lacs glaciaires (Štrbské Pleso), des cascades, et des randonnées balisées parmi les plus belles d'Europe centrale. L'ours brun, le chamois des Tatras et l'aigle royal sont encore présents. Ski alpin à Jasná en hiver.",
        en: "The High Tatras are Europe's north-easternmost mountain range: 29 peaks above 2,500m, glacial lakes (Štrbské Pleso), waterfalls, and marked trails among the most beautiful in Central Europe. Brown bears, Tatra chamois and golden eagles still live here. Alpine skiing in Jasná in winter.",
      },
      wikipedia: "High_Tatras",
      tags: ["Montagne", "Randonnée", "Lacs", "Ski", "UNESCO", "Nature"],
      mustSee: [
        { name: { fr: "Lac Štrbské Pleso — vue sur les crêtes des Tatras", en: "Lake Štrbské Pleso — view of the Tatra ridges" }, wikipedia: "Štrbské_Pleso" },
        { name: { fr: "Randonnée Rysy (2 503m) — sommet accessible depuis la Pologne", en: "Rysy hike (2,503m) — a summit accessible from Poland" }, wikipedia: "Rysy" },
        { name: { fr: "Cascade de Skok — sentier des lacs Tatry", en: "Skok Waterfall — the Tatra lakes trail" }, wikipedia: "High_Tatras" },
        { name: { fr: "Ski à Jasná Nízke Tatry (feb–avr)", en: "Skiing at Jasná Nízke Tatry (Feb–Apr)" }, wikipedia: "File:Jasná Ski Resort - gondola lift Kosodrevina - Chopok (3).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Bratislava — Petite grande capitale", en: "Bratislava — a small great capital" },
      region: { fr: "Danube occidental", en: "Western Danube" },
      description: {
        fr: "Bratislava est la seule capitale au monde à longer deux pays (Autriche et Hongrie). Sa Vieille Ville baroque est compacte et piétonne, dominée par le château blanc (vue sur le Danube), et animée par les rues Michael et Laurinska. À 1h de Vienne et 2h de Budapest par train, c'est aussi une base idéale pour un circuit des capitales danubiennes.",
        en: "Bratislava is the only capital in the world bordering two countries (Austria and Hungary). Its baroque Old Town is compact and pedestrian-friendly, overlooked by the white castle (with views over the Danube), and enlivened by Michalská and Laurinská streets. Just 1h from Vienna and 2h from Budapest by train, it's also an ideal base for a Danube capitals tour.",
      },
      wikipedia: "Bratislava",
      tags: ["Ville", "Baroque", "Danube", "Compact", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Château de Bratislava — vue sur le Danube, Autriche et Hongrie", en: "Bratislava Castle — views over the Danube, Austria and Hungary" }, wikipedia: "Bratislava_Castle" },
        { name: { fr: "Vieille Ville baroque — rues Michael et Hlavné námestie", en: "Baroque Old Town — Michalská street and Hlavné námestie" }, wikipedia: "Old_Town,_Bratislava" },
        { name: { fr: "UFO Bridge — restaurant sur le pont du Danube avec vue panoramique", en: "UFO Bridge — restaurant on the Danube bridge with panoramic views" }, wikipedia: "File:Most SNP, Bratislava (by Pudelek).JPG" },
        { name: { fr: "Ruines du Devin Castle — falaise au confluent Danube–Morava", en: "Devín Castle ruins — cliff at the Danube-Morava confluence" }, wikipedia: "Devín_Castle" },
      ],
    },
    {
      id: 3,
      name: { fr: "Paradis slovaque — Gorges et échelles", en: "Slovak Paradise — Gorges and ladders" },
      region: { fr: "Spis (centre-est)", en: "Spiš (centre-east)" },
      description: {
        fr: "Le Paradis slovaque (Slovenský Raj) est un parc national unique : ses gorges encaissées sont équipées d'échelles, de passerelles et de chaînes métalliques fixées dans la roche — on se hisse littéralement dans les cascades. C'est l'aventure à portée de tous, sans équipement d'escalade. Les gorges de Sucha Bela et Piecky sont les plus spectaculaires.",
        en: "The Slovak Paradise (Slovenský Raj) is a unique national park: its narrow gorges are fitted with ladders, walkways and metal chains bolted into the rock — you literally climb up through waterfalls. Adventure within everyone's reach, no climbing gear needed. The Suchá Belá and Piecky gorges are the most spectacular.",
      },
      wikipedia: "Slovak_Paradise",
      tags: ["Gorges", "Cascade", "Aventure", "Escalade", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Gorge de Sucha Bela — échelles dans une cascade de 300m", en: "Suchá Belá gorge — ladders through a 300m waterfall" }, wikipedia: "File:Slovenský_ráj,_Korytový_vodopád.JPG" },
        { name: { fr: "Cascade de Závojový — la plus haute de la région (65m)", en: "Závojový Waterfall — the tallest in the region (65m)" }, wikipedia: "File:Zavojovy vodopad detail.JPG" },
        { name: { fr: "Château de Spiš (UNESCO) — le plus grand château ruiné d'Europe", en: "Spiš Castle (UNESCO) — the largest castle ruin in Europe" }, wikipedia: "File:Spišský hrad, 2019 (54).jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Route des châteaux médiévaux", en: "Route of medieval castles" },
      region: { fr: "Slovaquie centrale", en: "Central Slovakia" },
      description: {
        fr: "La Slovaquie compte plus de 180 châteaux et forteresses — le plus grand nombre par km² d'Europe. Bojnice (le plus romantique, style néo-gothique), Trenčín (sur un piton de basalte au-dessus de la ville), Oravský Podzámok (perché sur une falaise de 112m au-dessus de la rivière Orava) sont parmi les plus spectaculaires des Carpates.",
        en: "Slovakia has over 180 castles and fortresses — the highest density in Europe. Bojnice (the most romantic, neo-Gothic style), Trenčín (on a basalt outcrop above the town), and Oravský Podzámok (perched on a 112m cliff above the Orava River) are among the most spectacular in the Carpathians.",
      },
      wikipedia: "Bojnice_Castle",
      tags: ["Châteaux", "Médiéval", "Romantique", "Carpates", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Château de Bojnice — le plus romantique de Slovaquie (XIVe s.)", en: "Bojnice Castle — Slovakia's most romantic (14th century)" }, wikipedia: "Bojnice_Castle" },
        { name: { fr: "Château d'Oravský — falaise de 112m au-dessus de l'Orava", en: "Orava Castle — 112m cliff above the Orava River" }, wikipedia: "File:JBZamekOrawski v2.jpg" },
        { name: { fr: "Château de Trenčín — piton de basalte dominant la ville", en: "Trenčín Castle — basalt outcrop overlooking the town" }, wikipedia: "Trenčín_Castle" },
        { name: { fr: "Château de Krásna Hôrka (ruin romantique dans les Carpates)", en: "Krásna Hôrka Castle (romantic ruin in the Carpathians)" }, wikipedia: "File:Krásna Hôrka.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Slovaquie utilise l'euro depuis 2009 — pas de surprise de change. Les prix sont 35–40% inférieurs à ceux de la France, surtout hors Bratislava. La montagne et les zones rurales sont particulièrement abordables.",
      en: "Slovakia has used the euro since 2009 — no exchange rate surprises. Prices are 35–40% lower than in France, especially outside Bratislava. The mountains and rural areas are particularly affordable.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Chata (chalet) dans les Tatras", en: "Chata (chalet) in the Tatras" }, price: "20–50 €", detail: { fr: "Dortoir ou chambre, repas disponibles", en: "Dorm or room, meals available" } },
          { label: { fr: "Hôtel 3★ Bratislava", en: "3★ hotel in Bratislava" }, price: "55–100 €", detail: { fr: "Bien situé, bon confort", en: "Well located, good comfort" } },
          { label: { fr: "Pension de famille (ubytovňa) en province", en: "Family guesthouse (ubytovňa) in the countryside" }, price: "20–40 €", detail: { fr: "Simple, accueil chaleureux", en: "Simple, warm welcome" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Bryndzové halušky (gnocchis au fromage de brebis)", en: "Bryndzové halušky (potato dumplings with sheep cheese)" }, price: "6–10 €", detail: { fr: "Plat national slovaque", en: "The Slovak national dish" } },
          { label: { fr: "Restaurant mid-range Bratislava", en: "Mid-range restaurant in Bratislava" }, price: "12–22 €", detail: { fr: "Grillade, soupe de goulasch, bière Zlatý Bažant", en: "Grilled meat, goulash soup, Zlatý Bažant beer" } },
          { label: { fr: "Langoš (beignet frit) au marché", en: "Langoš (fried flatbread) at the market" }, price: "2–4 €", detail: { fr: "Snack d'Europe centrale typique", en: "A typical Central European snack" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Train Bratislava–Košice (5h, RegioJet)", en: "Train Bratislava–Košice (5h, RegioJet)" }, price: "15–30 €", detail: { fr: "Traversée de la Slovaquie", en: "Crossing Slovakia" } },
          { label: { fr: "Bus régional (SAD) dans les Tatras", en: "Regional bus (SAD) in the Tatras" }, price: "3–8 €", detail: { fr: "Relie les stations entre elles", en: "Links the resorts together" } },
          { label: { fr: "Train Bratislava–Vienne (1h, ÖBB)", en: "Train Bratislava–Vienna (1h, ÖBB)" }, price: "12–20 €", detail: { fr: "Les deux capitales à 1h", en: "The two capitals, 1h apart" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Paradis slovaque (parc national)", en: "Slovak Paradise entry (national park)" }, price: "3–5 €", detail: { fr: "Accès aux gorges et sentiers", en: "Access to the gorges and trails" } },
          { label: { fr: "Visite château de Bojnice + spectacle médiéval", en: "Bojnice Castle visit + medieval show" }, price: "10–15 €", detail: { fr: "Festival fantômes en mai", en: "Ghost festival in May" } },
          { label: { fr: "Forfait ski Jasná (journée)", en: "Jasná ski pass (day)" }, price: "35–50 €", detail: { fr: "Meilleure station de Slovaquie", en: "Slovakia's best resort" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Chata + halušky + bus régional", en: "Chata + halušky + regional bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités guidées", en: "3★ hotel + restaurants + guided activities" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: { fr: "Bratislava (2j) → Paradis slovaque (2j) → Hautes Tatras (3j) → retour (1j)", en: "Bratislava (2d) → Slovak Paradise (2d) → High Tatras (3d) → return (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bratislava (Ryanair, Wizz Air)", en: "Return flight Paris–Bratislava (Ryanair, Wizz Air)" }, amount: "70–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "200–380 €" },
            { label: { fr: "Transports (train + bus)", en: "Transport (train + bus)" }, amount: "100–180 €" },
            { label: { fr: "Nourriture + bières", en: "Food + beer" }, amount: "220–380 €" },
            { label: { fr: "Activités + châteaux", en: "Activities + castles" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 700 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bratislava ou Vienne", en: "Return flight Paris–Bratislava or Vienna" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "500–900 €" },
            { label: { fr: "Voiture de location (8 jours)", en: "Car rental (8 days)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "350–650 €" },
            { label: { fr: "Ski, randonnées guidées, châteaux", en: "Skiing, guided hikes, castles" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h (Ryanair direct Beauvais–Bratislava, Wizz Air). Aussi Vienne (1h de train depuis Bratislava).", en: "~2h (Ryanair direct Beauvais–Bratislava, Wizz Air). Also Vienna (1h by train from Bratislava)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€). Carte bancaire bien acceptée en ville. Espèces utiles dans les chaty de montagne et en zone rurale.", en: "Euro (€). Bank cards widely accepted in towns. Cash useful at mountain chaty and in rural areas." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Slovaque. Anglais parlé par les jeunes. Tchèque compris (langues très proches). Moins d'anglais en zone rurale.", en: "Slovak. English spoken by young people. Czech is understood (very similar languages). Less English in rural areas." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/E (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution. CEAM valide. Tiques dans les forêts (pantalon long recommandé).", en: "No particular precautions. EHIC valid. Ticks in the forests (long trousers recommended)." } },
    { icon: "🏰", label: { fr: "Châteaux", en: "Castles" }, value: { fr: "La Slovaquie a 180 châteaux et ruines — le record d'Europe par surface. La plupart sont accessibles à pied depuis un village, souvent gratuits ou très bon marché.", en: "Slovakia has 180 castles and ruins — the European density record. Most are reachable on foot from a village, often free or very cheap." } },
    { icon: "🎿", label: { fr: "Ski", en: "Skiing" }, value: { fr: "Jasná est la meilleure station : 49km de pistes, forfait 35–50€/jour — le rapport qualité-prix le meilleur d'Europe centrale.", en: "Jasná is the best resort: 49km of slopes, day pass 35–50€ — the best value in Central Europe." } },
  ],
};
