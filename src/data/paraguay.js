export const PARAGUAY = {
  code: "PRY",
  numericId: 600,
  name: "Paraguay",
  emoji: "🇵🇾",
  capital: "Asunción",
  language: "Espagnol, guaraní",
  currency: "Guaraní (PYG)",
  timezone: "UTC-4 (été) / UTC-3 (hiver)",
  filter: {
    budgetMin: 25,
    budgetMid: 50,
    tripMin: 1100,
    tripMid: 2000,
  },
  description:
    "Le Paraguay est l'une des destinations les plus méconnues et authentiques d'Amérique du Sud. Pays bilingue espagnol-guaraní, il fascine par ses missions jésuites du XVIIe siècle, sa nature sauvage (Pantanal paraguayen, Chaco) et sa culture singulière. Très abordable et peu touristique.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Saison sèche et fraîche",
      color: "#fbbf24",
      description:
        "Températures agréables (15–25 °C), routes praticables, idéal pour le Chaco et les missions jésuites.",
      icon: "☀️",
    },
    {
      months: "Octobre – Novembre",
      label: "Printemps (nature en fleur)",
      color: "#86efac",
      description:
        "Paisaje florido : le lapacho rose en fleur transforme les villes. Avant les grandes chaleurs et pluies.",
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "asuncion",
      name: "Asunción",
      region: "Région Centrale",
      data: [
        { month: "Jan", temp: 30, rain: 135, icon: "🌧️" },
        { month: "Fév", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Avr", temp: 23, rain: 155, icon: "☀️" },
        { month: "Mai", temp: 19, rain: 130, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 90, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 60, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 65, icon: "☀️" },
        { month: "Sep", temp: 21, rain: 90, icon: "⛅" },
        { month: "Oct", temp: 24, rain: 130, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 125, icon: "🌧️" },
        { month: "Déc", temp: 30, rain: 145, icon: "🌧️" },
      ],
    },
    {
      id: "encarnacion",
      name: "Encarnación",
      region: "Itapúa (Sud)",
      data: [
        { month: "Jan", temp: 30, rain: 145, icon: "🌧️" },
        { month: "Fév", temp: 29, rain: 135, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 23, rain: 165, icon: "☀️" },
        { month: "Mai", temp: 18, rain: 140, icon: "⛅" },
        { month: "Jun", temp: 16, rain: 95, icon: "⛅" },
        { month: "Jul", temp: 16, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 70, icon: "☀️" },
        { month: "Sep", temp: 20, rain: 95, icon: "⛅" },
        { month: "Oct", temp: 24, rain: 145, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 135, icon: "🌧️" },
        { month: "Déc", temp: 30, rain: 155, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Missions jésuites",
      region: "Itapúa",
      description:
        "Les ruines des missions jésuites du XVIIe siècle sont parmi les plus impressionnantes d'Amérique du Sud. La Santísima Trinidad de Paraná et Jesús de Tavarangue, inscrites au patrimoine UNESCO, témoignent d'une utopie sociale unique.",
      wikipedia: "File:San_Ignacio_Miní_Jesuit-Guarani_mission_1.jpg",
      tags: ["Histoire", "UNESCO", "Jésuites", "Ruines", "Architecture"],
      mustSee: [
        { name: "Trinidad (mission)", wikipedia: "File:ParaguayTrinidadReduction.jpg" },
        { name: "Jesús de Tavarangüé", wikipedia: "File:Jesús de Tavarangue - Church ruins 02.jpg" },
        { name: "San Cosme y Damián", wikipedia: "File:Prefectura de San Cosme y Damián 025 filtered.jpg" },
        { name: "Encarnación (carnaval)", wikipedia: "File:Carnaval of Encarnación 230257.jpg" },
      ],
    },
    {
      id: 2,
      name: "Asunción",
      region: "Gran Asunción",
      description:
        "La capitale est l'une des plus anciennes d'Amérique du Sud (fondée en 1537). Son Casco Histórico mêle architecture coloniale et édifices du XIXe siècle. Le Mercado 4 et les Bañados (zones humides urbaines) offrent un dépaysement total.",
      wikipedia: "File:Downtown Asuncion 091253.jpg",
      tags: ["Ville", "Histoire", "Culture", "Marchés", "Gastronomie"],
      mustSee: [
        { name: "Palacio de López", wikipedia: "File:00 3819 Asunción - Paraguay (Südamerika).jpg" },
        { name: "Catedral Metropolitana", wikipedia: "File:Catedral_Nuestra_Señora_de_la_Asunción_-_Baracoa_-_01.jpg" },
        { name: "Casa de la Independencia", wikipedia: "File:Casa de la Independencia museum, Asunción.jpg" },
        { name: "Jardín Botánico Nacional", wikipedia: "File:Jardín Botánico Asunción.png" },
      ],
    },
    {
      id: 3,
      name: "Pantanal paraguayen",
      region: "Ñeembucú / Alto Paraguay",
      description:
        "La partie paraguayenne du Pantanal (la plus grande zone humide du monde) est quasi-vierge et peu visitée. Caïmans, jaguars, capybaras et oiseaux extraordinaires dans un cadre immaculé.",
      wikipedia: "Pantanal",
      tags: ["Nature", "Faune", "Jaguar", "Zones Humides"],
      mustSee: [
        { name: "Bahía Negra (Alto Paraguay)", wikipedia: "Pantanal" },
        { name: "Parque Nacional Médanos del Chaco", wikipedia: "File:Chaco_Boreal_Paraguay.jpg" },
        { name: "Río Paraguay (pirogue)", wikipedia: "File:Rio Paraguay.jpg" },
      ],
    },
    {
      id: 4,
      name: "Gran Chaco",
      region: "Boquerón",
      description:
        "Le Gran Chaco est une forêt sèche immense et peu connue, deuxième plus grande forêt d'Amérique du Sud après l'Amazonie. Peuples indigènes, colonies mennonites et faune unique (tatous géants, tapirs) dans des paysages désertiques envoûtants.",
      wikipedia: "Gran_Chaco",
      tags: ["Nature", "Faune", "Cultures", "Aventure", "Désert", "Safari"],
      mustSee: [
        { name: "Parque Nacional Defensores del Chaco", wikipedia: "File:Chaco Boreal Paraguay.jpg" },
        { name: "Filadelfia (colonie mennonite)", wikipedia: "File:Filadelfia Paraguay.jpg" },
        { name: "Tatou géant", wikipedia: "Giant_armadillo" },
        { name: "Pozo Colorado (route transchaco)", wikipedia: "File:Pozo_Colorado,_empalme_de_las_rutas_nacionales_PY05_y_PY09..jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Paraguay est l'une des destinations les moins chères d'Amérique du Sud, avec des prix très bas pour l'hébergement et la nourriture.",
    currency: "Guaraní (PYG)",
    exchangeRate: "1€ ≈ 7 500–8 000 PYG",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "6–12 €", detail: "Asunción, peu de choix ailleurs" },
          { label: "Chambre double hôtel simple", price: "20–40 €", detail: "Confort basique, avec AC" },
          { label: "Hôtel 3★ Asunción", price: "50–100 €", detail: "Bon confort, petit-déjeuner inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Sopa paraguaya (pain de maïs)", price: "1–2 €", detail: "Incontournable, dense et savoureux" },
          { label: "Menu du midi local", price: "3–6 €", detail: "Soupe + plat + boisson" },
          { label: "Restaurant mid-range Asunción", price: "8–18 €", detail: "Viande grillée ou cuisine traditionnelle" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus intercités (ex: Asunción–Encarnación)", price: "5–10 €", detail: "3h, confortable et fréquent" },
          { label: "Taxi/Uber Asunción", price: "2–8 €", detail: "Courses urbaines abordables" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Entrée missions jésuites Trinidad", price: "2–5 €", detail: "Très abordable" },
          { label: "Tour Chaco (journée depuis Asunción)", price: "40–80 €", detail: "Avec guide, 4x4 inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–40 €/j", desc: "Auberge, cuisine locale, bus, très abordable", color: "#22c55e" },
      { type: "Confort", daily: "50–90 €/j", desc: "Hôtel 3★, restaurants corrects, excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "120 €+/j", desc: "Meilleurs hôtels, tours privés, estancias", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Asunción – Missions jésuites – Gran Chaco – Pantanal",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Asunción", amount: "700–900 €" },
            { label: "Hébergement (14 nuits)", amount: "150–250 €" },
            { label: "Nourriture", amount: "150–220 €" },
            { label: "Transport local", amount: "80–150 €" },
            { label: "Activités & imprévus", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Asunción", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "450–650 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Transport + excursions", amount: "200–350 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Asunción (Business)", amount: "2 500–3 500 €" },
            { label: "Hébergement (14 nuits)", amount: "900–1 300 €" },
            { label: "Nourriture & restaurants", amount: "350–500 €" },
            { label: "Tours privés & estancias", amount: "400–600 €" },
            { label: "Activités premium", amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~14–16h avec escale (São Paulo, Buenos Aires)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Guaraní (1€ ≈ 7 500–8 000 PYG)" },
    { icon: "🗣️", label: "Langue", value: "Espagnol et guaraní (co-officiels)" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/A – 220 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, quasi inexistant en Chaco profond" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille recommandée" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune recommandé pour certaines zones" },
  ],
};
