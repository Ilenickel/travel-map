export const WESTERN_SAHARA = {
  code: "ESH",
  numericId: 732,
  name: { fr: "Sahara Occidental", en: "Western Sahara", es: "Sahara Occidental" },
  emoji: "🇪🇭",
  capital: { fr: "Laâyoune", en: "Laayoune", es: "El Aaiún" },
  language: { fr: "Arabe, Français, Espagnol, Hassaniya", en: "Arabic, French, Spanish, Hassaniya", es: "Árabe, francés, español, hasanía" },
  currency: { fr: "Dirham marocain (MAD)", en: "Moroccan Dirham (MAD)", es: "Dirham marroquí (MAD)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 700, tripMid: 1400,
  },
  criteria: {
    unesco: 1,
    nature: 1,
    randonnee: 1,
    gastronomie: 0,
    architecture: 0,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 0,
    plage: 1,
  },
  description: {
    fr: "Le Sahara Occidental est un territoire disputé dont le statut politique reste non résolu depuis la décolonisation espagnole en 1976 : le Maroc en contrôle la quasi-totalité, tandis que le Front Polisario (soutenu par l'Algérie) administre les camps de réfugiés en Algérie. Malgré ce contexte complexe, Dakhla est devenue une capitale mondiale du kitesurf et de la planche à voile, et les paysages désertiques de l'Atlantique saharien sont d'une beauté saisissante.",
    en: "Western Sahara is a disputed territory whose political status has remained unresolved since Spanish decolonisation in 1976: Morocco controls nearly all of it, while the Polisario Front (backed by Algeria) administers refugee camps in Algeria. Despite this complex context, Dakhla has become a world capital of kitesurfing and windsurfing, and the desert landscapes of the Saharan Atlantic coast are strikingly beautiful.",
    es: "El Sahara Occidental es un territorio en disputa cuyo estatus político sigue sin resolverse desde la descolonización española en 1976: Marruecos controla casi la totalidad, mientras que el Frente Polisario (apoyado por Argelia) administra los campamentos de refugiados en Argelia. Pese a este contexto complejo, Dakhla se ha convertido en una capital mundial del kitesurf y el windsurf, y los paisajes desérticos del Atlántico sahariano son de una belleza impactante.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April", es: "Octubre – abril" },
      label: { fr: "Saison douce", en: "Mild season", es: "Temporada suave" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (18–24°C), vent modéré à Laâyoune. Parfait pour explorer les paysages désertiques, la côte atlantique et les sites archéologiques. Dakhla animée en automne.",
        en: "Ideal temperatures (18–24°C), moderate wind in Laayoune. Perfect for exploring desert landscapes, the Atlantic coast and archaeological sites. Dakhla is lively in autumn.",
        es: "Temperaturas ideales (18–24°C), viento moderado en El Aaiún. Perfecto para explorar los paisajes desérticos, la costa atlántica y los yacimientos arqueológicos. Dakhla animada en otoño.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – septiembre" },
      label: { fr: "Saison alizés (Dakhla)", en: "Trade wind season (Dakhla)", es: "Temporada de alisios (Dakhla)" },
      color: "#3b82f6",
      description: {
        fr: "Vents d'alizés réguliers et forts : haute saison pour le kitesurf et la planche à voile à Dakhla. Températures fraîches grâce au courant des Canaries (20–26°C). Lagune turquoise superbe.",
        en: "Steady, strong trade winds: peak season for kitesurfing and windsurfing in Dakhla. Cool temperatures thanks to the Canary Current (20–26°C). A stunning turquoise lagoon.",
        es: "Alisios regulares y fuertes: temporada alta para el kitesurf y el windsurf en Dakhla. Temperaturas frescas gracias a la corriente de Canarias (20–26°C). Espléndida laguna turquesa.",
      },
      icon: "🪂",
    },
  ],

  weatherCities: [
    {
      id: "laayoune",
      name: { fr: "Laâyoune", en: "Laayoune", es: "El Aaiún" },
      region: { fr: "Principale ville", en: "Main city", es: "Principal ciudad" },
      data: [
        { month: "Jan", temp: 17, rain: 20,  icon: "☀️" },
        { month: "Fév", temp: 18, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Mai", temp: 21, rain: 2,   icon: "☀️" },
        { month: "Jun", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 24, rain: 2,   icon: "☀️" },
        { month: "Oct", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Nov", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Déc", temp: 17, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "dakhla",
      name: { fr: "Dakhla", en: "Dakhla", es: "Dakhla" },
      region: { fr: "Presqu'île (côte atlantique)", en: "Peninsula (Atlantic coast)", es: "Península (costa atlántica)" },
      data: [
        { month: "Jan", temp: 17, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 17, rain: 8,   icon: "☀️" },
        { month: "Mar", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Avr", temp: 19, rain: 2,   icon: "☀️" },
        { month: "Mai", temp: 20, rain: 0,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 0,   icon: "☀️" },
        { month: "Oct", temp: 21, rain: 2,   icon: "☀️" },
        { month: "Nov", temp: 19, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 17, rain: 8,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Dakhla — Capitale mondiale du kitesurf", en: "Dakhla — World kitesurfing capital", es: "Dakhla — Capital mundial del kitesurf" },
      region: { fr: "Côte atlantique sud", en: "Southern Atlantic coast", es: "Costa atlántica sur" },
      description: {
        fr: "Dakhla est une presqu'île de 40 km de long creusant une lagune protégée aux eaux turquoise, devenue la mecque mondiale du kitesurf et de la planche à voile grâce à ses alizés réguliers et sa lagune peu profonde. Des dizaines de centres de glisse proposent cours et locations de matériel pour tous niveaux. En dehors des sports nautiques, les plages de sable blanc, la pêche aux crevettes géantes et les couchers de soleil sur l'Atlantique en font une destination balnéaire confidentielle.",
        en: "Dakhla is a 40 km-long peninsula enclosing a protected lagoon with turquoise waters, which has become a world mecca of kitesurfing and windsurfing thanks to its steady trade winds and shallow lagoon. Dozens of watersports centres offer lessons and equipment rental for all levels. Beyond watersports, the white sand beaches, giant prawn fishing and Atlantic sunsets make it a low-key seaside destination.",
        es: "Dakhla es una península de 40 km de largo que encierra una laguna protegida de aguas turquesas, convertida en la meca mundial del kitesurf y el windsurf gracias a sus alisios regulares y su laguna poco profunda. Decenas de centros de deportes acuáticos ofrecen clases y alquiler de material para todos los niveles. Más allá de los deportes náuticos, las playas de arena blanca, la pesca de gambas gigantes y los atardeceres sobre el Atlántico la convierten en un destino de playa poco conocido.",
      },
      wikipedia: "File:Sand dunes, Remote view of Dakhla Oasis 2, Egypt.jpg",
      tags: ["Plage"],
      mustSee: [
        { name: { fr: "Lagune de Dakhla — eaux turquoise et vents constants, paradis du kite", en: "Dakhla Lagoon — turquoise waters and constant winds, a kiting paradise", es: "Laguna de Dakhla — aguas turquesas y vientos constantes, paraíso del kite" }, wikipedia: "File:Dakhla - panoramio.jpg" },
        { name: { fr: "Plage Blanche — immense plage de sable vierge au nord de Dakhla", en: "White Beach — vast pristine sand beach north of Dakhla", es: "Playa Blanca — inmensa playa de arena virgen al norte de Dakhla" }, wikipedia: "File:Plage PK25 Dakhla.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Laâyoune", en: "Laayoune", es: "El Aaiún" },
      region: { fr: "Nord du Sahara Occidental", en: "Northern Western Sahara", es: "Norte del Sahara Occidental" },
      description: {
        fr: "Laâyoune est la principale ville du Sahara Occidental, construite par l'Espagne au XXe siècle et aujourd'hui largement développée par le Maroc. Malgré son statut politique particulier, c'est une ville moderne avec de larges boulevards, des mosquées imposantes et un marché animé où se côtoient populations sahraouie et marocaine. La ville est le point de départ pour explorer les paysages désertiques environnants et la côte atlantique.",
        en: "Laayoune is the main city of Western Sahara, built by Spain in the 20th century and now largely developed by Morocco. Despite its particular political status, it is a modern city with wide boulevards, imposing mosques and a lively market where Sahrawi and Moroccan communities mix. The city is the starting point for exploring the surrounding desert landscapes and the Atlantic coast.",
        es: "El Aaiún es la principal ciudad del Sahara Occidental, construida por España en el siglo XX y hoy ampliamente desarrollada por Marruecos. Pese a su estatus político particular, es una ciudad moderna con amplios bulevares, mezquitas imponentes y un mercado animado donde conviven población saharaui y marroquí. La ciudad es el punto de partida para explorar los paisajes desérticos circundantes y la costa atlántica.",
      },
      wikipedia: "File:Aerial photograph of Laayoune 04.jpg",
      tags: ["Ville", "Nature", "Culture"],
      mustSee: [
        { name: { fr: "Grande Mosquée de Laâyoune — architecture hispano-marocaine", en: "Grand Mosque of Laayoune — Spanish-Moroccan architecture", es: "Gran Mezquita de El Aaiún — arquitectura hispano-marroquí" }, wikipedia: "File:Mosque moulay abd el aziz laayoune.jpg" },
        { name: { fr: "Place du Mechouar — cœur de la vie urbaine", en: "Mechouar Square — heart of city life", es: "Plaza del Mechouar — corazón de la vida urbana" }, wikipedia: "File:Looking Across Place Mechouar.jpg" },
        { name: { fr: "Foum El Oued — plage à 25km, surf et pêche", en: "Foum El Oued — beach 25 km away, surfing and fishing", es: "Foum El Oued — playa a 25 km, surf y pesca" }, wikipedia: "File:Oued Saoura 3.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Côte atlantique saharienne", en: "Saharan Atlantic coast", es: "Costa atlántica sahariana" },
      region: { fr: "Route côtière Tan-Tan → Dakhla", en: "Coastal route Tan-Tan → Dakhla", es: "Ruta costera Tan-Tan → Dakhla" },
      description: {
        fr: "La route côtière longeant l'Atlantique depuis Tan-Tan (Maroc) jusqu'à Dakhla est l'un des road trips les plus sauvages d'Afrique du Nord. Des centaines de kilomètres de dunes de sable plongeant dans un Atlantique bleu-vert, des villages de pêcheurs sahraouis vivant de l'abondante mer, des flambants roses dans les lagunes côtières et des ciels étoilés d'une pureté absolue. La pêche est exceptionnelle sur toute la côte.",
        en: "The coastal road running along the Atlantic from Tan-Tan (Morocco) to Dakhla is one of the wildest road trips in North Africa. Hundreds of kilometres of sand dunes plunging into a blue-green Atlantic, Sahrawi fishing villages living off the abundant sea, flamingos in coastal lagoons and utterly pure starry skies. Fishing is exceptional along the entire coast.",
        es: "La carretera costera que bordea el Atlántico desde Tan-Tan (Marruecos) hasta Dakhla es uno de los road trips más salvajes del norte de África. Cientos de kilómetros de dunas de arena que se precipitan en un Atlántico azul verdoso, pueblos de pescadores saharauis que viven del mar abundante, flamencos en las lagunas costeras y cielos estrellados de una pureza absoluta. La pesca es excepcional en toda la costa.",
      },
      wikipedia: "File:Atlantic Ocean in Western Sahara.jpg",
      tags: ["Aventure", "Plage", "Nature"],
      mustSee: [
        { name: { fr: "Plage de Tarfaya — ancienne escale de l'Aéropostale (Saint-Exupéry)", en: "Tarfaya Beach — former Aéropostale stopover (Saint-Exupéry)", es: "Playa de Tarfaya — antigua escala de la Aéropostale (Saint-Exupéry)" }, wikipedia: "File:Tarfaya - طرفاية 7.jpg" },
        { name: { fr: "Lagunes à flamants roses — en hiver, milliers d'oiseaux migrateurs", en: "Flamingo lagoons — thousands of migratory birds in winter", es: "Lagunas de flamencos rosados — en invierno, miles de aves migratorias" }, wikipedia: "File:Greater flamingos (Phoenicopterus roseus) resting.jpg" },
        { name: { fr: "Dunes côtières de l'Atlantique — sable saharien et vagues atlantiques", en: "Atlantic coastal dunes — Saharan sand and Atlantic waves", es: "Dunas costeras del Atlántico — arena sahariana y olas atlánticas" }, wikipedia: "File:Atlantic Ocean in Western Sahara.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Sahara Occidental sous contrôle marocain utilise le dirham marocain et applique les mêmes prix que le Maroc rural, rendant la destination très abordable. Dakhla est légèrement plus chère en haute saison de kitesurf (juin-septembre) en raison de la demande touristique internationale.",
      en: "The Moroccan-controlled part of Western Sahara uses the Moroccan dirham and follows the same prices as rural Morocco, making the destination very affordable. Dakhla is slightly pricier in the kitesurfing high season (June-September) due to international tourist demand.",
      es: "El Sahara Occidental bajo control marroquí utiliza el dirham marroquí y aplica los mismos precios que el Marruecos rural, lo que hace del destino algo muy asequible. Dakhla es ligeramente más cara en temporada alta de kitesurf (junio-septiembre) debido a la demanda turística internacional.",
    },
    currency: "MAD",
    exchangeRate: "1€ ≈ 11 MAD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Auberge / chambre basique", en: "Hostel / basic room", es: "Albergue / habitación básica" }, range: "10–20 €" },
          { label: { fr: "Guesthouse / riad simple", en: "Guesthouse / simple riad", es: "Guesthouse / riad sencillo" }, range: "25–50 €" },
          { label: { fr: "Lodge kitesurf (Dakhla)", en: "Kitesurf lodge (Dakhla)", es: "Lodge de kitesurf (Dakhla)" }, range: "60–120 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Tajine ou poisson grillé, restaurant local", en: "Tajine or grilled fish, local restaurant", es: "Tayín o pescado a la parrilla, restaurante local" }, range: "4–8 €" },
          { label: { fr: "Restaurant milieu de gamme", en: "Mid-range restaurant", es: "Restaurante de gama media" }, range: "10–20 €" },
          { label: { fr: "Crevettes géantes grillées (Dakhla)", en: "Grilled giant prawns (Dakhla)", es: "Gambas gigantes a la parrilla (Dakhla)" }, range: "8–15 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus CTM (Agadir–Laâyoune)", en: "CTM bus (Agadir–Laayoune)", es: "Autobús CTM (Agadir–El Aaiún)" }, range: "15–25 €" },
          { label: { fr: "Bus CTM (Laâyoune–Dakhla)", en: "CTM bus (Laayoune–Dakhla)", es: "Autobús CTM (El Aaiún–Dakhla)" }, range: "15–25 €" },
          { label: { fr: "Taxi en ville (Laâyoune)", en: "City taxi (Laayoune)", es: "Taxi urbano (El Aaiún)" }, range: "2–5 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Leçon de kitesurf (2h, débutant)", en: "Kitesurf lesson (2h, beginner)", es: "Clase de kitesurf (2h, principiante)" }, range: "50–80 €" },
          { label: { fr: "Location kitesurf (journée)", en: "Kitesurf rental (day)", es: "Alquiler de kitesurf (día)" }, range: "40–70 €" },
          { label: { fr: "Sortie pêche en mer (demi-journée)", en: "Sea fishing trip (half day)", es: "Salida de pesca en el mar (medio día)" }, range: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "30–50 €/j", desc: { fr: "Hébergement simple, nourriture locale, bus, activités libres", en: "Simple accommodation, local food, bus, free activities", es: "Alojamiento sencillo, comida local, autobús, actividades libres" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "60–100 €/j", desc: { fr: "Lodge correct à Dakhla, restaurant, kitesurf ou activités guidées", en: "Decent lodge in Dakhla, restaurants, kitesurfing or guided activities", es: "Lodge decente en Dakhla, restaurantes, kitesurf o actividades guiadas" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días" },
      route: { fr: "Agadir → Laâyoune → Dakhla (kitesurf + plages) → retour en avion depuis Dakhla", en: "Agadir → Laayoune → Dakhla (kitesurfing + beaches) → return flight from Dakhla", es: "Agadir → El Aaiún → Dakhla (kitesurf + playas) → vuelo de vuelta desde Dakhla" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "700 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Agadir (+ vol int. Dakhla–Casablanca)", en: "Return flight Paris–Agadir (+ domestic flight Dakhla–Casablanca)", es: "Vuelo ida/vuelta Madrid–Agadir (+ vuelo interno Dakhla–Casablanca)" }, amount: "250–450 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)" }, amount: "105–210 €" },
            { label: { fr: "Transports (bus CTM, taxis)", en: "Transport (CTM bus, taxis)", es: "Transportes (autobús CTM, taxis)" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida y bebidas" }, amount: "120–200 €" },
            { label: { fr: "Activités (kitesurf 1j, excursions)", en: "Activities (1 day kitesurf, excursions)", es: "Actividades (kitesurf 1d, excursiones)" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 400 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Agadir + vol Dakhla", en: "Return flight Paris–Agadir + Dakhla flight", es: "Vuelo ida/vuelta Madrid–Agadir + vuelo a Dakhla" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (7 nuits, lodge Dakhla)", en: "Accommodation (7 nights, Dakhla lodge)", es: "Alojamiento (7 noches, lodge en Dakhla)" }, amount: "350–700 €" },
            { label: { fr: "Location voiture", en: "Car rental", es: "Alquiler de coche" }, amount: "200–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida y bebidas" }, amount: "250–400 €" },
            { label: { fr: "Kitesurf (3 jours) + activités", en: "Kitesurf (3 days) + activities", es: "Kitesurf (3 días) + actividades" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "Vols vers Agadir ou Casablanca (RAM, Air Arabia, Transavia). Puis vols intérieurs Royal Air Maroc vers Laâyoune ou Dakhla. Vol direct Paris–Dakhla possible en haute saison.", en: "Flights to Agadir or Casablanca (RAM, Air Arabia, Transavia). Then domestic Royal Air Maroc flights to Laayoune or Dakhla. Direct Paris–Dakhla flight possible in high season.", es: "Vuelos a Agadir o Casablanca. Luego vuelos internos de Royal Air Maroc a El Aaiún o Dakhla." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Pas de visa requis pour les Français (le territoire est géré par le Maroc). Passeport valide 6 mois. Certains postes-frontières peuvent faire l'objet de questions sur la destination.", en: "No visa required for French citizens (the territory is administered by Morocco). Passport valid 6 months. Some border posts may ask questions about the destination.", es: "Sin visado para los españoles (el territorio está gestionado por Marruecos). Pasaporte válido 6 meses." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Dirham marocain (MAD). Espèces recommandées. Distributeurs à Laâyoune et Dakhla. Cartes bancaires acceptées dans les lodges de kitesurf.", en: "Moroccan Dirham (MAD). Cash recommended. ATMs in Laayoune and Dakhla. Bank cards accepted at kitesurf lodges.", es: "Dirham marroquí (MAD). Se recomienda efectivo. Cajeros en El Aaiún y Dakhla. Tarjetas bancarias aceptadas en los lodges de kitesurf." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Arabe et hassaniya (dialecte sahraoui), français largement compris, espagnol dans les zones plus proches de l'ancienne influence coloniale espagnole.", en: "Arabic and Hassaniya (Sahrawi dialect), French widely understood, Spanish in areas closer to the former Spanish colonial influence.", es: "Árabe y hasanía (dialecto saharaui), francés ampliamente comprendido, español en las zonas más cercanas a la antigua influencia colonial española." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe" }, value: { fr: "Type C et Type E (comme en France). Tension 220V. Alimentation électrique généralement stable.", en: "Type C and Type E (like France). 220V. Power supply generally stable.", es: "Tipo C y tipo E (como en España). Tensión 220V. Suministro eléctrico generalmente estable." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Pas de vaccination spéciale requise. Chaleur estivale modérée grâce aux alizés. Eau en bouteille recommandée. Crème solaire indispensable (UV forts toute l'année).", en: "No special vaccination required. Moderate summer heat thanks to the trade winds. Bottled water recommended. Sunscreen essential (strong UV year-round).", es: "No se requiere vacunación especial. Calor estival moderado gracias a los alisios. Se recomienda agua embotellada. Crema solar imprescindible (rayos UV fuertes todo el año)." } },
    { icon: "⚠️", label: { fr: "Situation politique", en: "Political situation", es: "Situación política" }, value: { fr: "Territoire disputé : le Maroc contrôle ~80% du territoire (y compris Laâyoune et Dakhla), le Polisario administre les camps de Tindouf (Algérie). Le MEAE recommande la prudence et déconseille toute prise de position politique sur place.", en: "Disputed territory: Morocco controls ~80% of the territory (including Laayoune and Dakhla), the Polisario administers the Tindouf camps (Algeria). The French Foreign Ministry recommends caution and advises against taking any political stance while there.", es: "Territorio en disputa: Marruecos controla ~80% del territorio (incluidos El Aaiún y Dakhla), el Polisario administra los campamentos de Tinduf (Argelia). Se recomienda prudencia y evitar posicionamientos políticos in situ." } },
    { icon: "🪂", label: { fr: "Kitesurf à Dakhla", en: "Kitesurfing in Dakhla", es: "Kitesurf en Dakhla" }, value: { fr: "Dakhla est réputée mondialement pour ses conditions de vent et sa lagune. Nombreux spots pour débutants et confirmés. Haute saison : juin–septembre pour les alizés. Basse saison plus calme mais plaisante pour la découverte.", en: "Dakhla is world-renowned for its wind conditions and lagoon. Numerous spots for beginners and experts. High season: June–September for the trade winds. Low season is quieter but pleasant for a first visit.", es: "Dakhla es reconocida mundialmente por sus condiciones de viento y su laguna. Numerosos spots para principiantes y expertos. Temporada alta: junio–septiembre por los alisios. Temporada baja más tranquila pero agradable para descubrirla." } },
  ],
};
