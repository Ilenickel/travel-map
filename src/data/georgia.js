export const GEORGIA = {
  code: "GEO",
  numericId: 268,
  name: { fr: "Géorgie", en: "Georgia" },
  emoji: "🇬🇪",
  capital: { fr: "Tbilissi", en: "Tbilisi" },
  language: { fr: "Géorgien", en: "Georgian" },
  currency: { fr: "Lari (GEL)", en: "Lari (GEL)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1100, tripMid: 2000,
  },
  description: {
    fr: "La Géorgie est l'une des destinations les plus authentiques et abordables d'Europe orientale. Entre les monastères perchés dans les montagnes du Caucase, la vieille ville de Tbilissi aux maisons à balcons sculptés, les vignobles de Kakhétie et la côte Noire de Batoumi, c'est un pays qui émerveille.",
    en: "Georgia is one of Eastern Europe's most authentic and affordable destinations. Between monasteries perched in the Caucasus mountains, Tbilisi's old town with its carved wooden balconies, the vineyards of Kakheti and Batumi's Black Sea coast, it is a country that never fails to amaze.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Juin", en: "May – June" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#22c55e",
      description: {
        fr: "Températures douces (18–25 °C), nature verdoyante, idéal pour les randonnées en montagne (Svanétie, Kazbégi).",
        en: "Mild temperatures (18–25 °C), lush green landscapes, and ideal conditions for mountain hikes (Svaneti, Kazbegi).",
      },
      icon: "🌿",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October" },
      label: { fr: "Vendanges", en: "Harvest season" },
      color: "#fb923c",
      description: {
        fr: "Saison des vendanges en Kakhétie, feuillages d'automne en montagne, températures agréables (15–22 °C).",
        en: "Harvest season in Kakheti, autumn foliage in the mountains, and pleasant temperatures (15–22 °C).",
      },
      icon: "🍇",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August" },
      label: { fr: "Été en montagne", en: "Summer in the mountains" },
      color: "#3b82f6",
      description: {
        fr: "Chaud à Tbilissi (26 °C) mais parfait pour les randonnées en altitude et la côte de Batoumi.",
        en: "Hot in Tbilisi (26 °C), but perfect for high-altitude hikes and time on the Batumi coast.",
      },
      icon: "⛰️",
    },
  ],

  weatherCities: [
    {
      id: "tbilisi",
      name: "Tbilissi",
      region: { fr: "Est", en: "East" },
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
      region: { fr: "Adjarie (côte Noire)", en: "Adjara (Black Sea coast)" },
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
      name: { fr: "Tbilissi", en: "Tbilisi" },
      region: { fr: "Kvemo Kartli", en: "Kvemo Kartli" },
      description: {
        fr: "Capitale aux maisons anciennes à balcons en bois sculpté, sulfureux bains de soufre (abanotubani), forteresse Narikala et vie nocturne animée — une ville authentique et attachante.",
        en: "A capital of old houses with carved wooden balconies, sulphur baths (Abanotubani), the Narikala fortress and lively nightlife — an authentic, endearing city.",
      },
      wikipedia: "Tbilisi",
      tags: ["Ville", "Histoire", "Culture", "Nuit", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Forteresse Narikala", en: "Narikala Fortress" }, wikipedia: "Narikala" },
        { name: { fr: "Cathédrale Sainte-Trinité", en: "Holy Trinity Cathedral" }, wikipedia: "Holy_Trinity_Cathedral_of_Tbilisi" },
        { name: { fr: "Bains sulfureux d'Abanotubani", en: "Abanotubani sulphur baths" }, wikipedia: "Abanotubani" },
        { name: { fr: "Vieille ville", en: "Old Town" }, wikipedia: "Old_Tbilisi" },
      ],
    },
    {
      id: 2,
      name: { fr: "Kazbégi & Montagnes", en: "Kazbegi & Mountains" },
      region: { fr: "Mtskheta-Mtianeti", en: "Mtskheta-Mtianeti" },
      description: {
        fr: "Le mont Kazbek (5 047 m) et l'église Guerguéti trônant à 2 170 m offrent des panoramas à couper le souffle. La route militaire géorgienne traverse des paysages épiques.",
        en: "Mount Kazbek (5,047 m) and the Gergeti church perched at 2,170 m offer breathtaking panoramas. The Georgian Military Road crosses epic landscapes.",
      },
      wikipedia: "File:Kazbegi, Stepantsminda, Gergeti, Georgia.jpg",
      tags: ["Montagne", "Randonnée", "Nature", "Panorama", "Ski"],
      mustSee: [
        { name: { fr: "Église Guerguéti Trinity", en: "Gergeti Trinity Church" }, wikipedia: "Gergeti_Trinity_Church" },
        { name: { fr: "Mont Kazbek", en: "Mount Kazbek" }, wikipedia: "Mount_Kazbek" },
        { name: "Dariali Gorge", wikipedia: "File:Darial Gorge, Terek River, Georgia.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Svanétie", en: "Svaneti" },
      region: { fr: "Samegrelo-Zemo Svaneti", en: "Samegrelo-Zemo Svaneti" },
      description: {
        fr: "Région montagneuse sauvage avec ses tours médiévales millénaires, ses villages isolés et ses randonnées parmi les plus belles du Caucase.",
        en: "A wild mountain region with age-old medieval towers, isolated villages and some of the Caucasus's most beautiful hikes.",
      },
      wikipedia: "File:Svaneti, Georgia. 2018 79.jpg",
      tags: ["Montagne", "UNESCO", "Randonnée", "Villages", "Architecture"],
      mustSee: [
        { name: { fr: "Tours svanes de Mestia", en: "Mestia's Svan towers" }, wikipedia: "Mestia" },
        { name: { fr: "Glacier d'Ushguli", en: "Ushguli Glacier" }, wikipedia: "Ushguli" },
        { name: { fr: "Randonnée Mestia–Ushguli", en: "Mestia–Ushguli trek" }, wikipedia: "File:Svaneti, Georgia. 2018 79.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Kakhétie — Route des Vins", en: "Kakheti — Wine Route" },
      region: { fr: "Kakhétie", en: "Kakheti" },
      description: {
        fr: "Berceau de la viticulture mondiale (8 000 ans), les vignobles de Kakhétie et les monastères de Sighnaghi offrent un voyage gastronomique et culturel incomparable.",
        en: "The cradle of world viticulture (8,000 years old), Kakheti's vineyards and the monasteries of Sighnaghi offer an unparalleled culinary and cultural journey.",
      },
      wikipedia: "Kakheti",
      tags: ["Vin", "Gastronomie", "Culture", "Nature"],
      mustSee: [
        { name: { fr: "Monastère de Bodbe", en: "Bodbe Monastery" }, wikipedia: "Bodbe_Monastery" },
        { name: { fr: "Sighnaghi — ville de l'amour", en: "Sighnaghi — the city of love" }, wikipedia: "File:Sighnaghi IMG 9071 1920.jpg" },
        { name: { fr: "Cave coopérative Tsinandali", en: "Tsinandali cooperative winery" }, wikipedia: "Tsinandali" },
      ],
    },
    {
      id: 5,
      name: { fr: "Batumi & Côte de la Mer Noire", en: "Batumi & the Black Sea Coast" },
      region: { fr: "Adjarie", en: "Adjara" },
      description: {
        fr: "Station balnéaire pétillante sur la mer Noire, Batumi marie front de mer moderne, vieux quartiers ottomans et architecture audacieuse. Son boulevard, son jardin botanique luxuriant et ses plages voisines en font une destination estivale prisée. La forteresse de Gonio rappelle son passé antique.",
        en: "A vibrant Black Sea resort, Batumi blends a modern seafront, old Ottoman quarters and bold architecture. Its boulevard, lush botanical garden and nearby beaches make it a sought-after summer destination. The Gonio fortress is a reminder of its ancient past.",
      },
      wikipedia: "Batumi",
      tags: ["Plage", "Ville", "Nature", "Architecture"],
      mustSee: [
        { name: { fr: "Boulevard de Batumi", en: "Batumi Boulevard" }, wikipedia: "File:Batumi Cycleway.jpg" },
        { name: { fr: "Vieux Batumi — quartier Ottoman", en: "Old Batumi — Ottoman quarter" }, wikipedia: "Batumi" },
        { name: { fr: "Jardin botanique de Batumi", en: "Batumi Botanical Garden" }, wikipedia: "Batumi_Botanical_Garden" },
        { name: { fr: "Plages de Kobuleti", en: "Kobuleti beaches" }, wikipedia: "File:Kobuleti Beach.JPG" },
        { name: { fr: "Château de Gonio", en: "Gonio Fortress" }, wikipedia: "File:Gonio-Apsaros Fortress-Museum.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Géorgie est l'une des destinations les plus économiques d'Europe/Asie. La nourriture, le logement et les transports sont remarquablement bon marché.",
      en: "Georgia is one of the most budget-friendly destinations in Europe/Asia. Food, accommodation and transport are remarkably inexpensive.",
    },
    currency: "GEL",
    exchangeRate: "1€ ≈ 2,90 GEL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / homestay room" }, price: "10–20 €", detail: { fr: "Souvent avec petit-déjeuner", en: "Often includes breakfast" } },
          { label: { fr: "Hôtel 3★", en: "3★ hotel" }, price: "30–55 €", detail: { fr: "Confort correct à Tbilissi", en: "Decent comfort in Tbilisi" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel" }, price: "70–120 €", detail: { fr: "Vieille ville de Tbilissi", en: "In Tbilisi's old town" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Khachapuri (pain au fromage)", en: "Khachapuri (cheese bread)" }, price: "2–4 €", detail: { fr: "Plat national incontournable", en: "An unmissable national dish" } },
          { label: { fr: "Restaurant local (khinkali)", en: "Local restaurant (khinkali)" }, price: "5–10 €", detail: { fr: "Raviolis géorgiens, délicieux", en: "Delicious Georgian dumplings" } },
          { label: { fr: "Restaurant gastronomique", en: "Fine-dining restaurant" }, price: "20–40 €", detail: { fr: "Tbilissi, cuisine moderne géorgienne", en: "In Tbilisi, modern Georgian cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Marshrutka (minibus)", en: "Marshrutka (minibus)" }, price: "1–5 €", detail: { fr: "Réseau dense entre villes", en: "Dense network between cities" } },
          { label: { fr: "Taxi Tbilissi (Yandex)", en: "Tbilisi taxi (Yandex)" }, price: "1–3 €", detail: { fr: "Application recommandée", en: "Recommended app" } },
          { label: { fr: "Location 4×4 / jour", en: "4×4 rental / day" }, price: "40–70 €", detail: { fr: "Indispensable pour la Svanétie", en: "Essential for Svaneti" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Bains de soufre d'Abanotubani", en: "Abanotubani sulphur baths" }, price: "5–15 €", detail: { fr: "Cabine privée ou bain commun", en: "Private room or shared bath" } },
          { label: { fr: "Dégustation de vins en Kakhétie", en: "Wine tasting in Kakheti" }, price: "10–20 €", detail: { fr: "Avec guide dans les caves", en: "With a guide in the cellars" } },
          { label: { fr: "Guide trek en Svanétie", en: "Trekking guide in Svaneti" }, price: "40–80 €/j", detail: { fr: "Guides locaux recommandés", en: "Local guides recommended" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + restaurants locaux + marshrutkas", en: "Guesthouse + local restaurants + marshrutkas" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70–100 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + excursions", en: "3★ hotel + good restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "150 €+/j", desc: { fr: "Hôtel boutique + gastronomie + guide privé", en: "Boutique hotel + fine dining + private guide" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Tbilissi (4j) → Kakhétie (2j) → Kazbégi (2j) → Svanétie (4j) → Batoumi (2j)",
        en: "Tbilisi (4d) → Kakheti (2d) → Kazbegi (2d) → Svaneti (4d) → Batumi (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tbilissi", en: "Return flight Paris–Tbilisi" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–300 €" },
            { label: { fr: "Transport local", en: "Local transport" }, amount: "100–150 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 000 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tbilissi", en: "Return flight Paris–Tbilisi" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "600–1 000 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transport & location", en: "Transport & car rental" }, amount: "250–400 €" },
            { label: { fr: "Activités & visites guidées", en: "Activities & guided tours" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tbilissi (direct)", en: "Return flight Paris–Tbilisi (direct)" }, amount: "800–1 500 €" },
            { label: { fr: "Hébergement boutique (14 nuits)", en: "Boutique accommodation (14 nights)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Gastronomie", en: "Fine dining" }, amount: "600–1 000 €" },
            { label: { fr: "Transport privé", en: "Private transport" }, amount: "500–800 €" },
            { label: { fr: "Guide & expériences", en: "Guide & experiences" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~4h direct (Georgian Airways, Wizz Air)", en: "~4h direct (Georgian Airways, Wizz Air)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (365 jours)", en: "No visa required for French citizens (365 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Lari (1€ ≈ 2,90 GEL)", en: "Lari (€1 ≈ 2.90 GEL)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Géorgien (russe et anglais chez les jeunes)", en: "Georgian (Russian and English among younger people)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture, SIM locale ~5€/semaine", en: "Good coverage, local SIM ~€5/week" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable à Tbilissi, prudence en province", en: "Drinkable in Tbilisi, caution advised in the countryside" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire, hépatite A conseillée", en: "No mandatory vaccines, hepatitis A recommended" } },
  ],
};
