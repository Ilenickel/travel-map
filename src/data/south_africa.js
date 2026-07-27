export const SOUTH_AFRICA = {
  code: "ZAF",
  numericId: 710,
  name: { fr: "Afrique du Sud", en: "South Africa", es: "Sudáfrica", de: "Südafrika" },
  emoji: "🇿🇦",
  capital: { fr: "Pretoria", en: "Pretoria", es: "Pretoria", de: "Pretoria" },
  language: { fr: "Afrikaans, Anglais (+ 9 langues)", en: "Afrikaans, English (+ 9 languages)", es: "Afrikáans, inglés (+ 9 lenguas)", de: "Afrikaans, Englisch (+ 9 Sprachen)" },
  currency: { fr: "Rand (ZAR)", en: "Rand (ZAR)", es: "Rand (ZAR)", de: "Rand (ZAR)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 45, budgetMid: 100,
    tripMin: 2000, tripMid: 4000,
  },
  criteria: {
    unesco: 3,
    nature: 3,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 2,
    safari: 3,
    ski: 2,
    ville: 2,
    plage: 3,
  },
  description: {
    fr: "L'Afrique du Sud est la destination africaine la plus complète : safaris dans le Kruger (Big Five), Cap de Bonne Espérance sauvage, vignobles de Stellenbosch, Garden Route spectaculaire et les plages de la côte du KwaZulu-Natal. Le tout avec une infrastructure touristique parmi les meilleures du continent.", en: "South Africa is the most complete African destination: safaris in Kruger (Big Five), the wild Cape of Good Hope, Stellenbosch vineyards, the spectacular Garden Route and the beaches of the KwaZulu-Natal coast. All with some of the best tourism infrastructure on the continent.", es: "Sudáfrica es el destino africano más completo: safaris en el Kruger (Big Five), el salvaje Cabo de Buena Esperanza, viñedos de Stellenbosch, la espectacular Garden Route y las playas de la costa de KwaZulu-Natal. Todo con una infraestructura turística entre las mejores del continente.", de: "Südafrika ist das umfassendste afrikanische Reiseziel: Safaris im Kruger (Big Five), das wilde Kap der Guten Hoffnung, die Weinberge von Stellenbosch, die spektakuläre Garden Route und die Strände der Küste von KwaZulu-Natal. Und das alles mit einer touristischen Infrastruktur, die zu den besten des Kontinents zählt.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Saison sèche & Safari", en: "Dry season & Safari", es: "Estación seca y safari", de: "Trockenzeit und Safari" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour les safaris (végétation rase, animaux visibles autour des points d'eau). Hiver austral doux dans le Kruger (15–25 °C).", en: "Best time for safaris (short vegetation, animals visible around waterholes). Mild southern winter in Kruger (15–25 °C).", es: "Mejor época para los safaris (vegetación baja, animales visibles alrededor de los abrevaderos). Invierno austral suave en el Kruger (15–25 °C).", de: "Beste Zeit für Safaris (klare Vegetation, Tiere rund um Wasserstellen sichtbar). Milder südlicher Winter im Kruger (15–25 °C).",
      },
      icon: "🦁",
    },
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Été & Cape Town", en: "Summer & Cape Town", es: "Verano y Ciudad del Cabo", de: "Sommer & Kapstadt" },
      color: "#fb923c",
      description: {
        fr: "Cape Town au mieux de sa forme : soleil, mer turquoise, vignobles en fleurs. Plus pluvieux dans le Kruger (herbe haute, difficile pour les safaris).", en: "Cape Town at its best: sunshine, turquoise sea, blooming vineyards. Rainier in Kruger (tall grass, harder for safaris).", es: "Ciudad del Cabo en su mejor momento: sol, mar turquesa, viñedos en flor. Más lluvioso en el Kruger (hierba alta, más difícil para los safaris).", de: "Kapstadt von seiner schönsten Seite: Sonne, türkisfarbenes Meer, blühende Weinberge. Regnerischer im Krüger (hohes Gras, schwierig für Safaris).",
      },
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "cape_town",
      name: "Le Cap",
      region: { fr: "Western Cape", en: "Western Cape", es: "Western Cape", de: "Westkap" },
      data: [
        { month: "Jan", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 20, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 17, rain: 70,  icon: "☀️" },
        { month: "Jun", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 13, rain: 100, icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 85,  icon: "⛅" },
        { month: "Sep", temp: 16, rain: 50,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Déc", temp: 24, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "kruger",
      name: "Kruger (Phalaborwa)",
      region: { fr: "Limpopo / Mpumalanga", en: "Limpopo / Mpumalanga", es: "Limpopo / Mpumalanga", de: "Limpopo / Mpumalanga" },
      data: [
        { month: "Jan", temp: 27, rain: 105, icon: "🌧️" },
        { month: "Fév", temp: 26, rain: 95,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 80,  icon: "☀️" },
        { month: "Avr", temp: 22, rain: 45,  icon: "☀️" },
        { month: "Mai", temp: 18, rain: 12,  icon: "☀️" },
        { month: "Jun", temp: 15, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 15, rain: 4,   icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Nov", temp: 26, rain: 95,  icon: "☀️" },
        { month: "Déc", temp: 26, rain: 120, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Kruger National Park",
      region: { fr: "Limpopo / Mpumalanga", en: "Limpopo / Mpumalanga", es: "Limpopo / Mpumalanga", de: "Limpopo / Mpumalanga" },
      description: {
        fr: "L'un des plus grands parcs africains (20 000 km²), où vivent les Big Five en liberté : lion, léopard, éléphant, rhinocéros, buffle. Les safaris en 4x4 guidés ou en autonomie depuis les camps officiels sont une expérience inoubliable.", en: "One of the largest parks in Africa (20,000 km²), home to the wild Big Five: lion, leopard, elephant, rhino, buffalo. Guided 4x4 safaris or self-drive from official camps are an unforgettable experience.", es: "Uno de los parques más grandes de África (20.000 km²), donde viven en libertad los Big Five: león, leopardo, elefante, rinoceronte, búfalo. Los safaris en 4x4 guiados o por libre desde los campamentos oficiales son una experiencia inolvidable.", de: "Einer der größten afrikanischen Parks (20.000 km²), in dem die Big Five in Freiheit leben: Löwe, Leopard, Elefant, Nashorn, Büffel. Geführte oder unabhängige 4x4-Safaris von offiziellen Camps aus sind ein unvergessliches Erlebnis.",
      },
      wikipedia: "Kruger_National_Park",
      tags: ["Safari", "Nature", "Histoire"],
      mustSee: [
        { name: { fr: "Lion & Léopard — Big Five", en: "Lion & Leopard — Big Five", es: "León y leopardo — Big Five", de: "Löwe und Leopard – Big Five" }, wikipedia: "File:Big Five Game.jpg" },
        { name: { fr: "Rhinocéros blanc & noir", en: "White & black rhinoceros", es: "Rinoceronte blanco y negro", de: "Breitmaul- und Spitzmaulnashorn" }, wikipedia: "White_rhinoceros" },
        { name: { fr: "Camp de Satara — zone aux lions", en: "Satara Camp — lion territory", es: "Campamento de Satara — territorio de leones", de: "Satara-Lager – Löwenzone" }, wikipedia: "Kruger_National_Park" },
        { name: { fr: "Blyde River Canyon — panorama", en: "Blyde River Canyon — panorama", es: "Cañón del río Blyde — panorámica", de: "Blyde River Canyon – Panorama" }, wikipedia: "Blyde_River_Canyon" },
      ],
    },
    {
      id: 2,
      name: { fr: "Le Cap & Péninsule du Cap", en: "Cape Town & the Cape Peninsula", es: "Ciudad del Cabo y la península del Cabo", de: "Kapstadt und Kaphalbinsel" },
      region: { fr: "Western Cape", en: "Western Cape", es: "Western Cape", de: "Westkap" },
      description: {
        fr: "Cape Town, régulièrement élue plus belle ville du monde, est dominée par la Table Mountain. La péninsule du Cap offre des plages sauvages, des pingouins africains et le célèbre Cap de Bonne Espérance.", en: "Cape Town, regularly voted the most beautiful city in the world, is dominated by Table Mountain. The Cape Peninsula offers wild beaches, African penguins and the famous Cape of Good Hope.", es: "Ciudad del Cabo, votada regularmente como la ciudad más bella del mundo, está dominada por la Table Mountain. La península del Cabo ofrece playas salvajes, pingüinos africanos y el famoso Cabo de Buena Esperanza.", de: "Kapstadt, regelmäßig zur schönsten Stadt der Welt gewählt, wird vom Tafelberg dominiert. Die Kaphalbinsel bietet wilde Strände, afrikanische Pinguine und das berühmte Kap der Guten Hoffnung.",
      },
      wikipedia: "Cape_Town",
      tags: ["Ville", "Plage", "Nature", "Gastronomie", "Histoire"],
      mustSee: [
        { name: { fr: "Table Mountain — téléphérique ou trek", en: "Table Mountain — cable car or hike", es: "Table Mountain — teleférico o ruta a pie", de: "Tafelberg – Seilbahn oder Wanderung" }, wikipedia: "Table_Mountain" },
        { name: { fr: "Cap de Bonne Espérance", en: "Cape of Good Hope", es: "Cabo de Buena Esperanza", de: "Kap der Guten Hoffnung" }, wikipedia: "Cape_of_Good_Hope" },
        { name: { fr: "Pingouins africains de Boulders Beach", en: "African penguins at Boulders Beach", es: "Pingüinos africanos de Boulders Beach", de: "Afrikanische Pinguine von Boulders Beach" }, wikipedia: "Boulders_Beach" },
        { name: { fr: "Robben Island — prison de Mandela", en: "Robben Island — Mandela's prison", es: "Robben Island — prisión de Mandela", de: "Robben Island – Mandela-Gefängnis" }, wikipedia: "Robben_Island" },
      ],
    },
    {
      id: 3,
      name: { fr: "Cape Winelands — Stellenbosch & Franschhoek", en: "Cape Winelands — Stellenbosch & Franschhoek", es: "Cape Winelands — Stellenbosch y Franschhoek", de: "Cape Winelands – Stellenbosch und Franschhoek" },
      region: { fr: "Western Cape", en: "Western Cape", es: "Western Cape", de: "Westkap" },
      description: {
        fr: "À 45 km du Cap, les vallées de Stellenbosch et Franschhoek produisent certains des meilleurs vins de l'hémisphère Sud : pinotage, chenin blanc, cab-sauvignon. Villages aux maisons Cap Dutch et restaurants gastronomiques.", en: "45 km from Cape Town, the Stellenbosch and Franschhoek valleys produce some of the best wines in the Southern Hemisphere: pinotage, chenin blanc, cabernet sauvignon. Villages with Cape Dutch houses and fine dining restaurants.", es: "A 45 km de Ciudad del Cabo, los valles de Stellenbosch y Franschhoek producen algunos de los mejores vinos del hemisferio sur: pinotage, chenin blanc, cabernet sauvignon. Pueblos con casas Cape Dutch y restaurantes gastronómicos.", de: "45 km von Kapstadt entfernt produzieren die Täler Stellenbosch und Franschhoek einige der besten Weine der südlichen Hemisphäre: Pinotage, Chenin Blanc, Cab Sauvignon. Dörfer mit Cap-Dutch-Häusern und Gourmet-Restaurants.",
      },
      wikipedia: "Stellenbosch",
      tags: ["Gastronomie", "Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Vignobles de Franschhoek", en: "Franschhoek vineyards", es: "Viñedos de Franschhoek", de: "Franschhoek Weinberge" }, wikipedia: "Franschhoek" },
        { name: { fr: "Dégustation à Stellenbosch", en: "Wine tasting in Stellenbosch", es: "Cata de vinos en Stellenbosch", de: "Verkostung in Stellenbosch" }, wikipedia: "Stellenbosch" },
        { name: { fr: "Boschendal — pique-nique en vigne", en: "Boschendal — picnic among the vines", es: "Boschendal — pícnic entre viñedos", de: "Boschendal – Picknick im Weinberg" }, wikipedia: "Boschendal" },
      ],
    },
    {
      id: 4,
      name: "Garden Route",
      region: { fr: "Western Cape / Eastern Cape", en: "Western Cape / Eastern Cape", es: "Western Cape / Eastern Cape", de: "Westkap / Ostkap" },
      description: {
        fr: "La Garden Route est l'une des routes côtières les plus spectaculaires au monde : Knysna Lagoon turquoise, Tsitsikamma avec ses forêts millénaires et ses activités de plein air, et les plages sauvages d'Hermanus (baleines en sept.–nov.).", en: "The Garden Route is one of the most spectacular coastal roads in the world: the turquoise Knysna Lagoon, Tsitsikamma with its ancient forests and outdoor activities, and the wild beaches of Hermanus (whales Sep–Nov).", es: "La Garden Route es una de las carreteras costeras más espectaculares del mundo: la laguna turquesa de Knysna, Tsitsikamma con sus bosques milenarios y sus actividades al aire libre, y las playas salvajes de Hermanus (ballenas de sept. a nov.).", de: "Die Garden Route ist eine der spektakulärsten Küstenrouten der Welt: die türkisfarbene Lagune von Knysna, Tsitsikamma mit seinen alten Wäldern und Outdoor-Aktivitäten sowie die wilden Strände von Hermanus (Wale im September und November).",
      },
      wikipedia: "File:Garden_Route,_Eastern_Cape,_South_Africa_(20485656206).jpg",
      tags: ["Nature", "Plage", "Aventure"],
      mustSee: [
        { name: { fr: "Knysna — lagon & forêts", en: "Knysna — lagoon & forests", es: "Knysna — laguna y bosques", de: "Knysna – Lagune und Wälder" }, wikipedia: "Knysna" },
        { name: { fr: "Tsitsikamma — pont de singe & kayak", en: "Tsitsikamma — monkey bridge & kayaking", es: "Tsitsikamma — puente colgante y kayak", de: "Tsitsikamma – Hängebrücke und Kajak" }, wikipedia: "Tsitsikamma_National_Park" },
        { name: { fr: "Hermanus — observation des baleines", en: "Hermanus — whale watching", es: "Hermanus — observación de ballenas", de: "Hermanus – Walbeobachtung" }, wikipedia: "Hermanus" },
        { name: { fr: "Oudtshoorn — autruches & cango caves", en: "Oudtshoorn — ostriches & Cango Caves", es: "Oudtshoorn — avestruces y cuevas de Cango", de: "Oudtshoorn – Strauße und Cango-Höhlen" }, wikipedia: "Oudtshoorn" },
      ],
    },
    {
      id: 5,
      name: "Drakensberg",
      region: { fr: "KwaZulu-Natal", en: "KwaZulu-Natal", es: "KwaZulu-Natal", de: "KwaZulu-Natal" },
      description: {
        fr: "Le « Dragon's Mountain » est le massif le plus spectaculaire d'Afrique australe, avec des falaises vertigineuses de 3 000 m, des peintures rupestres des San (Bushmen) et des randonnées exceptionnelles.", en: "The 'Dragon's Mountain' is the most spectacular range in southern Africa, with dizzying 3,000m cliffs, San (Bushmen) rock paintings and exceptional hiking.", es: "La «Montaña del Dragón» es el macizo más espectacular del África austral, con acantilados vertiginosos de 3.000 m, pinturas rupestres de los san (bosquimanos) y rutas de senderismo excepcionales.", de: "„Dragon's Mountain“ ist das spektakulärste Massiv im südlichen Afrika mit schwindelerregenden 3.000 m hohen Klippen, San-Felsmalereien (Buschmännern) und außergewöhnlichen Wanderungen.",
      },
      wikipedia: "Drakensberg",
      tags: ["Randonnée", "Nature", "Histoire", "UNESCO"],
      mustSee: [
        { name: { fr: "Amphithéâtre — falaise de 5 km", en: "Amphitheatre — 5 km cliff", es: "Anfiteatro — acantilado de 5 km", de: "Amphitheater – 5 km lange Klippe" }, wikipedia: "Amphitheatre_(Drakensberg)" },
        { name: "Cathkin Peak", wikipedia: "Drakensberg" },
        { name: { fr: "Tugela Falls — 2e chute du monde", en: "Tugela Falls — 2nd highest waterfall in the world", es: "Cataratas Tugela — 2.ª cascada más alta del mundo", de: "Tugela Falls – 2. Wasserfall der Welt" }, wikipedia: "Tugela_Falls" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Afrique du Sud offre un excellent rapport qualité-prix, surtout pour les Européens (rand faible). Les lodges de safari haut de gamme restent chers mais abordables vs. autres destinations africaines.", en: "South Africa offers excellent value for money, especially for Europeans (weak rand). High-end safari lodges remain pricey but affordable compared to other African destinations.", es: "Sudáfrica ofrece una excelente relación calidad-precio, especialmente para los europeos (rand débil). Los lodges de safari de gama alta siguen siendo caros pero asequibles frente a otros destinos africanos.", de: "Südafrika bietet vor allem für Europäer ein hervorragendes Preis-Leistungs-Verhältnis (niedriger Rand). High-End-Safari-Lodges bleiben teuer, aber im Vergleich zu anderen afrikanischen Reisezielen erschwinglich.",
    },
    currency: "ZAR",
    exchangeRate: "1€ ≈ 20 ZAR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / B&B", en: "Guesthouse / B&B", es: "Guesthouse / B&B", de: "Gästehaus / B&B" }, price: "25–50 €", detail: { fr: "Très bon rapport qualité-prix", en: "Very good value for money", es: "Muy buena relación calidad-precio", de: "Sehr gutes Preis-Leistungs-Verhältnis" } },
          { label: { fr: "Hôtel 4★ Cape Town", en: "4★ hotel in Cape Town", es: "Hotel 4★ en Ciudad del Cabo", de: "4★ Kapstadt Hotel" }, price: "80–150 €", detail: { fr: "Standard ville", en: "City standard", es: "Estándar urbano", de: "Stadtstandard" } },
          { label: { fr: "Safari Lodge (Kruger)", en: "Safari lodge (Kruger)", es: "Lodge de safari (Kruger)", de: "Safari Lodge (Krüger)" }, price: "200–800 €", detail: { fr: "All-inclusive avec safaris", en: "All-inclusive with safaris", es: "Todo incluido con safaris", de: "All-Inclusive mit Safaris" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Braai (BBQ) & bunny chow", en: "Braai (BBQ) & bunny chow", es: "Braai (BBQ) y bunny chow", de: "Braai (BBQ) und Hasenfutter" }, price: "4–8 €", detail: { fr: "Plats nationaux délicieux", en: "Delicious national dishes", es: "Deliciosos platos nacionales", de: "Köstliche Nationalgerichte" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelklasserestaurant" }, price: "12–25 €", detail: { fr: "Très abordable vs. Europe", en: "Very affordable vs. Europe", es: "Muy asequible frente a Europa", de: "Sehr erschwinglich im Vergleich zu Europa" } },
          { label: { fr: "Gastronomie Cape Town", en: "Fine dining in Cape Town", es: "Alta cocina en Ciudad del Cabo", de: "Gastronomie Kapstadt" }, price: "35–70 €", detail: { fr: "Certains des meilleurs au monde", en: "Some of the best in the world", es: "Entre los mejores del mundo", de: "Einige der besten der Welt" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Location voiture / jour", en: "Car rental / day", es: "Alquiler de coche / día", de: "Autovermietung / Tag" }, price: "25–50 €", detail: { fr: "Indispensable (conduite à gauche)", en: "Essential (drives on the left)", es: "Indispensable (conducción por la izquierda)", de: "Essential (Linkslenker)" } },
          { label: { fr: "Vol intérieur Johannesburg–Le Cap", en: "Domestic flight Johannesburg–Cape Town", es: "Vuelo interior Johannesburgo–Ciudad del Cabo", de: "Inlandsflug Johannesburg–Kapstadt" }, price: "60–120 €", detail: { fr: "FlySafair, Kulula", en: "FlySafair, Kulula", es: "FlySafair, Kulula", de: "FlySafair, Kulula" } },
          { label: { fr: "Uber (ville)", en: "Uber (city)", es: "Uber (ciudad)", de: "Uber (Stadt)" }, price: "3–8 €", detail: { fr: "Très développé, recommandé", en: "Widely available, recommended", es: "Muy extendido, recomendado", de: "Hochentwickelt, empfehlenswert" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Safari game drive (matinée)", en: "Safari game drive (morning)", es: "Safari game drive (mañana)", de: "Safari-Pirschfahrt (morgens)" }, price: "40–80 €", detail: { fr: "Dans le Kruger ou privé", en: "In Kruger or a private reserve", es: "En el Kruger o reserva privada", de: "Im Kruger oder privat" } },
          { label: { fr: "Table Mountain (téléphérique)", en: "Table Mountain (cable car)", es: "Table Mountain (teleférico)", de: "Tafelberg (Seilbahn)" }, price: "20–28 €", detail: { fr: "Vue à 360°", en: "360° views", es: "Vistas de 360°", de: "360°-Ansicht" } },
          { label: { fr: "Saut à l'élastique Bloukrans (216m)", en: "Bloukrans bungee jump (216m)", es: "Puenting en Bloukrans (216 m)", de: "Bungee-Jumping Bloukrans (216 m)" }, price: "120–150 €", detail: { fr: "Record du monde", en: "World record", es: "Récord mundial", de: "Weltrekord" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "45–70 €/j", desc: { fr: "Guesthouses + restaurants locaux + location voiture partagée", en: "Guesthouses + local restaurants + shared car rental", es: "Guesthouses + restaurantes locales + coche de alquiler compartido", de: "Pensionen + lokale Restaurants + gemeinsame Autovermietung" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "100–180 €/j", desc: { fr: "Hôtel 4★ + bons restaurants + safaris", en: "4★ hotel + good restaurants + safaris", es: "Hotel 4★ + buenos restaurantes + safaris", de: "4★ Hotel + gute Restaurants + Safaris" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "350 €+/j", desc: { fr: "Safari lodges + gastronomie + expériences exclusives", en: "Safari lodges + fine dining + exclusive experiences", es: "Lodges de safari + gastronomía + experiencias exclusivas", de: "Safari-Lodges + Gastronomie + exklusive Erlebnisse" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Johannesburg (1j) → Kruger National Park (4j) → Drakensberg (2j) → Le Cap (4j) → Cape Winelands (2j) → Garden Route (1j)", en: "Johannesburg (1d) → Kruger National Park (4d) → Drakensberg (2d) → Cape Town (4d) → Cape Winelands (2d) → Garden Route (1d)", es: "Johannesburgo (1d) → Kruger National Park (4d) → Drakensberg (2d) → Ciudad del Cabo (4d) → Cape Winelands (2d) → Garden Route (1d)", de: "Johannesburg (1T) → Krüger Nationalpark (4T) → Drakensberge (2T) → Kapstadt (4T) → Cape Winelands (2T) → Garden Route (1T)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg", es: "Vuelo ida y vuelta Madrid–Johannesburgo", de: "Hin- und Rückflug Paris–Johannesburg" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "400–700 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "350–500 €" },
            { label: { fr: "Location voiture (14j)", en: "Car rental (14d)", es: "Alquiler de coche (14d)", de: "Autovermietung (14 Tage)" }, amount: "400–600 €" },
            { label: { fr: "Activités & safaris", en: "Activities & safaris", es: "Actividades y safaris", de: "Aktivitäten und Safaris" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg", es: "Vuelo ida y vuelta Madrid–Johannesburgo", de: "Hin- und Rückflug Paris–Johannesburg" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "600–900 €" },
            { label: { fr: "Location voiture + vols intérieurs", en: "Car rental + domestic flights", es: "Alquiler de coche + vuelos interiores", de: "Autovermietung + Inlandsflüge" }, amount: "500–800 €" },
            { label: { fr: "Safaris & activités", en: "Safaris & activities", es: "Safaris y actividades", de: "Safaris und Aktivitäten" }, amount: "700–1 100 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "10 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg (Business)", en: "Return flight Paris–Johannesburg (Business)", es: "Vuelo ida y vuelta Madrid–Johannesburgo (Business)", de: "Hin- und Rückflug Paris–Johannesburg (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Safari lodges + hôtels design (14 nuits)", en: "Safari lodges + design hotels (14 nights)", es: "Lodges de safari + hoteles de diseño (14 noches)", de: "Safari-Lodges + Designhotels (14 Nächte)" }, amount: "3 000–6 000 €" },
            { label: { fr: "Gastronomie & dégustations", en: "Fine dining & tastings", es: "Gastronomía y catas", de: "Gastronomie & Verkostungen" }, amount: "1 000–2 000 €" },
            { label: { fr: "Vols charter + transport privé", en: "Charter flights + private transport", es: "Vuelos chárter + transporte privado", de: "Charterflüge + privater Transport" }, amount: "1 000–2 000 €" },
            { label: { fr: "Expériences exclusives", en: "Exclusive experiences", es: "Experiencias exclusivas", de: "Exklusive Erlebnisse" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~11h direct (Air France, Corsair)", en: "~11h direct (Air France, Corsair)", es: "~12h con escala (Iberia, Turkish Airlines)", de: "ca. 11 Std. direkt (Air France, Corsair)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)", es: "Sin visado para ciudadanos de la UE (90 días)", de: "Visumfrei für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Rand (1€ ≈ 20 ZAR) — très favorable", en: "Rand (1€ ≈ 20 ZAR) — very favourable", es: "Rand (1€ ≈ 20 ZAR) — muy favorable", de: "Rand (1€ ≈ 20 ZAR) – sehr günstig" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (lingua franca) + 10 langues officielles", en: "English (lingua franca) + 10 official languages", es: "Inglés (lengua vehicular) + 10 lenguas oficiales", de: "Englisch (lingua franca) + 10 Amtssprachen" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type M (3 broches) – 230 V (adaptateur universel)", en: "Type M (3-pin) — 230V (universal adapter)", es: "Tipo M (3 clavijas) – 230 V (adaptador universal)", de: "Typ M (3-polig) – 230 V (Universaladapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Très bonne couverture, SIM locale ~3€ (Vodacom, MTN)", en: "Very good coverage, local SIM ~3€ (Vodacom, MTN)", es: "Muy buena cobertura, SIM local ~3€ (Vodacom, MTN)", de: "Sehr gute Abdeckung, lokale SIM ca. 3€ (Vodacom, MTN)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable dans les villes, eau en bouteille en zone rurale", en: "Drinkable in cities, bottled water in rural areas", es: "Potable en las ciudades, agua embotellada en zonas rurales", de: "In Städten trinkbar, in ländlichen Gebieten in Flaschen abgefülltes Wasser" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen pour le Kruger (nord) — consulter médecin", en: "Antimalarial for Kruger (north) — consult a doctor", es: "Antipalúdico para el Kruger (norte) — consultar al médico", de: "Malariamittel für Kruger (Norden) – Arzt konsultieren" } },
  ],
};
