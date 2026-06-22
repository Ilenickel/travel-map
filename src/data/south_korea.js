export const SOUTH_KOREA = {
  code: "KOR",
  numericId: 410,
  name: "Corée du Sud",
  emoji: "🇰🇷",
  capital: "Séoul",
  language: "Coréen",
  currency: "Won (₩)",
  timezone: "UTC+9",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "La Corée du Sud fascine par sa capacité à marier tradition millénaire et modernité ultra-connectée. Palais dynastiques, temples bouddhistes dans la montagne, gastronomie unique (bibimbap, barbecue, kimchi), K-pop et culture pop en font une destination inoubliable.",

  bestPeriods: [
    {
      months: "Avril – Mai",
      label: "Fleurs de cerisier",
      color: "#f9a8d4",
      description:
        "Les cerisiers (beotkkot) fleurissent de Jeju à Séoul. Températures idéales (15–22 °C), paysages enchanteurs.",
      icon: "🌸",
    },
    {
      months: "Septembre – Novembre",
      label: "Automne coréen",
      color: "#fb923c",
      description:
        "Les forêts se parent de rouge et d'or. Randonnée dans les parcs nationaux (Seoraksan, Jirisan) à couper le souffle.",
      icon: "🍂",
    },
    {
      months: "Décembre – Février",
      label: "Hiver & Ski",
      color: "#93c5fd",
      description:
        "Stations de ski de Pyeongchang et Vivaldi Park, festivals de glace et lumières de Noël à Séoul.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "seoul",
      name: "Séoul",
      region: "Région capitale",
      data: [
        { month: "Jan", temp: -2, rain: 24,  icon: "❄️" },
        { month: "Fév", temp: 1,  rain: 34,  icon: "❄️" },
        { month: "Mar", temp: 7,  rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 75,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 113, icon: "⛅" },
        { month: "Jun", temp: 23, rain: 171, icon: "⛅" },
        { month: "Jul", temp: 26, rain: 457, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 412, icon: "🌧️" },
        { month: "Sep", temp: 22, rain: 182, icon: "⛅" },
        { month: "Oct", temp: 15, rain: 62,  icon: "⛅" },
        { month: "Nov", temp: 8,  rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 1,  rain: 24,  icon: "❄️" },
      ],
    },
    {
      id: "busan",
      name: "Busan",
      region: "Sud-Est",
      data: [
        { month: "Jan", temp: 5,  rain: 25,  icon: "❄️" },
        { month: "Fév", temp: 7,  rain: 35,  icon: "❄️" },
        { month: "Mar", temp: 11, rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 80,  icon: "☀️" },
        { month: "Mai", temp: 20, rain: 90,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 150, icon: "⛅" },
        { month: "Jul", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Sep", temp: 24, rain: 165, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 12, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: 7,  rain: 25,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Séoul",
      region: "Région capitale",
      description:
        "Métropole de 10 millions d'habitants où les palais Joseon côtoient les gratte-ciels. Gastronomie de rue, K-pop, hanoks de Bukchon et shopping à Myeongdong.",
      wikipedia: "Seoul",
      tags: ["Ville", "Culture", "Shopping", "Gastronomie"],
      mustSee: [
        { name: "Gyeongbokgung — Palais royal Joseon", wikipedia: "Gyeongbokgung" },
        { name: "Village hanok de Bukchon", wikipedia: "Bukchon_Hanok_Village" },
        { name: "Marché de Gwangjang", wikipedia: "Gwangjang_Market" },
        { name: "Namsan", wikipedia: "File:Namsan_Tower_sunset,_Seoul.jpg" },
      ],
    },
    {
      id: 2,
      name: "Gyeongju",
      region: "Gyeongsang du Nord",
      description:
        "Ancienne capitale du royaume Silla pendant mille ans, surnommée le « musée à ciel ouvert ». Tumuli royaux, temples bouddhistes et Bulguksa classé UNESCO.",
      wikipedia: "File:Southern_side_of_Woljeonggyo_Bridge_illuminated_at_sunset_in_Gyeongju_South_Korea.jpg",
      tags: ["Histoire", "UNESCO", "Culture", "Temples"],
      mustSee: [
        { name: "Temple Bulguksa", wikipedia: "Bulguksa" },
        { name: "Grottes de Seokguram", wikipedia: "Seokguram" },
        { name: "Parc des tumuli de Daereungwon", wikipedia: "File:Gyeongju_-_King_Tomb_Park_-_panoramio.jpg" },
        { name: "Anapji — étang nocturne", wikipedia: "Donggung_Palace_and_Wolji_Pond" },
      ],
    },
    {
      id: 3,
      name: "Busan",
      region: "Sud-Est",
      description:
        "Deuxième ville de Corée, port dynamique avec des plages urbaines, le marché aux poissons Jagalchi et le village coloré de Gamcheon.",
      wikipedia: "Busan",
      tags: ["Plage", "Mer", "Gastronomie", "Ville"],
      mustSee: [
        { name: "Village culturel de Gamcheon", wikipedia: "Gamcheon_Culture_Village" },
        { name: "Marché Jagalchi — fruits de mer", wikipedia: "Jagalchi_Market" },
        { name: "Plage de Haeundae", wikipedia: "Haeundae_Beach" },
        { name: "Temple Haedong Yonggungsa", wikipedia: "Haedong_Yonggungsa" },
      ],
    },
    {
      id: 4,
      name: "Île de Jeju",
      region: "Jeju",
      description:
        "Île volcanique au large du sud, avec le volcan Hallasan (plus haute montagne de Corée), des falaises de lave et des plages de sable noir ou blanc.",
      wikipedia: "File:Hallasan_2.jpg",
      tags: ["Nature", "Volcan", "Plage", "Randonnée"],
      mustSee: [
        { name: "Volcan Hallasan", wikipedia: "Hallasan" },
        { name: "Chutes Cheonjiyeon", wikipedia: "File:Korea-Jeju-Cheonjiyeon_Waterfall-01.jpg" },
        { name: "Côte de Jusangjeolli", wikipedia: "File:Daepo_Jusangjeolli_Cliff_01.jpg" },
        { name: "Manjanggul — grotte de lave", wikipedia: "Manjanggul" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Corée du Sud est modérément chère, proche du niveau européen dans les villes. La street food et les restaurants de quartier restent très accessibles.",
    currency: "KRW (₩)",
    exchangeRate: "~1 400 ₩ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Jimjilbang (sauna coréen)", price: "8–12 €", detail: "Dormir sur tatami, expérience unique" },
          { label: "Dortoir hostel", price: "15–25 €", detail: "Très propres, souvent en centre-ville" },
          { label: "Guesthouse / Hanok", price: "40–80 €", detail: "Maison traditionnelle, ambiance authentique" },
          { label: "Hôtel confort", price: "60–120 €", detail: "Chambre double, bien équipée" },
          { label: "Hôtel 5 étoiles", price: "200–400 €", detail: "Lotte, Shilla, Four Seasons à Séoul" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Gimbap / tteokbokki (rue)", price: "1–3 €", detail: "En-cas de rue délicieux" },
          { label: "Restaurant de quartier (식당)", price: "5–10 €", detail: "Repas complet avec banchan inclus" },
          { label: "Korean BBQ", price: "15–25 €/pers", detail: "Samgyeopsal, galbi — expérience incontournable" },
          { label: "Café (cafés branchés)", price: "3–6 €", detail: "La Corée est le pays du café design" },
          { label: "Restaurant mid-range", price: "10–20 €", detail: "Bibimbap, japchae, jjigae" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Séoul (T-Money)", price: "1–1,50 €", detail: "Réseau exceptionnel, très ponctuel" },
          { label: "Bus urbain", price: "~1 €", detail: "Réseau complet dans toutes les villes" },
          { label: "Train KTX (TGV coréen)", price: "25–60 €", detail: "Séoul–Busan en 2h30" },
          { label: "Vol intérieur", price: "30–80 €", detail: "Séoul–Jeju, trajet le plus emprunté au monde" },
          { label: "Taxi (Kakao Taxi)", price: "3–15 €", detail: "Très pratique avec l'application" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Entrée palais (ex. Gyeongbokgung)", price: "2–4 €", detail: "Gratuit en hanbok traditionnel !" },
          { label: "Musée national de Corée", price: "Gratuit", detail: "L'un des plus grands musées d'Asie" },
          { label: "Cours de cuisine coréenne", price: "30–60 €", detail: "Kimchi, bibimbap, mandu" },
          { label: "Spa / jimjilbang premium", price: "15–30 €", detail: "Bains chauds, sauna, hammam" },
          { label: "Show K-pop (concert)", price: "40–100 €", detail: "Billets très demandés, réserver tôt" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–65 €/j", desc: "Guesthouse + street food + transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "90–150 €/j", desc: "Hôtel confort + restos mid-range + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Hôtel 5★ + gastronomie + expériences premium", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Séoul (6j) → Gyeongju (2j) → Busan (3j) → Jeju (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Séoul", amount: "500–800 €" },
            { label: "Transports intérieurs", amount: "100–150 €" },
            { label: "Hébergement (14 nuits)", amount: "300–450 €" },
            { label: "Nourriture", amount: "300–400 €" },
            { label: "Activités & imprévus", amount: "200–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Séoul", amount: "700–1 000 €" },
            { label: "Transports intérieurs", amount: "150–250 €" },
            { label: "Hébergement (14 nuits)", amount: "900–1 400 €" },
            { label: "Nourriture", amount: "700–900 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Séoul (business)", amount: "2 000–3 500 €" },
            { label: "Transferts privés", amount: "300–500 €" },
            { label: "Hébergement 5★ (14 nuits)", amount: "2 000–3 500 €" },
            { label: "Gastronomie", amount: "800–1 500 €" },
            { label: "Activités & shopping", amount: "500–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~11h direct (Korean Air, Air France)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Won coréen (₩) — retrait DAB ou bureau de change" },
    { icon: "🗣️", label: "Langue", value: "Coréen — anglais courant dans les zones touristiques" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 220V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "SIM prépayée à l'aéroport, 5G disponible partout" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable dans tout le pays" },
    { icon: "💊", label: "Santé", value: "Aucun vaccin obligatoire, excellents hôpitaux" },
  ],
};
