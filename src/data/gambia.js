export const GAMBIA = {
  code: "GMB",
  numericId: 270,
  name: "Gambie",
  emoji: "🇬🇲",
  capital: "Banjul",
  language: "Anglais, Mandingue, Wolof, Fula",
  currency: "Dalasi gambien (GMD)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1300, tripMid: 2800,
  },
  description:
    "La Gambie est le plus petit pays d'Afrique continentale : un corridor de 50km de large autour du fleuve Gambie, enclavé dans le Sénégal. Réputée pour ses plages ensoleillées sur l'Atlantique (tourisme balnéaire nord-européen), son observation ornithologique exceptionnelle (560 espèces), les chimpanzés du Parc national de la Réserve de Kiang West et les sites historiques de la traite négrière sur l'île de Kunta Kinteh (UNESCO).",

  bestPeriods: [
    {
      months: "Novembre – Mai",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Excellente période : soleil garanti, peu de pluie, mer calme, températures agréables 25–32°C. Haute saison touristique.",
      icon: "☀️",
    },
    {
      months: "Juin – Octobre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Fortes pluies (200–300mm/mois en août), humidité élevée, moustiques. Moins favorable pour le tourisme.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "banjul",
      name: "Banjul / Serrekunda",
      region: "Grande Banjul",
      data: [
        { month: "Jan", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Avr", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Mai", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Jun", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Jul", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 380, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 24, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Plages de Kololi & Senegambia",
      region: "Banjul Ouest",
      description:
        "Les plages de Kololi, Kotu et Senegambia sont le cœur du tourisme balnéaire gambien : sable blanc immaculé, eaux chaudes de l'Atlantique, palmiers, bars de plage animés. La strip de Senegambia concentre hôtels, restaurants et vie nocturne. Une destination de soleil d'hiver prisée des Britanniques et Scandinaves.",
      wikipedia: "Kololi",
      tags: ["Plage", "Balnéaire", "Détente", "Soleil"],
      mustSee: [
        { name: "Plage de Kololi — la plus belle plage de Gambie", wikipedia: "Kololi" },
        { name: "Strip de Senegambia — restaurants, bars et vie nocturne", wikipedia: "File:GambiaSenegambiaHotel067_(11853073665).jpg" },
        { name: "Craft Market de Bakau — artisanat local", wikipedia: "Bakau" },
        { name: "Crocodile Pool de Kachikally — crocodiles sacrés", wikipedia: "File:Gambia Kachikally 0002.jpg" },
      ],
    },
    {
      id: 2,
      name: "Île de Kunta Kinteh — Mémorial de la traite",
      region: "Centre Gambie",
      description:
        "L'île de Kunta Kinteh (anciennement James Island, UNESCO) est le principal site de la traite négrière en Gambie — rendue célèbre par le roman Roots d'Alex Haley. Les ruines de Fort James (1651) sont classées UNESCO. Un site de mémoire profondément émouvant, accessible depuis Juffureh et Albreda, villages aux traditions mandingues préservées.",
      wikipedia: "Kunta_Kinteh_Island",
      tags: ["UNESCO", "Histoire", "Mémorial", "Traite"],
      mustSee: [
        { name: "Île de Kunta Kinteh — ruines Fort James (UNESCO)", wikipedia: "File:Baobabs on James Island (4383600924).jpg" },
        { name: "Village de Juffureh — berceau de Kunta Kinteh (Roots)", wikipedia: "File:Never Again, Albreda Juffureh 2.jpg" },
        { name: "Musée de Albreda — histoire de la traite en Gambie", wikipedia: "File:Albreda C9H-72.jpg" },
        { name: "Traversée en pirogue depuis Barra", wikipedia: "Kunta_Kinteh_Island" },
      ],
    },
    {
      id: 3,
      name: "Observation ornithologique",
      region: "Tout le pays",
      description:
        "La Gambie est l'une des meilleures destinations ornithologiques au monde : 560 espèces dans un territoire minuscule. Abuko Nature Reserve (à 20min de Banjul), Tanji Bird Reserve, River Gambia National Park avec ses chimpanzés. Les birders du monde entier viennent ici pour cocher des espèces rares en quelques jours.",
      wikipedia: "Abuko_Nature_Reserve",
      tags: ["Oiseaux", "Nature", "Birding", "Chimpanzés"],
      mustSee: [
        { name: "Abuko Nature Reserve — 300 espèces à 20min de Banjul", wikipedia: "File:Gambia abuko 003.jpg" },
        { name: "River Gambia National Park — chimpanzés sauvages", wikipedia: "River_Gambia_National_Park" },
        { name: "Tanji Bird Reserve — oiseaux de rivière et côtiers", wikipedia: "Tanji_Bird_Reserve" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Gambie est abordable pour un touriste occidental. Les complexes balnéaires de Kololi sont plus chers que l'intérieur du pays. La cuisine locale est excellente et très bon marché. Le dalasi peut fluctuer — prévoir livres sterling ou euros.",
    currency: "GMD",
    exchangeRate: "1€ ≈ 75–80 GMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / lodge local", price: "20–40 €", detail: "Simple, ventilateur ou clim" },
          { label: "Hôtel 3★ Kololi / Senegambia", price: "60–100 €", detail: "Piscine, plage, petit-déj" },
          { label: "Resort balnéaire tout-inclus", price: "120–200 €", detail: "Front de mer, all-inclusive" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Benachin (riz au poisson) dans un local", price: "2–5 €", detail: "Plat national gambien" },
          { label: "Restaurant mid-range Kololi", price: "8–18 €", detail: "Poisson frais, barbecue" },
          { label: "Restaurant gastronomique Senegambia", price: "25–45 €", detail: "Cuisine internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bush taxi local — trajet entre villes", price: "1–3 €", detail: "Économique mais bondé" },
          { label: "Taxi touristique / voiture privée", price: "20–40 €/j", detail: "Recommandé pour excursions" },
          { label: "Pirogue sur le fleuve Gambie", price: "10–30 €", detail: "Excursion ornithologique" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Tour ornithologique avec guide (journée)", price: "30–60 €", detail: "Guide certifié, jumelles" },
          { label: "Excursion île Kunta Kinteh (pirogue + guide)", price: "25–50 €", detail: "Depuis Barra, journée" },
          { label: "Visite Abuko Nature Reserve", price: "5–10 €", detail: "Entrée + guide optionnel" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–65 €/j", desc: "Guesthouse + cuisine locale + bush taxis", color: "#22c55e" },
      { type: "Confort", daily: "90–140 €/j", desc: "Hôtel 3★ Kololi + restaurants + excursions", color: "#3b82f6" },
      { type: "Resort", daily: "160–250 €/j", desc: "All-inclusive bord de mer + circuits privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Kololi / plages (4j) → Banjul + Abuko (2j) → remontée du fleuve Gambie (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 300 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Banjul", amount: "500–700 €" },
            { label: "Hébergement (10 nuits)", amount: "250–400 €" },
            { label: "Transports locaux + pirogue", amount: "150–250 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités & guides", amount: "150–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Banjul", amount: "600–800 €" },
            { label: "Hôtel 3★ + lodge (10 nuits)", amount: "800–1 200 €" },
            { label: "Voiture privée / excursions", amount: "400–600 €" },
            { label: "Nourriture & sorties", amount: "400–600 €" },
            { label: "Guides ornithologiques", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h (Brussels Airlines, Corsair saison, Transavia, Turkish via Istanbul)" },
    { icon: "🪪", label: "Visa",              value: "Pas de visa requis pour les ressortissants français et UE (90 jours)." },
    { icon: "💰", label: "Monnaie",           value: "Dalasi gambien (GMD). Euros et livres sterling acceptés dans les hôtels." },
    { icon: "🗣️", label: "Langue",            value: "Anglais (officiel) — communication facile." },
    { icon: "🔌", label: "Prise électrique",  value: "Type G (britannique) — 230V. Adaptateur recommandé." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune recommandé. Antipaludéen indispensable (Malarone/Doxycycline)." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture dans les zones touristiques. Intérieur plus aléatoire. SIM Africell recommandée." },
  ],
};
