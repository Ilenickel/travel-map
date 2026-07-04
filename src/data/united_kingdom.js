export const UK = {
  code: "GBR",
  numericId: 826,
  name: "Royaume-Uni",
  emoji: "🇬🇧",
  capital: "Londres",
  language: "Anglais",
  currency: "Livre sterling (GBP)",
  timezone: "UTC+0 (été UTC+1)",
  filter: {
    budgetMin: 90,
    budgetMid: 175,
    tripMin: 1150,
    tripMid: 2400,
  },
  description:
    "Le Royaume-Uni est une destination fascinante qui conjugue une histoire millénaire, une culture pop influente et des paysages d'une beauté sauvage. Londres, l'une des villes les plus cosmopolites du monde, côtoie les campagnes verdoyantes du Cotswolds, les Highlands écossais brumeux et les côtes dramatiques du Pays de Galles. Des châteaux normands aux pubs chaleureux, en passant par les musées gratuits et les théâtres du West End, le pays ne manque jamais de surprendre.",
  bestPeriods: [
    {
      months: "Mai – Sep",
      label: "Idéal",
      color: "#22c55e",
      description:
        "Températures douces, journées longues, festivals estivaux et jardins en fleurs. Meilleure période pour les Highlands.",
      icon: "☀️",
    },
    {
      months: "Mar – Avr",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Foules moins importantes, prix plus bas, cerisiers en fleurs dans les parcs londoniens.",
      icon: "🌸",
    },
    {
      months: "Oct – Nov",
      label: "Automne",
      color: "#f59e0b",
      description:
        "Couleurs automnales magnifiques, ambiance cosy dans les pubs. Temps capricieux mais supportable.",
      icon: "🍂",
    },
    {
      months: "Déc – Fév",
      label: "Hiver",
      color: "#94a3b8",
      description:
        "Marchés de Noël à Londres et Édimbourg. Froid et pluvieux mais peu de touristes.",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "london",
      name: "Londres",
      region: "Angleterre du Sud — climat océanique doux et nuageux",
      data: [
        { month: "Jan", temp: 6, rain: 55, icon: "❄️" },
        { month: "Fév", temp: 7, rain: 45, icon: "❄️" },
        { month: "Mar", temp: 9, rain: 50, icon: "⛅" },
        { month: "Avr", temp: 12, rain: 45, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 50, icon: "⛅" },
        { month: "Jun", temp: 18, rain: 50, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 45, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 50, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 50, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 65, icon: "⛅" },
        { month: "Nov", temp: 9, rain: 65, icon: "⛅" },
        { month: "Déc", temp: 7, rain: 60, icon: "❄️" },
      ],
    },
    {
      id: "edinburgh",
      name: "Édimbourg",
      region: "Écosse — climat plus froid et venteux",
      data: [
        { month: "Jan", temp: 4, rain: 60, icon: "❄️" },
        { month: "Fév", temp: 4, rain: 50, icon: "❄️" },
        { month: "Mar", temp: 6, rain: 55, icon: "❄️" },
        { month: "Avr", temp: 9, rain: 50, icon: "⛅" },
        { month: "Mai", temp: 12, rain: 55, icon: "⛅" },
        { month: "Jun", temp: 15, rain: 55, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 75, icon: "☀️" },
        { month: "Sep", temp: 14, rain: 70, icon: "⛅" },
        { month: "Oct", temp: 11, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 7, rain: 70, icon: "❄️" },
        { month: "Déc", temp: 4, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Londres",
      region: "Angleterre",
      description:
        "Londres est une métropole mondiale d'une richesse culturelle inépuisable, où les musées gratuits de classe mondiale côtoient les palais royaux et les marchés colorés. De Buckingham Palace à la Tate Modern, du Borough Market à Shoreditch, la ville multiplie les visages et les expériences. Le réseau de transports en commun, malgré son coût, est l'un des plus efficaces du monde et permet d'explorer chaque quartier à son rythme.",
      wikipedia: "London",
      tags: ["Culture", "Musées", "Histoire", "Shopping", "Gastronomie", "Ville", "Architecture"],
      mustSee: [
        {
          name: "Big Ben",
          wikipedia: "File:Big Ben (Queen Elizabeth Tower) 07.jpg",
        },
        {
          name: "Tour de Londres — forteresse millénaire gardienne des joyaux de la Couronne",
          wikipedia: "Tower_of_London",
        },
        {
          name: "Tate Modern — temple de l'art contemporain dans une ancienne centrale électrique",
          wikipedia: "Tate_Modern",
        },
        {
          name: "Buckingham Palace & Hyde Park — résidence royale et poumon vert de la capitale",
          wikipedia: "Buckingham_Palace",
        },
      ],
    },
    {
      id: 2,
      name: "Écosse & Édimbourg",
      region: "Écosse",
      description:
        "Édimbourg est l'une des plus belles capitales d'Europe, dominée par son château médiéval et divisée entre Old Town historique et New Town géorgienne. Les Highlands écossais voisins déroulent leurs paysages spectaculaires de landes violettes, de lochs mystérieux et de châteaux en ruines. La culture écossaise, des kilts aux whiskies de malt, est une découverte à part entière.",
      wikipedia: "Edinburgh",
      tags: ["Histoire", "Nature", "Whisky", "Châteaux", "Randonnée", "Ville", "Ski"],
      mustSee: [
        {
          name: "Château d'Édimbourg — forteresse volcanique surplombant le Royal Mile",
          wikipedia: "Edinburgh_Castle",
        },
        {
          name: "Loch Ness & Highlands — paysages sauvages et légende du monstre",
          wikipedia: "Loch_Ness",
        },
        {
          name: "Palais de Holyrood — résidence officielle du roi en Écosse",
          wikipedia: "Holyrood_Palace",
        },
        {
          name: "Distillerie de Glenfiddich — découverte du scotch whisky en plein cœur du Speyside",
          wikipedia: "File:Glenfiddich Distillery.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Cotswolds & Bath",
      region: "Angleterre du Sud-Ouest",
      description:
        "Les Cotswolds incarnent l'Angleterre de carte postale avec leurs villages aux cottages en pierre miel, leurs jardins fleuris et leurs chemins de randonnée verdoyants. Toute proche, Bath est une ville d'exception avec ses thermes romains et son architecture géorgienne classée au patrimoine mondial de l'UNESCO. Jane Austen y vécut, et l'atmosphère élégante de la ville rappelle cette époque romanesque.",
      wikipedia: "Cotswolds",
      tags: ["Nature", "UNESCO", "Architecture", "Randonnée", "Charme"],
      mustSee: [
        {
          name: "Bourton-on-the-Water — surnommée la Venise des Cotswolds",
          wikipedia: "Bourton-on-the-Water",
        },
        {
          name: "Bains romains de Bath — thermes antiques exceptionnellement bien conservés",
          wikipedia: "File:Baños_Romanos,_Bath,_Inglaterra,_2014-08-12,_DD_39-41_HDR.JPG",
        },
        {
          name: "Royal Crescent de Bath — emblème de l'architecture géorgienne anglaise",
          wikipedia: "Royal_Crescent",
        },
        {
          name: "Bibury — village de pêcheurs considéré comme le plus beau d'Angleterre",
          wikipedia: "Bibury",
        },
      ],
    },
    {
      id: 4,
      name: "Pays de Galles",
      region: "Pays de Galles",
      description:
        "Le Pays de Galles est une petite nation à la grande personnalité, avec ses paysages montagneux du Parc national de Snowdonia, ses châteaux médiévaux imposants et sa langue celtique toujours vivante. Cardiff, sa capitale dynamique, est une ville universitaire animée dotée d'un château en plein centre-ville. Le littoral gallois alterne falaises dramatiques et plages de sable fin très préservées.",
      wikipedia: "File:At_Wales_2008_27.jpg",
      tags: ["Nature", "Châteaux", "Randonnée", "Mer", "Culture celtique"],
      mustSee: [
        {
          name: "Château de Caernarfon — forteresse édouardienne classée au patrimoine UNESCO",
          wikipedia: "Caernarfon_Castle",
        },
        {
          name: "Snowdonia — toit du Pays de Galles à 1 085 m, accessible en train à crémaillère",
          wikipedia: "Snowdonia",
        },
        {
          name: "Brecon Beacons — parc national idéal pour la randonnée et l'astronomie",
          wikipedia: "Brecon_Beacons",
        },
        {
          name: "Castell Coch — château néo-gothique de conte de fées près de Cardiff",
          wikipedia: "Castell_Coch",
        },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Royaume-Uni, et notamment Londres, est l'une des destinations les plus onéreuses d'Europe occidentale. La livre sterling ajoute une couche de coût pour les voyageurs de la zone euro. Cependant, les nombreux musées gratuits de Londres compensent partiellement ces dépenses.",
    currency: "GBP",
    exchangeRate: "1€ ≈ 0,85 GBP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          {
            label: "Auberge de jeunesse (dortoir)",
            price: "25–45 €",
            detail: "Londres parmi les plus chères, mais bonne qualité",
          },
          {
            label: "Hôtel 2–3 étoiles",
            price: "90–160 €",
            detail: "Chambre double à Londres ; moins cher en province",
          },
          {
            label: "Hôtel 4 étoiles",
            price: "180–350 €",
            detail: "Centre de Londres, prix très variables selon quartier",
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          {
            label: "Fish & chips / sandwich / pub snack",
            price: "7–12 €",
            detail: "Le pub reste l'endroit le plus abordable pour manger",
          },
          {
            label: "Déjeuner au pub ou café",
            price: "17–25 €",
            detail: "Sunday roast très populaire le week-end",
          },
          {
            label: "Restaurant le soir",
            price: "25–50 €",
            detail: "London propose une scène gastronomique internationale variée",
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          {
            label: "Métro de Londres (Oyster Card)",
            price: "2,80–5 €",
            detail: "Plafond journalier automatique, payer sans contact",
          },
          {
            label: "Train Londres–Édimbourg",
            price: "40–120 €",
            detail: "En 4h30 avec LNER, tarifs avance très avantageux",
          },
          {
            label: "National Express (bus longue distance)",
            price: "15–40 €",
            detail: "Alternative économique au train pour les villes secondaires",
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          {
            label: "Grands musées londoniens",
            price: "Gratuit",
            detail: "British Museum, National Gallery, V&A, Natural History Museum",
          },
          {
            label: "Tour de Londres",
            price: "40 €",
            detail: "Joyaux de la Couronne inclus, réservation conseillée",
          },
          {
            label: "Théâtre West End",
            price: "25–90 €",
            detail: "Billets day-of dès 20 € à certains guichets",
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "80–110 €/j",
        desc: "Auberge, pubs et sandwichs, musées gratuits, Oyster Card",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "160–250 €/j",
        desc: "Hôtel 3 étoiles, restaurants mid-range, activités payantes",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Londres (5j) → Cotswolds/Bath (2j) → Édimbourg (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 150 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Londres", amount: "80–150 €" },
            { label: "Hébergement (9 nuits)", amount: "300–450 €" },
            { label: "Transports locaux + trains", amount: "170–230 €" },
            { label: "Nourriture + boissons", amount: "480–560 €" },
            { label: "Activités + sorties", amount: "80–120 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 400 – 3 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Londres", amount: "120–200 €" },
            { label: "Hébergement (9 nuits)", amount: "1 000–1 500 €" },
            { label: "Transports locaux + trains", amount: "250–350 €" },
            { label: "Nourriture + boissons", amount: "800–1 050 €" },
            { label: "Activités + théâtre", amount: "200–300 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: "Vol depuis Paris",
      value: "Paris–Londres : 1h15 de vol. Aussi accessible en Eurostar (2h15) depuis Gare du Nord.",
    },
    {
      icon: "🪪",
      label: "Visa",
      value: "Depuis le Brexit, les citoyens UE ont besoin d'un passeport valide (la carte d'identité n'est plus acceptée). Depuis janvier 2024, une Autorisation de Voyage Électronique (ETA) est obligatoire avant l'entrée au Royaume-Uni. L'ETA coûte 10£ (~12€), est valable 2 ans ou jusqu'à expiration du passeport et autorise des entrées multiples. Ce n'est pas un visa mais une autorisation électronique à demander en ligne avant le départ. Séjour autorisé jusqu'à 6 mois.",
    },
    {
      icon: "💰",
      label: "Monnaie",
      value: "Livre sterling (£). Les euros ne sont généralement pas acceptés. CB et paiement sans contact très répandus.",
    },
    {
      icon: "🗣️",
      label: "Langue",
      value: "Anglais. Gallois parlé au Pays de Galles, gaélique en Écosse. Excellente destination pour pratiquer l'anglais.",
    },
    {
      icon: "🔌",
      label: "Prise électrique",
      value: "Type G (3 broches rectangulaires). 230V / 50Hz. Adaptateur indispensable depuis la France.",
    },
    {
      icon: "💊",
      label: "Santé",
      value: "NHS (National Health Service) de qualité. La carte CEAM n'est plus valable post-Brexit. Assurance voyage recommandée.",
    },
    {
      icon: "🚗",
      label: "Conduite",
      value: "Conduite à gauche. Volant à droite. À éviter à Londres (péage urbain). Pratique pour les Cotswolds et les Highlands.",
    },
    {
      icon: "🌧️",
      label: "Météo",
      value: "Toujours prévoir un imperméable, même en été. Le temps est changeant toute l'année.",
    },
  ],
};
