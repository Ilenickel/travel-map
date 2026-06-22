export const MONGOLIA = {
  code: "MNG",
  numericId: 496,
  name: "Mongolie",
  emoji: "🇲🇳",
  capital: "Oulan-Bator",
  language: "Mongol",
  currency: "Tögrög (MNT)",
  timezone: "UTC+8",
  filter: {
    budgetMin: 50, budgetMid: 110,
    tripMin: 1800, tripMid: 3500,
  },
  description:
    "La Mongolie est l'un des derniers grands espaces vierges de la planète. Steppes infinies, désert de Gobi aux dunes chantantes, yourtes de nomades, chevaux sauvages et nuits sous une voûte céleste sans pollution lumineuse — une aventure incomparable pour ceux qui cherchent l'essentiel.",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Été nomade",
      color: "#22c55e",
      description:
        "Seule période vraiment accessible (10–25 °C). Naadam (fête nationale en juillet) avec lutte, tir à l'arc et équitation. Steppes verdoyantes.",
      icon: "🐎",
    },
    {
      months: "Mai & Septembre",
      label: "Épaules",
      color: "#f59e0b",
      description:
        "Moins de monde, températures plus fraîches mais agréables (5–18 °C). Paysages colorés en automne.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "ulaanbaatar",
      name: "Oulan-Bator",
      region: "Capitale",
      data: [
        { month: "Jan", temp: -22, rain: 5,   icon: "❄️" },
        { month: "Fév", temp: -16, rain: 5,   icon: "❄️" },
        { month: "Mar", temp: -5,  rain: 7,   icon: "❄️" },
        { month: "Avr", temp: 6,   rain: 15,  icon: "❄️" },
        { month: "Mai", temp: 14,  rain: 30,  icon: "⛅" },
        { month: "Jun", temp: 19,  rain: 60,  icon: "⛅" },
        { month: "Jul", temp: 21,  rain: 75,  icon: "⛅" },
        { month: "Aoû", temp: 19,  rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 12,  rain: 30,  icon: "⛅" },
        { month: "Oct", temp: 2,   rain: 15,  icon: "⛅" },
        { month: "Nov", temp: -10, rain: 8,   icon: "❄️" },
        { month: "Déc", temp: -18, rain: 5,   icon: "❄️" },
      ],
    },
    {
      id: "gobi",
      name: "Désert de Gobi",
      region: "Sud",
      data: [
        { month: "Jan", temp: -18, rain: 2,   icon: "❄️" },
        { month: "Fév", temp: -12, rain: 2,   icon: "❄️" },
        { month: "Mar", temp: -2,  rain: 5,   icon: "❄️" },
        { month: "Avr", temp: 10,  rain: 8,   icon: "⛅" },
        { month: "Mai", temp: 18,  rain: 12,  icon: "☀️" },
        { month: "Jun", temp: 25,  rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 27,  rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 25,  rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 18,  rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 7,   rain: 8,   icon: "⛅" },
        { month: "Nov", temp: -6,  rain: 3,   icon: "❄️" },
        { month: "Déc", temp: -15, rain: 2,   icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Désert de Gobi",
      region: "Sud Mongolie",
      description:
        "Le Gobi est l'un des plus grands déserts du monde, alternant steppes pierreuses et dunes de sable dorées. Les falaises flamboyantes (Bayanzag), les dunes chantantes (Khongoryn Els) et la faune unique (chameau de Bactriane sauvage) sont à couper le souffle.",
      wikipedia: "Gobi_Desert",
      tags: ["Désert", "Nature", "Aventure", "Faune"],
      mustSee: [
        { name: "Dunes de Khongoryn Els", wikipedia: "Khongoryn_Els" },
        { name: "Falaises flamboyantes de Bayanzag", wikipedia: "Flaming_Cliffs" },
        { name: "Chameaux de Bactriane sauvages", wikipedia: "Wild_Bactrian_camel" },
      ],
    },
    {
      id: 2,
      name: "Parc National de Terelj",
      region: "Töv",
      description:
        "À seulement 80 km d'Oulan-Bator, ce parc offre un aperçu parfait du mode de vie nomade avec des yourtes, des formations rocheuses spectaculaires et d'excellentes randonnées à cheval.",
      wikipedia: "Gorkhi-Terelj_National_Park",
      tags: ["Nature", "Randonnée", "Culture nomade"],
      mustSee: [
        { name: "Rocher de la Tortue (Melkhii Khad)", wikipedia: "Gorkhi-Terelj_National_Park" },
        { name: "Statue de Gengis Khan (40m)", wikipedia: "File:Genghis Khan Equestrian Statue.jpg" },
        { name: "Séjour en yourte chez nomades", wikipedia: "File:Decorated tent near lake Qinghai.jpg" },
      ],
    },
    {
      id: 3,
      name: "Oulan-Bator",
      region: "Capitale",
      description:
        "Capitale contrastée entre gratte-ciels modernes et quartiers de yourtes, avec des monastères bouddhistes rescapés de l'ère soviétique et une scène artistique naissante.",
      wikipedia: "Ulaanbaatar",
      tags: ["Ville", "Culture", "Bouddhisme"],
      mustSee: [
        { name: "Monastère Gandantegchinlen", wikipedia: "Gandantegchinlen_Monastery" },
        { name: "Place Sükhbaatar", wikipedia: "File:Panorama Ulan Bator 13.JPG" },
        { name: "Musée national de Mongolie", wikipedia: "National_Museum_of_Mongolia" },
      ],
    },
    {
      id: 4,
      name: "Khustain Nuruu — Chevaux Takhi",
      region: "Töv",
      description:
        "Réserve naturelle où vivent les derniers chevaux de Przewalski sauvages au monde (Takhi), réintroduits après leur extinction à l'état sauvage. Un spectacle naturel rare.",
      wikipedia: "Hustai_National_Park",
      tags: ["Nature", "Faune", "Randonnée"],
      mustSee: [
        { name: "Chevaux de Przewalski (Takhi)", wikipedia: "Przewalski's_horse" },
        { name: "Steppes de la vallée Tuul", wikipedia: "Hustai_National_Park" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Mongolie est abordable en logistique locale, mais les circuits organisés et vols internationaux sont coûteux. Voyager indépendamment demande une bonne préparation.",
    currency: "MNT",
    exchangeRate: "1€ ≈ 3 700 MNT",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Yourte chez nomades (ger)", price: "10–20 €", detail: "Avec repas, expérience unique" },
          { label: "Camp de yourtes touristique", price: "30–60 €", detail: "Confort + demi-pension" },
          { label: "Hôtel 3★ Oulan-Bator", price: "50–90 €", detail: "Centre-ville" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Buuz (raviolis à la vapeur)", price: "1–2 €", detail: "Plat national incontournable" },
          { label: "Restaurant local Oulan-Bator", price: "5–12 €", detail: "Viande, lait fermenté (airag)" },
          { label: "Restaurant occidental", price: "15–30 €", detail: "Bonne sélection à UB" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Location 4×4 avec chauffeur / jour", price: "80–120 €", detail: "Indispensable hors route" },
          { label: "Transport local Oulan-Bator", price: "0,50–1 €", detail: "Bus ou taxi partagé" },
          { label: "Vol intérieur UB–Gobi", price: "80–150 €", detail: "Gain de temps considérable" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Festival Naadam (entrée)", price: "20–50 €", detail: "Juillet — réserver à l'avance" },
          { label: "Trek à cheval (1 jour)", price: "40–80 €", detail: "Guide et cheval inclus" },
          { label: "Circuit organisé Gobi (5j)", price: "300–600 €", detail: "Tout inclus depuis UB" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Guesthouses + yourtes + transport partagé", color: "#22c55e" },
      { type: "Confort", daily: "110–180 €/j", desc: "Camps de yourtes + 4×4 privatif + guides", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Lodges premium + hélicoptère + guides privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Oulan-Bator (2j) → Terelj (2j) → Gobi (5j) → Khustain Nuruu (2j) → Oulan-Bator (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Oulan-Bator", amount: "600–900 €" },
            { label: "Hébergement (14 nuits)", amount: "350–600 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Transport 4×4 partagé", amount: "300–500 €" },
            { label: "Activités & imprévus", amount: "200–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Oulan-Bator", amount: "700–1 100 €" },
            { label: "Hébergement (14 nuits)", amount: "800–1 400 €" },
            { label: "Nourriture", amount: "400–600 €" },
            { label: "Transport 4×4 privatif", amount: "800–1 200 €" },
            { label: "Activités & guides", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–UB (Business)", amount: "2 000–3 500 €" },
            { label: "Lodges premium (14 nuits)", amount: "2 500–4 000 €" },
            { label: "Gastronomie & expériences", amount: "1 000–2 000 €" },
            { label: "Hélico & transport privé", amount: "1 000–2 000 €" },
            { label: "Activités exclusives", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~10h (MIAT Mongolian Airlines, avec escale)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (30 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Tögrög (1€ ≈ 3 700 MNT) — espèces" },
    { icon: "🗣️", label: "Langue",            value: "Mongol (peu d'anglais hors Oulan-Bator)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Nul hors des villes — prévoir satellite en steppe" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — purification indispensable" },
    { icon: "💊", label: "Santé",             value: "Encéphalite à tiques en été — vaccin conseillé" },
  ],
};
