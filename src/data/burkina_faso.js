export const BURKINA_FASO = {
  code: "BFA",
  numericId: 854,
  name: "Burkina Faso",
  emoji: "🇧🇫",
  capital: "Ouagadougou",
  language: "Français, Mooré, Dioula, Fulfuldé",
  currency: "Franc CFA (XOF)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1300, tripMid: 2500,
  },
  description:
    "Le Burkina Faso est un pays enclavé du Sahel longtemps réputé pour son hospitalité légendaire, le FESPACO (plus grand festival de cinéma africain), les masques sacrés Mossi, la falaise de Banfora avec ses cascades et hippotragues, et les sites de la Comoé. Attention : la situation sécuritaire au nord et à l'est est très dégradée depuis 2019 — vérifier les avis aux voyageurs AVANT tout départ.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche et fraîche",
      color: "#22c55e",
      description:
        "Meilleure période : harmattan frais (20–30°C), ciel dégagé, routes praticables. Période idéale pour visiter Ouaga et le sud-ouest.",
      icon: "☀️",
    },
    {
      months: "Mars – Mai",
      label: "Saison chaude et sèche",
      color: "#f59e0b",
      description:
        "Températures élevées (35–42°C), harmattan poussiéreux. Pénible mais sec. Moins favorable.",
      icon: "🌡️",
    },
    {
      months: "Juin – Septembre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Pluies (80–150mm/mois), routes de brousse difficiles. Nord et sahel très chauds même avec pluie.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "ouagadougou",
      name: "Ouagadougou",
      region: "Plateau Central",
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 10,  icon: "🌡️" },
        { month: "Avr", temp: 35, rain: 20,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 40,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 25, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "banfora",
      name: "Banfora",
      region: "Cascades (sud-ouest)",
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 32, rain: 10,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 30,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 250, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 210, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Ouagadougou — Culture et FESPACO",
      region: "Plateau Central",
      description:
        "Ouagadougou ('Ouaga') est la capitale culturelle d'Afrique de l'Ouest : le FESPACO (Festival Panafricain du Cinéma, années impaires en février) est le plus grand festival de cinéma africain au monde. Le Grand Marché, le Musée National et les centres culturels (Institut Français, Espace Camille Guichard) vibrent. La scène musicale (djembe, balafon) est exceptionnelle.",
      wikipedia: "Ouagadougou",
      tags: ["Culture", "FESPACO", "Cinéma", "Musique"],
      mustSee: [
        { name: "FESPACO — Festival Panafricain du Cinéma (années impaires, février)", wikipedia: "File:Siege FESPACO Ouaga.jpg" },
        { name: "Musée National du Burkina Faso — masques et bronzes Mossi", wikipedia: "File:Théâtre de plein air au musée national du Burkina Faso.jpg" },
        { name: "Grand Marché de Ouagadougou — tissus et artisanat", wikipedia: "File:Ouagadougou street in 2004 2.jpg" },
        { name: "Village artisanal de Ouagadougou", wikipedia: "File:July 2004 Ouagadougou streets 12.jpg" },
      ],
    },
    {
      id: 2,
      name: "Banfora & Cascades de Karfiguéla",
      region: "Cascades",
      description:
        "La région de Banfora est le paradis naturel du Burkina Faso : les cascades de Karfiguéla (chutes de 10m dans un écrin de verdure), le lac de Tengrela avec ses hippopotames, les pics de Sindou (formations rocheuses spectaculaires), et les dômes de Fabédougou. La région est accessible et relativement sûre.",
      wikipedia: "Banfora",
      tags: ["Cascades", "Hippos", "Roches", "Nature"],
      mustSee: [
        { name: "Cascades de Karfiguéla — chutes spectaculaires dans la brousse", wikipedia: "File:Cascades_de_Banfora_Burkina_Faso.JPG" },
        { name: "Lac de Tengrela — hippopotames (observation en pirogue)", wikipedia: "File:Lac de Tengrela vu sud.jpg" },
        { name: "Pics de Sindou — formations rocheuses spectaculaires", wikipedia: "File:PicsdeSindou.jpg" },
        { name: "Dômes de Fabédougou — rochers rouges en pleine campagne", wikipedia: "File:Domes de Fabedougou.jpg" },
      ],
    },
    {
      id: 3,
      name: "Laongo — Symphonie des Roches",
      region: "Plateau Central",
      description:
        "À 30km d'Ouagadougou, le Symposium International de Sculpture sur Granit de Laongo réunit depuis 1989 des sculpteurs du monde entier qui travaillent directement dans les immenses rochers de granite. Une galerie à ciel ouvert unique en Afrique, où l'art contemporain africain et international se fond dans le paysage sahélien.",
      wikipedia: "File:Symposium accueil.JPG",
      tags: ["Art", "Sculpture", "Rochers", "Unique"],
      mustSee: [
        { name: "Sculptures sur granite de Laongo (symposium international)", wikipedia: "File:TR Sculture sur granite de Laongo 03.jpg" },
        { name: "Paysage de rochers de granite rose à perte de vue", wikipedia: "File:GRANITE PETROGLYPHE DE LAONGO.jpg" },
        { name: "Village de Laongo et artisans locaux", wikipedia: "File:Sortie photo sur le site de granite de Loango 02.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Burkina Faso est l'un des pays les plus abordables d'Afrique de l'Ouest. La situation sécuritaire a fortement réduit le tourisme ces dernières années, rendant les services moins disponibles. Le franc CFA arrimé à l'euro facilite la gestion du budget.",
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre simple", price: "15–30 €", detail: "Ventilateur ou clim basique" },
          { label: "Hôtel 3★ Ouagadougou", price: "50–90 €", detail: "Clim, sécurité, wifi" },
          { label: "Hôtel de luxe (Laico, Azalaï)", price: "120–200 €", detail: "Standard international" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Tô / riz sauce dans un buvette locale", price: "1–3 €", detail: "Cuisine burkinabé typique" },
          { label: "Restaurant mid-range Ouaga", price: "7–15 €", detail: "Grillades, brochettes, menu" },
          { label: "Restaurant gastronomique Ouaga", price: "20–40 €", detail: "Cuisine française et internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Sotrama (minibus collectif) — trajet urbain", price: "0,15–0,50 €", detail: "Transport populaire" },
          { label: "Taxi clim ou moto-taxi", price: "1–5 €", detail: "Selon distance" },
          { label: "Bus STAF (Ouaga–Banfora, 4h)", price: "5–10 €", detail: "Confortable, climatisé" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée cascades de Karfiguéla + lac Tengrela", price: "20–40 €", detail: "Journée depuis Banfora" },
          { label: "Pirogue lac Tengrela — hippopotames", price: "5–10 €", detail: "30–45 min" },
          { label: "Sculptures de Laongo (entrée + guide)", price: "5–15 €", detail: "30km d'Ouaga" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Guesthouse + cuisine locale + transport commun", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel 3★ + restaurants + excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Grand hôtel Ouaga + circuit privatisé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Ouagadougou (4j) → Laongo (1j) → Bobo-Dioulasso (2j) → Banfora / Cascades (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 300 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Ouagadougou", amount: "500–700 €" },
            { label: "Hébergement (10 nuits)", amount: "200–350 €" },
            { label: "Transports locaux", amount: "100–200 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités & guides", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Ouagadougou", amount: "550–750 €" },
            { label: "Hébergement (10 nuits)", amount: "600–1 000 €" },
            { label: "Location voiture / chauffeur", amount: "400–600 €" },
            { label: "Nourriture & sorties", amount: "350–550 €" },
            { label: "Activités & excursions", amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h (Air France, Ethiopian Airlines, Brussels Airlines via escale)" },
    { icon: "⚠️", label: "Sécurité",         value: "AVERTISSEMENT : vaste zones d'insécurité au nord, est et sahel. Consulter AVANT le départ les avis MEAE / Diplomatie.gouv.fr." },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire — à obtenir à l'ambassade ou à l'arrivée. Vérifier les procédures actuelles." },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces indispensables hors Ouaga." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel) — communication facile pour francophones." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Méningite recommandé." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
  ],
};
