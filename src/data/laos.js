export const LAOS = {
  code: "LAO",
  numericId: 418,
  name: "Laos",
  emoji: "🇱🇦",
  capital: "Vientiane",
  language: "Laotien",
  currency: "Kip laotien (LAK)",
  timezone: "UTC+7",
  filter: {
    budgetMin: 25,
    budgetMid: 50,
    tripMin: 1000,
    tripMid: 2000,
  },
  description:
    "Le Laos est le joyau paisible de l'Asie du Sud-Est, souvent surnommé « l'âme du Mékong ». Luang Prabang et ses temples dorés, les grottes de Pak Ou, les chutes de Kuang Si et le plateau des Bolavens séduisent les voyageurs en quête d'authenticité et de sérénité.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche et fraîche",
      color: "#fbbf24",
      description:
        "Meilleure période : températures douces (20–28 °C), ciel bleu, pas de pluie. Idéal pour les temples et randonnées.",
      icon: "☀️",
    },
    {
      months: "Mars – Avril",
      label: "Nouvel An laotien (Boun Pi Mai)",
      color: "#f43f5e",
      description:
        "Festivités de l'eau pour le Nouvel An en avril. Très beau à vivre mais très chaud (35–40 °C).",
      icon: "💦",
    },
  ],

  weatherCities: [
    {
      id: "vientiane",
      name: "Vientiane",
      region: "Préfecture de Vientiane",
      data: [
        { month: "Jan", temp: 21, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 24, rain: 15, icon: "☀️" },
        { month: "Mar", temp: 27, rain: 35, icon: "⛅" },
        { month: "Avr", temp: 30, rain: 80, icon: "⛅" },
        { month: "Mai", temp: 29, rain: 195, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 265, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 245, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 285, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 290, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 115, icon: "☀️" },
        { month: "Nov", temp: 24, rain: 30, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 10, icon: "☀️" },
      ],
    },
    {
      id: "luang-prabang",
      name: "Luang Prabang",
      region: "Luang Prabang",
      data: [
        { month: "Jan", temp: 19, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 22, rain: 15, icon: "☀️" },
        { month: "Mar", temp: 26, rain: 30, icon: "☀️" },
        { month: "Avr", temp: 29, rain: 75, icon: "⛅" },
        { month: "Mai", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 255, icon: "⛅" },
        { month: "Aoû", temp: 26, rain: 295, icon: "⛅" },
        { month: "Sep", temp: 26, rain: 205, icon: "⛅" },
        { month: "Oct", temp: 24, rain: 100, icon: "☀️" },
        { month: "Nov", temp: 21, rain: 30, icon: "☀️" },
        { month: "Déc", temp: 18, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Luang Prabang",
      region: "Nord",
      description:
        "Ancienne capitale royale inscrite au patrimoine UNESCO, Luang Prabang est l'une des villes les plus belles d'Asie du Sud-Est. Chaque matin, la procession des moines en robe orange (tak bat) dans les ruelles coloniales est une expérience spirituelle inoubliable.",
      wikipedia: "Luang_Prabang",
      tags: ["UNESCO", "temples", "culture", "monastères"],
      mustSee: [
        { name: "Tak Bat (procession des moines)", wikipedia: "File:Praying_bhikkhus_inside_Wat_Sensoukharam_in_Luang_Prabang_Laos.jpg" },
        { name: "Chutes de Kuang Si", wikipedia: "File:Kuang_Si_Falls_and_a_turquoise_water_pool_in_Luang_Prabang_province_Laos.jpg" },
        { name: "Grottes de Pak Ou", wikipedia: "File:Mekong River - Pak Ou Caves entrence 2.jpg" },
        { name: "Phou Si (colline aux temples)", wikipedia: "File:Panoramic_view_of_Mount_Phou_Si_seen_from_Wat_Chomphet_in_Luang_Prabang_Laos.jpg" },
      ],
    },
    {
      id: 2,
      name: "Vang Vieng",
      region: "Centre",
      description:
        "Entourée de formations karstiques spectaculaires et du fleuve Nam Song, Vang Vieng propose des balades en kayak, des ballades dans les grottes et des vues panoramiques depuis des montgolfières. La ville a considérablement amélioré son image ces dernières années.",
      wikipedia: "Vang_Vieng",
      tags: ["karst", "kayak", "montgolfière", "randonnée"],
      mustSee: [
        { name: "Blue Lagoon (Vang Vieng)", wikipedia: "File:Blue Lagoon at Vang Vieng - panoramio.jpg" },
        { name: "Grotte de Tham Chang", wikipedia: "File:Wat_Tham_Khao_Rup_Chang_-_180_Stalagtites_(14478487438).jpg" },
        { name: "Grotte de Tham Hoi", wikipedia: "File:VientianeProvince_VangVieng_ThamJang4_tango7174.jpg" },
        { name: "Vue panoramique depuis le Phathao", wikipedia: "File:Morning_at_Tham_Sakoen.jpg" },
      ],
    },
    {
      id: 3,
      name: "Vientiane",
      region: "Capitale",
      description:
        "La plus petite et paisible capitale d'Asie du Sud-Est conserve un charme colonial franco-laotien. Le Pha That Luang (stupa national), le Patuxai (arc de triomphe laotien) et le Bouddha Park sont ses emblèmes.",
      wikipedia: "Vientiane",
      tags: ["capitale", "temples", "histoire", "détendu"],
      mustSee: [
        { name: "Pha That Luang", wikipedia: "Pha_That_Luang" },
        { name: "Patuxai", wikipedia: "Patuxai" },
        { name: "Bouddha Park (Xieng Khuan)", wikipedia: "File:Vientiane, Buddha Park (6172411347).jpg" },
        { name: "Wat Si Saket", wikipedia: "Wat_Si_Saket" },
      ],
    },
    {
      id: 4,
      name: "Plateau des Bolavens & Paksé",
      region: "Sud",
      description:
        "Le plateau des Bolavens est une région de hautes terres verdoyantes avec des plantations de café, des cascades spectaculaires et des villages ethniques minorities. La chute de Tad Fane est l'une des plus belles du pays.",
      wikipedia: "Bolaven_Plateau",
      tags: ["café", "cascades", "culture", "nature"],
      mustSee: [
        { name: "Tad Fane (double cascade)", wikipedia: "Bolaven_Plateau" },
        { name: "Tad Lo", wikipedia: "File:Tad_Hang_waterfalls_at_sunset,_Tad_Lo_village,_Bolaven_Plateau,_Laos.jpg" },
        { name: "Wat Phu (ruines khmers)", wikipedia: "File:Three_quarter_view_of_the_ruined_Khmer_Hindu_temple_of_Wat_Phou_with_blue_sky_in_Champasak_Laos.jpg" },
        { name: "Siphandon (4000 îles)", wikipedia: "File:Fisherman_and_pirogue_sailing_on_the_Mekong_a_sunny_afternoon_in_Don_Det_Laos.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Laos est l'une des destinations les moins chères d'Asie du Sud-Est. Les prix sont très bas pour l'hébergement et la nourriture, même dans les zones touristiques.",
    currency: "Kip laotien (LAK)",
    exchangeRate: "1€ ≈ 22 000–24 000 LAK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "4–8 €", detail: "Luang Prabang, Vientiane" },
          { label: "Guesthouse double AC", price: "10–20 €", detail: "Bon rapport qualité-prix partout" },
          { label: "Hôtel boutique Luang Prabang", price: "40–100 €", detail: "Maison coloniale restaurée" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Baguette laotienne (sandwiche)", price: "0,80–1,50 €", detail: "Héritage français, délicieux" },
          { label: "Khao Niao (riz gluant + laap)", price: "1,50–3 €", detail: "Repas traditionnel laotien" },
          { label: "Restaurant touristique", price: "5–12 €", detail: "Cuisine fusion ou laotienne soignée" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Vientiane–Luang Prabang (10h)", price: "8–15 €", detail: "Ou bateau lent 2 jours (plus beau)" },
          { label: "Bateau lent Huay Xai–Luang Prabang", price: "15–25 €", detail: "2 jours sur le Mékong, inoubliable" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Excursion chutes Kuang Si", price: "8–15 €", detail: "Tuk-tuk + entrée" },
          { label: "Tour kayak Vang Vieng", price: "10–20 €", detail: "Demi-journée sur le Nam Song" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–40 €/j", desc: "Dortoir, cuisine locale, tuk-tuk, excursions budget", color: "#22c55e" },
      { type: "Confort", daily: "50–85 €/j", desc: "Hôtel 3★, restaurants mid-range, excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "150 €+/j", desc: "Boutique hôtel colonial, spa, tours privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Vientiane – Vang Vieng – Luang Prabang – Plateau des Bolavens",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Vientiane", amount: "550–750 €" },
            { label: "Hébergement (14 nuits)", amount: "120–200 €" },
            { label: "Nourriture", amount: "120–200 €" },
            { label: "Transport local + bateaux", amount: "80–150 €" },
            { label: "Activités & imprévus", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Vientiane", amount: "700–950 €" },
            { label: "Hébergement (14 nuits)", amount: "400–600 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Transport + excursions", amount: "250–400 €" },
            { label: "Activités & imprévus", amount: "200–300 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Vientiane (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "900–1 400 €" },
            { label: "Nourriture & restaurants", amount: "300–450 €" },
            { label: "Tours privés & bateau privé", amount: "400–600 €" },
            { label: "Activités premium + spa", amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~13–15h avec escale (Bangkok, Hanoi, Singapour)" },
    { icon: "🪪", label: "Visa", value: "Visa à l'arrivée (35 USD) ou e-Visa en ligne" },
    { icon: "💰", label: "Monnaie", value: "Kip laotien (1€ ≈ 22 000–24 000 LAK) + USD/THB acceptés" },
    { icon: "🗣️", label: "Langue", value: "Laotien (le français est parfois compris à Luang Prabang)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B/C – 230 V (adaptateur universel conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, limité dans le sud et les plateaux" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Antipaludéens recommandés pour les zones rurales du sud" },
  ],
};
