export const SINGAPORE = {
  code: "SGP",
  numericId: 702,
  name: { fr: "Singapour", en: "Singapore", es: "Singapur", de: "Singapur" },
  emoji: "🇸🇬",
  capital: { fr: "Singapour", en: "Singapore", es: "Singapur", de: "Singapur" },
  language: { fr: "Anglais, mandarin, malais, tamoul", en: "English, Mandarin, Malay, Tamil", es: "Inglés, mandarín, malayo, tamil", de: "Englisch, Mandarin, Malaiisch, Tamil" },
  currency: { fr: "Dollar de Singapour (SGD)", en: "Singapore dollar (SGD)", es: "Dólar de Singapur (SGD)", de: "Singapur-Dollar (SGD)" },
  timezone: "UTC+8",
  filter: {
    budgetMin: 60,
    budgetMid: 120,
    tripMin: 2000,
    tripMid: 3500,
  },
  criteria: {
    unesco: 2,
    nature: 1,
    randonnee: 0,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 3,
    plage: 1,
  },
  description: {
    fr: "Singapour est une cité-État futuriste au carrefour de l'Asie du Sud-Est, mosaïque de cultures chinoises, malaises et indiennes. Propreté légendaire, gastronomie de rue mondialement reconnue (hawker centres), jardins verticaux et Supertrees sont la signature de ce joyau ultramoderne et sûr.", en: "Singapore is a futuristic city-state at the crossroads of Southeast Asia, a mosaic of Chinese, Malay and Indian cultures. Legendary cleanliness, world-renowned street food (hawker centres), vertical gardens and Supertrees are the signature of this ultramodern, safe gem.", es: "Singapur es una ciudad-estado futurista en la encrucijada del Sudeste Asiático, un mosaico de culturas china, malaya e india. Limpieza legendaria, comida callejera de fama mundial (hawker centres), jardines verticales y Supertrees son la firma de esta joya ultramoderna y segura.", de: "Singapur ist ein futuristischer Stadtstaat am Schnittpunkt Südostasiens, ein Mosaik chinesischer, malaiischer und indischer Kulturen. Legendäre Sauberkeit, weltbekanntes Streetfood (Hawker Center), vertikale Gärten und Supertrees sind das Markenzeichen dieses hochmodernen und sicheren Juwels.",
  },

  bestPeriods: [
    {
      months: { fr: "Février – Avril", en: "February – April", es: "Febrero – Abril", de: "Februar – April" },
      label: { fr: "Chaleur sèche (minimum de pluies)", en: "Dry heat (least rain)", es: "Calor seco (mínimo de lluvias)", de: "Trockene Hitze (minimaler Regen)" },
      color: "#fbbf24",
      description: {
        fr: "Les mois les plus ensoleillés, avec moins de pluies. Idéal pour les parcs extérieurs et les quartiers ethniques.", en: "The sunniest months, with less rain. Ideal for outdoor parks and the ethnic districts.", es: "Los meses más soleados, con menos lluvia. Ideal para los parques al aire libre y los barrios étnicos.", de: "Die sonnigsten Monate mit weniger Regen. Ideal für Parks im Freien und ethnische Viertel.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juillet – Septembre", en: "July – September", es: "Julio – Septiembre", de: "Juli – September" },
      label: { fr: "Été (pluies modérées)", en: "Summer (moderate rain)", es: "Verano (lluvias moderadas)", de: "Sommer (mäßiger Regen)" },
      color: "#86efac",
      description: {
        fr: "Pluies de courte durée, temps chaud. Festival National Day en août, ambiance festive.", en: "Short showers, hot weather. National Day festival in August, festive atmosphere.", es: "Lluvias de corta duración, tiempo cálido. Festival del Día Nacional en agosto, ambiente festivo.", de: "Kurze Regenfälle, heißes Wetter. Nationalfeiertag im August, festliche Atmosphäre.",
      },
      icon: "🎆",
    },
  ],

  weatherCities: [
    {
      id: "singapore",
      name: "Singapour",
      region: { fr: "Île principale", en: "Main island", es: "Isla principal", de: "Hauptinsel" },
      data: [
        { month: "Jan", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 140, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 135, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 145, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 265, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 325, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Gardens by the Bay",
      region: "Marina Bay",
      description: {
        fr: "Le chef-d'œuvre botanique de Singapour avec ses Supertrees luminescents, ses serres climatisées (Cloud Forest et Flower Dome) et ses passerelles aériennes. Un must absolu, surtout au crépuscule lors du Garden Rhapsody.", en: "Singapore's botanical masterpiece with its glowing Supertrees, climate-controlled greenhouses (Cloud Forest and Flower Dome) and elevated walkways. An absolute must, especially at dusk during the Garden Rhapsody light show.", es: "La obra maestra botánica de Singapur, con sus luminosos Supertrees, sus invernaderos climatizados (Cloud Forest y Flower Dome) y sus pasarelas elevadas. Una visita imprescindible, especialmente al atardecer durante el espectáculo Garden Rhapsody.", de: "Singapurs botanisches Meisterwerk mit seinen leuchtenden Supertrees, klimatisierten Gewächshäusern (Cloud Forest und Flower Dome) und Luftstegen. Ein absolutes Muss, besonders in der Abenddämmerung während Garden Rhapsody.",
      },
      wikipedia: "Gardens_by_the_Bay",
      tags: ["Nature", "Architecture"],
      mustSee: [
        { name: "Supertree Grove", wikipedia: "File:Supertree_Grove,_Gardens_by_the_Bay,_Singapore_-_20120712-02.jpg" },
        { name: { fr: "Cloud Forest (serre)", en: "Cloud Forest (greenhouse)", es: "Cloud Forest (invernadero)", de: "Nebelwald (Gewächshaus)" }, wikipedia: "File:Sri Lanka cloud forest, tall trees in fog.jpg" },
        { name: { fr: "Marina Bay Sands (skyline)", en: "Marina Bay Sands (skyline)", es: "Marina Bay Sands (skyline)", de: "Marina Bay Sands (Skyline)" }, wikipedia: "Marina_Bay_Sands" },
        { name: "ArtScience Museum", wikipedia: "ArtScience_Museum" },
      ],
    },
    {
      id: 2,
      name: { fr: "Quartiers ethniques", en: "Ethnic districts", es: "Barrios étnicos", de: "Ethnische Viertel" },
      region: { fr: "Centre historique", en: "Historic centre", es: "Centro histórico", de: "Historisches Zentrum" },
      description: {
        fr: "Chinatown, Little India (Tekka), Kampong Glam (quartier malais) et Clarke Quay coexistent à quelques stations de métro. Temples hindous, mosquées, pagodes et marchés de rue forment le cœur multiculturel de Singapour.", en: "Chinatown, Little India (Tekka), Kampong Glam (the Malay quarter) and Clarke Quay coexist just a few metro stops apart. Hindu temples, mosques, pagodas and street markets form the multicultural heart of Singapore.", es: "Chinatown, Little India (Tekka), Kampong Glam (barrio malayo) y Clarke Quay coexisten a pocas paradas de metro. Templos hindúes, mezquitas, pagodas y mercados callejeros forman el corazón multicultural de Singapur.", de: "Chinatown, Little India (Tekka), Kampong Glam (Malay Quarter) und Clarke Quay liegen nur wenige U-Bahn-Stationen entfernt nebeneinander. Hinduistische Tempel, Moscheen, Pagoden und Straßenmärkte bilden das multikulturelle Herz Singapurs.",
      },
      wikipedia: "Chinatown,_Singapore",
      tags: ["Culture", "Gastronomie", "Histoire", "Spiritualité"],
      mustSee: [
        { name: "Little India (Tekka)", wikipedia: "Little_India,_Singapore" },
        { name: "Chinatown Heritage Centre", wikipedia: "File:Chinatown_Heritage_Centre.JPG" },
        { name: "Sultan Mosque (Kampong Glam)", wikipedia: "File:Masjid Sultan, Singapore (2023 June) - img 02.jpg" },
        { name: "Sri Mariamman Temple", wikipedia: "Sri_Mariamman_Temple,_Singapore" },
      ],
    },
    {
      id: 3,
      name: { fr: "Hawker Centres & Gastronomie", en: "Hawker Centres & Cuisine", es: "Hawker Centres y gastronomía", de: "Hawker Centers & Gastronomie" },
      region: { fr: "Toute l'île", en: "Island-wide", es: "Toda la isla", de: "Die ganze Insel" },
      description: {
        fr: "Les hawker centres sont des marchés de rue couverts et climatisés où des dizaines de cuisiniers proposent des spécialités à bas prix. Le Chicken Rice, le Laksa, le Char Kway Teow et le Chilli Crab y sont légendaires. Singapour compte plusieurs hawker centres au patrimoine UNESCO.", en: "Hawker centres are covered, air-conditioned street food markets where dozens of cooks serve up specialities at low prices. Chicken Rice, Laksa, Char Kway Teow and Chilli Crab are legendary here. Singapore has several hawker centres recognised as UNESCO heritage.", es: "Los hawker centres son mercados callejeros cubiertos y climatizados donde decenas de cocineros ofrecen especialidades a bajo precio. El Chicken Rice, el Laksa, el Char Kway Teow y el Chilli Crab son legendarios aquí. Singapur cuenta con varios hawker centres reconocidos como patrimonio UNESCO.", de: "Hawker Center sind überdachte, klimatisierte Straßenmärkte, auf denen Dutzende Köche Spezialitäten zu günstigen Preisen anbieten. Chicken Rice, Laksa, Char Kway Teow und Chilli Crab sind hier legendär. In Singapur gibt es mehrere Hawker-Zentren, die zum UNESCO-Weltkulturerbe gehören.",
      },
      wikipedia: "Hawker_centre",
      tags: ["Gastronomie", "Culture", "UNESCO"],
      mustSee: [
        { name: "Maxwell Food Centre", wikipedia: "Maxwell_Food_Centre" },
        { name: "Lau Pa Sat", wikipedia: "Lau_Pa_Sat" },
        { name: "Newton Food Centre", wikipedia: "File:Newton Food Centre 5, Aug 06.JPG" },
        { name: "Old Airport Road Food Centre", wikipedia: "File:51 Old Airport Road Food Centre, exterior.jpg" },
      ],
    },
    {
      id: 4,
      name: "Sentosa & Universal Studios",
      region: { fr: "Sud de l'île", en: "Southern island", es: "Sur de la isla", de: "Südlich der Insel" },
      description: {
        fr: "L'île-resort de Sentosa concentre plages, casino, Universal Studios et attractions familiales. Accessible à pied depuis Harbourfront, elle offre une parenthèse balnéaire en pleine métropole.", en: "Sentosa resort island brings together beaches, a casino, Universal Studios and family attractions. Reachable on foot from Harbourfront, it offers a seaside escape in the heart of the metropolis.", es: "La isla-resort de Sentosa reúne playas, casino, Universal Studios y atracciones familiares. Accesible a pie desde Harbourfront, ofrece un paréntesis costero en plena metrópolis.", de: "Auf der Ferieninsel Sentosa gibt es zahlreiche Strände, Casinos, Universal Studios und Familienattraktionen. Es ist zu Fuß von Harbourfront aus erreichbar und bietet einen Urlaub am Meer im Herzen der Metropole.",
      },
      wikipedia: "Sentosa",
      tags: ["Plage", "Nightlife", "Famille", "Luxe"],
      mustSee: [
        { name: "Universal Studios Singapore", wikipedia: "Universal_Studios_Singapore" },
        { name: "S.E.A. Aquarium", wikipedia: "File:S.E.A. Aquarium, Singapore, 20240206 1354 6519.jpg" },
        { name: "Siloso Beach", wikipedia: "File:Siloso Beach Walk (180702).jpg" },
        { name: { fr: "Fort Siloso (musée WWII)", en: "Fort Siloso (WWII museum)", es: "Fort Siloso (museo de la Segunda Guerra Mundial)", de: "Fort Siloso (Museum des Zweiten Weltkriegs)" }, wikipedia: "Fort_Siloso" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Singapour est l'une des villes les plus chères d'Asie, mais la nourriture dans les hawker centres reste très abordable. L'hébergement représente le principal poste de dépense.", en: "Singapore is one of the most expensive cities in Asia, but food at hawker centres remains very affordable. Accommodation is the biggest expense.", es: "Singapur es una de las ciudades más caras de Asia, pero la comida en los hawker centres sigue siendo muy asequible. El alojamiento es el principal gasto.", de: "Singapur ist eine der teuersten Städte Asiens, aber das Essen in den Hawker-Zentren bleibt sehr erschwinglich. Die Unterkunft stellt den Hauptausgabenposten dar.",
    },
    currency: { fr: "Dollar de Singapour (SGD)", en: "Singapore dollar (SGD)", es: "Dólar de Singapur (SGD)", de: "Singapur-Dollar (SGD)" },
    exchangeRate: "1€ ≈ 1,40–1,50 SGD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir capsule-hôtel", en: "Capsule hotel dorm", es: "Dormitorio en hotel cápsula", de: "Schlafsaal eines Kapselhotels" }, price: "25–45 €", detail: { fr: "Propre et confortable, très demandé", en: "Clean and comfortable, very popular", es: "Limpio y confortable, muy demandado", de: "Sauber und komfortabel, sehr gefragt" } },
          { label: { fr: "Chambre double hôtel 3★", en: "3★ hotel double room", es: "Habitación doble en hotel 3★", de: "Doppelzimmer Hotelzimmer 3★" }, price: "100–180 €", detail: { fr: "Proche MRT, bon rapport qualité-prix", en: "Near an MRT station, good value for money", es: "Cerca del MRT, buena relación calidad-precio", de: "In der Nähe der MRT, gutes Preis-Leistungs-Verhältnis" } },
          { label: "Marina Bay Sands (4★+)", price: "350–600 €", detail: { fr: "Piscine à débordement iconique incluse", en: "Iconic infinity pool included", es: "Icónica piscina infinita incluida", de: "Ikonischer Infinity-Pool inklusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Repas hawker centre", en: "Hawker centre meal", es: "Comida en hawker centre", de: "Hawker Center-Mahlzeit" }, price: "3–6 €", detail: { fr: "Chicken rice, laksa, nasi lemak", en: "Chicken rice, laksa, nasi lemak", es: "Chicken rice, laksa, nasi lemak", de: "Hühnerreis, Laksa, Nasi Lemak" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelklasserestaurant" }, price: "15–30 €", detail: { fr: "Cuisine asiatique moderne ou fusion", en: "Modern Asian or fusion cuisine", es: "Cocina asiática moderna o fusión", de: "Moderne oder asiatische Fusionsküche" } },
          { label: { fr: "Chilli Crab au restaurant", en: "Chilli Crab at a restaurant", es: "Chilli Crab en restaurante", de: "Chili-Krabbe im Restaurant" }, price: "40–80 €", detail: { fr: "Pour deux, spécialité nationale", en: "For two, the national speciality", es: "Para dos, especialidad nacional", de: "Für zwei, nationale Spezialität" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "MRT (métro) par trajet", en: "MRT (metro) per ride", es: "MRT (metro) por trayecto", de: "MRT (U-Bahn) pro Fahrt" }, price: "1–2 €", detail: { fr: "Réseau très efficace, AC dans tous les wagons", en: "Highly efficient network, AC in all carriages", es: "Red muy eficiente, aire acondicionado en todos los vagones", de: "Sehr effizientes Netz, Klimaanlage in allen Waggons" } },
          { label: { fr: "Grab (équiv. Uber) course", en: "Grab (Uber equivalent) ride", es: "Carrera en Grab (equivalente a Uber)", de: "Schnappen Sie sich eine Fahrt (Uber-Äquivalent)." }, price: "5–15 €", detail: { fr: "Appli indispensable, très fiable", en: "An essential, very reliable app", es: "Aplicación indispensable, muy fiable", de: "Unverzichtbare App, sehr zuverlässig" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Gardens by the Bay (serres)", en: "Gardens by the Bay (greenhouses)", es: "Gardens by the Bay (invernaderos)", de: "Gardens by the Bay (Gewächshäuser)" }, price: "20–28 €", detail: { fr: "Cloud Forest + Flower Dome", en: "Cloud Forest + Flower Dome", es: "Cloud Forest + Flower Dome", de: "Nebelwald + Blumenkuppel" } },
          { label: { fr: "Universal Studios (journée)", en: "Universal Studios (day)", es: "Universal Studios (día)", de: "Universal Studios (Tag)" }, price: "65–85 €", detail: { fr: "Tarif adulte", en: "Adult rate", es: "Tarifa adulto", de: "Erwachsenentarif" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Capsule hôtel, hawker centres, MRT", en: "Capsule hotel, hawker centres, MRT", es: "Hotel cápsula, hawker centres, MRT", de: "Kapselhotel, Hawker Center, MRT" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "120–200 €/j", desc: { fr: "Hôtel 3★, restos mid-range, attractions", en: "3★ hotel, mid-range restaurants, attractions", es: "Hotel 3★, restaurantes de gama media, atracciones", de: "3★ Hotel, Mittelklasse-Restaurants, Sehenswürdigkeiten" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "350 €+/j", desc: { fr: "Marina Bay Sands, gastronomie, spa", en: "Marina Bay Sands, fine dining, spa", es: "Marina Bay Sands, gastronomía, spa", de: "Marina Bay Sands, Gastronomie, Spa" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Singapour (base) + excursions Malaisie / Indonésie", en: "Singapore (base) + excursions to Malaysia / Indonesia", es: "Singapur (base) + excursiones a Malasia / Indonesia", de: "Singapur (Basis) + Ausflüge nach Malaysia/Indonesien" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Singapour", en: "Return flight Paris–Singapore", es: "Vuelo ida y vuelta Madrid–Singapur", de: "Hin- und Rückflug Paris–Singapur" }, amount: "700–950 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "500–700 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "350–500 €" },
            { label: { fr: "Transport local (MRT + Grab)", en: "Local transport (MRT + Grab)", es: "Transporte local (MRT + Grab)", de: "Nahverkehr (MRT + Grab)" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Singapour", en: "Return flight Paris–Singapore", es: "Vuelo ida y vuelta Madrid–Singapur", de: "Hin- und Rückflug Paris–Singapur" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "600–900 €" },
            { label: { fr: "Transport local", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "200–300 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Singapour (Business)", en: "Return flight Paris–Singapore (Business)", es: "Vuelo ida y vuelta Madrid–Singapur (Business)", de: "Hin- und Rückflug Paris–Singapur (Business)" }, amount: "3 000–4 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Gastronomie (restaurants étoilés)", en: "Fine dining (Michelin-starred restaurants)", es: "Gastronomía (restaurantes con estrella)", de: "Gastronomie (Sternerestaurants)" }, amount: "800–1 500 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions", es: "Transporte y excursiones privadas", de: "Transport und private Ausflüge" }, amount: "400–700 €" },
            { label: { fr: "Activités premium", en: "Premium activities", es: "Actividades premium", de: "Premium-Aktivitäten" }, amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~13h (Singapore Airlines direct, Air France)", en: "~13h (Singapore Airlines direct, Air France)", es: "~13h (Singapore Airlines directo, Iberia)", de: "ca. 13 Std. (Singapore Airlines direkt, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)", es: "Sin visado para ciudadanos de la UE (90 días)", de: "Visumfrei für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dollar de Singapour (1€ ≈ 1,40–1,50 SGD)", en: "Singapore dollar (1€ ≈ 1.40–1.50 SGD)", es: "Dólar de Singapur (1€ ≈ 1,40–1,50 SGD)", de: "Singapur-Dollar (1€ ≈ 1,40–1,50 SGD)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (officiel), mandarin, malais, tamoul", en: "English (official), Mandarin, Malay, Tamil", es: "Inglés (oficial), mandarín, malayo, tamil", de: "Englisch (offiziell), Mandarin, Malaiisch, Tamil" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G – 230 V (même qu'UK, adaptateur conseillé)", en: "Type G — 230V (same as UK, adapter recommended)", es: "Tipo G – 230 V (igual que en el Reino Unido, se recomienda adaptador)", de: "Typ G – 230 V (wie Großbritannien, Adapter empfohlen)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "5G dans toute la ville, SIM touristique disponible à l'aéroport", en: "5G across the city, tourist SIM available at the airport", es: "5G en toda la ciudad, SIM turística disponible en el aeropuerto", de: "5G in der ganzen Stadt, Touristen-SIM am Flughafen verfügbar" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable et excellente (parmi les meilleures d'Asie)", en: "Drinkable and excellent (among the best in Asia)", es: "Potable y excelente (entre las mejores de Asia)", de: "Trinkbar und ausgezeichnet (unter den besten in Asien)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucun vaccin obligatoire, pays très sûr et propre", en: "No mandatory vaccines, a very safe and clean country", es: "Ninguna vacuna obligatoria, país muy seguro y limpio", de: "Keine Impfpflicht, sehr sicheres und sauberes Land" } },
  ],
};
