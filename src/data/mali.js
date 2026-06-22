export const MALI = {
  code: "MLI",
  numericId: 466,
  name: "Mali",
  emoji: "🇲🇱",
  capital: "Bamako",
  language: "Français, Bambara, Peul, Dogon, Tamachek",
  currency: "Franc CFA (XOF)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "Le Mali abrite certains des sites les plus fascinants d'Afrique : Tombouctou la légendaire cité du désert (UNESCO), les falaises de Bandiagara pays Dogon (UNESCO), la mosquée de Djenné en banco (la plus grande au monde, UNESCO), et Bamako capitale musicale avec le blues du désert Touareg. Attention : situation sécuritaire extrêmement dégradée depuis 2012 — le voyage au Mali est déconseillé sauf zones très limitées.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche et fraîche",
      color: "#22c55e",
      description:
        "Seule période praticable pour le tourisme : harmattan frais (20–32°C), ciel dégagé. Pays Dogon accessible. Températures nocturnes fraîches dans le nord.",
      icon: "☀️",
    },
    {
      months: "Mars – Juin",
      label: "Saison chaude",
      color: "#f59e0b",
      description:
        "Températures extrêmes (38–46°C), vents de sable. Déconseillé pour le confort et les activités de plein air.",
      icon: "🌡️",
    },
    {
      months: "Juillet – Octobre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Pluies au sud (100–200mm/mois), nord désertique. Routes souvent impraticables. Nord toujours chaud.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "bamako",
      name: "Bamako",
      region: "Capitale (sud-ouest)",
      data: [
        { month: "Jan", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Mar", temp: 32, rain: 5,   icon: "🌡️" },
        { month: "Avr", temp: 35, rain: 10,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 230, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 24, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "timbuktu",
      name: "Tombouctou",
      region: "Tombouctou (nord)",
      data: [
        { month: "Jan", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Avr", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 40, rain: 5,   icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 10,  icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 30,  icon: "🌡️" },
        { month: "Aoû", temp: 35, rain: 60,  icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 30,  icon: "🌡️" },
        { month: "Oct", temp: 34, rain: 5,   icon: "🌡️" },
        { month: "Nov", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Déc", temp: 23, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Pays Dogon — Falaises de Bandiagara",
      region: "Mopti",
      description:
        "Les falaises de Bandiagara (UNESCO) sont l'un des sites les plus spectaculaires d'Afrique : 150km de falaises de grès rouge où s'accrochent les villages Dogon, leurs greniers à mil en banco, et les cases funéraires des Tellem perchées dans la roche. La cosmogonie Dogon, préservée depuis des siècles, est l'une des plus complexes et poétiques du monde.",
      wikipedia: "Bandiagara_Escarpment",
      tags: ["UNESCO", "Dogon", "Falaises", "Culture"],
      mustSee: [
        { name: "Village de Sangha — porte d'entrée du pays Dogon", wikipedia: "File:ASangha 03.JPG" },
        { name: "Danse des masques Dogon (fêtes et funérailles)", wikipedia: "Dogon_people" },
        { name: "Cases Tellem dans les falaises (XIIe–XVe s.)", wikipedia: "Tellem" },
        { name: "Trek entre villages accrochés aux falaises (2–5 jours)", wikipedia: "Bandiagara_Escarpment" },
      ],
    },
    {
      id: 2,
      name: "Djenné — Mosquée en banco",
      region: "Mopti",
      description:
        "La Grande Mosquée de Djenné (UNESCO) est la plus grande construction en banco (argile et paille) du monde et le symbole de l'architecture soudano-sahélienne. Reconstruite en 1907 sur les fondations d'une mosquée du XIIIe siècle, elle est entretenue chaque année par toute la communauté lors de la grande crépissage. Le marché du lundi autour de la mosquée est l'un des plus beaux d'Afrique.",
      wikipedia: "Great_Mosque_of_Djenné",
      tags: ["UNESCO", "Architecture", "Banco", "Marché"],
      mustSee: [
        { name: "Grande Mosquée de Djenné (UNESCO) — la plus grande en banco du monde", wikipedia: "Great_Mosque_of_Djenné" },
        { name: "Marché du lundi de Djenné — autour de la mosquée", wikipedia: "Djenné" },
        { name: "Île de Djenné — cité médiévale entourée de fleuves", wikipedia: "File:Djenne Ferry (6861649).jpg" },
      ],
    },
    {
      id: 3,
      name: "Tombouctou — La cité mystérieuse",
      region: "Tombouctou",
      description:
        "Tombouctou (UNESCO) fut aux XIVe–XVIe siècles la capitale intellectuelle et spirituelle de l'Afrique de l'Ouest : 25 000 étudiants, 180 écoles coraniques, des manuscrits anciens de valeur inestimable. Ses mosquées Djingareyber, Sankore et Sidi Yahia (UNESCO) et ses maisons à portails sculptés témoignent de cet âge d'or. Accessible uniquement par vol depuis Bamako actuellement.",
      wikipedia: "Timbuktu",
      tags: ["UNESCO", "Désert", "Histoire", "Légendaire"],
      mustSee: [
        { name: "Mosquée Djingareyber (XIVe s., UNESCO)", wikipedia: "Djinguereber_Mosque" },
        { name: "Mosquée Sankore (XIVe s., UNESCO) — ancienne université", wikipedia: "File:Timbuktu Mosque Sankore.jpg" },
        { name: "Manuscrits anciens de Tombouctou (Ahmed Baba Institute)", wikipedia: "Ahmed_Baba_Institute" },
        { name: "Coucher de soleil sur le Sahara depuis les dunes", wikipedia: "Timbuktu" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Mali est abordable mais la situation sécuritaire a rendu le tourisme très difficile. Les circuits se limitent à Bamako et ses environs pour la plupart des voyageurs actuels. Le franc CFA arrimé à l'euro facilite le budget.",
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / campement", price: "15–35 €", detail: "Simple, avec ou sans clim" },
          { label: "Hôtel 3★ Bamako", price: "55–90 €", detail: "Clim, sécurité, wifi" },
          { label: "Hôtel de luxe Bamako (Radisson, Azalaï)", price: "130–200 €", detail: "Standard international" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Tô / riz au poisson dans un gargote", price: "1–3 €", detail: "Cuisine locale typique" },
          { label: "Restaurant mid-range Bamako", price: "8–18 €", detail: "Grillades, plats traditionnels" },
          { label: "Restaurant hôtel Bamako", price: "20–40 €", detail: "Cuisine internationale sécurisée" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Sotrama / taxi-brousse", price: "0,20–2 €", detail: "Transport local selon trajet" },
          { label: "Vol intérieur Bamako–Tombouctou", price: "100–200 €", detail: "Seule option sûre pour Tombouctou" },
          { label: "4x4 avec chauffeur-guide (journée)", price: "80–150 €", detail: "Indispensable pays Dogon" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Trek pays Dogon (guide obligatoire, 3 jours)", price: "80–150 €", detail: "Guide + hébergement campement" },
          { label: "Balade en pinasse sur le Niger", price: "30–80 €", detail: "Depuis Mopti ou Djenné" },
          { label: "Concert à l'Espace Bouna (Bamako)", price: "5–15 €", detail: "Blues du désert, balafon" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–70 €/j", desc: "Guesthouse + cuisine locale + transport commun", color: "#22c55e" },
      { type: "Confort", daily: "90–150 €/j", desc: "Hôtel 3★ + restaurants + guide + 4x4", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Bamako (3j) → Ségou (2j) → Djenné (2j) → Mopti (1j) → Pays Dogon (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bamako", amount: "500–700 €" },
            { label: "Hébergement (12 nuits)", amount: "250–450 €" },
            { label: "Transports locaux + pinasse", amount: "200–350 €" },
            { label: "Nourriture", amount: "180–300 €" },
            { label: "Guides & activités", amount: "200–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bamako", amount: "600–800 €" },
            { label: "Hébergement (12 nuits)", amount: "800–1 200 €" },
            { label: "4x4 + chauffeur-guide", amount: "700–1 000 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Vols intérieurs + activités", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~5h30 direct (Air France, Air Mali) ou via Casablanca (Royal Air Maroc)" },
    { icon: "⚠️", label: "Sécurité",         value: "AVERTISSEMENT MAJEUR : quasiment tout le pays est en zone rouge (déconseillé). Bamako en zone orange. Consulter impérativement Diplomatie.gouv.fr avant tout projet." },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire — ambassade de Mali à Paris. Procédures variables, vérifier avant départ." },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces indispensables." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel) + Bambara (langue véhiculaire nationale)." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Méningite recommandé." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
  ],
};
