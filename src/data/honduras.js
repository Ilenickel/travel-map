export const HONDURAS = {
  code: "HND",
  numericId: 340,
  name: "Honduras",
  emoji: "🇭🇳",
  capital: "Tegucigalpa",
  language: "Espagnol",
  currency: "Lempira (HNL)",
  timezone: "UTC-6",
  filter: {
    budgetMin: 30, budgetMid: 80,
    tripMin: 1200, tripMid: 2800,
  },
  description:
    "Le Honduras est la destination confidentielle d'Amérique centrale : Copán, l'une des grandes cités mayas classée UNESCO, les îles Bay Islands aux récifs parmi les plus riches de la Mésoamérique — et Utila, paradis mondial de la certification de plongée à petit prix.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période pour Copán, les îles et les randonnées. Températures agréables, mer calme, excellent pour la plongée.",
      icon: "🐚",
    },
    {
      months: "Mars – Juin",
      label: "Requins-baleines (Utila)",
      color: "#3b82f6",
      description:
        "Saison principale des requins-baleines à Utila (mars–juin). Eau chaude et claire malgré quelques pluies.",
      icon: "🦈",
    },
  ],

  weatherCities: [
    {
      id: "tegucigalpa",
      name: "Tegucigalpa",
      region: "Centre",
      data: [
        { month: "Jan", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Mar", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 80,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 110, icon: "☀️" },
        { month: "Jul", temp: 24, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 90,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 110, icon: "☀️" },
        { month: "Oct", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 30,  icon: "☀️" },
        { month: "Déc", temp: 21, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "bay_islands",
      name: "Bay Islands (Roatán)",
      region: "Caraïbes",
      data: [
        { month: "Jan", temp: 26, rain: 100, icon: "☀️" },
        { month: "Fév", temp: 26, rain: 70,  icon: "☀️" },
        { month: "Mar", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 230, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Déc", temp: 26, rain: 130, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Copán",
      region: "Copán",
      description:
        "Copán est l'une des cités mayas les plus élaborées artistiquement : ses stèles sculptées, son Escalier Hiéroglyphique (la plus longue inscription maya du monde) et ses places cérémonielles rivalisant avec Tikal. Les aras rouges volent librement au-dessus du site.",
      wikipedia: "Copán",
      tags: ["UNESCO", "Mayas", "Archéologie", "Art"],
      mustSee: [
        { name: "Escalier Hiéroglyphique (2 200 glyphes)", wikipedia: "File:Stela_M_and_the_Hieroglyphic_Stairway_on_the_archeological_site_of_Copán,_a_mayan_city.jpg" },
        { name: "Acropole et temples sculptés", wikipedia: "Copán_Ruinas" },
        { name: "Macaw Mountain — aras rouges en liberté", wikipedia: "Scarlet_macaw" },
        { name: "Musée de la sculpture Maya de Copán", wikipedia: "File:Museo de la escultura de Copán en 2025 01.jpg" },
      ],
    },
    {
      id: 2,
      name: "Roatán",
      region: "Bay Islands",
      description:
        "Roatán est l'île principale des Bay Islands, posée sur la barrière de corail mésoaméricaine. West Bay Beach figure parmi les plus belles plages des Caraïbes et les récifs y offrent une plongée exceptionnelle, accessibles en snorkel depuis la rive.",
      wikipedia: "Roatán",
      tags: ["Plage", "Plongée", "Récifs", "Île"],
      mustSee: [
        { name: "West Bay Beach — plongée depuis la plage", wikipedia: "West_Bay,_Roatán" },
        { name: "Barrière corallienne mésoaméricaine", wikipedia: "Mesoamerican_Barrier_Reef_System" },
        { name: "Arch's Iguana & Marine Park", wikipedia: "File:Green iguana, Roatán, Honduras.jpg" },
        { name: "Tour en kayak de mer des mangroves", wikipedia: "File:Coxen Hole2 Roatan Honduras 2025.jpg" },
      ],
    },
    {
      id: 3,
      name: "Utila — Capital mondiale du PADI",
      region: "Bay Islands",
      description:
        "Utila est célèbre dans le monde entier pour deux raisons : c'est l'endroit le moins cher pour apprendre à plonger (PADI), et l'un des rares endroits au monde où observer des requins-baleines depuis la côte (mars–juin). Une île bohème et accessible.",
      wikipedia: "File:Utila, Islas de la Bahía.jpg",
      tags: ["Plongée", "Requins-baleines", "Bon plan", "Île"],
      mustSee: [
        { name: "Requins-baleines (mars–juin, depuis Utila)", wikipedia: "Whale_shark" },
        { name: "Certification PADI Open Water (~200€)", wikipedia: "File:Discover Scuba Diving -- St. Croix, US Virgin Islands.jpg" },
        { name: "Bioluminescence la nuit dans la baie", wikipedia: "Bioluminescence" },
        { name: "Plongée nuit — poulpes et murènes", wikipedia: "Moray_eel" },
      ],
    },
    {
      id: 4,
      name: "Lago de Yojoa",
      region: "Centre",
      description:
        "Le Lago de Yojoa est le plus grand lac naturel du Honduras : un paradis pour le birdwatching (400+ espèces d'oiseaux), entouré de forêts nuageuses, avec les chutes Pulhapanzak à couper le souffle et la microbrasserie D&D — surprenante au fond des tropiques.",
      wikipedia: "Lake_Yojoa",
      tags: ["Nature", "Oiseaux", "Randonnée", "Insolite"],
      mustSee: [
        { name: "Birdwatching (400+ espèces, dont toucans)", wikipedia: "Keel-billed_toucan" },
        { name: "Chutes de Pulhapanzak (43 m)", wikipedia: "File:Cataratas de Pulhapanzak (III).JPG" },
        { name: "Parc Cerro Azul Meámbar — forêt nuageuse", wikipedia: "Cerro_Azul_Meámbar_National_Park" },
        { name: "Brasserie D&D — bières artisanales au lac", wikipedia: "Lake_Yojoa" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Honduras est l'un des pays les moins chers d'Amérique centrale, surtout hors des îles. Utila est un vrai bon plan : y apprendre à plonger revient deux fois moins cher qu'ailleurs. La lempira est très faible face à l'euro.",
    currency: "HNL",
    exchangeRate: "1€ ≈ 27 HNL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel / guesthouse locale", price: "10–20 €", detail: "Tegucigalpa ou Copán" },
          { label: "Hôtel de plage Roatán", price: "50–100 €", detail: "Vue mer, ventilateur ou clim" },
          { label: "Resort Roatán tout inclus", price: "200–400 €", detail: "All-inclusive face au récif" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Baleadas (tortilla + haricots)", price: "1–2 €", detail: "Street food national" },
          { label: "Fruits de mer frais (Roatán)", price: "10–20 €", detail: "Langouste, poisson grillé" },
          { label: "Restaurant occidental (Utila)", price: "8–15 €", detail: "Cuisine internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Tegucigalpa–San Pedro Sula", price: "5–10 €", detail: "Confortable, 3h30" },
          { label: "Ferry La Ceiba–Utila ou Roatán", price: "15–20 €", detail: "1h30 bateau rapide" },
          { label: "Vol intérieur Tegucigalpa–Roatán", price: "60–130 €", detail: "Aller simple, 45 min" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée site de Copán", price: "15 €", detail: "Inclut le tunnel maya" },
          { label: "Certification PADI (Utila)", price: "200–250 €", detail: "Formation complète open water" },
          { label: "Excursion requins-baleines", wikipedia: "Whale_shark", price: "50–80 €", detail: "Snorkel ou apnée" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse + baleadas + bus", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel de plage + restos + plongée", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Resort Roatán all-inclusive + guide privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Copán (2j) → San Pedro Sula (1j) → Utila (3j) → Roatán (3j) → Lac Yojoa (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Honduras", amount: "450–700 €" },
            { label: "Hébergement (10 nuits)", amount: "200–300 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Ferries & transports", amount: "100–200 €" },
            { label: "Activités & plongée", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Honduras", amount: "600–900 €" },
            { label: "Hébergement (10 nuits)", amount: "700–1 100 €" },
            { label: "Nourriture & bars", amount: "400–600 €" },
            { label: "Vols intérieurs + ferries", amount: "350–500 €" },
            { label: "Plongées & excursions", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Honduras (Business)", amount: "2 000–3 500 €" },
            { label: "Resorts Roatán (10 nuits)", amount: "2 500–4 000 €" },
            { label: "Gastronomie & spa", amount: "500–800 €" },
            { label: "Transferts privés & vols charters", amount: "500–800 €" },
            { label: "Extras", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~13h avec escale (via Miami ou Atlanta)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours CA-4 (Guatemala, Honduras, El Salvador, Nicaragua)" },
    { icon: "💰", label: "Monnaie",           value: "Lempira (1€ ≈ 27 HNL) — dollars US largement acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol (officiel) — anglais sur les Bay Islands" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 110 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture Tegucigalpa et villes, correcte sur îles" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé sur le continent (pas sur les îles)" },
  ],
};
