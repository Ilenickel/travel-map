export const IRELAND = {
  code: "IRL",
  numericId: 372,
  name: { fr: "Irlande", en: "Ireland", es: "Irlanda" },
  emoji: "🇮🇪",
  capital: { fr: "Dublin", en: "Dublin", es: "Dublín" },
  language: { fr: "Anglais, Irlandais (gaélique)", en: "English, Irish (Gaelic)", es: "Inglés, irlandés (gaélico)" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)" },
  timezone: "UTC+0 (été UTC+1)",
  filter: {
    budgetMin: 85, budgetMid: 160,
    tripMin: 1100, tripMid: 2200,
  },
  description: {
    fr: "L'Irlande est une île d'émeraude au caractère sauvage, connue pour ses falaises spectaculaires, ses pubs chaleureux et sa tradition de contes et de musique celtique. Dublin mêle patrimoine victorien, culture littéraire (Joyce, Beckett, Wilde) et scène nocturne animée autour du Temple Bar. Les paysages du Connemara, de l'anneau du Kerry et des falaises de Moher offrent des panoramas d'une beauté saisissante.",
    en: "Known as the Emerald Isle for its wild, green character, Ireland is famous for its dramatic cliffs, welcoming pubs and deep tradition of storytelling and Celtic music. Dublin blends Victorian heritage, a literary legacy shaped by Joyce, Beckett and Wilde, and a lively nightlife scene around Temple Bar. The landscapes of Connemara, the Ring of Kerry and the Cliffs of Moher deliver breathtaking views at every turn.",
    es: "Conocida como la Isla Esmeralda por su carácter salvaje y verde, Irlanda es famosa por sus acantilados imponentes, sus acogedores pubs y su profunda tradición de relatos y música celta. Dublín combina patrimonio victoriano, un legado literario forjado por Joyce, Beckett y Wilde, y una animada vida nocturna en torno al Temple Bar. Los paisajes de Connemara, el Anillo de Kerry y los acantilados de Moher ofrecen vistas sobrecogedoras en cada rincón.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre" },
      label: { fr: "Été irlandais", en: "Irish summer", es: "Verano irlandés" },
      color: "#22c55e",
      description: {
        fr: "La meilleure période pour profiter des paysages verts et des longues journées claires. Les températures restent fraîches (14–18 °C) mais le soleil est présent. Juin et juillet sont idéaux pour le Ring of Kerry et les falaises de Moher.",
        en: "The best time to enjoy the green landscapes and long, bright days. Temperatures stay cool (14–18°C), but the sunshine is more reliable. June and July are ideal for the Ring of Kerry and the Cliffs of Moher.",
        es: "La mejor época para disfrutar de los paisajes verdes y los días largos y claros. Las temperaturas siguen siendo frescas (14–18 °C) pero el sol está más presente. Junio y julio son ideales para el Anillo de Kerry y los acantilados de Moher.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars", en: "March", es: "Marzo" },
      label: { fr: "Saint-Patrick", en: "St Patrick's Day", es: "San Patricio" },
      color: "#f59e0b",
      description: {
        fr: "Le 17 mars, toute l'Irlande célèbre la Saint-Patrick avec des défilés, de la musique et une ambiance festive incomparable, notamment à Dublin. Période très animée mais hébergements à réserver bien à l'avance.",
        en: "On 17 March, Ireland comes alive for St Patrick's Day, with parades, music and a festive atmosphere that is hard to match, especially in Dublin. It is an exciting time to visit, but accommodation should be booked well in advance.",
        es: "El 17 de marzo, toda Irlanda celebra San Patricio con desfiles, música y un ambiente festivo incomparable, especialmente en Dublín. Época muy animada pero conviene reservar el alojamiento con mucha antelación.",
      },
      icon: "🍀",
    },
  ],

  weatherCities: [
    {
      id: "dublin",
      name: "Dublin",
      region: { fr: "Leinster", en: "Leinster", es: "Leinster" },
      data: [
        { month: "Jan", temp: 7, rain: 80, icon: "❄️" },
        { month: "Fév", temp: 7, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 9, rain: 70, icon: "⛅" },
        { month: "Avr", temp: 11, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 14, rain: 60, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 75, icon: "☀️" },
        { month: "Oct", temp: 13, rain: 85, icon: "⛅" },
        { month: "Nov", temp: 9, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 7, rain: 80, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Dublin", en: "Dublin", es: "Dublín" },
      region: { fr: "Leinster", en: "Leinster", es: "Leinster" },
      description: {
        fr: "Capitale animée et conviviale, Dublin est le cœur littéraire et musical de l'Irlande. Le quartier du Temple Bar avec ses pubs traditionnels, Trinity College abritant le Livre de Kells, et le Chester Beatty Library en font une ville d'une richesse culturelle insoupçonnée. La scène des pubs irlandais avec leur musique live est une expérience unique en Europe.",
        en: "Lively and welcoming, Dublin is Ireland's literary and musical heart. Temple Bar, with its traditional pubs, Trinity College, home to the Book of Kells, and the Chester Beatty Library reveal a city of unexpected cultural depth. The Irish pub scene, especially live music nights, is a uniquely memorable European experience.",
        es: "Capital animada y acogedora, Dublín es el corazón literario y musical de Irlanda. El barrio de Temple Bar con sus pubs tradicionales, el Trinity College que alberga el Libro de Kells, y la Chester Beatty Library hacen de ella una ciudad de una riqueza cultural insospechada. La escena de los pubs irlandeses con música en vivo es una experiencia única en Europa.",
      },
      wikipedia: "Dublin",
      tags: ["Ville", "Culture", "Pubs", "Littérature", "Histoire", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Trinity College et Livre de Kells — manuscrit enluminé du VIIIe siècle", en: "Trinity College and the Book of Kells — an illuminated 8th-century manuscript", es: "Trinity College y el Libro de Kells — manuscrito iluminado del siglo VIII" }, wikipedia: "Book_of_Kells" },
        { name: { fr: "Temple Bar — quartier des pubs et de la vie nocturne", en: "Temple Bar — the pub and nightlife district", es: "Temple Bar — barrio de pubs y vida nocturna" }, wikipedia: "File:Temple Bar at Dusk 4.jpg" },
        { name: { fr: "Guinness Storehouse — histoire de la célèbre bière irlandaise", en: "Guinness Storehouse — the story of Ireland's most famous beer", es: "Guinness Storehouse — historia de la célebre cerveza irlandesa" }, wikipedia: "Guinness_Storehouse" },
        { name: { fr: "Château de Dublin — cœur historique de la ville depuis le XIIIe siècle", en: "Dublin Castle — the city's historic core since the 13th century", es: "Castillo de Dublín — corazón histórico de la ciudad desde el siglo XIII" }, wikipedia: "Dublin_Castle" },
      ],
    },
    {
      id: 2,
      name: { fr: "Anneau du Kerry", en: "Ring of Kerry", es: "Anillo de Kerry" },
      region: { fr: "Munster", en: "Munster", es: "Munster" },
      description: {
        fr: "Le Ring of Kerry est l'un des circuits panoramiques les plus célèbres d'Europe, serpentant sur 179 km autour de la péninsule d'Iveragh. Lacs de Killarney, îles Skellig (lieu de tournage de Star Wars), villages côtiers et montagnes forment un paysage d'une beauté grandiose. Killarney est la base idéale pour explorer cette région.",
        en: "The Ring of Kerry is one of Europe's best-known scenic drives, winding for 179 km around the Iveragh Peninsula. The Lakes of Killarney, the Skellig islands, coastal villages and mountains combine to create a landscape of sweeping beauty. Killarney is the ideal base for exploring the region.",
        es: "El Anillo de Kerry es una de las rutas panorámicas más famosas de Europa, que serpentea 179 km alrededor de la península de Iveragh. Los lagos de Killarney, las islas Skellig (escenario de rodaje de Star Wars), pueblos costeros y montañas forman un paisaje de belleza grandiosa. Killarney es la base ideal para explorar la región.",
      },
      wikipedia: "Ring_of_Kerry",
      tags: ["Paysage", "Nature", "Côte", "Péninsule", "Randonnée"],
      mustSee: [
        { name: { fr: "Skellig Michael — monastère médiéval sur un rocher en pleine mer", en: "Skellig Michael — a medieval monastery on an offshore rock", es: "Skellig Michael — monasterio medieval en una roca en alta mar" }, wikipedia: "Skellig_Michael" },
        { name: { fr: "Lacs de Killarney — parc national aux paysages enchanteurs", en: "Lakes of Killarney — a national park with enchanting scenery", es: "Lagos de Killarney — parque nacional de paisajes encantadores" }, wikipedia: "Killarney_National_Park" },
        { name: { fr: "Gap of Dunloe — gorge spectaculaire dans les MacGillycuddy's Reeks", en: "Gap of Dunloe — a dramatic pass through the MacGillycuddy's Reeks", es: "Gap of Dunloe — desfiladero espectacular en las MacGillycuddy's Reeks" }, wikipedia: "Gap_of_Dunloe" },
        { name: { fr: "Torc Waterfall — cascade romantique dans la forêt de Killarney", en: "Torc Waterfall — a romantic waterfall in Killarney Forest", es: "Cascada de Torc — cascada romántica en el bosque de Killarney" }, wikipedia: "Torc_Waterfall" },
      ],
    },
    {
      id: 3,
      name: { fr: "Falaises de Moher", en: "Cliffs of Moher", es: "Acantilados de Moher" },
      region: { fr: "Connacht", en: "Connacht", es: "Connacht" },
      description: {
        fr: "Les falaises de Moher s'élèvent à 214 mètres au-dessus de l'Atlantique sur 8 km de côte sauvage dans le comté de Clare. Elles constituent le site naturel le plus visité d'Irlande et offrent des vues spectaculaires sur les îles d'Aran et le Connemara. La région du Burren, plateau calcaire unique en Europe, se trouve à proximité.",
        en: "The Cliffs of Moher rise 214 metres above the Atlantic along 8 km of rugged coastline in County Clare. They are Ireland's most visited natural attraction and offer spectacular views of the Aran Islands and Connemara. Nearby, the Burren — a limestone plateau unlike anywhere else in Europe — is well worth exploring too.",
        es: "Los acantilados de Moher se alzan 214 metros sobre el Atlántico a lo largo de 8 km de costa salvaje en el condado de Clare. Constituyen el enclave natural más visitado de Irlanda y ofrecen vistas espectaculares de las islas Aran y Connemara. La región del Burren, meseta caliza única en Europa, se encuentra cerca.",
      },
      wikipedia: "Cliffs_of_Moher",
      tags: ["Nature", "Falaises", "UNESCO", "Atlantique", "Randonnée"],
      mustSee: [
        { name: { fr: "Tour O'Brien — tour de guet victorienne au sommet des falaises", en: "O'Brien's Tower — a Victorian lookout at the cliff top", es: "Torre O'Brien — atalaya victoriana en lo alto de los acantilados" }, wikipedia: "O'Brien's_Tower" },
        { name: { fr: "Le Burren — paysage karstique unique avec flore méditerranéenne", en: "The Burren — a unique karst landscape with Mediterranean flora", es: "El Burren — paisaje kárstico único con flora mediterránea" }, wikipedia: "The_Burren" },
        { name: { fr: "Îles d'Aran — Inis Mór et ses forts préhistoriques", en: "Aran Islands — Inis Mór and its prehistoric forts", es: "Islas Aran — Inis Mór y sus fuertes prehistóricos" }, wikipedia: "File:Aran Islands, Ireland, Estate 2019 01.jpg" },
        { name: { fr: "Doolin — village traditionnel réputé pour sa musique celtique live", en: "Doolin — a traditional village famous for live Celtic music", es: "Doolin — pueblo tradicional famoso por su música celta en vivo" }, wikipedia: "Doolin" },
      ],
    },
    {
      id: 4,
      name: { fr: "Chaussée des Géants", en: "Giant's Causeway", es: "Calzada del Gigante" },
      region: { fr: "Ulster (Irlande du Nord)", en: "Ulster (Northern Ireland)", es: "Úlster (Irlanda del Norte)" },
      description: {
        fr: "La Chaussée des Géants est une formation géologique spectaculaire de 40 000 colonnes de basalte hexagonales s'avançant dans la mer d'Irlande, classée au patrimoine mondial de l'UNESCO. Selon la légende, le géant Finn McCool l'aurait construite pour rejoindre l'Écosse. Elle se situe en Irlande du Nord, accessible facilement depuis Dublin.",
        en: "The Giant's Causeway is a spectacular geological formation of 40,000 hexagonal basalt columns stretching into the Irish Sea, and a UNESCO World Heritage Site. Legend says the giant Finn McCool built it to reach Scotland. It lies in Northern Ireland and is easy to reach from Dublin.",
        es: "La Calzada del Gigante es una espectacular formación geológica de 40.000 columnas hexagonales de basalto que se adentran en el mar de Irlanda, Patrimonio de la Humanidad UNESCO. Según la leyenda, el gigante Finn McCool la construyó para llegar a Escocia. Se encuentra en Irlanda del Norte, de fácil acceso desde Dublín.",
      },
      wikipedia: "Giant's_Causeway",
      tags: ["UNESCO", "Géologie", "Légende", "Nature"],
      mustSee: [
        { name: { fr: "Chaussée des Géants — colonnes basaltiques hexagonales classées UNESCO", en: "Giant's Causeway — UNESCO-listed hexagonal basalt columns", es: "Calzada del Gigante — columnas basálticas hexagonales, Patrimonio UNESCO" }, wikipedia: "Giant's_Causeway" },
        { name: { fr: "Château de Dunluce — ruines médiévales perchées sur une falaise", en: "Dunluce Castle — medieval ruins perched on a cliff", es: "Castillo de Dunluce — ruinas medievales encaramadas en un acantilado" }, wikipedia: "Dunluce_Castle" },
        { name: { fr: "Dark Hedges — avenue d'hêtres tordus célèbre par Game of Thrones", en: "The Dark Hedges — the twisted beech avenue made famous by Game of Thrones", es: "Dark Hedges — avenida de hayas retorcidas famosa por Juego de Tronos" }, wikipedia: "Dark_Hedges" },
        { name: { fr: "Rope Bridge de Carrick-a-Rede — pont de corde suspendu au-dessus de la mer", en: "Carrick-a-Rede Rope Bridge — a rope bridge suspended above the sea", es: "Puente de cuerda de Carrick-a-Rede — puente colgante sobre el mar" }, wikipedia: "File:Carrick-a-Rede Rope bridge-20120829.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Irlande est l'un des pays les plus chers d'Europe de l'Ouest, notamment Dublin où l'hébergement et la restauration ont des prix élevés. Hors capitale, les coûts baissent sensiblement. La livre sterling est utilisée en Irlande du Nord.",
      en: "Ireland is one of the more expensive countries in Western Europe, especially in Dublin, where accommodation and dining are costly. Outside the capital, prices drop noticeably. Northern Ireland uses the British pound.",
      es: "Irlanda es uno de los países más caros de Europa occidental, especialmente Dublín, donde el alojamiento y la restauración tienen precios elevados. Fuera de la capital, los costes bajan sensiblemente. La libra esterlina se usa en Irlanda del Norte.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Hostel dorm", es: "Albergue juvenil (dormitorio)" }, price: "30–50 €", detail: { fr: "Bonnes auberges à Dublin et dans les villes de campagne", en: "Good hostels in Dublin and across the countryside", es: "Buenos albergues en Dublín y en pueblos rurales" } },
          { label: { fr: "B&B irlandais", en: "Irish B&B", es: "B&B irlandés" }, price: "70–110 €", detail: { fr: "Bed & Breakfast chaleureux, petit-déjeuner irlandais inclus", en: "Warm bed-and-breakfast stays with an Irish breakfast included", es: "Bed & Breakfast acogedor, desayuno irlandés incluido" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel", es: "Hotel confort 3–4 estrellas" }, price: "130–200 €", detail: { fr: "Hôtels de charme à Dublin ou dans les comtés ruraux", en: "Boutique hotels in Dublin or in rural counties", es: "Hoteles con encanto en Dublín o en condados rurales" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Sandwich / fish & chips", en: "Sandwich / fish & chips", es: "Sándwich / fish & chips" }, price: "8–14 €", detail: { fr: "Repas rapide dans un pub ou une friterie", en: "Quick meal in a pub or chip shop", es: "Comida rápida en un pub o freiduría" } },
          { label: { fr: "Pub lunch (plat du jour)", en: "Pub lunch (daily special)", es: "Almuerzo de pub (plato del día)" }, price: "14–22 €", detail: { fr: "Irish stew, shepherd's pie ou chowder de fruits de mer", en: "Irish stew, shepherd's pie or seafood chowder", es: "Irish stew, shepherd's pie o chowder de marisco" } },
          { label: { fr: "Restaurant dîner", en: "Dinner restaurant", es: "Restaurante para cenar" }, price: "28–50 €", detail: { fr: "Cuisine irlandaise moderne, fruits de mer frais", en: "Modern Irish cooking and fresh seafood", es: "Cocina irlandesa moderna, marisco fresco" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus Dublin (trajet Leap Card)", en: "Dublin bus (Leap Card fare)", es: "Autobús de Dublín (tarifa Leap Card)" }, price: "1,60–2,50 €", detail: { fr: "Réseau Dublin Bus, tarif réduit avec carte Leap", en: "Dublin Bus network, discounted fare with a Leap Card", es: "Red Dublin Bus, tarifa reducida con tarjeta Leap" } },
          { label: { fr: "Train Dublin–Cork ou Galway", en: "Train Dublin–Cork or Galway", es: "Tren Dublín–Cork o Galway" }, price: "20–50 €", detail: { fr: "Irish Rail, 2h30 à 3h selon la destination", en: "Irish Rail, roughly 2h30 to 3h depending on the route", es: "Irish Rail, 2h30 a 3h según el destino" } },
          { label: { fr: "Location de voiture (journée)", en: "Car rental (per day)", es: "Alquiler de coche (día)" }, price: "40–70 €", detail: { fr: "Indispensable pour explorer le Ring of Kerry ou le Connemara", en: "Essential for exploring the Ring of Kerry or Connemara", es: "Indispensable para explorar el Anillo de Kerry o Connemara" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée Chaussée des Géants", en: "Giant's Causeway entry", es: "Entrada a la Calzada del Gigante" }, price: "16–19 €", detail: { fr: "Accès au site avec centre d'accueil (tarifs en livres sterling, Irlande du Nord)", en: "Site access with visitor centre (prices in pounds, Northern Ireland)", es: "Acceso al sitio con centro de visitantes (precios en libras, Irlanda del Norte)" } },
          { label: { fr: "Musée national d'Irlande", en: "National Museum of Ireland", es: "Museo Nacional de Irlanda" }, price: "Gratuit", detail: { fr: "Archéologie, art et histoire irlandaise à Dublin", en: "Irish archaeology, art and history in Dublin", es: "Arqueología, arte e historia irlandesa en Dublín" } },
          { label: { fr: "Bateau vers Skellig Michael", en: "Boat trip to Skellig Michael", es: "Barco a Skellig Michael" }, price: "80–110 €", detail: { fr: "Excursion d'une journée depuis Portmagee", en: "Full-day excursion from Portmagee", es: "Excursión de un día desde Portmagee" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
        daily: "85–115 €/j",
        desc: {
          fr: "Auberge, pubs abordables, bus et trains, quelques entrées payantes",
          en: "Hostels, affordable pubs, buses and trains, plus a few paid attractions",
          es: "Albergue, pubs asequibles, autobuses y trenes, algunas entradas de pago",
        },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort" },
        daily: "160–220 €/j",
        desc: {
          fr: "B&B charme, repas en restaurant, location de voiture, activités guidées",
          en: "Boutique B&Bs, restaurant meals, car rental and guided activities",
          es: "B&B con encanto, comidas en restaurante, alquiler de coche, actividades guiadas",
        },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días" },
      route: {
        fr: "Dublin – Galway – Falaises de Moher – Ring of Kerry – Cork",
        en: "Dublin – Galway – Cliffs of Moher – Ring of Kerry – Cork",
        es: "Dublín – Galway – Acantilados de Moher – Anillo de Kerry – Cork",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "750 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dublin", en: "Return flight Paris–Dublin", es: "Vuelo ida y vuelta Madrid–Dublín" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)" }, amount: "210–350 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental", es: "Transporte local + alquiler de coche" }, amount: "150–220 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "250–350 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees", es: "Actividades + entradas" }, amount: "60–100 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 500 – 2 100 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dublin", en: "Return flight Paris–Dublin", es: "Vuelo ida y vuelta Madrid–Dublín" }, amount: "120–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)" }, amount: "560–840 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental", es: "Transporte local + alquiler de coche" }, amount: "250–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "420–600 €" },
            { label: { fr: "Activités + excursions", en: "Activities + excursions", es: "Actividades + excursiones" }, amount: "150–250 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "1h30 de vol direct vers Dublin depuis CDG ou Orly", en: "A direct flight to Dublin takes about 1h30 from CDG or Orly", es: "Vuelo directo a Dublín de unas 2h30 desde Madrid" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Aucun visa requis — l'Irlande n'est pas dans Schengen mais accepte les ressortissants UE", en: "No visa required — Ireland is not in Schengen, but EU citizens are admitted", es: "Sin visado — Irlanda no está en Schengen pero admite a ciudadanos de la UE" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Euro (€) en République d'Irlande — livre sterling (£) en Irlande du Nord", en: "Euro (€) in the Republic of Ireland — British pound (£) in Northern Ireland", es: "Euro (€) en la República de Irlanda — libra esterlina (£) en Irlanda del Norte" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Anglais partout — irlandais (gaélique) sur les panneaux et dans les Gaeltacht", en: "English everywhere — Irish (Gaelic) appears on signage and in the Gaeltacht areas", es: "Inglés en todas partes — irlandés (gaélico) en los carteles y en las zonas Gaeltacht" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G (prise anglaise à 3 broches) — adaptateur indispensable", en: "Type G (three-pin British plug) — an adapter is essential", es: "Tipo G (enchufe británico de 3 clavijas) — adaptador indispensable" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — soins de qualité", en: "European Health Insurance Card (EHIC) accepted — healthcare quality is very good", es: "Tarjeta Sanitaria Europea (TSE) válida — atención de calidad" } },
    { icon: "🚗", label: { fr: "Conduite", en: "Driving", es: "Conducción" }, value: { fr: "Conduite à gauche — volant à droite, routes étroites en campagne", en: "Left-hand driving — right-hand steering wheel, with narrow rural roads", es: "Conducción por la izquierda — volante a la derecha, carreteras rurales estrechas" } },
    { icon: "☔", label: { fr: "Météo", en: "Weather", es: "Clima" }, value: { fr: "Climat très humide toute l'année — imperméable indispensable même en été", en: "Very wet climate all year — a raincoat is essential, even in summer", es: "Clima muy húmedo todo el año — impermeable indispensable incluso en verano" } },
  ],
};
