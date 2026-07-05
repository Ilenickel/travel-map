export const NEPAL = {
  code: "NPL",
  numericId: 524,
  name: { fr: "Népal", en: "Nepal" },
  emoji: "🇳🇵",
  capital: { fr: "Katmandou", en: "Kathmandu" },
  language: { fr: "Népalais", en: "Nepali" },
  currency: { fr: "Roupie népalaise (NPR)", en: "Nepalese rupee (NPR)" },
  timezone: "UTC+5:45",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1300,
    tripMid: 2600,
  },
  description: {
    fr: "Le Népal est le toit du monde : 8 des 14 sommets de plus de 8 000 m y sont concentrés, dont l'Everest (8 849 m). Au-delà du trekking légendaire (Annapurna, Everest Base Camp), les temples hindous et bouddhistes de Katmandou, les rhinocéros du parc national de Chitwan et les lumières spirituelles de Pokhara en font une destination d'exception.",
    en: "Nepal is the roof of the world: 8 of the 14 peaks above 8,000 m are found here, including Everest (8,849 m). Beyond the legendary trekking (Annapurna, Everest Base Camp), the Hindu and Buddhist temples of Kathmandu, the rhinos of Chitwan National Park and the spiritual light of Pokhara make it an exceptional destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Novembre", en: "October – November" },
      label: { fr: "Automne (après mousson)", en: "Autumn (post-monsoon)" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période pour le trekking : ciel bleu, vues nettes sur les Himalayas, températures agréables. Les sentiers sont bondés mais la beauté est incomparable.",
        en: "Best period for trekking: blue skies, crisp views of the Himalayas, pleasant temperatures. Trails are crowded but the beauty is unmatched.",
      },
      icon: "🏔️",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Printemps (rhododendrons)", en: "Spring (rhododendrons)" },
      color: "#f9a8d4",
      description: {
        fr: "Deuxième meilleure saison : rhododendrons en fleurs sur les sentiers, temps clair. Quelques nuages possibles en avril-mai.",
        en: "Second best season: rhododendrons blooming along the trails, clear weather. Some clouds possible in April-May.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "kathmandu",
      name: { fr: "Katmandou", en: "Kathmandu" },
      region: { fr: "Vallée de Katmandou (1 350 m)", en: "Kathmandu Valley (1,350 m)" },
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
      region: { fr: "Gandaki (porte des Annapurna)", en: "Gandaki (gateway to the Annapurnas)" },
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
      name: { fr: "Trek de l'Everest Base Camp", en: "Everest Base Camp Trek" },
      region: { fr: "Khumbu (Himalaya Est)", en: "Khumbu (Eastern Himalaya)" },
      description: {
        fr: "L'EBC est le trek iconique du monde entier : 14 jours de marche jusqu'au camp de base de l'Everest à 5 364 m. Villages sherpa, monastères perchés, glaciers et panoramas sur les 8 000 m sont au programme. Difficulté modérée avec bonne condition physique.",
        en: "The EBC is the world's iconic trek: 14 days of hiking up to Everest Base Camp at 5,364 m. Sherpa villages, cliff-perched monasteries, glaciers and panoramas of the 8,000ers await. Moderate difficulty given good physical condition.",
      },
      wikipedia: "File:Sagarmatha Trek 02.jpg",
      tags: ["trekking", "Himalaya", "altitude", "Everest"],
      mustSee: [
        { name: "Namche Bazaar", wikipedia: "Namche_Bazaar" },
        { name: "Tengboche Monastery", wikipedia: "File:Tengboche Buddhist Monastery, Nepal.jpg" },
        { name: "Kala Patthar (5 545 m)", wikipedia: "Kala_Patthar" },
        { name: { fr: "Glacier Khumbu", en: "Khumbu Glacier" }, wikipedia: "Khumbu_Glacier" },
      ],
    },
    {
      id: 2,
      name: { fr: "Circuit des Annapurna", en: "Annapurna Circuit" },
      region: { fr: "Gandaki (Himalaya Ouest)", en: "Gandaki (Western Himalaya)" },
      description: {
        fr: "Le tour des Annapurna (12–21 jours) est considéré comme l'un des plus beaux treks du monde. Le col du Thorong La (5 416 m) offre des paysages inoubliables entre paysages sub-tropicaux et plateau tibétain. Pokhara est la ville de départ.",
        en: "The Annapurna Circuit (12–21 days) is considered one of the world's most beautiful treks. Thorong La Pass (5,416 m) offers unforgettable scenery ranging from sub-tropical landscapes to the Tibetan plateau. Pokhara is the starting point.",
      },
      wikipedia: "Annapurna_Circuit",
      tags: ["trekking", "Himalaya", "altitude", "Nature"],
      mustSee: [
        { name: "Thorong La Pass (5 416 m)", wikipedia: "Thorong_La" },
        { name: "Muktinath Temple", wikipedia: "Muktinath" },
        { name: { fr: "Manang (village)", en: "Manang (village)" }, wikipedia: "Manang" },
        { name: { fr: "Poon Hill (lever de soleil)", en: "Poon Hill (sunrise)" }, wikipedia: "Poon_Hill" },
      ],
    },
    {
      id: 3,
      name: { fr: "Katmandou & Vallée", en: "Kathmandu & Valley" },
      region: { fr: "Bagmati", en: "Bagmati" },
      description: {
        fr: "La vallée de Katmandou concentre 7 zones UNESCO dont les temples de Pashupatinath (grand temple hindou crématoire), Boudhanath (grand stupa bouddhiste), Swayambhunath (temple des singes) et les palais des places Durbar.",
        en: "Kathmandu Valley concentrates 7 UNESCO sites including the Pashupatinath temple (a major Hindu cremation site), Boudhanath (a great Buddhist stupa), Swayambhunath (the monkey temple) and the palaces of the Durbar squares.",
      },
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
      name: { fr: "Parc National de Chitwan", en: "Chitwan National Park" },
      region: { fr: "Terai", en: "Terai" },
      description: {
        fr: "Le parc national de Chitwan, inscrit au patrimoine UNESCO, protège une des dernières populations de rhinocéros unicornes d'Asie et des tigres du Bengale. Les safaris en éléphant ou en jeep et les balades en pirogue sont des expériences mémorables.",
        en: "Chitwan National Park, a UNESCO World Heritage site, protects one of Asia's last populations of one-horned rhinos as well as Bengal tigers. Elephant or jeep safaris and canoe rides are memorable experiences.",
      },
      wikipedia: "Chitwan_National_Park",
      tags: ["safari", "rhinocéros", "tigres", "UNESCO"],
      mustSee: [
        { name: { fr: "Rhinocéros unicorne d'Asie", en: "Indian one-horned rhinoceros" }, wikipedia: "Indian_rhinoceros" },
        { name: { fr: "Tigre du Bengale", en: "Bengal tiger" }, wikipedia: "Bengal_tiger" },
        { name: { fr: "Balade en pirogue", en: "Canoe ride" }, wikipedia: "Chitwan_National_Park" },
        { name: { fr: "Village tharu", en: "Tharu village" }, wikipedia: "Tharu_people" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Népal est très abordable, surtout dans les villes. Le trekking entraîne des coûts supplémentaires (permits, guides, lodges). Pokhara et Katmandou sont bien équipées pour tous les budgets.",
      en: "Nepal is very affordable, especially in the cities. Trekking involves extra costs (permits, guides, lodges). Pokhara and Kathmandu are well equipped for every budget.",
    },
    currency: { fr: "Roupie népalaise (NPR)", en: "Nepalese rupee (NPR)" },
    exchangeRate: "1€ ≈ 140–150 NPR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Youth hostel dorm" }, price: "3–7 €", detail: { fr: "Katmandou, Pokhara, très répandu", en: "Kathmandu, Pokhara, very common" } },
          { label: { fr: "Tea house (lors du trek)", en: "Tea house (during trek)" }, price: "3–8 €", detail: { fr: "Chambre simple, repas en sus", en: "Simple room, meals extra" } },
          { label: { fr: "Hôtel 3★ Katmandou", en: "3★ hotel in Kathmandu" }, price: "30–70 €", detail: { fr: "Confort correct, souvent avec jardin", en: "Decent comfort, often with a garden" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Dal Bhat (plat national)", en: "Dal Bhat (national dish)" }, price: "2–4 €", detail: { fr: "Riz + lentilles + légumes, resservi à volonté", en: "Rice + lentils + vegetables, unlimited refills" } },
          { label: { fr: "Momo (raviolis népalais)", en: "Momo (Nepali dumplings)" }, price: "1,50–3 €", detail: { fr: "Vapeur ou frits, addictifs", en: "Steamed or fried, addictive" } },
          { label: { fr: "Restaurant touristique Katmandou", en: "Tourist restaurant in Kathmandu" }, price: "6–15 €", detail: { fr: "Cuisine népalaise, indienne ou internationale", en: "Nepali, Indian or international cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Katmandou–Pokhara (7h)", en: "Bus Kathmandu–Pokhara (7h)" }, price: "4–8 €", detail: { fr: "Ou vol 30 min pour 60–100 €", en: "Or a 30-min flight for 60–100 €" } },
          { label: { fr: "Vol Katmandou–Lukla (trek EBC)", en: "Flight Kathmandu–Lukla (EBC trek)" }, price: "150–200 €", detail: { fr: "A/R, avion de brousse, obligatoire", en: "Return, bush plane, mandatory" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "TIMS + permit Annapurna", en: "TIMS + Annapurna permit" }, price: "25–35 €", detail: { fr: "Obligatoires pour tous les trekks", en: "Mandatory for all treks" } },
          { label: { fr: "Guide professionnel (journée)", en: "Professional guide (day)" }, price: "20–35 €", detail: { fr: "Recommandé voire obligatoire dans certaines zones", en: "Recommended or mandatory in some areas" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Dortoir, dal bhat, bus, trekk autonome", en: "Dorm, dal bhat, bus, self-guided trekking" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "65–120 €/j", desc: { fr: "Hôtel 3★, restaurants, guide, safari Chitwan", en: "3★ hotel, restaurants, guide, Chitwan safari" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Lodge de luxe, vols intérieurs, guide privé", en: "Luxury lodge, domestic flights, private guide" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Katmandou – Pokhara – Trek Annapurna ou EBC – Chitwan", en: "Kathmandu – Pokhara – Annapurna or EBC trek – Chitwan" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 300 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Katmandou", en: "Return flight Paris–Kathmandu" }, amount: "600–850 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "180–280 €" },
            { label: { fr: "Permits + guide + transport", en: "Permits + guide + transport" }, amount: "200–320 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 600 – 3 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Katmandou", en: "Return flight Paris–Kathmandu" }, amount: "800–1 100 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Guide privé + permits + vols", en: "Private guide + permits + flights" }, amount: "500–800 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "300–450 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Katmandou (Business)", en: "Return flight Paris–Kathmandu (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 500–2 200 €" },
            { label: { fr: "Guide & porteurs privés", en: "Private guide & porters" }, amount: "600–900 €" },
            { label: { fr: "Vols intérieurs + hélicoptère", en: "Domestic flights + helicopter" }, amount: "600–1 000 €" },
            { label: { fr: "Nourriture & activités", en: "Food & activities" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~10–11h avec escale (Qatar Airways, Emirates, Turkish)", en: "~10–11h with a layover (Qatar Airways, Emirates, Turkish)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée : 30 USD (15 jours), 50 USD (30 jours), 125 USD (90 jours). Aussi disponible en e-Visa en ligne.", en: "Visa on arrival: 30 USD (15 days), 50 USD (30 days), 125 USD (90 days). Also available as an e-Visa online." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Roupie népalaise (1€ ≈ 140–150 NPR)", en: "Nepalese rupee (1€ ≈ 140–150 NPR)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Népalais (l'anglais est parlé dans le tourisme)", en: "Nepali (English spoken in tourism)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/D – 230 V (adaptateur conseillé)", en: "Type C/D – 230 V (adapter recommended)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "4G dans les villes, très limité sur les sentiers de trek", en: "4G in cities, very limited on trekking trails" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable, purification ou bouteilles indispensables en trek", en: "Not drinkable, purification or bottled water essential while trekking" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Altitude sickness (mal des montagnes) : acclimatation obligatoire, pas de montée rapide", en: "Altitude sickness: acclimatisation mandatory, no rapid ascent" } },
  ],
};
