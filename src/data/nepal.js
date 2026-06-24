export const NEPAL = {
  code: "NPL",
  numericId: 524,
  name: "Népal",
  emoji: "🇳🇵",
  capital: "Katmandou",
  language: "Népalais",
  currency: "Roupie népalaise (NPR)",
  timezone: "UTC+5:45",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1300,
    tripMid: 2600,
  },
  description:
    "Le Népal est le toit du monde : 8 des 14 sommets de plus de 8 000 m y sont concentrés, dont l'Everest (8 849 m). Au-delà du trekking légendaire (Annapurna, Everest Base Camp), les temples hindous et bouddhistes de Katmandou, les rhinocéros du parc national de Chitwan et les lumières spirituelles de Pokhara en font une destination d'exception.",

  bestPeriods: [
    {
      months: "Octobre – Novembre",
      label: "Automne (après mousson)",
      color: "#fbbf24",
      description:
        "Meilleure période pour le trekking : ciel bleu, vues nettes sur les Himalayas, températures agréables. Les sentiers sont bondés mais la beauté est incomparable.",
      icon: "🏔️",
    },
    {
      months: "Mars – Mai",
      label: "Printemps (rhododendrons)",
      color: "#f9a8d4",
      description:
        "Deuxième meilleure saison : rhododendrons en fleurs sur les sentiers, temps clair. Quelques nuages possibles en avril-mai.",
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "kathmandu",
      name: "Katmandou",
      region: "Vallée de Katmandou (1 350 m)",
      data: [
        { month: "Jan", temp: 10, rain: 15, icon: "⛅" },
        { month: "Fév", temp: 12, rain: 30, icon: "⛅" },
        { month: "Mar", temp: 16, rain: 40, icon: "☀️" },
        { month: "Avr", temp: 19, rain: 65, icon: "☀️" },
        { month: "Mai", temp: 22, rain: 110, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 230, icon: "⛅" },
        { month: "Jul", temp: 24, rain: 370, icon: "🌧️" },
        { month: "Aoû", temp: 23, rain: 330, icon: "⛅" },
        { month: "Sep", temp: 22, rain: 220, icon: "⛅" },
        { month: "Oct", temp: 19, rain: 55, icon: "☀️" },
        { month: "Nov", temp: 14, rain: 10, icon: "⛅" },
        { month: "Déc", temp: 10, rain: 10, icon: "⛅" },
      ],
    },
    {
      id: "pokhara",
      name: "Pokhara",
      region: "Gandaki (porte des Annapurna)",
      data: [
        { month: "Jan", temp: 13, rain: 35, icon: "⛅" },
        { month: "Fév", temp: 15, rain: 45, icon: "⛅" },
        { month: "Mar", temp: 19, rain: 65, icon: "☀️" },
        { month: "Avr", temp: 22, rain: 105, icon: "☀️" },
        { month: "Mai", temp: 23, rain: 205, icon: "⛅" },
        { month: "Jun", temp: 24, rain: 430, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 720, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 640, icon: "🌧️" },
        { month: "Sep", temp: 24, rain: 440, icon: "🌧️" },
        { month: "Oct", temp: 21, rain: 125, icon: "☀️" },
        { month: "Nov", temp: 17, rain: 30, icon: "☀️" },
        { month: "Déc", temp: 14, rain: 25, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Trek de l'Everest Base Camp",
      region: "Khumbu (Himalaya Est)",
      description:
        "L'EBC est le trek iconique du monde entier : 14 jours de marche jusqu'au camp de base de l'Everest à 5 364 m. Villages sherpa, monastères perchés, glaciers et panoramas sur les 8 000 m sont au programme. Difficulté modérée avec bonne condition physique.",
      wikipedia: "File:Sagarmatha Trek 02.jpg",
      tags: ["trekking", "Himalaya", "altitude", "Everest"],
      mustSee: [
        { name: "Namche Bazaar", wikipedia: "Namche_Bazaar" },
        { name: "Tengboche Monastery", wikipedia: "File:Tengboche Buddhist Monastery, Nepal.jpg" },
        { name: "Kala Patthar (5 545 m)", wikipedia: "Kala_Patthar" },
        { name: "Glacier Khumbu", wikipedia: "Khumbu_Glacier" },
      ],
    },
    {
      id: 2,
      name: "Circuit des Annapurna",
      region: "Gandaki (Himalaya Ouest)",
      description:
        "Le tour des Annapurna (12–21 jours) est considéré comme l'un des plus beaux treks du monde. Le col du Thorong La (5 416 m) offre des paysages inoubliables entre paysages sub-tropicaux et plateau tibétain. Pokhara est la ville de départ.",
      wikipedia: "Annapurna_Circuit",
      tags: ["trekking", "Himalaya", "altitude", "Nature"],
      mustSee: [
        { name: "Thorong La Pass (5 416 m)", wikipedia: "Thorong_La" },
        { name: "Muktinath Temple", wikipedia: "Muktinath" },
        { name: "Manang (village)", wikipedia: "Manang" },
        { name: "Poon Hill (lever de soleil)", wikipedia: "Poon_Hill" },
      ],
    },
    {
      id: 3,
      name: "Katmandou & Vallée",
      region: "Bagmati",
      description:
        "La vallée de Katmandou concentre 7 zones UNESCO dont les temples de Pashupatinath (grand temple hindou crématoire), Boudhanath (grand stupa bouddhiste), Swayambhunath (temple des singes) et les palais des places Durbar.",
      wikipedia: "Kathmandu",
      tags: ["temples", "UNESCO", "hindouisme", "bouddhisme"],
      mustSee: [
        { name: "Boudhanath Stupa", wikipedia: "File:Boudhanath, Kathmandu, Nepal.jpg" },
        { name: "Pashupatinath Temple", wikipedia: "Pashupatinath_Temple" },
        { name: "Swayambhunath", wikipedia: "Swayambhunath" },
        { name: "Kathmandu Durbar Square", wikipedia: "Kathmandu_Durbar_Square" },
      ],
    },
    {
      id: 4,
      name: "Parc National de Chitwan",
      region: "Terai",
      description:
        "Le parc national de Chitwan, inscrit au patrimoine UNESCO, protège une des dernières populations de rhinocéros unicornes d'Asie et des tigres du Bengale. Les safaris en éléphant ou en jeep et les balades en pirogue sont des expériences mémorables.",
      wikipedia: "Chitwan_National_Park",
      tags: ["safari", "rhinocéros", "tigres", "UNESCO"],
      mustSee: [
        { name: "Rhinocéros unicorne d'Asie", wikipedia: "Indian_rhinoceros" },
        { name: "Tigre du Bengale", wikipedia: "Bengal_tiger" },
        { name: "Balade en pirogue", wikipedia: "Chitwan_National_Park" },
        { name: "Village tharu", wikipedia: "Tharu_people" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Népal est très abordable, surtout dans les villes. Le trekking entraîne des coûts supplémentaires (permits, guides, lodges). Pokhara et Katmandou sont bien équipées pour tous les budgets.",
    currency: "Roupie népalaise (NPR)",
    exchangeRate: "1€ ≈ 140–150 NPR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "3–7 €", detail: "Katmandou, Pokhara, très répandu" },
          { label: "Tea house (lors du trek)", price: "3–8 €", detail: "Chambre simple, repas en sus" },
          { label: "Hôtel 3★ Katmandou", price: "30–70 €", detail: "Confort correct, souvent avec jardin" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Dal Bhat (plat national)", price: "2–4 €", detail: "Riz + lentilles + légumes, resservi à volonté" },
          { label: "Momo (raviolis népalais)", price: "1,50–3 €", detail: "Vapeur ou frits, addictifs" },
          { label: "Restaurant touristique Katmandou", price: "6–15 €", detail: "Cuisine népalaise, indienne ou internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Katmandou–Pokhara (7h)", price: "4–8 €", detail: "Ou vol 30 min pour 60–100 €" },
          { label: "Vol Katmandou–Lukla (trek EBC)", price: "150–200 €", detail: "A/R, avion de brousse, obligatoire" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "TIMS + permit Annapurna", price: "25–35 €", detail: "Obligatoires pour tous les trekks" },
          { label: "Guide professionnel (journée)", price: "20–35 €", detail: "Recommandé voire obligatoire dans certaines zones" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Dortoir, dal bhat, bus, trekk autonome", color: "#22c55e" },
      { type: "Confort", daily: "65–120 €/j", desc: "Hôtel 3★, restaurants, guide, safari Chitwan", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Lodge de luxe, vols intérieurs, guide privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Katmandou – Pokhara – Trek Annapurna ou EBC – Chitwan",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 300 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Katmandou", amount: "600–850 €" },
            { label: "Hébergement (14 nuits)", amount: "150–250 €" },
            { label: "Nourriture", amount: "180–280 €" },
            { label: "Permits + guide + transport", amount: "200–320 €" },
            { label: "Activités & imprévus", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 600 – 3 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Katmandou", amount: "800–1 100 €" },
            { label: "Hébergement (14 nuits)", amount: "500–800 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Guide privé + permits + vols", amount: "500–800 €" },
            { label: "Activités & imprévus", amount: "300–450 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Katmandou (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 500–2 200 €" },
            { label: "Guide & porteurs privés", amount: "600–900 €" },
            { label: "Vols intérieurs + hélicoptère", amount: "600–1 000 €" },
            { label: "Nourriture & activités", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~10–11h avec escale (Qatar Airways, Emirates, Turkish)" },
    { icon: "🪪", label: "Visa", value: "Visa à l'arrivée : 30 USD (15 jours), 50 USD (30 jours), 125 USD (90 jours). Aussi disponible en e-Visa en ligne." },
    { icon: "💰", label: "Monnaie", value: "Roupie népalaise (1€ ≈ 140–150 NPR)" },
    { icon: "🗣️", label: "Langue", value: "Népalais (l'anglais est parlé dans le tourisme)" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/D – 230 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, très limité sur les sentiers de trek" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, purification ou bouteilles indispensables en trek" },
    { icon: "💊", label: "Santé", value: "Altitude sickness (mal des montagnes) : acclimatation obligatoire, pas de montée rapide" },
  ],
};
