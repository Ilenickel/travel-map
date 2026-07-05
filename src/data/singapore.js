export const SINGAPORE = {
  code: "SGP",
  numericId: 702,
  name: { fr: "Singapour", en: "Singapore" },
  emoji: "🇸🇬",
  capital: { fr: "Singapour", en: "Singapore" },
  language: { fr: "Anglais, mandarin, malais, tamoul", en: "English, Mandarin, Malay, Tamil" },
  currency: { fr: "Dollar de Singapour (SGD)", en: "Singapore dollar (SGD)" },
  timezone: "UTC+8",
  filter: {
    budgetMin: 60,
    budgetMid: 120,
    tripMin: 2000,
    tripMid: 3500,
  },
  description: {
    fr: "Singapour est une cité-État futuriste au carrefour de l'Asie du Sud-Est, mosaïque de cultures chinoises, malaises et indiennes. Propreté légendaire, gastronomie de rue mondialement reconnue (hawker centres), jardins verticaux et Supertrees sont la signature de ce joyau ultramoderne et sûr.",
    en: "Singapore is a futuristic city-state at the crossroads of Southeast Asia, a mosaic of Chinese, Malay and Indian cultures. Legendary cleanliness, world-renowned street food (hawker centres), vertical gardens and Supertrees are the signature of this ultramodern, safe gem.",
  },

  bestPeriods: [
    {
      months: { fr: "Février – Avril", en: "February – April" },
      label: { fr: "Chaleur sèche (minimum de pluies)", en: "Dry heat (least rain)" },
      color: "#fbbf24",
      description: {
        fr: "Les mois les plus ensoleillés, avec moins de pluies. Idéal pour les parcs extérieurs et les quartiers ethniques.",
        en: "The sunniest months, with less rain. Ideal for outdoor parks and the ethnic districts.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juillet – Septembre", en: "July – September" },
      label: { fr: "Été (pluies modérées)", en: "Summer (moderate rain)" },
      color: "#86efac",
      description: {
        fr: "Pluies de courte durée, temps chaud. Festival National Day en août, ambiance festive.",
        en: "Short showers, hot weather. National Day festival in August, festive atmosphere.",
      },
      icon: "🎆",
    },
  ],

  weatherCities: [
    {
      id: "singapore",
      name: "Singapour",
      region: { fr: "Île principale", en: "Main island" },
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
      description: {
        fr: "Le chef-d'œuvre botanique de Singapour avec ses Supertrees luminescents, ses serres climatisées (Cloud Forest et Flower Dome) et ses passerelles aériennes. Un must absolu, surtout au crépuscule lors du Garden Rhapsody.",
        en: "Singapore's botanical masterpiece with its glowing Supertrees, climate-controlled greenhouses (Cloud Forest and Flower Dome) and elevated walkways. An absolute must, especially at dusk during the Garden Rhapsody light show.",
      },
      wikipedia: "Gardens_by_the_Bay",
      tags: ["jardins", "architecture", "Nature", "lumière"],
      mustSee: [
        { name: "Supertree Grove", wikipedia: "File:Supertree_Grove,_Gardens_by_the_Bay,_Singapore_-_20120712-02.jpg" },
        { name: { fr: "Cloud Forest (serre)", en: "Cloud Forest (greenhouse)" }, wikipedia: "File:Sri Lanka cloud forest, tall trees in fog.jpg" },
        { name: { fr: "Marina Bay Sands (skyline)", en: "Marina Bay Sands (skyline)" }, wikipedia: "Marina_Bay_Sands" },
        { name: "ArtScience Museum", wikipedia: "ArtScience_Museum" },
      ],
    },
    {
      id: 2,
      name: { fr: "Quartiers ethniques", en: "Ethnic districts" },
      region: { fr: "Centre historique", en: "Historic centre" },
      description: {
        fr: "Chinatown, Little India (Tekka), Kampong Glam (quartier malais) et Clarke Quay coexistent à quelques stations de métro. Temples hindous, mosquées, pagodes et marchés de rue forment le cœur multiculturel de Singapour.",
        en: "Chinatown, Little India (Tekka), Kampong Glam (the Malay quarter) and Clarke Quay coexist just a few metro stops apart. Hindu temples, mosques, pagodas and street markets form the multicultural heart of Singapore.",
      },
      wikipedia: "Chinatown,_Singapore",
      tags: ["Culture", "Gastronomie", "Histoire", "religion"],
      mustSee: [
        { name: "Little India (Tekka)", wikipedia: "Little_India,_Singapore" },
        { name: "Chinatown Heritage Centre", wikipedia: "File:Chinatown_Heritage_Centre.JPG" },
        { name: "Sultan Mosque (Kampong Glam)", wikipedia: "File:Masjid Sultan, Singapore (2023 June) - img 02.jpg" },
        { name: "Sri Mariamman Temple", wikipedia: "Sri_Mariamman_Temple,_Singapore" },
      ],
    },
    {
      id: 3,
      name: { fr: "Hawker Centres & Gastronomie", en: "Hawker Centres & Cuisine" },
      region: { fr: "Toute l'île", en: "Island-wide" },
      description: {
        fr: "Les hawker centres sont des marchés de rue couverts et climatisés où des dizaines de cuisiniers proposent des spécialités à bas prix. Le Chicken Rice, le Laksa, le Char Kway Teow et le Chilli Crab y sont légendaires. Singapour compte plusieurs hawker centres au patrimoine UNESCO.",
        en: "Hawker centres are covered, air-conditioned street food markets where dozens of cooks serve up specialities at low prices. Chicken Rice, Laksa, Char Kway Teow and Chilli Crab are legendary here. Singapore has several hawker centres recognised as UNESCO heritage.",
      },
      wikipedia: "Hawker_centre",
      tags: ["Gastronomie", "Culture", "street food", "UNESCO"],
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
      region: { fr: "Sud de l'île", en: "Southern island" },
      description: {
        fr: "L'île-resort de Sentosa concentre plages, casino, Universal Studios et attractions familiales. Accessible à pied depuis Harbourfront, elle offre une parenthèse balnéaire en pleine métropole.",
        en: "Sentosa resort island brings together beaches, a casino, Universal Studios and family attractions. Reachable on foot from Harbourfront, it offers a seaside escape in the heart of the metropolis.",
      },
      wikipedia: "Sentosa",
      tags: ["Plage", "divertissement", "famille", "resort"],
      mustSee: [
        { name: "Universal Studios Singapore", wikipedia: "Universal_Studios_Singapore" },
        { name: "S.E.A. Aquarium", wikipedia: "File:S.E.A. Aquarium, Singapore, 20240206 1354 6519.jpg" },
        { name: "Siloso Beach", wikipedia: "File:Siloso Beach Walk (180702).jpg" },
        { name: { fr: "Fort Siloso (musée WWII)", en: "Fort Siloso (WWII museum)" }, wikipedia: "Fort_Siloso" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Singapour est l'une des villes les plus chères d'Asie, mais la nourriture dans les hawker centres reste très abordable. L'hébergement représente le principal poste de dépense.",
      en: "Singapore is one of the most expensive cities in Asia, but food at hawker centres remains very affordable. Accommodation is the biggest expense.",
    },
    currency: { fr: "Dollar de Singapour (SGD)", en: "Singapore dollar (SGD)" },
    exchangeRate: "1€ ≈ 1,40–1,50 SGD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir capsule-hôtel", en: "Capsule hotel dorm" }, price: "25–45 €", detail: { fr: "Propre et confortable, très demandé", en: "Clean and comfortable, very popular" } },
          { label: { fr: "Chambre double hôtel 3★", en: "3★ hotel double room" }, price: "100–180 €", detail: { fr: "Proche MRT, bon rapport qualité-prix", en: "Near an MRT station, good value for money" } },
          { label: "Marina Bay Sands (4★+)", price: "350–600 €", detail: { fr: "Piscine à débordement iconique incluse", en: "Iconic infinity pool included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas hawker centre", en: "Hawker centre meal" }, price: "3–6 €", detail: { fr: "Chicken rice, laksa, nasi lemak", en: "Chicken rice, laksa, nasi lemak" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" }, price: "15–30 €", detail: { fr: "Cuisine asiatique moderne ou fusion", en: "Modern Asian or fusion cuisine" } },
          { label: { fr: "Chilli Crab au restaurant", en: "Chilli Crab at a restaurant" }, price: "40–80 €", detail: { fr: "Pour deux, spécialité nationale", en: "For two, the national speciality" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "MRT (métro) par trajet", en: "MRT (metro) per ride" }, price: "1–2 €", detail: { fr: "Réseau très efficace, AC dans tous les wagons", en: "Highly efficient network, AC in all carriages" } },
          { label: { fr: "Grab (équiv. Uber) course", en: "Grab (Uber equivalent) ride" }, price: "5–15 €", detail: { fr: "Appli indispensable, très fiable", en: "An essential, very reliable app" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Gardens by the Bay (serres)", en: "Gardens by the Bay (greenhouses)" }, price: "20–28 €", detail: { fr: "Cloud Forest + Flower Dome", en: "Cloud Forest + Flower Dome" } },
          { label: { fr: "Universal Studios (journée)", en: "Universal Studios (day)" }, price: "65–85 €", detail: { fr: "Tarif adulte", en: "Adult rate" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Capsule hôtel, hawker centres, MRT", en: "Capsule hotel, hawker centres, MRT" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "120–200 €/j", desc: { fr: "Hôtel 3★, restos mid-range, attractions", en: "3★ hotel, mid-range restaurants, attractions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "350 €+/j", desc: { fr: "Marina Bay Sands, gastronomie, spa", en: "Marina Bay Sands, fine dining, spa" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Singapour (base) + excursions Malaisie / Indonésie", en: "Singapore (base) + excursions to Malaysia / Indonesia" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Singapour", en: "Return flight Paris–Singapore" }, amount: "700–950 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "500–700 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "350–500 €" },
            { label: { fr: "Transport local (MRT + Grab)", en: "Local transport (MRT + Grab)" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Singapour", en: "Return flight Paris–Singapore" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "600–900 €" },
            { label: { fr: "Transport local", en: "Local transport" }, amount: "200–300 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Singapour (Business)", en: "Return flight Paris–Singapore (Business)" }, amount: "3 000–4 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Gastronomie (restaurants étoilés)", en: "Fine dining (Michelin-starred restaurants)" }, amount: "800–1 500 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions" }, amount: "400–700 €" },
            { label: { fr: "Activités premium", en: "Premium activities" }, amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13h (Singapore Airlines direct, Air France)", en: "~13h (Singapore Airlines direct, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar de Singapour (1€ ≈ 1,40–1,50 SGD)", en: "Singapore dollar (1€ ≈ 1.40–1.50 SGD)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (officiel), mandarin, malais, tamoul", en: "English (official), Mandarin, Malay, Tamil" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 230 V (même qu'UK, adaptateur conseillé)", en: "Type G — 230V (same as UK, adapter recommended)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "5G dans toute la ville, SIM touristique disponible à l'aéroport", en: "5G across the city, tourist SIM available at the airport" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable et excellente (parmi les meilleures d'Asie)", en: "Drinkable and excellent (among the best in Asia)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire, pays très sûr et propre", en: "No mandatory vaccines, a very safe and clean country" } },
  ],
};
