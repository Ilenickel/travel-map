export const LAOS = {
  code: "LAO",
  numericId: 418,
  name: { fr: "Laos", en: "Laos" },
  emoji: "🇱🇦",
  capital: { fr: "Vientiane", en: "Vientiane" },
  language: { fr: "Laotien", en: "Lao" },
  currency: { fr: "Kip laotien (LAK)", en: "Lao Kip (LAK)" },
  timezone: "UTC+7",
  filter: {
    budgetMin: 25,
    budgetMid: 50,
    tripMin: 1000,
    tripMid: 2000,
  },
  description: {
    fr: "Le Laos est le joyau paisible de l'Asie du Sud-Est, souvent surnommé « l'âme du Mékong ». Luang Prabang et ses temples dorés, les grottes de Pak Ou, les chutes de Kuang Si et le plateau des Bolavens séduisent les voyageurs en quête d'authenticité et de sérénité.",
    en: "Laos is the peaceful jewel of Southeast Asia, often nicknamed 'the soul of the Mekong'. Luang Prabang with its golden temples, the Pak Ou caves, the Kuang Si waterfalls and the Bolaven Plateau charm travellers seeking authenticity and serenity.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison sèche et fraîche", en: "Cool dry season" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période : températures douces (20–28 °C), ciel bleu, pas de pluie. Idéal pour les temples et randonnées.",
        en: "The best time to visit: mild temperatures (20–28 °C), blue skies, no rain. Ideal for temples and hiking.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Avril", en: "March – April" },
      label: { fr: "Nouvel An laotien (Boun Pi Mai)", en: "Lao New Year (Boun Pi Mai)" },
      color: "#f43f5e",
      description: {
        fr: "Festivités de l'eau pour le Nouvel An en avril. Très beau à vivre mais très chaud (35–40 °C).",
        en: "Water festivities for the New Year in April. A wonderful experience but very hot (35–40 °C).",
      },
      icon: "💦",
    },
  ],

  weatherCities: [
    {
      id: "vientiane",
      name: "Vientiane",
      region: { fr: "Préfecture de Vientiane", en: "Vientiane Prefecture" },
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
      region: { fr: "Luang Prabang", en: "Luang Prabang" },
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
      region: { fr: "Nord", en: "North" },
      description: {
        fr: "Ancienne capitale royale inscrite au patrimoine UNESCO, Luang Prabang est l'une des villes les plus belles d'Asie du Sud-Est. Chaque matin, la procession des moines en robe orange (tak bat) dans les ruelles coloniales est une expérience spirituelle inoubliable.",
        en: "A former royal capital and UNESCO World Heritage site, Luang Prabang is one of the most beautiful towns in Southeast Asia. Every morning, the procession of monks in orange robes (tak bat) through the colonial streets is an unforgettable spiritual experience.",
      },
      wikipedia: "Luang_Prabang",
      tags: ["UNESCO", "Temples", "Culture", "Monastères", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Tak Bat (procession des moines)", en: "Tak Bat (monks' procession)" }, wikipedia: "File:Praying_bhikkhus_inside_Wat_Sensoukharam_in_Luang_Prabang_Laos.jpg" },
        { name: { fr: "Chutes de Kuang Si", en: "Kuang Si Falls" }, wikipedia: "File:Kuang_Si_Falls_and_a_turquoise_water_pool_in_Luang_Prabang_province_Laos.jpg" },
        { name: { fr: "Grottes de Pak Ou", en: "Pak Ou Caves" }, wikipedia: "File:Mekong River - Pak Ou Caves entrence 2.jpg" },
        { name: { fr: "Phou Si (colline aux temples)", en: "Phou Si (temple hill)" }, wikipedia: "File:Panoramic_view_of_Mount_Phou_Si_seen_from_Wat_Chomphet_in_Luang_Prabang_Laos.jpg" },
      ],
    },
    {
      id: 2,
      name: "Vang Vieng",
      region: { fr: "Centre", en: "Centre" },
      description: {
        fr: "Entourée de formations karstiques spectaculaires et du fleuve Nam Song, Vang Vieng propose des balades en kayak, des ballades dans les grottes et des vues panoramiques depuis des montgolfières. La ville a considérablement amélioré son image ces dernières années.",
        en: "Surrounded by spectacular karst formations and the Nam Song river, Vang Vieng offers kayaking trips, cave exploration and panoramic views from hot-air balloons. The town has significantly improved its image in recent years.",
      },
      wikipedia: "Vang_Vieng",
      tags: ["Karst", "Kayak", "Montgolfière", "Randonnée"],
      mustSee: [
        { name: { fr: "Blue Lagoon (Vang Vieng)", en: "Blue Lagoon (Vang Vieng)" }, wikipedia: "File:Blue Lagoon at Vang Vieng - panoramio.jpg" },
        { name: { fr: "Grotte de Tham Chang", en: "Tham Chang Cave" }, wikipedia: "File:Wat_Tham_Khao_Rup_Chang_-_180_Stalagtites_(14478487438).jpg" },
        { name: { fr: "Grotte de Tham Hoi", en: "Tham Hoi Cave" }, wikipedia: "File:VientianeProvince_VangVieng_ThamJang4_tango7174.jpg" },
        { name: { fr: "Vue panoramique depuis le Phathao", en: "Panoramic view from Phathao" }, wikipedia: "File:Morning_at_Tham_Sakoen.jpg" },
      ],
    },
    {
      id: 3,
      name: "Vientiane",
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "La plus petite et paisible capitale d'Asie du Sud-Est conserve un charme colonial franco-laotien. Le Pha That Luang (stupa national), le Patuxai (arc de triomphe laotien) et le Bouddha Park sont ses emblèmes.",
        en: "The smallest and most peaceful capital in Southeast Asia retains a Franco-Lao colonial charm. Pha That Luang (the national stupa), Patuxai (the Lao arc de triomphe) and Buddha Park are its emblems.",
      },
      wikipedia: "Vientiane",
      tags: ["Ville", "Temples", "Histoire", "Détendu", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Pha That Luang", wikipedia: "Pha_That_Luang" },
        { name: "Patuxai", wikipedia: "Patuxai" },
        { name: { fr: "Bouddha Park (Xieng Khuan)", en: "Buddha Park (Xieng Khuan)" }, wikipedia: "File:Vientiane, Buddha Park (6172411347).jpg" },
        { name: "Wat Si Saket", wikipedia: "Wat_Si_Saket" },
      ],
    },
    {
      id: 4,
      name: { fr: "Plateau des Bolavens & Paksé", en: "Bolaven Plateau & Pakse" },
      region: { fr: "Sud", en: "South" },
      description: {
        fr: "Le plateau des Bolavens est une région de hautes terres verdoyantes avec des plantations de café, des cascades spectaculaires et des villages ethniques minorities. La chute de Tad Fane est l'une des plus belles du pays.",
        en: "The Bolaven Plateau is a lush highland region with coffee plantations, spectacular waterfalls and ethnic minority villages. Tad Fane waterfall is one of the most beautiful in the country.",
      },
      wikipedia: "Bolaven_Plateau",
      tags: ["Café", "Cascades", "Culture", "Nature"],
      mustSee: [
        { name: { fr: "Tad Fane (double cascade)", en: "Tad Fane (twin waterfall)" }, wikipedia: "Bolaven_Plateau" },
        { name: "Tad Lo", wikipedia: "File:Tad_Hang_waterfalls_at_sunset,_Tad_Lo_village,_Bolaven_Plateau,_Laos.jpg" },
        { name: { fr: "Wat Phu (ruines khmers)", en: "Wat Phu (Khmer ruins)" }, wikipedia: "File:Three_quarter_view_of_the_ruined_Khmer_Hindu_temple_of_Wat_Phou_with_blue_sky_in_Champasak_Laos.jpg" },
        { name: { fr: "Siphandon (4000 îles)", en: "Si Phan Don (4,000 islands)" }, wikipedia: "File:Fisherman_and_pirogue_sailing_on_the_Mekong_a_sunny_afternoon_in_Don_Det_Laos.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Laos est l'une des destinations les moins chères d'Asie du Sud-Est. Les prix sont très bas pour l'hébergement et la nourriture, même dans les zones touristiques.",
      en: "Laos is one of the cheapest destinations in Southeast Asia. Prices are very low for accommodation and food, even in tourist areas.",
    },
    currency: { fr: "Kip laotien (LAK)", en: "Lao Kip (LAK)" },
    exchangeRate: "1€ ≈ 22 000–24 000 LAK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Youth hostel dorm" }, price: "4–8 €", detail: { fr: "Luang Prabang, Vientiane", en: "Luang Prabang, Vientiane" } },
          { label: { fr: "Guesthouse double AC", en: "Guesthouse double room with A/C" }, price: "10–20 €", detail: { fr: "Bon rapport qualité-prix partout", en: "Good value everywhere" } },
          { label: { fr: "Hôtel boutique Luang Prabang", en: "Boutique hotel in Luang Prabang" }, price: "40–100 €", detail: { fr: "Maison coloniale restaurée", en: "Restored colonial house" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Baguette laotienne (sandwiche)", en: "Lao baguette (sandwich)" }, price: "0,80–1,50 €", detail: { fr: "Héritage français, délicieux", en: "French heritage, delicious" } },
          { label: { fr: "Khao Niao (riz gluant + laap)", en: "Khao Niao (sticky rice + laap)" }, price: "1,50–3 €", detail: { fr: "Repas traditionnel laotien", en: "Traditional Lao meal" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant" }, price: "5–12 €", detail: { fr: "Cuisine fusion ou laotienne soignée", en: "Fusion or refined Lao cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Vientiane–Luang Prabang (10h)", en: "Bus Vientiane–Luang Prabang (10h)" }, price: "8–15 €", detail: { fr: "Ou bateau lent 2 jours (plus beau)", en: "Or a 2-day slow boat (more scenic)" } },
          { label: { fr: "Bateau lent Huay Xai–Luang Prabang", en: "Slow boat Huay Xai–Luang Prabang" }, price: "15–25 €", detail: { fr: "2 jours sur le Mékong, inoubliable", en: "2 days on the Mekong, unforgettable" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Excursion chutes Kuang Si", en: "Kuang Si Falls excursion" }, price: "8–15 €", detail: { fr: "Tuk-tuk + entrée", en: "Tuk-tuk + entrance fee" } },
          { label: { fr: "Tour kayak Vang Vieng", en: "Vang Vieng kayak tour" }, price: "10–20 €", detail: { fr: "Demi-journée sur le Nam Song", en: "Half-day on the Nam Song" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Dortoir, cuisine locale, tuk-tuk, excursions budget", en: "Dorm, local food, tuk-tuk, budget excursions" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "50–85 €/j", desc: { fr: "Hôtel 3★, restaurants mid-range, excursions guidées", en: "3★ hotel, mid-range restaurants, guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "150 €+/j", desc: { fr: "Boutique hôtel colonial, spa, tours privés", en: "Colonial boutique hotel, spa, private tours" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Vientiane – Vang Vieng – Luang Prabang – Plateau des Bolavens",
        en: "Vientiane – Vang Vieng – Luang Prabang – Bolaven Plateau",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vientiane", en: "Return flight Paris–Vientiane" }, amount: "550–750 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "120–200 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "120–200 €" },
            { label: { fr: "Transport local + bateaux", en: "Local transport + boats" }, amount: "80–150 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vientiane", en: "Return flight Paris–Vientiane" }, amount: "700–950 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "400–600 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Transport + excursions", en: "Transport + excursions" }, amount: "250–400 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vientiane (Business)", en: "Return flight Paris–Vientiane (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "900–1 400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "300–450 €" },
            { label: { fr: "Tours privés & bateau privé", en: "Private tours & private boat" }, amount: "400–600 €" },
            { label: { fr: "Activités premium + spa", en: "Premium activities + spa" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13–15h avec escale (Bangkok, Hanoi, Singapour)", en: "~13–15h with a stopover (Bangkok, Hanoi, Singapore)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée (35 USD) ou e-Visa en ligne", en: "Visa on arrival (35 USD) or online e-Visa" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Kip laotien (1€ ≈ 22 000–24 000 LAK) + USD/THB acceptés", en: "Lao Kip (1€ ≈ 22,000–24,000 LAK) + USD/THB accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Laotien (le français est parfois compris à Luang Prabang)", en: "Lao (French is sometimes understood in Luang Prabang)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B/C – 230 V (adaptateur universel conseillé)", en: "Type A/B/C – 230V (universal adapter recommended)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "4G dans les villes, limité dans le sud et les plateaux", en: "4G in cities, limited in the south and on the plateaus" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéens recommandés pour les zones rurales du sud", en: "Antimalarial treatment recommended for rural areas in the south" } },
  ],
};
