export const GUATEMALA = {
  code: "GTM",
  numericId: 320,
  name: { fr: "Guatemala", en: "Guatemala", es: "Guatemala", de: "Guatemala" },
  emoji: "🇬🇹",
  capital: { fr: "Guatemala City", en: "Guatemala City", es: "Ciudad de Guatemala", de: "Guatemala-Stadt" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" },
  currency: { fr: "Quetzal (GTQ)", en: "Quetzal (GTQ)", es: "Quetzal (GTQ)", de: "Quetzal (GTQ)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1200, tripMid: 2800,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Guatemala concentre l'essence de l'Amérique centrale : Antigua, joyau colonial classé UNESCO, le lac Atitlán cerné de volcans — l'un des plus beaux du monde — et Tikal, cité maya surgissant de la jungle péténère. Un pays surprenant, peu cher et profondément authentique.", en: "Guatemala captures the essence of Central America: Antigua, a UNESCO-listed colonial gem; Lake Atitlán ringed by volcanoes — one of the most beautiful in the world — and Tikal, a Maya city rising from the Petén jungle. A surprising, affordable and deeply authentic country.", es: "Guatemala concentra la esencia de Centroamérica: Antigua, joya colonial declarada Patrimonio UNESCO, el lago Atitlán rodeado de volcanes —uno de los más bellos del mundo— y Tikal, ciudad maya que emerge de la selva del Petén. Un país sorprendente, barato y profundamente auténtico.", de: "Guatemala konzentriert die Essenz Mittelamerikas: Antigua, ein koloniales Juwel, das zum UNESCO-Weltkulturerbe gehört, den von Vulkanen umgebenen Atitlán-See – einer der schönsten der Welt – und Tikal, eine Maya-Stadt, die aus dem rauen Dschungel emporsteigt. Ein überraschendes Land, günstig und zutiefst authentisch.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour Antigua, Tikal et les randonnées. Températures parfaites, pluies rares, visibilité maximale sur les volcans.", en: "Ideal for Antigua, Tikal and hiking. Perfect temperatures, rare rain and maximum visibility of the volcanoes.", es: "Ideal para Antigua, Tikal y el senderismo. Temperaturas perfectas, lluvias escasas, máxima visibilidad de los volcanes.", de: "Ideal für Antigua, Tikal und Wandern. Perfekte Temperaturen, seltener Regen, maximale Sicht auf die Vulkane.",
      },
      icon: "🌋",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August", es: "Julio – Agosto", de: "Juli – August" },
      label: { fr: "Caniculot (semi-sec)", en: "Canícula (semi-dry spell)", es: "Canícula (semiseca)", de: "Caniculot (halbtrocken)" },
      color: "#fb923c",
      description: {
        fr: "Pause relative dans les pluies (veranillo). Moins cher, jungles verdoyantes, moins de touristes.", en: "A relative break in the rains (veranillo). Cheaper, greener jungles and fewer tourists.", es: "Pausa relativa en las lluvias (veranillo). Más barato, selvas verdes, menos turistas.", de: "Relative Regenpause (Veranillo). Günstiger, grüner Dschungel, weniger Touristen.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "antigua",
      name: "Antigua",
      region: { fr: "Sacatepéquez", en: "Sacatepéquez", es: "Sacatepéquez", de: "Sacatepéquez" },
      data: [
        { month: "Jan", temp: 22, rain: 8,   icon: "☀️" },
        { month: "Fév", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 25, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 140, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 200, icon: "⛅" },
        { month: "Jul", temp: 24, rain: 170, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 160, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 23, rain: 130, icon: "☀️" },
        { month: "Nov", temp: 22, rain: 30,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 10,  icon: "☀️" },
      ],
    },
    {
      id: "peten",
      name: "Petén (Tikal)",
      region: { fr: "Petén", en: "Petén", es: "Petén", de: "Peten" },
      data: [
        { month: "Jan", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 28, rain: 30,  icon: "☀️" },
        { month: "Mar", temp: 30, rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 32, rain: 55,  icon: "🌡️" },
        { month: "Mai", temp: 30, rain: 150, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 190, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 230, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 210, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 60,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Antigua Guatemala",
      region: { fr: "Sacatepéquez", en: "Sacatepéquez", es: "Sacatepéquez", de: "Sacatepéquez" },
      description: {
        fr: "Antigua est l'une des villes coloniales espagnoles les mieux conservées d'Amérique centrale, classée UNESCO. Rues pavées, arcs baroques, ruines de couvents, et volcans en arrière-plan : Agua, Fuego et Acatenango. La Semana Santa (Pâques) y est la plus impressionnante du monde hispanique.", en: "Antigua is one of the best-preserved Spanish colonial cities in Central America and is UNESCO-listed. Cobblestone streets, baroque arches, convent ruins and volcanoes in the background — Agua, Fuego and Acatenango. Its Holy Week (Easter) celebrations are the most impressive in the Spanish-speaking world.", es: "Antigua es una de las ciudades coloniales españolas mejor conservadas de Centroamérica, declarada Patrimonio UNESCO. Calles empedradas, arcos barrocos, ruinas de conventos y volcanes de fondo: Agua, Fuego y Acatenango. Su Semana Santa es la más impresionante del mundo hispano.", de: "Antigua ist eine der am besten erhaltenen spanischen Kolonialstädte in Mittelamerika und gehört zum UNESCO-Weltkulturerbe. Gepflasterte Straßen, barocke Bögen, Klosterruinen und Vulkane im Hintergrund: Agua, Fuego und Acatenango. Die Semana Santa (Ostern) ist die eindrucksvollste in der hispanischen Welt.",
      },
      wikipedia: "Antigua_Guatemala",
      tags: ["UNESCO", "Histoire", "Nature", "Culture", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Arc de Santa Catalina & vue volcans", en: "Santa Catalina Arch & volcano views", es: "Arco de Santa Catalina y vistas a los volcanes", de: "Blick auf den Bogen Santa Catalina und die Vulkane" }, wikipedia: "Arco_de_Santa_Catalina" },
        { name: { fr: "Ruines Cathédrale Santiago", en: "Santiago Cathedral ruins", es: "Ruinas de la catedral de Santiago", de: "Ruinen der Kathedrale von Santiago" }, wikipedia: "File:Antigua Guatemala 1979 - Colonial ruins.jpg" },
        { name: { fr: "Ascension Volcan Acatenango (3 976 m)", en: "Acatenango Volcano hike (3,976 m)", es: "Ascensión al volcán Acatenango (3.976 m)", de: "Besteigung des Vulkans Acatenango (3.976 m)" }, wikipedia: "Acatenango" },
        { name: { fr: "Semana Santa — processions de tapis (Pâques)", en: "Holy Week — sawdust carpet processions (Easter)", es: "Semana Santa — procesiones de alfombras", de: "Semana Santa – Teppichprozessionen (Ostern)" }, wikipedia: "File:Antigua, Guatemala - Semana Santa 2011.jpg" },
      ],
    },
    {
      id: 2,
      name: "Tikal",
      region: { fr: "Petén", en: "Petén", es: "Petén", de: "Peten" },
      description: {
        fr: "Tikal est le plus grand site maya du monde : une cité précolombienne enfouie dans la forêt tropicale du Petén. Les temples I et IV dépassent la canopée, offrant une vue à couper le souffle sur la jungle infinie. Toucans, singes hurleurs et coatis peuplent les ruines.", en: "Tikal is the largest Maya site in the world: a pre-Columbian city buried in the Petén rainforest. Temples I and IV rise above the canopy, offering breathtaking views over the endless jungle. Toucans, howler monkeys and coatis inhabit the ruins.", es: "Tikal es el mayor sitio maya del mundo: una ciudad precolombina enterrada en la selva tropical del Petén. Los templos I y IV sobresalen del dosel forestal, ofreciendo vistas sobrecogedoras sobre la jungla infinita. Tucanes, monos aulladores y coatíes pueblan las ruinas.", de: "Tikal ist die größte Maya-Stätte der Welt: eine präkolumbianische Stadt, begraben im Petén-Tropenwald. Die Tempel I und IV erheben sich über dem Blätterdach und bieten atemberaubende Ausblicke auf den endlosen Dschungel. Tukane, Brüllaffen und Nasenbären bevölkern die Ruinen.",
      },
      wikipedia: "Tikal",
      tags: ["UNESCO", "Histoire", "Nature", "Randonnée", "Architecture"],
      mustSee: [
        { name: { fr: "Temple I — Gran Jaguar (70 m)", en: "Temple I — Great Jaguar (70 m)", es: "Templo I — Gran Jaguar (70 m)", de: "Tempel I – Gran Jaguar (70 m)" }, wikipedia: "File:Tikal Temple I 02.jpg" },
        { name: { fr: "Temple IV — vue au-dessus de la canopée", en: "Temple IV — views above the canopy", es: "Templo IV — vistas sobre el dosel forestal", de: "Tempel IV – Blick über den Baldachin" }, wikipedia: "File:Tikal Temple IV, 2022 02.jpg" },
        { name: { fr: "Acropole Nord — nécropole royale", en: "North Acropolis — royal necropolis", es: "Acrópolis Norte — necrópolis real", de: "Nordakropolis – königliche Nekropole" }, wikipedia: "File:Temples I & II from Temple IV (3267626478).jpg" },
        { name: { fr: "Faune : toucans, singes araignées", en: "Wildlife: toucans, spider monkeys", es: "Fauna: tucanes, monos araña", de: "Fauna: Tukane, Klammeraffen" }, wikipedia: "Keel-billed_toucan" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lago de Atitlán", en: "Lake Atitlán", es: "Lago de Atitlán", de: "Atitlan-See" },
      region: { fr: "Sololá", en: "Sololá", es: "Sololá", de: "Solola" },
      description: {
        fr: "Le lac Atitlán, à 1 562 m d'altitude, est entouré de trois volcans et de villages mayas encore vivants. Aldous Huxley le décrivait comme « le lac le plus beau du monde ». Chaque village riverain a sa propre identité culturelle et son marché traditionnel.", en: "Lake Atitlán, at an altitude of 1,562 m, is surrounded by three volcanoes and still-living Maya villages. Aldous Huxley described it as \"the most beautiful lake in the world.\" Each lakeside village has its own cultural identity and traditional market.", es: "El lago Atitlán, a 1.562 m de altitud, está rodeado de tres volcanes y pueblos mayas todavía vivos. Aldous Huxley lo describió como «el lago más bello del mundo». Cada pueblo ribereño tiene su propia identidad cultural y su mercado tradicional.", de: "Der Atitlán-See liegt 1.562 m über dem Meeresspiegel und ist von drei Vulkanen und noch lebenden Maya-Dörfern umgeben. Aldous Huxley beschrieb ihn als „den schönsten See der Welt“. Jedes Dorf am Flussufer hat seine eigene kulturelle Identität und seinen eigenen traditionellen Markt.",
      },
      wikipedia: "Lake_Atitlán",
      tags: ["Nature", "Histoire", "Randonnée"],
      mustSee: [
        { name: { fr: "Village San Juan La Laguna (artisans mayas)", en: "San Juan La Laguna village (Maya artisans)", es: "Pueblo de San Juan La Laguna (artesanos mayas)", de: "San Juan La Laguna Village (Maya-Kunsthandwerker)" }, wikipedia: "San_Juan_La_Laguna" },
        { name: { fr: "Ascension Volcan San Pedro (3 020 m)", en: "San Pedro Volcano hike (3,020 m)", es: "Ascensión al volcán San Pedro (3.020 m)", de: "Besteigung des Vulkans San Pedro (3.020 m)" }, wikipedia: "File:Volcán San Pedro, Chile, 2016-02-09, DD 18.JPG" },
        { name: { fr: "Panajachel — marché & vie locale", en: "Panajachel — market & local life", es: "Panajachel — mercado y vida local", de: "Panajachel – Markt und lokales Leben" }, wikipedia: "File:Panajachel - Cityscape.jpg" },
        { name: { fr: "San Marcos La Laguna — retraite spirituelle", en: "San Marcos La Laguna — spiritual retreat", es: "San Marcos La Laguna — retiro espiritual", de: "San Marcos La Laguna – spiritueller Rückzugsort" }, wikipedia: "San_Marcos_La_Laguna" },
      ],
    },
    {
      id: 4,
      name: "Chichicastenango",
      region: { fr: "Quiché", en: "Quiché", es: "Quiché", de: "Quiche" },
      description: {
        fr: "Chichicastenango abrite le plus grand marché indigène d'Amérique centrale, le jeudi et le dimanche. Les K'iche' Mayas y vendent textiles, masques, poteries et copal, dans une atmosphère de fumée d'encens sur le parvis de l'église Santo Tomás.", en: "Chichicastenango is home to the largest indigenous market in Central America, held on Thursdays and Sundays. K'iche' Maya vendors sell textiles, masks, pottery and copal there, amid incense smoke on the forecourt of Santo Tomás Church.", es: "Chichicastenango alberga el mercado indígena más grande de Centroamérica, los jueves y domingos. Los mayas k'iche' venden allí textiles, máscaras, cerámica y copal, entre el humo del incienso frente a la iglesia de Santo Tomás.", de: "In Chichicastenango findet donnerstags und sonntags der größte indigene Markt Mittelamerikas statt. Die K'iche' Maya verkaufen Textilien, Masken, Töpferwaren und Kopal in einer Atmosphäre von Weihrauch auf dem Platz vor der Kirche Santo Tomás.",
      },
      wikipedia: "Chichicastenango",
      tags: ["Shopping", "Histoire", "Tradition"],
      mustSee: [
        { name: { fr: "Marché maya (jeu & dim) — textiles & copal", en: "Maya market (Thu & Sun) — textiles & copal", es: "Mercado maya (jue y dom) — textiles y copal", de: "Maya-Markt (Do und So) – Textilien und Kopal" }, wikipedia: "File:Chichicastenango market.jpg" },
        { name: { fr: "Église Santo Tomás — syncrétisme maya-catholique", en: "Santo Tomás Church — Maya-Catholic syncretism", es: "Iglesia de Santo Tomás — sincretismo maya-católico", de: "Kirche Santo Tomás – Maya-katholischer Synkretismus" }, wikipedia: "File:Chichicastenango Guatemala, March 2020 - Santo Tomas.jpg" },
        { name: { fr: "Cimetière coloré aux offrandes", en: "Colourful cemetery with offerings", es: "Cementerio colorido con ofrendas", de: "Bunter Friedhof mit Opfergaben" }, wikipedia: "Chichicastenango" },
        { name: { fr: "Idole maya Pascual Abaj (colline sacrée)", en: "Pascual Abaj Maya idol (sacred hill)", es: "Ídolo maya Pascual Abaj (colina sagrada)", de: "Maya-Idol Pascual Abaj (heiliger Hügel)" }, wikipedia: "Pascual_Abaj" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Guatemala est l'une des destinations les moins chères d'Amérique centrale. Antigua est légèrement plus onéreuse mais reste très abordable. Les marchés et le transport local sont accessibles à tous.", en: "Guatemala is one of the cheapest destinations in Central America. Antigua is slightly more expensive but still very affordable. Markets and local transport are accessible to everyone.", es: "Guatemala es uno de los destinos más baratos de Centroamérica. Antigua es algo más cara pero sigue siendo muy asequible. Los mercados y el transporte local son accesibles para todos.", de: "Guatemala ist eines der günstigsten Reiseziele in Mittelamerika. Antigua ist etwas teurer, aber immer noch sehr erschwinglich. Märkte und Nahverkehr sind für jedermann zugänglich.",
    },
    currency: "GTQ",
    exchangeRate: "1€ ≈ 8,5 GTQ",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge / hostel Antigua", en: "Hostel / guesthouse in Antigua", es: "Hostel / guesthouse en Antigua", de: "Herberge Antigua" }, price: "10–20 €", detail: { fr: "Dortoir ou chambre simple", en: "Dorm bed or simple room", es: "Dormitorio o habitación sencilla", de: "Schlafsaal oder Einzelzimmer" } },
          { label: { fr: "Hôtel colonial 3★", en: "3★ colonial hotel", es: "Hotel colonial 3★", de: "Kolonialhotel 3★" }, price: "40–80 €", detail: { fr: "Patio, bonne literie", en: "Patio, comfortable bedding", es: "Patio, buena ropa de cama", de: "Terrasse, gute Betten" } },
          { label: { fr: "Boutique hôtel de charme", en: "Charming boutique hotel", es: "Hotel boutique con encanto", de: "Boutique-Boutique-Hotel" }, price: "100–180 €", detail: { fr: "Vue volcans, confort supérieur", en: "Volcano views, superior comfort", es: "Vistas a los volcanes, confort superior", de: "Blick auf Vulkane, erstklassiger Komfort" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Pepián ou pollo al ajillo (local)", en: "Pepián or pollo al ajillo (local)", es: "Pepián o pollo al ajillo (local)", de: "Pepián oder pollo al ajillo (lokal)" }, price: "2–5 €", detail: { fr: "Marché local, excellent", en: "Local market, excellent", es: "Mercado local, excelente", de: "Lokaler Markt, ausgezeichnet" } },
          { label: { fr: "Restaurant Antigua", en: "Restaurant in Antigua", es: "Restaurante en Antigua", de: "Restaurant Antigua" }, price: "8–15 €", detail: { fr: "Cuisine fusion ou traditionnelle", en: "Fusion or traditional cuisine", es: "Cocina fusión o tradicional", de: "Fusions- oder traditionelle Küche" } },
          { label: { fr: "Gastronomie & rooftop", en: "Fine dining & rooftop", es: "Alta gastronomía y rooftop", de: "Gastronomie & Rooftop" }, price: "20–35 €", detail: { fr: "Avec vue volcans", en: "With volcano views", es: "Con vistas a los volcanes", de: "Mit Blick auf den Vulkan" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Chicken bus (interurbain)", en: "Chicken bus (intercity)", es: "Chicken bus (interurbano)", de: "Hühnerbus (Intercity)" }, price: "1–3 €", detail: { fr: "Lent, coloré, authentique", en: "Slow, colourful, authentic", es: "Lento, colorido, auténtico", de: "Langsam, bunt, authentisch" } },
          { label: { fr: "Shuttle touristique Antigua–Atitlán", en: "Tourist shuttle Antigua–Atitlán", es: "Shuttle turístico Antigua–Atitlán", de: "Touristenshuttle Antigua–Atitlán" }, price: "15–20 €", detail: { fr: "Confortable, direct", en: "Comfortable, direct", es: "Cómodo, directo", de: "Bequem, direkt" } },
          { label: { fr: "Vol Guatemala City–Flores (Tikal)", en: "Guatemala City–Flores flight (Tikal)", es: "Vuelo Ciudad de Guatemala–Flores (Tikal)", de: "Flug Guatemala-Stadt–Flores (Tikal)" }, price: "80–150 €", detail: { fr: "A/R, 45 min vs 9h bus", en: "Return, 45 min vs 9h by bus", es: "Ida y vuelta, 45 min frente a 9h en autobús", de: "Hin- und Rückflug: 45 Minuten gegenüber 9 Stunden mit dem Bus" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée site Tikal", en: "Tikal site entry", es: "Entrada al sitio de Tikal", de: "Eingang zur Tikal-Website" }, price: "20–25 €", detail: { fr: "Journée complète", en: "Full day", es: "Día completo", de: "Ganzer Tag" } },
          { label: { fr: "Guide Tikal (bilingual)", en: "Tikal guide (bilingual)", es: "Guía en Tikal (bilingüe)", de: "Tikal-Führer (zweisprachig)" }, price: "25–40 €", detail: { fr: "Recommandé pour comprendre", en: "Recommended to fully understand the site", es: "Recomendado para entender bien el sitio", de: "Zum Verständnis empfohlen" } },
          { label: { fr: "Trekking Acatenango (2j/1n)", en: "Acatenango trek (2d/1n)", es: "Trekking al Acatenango (2d/1n)", de: "Trekking Acatenango (2 Tage/1 Nacht)" }, price: "30–60 €", detail: { fr: "Guide + bivouac", en: "Guide + bivouac", es: "Guía + campamento", de: "Führer + Biwak" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Hostel + cuisine locale + chicken bus", en: "Hostel + local food + chicken bus", es: "Hostel + cocina local + chicken bus", de: "Hostel + lokale Küche + Hühnerbus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + shuttles", en: "3★ hotel + restaurants + shuttles", es: "Hotel 3★ + restaurantes + shuttles", de: "3★ Hotel + Restaurants + Shuttles" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Boutique hôtel + guide privé + vol Tikal", en: "Boutique hotel + private guide + Tikal flight", es: "Hotel boutique + guía privado + vuelo a Tikal", de: "Boutique-Hotel + privater Reiseführer + Tikal-Flug" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Antigua (3j) → Lac Atitlán (2j) → Chichicastenango (1j) → Tikal (3j) → Antigua (1j)", en: "Antigua (3d) → Lake Atitlán (2d) → Chichicastenango (1d) → Tikal (3d) → Antigua (1d)", es: "Antigua (3d) → Lago Atitlán (2d) → Chichicastenango (1d) → Tikal (3d) → Antigua (1d)", de: "Antigua (3 Tage) → Atitlán-See (2 Tage) → Chichicastenango (1 Tag) → Tikal (3 Tage) → Antigua (1 Tag)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Guatemala City", en: "Return flight Paris–Guatemala City", es: "Vuelo ida y vuelta Madrid–Ciudad de Guatemala", de: "Hin- und Rückflug Paris–Guatemala-Stadt" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–300 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Guatemala City", en: "Return flight Paris–Guatemala City", es: "Vuelo ida y vuelta Madrid–Ciudad de Guatemala", de: "Hin- und Rückflug Paris–Guatemala-Stadt" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Transports & excursions", en: "Transport & excursions", es: "Transporte y excursiones", de: "Transport & Ausflüge" }, amount: "500–800 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides", es: "Actividades y guías", de: "Aktivitäten und Führer" }, amount: "350–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Guatemala City", en: "Return flight Paris–Guatemala City", es: "Vuelo ida y vuelta Madrid–Ciudad de Guatemala", de: "Hin- und Rückflug Paris–Guatemala-Stadt" }, amount: "1 200–2 000 €" },
            { label: { fr: "Boutique hôtels (10 nuits)", en: "Boutique hotels (10 nights)", es: "Hoteles boutique (10 noches)", de: "Boutique-Hotels (10 Nächte)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Vols intérieurs + privé", en: "Domestic flights + private transport", es: "Vuelos internos + transporte privado", de: "Inlands- und Privatflüge" }, amount: "500–800 €" },
            { label: { fr: "Gastronomie", en: "Fine dining", es: "Alta gastronomía", de: "Gastronomie" }, amount: "500–800 €" },
            { label: { fr: "Guides privés & extras", en: "Private guides & extras", es: "Guías privados y extras", de: "Private Reiseführer und Extras" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flights from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~12h avec escale (Air France via Miami ou Dallas)", en: "~12h with a stopover (Air France via Miami or Dallas)", es: "~12h con escala (vía Miami o Dallas)", de: "ca. 12 Std. mit Zwischenstopp (Air France über Miami oder Dallas)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa 90 jours (Français)", en: "No visa for 90 days (French citizens)", es: "Sin visado 90 días (ciudadanos UE)", de: "Visumfrei 90 Tage (Französisch)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Quetzal (1€ ≈ 8,5 GTQ) — dollars acceptés", en: "Quetzal (1€ ≈ 8.5 GTQ) — US dollars accepted", es: "Quetzal (1€ ≈ 8,5 GTQ) — se aceptan dólares", de: "Quetzal (1 € ≈ 8,5 GTQ) – Dollar akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol (officiel) + 22 langues mayas", en: "Spanish (official) + 22 Mayan languages", es: "Español (oficial) + 22 lenguas mayas", de: "Spanisch (offiziell) + 22 Maya-Sprachen" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B – 120 V (comme USA)", en: "Type A/B – 120 V (same as the USA)", es: "Tipo A/B – 120 V (como en EE. UU.)", de: "Typ A/B – 120 V (wie USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture Antigua & villes, faible Petén", en: "Good coverage in Antigua and the cities, weak in Petén", es: "Buena cobertura en Antigua y las ciudades, débil en el Petén", de: "Gute Abdeckung für Antigua und Städte, schlechtes Petén" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille ou filtrée", en: "Not drinkable — bottled or filtered water", es: "No potable — agua embotellada o filtrada", de: "Nicht trinkbares Wasser – abgefülltes oder gefiltertes Wasser" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen recommandé en zones basses (Petén)", en: "Antimalarial recommended in lowland areas (Petén)", es: "Se recomienda antipalúdico en zonas bajas (Petén)", de: "Antimalariamittel empfohlen in tiefer gelegenen Gebieten (Petén)" } },
  ],
};
