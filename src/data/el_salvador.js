export const EL_SALVADOR = {
  code: "SLV",
  numericId: 222,
  name: { fr: "El Salvador", en: "El Salvador", es: "El Salvador" },
  emoji: "🇸🇻",
  capital: { fr: "San Salvador", en: "San Salvador", es: "San Salvador" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español" },
  currency: { fr: "Dollar américain (USD)", en: "US dollar (USD)", es: "Dólar estadounidense (USD)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1000, tripMid: 2200,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr:
      "El Salvador, le plus petit pays d'Amérique centrale, surprend par sa densité d'expériences : Joya de Cerén, la « Pompéi américaine » classée UNESCO, les plages de surf légendaires d'El Tunco et d'El Zonte (Bitcoin Beach), et la Ruta de las Flores, village après village de gastronomie et d'artisanat.",
    en:
      "El Salvador, the smallest country in Central America, is surprisingly rich in experiences: Joya de Cerén, the UNESCO-listed 'American Pompeii', the legendary surf beaches of El Tunco and El Zonte (Bitcoin Beach), and the Ruta de las Flores, a string of villages known for gastronomy and handicrafts.",
    es:
      "El Salvador, el país más pequeño de Centroamérica, sorprende por su densidad de experiencias: Joya de Cerén, la «Pompeya americana» declarada Patrimonio UNESCO, las legendarias playas de surf de El Tunco y El Zonte (Bitcoin Beach), y la Ruta de las Flores, pueblo tras pueblo de gastronomía y artesanía.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca" },
      color: "#22c55e",
      description: {
        fr:
          "Idéal pour visiter le pays. Températures agréables, routes praticables, plages ensoleillées et surf régulier.",
        en:
          "Ideal for exploring the country. Pleasant temperatures, accessible roads, sunny beaches and consistent surf.",
        es:
          "Ideal para visitar el país. Temperaturas agradables, carreteras transitables, playas soleadas y oleaje constante.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto" },
      label: { fr: "Verano de San Juan", en: "Verano de San Juan", es: "Verano de San Juan" },
      color: "#fb923c",
      description: {
        fr:
          "Pause relative dans les pluies (mi-juin à mi-juillet). Végétation luxuriante, cafetales en fleurs.",
        en:
          "A relative break in the rains (mid-June to mid-July). Lush vegetation and coffee plantations in bloom.",
        es:
          "Pausa relativa en las lluvias (mediados de junio a mediados de julio). Vegetación exuberante, cafetales en flor.",
      },
      icon: "🌦️",
    },
  ],

  weatherCities: [
    {
      id: "san_salvador",
      name: "San Salvador",
      region: { fr: "Centre", en: "Central", es: "Centro" },
      data: [
        { month: "Jan", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 290, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 260, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 270, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 310, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 220, icon: "🌧️" },
        { month: "Nov", temp: 25, rain: 35,  icon: "⛅" },
        { month: "Déc", temp: 24, rain: 15,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Joya de Cerén — Pompéi américaine", en: "Joya de Cerén — the American Pompeii", es: "Joya de Cerén — la Pompeya americana" },
      region: { fr: "La Libertad", en: "La Libertad", es: "La Libertad" },
      description: {
        fr:
          "Joya de Cerén est un village maya enseveli par une éruption volcanique en l'an 590 apr. J.-C., conservant maisons, jardins et réserves alimentaires intacts. Classé UNESCO, il est la seule fenêtre au monde sur la vie quotidienne maya d'un villageois ordinaire.",
        en:
          "Joya de Cerén is a Maya village buried by a volcanic eruption in 590 AD, preserving houses, gardens and food stores intact. UNESCO-listed, it is the world's only window into the everyday life of an ordinary Maya villager.",
        es:
          "Joya de Cerén es un pueblo maya sepultado por una erupción volcánica en el año 590 d. C., que conserva intactas casas, huertos y reservas de alimentos. Declarado Patrimonio UNESCO, es la única ventana del mundo a la vida cotidiana de un aldeano maya común.",
      },
      wikipedia: "Joya_de_Cerén",
      tags: ["UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Village maya fossilisé (structures in situ)", en: "Buried Maya village (in situ structures)", es: "Pueblo maya fosilizado (estructuras in situ)" }, wikipedia: "File:Joya de Cerén, domestic complex.jpg" },
        { name: { fr: "Musée de site — vaisselle et outils mayas", en: "Site museum — Maya pottery and tools", es: "Museo del sitio — cerámica y herramientas mayas" }, wikipedia: "File:ES Estructura 12 y 10 Area 1 Joya Ceren 05 2012 1516.jpg" },
        { name: { fr: "San Andrés — grand site maya voisin", en: "San Andrés — major neighbouring Maya site", es: "San Andrés — importante sitio maya vecino" }, wikipedia: "File:ES San Andres 05 2012 Estructura 1 La Acropolis 1562.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "El Tunco & El Zonte (Bitcoin Beach)", en: "El Tunco & El Zonte (Bitcoin Beach)", es: "El Tunco y El Zonte (Bitcoin Beach)" },
      region: { fr: "La Libertad", en: "La Libertad", es: "La Libertad" },
      description: {
        fr:
          "El Tunco est la capitale du surf en Amérique centrale : vagues régulières pour tous niveaux, ambiance bohème, et couchers de soleil sur le Pacifique. El Zonte (Bitcoin Beach) est devenu mondialement connu comme premier village au monde à adopter Bitcoin comme monnaie locale.",
        en:
          "El Tunco is Central America's surf capital: reliable waves for every level, a bohemian vibe and Pacific sunsets. El Zonte (Bitcoin Beach) became world-famous as the first village in the world to adopt Bitcoin as a local currency.",
        es:
          "El Tunco es la capital del surf en Centroamérica: olas constantes para todos los niveles, ambiente bohemio y atardeceres sobre el Pacífico. El Zonte (Bitcoin Beach) se hizo mundialmente famoso como el primer pueblo del mundo en adoptar el Bitcoin como moneda local.",
      },
      wikipedia: "File:El tunco.png",
      tags: ["Plage", "Nightlife"],
      mustSee: [
        { name: { fr: "Surf à El Sunzal et La Bocana", en: "Surfing at El Sunzal and La Bocana", es: "Surf en El Sunzal y La Bocana" }, wikipedia: "Surfing" },
        { name: { fr: "Rocher El Tunco — coucher de soleil", en: "El Tunco Rock — sunset views", es: "Roca El Tunco — atardecer" }, wikipedia: "File:El tunco.png" },
        { name: { fr: "La Libertad — port & poissons frais", en: "La Libertad — harbour & fresh fish", es: "La Libertad — puerto y pescado fresco" }, wikipedia: "La_Libertad,_El_Salvador" },
      ],
    },
    {
      id: 3,
      name: "Lago de Coatepeque",
      region: { fr: "Santa Ana", en: "Santa Ana", es: "Santa Ana" },
      description: {
        fr:
          "Le Lac de Coatepeque est un lac volcanique de cratère, avec des eaux bleues et chaudes à 22°C toute l'année, entouré de collines verdoyantes. Le Volcan Santa Ana voisin (2 381 m) offre l'une des meilleures randonnées du pays avec vue sur la caldera.",
        en:
          "Coatepeque Lake is a volcanic crater lake with blue, warm waters at 22°C year-round, surrounded by green hills. Nearby Santa Ana Volcano (2,381 m) offers one of the country's best hikes, with views over the caldera.",
        es:
          "El lago de Coatepeque es un lago volcánico de cráter, con aguas azules y cálidas a 22°C durante todo el año, rodeado de colinas verdes. El cercano volcán Santa Ana (2.381 m) ofrece una de las mejores caminatas del país con vistas a la caldera.",
      },
      wikipedia: "File:Coatepeque Vista.jpg",
      tags: ["Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Baignade et kayak dans le lac volcanique", en: "Swimming and kayaking in the volcanic lake", es: "Baño y kayak en el lago volcánico" }, wikipedia: "File:Coatepeque Vista.jpg" },
        { name: { fr: "Volcan Santa Ana — caldera fumante (2 381 m)", en: "Santa Ana Volcano — smoking caldera (2,381 m)", es: "Volcán Santa Ana — caldera humeante (2.381 m)" }, wikipedia: "Santa_Ana_Volcano" },
        { name: { fr: "Cerro Verde — forêt nuageuse et oiseaux", en: "Cerro Verde — cloud forest and birdlife", es: "Cerro Verde — bosque nuboso y aves" }, wikipedia: "File:Cerro Verde and Izalco Volcano.jpg" },
        { name: { fr: "Lagune Ilopango — plus grand lac du pays", en: "Ilopango Lagoon — the country's largest lake", es: "Laguna de Ilopango — el lago más grande del país" }, wikipedia: "Lake_Ilopango" },
      ],
    },
    {
      id: 4,
      name: "Ruta de las Flores",
      region: { fr: "Sonsonate / Ahuachapán", en: "Sonsonate / Ahuachapán", es: "Sonsonate / Ahuachapán" },
      description: {
        fr:
          "La Ruta de las Flores traverse quatre villages montagnards aux maisons colorées : Nahuizalco (artisanat en rotin), Juayúa (festival gastronomique chaque week-end), Apaneca (café de spécialité) et Ataco (murales géants). L'une des plus belles routes culturelles d'Amérique centrale.",
        en:
          "The Ruta de las Flores winds through four mountain villages with colourful houses: Nahuizalco (rattan handicrafts), Juayúa (a food festival every weekend), Apaneca (specialty coffee) and Ataco (giant murals). One of the most beautiful cultural routes in Central America.",
        es:
          "La Ruta de las Flores atraviesa cuatro pueblos de montaña de casas coloridas: Nahuizalco (artesanía de mimbre), Juayúa (festival gastronómico cada fin de semana), Apaneca (café de especialidad) y Ataco (murales gigantes). Una de las rutas culturales más bellas de Centroamérica.",
      },
      wikipedia: "File:RUTA DE LAS FLORES EN ATACO. - panoramio.jpg",
      tags: ["Culture", "Gastronomie", "Shopping"],
      mustSee: [
        { name: { fr: "Nahuizalco — artisanat en rotin et bois", en: "Nahuizalco — rattan and wood crafts", es: "Nahuizalco — artesanía de mimbre y madera" }, wikipedia: "Nahuizalco" },
        { name: { fr: "Ataco — murales géants", en: "Ataco — giant murals", es: "Ataco — murales gigantes" }, wikipedia: "Concepción_de_Ataco" },
        { name: { fr: "Apaneca — ULM et paysages de montagne", en: "Apaneca — microlights and mountain scenery", es: "Apaneca — ultraligeros y paisajes de montaña" }, wikipedia: "Apaneca" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "El Salvador est l'un des pays les moins chers d'Amérique centrale et utilise le dollar américain depuis 2001. Les prix sont stables et transparents. La scène gastronomique s'est énormément développée.",
      en: "El Salvador is one of the cheapest countries in Central America and has used the US dollar since 2001. Prices are stable and transparent. The food scene has grown tremendously.",
      es: "El Salvador es uno de los países más económicos de Centroamérica y utiliza el dólar estadounidense desde 2001. Los precios son estables y transparentes. La escena gastronómica se ha desarrollado enormemente.",
    },
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Hostel surf (El Tunco)", en: "Surf hostel (El Tunco)", es: "Hostel de surf (El Tunco)" }, price: "10–20 €", detail: { fr: "Dortoir ou chambre ventilée", en: "Dorm or fan room", es: "Dormitorio o habitación con ventilador" } },
          { label: { fr: "Hôtel 3★ San Salvador", en: "3★ hotel in San Salvador", es: "Hotel 3★ en San Salvador" }, price: "40–70 €", detail: { fr: "Climatisé, bon confort", en: "Air-conditioned, good comfort", es: "Climatizado, buen confort" } },
          { label: { fr: "Boutique hôtel de charme", en: "Charming boutique hotel", es: "Hotel boutique con encanto" }, price: "80–150 €", detail: { fr: "Vue lac ou plage", en: "Lake or beach view", es: "Vistas al lago o a la playa" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Pupusas (plat national)", en: "Pupusas (national dish)", es: "Pupusas (plato nacional)" }, price: "0,5–1 €", detail: { fr: "Galettes de maïs, partout", en: "Corn flatbreads, available everywhere", es: "Tortitas de maíz, disponibles en todas partes" } },
          { label: { fr: "Festival gastronomique Juayúa", en: "Juayúa food festival", es: "Festival gastronómico de Juayúa" }, price: "3–8 €", detail: { fr: "Plats copieux le week-end", en: "Hearty dishes on weekends", es: "Platos abundantes los fines de semana" } },
          { label: { fr: "Restaurant San Salvador", en: "San Salvador restaurant", es: "Restaurante en San Salvador" }, price: "10–20 €", detail: { fr: "Cuisine créative ou fusion", en: "Creative or fusion cuisine", es: "Cocina creativa o fusión" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus local (interurbain)", en: "Local bus (intercity)", es: "Autobús local (interurbano)" }, price: "1–3 €", detail: { fr: "Lent mais pittoresque", en: "Slow but scenic", es: "Lento pero pintoresco" } },
          { label: { fr: "Shuttle touristique", en: "Tourist shuttle", es: "Shuttle turístico" }, price: "15–25 €", detail: { fr: "Confortable et rapide", en: "Comfortable and fast", es: "Cómodo y rápido" } },
          { label: { fr: "Mototaxi ou Uber (San Salvador)", en: "Motor taxi or Uber (San Salvador)", es: "Mototaxi o Uber (San Salvador)" }, price: "2–6 €", detail: { fr: "Pratique en ville", en: "Convenient in the city", es: "Práctico en la ciudad" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Leçon de surf (2h)", en: "Surf lesson (2h)", es: "Clase de surf (2h)" }, price: "20–30 €", detail: { fr: "Planches incluses, El Tunco", en: "Boards included, El Tunco", es: "Tablas incluidas, El Tunco" } },
          { label: { fr: "Randonnée Volcan Santa Ana", en: "Santa Ana Volcano hike", es: "Caminata al volcán Santa Ana" }, price: "15–25 €", detail: { fr: "Guide obligatoire", en: "Guide required", es: "Guía obligatorio" } },
          { label: { fr: "Visite Joya de Cerén + San Andrés", en: "Joya de Cerén + San Andrés visit", es: "Visita a Joya de Cerén + San Andrés" }, price: "5–10 €", detail: { fr: "Les deux sites", en: "Both sites", es: "Ambos sitios" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "30–45 €/j", desc: { fr: "Hostel + pupusas + bus local", en: "Hostel + pupusas + local bus", es: "Hostel + pupusas + autobús local" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "70–110 €/j", desc: { fr: "Hôtel 3★ + restos + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo" }, daily: "200 €+/j", desc: { fr: "Boutique hôtel + cuisine créative + privé", en: "Boutique hotel + creative cuisine + private services", es: "Hotel boutique + cocina creativa + servicios privados" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días" },
      route: {
        fr: "San Salvador (1j) → Joya de Cerén & Lac (2j) → Ruta de las Flores (2j) → El Tunco & surf (3j)",
        en: "San Salvador (1d) → Joya de Cerén & Coatepeque Lake (2d) → Ruta de las Flores (2d) → El Tunco & surfing (3d)",
        es: "San Salvador (1d) → Joya de Cerén y lago de Coatepeque (2d) → Ruta de las Flores (2d) → El Tunco y surf (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–San Salvador", en: "Return flight Paris–San Salvador", es: "Vuelo ida y vuelta Madrid–San Salvador" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "100–180 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local" }, amount: "80–120 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–San Salvador", en: "Return flight Paris–San Salvador", es: "Vuelo ida y vuelta Madrid–San Salvador" }, amount: "550–850 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)" }, amount: "500–750 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "350–550 €" },
            { label: { fr: "Transports & shuttles", en: "Transport & shuttles", es: "Transporte y shuttles" }, amount: "250–400 €" },
            { label: { fr: "Activités & extras", en: "Activities & extras", es: "Actividades y extras" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo" },
          color: "#f59e0b",
          total: "5 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–San Salvador", en: "Return flight Paris–San Salvador", es: "Vuelo ida y vuelta Madrid–San Salvador" }, amount: "1 500–2 500 €" },
            { label: { fr: "Boutique hôtels (8 nuits)", en: "Boutique hotels (8 nights)", es: "Hoteles boutique (8 noches)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Dining & experiences", es: "Gastronomía y experiencias" }, amount: "500–800 €" },
            { label: { fr: "Transferts privés", en: "Private transfers", es: "Traslados privados" }, amount: "300–500 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras" }, amount: "200 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~13h avec escale (via Miami, Madrid ou Bogotá)", en: "~13h with a layover (via Miami, Madrid or Bogotá)", es: "~13h con escala (vía Miami, Madrid o Bogotá)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Sans visa 90 jours CA-4 (Français)", en: "No visa for 90 days under the CA-4 agreement (French citizens)", es: "Sin visado 90 días bajo el acuerdo CA-4 (ciudadanos UE)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Dollar américain (USD) — Bitcoin légal depuis 2021", en: "US dollar (USD) — Bitcoin legal tender since 2021", es: "Dólar estadounidense (USD) — Bitcoin de curso legal desde 2021" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Espagnol", en: "Spanish", es: "Español" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type A/B — 120 V (comme USA)", en: "Type A/B — 120 V (same as the USA)", es: "Tipo A/B — 120 V (como en EE. UU.)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil" }, value: { fr: "Bonne couverture nationale (Claro, Tigo)", en: "Good nationwide coverage (Claro, Tigo)", es: "Buena cobertura nacional (Claro, Tigo)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille recommandée", en: "Not drinkable — bottled water recommended", es: "No potable — se recomienda agua embotellada" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen en zone rurale basse ; Zika possible (femmes enceintes)", en: "Antimalarials in low-lying rural areas; possible Zika risk (pregnant women)", es: "Antipalúdico en zonas rurales bajas; posible riesgo de Zika (mujeres embarazadas)" } },
  ],
};
