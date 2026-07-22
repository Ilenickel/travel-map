export const AZERBAIJAN = {
  code: "AZE",
  numericId: 31,
  name: { fr: "Azerbaïdjan", en: "Azerbaijan", es: "Azerbaiyán" },
  emoji: "🇦🇿",
  capital: { fr: "Bakou", en: "Baku", es: "Bakú" },
  language: { fr: "Azerbaïdjanais", en: "Azerbaijani", es: "Azerí" },
  currency: { fr: "Manat (AZN)", en: "Azerbaijani manat (AZN)", es: "Manat azerí (AZN)" },
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
  },
  description: {
    fr: "L'Azerbaïdjan, « Pays du Feu », surprend avec sa capitale Bakou aux tours flammes ultramodernes surplombant une vieille ville médiévale classée à l'UNESCO. Au-delà, des villages de montagne préservés, les forêts de Sheki et des feux naturels éternels font de ce pays du Caucase une découverte authentique.",
    en: "Azerbaijan, the “Land of Fire”, captivates with its capital Baku, where ultra-modern Flame Towers rise above a UNESCO-listed medieval old town. Beyond the capital, preserved mountain villages, the forests of Sheki and eternal natural flames make this Caucasus country an authentic and surprising destination.",
    es: "Azerbaiyán, el «País del Fuego», sorprende con su capital Bakú, cuyas ultramodernas Torres de Fuego dominan un casco antiguo medieval declarado Patrimonio de la UNESCO. Más allá, pueblos de montaña preservados, los bosques de Sheki y llamas naturales eternas hacen de este país del Cáucaso un descubrimiento auténtico.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June", es: "Abril – Junio" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (13–24 °C), fleurs dans les montagnes, idéal pour Bakou et les régions rurales.",
        en: "Pleasant temperatures (13–24 °C), flowers blooming in the mountains, ideal for Baku and rural regions.",
        es: "Temperaturas agradables (13–24 °C), flores en las montañas, ideal para Bakú y las regiones rurales.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October", es: "Septiembre – Octubre" },
      label: { fr: "Automne", en: "Autumn", es: "Otoño" },
      color: "#fb923c",
      description: {
        fr: "Chaleur retombée, feuillages magnifiques dans les forêts de Sheki, raisins en Kuba.",
        en: "Cooler weather, beautiful foliage in Sheki's forests, and grape season in Quba.",
        es: "El calor amaina, hermosos colores otoñales en los bosques de Sheki, uvas en Quba.",
      },
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "baku",
      name: "Bakou",
      region: { fr: "Bakou", en: "Baku", es: "Bakú" },
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
      region: { fr: "Bakou", en: "Baku", es: "Bakú" },
      description: {
        fr: "Capitale fascinante où cohabitent la tour de la Vierge (XIIe s.) et les Flame Towers futuristes, la vieille ville médiévale UNESCO et les boutiques Chanel de l'avenue Neftçiler.",
        en: "A fascinating capital where the 12th-century Maiden Tower stands alongside the futuristic Flame Towers, a UNESCO-listed medieval old town and Chanel boutiques on Neftchilar Avenue.",
        es: "Capital fascinante donde conviven la Torre de la Doncella (s. XII) y las futuristas Torres de Fuego, el casco antiguo medieval UNESCO y las boutiques Chanel de la avenida Neftchilar.",
      },
      wikipedia: "File:Baku city at night.jpg",
      tags: ["Ville", "Architecture", "Histoire", "Culture", "Gastronomie", "Plage"],
      mustSee: [
        { name: { fr: "Flame Towers — skyline de Bakou", en: "Flame Towers — Baku skyline", es: "Flame Towers — perfil urbano de Bakú" }, wikipedia: "Flame_Towers" },
        { name: { fr: "Tour de la Vierge (Qız Qalası)", en: "Maiden Tower (Qız Qalası)", es: "Torre de la Doncella (Qız Qalası)" }, wikipedia: "File:Baku Maiden Tower.jpg" },
        { name: { fr: "Palais des Shirvanshahs (UNESCO)", en: "Palace of the Shirvanshahs (UNESCO)", es: "Palacio de los Shirvanshahs (UNESCO)" }, wikipedia: "Palace_of_the_Shirvanshahs" },
        { name: { fr: "Vieille ville Icherisheher (UNESCO)", en: "Icherisheher Old City (UNESCO)", es: "Casco antiguo de Icherisheher (UNESCO)" }, wikipedia: "File:Fuente en Baku, Azerbaiyán, 2016-09-26, DD 227-229 HDR.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sheki",
      region: { fr: "Sheki-Zagatala", en: "Sheki-Zagatala", es: "Sheki-Zagatala" },
      description: {
        fr: "Ancienne capitale des khans, Sheki est l'une des plus belles villes historiques du Caucase, avec son caravansérail ottoman et le palais aux vitraux de mosaïque incomparables.",
        en: "Former capital of the khans, Sheki is one of the Caucasus's most beautiful historic towns, with its Ottoman caravanserai and palace famed for its incomparable stained-glass mosaics.",
        es: "Antigua capital de los kanes, Sheki es una de las ciudades históricas más bellas del Cáucaso, con su caravasar otomano y su palacio de incomparables vidrieras de mosaico.",
      },
      wikipedia: "File:Şəki,_Azerbaijan_-_overview_1987.jpg",
      tags: ["Histoire", "Architecture", "Nature", "Gastronomie"],
      mustSee: [
        { name: { fr: "Palais des Khans de Sheki", en: "Palace of the Sheki Khans", es: "Palacio de los Kanes de Sheki" }, wikipedia: "File:Shaki KhanPalace 004 3718.jpg" },
        { name: { fr: "Caravansérail de Sheki", en: "Sheki Caravanserai", es: "Caravasar de Sheki" }, wikipedia: "File:Palace of Shaki Khans 1.jpg" },
        { name: { fr: "Forêts et sentiers de montagne", en: "Forests and mountain trails", es: "Bosques y senderos de montaña" }, wikipedia: "File:Shaki Forest.jpg" },
      ],
    },
    {
      id: 3,
      name: "Gobustan",
      region: { fr: "Gobustan", en: "Gobustan", es: "Gobustán" },
      description: {
        fr: "Réserve nationale avec des milliers de pétroglyphes préhistoriques (jusqu'à 40 000 ans), des volcans de boue bouillonnants et un environnement lunaire spectaculaire.",
        en: "A national reserve home to thousands of prehistoric petroglyphs dating back up to 40,000 years, bubbling mud volcanoes and a striking moon-like landscape.",
        es: "Reserva nacional con miles de petroglifos prehistóricos (hasta 40 000 años de antigüedad), volcanes de barro burbujeantes y un entorno lunar espectacular.",
      },
      wikipedia: "File:Gobustan State Reserve 7.jpg",
      tags: ["Nature", "Histoire", "UNESCO", "Désert"],
      mustSee: [
        { name: { fr: "Pétroglyphes de Gobustan (UNESCO)", en: "Gobustan petroglyphs (UNESCO)", es: "Petroglifos de Gobustán (UNESCO)" }, wikipedia: "File:Petroglyphs of Qobustan 2.jpg" },
        { name: { fr: "Volcans de boue de Gobustan", en: "Gobustan mud volcanoes", es: "Volcanes de barro de Gobustán" }, wikipedia: "File:Gobustan mud volcanoes 02.jpg" },
        { name: { fr: "Temple du Feu Ateshgah", en: "Ateshgah Fire Temple", es: "Templo del Fuego de Ateshgah" }, wikipedia: "File:Ateshgah of Baku.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Shahdag & Grand Caucase", en: "Shahdag & Greater Caucasus", es: "Shahdag y el Gran Cáucaso" },
      region: { fr: "Nord de l'Azerbaïdjan", en: "Northern Azerbaijan", es: "Norte de Azerbaiyán" },
      description: {
        fr: "Au nord de l'Azerbaïdjan, le Grand Caucase dresse ses sommets enneigés autour de la station moderne de Shahdag. Des villages perchés comme Xinaliq, parmi les plus hauts du Caucase, conservent des traditions séculaires. Canyons, alpages et réserves naturelles offrent randonnée et ski.",
        en: "In northern Azerbaijan, the Greater Caucasus rises in snowy peaks around the modern Shahdag resort. Perched villages such as Xinaliq, among the highest in the Caucasus, have preserved centuries-old traditions. Canyons, alpine meadows and nature reserves make it ideal for hiking and skiing.",
        es: "En el norte de Azerbaiyán, el Gran Cáucaso levanta sus picos nevados en torno a la moderna estación de Shahdag. Pueblos encaramados como Xinaliq, entre los más altos del Cáucaso, conservan tradiciones seculares. Cañones, pastos alpinos y reservas naturales ofrecen senderismo y esquí.",
      },
      wikipedia: "File:Shahdag National Park 12.jpg",
      tags: ["Ski", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Station de Shahdag", en: "Shahdag Mountain Resort", es: "Estación de Shahdag" }, wikipedia: "File:Shahdag National Park 12.jpg" },
        { name: { fr: "Xinaliq — village le plus haut du Caucase", en: "Xinaliq — one of the highest villages in the Caucasus", es: "Xinaliq — uno de los pueblos más altos del Cáucaso" }, wikipedia: "File:Xınalıq kəndinin ümumi görünüşü.jpg" },
        { name: { fr: "Rizvan Canyon", en: "Rizvan Canyon", es: "Cañón de Rizvan" }, wikipedia: "File:Nischay_River_26.jpg" },
        { name: { fr: "Laza — village alpin", en: "Laza — alpine village", es: "Laza — pueblo alpino" }, wikipedia: "File:View of Laza village in Gabala District of Azerbaijan.jpg" },
        { name: { fr: "Parc national de Ilisu", en: "Ilisu National Park", es: "Parque nacional de Ilisu" }, wikipedia: "File:Nature of Ilisu 19.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Azerbaïdjan est abordable, surtout hors de Bakou. Bakou a connu une forte hausse des prix mais reste moins cher que l'Europe.",
      en: "Azerbaijan is affordable, especially outside Baku. Prices have risen sharply in the capital, but it still remains cheaper than Europe.",
      es: "Azerbaiyán es asequible, sobre todo fuera de Bakú. La capital ha visto una fuerte subida de precios, pero sigue siendo más barata que Europa.",
    },
    currency: "AZN",
    exchangeRate: "1€ ≈ 1,85 AZN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse", en: "Guesthouse", es: "Casa de huéspedes" }, price: "15–30 €", detail: { fr: "Vieille ville ou province", en: "Old town or provincial areas", es: "Casco antiguo o provincia" } },
          { label: { fr: "Hôtel 3★ Bakou", en: "3★ hotel in Baku", es: "Hotel 3★ en Bakú" }, price: "40–70 €", detail: { fr: "Centre-ville", en: "City centre", es: "Centro de la ciudad" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel", es: "Hotel boutique 4★" }, price: "80–150 €", detail: { fr: "Vieille ville ou bord de mer", en: "Old town or seafront", es: "Casco antiguo o frente al mar" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Piti (soupe traditionnelle)", en: "Piti (traditional soup)", es: "Piti (sopa tradicional)" }, price: "3–6 €", detail: { fr: "Mouton dans une marmite en terre", en: "Mutton slow-cooked in a clay pot", es: "Cordero cocido a fuego lento en olla de barro" } },
          { label: { fr: "Restaurant local", en: "Local restaurant", es: "Restaurante local" }, price: "6–12 €", detail: { fr: "Kebabs, dolma, plats caucasiens", en: "Kebabs, dolma and Caucasian dishes", es: "Kebabs, dolma, platos caucásicos" } },
          { label: { fr: "Restaurant Bakou", en: "Restaurant in Baku", es: "Restaurante en Bakú" }, price: "15–35 €", detail: { fr: "Cuisine internationale disponible", en: "International cuisine widely available", es: "Cocina internacional disponible" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Métro Bakou (trajet)", en: "Baku metro (single ride)", es: "Metro de Bakú (trayecto)" }, price: "0,30 €", detail: { fr: "Très bien desservi", en: "Very well connected", es: "Muy bien conectado" } },
          { label: { fr: "Minibus intercités", en: "Intercity minibus", es: "Minibús interurbano" }, price: "3–8 €", detail: { fr: "Bakou–Sheki ~5h", en: "Baku–Sheki ~5h", es: "Bakú–Sheki ~5h" } },
          { label: { fr: "Taxi (application)", en: "Ride-hailing taxi", es: "Taxi (aplicación)" }, price: "2–5 €", detail: { fr: "Bolt ou taxi local", en: "Bolt or local taxi", es: "Bolt o taxi local" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée Gobustan UNESCO", en: "Gobustan UNESCO entry ticket", es: "Entrada a Gobustán UNESCO" }, price: "4–6 €", detail: { fr: "Pétroglyphes + musée", en: "Petroglyphs + museum", es: "Petroglifos + museo" } },
          { label: { fr: "Palais des Khans de Sheki", en: "Palace of the Sheki Khans", es: "Palacio de los Kanes de Sheki" }, price: "3–5 €", detail: { fr: "Incontournable", en: "A must-see", es: "Imprescindible" } },
          { label: { fr: "Tour de la Vierge", en: "Maiden Tower", es: "Torre de la Doncella" }, price: "4–6 €", detail: { fr: "Vue sur Bakou", en: "Views over Baku", es: "Vistas de Bakú" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + restaurants locaux + transports en commun", en: "Guesthouse + local restaurants + public transport", es: "Casa de huéspedes + restaurantes locales + transporte público" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "65–100 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + excursions", en: "3★ hotel + good restaurants + excursions", es: "Hotel 3★ + buenos restaurantes + excursiones" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo" }, daily: "180 €+/j", desc: { fr: "Hôtel boutique + gastronomie + circuit privé", en: "Boutique hotel + fine dining + private tour", es: "Hotel boutique + alta gastronomía + circuito privado" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Bakou (4j) → Gobustan (1j) → Sheki (2j) → Guba/Khinalug (2j) → Bakou (1j)",
        en: "Baku (4d) → Gobustan (1d) → Sheki (2d) → Guba/Khinalig (2d) → Baku (1d)",
        es: "Bakú (4d) → Gobustán (1d) → Sheki (2d) → Quba/Xinaliq (2d) → Bakú (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou", en: "Return flight Paris–Baku", es: "Vuelo ida y vuelta Madrid–Bakú" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "200–300 €" },
            { label: { fr: "Transports", en: "Transport", es: "Transporte" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos" }, amount: "150–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou", en: "Return flight Paris–Baku", es: "Vuelo ida y vuelta Madrid–Bakú" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "550–900 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "400–600 €" },
            { label: { fr: "Transport & guide", en: "Transport & guide", es: "Transporte y guía" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos" }, amount: "300–400 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou (Business)", en: "Return flight Paris–Baku (business)", es: "Vuelo ida y vuelta Madrid–Bakú (business)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hébergement boutique (10 nuits)", en: "Boutique accommodation (10 nights)", es: "Alojamiento boutique (10 noches)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias" }, amount: "600–1 000 €" },
            { label: { fr: "Circuit privé", en: "Private tour", es: "Circuito privado" }, amount: "500–800 €" },
            { label: { fr: "Activités premium", en: "Premium activities", es: "Actividades premium" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~5h (Azerbaijan Airlines, Turkish Airlines)", en: "~5h (Azerbaijan Airlines, Turkish Airlines)", es: "~5h (Azerbaijan Airlines, Turkish Airlines)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "e-Visa en ligne (~23$, 30 jours)", en: "Online e-visa (~$23, 30 days)", es: "e-Visa en línea (~23$, 30 días)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Manat (1€ ≈ 1,85 AZN)", en: "Manat (€1 ≈ 1.85 AZN)", es: "Manat (1€ ≈ 1,85 AZN)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Azerbaïdjanais (russe compris, anglais à Bakou)", en: "Azerbaijani (Russian widely understood, English in Baku)", es: "Azerí (se entiende el ruso, inglés en Bakú)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V", es: "Tipo C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil" }, value: { fr: "Bonne couverture, SIM locale ~3€", en: "Good coverage, local SIM ~€3", es: "Buena cobertura, SIM local ~3€" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — stick to bottled water", es: "No potable — agua embotellada" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucun vaccin obligatoire", en: "No mandatory vaccinations", es: "Sin vacunas obligatorias" } },
  ],
};
