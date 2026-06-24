export const MALAYSIA = {
  code: "MYS",
  numericId: 458,
  name: "Malaisie",
  emoji: "🇲🇾",
  capital: "Kuala Lumpur",
  language: "Malais (Bahasa Malaysia)",
  currency: "Ringgit malaisien (MYR)",
  timezone: "UTC+8",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1200,
    tripMid: 2200,
  },
  description:
    "La Malaisie est une mosaïque de cultures (malaises, chinoises, indiennes, dayak) au sein d'une nature luxuriante. Des tours Petronas de Kuala Lumpur aux forêts de Bornéo où vivent les orangs-outans, en passant par les plages de Langkawi et les collines de Cameron, le pays offre une diversité époustouflante.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Côte Ouest (saison sèche)",
      color: "#fbbf24",
      description:
        "Idéal pour Langkawi, Penang et la côte ouest : mer calme et soleil. KL agréable toute l'année.",
      icon: "☀️",
    },
    {
      months: "Mars – Octobre",
      label: "Côte Est & Bornéo",
      color: "#22c55e",
      description:
        "La côte est (Perhentian, Tioman) est accessible mars-octobre. Bornéo est idéale en mars-octobre pour les orangs-outans.",
      icon: "🦧",
    },
  ],

  weatherCities: [
    {
      id: "kuala-lumpur",
      name: "Kuala Lumpur",
      region: "Klang Valley",
      data: [
        { month: "Jan", temp: 27, rain: 175, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 145, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 270, icon: "🌧️" },
        { month: "Mai", temp: 29, rain: 185, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 145, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 195, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 265, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 275, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 230, icon: "🌧️" },
      ],
    },
    {
      id: "langkawi",
      name: "Langkawi",
      region: "Kedah (îles)",
      data: [
        { month: "Jan", temp: 27, rain: 65, icon: "☀️" },
        { month: "Fév", temp: 28, rain: 40, icon: "☀️" },
        { month: "Mar", temp: 29, rain: 75, icon: "⛅" },
        { month: "Avr", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 30, rain: 175, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 185, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 225, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 310, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 355, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 185, icon: "🌧️" },
        { month: "Déc", temp: 26, rain: 70, icon: "☀️" },
      ],
    },
    {
      id: "kota-kinabalu",
      name: "Kota Kinabalu",
      region: "Sabah (Bornéo)",
      data: [
        { month: "Jan", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 80, icon: "⛅" },
        { month: "Mar", temp: 28, rain: 85, icon: "⛅" },
        { month: "Avr", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 190, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 225, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 260, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 235, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Kuala Lumpur",
      region: "Centre",
      description:
        "La capitale malaisienne est dominée par les tours Petronas (452 m), les plus hautes du monde de 1998 à 2004. Le quartier indien de Brickfields, Chinatown et le quartier colonial de Merdeka Square coexistent dans une métropole vibrante et multiculturelle.",
      wikipedia: "Kuala_Lumpur",
      tags: ["Ville", "tours", "Culture", "Gastronomie", "Architecture"],
      mustSee: [
        { name: "Tours Petronas", wikipedia: "File:Petronas Panorama II.jpg" },
        { name: "Batu Caves", wikipedia: "Batu_Caves" },
        { name: "Jalan Alor (rue gastronomique)", wikipedia: "File:Jalan_Alor_in_Kuala_Lumpur_during_Corona_virus_lockdown.jpg" },
        { name: "Menara KL Tower", wikipedia: "File:Kuala_Lumpur_Malaysia_Menara-Kuala-Lumpur-02.jpg" },
      ],
    },
    {
      id: 2,
      name: "Penang",
      region: "Nord-Ouest",
      description:
        "L'île de Penang est la capitale gastronomique de la Malaisie. George Town, inscrite au patrimoine UNESCO, est célèbre pour ses street arts muraux, ses shophouses colorées et sa cuisine Nyonya (fusion malayo-chinoise). Les temples, mosquées et hawker centres s'y côtoient harmonieusement.",
      wikipedia: "File:Skyline_of_George_Town,_Penang_at_dusk_May_2025.jpg",
      tags: ["Gastronomie", "Culture", "UNESCO", "art", "Histoire", "Architecture"],
      mustSee: [
        { name: "George Town (vieille ville)", wikipedia: "File:Georgetown, Penang in 2023 01.jpg" },
        { name: "Penang Hill (Bukit Bendera)", wikipedia: "File:Penang Hill in 2023 02.jpg" },
        { name: "Street Art de George Town", wikipedia: "File:Street art at Penang.jpg" },
        { name: "Kek Lok Si Temple", wikipedia: "Kek_Lok_Si" },
      ],
    },
    {
      id: 3,
      name: "Bornéo malaisien (Sabah & Sarawak)",
      region: "Bornéo",
      description:
        "Sabah et Sarawak abritent les forêts les plus riches d'Asie du Sud-Est. Orangs-outans de Sepilok, rhinocéros de Sabah, grottes de Niah et mont Kinabalu (4 095 m, point culminant d'Asie du Sud-Est) dans un cadre de jungle primaire extraordinaire.",
      wikipedia: "File:2014 Borneo Luyten-De-Hauwere-Child-01.jpg",
      tags: ["jungle", "orangs-outans", "Randonnée", "Faune"],
      mustSee: [
        { name: "Centre de réhabilitation de Sepilok", wikipedia: "File:Sandakan_Sabah_Sepilok-Orangutan-Rehabilitation-Centre-02.jpg" },
        { name: "Mont Kinabalu", wikipedia: "Mount_Kinabalu" },
        { name: "Grottes de Niah", wikipedia: "File:The_main_entrance_to_the_Niah_Caves_at_sunset..jpg" },
        { name: "Parc national de Mulu", wikipedia: "Gunung_Mulu_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Langkawi",
      region: "Kedah",
      description:
        "L'archipel de Langkawi (99 îles) est le paradis balnéaire de la Malaisie avec ses plages de sable blanc, ses mangroves et ses forêts de geopark. Duty-free, téléphérique et eau translucide pour une île détente.",
      wikipedia: "File:Langkawi 004.jpg",
      tags: ["Plage", "île", "Nature", "duty-free"],
      mustSee: [
        { name: "Pantai Cenang", wikipedia: "File:Pantai Cenang, Langkawi 01.jpg" },
        { name: "Langkawi Sky Bridge", wikipedia: "Langkawi_Sky_Bridge" },
        { name: "Kilim Karst Geoforest Park", wikipedia: "File:Langkawi Mangrove Forest.jpg" },
        { name: "Tanjung Rhu", wikipedia: "File:Jalan_Tanjung_Rhu,_07000_Langkawi,_Kedah,_Malaysia_-_panoramio_-_jetsun_(7).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "La Malaisie est très abordable pour un pays au développement avancé. La nourriture de rue (hawker) est excellente et peu chère. KL est abordable par rapport aux capitales asiatiques.",
    currency: "Ringgit malaisien (MYR)",
    exchangeRate: "1€ ≈ 4,8–5,2 MYR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "6–12 €", detail: "KL, Penang, très bon réseau" },
          { label: "Chambre double hôtel 3★", price: "25–50 €", detail: "Bon confort, souvent avec piscine" },
          { label: "Resort Langkawi 4★", price: "80–180 €", detail: "Bord de plage, souvent all-inclusive" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas hawker centre", price: "2–4 €", detail: "Nasi lemak, Laksa, Char Kway Teow" },
          { label: "Roti canai + teh tarik", price: "0,80–1,50 €", detail: "Petit-déjeuner malaisien classique" },
          { label: "Restaurant mid-range", price: "8–18 €", detail: "Cuisine locale ou internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "KL MRT/LRT trajet", price: "0,40–1,50 €", detail: "Réseau étendu, très pratique" },
          { label: "Bus express KL–Penang (4h)", price: "8–15 €", detail: "Très confortable, AC" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Visite Sepilok Orangs-outans", price: "15–25 €", detail: "Entrée réserve + centre" },
          { label: "Trek Mont Kinabalu (2 jours)", price: "150–250 €", detail: "Permis + guide + refuge obligatoires" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Auberge, hawker centres, transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "65–110 €/j", desc: "Hôtel 3★, restaurants mid-range, excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Resort 5★ Langkawi, gastronomie, privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Kuala Lumpur – Penang – Langkawi – Bornéo (Sabah)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Kuala Lumpur", amount: "500–750 €" },
            { label: "Hébergement (14 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Transport local + vols intérieurs", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Kuala Lumpur", amount: "700–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "600–900 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport + vols intérieurs", amount: "300–500 €" },
            { label: "Activités & imprévus", amount: "250–400 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–KL (Business)", amount: "2 500–4 000 €" },
            { label: "Hébergement (14 nuits)", amount: "1 800–2 500 €" },
            { label: "Nourriture & restaurants", amount: "500–800 €" },
            { label: "Transport & excursions privées", amount: "400–600 €" },
            { label: "Activités premium", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~12–13h (Malaysia Airlines direct, Air France)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Ringgit malaisien (1€ ≈ 4,8–5,2 MYR)" },
    { icon: "🗣️", label: "Langue", value: "Malais (Bahasa), anglais très répandu" },
    { icon: "🔌", label: "Prise électrique", value: "Type G – 240 V (même qu'UK, adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, SIM touristique à l'aéroport KLIA" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille recommandée" },
    { icon: "💊", label: "Santé", value: "Pas de vaccins obligatoires, antipaludéens conseillés à Bornéo profond" },
  ],
};
