export const BURKINA_FASO = {
  code: "BFA",
  numericId: 854,
  name: { fr: "Burkina Faso", en: "Burkina Faso", es: "Burkina Faso", de: "Burkina Faso" },
  emoji: "🇧🇫",
  capital: { fr: "Ouagadougou", en: "Ouagadougou", es: "Uagadugú", de: "Ouagadougou" },
  language: { fr: "Français, Mooré, Dioula, Fulfuldé", en: "French, Mooré, Dioula, Fulfulde", es: "Francés, mossi, diula, fulani", de: "Französisch, Moore, Dioula, Fulfuldé" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)", es: "Franco CFA (XOF)", de: "CFA-Franc (XOF)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1300, tripMid: 2500,
  },
  criteria: {
    unesco: 1,
    nature: 1,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 2,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 0,
    plongee: 0,
  },
  description: {
    fr: "Le Burkina Faso est un pays enclavé du Sahel longtemps réputé pour son hospitalité légendaire, le FESPACO (plus grand festival de cinéma africain), les masques sacrés Mossi, la falaise de Banfora avec ses cascades et hippotragues, et les sites de la Comoé. Attention : la situation sécuritaire au nord et à l'est est très dégradée depuis 2019 — vérifier les avis aux voyageurs AVANT tout départ.", en: "Burkina Faso is a landlocked Sahelian country long known for its legendary hospitality, FESPACO (Africa's biggest film festival), sacred Mossi masks, the Banfora escarpment with its waterfalls and roan antelopes, and the sites of the Comoé region. Warning: the security situation in the north and east has seriously deteriorated since 2019 — check official travel advisories BEFORE any departure.", es: "Burkina Faso es un país sin salida al mar en el Sahel, conocido desde hace tiempo por su legendaria hospitalidad, el FESPACO (el mayor festival de cine africano), las máscaras sagradas mossi, el acantilado de Banfora con sus cascadas y antílopes ruanos, y los parajes de la región de Comoé. Atención: la situación de seguridad en el norte y el este se ha deteriorado mucho desde 2019 — consulte los avisos oficiales para viajeros ANTES de partir.", de: "Burkina Faso ist ein Binnenstaat in der Sahelzone, der seit langem für seine legendäre Gastfreundschaft, FESPACO (das größte afrikanische Filmfestival), die heiligen Mossi-Masken, die Klippe von Banfora mit seinen Wasserfällen und Seepferdchen sowie die Stätten von Comoé bekannt ist. Achtung: Die Sicherheitslage im Norden und Osten hat sich seit 2019 stark verschlechtert – prüfen Sie VOR jeder Abreise die Reisehinweise.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero", de: "November – Februar" },
      label: { fr: "Saison sèche et fraîche", en: "Cool dry season", es: "Estación seca y fresca", de: "Trockene und kühle Jahreszeit" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : harmattan frais (20–30°C), ciel dégagé, routes praticables. Période idéale pour visiter Ouaga et le sud-ouest.", en: "Best time to go: cool harmattan winds (20–30°C), clear skies and passable roads. Ideal season for visiting Ouaga and the southwest.", es: "La mejor época: harmatán fresco (20–30°C), cielo despejado y carreteras transitables. Temporada ideal para visitar Uagadugú y el suroeste.", de: "Beste Zeit: kühles Harmattan (20–30 °C), klarer Himmel, befahrbare Straßen. Ideale Zeit, um Ouaga und den Südwesten zu besuchen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Saison chaude et sèche", en: "Hot dry season", es: "Estación cálida y seca", de: "Heiße und trockene Jahreszeit" },
      color: "#f59e0b",
      description: {
        fr: "Températures élevées (35–42°C), harmattan poussiéreux. Pénible mais sec. Moins favorable.", en: "Very high temperatures (35–42°C) and dusty harmattan winds. Tough but dry. Less favourable overall.", es: "Temperaturas muy altas (35–42°C) y harmatán polvoriento. Duro pero seco. Menos favorable en conjunto.", de: "Hohe Temperaturen (35–42 °C), staubiges Harmattan. Schmerzhaft, aber trocken. Weniger günstig.",
      },
      icon: "🌡️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias", de: "Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "Pluies (80–150mm/mois), routes de brousse difficiles. Nord et sahel très chauds même avec pluie.", en: "Rainfall increases sharply (80–150mm/month) and bush roads become difficult. The north and Sahel remain very hot even with rain.", es: "Las lluvias aumentan mucho (80–150mm/mes) y las pistas rurales se vuelven difíciles. El norte y el Sahel siguen muy calurosos incluso con lluvia.", de: "Regen (80–150 mm/Monat), schwierige Buschstraßen. Im Norden und in der Sahelzone ist es trotz Regen sehr heiß.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "ouagadougou",
      name: "Ouagadougou",
      region: { fr: "Plateau Central", en: "Central Plateau", es: "Meseta Central", de: "Mittelland" },
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 10,  icon: "🌡️" },
        { month: "Avr", temp: 35, rain: 20,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 40,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 25, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "banfora",
      name: "Banfora",
      region: { fr: "Cascades (sud-ouest)", en: "Cascades (southwest)", es: "Cascades (suroeste)", de: "Kaskaden (Südwesten)" },
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 32, rain: 10,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 30,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 250, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 210, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Ouagadougou — Culture et FESPACO", en: "Ouagadougou — Culture & FESPACO", es: "Uagadugú — Cultura y FESPACO", de: "Ouagadougou – Kultur und FEPACO" },
      region: { fr: "Plateau Central", en: "Central Plateau", es: "Meseta Central", de: "Mittelland" },
      description: {
        fr: "Ouagadougou ('Ouaga') est la capitale culturelle d'Afrique de l'Ouest : le FESPACO (Festival Panafricain du Cinéma, années impaires en février) est le plus grand festival de cinéma africain au monde. Le Grand Marché, le Musée National et les centres culturels (Institut Français, Espace Camille Guichard) vibrent. La scène musicale (djembe, balafon) est exceptionnelle.", en: "Ouagadougou ('Ouaga') is West Africa's cultural capital: FESPACO (the Panafrican Film Festival, held in February of odd-numbered years) is the largest African film festival in the world. The Grand Marché, the National Museum and cultural hubs such as the Institut Français and Espace Camille Guichard are full of life. The music scene, from djembe to balafon, is exceptional.", es: "Uagadugú ('Ouaga') es la capital cultural de África Occidental: el FESPACO (Festival Panafricano de Cine, en febrero de los años impares) es el mayor festival de cine africano del mundo. El Gran Mercado, el Museo Nacional y los centros culturales (Institut Français, Espace Camille Guichard) rebosan de vida. La escena musical (djembé, balafón) es excepcional.", de: "Ouagadougou („Ouaga“) ist die Kulturhauptstadt Westafrikas: FESPACO (Pan African Cinema Festival, ungerade Jahre im Februar) ist das größte afrikanische Filmfestival der Welt. Der Grand Marché, das Nationalmuseum und die Kulturzentren (Institut Français, Espace Camille Guichard) vibrieren. Die Musikszene (Djembe, Balafon) ist außergewöhnlich.",
      },
      wikipedia: "Ouagadougou",
      tags: ["Culture"],
      mustSee: [
        { name: { fr: "FESPACO — Festival Panafricain du Cinéma (années impaires, février)", en: "FESPACO — Panafrican Film Festival (odd-numbered years, February)", es: "FESPACO — Festival Panafricano de Cine (años impares, febrero)", de: "FESPACO – Panafrikanisches Kinofestival (ungerade Jahre, Februar)" }, wikipedia: "File:Siege FESPACO Ouaga.jpg" },
        { name: { fr: "Musée National du Burkina Faso — masques et bronzes Mossi", en: "National Museum of Burkina Faso — Mossi masks and bronzes", es: "Museo Nacional de Burkina Faso — máscaras y bronces mossi", de: "Nationalmuseum von Burkina Faso – Mossi-Masken und Bronzen" }, wikipedia: "File:Théâtre de plein air au musée national du Burkina Faso.jpg" },
        { name: { fr: "Grand Marché de Ouagadougou — tissus et artisanat", en: "Grand Market of Ouagadougou — fabrics and handicrafts", es: "Gran Mercado de Uagadugú — telas y artesanía", de: "Großer Markt von Ouagadougou – Stoffe und Kunsthandwerk" }, wikipedia: "File:Ouagadougou street in 2004 2.jpg" },
        { name: { fr: "Village artisanal de Ouagadougou", en: "Ouagadougou craft village", es: "Aldea artesanal de Uagadugú", de: "Handwerkerdorf in Ouagadougou" }, wikipedia: "File:July 2004 Ouagadougou streets 12.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Banfora & Cascades de Karfiguéla", en: "Banfora & Karfiguéla Waterfalls", es: "Banfora y cascadas de Karfiguéla", de: "Banfora- und Karfiguéla-Wasserfälle" },
      region: { fr: "Cascades", en: "Cascades", es: "Cascades", de: "Wasserfälle" },
      description: {
        fr: "La région de Banfora est le paradis naturel du Burkina Faso : les cascades de Karfiguéla (chutes de 10m dans un écrin de verdure), le lac de Tengrela avec ses hippopotames, les pics de Sindou (formations rocheuses spectaculaires), et les dômes de Fabédougou. La région est accessible et relativement sûre.", en: "The Banfora area is Burkina Faso's natural paradise: the Karfiguéla waterfalls (10-metre cascades set in lush greenery), Lake Tengrela with its hippos, the Sindou Peaks with their spectacular rock formations, and the Fabédougou domes. The region is accessible and relatively safe.", es: "La región de Banfora es el paraíso natural de Burkina Faso: las cascadas de Karfiguéla (saltos de 10 m en medio de un entorno verde), el lago Tengrela con sus hipopótamos, los picos de Sindou (formaciones rocosas espectaculares) y las cúpulas de Fabédougou. La región es accesible y relativamente segura.", de: "Die Region Banfora ist das Naturparadies Burkina Fasos: die Karfiguéla-Wasserfälle (10 m hohe Wasserfälle in grüner Umgebung), der Tengrela-See mit seinen Flusspferden, die Sindou-Gipfel (spektakuläre Felsformationen) und die Kuppeln von Fabédougou. Die Region ist zugänglich und relativ sicher.",
      },
      wikipedia: "Banfora",
      tags: ["Nature", "Safari"],
      mustSee: [
        { name: { fr: "Cascades de Karfiguéla — chutes spectaculaires dans la brousse", en: "Karfiguéla Waterfalls — spectacular falls in the bush", es: "Cascadas de Karfiguéla — saltos espectaculares en la sabana", de: "Karfiguéla-Wasserfälle – spektakuläre Wasserfälle im Busch" }, wikipedia: "File:Cascades_de_Banfora_Burkina_Faso.JPG" },
        { name: { fr: "Lac de Tengrela — hippopotames (observation en pirogue)", en: "Lake Tengrela — hippos (seen by pirogue)", es: "Lago Tengrela — hipopótamos (observación en piragua)", de: "Tengrela-See – Flusspferde (Beobachtung mit dem Kanu)" }, wikipedia: "File:Lac de Tengrela vu sud.jpg" },
        { name: { fr: "Pics de Sindou — formations rocheuses spectaculaires", en: "Sindou Peaks — spectacular rock formations", es: "Picos de Sindou — formaciones rocosas espectaculares", de: "Sindou Peaks – spektakuläre Felsformationen" }, wikipedia: "File:PicsdeSindou.jpg" },
        { name: { fr: "Dômes de Fabédougou — rochers rouges en pleine campagne", en: "Fabédougou Domes — red rock formations in the countryside", es: "Cúpulas de Fabédougou — rocas rojas en pleno campo", de: "Kuppeln von Fabédougou – rote Felsen auf dem Land" }, wikipedia: "File:Domes de Fabedougou.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Laongo — Symphonie des Roches", en: "Laongo — Symphony of the Rocks", es: "Laongo — Sinfonía de las Rocas", de: "Laongo – Symphonie der Felsen" },
      region: { fr: "Plateau Central", en: "Central Plateau", es: "Meseta Central", de: "Mittelland" },
      description: {
        fr: "À 30km d'Ouagadougou, le Symposium International de Sculpture sur Granit de Laongo réunit depuis 1989 des sculpteurs du monde entier qui travaillent directement dans les immenses rochers de granite. Une galerie à ciel ouvert unique en Afrique, où l'art contemporain africain et international se fond dans le paysage sahélien.", en: "Thirty kilometres from Ouagadougou, the Laongo International Granite Sculpture Symposium has brought together sculptors from around the world since 1989, carving directly into huge granite boulders. It is a unique open-air gallery in Africa, where African and international contemporary art blends into the Sahelian landscape.", es: "A 30 km de Uagadugú, el Simposio Internacional de Escultura sobre Granito de Laongo reúne desde 1989 a escultores de todo el mundo que trabajan directamente sobre enormes rocas de granito. Una galería al aire libre única en África, donde el arte contemporáneo africano e internacional se funde con el paisaje saheliano.", de: "30 km von Ouagadougou entfernt bringt das Laongo International Granite Sculpture Symposium seit 1989 Bildhauer aus aller Welt zusammen, die direkt in den riesigen Granitfelsen arbeiten. Eine einzigartige Open-Air-Galerie in Afrika, in der zeitgenössische afrikanische und internationale Kunst mit der Landschaft der Sahelzone verschmilzt.",
      },
      wikipedia: "File:Symposium accueil.JPG",
      tags: ["Art", "Culture", "Nature"],
      mustSee: [
        { name: { fr: "Sculptures sur granite de Laongo (symposium international)", en: "Laongo granite sculptures (international symposium)", es: "Esculturas sobre granito de Laongo (simposio internacional)", de: "Laongo-Granitskulpturen (internationales Symposium)" }, wikipedia: "File:TR Sculture sur granite de Laongo 03.jpg" },
        { name: { fr: "Paysage de rochers de granite rose à perte de vue", en: "Endless landscape of pink granite boulders", es: "Paisaje de rocas de granito rosa hasta donde alcanza la vista", de: "Landschaft aus rosafarbenen Granitfelsen soweit das Auge reicht" }, wikipedia: "File:GRANITE PETROGLYPHE DE LAONGO.jpg" },
        { name: { fr: "Village de Laongo et artisans locaux", en: "Laongo village and local craftspeople", es: "Aldea de Laongo y artesanos locales", de: "Laongo-Dorf und lokale Kunsthandwerker" }, wikipedia: "File:Sortie photo sur le site de granite de Loango 02.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Burkina Faso est l'un des pays les plus abordables d'Afrique de l'Ouest. La situation sécuritaire a fortement réduit le tourisme ces dernières années, rendant les services moins disponibles. Le franc CFA arrimé à l'euro facilite la gestion du budget.", en: "Burkina Faso is one of the most affordable countries in West Africa. The security situation has sharply reduced tourism in recent years, making services less widely available. The CFA franc's peg to the euro makes budgeting easier.", es: "Burkina Faso es uno de los países más asequibles de África Occidental. La situación de seguridad ha reducido mucho el turismo en los últimos años, lo que hace que los servicios sean menos accesibles. El franco CFA, vinculado al euro, facilita la gestión del presupuesto.", de: "Burkina Faso ist eines der erschwinglichsten Länder Westafrikas. Aufgrund der Sicherheitslage ist der Tourismus in den letzten Jahren stark zurückgegangen, sodass Dienstleistungen weniger verfügbar sind. Der an den Euro gekoppelte CFA-Franc erleichtert die Haushaltsführung.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / basic room", es: "Guesthouse / habitación sencilla", de: "Gästehaus / Einzelzimmer" }, price: "15–30 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic air conditioning", es: "Ventilador o aire acondicionado básico", de: "Ventilator oder einfache Klimaanlage" } },
          { label: { fr: "Hôtel 3★ Ouagadougou", en: "3★ hotel in Ouagadougou", es: "Hotel 3★ en Uagadugú", de: "Hotel 3★ Ouagadougou" }, price: "50–90 €", detail: { fr: "Clim, sécurité, wifi", en: "A/C, security, Wi-Fi", es: "Aire acondicionado, seguridad, wifi", de: "Klimaanlage, Sicherheit, WLAN" } },
          { label: { fr: "Hôtel de luxe (Laico, Azalaï)", en: "Luxury hotel (Laico, Azalaï)", es: "Hotel de lujo (Laico, Azalaï)", de: "Luxushotel (Laico, Azalaï)" }, price: "120–200 €", detail: { fr: "Standard international", en: "International standard", es: "Estándar internacional", de: "Internationaler Standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Tô / riz sauce dans un buvette locale", en: "Tô / rice with sauce in a local eatery", es: "Tô / arroz con salsa en un puesto local", de: "Tô/Reissauce in einer lokalen Erfrischungsbar" }, price: "1–3 €", detail: { fr: "Cuisine burkinabé typique", en: "Typical Burkinabé cooking", es: "Cocina típica burkinesa", de: "Typische burkinische Küche" } },
          { label: { fr: "Restaurant mid-range Ouaga", en: "Mid-range restaurant in Ouaga", es: "Restaurante de gama media en Uagadugú", de: "Mittelklasserestaurant Ouaga" }, price: "7–15 €", detail: { fr: "Grillades, brochettes, menu", en: "Grilled dishes, skewers, set menus", es: "Parrilladas, brochetas, menú", de: "Grillgerichte, Spieße, Menü" } },
          { label: { fr: "Restaurant gastronomique Ouaga", en: "Fine-dining restaurant in Ouaga", es: "Restaurante gastronómico en Uagadugú", de: "Ouaga Gourmet-Restaurant" }, price: "20–40 €", detail: { fr: "Cuisine française et internationale", en: "French and international cuisine", es: "Cocina francesa e internacional", de: "Französische und internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Sotrama (minibus collectif) — trajet urbain", en: "Sotrama shared minibus — urban ride", es: "Sotrama (minibús colectivo) — trayecto urbano", de: "Sotrama (Sammel-Kleinbus) – Stadtfahrt" }, price: "0,15–0,50 €", detail: { fr: "Transport populaire", en: "Common local transport", es: "Transporte popular", de: "Beliebter Transport" } },
          { label: { fr: "Taxi clim ou moto-taxi", en: "Air-conditioned taxi or moto-taxi", es: "Taxi con aire acondicionado o mototaxi", de: "Klimatisiertes Taxi oder Motorradtaxi" }, price: "1–5 €", detail: { fr: "Selon distance", en: "Depending on distance", es: "Según la distancia", de: "Abhängig von der Entfernung" } },
          { label: { fr: "Bus STAF (Ouaga–Banfora, 4h)", en: "STAF bus (Ouaga–Banfora, 4h)", es: "Autobús STAF (Uagadugú–Banfora, 4h)", de: "STAF-Bus (Ouaga–Banfora, 4 Stunden)" }, price: "5–10 €", detail: { fr: "Confortable, climatisé", en: "Comfortable, air-conditioned", es: "Cómodo, con aire acondicionado", de: "Komfortabel, klimatisiert" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite guidée cascades de Karfiguéla + lac Tengrela", en: "Guided tour of Karfiguéla Waterfalls + Lake Tengrela", es: "Visita guiada a las cascadas de Karfiguéla + lago Tengrela", de: "Geführte Tour zu den Karfiguéla-Wasserfällen und zum Tengrela-See" }, price: "20–40 €", detail: { fr: "Journée depuis Banfora", en: "Day trip from Banfora", es: "Excursión de un día desde Banfora", de: "Tagesausflug von Banfora" } },
          { label: { fr: "Pirogue lac Tengrela — hippopotames", en: "Lake Tengrela pirogue trip — hippos", es: "Piragua en el lago Tengrela — hipopótamos", de: "Kanu auf dem Tengrela-See – Flusspferde" }, price: "5–10 €", detail: { fr: "30–45 min", en: "30–45 min", es: "30–45 min", de: "30–45 Min." } },
          { label: { fr: "Sculptures de Laongo (entrée + guide)", en: "Laongo sculptures (entry + guide)", es: "Esculturas de Laongo (entrada + guía)", de: "Skulpturen von Laongo (Eintritt + Führung)" }, price: "5–15 €", detail: { fr: "30km d'Ouaga", en: "30 km from Ouaga", es: "30 km de Uagadugú", de: "30 km von Ouaga entfernt" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + cuisine locale + transport commun", en: "Guesthouse + local food + shared transport", es: "Guesthouse + comida local + transporte colectivo", de: "Gästehaus + lokale Küche + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3★ hotel + restaurants + guided excursions", es: "Hotel 3★ + restaurantes + excursiones guiadas", de: "3★ Hotel + Restaurants + geführte Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Grand hôtel Ouaga + circuit privatisé", en: "Top hotel in Ouaga + private tour", es: "Gran hotel en Uagadugú + circuito privado", de: "Grand Ouaga Hotel + private Tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Ouagadougou (4j) → Laongo (1j) → Bobo-Dioulasso (2j) → Banfora / Cascades (3j)", en: "Ouagadougou (4d) → Laongo (1d) → Bobo-Dioulasso (2d) → Banfora / Cascades (3d)", es: "Uagadugú (4d) → Laongo (1d) → Bobo-Dioulasso (2d) → Banfora / Cascades (3d)", de: "Ouagadougou (4 Tage) → Laongo (1 Tage) → Bobo-Dioulasso (2 Tage) → Banfora / Kaskaden (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 300 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ouagadougou", en: "Return flight Paris–Ouagadougou", es: "Vuelo ida y vuelta París–Uagadugú", de: "Hin- und Rückflug Paris–Ouagadougou" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "100–200 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "150–250 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides", es: "Actividades y guías", de: "Aktivitäten und Führer" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ouagadougou", en: "Return flight Paris–Ouagadougou", es: "Vuelo ida y vuelta París–Uagadugú", de: "Hin- und Rückflug Paris–Ouagadougou" }, amount: "550–750 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "600–1 000 €" },
            { label: { fr: "Location voiture / chauffeur", en: "Car hire / driver", es: "Alquiler de coche / chófer", de: "Auto-/Fahrervermietung" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings", es: "Comida y salidas", de: "Essen und Ausflüge" }, amount: "350–550 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions", es: "Actividades y excursiones", de: "Aktivitäten & Ausflüge" }, amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~6h (Air France, Ethiopian Airlines, Brussels Airlines via escale)", en: "~6h (Air France, Ethiopian Airlines, Brussels Airlines with a stopover)", es: "~6h (Air France, Ethiopian Airlines, Brussels Airlines con escala)", de: "ca. 6 Std. (Air France, Ethiopian Airlines, Brussels Airlines mit Zwischenstopp)" } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety", es: "Seguridad", de: "Sicherheit" }, value: { fr: "AVERTISSEMENT : vaste zones d'insécurité au nord, est et sahel. Consulter AVANT le départ les avis MEAE / Diplomatie.gouv.fr.", en: "WARNING: large areas in the north, east and Sahel are unsafe. Check MEAE / Diplomatie.gouv.fr travel advisories BEFORE departure.", es: "ADVERTENCIA: extensas zonas de inseguridad en el norte, el este y el Sahel. Consulte los avisos oficiales para viajeros ANTES de partir.", de: "WARNUNG: Große Gebiete der Unsicherheit im Norden, Osten und in der Sahelzone. Konsultieren Sie VOR der Abreise die Meinungen von MEAE / Diplomatie.gouv.fr." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — à obtenir à l'ambassade ou à l'arrivée. Vérifier les procédures actuelles.", en: "Visa required — obtainable from the embassy or on arrival. Check the current procedures.", es: "Visado obligatorio — se obtiene en la embajada o a la llegada. Verifique los trámites vigentes.", de: "Visum erforderlich – erhältlich bei der Botschaft oder bei der Ankunft. Überprüfen Sie die aktuellen Verfahren." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces indispensables hors Ouaga.", en: "CFA franc (XOF). 1€ = 655 XOF at a fixed rate. Cash is essential outside Ouaga.", es: "Franco CFA (XOF). 1€ = 655 XOF a tipo fijo. El efectivo es indispensable fuera de Uagadugú.", de: "CFA-Franc (XOF). 1€ = 655 XOF Festpreis. Wesentliche Arten außerhalb von Ouaga." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français (officiel) — communication facile pour francophones.", en: "French (official) — easy communication for French speakers.", es: "Francés (oficial) — comunicación fácil para hispanohablantes con nociones de francés.", de: "Französisch (offiziell) – einfache Kommunikation für Französischsprachige." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V.", es: "Tipo C/E (europeo) — 220V.", de: "Typ C/E (europäisch) – 220 V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Méningite recommandé.", en: "Yellow fever vaccination required. Anti-malarial medication is essential. Meningitis vaccination recommended.", es: "Vacuna de fiebre amarilla obligatoria. Antipalúdico indispensable. Se recomienda la vacuna contra la meningitis.", de: "Gelbfieberimpfung erforderlich. Unverzichtbares Malariamittel. Meningitis empfohlen." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not safe to drink — bottled water is essential.", es: "No potable — el agua embotellada es indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
  ],
};
