export const UK = {
  code: "GBR",
  numericId: 826,
  name: { fr: "Royaume-Uni", en: "United Kingdom" },
  emoji: "🇬🇧",
  capital: { fr: "Londres", en: "London" },
  language: { fr: "Anglais", en: "English" },
  currency: { fr: "Livre sterling (GBP)", en: "Pound Sterling (GBP)" },
  timezone: "UTC+0 (été UTC+1)",
  filter: {
    budgetMin: 90,
    budgetMid: 175,
    tripMin: 1150,
    tripMid: 2400,
  },
  description: {
    fr: "Le Royaume-Uni est une destination fascinante qui conjugue une histoire millénaire, une culture pop influente et des paysages d'une beauté sauvage. Londres, l'une des villes les plus cosmopolites du monde, côtoie les campagnes verdoyantes du Cotswolds, les Highlands écossais brumeux et les côtes dramatiques du Pays de Galles. Des châteaux normands aux pubs chaleureux, en passant par les musées gratuits et les théâtres du West End, le pays ne manque jamais de surprendre.",
    en: "The United Kingdom is a fascinating destination that combines centuries of history, an influential pop culture and landscapes of wild beauty. London, one of the world's most cosmopolitan cities, sits alongside the green countryside of the Cotswolds, the misty Scottish Highlands and the dramatic coasts of Wales. From Norman castles to cosy pubs, free museums to West End theatres, the country never fails to surprise.",
  },
  bestPeriods: [
    {
      months: { fr: "Mai – Sep", en: "May – Sep" },
      label: { fr: "Idéal", en: "Ideal" },
      color: "#22c55e",
      description: {
        fr: "Températures douces, journées longues, festivals estivaux et jardins en fleurs. Meilleure période pour les Highlands.",
        en: "Mild temperatures, long days, summer festivals and gardens in bloom. Best period for the Highlands.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mar – Avr", en: "Mar – Apr" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#22c55e",
      description: {
        fr: "Foules moins importantes, prix plus bas, cerisiers en fleurs dans les parcs londoniens.",
        en: "Smaller crowds, lower prices, cherry blossoms in London's parks.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Oct – Nov", en: "Oct – Nov" },
      label: { fr: "Automne", en: "Autumn" },
      color: "#f59e0b",
      description: {
        fr: "Couleurs automnales magnifiques, ambiance cosy dans les pubs. Temps capricieux mais supportable.",
        en: "Beautiful autumn colours, cosy pub atmosphere. Changeable but bearable weather.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Déc – Fév", en: "Dec – Feb" },
      label: { fr: "Hiver", en: "Winter" },
      color: "#94a3b8",
      description: {
        fr: "Marchés de Noël à Londres et Édimbourg. Froid et pluvieux mais peu de touristes.",
        en: "Christmas markets in London and Edinburgh. Cold and rainy but few tourists.",
      },
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "london",
      name: "London",
      region: { fr: "Angleterre du Sud — climat océanique doux et nuageux", en: "Southern England — mild, cloudy oceanic climate" },
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
      name: { fr: "Édimbourg", en: "Edinburgh" },
      region: { fr: "Écosse — climat plus froid et venteux", en: "Scotland — colder, windier climate" },
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
      name: "London",
      region: { fr: "Angleterre", en: "England" },
      description: {
        fr: "Londres est une métropole mondiale d'une richesse culturelle inépuisable, où les musées gratuits de classe mondiale côtoient les palais royaux et les marchés colorés. De Buckingham Palace à la Tate Modern, du Borough Market à Shoreditch, la ville multiplie les visages et les expériences. Le réseau de transports en commun, malgré son coût, est l'un des plus efficaces du monde et permet d'explorer chaque quartier à son rythme.",
        en: "London is a global metropolis of inexhaustible cultural richness, where world-class free museums sit alongside royal palaces and colourful markets. From Buckingham Palace to Tate Modern, from Borough Market to Shoreditch, the city offers countless faces and experiences. Its public transport network, despite the cost, is one of the most efficient in the world and lets you explore every neighbourhood at your own pace.",
      },
      wikipedia: "London",
      tags: ["Culture", "Musées", "Histoire", "Shopping", "Gastronomie", "Ville", "Architecture"],
      mustSee: [
        {
          name: "Big Ben",
          wikipedia: "File:Big Ben (Queen Elizabeth Tower) 07.jpg",
        },
        {
          name: { fr: "Tour de Londres — forteresse millénaire gardienne des joyaux de la Couronne", en: "Tower of London — millennium-old fortress guarding the Crown Jewels" },
          wikipedia: "Tower_of_London",
        },
        {
          name: { fr: "Tate Modern — temple de l'art contemporain dans une ancienne centrale électrique", en: "Tate Modern — temple of contemporary art in a former power station" },
          wikipedia: "Tate_Modern",
        },
        {
          name: { fr: "Buckingham Palace & Hyde Park — résidence royale et poumon vert de la capitale", en: "Buckingham Palace & Hyde Park — royal residence and the capital's green lung" },
          wikipedia: "Buckingham_Palace",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Écosse & Édimbourg", en: "Scotland & Edinburgh" },
      region: { fr: "Écosse", en: "Scotland" },
      description: {
        fr: "Édimbourg est l'une des plus belles capitales d'Europe, dominée par son château médiéval et divisée entre Old Town historique et New Town géorgienne. Les Highlands écossais voisins déroulent leurs paysages spectaculaires de landes violettes, de lochs mystérieux et de châteaux en ruines. La culture écossaise, des kilts aux whiskies de malt, est une découverte à part entière.",
        en: "Edinburgh is one of the most beautiful capitals in Europe, dominated by its medieval castle and split between the historic Old Town and Georgian New Town. The neighbouring Scottish Highlands unfold spectacular landscapes of purple moorland, mysterious lochs and ruined castles. Scottish culture, from kilts to malt whiskies, is a discovery in its own right.",
      },
      wikipedia: "Edinburgh",
      tags: ["Histoire", "Nature", "Whisky", "Châteaux", "Randonnée", "Ville", "Ski"],
      mustSee: [
        {
          name: { fr: "Château d'Édimbourg — forteresse volcanique surplombant le Royal Mile", en: "Edinburgh Castle — volcanic fortress overlooking the Royal Mile" },
          wikipedia: "Edinburgh_Castle",
        },
        {
          name: { fr: "Loch Ness & Highlands — paysages sauvages et légende du monstre", en: "Loch Ness & Highlands — wild landscapes and the legend of the monster" },
          wikipedia: "Loch_Ness",
        },
        {
          name: { fr: "Palais de Holyrood — résidence officielle du roi en Écosse", en: "Holyrood Palace — the King's official residence in Scotland" },
          wikipedia: "Holyrood_Palace",
        },
        {
          name: { fr: "Distillerie de Glenfiddich — découverte du scotch whisky en plein cœur du Speyside", en: "Glenfiddich Distillery — discover Scotch whisky in the heart of Speyside" },
          wikipedia: "File:Glenfiddich Distillery.jpg",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Cotswolds & Bath", en: "Cotswolds & Bath" },
      region: { fr: "Angleterre du Sud-Ouest", en: "Southwest England" },
      description: {
        fr: "Les Cotswolds incarnent l'Angleterre de carte postale avec leurs villages aux cottages en pierre miel, leurs jardins fleuris et leurs chemins de randonnée verdoyants. Toute proche, Bath est une ville d'exception avec ses thermes romains et son architecture géorgienne classée au patrimoine mondial de l'UNESCO. Jane Austen y vécut, et l'atmosphère élégante de la ville rappelle cette époque romanesque.",
        en: "The Cotswolds embody postcard England with its villages of honey-coloured stone cottages, flowering gardens and green walking trails. Nearby, Bath is an exceptional city with its Roman baths and Georgian architecture listed as UNESCO World Heritage. Jane Austen lived there, and the city's elegant atmosphere recalls that romantic era.",
      },
      wikipedia: "Cotswolds",
      tags: ["Nature", "UNESCO", "Architecture", "Randonnée", "Charme"],
      mustSee: [
        {
          name: { fr: "Bourton-on-the-Water — surnommée la Venise des Cotswolds", en: "Bourton-on-the-Water — nicknamed the Venice of the Cotswolds" },
          wikipedia: "Bourton-on-the-Water",
        },
        {
          name: { fr: "Bains romains de Bath — thermes antiques exceptionnellement bien conservés", en: "Roman Baths of Bath — exceptionally well-preserved ancient baths" },
          wikipedia: "File:Baños_Romanos,_Bath,_Inglaterra,_2014-08-12,_DD_39-41_HDR.JPG",
        },
        {
          name: { fr: "Royal Crescent de Bath — emblème de l'architecture géorgienne anglaise", en: "Royal Crescent of Bath — icon of English Georgian architecture" },
          wikipedia: "Royal_Crescent",
        },
        {
          name: { fr: "Bibury — village de pêcheurs considéré comme le plus beau d'Angleterre", en: "Bibury — often called the most beautiful village in England" },
          wikipedia: "Bibury",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Pays de Galles", en: "Wales" },
      region: { fr: "Pays de Galles", en: "Wales" },
      description: {
        fr: "Le Pays de Galles est une petite nation à la grande personnalité, avec ses paysages montagneux du Parc national de Snowdonia, ses châteaux médiévaux imposants et sa langue celtique toujours vivante. Cardiff, sa capitale dynamique, est une ville universitaire animée dotée d'un château en plein centre-ville. Le littoral gallois alterne falaises dramatiques et plages de sable fin très préservées.",
        en: "Wales is a small nation with a big personality, with its mountainous landscapes in Snowdonia National Park, imposing medieval castles and a Celtic language still very much alive. Cardiff, its lively capital, is a buzzing university city with a castle right in the city centre. The Welsh coastline alternates between dramatic cliffs and unspoilt sandy beaches.",
      },
      wikipedia: "File:At_Wales_2008_27.jpg",
      tags: ["Nature", "Châteaux", "Randonnée", "Mer", "Culture celtique"],
      mustSee: [
        {
          name: { fr: "Château de Caernarfon — forteresse édouardienne classée au patrimoine UNESCO", en: "Caernarfon Castle — Edwardian fortress listed as UNESCO World Heritage" },
          wikipedia: "Caernarfon_Castle",
        },
        {
          name: { fr: "Snowdonia — toit du Pays de Galles à 1 085 m, accessible en train à crémaillère", en: "Snowdonia — the roof of Wales at 1,085 m, reachable by rack railway" },
          wikipedia: "Snowdonia",
        },
        {
          name: { fr: "Brecon Beacons — parc national idéal pour la randonnée et l'astronomie", en: "Brecon Beacons — national park ideal for hiking and stargazing" },
          wikipedia: "Brecon_Beacons",
        },
        {
          name: { fr: "Castell Coch — château néo-gothique de conte de fées près de Cardiff", en: "Castell Coch — fairy-tale neo-Gothic castle near Cardiff" },
          wikipedia: "Castell_Coch",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Le Royaume-Uni, et notamment Londres, est l'une des destinations les plus onéreuses d'Europe occidentale. La livre sterling ajoute une couche de coût pour les voyageurs de la zone euro. Cependant, les nombreux musées gratuits de Londres compensent partiellement ces dépenses.",
      en: "The United Kingdom, and especially London, is one of the most expensive destinations in Western Europe. The pound sterling adds an extra layer of cost for eurozone travellers. However, London's many free museums partly offset these expenses.",
    },
    currency: "GBP",
    exchangeRate: "1€ ≈ 0,85 GBP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          {
            label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)" },
            price: "25–45 €",
            detail: { fr: "Londres parmi les plus chères, mais bonne qualité", en: "London is among the priciest, but good quality" },
          },
          {
            label: { fr: "Hôtel 2–3 étoiles", en: "2–3 star hotel" },
            price: "90–160 €",
            detail: { fr: "Chambre double à Londres ; moins cher en province", en: "Double room in London; cheaper outside the capital" },
          },
          {
            label: { fr: "Hôtel 4 étoiles", en: "4-star hotel" },
            price: "180–350 €",
            detail: { fr: "Centre de Londres, prix très variables selon quartier", en: "Central London, prices vary widely by area" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          {
            label: { fr: "Fish & chips / sandwich / pub snack", en: "Fish & chips / sandwich / pub snack" },
            price: "7–12 €",
            detail: { fr: "Le pub reste l'endroit le plus abordable pour manger", en: "The pub remains the most affordable place to eat" },
          },
          {
            label: { fr: "Déjeuner au pub ou café", en: "Lunch at a pub or café" },
            price: "17–25 €",
            detail: { fr: "Sunday roast très populaire le week-end", en: "Sunday roast very popular at weekends" },
          },
          {
            label: { fr: "Restaurant le soir", en: "Dinner at a restaurant" },
            price: "25–50 €",
            detail: { fr: "London propose une scène gastronomique internationale variée", en: "London offers a varied international dining scene" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          {
            label: { fr: "Métro de Londres (Oyster Card)", en: "London Underground (Oyster Card)" },
            price: "2,80–5 €",
            detail: { fr: "Plafond journalier automatique, payer sans contact", en: "Automatic daily cap, contactless payment" },
          },
          {
            label: { fr: "Train Londres–Édimbourg", en: "London–Edinburgh train" },
            price: "40–120 €",
            detail: { fr: "En 4h30 avec LNER, tarifs avance très avantageux", en: "4h30 with LNER, great advance fares" },
          },
          {
            label: { fr: "National Express (bus longue distance)", en: "National Express (long-distance bus)" },
            price: "15–40 €",
            detail: { fr: "Alternative économique au train pour les villes secondaires", en: "Cheap alternative to train for smaller towns" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          {
            label: { fr: "Grands musées londoniens", en: "Major London museums" },
            price: "Gratuit",
            detail: "British Museum, National Gallery, V&A, Natural History Museum",
          },
          {
            label: { fr: "Tour de Londres", en: "Tower of London" },
            price: "40 €",
            detail: { fr: "Joyaux de la Couronne inclus, réservation conseillée", en: "Crown Jewels included, booking recommended" },
          },
          {
            label: { fr: "Théâtre West End", en: "West End theatre" },
            price: "25–90 €",
            detail: { fr: "Billets day-of dès 20 € à certains guichets", en: "Day-of tickets from 20 € at some booths" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "80–110 €/j",
        desc: { fr: "Auberge, pubs et sandwichs, musées gratuits, Oyster Card", en: "Hostel, pubs and sandwiches, free museums, Oyster Card" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "160–250 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants mid-range, activités payantes", en: "3-star hotel, mid-range restaurants, paid activities" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Londres (5j) → Cotswolds/Bath (2j) → Édimbourg (3j)", en: "London (5d) → Cotswolds/Bath (2d) → Edinburgh (3d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 150 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Londres", en: "Return flight Paris–London" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "300–450 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "170–230 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "480–560 €" },
            { label: { fr: "Activités + sorties", en: "Activities + outings" }, amount: "80–120 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 400 – 3 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Londres", en: "Return flight Paris–London" }, amount: "120–200 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "1 000–1 500 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "250–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "800–1 050 €" },
            { label: { fr: "Activités + théâtre", en: "Activities + theatre" }, amount: "200–300 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: { fr: "Paris–Londres : 1h15 de vol. Aussi accessible en Eurostar (2h15) depuis Gare du Nord.", en: "Paris–London: 1h15 flight. Also reachable by Eurostar (2h15) from Gare du Nord." },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: {
        fr: "Depuis le Brexit, les citoyens UE ont besoin d'un passeport valide (la carte d'identité n'est plus acceptée). Depuis janvier 2024, une Autorisation de Voyage Électronique (ETA) est obligatoire avant l'entrée au Royaume-Uni. L'ETA coûte 10£ (~12€), est valable 2 ans ou jusqu'à expiration du passeport et autorise des entrées multiples. Ce n'est pas un visa mais une autorisation électronique à demander en ligne avant le départ. Séjour autorisé jusqu'à 6 mois.",
        en: "Since Brexit, EU citizens need a valid passport (ID cards are no longer accepted). Since January 2024, an Electronic Travel Authorisation (ETA) is mandatory before entering the UK. The ETA costs £10 (~€12), is valid for 2 years or until the passport expires, and allows multiple entries. It is not a visa but an electronic authorisation to apply for online before departure. Stays of up to 6 months are allowed.",
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: { fr: "Livre sterling (£). Les euros ne sont généralement pas acceptés. CB et paiement sans contact très répandus.", en: "Pound Sterling (£). Euros are generally not accepted. Cards and contactless payment are widely used." },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: { fr: "Anglais. Gallois parlé au Pays de Galles, gaélique en Écosse. Excellente destination pour pratiquer l'anglais.", en: "English. Welsh spoken in Wales, Gaelic in Scotland. An excellent destination to practise English." },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: { fr: "Type G (3 broches rectangulaires). 230V / 50Hz. Adaptateur indispensable depuis la France.", en: "Type G (3 rectangular pins). 230V / 50Hz. Adapter essential when coming from continental Europe." },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: { fr: "NHS (National Health Service) de qualité. La carte CEAM n'est plus valable post-Brexit. Assurance voyage recommandée.", en: "Quality NHS (National Health Service). The EHIC card is no longer valid post-Brexit. Travel insurance recommended." },
    },
    {
      icon: "🚗",
      label: { fr: "Conduite", en: "Driving" },
      value: { fr: "Conduite à gauche. Volant à droite. À éviter à Londres (péage urbain). Pratique pour les Cotswolds et les Highlands.", en: "Drive on the left. Right-hand drive. Best avoided in London (congestion charge). Handy for the Cotswolds and Highlands." },
    },
    {
      icon: "🌧️",
      label: { fr: "Météo", en: "Weather" },
      value: { fr: "Toujours prévoir un imperméable, même en été. Le temps est changeant toute l'année.", en: "Always pack a raincoat, even in summer. The weather is changeable all year round." },
    },
  ],
};
