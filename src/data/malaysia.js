export const MALAYSIA = {
  code: "MYS",
  numericId: 458,
  name: { fr: "Malaisie", en: "Malaysia", es: "Malasia", de: "Malaysia" },
  emoji: "🇲🇾",
  capital: { fr: "Kuala Lumpur", en: "Kuala Lumpur", es: "Kuala Lumpur", de: "Kuala Lumpur" },
  language: { fr: "Malais (Bahasa Malaysia)", en: "Malay (Bahasa Malaysia)", es: "Malayo (Bahasa Malaysia)", de: "Malaiisch (Bahasa Malaysia)" },
  currency: { fr: "Ringgit malaisien (MYR)", en: "Malaysian Ringgit (MYR)", es: "Ringgit malasio (MYR)", de: "Malaysischer Ringgit (MYR)" },
  timezone: "UTC+8",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1200,
    tripMid: 2200,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 2,
  },
  description: {
    fr: "La Malaisie est une mosaïque de cultures (malaises, chinoises, indiennes, dayak) au sein d'une nature luxuriante. Des tours Petronas de Kuala Lumpur aux forêts de Bornéo où vivent les orangs-outans, en passant par les plages de Langkawi et les collines de Cameron, le pays offre une diversité époustouflante.", en: "Malaysia is a mosaic of cultures (Malay, Chinese, Indian, Dayak) set within lush nature. From the Petronas Towers of Kuala Lumpur to the Bornean forests where orangutans live, by way of the beaches of Langkawi and the Cameron Highlands, the country offers breathtaking diversity.", es: "Malasia es un mosaico de culturas (malaya, china, india, dayak) inmerso en una naturaleza exuberante. Desde las Torres Petronas de Kuala Lumpur hasta los bosques de Borneo donde viven los orangutanes, pasando por las playas de Langkawi y las colinas de Cameron, el país ofrece una diversidad impresionante.", de: "Malaysia ist ein Mosaik aus Kulturen (Malaiisch, Chinesisch, Indisch, Dayak) inmitten üppiger Natur. Von den Petronas Towers in Kuala Lumpur bis zu den Wäldern von Borneo, wo Orang-Utans leben, über die Strände von Langkawi und die Cameron Hills bietet das Land eine atemberaubende Vielfalt.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero", de: "November – Februar" },
      label: { fr: "Côte Ouest (saison sèche)", en: "West Coast (dry season)", es: "Costa Oeste (estación seca)", de: "Westküste (Trockenzeit)" },
      color: "#fbbf24",
      description: {
        fr: "Idéal pour Langkawi, Penang et la côte ouest : mer calme et soleil. KL agréable toute l'année.", en: "Ideal for Langkawi, Penang and the west coast: calm seas and sunshine. KL is pleasant year-round.", es: "Ideal para Langkawi, Penang y la costa oeste: mar en calma y sol. KL es agradable todo el año.", de: "Ideal für Langkawi, Penang und die Westküste: ruhiges Meer und Sonne. Angenehmes KL das ganze Jahr über.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Octobre", en: "March – October", es: "Marzo – Octubre", de: "März – Oktober" },
      label: { fr: "Côte Est & Bornéo", en: "East Coast & Borneo", es: "Costa Este y Borneo", de: "Ostküste und Borneo" },
      color: "#22c55e",
      description: {
        fr: "La côte est (Perhentian, Tioman) est accessible mars-octobre. Bornéo est idéale en mars-octobre pour les orangs-outans.", en: "The east coast (Perhentian, Tioman) is accessible from March to October. Borneo is ideal from March to October for orangutans.", es: "La costa este (Perhentian, Tioman) es accesible de marzo a octubre. Borneo es ideal de marzo a octubre para ver a los orangutanes.", de: "Die Ostküste (Perhentian, Tioman) ist von März bis Oktober zugänglich. Borneo ist von März bis Oktober ideal für Orang-Utans.",
      },
      icon: "🦧",
    },
  ],

  weatherCities: [
    {
      id: "kuala-lumpur",
      name: "Kuala Lumpur",
      region: { fr: "Klang Valley", en: "Klang Valley", es: "Valle de Klang", de: "Klangtal" },
      data: [
        { month: "Jan", temp: 27, rain: 175, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 145, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 270, icon: "🌧️" },
        { month: "Mai", temp: 29, rain: 185, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 145, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 195, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 265, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 275, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 230, icon: "🌧️" },
      ],
    },
    {
      id: "langkawi",
      name: "Langkawi",
      region: { fr: "Kedah (îles)", en: "Kedah (islands)", es: "Kedah (islas)", de: "Kedah (Inseln)" },
      data: [
        { month: "Jan", temp: 27, rain: 65, icon: "☀️" },
        { month: "Fév", temp: 28, rain: 40, icon: "☀️" },
        { month: "Mar", temp: 29, rain: 75, icon: "⛅" },
        { month: "Avr", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 30, rain: 175, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 185, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 225, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 310, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 355, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 185, icon: "🌧️" },
        { month: "Déc", temp: 26, rain: 70, icon: "☀️" },
      ],
    },
    {
      id: "kota-kinabalu",
      name: "Kota Kinabalu",
      region: { fr: "Sabah (Bornéo)", en: "Sabah (Borneo)", es: "Sabah (Borneo)", de: "Sabah (Borneo)" },
      data: [
        { month: "Jan", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 80, icon: "⛅" },
        { month: "Mar", temp: 28, rain: 85, icon: "⛅" },
        { month: "Avr", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 190, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 225, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 260, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 235, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Kuala Lumpur",
      region: { fr: "Centre", en: "Central", es: "Centro", de: "Center" },
      description: {
        fr: "La capitale malaisienne est dominée par les tours Petronas (452 m), les plus hautes du monde de 1998 à 2004. Le quartier indien de Brickfields, Chinatown et le quartier colonial de Merdeka Square coexistent dans une métropole vibrante et multiculturelle.", en: "The Malaysian capital is dominated by the Petronas Towers (452 m), the tallest buildings in the world from 1998 to 2004. The Indian district of Brickfields, Chinatown and the colonial Merdeka Square coexist in a vibrant, multicultural metropolis.", es: "La capital malasia está dominada por las Torres Petronas (452 m), los edificios más altos del mundo de 1998 a 2004. El barrio indio de Brickfields, Chinatown y la colonial Merdeka Square conviven en una metrópolis vibrante y multicultural.", de: "Die malaysische Hauptstadt wird von den Petronas Towers (452 m) dominiert, die von 1998 bis 2004 die höchsten der Welt waren. Das indische Viertel Brickfields, Chinatown und das Kolonialviertel Merdeka Square existieren nebeneinander in einer lebendigen und multikulturellen Metropole.",
      },
      wikipedia: "Kuala_Lumpur",
      tags: ["Ville", "Architecture", "Culture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Tours Petronas", en: "Petronas Towers", es: "Torres Petronas", de: "Petronas-Türme" }, wikipedia: "File:Petronas Panorama II.jpg" },
        { name: "Batu Caves", wikipedia: "Batu_Caves" },
        { name: "Menara KL Tower", wikipedia: "File:Kuala_Lumpur_Malaysia_Menara-Kuala-Lumpur-02.jpg" },
      ],
    },
    {
      id: 2,
      name: "Penang",
      region: { fr: "Nord-Ouest", en: "Northwest", es: "Noroeste", de: "Nordwest" },
      description: {
        fr: "L'île de Penang est la capitale gastronomique de la Malaisie. George Town, inscrite au patrimoine UNESCO, est célèbre pour ses street arts muraux, ses shophouses colorées et sa cuisine Nyonya (fusion malayo-chinoise). Les temples, mosquées et hawker centres s'y côtoient harmonieusement.", en: "Penang Island is Malaysia's food capital. George Town, a UNESCO World Heritage site, is famous for its street art murals, colourful shophouses and Nyonya cuisine (Malay-Chinese fusion). Temples, mosques and hawker centres coexist harmoniously there.", es: "La isla de Penang es la capital gastronómica de Malasia. George Town, declarada Patrimonio de la Humanidad por la UNESCO, es célebre por sus murales de arte urbano, sus shophouses coloridas y su cocina nyonya (fusión malayo-china). Templos, mezquitas y hawker centres conviven allí en armonía.", de: "Die Insel Penang ist die gastronomische Hauptstadt Malaysias. George Town, ein UNESCO-Weltkulturerbe, ist berühmt für seine Straßenkunst-Wandgemälde, farbenfrohen Ladengeschäfte und Nyonya-Küche (malaiisch-chinesische Fusionsküche). Tempel, Moscheen und Straßenhändlerzentren koexistieren harmonisch.",
      },
      wikipedia: "File:Skyline_of_George_Town,_Penang_at_dusk_May_2025.jpg",
      tags: ["Gastronomie", "Culture", "UNESCO", "Art", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "George Town (vieille ville)", en: "George Town (old town)", es: "George Town (casco antiguo)", de: "George Town (Altstadt)" }, wikipedia: "File:Georgetown, Penang in 2023 01.jpg" },
        { name: "Penang Hill (Bukit Bendera)", wikipedia: "File:Penang Hill in 2023 02.jpg" },
        { name: { fr: "Street Art de George Town", en: "George Town Street Art", es: "Arte urbano de George Town", de: "Straßenkunst von George Town" }, wikipedia: "File:Street art at Penang.jpg" },
        { name: "Kek Lok Si Temple", wikipedia: "Kek_Lok_Si" },
      ],
    },
    {
      id: 3,
      name: { fr: "Bornéo malaisien (Sabah & Sarawak)", en: "Malaysian Borneo (Sabah & Sarawak)", es: "Borneo malasio (Sabah y Sarawak)", de: "Malaysisches Borneo (Sabah und Sarawak)" },
      region: { fr: "Bornéo", en: "Borneo", es: "Borneo", de: "Borneo" },
      description: {
        fr: "Sabah et Sarawak abritent les forêts les plus riches d'Asie du Sud-Est. Orangs-outans de Sepilok, rhinocéros de Sabah, grottes de Niah et mont Kinabalu (4 095 m, point culminant d'Asie du Sud-Est) dans un cadre de jungle primaire extraordinaire.", en: "Sabah and Sarawak are home to some of the richest rainforests in Southeast Asia. Sepilok orangutans, Sabah rhinos, Niah caves and Mount Kinabalu (4,095 m, the highest peak in Southeast Asia) set in extraordinary primary jungle.", es: "Sabah y Sarawak albergan las selvas más ricas del sudeste asiático. Los orangutanes de Sepilok, los rinocerontes de Sabah, las cuevas de Niah y el monte Kinabalu (4095 m, el punto más alto del sudeste asiático) en un entorno de selva primaria extraordinario.", de: "Sabah und Sarawak beherbergen die reichsten Wälder Südostasiens. Sepilok-Orang-Utans, Sabah-Nashörner, Niah-Höhlen und der Kinabalu (4.095 m, der höchste Punkt Südostasiens) in einer außergewöhnlichen Urdschungelumgebung.",
      },
      wikipedia: "File:2014 Borneo Luyten-De-Hauwere-Child-01.jpg",
      tags: ["Nature", "Safari", "Randonnée"],
      mustSee: [
        { name: { fr: "Centre de réhabilitation de Sepilok", en: "Sepilok Rehabilitation Centre", es: "Centro de rehabilitación de Sepilok", de: "Sepilok-Rehabilitationszentrum" }, wikipedia: "File:Sandakan_Sabah_Sepilok-Orangutan-Rehabilitation-Centre-02.jpg" },
        { name: { fr: "Mont Kinabalu", en: "Mount Kinabalu", es: "Monte Kinabalu", de: "Berg Kinabalu" }, wikipedia: "Mount_Kinabalu" },
        { name: { fr: "Grottes de Niah", en: "Niah Caves", es: "Cuevas de Niah", de: "Höhlen von Niah" }, wikipedia: "File:The_main_entrance_to_the_Niah_Caves_at_sunset..jpg" },
        { name: { fr: "Parc national de Mulu", en: "Mulu National Park", es: "Parque nacional de Mulu", de: "Mulu-Nationalpark" }, wikipedia: "Gunung_Mulu_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Langkawi",
      region: { fr: "Kedah", en: "Kedah", es: "Kedah", de: "Kedah" },
      description: {
        fr: "L'archipel de Langkawi (99 îles) est le paradis balnéaire de la Malaisie avec ses plages de sable blanc, ses mangroves et ses forêts de geopark. Duty-free, téléphérique et eau translucide pour une île détente.", en: "The Langkawi archipelago (99 islands) is Malaysia's beach paradise, with white sand beaches, mangroves and geopark forests. Duty-free shopping, a cable car and clear water make it a relaxing island getaway.", es: "El archipiélago de Langkawi (99 islas) es el paraíso balneario de Malasia, con playas de arena blanca, manglares y bosques del geoparque. Duty-free, teleférico y aguas transparentes para una isla de relax.", de: "Der Langkawi-Archipel (99 Inseln) ist mit seinen weißen Sandstränden, Mangroven und Geoparkwäldern das Badeparadies Malaysias. Duty-free, Seilbahn und durchsichtiges Wasser für eine entspannte Insel.",
      },
      wikipedia: "File:Langkawi 004.jpg",
      tags: ["Plage", "Nature", "Shopping"],
      mustSee: [
        { name: "Pantai Cenang", wikipedia: "File:Pantai Cenang, Langkawi 01.jpg" },
        { name: "Langkawi Sky Bridge", wikipedia: "Langkawi_Sky_Bridge" },
        { name: "Kilim Karst Geoforest Park", wikipedia: "File:Langkawi Mangrove Forest.jpg" },
        { name: "Tanjung Rhu", wikipedia: "File:Jalan_Tanjung_Rhu,_07000_Langkawi,_Kedah,_Malaysia_-_panoramio_-_jetsun_(7).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Malaisie est très abordable pour un pays au développement avancé. La nourriture de rue (hawker) est excellente et peu chère. KL est abordable par rapport aux capitales asiatiques.", en: "Malaysia is very affordable for a highly developed country. Street food (hawker fare) is excellent and cheap. KL is affordable compared to other Asian capitals.", es: "Malasia resulta muy asequible para un país de desarrollo avanzado. La comida callejera (hawker) es excelente y barata. KL es asequible en comparación con otras capitales asiáticas.", de: "Malaysia ist für ein fortgeschrittenes Entwicklungsland sehr erschwinglich. Streetfood (Hawker) ist ausgezeichnet und günstig. Im Vergleich zu asiatischen Hauptstädten ist KL erschwinglich.",
    },
    currency: "MYR",
    exchangeRate: "1€ ≈ 4,8–5,2 MYR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Hostel dorm", es: "Dormitorio en albergue", de: "Schlafsaal der Jugendherberge" }, price: "6–12 €", detail: { fr: "KL, Penang, très bon réseau", en: "KL, Penang, very good network", es: "KL, Penang, muy buena red", de: "KL, Penang, sehr gutes Netz" } },
          { label: { fr: "Chambre double hôtel 3★", en: "3★ hotel double room", es: "Habitación doble hotel 3★", de: "Doppelzimmer Hotelzimmer 3★" }, price: "25–50 €", detail: { fr: "Bon confort, souvent avec piscine", en: "Good comfort, often with a pool", es: "Buen confort, a menudo con piscina", de: "Guter Komfort, oft mit Schwimmbad" } },
          { label: { fr: "Resort Langkawi 4★", en: "4★ Langkawi resort", es: "Resort 4★ en Langkawi", de: "Resort Langkawi 4★" }, price: "80–180 €", detail: { fr: "Bord de plage, souvent all-inclusive", en: "Beachfront, often all-inclusive", es: "Frente a la playa, a menudo todo incluido", de: "Direkt am Strand, oft All-Inclusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Repas hawker centre", en: "Hawker centre meal", es: "Comida en hawker centre", de: "Hawker Center-Mahlzeit" }, price: "2–4 €", detail: { fr: "Nasi lemak, Laksa, Char Kway Teow", en: "Nasi lemak, Laksa, Char Kway Teow", es: "Nasi lemak, laksa, char kway teow", de: "Nasi Lemak, Laksa, Char Kway Teow" } },
          { label: { fr: "Roti canai + teh tarik", en: "Roti canai + teh tarik", es: "Roti canai + teh tarik", de: "Roti Canai + Tarik" }, price: "0,80–1,50 €", detail: { fr: "Petit-déjeuner malaisien classique", en: "Classic Malaysian breakfast", es: "Desayuno malasio clásico", de: "Klassisches malaysisches Frühstück" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelklasserestaurant" }, price: "8–18 €", detail: { fr: "Cuisine locale ou internationale", en: "Local or international cuisine", es: "Cocina local o internacional", de: "Lokale oder internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "KL MRT/LRT trajet", en: "KL MRT/LRT ride", es: "Trayecto MRT/LRT de KL", de: "KL MRT/LRT-Fahrt" }, price: "0,40–1,50 €", detail: { fr: "Réseau étendu, très pratique", en: "Extensive, very convenient network", es: "Red extensa, muy práctica", de: "Breites Netz, sehr praktisch" } },
          { label: { fr: "Bus express KL–Penang (4h)", en: "Express bus KL–Penang (4h)", es: "Autobús exprés KL–Penang (4h)", de: "Expressbus KL–Penang (4 Std.)" }, price: "8–15 €", detail: { fr: "Très confortable, AC", en: "Very comfortable, air-conditioned", es: "Muy cómodo, con aire acondicionado", de: "Sehr komfortabel, Klimaanlage" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Visite Sepilok Orangs-outans", en: "Sepilok Orangutan visit", es: "Visita a Sepilok (orangutanes)", de: "Besuchen Sie Sepilok-Orang-Utans" }, price: "15–25 €", detail: { fr: "Entrée réserve + centre", en: "Reserve + centre entry", es: "Entrada a la reserva + centro", de: "Eintrittsreserve + Mitte" } },
          { label: { fr: "Trek Mont Kinabalu (2 jours)", en: "Mount Kinabalu trek (2 days)", es: "Trekking al monte Kinabalu (2 días)", de: "Kinabalu-Trekking (2 Tage)" }, price: "150–250 €", detail: { fr: "Permis + guide + refuge obligatoires", en: "Permit + guide + lodge mandatory", es: "Permiso + guía + refugio obligatorios", de: "Genehmigung + Führer + Schutzhütte erforderlich" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Auberge, hawker centres, transports en commun", en: "Hostel, hawker centres, public transport", es: "Albergue, hawker centres, transporte público", de: "Herberge, Straßenhändler, öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "65–110 €/j", desc: { fr: "Hôtel 3★, restaurants mid-range, excursions", en: "3★ hotel, mid-range restaurants, excursions", es: "Hotel 3★, restaurantes de gama media, excursiones", de: "3★ Hotel, Mittelklasse-Restaurants, Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Resort 5★ Langkawi, gastronomie, privé", en: "5★ Langkawi resort, fine dining, private transport", es: "Resort 5★ en Langkawi, alta gastronomía, transporte privado", de: "Resort 5★ Langkawi, Gastronomie, privat" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Kuala Lumpur – Penang – Langkawi – Bornéo (Sabah)", en: "Kuala Lumpur – Penang – Langkawi – Borneo (Sabah)", es: "Kuala Lumpur – Penang – Langkawi – Borneo (Sabah)", de: "Kuala Lumpur – Penang – Langkawi – Borneo (Sabah)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kuala Lumpur", en: "Return flight Paris–Kuala Lumpur", es: "Vuelo ida y vuelta Madrid–Kuala Lumpur", de: "Hin- und Rückflug Paris–Kuala Lumpur" }, amount: "500–750 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–300 €" },
            { label: { fr: "Transport local + vols intérieurs", en: "Local transport + domestic flights", es: "Transporte local + vuelos internos", de: "Lokaler Transport + Inlandsflüge" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kuala Lumpur", en: "Return flight Paris–Kuala Lumpur", es: "Vuelo ida y vuelta Madrid–Kuala Lumpur", de: "Hin- und Rückflug Paris–Kuala Lumpur" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "600–900 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Transport + vols intérieurs", en: "Transport + domestic flights", es: "Transporte + vuelos internos", de: "Transport + Inlandsflüge" }, amount: "300–500 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "250–400 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–KL (Business)", en: "Return flight Paris–KL (Business)", es: "Vuelo ida y vuelta Madrid–KL (business)", de: "Hin- und Rückflug Paris–KL (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 800–2 500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "500–800 €" },
            { label: { fr: "Transport & excursions privées", en: "Transport & private excursions", es: "Transporte y excursiones privadas", de: "Transport und private Ausflüge" }, amount: "400–600 €" },
            { label: { fr: "Activités premium", en: "Premium activities", es: "Actividades premium", de: "Premium-Aktivitäten" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~12–13h (Malaysia Airlines direct, Air France)", en: "~12–13h (Malaysia Airlines direct, Air France)", es: "~12–13h (Malaysia Airlines directo, Air France)", de: "ca. 12–13 Std. (Malaysia Airlines direkt, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)", es: "Sin visado para españoles (90 días)", de: "Visumfrei für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Ringgit malaisien (1€ ≈ 4,8–5,2 MYR)", en: "Malaysian Ringgit (1€ ≈ 4.8–5.2 MYR)", es: "Ringgit malasio (1€ ≈ 4,8–5,2 MYR)", de: "Malaysischer Ringgit (1€ ≈ 4,8–5,2 MYR)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Malais (Bahasa), anglais très répandu", en: "Malay (Bahasa), English widely spoken", es: "Malayo (Bahasa), el inglés está muy extendido", de: "Malaiisch (Bahasa), Englisch wird weithin gesprochen" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G – 240 V (même qu'UK, adaptateur conseillé)", en: "Type G – 240V (same as UK, adapter recommended)", es: "Tipo G – 240 V (igual que en el Reino Unido, adaptador recomendado)", de: "Typ G – 240 V (wie Großbritannien, Adapter empfohlen)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "4G dans les villes, SIM touristique à l'aéroport KLIA", en: "4G in cities, tourist SIM available at KLIA airport", es: "4G en las ciudades, SIM turística en el aeropuerto KLIA", de: "4G in Städten, Touristen-SIM am Flughafen KLIA" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable, eau en bouteille recommandée", en: "Not drinkable, bottled water recommended", es: "No potable, se recomienda agua embotellada", de: "Kein Trinkwasser, Flaschenwasser empfohlen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de vaccins obligatoires, antipaludéens conseillés à Bornéo profond", en: "No mandatory vaccines, antimalarials recommended for deep Borneo", es: "Sin vacunas obligatorias, se recomienda antipalúdico en el interior de Borneo", de: "Keine Pflichtimpfungen, Malariamittel werden in Deep Borneo empfohlen" } },
  ],
};
