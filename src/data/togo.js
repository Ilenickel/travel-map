export const TOGO = {
  code: "TGO",
  numericId: 768,
  name: "Togo",
  emoji: "🇹🇬",
  capital: "Lomé",
  language: "Français, Ewe, Kabiyé",
  currency: "Franc CFA (XOF)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 30, budgetMid: 75,
    tripMin: 1100, tripMid: 2200,
  },
  description:
    "Le Togo est un corridor étroit entre Ghana et Bénin : Lomé et son Grand Marché des Fétiches (vaudou en plein air), les villages perchés des Tamberma sur la route des châteaux de banco (UNESCO), les cascades de Kpalimé dans la forêt tropicale, et les plages de la côte atlantique. Un pays ignoré qui récompense les curieux.",

  bestPeriods: [
    {
      months: "Novembre – Mars",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Idéal pour voyager : harmattan frais, ciel dégagé. Routes praticables dans tout le pays. Nord sec et accessible.",
      icon: "☀️",
    },
    {
      months: "Juin – Septembre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Pluies régulières au sud, routes de brousse difficiles, nord moins touché mais chaud. Moins favorable.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "lome",
      name: "Lomé",
      region: "Maritime (côte)",
      data: [
        { month: "Jan", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "⛅" },
      ],
    },
    {
      id: "kara",
      name: "Kara",
      region: "Kara (nord-centre)",
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 33, rain: 40,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 80,  icon: "🌡️" },
        { month: "Mai", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lomé — Marché des Fétiches",
      region: "Maritime",
      description:
        "Le Grand Marché des Fétiches de Lomé (Akodessewa) est le plus grand marché vaudou du monde : des milliers de crânes d'animaux, peaux, plantes médicinales et fétiches utilisés par les guérisseurs. Un spectacle saisissant qui n'existe nulle part ailleurs. Le front de mer de Lomé, la seule capitale africaine directement sur l'Atlantique, complète la visite.",
      wikipedia: "Lomé",
      tags: ["Vaudou", "Marché", "Unique", "Capitale"],
      mustSee: [
        { name: "Marché des Fétiches d'Akodessewa — le plus grand marché vaudou du monde", wikipedia: "File:Akodessawa Fetish Market 2016.jpg" },
        { name: "Front de mer de Lomé — la seule capitale africaine sur l'Atlantique", wikipedia: "File:Lome Beach Togo 1.jpg" },
        { name: "Grand Marché de Lomé — tissus, artisanat", wikipedia: "File:Lomé Grand Market in full swing.jpg" },
        { name: "Palais des congrès", wikipedia: "File:Lomé-Palais des Congrès.jpg" },
      ],
    },
    {
      id: 2,
      name: "Koutammakou — Châteaux Tamberma",
      region: "Kara",
      description:
        "Le pays Tamberma (UNESCO) dans le nord du Togo est parsemé de tata — des maisons-châteaux en banco à deux étages, construites comme des forteresses avec des tours de guet et des greniers à mil. Cette architecture unique, vieille de plusieurs siècles, reflète la résistance des Tamberma aux razzias esclavagistes. Un paysage hors du commun, habité.",
      wikipedia: "Koutammakou",
      tags: ["UNESCO", "Architecture", "Culture", "Unique"],
      mustSee: [
        { name: "Village de Nadoba — tatas Tamberma les mieux conservés", wikipedia: "File:Les Tata de koutammakou 03.jpg" },
        { name: "Paysage de la plaine Tamberma au coucher de soleil", wikipedia: "File:Paysage tata 01.jpg" },
      ],
    },
    {
      id: 3,
      name: "Kpalimé — Forêt et cascades",
      region: "Plateaux",
      description:
        "Kpalimé et sa région constituent le poumon vert du Togo : forêt tropicale dense, cascades de Kpimé et de Wome, fermes de papillons, plantations de café et de cacao. Le mont Agou (986m, point culminant du Togo) s'y trouve. Une région fraîche et verdoyante, idéale pour la randonnée.",
      wikipedia: "Kpalimé",
      tags: ["Nature", "Randonnée", "Cascades", "Forêt"],
      mustSee: [
        { name: "Cascades de Kpimé (1h de Kpalimé)", wikipedia: "File:Vue de la cascade de Kpimé, Kpalimé 01.jpg" },
        { name: "Mont Agou (986m) — point culminant du Togo", wikipedia: "Mount_Agou" },
        { name: "Plantations de café et cacao — balades pédestres", wikipedia: "File:Cacao à kpalimé 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Togo est l'une des destinations les plus abordables d'Afrique de l'Ouest. Le franc CFA arrimé à l'euro facilite la gestion du budget. Lomé est la plus chère des villes, mais reste très abordable comparée aux standards européens.",
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre simple", price: "10–25 €", detail: "Ventilateur ou clim basique" },
          { label: "Hôtel 3★ confort (Lomé, Kpalimé)", price: "45–80 €", detail: "Clim, salle de bain privée, wifi" },
          { label: "Hôtel de luxe Lomé (Radisson, Sarakawa)", price: "120–200 €", detail: "Standard international" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pâte / sauces dans un buvette locale", price: "1–3 €", detail: "Cuisine togolaise typique" },
          { label: "Restaurant mid-range Lomé", price: "7–15 €", detail: "Poisson, viande, menu complet" },
          { label: "Restaurant gastronomique Lomé", price: "20–40 €", detail: "Cuisine française et fusion" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Moto-taxi (zemidjan) — trajet urbain", price: "0,30–1 €", detail: "Transport populaire Lomé" },
          { label: "Bus / bush taxi (Lomé–Kpalimé, 2h)", price: "3–5 €", detail: "Transport interurbain local" },
          { label: "Location voiture avec chauffeur / journée", price: "50–80 €", detail: "Recommandé pour nord Togo" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée Marché des Fétiches", price: "5–15 €", detail: "Guide local conseillé" },
          { label: "Trek vers les cascades de Kpimé (guide)", price: "10–20 €", detail: "Demi-journée" },
          { label: "Visite pays Tamberma avec guide", price: "20–40 €", detail: "Journée depuis Kara" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–55 €/j", desc: "Guesthouse + cuisine locale + moto-taxi", color: "#22c55e" },
      { type: "Confort", daily: "75–120 €/j", desc: "Hôtel 3★ + restaurants + excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Grand hôtel Lomé + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Lomé (3j) → Kpalimé (2j) → Atakpamé (1j) → Kara (2j) → Koutammakou (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lomé", amount: "500–700 €" },
            { label: "Hébergement (10 nuits)", amount: "200–300 €" },
            { label: "Transports locaux", amount: "100–200 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités & guides", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lomé", amount: "550–750 €" },
            { label: "Hébergement (10 nuits)", amount: "600–900 €" },
            { label: "Location voiture / chauffeur", amount: "350–550 €" },
            { label: "Nourriture & sorties", amount: "350–550 €" },
            { label: "Guides & excursions", amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h (Ethiopian Airlines via Addis, Air France via escale, parfois Corsair)" },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée possible (30€) ou e-Visa en ligne. Valable 7 à 30 jours." },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces essentielles hors Lomé." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel) — communication facile. Ewe au sud, Kabiyé au nord." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable toute l'année." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Couverture 4G à Lomé. Nord du pays : couverture limitée. SIM Togocel locale recommandée." },
  ],
};
