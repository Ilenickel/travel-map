export const SLOVAKIA = {
  code: "SVK",
  numericId: 703,
  name: "Slovaquie",
  emoji: "🇸🇰",
  capital: "Bratislava",
  language: "Slovaque",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 80,
    tripMin: 800, tripMid: 1700,
  },
  description:
    "La Slovaquie est la perle méconnue d'Europe centrale : les Hautes Tatras (les Alpes les plus au nord-est d'Europe, 2 655m), les châteaux médiévaux en ruines sur les collines (plus de 180 châteaux par km² — record d'Europe), les gorges du Paradis slovaque, Bratislava et sa Vieille Ville baroque à 1h de Vienne. Un pays abordable à la nature extraordinaire.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison idéale",
      color: "#22c55e",
      description:
        "Randonnées dans les Tatras (juin–sept), châteaux et villages fleuris (mai-juin), couleurs d'automne splendides (octobre). Températures 18–26°C en plaine.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Ski dans les Tatras",
      color: "#3b82f6",
      description:
        "Ski alpin et nordique dans les Tatras (Jasná, Štrbské Pleso). Marchés de Noël à Bratislava. Températures -5 à -15°C en montagne.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "bratislava",
      name: "Bratislava",
      region: "Petit-Danube (capitale)",
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
      name: "Hautes Tatras",
      region: "Tatry (nord, altitude 800–2 655m)",
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
      name: "Hautes Tatras — Les Alpes slovaques",
      region: "Tatry (nord)",
      description:
        "Les Hautes Tatras sont le massif montagneux le plus au nord-est d'Europe : 29 sommets au-dessus de 2 500m, des lacs glaciaires (Štrbské Pleso), des cascades, et des randonnées balisées parmi les plus belles d'Europe centrale. L'ours brun, le chamois des Tatras et l'aigle royal sont encore présents. Ski alpin à Jasná en hiver.",
      wikipedia: "High_Tatras",
      tags: ["Montagne", "Randonnée", "Lacs", "Ski"],
      mustSee: [
        { name: "Lac Štrbské Pleso — vue sur les crêtes des Tatras", wikipedia: "Štrbské_Pleso" },
        { name: "Randonnée Rysy (2 503m) — sommet accessible depuis la Pologne", wikipedia: "Rysy" },
        { name: "Cascade de Skok — sentier des lacs Tatry", wikipedia: "High_Tatras" },
        { name: "Ski à Jasná Nízke Tatry (feb–avr)", wikipedia: "File:Jasná Ski Resort - gondola lift Kosodrevina - Chopok (3).jpg" },
      ],
    },
    {
      id: 2,
      name: "Bratislava — Petite grande capitale",
      region: "Danube occidental",
      description:
        "Bratislava est la seule capitale au monde à longer deux pays (Autriche et Hongrie). Sa Vieille Ville baroque est compacte et piétonne, dominée par le château blanc (vue sur le Danube), et animée par les rues Michael et Laurinska. À 1h de Vienne et 2h de Budapest par train, c'est aussi une base idéale pour un circuit des capitales danubiennes.",
      wikipedia: "Bratislava",
      tags: ["Capitale", "Baroque", "Danube", "Compact"],
      mustSee: [
        { name: "Château de Bratislava — vue sur le Danube, Autriche et Hongrie", wikipedia: "Bratislava_Castle" },
        { name: "Vieille Ville baroque — rues Michael et Hlavné námestie", wikipedia: "Old_Town,_Bratislava" },
        { name: "UFO Bridge — restaurant sur le pont du Danube avec vue panoramique", wikipedia: "File:Most SNP, Bratislava (by Pudelek).JPG" },
        { name: "Ruines du Devin Castle — falaise au confluent Danube–Morava", wikipedia: "Devín_Castle" },
      ],
    },
    {
      id: 3,
      name: "Paradis slovaque — Gorges et échelles",
      region: "Spis (centre-est)",
      description:
        "Le Paradis slovaque (Slovenský Raj) est un parc national unique : ses gorges encaissées sont équipées d'échelles, de passerelles et de chaînes métalliques fixées dans la roche — on se hisse littéralement dans les cascades. C'est l'aventure à portée de tous, sans équipement d'escalade. Les gorges de Sucha Bela et Piecky sont les plus spectaculaires.",
      wikipedia: "Slovak_Paradise",
      tags: ["Gorges", "Cascade", "Aventure", "Escalade"],
      mustSee: [
        { name: "Gorge de Sucha Bela — échelles dans une cascade de 300m", wikipedia: "File:Slovenský_ráj,_Korytový_vodopád.JPG" },
        { name: "Cascade de Závojový — la plus haute de la région (65m)", wikipedia: "File:Zavojovy vodopad detail.JPG" },
        { name: "Château de Spiš (UNESCO) — le plus grand château ruiné d'Europe", wikipedia: "File:Spišský hrad, 2019 (54).jpg" },
      ],
    },
    {
      id: 4,
      name: "Route des châteaux médiévaux",
      region: "Slovaquie centrale",
      description:
        "La Slovaquie compte plus de 180 châteaux et forteresses — le plus grand nombre par km² d'Europe. Bojnice (le plus romantique, style néo-gothique), Trenčín (sur un piton de basalte au-dessus de la ville), Oravský Podzámok (perché sur une falaise de 112m au-dessus de la rivière Orava) sont parmi les plus spectaculaires des Carpates.",
      wikipedia: "Bojnice_Castle",
      tags: ["Châteaux", "Médiéval", "Romantique", "Carpates"],
      mustSee: [
        { name: "Château de Bojnice — le plus romantique de Slovaquie (XIVe s.)", wikipedia: "Bojnice_Castle" },
        { name: "Château d'Oravský — falaise de 112m au-dessus de l'Orava", wikipedia: "File:JBZamekOrawski v2.jpg" },
        { name: "Château de Trenčín — piton de basalte dominant la ville", wikipedia: "Trenčín_Castle" },
        { name: "Château de Krásna Hôrka (ruin romantique dans les Carpates)", wikipedia: "File:Krásna Hôrka.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Slovaquie utilise l'euro depuis 2009 — pas de surprise de change. Les prix sont 35–40% inférieurs à ceux de la France, surtout hors Bratislava. La montagne et les zones rurales sont particulièrement abordables.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Chata (chalet) dans les Tatras", price: "20–50 €", detail: "Dortoir ou chambre, repas disponibles" },
          { label: "Hôtel 3★ Bratislava", price: "55–100 €", detail: "Bien situé, bon confort" },
          { label: "Pension de famille (ubytovňa) en province", price: "20–40 €", detail: "Simple, accueil chaleureux" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Bryndzové halušky (gnocchis au fromage de brebis)", price: "6–10 €", detail: "Plat national slovaque" },
          { label: "Restaurant mid-range Bratislava", price: "12–22 €", detail: "Grillade, soupe de goulasch, bière Zlatý Bažant" },
          { label: "Langoš (beignet frit) au marché", price: "2–4 €", detail: "Snack d'Europe centrale typique" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train Bratislava–Košice (5h, RegioJet)", price: "15–30 €", detail: "Traversée de la Slovaquie" },
          { label: "Bus régional (SAD) dans les Tatras", price: "3–8 €", detail: "Relie les stations entre elles" },
          { label: "Train Bratislava–Vienne (1h, ÖBB)", price: "12–20 €", detail: "Les deux capitales à 1h" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Paradis slovaque (parc national)", price: "3–5 €", detail: "Accès aux gorges et sentiers" },
          { label: "Visite château de Bojnice + spectacle médiéval", price: "10–15 €", detail: "Festival fantômes en mai" },
          { label: "Forfait ski Jasná (journée)", price: "35–50 €", detail: "Meilleure station de Slovaquie" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–75 €/j", desc: "Chata + halušky + bus régional", color: "#22c55e" },
      { type: "Confort", daily: "80–150 €/j", desc: "Hôtel 3★ + restaurants + activités guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Bratislava (2j) → Paradis slovaque (2j) → Hautes Tatras (3j) → retour (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bratislava (Ryanair, Wizz Air)", amount: "70–200 €" },
            { label: "Hébergement (8 nuits)", amount: "200–380 €" },
            { label: "Transports (train + bus)", amount: "100–180 €" },
            { label: "Nourriture + bières", amount: "220–380 €" },
            { label: "Activités + châteaux", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 700 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bratislava ou Vienne", amount: "100–250 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "500–900 €" },
            { label: "Voiture de location (8 jours)", amount: "250–400 €" },
            { label: "Nourriture & restaurants", amount: "350–650 €" },
            { label: "Ski, randonnées guidées, châteaux", amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h (Ryanair direct Beauvais–Bratislava, Wizz Air). Aussi Vienne (1h de train depuis Bratislava)." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€). Carte bancaire bien acceptée en ville. Espèces utiles dans les chaty de montagne et en zone rurale." },
    { icon: "🗣️", label: "Langue",            value: "Slovaque. Anglais parlé par les jeunes. Tchèque compris (langues très proches). Moins d'anglais en zone rurale." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. CEAM valide. Tiques dans les forêts (pantalon long recommandé)." },
    { icon: "🏰", label: "Châteaux",          value: "La Slovaquie a 180 châteaux et ruines — le record d'Europe par surface. La plupart sont accessibles à pied depuis un village, souvent gratuits ou très bon marché." },
    { icon: "🎿", label: "Ski",               value: "Jasná est la meilleure station : 49km de pistes, forfait 35–50€/jour — le rapport qualité-prix le meilleur d'Europe centrale." },
  ],
};
