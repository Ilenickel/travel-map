export const UZBEKISTAN = {
  code: "UZB",
  numericId: 860,
  name: "Ouzbékistan",
  emoji: "🇺🇿",
  capital: "Tachkent",
  language: "Ouzbek",
  currency: "Som ouzbek (UZS)",
  timezone: "UTC+5",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 1200, tripMid: 2200,
  },
  description:
    "L'Ouzbékistan est le cœur de la Route de la Soie. Samarcande, Boukhara et Khiva sont des villes-musées à ciel ouvert, avec leurs mosaïques de faïence turquoise, leurs minarets et leurs médersas du XIVe siècle. Une destination qui touche à l'absolu.",

  bestPeriods: [
    {
      months: "Avril – Juin",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures idéales (17–25 °C), jardins en fleurs, idéal pour visiter Samarcande, Boukhara, Khiva.",
      icon: "🌺",
    },
    {
      months: "Septembre – Octobre",
      label: "Automne doré",
      color: "#fb923c",
      description:
        "Chaleur retombée, lumière magnifique sur les mosaïques, saison des abricots et des raisins secs.",
      icon: "🏛️",
    },
  ],

  weatherCities: [
    {
      id: "samarkand",
      name: "Samarcande",
      region: "Samarcande",
      data: [
        { month: "Jan", temp: 2,  rain: 30,  icon: "❄️" },
        { month: "Fév", temp: 4,  rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 10, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 17, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Jun", temp: 28, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 30, rain: 2,   icon: "☀️" },
        { month: "Aoû", temp: 29, rain: 2,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 17, rain: 15,  icon: "☀️" },
        { month: "Nov", temp: 10, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 4,  rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "tashkent",
      name: "Tachkent",
      region: "Capitale",
      data: [
        { month: "Jan", temp: 1,  rain: 50,  icon: "❄️" },
        { month: "Fév", temp: 3,  rain: 45,  icon: "⛅" },
        { month: "Mar", temp: 9,  rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 27, rain: 8,   icon: "☀️" },
        { month: "Jul", temp: 29, rain: 3,   icon: "☀️" },
        { month: "Aoû", temp: 28, rain: 2,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 16, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 9,  rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 3,  rain: 55,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Samarcande",
      region: "Samarcande",
      description:
        "Joyau de la Route de la Soie, avec le Registan (trois médersas monumentales), le mausolée de Tamerlan (Gour-é-Amir) et les observatoires de l'astronome Oulough Beg.",
      wikipedia: "Samarkand",
      tags: ["Histoire", "Architecture", "UNESCO", "Route de la Soie", "Désert"],
      mustSee: [
        { name: "Registan — 3 médersas monumentales", wikipedia: "Registan" },
        { name: "Gour-é-Amir — tombeau de Tamerlan", wikipedia: "Gur-e-Amir" },
        { name: "Shah-i-Zinda — allée des mausolées", wikipedia: "Shah-i-Zinda" },
        { name: "Bibi-Khanym — grande mosquée", wikipedia: "Bibi-Khanym_Mosque" },
      ],
    },
    {
      id: 2,
      name: "Boukhara",
      region: "Boukhara",
      description:
        "Boukhara la Sainte conserve son centre historique médiéval presque intact, avec ses 140 monuments classés, sa forteresse Ark et son marché aux dômes couverts.",
      wikipedia: "Bukhara",
      tags: ["Histoire", "Architecture", "UNESCO", "Souks"],
      mustSee: [
        { name: "Forteresse Ark (IVe s.)", wikipedia: "Ark_of_Bukhara" },
        { name: "Minaret Kalon et mosquée", wikipedia: "File:Le_minaret_et_la_mosquée_Kalon_(Boukhara,_Ouzbékistan)_(5658826884).jpg" },
        { name: "Bazar Toqi-Zargaron", wikipedia: "Bukhara" },
        { name: "Mausolée des Samanides", wikipedia: "File:Samanid_mausoleum_bukhara.jpg" },
      ],
    },
    {
      id: 3,
      name: "Khiva",
      region: "Khorezm",
      description:
        "Khiva est la ville la mieux préservée de la Route de la Soie : son centre historique Itchan Kala est un musée à ciel ouvert, avec ses ruelles de terre et ses tours de faïence.",
      wikipedia: "Khiva",
      tags: ["Histoire", "UNESCO", "Architecture"],
      mustSee: [
        { name: "Itchan Kala (vieille ville UNESCO)", wikipedia: "Itchan_Kala" },
        { name: "Minaret Islam-Khodja", wikipedia: "File:Emin Khoja Minaret.jpg" },
        { name: "Mausolée Pakhlavan Mahmud", wikipedia: "File:Itchan Kala.jpg" },
      ],
    },
    {
      id: 4,
      name: "Tachkent",
      region: "Capitale",
      description:
        "Capitale cosmopolite rebâtie après le tremblement de terre de 1966, avec ses monuments soviétiques imposants, ses bazars colorés et sa montée en puissance gastronomique.",
      wikipedia: "Tashkent",
      tags: ["Ville", "Culture", "Gastronomie", "Architecture"],
      mustSee: [
        { name: "Bazar Tchorsu", wikipedia: "Chorsu_Bazaar" },
        { name: "Musée d'histoire de l'Ouzbékistan", wikipedia: "State_Museum_of_History_of_Uzbekistan" },
        { name: "Complexe Khast Imam", wikipedia: "File:Hazrat Imam 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Ouzbékistan est très abordable. La nourriture, l'hébergement et les transports sont peu coûteux. Les entrées des monuments sont modiques.",
    currency: "UZS",
    exchangeRate: "1€ ≈ 13 500 UZS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse traditionnelle", price: "15–30 €", detail: "Souvent avec breakfast inclus" },
          { label: "Hôtel 3★", price: "35–60 €", detail: "Confort correct" },
          { label: "Hôtel boutique 4★", price: "70–120 €", detail: "Meilleure option Samarcande" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Plov (plat national)", price: "2–4 €", detail: "Riz au mouton, incontournable" },
          { label: "Restaurant local (samsa, lagman)", price: "4–8 €", detail: "Excellent et copieux" },
          { label: "Restaurant touristique", price: "12–25 €", detail: "Terrasses des médersas" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train rapide Afrosiyob", price: "8–15 €", detail: "Tachkent–Samarcande en 2h" },
          { label: "Minibus / marshrutka", price: "1–3 €", detail: "Entre villes principales" },
          { label: "Taxi local", price: "2–5 €", detail: "Négocier le prix avant" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Registan", price: "5–8 €", detail: "Son & lumière en soirée ~10 €" },
          { label: "Visite guidée Boukhara (1j)", price: "20–40 €", detail: "Guide anglophone" },
          { label: "Stage poterie / artisanat", price: "15–30 €", detail: "Ateliers traditionnels" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–45 €/j", desc: "Guesthouse + restaurants locaux + train", color: "#22c55e" },
      { type: "Confort", daily: "65–100 €/j", desc: "Hôtel 3★ + bonnes tables + guides", color: "#3b82f6" },
      { type: "Luxe", daily: "150 €+/j", desc: "Hôtel boutique + circuit organisé + gastronomie", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Tachkent (2j) → Samarcande (3j) → Chakhrisabz (1j) → Boukhara (3j) → Khiva (3j) → Tachkent (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tachkent", amount: "450–700 €" },
            { label: "Hébergement (14 nuits)", amount: "200–400 €" },
            { label: "Nourriture", amount: "200–300 €" },
            { label: "Trains & transports", amount: "100–150 €" },
            { label: "Entrées & activités", amount: "100–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tachkent", amount: "600–900 €" },
            { label: "Hébergement (14 nuits)", amount: "700–1 100 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transports & guides", amount: "300–500 €" },
            { label: "Activités & imprévus", amount: "200–300 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tachkent (Business)", amount: "1 500–2 500 €" },
            { label: "Hébergement boutique (14 nuits)", amount: "1 400–2 200 €" },
            { label: "Gastronomie & expériences", amount: "700–1 000 €" },
            { label: "Circuit privé", amount: "600–1 000 €" },
            { label: "Artisanat & imprévus", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h (Uzbekistan Airways via Tachkent)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (30 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Som (1€ ≈ 13 500 UZS) — espèces préférées" },
    { icon: "🗣️", label: "Langue",            value: "Ouzbek (russe compris, peu d'anglais)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Couverture correcte, SIM locale ~3€" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Hépatite A recommandée, fièvre typhoïde possible" },
  ],
};
