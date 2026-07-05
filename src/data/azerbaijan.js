export const AZERBAIJAN = {
  code: "AZE",
  numericId: 31,
  name: { fr: "Azerbaïdjan", en: "Azerbaijan" },
  emoji: "🇦🇿",
  capital: { fr: "Bakou", en: "Baku" },
  language: { fr: "Azerbaïdjanais", en: "Azerbaijani" },
  currency: { fr: "Manat (AZN)", en: "Azerbaijani manat (AZN)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 1200, tripMid: 2200,
  },
  description: {
    fr: "L'Azerbaïdjan, « Pays du Feu », surprend avec sa capitale Bakou aux tours flammes ultramodernes surplombant une vieille ville médiévale classée à l'UNESCO. Au-delà, des villages de montagne préservés, les forêts de Sheki et des feux naturels éternels font de ce pays du Caucase une découverte authentique.",
    en: "Azerbaijan, the “Land of Fire”, captivates with its capital Baku, where ultra-modern Flame Towers rise above a UNESCO-listed medieval old town. Beyond the capital, preserved mountain villages, the forests of Sheki and eternal natural flames make this Caucasus country an authentic and surprising destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (13–24 °C), fleurs dans les montagnes, idéal pour Bakou et les régions rurales.",
        en: "Pleasant temperatures (13–24 °C), flowers blooming in the mountains, ideal for Baku and rural regions.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October" },
      label: { fr: "Automne", en: "Autumn" },
      color: "#fb923c",
      description: {
        fr: "Chaleur retombée, feuillages magnifiques dans les forêts de Sheki, raisins en Kuba.",
        en: "Cooler weather, beautiful foliage in Sheki's forests, and grape season in Quba.",
      },
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "baku",
      name: "Bakou",
      region: { fr: "Bakou", en: "Baku" },
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
      region: { fr: "Bakou", en: "Baku" },
      description: {
        fr: "Capitale fascinante où cohabitent la tour de la Vierge (XIIe s.) et les Flame Towers futuristes, la vieille ville médiévale UNESCO et les boutiques Chanel de l'avenue Neftçiler.",
        en: "A fascinating capital where the 12th-century Maiden Tower stands alongside the futuristic Flame Towers, a UNESCO-listed medieval old town and Chanel boutiques on Neftchilar Avenue.",
      },
      wikipedia: "File:Baku city at night.jpg",
      tags: ["Ville", "Architecture", "Histoire", "Culture", "Gastronomie", "Plage"],
      mustSee: [
        { name: { fr: "Flame Towers — skyline de Bakou", en: "Flame Towers — Baku skyline" }, wikipedia: "Flame_Towers" },
        { name: { fr: "Tour de la Vierge (Qız Qalası)", en: "Maiden Tower (Qız Qalası)" }, wikipedia: "File:Baku Maiden Tower.jpg" },
        { name: { fr: "Palais des Shirvanshahs (UNESCO)", en: "Palace of the Shirvanshahs (UNESCO)" }, wikipedia: "Palace_of_the_Shirvanshahs" },
        { name: { fr: "Vieille ville Icherisheher (UNESCO)", en: "Icherisheher Old City (UNESCO)" }, wikipedia: "File:Fuente en Baku, Azerbaiyán, 2016-09-26, DD 227-229 HDR.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sheki",
      region: { fr: "Sheki-Zagatala", en: "Sheki-Zagatala" },
      description: {
        fr: "Ancienne capitale des khans, Sheki est l'une des plus belles villes historiques du Caucase, avec son caravansérail ottoman et le palais aux vitraux de mosaïque incomparables.",
        en: "Former capital of the khans, Sheki is one of the Caucasus's most beautiful historic towns, with its Ottoman caravanserai and palace famed for its incomparable stained-glass mosaics.",
      },
      wikipedia: "File:Şəki,_Azerbaijan_-_overview_1987.jpg",
      tags: ["Histoire", "Architecture", "Forêts", "Gastronomie"],
      mustSee: [
        { name: { fr: "Palais des Khans de Sheki", en: "Palace of the Sheki Khans" }, wikipedia: "File:Shaki KhanPalace 004 3718.jpg" },
        { name: { fr: "Caravansérail de Sheki", en: "Sheki Caravanserai" }, wikipedia: "File:Palace of Shaki Khans 1.jpg" },
        { name: { fr: "Forêts et sentiers de montagne", en: "Forests and mountain trails" }, wikipedia: "File:Shaki Forest.jpg" },
      ],
    },
    {
      id: 3,
      name: "Gobustan",
      region: { fr: "Gobustan", en: "Gobustan" },
      description: {
        fr: "Réserve nationale avec des milliers de pétroglyphes préhistoriques (jusqu'à 40 000 ans), des volcans de boue bouillonnants et un environnement lunaire spectaculaire.",
        en: "A national reserve home to thousands of prehistoric petroglyphs dating back up to 40,000 years, bubbling mud volcanoes and a striking moon-like landscape.",
      },
      wikipedia: "File:Gobustan State Reserve 7.jpg",
      tags: ["Nature", "Archéologie", "UNESCO", "Désert"],
      mustSee: [
        { name: { fr: "Pétroglyphes de Gobustan (UNESCO)", en: "Gobustan petroglyphs (UNESCO)" }, wikipedia: "File:Petroglyphs of Qobustan 2.jpg" },
        { name: { fr: "Volcans de boue de Gobustan", en: "Gobustan mud volcanoes" }, wikipedia: "File:Gobustan mud volcanoes 02.jpg" },
        { name: { fr: "Temple du Feu Ateshgah", en: "Ateshgah Fire Temple" }, wikipedia: "File:Ateshgah of Baku.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Shahdag & Grand Caucase", en: "Shahdag & Greater Caucasus" },
      region: { fr: "Nord de l'Azerbaïdjan", en: "Northern Azerbaijan" },
      description: {
        fr: "Au nord de l'Azerbaïdjan, le Grand Caucase dresse ses sommets enneigés autour de la station moderne de Shahdag. Des villages perchés comme Xinaliq, parmi les plus hauts du Caucase, conservent des traditions séculaires. Canyons, alpages et réserves naturelles offrent randonnée et ski.",
        en: "In northern Azerbaijan, the Greater Caucasus rises in snowy peaks around the modern Shahdag resort. Perched villages such as Xinaliq, among the highest in the Caucasus, have preserved centuries-old traditions. Canyons, alpine meadows and nature reserves make it ideal for hiking and skiing.",
      },
      wikipedia: "File:Shahdag National Park 12.jpg",
      tags: ["Ski", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Station de Shahdag", en: "Shahdag Mountain Resort" }, wikipedia: "File:Shahdag National Park 12.jpg" },
        { name: { fr: "Xinaliq — village le plus haut du Caucase", en: "Xinaliq — one of the highest villages in the Caucasus" }, wikipedia: "File:Xınalıq kəndinin ümumi görünüşü.jpg" },
        { name: { fr: "Rizvan Canyon", en: "Rizvan Canyon" }, wikipedia: "File:Nischay_River_26.jpg" },
        { name: { fr: "Laza — village alpin", en: "Laza — alpine village" }, wikipedia: "File:View of Laza village in Gabala District of Azerbaijan.jpg" },
        { name: { fr: "Parc national de Ilisu", en: "Ilisu National Park" }, wikipedia: "File:Nature of Ilisu 19.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Azerbaïdjan est abordable, surtout hors de Bakou. Bakou a connu une forte hausse des prix mais reste moins cher que l'Europe.",
      en: "Azerbaijan is affordable, especially outside Baku. Prices have risen sharply in the capital, but it still remains cheaper than Europe.",
    },
    currency: "AZN",
    exchangeRate: "1€ ≈ 1,85 AZN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse", en: "Guesthouse" }, price: "15–30 €", detail: { fr: "Vieille ville ou province", en: "Old town or provincial areas" } },
          { label: { fr: "Hôtel 3★ Bakou", en: "3★ hotel in Baku" }, price: "40–70 €", detail: { fr: "Centre-ville", en: "City centre" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel" }, price: "80–150 €", detail: { fr: "Vieille ville ou bord de mer", en: "Old town or seafront" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Piti (soupe traditionnelle)", en: "Piti (traditional soup)" }, price: "3–6 €", detail: { fr: "Mouton dans une marmite en terre", en: "Mutton slow-cooked in a clay pot" } },
          { label: { fr: "Restaurant local", en: "Local restaurant" }, price: "6–12 €", detail: { fr: "Kebabs, dolma, plats caucasiens", en: "Kebabs, dolma and Caucasian dishes" } },
          { label: { fr: "Restaurant Bakou", en: "Restaurant in Baku" }, price: "15–35 €", detail: { fr: "Cuisine internationale disponible", en: "International cuisine widely available" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Métro Bakou (trajet)", en: "Baku metro (single ride)" }, price: "0,30 €", detail: { fr: "Très bien desservi", en: "Very well connected" } },
          { label: { fr: "Minibus intercités", en: "Intercity minibus" }, price: "3–8 €", detail: { fr: "Bakou–Sheki ~5h", en: "Baku–Sheki ~5h" } },
          { label: { fr: "Taxi (application)", en: "Ride-hailing taxi" }, price: "2–5 €", detail: { fr: "Bolt ou taxi local", en: "Bolt or local taxi" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Gobustan UNESCO", en: "Gobustan UNESCO entry ticket" }, price: "4–6 €", detail: { fr: "Pétroglyphes + musée", en: "Petroglyphs + museum" } },
          { label: { fr: "Palais des Khans de Sheki", en: "Palace of the Sheki Khans" }, price: "3–5 €", detail: { fr: "Incontournable", en: "A must-see" } },
          { label: { fr: "Tour de la Vierge", en: "Maiden Tower" }, price: "4–6 €", detail: { fr: "Vue sur Bakou", en: "Views over Baku" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + restaurants locaux + transports en commun", en: "Guesthouse + local restaurants + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "65–100 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + excursions", en: "3★ hotel + good restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "180 €+/j", desc: { fr: "Hôtel boutique + gastronomie + circuit privé", en: "Boutique hotel + fine dining + private tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Bakou (4j) → Gobustan (1j) → Sheki (2j) → Guba/Khinalug (2j) → Bakou (1j)",
        en: "Baku (4d) → Gobustan (1d) → Sheki (2d) → Guba/Khinalig (2d) → Baku (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou", en: "Return flight Paris–Baku" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–300 €" },
            { label: { fr: "Transports", en: "Transport" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou", en: "Return flight Paris–Baku" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "550–900 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transport & guide", en: "Transport & guide" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "300–400 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bakou (Business)", en: "Return flight Paris–Baku (business)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hébergement boutique (10 nuits)", en: "Boutique accommodation (10 nights)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "600–1 000 €" },
            { label: { fr: "Circuit privé", en: "Private tour" }, amount: "500–800 €" },
            { label: { fr: "Activités premium", en: "Premium activities" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~5h (Azerbaijan Airlines, Turkish Airlines)", en: "~5h (Azerbaijan Airlines, Turkish Airlines)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa en ligne (~23$, 30 jours)", en: "Online e-visa (~$23, 30 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Manat (1€ ≈ 1,85 AZN)", en: "Manat (€1 ≈ 1.85 AZN)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Azerbaïdjanais (russe compris, anglais à Bakou)", en: "Azerbaijani (Russian widely understood, English in Baku)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture, SIM locale ~3€", en: "Good coverage, local SIM ~€3" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — stick to bottled water" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire", en: "No mandatory vaccinations" } },
  ],
};
