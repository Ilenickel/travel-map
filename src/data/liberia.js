export const LIBERIA = {
  code: "LBR",
  numericId: 430,
  name: "Libéria",
  emoji: "🇱🇷",
  capital: "Monrovia",
  language: "Anglais (officiel)",
  currency: "Dollar libérien (LRD)",
  timezone: "UTC",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 850, tripMid: 1700,
  },
  description:
    "Le Libéria, seul pays d'Afrique subsaharienne jamais colonisé par une puissance européenne, a été fondé en 1847 par des esclaves affranchis américains. Le parc national de Sapo, l'un des derniers grands blocs de forêt primaire d'Afrique de l'Ouest, abrite éléphants de forêt, hippopotames pygmées et chimpanzés. Ses plages atlantiques sauvages et son histoire unique en font une destination pour explorateurs.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison sèche avec un temps ensoleillé, des routes praticables et une faune plus visible dans les forêts de Sapo. Températures de 27–31°C, idéal pour le surf et les plages.",
      icon: "☀️",
    },
    {
      months: "Mai – Octobre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Saison des pluies intense (jusqu'à 600 mm/mois à Monrovia en juin). Routes dégradées, certaines zones forestières inaccessibles. Fortement déconseillé pour le tourisme.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "monrovia",
      name: "Monrovia",
      region: "Monrovia (côte)",
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 140, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 380, icon: "🌧️" },
        { month: "Jun", temp: 23, rain: 600, icon: "🌧️" },
        { month: "Jul", temp: 23, rain: 520, icon: "🌧️" },
        { month: "Aoû", temp: 23, rain: 500, icon: "🌧️" },
        { month: "Sep", temp: 24, rain: 420, icon: "🌧️" },
        { month: "Oct", temp: 25, rain: 280, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 100, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 35,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Parc national de Sapo",
      region: "Sinoe",
      description:
        "Le parc national de Sapo est le plus grand parc naturel du Libéria et l'une des dernières et plus belles forêts tropicales primaires d'Afrique de l'Ouest. Il abrite des éléphants de forêt, des hippopotames pygmées, des chimpanzés et plus de 600 espèces d'oiseaux dans un écosystème pratiquement intact.",
      wikipedia: "African_forest_elephant",
      tags: ["Nature", "Forêt", "Éléphants", "Primaires"],
      mustSee: [
        { name: "Éléphants de forêt d'Afrique de l'Ouest", wikipedia: "African_forest_elephant" },
        { name: "Hippopotames pygmées dans les rivières", wikipedia: "Pygmy_hippopotamus" },
        { name: "Chimpanzés dans la forêt primaire", wikipedia: "File:Voa_Guinea_chimpanzee_picking_30jan08.jpg" },
        { name: "Randonnée multi-jours dans la forêt dense", wikipedia: "File:Rio Sapo 2.jpg" },
      ],
    },
    {
      id: 2,
      name: "Monrovia",
      region: "Grand Cape Mount / Monrovia",
      description:
        "Monrovia, fondée en 1822 et nommée en hommage au président américain Monroe, est la seule capitale africaine portant le nom d'un président américain. Son histoire liée aux esclaves affranchis est visible dans les vieux quartiers, et les environs offrent des plages sauvages et des lagunes.",
      wikipedia: "Monrovia",
      tags: ["Capitale", "Histoire", "Afro-américain", "Culture"],
      mustSee: [
        { name: "Capitol Building du Libéria", wikipedia: "File:Liberian_Capitol_Building.jpg" },
        { name: "Providence Island — île fondatrice de Monrovia", wikipedia: "Providence_Island,_Liberia" },
        { name: "Marché de Waterside à Monrovia", wikipedia: "Monrovia" },
      ],
    },
    {
      id: 3,
      name: "Plages atlantiques",
      region: "Margibi / Grand Cape Mount",
      description:
        "Le Libéria possède plus de 500 km de côte atlantique avec des plages de sable blanc encore presque désertes. Silver Beach et les plages autour de Robertsport, ancien spot de surf à la réputation grandissante, attirent une poignée d'aventuriers en quête d'une Afrique de l'Ouest préservée.",
      wikipedia: "Robertsport",
      tags: ["Plage", "Surf", "Nature", "Sauvage"],
      mustSee: [
        { name: "Robertsport — plage de surf mythique", wikipedia: "Robertsport" },
        { name: "Lac Piso — lagon naturel protégé", wikipedia: "Lake_Piso" },
        { name: "Silver Beach near Monrovia", wikipedia: "Monrovia" },
        { name: "Coucher de soleil sur l'Atlantique", wikipedia: "File:Sunset at Noronhas' beach.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Libéria est une destination abordable avec une infrastructure touristique encore limitée. Le dollar américain est la monnaie de facto dans les hôtels et restaurants, aux côtés du dollar libérien local. La reconstruction post-guerre civile a amélioré les infrastructures de Monrovia.",
    currency: "LRD",
    exchangeRate: "1€ ≈ 200 LRD (1 USD ≈ 185 LRD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse locale Monrovia", price: "15–30 €", detail: "Simple, avec moustiquaire" },
          { label: "Hôtel 2–3★ Monrovia", price: "40–70 €", detail: "Clim, eau chaude, sécurité" },
          { label: "Lodge de surf à Robertsport", price: "40–80 €", detail: "Bord de plage, ambiance détendue" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Jollof rice au marché (rue)", price: "2–4 €", detail: "Incontournable d'Afrique de l'Ouest" },
          { label: "Restaurant local — fufu, cassava", price: "4–8 €", detail: "Cuisine traditionnelle libérienne" },
          { label: "Restaurant expatriés / hôtel Monrovia", price: "12–25 €", detail: "Cuisine internationale, poissons" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bush taxi Monrovia–Robertsport", price: "5–10 €", detail: "~3h de route" },
          { label: "Moto-taxi à Monrovia", price: "0,50–2 €", detail: "Transport quotidien courant" },
          { label: "4x4 avec chauffeur / jour (Sapo)", price: "80–120 €", detail: "Piste forestière difficile" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc Sapo + logement forestier / nuit", price: "30–60 €", detail: "Guide inclus" },
          { label: "Cours de surf à Robertsport", price: "20–40 €", detail: "Instructeur local, planche fournie" },
          { label: "Excursion Providence Island en pirogue", price: "10–20 €", detail: "Île historique fondatrice" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Guesthouse + nourriture locale + bush taxi", color: "#22c55e" },
      { type: "Confort", daily: "70–110 €/j", desc: "Hôtel 3★ + restos + 4x4 + guides", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Monrovia (2j) → Harbel & Plantation Firestone (1j) → Robertsport & plages (2j) → Parc de Sapo (4j) → Monrovia (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Monrovia (via escale)", amount: "400–600 €" },
            { label: "Hébergement (10 nuits)", amount: "200–280 €" },
            { label: "Transports locaux + bush taxis", amount: "120–180 €" },
            { label: "Nourriture + boissons", amount: "80–120 €" },
            { label: "Activités + Sapo + guides", amount: "100–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Monrovia (via escale)", amount: "500–750 €" },
            { label: "Hébergement (10 nuits)", amount: "550–800 €" },
            { label: "4x4 privatif + chauffeur + guides", amount: "350–500 €" },
            { label: "Nourriture + boissons", amount: "180–250 €" },
            { label: "Activités + entrées", amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",    value: "~9–10h (via Bruxelles, Casablanca ou Addis-Abeba — pas de direct)" },
    { icon: "🪪", label: "Visa",                value: "Visa obligatoire — e-Visa disponible en ligne (85 $)" },
    { icon: "💰", label: "Monnaie",             value: "Dollar libérien (LRD) + dollar américain accepté partout — espèces indispensables" },
    { icon: "🗣️", label: "Langue",              value: "Anglais (officiel et courant) — langue unique en Afrique de l'Ouest" },
    { icon: "🔌", label: "Prise électrique",    value: "Type A/B (comme aux États-Unis) — 120 V (adaptateur nécessaire)" },
    { icon: "💊", label: "Santé",               value: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement" },
    { icon: "🛣️", label: "Routes",              value: "Routes souvent en mauvais état hors de Monrovia — 4x4 recommandé en saison sèche" },
    { icon: "🔒", label: "Sécurité",            value: "Situation stable depuis 2003 — quartiers de Monrovia à éviter la nuit, consulter le Quai d'Orsay" },
  ],
};
