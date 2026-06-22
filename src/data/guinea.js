export const GUINEA = {
  code: "GIN",
  numericId: 324,
  name: "Guinée",
  emoji: "🇬🇳",
  capital: "Conakry",
  language: "Français (officiel), Pular, Mandingue, Soussou",
  currency: "Franc guinéen (GNF)",
  timezone: "UTC",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 750, tripMid: 1600,
  },
  description:
    "Surnommée le « château d'eau de l'Afrique de l'Ouest », la Guinée est un pays de contrastes saisissants. Le Fouta Djalon, un plateau montagneux aux cascades spectaculaires et villages peuls, contraste avec la capitale côtière de Conakry et les forêts denses du sud abritant chimpanzés et hippopotames. Les monts Nimba, classés à l'UNESCO, témoignent d'une biodiversité exceptionnelle.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Période idéale avec un temps sec, des températures agréables de 25–30°C et des routes praticables. Parfait pour le Fouta Djalon, les cascades et les parcs nationaux.",
      icon: "☀️",
    },
    {
      months: "Mai – Juin",
      label: "Début de saison des pluies",
      color: "#f59e0b",
      description:
        "Les premières pluies verdissent les paysages mais les routes se dégradent. La végétation est luxuriante, les cascades du Fouta Djalon sont impressionnantes.",
      icon: "🌦️",
    },
  ],

  weatherCities: [
    {
      id: "conakry",
      name: "Conakry",
      region: "Conakry (côte)",
      data: [
        { month: "Jan", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 28, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 450, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 700, icon: "🌧️" },
        { month: "Aoû", temp: 24, rain: 800, icon: "🌧️" },
        { month: "Sep", temp: 25, rain: 600, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Fouta Djalon",
      region: "Mamou / Labé / Pita",
      description:
        "Le Fouta Djalon est un plateau montagneux d'une beauté grandiose, parcouru de gorges profondes, de cascades majestueuses et de villages peuls perchés. La chute de Kinkon, les gorges de Ditinn et les falaises de Doucki offrent des paysages de randonnée parmi les plus beaux d'Afrique de l'Ouest.",
      wikipedia: "File:Fouta Djallon (14582291826).jpg",
      tags: ["Nature", "Randonnée", "Cascades", "Culture peule"],
      mustSee: [
        { name: "Cascade de Kinkon — 90 mètres de hauteur", wikipedia: "File:Chute de Ditinn à Dalaba.jpg" },
        { name: "Gorges de Ditinn et villages peuls", wikipedia: "File:Fouta Djallon (14418743529).jpg" },
        { name: "Falaises de Doucki — point de vue spectaculaire", wikipedia: "File:Fouta Djallon (14582291826).jpg" },
        { name: "Marché hebdomadaire de Labé", wikipedia: "File:Marche sasse Labé.jpg" },
      ],
    },
    {
      id: 2,
      name: "Monts Nimba",
      region: "N'Zérékoré",
      description:
        "Les monts Nimba, partagés entre la Guinée, la Côte d'Ivoire et le Libéria, sont un site du patrimoine mondial de l'UNESCO pour leur biodiversité exceptionnelle. On y trouve des chimpanzés qui utilisent des outils, des hippopotames pygmées et des centaines d'espèces endémiques dans cette forêt dense et brumeuse.",
      wikipedia: "Mount_Nimba_Strict_Nature_Reserve",
      tags: ["UNESCO", "Nature", "Chimpanzés", "Forêt"],
      mustSee: [
        { name: "Hippopotames pygmées dans les rivières", wikipedia: "Pygmy_hippopotamus" },
        { name: "Sommet du mont Nimba (1752 m)", wikipedia: "File:Mount Nimba Strict Nature Reserve-123989.jpg" },
        { name: "Forêt montagnarde dense et brume matinale", wikipedia: "Mount_Nimba_Strict_Nature_Reserve" },
      ],
    },
    {
      id: 3,
      name: "Conakry",
      region: "Conakry",
      description:
        "Conakry, capitale construite sur une presqu'île, est une ville animée et musicale. La Guinée est le berceau du djembé et du balafon, et les soirées de musique mandingue sont réputées dans tout le continent. Le marché Madina, le musée national et les îles de Los, accessibles en pirogue, complètent la visite.",
      wikipedia: "Conakry",
      tags: ["Capitale", "Musique", "Marché", "Îles"],
      mustSee: [
        { name: "Musée national de Guinée", wikipedia: "File:Musée National de Guinée 27042022 005.jpg" },
        { name: "Marché Madina — le plus grand d'Afrique de l'Ouest", wikipedia: "File:Madina 2.jpg" },
        { name: "Îles de Los en pirogue (détente, snorkeling)", wikipedia: "File:Los island SPOT 1386.jpg" },
      ],
    },
    {
      id: 4,
      name: "Bossou & forêt de Ziama",
      region: "N'Zérékoré",
      description:
        "Le village de Bossou abrite une communauté de chimpanzés étudiée depuis les années 1970, célèbre pour son utilisation d'outils en pierre pour casser des noix. La forêt de Ziama, réserve de biosphère de l'UNESCO, est l'un des derniers grands massifs forestiers d'Afrique de l'Ouest.",
      wikipedia: "File:Marché de Bossou.jpg",
      tags: ["Chimpanzés", "Science", "Forêt", "UNESCO"],
      mustSee: [
        { name: "Chimpanzés de Bossou et leur utilisation d'outils", wikipedia: "File:Chimpanzé de Bossou 29.jpg" },
        { name: "Réserve de biosphère de Ziama", wikipedia: "Ziama_Massif" },
        { name: "Villages forestiers de la région de N'Zérékoré", wikipedia: "File:Nzerekore.jpg" },
        { name: "Marché de N'Zérékoré — carrefour de l'Afrique forestière", wikipedia: "File:Marché de Bossou.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "La Guinée est une destination économique avec une infrastructure touristique en développement. Les hôtels de milieu de gamme existent principalement à Conakry et dans quelques villes du Fouta Djalon. Le franc guinéen est volatile, l'euro ou le dollar sont souvent préférés.",
    currency: "GNF",
    exchangeRate: "1€ ≈ 9 500 GNF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre locale (Fouta Djalon)", price: "10–25 €", detail: "Simple, avec moustiquaire" },
          { label: "Hôtel 2–3★ Conakry", price: "35–60 €", detail: "Clim, eau chaude, sécurité" },
          { label: "Hôtel de confort Conakry", price: "70–120 €", detail: "Meilleure option de la capitale" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Riz sauce feuilles (rue ou maquis)", price: "1–3 €", detail: "Plat local omniprésent" },
          { label: "Restaurant local — thiéboudienne, poulet yassa", price: "4–9 €", detail: "Repas complet" },
          { label: "Restaurant touristique Conakry", price: "12–25 €", detail: "Cuisine internationale, poisson" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bush taxi Conakry–Labé (Fouta)", price: "10–18 €", detail: "~5h de route" },
          { label: "Taxi-moto à Conakry", price: "0,50–2 €", detail: "Transport quotidien local" },
          { label: "Location 4x4 pour le Fouta / jour", price: "70–100 €", detail: "Pistes parfois difficiles" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Randonnée guidée Fouta Djalon (1 jour)", price: "20–40 €", detail: "Guide local + porteur option" },
          { label: "Visite chimpanzés de Bossou", price: "25–50 €", detail: "Entrée + guide scientifique" },
          { label: "Pirogue vers îles de Los (Conakry)", price: "10–20 €", detail: "Demi-journée de détente" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse + repas locaux + bush taxi", color: "#22c55e" },
      { type: "Confort", daily: "65–100 €/j", desc: "Hôtel 3★ + restos + 4x4 + guides", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Conakry (2j) → Îles de Los (1j) → Fouta Djalon : Labé, Pita, cascades (4j) → N'Zérékoré & Nimba (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "750 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Conakry", amount: "350–500 €" },
            { label: "Hébergement (10 nuits)", amount: "160–250 €" },
            { label: "Transports locaux + bush taxis", amount: "120–180 €" },
            { label: "Nourriture + boissons", amount: "80–120 €" },
            { label: "Activités + guides", amount: "80–120 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 600 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Conakry", amount: "450–650 €" },
            { label: "Hébergement (10 nuits)", amount: "500–750 €" },
            { label: "4x4 + chauffeur + vols intérieurs", amount: "350–500 €" },
            { label: "Nourriture + boissons", amount: "180–250 €" },
            { label: "Activités + guides", amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",    value: "~6h (Air France, Brussels Airlines, Royal Air Maroc via escale)" },
    { icon: "🪪", label: "Visa",                value: "Visa obligatoire — à obtenir avant le départ à l'ambassade (35–60 €)" },
    { icon: "💰", label: "Monnaie",             value: "Franc guinéen (GNF) — euro et dollar acceptés dans les hôtels, espèces indispensables" },
    { icon: "🗣️", label: "Langue",              value: "Français (officiel) + Pular (Fouta Djalon) + Mandingue + Soussou" },
    { icon: "🔌", label: "Prise électrique",    value: "Type C/E — 220 V (coupures fréquentes, prévoir batterie)" },
    { icon: "💊", label: "Santé",               value: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement" },
    { icon: "🏔️", label: "Fouta Djalon",        value: "Fraîche la nuit (10–15°C en altitude) — prévoir une veste légère" },
    { icon: "🔒", label: "Sécurité",            value: "Situation politique à surveiller — consulter le Quai d'Orsay avant le départ" },
  ],
};
