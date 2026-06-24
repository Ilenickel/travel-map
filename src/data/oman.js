export const OMAN = {
  code: "OMN",
  numericId: 512,
  name: "Oman",
  emoji: "🇴🇲",
  capital: "Mascate",
  language: "Arabe",
  currency: "Rial omanais (OMR)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 55, budgetMid: 120,
    tripMin: 1800, tripMid: 3500,
  },
  description:
    "Oman est le pays le plus authentique et sûr du Golfe. Déserts de sable fins (Wahiba), montagnes vertigineuses (Jebel Akhdar), côtes sauvages où pondent les tortues marines, vieilles fortresses et la chaleur légendaire de l'hospitalité omanaise.",

  bestPeriods: [
    {
      months: "Octobre – Avril",
      label: "Saison fraîche",
      color: "#22c55e",
      description:
        "Températures idéales (20–30 °C). Haute saison pour le désert, les montagnes et la plongée à Musandam.",
      icon: "☀️",
    },
    {
      months: "Juin – Septembre",
      label: "Khareef (mousson Dhofar)",
      color: "#3b82f6",
      description:
        "La région de Salalah reçoit une mousson unique, transformant le désert en oasis verte. Phénomène rare dans la péninsule arabique.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "muscat",
      name: "Mascate",
      region: "Mascate",
      data: [
        { month: "Jan", temp: 21, rain: 25,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Mai", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Nov", temp: 25, rain: 10,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 20,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Mascate",
      region: "Mascate",
      description:
        "Capitale propre et ordonnée, avec la grandiose mosquée du Sultan Qaboos (l'une des plus grandes du monde), le souk Mutrah aux mille senteurs et la corniche longeant la mer d'Oman.",
      wikipedia: "Muscat",
      tags: ["Ville", "Architecture", "Culture", "Souks", "Histoire", "UNESCO", "Gastronomie"],
      mustSee: [
        { name: "Grande Mosquée Sultan Qaboos", wikipedia: "Sultan_Qaboos_Grand_Mosque" },
        { name: "Souk Mutrah", wikipedia: "File:Muttrah (4).jpg" },
        { name: "Fort Bahla", wikipedia: "Bahla_Fort" },
      ],
    },
    {
      id: 2,
      name: "Désert des Wahiba (Sharqiyah Sands)",
      region: "Sharqiyah",
      description:
        "Mer de dunes aux couleurs or et rouge, avec des camps de tente de luxe ou des bivouacs chez les Bédouins. Randonnées en dromadaire et nuits étoilées.",
      wikipedia: "File:Wahiba Sands (7).jpg",
      tags: ["Désert", "Aventure", "Nature"],
      mustSee: [
        { name: "Dunes de sable rouge", wikipedia: "File:Wahiba Sands (7).jpg" },
        { name: "Balades en dromadaire", wikipedia: "Camel_racing" },
        { name: "Wadi Bani Khalid (oasis)", wikipedia: "Wadi_Bani_Khalid" },
      ],
    },
    {
      id: 3,
      name: "Jebel Akhdar — Montagne Verte",
      region: "Al-Dakhiliyah",
      description:
        "Plateau montagneux à 2 000 m d'altitude avec des microclimats uniques, des terrasses cultivées de rosiers (essence de rose mondialement connue) et des villages perchés.",
      wikipedia: "File:Dschabal_Mischt_(Jebel_Misht,_Kamm-Berg),_Oman_-_Hadschar-Gebirge_01.jpg",
      tags: ["Nature", "Randonnée", "Villages", "Altitude"],
      mustSee: [
        { name: "Terasses de Wadi Ghul (Grand Canyon d'Oman)", wikipedia: "Jebel_Shams" },
        { name: "Village de Nizwa & souq", wikipedia: "Nizwa" },
        { name: "Plantation de roses (avril)", wikipedia: "File:Ras_Ash,_small_mountain_village_located_in_the_Hajar_Mountains.jpg" },
      ],
    },
    {
      id: 4,
      name: "Wadi Shab & Côte Est",
      region: "Sharqiyah",
      description:
        "Wadi Shab est l'un des plus beaux canyons d'Oman, avec des piscines naturelles turquoise et une grotte secrète cachée sous une cascade.",
      wikipedia: "File:Wadi Oman.jpg",
      tags: ["Nature", "Randonnée", "Mer"],
      mustSee: [
        { name: "Baignade dans les piscines du Wadi Shab", wikipedia: "File:Tiwi, wadi shabt, 01.jpg" },
        { name: "Plage de Fins (tortues vertes)", wikipedia: "File:Ras Al Jinz turtle reserve (14746801408).jpg" },
        { name: "Péninsule de Musandam (fjords)", wikipedia: "File:Musandam Peninsula aerial.webp" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Oman est moins cher que Dubaï mais reste une destination premium. Location de voiture indispensable pour explorer le pays.",
    currency: "OMR",
    exchangeRate: "1€ ≈ 0,42 OMR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / budget", price: "25–45 €", detail: "Intérieur, loin du littoral" },
          { label: "Hôtel 3–4★", price: "60–120 €", detail: "Standard Mascate" },
          { label: "Desert Camp luxe", price: "150–300 €", detail: "Dîner étoilé inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Shuwa / shawarma local", price: "2–5 €", detail: "Agneau cuit en fosse, délicieux" },
          { label: "Restaurant local", price: "8–15 €", detail: "Restaurants de quartier" },
          { label: "Restaurant hôtel/touristique", price: "25–50 €", detail: "Mascate, Salalah" },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: "Transport",
        items: [
          { label: "Location 4×4 / jour", price: "40–70 €", detail: "Obligatoire pour wadis et désert" },
          { label: "Taxi Mascate (Uber)", price: "3–8 €", detail: "Courses urbaines" },
          { label: "Vol Mascate–Salalah", price: "60–120 €", detail: "Gain de temps (1h vs 12h route)" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Safari Wahiba Sands (1j)", price: "60–100 €", detail: "4×4, dunes, camp" },
          { label: "Plongée/snorkeling Musandam", price: "50–80 €", detail: "Dauphins et coraux" },
          { label: "Trek Jebel Akhdar", price: "40–80 €/j", detail: "Guide local recommandé" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "55–80 €/j", desc: "Guesthouses + restaurants locaux + location 4×4 partagée", color: "#22c55e" },
      { type: "Confort", daily: "120–180 €/j", desc: "Hôtel 4★ + bonnes tables + excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Resorts + camps désert + expériences exclusives", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Mascate (2j) → Jebel Akhdar (2j) → Nizwa & forts (2j) → Wahiba Sands (2j) → Wadi Shab (2j) → Musandam (2j) → Mascate (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mascate", amount: "400–600 €" },
            { label: "Hébergement (14 nuits)", amount: "450–700 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Location 4×4", amount: "400–600 €" },
            { label: "Activités & imprévus", amount: "250–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mascate", amount: "500–800 €" },
            { label: "Hébergement (14 nuits)", amount: "1 100–1 800 €" },
            { label: "Nourriture", amount: "600–900 €" },
            { label: "Location 4×4 + guides", amount: "700–1 100 €" },
            { label: "Activités & excursions", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mascate (Business)", amount: "2 000–3 500 €" },
            { label: "Hébergement premium (14 nuits)", amount: "2 500–4 000 €" },
            { label: "Gastronomie & expériences", amount: "1 000–2 000 €" },
            { label: "Circuit privé", amount: "1 000–1 500 €" },
            { label: "Activités exclusives", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~7h (Oman Air direct, Air France via escale)" },
    { icon: "🪪", label: "Visa",              value: "e-Visa en ligne (~20 €, 30 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Rial omanais (1€ ≈ 0,42 OMR)" },
    { icon: "🗣️", label: "Langue",            value: "Arabe (anglais bien répandu)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 240 V (comme UK)" },
    { icon: "📱", label: "Réseau",            value: "Très bonne couverture, e-SIM disponible" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non recommandée — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, soins excellents" },
  ],
};
