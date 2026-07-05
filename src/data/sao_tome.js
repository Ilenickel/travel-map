export const SAO_TOME = {
  code: "STP",
  numericId: 678,
  name: { fr: "São Tomé-et-Príncipe", en: "São Tomé and Príncipe" },
  emoji: "🇸🇹",
  capital: { fr: "São Tomé", en: "São Tomé" },
  language: { fr: "Portugais, Forro, Angolar", en: "Portuguese, Forro, Angolar" },
  currency: { fr: "Dobra (STN)", en: "Dobra (STN)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2500, tripMid: 5000,
  },
  description: {
    fr: "São Tomé-et-Príncipe est un minuscule archipel de deux îles volcanique dans le golfe de Guinée, à l'équateur : des forêts tropicales primaires couvertes de brume, des plantations de cacao parmi les meilleures au monde (Claudio Corallo), des plages désertes spectaculaires, et une culture créole luso-africaine unique. Un des pays les moins visités au monde, préservé et authentique.",
    en: "São Tomé and Príncipe is a tiny volcanic two-island archipelago in the Gulf of Guinea, on the equator: primary rainforests shrouded in mist, some of the best cocoa plantations in the world (Claudio Corallo), spectacular deserted beaches, and a unique Luso-African Creole culture. One of the least-visited countries in the world, preserved and authentic.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Saison sèche (Gravana)", en: "Dry season (Gravana)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, mer calme, températures agréables (24–28°C). Idéal pour plages et randonnées. Pico de São Tomé accessible.",
        en: "Best time to visit: less rain, calm seas, pleasant temperatures (24–28°C). Ideal for beaches and hiking. Pico de São Tomé is accessible.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February" },
      label: { fr: "Petite saison sèche", en: "Short dry season" },
      color: "#f59e0b",
      description: {
        fr: "Courte période plus sèche, acceptable. Mer parfois agitée. Bonne période pour observer les baleines.",
        en: "A short, drier, acceptable period. Sea sometimes rough. Good time for whale watching.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Grande saison des pluies", en: "Long rainy season" },
      color: "#ef4444",
      description: {
        fr: "Pluies très abondantes au sud (400–600mm/mois), routes impraticables, Príncipe isolée. Nord moins touché.",
        en: "Very heavy rain in the south (400–600mm/month), impassable roads, Príncipe cut off. North less affected.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "sao_tome_city",
      name: { fr: "São Tomé (ville)", en: "São Tomé (city)" },
      region: { fr: "Nord de l'île principale", en: "North of the main island" },
      data: [
        { month: "Jan", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Fév", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mar", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 250, icon: "⛅" },
        { month: "Jun", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 140, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Pico de São Tomé — Sommet volcanique", en: "Pico de São Tomé — Volcanic peak" },
      region: { fr: "Centre de l'île", en: "Centre of the island" },
      description: {
        fr: "Le Pico de São Tomé (2 024m) est le point culminant de l'île : une ascension de 2 jours à travers toutes les strates de la forêt tropicale (forêt dense, forêt de brume, landes d'altitude) avec une biodiversité endémique exceptionnelle (oiseaux rares, plantes géantes). Une aventure dans une forêt vierge où l'Afrique rencontre les Galápagos.",
        en: "Pico de São Tomé (2,024m) is the island's highest point: a 2-day climb through every layer of the rainforest (dense forest, cloud forest, high-altitude moorland) with exceptional endemic biodiversity (rare birds, giant plants). An adventure in a pristine forest where Africa meets the Galápagos.",
      },
      wikipedia: "Pico_de_São_Tomé",
      tags: ["Randonnée", "Forêt", "Altitude", "Endémique"],
      mustSee: [
        { name: { fr: "Ascension Pico de São Tomé (2 024m, 2 jours, guide)", en: "Pico de São Tomé climb (2,024m, 2 days, guided)" }, wikipedia: "Pico_de_São_Tomé" },
        { name: { fr: "Forêt de brume — espèces végétales endémiques géantes", en: "Cloud forest — giant endemic plant species" }, wikipedia: "File:Sao_Tome_Ponta_Figo_Hike_8_(16063229667).jpg" },
        { name: { fr: "Cascades dans la forêt primaire", en: "Waterfalls in the primary forest" }, wikipedia: "File:Forest_of_São_Tomé_Island.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Cacao Claudio Corallo — Chocolat d'exception", en: "Claudio Corallo Cocoa — Exceptional chocolate" },
      region: { fr: "Île de Príncipe", en: "Príncipe Island" },
      description: {
        fr: "Claudio Corallo, considéré comme faisant le meilleur chocolat du monde, cultive son cacao sur l'île de Príncipe dans des plantations coloniales restaurées depuis les années 1990. La visite de sa ferme de Terreiro Velho est une expérience sensorielle unique : de la cabosse à la tablette, en passant par la fermentation et le séchage au soleil.",
        en: "Claudio Corallo, regarded as making the best chocolate in the world, grows his cocoa on Príncipe Island in colonial plantations restored since the 1990s. Visiting his Terreiro Velho farm is a unique sensory experience: from the pod to the bar, via fermentation and sun-drying.",
      },
      wikipedia: "File:Principe 1220.jpg",
      tags: ["Cacao", "Gastronomie", "Plantation", "Unique"],
      mustSee: [
        { name: { fr: "Ferme Claudio Corallo — dégustation du meilleur cacao mondial", en: "Claudio Corallo farm — tasting the world's finest cocoa" }, wikipedia: "Claudio_Corallo" },
        { name: { fr: "Forêt primaire de Príncipe (UNESCO Biosphère)", en: "Príncipe primary forest (UNESCO Biosphere)" }, wikipedia: "File:Principe 3181.jpg" },
        { name: { fr: "Plages désertes de Príncipe — Baia das Agulhas", en: "Deserted beaches of Príncipe — Baia das Agulhas" }, wikipedia: "File:Principe 1220.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Roças & Plantations coloniales", en: "Roças & Colonial plantations" },
      region: { fr: "Île principale", en: "Main island" },
      description: {
        fr: "Les 'roças' sont les grandes plantations coloniales portugaises abandonnées qui parsèment São Tomé : Roça Agostinho Neto, Roça Monte Café (cacao), Roça Sundy (la plus belle, à Príncipe). Ces immenses domaines en ruines romantiques, avec leur architecture coloniale Art Nouveau et leurs anciens entrepôts, sont le symbole de l'histoire de l'île.",
        en: "The 'roças' are the large abandoned Portuguese colonial plantations scattered across São Tomé: Roça Agostinho Neto, Roça Monte Café (cocoa), Roça Sundy (the most beautiful, on Príncipe). These vast estates, romantically ruined, with their Art Nouveau colonial architecture and old warehouses, are the symbol of the island's history.",
      },
      wikipedia: "File:Roça Agostinho Neto (São Tomé) (2).jpg",
      tags: ["Plantation", "Colonial", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Roça Agostinho Neto — ancienne capitale des plantations", en: "Roça Agostinho Neto — former plantation capital" }, wikipedia: "File:Roça Agostinho Neto (São Tomé) (2).jpg" },
        { name: { fr: "Roça Monte Café — cacao et chemin de fer colonial", en: "Roça Monte Café — cocoa and colonial railway" }, wikipedia: "File:Musée du Café à Monte Café (São Tomé) (2).jpg" },
        { name: { fr: "Roça Sundy (Príncipe) — la plus grande et la mieux préservée", en: "Roça Sundy (Príncipe) — the largest and best preserved" }, wikipedia: "File:Principe 1468.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Plages et baie de l'Abade", en: "Beaches and Abade Bay" },
      region: { fr: "Nord et Sud de l'île", en: "North and South of the island" },
      description: {
        fr: "São Tomé possède certaines des plages les plus belles et les plus désertes d'Afrique centrale : Praia Lagarto, Praia Micondó, la Baie de l'Abade avec ses tortues. Le sud de l'île, plus pluvieux, est couvert de forêt dense jusqu'à la mer. La plage de Praia Grande au nord est la principale plage de baignade.",
        en: "São Tomé has some of the most beautiful and deserted beaches in Central Africa: Praia Lagarto, Praia Micondó, Abade Bay with its turtles. The rainier south of the island is covered in dense forest right down to the sea. Praia Grande beach in the north is the main swimming beach.",
      },
      wikipedia: "File:Praia Grande do Rodízio 01.jpg",
      tags: ["Plage", "Tortues", "Déserte", "Baignade"],
      mustSee: [
        { name: { fr: "Praia Lagarto — plage déserte au sud-ouest", en: "Praia Lagarto — deserted beach in the south-west" }, wikipedia: "File:Praia das Calhetas - PE.jpg" },
        { name: { fr: "Baie de l'Abade — observation des tortues marines", en: "Abade Bay — sea turtle watching" }, wikipedia: "File:Hawaii turtle 2.JPG" },
        { name: { fr: "Praia Grande — principale plage de baignade", en: "Praia Grande — main swimming beach" }, wikipedia: "File:Praia Grande do Rodízio 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "São Tomé-et-Príncipe est relativement chère pour sa taille : peu de touristes, peu de concurrence, et une dépendance aux importations. Príncipe est encore plus chère que São Tomé. Le cacao et le chocolat Corallo sont des souvenirs incontournables.",
      en: "São Tomé and Príncipe is relatively expensive for its size: few tourists, little competition, and reliance on imports. Príncipe is even pricier than São Tomé. Corallo cocoa and chocolate are must-buy souvenirs.",
    },
    currency: "STN",
    exchangeRate: "1€ ≈ 24–25 STN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / pension locale", en: "Local guesthouse" }, price: "40–70 €", detail: { fr: "Simple, avec ou sans clim", en: "Simple, with or without AC" } },
          { label: { fr: "Hôtel 3★ São Tomé (Pestana, Miramar)", en: "3★ hotel in São Tomé (Pestana, Miramar)" }, price: "90–150 €", detail: { fr: "Piscine, plage, petit-déj", en: "Pool, beach, breakfast" } },
          { label: { fr: "Eco-lodge / bungalow en forêt", en: "Eco-lodge / forest bungalow" }, price: "150–300 €", detail: { fr: "Immersion nature", en: "Nature immersion" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Calulu de poisson dans un restaurant local", en: "Fish calulu at a local restaurant" }, price: "5–12 €", detail: { fr: "Plat traditionnel santoméen", en: "Traditional São Toméan dish" } },
          { label: { fr: "Restaurant mid-range São Tomé", en: "Mid-range restaurant in São Tomé" }, price: "15–30 €", detail: { fr: "Langoustes, crevettes, cacao", en: "Lobster, prawns, cocoa" } },
          { label: { fr: "Chocolat Claudio Corallo (tablette 50g)", en: "Claudio Corallo chocolate (50g bar)" }, price: "8–15 €", detail: { fr: "Meilleur chocolat du monde", en: "The best chocolate in the world" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Taxi collectif / hiace São Tomé", en: "Shared taxi / hiace in São Tomé" }, price: "1–3 €", detail: { fr: "Transport local", en: "Local transport" } },
          { label: { fr: "Location de voiture 4x4", en: "4x4 car rental" }, price: "60–100 €/j", detail: { fr: "Recommandé pour explorer", en: "Recommended for exploring" } },
          { label: { fr: "Vol São Tomé–Príncipe (STP Airways)", en: "Flight São Tomé–Príncipe (STP Airways)" }, price: "80–150 €", detail: { fr: "30 min — A/R obligatoire", en: "30 min — return trip mandatory" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Ascension Pico de São Tomé (2j, guide + porteur)", en: "Pico de São Tomé climb (2d, guide + porter)" }, price: "100–180 €", detail: { fr: "Tout inclus", en: "All-inclusive" } },
          { label: { fr: "Visite roças avec guide", en: "Guided roça visit" }, price: "20–50 €", detail: { fr: "Demi-journée ou journée", en: "Half-day or full day" } },
          { label: { fr: "Plongée sous-marine (2 plongées)", en: "Scuba diving (2 dives)" }, price: "80–130 €", detail: { fr: "Visibilité exceptionnelle", en: "Exceptional visibility" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Guesthouse + cuisine locale + taxis", en: "Guesthouse + local food + taxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "180–280 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300–500 €/j", desc: { fr: "Eco-lodge + plongée + Príncipe tout inclus", en: "Eco-lodge + diving + Príncipe all-inclusive" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "São Tomé ville (2j) → Roças et Pico (3j) → Plages sud (2j) → Príncipe (3j)",
        en: "São Tomé city (2d) → Roças and Pico (3d) → Southern beaches (2d) → Príncipe (3d)",
      },
      budgets: [
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–São Tomé (souvent via Lisbonne)", en: "Return flight Paris–São Tomé (often via Lisbon)" }, amount: "800–1 400 €" },
            { label: { fr: "Hébergement São Tomé (7 nuits)", en: "Accommodation in São Tomé (7 nights)" }, amount: "700–1 200 €" },
            { label: { fr: "Vol A/R + hébergement Príncipe (3 nuits)", en: "Return flight + accommodation in Príncipe (3 nights)" }, amount: "700–1 200 €" },
            { label: { fr: "Location 4x4", en: "4x4 rental" }, amount: "350–600 €" },
            { label: { fr: "Nourriture & activités", en: "Food & activities" }, amount: "500–900 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~9h via Lisbonne (TAP Air Portugal + STP Airways) ou via Douala/Libreville", en: "~9h via Lisbon (TAP Air Portugal + STP Airways) or via Douala/Libreville" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée gratuit pour ressortissants français (30 jours). Vérifier avant départ.", en: "Free visa on arrival for French citizens (30 days). Check before departure." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dobra (STN). Euros acceptés dans les hôtels et restaurants. Espèces pour les locaux.", en: "Dobra (STN). Euros accepted in hotels and restaurants. Cash for locals." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Portugais (officiel) — utile de connaître quelques mots. Créole local entre habitants.", en: "Portuguese (official) — useful to know a few words. Local Creole among residents." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 220V.", en: "Type C/F (European) — 220V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune recommandé. Antipaludéen indispensable (Malarone). Hépatites recommandées.", en: "Yellow fever vaccine recommended. Antimalarial essential (Malarone). Hepatitis vaccines recommended." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture 4G correcte à São Tomé ville. Forêts et Príncipe : réseau très limité. SIM locale CST.", en: "Decent 4G coverage in São Tomé city. Forests and Príncipe: very limited network. Local CST SIM." } },
  ],
};
