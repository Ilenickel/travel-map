export const BAHRAIN = {
  code: "BHR",
  numericId: 48,
  name: "Bahreïn",
  emoji: "🇧🇭",
  capital: "Manama",
  language: "Arabe",
  currency: "Dinar bahreïni (BHD)",
  timezone: "UTC+3",
  filter: { budgetMin: 75, budgetMid: 150, tripMin: 1100, tripMid: 2400 },
  description:
    "Bahreïn, archipel de 33 îles au cœur du Golfe persique, est l'un des plus petits États du monde mais aussi l'un des plus riches de son histoire. Longtemps carrefour commercial entre la Mésopotamie et la civilisation de l'Indus, il fut le cœur de la civilisation Dilmun et le premier grand centre de pêche aux perles du monde islamique. Aujourd'hui hub bancaire et financier du Golfe, il est aussi le seul État pétrolier à avoir développé une scène culturelle et artistique contemporaine dynamique.",
  bestPeriods: [
    {
      months: "Nov – Mar",
      label: "Hiver — idéal",
      color: "#22c55e",
      description: "Températures agréables (17–26°C), parfait pour visiter les sites historiques et profiter de la corniche.",
      icon: "☀️",
    },
    {
      months: "Avr – Mai",
      label: "Printemps — agréable",
      color: "#f59e0b",
      description: "Chaleur montante mais encore gérable. Bonne période pour les plages et le Formule 1.",
      icon: "⛅",
    },
    {
      months: "Jun – Sep",
      label: "Été — à éviter",
      color: "#ef4444",
      description: "Chaleur et humidité intenses (35–42°C). Bahreïn est quasi-désert touristiquement.",
      icon: "🌡️",
    },
  ],
  weatherCities: [
    {
      id: "manama",
      name: "Manama",
      region: "Capitale",
      data: [
        { month: "Jan", temp: 17, rain: 15, icon: "☀️" },
        { month: "Fév", temp: 18, rain: 15, icon: "☀️" },
        { month: "Mar", temp: 22, rain: 10, icon: "☀️" },
        { month: "Avr", temp: 27, rain: 8, icon: "⛅" },
        { month: "Mai", temp: 33, rain: 2, icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 0, icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 37, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 34, rain: 0, icon: "🌡️" },
        { month: "Oct", temp: 29, rain: 2, icon: "⛅" },
        { month: "Nov", temp: 24, rain: 10, icon: "☀️" },
        { month: "Déc", temp: 18, rain: 20, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Qal'at al-Bahrain (Fort de Bahreïn)",
      region: "Karbabad",
      description:
        "Le Fort de Bahreïn, inscrit au patrimoine mondial de l'UNESCO, est un tell artificiel de 12 hectares constitué des couches successives de civilisations ayant occupé le site pendant 5 000 ans. On y discerne les vestiges de la cité de Qal'at al-Bahrain, ancienne capitale de la civilisation Dilmun, superposée sur des niveaux phéniciens, grecs, sassanides et islamiques. Le musée du site offre une synthèse remarquable de cette stratigraphie exceptionnelle.",
      wikipedia: "Qal'at_al-Bahrain",
      tags: ["UNESCO", "Archéologie", "Dilmun", "Histoire", "Architecture"],
      mustSee: [
        { name: "Tell de Qal'at — site archéologique multicouche de 5 000 ans d'histoire", wikipedia: "Qal'at_al-Bahrain" },
        { name: "Musée du Fort — artefacts Dilmun, grecs et islamiques", wikipedia: "Qal'at_al-Bahrain" },
        { name: "Vue sur la mer — panorama sur le Golfe depuis les remparts", wikipedia: "File:230427-N-YC555-0015.jpg" },
        { name: "Plage de Karbabad — plage calme adjacente au site", wikipedia: "File:Karbabad_beach_rally_on_22_September_2012_02.JPG" },
      ],
    },
    {
      id: 2,
      name: "Musée national de Bahreïn",
      region: "Manama",
      description:
        "Le Musée national de Bahreïn, inauguré en 1988, est l'un des plus riches et des mieux conçus du Golfe persique. Ses collections retracent l'histoire de l'archipel depuis la préhistoire jusqu'à l'époque contemporaine, avec une attention particulière à la civilisation Dilmun et à la tradition ancestrale de pêche aux perles. La salle consacrée aux traditions de plongée aux perles, patrimoine immatériel de l'humanité reconnu par l'UNESCO, est particulièrement émouvante.",
      wikipedia: "Bahrain_National_Museum",
      tags: ["Musée", "Histoire", "Dilmun", "Perles"],
      mustSee: [
        { name: "Salle Dilmun — la plus grande collection d'artefacts de la civilisation Dilmun", wikipedia: "File:Sceau Dilmun A11770.jpg" },
        { name: "Momies de Bahreïn — corps embaumés de l'époque Dilmun", wikipedia: "File:Hellenic_tombstones_from_Bahrain_National_Museum.jpg" },
        { name: "Galerie d'art contemporain bahreïni — artistes du Golfe", wikipedia: "Bahrain_National_Museum" },
      ],
    },
    {
      id: 3,
      name: "Arbre de vie et désert central",
      region: "Centre de Bahreïn",
      description:
        "L'Arbre de Vie est un mesquite solitaire vieux d'environ 400 ans qui pousse au milieu du désert aride de Bahreïn, sans source d'eau apparente à des kilomètres à la ronde. Ce phénomène naturel mystérieux, dont les racines semblent trouver de l'eau à des dizaines de mètres de profondeur, est devenu un symbole national et un lieu de pèlerinage populaire. Les environs du désert central offrent des promenades parmi les tombes de la période Dilmun, la plus grande nécropole de l'Antiquité.",
      wikipedia: "Tree_of_Life_(Bahrain)",
      tags: ["Nature", "Mystère", "Désert", "Archéologie"],
      mustSee: [
        { name: "Arbre de Vie — mesquite centenaire isolé en plein désert", wikipedia: "Tree_of_Life_(Bahrain)" },
        { name: "Champs de tumulus — nécropole Dilmun avec des milliers de tombes", wikipedia: "File:Tumulus Courçon 002.jpg" },
        { name: "Jebel Dukhan — point culminant de Bahreïn (134 m), vue panoramique", wikipedia: "File:Jabal_Ad_Dukhan.jpg" },
      ],
    },
    {
      id: 4,
      name: "Circuit de Formule 1 et Manama moderne",
      region: "Sakhir et Manama",
      description:
        "Bahreïn est le premier pays du Moyen-Orient à avoir accueilli un Grand Prix de Formule 1, en 2004, et son circuit de Sakhir reste l'une des étapes les plus populaires du calendrier mondial. Manama, capitale modernisée, offre un mélange fascinant de quartier financier aux tours de verre et de souk authentique où se négocient encore or, épices et textiles. Le quartier de Muharraq, classé à l'UNESCO comme itinéraire de pêche aux perles, mérite une longue flânerie.",
      wikipedia: "File:Bahrain_International_Circuit,_November_2,_2017_SkySat_(cropped).jpg",
      tags: ["Sport", "Modernité", "Culture", "Shopping", "Ville", "Gastronomie"],
      mustSee: [
        { name: "Circuit de Sakhir — visite guidée de l'un des circuits les plus techniques du monde", wikipedia: "File:Bahrain_International_Circuit,_November_2,_2017_SkySat_(cropped).jpg" },
        { name: "Souq de Manama — marché couvert traditionnel aux tissus et or", wikipedia: "Manama" },
        { name: "Itinéraire des perles de Muharraq — maisons de marchands classées à l'UNESCO", wikipedia: "File:Muharraq Bayt Siyadi 2.jpg" },
        { name: "Al Fateh Grand Mosque — l'une des plus grandes mosquées du monde", wikipedia: "File:Al_Fateh_outside.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Bahreïn est légèrement moins cher que ses voisins Qatar et Émirats arabes unis, mais reste une destination haut de gamme. L'alcool y est légal et disponible dans les hôtels, restaurants et supermarchés spécialisés, contrairement aux autres États du Golfe.",
    currency: "BHD",
    exchangeRate: "1€ ≈ 0,41 BHD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel économique", price: "35–60 €", detail: "Hôtel simple avec clim, en centre-ville" },
          { label: "Hôtel mid-range", price: "70–120 €", detail: "Hôtel 3–4 étoiles avec piscine" },
          { label: "Hôtel de luxe", price: "150–350 €", detail: "Palaces sur la côte ou dans le quartier financier" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Restaurant local", price: "5–10 €", detail: "Machbous, muhammar (riz au sucre), harees" },
          { label: "Restaurant mid-range", price: "15–30 €", detail: "Cuisine internationale, fruits de mer du Golfe" },
          { label: "Street food / food court", price: "3–6 €", detail: "Shawarma, falafel, luqaimat" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi en ville", price: "3–8 €", detail: "Course courte, taxis en abondance" },
          { label: "Bus public (Bahrain Bus)", price: "0,30–1 €", detail: "Réseau couvrant principales zones" },
          { label: "Location de voiture", price: "25–50 €/j", detail: "Recommandé pour explorer hors Manama" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée sites et musées", price: "2–8 €", detail: "Fort de Bahreïn, Musée national" },
          { label: "Visite circuit F1", price: "20–40 €", detail: "Visite guidée du circuit de Sakhir" },
          { label: "Plongée aux perles", price: "50–100 €", detail: "Initiation à la pêche aux perles traditionnelle" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "55–85 €/j",
        desc: "Hôtel économique, restaurants locaux, taxis",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "130–200 €/j",
        desc: "Bon hôtel, restaurants de qualité, excursions",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "Manama → Fort de Bahreïn → Muharraq → Sakhir → Arbre de Vie",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Manama", amount: "400–600 €" },
            { label: "Hébergement (6 nuits)", amount: "210–360 €" },
            { label: "Transports locaux + taxis", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "230–300 €" },
            { label: "Activités + musées", amount: "180–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Manama", amount: "450–650 €" },
            { label: "Hébergement (6 nuits)", amount: "780–1 100 €" },
            { label: "Transports locaux + location voiture", amount: "200–300 €" },
            { label: "Nourriture + boissons", amount: "550–750 €" },
            { label: "Activités + excursions", amount: "320–450 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols directs Gulf Air ou indirects via Doha/Dubaï, environ 6–7h. Aéroport de Bahreïn très moderne." },
    { icon: "🪪", label: "Visa", value: "Visa à l'arrivée (~25 USD) ou e-Visa disponible pour les ressortissants français. Valable 30 jours." },
    { icon: "💰", label: "Monnaie", value: "Dinar bahreïni (BHD) — l'une des monnaies les plus fortes du monde. Alcool légal, disponible en hôtels et supermarchés spécialisés." },
    { icon: "🗣️", label: "Langue", value: "Arabe — anglais très largement parlé. Bahreïn est le pays du Golfe le plus ouvert à l'influence occidentale." },
    { icon: "🔌", label: "Prise électrique", value: "Type G (240V) — même qu'au Royaume-Uni, adaptateur indispensable depuis la France" },
    { icon: "💊", label: "Santé", value: "Pas de vaccination obligatoire. Eau du robinet potable. Se protéger de la chaleur en été." },
    { icon: "⚠️", label: "Sécurité", value: "Pays globalement sûr. Des tensions politiques internes persistent depuis 2011. Éviter les manifestations." },
    { icon: "🏎️", label: "Grand Prix de F1", value: "Grand Prix de Bahreïn en mars — réserver très tôt (hôtels et billets). Ambiance festive unique dans le Golfe." },
  ],
};
