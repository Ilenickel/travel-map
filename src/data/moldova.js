export const MOLDOVA = {
  code: "MDA",
  numericId: 498,
  name: { fr: "Moldavie", en: "Moldova", es: "Moldavia", de: "Moldawien" },
  emoji: "🇲🇩",
  capital: { fr: "Chișinău", en: "Chișinău", es: "Chisináu", de: "Chișinău" },
  language: { fr: "Roumain (moldave)", en: "Romanian (Moldovan)", es: "Rumano (moldavo)", de: "Rumänisch (Moldauisch)" },
  currency: { fr: "Leu moldave (MDL)", en: "Moldovan leu (MDL)", es: "Leu moldavo (MDL)", de: "Moldauischer Leu (MDL)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 25, budgetMid: 50,
    tripMin: 550, tripMid: 1000,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 0,
  },
  description: {
    fr: "La Moldavie est l'un des pays les moins visités d'Europe, coincé entre la Roumanie et l'Ukraine, avec une identité culturelle riche mêlant influences roumaines, russes et ottomanes. C'est le paradis des amateurs de vin : le pays abrite certaines des plus grandes caves souterraines du monde. La capitale Chișinău offre un mélange étonnant d'architecture soviétique et de joie de vivre méditerranéenne.", en: "Moldova is one of the least visited countries in Europe, wedged between Romania and Ukraine, with a rich cultural identity blending Romanian, Russian and Ottoman influences. It's a paradise for wine lovers: the country is home to some of the largest underground wine cellars in the world. The capital Chișinău offers a surprising mix of Soviet architecture and Mediterranean-style joie de vivre.", es: "Moldavia es uno de los países menos visitados de Europa, encajado entre Rumanía y Ucrania, con una rica identidad cultural que mezcla influencias rumanas, rusas y otomanas. Es el paraíso de los amantes del vino: el país alberga algunas de las bodegas subterráneas más grandes del mundo. La capital, Chisináu, ofrece una sorprendente mezcla de arquitectura soviética y alegría de vivir mediterránea.", de: "Moldawien ist eines der am wenigsten besuchten Länder Europas, liegt zwischen Rumänien und der Ukraine und verfügt über eine reiche kulturelle Identität, die rumänische, russische und osmanische Einflüsse vereint. Es ist ein Paradies für Weinliebhaber: Das Land beherbergt einige der größten unterirdischen Weinkeller der Welt. Die Hauptstadt Chișinău bietet eine atemberaubende Mischung aus sowjetischer Architektur und mediterraner Lebensfreude.",
  },
  bestPeriods: [
    {
      months: { fr: "Mai – Sep", en: "May – Sep", es: "Mayo – Sept", de: "Mai – Sept" },
      label: { fr: "Été ensoleillé", en: "Sunny summer", es: "Verano soleado", de: "Sonniger Sommer" },
      color: "#22c55e",
      description: {
        fr: "Chaleur agréable, vignes en pleine croissance, festivals de vin et de culture en plein air.", en: "Pleasant warmth, vines in full growth, outdoor wine and culture festivals.", es: "Calor agradable, viñedos en pleno crecimiento, festivales de vino y cultura al aire libre.", de: "Angenehme Wärme, wachsende Weinreben, Wein- und Kulturfeste im Freien.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Oct – Nov", en: "Oct – Nov", es: "Oct – Nov", de: "Okt. – Nov" },
      label: { fr: "Vendanges", en: "Grape harvest", es: "Vendimia", de: "Ernte" },
      color: "#f59e0b",
      description: {
        fr: "Période idéale pour visiter les vignobles pendant les vendanges et profiter des couleurs automnales.", en: "Ideal time to visit the vineyards during the grape harvest and enjoy the autumn colours.", es: "Época ideal para visitar los viñedos durante la vendimia y disfrutar de los colores otoñales.", de: "Ideale Zeit, um während der Ernte die Weinberge zu besuchen und die Herbstfarben zu genießen.",
      },
      icon: "🍷",
    },
  ],
  weatherCities: [
    {
      id: "chisinau",
      name: "Chișinău",
      region: { fr: "Centre", en: "Centre", es: "Centro", de: "Center" },
      data: [
        { month: "Jan", temp: -2, rain: 40, icon: "❄️" },
        { month: "Fév", temp: -1, rain: 35, icon: "❄️" },
        { month: "Mar", temp: 5, rain: 35, icon: "❄️" },
        { month: "Avr", temp: 13, rain: 45, icon: "⛅" },
        { month: "Mai", temp: 19, rain: 55, icon: "☀️" },
        { month: "Jun", temp: 22, rain: 75, icon: "☀️" },
        { month: "Jul", temp: 24, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 55, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 45, icon: "☀️" },
        { month: "Oct", temp: 11, rain: 40, icon: "⛅" },
        { month: "Nov", temp: 4, rain: 45, icon: "❄️" },
        { month: "Déc", temp: -1, rain: 40, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Chișinău",
      region: { fr: "Centre", en: "Centre", es: "Centro", de: "Center" },
      description: {
        fr: "Chișinău est une capitale dynamique dont le centre-ville révèle de larges boulevards hérités de l'urbanisme soviétique côtoyant parcs verdoyants et cafés animés. La ville abrite d'intéressants musées consacrés à l'histoire et aux traditions moldaves. La vie nocturne et la gastronomie locale en font une étape agréable malgré une architecture parfois austère.", en: "Chișinău is a dynamic capital whose city centre reveals wide boulevards inherited from Soviet urban planning alongside green parks and lively cafés. The city is home to interesting museums devoted to Moldovan history and traditions. Its nightlife and local cuisine make it a pleasant stop despite sometimes austere architecture.", es: "Chisináu es una capital dinámica cuyo centro revela amplios bulevares heredados del urbanismo soviético junto a parques verdes y cafés animados. La ciudad alberga interesantes museos dedicados a la historia y las tradiciones moldavas. Su vida nocturna y su gastronomía local la convierten en una parada agradable a pesar de una arquitectura a veces austera.", de: "Chișinău ist eine dynamische Hauptstadt, deren Stadtzentrum breite Boulevards aus der sowjetischen Stadtplanung sowie grüne Parks und lebhafte Cafés aufweist. Die Stadt beherbergt interessante Museen, die der Geschichte und Traditionen Moldawiens gewidmet sind. Das Nachtleben und die lokale Gastronomie machen es trotz der teilweise strengen Architektur zu einem angenehmen Zwischenstopp.",
      },
      wikipedia: "Chișinău",
      tags: ["Ville", "Histoire", "Gastronomie", "Culture", "Architecture"],
      mustSee: [
        { name: { fr: "Arc de Triomphe — monument néoclassique au cœur du centre-ville", en: "Triumphal Arch — neoclassical monument at the heart of the city centre", es: "Arco del Triunfo — monumento neoclásico en el corazón del centro", de: "Arc de Triomphe – neoklassizistisches Denkmal im Herzen des Stadtzentrums" }, wikipedia: "Triumphal_Arch,_Chișinău" },
        { name: { fr: "Cathédrale de la Nativité — cathédrale orthodoxe du XIXe siècle", en: "Nativity Cathedral — 19th-century Orthodox cathedral", es: "Catedral de la Natividad — catedral ortodoxa del siglo XIX", de: "Geburtskathedrale – orthodoxe Kathedrale aus dem 19. Jahrhundert" }, wikipedia: "File:Catedral_de_la_Natividad,_Chisináu,_Moldavia,_2023-11-03,_DD_36-38_HDR.jpg" },
        { name: { fr: "Musée national d'Histoire de Moldavie — collections archéologiques et historiques", en: "National Museum of History of Moldova — archaeological and historical collections", es: "Museo Nacional de Historia de Moldavia — colecciones arqueológicas e históricas", de: "Nationales Geschichtsmuseum der Republik Moldau – archäologische und historische Sammlungen" }, wikipedia: "File:Museum of History (AP4L0086 1PS) (28922487610).jpg" },
        { name: { fr: "Marché central — marché coloré au cœur de la ville", en: "Central Market — colourful market at the heart of the city", es: "Mercado central — mercado colorido en el corazón de la ciudad", de: "Zentralmarkt – farbenfroher Markt im Herzen der Stadt" }, wikipedia: "File:Chisinau Piata Centrala.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Cricova et Mileștii Mici", en: "Cricova and Mileștii Mici", es: "Cricova y Mileștii Mici", de: "Cricova und Mileștii Mici" },
      region: { fr: "Près de Chișinău", en: "Near Chișinău", es: "Cerca de Chisináu", de: "In der Nähe von Chișinău" },
      description: {
        fr: "Cricova et Mileștii Mici abritent deux des caves viticoles souterraines les plus vastes du monde, dont les galeries s'étendent sur des dizaines de kilomètres sous la terre moldave. Mileștii Mici détient le record Guinness de la plus grande collection de vins au monde avec plus de 1,5 million de bouteilles. Les visites en voiture ou à vélo dans ces catacombes viticoles sont une expérience unique.", en: "Cricova and Mileștii Mici are home to two of the largest underground wine cellars in the world, their galleries stretching for dozens of kilometres beneath Moldovan soil. Mileștii Mici holds the Guinness World Record for the largest wine collection in the world, with over 1.5 million bottles. Touring these wine catacombs by car or bicycle is a unique experience.", es: "Cricova y Mileștii Mici albergan dos de las bodegas subterráneas más grandes del mundo, cuyas galerías se extienden a lo largo de decenas de kilómetros bajo el suelo moldavo. Mileștii Mici ostenta el récord Guinness a la mayor colección de vinos del mundo, con más de 1,5 millones de botellas. Recorrer estas catacumbas vinícolas en coche o en bicicleta es una experiencia única.", de: "In Cricova und Mileștii Mici befinden sich zwei der größten unterirdischen Weinkeller der Welt, deren Galerien sich Dutzende Kilometer unter dem Boden Moldawiens erstrecken. Mileștii Mici hält mit über 1,5 Millionen Flaschen den Guinness-Rekord für die größte Weinsammlung der Welt. Touren mit dem Auto oder Fahrrad in diese Weinkatakomben sind ein einzigartiges Erlebnis.",
      },
      wikipedia: "File:Vinoteca Naţională a Combinatului de vinuri Cricova S.A.jpg",
      tags: ["Gastronomie"],
      mustSee: [
        { name: { fr: "Caves de Cricova — 120 km de galeries souterraines à 80 m de profondeur", en: "Cricova Cellars — 120 km of underground galleries at 80 m depth", es: "Bodegas de Cricova — 120 km de galerías subterráneas a 80 m de profundidad", de: "Cricova-Höhlen – 120 km unterirdische Galerien mit einer Tiefe von 80 m" }, wikipedia: "File:Vinoteca Naţională a Combinatului de vinuri Cricova S.A.jpg" },
        { name: { fr: "Mileștii Mici — record mondial de la plus grande cave à vin", en: "Mileștii Mici — world record for the largest wine cellar", es: "Mileștii Mici — récord mundial de la bodega más grande", de: "Mileștii Mici – Weltrekord für den größten Weinkeller" }, wikipedia: "Mileștii_Mici" },
        { name: { fr: "Route des vins — vignobles du centre et du sud du pays", en: "Wine Route — vineyards of central and southern Moldova", es: "Ruta del vino — viñedos del centro y sur del país", de: "Weinstraße – Weinberge im Zentrum und Süden des Landes" }, wikipedia: "Moldovan_wine" },
      ],
    },
    {
      id: 3,
      name: "Orheiul Vechi",
      region: { fr: "Orhei", en: "Orhei", es: "Orhei", de: "Orhei" },
      description: {
        fr: "Orheiul Vechi est un complexe archéologique et naturel exceptionnel où un monastère rupestre du XIIIe siècle est creusé dans les falaises calcaires surplombant la rivière Răut. Le site mêle vestiges daces, gètes, mongols et moldaves dans un paysage sauvage et préservé. C'est l'un des sites les plus pittoresques et authentiques de Moldavie.", en: "Orheiul Vechi is an exceptional archaeological and natural complex where a 13th-century cave monastery is carved into the limestone cliffs overlooking the Răut River. The site blends Dacian, Getic, Mongol and Moldovan remains within a wild, preserved landscape. It is one of the most picturesque and authentic sites in Moldova.", es: "Orheiul Vechi es un complejo arqueológico y natural excepcional donde un monasterio rupestre del siglo XIII está excavado en los acantilados calizos que dominan el río Răut. El sitio combina restos dacios, getas, mongoles y moldavos en un paisaje salvaje y preservado. Es uno de los enclaves más pintorescos y auténticos de Moldavia.", de: "Orheiul Vechi ist ein außergewöhnlicher archäologischer und natürlicher Komplex, in dem ein Felsenkloster aus dem 13. Jahrhundert in die Kalksteinfelsen mit Blick auf den Fluss Răut gehauen ist. Die Stätte vereint dakische, getäische, mongolische und moldauische Überreste in einer wilden und geschützten Landschaft. Es ist einer der malerischsten und authentischsten Orte in Moldawien.",
      },
      wikipedia: "File:Cetățuia „Orheiul Vechi”.jpg",
      tags: ["Spiritualité", "Histoire", "Nature", "UNESCO"],
      mustSee: [
        { name: { fr: "Monastère rupestre — église creusée dans la falaise calcaire", en: "Cave Monastery — church carved into the limestone cliff", es: "Monasterio rupestre — iglesia excavada en el acantilado calizo", de: "Rupestrian-Kloster – in den Kalksteinfelsen gehauene Kirche" }, wikipedia: "File:Orhei Vechi 03.JPG" },
        { name: { fr: "Musée d'histoire et d'ethnographie d'Orhei", en: "Orhei Museum of History and Ethnography", es: "Museo de historia y etnografía de Orhei", de: "Orhei-Museum für Geschichte und Ethnographie" }, wikipedia: "File:Оргеев,_памятник_Василию_Лупу_Monumentul_lui_Vasile_Lupu_din_Orhei_Vasile_Lupu_monument_in_Orhei_(45922280011).jpg" },
        { name: { fr: "Méandre de la Răut — panorama sur la boucle de la rivière", en: "Bend of the Răut — panorama over the river's loop", es: "Meandro del Răut — panorámica sobre el bucle del río", de: "Mäander der Răut – Panorama der Flussschleife" }, wikipedia: "File:Orheiul Vechi - Moldova (by David Stanley).jpg" },
        { name: { fr: "Village de Butuceni — village authentique au bord des falaises", en: "Butuceni Village — authentic village on the edge of the cliffs", es: "Pueblo de Butuceni — pueblo auténtico al borde de los acantilados", de: "Dorf Butuceni – authentisches Dorf am Rande der Klippen" }, wikipedia: "File:Wikimeetup in April in Moldova 18.JPG" },
      ],
    },
    {
      id: 4,
      name: { fr: "Transnistrie", en: "Transnistria", es: "Transnistria", de: "Transnistrien" },
      region: { fr: "Est du pays", en: "Eastern Moldova", es: "Este del país", de: "Osten des Landes" },
      description: {
        fr: "La Transnistrie est une république autoproclamée non reconnue internationalement, coincée entre la Moldavie et l'Ukraine, qui a préservé une atmosphère soviétique unique avec ses monuments à Lénine et son administration indépendante. L'entrée est possible avec un passeport européen, mais la situation reste complexe sur le plan juridique et politique. Cette enclave fascine les voyageurs en quête d'expériences hors des sentiers battus.", en: "Transnistria is a self-proclaimed republic with no international recognition, wedged between Moldova and Ukraine, which has preserved a unique Soviet atmosphere with its Lenin monuments and independent administration. Entry is possible with a European passport, but the legal and political situation remains complex. This enclave fascinates travellers seeking off-the-beaten-path experiences.", es: "Transnistria es una república autoproclamada sin reconocimiento internacional, encajada entre Moldavia y Ucrania, que ha preservado una atmósfera soviética única con sus monumentos a Lenin y su administración independiente. La entrada es posible con pasaporte europeo, pero la situación sigue siendo compleja en el plano jurídico y político. Este enclave fascina a los viajeros en busca de experiencias fuera de lo común.", de: "Transnistrien ist eine international nicht anerkannte, selbsternannte Republik zwischen Moldawien und der Ukraine, die mit ihren Denkmälern für Lenin und ihrer unabhängigen Verwaltung eine einzigartige sowjetische Atmosphäre bewahrt hat. Die Einreise ist zwar mit einem europäischen Pass möglich, allerdings bleibt die Situation rechtlich und politisch komplex. Diese Enklave fasziniert Reisende, die Erlebnisse abseits der ausgetretenen Pfade suchen.",
      },
      wikipedia: "File:Transnistria entrance in Hrustovaia.jpg",
      tags: ["Histoire", "Aventure"],
      mustSee: [
        { name: { fr: "Tiraspol — capitale autoproclamée de la Transnistrie", en: "Tiraspol — self-proclaimed capital of Transnistria", es: "Tiraspol — capital autoproclamada de Transnistria", de: "Tiraspol – selbsternannte Hauptstadt Transnistriens" }, wikipedia: "Tiraspol" },
        { name: { fr: "Forteresse de Tighina (Bender) — forteresse ottomane sur le Dniestr", en: "Tighina (Bender) Fortress — Ottoman fortress on the Dniester", es: "Fortaleza de Tighina (Bender) — fortaleza otomana en el Dniéster", de: "Festung Tighina (Bender) – osmanische Festung am Dnjestr" }, wikipedia: "Tighina_Fortress" },
        { name: { fr: "Monuments soviétiques de Tiraspol — chars T-34 et statues de Lénine", en: "Soviet monuments of Tiraspol — T-34 tanks and Lenin statues", es: "Monumentos soviéticos de Tiraspol — tanques T-34 y estatuas de Lenin", de: "Sowjetische Denkmäler in Tiraspol – T-34-Panzer und Lenin-Statuen" }, wikipedia: "Tiraspol" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "La Moldavie est l'un des pays les moins chers d'Europe, avec un coût de la vie très accessible pour les voyageurs occidentaux. Le vin local de qualité est disponible à des prix dérisoires.", en: "Moldova is one of the cheapest countries in Europe, with a cost of living that's very accessible for Western travellers. Good-quality local wine is available at bargain prices.", es: "Moldavia es uno de los países más baratos de Europa, con un coste de vida muy accesible para los viajeros occidentales. El vino local de calidad está disponible a precios irrisorios.", de: "Moldawien ist eines der günstigsten Länder Europas und bietet für westliche Reisende sehr erschwingliche Lebenshaltungskosten. Hochwertiger lokaler Wein ist zu günstigen Preisen erhältlich.",
    },
    currency: "MDL",
    exchangeRate: "1€ ≈ 19 MDL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir hostel", en: "Hostel dorm", es: "Dormitorio en hostel", de: "Schlafsaal im Hostel" }, price: "6–10 €" },
          { label: { fr: "Chambre hôtel 2–3★", en: "2–3★ hotel room", es: "Habitación de hotel 2–3★", de: "Hotelzimmer 2–3★" }, price: "20–40 €" },
          { label: { fr: "Appartement Airbnb", en: "Airbnb apartment", es: "Apartamento Airbnb", de: "Airbnb-Wohnung" }, price: "25–50 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Plat local (mămăligă, plăcinte)", en: "Local dish (mămăligă, plăcinte)", es: "Plato local (mămăligă, plăcinte)", de: "Lokales Gericht (mămăligă, plăcinte)" }, price: "3–6 €" },
          { label: { fr: "Repas restaurant midi", en: "Lunch at a restaurant", es: "Comida en restaurante al mediodía", de: "Mittagsessen im Restaurant" }, price: "5–10 €" },
          { label: { fr: "Bouteille de vin local", en: "Bottle of local wine", es: "Botella de vino local", de: "Flasche Wein aus der Region" }, price: "3–8 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus/minibus urbain", en: "Urban bus/minibus", es: "Autobús/minibús urbano", de: "Stadtbus/Kleinbus" }, price: "0,20 €" },
          { label: { fr: "Taxi urbain (5 km)", en: "Urban taxi (5 km)", es: "Taxi urbano (5 km)", de: "Stadttaxi (5 km)" }, price: "2–4 €" },
          { label: { fr: "Bus Chișinău–Orhei", en: "Bus Chișinău–Orhei", es: "Autobús Chisináu–Orhei", de: "Bus Chișinău–Orhei" }, price: "2–4 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite caves Cricova", en: "Cricova cellars visit", es: "Visita a las bodegas de Cricova", de: "Besuch der Cricova-Keller" }, price: "15–30 €" },
          { label: { fr: "Dégustation cave Mileștii Mici", en: "Mileștii Mici cellar tasting", es: "Cata en la bodega de Mileștii Mici", de: "Weinprobe von Mileștii Mici" }, price: "10–20 €" },
          { label: { fr: "Musée national", en: "National museum", es: "Museo nacional", de: "Nationalmuseum" }, price: "2–5 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "20–35 €/j",
        desc: { fr: "Hostel, repas locaux, transports en commun, quelques dégustations de vin.", en: "Hostel, local meals, public transport, a few wine tastings.", es: "Hostel, comidas locales, transporte público, algunas catas de vino.", de: "Herberge, lokale Mahlzeiten, öffentliche Verkehrsmittel, einige Weinproben." },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "45–75 €/j",
        desc: { fr: "Hôtel 3★, restaurants corrects, visites caves premium.", en: "3★ hotel, decent restaurants, premium cellar tours.", es: "Hotel 3★, restaurantes correctos, visitas premium a bodegas.", de: "3★ Hotel, gute Restaurants, erstklassige Weinkellerbesuche." },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días", de: "7 Tage" },
      route: { fr: "Chișinău → Cricova/Mileștii Mici → Orheiul Vechi → Transnistrie", en: "Chișinău → Cricova/Mileștii Mici → Orheiul Vechi → Transnistria", es: "Chisináu → Cricova/Mileștii Mici → Orheiul Vechi → Transnistria", de: "Chișinău → Cricova/Mileștii Mici → Orheiul Vechi → Transnistrien" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "400 – 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Chișinău", en: "Return flight Paris–Chișinău", es: "Vuelo ida y vuelta Madrid–Chisináu", de: "Hin- und Rückflug Paris–Chișinău" }, amount: "150–250 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "50–80 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "30–50 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "80–120 €" },
            { label: { fr: "Activités + caves", en: "Activities + cellars", es: "Actividades + bodegas", de: "Aktivitäten + Keller" }, amount: "40–70 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "700 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Chișinău", en: "Return flight Paris–Chișinău", es: "Vuelo ida y vuelta Madrid–Chisináu", de: "Hin- und Rückflug Paris–Chișinău" }, amount: "200–350 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)", es: "Alojamiento (6 noches)", de: "Unterkunft (6 Nächte)" }, amount: "180–280 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "50–80 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "120–180 €" },
            { label: { fr: "Activités + caves premium", en: "Activities + premium cellars", es: "Actividades + bodegas premium", de: "Aktivitäten + Premium-Keller" }, amount: "80–120 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "Vols directs ou avec escale vers Chișinău, 3h–5h selon la compagnie. Air Moldova et Wizz Air desservent la capitale.", en: "Direct or connecting flights to Chișinău, 3–5h depending on the airline. Air Moldova and Wizz Air serve the capital.", es: "Vuelos directos o con escala hacia Chisináu, 3–5h según la aerolínea. Air Moldova y Wizz Air conectan con la capital.", de: "Direkt- oder Zwischenflüge nach Chișinău, 3–5 Stunden, je nach Fluggesellschaft. Air Moldova und Wizz Air fliegen die Hauptstadt an." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa pour les citoyens UE jusqu'à 90 jours. Candidature en cours pour rejoindre l'UE.", en: "No visa required for EU citizens for stays up to 90 days. Moldova is currently an EU candidate country.", es: "Sin visado para ciudadanos de la UE hasta 90 días. Candidatura en curso para adherirse a la UE.", de: "Kein Visum für EU-Bürger für bis zu 90 Tage. Antrag auf Beitritt zur EU läuft." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Leu moldave (MDL). Euros et dollars échangeables dans les bureaux de change. CB acceptée dans les grandes villes.", en: "Moldovan leu (MDL). Euros and dollars can be exchanged at currency offices. Cards accepted in major cities.", es: "Leu moldavo (MDL). Euros y dólares se pueden cambiar en las casas de cambio. Tarjeta aceptada en las grandes ciudades.", de: "Moldauischer Leu (MDL). Euro und Dollar können in Wechselstuben umgetauscht werden. Kreditkarten werden in Großstädten akzeptiert." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Roumain (officiel). Le russe est largement compris. Peu d'anglais en dehors des hôtels et restaurants touristiques.", en: "Romanian (official). Russian is widely understood. Little English spoken outside tourist hotels and restaurants.", es: "Rumano (oficial). El ruso se entiende ampliamente. Poco inglés fuera de hoteles y restaurantes turísticos.", de: "Rumänisch (offiziell). Russisch wird allgemein verstanden. Wenig Englisch außerhalb der Touristenhotels und Restaurants." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F, 230V. Même standard qu'en Europe occidentale.", en: "Type C/F, 230V. Same standard as Western Europe.", es: "Tipo C/F, 230V. Mismo estándar que en Europa occidental.", de: "Typ C/F, 230V. Gleicher Standard wie in Westeuropa." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de vaccins obligatoires. Médicaments de base disponibles en pharmacie. Assurance voyage recommandée.", en: "No mandatory vaccines. Basic medication available at pharmacies. Travel insurance recommended.", es: "Ninguna vacuna obligatoria. Medicamentos básicos disponibles en farmacia. Se recomienda seguro de viaje.", de: "Keine Impfpflicht. Grundmedikamente in Apotheken erhältlich. Reiseversicherung empfohlen." } },
    { icon: "🍷", label: { fr: "Vin", en: "Wine", es: "Vino", de: "Wein" }, value: { fr: "La Moldavie est l'un des plus grands producteurs de vin d'Europe. Les vins locaux (Fetească, Rară Neagră) sont d'excellent rapport qualité-prix.", en: "Moldova is one of Europe's largest wine producers. Local wines (Fetească, Rară Neagră) offer excellent value for money.", es: "Moldavia es uno de los mayores productores de vino de Europa. Los vinos locales (Fetească, Rară Neagră) tienen una excelente relación calidad-precio.", de: "Moldawien ist einer der größten Weinproduzenten in Europa. Die lokalen Weine (Fetească, Rară Neagră) bieten ein hervorragendes Preis-Leistungs-Verhältnis." } },
    { icon: "🚌", label: { fr: "Transnistrie", en: "Transnistria", es: "Transnistria", de: "Transnistrien" }, value: { fr: "Entrée possible avec passeport européen. Déclarez votre arrivée au poste frontière. Monnaie locale : le rouble transnistrien (non convertible à l'étranger).", en: "Entry possible with a European passport, but declare your arrival at the border checkpoint. Local currency: the Transnistrian rouble (not convertible abroad).", es: "Entrada posible con pasaporte europeo. Declarar la llegada en el puesto fronterizo. Moneda local: el rublo transnistrio (no convertible en el extranjero).", de: "Einreise mit europäischem Reisepass möglich. Melden Sie Ihre Ankunft am Grenzposten. Landeswährung: der transnistrische Rubel (im Ausland nicht konvertierbar)." } },
  ],
};
