export const UAE = {
  code: "ARE",
  numericId: 784,
  name: "Émirats Arabes Unis",
  emoji: "🇦🇪",
  capital: "Abou Dabi",
  language: "Arabe",
  currency: "Dirham (AED)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 200,
    tripMin: 2500, tripMid: 5000,
  },
  description:
    "Les Émirats Arabes Unis incarnent le luxe et la modernité au cœur du désert. Entre les gratte-ciels de Dubaï, la grande mosquée d'Abou Dabi, les dunes dorées du désert et les souks parfumés d'épices, les EAU offrent un contraste fascinant entre tradition et futurisme.",

  bestPeriods: [
    {
      months: "Novembre – Mars",
      label: "Saison fraîche",
      color: "#22c55e",
      description:
        "Températures idéales (20–28 °C), ciel bleu, parfait pour visiter Dubaï, Abou Dabi et faire du désert.",
      icon: "☀️",
    },
    {
      months: "Octobre – Novembre",
      label: "Transition douce",
      color: "#f59e0b",
      description:
        "Températures encore agréables (28–32 °C), foules moins importantes, tarifs plus bas.",
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "dubai",
      name: "Dubaï",
      region: "Dubai",
      data: [
        { month: "Jan", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Mai", temp: 35, rain: 1,   icon: "🌡️" },
        { month: "Jun", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 3,   icon: "⛅" },
        { month: "Déc", temp: 22, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Dubaï",
      region: "Émirat de Dubaï",
      description:
        "Métropole ultra-moderne avec la plus haute tour du monde, des centres commerciaux gigantesques, un ski en intérieur et le luxe accessible à tous les budgets.",
      wikipedia: "Dubai",
      tags: ["Ville", "Luxe", "Shopping", "Architecture", "Plage", "Gastronomie", "Histoire"],
      mustSee: [
        { name: "Burj Khalifa", wikipedia: "Burj_Khalifa" },
        { name: "Burj Al Arab", wikipedia: "Burj_Al_Arab" },
        { name: "Palm Jumeirah", wikipedia: "Palm_Jumeirah" },
        { name: "Dubai Mall", wikipedia: "Dubai_Mall" },
      ],
    },
    {
      id: 2,
      name: "Abou Dabi",
      region: "Émirat d'Abou Dabi",
      description:
        "Capitale fédérale plus tranquille que Dubaï, avec la majestueuse Grande Mosquée Sheikh Zayed, le Louvre Abu Dhabi et les circuits de F1 de Yas Island.",
      wikipedia: "Abu_Dhabi",
      tags: ["Culture", "Architecture", "Art", "Luxe", "Gastronomie"],
      mustSee: [
        { name: "Grande Mosquée Sheikh Zayed", wikipedia: "Sheikh_Zayed_Grand_Mosque" },
        { name: "Louvre Abu Dhabi", wikipedia: "Louvre_Abu_Dhabi" },
        { name: "Yas Island", wikipedia: "Yas_Island" },
      ],
    },
    {
      id: 3,
      name: "Désert & Safaris",
      region: "Intérieur",
      description:
        "Les dunes de Liwa et Al Awir offrent des safaris 4×4 inoubliables, du sandboarding et des nuits sous les étoiles dans des camps de luxe.",
      wikipedia: "Rub'_al_Khali",
      tags: ["Nature", "Aventure", "Désert", "Safari"],
      mustSee: [
        { name: "Oasis de Liwa", wikipedia: "Liwa_Oasis" },
        { name: "Dunes de l'Empty Quarter", wikipedia: "Rub'_al_Khali" },
        { name: "Hatta Mountain Reserve", wikipedia: "File:Hatta Mountain Reserve Picture 04.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Les EAU sont une destination premium. Dubaï offre cependant toutes les gammes de prix, des food courts abordables aux restaurants gastronomiques d'exception.",
    currency: "AED",
    exchangeRate: "1€ ≈ 3,90 AED",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel 3★ budget", price: "60–90 €", detail: "Zones éloignées du centre" },
          { label: "Hôtel 4★ confort", price: "120–200 €", detail: "Marina, DIFC, Downtown" },
          { label: "Hôtel 5★ luxe", price: "300–600 €", detail: "Burj Al Arab, Atlantis…" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Food court / shawarma", price: "5–10 €", detail: "Malls ou street food" },
          { label: "Restaurant mid-range", price: "25–50 €", detail: "Sans alcool souvent" },
          { label: "Restaurant gastronomique", price: "100–300 €", detail: "Chefs étoilés mondiaux" },
        ],
      },
      {
        id: "transport",
        icon: "🚇",
        label: "Transport",
        items: [
          { label: "Métro Dubaï (trajet)", price: "1–2 €", detail: "Réseau limité mais utile" },
          { label: "Taxi (tarif de base)", price: "2 € + distance", detail: "Nombreux, A/C" },
          { label: "Location voiture / jour", price: "30–60 €", detail: "Recommandé pour Abou Dabi" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Burj Khalifa (observation)", price: "25–50 €", detail: "Réservation conseillée" },
          { label: "Safari désert (demi-journée)", price: "50–90 €", detail: "4×4, dîner bédouin inclus" },
          { label: "Ski Dubai", price: "60–80 €", detail: "Ski en intérieur, unique" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Hostel + street food + transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "200–350 €/j", desc: "Hôtel 4★ + restos mid-range + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "500 €+/j", desc: "Hôtel 5★ + gastronomie + expériences premium", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Dubaï (5j) → Abou Dabi (3j) → Safari désert (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dubaï", amount: "300–500 €" },
            { label: "Hébergement (10 nuits)", amount: "600–900 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport local", amount: "150–200 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dubaï", amount: "500–800 €" },
            { label: "Hébergement (10 nuits)", amount: "1 500–2 500 €" },
            { label: "Nourriture", amount: "800–1 200 €" },
            { label: "Transport & location", amount: "400–600 €" },
            { label: "Activités & imprévus", amount: "800–1 200 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dubaï (Business)", amount: "2 000–4 000 €" },
            { label: "Hébergement 5★ (10 nuits)", amount: "4 000–7 000 €" },
            { label: "Gastronomie & expériences", amount: "2 000–4 000 €" },
            { label: "Transport premium", amount: "500–1 000 €" },
            { label: "Shopping & imprévus", amount: "1 000 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h (Emirates, Air France, Transavia)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (90 jours) — depuis 2015" },
    { icon: "💰", label: "Monnaie",           value: "Dirham (1€ ≈ 3,90 AED)" },
    { icon: "🗣️", label: "Langue",            value: "Arabe (anglais très répandu)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 220/240 V (adaptateur UK)" },
    { icon: "📱", label: "Réseau",            value: "Couverture excellente, e-SIM disponible" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non recommandée — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, soins excellents" },
  ],
};
