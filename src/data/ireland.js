export const IRELAND = {
  code: "IRL",
  numericId: 372,
  name: "Irlande",
  emoji: "🇮🇪",
  capital: "Dublin",
  language: "Anglais, Irlandais (gaélique)",
  currency: "Euro (EUR)",
  timezone: "UTC+0 (été UTC+1)",
  filter: {
    budgetMin: 85, budgetMid: 160,
    tripMin: 1100, tripMid: 2200,
  },
  description:
    "L'Irlande est une île d'émeraude au caractère sauvage, connue pour ses falaises spectaculaires, ses pubs chaleureux et sa tradition de contes et de musique celtique. Dublin mêle patrimoine victorien, culture littéraire (Joyce, Beckett, Wilde) et scène nocturne animée autour du Temple Bar. Les paysages du Connemara, de l'anneau du Kerry et des falaises de Moher offrent des panoramas d'une beauté saisissante.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Été irlandais",
      color: "#22c55e",
      description:
        "La meilleure période pour profiter des paysages verts et des longues journées claires. Les températures restent fraîches (14–18°C) mais le soleil est présent. Juin et juillet sont idéaux pour le Ring of Kerry et les falaises de Moher.",
      icon: "☀️",
    },
    {
      months: "Mars",
      label: "Saint-Patrick",
      color: "#f59e0b",
      description:
        "Le 17 mars, toute l'Irlande célèbre la Saint-Patrick avec des défilés, de la musique et une ambiance festive incomparable, notamment à Dublin. Période très animée mais hébergements à réserver bien à l'avance.",
      icon: "🍀",
    },
  ],
  weatherCities: [
    {
      id: "dublin",
      name: "Dublin",
      region: "Leinster",
      data: [
        { month: "Jan", temp: 7, rain: 80, icon: "❄️" },
        { month: "Fév", temp: 7, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 9, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 11, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 14, rain: 60, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 75, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 85, icon: "⛅" },
        { month: "Nov", temp: 9, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 7, rain: 80, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Dublin",
      region: "Leinster",
      description:
        "Capitale animée et conviviale, Dublin est le cœur littéraire et musical de l'Irlande. Le quartier du Temple Bar avec ses pubs traditionnels, Trinity College abritant le Livre de Kells, et le Chester Beatty Library en font une ville d'une richesse culturelle insoupçonnée. La scène des pubs irlandais avec leur musique live est une expérience unique en Europe.",
      wikipedia: "Dublin",
      tags: ["Capitale", "Culture", "Pubs", "Littérature"],
      mustSee: [
        { name: "Trinity College et Livre de Kells — manuscrit enluminé du VIIIe siècle", wikipedia: "Book_of_Kells" },
        { name: "Temple Bar — quartier des pubs et de la vie nocturne", wikipedia: "File:Temple Bar at Dusk 4.jpg" },
        { name: "Guinness Storehouse — histoire de la célèbre bière irlandaise", wikipedia: "Guinness_Storehouse" },
        { name: "Château de Dublin — cœur historique de la ville depuis le XIIIe siècle", wikipedia: "Dublin_Castle" },
      ],
    },
    {
      id: 2,
      name: "Anneau du Kerry",
      region: "Munster",
      description:
        "Le Ring of Kerry est l'un des circuits panoramiques les plus célèbres d'Europe, serpentant sur 179 km autour de la péninsule d'Iveragh. Lacs de Killarney, îles Skellig (lieu de tournage de Star Wars), villages côtiers et montagnes forment un paysage d'une beauté grandiose. Killarney est la base idéale pour explorer cette région.",
      wikipedia: "Ring_of_Kerry",
      tags: ["Panoramique", "Nature", "Côte", "Péninsule"],
      mustSee: [
        { name: "Skellig Michael — monastère médiéval sur un rocher en pleine mer", wikipedia: "Skellig_Michael" },
        { name: "Lacs de Killarney — parc national aux paysages enchanteurs", wikipedia: "Killarney_National_Park" },
        { name: "Gap of Dunloe — gorge spectaculaire dans les MacGillycuddy's Reeks", wikipedia: "Gap_of_Dunloe" },
        { name: "Torc Waterfall — cascade romantique dans la forêt de Killarney", wikipedia: "Torc_Waterfall" },
      ],
    },
    {
      id: 3,
      name: "Falaises de Moher",
      region: "Connacht",
      description:
        "Les falaises de Moher s'élèvent à 214 mètres au-dessus de l'Atlantique sur 8 km de côte sauvage dans le comté de Clare. Elles constituent le site naturel le plus visité d'Irlande et offrent des vues spectaculaires sur les îles d'Aran et le Connemara. La région du Burren, plateau calcaire unique en Europe, se trouve à proximité.",
      wikipedia: "Cliffs_of_Moher",
      tags: ["Nature", "Falaises", "UNESCO", "Atlantique"],
      mustSee: [
        { name: "Tour O'Brien — tour de guet victorienne au sommet des falaises", wikipedia: "O'Brien's_Tower" },
        { name: "Le Burren — paysage karstique unique avec flore méditerranéenne", wikipedia: "The_Burren" },
        { name: "Îles d'Aran — Inis Mór et ses forts préhistoriques", wikipedia: "File:Aran Islands, Ireland, Estate 2019 01.jpg" },
        { name: "Doolin — village traditionnel réputé pour sa musique celtique live", wikipedia: "Doolin" },
      ],
    },
    {
      id: 4,
      name: "Chaussée des Géants",
      region: "Ulster (Irlande du Nord)",
      description:
        "La Chaussée des Géants est une formation géologique spectaculaire de 40 000 colonnes de basalte hexagonales s'avançant dans la mer d'Irlande, classée au patrimoine mondial de l'UNESCO. Selon la légende, le géant Finn McCool l'aurait construite pour rejoindre l'Écosse. Elle se situe en Irlande du Nord, accessible facilement depuis Dublin.",
      wikipedia: "Giant's_Causeway",
      tags: ["UNESCO", "Géologie", "Légende", "Nature"],
      mustSee: [
        { name: "Chaussée des Géants — colonnes basaltiques hexagonales classées UNESCO", wikipedia: "Giant's_Causeway" },
        { name: "Château de Dunluce — ruines médiévales perchées sur une falaise", wikipedia: "Dunluce_Castle" },
        { name: "Dark Hedges — avenue d'hêtres tordus célèbre par Game of Thrones", wikipedia: "Dark_Hedges" },
        { name: "Rope Bridge de Carrick-a-Rede — pont de corde suspendu au-dessus de la mer", wikipedia: "File:Carrick-a-Rede Rope bridge-20120829.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "L'Irlande est l'un des pays les plus chers d'Europe de l'Ouest, notamment Dublin où l'hébergement et la restauration ont des prix élevés. Hors capitale, les coûts baissent sensiblement. La livre sterling est utilisée en Irlande du Nord.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse (dortoir)", price: "30–50 €", detail: "Bonnes auberges à Dublin et dans les villes de campagne" },
          { label: "B&B irlandais", price: "70–110 €", detail: "Bed & Breakfast chaleureux, petit-déjeuner irlandais inclus" },
          { label: "Hôtel confort 3–4 étoiles", price: "130–200 €", detail: "Hôtels de charme à Dublin ou dans les comtés ruraux" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Sandwich / fish & chips", price: "8–14 €", detail: "Repas rapide dans un pub ou une friterie" },
          { label: "Pub lunch (plat du jour)", price: "14–22 €", detail: "Irish stew, shepherd's pie ou chowder de fruits de mer" },
          { label: "Restaurant dîner", price: "28–50 €", detail: "Cuisine irlandaise moderne, fruits de mer frais" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Dublin (trajet Leap Card)", price: "1,60–2,50 €", detail: "Réseau Dublin Bus, tarif réduit avec carte Leap" },
          { label: "Train Dublin–Cork ou Galway", price: "20–50 €", detail: "Irish Rail, 2h30 à 3h selon la destination" },
          { label: "Location de voiture (journée)", price: "40–70 €", detail: "Indispensable pour explorer le Ring of Kerry ou le Connemara" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Chaussée des Géants", price: "13–16 €", detail: "Accès au site avec centre d'accueil" },
          { label: "Musée national d'Irlande", price: "Gratuit", detail: "Archéologie, art et histoire irlandaise à Dublin" },
          { label: "Bateau vers Skellig Michael", price: "80–110 €", detail: "Excursion d'une journée depuis Portmagee" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "85–115 €/j",
        desc: "Auberge, pubs abordables, bus et trains, quelques entrées payantes",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "160–220 €/j",
        desc: "B&B charme, repas en restaurant, location de voiture, activités guidées",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Dublin – Galway – Falaises de Moher – Ring of Kerry – Cork",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "750 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dublin", amount: "80–150 €" },
            { label: "Hébergement (7 nuits)", amount: "210–350 €" },
            { label: "Transports locaux + location voiture", amount: "150–220 €" },
            { label: "Nourriture + boissons", amount: "250–350 €" },
            { label: "Activités + entrées", amount: "60–100 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 500 – 2 100 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dublin", amount: "120–200 €" },
            { label: "Hébergement (7 nuits)", amount: "560–840 €" },
            { label: "Transports locaux + location voiture", amount: "250–350 €" },
            { label: "Nourriture + boissons", amount: "420–600 €" },
            { label: "Activités + excursions", amount: "150–250 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "1h30 de vol direct vers Dublin depuis CDG ou Orly" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — l'Irlande n'est pas dans Schengen mais accepte les ressortissants UE" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) en République d'Irlande — livre sterling (£) en Irlande du Nord" },
    { icon: "🗣️", label: "Langue", value: "Anglais partout — irlandais (gaélique) sur les panneaux et dans les Gaeltacht" },
    { icon: "🔌", label: "Prise électrique", value: "Type G (prise anglaise à 3 broches) — adaptateur indispensable" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie (CEAM) valable — soins de qualité" },
    { icon: "🚗", label: "Conduite", value: "Conduite à gauche — volant à droite, routes étroites en campagne" },
    { icon: "☔", label: "Météo", value: "Climat très humide toute l'année — imperméable indispensable même en été" },
  ],
};
