export const RWANDA = {
  code: "RWA",
  numericId: 646,
  name: "Rwanda",
  emoji: "🇷🇼",
  capital: "Kigali",
  language: "Kinyarwanda, Français, Anglais",
  currency: "Franc rwandais (RWF)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 60, budgetMid: 150,
    tripMin: 3000, tripMid: 6000,
  },
  description:
    "Le Rwanda, « pays des mille collines », s'est réinventé en modèle de développement africain. Kigali, ville la plus propre d'Afrique, et le parc des Volcans — dernier refuge des gorilles de montagne — font du Rwanda une destination d'exception, à la fois émouvante et inspirante.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Grande saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période pour les gorilles et le Parc des Volcans. Herbe courte, sentiers praticables. Mois de juin au top.",
      icon: "🦍",
    },
    {
      months: "Décembre – Janvier",
      label: "Petite saison sèche",
      color: "#fb923c",
      description:
        "Courte saison sèche, bonnes conditions pour les gorilles et les chimpanzés de la forêt de Nyungwe.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "kigali",
      name: "Kigali",
      region: "Kigali",
      data: [
        { month: "Jan", temp: 21, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 21, rain: 110, icon: "☀️" },
        { month: "Mar", temp: 21, rain: 140, icon: "☀️" },
        { month: "Avr", temp: 21, rain: 170, icon: "☀️" },
        { month: "Mai", temp: 20, rain: 110, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 20,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 60,  icon: "☀️" },
        { month: "Oct", temp: 21, rain: 95,  icon: "☀️" },
        { month: "Nov", temp: 21, rain: 110, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 80,  icon: "☀️" },
      ],
    },
    {
      id: "parc_volcans",
      name: "Parc des Volcans",
      region: "Rwanda Nord",
      data: [
        { month: "Jan", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Fév", temp: 15, rain: 80,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 130, icon: "⛅" },
        { month: "Avr", temp: 14, rain: 180, icon: "⛅" },
        { month: "Mai", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 13, rain: 20,  icon: "⛅" },
        { month: "Jul", temp: 13, rain: 5,   icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Sep", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Oct", temp: 15, rain: 100, icon: "⛅" },
        { month: "Nov", temp: 15, rain: 120, icon: "⛅" },
        { month: "Déc", temp: 15, rain: 70,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Gorilles de montagne — Parc des Volcans",
      region: "Rwanda Nord",
      description:
        "Le Parc national des Volcans est l'un des rares endroits au monde où observer des gorilles de montagne en liberté. Ces primates, proches parents de l'homme, vivent en familles dans les forêts brumeuses des Virunga. Un permis (1 500$) donne accès à une heure inoubliable.",
      wikipedia: "Volcanoes_National_Park",
      tags: ["Gorilles", "Nature", "Unique", "UNESCO", "Safari", "Randonnée"],
      mustSee: [
        { name: "Trekking gorilles de montagne", wikipedia: "Mountain_gorilla" },
        { name: "Volcan Karisimbi (4 507 m)", wikipedia: "Mount_Karisimbi" },
        { name: "Forêt brumeuse des Virunga", wikipedia: "Virunga_Mountains" },
        { name: "Diane Fossey Tomb (Karisoke)", wikipedia: "Dian_Fossey" },
      ],
    },
    {
      id: 2,
      name: "Kigali",
      region: "Kigali",
      description:
        "Kigali est la capitale la plus propre et la plus moderne d'Afrique sub-saharienne : interdiction des sacs plastiques depuis 2008, rues impeccables, gastronomie dynamique. Le Mémorial du Génocide est une visite essentielle pour comprendre l'histoire rwandaise.",
      wikipedia: "Kigali",
      tags: ["Ville", "Moderne", "Mémoire", "Gastronomie", "Histoire", "Architecture"],
      mustSee: [
        { name: "Mémorial du Génocide de Kigali", wikipedia: "Kigali_Genocide_Memorial" },
        { name: "Quartier Kimironko — marché des artisans", wikipedia: "File:Paintings Images.jpg" },
        { name: "Inema Arts Center", wikipedia: "File:Inema Art Center.jpg" },
      ],
    },
    {
      id: 3,
      name: "Forêt de Nyungwe",
      region: "Rwanda Sud-Ouest",
      description:
        "Nyungwe est l'une des forêts tropicales les mieux conservées d'Afrique : 1 000 km² de forêt de montagne abritant des chimpanzés, des colobes angolais (500+), des centaines d'espèces d'oiseaux et une canopée accessible par une passerelle suspendue à 50 m.",
      wikipedia: "File:NYUNGWE.jpg",
      tags: ["Forêt", "Chimpanzés", "Oiseaux", "Canopée", "Randonnée", "Nature", "Safari"],
      mustSee: [
        { name: "Trek chimpanzés de Nyungwe", wikipedia: "Chimpanzee" },
        { name: "Canopy Walk — passerelle à 50 m", wikipedia: "File:Nyungwe canopy walk.jpg" },
        { name: "Colobes angolais (plus grand groupe d'Afrique)", wikipedia: "File:Colobus angolensis.jpg" },
        { name: "Chutes de Kamiranzovu", wikipedia: "File:Kamiranzovu Waterfall.jpg" },
      ],
    },
    {
      id: 4,
      name: "Lac Kivu",
      region: "Rwanda Ouest",
      description:
        "Le lac Kivu, partagé avec la RDC, est l'un des plus beaux lacs d'Afrique : eaux bleues entre collines verdoyantes, îles tropicales à explorer en kayak, plages de Gisenyi et Kibuye, et culture de café de spécialité sur les rives.",
      wikipedia: "File:Along Lake Kivu.jpg",
      tags: ["Lac", "Détente", "Kayak", "Paysages"],
      mustSee: [
        { name: "Gisenyi — bord du lac, plages", wikipedia: "File:Beach in Gisenyi (Rwanda).JPG" },
        { name: "Îles Amahoro & Nkombo (kayak)", wikipedia: "File:Amahoro_Island_in_Kivu.jpg" },
        { name: "Kibuye — ville coloniale & collines", wikipedia: "File:Kibuye view , Rwanda.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Rwanda est cher pour l'Afrique, notamment à cause du permis gorilles (1 500$ l'unité). Kigali est une ville moderne avec des prix intermédiaires. Hors permis et gorilles, le pays reste abordable.",
    currency: "RWF",
    exchangeRate: "1€ ≈ 1 300 RWF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / hôtel local", price: "20–50 €", detail: "Kigali hors luxe" },
          { label: "Lodge mid-range Volcans", price: "150–300 €", detail: "Pension complète" },
          { label: "Lodge luxe (gorilla lodge)", price: "500–1 500 €", detail: "All-inclusive premium" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Brochettes de viande (inshis)", price: "3–6 €", detail: "Street food local" },
          { label: "Restaurant Kigali", price: "10–20 €", detail: "Cuisine rwandaise moderne" },
          { label: "Gastronomie lodge", price: "40–60 €", detail: "Inclus souvent dans le forfait" },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: "Transport",
        items: [
          { label: "Moto-taxi (Kigali)", price: "1–3 €", detail: "Rapide et incontournable" },
          { label: "Minibus Kigali–Ruhengeri", price: "3–5 €", detail: "Vers le parc des Volcans" },
          { label: "Transfert hôtel avec chauffeur", price: "30–60 €", detail: "Pratique et sûr" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Permis gorilles de montagne", price: "1 500 $", detail: "1h avec une famille, quotas limités" },
          { label: "Trek chimpanzés Nyungwe", price: "100–150 €", detail: "Demi-journée guidée" },
          { label: "Canopy Walk Nyungwe", price: "30–50 €", detail: "Passerelle suspendue" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–100 €/j", desc: "Hors permis gorilles : guesthouse + cuisine locale", color: "#22c55e" },
      { type: "Confort", daily: "200–350 €/j", desc: "Lodge mid-range + permis gorilles amorti", color: "#3b82f6" },
      { type: "Luxe", daily: "600 €+/j", desc: "Gorilla lodge all-inclusive + expériences privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Kigali (2j) → Parc des Volcans — gorilles (2j) → Nyungwe (2j) → Lac Kivu (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Kigali", amount: "600–900 €" },
            { label: "Permis gorilles (1 unité)", amount: "1 350 € (1 500$)" },
            { label: "Hébergement (8 nuits)", amount: "250–450 €" },
            { label: "Nourriture & transports", amount: "250–400 €" },
            { label: "Activités Nyungwe & Kivu", amount: "200–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "6 000 – 8 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Kigali", amount: "700–1 000 €" },
            { label: "Permis gorilles (2 unités)", amount: "2 700 € (3 000$)" },
            { label: "Lodges mid-range (8 nuits)", amount: "1 000–1 800 €" },
            { label: "Nourriture & excursions", amount: "600–1 000 €" },
            { label: "Transports & extras", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "14 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Kigali (Business)", amount: "3 000–5 000 €" },
            { label: "Permis gorilles (2–3 unités)", amount: "2 700–4 050 €" },
            { label: "Gorilla lodge 5★ (8 nuits)", amount: "4 000–8 000 €" },
            { label: "Expériences & gastronomie", amount: "800–1 500 €" },
            { label: "Extras", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~8h (RwandAir direct ou Kenya Airways, Brussels Airlines)" },
    { icon: "🪪", label: "Visa",              value: "Visa gratuit à l'arrivée ou e-Visa gratuit en ligne (irembo.gov.rw)" },
    { icon: "💰", label: "Monnaie",           value: "Franc rwandais (1€ ≈ 1 300 RWF) — dollars & euros acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Kinyarwanda + Anglais (officiel) + Français" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/J – 230 V" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture nationale (MTN, Airtel)" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé, fièvre jaune si pays à risque transité" },
  ],
};
