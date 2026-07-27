export const AZERBAIJAN = {
  code: "AZE",
  numericId: 31,
  name: { fr: "Azerbaïdjan", en: "Azerbaijan", es: "Azerbaiyán", de: "Aserbaidschan" },
  emoji: "🇦🇿",
  capital: { fr: "Bakou", en: "Baku", es: "Bakú", de: "Baku" },
  language: { fr: "Azerbaïdjanais", en: "Azerbaijani", es: "Azerí", de: "Aserbaidschanisch" },
  currency: { fr: "Manat (AZN)", en: "Azerbaijani manat (AZN)", es: "Manat azerí (AZN)", de: "Manat (AZN)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 1200, tripMid: 2200,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 1,
    ville: 2,
    plage: 1,
    plongee: 1,
  },
  description: {
    fr: "L'Azerbaïdjan, « Pays du Feu », surprend avec sa capitale Bakou aux tours flammes ultramodernes surplombant une vieille ville médiévale classée à l'UNESCO. Au-delà, des villages de montagne préservés, les forêts de Sheki et des feux naturels éternels font de ce pays du Caucase une découverte authentique.", en: "Azerbaijan, the “Land of Fire”, captivates with its capital Baku, where ultra-modern Flame Towers rise above a UNESCO-listed medieval old town. Beyond the capital, preserved mountain villages, the forests of Sheki and eternal natural flames make this Caucasus country an authentic and surprising destination.", es: "Azerbaiyán, el «País del Fuego», sorprende con su capital Bakú, cuyas ultramodernas Torres de Fuego dominan un casco antiguo medieval declarado Patrimonio de la UNESCO. Más allá, pueblos de montaña preservados, los bosques de Sheki y llamas naturales eternas hacen de este país del Cáucaso un descubrimiento auténtico.", de: "Aserbaidschan, das „Land des Feuers“, überrascht mit seiner Hauptstadt Baku mit ihren hochmodernen Flammentürmen, die eine alte mittelalterliche Stadt überblicken, die zum UNESCO-Weltkulturerbe gehört. Darüber hinaus machen erhaltene Bergdörfer, Sheki-Wälder und ewige Naturfeuer dieses kaukasische Land zu einer authentischen Entdeckung.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June", es: "Abril – Junio", de: "April – Juni" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera", de: "Frühling" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (13–24 °C), fleurs dans les montagnes, idéal pour Bakou et les régions rurales.", en: "Pleasant temperatures (13–24 °C), flowers blooming in the mountains, ideal for Baku and rural regions.", es: "Temperaturas agradables (13–24 °C), flores en las montañas, ideal para Bakú y las regiones rurales.", de: "Angenehme Temperaturen (13–24°C), Blumen in den Bergen, ideal für Baku und ländliche Gebiete.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October", es: "Septiembre – Octubre", de: "September – Oktober" },
      label: { fr: "Automne", en: "Autumn", es: "Otoño", de: "Herbst" },
      color: "#fb923c",
      description: {
        fr: "Chaleur retombée, feuillages magnifiques dans les forêts de Sheki, raisins en Kuba.", en: "Cooler weather, beautiful foliage in Sheki's forests, and grape season in Quba.", es: "El calor amaina, hermosos colores otoñales en los bosques de Sheki, uvas en Quba.", de: "Die Hitze ließ nach, prächtiges Laub in den Wäldern von Sheki, Trauben in Kuba.",
      },
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "baku",
      name: "Bakou",
      region: { fr: "Bakou", en: "Baku", es: "Bakú", de: "Baku" },
      data: [
        { month: "Jan", temp: 5,  rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 5,  rain: 20,  icon: "⛅" },
        { month: "Mar", temp: 8,  rain: 25,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 25,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Sep", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 17, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 11, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 7,  rain: 25,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Bakou",
      region: { fr: "Bakou", en: "Baku", es: "Bakú", de: "Baku" },
      description: {
        fr: "Capitale fascinante où cohabitent la tour de la Vierge (XIIe s.) et les Flame Towers futuristes, la vieille ville médiévale UNESCO et les boutiques Chanel de l'avenue Neftçiler.", en: "A fascinating capital where the 12th-century Maiden Tower stands alongside the futuristic Flame Towers, a UNESCO-listed medieval old town and Chanel boutiques on Neftchilar Avenue.", es: "Capital fascinante donde conviven la Torre de la Doncella (s. XII) y las futuristas Torres de Fuego, el casco antiguo medieval UNESCO y las boutiques Chanel de la avenida Neftchilar.", de: "Faszinierende Hauptstadt, in der der Virgin Tower (12. Jahrhundert) und die futuristischen Flame Towers nebeneinander existieren, die mittelalterliche UNESCO-Altstadt und die Chanel-Boutiquen in der Neftçiler Avenue.",
      },
      wikipedia: "File:Baku city at night.jpg",
      tags: ["Ville", "Architecture", "Histoire", "Culture", "Gastronomie", "Plage"],
      mustSee: [
        { name: { fr: "Flame Towers — skyline de Bakou", en: "Flame Towers — Baku skyline", es: "Flame Towers — perfil urbano de Bakú", de: "Flame Towers – Skyline von Baku" }, wikipedia: "Flame_Towers" },
        { name: { fr: "Tour de la Vierge (Qız Qalası)", en: "Maiden Tower (Qız Qalası)", es: "Torre de la Doncella (Qız Qalası)", de: "Jungfrauenturm (Qız Qalası)" }, wikipedia: "File:Baku Maiden Tower.jpg" },
        { name: { fr: "Palais des Shirvanshahs (UNESCO)", en: "Palace of the Shirvanshahs (UNESCO)", es: "Palacio de los Shirvanshahs (UNESCO)", de: "Palast der Schirwanschahs (UNESCO)" }, wikipedia: "Palace_of_the_Shirvanshahs" },
        { name: { fr: "Vieille ville Icherisheher (UNESCO)", en: "Icherisheher Old City (UNESCO)", es: "Casco antiguo de Icherisheher (UNESCO)", de: "Altstadt Icherisheher (UNESCO)" }, wikipedia: "File:Fuente en Baku, Azerbaiyán, 2016-09-26, DD 227-229 HDR.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sheki",
      region: { fr: "Sheki-Zagatala", en: "Sheki-Zagatala", es: "Sheki-Zagatala", de: "Sheki-Zagatala" },
      description: {
        fr: "Ancienne capitale des khans, Sheki est l'une des plus belles villes historiques du Caucase, avec son caravansérail ottoman et le palais aux vitraux de mosaïque incomparables.", en: "Former capital of the khans, Sheki is one of the Caucasus's most beautiful historic towns, with its Ottoman caravanserai and palace famed for its incomparable stained-glass mosaics.", es: "Antigua capital de los kanes, Sheki es una de las ciudades históricas más bellas del Cáucaso, con su caravasar otomano y su palacio de incomparables vidrieras de mosaico.", de: "Sheki, die ehemalige Hauptstadt der Khane, ist mit ihrer osmanischen Karawanserei und dem Palast mit seinen unvergleichlichen Mosaik-Buntglasfenstern eine der schönsten historischen Städte im Kaukasus.",
      },
      wikipedia: "File:Şəki,_Azerbaijan_-_overview_1987.jpg",
      tags: ["Histoire", "Architecture", "Nature", "Gastronomie"],
      mustSee: [
        { name: { fr: "Palais des Khans de Sheki", en: "Palace of the Sheki Khans", es: "Palacio de los Kanes de Sheki", de: "Palast der Khane von Sheki" }, wikipedia: "File:Shaki KhanPalace 004 3718.jpg" },
        { name: { fr: "Caravansérail de Sheki", en: "Sheki Caravanserai", es: "Caravasar de Sheki", de: "Sheki Karawanserei" }, wikipedia: "File:Palace of Shaki Khans 1.jpg" },
        { name: { fr: "Forêts et sentiers de montagne", en: "Forests and mountain trails", es: "Bosques y senderos de montaña", de: "Wälder und Bergpfade" }, wikipedia: "File:Shaki Forest.jpg" },
      ],
    },
    {
      id: 3,
      name: "Gobustan",
      region: { fr: "Gobustan", en: "Gobustan", es: "Gobustán", de: "Gobustan" },
      description: {
        fr: "Réserve nationale avec des milliers de pétroglyphes préhistoriques (jusqu'à 40 000 ans), des volcans de boue bouillonnants et un environnement lunaire spectaculaire.", en: "A national reserve home to thousands of prehistoric petroglyphs dating back up to 40,000 years, bubbling mud volcanoes and a striking moon-like landscape.", es: "Reserva nacional con miles de petroglifos prehistóricos (hasta 40 000 años de antigüedad), volcanes de barro burbujeantes y un entorno lunar espectacular.", de: "Nationalreservat mit Tausenden prähistorischen Petroglyphen (bis zu 40.000 Jahre alt), sprudelnden Schlammvulkanen und einer spektakulären Mondumgebung.",
      },
      wikipedia: "File:Gobustan State Reserve 7.jpg",
      tags: ["Nature", "Histoire", "UNESCO", "Désert"],
      mustSee: [
        { name: { fr: "Pétroglyphes de Gobustan (UNESCO)", en: "Gobustan petroglyphs (UNESCO)", es: "Petroglifos de Gobustán (UNESCO)", de: "Gobustan-Petroglyphen (UNESCO)" }, wikipedia: "File:Petroglyphs of Qobustan 2.jpg" },
        { name: { fr: "Volcans de boue de Gobustan", en: "Gobustan mud volcanoes", es: "Volcanes de barro de Gobustán", de: "Gobustan-Schlammvulkane" }, wikipedia: "File:Gobustan mud volcanoes 02.jpg" },
        { name: { fr: "Temple du Feu Ateshgah", en: "Ateshgah Fire Temple", es: "Templo del Fuego de Ateshgah", de: "Ateshgah-Feuertempel" }, wikipedia: "File:Ateshgah of Baku.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Shahdag & Grand Caucase", en: "Shahdag & Greater Caucasus", es: "Shahdag y el Gran Cáucaso", de: "Schahdag und Großer Kaukasus" },
      region: { fr: "Nord de l'Azerbaïdjan", en: "Northern Azerbaijan", es: "Norte de Azerbaiyán", de: "Nord-Aserbaidschan" },
      description: {
        fr: "Au nord de l'Azerbaïdjan, le Grand Caucase dresse ses sommets enneigés autour de la station moderne de Shahdag. Des villages perchés comme Xinaliq, parmi les plus hauts du Caucase, conservent des traditions séculaires. Canyons, alpages et réserves naturelles offrent randonnée et ski.", en: "In northern Azerbaijan, the Greater Caucasus rises in snowy peaks around the modern Shahdag resort. Perched villages such as Xinaliq, among the highest in the Caucasus, have preserved centuries-old traditions. Canyons, alpine meadows and nature reserves make it ideal for hiking and skiing.", es: "En el norte de Azerbaiyán, el Gran Cáucaso levanta sus picos nevados en torno a la moderna estación de Shahdag. Pueblos encaramados como Xinaliq, entre los más altos del Cáucaso, conservan tradiciones seculares. Cañones, pastos alpinos y reservas naturales ofrecen senderismo y esquí.", de: "Im Norden Aserbaidschans erhebt sich der Große Kaukasus mit seinen schneebedeckten Gipfeln rund um den modernen Ferienort Shahdag. Bergdörfer wie Xinaliq, die zu den höchstgelegenen im Kaukasus gehören, bewahren jahrhundertealte Traditionen. Schluchten, Almen und Naturschutzgebiete laden zum Wandern und Skifahren ein.",
      },
      wikipedia: "File:Shahdag National Park 12.jpg",
      tags: ["Ski", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Station de Shahdag", en: "Shahdag Mountain Resort", es: "Estación de Shahdag", de: "Bahnhof Shahdag" }, wikipedia: "File:Shahdag National Park 12.jpg" },
        { name: { fr: "Xinaliq — village le plus haut du Caucase", en: "Xinaliq — one of the highest villages in the Caucasus", es: "Xinaliq — uno de los pueblos más altos del Cáucaso", de: "Xinaliq – höchstgelegenes Dorf im Kaukasus" }, wikipedia: "File:Xınalıq kəndinin ümumi görünüşü.jpg" },
        { name: { fr: "Rizvan Canyon", en: "Rizvan Canyon", es: "Cañón de Rizvan", de: "Rizvan-Schlucht" }, wikipedia: "File:Nischay_River_26.jpg" },
        { name: { fr: "Laza — village alpin", en: "Laza — alpine village", es: "Laza — pueblo alpino", de: "Laza – Alpendorf" }, wikipedia: "File:View of Laza village in Gabala District of Azerbaijan.jpg" },
        { name: { fr: "Parc national de Ilisu", en: "Ilisu National Park", es: "Parque nacional de Ilisu", de: "Ilisu-Nationalpark" }, wikipedia: "File:Nature of Ilisu 19.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Azerbaïdjan est abordable, surtout hors de Bakou. Bakou a connu une forte hausse des prix mais reste moins cher que l'Europe.", en: "Azerbaijan is affordable, especially outside Baku. Prices have risen sharply in the capital, but it still remains cheaper than Europe.", es: "Azerbaiyán es asequible, sobre todo fuera de Bakú. La capital ha visto una fuerte subida de precios, pero sigue siendo más barata que Europa.", de: "Aserbaidschan ist erschwinglich, insbesondere außerhalb von Baku. In Baku sind die Preise stark gestiegen, sind aber immer noch günstiger als Europa.",
    },
    currency: "AZN",
    exchangeRate: "1€ ≈ 1,85 AZN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse", en: "Guesthouse", es: "Casa de huéspedes", de: "Gästehaus" }, price: "15–30 €", detail: { fr: "Vieille ville ou province", en: "Old town or provincial areas", es: "Casco antiguo o provincia", de: "Altstadt oder Provinz" } },
          { label: { fr: "Hôtel 3★ Bakou", en: "3★ hotel in Baku", es: "Hotel 3★ en Bakú", de: "Hotel 3★ Baku" }, price: "40–70 €", detail: { fr: "Centre-ville", en: "City centre", es: "Centro de la ciudad", de: "Innenstadt" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel", es: "Hotel boutique 4★", de: "Boutique-Hotel 4★" }, price: "80–150 €", detail: { fr: "Vieille ville ou bord de mer", en: "Old town or seafront", es: "Casco antiguo o frente al mar", de: "Altstadt oder Meer" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Piti (soupe traditionnelle)", en: "Piti (traditional soup)", es: "Piti (sopa tradicional)", de: "Piti (traditionelle Suppe)" }, price: "3–6 €", detail: { fr: "Mouton dans une marmite en terre", en: "Mutton slow-cooked in a clay pot", es: "Cordero cocido a fuego lento en olla de barro", de: "Schafe in einem irdenen Topf" } },
          { label: { fr: "Restaurant local", en: "Local restaurant", es: "Restaurante local", de: "Lokales Restaurant" }, price: "6–12 €", detail: { fr: "Kebabs, dolma, plats caucasiens", en: "Kebabs, dolma and Caucasian dishes", es: "Kebabs, dolma, platos caucásicos", de: "Kebabs, Dolma, kaukasische Gerichte" } },
          { label: { fr: "Restaurant Bakou", en: "Restaurant in Baku", es: "Restaurante en Bakú", de: "Restaurant Baku" }, price: "15–35 €", detail: { fr: "Cuisine internationale disponible", en: "International cuisine widely available", es: "Cocina internacional disponible", de: "Internationale Küche verfügbar" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Métro Bakou (trajet)", en: "Baku metro (single ride)", es: "Metro de Bakú (trayecto)", de: "Baku Metro (Strecke)" }, price: "0,30 €", detail: { fr: "Très bien desservi", en: "Very well connected", es: "Muy bien conectado", de: "Sehr gut bedient" } },
          { label: { fr: "Minibus intercités", en: "Intercity minibus", es: "Minibús interurbano", de: "Überland-Kleinbusse" }, price: "3–8 €", detail: { fr: "Bakou–Sheki ~5h", en: "Baku–Sheki ~5h", es: "Bakú–Sheki ~5h", de: "Baku–Sheki ca. 5 Std." } },
          { label: { fr: "Taxi (application)", en: "Ride-hailing taxi", es: "Taxi (aplicación)", de: "Taxi (App)" }, price: "2–5 €", detail: { fr: "Bolt ou taxi local", en: "Bolt or local taxi", es: "Bolt o taxi local", de: "Bolt oder lokales Taxi" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée Gobustan UNESCO", en: "Gobustan UNESCO entry ticket", es: "Entrada a Gobustán UNESCO", de: "Gobustan-UNESCO-Eingang" }, price: "4–6 €", detail: { fr: "Pétroglyphes + musée", en: "Petroglyphs + museum", es: "Petroglifos + museo", de: "Petroglyphen + Museum" } },
          { label: { fr: "Palais des Khans de Sheki", en: "Palace of the Sheki Khans", es: "Palacio de los Kanes de Sheki", de: "Palast der Khane von Sheki" }, price: "3–5 €", detail: { fr: "Incontournable", en: "A must-see", es: "Imprescindible", de: "Unvermeidlich" } },
          { label: { fr: "Tour de la Vierge", en: "Maiden Tower", es: "Torre de la Doncella", de: "Jungfrauenturm" }, price: "4–6 €", detail: { fr: "Vue sur Bakou", en: "Views over Baku", es: "Vistas de Bakú", de: "Blick auf Baku" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + restaurants locaux + transports en commun", en: "Guesthouse + local restaurants + public transport", es: "Casa de huéspedes + restaurantes locales + transporte público", de: "Gästehaus + lokale Restaurants + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "65–100 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + excursions", en: "3★ hotel + good restaurants + excursions", es: "Hotel 3★ + buenos restaurantes + excursiones", de: "3★ Hotel + gute Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "180 €+/j", desc: { fr: "Hôtel boutique + gastronomie + circuit privé", en: "Boutique hotel + fine dining + private tour", es: "Hotel boutique + alta gastronomía + circuito privado", de: "Boutique-Hotel + Gastronomie + private Tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Bakou (4j) → Gobustan (1j) → Sheki (2j) → Guba/Khinalug (2j) → Bakou (1j)", en: "Baku (4d) → Gobustan (1d) → Sheki (2d) → Guba/Khinalig (2d) → Baku (1d)", es: "Bakú (4d) → Gobustán (1d) → Sheki (2d) → Quba/Xinaliq (2d) → Bakú (1d)", de: "Baku (4 Tage) → Gobustan (1 Tage) → Sheki (2 Tage) → Guba/Khinalug (2 Tage) → Baku (1 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou", en: "Return flight Paris–Baku", es: "Vuelo ida y vuelta Madrid–Bakú", de: "Hin- und Rückflug Paris–Baku" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–300 €" },
            { label: { fr: "Transports", en: "Transport", es: "Transporte", de: "Transport" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou", en: "Return flight Paris–Baku", es: "Vuelo ida y vuelta Madrid–Bakú", de: "Hin- und Rückflug Paris–Baku" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "550–900 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Transport & guide", en: "Transport & guide", es: "Transporte y guía", de: "Transport & Reiseführer" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "300–400 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou (Business)", en: "Return flight Paris–Baku (business)", es: "Vuelo ida y vuelta Madrid–Bakú (business)", de: "Hin- und Rückflug Paris–Baku (Business)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hébergement boutique (10 nuits)", en: "Boutique accommodation (10 nights)", es: "Alojamiento boutique (10 noches)", de: "Boutique-Unterkunft (10 Nächte)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias", de: "Gastronomie & Erlebnisse" }, amount: "600–1 000 €" },
            { label: { fr: "Circuit privé", en: "Private tour", es: "Circuito privado", de: "Private Tour" }, amount: "500–800 €" },
            { label: { fr: "Activités premium", en: "Premium activities", es: "Actividades premium", de: "Premium-Aktivitäten" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~5h (Azerbaijan Airlines, Turkish Airlines)", en: "~5h (Azerbaijan Airlines, Turkish Airlines)", es: "~5h (Azerbaijan Airlines, Turkish Airlines)", de: "ca. 5 Std. (Azerbaijan Airlines, Turkish Airlines)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "e-Visa en ligne (~23$, 30 jours)", en: "Online e-visa (~$23, 30 days)", es: "e-Visa en línea (~23$, 30 días)", de: "E-Visum online (ca. 23 $, 30 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Manat (1€ ≈ 1,85 AZN)", en: "Manat (€1 ≈ 1.85 AZN)", es: "Manat (1€ ≈ 1,85 AZN)", de: "Manat (1€ ≈ 1,85 AZN)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Azerbaïdjanais (russe compris, anglais à Bakou)", en: "Azerbaijani (Russian widely understood, English in Baku)", es: "Azerí (se entiende el ruso, inglés en Bakú)", de: "Aserbaidschanisch (Russisch inklusive, Englisch in Baku)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V", es: "Tipo C/F – 220 V", de: "Typ C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture, SIM locale ~3€", en: "Good coverage, local SIM ~€3", es: "Buena cobertura, SIM local ~3€", de: "Gute Abdeckung, lokale SIM-Karte ca. 3€" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — stick to bottled water", es: "No potable — agua embotellada", de: "Kein Trinkwasser – Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucun vaccin obligatoire", en: "No mandatory vaccinations", es: "Sin vacunas obligatorias", de: "Keine Impfpflicht" } },
  ],
};
