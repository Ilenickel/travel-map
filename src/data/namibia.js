export const NAMIBIA = {
  code: "NAM",
  numericId: 516,
  name: { fr: "Namibie", en: "Namibia" },
  emoji: "🇳🇦",
  capital: { fr: "Windhoek", en: "Windhoek" },
  language: { fr: "Anglais, Afrikaans, Allemand", en: "English, Afrikaans, German" },
  currency: { fr: "Dollar namibien (NAD)", en: "Namibian dollar (NAD)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2500, tripMid: 5000,
  },
  description: {
    fr: "La Namibie est le pays des superlatifs désertiques : Sossusvlei et ses dunes de sable rouge qui touchent les étoiles, le canyon de Fish River (2e au monde), le désert du Namib (le plus vieux au monde) et la faune du parc d'Etosha. Une destination pour les amoureux des grands espaces.",
    en: "Namibia is a land of desert superlatives: Sossusvlei with its red sand dunes reaching for the stars, Fish River Canyon (the world's 2nd largest), the Namib Desert (the world's oldest) and the wildlife of Etosha National Park. A destination for lovers of wide open spaces.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison sèche & Safari", en: "Dry season & Safari" },
      color: "#22c55e",
      description: {
        fr: "Meilleure saison pour l'Etosha (mai–sept.) et Sossusvlei. Ciels purs, animaux autour des points d'eau. Nuits froides dans le désert.",
        en: "Best season for Etosha (May–Sept.) and Sossusvlei. Clear skies, animals gathering at waterholes. Cold desert nights.",
      },
      icon: "🦒",
    },
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Été & Kaokoland", en: "Summer & Kaokoland" },
      color: "#fb923c",
      description: {
        fr: "Herbe verte, poulains zèbres, bébés éléphants. Sossusvlei moins fréquenté. Températures élevées (35°C+ désert).",
        en: "Green grass, zebra foals, baby elephants. Sossusvlei is less crowded. High temperatures (35°C+ in the desert).",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "windhoek",
      name: "Windhoek",
      region: { fr: "Khomas", en: "Khomas" },
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
      region: { fr: "Hardap", en: "Hardap" },
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
      name: { fr: "Sossusvlei & Dunes de Namib", en: "Sossusvlei & Namib Dunes" },
      region: { fr: "Hardap / Hardap", en: "Hardap / Hardap" },
      description: {
        fr: "Sossusvlei est le site le plus photographié d'Afrique : des dunes de sable rouge de 300 m s'élèvent contre un ciel bleu azur. Deadvlei, avec ses arbres morts contre les dunes orangées, est l'image la plus icônique de la Namibie.",
        en: "Sossusvlei is Africa's most photographed site: 300 m red sand dunes rising against an azure sky. Deadvlei, with its dead trees set against orange dunes, is Namibia's most iconic image.",
      },
      wikipedia: "Sossusvlei",
      tags: ["Désert", "Photo", "Dunes", "Icône", "UNESCO", "Nature"],
      mustSee: [
        { name: { fr: "Deadvlei — arbres morts & dunes rouges", en: "Deadvlei — dead trees & red dunes" }, wikipedia: "Deadvlei" },
        { name: { fr: "Dune Big Daddy (325 m)", en: "Big Daddy Dune (325 m)" }, wikipedia: "Sossusvlei" },
        { name: { fr: "Lever de soleil sur les dunes", en: "Sunrise over the dunes" }, wikipedia: "File:A sunset view over piece of Namib Desert.jpg" },
        { name: "Sesriem Canyon", wikipedia: "Sesriem" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc national d'Etosha", en: "Etosha National Park" },
      region: { fr: "Oshana / Kunene", en: "Oshana / Kunene" },
      description: {
        fr: "Etosha est l'un des meilleurs parcs d'Afrique pour le safari en autonomie : une immense étendue saline blanche (5 000 km²) attire des centaines d'animaux aux points d'eau permanents. Lions, éléphants, rhinocéros noirs, girafes et oryx.",
        en: "Etosha is one of Africa's best parks for self-drive safaris: a vast white salt pan (5,000 km²) draws hundreds of animals to permanent waterholes. Lions, elephants, black rhinos, giraffes and oryx.",
      },
      wikipedia: "Etosha_National_Park",
      tags: ["Safari", "Big Five", "Auto-safari", "Faune", "Nature"],
      mustSee: [
        { name: { fr: "Point d'eau Okaukuejo (nuit)", en: "Okaukuejo waterhole (night)" }, wikipedia: "Etosha_National_Park" },
        { name: { fr: "Rhinocéros noir (espèce menacée)", en: "Black rhinoceros (endangered species)" }, wikipedia: "Black_rhinoceros" },
        { name: { fr: "Oryx — emblème de la Namibie", en: "Oryx — Namibia's emblem" }, wikipedia: "Gemsbok" },
        { name: { fr: "Éléphants du désert", en: "Desert elephants" }, wikipedia: "African_bush_elephant" },
      ],
    },
    {
      id: 3,
      name: { fr: "Canyon Fish River", en: "Fish River Canyon" },
      region: { fr: "Karas", en: "Karas" },
      description: {
        fr: "Le canyon du Fish River est le deuxième plus grand du monde après le Grand Canyon : 160 km de long, 27 km de large et 550 m de profondeur. Le trek de 5 jours (85 km) est l'une des grandes randonnées d'Afrique.",
        en: "Fish River Canyon is the world's second largest after the Grand Canyon: 160 km long, 27 km wide and 550 m deep. The 5-day trek (85 km) is one of Africa's great hikes.",
      },
      wikipedia: "Fish_River_Canyon",
      tags: ["Canyon", "Randonnée", "Nature", "Record", "Désert"],
      mustSee: [
        { name: { fr: "Belvédère — vue sur le canyon", en: "Viewpoint — canyon overlook" }, wikipedia: "File:Fish River Canyon Namibia.jpg" },
        { name: { fr: "Trek Fish River Canyon (5 jours)", en: "Fish River Canyon trek (5 days)" }, wikipedia: "Fish_River_Canyon" },
        { name: { fr: "Quivertree Forest (Keetmanshoop)", en: "Quivertree Forest (Keetmanshoop)" }, wikipedia: "Keetmanshoop" },
      ],
    },
    {
      id: 4,
      name: { fr: "Côte des Squelettes & Swakopmund", en: "Skeleton Coast & Swakopmund" },
      region: { fr: "Erongo / Kunene", en: "Erongo / Kunene" },
      description: {
        fr: "Swakopmund, station balnéaire coloniale allemande dans le désert, est la capitale de l'aventure namibienne : sandboard, skydive, excursion désert. La Côte des Squelettes au nord est l'une des côtes les plus hostiles et impressionnantes au monde.",
        en: "Swakopmund, a German colonial seaside resort in the desert, is Namibia's adventure capital: sandboarding, skydiving, desert excursions. The Skeleton Coast to the north is one of the most hostile and impressive coastlines in the world.",
      },
      wikipedia: "Swakopmund",
      tags: ["Aventure", "Désert", "Colonial", "Côte", "Ville"],
      mustSee: [
        { name: { fr: "Swakopmund — architecture coloniale allemande", en: "Swakopmund — German colonial architecture" }, wikipedia: "Swakopmund" },
        { name: { fr: "Skeleton Coast (phoques & naufrages)", en: "Skeleton Coast (seals & shipwrecks)" }, wikipedia: "File:Namibie Skeleton Coast 01.JPG" },
        { name: { fr: "Welwitschia — plante de 2 000 ans", en: "Welwitschia — 2,000-year-old plant" }, wikipedia: "Welwitschia" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Namibie est accessible mais les distances obligent à louer une voiture ou à passer par des lodges avec packages. Le self-drive dans les parcs nationaux est une option économique et inoubliable.",
      en: "Namibia is affordable, but the distances involved mean renting a car or booking lodge packages. Self-driving through the national parks is an unforgettable, budget-friendly option.",
    },
    currency: "NAD",
    exchangeRate: "1€ ≈ 20 NAD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Camp NWR (parc national)", en: "NWR camp (national park)" }, price: "30–60 €", detail: { fr: "Camping ou bungalow dans l'Etosha", en: "Camping or bungalow in Etosha" } },
          { label: { fr: "Lodge touristique", en: "Tourist lodge" }, price: "80–150 €", detail: { fr: "Demi-pension souvent incluse", en: "Half-board often included" } },
          { label: { fr: "Desert lodge luxe Sossusvlei", en: "Luxury desert lodge Sossusvlei" }, price: "300–700 €", detail: { fr: "All-inclusive avec activités", en: "All-inclusive with activities" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Potjie (ragoût local)", en: "Potjie (local stew)" }, price: "4–8 €", detail: { fr: "Cuisine namibienne rustique", en: "Rustic Namibian cuisine" } },
          { label: { fr: "Restaurant Windhoek / Swakopmund", en: "Restaurant in Windhoek / Swakopmund" }, price: "12–25 €", detail: { fr: "Viande de zèbre, crocodile, oryx", en: "Zebra, crocodile, oryx meat" } },
          { label: { fr: "Restaurant lodge (inclus)", en: "Lodge restaurant (included)" }, price: "40–60 €", detail: { fr: "Dîner sous les étoiles", en: "Dinner under the stars" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Location 4x4 / jour", en: "4x4 rental / day" }, price: "60–100 €", detail: { fr: "Indispensable (pistes en sable)", en: "Essential (sandy tracks)" } },
          { label: { fr: "Vol Windhoek–Sossusvlei (30 min)", en: "Flight Windhoek–Sossusvlei (30 min)" }, price: "150–250 €", detail: { fr: "Vs 4h de route", en: "Vs 4h by road" } },
          { label: { fr: "Carburant", en: "Fuel" }, price: "Élevé", detail: { fr: "Stations rares, faire le plein partout", en: "Stations are scarce, fill up whenever possible" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Etosha/jour", en: "Etosha entrance/day" }, price: "8–15 €", detail: { fr: "Auto-safari possible", en: "Self-drive safari possible" } },
          { label: { fr: "Entrée NamibRand/Sossusvlei", en: "NamibRand/Sossusvlei entrance" }, price: "8–12 €", detail: { fr: "Par véhicule + adulte", en: "Per vehicle + adult" } },
          { label: { fr: "Sandboard (Swakopmund)", en: "Sandboarding (Swakopmund)" }, price: "35–60 €", detail: { fr: "Demi-journée guidée", en: "Half-day guided" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Camping NWR + cuisine + 4x4 partagé", en: "NWR camping + cooking + shared 4x4" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "130–200 €/j", desc: { fr: "Lodges + demi-pension + safari auto", en: "Lodges + half-board + self-drive safari" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "400 €+/j", desc: { fr: "Desert lodges 5★ + vols + expériences privées", en: "5★ desert lodges + flights + private experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Windhoek (1j) → Etosha (4j) → Swakopmund (2j) → Sossusvlei (3j) → Fish River Canyon (2j) → Windhoek (2j)",
        en: "Windhoek (1d) → Etosha (4d) → Swakopmund (2d) → Sossusvlei (3d) → Fish River Canyon (2d) → Windhoek (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Windhoek", en: "Return flight Paris–Windhoek" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "500–800 €" },
            { label: { fr: "Location 4x4 (14j)", en: "4x4 rental (14d)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture & carburant", en: "Food & fuel" }, amount: "400–600 €" },
            { label: { fr: "Parcs & activités", en: "Parks & activities" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Windhoek", en: "Return flight Paris–Windhoek" }, amount: "700–1 000 €" },
            { label: { fr: "Lodges (14 nuits)", en: "Lodges (14 nights)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Location 4x4 + quelques vols intérieurs", en: "4x4 rental + a few domestic flights" }, amount: "1 000–1 500 €" },
            { label: { fr: "Nourriture & activités", en: "Food & activities" }, amount: "700–1 200 €" },
            { label: { fr: "Parcs & guides", en: "Parks & guides" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Windhoek (Business)", en: "Return flight Paris–Windhoek (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Desert lodges exclusifs (14 nuits)", en: "Exclusive desert lodges (14 nights)" }, amount: "5 000–9 000 €" },
            { label: { fr: "Vols charter privés", en: "Private charter flights" }, amount: "2 000–4 000 €" },
            { label: { fr: "Expériences premium", en: "Premium experiences" }, amount: "500 €+" },
            { label: { fr: "Extras", en: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~12h (Air Namibia via Francfort, Lufthansa, Ethiopian)", en: "~12h (Air Namibia via Frankfurt, Lufthansa, Ethiopian)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar namibien (= Rand SA, 1€ ≈ 20 NAD)", en: "Namibian dollar (= SA Rand, 1€ ≈ 20 NAD)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (officiel) + Afrikaans + Allemand", en: "English (official) + Afrikaans + German" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type M (3 broches) – 220 V (adaptateur universel)", en: "Type M (3 pins) – 220 V (universal adapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture villes, quasiment nulle dans le désert", en: "City coverage, almost none in the desert" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable dans les villes, eau en bouteille ailleurs", en: "Drinkable in cities, bottled water elsewhere" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen pour le nord (Etosha, Caprivi) — vaccin hépatite A", en: "Antimalarials for the north (Etosha, Caprivi) — hepatitis A vaccine" } },
  ],
};
