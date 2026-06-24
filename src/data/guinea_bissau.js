export const GUINEA_BISSAU = {
  code: "GNB",
  numericId: 624,
  name: "Guinée-Bissau",
  emoji: "🇬🇼",
  capital: "Bissau",
  language: "Portugais (officiel), Créole bissau-guinéen (crioulo)",
  currency: "Franc CFA (XOF)",
  timezone: "UTC",
  filter: {
    budgetMin: 25, budgetMid: 55,
    tripMin: 700, tripMid: 1400,
  },
  description:
    "La Guinée-Bissau est l'une des destinations les plus secrètes d'Afrique de l'Ouest. L'archipel des Bijagos, réserve de biosphère de l'UNESCO composée de 88 îles habitées d'espèces rares, est un paradis pour les amateurs de nature sauvage. Entre hippopotames pygmées, lamantins, tortues marines et villages animistes aux rites ancestraux, ce petit pays lusophone réserve des découvertes exceptionnelles.",

  bestPeriods: [
    {
      months: "Novembre – Mai",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison sèche et agréable, idéale pour visiter les îles Bijagos, la côte et l'intérieur du pays. Température clémente de 25–30°C, pas de pluie, accès facile aux îles.",
      icon: "☀️",
    },
    {
      months: "Juin – Octobre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Saison des pluies très intenses avec 500–800 mm/mois. Routes dégradées, îles difficiles d'accès, humidité extrême. Déconseillé pour le tourisme.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "bissau",
      name: "Bissau",
      region: "Bissau (côte)",
      data: [
        { month: "Jan", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Avr", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 500, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 550, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 400, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Archipel des Bijagos",
      region: "Archipel des Bijagos",
      description:
        "L'archipel des Bijagos est une réserve de biosphère de l'UNESCO composée de 88 îles, dont seulement 20 sont habitées. Ce sanctuaire marin abrite des hippopotames pygmées, des lamantins, des buffles sauvages et des dizaines d'espèces d'oiseaux. Les Bijagos, peuple matriarcal aux rites animistes forts, vivent en quasi-autarcie sur leurs îles.",
      wikipedia: "File:L'Archipel des Bijagos vu par Sentinel 2.jpg",
      tags: ["UNESCO", "Nature", "Îles", "Animisme"],
      mustSee: [
        { name: "Île d'Orango — hippopotames marins", wikipedia: "File:Lagoa_com_hipopótamos_03_(cropped).jpg" },
        { name: "Île de Bubaque — centre de l'archipel", wikipedia: "Bubaque" },
        { name: "Île de Poilão — nidification de tortues marines", wikipedia: "File:Détails Tortues 07.jpg" },
      ],
    },
    {
      id: 2,
      name: "Bolama",
      region: "Région de Bolama",
      description:
        "Bolama, ancienne capitale coloniale portugaise, est une ville-fantôme magnifique envahie par la végétation tropicale. Ses bâtiments néo-classiques en ruines et son atmosphère mélancolique en font un lieu de photographie unique, loin des circuits touristiques classiques.",
      wikipedia: "File:Viagem_de_Bissau_para_Bolama,_Guiné-Bissau_–_2018-03-02_–_DSCN0996.jpg",
      tags: ["Histoire", "Colonial", "Ruines", "Photo"],
      mustSee: [
        { name: "Palais du gouverneur colonial en ruines", wikipedia: "File:Bolama ruins.jpg" },
        { name: "Coucher de soleil sur l'estuaire", wikipedia: "File:Porto de Bolama 06.jpg" },
      ],
    },
    {
      id: 3,
      name: "Bissau",
      region: "Bissau",
      description:
        "La capitale de la Guinée-Bissau est une ville à taille humaine, détendue et authentique. Le marché de Bandim, le Museu Nacional, les ruines du Fort de São José de Amura et les quartiers aux maisons coloniales délabrées forment un portrait attachant de cette capitale peu connue.",
      wikipedia: "Bissau",
      tags: ["Ville", "Marché", "Histoire", "Coloniale"],
      mustSee: [
        { name: "Marché de Bandim — cœur animé de Bissau", wikipedia: "File:Avenida_dos_Combatentes_da_Liberdade_da_Pátria,_Bissau_(2).jpg" },
        { name: "Fort de São José de Amura (XVIII°)", wikipedia: "File:Interior_da_Fortaleza_de_São_José_de_Amura,_Bissau.jpg" },
        { name: "Museu Nacional da Guiné-Bissau", wikipedia: "File:DC - Foto Serra No 143 - Museu (Bissau).jpg" },
      ],
    },
    
  ],

  costOfLiving: {
    intro:
      "La Guinée-Bissau est l'une des destinations les moins chères d'Afrique de l'Ouest. L'infrastructure touristique est minimale, surtout dans les îles, et les options de confort sont limitées. Le franc CFA (partagé avec le Sénégal) est la monnaie, facilitant les échanges.",
    currency: "XOF",
    exchangeRate: "1€ = 656 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse locale / chambre villageoise", price: "8–20 €", detail: "Simple, avec moustiquaire" },
          { label: "Auberge ou pension à Bissau", price: "20–40 €", detail: "Clim, eau courante" },
          { label: "Lodge ou camp sur les îles Bijagos", price: "40–80 €", detail: "Repas souvent inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas de rue (riz, sauce arachide)", price: "1–3 €", detail: "Cuisine locale authentique" },
          { label: "Restaurant local à Bissau", price: "4–8 €", detail: "Poisson frais, riz jollof" },
          { label: "Restaurant touristique / lodge", price: "10–20 €", detail: "Poisson de mer, fruits tropicaux" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Pirogue Bissau–Bubaque (Bijagos)", price: "10–20 €", detail: "3–4h de traversée" },
          { label: "Taxi-moto (Jakarta) à Bissau", price: "0,50–2 €", detail: "Transport local courant" },
          { label: "Location de pirogue pour les îles", price: "40–80 €/j", detail: "Avec pagayeur" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Observation hippopotames en pirogue", price: "15–30 €", detail: "Guide local obligatoire" },
          { label: "Visite village bijagos avec guide", price: "10–20 €", detail: "Donation à la communauté" },
          { label: "Plongée / snorkeling (Bijagos)", price: "30–50 €", detail: "Eaux cristallines, faune riche" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–45 €/j", desc: "Guesthouse + nourriture locale + pirogue partagée", color: "#22c55e" },
      { type: "Confort", daily: "55–90 €/j", desc: "Lodge Bijagos + repas + pirogues privatisées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Bissau (2j) → Archipel Bijagos : Bubaque + Orango (5j) → Cantanhez (2j) → Bolama (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "700 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bissau (via Dakar ou Lisbonne)", amount: "350–500 €" },
            { label: "Hébergement (10 nuits)", amount: "150–250 €" },
            { label: "Transports locaux + pirogues", amount: "100–150 €" },
            { label: "Nourriture + boissons", amount: "80–120 €" },
            { label: "Activités + guides", amount: "80–120 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 400 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bissau (via Dakar ou Lisbonne)", amount: "400–600 €" },
            { label: "Hébergement lodges (10 nuits)", amount: "450–700 €" },
            { label: "Transports + pirogues privatisées", amount: "250–350 €" },
            { label: "Nourriture + boissons", amount: "150–200 €" },
            { label: "Activités + plongée + guides", amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",    value: "~8h (via Dakar ou Lisbonne — pas de vol direct)" },
    { icon: "🪪", label: "Visa",                value: "Visa obligatoire — obtenu à l'arrivée (environ 20 €) ou à l'ambassade" },
    { icon: "💰", label: "Monnaie",             value: "Franc CFA (1€ = 656 XOF) — espèces indispensables, peu de DAB" },
    { icon: "🗣️", label: "Langue",              value: "Portugais (officiel) + crioulo bissau-guinéen (langue véhiculaire)" },
    { icon: "🔌", label: "Prise électrique",    value: "Type C — 220 V (coupures de courant fréquentes)" },
    { icon: "💊", label: "Santé",               value: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement" },
    { icon: "🏝️", label: "Îles Bijagos",        value: "Accès en pirogue depuis Bissau (3–5h) — planifier logistique à l'avance" },
    { icon: "📱", label: "Réseau",              value: "Couverture mobile limitée, inexistante dans les îles — prévoir connexion minimale" },
  ],
};
