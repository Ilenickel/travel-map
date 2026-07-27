export const PERU = {
  code: "PER",
  numericId: 604,
  name: { fr: "Pérou", en: "Peru", es: "Perú", de: "Peru" },
  emoji: "🇵🇪",
  capital: { fr: "Lima", en: "Lima", es: "Lima", de: "Lima" },
  language: { fr: "Espagnol / Quechua", en: "Spanish / Quechua", es: "Español / quechua", de: "Spanisch / Quechua" },
  currency: { fr: "Sol (S/)", en: "Sol (S/)", es: "Sol (S/)", de: "Sol (S/)" },
  timezone: "UTC-5",
  filter: {
    budgetMin: 35, budgetMid: 90,
    tripMin: 1600, tripMid: 3000,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 3,
    gastronomie: 2,
    architecture: 2,
    desert: 2,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 2,
  },
  description: {
    fr: "Le Pérou est le cœur de l'Amérique andine : Machu Picchu la cité inca au-dessus des nuages, Cusco la capitale inca, la mer de dunes de Huacachina, le lac Titicaca le plus haut du monde et la gastronomie péruvienne parmi les meilleures au monde.", en: "Peru is the heart of Andean America: Machu Picchu, the Inca city above the clouds, Cusco the Inca capital, the sea of dunes at Huacachina, Lake Titicaca the highest in the world, and Peruvian cuisine, among the best in the world.", es: "Perú es el corazón de la América andina: Machu Picchu, la ciudad inca sobre las nubes, Cusco, la capital inca, el mar de dunas de Huacachina, el lago Titicaca, el más alto del mundo, y la gastronomía peruana, entre las mejores del mundo.", de: "Peru ist das Herz der Andenamerikas: Machu Picchu, die Inkastadt über den Wolken, Cusco, die Inkahauptstadt, das Dünenmeer von Huacachina, der Titicacasee, der höchste der Welt, und die peruanische Gastronomie, die zu den besten der Welt zählt.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre", de: "Mai – Oktober" },
      label: { fr: "Saison sèche (Andes)", en: "Dry season (Andes)", es: "Estación seca (Andes)", de: "Trockenzeit (Anden)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour Machu Picchu et le trek Inca : ciel bleu, sentiers secs. Températures fraîches mais agréables.", en: "Best time for Machu Picchu and the Inca Trail: blue skies, dry trails. Cool but pleasant temperatures.", es: "Mejor época para Machu Picchu y el Camino Inca: cielo despejado, senderos secos. Temperaturas frescas pero agradables.", de: "Beste Zeit für Machu Picchu und die Inka-Wanderung: blauer Himmel, trockene Wege. Kühle, aber angenehme Temperaturen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Inti Raymi", en: "Inti Raymi", es: "Inti Raymi", de: "Inti Raymi" },
      color: "#f9a8d4",
      description: {
        fr: "Fête du Soleil (Inti Raymi) à Cusco le 24 juin. Saison sèche au pic, festivals andins animés.", en: "Festival of the Sun (Inti Raymi) in Cusco on 24 June. Peak dry season, lively Andean festivals.", es: "Fiesta del Sol (Inti Raymi) en Cusco el 24 de junio. Estación seca en su punto álgido, animados festivales andinos.", de: "Sonnenfest (Inti Raymi) in Cusco am 24. Juni. Trockenzeit auf dem Höhepunkt, lebhafte Andenfeste.",
      },
      icon: "🌞",
    },
    {
      months: { fr: "Décembre – Avril", en: "December – April", es: "Diciembre – Abril", de: "Dezember – April" },
      label: { fr: "Lima & Côte", en: "Lima & Coast", es: "Lima y costa", de: "Lima und Küste" },
      color: "#3b82f6",
      description: {
        fr: "Saison humide dans les Andes (mais Machu Picchu reste faisable). Lima et la côte sont parfaites toute l'année. Amazonie luxuriante.", en: "Wet season in the Andes (but Machu Picchu remains doable). Lima and the coast are great year-round. Lush Amazon.", es: "Estación húmeda en los Andes (pero Machu Picchu sigue siendo viable). Lima y la costa son perfectas todo el año. Amazonía exuberante.", de: "Regenzeit in den Anden (aber Machu Picchu bleibt machbar). Lima und die Küste sind das ganze Jahr über perfekt. Üppiger Amazonas.",
      },
      icon: "🌦",
    },
  ],

  weatherCities: [
    {
      id: "lima",
      name: "Lima",
      region: { fr: "Côte", en: "Coast", es: "Costa", de: "Seite" },
      data: [
        { month: "Jan", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 23, rain: 6,   icon: "☀️" },
        { month: "Avr", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 19, rain: 1,   icon: "☀️" },
        { month: "Jun", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 16, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 15, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 16, rain: 1,   icon: "☀️" },
        { month: "Oct", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Nov", temp: 19, rain: 0,   icon: "☀️" },
        { month: "Déc", temp: 21, rain: 1,   icon: "☀️" },
      ],
    },
    {
      id: "cusco",
      name: "Cusco",
      region: { fr: "Andes (3 400 m)", en: "Andes (3,400 m)", es: "Andes (3.400 m)", de: "Anden (3.400 m)" },
      data: [
        { month: "Jan", temp: 12, rain: 140, icon: "⛅" },
        { month: "Fév", temp: 12, rain: 120, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 10,  icon: "☀️" },
        { month: "Jun", temp: 10, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 9,  rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 10, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 12, rain: 20,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Nov", temp: 14, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 13, rain: 115, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Machu Picchu",
      region: { fr: "Cusco", en: "Cusco", es: "Cusco", de: "Cusco" },
      description: {
        fr: "La cité inca perchée à 2 430 m dans les Andes est le symbole du Pérou. Accessible en train depuis Cusco ou à pied via le mythique Chemin de l'Inca (4 jours).", en: "The Inca city perched at 2,430 m in the Andes is the symbol of Peru. Reachable by train from Cusco or on foot via the legendary Inca Trail (4 days).", es: "La ciudad inca encaramada a 2.430 m en los Andes es el símbolo de Perú. Accesible en tren desde Cusco o a pie por el mítico Camino Inca (4 días).", de: "Die Inkastadt liegt auf 2.430 m in den Anden und ist das Wahrzeichen Perus. Erreichbar mit dem Zug von Cusco oder zu Fuß über den legendären Inka-Trail (4 Tage).",
      },
      wikipedia: "Machu_Picchu",
      tags: ["UNESCO", "Histoire", "Nature", "Randonnée", "Architecture"],
      mustSee: [
        { name: { fr: "Cité inca de Machu Picchu", en: "Machu Picchu Inca city", es: "Ciudad inca de Machu Picchu", de: "Inkastadt Machu Picchu" }, wikipedia: "Machu_Picchu" },
        { name: { fr: "Montagne Huayna Picchu", en: "Huayna Picchu Mountain", es: "Montaña Huayna Picchu", de: "Berg Huayna Picchu" }, wikipedia: "Huayna_Picchu" },
        { name: { fr: "Chemin de l'Inca (4 jours)", en: "Inca Trail (4 days)", es: "Camino Inca (4 días)", de: "Inka-Trail (4 Tage)" }, wikipedia: "Inca_Trail_to_Machu_Picchu" },
        { name: { fr: "Aguas Calientes — village de départ", en: "Aguas Calientes — starting village", es: "Aguas Calientes — pueblo de partida", de: "Aguas Calientes – Abfahrtsort" }, wikipedia: "Aguas_Calientes,_Peru" },
      ],
    },
    {
      id: 2,
      name: "Cusco",
      region: { fr: "Andes", en: "Andes", es: "Andes", de: "Anden" },
      description: {
        fr: "L'ancienne capitale de l'Empire Inca, aujourd'hui ville coloniale magnifique à 3 400 m d'altitude. Cathédrale baroque sur fondations incas, marché de Pisac et Vallée Sacrée.", en: "The former capital of the Inca Empire, today a magnificent colonial town at 3,400 m altitude. Baroque cathedral built on Inca foundations, Pisac market and the Sacred Valley.", es: "La antigua capital del Imperio Inca, hoy una magnífica ciudad colonial a 3.400 m de altitud. Catedral barroca sobre cimientos incas, mercado de Pisac y Valle Sagrado.", de: "Die ehemalige Hauptstadt des Inka-Reiches, heute eine prächtige Kolonialstadt auf 3.400 m über dem Meeresspiegel. Barocke Kathedrale auf Inkafundamenten, Pisac-Markt und Heiliges Tal.",
      },
      wikipedia: "Cusco",
      tags: ["Histoire", "Culture", "UNESCO", "Montagne", "Architecture", "Gastronomie", "Ville"],
      mustSee: [
        { name: { fr: "Qorikancha — temple inca du Soleil", en: "Qorikancha — Inca Temple of the Sun", es: "Qorikancha — templo inca del Sol", de: "Qorikancha – Inka-Sonnentempel" }, wikipedia: "File:Entrada_del_Museo_Qorikancha_02.jpg" },
        { name: { fr: "Forteresse de Sacsayhuamán", en: "Sacsayhuamán Fortress", es: "Fortaleza de Sacsayhuamán", de: "Sacsayhuamán-Festung" }, wikipedia: "Sacsayhuamán" },
        { name: { fr: "Plaza de Armas de Cusco", en: "Plaza de Armas, Cusco", es: "Plaza de Armas de Cusco", de: "Cusco Plaza de Armas" }, wikipedia: "Plaza_de_Armas_(Cusco)" },
        { name: { fr: "Marché de Pisac & Vallée Sacrée", en: "Pisac Market & Sacred Valley", es: "Mercado de Pisac y Valle Sagrado", de: "Pisac-Markt und Heiliges Tal" }, wikipedia: "Sacred_Valley" },
      ],
    },
    {
      id: 3,
      name: "Lima",
      region: { fr: "Côte", en: "Coast", es: "Costa", de: "Seite" },
      description: {
        fr: "Capitale gastronomique de l'Amérique latine, avec des restaurants parmi les meilleurs au monde (Central, Maido). Le quartier de Miraflores et le Larcomaroffrent une vie urbaine cosmopolite.", en: "The gastronomic capital of Latin America, with restaurants ranking among the best in the world (Central, Maido). The Miraflores district and the Larcomar offer cosmopolitan city life.", es: "Capital gastronómica de América Latina, con restaurantes entre los mejores del mundo (Central, Maido). El barrio de Miraflores y el Larcomar ofrecen una vida urbana cosmopolita.", de: "Gastronomische Hauptstadt Lateinamerikas mit Restaurants, die zu den besten der Welt zählen (Central, Maido). Das Viertel Miraflores und Larcomar bieten kosmopolitisches Stadtleben.",
      },
      wikipedia: "Lima",
      tags: ["Gastronomie", "Culture", "Ville", "Art", "Architecture", "Plage"],
      mustSee: [
        { name: { fr: "Quartier Miraflores & Barranco", en: "Miraflores & Barranco districts", es: "Barrios de Miraflores y Barranco", de: "Viertel Miraflores und Barranco" }, wikipedia: "Miraflores_District,_Lima" },
        { name: { fr: "Musée Larco — collections précolumbiennes", en: "Larco Museum — pre-Columbian collections", es: "Museo Larco — colecciones precolombinas", de: "Larco Museum – präkolumbianische Sammlungen" }, wikipedia: "Larco_Museum" },
        { name: { fr: "Huaca Pucllana — pyramide inca en ville", en: "Huaca Pucllana — Inca pyramid in the city", es: "Huaca Pucllana — pirámide inca en la ciudad", de: "Huaca Pucllana – Inka-Pyramide in der Stadt" }, wikipedia: "Huaca_Pucllana" },
      ],
    },
    {
      id: 4,
      name: { fr: "Lac Titicaca", en: "Lake Titicaca", es: "Lago Titicaca", de: "Titicacasee" },
      region: { fr: "Puno", en: "Puno", es: "Puno", de: "Puno" },
      description: {
        fr: "À 3 810 m d'altitude, le lac Titicaca est le plus haut lac navigable du monde. Les îles flottantes des Uros, construites en roseaux, et Taquile habitées par des tisserands sont uniques.", en: "At 3,810 m altitude, Lake Titicaca is the highest navigable lake in the world. The floating Uros Islands, built from reeds, and Taquile, home to weavers, are unlike anywhere else.", es: "A 3.810 m de altitud, el lago Titicaca es el lago navegable más alto del mundo. Las islas flotantes de los Uros, construidas con totora, y Taquile, hogar de tejedores, son únicas.", de: "Mit 3.810 m über dem Meeresspiegel ist der Titicacasee der höchste schiffbare See der Welt. Einzigartig sind die schwimmenden Inseln Uros, die aus Schilf gebaut sind, und Taquile, auf denen Weber leben.",
      },
      wikipedia: "File:Amanecer_en_el_lago_Titicaca,_Puno,_Perú,_2015-08-01,_DD_01.JPG",
      tags: ["Nature", "Culture", "Montagne"],
      mustSee: [
        { name: { fr: "Îles flottantes des Uros", en: "Floating Uros Islands", es: "Islas flotantes de los Uros", de: "Schwimmende Inseln der Uros" }, wikipedia: "File:View_on_a_floating_Uros_Island_from_a_Uru_watchtower,_visible_are_drying_clothes_and_a_shower_building.jpg" },
        { name: { fr: "Île de Taquile — tisserands", en: "Taquile Island — weavers", es: "Isla de Taquile — tejedores", de: "Insel Taquile – Weber" }, wikipedia: "File:Taquile from Amantani.jpg" },
        { name: { fr: "Île Amantaní — nuit chez l'habitant", en: "Amantaní Island — homestay overnight", es: "Isla Amantaní — noche con familia local", de: "Insel Amantaní – Übernachtung bei einer Gastfamilie" }, wikipedia: "File:Intikawan Amantani.jpg" },
        { name: { fr: "Lever de soleil sur le lac", en: "Sunrise over the lake", es: "Amanecer sobre el lago", de: "Sonnenaufgang am See" }, wikipedia: "File:Balsas en el lago Titicaca desde el lado boliviana.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Pérou est relativement abordable, surtout pour la nourriture et les transports locaux. Les circuits organisés (Machu Picchu, Chemin de l'Inca) représentent le plus gros poste de dépense.", en: "Peru is relatively affordable, especially for food and local transport. Organised tours (Machu Picchu, Inca Trail) represent the biggest expense.", es: "Perú es relativamente asequible, sobre todo en comida y transporte local. Los circuitos organizados (Machu Picchu, Camino Inca) representan el mayor gasto.", de: "Peru ist relativ erschwinglich, insbesondere für lokale Lebensmittel und Transportmittel. Organisierte Touren (Machu Picchu, Inka-Trail) stellen den größten Kostenfaktor dar.",
    },
    currency: "PEN (S/)",
    exchangeRate: "~4,2 S/ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir hostel", en: "Hostel dorm", es: "Dormitorio de hostel", de: "Schlafsaal im Hostel" }, price: "6–12 €", detail: { fr: "Très bons à Cusco, Lima et Aguas Calientes", en: "Very good ones in Cusco, Lima and Aguas Calientes", es: "Muy buenos en Cusco, Lima y Aguas Calientes", de: "Sehr gut in Cusco, Lima und Aguas Calientes" } },
          { label: { fr: "Guesthouse / hostal", en: "Guesthouse / hostal", es: "Guesthouse / hostal", de: "Gästehaus/Herberge" }, price: "15–35 €", detail: { fr: "Chambre privée correcte", en: "Decent private room", es: "Habitación privada decente", de: "Ordentliches Privatzimmer" } },
          { label: { fr: "Hôtel confort", en: "Comfort hotel", es: "Hotel confort", de: "Komforthotel" }, price: "40–90 €", detail: { fr: "Chambre double bien équipée", en: "Well-equipped double room", es: "Habitación doble bien equipada", de: "Gut ausgestattetes Doppelzimmer" } },
          { label: { fr: "Boutique hôtel colonial (Cusco)", en: "Colonial boutique hotel (Cusco)", es: "Hotel boutique colonial (Cusco)", de: "Boutique-Kolonialhotel (Cusco)" }, price: "80–180 €", detail: { fr: "Bâtisse coloniale sur fondations incas", en: "Colonial building on Inca foundations", es: "Edificio colonial sobre cimientos incas", de: "Kolonialgebäude auf Inkafundamenten" } },
          { label: { fr: "Hôtel de luxe (Lima, Machu Picchu)", en: "Luxury hotel (Lima, Machu Picchu)", es: "Hotel de lujo (Lima, Machu Picchu)", de: "Luxushotel (Lima, Machu Picchu)" }, price: "200–600 €", detail: { fr: "Belmond, Palacio del Inka — vue spectaculaire", en: "Belmond, Palacio del Inka — spectacular views", es: "Belmond, Palacio del Inka — vistas espectaculares", de: "Belmond, Palacio del Inka – spektakuläre Aussicht" } },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Menu du jour (restaurant local)", en: "Set menu (local restaurant)", es: "Menú del día (restaurante local)", de: "Tagesmenü (örtliches Restaurant)" }, price: "2–4 €", detail: { fr: "Soupe + plat principal + boisson", en: "Soup + main course + drink", es: "Sopa + plato principal + bebida", de: "Suppe + Hauptgericht + Getränk" } },
          { label: { fr: "Ceviche (marché)", en: "Ceviche (market)", es: "Ceviche (mercado)", de: "Ceviche (Markt)" }, price: "3–6 €", detail: { fr: "La spécialité péruvienne par excellence", en: "The quintessential Peruvian speciality", es: "La especialidad peruana por excelencia", de: "Die peruanische Spezialität schlechthin" } },
          { label: "Lomo saltado / pollo a la brasa", price: "5–10 €", detail: { fr: "Cuisine péruvienne classique", en: "Classic Peruvian cuisine", es: "Cocina peruana clásica", de: "Klassische peruanische Küche" } },
          { label: { fr: "Restaurant mid-range (Lima)", en: "Mid-range restaurant (Lima)", es: "Restaurante de gama media (Lima)", de: "Mittelklasserestaurant (Lima)" }, price: "15–30 €", detail: { fr: "Tiradito, causa, anticuchos", en: "Tiradito, causa, anticuchos", es: "Tiradito, causa, anticuchos", de: "Tiradito, causa, anticuchos" } },
          { label: { fr: "Restaurant gastronomique (Lima)", en: "Fine dining (Lima)", es: "Restaurante gastronómico (Lima)", de: "Gourmetrestaurant (Lima)" }, price: "60–150 €", detail: { fr: "Central, Maido, Astrid y Gastón — world class", en: "Central, Maido, Astrid y Gastón — world class", es: "Central, Maido, Astrid y Gastón — nivel mundial", de: "Central, Maido, Astrid y Gastón – Weltklasse" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus urbain (Lima)", en: "City bus (Lima)", es: "Autobús urbano (Lima)", de: "Stadtbus (Lima)" }, price: "0,30–0,60 €", detail: { fr: "Très économique mais bondé", en: "Very cheap but crowded", es: "Muy económico pero abarrotado", de: "Sehr günstig, aber überfüllt" } },
          { label: { fr: "Taxi / Uber (Lima)", en: "Taxi / Uber (Lima)", es: "Taxi / Uber (Lima)", de: "Taxi/Uber (Lima)" }, price: "3–10 €", detail: { fr: "Uber très pratique à Lima", en: "Uber very handy in Lima", es: "Uber muy práctico en Lima", de: "Sehr praktischer Uber in Lima" } },
          { label: { fr: "Train Cusco–Aguas Calientes", en: "Train Cusco–Aguas Calientes", es: "Tren Cusco–Aguas Calientes", de: "Zug Cusco–Aguas Calientes" }, amount: "40–100 €", detail: { fr: "PeruRail ou Inca Rail — 3h30", en: "PeruRail or Inca Rail — 3h30", es: "PeruRail o Inca Rail — 3h30", de: "PeruRail oder Inca Rail – 3 Std. 30 Min." } },
          { label: { fr: "Bus longue distance (Cruz del Sur)", en: "Long-distance bus (Cruz del Sur)", es: "Autobús de larga distancia (Cruz del Sur)", de: "Fernbus (Cruz del Sur)" }, price: "15–40 €", detail: { fr: "Lima–Cusco (21h !) ou vol recommandé", en: "Lima–Cusco (21h!) — flight recommended instead", es: "Lima–Cusco (¡21h!) — se recomienda volar", de: "Lima–Cusco (21 Std.!) oder empfohlener Flug" } },
          { label: { fr: "Vol intérieur (LATAM, Sky Airline)", en: "Domestic flight (LATAM, Sky Airline)", es: "Vuelo doméstico (LATAM, Sky Airline)", de: "Inlandsflug (LATAM, Sky Airline)" }, price: "40–100 €", detail: { fr: "Lima–Cusco en 1h — fortement recommandé", en: "Lima–Cusco in 1h — strongly recommended", es: "Lima–Cusco en 1h — muy recomendado", de: "Lima–Cusco in 1 Stunde – sehr zu empfehlen" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Machu Picchu (entrée + bus)", en: "Machu Picchu (entry + bus)", es: "Machu Picchu (entrada + autobús)", de: "Machu Picchu (Eintritt + Bus)" }, price: "45–65 €", detail: { fr: "Réservation obligatoire bien à l'avance", en: "Booking required well in advance", es: "Reserva obligatoria con mucha antelación", de: "Reservierung rechtzeitig im Voraus erforderlich" } },
          { label: { fr: "Chemin de l'Inca (4j, guidé)", en: "Inca Trail (4d, guided)", es: "Camino Inca (4d, guiado)", de: "Inka-Trail (4 Tage, geführt)" }, price: "500–700 €", detail: { fr: "Tout inclus — places limitées, réserver 6 mois avant", en: "All-inclusive — limited spots, book 6 months ahead", es: "Todo incluido — plazas limitadas, reservar con 6 meses de antelación", de: "All inclusive – begrenzte Plätze, Buchung 6 Monate im Voraus" } },
          { label: { fr: "Tour Vallée Sacrée (guidé)", en: "Sacred Valley tour (guided)", es: "Tour por el Valle Sagrado (guiado)", de: "Tour durch das Heilige Tal (geführt)" }, price: "30–60 €", detail: { fr: "Pisac, Ollantaytambo, Moray", en: "Pisac, Ollantaytambo, Moray", es: "Pisac, Ollantaytambo, Moray", de: "Pisac, Ollantaytambo, Moray" } },
          { label: { fr: "Excursion lac Titicaca (2j)", en: "Lake Titicaca excursion (2d)", es: "Excursión al lago Titicaca (2d)", de: "Ausflug zum Titicacasee (2 Tage)" }, price: "40–80 €", detail: { fr: "Aller-retour, hébergement chez l'habitant inclus", en: "Round trip, homestay included", es: "Ida y vuelta, alojamiento con familia local incluido", de: "Hin- und Rückfahrt, Unterkunft bei einer Gastfamilie inklusive" } },
          { label: { fr: "Sandboard & buggy (Huacachina)", en: "Sandboarding & buggy (Huacachina)", es: "Sandboard y buggy (Huacachina)", de: "Sandboard & Buggy (Huacachina)" }, price: "15–25 €", detail: { fr: "Dunes géantes de la côte péruvienne", en: "Giant dunes on the Peruvian coast", es: "Dunas gigantes de la costa peruana", de: "Riesige Dünen der peruanischen Küste" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Hostel + menus locaux + bus + activités basiques", en: "Hostel + local set menus + bus + basic activities", es: "Hostel + menús locales + autobús + actividades básicas", de: "Herberge + lokale Menüs + Bus + grundlegende Aktivitäten" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "90–150 €/j", desc: { fr: "Hôtel confort + restos mid-range + activités", en: "Comfort hotel + mid-range restaurants + activities", es: "Hotel confort + restaurantes de gama media + actividades", de: "Komforthotel + Mittelklasserestaurants + Aktivitäten" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "300 €+/j", desc: { fr: "Hôtel boutique + gastronomie Lima + excursions privées", en: "Boutique hotel + fine dining in Lima + private excursions", es: "Hotel boutique + gastronomía en Lima + excursiones privadas", de: "Boutique-Hotel + Gastronomie Lima + private Ausflüge" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Lima (2j) → Nasca (1j) → Cusco (3j) → Machu Picchu (2j) → Vallée Sacrée (2j) → Lac Titicaca (2j) → Lima (2j)", en: "Lima (2d) → Nasca (1d) → Cusco (3d) → Machu Picchu (2d) → Sacred Valley (2d) → Lake Titicaca (2d) → Lima (2d)", es: "Lima (2d) → Nasca (1d) → Cusco (3d) → Machu Picchu (2d) → Valle Sagrado (2d) → Lago Titicaca (2d) → Lima (2d)", de: "Lima (2 Tage) → Nasca (1 Tage) → Cusco (3 Tage) → Machu Picchu (2 Tage) → Heiliges Tal (2 Tage) → Titicacasee (2 Tage) → Lima (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 600 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lima", en: "Return flight Paris–Lima", es: "Vuelo ida y vuelta París–Lima", de: "Hin- und Rückflug Paris–Lima" }, amount: "600–900 €" },
            { label: { fr: "Vol Lima–Cusco + transports", en: "Flight Lima–Cusco + transport", es: "Vuelo Lima–Cusco + transportes", de: "Flug Lima–Cusco + Transport" }, amount: "100–160 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–350 €" },
            { label: { fr: "Machu Picchu + activités", en: "Machu Picchu + activities", es: "Machu Picchu + actividades", de: "Machu Picchu + Aktivitäten" }, amount: "250–450 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 000 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lima", en: "Return flight Paris–Lima", es: "Vuelo ida y vuelta París–Lima", de: "Hin- und Rückflug Paris–Lima" }, amount: "700–1 100 €" },
            { label: { fr: "Vols intérieurs & trains", en: "Domestic flights & trains", es: "Vuelos domésticos y trenes", de: "Inlandsflüge und Züge" }, amount: "200–350 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "600–900 €" },
            { label: { fr: "Activités (Machu Picchu, Titicaca)", en: "Activities (Machu Picchu, Titicaca)", es: "Actividades (Machu Picchu, Titicaca)", de: "Aktivitäten (Machu Picchu, Titicaca)" }, amount: "400–700 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "6 500 € +",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lima (business)", en: "Return flight Paris–Lima (business)", es: "Vuelo ida y vuelta París–Lima (business)", de: "Hin- und Rückflug Paris–Lima (Business Class)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Vols & trains privés", en: "Private flights & trains", es: "Vuelos y trenes privados", de: "Privatflüge und Züge" }, amount: "400–700 €" },
            { label: { fr: "Hôtels Belmond & luxe (14 nuits)", en: "Belmond & luxury hotels (14 nights)", es: "Hoteles Belmond y de lujo (14 noches)", de: "Belmond & Luxushotels (14 Nächte)" }, amount: "2 000–4 000 €" },
            { label: { fr: "Gastronomie Lima + guides", en: "Fine dining in Lima + guides", es: "Gastronomía en Lima + guías", de: "Gastronomie Lima + Führer" }, amount: "800–1 500 €" },
            { label: { fr: "Chemin Inca & expériences privées", en: "Inca Trail & private experiences", es: "Camino Inca y experiencias privadas", de: "Inka-Trail und private Erlebnisse" }, amount: "700–1 200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~13–14h avec escale (Bogotá, Miami, Madrid)", en: "~13–14h with a layover (Bogotá, Miami, Madrid)", es: "~13–14h con escala (Bogotá, Miami, Madrid)", de: "ca. 13–14 Std. mit Zwischenstopp (Bogotá, Miami, Madrid)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)", es: "Sin visado para los franceses (90 días)", de: "Kein Visum für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Sol péruvien (S/) — retrait DAB recommandé, peu de cartes acceptées", en: "Peruvian sol (S/) — ATM withdrawals recommended, few cards accepted", es: "Sol peruano (S/) — se recomienda retirar en cajeros, pocas tarjetas aceptadas", de: "Peruanischer Sol (S/) – Abhebung am Geldautomaten empfohlen, nur wenige Karten werden akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol et quechua — anglais dans les zones touristiques", en: "Spanish and Quechua — English in tourist areas", es: "Español y quechua — inglés en zonas turísticas", de: "Spanisch und Quechua – Englisch in Touristengebieten" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type A/B/C — 220V (adaptateur recommandé)", en: "Type A/B/C — 220V (adapter recommended)", es: "Tipo A/B/C — 220V (se recomienda adaptador)", de: "Typ A/B/C – 220 V (Adapter empfohlen)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "SIM locale (Claro, Movistar) — réseau limité dans les zones reculées", en: "Local SIM (Claro, Movistar) — limited network in remote areas", es: "SIM local (Claro, Movistar) — red limitada en zonas remotas", de: "Lokale SIM-Karte (Claro, Movistar) – begrenztes Netz in abgelegenen Gebieten" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable", en: "Not drinkable — bottled water essential", es: "No potable — agua embotellada indispensable", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune recommandé pour l'Amazonie, médicament contre le mal d'altitude (Diamox)", en: "Yellow fever vaccine recommended for the Amazon, altitude sickness medication (Diamox)", es: "Se recomienda la vacuna contra la fiebre amarilla para la Amazonía, medicamento contra el mal de altura (Diamox)", de: "Gelbfieberimpfung für den Amazonas empfohlen, Medikamente gegen Höhenkrankheit (Diamox)" } },
  ],
};
