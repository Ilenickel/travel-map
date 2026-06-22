export const NAMIBIA = {
  code: "NAM",
  numericId: 516,
  name: "Namibie",
  emoji: "🇳🇦",
  capital: "Windhoek",
  language: "Anglais, Afrikaans, Allemand",
  currency: "Dollar namibien (NAD)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2500, tripMid: 5000,
  },
  description:
    "La Namibie est le pays des superlatifs désertiques : Sossusvlei et ses dunes de sable rouge qui touchent les étoiles, le canyon de Fish River (2e au monde), le désert du Namib (le plus vieux au monde) et la faune du parc d'Etosha. Une destination pour les amoureux des grands espaces.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche & Safari",
      color: "#22c55e",
      description:
        "Meilleure saison pour l'Etosha (mai–sept.) et Sossusvlei. Ciels purs, animaux autour des points d'eau. Nuits froides dans le désert.",
      icon: "🦒",
    },
    {
      months: "Novembre – Avril",
      label: "Été & Kaokoland",
      color: "#fb923c",
      description:
        "Herbe verte, poulains zèbres, bébés éléphants. Sossusvlei moins fréquenté. Températures élevées (35°C+ désert).",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "windhoek",
      name: "Windhoek",
      region: "Khomas",
      data: [
        { month: "Jan", temp: 24, rain: 75,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 75,  icon: "☀️" },
        { month: "Avr", temp: 19, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 16, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 13, rain: 0,   icon: "⛅" },
        { month: "Jul", temp: 13, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 15, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 19, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Nov", temp: 23, rain: 45,  icon: "☀️" },
        { month: "Déc", temp: 24, rain: 65,  icon: "☀️" },
      ],
    },
    {
      id: "sossusvlei",
      name: "Sossusvlei",
      region: "Hardap",
      data: [
        { month: "Jan", temp: 32, rain: 20,  icon: "🌡️" },
        { month: "Fév", temp: 31, rain: 15,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Mai", temp: 19, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 16, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 15, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 31, rain: 15,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Sossusvlei & Dunes de Namib",
      region: "Hardap / Hardap",
      description:
        "Sossusvlei est le site le plus photographié d'Afrique : des dunes de sable rouge de 300 m s'élèvent contre un ciel bleu azur. Deadvlei, avec ses arbres morts contre les dunes orangées, est l'image la plus icônique de la Namibie.",
      wikipedia: "Sossusvlei",
      tags: ["Désert", "Photo", "Dunes", "Icône"],
      mustSee: [
        { name: "Deadvlei — arbres morts & dunes rouges", wikipedia: "Deadvlei" },
        { name: "Dune Big Daddy (325 m)", wikipedia: "Sossusvlei" },
        { name: "Lever de soleil sur les dunes", wikipedia: "File:A sunset view over piece of Namib Desert.jpg" },
        { name: "Sesriem Canyon", wikipedia: "Sesriem" },
      ],
    },
    {
      id: 2,
      name: "Parc national d'Etosha",
      region: "Oshana / Kunene",
      description:
        "Etosha est l'un des meilleurs parcs d'Afrique pour le safari en autonomie : une immense étendue saline blanche (5 000 km²) attire des centaines d'animaux aux points d'eau permanents. Lions, éléphants, rhinocéros noirs, girafes et oryx.",
      wikipedia: "Etosha_National_Park",
      tags: ["Safari", "Big Five", "Auto-safari", "Faune"],
      mustSee: [
        { name: "Point d'eau Okaukuejo (nuit)", wikipedia: "Etosha_National_Park" },
        { name: "Rhinocéros noir (espèce menacée)", wikipedia: "Black_rhinoceros" },
        { name: "Oryx — emblème de la Namibie", wikipedia: "Gemsbok" },
        { name: "Éléphants du désert", wikipedia: "African_bush_elephant" },
      ],
    },
    {
      id: 3,
      name: "Canyon Fish River",
      region: "Karas",
      description:
        "Le canyon du Fish River est le deuxième plus grand du monde après le Grand Canyon : 160 km de long, 27 km de large et 550 m de profondeur. Le trek de 5 jours (85 km) est l'une des grandes randonnées d'Afrique.",
      wikipedia: "Fish_River_Canyon",
      tags: ["Canyon", "Randonnée", "Nature", "Record"],
      mustSee: [
        { name: "Belvédère — vue sur le canyon", wikipedia: "File:Fish River Canyon Namibia.jpg" },
        { name: "Trek Fish River Canyon (5 jours)", wikipedia: "Fish_River_Canyon" },
        { name: "Quivertree Forest (Keetmanshoop)", wikipedia: "Keetmanshoop" },
      ],
    },
    {
      id: 4,
      name: "Côte des Squelettes & Swakopmund",
      region: "Erongo / Kunene",
      description:
        "Swakopmund, station balnéaire coloniale allemande dans le désert, est la capitale de l'aventure namibienne : sandboard, skydive, excursion désert. La Côte des Squelettes au nord est l'une des côtes les plus hostiles et impressionnantes au monde.",
      wikipedia: "Swakopmund",
      tags: ["Aventure", "Désert", "Colonial", "Côte"],
      mustSee: [
        { name: "Swakopmund — architecture coloniale allemande", wikipedia: "Swakopmund" },
        { name: "Skeleton Coast (phoques & naufrages)", wikipedia: "File:Namibie Skeleton Coast 01.JPG" },
        { name: "Welwitschia — plante de 2 000 ans", wikipedia: "Welwitschia" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Namibie est accessible mais les distances obligent à louer une voiture ou à passer par des lodges avec packages. Le self-drive dans les parcs nationaux est une option économique et inoubliable.",
    currency: "NAD",
    exchangeRate: "1€ ≈ 20 NAD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camp NWR (parc national)", price: "30–60 €", detail: "Camping ou bungalow dans l'Etosha" },
          { label: "Lodge touristique", price: "80–150 €", detail: "Demi-pension souvent incluse" },
          { label: "Desert lodge luxe Sossusvlei", price: "300–700 €", detail: "All-inclusive avec activités" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Potjie (ragoût local)", price: "4–8 €", detail: "Cuisine namibienne rustique" },
          { label: "Restaurant Windhoek / Swakopmund", price: "12–25 €", detail: "Viande de zèbre, crocodile, oryx" },
          { label: "Restaurant lodge (inclus)", price: "40–60 €", detail: "Dîner sous les étoiles" },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: "Transport",
        items: [
          { label: "Location 4x4 / jour", price: "60–100 €", detail: "Indispensable (pistes en sable)" },
          { label: "Vol Windhoek–Sossusvlei (30 min)", price: "150–250 €", detail: "Vs 4h de route" },
          { label: "Carburant", price: "Élevé", detail: "Stations rares, faire le plein partout" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Etosha/jour", price: "8–15 €", detail: "Auto-safari possible" },
          { label: "Entrée NamibRand/Sossusvlei", price: "8–12 €", detail: "Par véhicule + adulte" },
          { label: "Sandboard (Swakopmund)", price: "35–60 €", detail: "Demi-journée guidée" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Camping NWR + cuisine + 4x4 partagé", color: "#22c55e" },
      { type: "Confort", daily: "130–200 €/j", desc: "Lodges + demi-pension + safari auto", color: "#3b82f6" },
      { type: "Luxe", daily: "400 €+/j", desc: "Desert lodges 5★ + vols + expériences privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Windhoek (1j) → Etosha (4j) → Swakopmund (2j) → Sossusvlei (3j) → Fish River Canyon (2j) → Windhoek (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Windhoek", amount: "600–900 €" },
            { label: "Hébergement (14 nuits)", amount: "500–800 €" },
            { label: "Location 4x4 (14j)", amount: "700–1 100 €" },
            { label: "Nourriture & carburant", amount: "400–600 €" },
            { label: "Parcs & activités", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Windhoek", amount: "700–1 000 €" },
            { label: "Lodges (14 nuits)", amount: "1 500–2 500 €" },
            { label: "Location 4x4 + quelques vols intérieurs", amount: "1 000–1 500 €" },
            { label: "Nourriture & activités", amount: "700–1 200 €" },
            { label: "Parcs & guides", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Windhoek (Business)", amount: "3 000–5 000 €" },
            { label: "Desert lodges exclusifs (14 nuits)", amount: "5 000–9 000 €" },
            { label: "Vols charter privés", amount: "2 000–4 000 €" },
            { label: "Expériences premium", amount: "500 €+" },
            { label: "Extras", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12h (Air Namibia via Francfort, Lufthansa, Ethiopian)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Dollar namibien (= Rand SA, 1€ ≈ 20 NAD)" },
    { icon: "🗣️", label: "Langue",            value: "Anglais (officiel) + Afrikaans + Allemand" },
    { icon: "🔌", label: "Prise électrique",  value: "Type M (3 broches) – 220 V (adaptateur universel)" },
    { icon: "📱", label: "Réseau",            value: "Couverture villes, quasiment nulle dans le désert" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable dans les villes, eau en bouteille ailleurs" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen pour le nord (Etosha, Caprivi) — vaccin hépatite A" },
  ],
};
