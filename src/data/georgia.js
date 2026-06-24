export const GEORGIA = {
  code: "GEO",
  numericId: 268,
  name: "Géorgie",
  emoji: "🇬🇪",
  capital: "Tbilissi",
  language: "Géorgien",
  currency: "Lari (GEL)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1100, tripMid: 2000,
  },
  description:
    "La Géorgie est l'une des destinations les plus authentiques et abordables d'Europe orientale. Entre les monastères perchés dans les montagnes du Caucase, la vieille ville de Tbilissi aux maisons à balcons sculptés, les vignobles de Kakhétie et la côte Noire de Batoumi, c'est un pays qui émerveille.",

  bestPeriods: [
    {
      months: "Mai – Juin",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures douces (18–25 °C), nature verdoyante, idéal pour les randonnées en montagne (Svanétie, Kazbégi).",
      icon: "🌿",
    },
    {
      months: "Septembre – Octobre",
      label: "Vendanges",
      color: "#fb923c",
      description:
        "Saison des vendanges en Kakhétie, feuillages d'automne en montagne, températures agréables (15–22 °C).",
      icon: "🍇",
    },
    {
      months: "Juillet – Août",
      label: "Été en montagne",
      color: "#3b82f6",
      description:
        "Chaud à Tbilissi (26 °C) mais parfait pour les randonnées en altitude et la côte de Batoumi.",
      icon: "⛰️",
    },
  ],

  weatherCities: [
    {
      id: "tbilisi",
      name: "Tbilissi",
      region: "Est",
      data: [
        { month: "Jan", temp: 3,  rain: 20,  icon: "❄️" },
        { month: "Fév", temp: 4,  rain: 25,  icon: "⛅" },
        { month: "Mar", temp: 8,  rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 14, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 35,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 15, rain: 45,  icon: "⛅" },
        { month: "Nov", temp: 9,  rain: 35,  icon: "⛅" },
        { month: "Déc", temp: 4,  rain: 25,  icon: "⛅" },
      ],
    },
    {
      id: "batumi",
      name: "Batoumi",
      region: "Adjarie (côte Noire)",
      data: [
        { month: "Jan", temp: 9,  rain: 200, icon: "⛅" },
        { month: "Fév", temp: 9,  rain: 150, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 140, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 130, icon: "☀️" },
        { month: "Mai", temp: 20, rain: 145, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 150, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 230, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 310, icon: "⛅" },
        { month: "Nov", temp: 14, rain: 270, icon: "⛅" },
        { month: "Déc", temp: 11, rain: 240, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Tbilissi",
      region: "Kvemo Kartli",
      description:
        "Capitale aux maisons anciennes à balcons en bois sculpté, sulfureux bains de soufre (abanotubani), forteresse Narikala et vie nocturne animée — une ville authentique et attachante.",
      wikipedia: "Tbilisi",
      tags: ["Ville", "Histoire", "Culture", "Nuit", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Forteresse Narikala", wikipedia: "Narikala" },
        { name: "Cathédrale Sainte-Trinité", wikipedia: "Holy_Trinity_Cathedral_of_Tbilisi" },
        { name: "Bains sulfureux d'Abanotubani", wikipedia: "Abanotubani" },
        { name: "Vieille ville", wikipedia: "Old_Tbilisi" },
      ],
    },
    {
      id: 2,
      name: "Kazbégi & Montagnes",
      region: "Mtskheta-Mtianeti",
      description:
        "Le mont Kazbek (5 047 m) et l'église Guerguéti trônant à 2 170 m offrent des panoramas à couper le souffle. La route militaire géorgienne traverse des paysages épiques.",
      wikipedia: "File:Kazbegi, Stepantsminda, Gergeti, Georgia.jpg",
      tags: ["Montagne", "Randonnée", "Nature", "Panorama", "Ski"],
      mustSee: [
        { name: "Église Guerguéti Trinity", wikipedia: "Gergeti_Trinity_Church" },
        { name: "Mont Kazbek", wikipedia: "Mount_Kazbek" },
        { name: "Dariali Gorge", wikipedia: "File:Darial Gorge, Terek River, Georgia.jpg" },
      ],
    },
    {
      id: 3,
      name: "Svanétie",
      region: "Samegrelo-Zemo Svaneti",
      description:
        "Région montagneuse sauvage avec ses tours médiévales millénaires, ses villages isolés et ses randonnées parmi les plus belles du Caucase.",
      wikipedia: "File:Svaneti, Georgia. 2018 79.jpg",
      tags: ["Montagne", "UNESCO", "Randonnée", "Villages", "Architecture"],
      mustSee: [
        { name: "Tours svanes de Mestia", wikipedia: "Mestia" },
        { name: "Glacier d'Ushguli", wikipedia: "Ushguli" },
        { name: "Randonnée Mestia–Ushguli", wikipedia: "File:Svaneti, Georgia. 2018 79.jpg" },
      ],
    },
    {
      id: 4,
      name: "Kakhétie — Route des Vins",
      region: "Kakhétie",
      description:
        "Berceau de la viticulture mondiale (8 000 ans), les vignobles de Kakhétie et les monastères de Sighnaghi offrent un voyage gastronomique et culturel incomparable.",
      wikipedia: "Kakheti",
      tags: ["Vin", "Gastronomie", "Culture", "Nature"],
      mustSee: [
        { name: "Monastère de Bodbe", wikipedia: "Bodbe_Monastery" },
        { name: "Sighnaghi — ville de l'amour", wikipedia: "File:Sighnaghi IMG 9071 1920.jpg" },
        { name: "Cave coopérative Tsinandali", wikipedia: "Tsinandali" },
      ],
    },
    {
      id: 5,
      name: "Batumi & Côte de la Mer Noire",
      region: "Adjarie",
      description:
        "Station balnéaire pétillante sur la mer Noire, Batumi marie front de mer moderne, vieux quartiers ottomans et architecture audacieuse. Son boulevard, son jardin botanique luxuriant et ses plages voisines en font une destination estivale prisée. La forteresse de Gonio rappelle son passé antique.",
      wikipedia: "Batumi",
      tags: ["Plage", "Ville", "Nature", "Architecture"],
      mustSee: [
        { name: "Boulevard de Batumi", wikipedia: "File:Batumi Cycleway.jpg" },
        { name: "Vieux Batumi — quartier Ottoman", wikipedia: "Batumi" },
        { name: "Jardin botanique de Batumi", wikipedia: "Batumi_Botanical_Garden" },
        { name: "Plages de Kobuleti", wikipedia: "File:Kobuleti Beach.JPG" },
        { name: "Château de Gonio", wikipedia: "File:Gonio-Apsaros Fortress-Museum.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Géorgie est l'une des destinations les plus économiques d'Europe/Asie. La nourriture, le logement et les transports sont remarquablement bon marché.",
    currency: "GEL",
    exchangeRate: "1€ ≈ 2,90 GEL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre chez l'habitant", price: "10–20 €", detail: "Souvent avec petit-déjeuner" },
          { label: "Hôtel 3★", price: "30–55 €", detail: "Confort correct à Tbilissi" },
          { label: "Hôtel boutique 4★", price: "70–120 €", detail: "Vieille ville de Tbilissi" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Khachapuri (pain au fromage)", price: "2–4 €", detail: "Plat national incontournable" },
          { label: "Restaurant local (khinkali)", price: "5–10 €", detail: "Raviolis géorgiens, délicieux" },
          { label: "Restaurant gastronomique", price: "20–40 €", detail: "Tbilissi, cuisine moderne géorgienne" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Marshrutka (minibus)", price: "1–5 €", detail: "Réseau dense entre villes" },
          { label: "Taxi Tbilissi (Yandex)", price: "1–3 €", detail: "Application recommandée" },
          { label: "Location 4×4 / jour", price: "40–70 €", detail: "Indispensable pour la Svanétie" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Bains de soufre d'Abanotubani", price: "5–15 €", detail: "Cabine privée ou bain commun" },
          { label: "Dégustation de vins en Kakhétie", price: "10–20 €", detail: "Avec guide dans les caves" },
          { label: "Guide trek en Svanétie", price: "40–80 €/j", detail: "Guides locaux recommandés" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse + restaurants locaux + marshrutkas", color: "#22c55e" },
      { type: "Confort", daily: "70–100 €/j", desc: "Hôtel 3★ + bonnes tables + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "150 €+/j", desc: "Hôtel boutique + gastronomie + guide privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Tbilissi (4j) → Kakhétie (2j) → Kazbégi (2j) → Svanétie (4j) → Batoumi (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tbilissi", amount: "350–500 €" },
            { label: "Hébergement (14 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transport local", amount: "100–150 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tbilissi", amount: "450–700 €" },
            { label: "Hébergement (14 nuits)", amount: "600–1 000 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport & location", amount: "250–400 €" },
            { label: "Activités & visites guidées", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tbilissi (direct)", amount: "800–1 500 €" },
            { label: "Hébergement boutique (14 nuits)", amount: "1 500–2 500 €" },
            { label: "Gastronomie", amount: "600–1 000 €" },
            { label: "Transport privé", amount: "500–800 €" },
            { label: "Guide & expériences", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~4h direct (Georgian Airways, Wizz Air)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (365 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Lari (1€ ≈ 2,90 GEL)" },
    { icon: "🗣️", label: "Langue",            value: "Géorgien (russe et anglais chez les jeunes)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture, SIM locale ~5€/semaine" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable à Tbilissi, prudence en province" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, hépatite A conseillée" },
  ],
};
