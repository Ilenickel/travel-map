export const NEPAL = {
  code: "NPL",
  numericId: 524,
  name: { fr: "Népal", en: "Nepal", es: "Nepal", de: "Nepal" },
  emoji: "🇳🇵",
  capital: { fr: "Katmandou", en: "Kathmandu", es: "Katmandú", de: "Kathmandu" },
  language: { fr: "Népalais", en: "Nepali", es: "Nepalí", de: "Nepali" },
  currency: { fr: "Roupie népalaise (NPR)", en: "Nepalese rupee (NPR)", es: "Rupia nepalí (NPR)", de: "Nepalesische Rupie (NPR)" },
  timezone: "UTC+5:45",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1300,
    tripMid: 2600,
  },
  criteria: {
    unesco: 3,
    nature: 3,
    randonnee: 3,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 0,
    plongee: 0,
  },
  description: {
    fr: "Le Népal est le toit du monde : 8 des 14 sommets de plus de 8 000 m y sont concentrés, dont l'Everest (8 849 m). Au-delà du trekking légendaire (Annapurna, Everest Base Camp), les temples hindous et bouddhistes de Katmandou, les rhinocéros du parc national de Chitwan et les lumières spirituelles de Pokhara en font une destination d'exception.", en: "Nepal is the roof of the world: 8 of the 14 peaks above 8,000 m are found here, including Everest (8,849 m). Beyond the legendary trekking (Annapurna, Everest Base Camp), the Hindu and Buddhist temples of Kathmandu, the rhinos of Chitwan National Park and the spiritual light of Pokhara make it an exceptional destination.", es: "Nepal es el techo del mundo: 8 de los 14 picos por encima de los 8000 m se concentran aquí, incluido el Everest (8849 m). Más allá del legendario trekking (Annapurna, campo base del Everest), los templos hindúes y budistas de Katmandú, los rinocerontes del parque nacional de Chitwan y las luces espirituales de Pokhara hacen de Nepal un destino excepcional.", de: "Nepal ist das Dach der Welt: 8 der 14 Gipfel über 8.000 m konzentrieren sich dort, darunter auch der Everest (8.849 m). Neben dem legendären Trekking (Annapurna, Everest Base Camp) machen die hinduistischen und buddhistischen Tempel von Kathmandu, die Nashörner des Chitwan-Nationalparks und die spirituellen Lichter von Pokhara es zu einem außergewöhnlichen Reiseziel.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Novembre", en: "October – November", es: "Octubre – Noviembre", de: "Oktober – November" },
      label: { fr: "Automne (après mousson)", en: "Autumn (post-monsoon)", es: "Otoño (tras el monzón)", de: "Herbst (nach dem Monsun)" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période pour le trekking : ciel bleu, vues nettes sur les Himalayas, températures agréables. Les sentiers sont bondés mais la beauté est incomparable.", en: "Best period for trekking: blue skies, crisp views of the Himalayas, pleasant temperatures. Trails are crowded but the beauty is unmatched.", es: "Mejor época para el trekking: cielo azul, vistas nítidas del Himalaya, temperaturas agradables. Los senderos están llenos, pero la belleza es incomparable.", de: "Beste Zeit zum Wandern: blauer Himmel, klare Sicht auf den Himalaya, angenehme Temperaturen. Die Wege sind überfüllt, aber die Schönheit ist unvergleichlich.",
      },
      icon: "🏔️",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Printemps (rhododendrons)", en: "Spring (rhododendrons)", es: "Primavera (rododendros)", de: "Frühling (Rhododendren)" },
      color: "#f9a8d4",
      description: {
        fr: "Deuxième meilleure saison : rhododendrons en fleurs sur les sentiers, temps clair. Quelques nuages possibles en avril-mai.", en: "Second best season: rhododendrons blooming along the trails, clear weather. Some clouds possible in April-May.", es: "Segunda mejor temporada: rododendros en flor a lo largo de los senderos, tiempo despejado. Algunas nubes posibles en abril-mayo.", de: "Zweitbeste Jahreszeit: Blühende Rhododendren auf den Wegen, klares Wetter. Im April-Mai sind einige Wolken möglich.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "kathmandu",
      name: { fr: "Katmandou", en: "Kathmandu", es: "Katmandú", de: "Kathmandu" },
      region: { fr: "Vallée de Katmandou (1 350 m)", en: "Kathmandu Valley (1,350 m)", es: "Valle de Katmandú (1350 m)", de: "Kathmandu-Tal (1.350 m)" },
      data: [
        { month: "Jan", temp: 10, rain: 15, icon: "⛅" },
        { month: "Fév", temp: 12, rain: 30, icon: "⛅" },
        { month: "Mar", temp: 16, rain: 40, icon: "☀️" },
        { month: "Avr", temp: 19, rain: 65, icon: "☀️" },
        { month: "Mai", temp: 22, rain: 110, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 230, icon: "⛅" },
        { month: "Jul", temp: 24, rain: 370, icon: "🌧️" },
        { month: "Aoû", temp: 23, rain: 330, icon: "⛅" },
        { month: "Sep", temp: 22, rain: 220, icon: "⛅" },
        { month: "Oct", temp: 19, rain: 55, icon: "☀️" },
        { month: "Nov", temp: 14, rain: 10, icon: "⛅" },
        { month: "Déc", temp: 10, rain: 10, icon: "⛅" },
      ],
    },
    {
      id: "pokhara",
      name: "Pokhara",
      region: { fr: "Gandaki (porte des Annapurna)", en: "Gandaki (gateway to the Annapurnas)", es: "Gandaki (puerta de las Annapurna)", de: "Gandaki (Annapurna-Tor)" },
      data: [
        { month: "Jan", temp: 13, rain: 35, icon: "⛅" },
        { month: "Fév", temp: 15, rain: 45, icon: "⛅" },
        { month: "Mar", temp: 19, rain: 65, icon: "☀️" },
        { month: "Avr", temp: 22, rain: 105, icon: "☀️" },
        { month: "Mai", temp: 23, rain: 205, icon: "⛅" },
        { month: "Jun", temp: 24, rain: 430, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 720, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 640, icon: "🌧️" },
        { month: "Sep", temp: 24, rain: 440, icon: "🌧️" },
        { month: "Oct", temp: 21, rain: 125, icon: "☀️" },
        { month: "Nov", temp: 17, rain: 30, icon: "☀️" },
        { month: "Déc", temp: 14, rain: 25, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Trek de l'Everest Base Camp", en: "Everest Base Camp Trek", es: "Trekking al campo base del Everest", de: "Everest-Basislager-Trek" },
      region: { fr: "Khumbu (Himalaya Est)", en: "Khumbu (Eastern Himalaya)", es: "Khumbu (Himalaya oriental)", de: "Khumbu (östlicher Himalaya)" },
      description: {
        fr: "L'EBC est le trek iconique du monde entier : 14 jours de marche jusqu'au camp de base de l'Everest à 5 364 m. Villages sherpa, monastères perchés, glaciers et panoramas sur les 8 000 m sont au programme. Difficulté modérée avec bonne condition physique.", en: "The EBC is the world's iconic trek: 14 days of hiking up to Everest Base Camp at 5,364 m. Sherpa villages, cliff-perched monasteries, glaciers and panoramas of the 8,000ers await. Moderate difficulty given good physical condition.", es: "El EBC es el trekking icónico del mundo entero: 14 días de caminata hasta el campo base del Everest a 5364 m. Pueblos sherpa, monasterios encaramados, glaciares y panorámicas de los ochomiles están en el programa. Dificultad moderada con buena condición física.", de: "Der EBC ist die kultige Wanderung um die Welt: 14-tägige Wanderung zum Everest-Basislager auf 5.364 m. Sherpa-Dörfer, hochgelegene Klöster, Gletscher und Panoramen über 8.000 m stehen auf dem Programm. Mäßiger Schwierigkeitsgrad bei guter körperlicher Verfassung.",
      },
      wikipedia: "File:Sagarmatha Trek 02.jpg",
      tags: ["Aventure", "Montagne"],
      mustSee: [
        { name: "Namche Bazaar", wikipedia: "Namche_Bazaar" },
        { name: "Tengboche Monastery", wikipedia: "File:Tengboche Buddhist Monastery, Nepal.jpg" },
        { name: "Kala Patthar (5 545 m)", wikipedia: "Kala_Patthar" },
        { name: { fr: "Glacier Khumbu", en: "Khumbu Glacier", es: "Glaciar Khumbu", de: "Khumbu-Gletscher" }, wikipedia: "Khumbu_Glacier" },
      ],
    },
    {
      id: 2,
      name: { fr: "Circuit des Annapurna", en: "Annapurna Circuit", es: "Circuito de las Annapurna", de: "Annapurna-Rennstrecke" },
      region: { fr: "Gandaki (Himalaya Ouest)", en: "Gandaki (Western Himalaya)", es: "Gandaki (Himalaya occidental)", de: "Gandaki (Westlicher Himalaya)" },
      description: {
        fr: "Le tour des Annapurna (12–21 jours) est considéré comme l'un des plus beaux treks du monde. Le col du Thorong La (5 416 m) offre des paysages inoubliables entre paysages sub-tropicaux et plateau tibétain. Pokhara est la ville de départ.", en: "The Annapurna Circuit (12–21 days) is considered one of the world's most beautiful treks. Thorong La Pass (5,416 m) offers unforgettable scenery ranging from sub-tropical landscapes to the Tibetan plateau. Pokhara is the starting point.", es: "El circuito de las Annapurna (12–21 días) está considerado uno de los treks más bellos del mundo. El paso de Thorong La (5416 m) ofrece paisajes inolvidables entre entornos subtropicales y la meseta tibetana. Pokhara es la ciudad de partida.", de: "Die Annapurna-Tour (12–21 Tage) gilt als eine der schönsten Wanderungen der Welt. Der Thorong-La-Pass (5.416 m) bietet unvergessliche Landschaften zwischen subtropischen Landschaften und dem tibetischen Plateau. Pokhara ist die Abflugstadt.",
      },
      wikipedia: "Annapurna_Circuit",
      tags: ["Aventure", "Montagne", "Nature"],
      mustSee: [
        { name: "Thorong La Pass (5 416 m)", wikipedia: "Thorong_La" },
        { name: "Muktinath Temple", wikipedia: "Muktinath" },
        { name: { fr: "Manang (village)", en: "Manang (village)", es: "Manang (pueblo)", de: "Manang (Dorf)" }, wikipedia: "Manang" },
        { name: { fr: "Poon Hill (lever de soleil)", en: "Poon Hill (sunrise)", es: "Poon Hill (amanecer)", de: "Poon Hill (Sonnenaufgang)" }, wikipedia: "Poon_Hill" },
      ],
    },
    {
      id: 3,
      name: { fr: "Katmandou & Vallée", en: "Kathmandu & Valley", es: "Katmandú y su valle", de: "Kathmandu und Tal" },
      region: { fr: "Bagmati", en: "Bagmati", es: "Bagmati", de: "Bagmati" },
      description: {
        fr: "La vallée de Katmandou concentre 7 zones UNESCO dont les temples de Pashupatinath (grand temple hindou crématoire), Boudhanath (grand stupa bouddhiste), Swayambhunath (temple des singes) et les palais des places Durbar.", en: "Kathmandu Valley concentrates 7 UNESCO sites including the Pashupatinath temple (a major Hindu cremation site), Boudhanath (a great Buddhist stupa), Swayambhunath (the monkey temple) and the palaces of the Durbar squares.", es: "El valle de Katmandú concentra 7 sitios UNESCO, incluidos el templo de Pashupatinath (gran templo crematorio hindú), Boudhanath (gran estupa budista), Swayambhunath (templo de los monos) y los palacios de las plazas Durbar.", de: "Das Kathmandu-Tal konzentriert sieben UNESCO-Gebiete, darunter die Tempel von Pashupatinath (großer hinduistischer Krematoriumstempel), Boudhanath (großer buddhistischer Stupa), Swayambhunath (Affentempel) und die Paläste auf den Durbar-Plätzen.",
      },
      wikipedia: "Kathmandu",
      tags: ["Spiritualité", "UNESCO"],
      mustSee: [
        { name: "Boudhanath Stupa", wikipedia: "File:Boudhanath, Kathmandu, Nepal.jpg" },
        { name: "Pashupatinath Temple", wikipedia: "Pashupatinath_Temple" },
        { name: "Swayambhunath", wikipedia: "Swayambhunath" },
        { name: "Kathmandu Durbar Square", wikipedia: "Kathmandu_Durbar_Square" },
      ],
    },
    {
      id: 4,
      name: { fr: "Parc National de Chitwan", en: "Chitwan National Park", es: "Parque Nacional de Chitwan", de: "Chitwan-Nationalpark" },
      region: { fr: "Terai", en: "Terai", es: "Terai", de: "Terai" },
      description: {
        fr: "Le parc national de Chitwan, inscrit au patrimoine UNESCO, protège une des dernières populations de rhinocéros unicornes d'Asie et des tigres du Bengale. Les safaris en éléphant ou en jeep et les balades en pirogue sont des expériences mémorables.", en: "Chitwan National Park, a UNESCO World Heritage site, protects one of Asia's last populations of one-horned rhinos as well as Bengal tigers. Elephant or jeep safaris and canoe rides are memorable experiences.", es: "El parque nacional de Chitwan, declarado Patrimonio de la Humanidad por la UNESCO, protege una de las últimas poblaciones de rinocerontes unicornio de Asia y tigres de Bengala. Los safaris en elefante o jeep y los paseos en piragua son experiencias memorables.", de: "Der Chitwan-Nationalpark, ein UNESCO-Weltkulturerbe, schützt eine der letzten Populationen asiatischer Panzernashörner und bengalischer Tiger. Elefanten- oder Jeep-Safaris und Kanufahrten sind unvergessliche Erlebnisse.",
      },
      wikipedia: "Chitwan_National_Park",
      tags: ["Safari", "UNESCO"],
      mustSee: [
        { name: { fr: "Rhinocéros unicorne d'Asie", en: "Indian one-horned rhinoceros", es: "Rinoceronte unicornio indio", de: "Asiatisches Nashorn" }, wikipedia: "Indian_rhinoceros" },
        { name: { fr: "Tigre du Bengale", en: "Bengal tiger", es: "Tigre de Bengala", de: "Bengalischer Tiger" }, wikipedia: "Bengal_tiger" },
        { name: { fr: "Balade en pirogue", en: "Canoe ride", es: "Paseo en piragua", de: "Kanufahrt" }, wikipedia: "Chitwan_National_Park" },
        { name: { fr: "Village tharu", en: "Tharu village", es: "Pueblo tharu", de: "Tharu-Dorf" }, wikipedia: "Tharu_people" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Népal est très abordable, surtout dans les villes. Le trekking entraîne des coûts supplémentaires (permits, guides, lodges). Pokhara et Katmandou sont bien équipées pour tous les budgets.", en: "Nepal is very affordable, especially in the cities. Trekking involves extra costs (permits, guides, lodges). Pokhara and Kathmandu are well equipped for every budget.", es: "Nepal es muy asequible, sobre todo en las ciudades. El trekking implica costes adicionales (permisos, guías, lodges). Pokhara y Katmandú están bien equipadas para todos los presupuestos.", de: "Nepal ist besonders in den Städten sehr erschwinglich. Für das Trekking fallen zusätzliche Kosten an (Genehmigungen, Führer, Lodges). Pokhara und Kathmandu sind für jeden Geldbeutel gut ausgestattet.",
    },
    currency: { fr: "Roupie népalaise (NPR)", en: "Nepalese rupee (NPR)", es: "Rupia nepalí (NPR)", de: "Nepalesische Rupie (NPR)" },
    exchangeRate: "1€ ≈ 140–150 NPR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Youth hostel dorm", es: "Dormitorio en albergue juvenil", de: "Schlafsaal der Jugendherberge" }, price: "3–7 €", detail: { fr: "Katmandou, Pokhara, très répandu", en: "Kathmandu, Pokhara, very common", es: "Katmandú, Pokhara, muy extendido", de: "Kathmandu, Pokhara, sehr häufig" } },
          { label: { fr: "Tea house (lors du trek)", en: "Tea house (during trek)", es: "Tea house (durante el trek)", de: "Teehaus (während der Wanderung)" }, price: "3–8 €", detail: { fr: "Chambre simple, repas en sus", en: "Simple room, meals extra", es: "Habitación sencilla, comidas aparte", de: "Einzelzimmer, Verpflegung extra" } },
          { label: { fr: "Hôtel 3★ Katmandou", en: "3★ hotel in Kathmandu", es: "Hotel 3★ en Katmandú", de: "Hotel 3★ Kathmandu" }, price: "30–70 €", detail: { fr: "Confort correct, souvent avec jardin", en: "Decent comfort, often with a garden", es: "Confort correcto, a menudo con jardín", de: "Richtiger Komfort, oft mit Garten" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Dal Bhat (plat national)", en: "Dal Bhat (national dish)", es: "Dal Bhat (plato nacional)", de: "Dal Bhat (Nationalgericht)" }, price: "2–4 €", detail: { fr: "Riz + lentilles + légumes, resservi à volonté", en: "Rice + lentils + vegetables, unlimited refills", es: "Arroz + lentejas + verduras, se sirve sin límite", de: "Reis + Linsen + Gemüse, nach Wunsch reserviert" } },
          { label: { fr: "Momo (raviolis népalais)", en: "Momo (Nepali dumplings)", es: "Momo (empanadillas nepalíes)", de: "Momo (nepalesische Knödel)" }, price: "1,50–3 €", detail: { fr: "Vapeur ou frits, addictifs", en: "Steamed or fried, addictive", es: "Al vapor o fritos, adictivos", de: "Gedünstet oder gebraten, macht süchtig" } },
          { label: { fr: "Restaurant touristique Katmandou", en: "Tourist restaurant in Kathmandu", es: "Restaurante turístico en Katmandú", de: "Touristenrestaurant Kathmandu" }, price: "6–15 €", detail: { fr: "Cuisine népalaise, indienne ou internationale", en: "Nepali, Indian or international cuisine", es: "Cocina nepalí, india o internacional", de: "Nepalesische, indische oder internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Katmandou–Pokhara (7h)", en: "Bus Kathmandu–Pokhara (7h)", es: "Autobús Katmandú–Pokhara (7h)", de: "Bus Kathmandu–Pokhara (7 Stunden)" }, price: "4–8 €", detail: { fr: "Ou vol 30 min pour 60–100 €", en: "Or a 30-min flight for 60–100 €", es: "O vuelo de 30 min por 60–100 €", de: "Oder 30-minütiger Flug für 60–100 €" } },
          { label: { fr: "Vol Katmandou–Lukla (trek EBC)", en: "Flight Kathmandu–Lukla (EBC trek)", es: "Vuelo Katmandú–Lukla (trek EBC)", de: "Flug Kathmandu–Lukla (EBC-Wanderung)" }, price: "150–200 €", detail: { fr: "A/R, avion de brousse, obligatoire", en: "Return, bush plane, mandatory", es: "Ida y vuelta, avioneta, obligatorio", de: "A/R, Buschflugzeug, obligatorisch" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "TIMS + permit Annapurna", en: "TIMS + Annapurna permit", es: "TIMS + permiso Annapurna", de: "TIMS + Genehmigung Annapurna" }, price: "25–35 €", detail: { fr: "Obligatoires pour tous les trekks", en: "Mandatory for all treks", es: "Obligatorios para todos los treks", de: "Obligatorisch für alle Wanderungen" } },
          { label: { fr: "Guide professionnel (journée)", en: "Professional guide (day)", es: "Guía profesional (día)", de: "Professioneller Guide (Tag)" }, price: "20–35 €", detail: { fr: "Recommandé voire obligatoire dans certaines zones", en: "Recommended or mandatory in some areas", es: "Recomendado o incluso obligatorio en algunas zonas", de: "In bestimmten Bereichen empfehlenswert oder sogar verpflichtend" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Dortoir, dal bhat, bus, trekk autonome", en: "Dorm, dal bhat, bus, self-guided trekking", es: "Dormitorio, dal bhat, autobús, trekking autónomo", de: "Schlafsaal, Dal Bhat, Bus, selbstgeführte Wanderung" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "65–120 €/j", desc: { fr: "Hôtel 3★, restaurants, guide, safari Chitwan", en: "3★ hotel, restaurants, guide, Chitwan safari", es: "Hotel 3★, restaurantes, guía, safari en Chitwan", de: "3★ Hotel, Restaurants, Führer, Chitwan-Safari" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Lodge de luxe, vols intérieurs, guide privé", en: "Luxury lodge, domestic flights, private guide", es: "Lodge de lujo, vuelos internos, guía privado", de: "Luxus-Lodge, Inlandsflüge, privater Reiseführer" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Katmandou – Pokhara – Trek Annapurna ou EBC – Chitwan", en: "Kathmandu – Pokhara – Annapurna or EBC trek – Chitwan", es: "Katmandú – Pokhara – Trek Annapurna o EBC – Chitwan", de: "Kathmandu – Pokhara – Annapurna Trek oder EBC – Chitwan" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 300 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Katmandou", en: "Return flight Paris–Kathmandu", es: "Vuelo ida y vuelta Madrid–Katmandú", de: "Hin- und Rückflug Paris–Kathmandu" }, amount: "600–850 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "180–280 €" },
            { label: { fr: "Permits + guide + transport", en: "Permits + guide + transport", es: "Permisos + guía + transporte", de: "Genehmigungen + Führer + Transport" }, amount: "200–320 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 600 – 3 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Katmandou", en: "Return flight Paris–Kathmandu", es: "Vuelo ida y vuelta Madrid–Katmandú", de: "Hin- und Rückflug Paris–Kathmandu" }, amount: "800–1 100 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Guide privé + permits + vols", en: "Private guide + permits + flights", es: "Guía privado + permisos + vuelos", de: "Privater Reiseführer + Genehmigungen + Flüge" }, amount: "500–800 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "300–450 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Katmandou (Business)", en: "Return flight Paris–Kathmandu (Business)", es: "Vuelo ida y vuelta Madrid–Katmandú (business)", de: "Hin- und Rückflug Paris–Kathmandu (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 500–2 200 €" },
            { label: { fr: "Guide & porteurs privés", en: "Private guide & porters", es: "Guía y porteadores privados", de: "Privater Reiseführer und Träger" }, amount: "600–900 €" },
            { label: { fr: "Vols intérieurs + hélicoptère", en: "Domestic flights + helicopter", es: "Vuelos internos + helicóptero", de: "Inlandsflüge + Helikopter" }, amount: "600–1 000 €" },
            { label: { fr: "Nourriture & activités", en: "Food & activities", es: "Comida y actividades", de: "Essen und Aktivitäten" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~10–11h avec escale (Qatar Airways, Emirates, Turkish)", en: "~10–11h with a layover (Qatar Airways, Emirates, Turkish)", es: "~10–11h con escala (Qatar Airways, Emirates, Turkish)", de: "ca. 10–11 Std. mit Zwischenstopp (Qatar Airways, Emirates, Turkish)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée : 30 USD (15 jours), 50 USD (30 jours), 125 USD (90 jours). Aussi disponible en e-Visa en ligne.", en: "Visa on arrival: 30 USD (15 days), 50 USD (30 days), 125 USD (90 days). Also available as an e-Visa online.", es: "Visado a la llegada: 30 USD (15 días), 50 USD (30 días), 125 USD (90 días). También disponible como e-Visa en línea.", de: "Visum bei der Ankunft: 30 USD (15 Tage), 50 USD (30 Tage), 125 USD (90 Tage). Auch als E-Visum online verfügbar." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Roupie népalaise (1€ ≈ 140–150 NPR)", en: "Nepalese rupee (1€ ≈ 140–150 NPR)", es: "Rupia nepalí (1€ ≈ 140–150 NPR)", de: "Nepalesische Rupie (1€ ≈ 140–150 NPR)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Népalais (l'anglais est parlé dans le tourisme)", en: "Nepali (English spoken in tourism)", es: "Nepalí (el inglés se habla en el sector turístico)", de: "Nepalesisch (im Tourismus wird Englisch gesprochen)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/D – 230 V (adaptateur conseillé)", en: "Type C/D – 230 V (adapter recommended)", es: "Tipo C/D – 230 V (adaptador recomendado)", de: "Typ C/D – 230 V (Adapter empfohlen)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "4G dans les villes, très limité sur les sentiers de trek", en: "4G in cities, very limited on trekking trails", es: "4G en las ciudades, muy limitado en los senderos de trekking", de: "4G in Städten, auf Wanderwegen nur sehr begrenzt" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable, purification ou bouteilles indispensables en trek", en: "Not drinkable, purification or bottled water essential while trekking", es: "No potable, purificación o botellas indispensables durante el trek", de: "Nicht trinkbar, Reinigung oder Flaschen sind auf der Wanderung unerlässlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Altitude sickness (mal des montagnes) : acclimatation obligatoire, pas de montée rapide", en: "Altitude sickness: acclimatisation mandatory, no rapid ascent", es: "Mal de altura: aclimatación obligatoria, sin ascensos rápidos", de: "Höhenkrankheit: Akklimatisierung erforderlich, kein rasanter Aufstieg" } },
  ],
};
