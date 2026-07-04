export const PORTUGAL = {
  code: "PRT",
  numericId: 620,
  name: "Portugal",
  emoji: "🇵🇹",
  capital: "Lisbonne",
  language: "Portugais",
  currency: "Euro (€)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 45, budgetMid: 120,
    tripMin: 1400, tripMid: 2700,
  },
  description:
    "Le Portugal séduit par sa douceur de vivre : Lisbonne avec ses tramways et ses azulejos, le fado mélancolique, les plages de l'Algarve, le vin de Porto et les monastères manuélins de Sintra. Un pays accessible, chaleureux et riche en histoire.",

  bestPeriods: [
    {
      months: "Avril – Juin",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures agréables (18–24 °C), fleurs de printemps, avant les foules et la chaleur. Parfait pour Lisbonne, Porto et l'intérieur des terres.",
      icon: "🌸",
    },
    {
      months: "Septembre – Octobre",
      label: "Arrière-saison",
      color: "#fb923c",
      description:
        "Mer encore chaude en Algarve, lumière dorée, moins de touristes, prix plus bas. Excellent pour tout le pays.",
      icon: "🍇",
    },
    {
      months: "Juillet – Août",
      label: "Plages & Soleil",
      color: "#3b82f6",
      description:
        "Soleil garanti sur les côtes. L'Algarve et les plages de l'Alentejo sont à leur mieux. Côte ouest ventée, idéale pour le surf.",
      icon: "☀️",
    },
  ],

  weatherCities: [
    {
      id: "lisbon",
      name: "Lisbonne",
      region: "Estremadura",
      data: [
        { month: "Jan", temp: 12, rain: 105, icon: "⛅" },
        { month: "Fév", temp: 13, rain: 108, icon: "⛅" },
        { month: "Mar", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 60,  icon: "☀️" },
        { month: "Mai", temp: 19, rain: 35,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 8,   icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 9,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 85,  icon: "☀️" },
        { month: "Nov", temp: 15, rain: 120, icon: "⛅" },
        { month: "Déc", temp: 13, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "porto",
      name: "Porto",
      region: "Norte",
      data: [
        { month: "Jan", temp: 11, rain: 130, icon: "⛅" },
        { month: "Fév", temp: 12, rain: 145, icon: "⛅" },
        { month: "Mar", temp: 14, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 15, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 45,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 25,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 14, rain: 145, icon: "⛅" },
        { month: "Déc", temp: 11, rain: 150, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lisbonne",
      region: "Estremadura",
      description:
        "Capitale aux sept collines, Lisbonne charme avec ses tramways historiques, ses miradouros (belvédères), le quartier de l'Alfama et ses nuits de fado inoubliables.",
      wikipedia: "Lisbon",
      tags: ["Ville", "Culture", "Gastronomie", "Nuit", "Histoire", "Architecture", "UNESCO"],
      mustSee: [
        { name: "Tramway 28 & Alfama", wikipedia: "Alfama" },
        { name: "Monastère des Hiéronymites", wikipedia: "Jerónimos_Monastery" },
        { name: "Tour de Belém", wikipedia: "Belém_Tower" },
        { name: "Miradouro da Graça", wikipedia: "File:Convento_da_Graça,_view_from_Castelo_de_São_Jorge,_Lisbon,_20250604_1720_9422.jpg" },
      ],
    },
    {
      id: 2,
      name: "Porto",
      region: "Norte",
      description:
        "Ville de caractère sur le Douro, avec ses caves de porto à Vila Nova de Gaia, son quartier de Ribeira classé UNESCO, les librairies mythiques et les pasteis de nata.",
      wikipedia: "Porto",
      tags: ["Culture", "UNESCO", "Gastronomie", "Vin", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: "Ribeira — quartier du bord du Douro", wikipedia: "File:View_of_Ribeira_from_Cais_de_Gaia,_20250605_1628_9890.jpg" },
        { name: "Caves de Porto (Vila Nova de Gaia)", wikipedia: "Vila_Nova_de_Gaia" },
        { name: "Librairie Lello", wikipedia: "Livraria_Lello" },
        { name: "Pont Dom Luís I", wikipedia: "Dom_Luís_I_Bridge" },
      ],
    },
    {
      id: 3,
      name: "Sintra",
      region: "Estremadura",
      description:
        "À 30 min de Lisbonne, un village féerique dans une forêt brumeuse, avec les palais extravagants de Pena et Quinta da Regaleira classés UNESCO.",
      wikipedia: "Sintra",
      tags: ["Histoire", "UNESCO", "Architecture", "Paysage", "Nature", "Randonnée"],
      mustSee: [
        { name: "Palais national de Pena", wikipedia: "Pena_Palace" },
        { name: "Quinta da Regaleira", wikipedia: "Quinta_da_Regaleira" },
        { name: "Château des Maures", wikipedia: "Moorish_Castle" },
        { name: "Palais national de Sintra", wikipedia: "File:Palacio Nacional, Sintra, Portugal, 2019-05-25, DD 89.jpg" },
      ],
    },
    {
      id: 4,
      name: "Algarve",
      region: "Sud",
      description:
        "La plus belle région côtière du Portugal : falaises dorées, grottes marines, plages de sable fin et petits villages de pêcheurs. Lagos, Sagres et Albufeira en tête.",
      wikipedia: "Algarve",
      tags: ["Plage", "Mer", "Paysage", "Surf", "Nature", "Randonnée"],
      mustSee: [
        { name: "Plage de Praia da Marinha", wikipedia: "Praia_da_Marinha" },
        { name: "Grottes de Benagil", wikipedia: "File:Algar_de_Benagil,_O_Algarve_20210713_111259_(51615818880).jpg" },
        { name: "Cap Saint-Vincent — bout du monde", wikipedia: "File:Cabo-sao-vicente-lighthouse-2019-msu-2309.jpg" },
        { name: "Lagos — vieille ville et falaises", wikipedia: "Lagos,_Portugal" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Portugal est l'un des pays d'Europe occidentale les moins chers, tout en offrant une excellente qualité de vie. Les pastelarias et les restaurants du midi sont particulièrement abordables.",
    currency: "EUR (€)",
    exchangeRate: "Monnaie locale",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "20–35 €", detail: "Parmi les meilleurs d'Europe — ambiance top" },
          { label: "Guesthouse / pension", price: "35–65 €", detail: "Chambre privée avec petit-déj souvent inclus" },
          { label: "Hôtel confort", price: "70–150 €", detail: "Chambre double bien équipée, ~150 € en moyenne à Lisbonne" },
          { label: "Quinta (maison de campagne)", price: "80–180 €", detail: "Vignobles, piscine, authenticité" },
          { label: "Hôtel boutique / pousada", price: "150–400 €", detail: "Château ou couvent converti" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Pastel de nata + café", price: "2–3,50 €", detail: "1,50 € le pastel à la Pastéis de Belém — indispensable !" },
          { label: "Prato do dia (plat du jour)", price: "7–12 €", detail: "Entrée + plat + dessert + boisson" },
          { label: "Bacalhau (morue) au restaurant", price: "12–20 €", detail: "365 façons de le préparer selon la légende" },
          { label: "Petiscos (tapas portugaises)", price: "2–5 €/petisco", detail: "Chouriço, pica-pau, amêijoas" },
          { label: "Restaurant gastronomique", price: "35–80 €", detail: "Cuisine portugaise contemporaine remarquable" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro Lisbonne / Porto", price: "1,50–2,50 €", detail: "Viva Viagem — ticket ou pass journalier" },
          { label: "Tramway historique (Lisbonne)", price: "3 €", detail: "Le fameux tram 28" },
          { label: "Train Comboios de Portugal", price: "12–36 €", detail: "Lisbonne–Porto Intercidades ~28 €, Alfa Pendular ~36 € (dès 12 € tôt)" },
          { label: "Bus Rede Expressos", price: "5–20 €", detail: "Réseau national bon marché" },
          { label: "Location de voiture", price: "25–60 €/j", detail: "Indispensable pour l'Algarve et l'intérieur" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Monastère des Hiéronymites", price: "10 €", detail: "Chef-d'œuvre manuélin, billet combiné Tour de Belém" },
          { label: "Palais de Pena (Sintra)", price: "14–18 €", detail: "Réservation recommandée en été" },
          { label: "Spectacle de fado (Alfama)", price: "20–40 €", detail: "Avec dîner : 40–80 €" },
          { label: "Tour en bateau (grottes Algarve)", price: "15–25 €", detail: "Grottes de Benagil notamment" },
          { label: "Surf school (côte atlantique)", price: "35–60 €", detail: "Équipement inclus, instructeur" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–70 €/j", desc: "Hostel + pastelaria + transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "120–180 €/j", desc: "Hôtel confort + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "280 €+/j", desc: "Pousada + gastronomie + expériences exclusives", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Lisbonne (4j) → Sintra (1j) → Alentejo (2j) → Algarve (4j) → Porto (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 400 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lisbonne", amount: "80–200 €" },
            { label: "Transports intérieurs (train + bus)", amount: "100–180 €" },
            { label: "Hébergement (14 nuits)", amount: "350–550 €" },
            { label: "Nourriture", amount: "450–600 €" },
            { label: "Activités & imprévus", amount: "250–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 700 – 3 900 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lisbonne", amount: "100–250 €" },
            { label: "Transports & location voiture (partielle)", amount: "200–350 €" },
            { label: "Hébergement (14 nuits)", amount: "1 000–1 700 €" },
            { label: "Nourriture & restaurants", amount: "800–1 100 €" },
            { label: "Activités & imprévus", amount: "450–650 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Lisbonne (business)", amount: "400–1 000 €" },
            { label: "Location voiture premium", amount: "400–700 €" },
            { label: "Pousadas & quintas (14 nuits)", amount: "2 000–4 000 €" },
            { label: "Gastronomie & fado dîner", amount: "800–1 500 €" },
            { label: "Expériences & imprévus", amount: "500–900 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~2h15 direct (TAP Air Portugal, Air France, Transavia)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa (espace Schengen)" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) — cartes acceptées partout" },
    { icon: "🗣️", label: "Langue", value: "Portugais — anglais dans les zones touristiques, espagnol compris" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 230V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "Roaming européen inclus, excellent réseau 4G/5G" },
    { icon: "🚰", label: "Eau du robinet", value: "Potable dans tout le pays" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie valide" },
  ],
};
