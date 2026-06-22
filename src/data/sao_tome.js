export const SAO_TOME = {
  code: "STP",
  numericId: 678,
  name: "São Tomé-et-Príncipe",
  emoji: "🇸🇹",
  capital: "São Tomé",
  language: "Portugais, Forro, Angolar",
  currency: "Dobra (STN)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2500, tripMid: 5000,
  },
  description:
    "São Tomé-et-Príncipe est un minuscule archipel de deux îles volcanique dans le golfe de Guinée, à l'équateur : des forêts tropicales primaires couvertes de brume, des plantations de cacao parmi les meilleures au monde (Claudio Corallo), des plages désertes spectaculaires, et une culture créole luso-africaine unique. Un des pays les moins visités au monde, préservé et authentique.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Saison sèche (Gravana)",
      color: "#22c55e",
      description:
        "Meilleure période : moins de pluie, mer calme, températures agréables (24–28°C). Idéal pour plages et randonnées. Pico de São Tomé accessible.",
      icon: "☀️",
    },
    {
      months: "Décembre – Février",
      label: "Petite saison sèche",
      color: "#f59e0b",
      description:
        "Courte période plus sèche, acceptable. Mer parfois agitée. Bonne période pour observer les baleines.",
      icon: "⛅",
    },
    {
      months: "Mars – Mai",
      label: "Grande saison des pluies",
      color: "#ef4444",
      description:
        "Pluies très abondantes au sud (400–600mm/mois), routes impraticables, Príncipe isolée. Nord moins touché.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "sao_tome_city",
      name: "São Tomé (ville)",
      region: "Nord de l'île principale",
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
      name: "Pico de São Tomé — Sommet volcanique",
      region: "Centre de l'île",
      description:
        "Le Pico de São Tomé (2 024m) est le point culminant de l'île : une ascension de 2 jours à travers toutes les strates de la forêt tropicale (forêt dense, forêt de brume, landes d'altitude) avec une biodiversité endémique exceptionnelle (oiseaux rares, plantes géantes). Une aventure dans une forêt vierge où l'Afrique rencontre les Galápagos.",
      wikipedia: "Pico_de_São_Tomé",
      tags: ["Randonnée", "Forêt", "Altitude", "Endémique"],
      mustSee: [
        { name: "Ascension Pico de São Tomé (2 024m, 2 jours, guide)", wikipedia: "Pico_de_São_Tomé" },
        { name: "Forêt de brume — espèces végétales endémiques géantes", wikipedia: "File:Sao_Tome_Ponta_Figo_Hike_8_(16063229667).jpg" },
        { name: "Cascades dans la forêt primaire", wikipedia: "File:Forest_of_São_Tomé_Island.jpg" },
      ],
    },
    {
      id: 2,
      name: "Cacao Claudio Corallo — Chocolat d'exception",
      region: "Île de Príncipe",
      description:
        "Claudio Corallo, considéré comme faisant le meilleur chocolat du monde, cultive son cacao sur l'île de Príncipe dans des plantations coloniales restaurées depuis les années 1990. La visite de sa ferme de Terreiro Velho est une expérience sensorielle unique : de la cabosse à la tablette, en passant par la fermentation et le séchage au soleil.",
      wikipedia: "File:Principe 1220.jpg",
      tags: ["Cacao", "Gastronomie", "Plantation", "Unique"],
      mustSee: [
        { name: "Ferme Claudio Corallo — dégustation du meilleur cacao mondial", wikipedia: "Claudio_Corallo" },
        { name: "Forêt primaire de Príncipe (UNESCO Biosphère)", wikipedia: "File:Principe 3181.jpg" },
        { name: "Plages désertes de Príncipe — Baia das Agulhas", wikipedia: "File:Principe 1220.jpg" },
      ],
    },
    {
      id: 3,
      name: "Roças & Plantations coloniales",
      region: "Île principale",
      description:
        "Les 'roças' sont les grandes plantations coloniales portugaises abandonnées qui parsèment São Tomé : Roça Agostinho Neto, Roça Monte Café (cacao), Roça Sundy (la plus belle, à Príncipe). Ces immenses domaines en ruines romantiques, avec leur architecture coloniale Art Nouveau et leurs anciens entrepôts, sont le symbole de l'histoire de l'île.",
      wikipedia: "File:Roça Agostinho Neto (São Tomé) (2).jpg",
      tags: ["Plantation", "Colonial", "Histoire", "Architecture"],
      mustSee: [
        { name: "Roça Agostinho Neto — ancienne capitale des plantations", wikipedia: "File:Roça Agostinho Neto (São Tomé) (2).jpg" },
        { name: "Roça Monte Café — cacao et chemin de fer colonial", wikipedia: "File:Musée du Café à Monte Café (São Tomé) (2).jpg" },
        { name: "Roça Sundy (Príncipe) — la plus grande et la mieux préservée", wikipedia: "File:Principe 1468.jpg" },
      ],
    },
    {
      id: 4,
      name: "Plages et baie de l'Abade",
      region: "Nord et Sud de l'île",
      description:
        "São Tomé possède certaines des plages les plus belles et les plus désertes d'Afrique centrale : Praia Lagarto, Praia Micondó, la Baie de l'Abade avec ses tortues. Le sud de l'île, plus pluvieux, est couvert de forêt dense jusqu'à la mer. La plage de Praia Grande au nord est la principale plage de baignade.",
      wikipedia: "File:Praia Grande do Rodízio 01.jpg",
      tags: ["Plage", "Tortues", "Déserte", "Baignade"],
      mustSee: [
        { name: "Praia Lagarto — plage déserte au sud-ouest", wikipedia: "File:Praia das Calhetas - PE.jpg" },
        { name: "Baie de l'Abade — observation des tortues marines", wikipedia: "File:Hawaii turtle 2.JPG" },
        { name: "Praia Grande — principale plage de baignade", wikipedia: "File:Praia Grande do Rodízio 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "São Tomé-et-Príncipe est relativement chère pour sa taille : peu de touristes, peu de concurrence, et une dépendance aux importations. Príncipe est encore plus chère que São Tomé. Le cacao et le chocolat Corallo sont des souvenirs incontournables.",
    currency: "STN",
    exchangeRate: "1€ ≈ 24–25 STN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / pension locale", price: "40–70 €", detail: "Simple, avec ou sans clim" },
          { label: "Hôtel 3★ São Tomé (Pestana, Miramar)", price: "90–150 €", detail: "Piscine, plage, petit-déj" },
          { label: "Eco-lodge / bungalow en forêt", price: "150–300 €", detail: "Immersion nature" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Calulu de poisson dans un restaurant local", price: "5–12 €", detail: "Plat traditionnel santoméen" },
          { label: "Restaurant mid-range São Tomé", price: "15–30 €", detail: "Langoustes, crevettes, cacao" },
          { label: "Chocolat Claudio Corallo (tablette 50g)", price: "8–15 €", detail: "Meilleur chocolat du monde" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi collectif / hiace São Tomé", price: "1–3 €", detail: "Transport local" },
          { label: "Location de voiture 4x4", price: "60–100 €/j", detail: "Recommandé pour explorer" },
          { label: "Vol São Tomé–Príncipe (STP Airways)", price: "80–150 €", detail: "30 min — A/R obligatoire" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Ascension Pico de São Tomé (2j, guide + porteur)", price: "100–180 €", detail: "Tout inclus" },
          { label: "Visite roças avec guide", price: "20–50 €", detail: "Demi-journée ou journée" },
          { label: "Plongée sous-marine (2 plongées)", price: "80–130 €", detail: "Visibilité exceptionnelle" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Guesthouse + cuisine locale + taxis", color: "#22c55e" },
      { type: "Confort", daily: "180–280 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "300–500 €/j", desc: "Eco-lodge + plongée + Príncipe tout inclus", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "São Tomé ville (2j) → Roças et Pico (3j) → Plages sud (2j) → Príncipe (3j)",
      budgets: [
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–São Tomé (souvent via Lisbonne)", amount: "800–1 400 €" },
            { label: "Hébergement São Tomé (7 nuits)", amount: "700–1 200 €" },
            { label: "Vol A/R + hébergement Príncipe (3 nuits)", amount: "700–1 200 €" },
            { label: "Location 4x4", amount: "350–600 €" },
            { label: "Nourriture & activités", amount: "500–900 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~9h via Lisbonne (TAP Air Portugal + STP Airways) ou via Douala/Libreville" },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée gratuit pour ressortissants français (30 jours). Vérifier avant départ." },
    { icon: "💰", label: "Monnaie",           value: "Dobra (STN). Euros acceptés dans les hôtels et restaurants. Espèces pour les locaux." },
    { icon: "🗣️", label: "Langue",            value: "Portugais (officiel) — utile de connaître quelques mots. Créole local entre habitants." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 220V." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune recommandé. Antipaludéen indispensable (Malarone). Hépatites recommandées." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Couverture 4G correcte à São Tomé ville. Forêts et Príncipe : réseau très limité. SIM locale CST." },
  ],
};
