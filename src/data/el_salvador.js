export const EL_SALVADOR = {
  code: "SLV",
  numericId: 222,
  name: { fr: "El Salvador", en: "El Salvador" },
  emoji: "????",
  capital: { fr: "San Salvador", en: "San Salvador" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Dollar am?ricain (USD)", en: "US dollar (USD)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1000, tripMid: 2200,
  },
  description: {
    fr:
      "El Salvador, le plus petit pays d'Am?rique centrale, surprend par sa densit? d'exp?riences : Joya de Cer?n, la ? Pomp?i am?ricaine ? class?e UNESCO, les plages de surf l?gendaires d'El Tunco et d'El Zonte (Bitcoin Beach), et la Ruta de las Flores, village apr?s village de gastronomie et d'artisanat.",
    en:
      "El Salvador, the smallest country in Central America, is surprisingly rich in experiences: Joya de Cer?n, the UNESCO-listed 'American Pompeii', the legendary surf beaches of El Tunco and El Zonte (Bitcoin Beach), and the Ruta de las Flores, a string of villages known for gastronomy and handicrafts.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre ? Avril", en: "November ? April" },
      label: { fr: "Saison s?che", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr:
          "Id?al pour visiter le pays. Temperatures agr?ables, routes praticables, plages ensoleill?es et surf r?gulier.",
        en:
          "Ideal for exploring the country. Pleasant temperatures, accessible roads, sunny beaches and consistent surf.",
      },
      icon: "??",
    },
    {
      months: { fr: "Juin ? Ao?t", en: "June ? August" },
      label: { fr: "Verano de San Juan", en: "Verano de San Juan" },
      color: "#fb923c",
      description: {
        fr:
          "Pause relative dans les pluies (mi-juin ? mi-juillet). V?g?tation luxuriante, cafetales en fleurs.",
        en:
          "A relative break in the rains (mid-June to mid-July). Lush vegetation and coffee plantations in bloom.",
      },
      icon: "??",
    },
  ],

  weatherCities: [
    {
      id: "san_salvador",
      name: "San Salvador",
      region: { fr: "Centre", en: "Central" },
      data: [
        { month: "Jan", temp: 24, rain: 10,  icon: "??" },
        { month: "F?v", temp: 25, rain: 5,   icon: "??" },
        { month: "Mar", temp: 27, rain: 10,  icon: "?" },
        { month: "Avr", temp: 28, rain: 35,  icon: "?" },
        { month: "Mai", temp: 27, rain: 160, icon: "???" },
        { month: "Jun", temp: 26, rain: 290, icon: "?" },
        { month: "Jul", temp: 26, rain: 260, icon: "?" },
        { month: "Ao?", temp: 26, rain: 270, icon: "?" },
        { month: "Sep", temp: 26, rain: 310, icon: "?" },
        { month: "Oct", temp: 26, rain: 220, icon: "?" },
        { month: "Nov", temp: 25, rain: 35,  icon: "??" },
        { month: "D?c", temp: 24, rain: 15,  icon: "??" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Joya de Cer?n ? Pomp?i am?ricaine", en: "Joya de Cer?n ? the American Pompeii" },
      region: { fr: "La Libertad", en: "La Libertad" },
      description: {
        fr:
          "Joya de Cer?n est un village maya enseveli par une ?ruption volcanique en l'an 590 apr. J.-C., conservant maisons, jardins et r?serves alimentaires intacts. Class? UNESCO, il est la seule fen?tre au monde sur la vie quotidienne maya d'un villageois ordinaire.",
        en:
          "Joya de Cer?n is a Maya village buried by a volcanic eruption in 590 AD, preserving houses, gardens and food stores intact. UNESCO-listed, it is the world's only window into the everyday life of an ordinary Maya villager.",
      },
      wikipedia: "Joya_de_Cer?n",
      tags: ["UNESCO", "Arch?ologie", "Histoire", "Unique"],
      mustSee: [
        { name: { fr: "Village maya fossilis? (structures in situ)", en: "Buried Maya village (in situ structures)" }, wikipedia: "File:Joya de Cer?n, domestic complex.jpg" },
        { name: { fr: "Mus?e de site ? vaisselle et outils mayas", en: "Site museum ? Maya pottery and tools" }, wikipedia: "File:ES Estructura 12 y 10 Area 1 Joya Ceren 05 2012 1516.jpg" },
        { name: { fr: "San Andr?s ? grand site maya voisin", en: "San Andr?s ? major neighbouring Maya site" }, wikipedia: "File:ES San Andres 05 2012 Estructura 1 La Acropolis 1562.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "El Tunco & El Zonte (Bitcoin Beach)", en: "El Tunco & El Zonte (Bitcoin Beach)" },
      region: { fr: "La Libertad", en: "La Libertad" },
      description: {
        fr:
          "El Tunco est la capitale du surf en Am?rique centrale : vagues r?guli?res pour tous niveaux, ambiance boh?me, et couchers de soleil sur le Pacifique. El Zonte (Bitcoin Beach) est devenu mondialement connu comme premier village au monde ? adopter Bitcoin comme monnaie locale.",
        en:
          "El Tunco is Central America's surf capital: reliable waves for every level, a bohemian vibe and Pacific sunsets. El Zonte (Bitcoin Beach) became world-famous as the first village in the world to adopt Bitcoin as a local currency.",
      },
      wikipedia: "File:El tunco.png",
      tags: ["Surf", "Plage", "Vie nocturne", "Pacifique"],
      mustSee: [
        { name: { fr: "Surf ? El Sunzal et La Bocana", en: "Surfing at El Sunzal and La Bocana" }, wikipedia: "Surfing" },
        { name: { fr: "Rocher El Tunco ? coucher de soleil", en: "El Tunco Rock ? sunset views" }, wikipedia: "File:El tunco.png" },
        { name: { fr: "La Libertad ? port & poissons frais", en: "La Libertad ? harbour & fresh fish" }, wikipedia: "La_Libertad,_El_Salvador" },
      ],
    },
    {
      id: 3,
      name: "Lago de Coatepeque",
      region: { fr: "Santa Ana", en: "Santa Ana" },
      description: {
        fr:
          "Le Lac de Coatepeque est un lac volcanique de crat?re, avec des eaux bleues et chaudes ? 22?C toute l'ann?e, entour? de collines verdoyantes. Le Volcan Santa Ana voisin (2 381 m) offre l'une des meilleures randonn?es du pays avec vue sur la caldera.",
        en:
          "Coatepeque Lake is a volcanic crater lake with blue, warm waters at 22?C year-round, surrounded by green hills. Nearby Santa Ana Volcano (2,381 m) offers one of the country's best hikes, with views over the caldera.",
      },
      wikipedia: "File:Coatepeque Vista.jpg",
      tags: ["Nature", "Lac", "Randonn?e", "Volcans"],
      mustSee: [
        { name: { fr: "Baignade et kayak dans le lac volcanique", en: "Swimming and kayaking in the volcanic lake" }, wikipedia: "File:Coatepeque Vista.jpg" },
        { name: { fr: "Volcan Santa Ana ? caldera fumante (2 381 m)", en: "Santa Ana Volcano ? smoking caldera (2,381 m)" }, wikipedia: "Santa_Ana_Volcano" },
        { name: { fr: "Cerro Verde ? for?t nuageuse et oiseaux", en: "Cerro Verde ? cloud forest and birdlife" }, wikipedia: "File:Cerro Verde and Izalco Volcano.jpg" },
        { name: { fr: "Lagune Ilopango ? plus grand lac du pays", en: "Ilopango Lagoon ? the country's largest lake" }, wikipedia: "Lake_Ilopango" },
      ],
    },
    {
      id: 4,
      name: "Ruta de las Flores",
      region: { fr: "Sonsonate / Ahuachap?n", en: "Sonsonate / Ahuachap?n" },
      description: {
        fr:
          "La Ruta de las Flores traverse quatre villages montagnards aux maisons color?es : Nahuizalco (artisanat en rotin), Juay?a (festival gastronomique chaque week-end), Apaneca (caf? de sp?cialit?) et Ataco (murales g?ants). L'une des plus belles routes culturelles d'Am?rique centrale.",
        en:
          "The Ruta de las Flores winds through four mountain villages with colourful houses: Nahuizalco (rattan handicrafts), Juay?a (a food festival every weekend), Apaneca (specialty coffee) and Ataco (giant murals). One of the most beautiful cultural routes in Central America.",
      },
      wikipedia: "File:RUTA DE LAS FLORES EN ATACO. - panoramio.jpg",
      tags: ["Culture", "Gastronomie", "Artisanat", "Caf?"],
      mustSee: [
        { name: { fr: "Juay?a ? festival gastronomique (week-ends)", en: "Juay?a ? food festival (weekends)" }, wikipedia: "Juay?a" },
        { name: { fr: "Nahuizalco ? artisanat en rotin et bois", en: "Nahuizalco ? rattan and wood crafts" }, wikipedia: "Nahuizalco" },
        { name: { fr: "Ataco ? murales g?ants & caf? de sp?cialit?", en: "Ataco ? giant murals & specialty coffee" }, wikipedia: "Concepci?n_de_Ataco" },
        { name: { fr: "Apaneca ? plantations de caf? et ULM", en: "Apaneca ? coffee plantations and microlights" }, wikipedia: "Apaneca" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "El Salvador est l'un des pays les moins chers d'Am?rique centrale et utilise le dollar am?ricain depuis 2001. Les prix sont stables et transparents. La sc?ne gastronomique s'est ?norm?ment d?velopp?e.",
      en: "El Salvador is one of the cheapest countries in Central America and has used the US dollar since 2001. Prices are stable and transparent. The food scene has grown tremendously.",
    },
    currency: "USD",
    exchangeRate: "1? ? 1,08 USD",
    categories: [
      {
        id: "accommodation",
        icon: "??",
        label: { fr: "H?bergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hostel surf (El Tunco)", en: "Surf hostel (El Tunco)" }, price: "10?20 ?", detail: { fr: "Dortoir ou chambre ventil?e", en: "Dorm or fan room" } },
          { label: { fr: "H?tel 3? San Salvador", en: "3? hotel in San Salvador" }, price: "40?70 ?", detail: { fr: "Climatis?, bon confort", en: "Air-conditioned, good comfort" } },
          { label: { fr: "Boutique h?tel de charme", en: "Charming boutique hotel" }, price: "80?150 ?", detail: { fr: "Vue lac ou plage", en: "Lake or beach view" } },
        ],
      },
      {
        id: "food",
        icon: "???",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Pupusas (plat national)", en: "Pupusas (national dish)" }, price: "0,5?1 ?", detail: { fr: "Galettes de ma?s, partout", en: "Corn flatbreads, available everywhere" } },
          { label: { fr: "Festival gastronomique Juay?a", en: "Juay?a food festival" }, price: "3?8 ?", detail: { fr: "Plats copieux le week-end", en: "Hearty dishes on weekends" } },
          { label: { fr: "Restaurant San Salvador", en: "San Salvador restaurant" }, price: "10?20 ?", detail: { fr: "Cuisine cr?ative ou fusion", en: "Creative or fusion cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "??",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus local (interurbain)", en: "Local bus (intercity)" }, price: "1?3 ?", detail: { fr: "Lent mais pittoresque", en: "Slow but scenic" } },
          { label: { fr: "Shuttle touristique", en: "Tourist shuttle" }, price: "15?25 ?", detail: { fr: "Confortable et rapide", en: "Comfortable and fast" } },
          { label: { fr: "Mototaxi ou Uber (San Salvador)", en: "Motor taxi or Uber (San Salvador)" }, price: "2?6 ?", detail: { fr: "Pratique en ville", en: "Convenient in the city" } },
        ],
      },
      {
        id: "activities",
        icon: "??",
        label: { fr: "Activit?s", en: "Activities" },
        items: [
          { label: { fr: "Le?on de surf (2h)", en: "Surf lesson (2h)" }, price: "20?30 ?", detail: { fr: "Planches incluses, El Tunco", en: "Boards included, El Tunco" } },
          { label: { fr: "Randonn?e Volcan Santa Ana", en: "Santa Ana Volcano hike" }, price: "15?25 ?", detail: { fr: "Guide obligatoire", en: "Guide required" } },
          { label: { fr: "Visite Joya de Cer?n + San Andr?s", en: "Joya de Cer?n + San Andr?s visit" }, price: "5?10 ?", detail: { fr: "Les deux sites", en: "Both sites" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30?45 ?/j", desc: { fr: "Hostel + pupusas + bus local", en: "Hostel + pupusas + local bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70?110 ?/j", desc: { fr: "H?tel 3? + restos + excursions", en: "3? hotel + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 ?+/j", desc: { fr: "Boutique h?tel + cuisine cr?ative + priv?", en: "Boutique hotel + creative cuisine + private services" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "San Salvador (1j) ? Joya de Cer?n & Lac (2j) ? Ruta de las Flores (2j) ? El Tunco & surf (3j)",
        en: "San Salvador (1d) ? Joya de Cer?n & Coatepeque Lake (2d) ? Ruta de las Flores (2d) ? El Tunco & surfing (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 000 ? 1 500 ?",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris?San Salvador", en: "Return flight Paris?San Salvador" }, amount: "450?700 ?" },
            { label: { fr: "H?bergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "150?250 ?" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "100?180 ?" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "80?120 ?" },
            { label: { fr: "Activit?s & impr?vus", en: "Activities & contingency" }, amount: "100?200 ?" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 ? 3 200 ?",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris?San Salvador", en: "Return flight Paris?San Salvador" }, amount: "550?850 ?" },
            { label: { fr: "H?bergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "500?750 ?" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "350?550 ?" },
            { label: { fr: "Transports & shuttles", en: "Transport & shuttles" }, amount: "250?400 ?" },
            { label: { fr: "Activit?s & extras", en: "Activities & extras" }, amount: "300?500 ?" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "5 500 ?+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris?San Salvador", en: "Return flight Paris?San Salvador" }, amount: "1 500?2 500 ?" },
            { label: { fr: "Boutique h?tels (8 nuits)", en: "Boutique hotels (8 nights)" }, amount: "1 200?2 000 ?" },
            { label: { fr: "Gastronomie & exp?riences", en: "Dining & experiences" }, amount: "500?800 ?" },
            { label: { fr: "Transferts priv?s", en: "Private transfers" }, amount: "300?500 ?" },
            { label: { fr: "Extras", en: "Extras" }, amount: "200 ?+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "??", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13h avec escale (via Miami, Madrid ou Bogot?)", en: "~13h with a layover (via Miami, Madrid or Bogot?)" } },
    { icon: "??", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 90 jours CA-4 (Fran?ais)", en: "No visa for 90 days under the CA-4 agreement (French citizens)" } },
    { icon: "??", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar am?ricain (USD) ? Bitcoin l?gal depuis 2021", en: "US dollar (USD) ? Bitcoin legal tender since 2021" } },
    { icon: "???", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol", en: "Spanish" } },
    { icon: "??", label: { fr: "Prise ?lectrique", en: "Power outlet" }, value: { fr: "Type A/B ? 120 V (comme USA)", en: "Type A/B ? 120 V (same as the USA)" } },
    { icon: "??", label: { fr: "R?seau", en: "Network" }, value: { fr: "Bonne couverture nationale (Claro, Tigo)", en: "Good nationwide coverage (Claro, Tigo)" } },
    { icon: "??", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable ? eau en bouteille recommand?e", en: "Not drinkable ? bottled water recommended" } },
    { icon: "??", label: { fr: "Sant?", en: "Health" }, value: { fr: "Antipalud?en en zone rurale basse ; Zika possible (femmes enceintes)", en: "Antimalarials in low-lying rural areas; possible Zika risk (pregnant women)" } },
  ],
};
