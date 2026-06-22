export const ESWATINI = {
  code: "SWZ",
  numericId: 748,
  name: "Eswatini",
  emoji: "🇸🇿",
  capital: "Mbabane",
  language: "Swati, Anglais",
  currency: "Lilangeni (SZL)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 900, tripMid: 1800,
  },
  description:
    "L'Eswatini (anciennement Swaziland) est un petit royaume montagneux enclavé entre l'Afrique du Sud et le Mozambique, l'une des dernières monarchies absolues d'Afrique. Ce pays méconnu offre des parcs naturels avec rhinocéros blancs et éléphants, une culture swazi vivante avec la cérémononie Reed Dance (Umhlanga), et des paysages verdoyants d'une grande beauté.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Saison sèche & Safari",
      color: "#22c55e",
      description:
        "Saison sèche : végétation basse idéale pour observer la faune dans Hlane, températures agréables (15–24°C), randonnées dans les montagnes. Nuits fraîches dans les hauts plateaux.",
      icon: "🦏",
    },
    {
      months: "Août – Septembre",
      label: "Umhlanga (Reed Dance)",
      color: "#8b5cf6",
      description:
        "La cérémonie Umhlanga rassemble des dizaines de milliers de jeunes femmes swazies portant des roseaux au palais royal. L'un des spectacles culturels les plus impressionnants d'Afrique australe.",
      icon: "🎋",
    },
  ],

  weatherCities: [
    {
      id: "mbabane",
      name: "Mbabane",
      region: "Hhohho (Hauts Plateaux, 1 243m)",
      data: [
        { month: "Jan", temp: 20, rain: 175, icon: "⛅" },
        { month: "Fév", temp: 20, rain: 155, icon: "⛅" },
        { month: "Mar", temp: 19, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Mai", temp: 15, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 12, rain: 20,  icon: "⛅" },
        { month: "Jul", temp: 12, rain: 15,  icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 25,  icon: "⛅" },
        { month: "Sep", temp: 17, rain: 45,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Nov", temp: 19, rain: 120, icon: "☀️" },
        { month: "Déc", temp: 20, rain: 165, icon: "⛅" },
      ],
    },
    {
      id: "big_bend",
      name: "Big Bend",
      region: "Lubombo (Basse Vallée)",
      data: [
        { month: "Jan", temp: 28, rain: 100, icon: "⛅" },
        { month: "Fév", temp: 27, rain: 95,  icon: "⛅" },
        { month: "Mar", temp: 26, rain: 80,  icon: "☀️" },
        { month: "Avr", temp: 24, rain: 45,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 55,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 85,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 105, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Hlane Royal National Park",
      region: "Province de Lubombo",
      description:
        "Hlane est le plus grand parc national d'Eswatini et abrite les Big Five (éléphants, rhinocéros blancs, lions, léopards, buffles), une rareté pour un si petit pays. Le parc, propriété de la famille royale swazi, offre des safaris en 4x4 et des randonnées guidées à pied près des rhinocéros. Les populations d'éléphants et de rhinocéros blancs y sont remarquablement accessibles.",
      wikipedia: "Hlane_Royal_National_Park",
      tags: ["Safari", "Rhinocéros", "Éléphants", "Big Five"],
      mustSee: [
        { name: "Zone des rhinocéros blancs — approche en safari à pied possible", wikipedia: "File:Hlane_Royal_National_Park_banner_White_Rhinos_wallowing_and_resting_in_the_bushes.jpg" },
        { name: "Zone des lions — lions introduits dans le parc", wikipedia: "File:04.20_總統參訪_Hlane_Royal_National_Park_(40954029404).jpg" },
      ],
    },
    {
      id: 2,
      name: "Mlilwane Wildlife Sanctuary",
      region: "Province de Manzini",
      description:
        "Mlilwane est la réserve animalière la plus ancienne et la plus accessible d'Eswatini, idéalement située près de la capitale Mbabane. On peut y faire du vélo, de l'équitation et des randonnées à pied parmi les antilopes, zèbres, hippopotames et oiseaux. L'absence de prédateurs en fait un endroit parfait pour explorer à pied en toute sécurité, une expérience unique en Afrique australe.",
      wikipedia: "Mlilwane_Wildlife_Sanctuary",
      tags: ["Nature", "Randonnée", "Équitation", "Famille"],
      mustSee: [
        { name: "Randonnée à pied entre les zèbres et antilopes", wikipedia: "File:Plains zebra in Mlilwane Wildlife Sanctuary 02.jpg" },
        { name: "Hippo Haunt — observation des hippopotames", wikipedia: "File:Hippo Swaziland.jpg" },
        { name: "Snyamane Area — cyclisme en nature sauvage", wikipedia: "File:Mlilwane Wildlife Sanctuary 02.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mantenga Cultural Village",
      region: "Province de Hhohho",
      description:
        "Mantenga est un village culturel swazi authentique reconstituant la vie traditionnelle d'un kraal du XVIIIe siècle, avec des danses guerrières, des démonstrations d'artisanat et des huttes en paille traditionnelles. Adjacent au pittoresque canyon de Mantenga et aux chutes de Mantenga, c'est le meilleur endroit pour s'immerger dans la culture swazi sans se déplacer loin de Mbabane.",
      wikipedia: "File:Mantenga nature reserve (37097743884).jpg",
      tags: ["Culture", "Traditions", "Artisanat", "Danse"],
      mustSee: [
        { name: "Danses traditionnelles swazies — spectacles quotidiens", wikipedia: "File:Mantenga nature reserve (37097743884).jpg" },
        { name: "Chutes de Mantenga — cascade dans le canyon", wikipedia: "File:Mantenga nature reserve (37097743884).jpg" },
        { name: "Ngwenya Glass — fabrique de verre recyclé mondialement connue", wikipedia: "File:Glass Elephant.jpg" },
      ],
    },
    {
      id: 4,
      name: "Cérémonie Umhlanga (Reed Dance)",
      region: "Lobamba, Vallée d'Ezulwini",
      description:
        "La Reed Dance (Umhlanga) est la plus grande cérémonie culturelle swazi, rassemblant chaque année en août-septembre des dizaines de milliers de jeunes femmes non mariées qui portent des roseaux au palais royal de la Reine Mère. Ce spectacle extraordinaire de couleurs, de chant et de danse traditionnelle est ouvert aux visiteurs étrangers et constitue l'une des expériences culturelles les plus uniques d'Afrique australe.",
      wikipedia: "Umhlanga_(ceremony)",
      tags: ["Festival", "Culture", "Cérémonie", "Roi"],
      mustSee: [
        { name: "Cortège des porteuses de roseaux — des milliers de femmes en tenue traditionnelle", wikipedia: "Umhlanga_(ceremony)" },
        { name: "Palais royal de Lobamba — siège de la monarchie swazi", wikipedia: "Lobamba" },
        { name: "Incwala (cérémonie des premiers fruits) — autre grande cérémonie royale", wikipedia: "Incwala" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "L'Eswatini est une destination abordable, très souvent visitée en combiné avec l'Afrique du Sud ou le Mozambique. Le lilangeni est ancré au rand sud-africain (parité 1:1), et les rands sont acceptés partout. Les prix sont comparables à l'Afrique du Sud rurale.",
    currency: "SZL",
    exchangeRate: "1€ ≈ 20 SZL (= 20 ZAR)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camping / dortoir en lodge", range: "10–20 €" },
          { label: "Chambre en guesthouse / B&B", range: "30–60 €" },
          { label: "Lodge confort avec safari", range: "80–150 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Braai (barbecue) local ou marché", range: "3–7 €" },
          { label: "Restaurant milieu de gamme", range: "10–20 €" },
          { label: "Supermarché (repas self)", range: "5–10 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Kombi (minibus) entre villes", range: "2–5 €" },
          { label: "Taxi en ville (Mbabane)", range: "3–8 €" },
          { label: "Location voiture (depuis Jo'burg)", range: "40–80 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Hlane Royal National Park", range: "10–15 €" },
          { label: "Safari guidé en 4x4 (Hlane)", range: "25–50 €" },
          { label: "Randonnée à pied Mlilwane", range: "10–20 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–65 €/j", desc: "Camping, repas locaux, kombi, safaris d'entrée de gamme", color: "#22c55e" },
      { type: "Confort", daily: "80–150 €/j", desc: "Lodge confort, restaurant, voiture de location, guides privés", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "5 jours",
      route: "Johannesburg → Mbabane → Mantenga → Hlane → Mlilwane → Johannesburg",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Johannesburg", amount: "500–700 €" },
            { label: "Hébergement (4 nuits)", amount: "80–160 €" },
            { label: "Transports locaux + kombi", amount: "50–100 €" },
            { label: "Nourriture + boissons", amount: "120–180 €" },
            { label: "Activités + entrées parcs", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Johannesburg", amount: "600–800 €" },
            { label: "Hébergement (4 nuits)", amount: "320–600 €" },
            { label: "Location voiture", amount: "200–350 €" },
            { label: "Nourriture + boissons", amount: "250–400 €" },
            { label: "Activités + safaris guidés", amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vol jusqu'à Johannesburg (O.R. Tambo) puis route de 4h en voiture ou bus. Vols directs Paris–Jo'burg avec Air France ou South African Airways." },
    { icon: "🪪", label: "Visa", value: "Pas de visa pour les citoyens français (séjour jusqu'à 30 jours). Passeport valide 6 mois requis." },
    { icon: "💰", label: "Monnaie", value: "Lilangeni (SZL) à parité avec le rand sud-africain. Les rands sont acceptés partout. Distributeurs dans les principales villes." },
    { icon: "🗣️", label: "Langue", value: "Swati et anglais (langues officielles). L'anglais est parlé dans les commerces, hôtels et parcs nationaux." },
    { icon: "🔌", label: "Prise électrique", value: "Type M (à 3 grosses broches rondes, comme en Afrique du Sud). Tension 230V. Adaptateur indispensable depuis l'Europe." },
    { icon: "💊", label: "Santé", value: "Paludisme dans les basses vallées (est du pays). Prophylaxie recommandée si vous visitez Hlane ou Big Bend. Vaccins hépatite A/B conseillés. Eau du robinet non potable." },
    { icon: "⚠️", label: "Sécurité", value: "Pays globalement stable et sûr. Prudence habituelle contre le vol dans les villes. Éviter les randonnées seul dans les zones isolées. Respect du protocole royal (photos du palais déconseillées)." },
    { icon: "🚗", label: "Déplacements", value: "Petit pays (17 364 km²) : tout est accessible en une journée depuis Mbabane. Routes en bon état. Location voiture depuis Jo'burg fortement conseillée pour la flexibilité." },
  ],
};
