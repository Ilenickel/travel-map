export const BAHRAIN = {
  code: "BHR",
  numericId: 48,
  name: { fr: "Bahreïn", en: "Bahrain", es: "Baréin" },
  emoji: "🇧🇭",
  capital: { fr: "Manama", en: "Manama", es: "Manama" },
  language: { fr: "Arabe", en: "Arabic", es: "Árabe" },
  currency: { fr: "Dinar bahreïni (BHD)", en: "Bahraini dinar (BHD)", es: "Dinar baréiní (BHD)" },
  timezone: "UTC+3",
  filter: { budgetMin: 75, budgetMid: 150, tripMin: 1100, tripMid: 2400 },
  description: {
    fr: "Bahreïn, archipel de 33 îles au cœur du Golfe persique, est l'un des plus petits États du monde mais aussi l'un des plus riches de son histoire. Longtemps carrefour commercial entre la Mésopotamie et la civilisation de l'Indus, il fut le cœur de la civilisation Dilmun et le premier grand centre de pêche aux perles du monde islamique. Aujourd'hui hub bancaire et financier du Golfe, il est aussi le seul État pétrolier à avoir développé une scène culturelle et artistique contemporaine dynamique.",
    en: "Bahrain, an archipelago of 33 islands in the heart of the Persian Gulf, is one of the smallest states in the world, but also one of the richest in history. Long a trading crossroads between Mesopotamia and the Indus civilisation, it was the heart of the Dilmun civilisation and the first major pearl-diving centre in the Islamic world. Today a banking and financial hub of the Gulf, it is also the only oil state to have developed a vibrant contemporary cultural and artistic scene.",
    es: "Baréin, archipiélago de 33 islas en el corazón del golfo Pérsico, es uno de los estados más pequeños del mundo, pero también uno de los más ricos en historia. Durante mucho tiempo cruce comercial entre Mesopotamia y la civilización del Indo, fue el corazón de la civilización Dilmún y el primer gran centro de pesca de perlas del mundo islámico. Hoy en día, centro bancario y financiero del Golfo, es también el único estado petrolero que ha desarrollado una escena cultural y artística contemporánea dinámica.",
  },
  bestPeriods: [
    {
      months: { fr: "Nov – Mar", en: "November – March", es: "Nov – Mar" },
      label: { fr: "Hiver — idéal", en: "Winter — ideal", es: "Invierno — ideal" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (17–26°C), parfait pour visiter les sites historiques et profiter de la corniche.",
        en: "Pleasant temperatures (17–26°C), perfect for visiting historic sites and enjoying the waterfront promenade.",
        es: "Temperaturas agradables (17–26°C), perfecto para visitar los sitios históricos y disfrutar del malecón.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avr – Mai", en: "April – May", es: "Abr – May" },
      label: { fr: "Printemps — agréable", en: "Spring — pleasant", es: "Primavera — agradable" },
      color: "#f59e0b",
      description: {
        fr: "Chaleur montante mais encore gérable. Bonne période pour les plages et le Formule 1.",
        en: "Heat starts to rise but remains manageable. A good time for beaches and Formula 1.",
        es: "El calor empieza a subir pero sigue siendo llevadero. Buena época para las playas y la Fórmula 1.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Jun – Sep", en: "June – September", es: "Jun – Sep" },
      label: { fr: "Été — à éviter", en: "Summer — best avoided", es: "Verano — evitar" },
      color: "#ef4444",
      description: {
        fr: "Chaleur et humidité intenses (35–42°C). Bahreïn est quasi-désert touristiquement.",
        en: "Intense heat and humidity (35–42°C). Bahrain is almost deserted by tourists.",
        es: "Calor y humedad intensos (35–42°C). Baréin queda casi desierto de turistas.",
      },
      icon: "🌡️",
    },
  ],
  weatherCities: [
    {
      id: "manama",
      name: "Manama",
      region: { fr: "Capitale", en: "Capital", es: "Capital" },
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
      name: { fr: "Qal'at al-Bahrain (Fort de Bahreïn)", en: "Qal'at al-Bahrain (Bahrain Fort)", es: "Qal'at al-Bahrain (Fuerte de Baréin)" },
      region: { fr: "Karbabad", en: "Karbabad", es: "Karbabad" },
      description: {
        fr: "Le Fort de Bahreïn, inscrit au patrimoine mondial de l'UNESCO, est un tell artificiel de 12 hectares constitué des couches successives de civilisations ayant occupé le site pendant 5 000 ans. On y discerne les vestiges de la cité de Qal'at al-Bahrain, ancienne capitale de la civilisation Dilmun, superposée sur des niveaux phéniciens, grecs, sassanides et islamiques. Le musée du site offre une synthèse remarquable de cette stratigraphie exceptionnelle.",
        en: "Bahrain Fort, a UNESCO World Heritage Site, is a 12-hectare artificial tell made up of successive layers from the civilisations that occupied the site over 5,000 years. You can make out the remains of the city of Qal'at al-Bahrain, once the capital of the Dilmun civilisation, laid over Phoenician, Greek, Sassanid and Islamic levels. The site museum offers a remarkable overview of this exceptional stratigraphy.",
        es: "El Fuerte de Baréin, inscrito en el Patrimonio Mundial de la UNESCO, es un tell artificial de 12 hectáreas formado por las capas sucesivas de las civilizaciones que ocuparon el sitio durante 5.000 años. En él se distinguen los restos de la ciudad de Qal'at al-Bahrain, antigua capital de la civilización Dilmún, superpuestos a niveles fenicios, griegos, sasánidas e islámicos. El museo del sitio ofrece una síntesis extraordinaria de esta estratigrafía excepcional.",
      },
      wikipedia: "Qal'at_al-Bahrain",
      tags: ["UNESCO", "Archéologie", "Dilmun", "Histoire", "Architecture"],
      mustSee: [
        {
          name: {
            fr: "Tell de Qal'at — site archéologique multicouche de 5 000 ans d'histoire",
            en: "Qal'at tell — multi-layered archaeological site with 5,000 years of history",
            es: "Tell de Qal'at — yacimiento arqueológico multicapa con 5.000 años de historia",
          },
          wikipedia: "Qal'at_al-Bahrain",
        },
        {
          name: {
            fr: "Musée du Fort — artefacts Dilmun, grecs et islamiques",
            en: "Fort Museum — Dilmun, Greek and Islamic artefacts",
            es: "Museo del Fuerte — artefactos dilmunitas, griegos e islámicos",
          },
          wikipedia: "Qal'at_al-Bahrain",
        },
        {
          name: {
            fr: "Vue sur la mer — panorama sur le Golfe depuis les remparts",
            en: "Sea view — panorama over the Gulf from the ramparts",
            es: "Vista al mar — panorámica del Golfo desde las murallas",
          },
          wikipedia: "File:230427-N-YC555-0015.jpg",
        },
        {
          name: {
            fr: "Plage de Karbabad — plage calme adjacente au site",
            en: "Karbabad Beach — peaceful beach next to the site",
            es: "Playa de Karbabad — playa tranquila junto al yacimiento",
          },
          wikipedia: "File:Karbabad_beach_rally_on_22_September_2012_02.JPG",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Musée national de Bahreïn", en: "Bahrain National Museum", es: "Museo Nacional de Baréin" },
      region: { fr: "Manama", en: "Manama", es: "Manama" },
      description: {
        fr: "Le Musée national de Bahreïn, inauguré en 1988, est l'un des plus riches et des mieux conçus du Golfe persique. Ses collections retracent l'histoire de l'archipel depuis la préhistoire jusqu'à l'époque contemporaine, avec une attention particulière à la civilisation Dilmun et à la tradition ancestrale de pêche aux perles. La salle consacrée aux traditions de plongée aux perles, patrimoine immatériel de l'humanité reconnu par l'UNESCO, est particulièrement émouvante.",
        en: "Opened in 1988, the Bahrain National Museum is one of the richest and best-designed museums in the Persian Gulf. Its collections trace the history of the archipelago from prehistory to the present day, with special attention to the Dilmun civilisation and the ancestral tradition of pearl diving. The gallery devoted to pearl-diving traditions, recognised by UNESCO as intangible heritage of humanity, is especially moving.",
        es: "El Museo Nacional de Baréin, inaugurado en 1988, es uno de los más ricos y mejor concebidos del golfo Pérsico. Sus colecciones recorren la historia del archipiélago desde la prehistoria hasta la época contemporánea, con especial atención a la civilización Dilmún y a la tradición ancestral de la pesca de perlas. La sala dedicada a las tradiciones del buceo de perlas, patrimonio inmaterial de la humanidad reconocido por la UNESCO, resulta especialmente conmovedora.",
      },
      wikipedia: "Bahrain_National_Museum",
      tags: ["Musée", "Histoire", "Dilmun", "Perles"],
      mustSee: [
        {
          name: {
            fr: "Salle Dilmun — la plus grande collection d'artefacts de la civilisation Dilmun",
            en: "Dilmun Hall — the largest collection of Dilmun civilisation artefacts",
            es: "Sala Dilmún — la mayor colección de artefactos de la civilización Dilmún",
          },
          wikipedia: "File:Sceau Dilmun A11770.jpg",
        },
        {
          name: {
            fr: "Momies de Bahreïn — corps embaumés de l'époque Dilmun",
            en: "Bahrain mummies — embalmed bodies from the Dilmun era",
            es: "Momias de Baréin — cuerpos embalsamados de la época Dilmún",
          },
          wikipedia: "File:Hellenic_tombstones_from_Bahrain_National_Museum.jpg",
        },
        {
          name: {
            fr: "Galerie d'art contemporain bahreïni — artistes du Golfe",
            en: "Contemporary Bahraini art gallery — artists from the Gulf",
            es: "Galería de arte contemporáneo baréiní — artistas del Golfo",
          },
          wikipedia: "Bahrain_National_Museum",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Arbre de vie et désert central", en: "Tree of Life and central desert", es: "Árbol de la Vida y desierto central" },
      region: { fr: "Centre de Bahreïn", en: "Central Bahrain", es: "Centro de Baréin" },
      description: {
        fr: "L'Arbre de Vie est un mesquite solitaire vieux d'environ 400 ans qui pousse au milieu du désert aride de Bahreïn, sans source d'eau apparente à des kilomètres à la ronde. Ce phénomène naturel mystérieux, dont les racines semblent trouver de l'eau à des dizaines de mètres de profondeur, est devenu un symbole national et un lieu de pèlerinage populaire. Les environs du désert central offrent des promenades parmi les tombes de la période Dilmun, la plus grande nécropole de l'Antiquité.",
        en: "The Tree of Life is a solitary mesquite tree around 400 years old that grows in the middle of Bahrain's arid desert, with no apparent water source for miles around. This mysterious natural phenomenon, whose roots seem to tap water dozens of metres underground, has become a national symbol and a popular pilgrimage site. The surrounding central desert also offers walks among Dilmun-period burial mounds, the largest necropolis of antiquity.",
        es: "El Árbol de la Vida es un mezquite solitario de unos 400 años que crece en medio del árido desierto de Baréin, sin fuente de agua aparente en kilómetros a la redonda. Este misterioso fenómeno natural, cuyas raíces parecen encontrar agua a decenas de metros de profundidad, se ha convertido en un símbolo nacional y un popular lugar de peregrinación. Los alrededores del desierto central ofrecen paseos entre las tumbas del período Dilmún, la mayor necrópolis de la Antigüedad.",
      },
      wikipedia: "Tree_of_Life_(Bahrain)",
      tags: ["Nature", "Mystère", "Désert", "Archéologie"],
      mustSee: [
        {
          name: {
            fr: "Arbre de Vie — mesquite centenaire isolé en plein désert",
            en: "Tree of Life — centuries-old mesquite standing alone in the desert",
            es: "Árbol de la Vida — mezquite centenario aislado en pleno desierto",
          },
          wikipedia: "Tree_of_Life_(Bahrain)",
        },
        {
          name: {
            fr: "Champs de tumulus — nécropole Dilmun avec des milliers de tombes",
            en: "Burial mound fields — Dilmun necropolis with thousands of tombs",
            es: "Campos de túmulos — necrópolis dilmunita con miles de tumbas",
          },
          wikipedia: "File:Tumulus Courçon 002.jpg",
        },
        {
          name: {
            fr: "Jebel Dukhan — point culminant de Bahreïn (134 m), vue panoramique",
            en: "Jebel Dukhan — Bahrain's highest point (134 m), with panoramic views",
            es: "Jebel Dukhan — punto más alto de Baréin (134 m), vistas panorámicas",
          },
          wikipedia: "File:Jabal_Ad_Dukhan.jpg",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Circuit de Formule 1 et Manama moderne", en: "Formula 1 Circuit and modern Manama", es: "Circuito de Fórmula 1 y Manama moderna" },
      region: { fr: "Sakhir et Manama", en: "Sakhir and Manama", es: "Sakhir y Manama" },
      description: {
        fr: "Bahreïn est le premier pays du Moyen-Orient à avoir accueilli un Grand Prix de Formule 1, en 2004, et son circuit de Sakhir reste l'une des étapes les plus populaires du calendrier mondial. Manama, capitale modernisée, offre un mélange fascinant de quartier financier aux tours de verre et de souk authentique où se négocient encore or, épices et textiles. Le quartier de Muharraq, classé à l'UNESCO comme itinéraire de pêche aux perles, mérite une longue flânerie.",
        en: "Bahrain was the first country in the Middle East to host a Formula 1 Grand Prix, in 2004, and its Sakhir circuit remains one of the most popular stops on the global calendar. Manama, the modernised capital, offers a fascinating blend of glass-tower financial district and authentic souk where gold, spices and textiles are still traded. The Muharraq district, listed by UNESCO for its pearling trail, is well worth a long wander.",
        es: "Baréin fue el primer país de Oriente Medio en acoger un Gran Premio de Fórmula 1, en 2004, y su circuito de Sakhir sigue siendo una de las citas más populares del calendario mundial. Manama, capital modernizada, ofrece una mezcla fascinante entre el distrito financiero de torres de cristal y el zoco tradicional donde aún se comercia con oro, especias y textiles. El barrio de Muharraq, catalogado por la UNESCO como ruta de la perla, merece un largo paseo.",
      },
      wikipedia: "File:Bahrain_International_Circuit,_November_2,_2017_SkySat_(cropped).jpg",
      tags: ["Sport", "Modernité", "Culture", "Shopping", "Ville", "Gastronomie"],
      mustSee: [
        {
          name: {
            fr: "Circuit de Sakhir — visite guidée de l'un des circuits les plus techniques du monde",
            en: "Sakhir Circuit — guided tour of one of the world's most technical tracks",
            es: "Circuito de Sakhir — visita guiada a uno de los circuitos más técnicos del mundo",
          },
          wikipedia: "File:Bahrain_International_Circuit,_November_2,_2017_SkySat_(cropped).jpg",
        },
        {
          name: {
            fr: "Souq de Manama — marché couvert traditionnel aux tissus et or",
            en: "Manama Souq — traditional covered market for textiles and gold",
            es: "Zoco de Manama — mercado cubierto tradicional de telas y oro",
          },
          wikipedia: "Manama",
        },
        {
          name: {
            fr: "Itinéraire des perles de Muharraq — maisons de marchands classées à l'UNESCO",
            en: "Muharraq Pearling Trail — UNESCO-listed merchant houses",
            es: "Ruta de la perla de Muharraq — casas de mercaderes catalogadas por la UNESCO",
          },
          wikipedia: "File:Muharraq Bayt Siyadi 2.jpg",
        },
        {
          name: {
            fr: "Al Fateh Grand Mosque — l'une des plus grandes mosquées du monde",
            en: "Al Fateh Grand Mosque — one of the largest mosques in the world",
            es: "Al Fateh Grand Mosque — una de las mezquitas más grandes del mundo",
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
      es: "Baréin es ligeramente más barato que sus vecinos Catar y los Emiratos Árabes Unidos, pero sigue siendo un destino de gama alta. El alcohol es legal y está disponible en hoteles, restaurantes y supermercados especializados, a diferencia de otros estados del Golfo.",
    },
    currency: "BHD",
    exchangeRate: "1€ ≈ 0,41 BHD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          {
            label: { fr: "Hôtel économique", en: "Budget hotel", es: "Hotel económico" },
            price: "35–60 €",
            detail: { fr: "Hôtel simple avec clim, en centre-ville", en: "Simple air-conditioned hotel in the city centre", es: "Hotel sencillo con aire acondicionado, en el centro" },
          },
          {
            label: { fr: "Hôtel mid-range", en: "Mid-range hotel", es: "Hotel de gama media" },
            price: "70–120 €",
            detail: { fr: "Hôtel 3–4 étoiles avec piscine", en: "3- to 4-star hotel with a pool", es: "Hotel de 3–4 estrellas con piscina" },
          },
          {
            label: { fr: "Hôtel de luxe", en: "Luxury hotel", es: "Hotel de lujo" },
            price: "150–350 €",
            detail: { fr: "Palaces sur la côte ou dans le quartier financier", en: "Palace-style hotels on the coast or in the financial district", es: "Hoteles de gran lujo en la costa o en el distrito financiero" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          {
            label: { fr: "Restaurant local", en: "Local restaurant", es: "Restaurante local" },
            price: "5–10 €",
            detail: { fr: "Machbous, muhammar (riz au sucre), harees", en: "Machbous, muhammar (sweet rice), harees", es: "Machbous, muhammar (arroz dulce), harees" },
          },
          {
            label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media" },
            price: "15–30 €",
            detail: { fr: "Cuisine internationale, fruits de mer du Golfe", en: "International cuisine, Gulf seafood", es: "Cocina internacional, mariscos del Golfo" },
          },
          {
            label: { fr: "Street food / food court", en: "Street food / food court", es: "Comida callejera / food court" },
            price: "3–6 €",
            detail: { fr: "Shawarma, falafel, luqaimat", en: "Shawarma, falafel, luqaimat", es: "Shawarma, falafel, luqaimat" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          {
            label: { fr: "Taxi en ville", en: "City taxi", es: "Taxi en la ciudad" },
            price: "3–8 €",
            detail: { fr: "Course courte, taxis en abondance", en: "Short ride, taxis are plentiful", es: "Trayecto corto, taxis abundantes" },
          },
          {
            label: { fr: "Bus public (Bahrain Bus)", en: "Public bus (Bahrain Bus)", es: "Autobús público (Bahrain Bus)" },
            price: "0,30–1 €",
            detail: { fr: "Réseau couvrant principales zones", en: "Network covering the main areas", es: "Red que cubre las principales zonas" },
          },
          {
            label: { fr: "Location de voiture", en: "Car rental", es: "Alquiler de coche" },
            price: "25–50 €/j",
            detail: { fr: "Recommandé pour explorer hors Manama", en: "Recommended for exploring beyond Manama", es: "Recomendado para explorar fuera de Manama" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          {
            label: { fr: "Entrée sites et musées", en: "Site and museum admission", es: "Entrada a sitios y museos" },
            price: "2–8 €",
            detail: { fr: "Fort de Bahreïn, Musée national", en: "Bahrain Fort, National Museum", es: "Fuerte de Baréin, Museo Nacional" },
          },
          {
            label: { fr: "Visite circuit F1", en: "F1 circuit tour", es: "Visita al circuito de F1" },
            price: "20–40 €",
            detail: { fr: "Visite guidée du circuit de Sakhir", en: "Guided tour of the Sakhir circuit", es: "Visita guiada al circuito de Sakhir" },
          },
          {
            label: { fr: "Plongée aux perles", en: "Pearl diving", es: "Buceo de perlas" },
            price: "50–100 €",
            detail: { fr: "Initiation à la pêche aux perles traditionnelle", en: "Introduction to traditional pearl fishing", es: "Iniciación a la pesca tradicional de perlas" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
        daily: "55–85 €/j",
        desc: { fr: "Hôtel économique, restaurants locaux, taxis", en: "Budget hotel, local restaurants, taxis", es: "Hotel económico, restaurantes locales, taxis" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort" },
        daily: "130–200 €/j",
        desc: { fr: "Bon hôtel, restaurants de qualité, excursions", en: "Good hotel, quality restaurants, excursions", es: "Buen hotel, restaurantes de calidad, excursiones" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días" },
      route: {
        fr: "Manama → Fort de Bahreïn → Muharraq → Sakhir → Arbre de Vie",
        en: "Manama → Bahrain Fort → Muharraq → Sakhir → Tree of Life",
        es: "Manama → Fuerte de Baréin → Muharraq → Sakhir → Árbol de la Vida",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Manama", en: "Return flight Paris–Manama", es: "Vuelo ida/vuelta París–Manama" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)" }, amount: "210–360 €" },
            { label: { fr: "Transports locaux + taxis", en: "Local transport + taxis", es: "Transporte local + taxis" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "230–300 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums", es: "Actividades + museos" }, amount: "180–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Manama", en: "Return flight Paris–Manama", es: "Vuelo ida/vuelta París–Manama" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)" }, amount: "780–1 100 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental", es: "Transporte local + alquiler de coche" }, amount: "200–300 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "550–750 €" },
            { label: { fr: "Activités + excursions", en: "Activities + excursions", es: "Actividades + excursiones" }, amount: "320–450 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París" },
      value: {
        fr: "Vols directs Gulf Air ou indirects via Doha/Dubaï, environ 6–7h. Aéroport de Bahreïn très moderne.",
        en: "Direct Gulf Air flights or indirect routes via Doha/Dubai, around 6–7 hours. Bahrain Airport is very modern.",
        es: "Vuelos directos con Gulf Air o indirectos vía Doha/Dubái, unas 6–7 horas. El aeropuerto de Baréin es muy moderno.",
      },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa", es: "Visado" },
      value: {
        fr: "Visa à l'arrivée (~25 USD) ou e-Visa disponible pour les ressortissants français. Valable 30 jours.",
        en: "Visa on arrival (~USD 25) or e-visa available for French nationals. Valid for 30 days.",
        es: "Visado a la llegada (~25 USD) o e-Visa disponible para ciudadanos españoles. Válido 30 días.",
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency", es: "Moneda" },
      value: {
        fr: "Dinar bahreïni (BHD) — l'une des monnaies les plus fortes du monde. Alcool légal, disponible en hôtels et supermarchés spécialisés.",
        en: "Bahraini dinar (BHD) — one of the strongest currencies in the world. Alcohol is legal and available in hotels and specialised supermarkets.",
        es: "Dinar bareiní (BHD) — una de las monedas más fuertes del mundo. El alcohol es legal, disponible en hoteles y supermercados especializados.",
      },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language", es: "Idioma" },
      value: {
        fr: "Arabe — anglais très largement parlé. Bahreïn est le pays du Golfe le plus ouvert à l'influence occidentale.",
        en: "Arabic — English is very widely spoken. Bahrain is the Gulf country most open to Western influence.",
        es: "Árabe — el inglés se habla muy ampliamente. Baréin es el país del Golfo más abierto a la influencia occidental.",
      },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" },
      value: {
        fr: "Type G (240V) — même qu'au Royaume-Uni, adaptateur indispensable depuis la France",
        en: "Type G (240V) — the same as in the UK, so an adapter is essential from France",
        es: "Tipo G (240V) — igual que en el Reino Unido, adaptador indispensable desde España",
      },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health", es: "Salud" },
      value: {
        fr: "Pas de vaccination obligatoire. Eau du robinet potable. Se protéger de la chaleur en été.",
        en: "No mandatory vaccinations. Tap water is safe to drink. Protect yourself from the heat in summer.",
        es: "Sin vacunación obligatoria. Agua del grifo potable. Protegerse del calor en verano.",
      },
    },
    {
      icon: "⚠️",
      label: { fr: "Sécurité", en: "Safety", es: "Seguridad" },
      value: {
        fr: "Pays globalement sûr. Des tensions politiques internes persistent depuis 2011. Éviter les manifestations.",
        en: "The country is generally safe. Internal political tensions have persisted since 2011. Avoid demonstrations.",
        es: "País globalmente seguro. Persisten tensiones políticas internas desde 2011. Evitar las manifestaciones.",
      },
    },
    {
      icon: "🏎️",
      label: { fr: "Grand Prix de F1", en: "F1 Grand Prix", es: "Gran Premio de F1" },
      value: {
        fr: "Grand Prix de Bahreïn en mars — réserver très tôt (hôtels et billets). Ambiance festive unique dans le Golfe.",
        en: "Bahrain Grand Prix in March — book very early (hotels and tickets). A uniquely festive atmosphere in the Gulf.",
        es: "Gran Premio de Baréin en marzo — reservar con mucha antelación (hoteles y entradas). Ambiente festivo único en el Golfo.",
      },
    },
  ],
};
