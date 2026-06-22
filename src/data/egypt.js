export const EGYPT = {
  code: "EGY",
  numericId: 818,
  name: "Égypte",
  emoji: "🇪🇬",
  capital: "Le Caire",
  language: "Arabe",
  currency: "Livre égyptienne (EGP)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1100, tripMid: 2000,
  },
  description:
    "L'Égypte est le pays des pharaons et de l'une des plus grandes civilisations de l'Histoire. Les pyramides de Gizeh, la magie du Sphinx, les temples de Louxor et Karnak sur le Nil, la mer Rouge cristalline d'Hurghada et Charm el-Cheikh — une destination d'exception.",

  bestPeriods: [
    {
      months: "Octobre – Avril",
      label: "Saison fraîche",
      color: "#22c55e",
      description:
        "Températures idéales pour visiter les sites (20–28 °C). Meilleure période pour Le Caire, Louxor, Assouan et la croisière sur le Nil.",
      icon: "🏺",
    },
    {
      months: "Novembre – Février",
      label: "Mer Rouge douce",
      color: "#3b82f6",
      description:
        "Plongée et snorkeling parfaits à Hurghada et Charm el-Cheikh, températures clémentes (25–28 °C en mer).",
      icon: "🤿",
    },
    {
      months: "Juin – Août",
      label: "Mer Rouge & Plages",
      color: "#fb923c",
      description:
        "Très chaud dans les terres (40°C+) mais la mer Rouge reste agréable. Tarifs plus bas en haute saison estivale.",
      icon: "☀️",
    },
  ],

  weatherCities: [
    {
      id: "cairo",
      name: "Le Caire",
      region: "Basse-Égypte",
      data: [
        { month: "Jan", temp: 14, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 15, rain: 9,   icon: "☀️" },
        { month: "Mar", temp: 18, rain: 13,  icon: "☀️" },
        { month: "Avr", temp: 21, rain: 1,   icon: "☀️" },
        { month: "Mai", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Jun", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Jul", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Nov", temp: 20, rain: 3,   icon: "☀️" },
        { month: "Déc", temp: 15, rain: 6,   icon: "☀️" },
      ],
    },
    {
      id: "luxor",
      name: "Louxor",
      region: "Haute-Égypte",
      data: [
        { month: "Jan", temp: 14, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Avr", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Mai", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Nov", temp: 23, rain: 0,   icon: "☀️" },
        { month: "Déc", temp: 16, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "hurghada",
      name: "Hurghada",
      region: "Mer Rouge",
      data: [
        { month: "Jan", temp: 18, rain: 2,   icon: "☀️" },
        { month: "Fév", temp: 19, rain: 2,   icon: "☀️" },
        { month: "Mar", temp: 22, rain: 1,   icon: "☀️" },
        { month: "Avr", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Jun", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Nov", temp: 23, rain: 2,   icon: "☀️" },
        { month: "Déc", temp: 19, rain: 3,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Le Caire & Pyramides de Gizeh",
      region: "Basse-Égypte",
      description:
        "La mégapole de 20 millions d'habitants avec les pyramides de Gizeh, les seules Merveilles antiques encore debout, le Sphinx et le Grand Musée Égyptien.",
      wikipedia: "Cairo",
      tags: ["Histoire", "UNESCO", "Culture", "Archéologie"],
      mustSee: [
        { name: "Pyramides de Gizeh & Sphinx", wikipedia: "Giza_pyramid_complex" },
        { name: "Grand Musée Égyptien", wikipedia: "File:Grand Egyptian Museum 2025 (90006).jpg" },
        { name: "Khan el-Khalili — bazar du Caire", wikipedia: "Khan_el-Khalili" },
        { name: "Mosquée Al-Azhar & vieux Caire", wikipedia: "Al-Azhar_Mosque" },
      ],
    },
    {
      id: 2,
      name: "Louxor & Karnak",
      region: "Haute-Égypte",
      description:
        "L'ancienne Thèbes, capitale de l'Égypte pharaonique. Le temple de Karnak, le plus grand complexe religieux antique du monde, et la Vallée des Rois avec les tombeaux des pharaons.",
      wikipedia: "Luxor",
      tags: ["Histoire", "UNESCO", "Archéologie", "Culture"],
      mustSee: [
        { name: "Temple de Karnak", wikipedia: "Karnak" },
        { name: "Vallée des Rois — tombeau de Toutânkhamon", wikipedia: "Valley_of_the_Kings" },
        { name: "Temple de Louxor de nuit", wikipedia: "Luxor_Temple" },
        { name: "Colosses de Memnon", wikipedia: "Colossi_of_Memnon" },
      ],
    },
    {
      id: 3,
      name: "Croisière sur le Nil",
      region: "Nil",
      description:
        "La croisière Louxor–Assouan (4–7 jours) est l'une des expériences de voyage les plus mythiques. Les temples se succèdent sur les rives du Nil, entre palmiers et désert.",
      wikipedia: "Nile",
      tags: ["Croisière", "Histoire", "Paysage", "Temples"],
      mustSee: [
        { name: "Temple d'Edfou — mieux conservé d'Égypte", wikipedia: "Edfu" },
        { name: "Temple de Kom Ombo", wikipedia: "Kom_Ombo" },
        { name: "Assouan & Île Éléphantine", wikipedia: "Aswan" },
        { name: "Abou Simbel — temples de Ramsès II", wikipedia: "File:Abu Simbel Temple from Nefertari Temple 03.jpg" },
      ],
    },
    {
      id: 4,
      name: "Mer Rouge — Hurghada & Charm",
      region: "Mer Rouge",
      description:
        "Les meilleures plages et sites de plongée de la Méditerranée orientale : coraux de rêve, dauphins et requins de récif dans une eau cristalline toute l'année.",
      wikipedia: "File:Red Sea Sunrise BWP.jpg",
      tags: ["Plage", "Plongée", "Snorkeling", "Détente"],
      mustSee: [
        { name: "Récif de corail de Hurghada", wikipedia: "Hurghada" },
        { name: "Charm el-Cheikh — snorkeling Ras Mohammed", wikipedia: "File:Coral Bay, Sharm-El-Sheikh.jpg" },
        { name: "Île de Giftun", wikipedia: "File:Beach of giftun island.JPG" },
        { name: "Mer Rouge — plongée avec les requins", wikipedia: "File:Nuweiba, Mountains by Red Sea, Sinai, Egypt.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Égypte est l'une des destinations les moins chères du bassin méditerranéen. La livre égyptienne s'est beaucoup dévaluée, rendant le pays très accessible pour les touristes européens.",
    currency: "EGP (£E)",
    exchangeRate: "~50 EGP = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse (budget)", price: "5–12 €", detail: "Simple mais fonctionnel, souvent bien situé" },
          { label: "Hôtel confort", price: "20–50 €", detail: "Chambre double climatisée, petit-déj inclus" },
          { label: "Resort Mer Rouge (3★)", price: "40–80 €", detail: "Formule all-inclusive courante et avantageuse" },
          { label: "Croisière Nil (cabine double, 4j)", price: "150–300 €", detail: "Tout inclus, repas et excursions" },
          { label: "Resort 5 étoiles Mer Rouge", price: "80–250 €", detail: "All-inclusive, accès plage privée" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Ful medames + aish (pain pita)", price: "0,50–1 €", detail: "Petit-déjeuner égyptien traditionnel" },
          { label: "Koshary (street food)", price: "0,50–1 €", detail: "Plat national — pâtes, lentilles, tomate" },
          { label: "Restaurant local", price: "3–7 €", detail: "Kebab, kofta, molokhia" },
          { label: "Restaurant touristique", price: "8–20 €", detail: "Vue sur les pyramides ou le Nil" },
          { label: "Café égyptien (ahwa)", price: "0,50–1,50 €", detail: "Café turc ou thé à la menthe" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi (négocié ou appli)", price: "1–5 €", detail: "Uber disponible au Caire" },
          { label: "Métro du Caire", price: "0,10–0,20 €", detail: "Très économique, évite les embouteillages" },
          { label: "Bus longue distance", price: "5–15 €", detail: "Le Caire–Louxor en bus de nuit" },
          { label: "Vol intérieur (EgyptAir)", price: "30–80 €", detail: "Le Caire–Louxor en 1h" },
          { label: "Calèche (Louxor)", price: "2–5 €", detail: "Transport local traditionnel à Louxor" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Pyramides de Gizeh + entrée", price: "10–20 €", detail: "Accès intérieur pyramide en supplément" },
          { label: "Grand Musée Égyptien", price: "15–25 €", detail: "Nouvelle institution ouverte en 2024" },
          { label: "Temple de Karnak", price: "8–12 €", detail: "Son et lumière disponible le soir" },
          { label: "Abou Simbel (vol depuis Assouan)", price: "80–120 €", detail: "Vol + entrée, inoubliable !" },
          { label: "Plongée (Mer Rouge)", price: "30–60 €", detail: "2 plongées avec guide, équipement inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse + street food + transports locaux", color: "#22c55e" },
      { type: "Confort", daily: "70–120 €/j", desc: "Hôtel confort + croisière + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Resort all-inclusive + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Le Caire & Pyramides (3j) → Louxor (2j) → Croisière Nil (4j) → Assouan (1j) → Hurghada/Charm (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Le Caire", amount: "200–400 €" },
            { label: "Vols intérieurs & transports", amount: "100–180 €" },
            { label: "Hébergement (14 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "150–280 €" },
            { label: "Activités & sites", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Le Caire", amount: "250–500 €" },
            { label: "Vols intérieurs", amount: "150–250 €" },
            { label: "Hôtels + croisière Nil (14 nuits)", amount: "600–1 000 €" },
            { label: "Nourriture & restaurants", amount: "400–600 €" },
            { label: "Activités & imprévus", amount: "350–550 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "4 500 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Le Caire (business)", amount: "1 000–2 500 €" },
            { label: "Vols privés & transferts", amount: "400–700 €" },
            { label: "Croisière luxe + resort 5★ (14 nuits)", amount: "1 500–3 000 €" },
            { label: "Gastronomie & expériences", amount: "500–900 €" },
            { label: "Guides privés & Abou Simbel", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~5h direct (EgyptAir, Air France, Transavia)" },
    { icon: "🪪", label: "Visa", value: "e-Visa en ligne (~25 $) ou à l'arrivée (25 $)" },
    { icon: "💰", label: "Monnaie", value: "Livre égyptienne (EGP) — retrait DAB recommandé, taux très favorable" },
    { icon: "🗣️", label: "Langue", value: "Arabe — anglais et français dans les zones touristiques" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 220V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "SIM locale très bon marché (Vodafone, Orange Egypt)" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille absolument nécessaire" },
    { icon: "💊", label: "Santé", value: "Vaccin hépatite A recommandé, crème solaire indispensable, éviter le porc" },
  ],
};
