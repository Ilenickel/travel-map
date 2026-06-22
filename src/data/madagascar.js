export const MADAGASCAR = {
  code: "MDG",
  numericId: 450,
  name: "Madagascar",
  emoji: "🇲🇬",
  capital: "Antananarivo",
  language: "Malgache, Français",
  currency: "Ariary (MGA)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 2000, tripMid: 4000,
  },
  description:
    "Madagascar, « la Grande Île », est l'une des destinations les plus uniques au monde : 90% de sa faune et flore sont endémiques. Lémuriens dans les forêts, baobabs géants de l'allée des Baobabs, caméléons multicolores et plages sauvages de Nosy Be. Un autre monde.",

  bestPeriods: [
    {
      months: "Avril – Novembre",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison sèche et fraîche, idéale pour tout le pays. Routes praticables, lémuriens actifs. Saison des baleines à bosse sur la côte est (juillet–septembre).",
      icon: "🦎",
    },
    {
      months: "Décembre – Mars",
      label: "Saison des pluies",
      color: "#3b82f6",
      description:
        "Végétation luxuriante, moins de touristes. Routes impraticables au nord-ouest. Nosy Be reste accessible.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "antananarivo",
      name: "Antananarivo",
      region: "Analamanga",
      data: [
        { month: "Jan", temp: 20, rain: 270, icon: "⛅" },
        { month: "Fév", temp: 20, rain: 245, icon: "⛅" },
        { month: "Mar", temp: 19, rain: 180, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 16, rain: 15,  icon: "☀️" },
        { month: "Jun", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Jul", temp: 13, rain: 10,  icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Sep", temp: 17, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 20, rain: 150, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 230, icon: "⛅" },
      ],
    },
    {
      id: "nosy_be",
      name: "Nosy Be",
      region: "Diana",
      data: [
        { month: "Jan", temp: 28, rain: 320, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 290, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 220, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 26, rain: 25,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 250, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Allée des Baobabs",
      region: "Menabe",
      description:
        "L'allée des Baobabs, entre Morondava et Belo Tsiribihina, est l'image iconique de Madagascar : des dizaines de baobabs centenaires (20–30 m de haut, 1000 ans d'âge) encadrant une piste de latérite rouge au coucher du soleil.",
      wikipedia: "Avenue_of_the_Baobabs",
      tags: ["Nature", "Icône", "Photo", "Unique"],
      mustSee: [
        { name: "Coucher de soleil sur les baobabs", wikipedia: "File:Avenue of the Baobabs at Sunset.jpg" },
        { name: "Baobabs amoureux (deux baobabs enlacés)", wikipedia: "Avenue_of_the_Baobabs" },
        { name: "Village de Kirindy (lémuriens)", wikipedia: "File:Ring-tailed lemur (Lemur catta).jpg" },
        { name: "Réserve de Bemaraha (UNESCO)", wikipedia: "Tsingy_de_Bemaraha_Strict_Nature_Reserve" },
      ],
    },
    {
      id: 2,
      name: "Tsingy de Bemaraha",
      region: "Melaky",
      description:
        "Les Tsingy sont des forêts de calcaire en lames de couteau, inscrites à l'UNESCO. Ces formations karstiques uniques sont parcourues via des via ferrata, avec une biodiversité extraordinaire (lémuriens, oiseaux endémiques).",
      wikipedia: "Tsingy_de_Bemaraha_Strict_Nature_Reserve",
      tags: ["UNESCO", "Nature", "Aventure", "Unique"],
      mustSee: [
        { name: "Grands Tsingy — via ferrata suspendue", wikipedia: "File:Tsingy de Bemaraha, Madagascar.jpg" },
        { name: "Lémuriens dans la forêt", wikipedia: "File:Grote vasapapegaai, Tsingy de Bemaraha.JPG" },
        { name: "Pirogue sur la rivière Manambolo", wikipedia: "File:Manambolorivier 13.JPG" },
      ],
    },
    {
      id: 3,
      name: "Parc national d'Isalo",
      region: "Ihorombe",
      description:
        "Isalo est le « Canyon du Colorado » malgache : un massif de grès sculpté par l'érosion en canyons, piscines naturelles, pluies de sable orange et forêts de pachypodes en fleurs. Randonnées inoubliables.",
      wikipedia: "Isalo_National_Park",
      tags: ["Randonnée", "Nature", "Canyon", "Piscines"],
      mustSee: [
        { name: "Piscine naturelle bleue (nage)", wikipedia: "File:Falls_of_Anjofo,_Isalo,_Madagascar_(21833449081).jpg" },
        { name: "Canyon des Makis (lémuriens)", wikipedia: "File:Eulemur_rufifrons,_Isalo_National_Park_2007-03-01.jpg" },
        { name: "Fenêtre de l'Isalo (coucher de soleil)", wikipedia: "File:IsaloRock.jpg" },
      ],
    },
    {
      id: 4,
      name: "Nosy Be",
      region: "Diana",
      description:
        "L'île de Nosy Be est le paradis balnéaire de Madagascar : plages de sable blanc, lagons aux eaux tropicales, observation des baleines à bosse (juil.–sept.) et requins-baleines. L'île aux parfums (ylang-ylang).",
      wikipedia: "File:Nosy Iranja, Madagascar, 2025-09-17, DD 21.jpg",
      tags: ["Plage", "Plongée", "Baleines", "Île"],
      mustSee: [
        { name: "Plage de Hell-Ville & Madirokely", wikipedia: "File:Ville de Nosy Be Hell ville, Madagascar.jpg" },
        { name: "Baleines à bosse (juil.–sept.)", wikipedia: "Humpback_whale" },
        { name: "Requins-baleines à Nosy Mitsio", wikipedia: "Whale_shark" },
        { name: "Plongée aux îlots de Nosy Tanikely", wikipedia: "Coral_reef" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Madagascar est l'un des pays les moins chers au monde. Le transport est la variable principale : les routes sont difficiles et les vols intérieurs indispensables pour certaines zones.",
    currency: "MGA",
    exchangeRate: "1€ ≈ 4 900 MGA",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Bungalow local", price: "10–25 €", detail: "Propre et authentique" },
          { label: "Hôtel 3★ Antananarivo", price: "35–60 €", detail: "Confort standard" },
          { label: "Lodge éco / vue plage Nosy Be", price: "80–180 €", detail: "Proche paradis tropical" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Romazava (viande feuilles)", price: "1–3 €", detail: "Plat national, économique" },
          { label: "Restaurant local (riz, zébu)", price: "3–8 €", detail: "Très abordable" },
          { label: "Fruits de mer Nosy Be", price: "10–20 €", detail: "Homard, crevettes géantes" },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: "Transport",
        items: [
          { label: "Vol intérieur Tana–Morondava", price: "100–200 €", detail: "A/R — évite 2j de piste" },
          { label: "Taxi-brousse (piste)", price: "5–20 €", detail: "Lent mais authentique" },
          { label: "Location 4x4 avec chauffeur", price: "80–120 €/j", detail: "Obligatoire hors routes" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc national (Isalo, Ranomafana)", price: "10–20 €/j", detail: "Guide obligatoire" },
          { label: "Observation baleines (Nosy Be)", price: "60–100 €", detail: "Demi-journée" },
          { label: "Trek Tsingy (via ferrata)", price: "30–60 €", detail: "Guide obligatoire" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–60 €/j", desc: "Bungalow + cuisine locale + transport taxi-brousse", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel 3★ + restaurants + vols intérieurs", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Lodges & Nosy Be + vols privés + guides premium", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Antananarivo (2j) → Isalo (3j) → Allée des Baobabs (2j) → Tsingy de Bemaraha (2j) → Nosy Be (5j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Antananarivo", amount: "600–900 €" },
            { label: "Hébergement (14 nuits)", amount: "250–450 €" },
            { label: "Vols intérieurs (3–4)", amount: "400–600 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Parcs & guides & imprévus", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Antananarivo", amount: "700–1 000 €" },
            { label: "Hébergement (14 nuits)", amount: "800–1 300 €" },
            { label: "Vols intérieurs (3–4)", amount: "500–800 €" },
            { label: "Nourriture", amount: "500–700 €" },
            { label: "Excursions & parcs", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Antananarivo (Business)", amount: "2 500–4 000 €" },
            { label: "Lodges premium (14 nuits)", amount: "2 500–4 000 €" },
            { label: "Vols charter", amount: "1 500–3 000 €" },
            { label: "Gastronomie & expériences", amount: "800–1 500 €" },
            { label: "Guides privés", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~11h (Air Austral direct, Air France via escale)" },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée : gratuit jusqu'à 30 jours, 35€ jusqu'à 60 jours, 80€ jusqu'à 90 jours. E-Visa en ligne disponible." },
    { icon: "💰", label: "Monnaie",           value: "Ariary (1€ ≈ 4 900 MGA) — espèces indispensables" },
    { icon: "🗣️", label: "Langue",            value: "Malgache + Français (largement compris)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Couverture villes, très limitée en zone rurale" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen OBLIGATOIRE + vaccins hépatite A/B recommandés" },
  ],
};
