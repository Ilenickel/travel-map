export const PARAGUAY = {
  code: "PRY",
  numericId: 600,
  name: { fr: "Paraguay", en: "Paraguay" },
  emoji: "🇵🇾",
  capital: { fr: "Asunción", en: "Asunción" },
  language: { fr: "Espagnol, guaraní", en: "Spanish, Guaraní" },
  currency: { fr: "Guaraní (PYG)", en: "Guaraní (PYG)" },
  timezone: "UTC-4 (été) / UTC-3 (hiver)",
  filter: {
    budgetMin: 25,
    budgetMid: 50,
    tripMin: 1100,
    tripMid: 2000,
  },
  description: {
    fr: "Le Paraguay est l'une des destinations les plus méconnues et authentiques d'Amérique du Sud. Pays bilingue espagnol-guaraní, il fascine par ses missions jésuites du XVIIe siècle, sa nature sauvage (Pantanal paraguayen, Chaco) et sa culture singulière. Très abordable et peu touristique.",
    en: "Paraguay is one of the most little-known and authentic destinations in South America. A bilingual Spanish-Guaraní country, it fascinates with its 17th-century Jesuit missions, wild nature (Paraguayan Pantanal, Chaco) and unique culture. Very affordable and off the tourist trail.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Saison sèche et fraîche", en: "Dry and cool season" },
      color: "#fbbf24",
      description: {
        fr: "Températures agréables (15–25 °C), routes praticables, idéal pour le Chaco et les missions jésuites.",
        en: "Pleasant temperatures (15–25 °C), passable roads, ideal for the Chaco and the Jesuit missions.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November" },
      label: { fr: "Printemps (nature en fleur)", en: "Spring (nature in bloom)" },
      color: "#86efac",
      description: {
        fr: "Paisaje florido : le lapacho rose en fleur transforme les villes. Avant les grandes chaleurs et pluies.",
        en: "Paisaje florido: the blooming pink lapacho trees transform the towns. Before the peak heat and rains.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "asuncion",
      name: "Asunción",
      region: { fr: "Région Centrale", en: "Central Region" },
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
      region: { fr: "Itapúa (Sud)", en: "Itapúa (South)" },
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
      name: { fr: "Missions jésuites", en: "Jesuit missions" },
      region: { fr: "Itapúa", en: "Itapúa" },
      description: {
        fr: "Les ruines des missions jésuites du XVIIe siècle sont parmi les plus impressionnantes d'Amérique du Sud. La Santísima Trinidad de Paraná et Jesús de Tavarangue, inscrites au patrimoine UNESCO, témoignent d'une utopie sociale unique.",
        en: "The ruins of the 17th-century Jesuit missions are among the most impressive in South America. The Santísima Trinidad de Paraná and Jesús de Tavarangue, both UNESCO World Heritage sites, bear witness to a unique social utopia.",
      },
      wikipedia: "File:San_Ignacio_Miní_Jesuit-Guarani_mission_1.jpg",
      tags: ["Histoire", "UNESCO", "Jésuites", "Ruines", "Architecture"],
      mustSee: [
        { name: { fr: "Trinidad (mission)", en: "Trinidad (mission)" }, wikipedia: "File:ParaguayTrinidadReduction.jpg" },
        { name: "Jesús de Tavarangüé", wikipedia: "File:Jesús de Tavarangue - Church ruins 02.jpg" },
        { name: "San Cosme y Damián", wikipedia: "File:Prefectura de San Cosme y Damián 025 filtered.jpg" },
        { name: { fr: "Encarnación (carnaval)", en: "Encarnación (carnival)" }, wikipedia: "File:Carnaval of Encarnación 230257.jpg" },
      ],
    },
    {
      id: 2,
      name: "Asunción",
      region: { fr: "Gran Asunción", en: "Gran Asunción" },
      description: {
        fr: "La capitale est l'une des plus anciennes d'Amérique du Sud (fondée en 1537). Son Casco Histórico mêle architecture coloniale et édifices du XIXe siècle. Le Mercado 4 et les Bañados (zones humides urbaines) offrent un dépaysement total.",
        en: "The capital is one of the oldest in South America (founded in 1537). Its Casco Histórico blends colonial architecture with 19th-century buildings. The Mercado 4 and the Bañados (urban wetlands) offer a complete change of scenery.",
      },
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
      name: { fr: "Pantanal paraguayen", en: "Paraguayan Pantanal" },
      region: { fr: "Ñeembucú / Alto Paraguay", en: "Ñeembucú / Alto Paraguay" },
      description: {
        fr: "La partie paraguayenne du Pantanal (la plus grande zone humide du monde) est quasi-vierge et peu visitée. Caïmans, jaguars, capybaras et oiseaux extraordinaires dans un cadre immaculé.",
        en: "The Paraguayan part of the Pantanal (the largest wetland in the world) is nearly untouched and rarely visited. Caimans, jaguars, capybaras and extraordinary birdlife in a pristine setting.",
      },
      wikipedia: "Pantanal",
      tags: ["Nature", "Faune", "Jaguar", "Zones Humides"],
      mustSee: [
        { name: "Bahía Negra (Alto Paraguay)", wikipedia: "Pantanal" },
        { name: "Parque Nacional Médanos del Chaco", wikipedia: "File:Chaco_Boreal_Paraguay.jpg" },
        { name: { fr: "Río Paraguay (pirogue)", en: "Río Paraguay (canoe)" }, wikipedia: "File:Rio Paraguay.jpg" },
      ],
    },
    {
      id: 4,
      name: "Gran Chaco",
      region: { fr: "Boquerón", en: "Boquerón" },
      description: {
        fr: "Le Gran Chaco est une forêt sèche immense et peu connue, deuxième plus grande forêt d'Amérique du Sud après l'Amazonie. Peuples indigènes, colonies mennonites et faune unique (tatous géants, tapirs) dans des paysages désertiques envoûtants.",
        en: "The Gran Chaco is a vast, little-known dry forest, the second-largest forest in South America after the Amazon. Indigenous peoples, Mennonite colonies and unique wildlife (giant armadillos, tapirs) amid captivating desert landscapes.",
      },
      wikipedia: "Gran_Chaco",
      tags: ["Nature", "Faune", "Cultures", "Aventure", "Désert", "Safari"],
      mustSee: [
        { name: "Parque Nacional Defensores del Chaco", wikipedia: "File:Chaco Boreal Paraguay.jpg" },
        { name: { fr: "Filadelfia (colonie mennonite)", en: "Filadelfia (Mennonite colony)" }, wikipedia: "File:Filadelfia Paraguay.jpg" },
        { name: { fr: "Tatou géant", en: "Giant armadillo" }, wikipedia: "Giant_armadillo" },
        { name: { fr: "Pozo Colorado (route transchaco)", en: "Pozo Colorado (Trans-Chaco highway)" }, wikipedia: "File:Pozo_Colorado,_empalme_de_las_rutas_nacionales_PY05_y_PY09..jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Paraguay est l'une des destinations les moins chères d'Amérique du Sud, avec des prix très bas pour l'hébergement et la nourriture.",
      en: "Paraguay is one of the cheapest destinations in South America, with very low prices for accommodation and food.",
    },
    currency: "Guaraní (PYG)",
    exchangeRate: "1€ ≈ 7 500–8 000 PYG",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Youth hostel dorm" }, price: "6–12 €", detail: { fr: "Asunción, peu de choix ailleurs", en: "Asunción, few options elsewhere" } },
          { label: { fr: "Chambre double hôtel simple", en: "Simple hotel double room" }, price: "20–40 €", detail: { fr: "Confort basique, avec AC", en: "Basic comfort, with AC" } },
          { label: { fr: "Hôtel 3★ Asunción", en: "3★ hotel in Asunción" }, price: "50–100 €", detail: { fr: "Bon confort, petit-déjeuner inclus", en: "Good comfort, breakfast included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Sopa paraguaya (pain de maïs)", en: "Sopa paraguaya (corn bread)" }, price: "1–2 €", detail: { fr: "Incontournable, dense et savoureux", en: "A must-try, dense and tasty" } },
          { label: { fr: "Menu du midi local", en: "Local lunch set" }, price: "3–6 €", detail: { fr: "Soupe + plat + boisson", en: "Soup + main + drink" } },
          { label: { fr: "Restaurant mid-range Asunción", en: "Mid-range restaurant in Asunción" }, price: "8–18 €", detail: { fr: "Viande grillée ou cuisine traditionnelle", en: "Grilled meat or traditional cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus intercités (ex: Asunción–Encarnación)", en: "Intercity bus (e.g. Asunción–Encarnación)" }, price: "5–10 €", detail: { fr: "3h, confortable et fréquent", en: "3h, comfortable and frequent" } },
          { label: { fr: "Taxi/Uber Asunción", en: "Taxi/Uber in Asunción" }, price: "2–8 €", detail: { fr: "Courses urbaines abordables", en: "Affordable city rides" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Entrée missions jésuites Trinidad", en: "Trinidad Jesuit mission entry" }, price: "2–5 €", detail: { fr: "Très abordable", en: "Very affordable" } },
          { label: { fr: "Tour Chaco (journée depuis Asunción)", en: "Chaco tour (day trip from Asunción)" }, price: "40–80 €", detail: { fr: "Avec guide, 4x4 inclus", en: "With guide, 4x4 included" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Auberge, cuisine locale, bus, très abordable", en: "Hostel, local food, bus, very affordable" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "50–90 €/j", desc: { fr: "Hôtel 3★, restaurants corrects, excursions", en: "3★ hotel, decent restaurants, excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "120 €+/j", desc: { fr: "Meilleurs hôtels, tours privés, estancias", en: "Best hotels, private tours, estancias" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Asunción – Missions jésuites – Gran Chaco – Pantanal", en: "Asunción – Jesuit missions – Gran Chaco – Pantanal" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asunción", en: "Return flight Paris–Asunción" }, amount: "700–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–220 €" },
            { label: { fr: "Transport local", en: "Local transport" }, amount: "80–150 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asunción", en: "Return flight Paris–Asunción" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "450–650 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Transport + excursions", en: "Transport + excursions" }, amount: "200–350 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asunción (Business)", en: "Return flight Paris–Asunción (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "900–1 300 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "350–500 €" },
            { label: { fr: "Tours privés & estancias", en: "Private tours & estancias" }, amount: "400–600 €" },
            { label: { fr: "Activités premium", en: "Premium activities" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~14–16h avec escale (São Paulo, Buenos Aires)", en: "~14–16h with a layover (São Paulo, Buenos Aires)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Guaraní (1€ ≈ 7 500–8 000 PYG)", en: "Guaraní (1€ ≈ 7,500–8,000 PYG)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol et guaraní (co-officiels)", en: "Spanish and Guaraní (co-official)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/A – 220 V (adaptateur conseillé)", en: "Type C/A — 220V (adapter recommended)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "4G dans les villes, quasi inexistant en Chaco profond", en: "4G in towns, almost nonexistent in the deep Chaco" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable, eau en bouteille recommandée", en: "Not drinkable, bottled water recommended" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune recommandé pour certaines zones", en: "Yellow fever vaccine recommended for certain areas" } },
  ],
};
