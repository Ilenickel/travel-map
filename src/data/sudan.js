export const SUDAN = {
  code: "SDN",
  numericId: 729,
  name: "Soudan",
  emoji: "🇸🇩",
  capital: "Khartoum",
  language: "Arabe, Anglais",
  currency: "Livre soudanaise (SDG)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 850, tripMid: 1800,
  },
  description:
    "Le Soudan possédait l'une des destinations archéologiques les plus extraordinaires du monde : les pyramides nubiennes de Méroé (plus nombreuses qu'en Égypte), les temples de Jebel Barkal et la culture nubienne millénaire. Depuis avril 2023, le pays est plongé dans une guerre civile dévastatrice qui rend tout voyage impossible et constitue l'une des pires crises humanitaires mondiales.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison fraîche (pré-conflit)",
      color: "#22c55e",
      description:
        "Avant le conflit, la seule période vraiment praticable : températures entre 18–32°C, sec, idéal pour les sites archéologiques. Les nuits dans le désert nubien étaient froides et étoilées.",
      icon: "🏛️",
    },
    {
      months: "Mars – Octobre",
      label: "Chaleur extrême / pluies (sud)",
      color: "#ef4444",
      description:
        "Températures dépassant 40–47°C à Khartoum. Saison des pluies de juillet à septembre dans le Sahel. Conditions difficiles même en temps de paix.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "khartoum",
      name: "Khartoum",
      region: "Capitale (désert)",
      data: [
        { month: "Jan", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Avr", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Mai", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 10, icon: "🌡️" },
        { month: "Jul", temp: 34, rain: 25, icon: "🌡️" },
        { month: "Aoû", temp: 32, rain: 40, icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Oct", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Déc", temp: 19, rain: 0,  icon: "☀️" },
      ],
    },
    {
      id: "kassala",
      name: "Kassala",
      region: "Collines de la Mer Rouge (est)",
      data: [
        { month: "Jan", temp: 18, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 21, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 2,  icon: "☀️" },
        { month: "Avr", temp: 30, rain: 5,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 10, icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 20, icon: "🌡️" },
        { month: "Jul", temp: 31, rain: 60, icon: "🌡️" },
        { month: "Aoû", temp: 29, rain: 80, icon: "⛅" },
        { month: "Sep", temp: 30, rain: 50, icon: "🌡️" },
        { month: "Oct", temp: 29, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 23, rain: 2,  icon: "☀️" },
        { month: "Déc", temp: 18, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Pyramides de Méroé",
      region: "État du Nil (nord)",
      description:
        "Les pyramides de Méroé sont le joyau archéologique du Soudan : plus de 200 pyramides nubiennes aux proportions élancées, plus nombreuses qu'en Égypte, classées au patrimoine mondial de l'UNESCO. Capitales du royaume de Koush et Méroé pendant plus de mille ans, elles témoignent d'une civilisation africaine d'une richesse exceptionnelle. Avant la guerre, Méroé accueillait des milliers de visiteurs par an venus admirer ces sentinelles de grès rose dans le désert nubien.",
      wikipedia: "File:Sudan Meroe Pyramids 2001.JPG",
      tags: ["UNESCO", "Archéologie", "Pyramides", "Nubie"],
      mustSee: [
        { name: "Nécropole nord de Méroé — principale concentration de pyramides", wikipedia: "Meroë" },
        { name: "Temple d'Apedemak à Naqa — temple du lion nubien", wikipedia: "Naqa" },
        { name: "Bains royaux de Méroé — thermes de la cité antique", wikipedia: "File:Meroe Royal Bath.JPG" },
        { name: "Musée national de Khartoum — collections nubiennes (pré-conflit)", wikipedia: "File:Republican Palace Museum (Khartoum) 002.jpg" },
      ],
    },
    {
      id: 2,
      name: "Jebel Barkal & Kerma",
      region: "État du Nil Nord (Nubie)",
      description:
        "Jebel Barkal est une montagne sacrée des anciens Égyptiens et Nubiens, dominée par une falaise de 100 mètres de haut sur le Nil, abritant temples et pyramides royales classés à l'UNESCO. Kerma, plus au nord, est le site de la plus ancienne ville d'Afrique subsaharienne connue, avec des objets remontant à 2500 av. J.-C. Ces sites constituaient avant la guerre les étapes incontournables d'un circuit nubien unique au monde.",
      wikipedia: "Jebel_Barkal",
      tags: ["UNESCO", "Archéologie", "Nubie", "Antiquité"],
      mustSee: [
        { name: "Temple d'Amon à Jebel Barkal — sanctuaire taillé dans la roche", wikipedia: "Jebel_Barkal" },
        { name: "Pyramides de Nuri — tombeaux royaux nubiens", wikipedia: "Nuri" },
        { name: "Kerma — plus ancienne ville d'Afrique subsaharienne", wikipedia: "Kerma" },
        { name: "Deffufa Occidentale de Kerma — monument en briques de terre crue", wikipedia: "File:Western Deffufa - Kerma.jpg" },
      ],
    },
    {
      id: 3,
      name: "Port Soudan & Mer Rouge",
      region: "État de la Mer Rouge",
      description:
        "Port Soudan donnait accès à l'une des plus belles plongées de la mer Rouge, dans des eaux encore peu explorées avec des récifs coralliens intacts, des épaves historiques et une biodiversité marine remarquable. Les collines de la Mer Rouge offrent une atmosphère nubienne authentique avec les communautés Beja nomades. La région est aujourd'hui moins touchée par la guerre civile que Khartoum.",
      wikipedia: "Port_Sudan",
      tags: ["Plongée", "Mer Rouge", "Nature", "Pêche"],
      mustSee: [
        { name: "Récifs de Sanganeb — parc marin avec requins et dauphins", wikipedia: "File:Barracuda_Tornado.jpg" },
        { name: "Épave du MV Umbria — navire mussolini coulé en 1940", wikipedia: "SS_Umbria" },
        { name: "Collines Taka (Kassala) — formations rocheuses et communauté Beja", wikipedia: "Kassala" },
        { name: "Suakin — ancienne ville ottomane en corail sur l'île", wikipedia: "Suakin" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Avant la guerre, le Soudan était l'une des destinations archéologiques les moins chères au monde. La situation actuelle rend toute évaluation de coût hors de propos : le pays vit une catastrophe humanitaire et économique majeure. Les informations ci-dessous sont données à titre historique uniquement.",
    currency: "SDG",
    exchangeRate: "1€ ≈ 600 SDG (taux pré-conflit, instable)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / chambre basique (pré-conflit)", range: "8–15 €" },
          { label: "Hôtel milieu de gamme", range: "25–50 €" },
          { label: "Hôtel international (Khartoum)", range: "60–120 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Foul médamès et falafels (rue)", range: "1–3 €" },
          { label: "Restaurant local (viande grillée)", range: "5–12 €" },
          { label: "Café soudanais et jus de fruits", range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Khartoum–Méroé", range: "5–10 €" },
          { label: "Taxi en ville", range: "2–5 €" },
          { label: "Location 4x4 avec chauffeur", range: "60–120 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée site de Méroé", range: "5–15 €" },
          { label: "Guide archéologique local", range: "20–40 €/j" },
          { label: "Plongée mer Rouge (forfait journée)", range: "40–80 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Chiffres pré-conflit uniquement. Voyage actuellement impossible.", color: "#22c55e" },
      { type: "Confort", daily: "70–120 €/j", desc: "Chiffres pré-conflit uniquement. Voyage actuellement impossible.", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Khartoum → Méroé → Jebel Barkal → Kerma → Port Soudan",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Khartoum (pré-conflit)", amount: "400–600 €" },
            { label: "Hébergement (9 nuits)", amount: "80–150 €" },
            { label: "Transports locaux", amount: "80–150 €" },
            { label: "Nourriture + boissons", amount: "120–200 €" },
            { label: "Activités + entrées", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Khartoum (pré-conflit)", amount: "450–650 €" },
            { label: "Hébergement (9 nuits)", amount: "250–500 €" },
            { label: "Location 4x4 + carburant", amount: "500–800 €" },
            { label: "Nourriture + boissons", amount: "250–400 €" },
            { label: "Activités + guides", amount: "200–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols via Le Caire (EgyptAir), Istanbul (Turkish) ou Dubaï (Emirates). Liaisons directes suspendues depuis le conflit." },
    { icon: "🪪", label: "Visa", value: "Visa obligatoire — procédures actuellement suspendues pour les voyageurs civils en raison du conflit armé." },
    { icon: "💰", label: "Monnaie", value: "Livre soudanaise (SDG). Économie en effondrement depuis 2023. Transactions en cash USD historiquement nécessaires." },
    { icon: "🗣️", label: "Langue", value: "Arabe (officiel), anglais dans les villes et les milieux éduqués. Langues nubiennes dans le nord." },
    { icon: "🔌", label: "Prise électrique", value: "Type D et Type G (britannique). Tension 230V. Coupures fréquentes même en temps normal." },
    { icon: "💊", label: "Santé", value: "Paludisme présent, chaleur extrême (jusqu'à 47°C). Accès aux soins très limité. Situation sanitaire désastreuse depuis 2023." },
    { icon: "⚠️", label: "Sécurité — AVERTISSEMENT CRITIQUE", value: "🚫 VOYAGE FORMELLEMENT DÉCONSEILLÉ. Guerre civile active depuis avril 2023 entre les FAR (armée) et les RSF (paramilitaires). Khartoum est une zone de combat. Des millions de déplacés. Le MEAE classe le Soudan en zone rouge absolue. N'envisagez aucun déplacement." },
    { icon: "📰", label: "Contexte politique", value: "Crise humanitaire majeure : plus de 8 millions de déplacés, famine, infrastructures détruites. Suivre l'évolution sur le site du Ministère des Affaires Étrangères (France.fr/conseils-aux-voyageurs)." },
  ],
};
