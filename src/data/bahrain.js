export const BAHRAIN = {
  code: "BHR",
  numericId: 48,
  name: { fr: "Bahreïn", en: "Bahrain" },
  emoji: "🇧🇭",
  capital: { fr: "Manama", en: "Manama" },
  language: { fr: "Arabe", en: "Arabic" },
  currency: { fr: "Dinar bahreïni (BHD)", en: "Bahraini dinar (BHD)" },
  timezone: "UTC+3",
  filter: { budgetMin: 75, budgetMid: 150, tripMin: 1100, tripMid: 2400 },
  description: {
    fr: "Bahreïn, archipel de 33 îles au cœur du Golfe persique, est l'un des plus petits États du monde mais aussi l'un des plus riches de son histoire. Longtemps carrefour commercial entre la Mésopotamie et la civilisation de l'Indus, il fut le cœur de la civilisation Dilmun et le premier grand centre de pêche aux perles du monde islamique. Aujourd'hui hub bancaire et financier du Golfe, il est aussi le seul État pétrolier à avoir développé une scène culturelle et artistique contemporaine dynamique.",
    en: "Bahrain, an archipelago of 33 islands in the heart of the Persian Gulf, is one of the smallest states in the world, but also one of the richest in history. Long a trading crossroads between Mesopotamia and the Indus civilisation, it was the heart of the Dilmun civilisation and the first major pearl-diving centre in the Islamic world. Today a banking and financial hub of the Gulf, it is also the only oil state to have developed a vibrant contemporary cultural and artistic scene.",
  },
  bestPeriods: [
    {
      months: { fr: "Nov – Mar", en: "November – March" },
      label: { fr: "Hiver — idéal", en: "Winter — ideal" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (17–26°C), parfait pour visiter les sites historiques et profiter de la corniche.",
        en: "Pleasant temperatures (17–26°C), perfect for visiting historic sites and enjoying the waterfront promenade.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avr – Mai", en: "April – May" },
      label: { fr: "Printemps — agréable", en: "Spring — pleasant" },
      color: "#f59e0b",
      description: {
        fr: "Chaleur montante mais encore gérable. Bonne période pour les plages et le Formule 1.",
        en: "Heat starts to rise but remains manageable. A good time for beaches and Formula 1.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Jun – Sep", en: "June – September" },
      label: { fr: "Été — à éviter", en: "Summer — best avoided" },
      color: "#ef4444",
      description: {
        fr: "Chaleur et humidité intenses (35–42°C). Bahreïn est quasi-désert touristiquement.",
        en: "Intense heat and humidity (35–42°C). Bahrain is almost deserted by tourists.",
      },
      icon: "🌡️",
    },
  ],
  weatherCities: [
    {
      id: "manama",
      name: "Manama",
      region: { fr: "Capitale", en: "Capital" },
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
      name: { fr: "Qal'at al-Bahrain (Fort de Bahreïn)", en: "Qal'at al-Bahrain (Bahrain Fort)" },
      region: { fr: "Karbabad", en: "Karbabad" },
      description: {
        fr: "Le Fort de Bahreïn, inscrit au patrimoine mondial de l'UNESCO, est un tell artificiel de 12 hectares constitué des couches successives de civilisations ayant occupé le site pendant 5 000 ans. On y discerne les vestiges de la cité de Qal'at al-Bahrain, ancienne capitale de la civilisation Dilmun, superposée sur des niveaux phéniciens, grecs, sassanides et islamiques. Le musée du site offre une synthèse remarquable de cette stratigraphie exceptionnelle.",
        en: "Bahrain Fort, a UNESCO World Heritage Site, is a 12-hectare artificial tell made up of successive layers from the civilisations that occupied the site over 5,000 years. You can make out the remains of the city of Qal'at al-Bahrain, once the capital of the Dilmun civilisation, laid over Phoenician, Greek, Sassanid and Islamic levels. The site museum offers a remarkable overview of this exceptional stratigraphy.",
      },
      wikipedia: "Qal'at_al-Bahrain",
      tags: ["UNESCO", "Archéologie", "Dilmun", "Histoire", "Architecture"],
      mustSee: [
        {
          name: {
            fr: "Tell de Qal'at — site archéologique multicouche de 5 000 ans d'histoire",
            en: "Qal'at tell — multi-layered archaeological site with 5,000 years of history",
          },
          wikipedia: "Qal'at_al-Bahrain",
        },
        {
          name: {
            fr: "Musée du Fort — artefacts Dilmun, grecs et islamiques",
            en: "Fort Museum — Dilmun, Greek and Islamic artefacts",
          },
          wikipedia: "Qal'at_al-Bahrain",
        },
        {
          name: {
            fr: "Vue sur la mer — panorama sur le Golfe depuis les remparts",
            en: "Sea view — panorama over the Gulf from the ramparts",
          },
          wikipedia: "File:230427-N-YC555-0015.jpg",
        },
        {
          name: {
            fr: "Plage de Karbabad — plage calme adjacente au site",
            en: "Karbabad Beach — peaceful beach next to the site",
          },
          wikipedia: "File:Karbabad_beach_rally_on_22_September_2012_02.JPG",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Musée national de Bahreïn", en: "Bahrain National Museum" },
      region: { fr: "Manama", en: "Manama" },
      description: {
        fr: "Le Musée national de Bahreïn, inauguré en 1988, est l'un des plus riches et des mieux conçus du Golfe persique. Ses collections retracent l'histoire de l'archipel depuis la préhistoire jusqu'à l'époque contemporaine, avec une attention particulière à la civilisation Dilmun et à la tradition ancestrale de pêche aux perles. La salle consacrée aux traditions de plongée aux perles, patrimoine immatériel de l'humanité reconnu par l'UNESCO, est particulièrement émouvante.",
        en: "Opened in 1988, the Bahrain National Museum is one of the richest and best-designed museums in the Persian Gulf. Its collections trace the history of the archipelago from prehistory to the present day, with special attention to the Dilmun civilisation and the ancestral tradition of pearl diving. The gallery devoted to pearl-diving traditions, recognised by UNESCO as intangible heritage of humanity, is especially moving.",
      },
      wikipedia: "Bahrain_National_Museum",
      tags: ["Musée", "Histoire", "Dilmun", "Perles"],
      mustSee: [
        {
          name: {
            fr: "Salle Dilmun — la plus grande collection d'artefacts de la civilisation Dilmun",
            en: "Dilmun Hall — the largest collection of Dilmun civilisation artefacts",
          },
          wikipedia: "File:Sceau Dilmun A11770.jpg",
        },
        {
          name: {
            fr: "Momies de Bahreïn — corps embaumés de l'époque Dilmun",
            en: "Bahrain mummies — embalmed bodies from the Dilmun era",
          },
          wikipedia: "File:Hellenic_tombstones_from_Bahrain_National_Museum.jpg",
        },
        {
          name: {
            fr: "Galerie d'art contemporain bahreïni — artistes du Golfe",
            en: "Contemporary Bahraini art gallery — artists from the Gulf",
          },
          wikipedia: "Bahrain_National_Museum",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Arbre de vie et désert central", en: "Tree of Life and central desert" },
      region: { fr: "Centre de Bahreïn", en: "Central Bahrain" },
      description: {
        fr: "L'Arbre de Vie est un mesquite solitaire vieux d'environ 400 ans qui pousse au milieu du désert aride de Bahreïn, sans source d'eau apparente à des kilomètres à la ronde. Ce phénomène naturel mystérieux, dont les racines semblent trouver de l'eau à des dizaines de mètres de profondeur, est devenu un symbole national et un lieu de pèlerinage populaire. Les environs du désert central offrent des promenades parmi les tombes de la période Dilmun, la plus grande nécropole de l'Antiquité.",
        en: "The Tree of Life is a solitary mesquite tree around 400 years old that grows in the middle of Bahrain's arid desert, with no apparent water source for miles around. This mysterious natural phenomenon, whose roots seem to tap water dozens of metres underground, has become a national symbol and a popular pilgrimage site. The surrounding central desert also offers walks among Dilmun-period burial mounds, the largest necropolis of antiquity.",
      },
      wikipedia: "Tree_of_Life_(Bahrain)",
      tags: ["Nature", "Mystère", "Désert", "Archéologie"],
      mustSee: [
        {
          name: {
            fr: "Arbre de Vie — mesquite centenaire isolé en plein désert",
            en: "Tree of Life — centuries-old mesquite standing alone in the desert",
          },
          wikipedia: "Tree_of_Life_(Bahrain)",
        },
        {
          name: {
            fr: "Champs de tumulus — nécropole Dilmun avec des milliers de tombes",
            en: "Burial mound fields — Dilmun necropolis with thousands of tombs",
          },
          wikipedia: "File:Tumulus Courçon 002.jpg",
        },
        {
          name: {
            fr: "Jebel Dukhan — point culminant de Bahreïn (134 m), vue panoramique",
            en: "Jebel Dukhan — Bahrain's highest point (134 m), with panoramic views",
          },
          wikipedia: "File:Jabal_Ad_Dukhan.jpg",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Circuit de Formule 1 et Manama moderne", en: "Formula 1 Circuit and modern Manama" },
      region: { fr: "Sakhir et Manama", en: "Sakhir and Manama" },
      description: {
        fr: "Bahreïn est le premier pays du Moyen-Orient à avoir accueilli un Grand Prix de Formule 1, en 2004, et son circuit de Sakhir reste l'une des étapes les plus populaires du calendrier mondial. Manama, capitale modernisée, offre un mélange fascinant de quartier financier aux tours de verre et de souk authentique où se négocient encore or, épices et textiles. Le quartier de Muharraq, classé à l'UNESCO comme itinéraire de pêche aux perles, mérite une longue flânerie.",
        en: "Bahrain was the first country in the Middle East to host a Formula 1 Grand Prix, in 2004, and its Sakhir circuit remains one of the most popular stops on the global calendar. Manama, the modernised capital, offers a fascinating blend of glass-tower financial district and authentic souk where gold, spices and textiles are still traded. The Muharraq district, listed by UNESCO for its pearling trail, is well worth a long wander.",
      },
      wikipedia: "File:Bahrain_International_Circuit,_November_2,_2017_SkySat_(cropped).jpg",
      tags: ["Sport", "Modernité", "Culture", "Shopping", "Ville", "Gastronomie"],
      mustSee: [
        {
          name: {
            fr: "Circuit de Sakhir — visite guidée de l'un des circuits les plus techniques du monde",
            en: "Sakhir Circuit — guided tour of one of the world's most technical tracks",
          },
          wikipedia: "File:Bahrain_International_Circuit,_November_2,_2017_SkySat_(cropped).jpg",
        },
        {
          name: {
            fr: "Souq de Manama — marché couvert traditionnel aux tissus et or",
            en: "Manama Souq — traditional covered market for textiles and gold",
          },
          wikipedia: "Manama",
        },
        {
          name: {
            fr: "Itinéraire des perles de Muharraq — maisons de marchands classées à l'UNESCO",
            en: "Muharraq Pearling Trail — UNESCO-listed merchant houses",
          },
          wikipedia: "File:Muharraq Bayt Siyadi 2.jpg",
        },
        {
          name: {
            fr: "Al Fateh Grand Mosque — l'une des plus grandes mosquées du monde",
            en: "Al Fateh Grand Mosque — one of the largest mosques in the world",
          },
          wikipedia: "File:Al_Fateh_outside.jpg",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Bahreïn est légèrement moins cher que ses voisins Qatar et Émirats arabes unis, mais reste une destination haut de gamme. L'alcool y est légal et disponible dans les hôtels, restaurants et supermarchés spécialisés, contrairement aux autres États du Golfe.",
      en: "Bahrain is slightly cheaper than its neighbours Qatar and the United Arab Emirates, but it still ranks as an upscale destination. Alcohol is legal here and available in hotels, restaurants and specialised supermarkets, unlike in other Gulf states.",
    },
    currency: "BHD",
    exchangeRate: "1€ ≈ 0,41 BHD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          {
            label: { fr: "Hôtel économique", en: "Budget hotel" },
            price: "35–60 €",
            detail: { fr: "Hôtel simple avec clim, en centre-ville", en: "Simple air-conditioned hotel in the city centre" },
          },
          {
            label: { fr: "Hôtel mid-range", en: "Mid-range hotel" },
            price: "70–120 €",
            detail: { fr: "Hôtel 3–4 étoiles avec piscine", en: "3- to 4-star hotel with a pool" },
          },
          {
            label: { fr: "Hôtel de luxe", en: "Luxury hotel" },
            price: "150–350 €",
            detail: { fr: "Palaces sur la côte ou dans le quartier financier", en: "Palace-style hotels on the coast or in the financial district" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          {
            label: { fr: "Restaurant local", en: "Local restaurant" },
            price: "5–10 €",
            detail: { fr: "Machbous, muhammar (riz au sucre), harees", en: "Machbous, muhammar (sweet rice), harees" },
          },
          {
            label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" },
            price: "15–30 €",
            detail: { fr: "Cuisine internationale, fruits de mer du Golfe", en: "International cuisine, Gulf seafood" },
          },
          {
            label: { fr: "Street food / food court", en: "Street food / food court" },
            price: "3–6 €",
            detail: { fr: "Shawarma, falafel, luqaimat", en: "Shawarma, falafel, luqaimat" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          {
            label: { fr: "Taxi en ville", en: "City taxi" },
            price: "3–8 €",
            detail: { fr: "Course courte, taxis en abondance", en: "Short ride, taxis are plentiful" },
          },
          {
            label: { fr: "Bus public (Bahrain Bus)", en: "Public bus (Bahrain Bus)" },
            price: "0,30–1 €",
            detail: { fr: "Réseau couvrant principales zones", en: "Network covering the main areas" },
          },
          {
            label: { fr: "Location de voiture", en: "Car rental" },
            price: "25–50 €/j",
            detail: { fr: "Recommandé pour explorer hors Manama", en: "Recommended for exploring beyond Manama" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          {
            label: { fr: "Entrée sites et musées", en: "Site and museum admission" },
            price: "2–8 €",
            detail: { fr: "Fort de Bahreïn, Musée national", en: "Bahrain Fort, National Museum" },
          },
          {
            label: { fr: "Visite circuit F1", en: "F1 circuit tour" },
            price: "20–40 €",
            detail: { fr: "Visite guidée du circuit de Sakhir", en: "Guided tour of the Sakhir circuit" },
          },
          {
            label: { fr: "Plongée aux perles", en: "Pearl diving" },
            price: "50–100 €",
            detail: { fr: "Initiation à la pêche aux perles traditionnelle", en: "Introduction to traditional pearl fishing" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "55–85 €/j",
        desc: { fr: "Hôtel économique, restaurants locaux, taxis", en: "Budget hotel, local restaurants, taxis" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "130–200 €/j",
        desc: { fr: "Bon hôtel, restaurants de qualité, excursions", en: "Good hotel, quality restaurants, excursions" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days" },
      route: {
        fr: "Manama → Fort de Bahreïn → Muharraq → Sakhir → Arbre de Vie",
        en: "Manama → Bahrain Fort → Muharraq → Sakhir → Tree of Life",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Manama", en: "Return flight Paris–Manama" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)" }, amount: "210–360 €" },
            { label: { fr: "Transports locaux + taxis", en: "Local transport + taxis" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "230–300 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "180–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Manama", en: "Return flight Paris–Manama" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)" }, amount: "780–1 100 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental" }, amount: "200–300 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "550–750 €" },
            { label: { fr: "Activités + excursions", en: "Activities + excursions" }, amount: "320–450 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: {
        fr: "Vols directs Gulf Air ou indirects via Doha/Dubaï, environ 6–7h. Aéroport de Bahreïn très moderne.",
        en: "Direct Gulf Air flights or indirect routes via Doha/Dubai, around 6–7 hours. Bahrain Airport is very modern.",
      },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: {
        fr: "Visa à l'arrivée (~25 USD) ou e-Visa disponible pour les ressortissants français. Valable 30 jours.",
        en: "Visa on arrival (~USD 25) or e-visa available for French nationals. Valid for 30 days.",
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: {
        fr: "Dinar bahreïni (BHD) — l'une des monnaies les plus fortes du monde. Alcool légal, disponible en hôtels et supermarchés spécialisés.",
        en: "Bahraini dinar (BHD) — one of the strongest currencies in the world. Alcohol is legal and available in hotels and specialised supermarkets.",
      },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: {
        fr: "Arabe — anglais très largement parlé. Bahreïn est le pays du Golfe le plus ouvert à l'influence occidentale.",
        en: "Arabic — English is very widely spoken. Bahrain is the Gulf country most open to Western influence.",
      },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: {
        fr: "Type G (240V) — même qu'au Royaume-Uni, adaptateur indispensable depuis la France",
        en: "Type G (240V) — the same as in the UK, so an adapter is essential from France",
      },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: {
        fr: "Pas de vaccination obligatoire. Eau du robinet potable. Se protéger de la chaleur en été.",
        en: "No mandatory vaccinations. Tap water is safe to drink. Protect yourself from the heat in summer.",
      },
    },
    {
      icon: "⚠️",
      label: { fr: "Sécurité", en: "Safety" },
      value: {
        fr: "Pays globalement sûr. Des tensions politiques internes persistent depuis 2011. Éviter les manifestations.",
        en: "The country is generally safe. Internal political tensions have persisted since 2011. Avoid demonstrations.",
      },
    },
    {
      icon: "🏎️",
      label: { fr: "Grand Prix de F1", en: "F1 Grand Prix" },
      value: {
        fr: "Grand Prix de Bahreïn en mars — réserver très tôt (hôtels et billets). Ambiance festive unique dans le Golfe.",
        en: "Bahrain Grand Prix in March — book very early (hotels and tickets). A uniquely festive atmosphere in the Gulf.",
      },
    },
  ],
};
