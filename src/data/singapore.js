export const SINGAPORE = {
  code: "SGP",
  numericId: 702,
  name: "Singapour",
  emoji: "🇸🇬",
  capital: "Singapour",
  language: "Anglais, mandarin, malais, tamoul",
  currency: "Dollar de Singapour (SGD)",
  timezone: "UTC+8",
  filter: {
    budgetMin: 60,
    budgetMid: 120,
    tripMin: 2000,
    tripMid: 3500,
  },
  description:
    "Singapour est une cité-État futuriste au carrefour de l'Asie du Sud-Est, mosaïque de cultures chinoises, malaises et indiennes. Propreté légendaire, gastronomie de rue mondialement reconnue (hawker centres), jardins verticaux et Supertrees sont la signature de ce joyau ultramoderne et sûr.",

  bestPeriods: [
    {
      months: "Février – Avril",
      label: "Chaleur sèche (minimum de pluies)",
      color: "#fbbf24",
      description:
        "Les mois les plus ensoleillés, avec moins de pluies. Idéal pour les parcs extérieurs et les quartiers ethniques.",
      icon: "☀️",
    },
    {
      months: "Juillet – Septembre",
      label: "Été (pluies modérées)",
      color: "#86efac",
      description:
        "Pluies de courte durée, temps chaud. Festival National Day en août, ambiance festive.",
      icon: "🎆",
    },
  ],

  weatherCities: [
    {
      id: "singapore",
      name: "Singapour",
      region: "Île principale",
      data: [
        { month: "Jan", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 140, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 135, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 145, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 265, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 325, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Gardens by the Bay",
      region: "Marina Bay",
      description:
        "Le chef-d'œuvre botanique de Singapour avec ses Supertrees luminescents, ses serres climatisées (Cloud Forest et Flower Dome) et ses passerelles aériennes. Un must absolu, surtout au crépuscule lors du Garden Rhapsody.",
      wikipedia: "Gardens_by_the_Bay",
      tags: ["jardins", "architecture", "nature", "lumière"],
      mustSee: [
        { name: "Supertree Grove", wikipedia: "File:Supertree_Grove,_Gardens_by_the_Bay,_Singapore_-_20120712-02.jpg" },
        { name: "Cloud Forest (serre)", wikipedia: "File:Sri Lanka cloud forest, tall trees in fog.jpg" },
        { name: "Marina Bay Sands (skyline)", wikipedia: "Marina_Bay_Sands" },
        { name: "ArtScience Museum", wikipedia: "ArtScience_Museum" },
      ],
    },
    {
      id: 2,
      name: "Quartiers ethniques",
      region: "Centre historique",
      description:
        "Chinatown, Little India (Tekka), Kampong Glam (quartier malais) et Clarke Quay coexistent à quelques stations de métro. Temples hindous, mosquées, pagodes et marchés de rue forment le cœur multiculturel de Singapour.",
      wikipedia: "Chinatown,_Singapore",
      tags: ["culture", "gastronomie", "histoire", "religion"],
      mustSee: [
        { name: "Little India (Tekka)", wikipedia: "Little_India,_Singapore" },
        { name: "Chinatown Heritage Centre", wikipedia: "File:Chinatown_Heritage_Centre.JPG" },
        { name: "Sultan Mosque (Kampong Glam)", wikipedia: "File:Masjid Sultan, Singapore (2023 June) - img 02.jpg" },
        { name: "Sri Mariamman Temple", wikipedia: "Sri_Mariamman_Temple,_Singapore" },
      ],
    },
    {
      id: 3,
      name: "Hawker Centres & Gastronomie",
      region: "Toute l'île",
      description:
        "Les hawker centres sont des marchés de rue couverts et climatisés où des dizaines de cuisiniers proposent des spécialités à bas prix. Le Chicken Rice, le Laksa, le Char Kway Teow et le Chilli Crab y sont légendaires. Singapour compte plusieurs hawker centres au patrimoine UNESCO.",
      wikipedia: "Hawker_centre",
      tags: ["gastronomie", "culture", "street food", "UNESCO"],
      mustSee: [
        { name: "Maxwell Food Centre", wikipedia: "Maxwell_Food_Centre" },
        { name: "Lau Pa Sat", wikipedia: "Lau_Pa_Sat" },
        { name: "Newton Food Centre", wikipedia: "File:Newton Food Centre 5, Aug 06.JPG" },
        { name: "Old Airport Road Food Centre", wikipedia: "File:51 Old Airport Road Food Centre, exterior.jpg" },
      ],
    },
    {
      id: 4,
      name: "Sentosa & Universal Studios",
      region: "Sud de l'île",
      description:
        "L'île-resort de Sentosa concentre plages, casino, Universal Studios et attractions familiales. Accessible à pied depuis Harbourfront, elle offre une parenthèse balnéaire en pleine métropole.",
      wikipedia: "Sentosa",
      tags: ["plages", "divertissement", "famille", "resort"],
      mustSee: [
        { name: "Universal Studios Singapore", wikipedia: "Universal_Studios_Singapore" },
        { name: "S.E.A. Aquarium", wikipedia: "File:S.E.A. Aquarium, Singapore, 20240206 1354 6519.jpg" },
        { name: "Siloso Beach", wikipedia: "File:Siloso Beach Walk (180702).jpg" },
        { name: "Fort Siloso (musée WWII)", wikipedia: "Fort_Siloso" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Singapour est l'une des villes les plus chères d'Asie, mais la nourriture dans les hawker centres reste très abordable. L'hébergement représente le principal poste de dépense.",
    currency: "Dollar de Singapour (SGD)",
    exchangeRate: "1€ ≈ 1,40–1,50 SGD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir capsule-hôtel", price: "25–45 €", detail: "Propre et confortable, très demandé" },
          { label: "Chambre double hôtel 3★", price: "100–180 €", detail: "Proche MRT, bon rapport qualité-prix" },
          { label: "Marina Bay Sands (4★+)", price: "350–600 €", detail: "Piscine à débordement iconique incluse" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas hawker centre", price: "3–6 €", detail: "Chicken rice, laksa, nasi lemak" },
          { label: "Restaurant mid-range", price: "15–30 €", detail: "Cuisine asiatique moderne ou fusion" },
          { label: "Chilli Crab au restaurant", price: "40–80 €", detail: "Pour deux, spécialité nationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "MRT (métro) par trajet", price: "1–2 €", detail: "Réseau très efficace, AC dans tous les wagons" },
          { label: "Grab (équiv. Uber) course", price: "5–15 €", detail: "Appli indispensable, très fiable" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Gardens by the Bay (serres)", price: "20–28 €", detail: "Cloud Forest + Flower Dome" },
          { label: "Universal Studios (journée)", price: "65–85 €", detail: "Tarif adulte" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Capsule hôtel, hawker centres, MRT", color: "#22c55e" },
      { type: "Confort", daily: "120–200 €/j", desc: "Hôtel 3★, restos mid-range, attractions", color: "#3b82f6" },
      { type: "Luxe", daily: "350 €+/j", desc: "Marina Bay Sands, gastronomie, spa", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Singapour (base) + excursions Malaisie / Indonésie",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 000 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Singapour", amount: "700–950 €" },
            { label: "Hébergement (14 nuits)", amount: "500–700 €" },
            { label: "Nourriture", amount: "350–500 €" },
            { label: "Transport local (MRT + Grab)", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Singapour", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "1 200–1 800 €" },
            { label: "Nourriture", amount: "600–900 €" },
            { label: "Transport local", amount: "200–300 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Singapour (Business)", amount: "3 000–4 500 €" },
            { label: "Hébergement (14 nuits)", amount: "3 000–5 000 €" },
            { label: "Gastronomie (restaurants étoilés)", amount: "800–1 500 €" },
            { label: "Transport & excursions privées", amount: "400–700 €" },
            { label: "Activités premium", amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~13h (Singapore Airlines direct, Air France)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Dollar de Singapour (1€ ≈ 1,40–1,50 SGD)" },
    { icon: "🗣️", label: "Langue", value: "Anglais (officiel), mandarin, malais, tamoul" },
    { icon: "🔌", label: "Prise électrique", value: "Type G – 230 V (même qu'UK, adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "5G dans toute la ville, SIM touristique disponible à l'aéroport" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable et excellente (parmi les meilleures d'Asie)" },
    { icon: "💊", label: "Santé", value: "Aucun vaccin obligatoire, pays très sûr et propre" },
  ],
};
