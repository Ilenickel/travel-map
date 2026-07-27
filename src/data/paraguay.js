export const PARAGUAY = {
  code: "PRY",
  numericId: 600,
  name: { fr: "Paraguay", en: "Paraguay", es: "Paraguay", de: "Paraguay" },
  emoji: "🇵🇾",
  capital: { fr: "Asunción", en: "Asunción", es: "Asunción", de: "Asunción" },
  language: { fr: "Espagnol, guaraní", en: "Spanish, Guaraní", es: "Español, guaraní", de: "Spanisch, Guarani" },
  currency: { fr: "Guaraní (PYG)", en: "Guaraní (PYG)", es: "Guaraní (PYG)", de: "Guarani (PYG)" },
  timezone: "UTC-4 (été) / UTC-3 (hiver)",
  filter: {
    budgetMin: 25,
    budgetMid: 50,
    tripMin: 1100,
    tripMid: 2000,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 1,
    plongee: 0,
  },
  description: {
    fr: "Le Paraguay est l'une des destinations les plus méconnues et authentiques d'Amérique du Sud. Pays bilingue espagnol-guaraní, il fascine par ses missions jésuites du XVIIe siècle, sa nature sauvage (Pantanal paraguayen, Chaco) et sa culture singulière. Très abordable et peu touristique.", en: "Paraguay is one of the most little-known and authentic destinations in South America. A bilingual Spanish-Guaraní country, it fascinates with its 17th-century Jesuit missions, wild nature (Paraguayan Pantanal, Chaco) and unique culture. Very affordable and off the tourist trail.", es: "Paraguay es uno de los destinos menos conocidos y más auténticos de Sudamérica. País bilingüe español-guaraní, fascina por sus misiones jesuíticas del siglo XVII, su naturaleza salvaje (Pantanal paraguayo, Chaco) y su cultura singular. Muy asequible y poco turístico.", de: "Paraguay ist eines der unbekanntesten und authentischsten Reiseziele in Südamerika. Als zweisprachiges Spanisch-Guaraní-Land fasziniert es mit seinen Jesuitenmissionen aus dem 17. Jahrhundert, seiner wilden Natur (paraguayisches Pantanal, Chaco) und seiner einzigartigen Kultur. Sehr erschwinglich und nicht sehr touristisch.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Saison sèche et fraîche", en: "Dry and cool season", es: "Estación seca y fresca", de: "Trockene und kühle Jahreszeit" },
      color: "#fbbf24",
      description: {
        fr: "Températures agréables (15–25 °C), routes praticables, idéal pour le Chaco et les missions jésuites.", en: "Pleasant temperatures (15–25 °C), passable roads, ideal for the Chaco and the Jesuit missions.", es: "Temperaturas agradables (15–25 °C), carreteras transitables, ideal para el Chaco y las misiones jesuíticas.", de: "Angenehme Temperaturen (15–25°C), befahrbare Straßen, ideal für die Chaco- und Jesuitenmissionen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November", es: "Octubre – Noviembre", de: "Oktober – November" },
      label: { fr: "Printemps (nature en fleur)", en: "Spring (nature in bloom)", es: "Primavera (naturaleza en flor)", de: "Frühling (blühende Natur)" },
      color: "#86efac",
      description: {
        fr: "Paisaje florido : le lapacho rose en fleur transforme les villes. Avant les grandes chaleurs et pluies.", en: "Paisaje florido: the blooming pink lapacho trees transform the towns. Before the peak heat and rains.", es: "Paisaje florido: el lapacho rosado en flor transforma las ciudades. Antes de las grandes calores y lluvias.", de: "Paisaje florido: Der blühende rosa Lapacho verwandelt Städte. Vor der großen Hitze und dem Regen.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "asuncion",
      name: "Asunción",
      region: { fr: "Région Centrale", en: "Central Region", es: "Región Central", de: "Zentralregion" },
      data: [
        { month: "Jan", temp: 30, rain: 135, icon: "🌧️" },
        { month: "Fév", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Avr", temp: 23, rain: 155, icon: "☀️" },
        { month: "Mai", temp: 19, rain: 130, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 90, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 60, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 65, icon: "☀️" },
        { month: "Sep", temp: 21, rain: 90, icon: "⛅" },
        { month: "Oct", temp: 24, rain: 130, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 125, icon: "🌧️" },
        { month: "Déc", temp: 30, rain: 145, icon: "🌧️" },
      ],
    },
    {
      id: "encarnacion",
      name: "Encarnación",
      region: { fr: "Itapúa (Sud)", en: "Itapúa (South)", es: "Itapúa (Sur)", de: "Itapúa (Süden)" },
      data: [
        { month: "Jan", temp: 30, rain: 145, icon: "🌧️" },
        { month: "Fév", temp: 29, rain: 135, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 23, rain: 165, icon: "☀️" },
        { month: "Mai", temp: 18, rain: 140, icon: "⛅" },
        { month: "Jun", temp: 16, rain: 95, icon: "⛅" },
        { month: "Jul", temp: 16, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 70, icon: "☀️" },
        { month: "Sep", temp: 20, rain: 95, icon: "⛅" },
        { month: "Oct", temp: 24, rain: 145, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 135, icon: "🌧️" },
        { month: "Déc", temp: 30, rain: 155, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Missions jésuites", en: "Jesuit missions", es: "Misiones jesuíticas", de: "Jesuitenmissionen" },
      region: { fr: "Itapúa", en: "Itapúa", es: "Itapúa", de: "Itapúa" },
      description: {
        fr: "Les ruines des missions jésuites du XVIIe siècle sont parmi les plus impressionnantes d'Amérique du Sud. La Santísima Trinidad de Paraná et Jesús de Tavarangue, inscrites au patrimoine UNESCO, témoignent d'une utopie sociale unique.", en: "The ruins of the 17th-century Jesuit missions are among the most impressive in South America. The Santísima Trinidad de Paraná and Jesús de Tavarangue, both UNESCO World Heritage sites, bear witness to a unique social utopia.", es: "Las ruinas de las misiones jesuíticas del siglo XVII se encuentran entre las más impresionantes de Sudamérica. La Santísima Trinidad de Paraná y Jesús de Tavarangue, ambas Patrimonio de la Humanidad por la UNESCO, dan testimonio de una utopía social única.", de: "Die Ruinen der Jesuitenmissionen aus dem 17. Jahrhundert gehören zu den beeindruckendsten in Südamerika. La Santísima Trinidad de Paraná und Jesús de Tavarangue, die zum UNESCO-Weltkulturerbe gehören, zeugen von einer einzigartigen sozialen Utopie.",
      },
      wikipedia: "File:San_Ignacio_Miní_Jesuit-Guarani_mission_1.jpg",
      tags: ["Histoire", "UNESCO", "Spiritualité", "Ruines", "Architecture"],
      mustSee: [
        { name: { fr: "Trinidad (mission)", en: "Trinidad (mission)", es: "Trinidad (misión)", de: "Trinidad (Mission)" }, wikipedia: "File:ParaguayTrinidadReduction.jpg" },
        { name: "Jesús de Tavarangüé", wikipedia: "File:Jesús de Tavarangue - Church ruins 02.jpg" },
        { name: "San Cosme y Damián", wikipedia: "File:Prefectura de San Cosme y Damián 025 filtered.jpg" },
        { name: { fr: "Encarnación (carnaval)", en: "Encarnación (carnival)", es: "Encarnación (carnaval)", de: "Encarnación (Karneval)" }, wikipedia: "File:Carnaval of Encarnación 230257.jpg" },
      ],
    },
    {
      id: 2,
      name: "Asunción",
      region: { fr: "Gran Asunción", en: "Gran Asunción", es: "Gran Asunción", de: "Gran Asuncion" },
      description: {
        fr: "La capitale est l'une des plus anciennes d'Amérique du Sud (fondée en 1537). Son Casco Histórico mêle architecture coloniale et édifices du XIXe siècle. Le Mercado 4 et les Bañados (zones humides urbaines) offrent un dépaysement total.", en: "The capital is one of the oldest in South America (founded in 1537). Its Casco Histórico blends colonial architecture with 19th-century buildings. The Mercado 4 and the Bañados (urban wetlands) offer a complete change of scenery.", es: "La capital es una de las más antiguas de Sudamérica (fundada en 1537). Su Casco Histórico combina arquitectura colonial con edificios del siglo XIX. El Mercado 4 y los Bañados (humedales urbanos) ofrecen un cambio de aires total.", de: "Die Hauptstadt ist eine der ältesten in Südamerika (gegründet 1537). Sein Casco Histórico vereint Kolonialarchitektur und Gebäude aus dem 19. Jahrhundert. Mercado 4 und die Bañados (städtische Feuchtgebiete) bieten einen völligen Tapetenwechsel.",
      },
      wikipedia: "File:Downtown Asuncion 091253.jpg",
      tags: ["Ville", "Histoire", "Culture", "Shopping", "Gastronomie"],
      mustSee: [
        { name: "Palacio de López", wikipedia: "File:00 3819 Asunción - Paraguay (Südamerika).jpg" },
        { name: "Catedral Metropolitana", wikipedia: "File:Catedral_Nuestra_Señora_de_la_Asunción_-_Baracoa_-_01.jpg" },
        { name: "Casa de la Independencia", wikipedia: "File:Casa de la Independencia museum, Asunción.jpg" },
        { name: "Jardín Botánico Nacional", wikipedia: "File:Jardín Botánico Asunción.png" },
      ],
    },
    {
      id: 3,
      name: { fr: "Pantanal paraguayen", en: "Paraguayan Pantanal", es: "Pantanal paraguayo", de: "Paraguayisches Pantanal" },
      region: { fr: "Ñeembucú / Alto Paraguay", en: "Ñeembucú / Alto Paraguay", es: "Ñeembucú / Alto Paraguay", de: "Ñeembucú / Alto Paraguay" },
      description: {
        fr: "La partie paraguayenne du Pantanal (la plus grande zone humide du monde) est quasi-vierge et peu visitée. Caïmans, jaguars, capybaras et oiseaux extraordinaires dans un cadre immaculé.", en: "The Paraguayan part of the Pantanal (the largest wetland in the world) is nearly untouched and rarely visited. Caimans, jaguars, capybaras and extraordinary birdlife in a pristine setting.", es: "La parte paraguaya del Pantanal (el mayor humedal del mundo) es casi virgen y poco visitada. Caimanes, jaguares, capibaras y aves extraordinarias en un entorno inmaculado.", de: "Der paraguayische Teil des Pantanal (das größte Feuchtgebiet der Welt) ist nahezu unberührt und wenig besucht. Kaimane, Jaguare, Wasserschweine und außergewöhnliche Vögel in einer makellosen Umgebung.",
      },
      wikipedia: "Pantanal",
      tags: ["Nature", "Safari"],
      mustSee: [
        { name: "Bahía Negra (Alto Paraguay)", wikipedia: "Pantanal" },
        { name: "Parque Nacional Médanos del Chaco", wikipedia: "File:Chaco_Boreal_Paraguay.jpg" },
        { name: { fr: "Río Paraguay (pirogue)", en: "Río Paraguay (canoe)", es: "Río Paraguay (piragua)", de: "Rio Paraguay (Kanu)" }, wikipedia: "File:Rio Paraguay.jpg" },
      ],
    },
    {
      id: 4,
      name: "Gran Chaco",
      region: { fr: "Boquerón", en: "Boquerón", es: "Boquerón", de: "Boqueron" },
      description: {
        fr: "Le Gran Chaco est une forêt sèche immense et peu connue, deuxième plus grande forêt d'Amérique du Sud après l'Amazonie. Peuples indigènes, colonies mennonites et faune unique (tatous géants, tapirs) dans des paysages désertiques envoûtants.", en: "The Gran Chaco is a vast, little-known dry forest, the second-largest forest in South America after the Amazon. Indigenous peoples, Mennonite colonies and unique wildlife (giant armadillos, tapirs) amid captivating desert landscapes.", es: "El Gran Chaco es un bosque seco inmenso y poco conocido, el segundo más grande de Sudamérica después de la Amazonia. Pueblos indígenas, colonias menonitas y fauna única (armadillos gigantes, tapires) en paisajes desérticos cautivadores.", de: "Der Gran Chaco ist ein riesiger und wenig bekannter Trockenwald, der zweitgrößte Wald Südamerikas nach dem Amazonas. Indigene Völker, mennonitische Siedlungen und einzigartige Wildtiere (Riesengürteltiere, Tapire) in faszinierenden Wüstenlandschaften.",
      },
      wikipedia: "Gran_Chaco",
      tags: ["Nature", "Safari", "Culture", "Aventure", "Désert"],
      mustSee: [
        { name: "Parque Nacional Defensores del Chaco", wikipedia: "File:Chaco Boreal Paraguay.jpg" },
        { name: { fr: "Filadelfia (colonie mennonite)", en: "Filadelfia (Mennonite colony)", es: "Filadelfia (colonia menonita)", de: "Filadelfia (mennonitische Kolonie)" }, wikipedia: "File:Filadelfia Paraguay.jpg" },
        { name: { fr: "Tatou géant", en: "Giant armadillo", es: "Armadillo gigante", de: "Riesengürteltier" }, wikipedia: "Giant_armadillo" },
        { name: { fr: "Pozo Colorado (route transchaco)", en: "Pozo Colorado (Trans-Chaco highway)", es: "Pozo Colorado (ruta transchaco)", de: "Pozo Colorado (Transchaco-Route)" }, wikipedia: "File:Pozo_Colorado,_empalme_de_las_rutas_nacionales_PY05_y_PY09..jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Paraguay est l'une des destinations les moins chères d'Amérique du Sud, avec des prix très bas pour l'hébergement et la nourriture.", en: "Paraguay is one of the cheapest destinations in South America, with very low prices for accommodation and food.", es: "Paraguay es uno de los destinos más económicos de Sudamérica, con precios muy bajos de alojamiento y comida.", de: "Paraguay ist eines der günstigsten Reiseziele in Südamerika mit sehr niedrigen Preisen für Unterkunft und Verpflegung.",
    },
    currency: "Guaraní (PYG)",
    exchangeRate: "1€ ≈ 7 500–8 000 PYG",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Youth hostel dorm", es: "Dormitorio de albergue juvenil", de: "Schlafsaal der Jugendherberge" }, price: "6–12 €", detail: { fr: "Asunción, peu de choix ailleurs", en: "Asunción, few options elsewhere", es: "Asunción, pocas opciones en otros lugares", de: "Asunción, anderswo kaum Auswahl" } },
          { label: { fr: "Chambre double hôtel simple", en: "Simple hotel double room", es: "Habitación doble en hotel sencillo", de: "Einzel-Hotel-Doppelzimmer" }, price: "20–40 €", detail: { fr: "Confort basique, avec AC", en: "Basic comfort, with AC", es: "Confort básico, con aire acondicionado", de: "Einfacher Komfort, mit Klimaanlage" } },
          { label: { fr: "Hôtel 3★ Asunción", en: "3★ hotel in Asunción", es: "Hotel 3★ en Asunción", de: "Hotel 3★ Asuncion" }, price: "50–100 €", detail: { fr: "Bon confort, petit-déjeuner inclus", en: "Good comfort, breakfast included", es: "Buen confort, desayuno incluido", de: "Guter Komfort, Frühstück inklusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Sopa paraguaya (pain de maïs)", en: "Sopa paraguaya (corn bread)", es: "Sopa paraguaya (pan de maíz)", de: "Sopa Paraguaya (Maisbrot)" }, price: "1–2 €", detail: { fr: "Incontournable, dense et savoureux", en: "A must-try, dense and tasty", es: "Imprescindible, densa y sabrosa", de: "Unverzichtbar, dicht und lecker" } },
          { label: { fr: "Menu du midi local", en: "Local lunch set", es: "Menú del mediodía local", de: "Lokales Mittagsmenü" }, price: "3–6 €", detail: { fr: "Soupe + plat + boisson", en: "Soup + main + drink", es: "Sopa + plato principal + bebida", de: "Suppe + Hauptgericht + Getränk" } },
          { label: { fr: "Restaurant mid-range Asunción", en: "Mid-range restaurant in Asunción", es: "Restaurante de gama media en Asunción", de: "Mittelklasserestaurant Asuncion" }, price: "8–18 €", detail: { fr: "Viande grillée ou cuisine traditionnelle", en: "Grilled meat or traditional cuisine", es: "Carne a la parrilla o cocina tradicional", de: "Gegrilltes Fleisch oder traditionelle Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus intercités (ex: Asunción–Encarnación)", en: "Intercity bus (e.g. Asunción–Encarnación)", es: "Autobús interurbano (ej.: Asunción–Encarnación)", de: "Überlandbusse (z. B. Asunción–Encarnación)" }, price: "5–10 €", detail: { fr: "3h, confortable et fréquent", en: "3h, comfortable and frequent", es: "3h, cómodo y frecuente", de: "3 Stunden, bequem und häufig" } },
          { label: { fr: "Taxi/Uber Asunción", en: "Taxi/Uber in Asunción", es: "Taxi/Uber en Asunción", de: "Taxi/Uber Asuncion" }, price: "2–8 €", detail: { fr: "Courses urbaines abordables", en: "Affordable city rides", es: "Trayectos urbanos asequibles", de: "Erschwingliches Einkaufen in der Stadt" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Entrée missions jésuites Trinidad", en: "Trinidad Jesuit mission entry", es: "Entrada a la misión jesuítica de Trinidad", de: "Eintritt Jesuitenmissionen Trinidad" }, price: "2–5 €", detail: { fr: "Très abordable", en: "Very affordable", es: "Muy asequible", de: "Sehr erschwinglich" } },
          { label: { fr: "Tour Chaco (journée depuis Asunción)", en: "Chaco tour (day trip from Asunción)", es: "Tour por el Chaco (día completo desde Asunción)", de: "Chaco-Tour (Tagesausflug von Asunción)" }, price: "40–80 €", detail: { fr: "Avec guide, 4x4 inclus", en: "With guide, 4x4 included", es: "Con guía, 4x4 incluido", de: "Mit Führer, 4x4 inklusive" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Auberge, cuisine locale, bus, très abordable", en: "Hostel, local food, bus, very affordable", es: "Albergue, comida local, autobús, muy asequible", de: "Hostel, lokales Essen, Bus, sehr erschwinglich" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "50–90 €/j", desc: { fr: "Hôtel 3★, restaurants corrects, excursions", en: "3★ hotel, decent restaurants, excursions", es: "Hotel 3★, restaurantes decentes, excursiones", de: "3★ Hotel, gute Restaurants, Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "120 €+/j", desc: { fr: "Meilleurs hôtels, tours privés, estancias", en: "Best hotels, private tours, estancias", es: "Mejores hoteles, tours privados, estancias", de: "Beste Hotels, private Touren, Estancias" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Asunción – Missions jésuites – Gran Chaco – Pantanal", en: "Asunción – Jesuit missions – Gran Chaco – Pantanal", es: "Asunción – Misiones jesuíticas – Gran Chaco – Pantanal", de: "Asunción – Jesuitenmissionen – Gran Chaco – Pantanal" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asunción", en: "Return flight Paris–Asunción", es: "Vuelo ida y vuelta París–Asunción", de: "Hin- und Rückflug Paris–Asunción" }, amount: "700–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "150–220 €" },
            { label: { fr: "Transport local", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "80–150 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asunción", en: "Return flight Paris–Asunción", es: "Vuelo ida y vuelta París–Asunción", de: "Hin- und Rückflug Paris–Asunción" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "450–650 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–450 €" },
            { label: { fr: "Transport + excursions", en: "Transport + excursions", es: "Transporte + excursiones", de: "Transport + Ausflüge" }, amount: "200–350 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asunción (Business)", en: "Return flight Paris–Asunción (Business)", es: "Vuelo ida y vuelta París–Asunción (Business)", de: "Hin- und Rückflug Paris–Asunción (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "900–1 300 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "350–500 €" },
            { label: { fr: "Tours privés & estancias", en: "Private tours & estancias", es: "Tours privados y estancias", de: "Private Touren und Estancias" }, amount: "400–600 €" },
            { label: { fr: "Activités premium", en: "Premium activities", es: "Actividades premium", de: "Premium-Aktivitäten" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~14–16h avec escale (São Paulo, Buenos Aires)", en: "~14–16h with a layover (São Paulo, Buenos Aires)", es: "~14–16h con escala (São Paulo, Buenos Aires)", de: "ca. 14–16 Std. mit Zwischenstopp (São Paulo, Buenos Aires)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)", es: "Sin visado para los franceses (90 días)", de: "Visumfrei für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Guaraní (1€ ≈ 7 500–8 000 PYG)", en: "Guaraní (1€ ≈ 7,500–8,000 PYG)", es: "Guaraní (1€ ≈ 7.500–8.000 PYG)", de: "Guaraní (1€ ≈ 7.500–8.000 PYG)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol et guaraní (co-officiels)", en: "Spanish and Guaraní (co-official)", es: "Español y guaraní (co-oficiales)", de: "Spanisch und Guaraní (Co-Beamte)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/A – 220 V (adaptateur conseillé)", en: "Type C/A — 220V (adapter recommended)", es: "Tipo C/A – 220 V (se recomienda adaptador)", de: "Typ C/A – 220 V (Adapter empfohlen)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "4G dans les villes, quasi inexistant en Chaco profond", en: "4G in towns, almost nonexistent in the deep Chaco", es: "4G en las ciudades, casi inexistente en el Chaco profundo", de: "4G in Städten, im tiefen Chaco fast nicht vorhanden" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable, eau en bouteille recommandée", en: "Not drinkable, bottled water recommended", es: "No potable, se recomienda agua embotellada", de: "Kein Trinkwasser, Flaschenwasser empfohlen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune recommandé pour certaines zones", en: "Yellow fever vaccine recommended for certain areas", es: "Se recomienda la vacuna contra la fiebre amarilla en ciertas zonas", de: "Für bestimmte Gebiete wird eine Gelbfieberimpfung empfohlen" } },
  ],
};
