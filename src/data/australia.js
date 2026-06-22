export const AUSTRALIA = {
  code: "AUS",
  numericId: 36,
  name: "Australie",
  emoji: "🇦🇺",
  capital: "Canberra",
  language: "Anglais",
  currency: "Dollar australien (A$)",
  timezone: "UTC+8 à UTC+11",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2600, tripMid: 5000,
  },
  description:
    "L'Australie est un continent à elle seule : Sydney et son Opéra iconique, la Grande Barrière de Corail du Queensland, Uluru le rocher sacré, les kangourous et koalas de la brousse, Melbourne et sa scène gastronomique. Un pays immense, à l'autre bout du monde, pour des aventures inoubliables.",

  bestPeriods: [
    {
      months: "Septembre – Novembre",
      label: "Printemps austral",
      color: "#22c55e",
      description:
        "Idéal pour Sydney et Melbourne (19–24 °C). Floraisons printanières, avant les chaleurs estivales. Parfait pour les road trips.",
      icon: "🌸",
    },
    {
      months: "Avril – Juin",
      label: "Automne doux",
      color: "#fb923c",
      description:
        "Excellente période pour le sud et les grandes villes. Queensland toujours chaud et sec. Bonne période pour Uluru.",
      icon: "🍂",
    },
    {
      months: "Juin – Août",
      label: "Hiver (Nord tropical)",
      color: "#3b82f6",
      description:
        "Saison sèche parfaite pour le Queensland tropical (Cairns, Grande Barrière). Le nord est à son mieux en hiver austral.",
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "sydney",
      name: "Sydney",
      region: "Nouvelle-Galles du Sud",
      data: [
        { month: "Jan", temp: 23, rain: 100, icon: "☀️" },
        { month: "Fév", temp: 23, rain: 115, icon: "☀️" },
        { month: "Mar", temp: 21, rain: 130, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 125, icon: "☀️" },
        { month: "Mai", temp: 15, rain: 120, icon: "⛅" },
        { month: "Jun", temp: 13, rain: 130, icon: "⛅" },
        { month: "Jul", temp: 12, rain: 95,  icon: "⛅" },
        { month: "Aoû", temp: 13, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Oct", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Nov", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 75,  icon: "☀️" },
      ],
    },
    {
      id: "cairns",
      name: "Cairns",
      region: "Queensland tropical",
      data: [
        { month: "Jan", temp: 28, rain: 390, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 440, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 430, icon: "🌧️" },
        { month: "Avr", temp: 26, rain: 200, icon: "⛅" },
        { month: "Mai", temp: 24, rain: 70,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 35,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 85,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 170, icon: "🌧️" },
      ],
    },
    {
      id: "melbourne",
      name: "Melbourne",
      region: "Victoria",
      data: [
        { month: "Jan", temp: 20, rain: 47,  icon: "☀️" },
        { month: "Fév", temp: 20, rain: 47,  icon: "☀️" },
        { month: "Mar", temp: 18, rain: 52,  icon: "☀️" },
        { month: "Avr", temp: 15, rain: 57,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 10, rain: 50,  icon: "⛅" },
        { month: "Jul", temp: 9,  rain: 48,  icon: "⛅" },
        { month: "Aoû", temp: 9,  rain: 48,  icon: "⛅" },
        { month: "Sep", temp: 11, rain: 55,  icon: "⛅" },
        { month: "Oct", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Nov", temp: 16, rain: 60,  icon: "☀️" },
        { month: "Déc", temp: 18, rain: 55,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Sydney",
      region: "Nouvelle-Galles du Sud",
      description:
        "La ville la plus photographiée d'Australie avec l'Opéra de Sydney sur le port, le Harbour Bridge, les plages de Bondi et Manly, et une scène gastronomique multiculturelle.",
      wikipedia: "Sydney",
      tags: ["Ville", "Plage", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Opéra de Sydney", wikipedia: "Sydney_Opera_House" },
        { name: "Sydney Harbour Bridge — BridgeClimb", wikipedia: "Sydney_Harbour_Bridge" },
        { name: "Plage de Bondi", wikipedia: "Bondi_Beach" },
        { name: "Royal Botanic Garden", wikipedia: "Royal_Botanic_Garden,_Sydney" },
      ],
    },
    {
      id: 2,
      name: "Grande Barrière de Corail",
      region: "Queensland",
      description:
        "Le plus grand récif corallien du monde, visible depuis l'espace. Plongée et snorkeling d'exception depuis Cairns ou les îles Whitsunday, avec une faune marine extraordinaire.",
      wikipedia: "Great_Barrier_Reef",
      tags: ["Plongée", "Nature", "UNESCO", "Mer"],
      mustSee: [
        { name: "Plongée à la Grande Barrière", wikipedia: "Great_Barrier_Reef" },
        { name: "Îles Whitsunday & plage Whitehaven", wikipedia: "File:06. Whiteheaven Beach.jpg" },
        { name: "Cairns — porte d'entrée", wikipedia: "Cairns" },
        { name: "Green Island — snorkeling facile", wikipedia: "File:Main_Beach_during_COVID-19_pandemic_in_Queensland,_Australia,_04.jpg" },
      ],
    },
    {
      id: 3,
      name: "Uluru & Territoire du Nord",
      region: "Territoire du Nord",
      description:
        "Uluru, le rocher sacré des Anangu, change de couleur au lever et coucher du soleil. Le cœur spirituel rouge de l'Australie, entouré de l'Outback immense.",
      wikipedia: "Uluru",
      tags: ["Nature", "Culture aborigène", "UNESCO", "Paysage"],
      mustSee: [
        { name: "Uluru (Ayers Rock) au lever du soleil", wikipedia: "Uluru" },
        { name: "Kata Tjuta (Les Olgas)", wikipedia: "Kata_Tjuta" },
        { name: "Randonnée Base Walk (10 km)", wikipedia: "File:Petermann_Ranges_(AU),_Uluru-Kata_Tjuta_National_Park,_Uluru_--_2019_--_3688.jpg" },
      ],
    },
    {
      id: 4,
      name: "Melbourne",
      region: "Victoria",
      description:
        "Capitale culturelle de l'Australie, Melbourne est réputée pour ses arcades victoriennes, sa scène café de renommée mondiale, ses restaurants et sa vie nocturne bouillonnante.",
      wikipedia: "Melbourne",
      tags: ["Culture", "Gastronomie", "Art", "Ville"],
      mustSee: [
        { name: "Hosier Lane — street art", wikipedia: "Hosier_Lane" },
        { name: "Marché Queen Victoria", wikipedia: "Queen_Victoria_Market" },
        { name: "Great Ocean Road — 12 Apôtres", wikipedia: "Great_Ocean_Road" },
        { name: "Southbank & Federation Square", wikipedia: "Federation_Square" },
      ],
    },
    {
      id: 5,
      name: "Kimberley & Outback",
      region: "Australie-Occidentale",
      description:
        "La région la plus sauvage d'Australie avec les gorges rouges de Purnululu (Bungle Bungle), les chutes de Mitchell et une faune endémique remarquable.",
      wikipedia: "File:00 2000 Geikie Gorge - Kimberley Western Australia.jpg",
      tags: ["Nature", "Aventure", "Paysage", "Randonnée"],
      mustSee: [
        { name: "Purnululu (Bungle Bungle) — Gorges dorées", wikipedia: "Purnululu_National_Park" },
        { name: "Chutes de Mitchell", wikipedia: "File:067 Mitchell Falls Mitchell River NP VIII-2013.jpg" },
        { name: "Gorge de Windjana", wikipedia: "Windjana_Gorge" },
        { name: "Lac Argyle — lac artificiel immense", wikipedia: "Lake_Argyle" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Australie est une destination chère pour les Européens. Le coût de la vie est élevé, notamment l'hébergement dans les grandes villes. Prévoyez un budget conséquent ou optez pour le camping et les auberges.",
    currency: "AUD (A$)",
    exchangeRate: "~1,65 A$ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camping", price: "15–30 €", detail: "Excellent réseau de campings, parfois gratuit" },
          { label: "Dortoir hostel", price: "25–45 €", detail: "Parmi les plus chers du monde" },
          { label: "Hôtel confort", price: "100–200 €", detail: "Chambre double en ville" },
          { label: "Hôtel boutique", price: "150–300 €", detail: "À Sydney ou Melbourne, très bonne qualité" },
          { label: "Eco-lodge / resort luxe", price: "300–800 €", detail: "Uluru, Kakadu, Grande Barrière" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Brunch café (eggs bene)", price: "15–25 €", detail: "L'Australie a la meilleure culture café du monde" },
          { label: "Fish & chips (port)", price: "10–18 €", detail: "Avec une vue sur le port de Sydney !" },
          { label: "Supermarché (Coles, Woolworths)", price: "50–80 €/semaine", detail: "Bon rapport qualité-prix pour cuisiner" },
          { label: "Restaurant mid-range", price: "20–40 €", detail: "Cuisine multiculturelle remarquable" },
          { label: "Restaurant gastronomique", price: "80–200 €", detail: "Cuisine australienne moderne, incroyable" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro / train urbain (Opal Card)", price: "2,50–6 €", detail: "Sydney, Melbourne — réseau correct" },
          { label: "Bus longue distance (Greyhound)", price: "30–80 €", detail: "Réseau national mais lent" },
          { label: "Vol intérieur (Qantas, Virgin, Jetstar)", price: "60–200 €", detail: "Indispensable pour les grandes distances" },
          { label: "Campervan / RV (location)", price: "80–150 €/j", detail: "Mode de voyage très populaire en Australie" },
          { label: "Location de voiture", price: "40–80 €/j", detail: "Obligatoire pour l'Outback et la Grande Barrière" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Visite de l'Opéra de Sydney", price: "10–30 €", detail: "Visite guidée ou spectacle" },
          { label: "BridgeClimb (Sydney)", price: "150–250 €", detail: "Escalade du pont Harbour Bridge — vue unique" },
          { label: "Plongée (Grande Barrière de Corail)", price: "80–150 €", detail: "Tour journée depuis Cairns, tout inclus" },
          { label: "Survol Uluru en avion léger", price: "80–150 €", detail: "Vue aérienne inoubliable" },
          { label: "Great Ocean Road (visite guidée)", price: "60–100 €", detail: "Depuis Melbourne, journée complète" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Camping/hostel + cuisine maison + vols budget", color: "#22c55e" },
      { type: "Confort", daily: "180–280 €/j", desc: "Hôtel confort + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "500 €+/j", desc: "Resort 5★ + gastronomie + expériences premium", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Sydney (4j) → Melbourne (3j) → Cairns & Grande Barrière (4j) → Uluru (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 600 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Sydney", amount: "900–1 400 €" },
            { label: "Vols intérieurs (4 segments)", amount: "300–500 €" },
            { label: "Hébergement (14 nuits)", amount: "500–750 €" },
            { label: "Nourriture (supermarché + restos budget)", amount: "450–700 €" },
            { label: "Activités (Grande Barrière, Uluru)", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Sydney", amount: "1 200–2 000 €" },
            { label: "Vols intérieurs", amount: "400–700 €" },
            { label: "Hébergement (14 nuits)", amount: "1 500–2 500 €" },
            { label: "Nourriture & restaurants", amount: "1 000–1 500 €" },
            { label: "Activités & imprévus", amount: "600–1 000 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "12 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Sydney (business)", amount: "4 000–7 000 €" },
            { label: "Vols intérieurs premium", amount: "800–1 500 €" },
            { label: "Resorts & eco-lodges (14 nuits)", amount: "3 500–7 000 €" },
            { label: "Gastronomie & spa", amount: "1 500–3 000 €" },
            { label: "BridgeClimb, hélico Uluru & imprévus", amount: "1 000–2 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~22h avec 1 escale (Singapour, Dubaï, Bangkok)" },
    { icon: "🪪", label: "Visa", value: "eVisitor (ETA) en ligne obligatoire (~20 A$, immédiat)" },
    { icon: "💰", label: "Monnaie", value: "Dollar australien (A$) — cartes acceptées partout" },
    { icon: "🗣️", label: "Langue", value: "Anglais australien — aucune barrière linguistique" },
    { icon: "🔌", label: "Prise électrique", value: "Type I — 230V (adaptateur indispensable)" },
    { icon: "📱", label: "Réseau", value: "SIM prépayée (Telstra, Optus) — réseau limité dans l'Outback" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable dans toutes les villes et villages" },
    { icon: "💊", label: "Santé", value: "Aucun vaccin obligatoire — attention aux araignées et serpents venimeux !" },
  ],
};
