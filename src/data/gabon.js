export const GABON = {
  code: "GAB",
  numericId: 266,
  name: "Gabon",
  emoji: "🇬🇦",
  capital: "Libreville",
  language: "Français, Fang, Myene, Nzebi",
  currency: "Franc CFA (XAF)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2500, tripMid: 5000,
  },
  description:
    "Le Gabon est le sanctuaire de la forêt équatoriale d'Afrique centrale : 80% du territoire couvert par la forêt primaire, 13 parcs nationaux abritant gorilles des plaines, éléphants de forêt, hippopotames de mer sur les plages de Loango, et les mandrills (les plus grandes colonies mondiales au Parc de la Lopé). Un des pays les mieux préservés d'Afrique, peu touristique mais d'une richesse naturelle stupéfiante.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Grande saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période : moins de pluie, forêt plus accessible, gorilles plus faciles à observer. Loango : baleines à bosse (juil–sept). Températures 22–28°C.",
      icon: "☀️",
    },
    {
      months: "Décembre – Janvier",
      label: "Petite saison sèche",
      color: "#f59e0b",
      description:
        "Courte période sèche, acceptable pour visiter. Éléphants visibles sur la plage de Loango en décembre.",
      icon: "⛅",
    },
    {
      months: "Octobre – Novembre",
      label: "Grande saison des pluies",
      color: "#ef4444",
      description:
        "Fortes pluies (300–400mm/mois), forêt difficile d'accès, pistes impraticables. Moins favorable.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "libreville",
      name: "Libreville",
      region: "Estuaire (côte)",
      data: [
        { month: "Jan", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 150, icon: "⛅" },
        { month: "Jun", temp: 24, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 380, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 270, icon: "🌧️" },
      ],
    },
    {
      id: "lope",
      name: "Lopé",
      region: "Ogooué-Ivindo (centre)",
      data: [
        { month: "Jan", temp: 25, rain: 100, icon: "⛅" },
        { month: "Fév", temp: 25, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 200, icon: "⛅" },
        { month: "Avr", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 23, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 25, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 25, rain: 300, icon: "🌧️" },
        { month: "Déc", temp: 25, rain: 150, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Parc national de Loango — Éléphants sur la plage",
      region: "Ogooué-Maritime",
      description:
        "Loango est l'un des parcs les plus spectaculaires d'Afrique : des éléphants de forêt qui se baignent dans l'océan Atlantique, des hippopotames de mer qui surfent dans les vagues, des baleines à bosse (juillet–septembre), des gorilles des plaines dans la forêt derrière la plage. Un décor où la forêt primaire rencontre la mer — unique au monde.",
      wikipedia: "File:Gabon Loango National Park Elephant with offspring.jpeg",
      tags: ["Unique", "Éléphants", "Plage", "Baleines"],
      mustSee: [
        { name: "Éléphants de forêt sur la plage de Loango (déc–janv)", wikipedia: "File:Gabon Loango National Park Elephant with offspring.jpeg" },
        { name: "Baleines à bosse (juillet–septembre) depuis la plage", wikipedia: "File:Syncerus caffer nanus 153689273.jpg" },
        { name: "Hippopotames de mer dans les vagues", wikipedia: "File:Syncerus caffer nanus 153689273.jpg" },
        { name: "Gorilles des plaines dans la forêt côtière", wikipedia: "File:Western Lowland Gorilla mother and baby.jpg" },
      ],
    },
    {
      id: 2,
      name: "Parc de la Lopé — Gorilles et mandrills",
      region: "Ogooué-Ivindo",
      description:
        "La Lopé (UNESCO) est l'un des rares endroits où l'on peut observer des gorilles des plaines occidentaux et des mandrills en groupes de plusieurs centaines d'individus — la plus grande colonie de mandrills au monde. La Lopé est aussi remarquable pour ses paysages : prairie d'altitude entourée de forêt primaire et de falaises rocheuses.",
      wikipedia: "File:La-lopé-gabon.jpg",
      tags: ["UNESCO", "Gorilles", "Mandrills", "Forêt"],
      mustSee: [
        { name: "Observation gorilles des plaines (habitués aux humains)", wikipedia: "File:La-lopé-gabon.jpg" },
        { name: "Colonie de mandrills — jusqu'à 1 300 individus", wikipedia: "File:La-lopé-gabon.jpg" },
        { name: "Gravures rupestres néolithiques de la Lopé", wikipedia: "File:La lopé-rupestre2.jpg" },
        { name: "Savanes et galeries forestières depuis le lodge", wikipedia: "File:Lopé National Park village panorama.jpg" },
      ],
    },
    
  ],

  costOfLiving: {
    intro: "Le Gabon est l'une des destinations les plus chères d'Afrique subsaharienne. Le pétrole a fait monter les prix, et les parcs nationaux exigent des lodges coûteux pour minimiser l'impact touristique. Un voyage au Gabon est un investissement pour des expériences uniques.",
    currency: "XAF",
    exchangeRate: "1€ = 655 XAF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Chambre d'hôte / guesthouse Libreville", price: "50–80 €", detail: "Milieu de gamme en ville" },
          { label: "Hôtel 3★ Libreville", price: "100–160 €", detail: "Standard correct, clim, wifi" },
          { label: "Lodge parcs nationaux (Loango, Lopé)", price: "200–500 €", detail: "Pension complète + activités" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Cuisine locale dans un boui-boui", price: "4–10 €", detail: "Poisson grillé, sauces locales" },
          { label: "Restaurant mid-range Libreville", price: "15–30 €", detail: "Fruits de mer, cuisine française" },
          { label: "Restaurant gastronomique Libreville", price: "35–70 €", detail: "Cuisine internationale de qualité" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi partagé urbain", price: "1–3 €", detail: "Transport local Libreville" },
          { label: "Vol intérieur (Libreville–Port-Gentil)", price: "60–130 €", detail: "Gabon Airlines, Afrijet" },
          { label: "Transfer lodge en avion léger ou pirogue", price: "100–300 €", detail: "Loango et parcs reculés" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Journée safari Lopé (guide + 4x4)", price: "80–150 €", detail: "Gorilles et mandrills" },
          { label: "Tour nocturne tortues Cap Esterias (guide)", price: "30–60 €", detail: "Oct–mars, départ 21h" },
          { label: "Balade en kayak / pirogue (Loango)", price: "40–80 €", detail: "Lagunes et mangroves" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Guesthouse Libreville + restaurants locaux + taxi", color: "#22c55e" },
      { type: "Confort", daily: "180–280 €/j", desc: "Hôtel 3★ + excursions guidées + vols intérieurs", color: "#3b82f6" },
      { type: "Lodge", daily: "300–600 €/j", desc: "Lodge parc national pension complète + safaris", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Libreville (3j) → Parc de la Lopé (3j) → Loango (4j)",
      budgets: [
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Libreville", amount: "700–1 200 €" },
            { label: "Hébergement ville (4 nuits)", amount: "400–700 €" },
            { label: "Lodge Lopé (3 nuits, pension complète)", amount: "700–1 200 €" },
            { label: "Lodge Loango (3 nuits, pension complète)", amount: "900–1 500 €" },
            { label: "Vols intérieurs + transfers", amount: "400–700 €" },
            { label: "Nourriture ville + activités", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~7h direct (Air France, Corsair) vers Libreville — liaisons régulières" },
    { icon: "🪪", label: "Visa",              value: "e-Visa obligatoire — disponible en ligne avant le départ (~85€). Valable 90 jours." },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA BEAC (XAF). 1€ = 655 XAF taux fixe. Carte bancaire dans grands hôtels. Espèces pour les parcs." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel) — communication facile pour francophones." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Hépatites A/B et typhoïde recommandés." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture à Libreville. Parcs : réseau absent, communication par radio satellite." },
  ],
};
