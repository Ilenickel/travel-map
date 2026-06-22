export const USA = {
  code: "USA",
  numericId: 840,
  name: "États-Unis",
  emoji: "🇺🇸",
  capital: "Washington D.C.",
  language: "Anglais",
  currency: "Dollar ($)",
  timezone: "UTC-5 à UTC-10",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2500, tripMid: 4500,
  },
  description:
    "Les États-Unis offrent une diversité vertigineuse : New York et ses gratte-ciels, les parcs nationaux géants (Yellowstone, Grand Canyon, Yosemite), la Route 66, les plages de Miami, Hollywood à Los Angeles et la Nouvelle-Orléans au son du jazz. Un voyage sans fin dans un pays-continent.",

  bestPeriods: [
    {
      months: "Septembre – Novembre",
      label: "Automne",
      color: "#fb923c",
      description:
        "Idéal pour New York et la Nouvelle-Angleterre (feuillages), la côte Ouest et les parcs nationaux. Moins de foule, tarifs en baisse.",
      icon: "🍂",
    },
    {
      months: "Avril – Juin",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Parfait pour tout le pays : températures idéales, avant les chaleurs et la foule estivales. Parcs nationaux à leur mieux.",
      icon: "🌸",
    },
    {
      months: "Décembre – Mars",
      label: "Hiver & Soleil",
      color: "#3b82f6",
      description:
        "Parfait pour la Floride (Miami, Orlando), la Californie du Sud (LA, San Diego) et Hawaii. Ski dans les Rocheuses.",
      icon: "☀️",
    },
  ],

  weatherCities: [
    {
      id: "new-york",
      name: "New York",
      region: "Nord-Est",
      data: [
        { month: "Jan", temp: -1, rain: 89,  icon: "❄️" },
        { month: "Fév", temp: 0,  rain: 75,  icon: "❄️" },
        { month: "Mar", temp: 5,  rain: 100, icon: "❄️" },
        { month: "Avr", temp: 12, rain: 100, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 22, rain: 95,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 117, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 104, icon: "☀️" },
        { month: "Sep", temp: 20, rain: 97,  icon: "☀️" },
        { month: "Oct", temp: 14, rain: 88,  icon: "⛅" },
        { month: "Nov", temp: 8,  rain: 86,  icon: "⛅" },
        { month: "Déc", temp: 2,  rain: 92,  icon: "❄️" },
      ],
    },
    {
      id: "miami",
      name: "Miami",
      region: "Floride",
      data: [
        { month: "Jan", temp: 21, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 50,  icon: "☀️" },
        { month: "Mar", temp: 24, rain: 60,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 75,  icon: "☀️" },
        { month: "Mai", temp: 28, rain: 135, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 230, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 165, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 185, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 220, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 175, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 80,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 50,  icon: "☀️" },
      ],
    },
    {
      id: "los-angeles",
      name: "Los Angeles",
      region: "Californie",
      data: [
        { month: "Jan", temp: 14, rain: 75,  icon: "⛅" },
        { month: "Fév", temp: 15, rain: 75,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Avr", temp: 17, rain: 25,  icon: "☀️" },
        { month: "Mai", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 3,   icon: "☀️" },
        { month: "Jul", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 1,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 20, rain: 15,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 35,  icon: "☀️" },
        { month: "Déc", temp: 14, rain: 60,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "New York City",
      region: "Nord-Est",
      description:
        "La ville la plus iconique du monde : Central Park, Times Square, le pont de Brooklyn, les musées de classe mondiale (MoMA, Metropolitan), et une gastronomie internationale sans pareille.",
      wikipedia: "New_York_City",
      tags: ["Ville", "Culture", "Gastronomie", "Shopping"],
      mustSee: [
        { name: "Empire State Building", wikipedia: "Empire_State_Building" },
        { name: "Central Park", wikipedia: "Central_Park" },
        { name: "Pont de Brooklyn", wikipedia: "Brooklyn_Bridge" },
        { name: "MoMA — Museum of Modern Art", wikipedia: "Museum_of_Modern_Art" },
      ],
    },
    {
      id: 2,
      name: "Grand Canyon & Parcs de l'Ouest",
      region: "Sud-Ouest",
      description:
        "Le Grand Canyon, l'un des plus grands spectacles naturels du monde. Le road trip Monument Valley–Zion–Bryce Canyon–Antelope Canyon est l'expérience de voyage américaine par excellence.",
      wikipedia: "Grand_Canyon",
      tags: ["Nature", "UNESCO", "Paysage", "Road Trip"],
      mustSee: [
        { name: "Grand Canyon — South Rim", wikipedia: "Grand_Canyon" },
        { name: "Monument Valley", wikipedia: "Monument_Valley" },
        { name: "Antelope Canyon", wikipedia: "Antelope_Canyon" },
        { name: "Zion National Park", wikipedia: "Zion_National_Park" },
      ],
    },
    {
      id: 3,
      name: "Los Angeles & Californie",
      region: "Côte Ouest",
      description:
        "Hollywood, Sunset Boulevard, les plages de Santa Monica et Venice Beach, le Musée Getty, et en day-trip Malibu ou Disneyland. La Californie, c'est aussi Yosemite et Big Sur.",
      wikipedia: "Los_Angeles",
      tags: ["Ville", "Plage", "Culture", "Nature"],
      mustSee: [
        { name: "Hollywood Sign & Walk of Fame", wikipedia: "Hollywood_Walk_of_Fame" },
        { name: "Getty Center", wikipedia: "Getty_Center" },
        { name: "Yosemite National Park", wikipedia: "Yosemite_National_Park" },
        { name: "Big Sur — côte spectaculaire", wikipedia: "Big_Sur" },
      ],
    },
    {
      id: 4,
      name: "Miami & Floride",
      region: "Sud-Est",
      description:
        "Art Déco de Miami Beach, plages de sable blanc, vie nocturne trépidante de South Beach, Everglades alligators et les parcs à thème d'Orlando (Disney World, Universal).",
      wikipedia: "Miami",
      tags: ["Plage", "Culture", "Nuit", "Nature"],
      mustSee: [
        { name: "South Beach — Ocean Drive Art Deco", wikipedia: "South_Beach" },
        { name: "Parc national des Everglades", wikipedia: "Everglades_National_Park" },
        { name: "Art Basel & Wynwood Walls", wikipedia: "File:Wynwood Walls (10106520595).jpg" },
        { name: "Walt Disney World (Orlando)", wikipedia: "Walt_Disney_World" },
      ],
    },
    {
      id: 5,
      name: "Nouvelle-Orléans & Deep South",
      region: "Sud",
      description:
        "La ville du jazz, du Mardi Gras et de la gastronomie cajun. Le Vieux Carré français, Bourbon Street et les clubs de jazz font de la Nouvelle-Orléans une destination unique en Amérique.",
      wikipedia: "New_Orleans",
      tags: ["Culture", "Musique", "Gastronomie", "Histoire"],
      mustSee: [
        { name: "French Quarter — Bourbon Street", wikipedia: "French_Quarter" },
        { name: "Preservation Hall — Jazz live", wikipedia: "Preservation_Hall" },
        { name: "Croisière sur le Mississippi", wikipedia: "Mississippi_River" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Les États-Unis sont chers pour les Européens, notamment les grandes villes et les parcs nationaux. Mais la culture du roadtrip, les motels abordables et la cuisine de rue permettent de maîtriser le budget.",
    currency: "USD ($)",
    exchangeRate: "~1,10 $ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camping (parcs nationaux)", price: "15–30 €", detail: "Réservation indispensable (recreation.gov)" },
          { label: "Motel (route 66, Outback)", price: "50–90 €", detail: "Chambre double correct pour road trip" },
          { label: "Dortoir hostel", price: "30–50 €", detail: "Moins répandu qu'en Europe, mais existant" },
          { label: "Hôtel confort (villes)", price: "100–200 €", detail: "Chambre double en centre-ville" },
          { label: "Hôtel de luxe (NYC, LA, Miami)", price: "300–800 €", detail: "Four Seasons, Waldorf, boutique hôtels" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Fast food (burger + frites)", price: "8–12 €", detail: "Five Guys, In-N-Out, Shake Shack" },
          { label: "Food truck / casual dining", price: "10–18 €", detail: "Tacos mexicains, ramen, BBQ" },
          { label: "Brunch américain", price: "15–25 €", detail: "Pancakes, eggs benedict, hash browns" },
          { label: "Restaurant mid-range", price: "20–45 €", detail: "Steakhouse, seafood, cuisine du monde" },
          { label: "Restaurant gastronomique", price: "80–200 €", detail: "Tipping 20% en supplément !" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro New York (MetroCard)", price: "2,90 $", detail: "Pass 7 jours ~34 $ recommandé" },
          { label: "Greyhound (bus longue distance)", price: "30–80 €", detail: "Économique mais lent" },
          { label: "Vol intérieur (United, Delta, Southwest)", price: "60–200 €", detail: "Réserver tôt — réseau très dense" },
          { label: "Location de voiture", price: "40–90 €/j", detail: "Indispensable pour l'Ouest et le road trip" },
          { label: "Uber / Lyft", price: "8–25 €", detail: "Très pratique dans toutes les grandes villes" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Parcs nationaux (Interagency Pass)", price: "~65 € (annuel)", detail: "Accès illimité à plus de 400 parcs — indispensable !" },
          { label: "MoMA (New York)", price: "22–25 €", detail: "Gratuit le vendredi soir" },
          { label: "Empire State Building (observation)", price: "40–50 €", detail: "Vue panoramique sur Manhattan" },
          { label: "Show Broadway (New York)", price: "50–200 €", detail: "Billets au TKTS à -50% le jour même" },
          { label: "Visite guidée Grand Canyon (mule)", price: "60–200 €", detail: "Descente en mule — réservation 1 an avant !" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Camping/motel + fast food + road trip", color: "#22c55e" },
      { type: "Confort", daily: "180–280 €/j", desc: "Hôtel confort + restos mid-range + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "500 €+/j", desc: "Hôtel 5★ + gastronomie + expériences VIP", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "New York (4j) → Miami (2j) → Los Angeles (4j) → Grand Canyon / Vegas (3j) → New York (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–New York", amount: "400–700 €" },
            { label: "Vols intérieurs (NY–Miami–LA)", amount: "200–400 €" },
            { label: "Hébergement (14 nuits)", amount: "600–950 €" },
            { label: "Nourriture", amount: "600–900 €" },
            { label: "Location voiture + activités + parcs", amount: "600–950 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 500 – 6 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–New York", amount: "500–900 €" },
            { label: "Vols intérieurs", amount: "300–500 €" },
            { label: "Hébergement (14 nuits)", amount: "1 500–2 500 €" },
            { label: "Nourriture & restaurants", amount: "1 200–1 800 €" },
            { label: "Location voiture + activités + shows", amount: "800–1 300 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "10 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–New York (business)", amount: "2 000–4 000 €" },
            { label: "Vols intérieurs first class", amount: "800–1 500 €" },
            { label: "Hôtels 5★ (14 nuits)", amount: "3 500–7 000 €" },
            { label: "Gastronomie & Broadway VIP", amount: "1 500–3 000 €" },
            { label: "Expériences privées & imprévus", amount: "1 000–2 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~8h direct vers NYC, ~11h vers LA (Air France, United, Delta)" },
    { icon: "🪪", label: "Visa", value: "ESTA en ligne (~40 $ / ~37€ depuis le 30 sept. 2025, valable 2 ans) — obligatoire avant embarquement" },
    { icon: "💰", label: "Monnaie", value: "Dollar américain ($) — cartes acceptées partout, peu de liquide nécessaire" },
    { icon: "🗣️", label: "Langue", value: "Anglais américain — aucune barrière linguistique" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B — 120V (adaptateur nécessaire pour appareils 220V)" },
    { icon: "📱", label: "Réseau", value: "eSIM internationale (Airalo) ou SIM T-Mobile sur place" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable dans tout le pays" },
    { icon: "💊", label: "Santé", value: "Assurance maladie voyage OBLIGATOIRE (soins très onéreux aux USA)" },
  ],
};
