export const DOMINICAN_REPUBLIC = {
  code: "DOM",
  numericId: 214,
  name: { fr: "République Dominicaine", en: "Dominican Republic", es: "República Dominicana", de: "Dominikanische Republik" },
  emoji: "🇩🇴",
  capital: { fr: "Saint-Domingue", en: "Santo Domingo", es: "Santo Domingo", de: "Santo Domingo" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" },
  currency: { fr: "Peso dominicain (DOP)", en: "Dominican peso (DOP)", es: "Peso dominicano (DOP)", de: "Dominikanischer Peso (DOP)" },
  timezone: "UTC-4",
  filter: {
    budgetMin: 50, budgetMid: 130,
    tripMin: 1500, tripMid: 3800,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 3,
  },
  description: {
    fr: "La République Dominicaine offre la diversité des Grandes Antilles dans un seul pays : Punta Cana et ses 23 km de plage de cocotiers, Samaná et ses baleines à bosse (janvier–mars), la Zona Colonial de Saint-Domingue classée UNESCO — première ville européenne des Amériques — et Las Terrenas, la Côte d'Azur des Caraïbes.", en: "The Dominican Republic brings together the diversity of the Greater Antilles in a single country: Punta Cana and its 23 km of palm-lined beaches, Samaná and its humpback whales (January–March), Santo Domingo's UNESCO-listed Colonial Zone — the first European city in the Americas — and Las Terrenas, the French Riviera of the Caribbean.", es: "La República Dominicana reúne toda la diversidad de las Antillas Mayores en un solo país: Punta Cana y sus 23 km de playa de cocoteros, Samaná y sus ballenas jorobadas (enero–marzo), la Zona Colonial de Santo Domingo declarada Patrimonio UNESCO — primera ciudad europea de las Américas — y Las Terrenas, la Costa Azul del Caribe.", de: "Die Dominikanische Republik bietet die Vielfalt der Großen Antillen in einem einzigen Land: Punta Cana und seinen 23 km langen Kokosnussstrand, Samaná und seine Buckelwale (Januar–März), die zum UNESCO-Weltkulturerbe gehörende Zona Colonial von Santo Domingo – die erste europäische Stadt in Amerika – und Las Terrenas, die Côte d'Azur der Karibik.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Avril", en: "December – April", es: "Diciembre – Abril", de: "Dezember – April" },
      label: { fr: "Haute saison", en: "High season", es: "Temporada alta", de: "Hochsaison" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : plages parfaites, mer calme, pas de cyclones, baleines à Samaná (jan–mar). Températures idéales 26–28°C.", en: "Best time to go: perfect beaches, calm seas, no hurricanes, and whales in Samaná (Jan–Mar). Ideal temperatures of 26–28°C.", es: "Mejor época: playas perfectas, mar en calma, sin ciclones, ballenas en Samaná (ene–mar). Temperaturas ideales de 26–28°C.", de: "Beste Zeit: perfekte Strände, ruhiges Meer, keine Wirbelstürme, Wale in Samaná (Januar–März). Ideale Temperaturen 26–28°C.",
      },
      icon: "🐋",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Été chaud", en: "Hot summer", es: "Verano caluroso", de: "heißer Sommer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur (30–33°C), humidité élevée et saison des cyclones. Réservé aux budgets serrés et amateurs de soleil intense.", en: "Hot weather (30–33°C), high humidity and hurricane season. Best suited to tight budgets and travellers who love intense sunshine.", es: "Calor (30–33°C), humedad elevada y temporada de ciclones. Reservado a presupuestos ajustados y amantes del sol intenso.", de: "Hitze (30–33 °C), hohe Luftfeuchtigkeit und Zyklonsaison. Reserviert für knappe Budgets und Liebhaber intensiver Sonne.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "santo_domingo",
      name: "Saint-Domingue",
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      data: [
        { month: "Jan", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 70,  icon: "⛅" },
      ],
    },
    {
      id: "punta_cana",
      name: "Punta Cana",
      region: { fr: "Est", en: "East", es: "Este", de: "Ost " },
      data: [
        { month: "Jan", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 45,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 70,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Punta Cana & plages Est", en: "Punta Cana & East Coast beaches", es: "Punta Cana y playas del Este", de: "Punta Cana und östliche Strände" },
      region: { fr: "Est", en: "East", es: "Este", de: "Ost " },
      description: {
        fr: "Punta Cana est le symbole caribéen du all-inclusive : 23 km de plage de cocotiers au sable blanc, eau turquoise à 28°C toute l'année et une offre hôtelière parmi les plus grandes au monde. L'Isla Saona voisine est une excursion classique incontournable.", en: "Punta Cana is the Caribbean symbol of the all-inclusive holiday: 23 km of palm-lined white-sand beaches, turquoise water at 28°C year-round, and one of the largest resort offerings in the world. Nearby Saona Island is a classic must-do excursion.", es: "Punta Cana es el símbolo caribeño del todo incluido: 23 km de playa de cocoteros con arena blanca, agua turquesa a 28°C todo el año y una de las mayores ofertas hoteleras del mundo. La cercana Isla Saona es una excursión clásica imprescindible.", de: "Punta Cana ist das karibische Symbol für All-Inclusive: 23 km weißer Kokosnussstrand, türkisfarbenes Wasser bei 28 °C das ganze Jahr über und eines der größten Hotelangebote der Welt. Die benachbarte Isla Saona ist ein klassisches Muss für einen Ausflug.",
      },
      wikipedia: "Punta_Cana",
      tags: ["Plage", "Luxe", "Nature"],
      mustSee: [
        { name: { fr: "Plage Bávaro (23 km) — cocotiers & sable blanc", en: "Bávaro Beach (23 km) — palm trees & white sand", es: "Playa Bávaro (23 km) — cocoteros y arena blanca", de: "Bávaro Beach (23 km) – Kokospalmen und weißer Sand" }, wikipedia: "File:Bavaro - 23 octobre 2011.JPG" },
        { name: { fr: "Isla Saona — plage déserte en catamaran", en: "Saona Island — deserted beach by catamaran", es: "Isla Saona — playa desierta en catamarán", de: "Isla Saona – einsamer Strand mit dem Katamaran" }, wikipedia: "Saona_Island" },
        { name: { fr: "Isla Catalina — snorkel & barracudas", en: "Catalina Island — snorkelling & barracudas", es: "Isla Catalina — esnórquel y barracudas", de: "Catalina Island – Schnorcheln und Barrakudas" }, wikipedia: "File:Isla Catalina, Caribbean.jpg" },
        { name: { fr: "Hoyo Azul — lagon bleu dans la jungle", en: "Hoyo Azul — blue lagoon in the jungle", es: "Hoyo Azul — laguna azul en la jungla", de: "Hoyo Azul – blaue Lagune im Dschungel" }, wikipedia: "Punta_Cana" },
      ],
    },
    {
      id: 2,
      name: { fr: "Saint-Domingue — Zona Colonial", en: "Santo Domingo — Colonial Zone", es: "Santo Domingo — Zona Colonial", de: "Santo Domingo – Zona Colonial" },
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      description: {
        fr: "La Zona Colonial de Saint-Domingue, classée UNESCO, est la première ville coloniale européenne fondée dans les Amériques (1498). La Cathédrale Primatiale (la plus ancienne des Amériques), le Palais de Diego Colomb et la Calle el Conde composent un musée vivant de l'histoire hispanique.", en: "Santo Domingo's UNESCO-listed Colonial Zone is the first European colonial city founded in the Americas (1498). The Primatial Cathedral — the oldest in the Americas — Diego Columbus's palace and Calle El Conde together form a living museum of Hispanic history.", es: "La Zona Colonial de Santo Domingo, declarada Patrimonio UNESCO, es la primera ciudad colonial europea fundada en las Américas (1498). La Catedral Primada (la más antigua de las Américas), el Palacio de Diego Colón y la Calle El Conde forman un museo vivo de la historia hispánica.", de: "Die zum UNESCO-Weltkulturerbe gehörende Zona Colonial von Santo Domingo ist die erste europäische Kolonialstadt, die 1498 auf dem amerikanischen Kontinent gegründet wurde. Die Primatialkathedrale (die älteste in Amerika), der Palast von Diego Columbus und die Calle el Conde bilden ein lebendiges Museum der hispanischen Geschichte.",
      },
      wikipedia: "Santo_Domingo",
      tags: ["UNESCO", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Zona Colonial — Calle el Conde (piétonne)", en: "Colonial Zone — Calle El Conde (pedestrian street)", es: "Zona Colonial — Calle El Conde (peatonal)", de: "Zona Colonial – Calle el Conde (Fußgängerzone)" }, wikipedia: "File:Aerial view Ciudad Colonial Santo Domingo 09 2019 0067.jpg" },
        { name: { fr: "Alcázar de Colón (palais de Diego Colomb)", en: "Alcázar de Colón (Diego Columbus's palace)", es: "Alcázar de Colón (palacio de Diego Colón)", de: "Alcázar de Colón (Diego-Kolumbus-Palast)" }, wikipedia: "Alcázar_de_Colón" },
        { name: { fr: "Cathédrale primatiale (la plus ancienne des Amériques)", en: "Primatial Cathedral (the oldest in the Americas)", es: "Catedral Primada (la más antigua de las Américas)", de: "Primatialkathedrale (die älteste in Amerika)" }, wikipedia: "File:Santo Domingo de la Calzada, catedral-PM 32754.jpg" },
        { name: { fr: "Fortaleza Ozama — fort colonial face à la mer", en: "Fortaleza Ozama — seafront colonial fort", es: "Fortaleza Ozama — fuerte colonial frente al mar", de: "Fortaleza Ozama – Kolonialfestung mit Blick auf das Meer" }, wikipedia: "File:Santo Domingo - Fortaleza Ozama 0960.jpg" },
      ],
    },
    {
      id: 3,
      name: "Samaná",
      region: { fr: "Nord-Est", en: "Northeast", es: "Noreste", de: "Nordost" },
      description: {
        fr: "La Péninsule de Samaná est l'une des plus belles destinations de la Caraïbe : les baleines à bosse (janvier–mars) viennent s'y reproduire en grand nombre, la cascade El Limón se visite à cheval dans la jungle tropicale, et Cayo Levantado (l'île aux bacardis) est un paradis blanc.", en: "The Samaná Peninsula is one of the Caribbean's most beautiful destinations: humpback whales (January–March) come here in large numbers to breed, El Limón waterfall can be reached on horseback through tropical jungle, and Cayo Levantado (Bacardi Island) is a white-sand paradise.", es: "La península de Samaná es uno de los destinos más bellos del Caribe: las ballenas jorobadas (enero–marzo) llegan aquí en gran número para reproducirse, la cascada El Limón se visita a caballo por la jungla tropical, y Cayo Levantado (la isla Bacardí) es un paraíso blanco.", de: "Die Samaná-Halbinsel ist eines der schönsten Reiseziele in der Karibik: Buckelwale (Januar–März) brüten dort in großer Zahl, der Wasserfall El Limón kann im tropischen Dschungel zu Pferd besichtigt werden und Cayo Levantado (die Insel der Bacardis) ist ein weißes Paradies.",
      },
      wikipedia: "File:Samaná Pueblo Principe 2.jpg",
      tags: ["Safari", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Baleines à bosse (jan–mars) — observation en bateau", en: "Humpback whales (Jan–Mar) — boat watching", es: "Ballenas jorobadas (ene–mar) — avistamiento en barco", de: "Buckelwale (Januar–März) – Beobachtung per Boot" }, wikipedia: "Humpback_whale" },
        { name: { fr: "Cascada El Limón — à cheval dans la jungle", en: "El Limón waterfall — horseback ride through the jungle", es: "Cascada El Limón — a caballo por la jungla", de: "Cascada El Limón – Reiten im Dschungel" }, wikipedia: "File:El Limon.JPG" },
        { name: { fr: "Cayo Levantado — plage déserte intime", en: "Cayo Levantado — intimate deserted beach", es: "Cayo Levantado — playa desierta e íntima", de: "Cayo Levantado – intimer, einsamer Strand" }, wikipedia: "Cayo_Levantado" },
        { name: { fr: "Los Haitises — mangroves et grottes taïnos", en: "Los Haitises — mangroves and Taíno caves", es: "Los Haitises — manglares y cuevas taínas", de: "Los Haitises – Mangroven und Taino-Höhlen" }, wikipedia: "Los_Haitises_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Las Terrenas",
      region: { fr: "Nord-Est (Samaná)", en: "Northeast (Samaná)", es: "Noreste (Samaná)", de: "Nordosten (Samaná)" },
      description: {
        fr: "Las Terrenas est surnommée la « Saint-Tropez des Caraïbes » : une communauté franco-italo-dominicaine cosmopolite, des plages sauvages (Playa Bonita), une gastronomie étonnante et une atmosphère décontractée sans les excès du all-inclusive. Idéal pour les voyageurs indépendants.", en: "Las Terrenas is nicknamed the 'Saint-Tropez of the Caribbean': a cosmopolitan French-Italian-Dominican community, wild beaches such as Playa Bonita, surprisingly good food and a laid-back atmosphere without the excesses of all-inclusive resorts. Ideal for independent travellers.", es: "Las Terrenas es apodada la «Saint-Tropez del Caribe»: una comunidad cosmopolita franco-ítalo-dominicana, playas salvajes (Playa Bonita), una gastronomía sorprendente y un ambiente relajado sin los excesos del todo incluido. Ideal para viajeros independientes.", de: "Las Terrenas trägt den Spitznamen „Saint-Tropez der Karibik“: eine kosmopolitische französisch-italienisch-dominikanische Gemeinde, wilde Strände (Playa Bonita), erstaunliche Gastronomie und eine entspannte Atmosphäre ohne die Exzesse von All-Inclusive. Ideal für unabhängige Reisende.",
      },
      wikipedia: "File:Las-Terrenas.jpg",
      tags: ["Plage", "Gastronomie", "Ville"],
      mustSee: [
        { name: { fr: "Playa Bonita — la plus belle plage de Las Terrenas", en: "Playa Bonita — Las Terrenas' most beautiful beach", es: "Playa Bonita — la playa más bonita de Las Terrenas", de: "Playa Bonita – der schönste Strand in Las Terrenas" }, wikipedia: "File:Las Terrenas beach 7.JPG" },
        { name: { fr: "Plage aux Champignons — formations coralliennes", en: "Mushroom Beach — coral formations", es: "Playa de los Hongos — formaciones coralinas", de: "Mushroom Beach – Korallenformationen" }, wikipedia: "File:Photo LFILT.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La République Dominicaine est accessible — le all-inclusive peut paraître cher mais inclut tout. En dehors des resorts, les prix sont très raisonnables. Saint-Domingue et Las Terrenas permettent une vie locale authentique à petit prix.", en: "The Dominican Republic is affordable — all-inclusive stays can look expensive, but they cover everything. Outside the resorts, prices are very reasonable. Santo Domingo and Las Terrenas offer an authentic local lifestyle on a modest budget.", es: "La República Dominicana es accesible — el todo incluido puede parecer caro, pero lo cubre todo. Fuera de los resorts, los precios son muy razonables. Santo Domingo y Las Terrenas permiten una vida local auténtica a bajo coste.", de: "Die Dominikanische Republik ist zugänglich – All-Inclusive mag teuer erscheinen, beinhaltet aber alles. Außerhalb der Resorts sind die Preise sehr vernünftig. Santo Domingo und Las Terrenas bieten authentisches lokales Leben zu einem günstigen Preis.",
    },
    currency: "DOP",
    exchangeRate: "1€ ≈ 65 DOP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse Las Terrenas", en: "Las Terrenas guesthouse", es: "Guesthouse en Las Terrenas", de: "Gästehaus Las Terrenas" }, price: "30–60 €", detail: { fr: "Chambre avec clim", en: "Room with air conditioning", es: "Habitación con aire acondicionado", de: "Zimmer mit Klimaanlage" } },
          { label: { fr: "Hôtel 3★ (hors resort)", en: "3★ hotel (outside resorts)", es: "Hotel 3★ (fuera de resorts)", de: "3★ Hotel (ohne Resort)" }, price: "50–90 €", detail: { fr: "Bon confort, petit-déjeuner", en: "Good comfort, breakfast included", es: "Buen confort, desayuno incluido", de: "Guter Komfort, Frühstück" } },
          { label: { fr: "Resort all-inclusive Punta Cana", en: "Punta Cana all-inclusive resort", es: "Resort todo incluido en Punta Cana", de: "All-Inclusive-Resort Punta Cana" }, price: "120–300 €", detail: { fr: "Tout inclus par personne", en: "Everything included per person", es: "Todo incluido por persona", de: "Alles inklusive pro Person" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Sancocho, tostones (cuisine locale)", en: "Sancocho, tostones (local cuisine)", es: "Sancocho, tostones (cocina local)", de: "Sancocho, Tostones (lokale Küche)" }, price: "3–6 €", detail: { fr: "Marché ou comedor local", en: "Market or local comedor", es: "Mercado o comedor local", de: "Lokaler Markt oder Comedor" } },
          { label: { fr: "Fruits de mer Las Terrenas", en: "Las Terrenas seafood", es: "Mariscos en Las Terrenas", de: "Meeresfrüchte Las Terrenas" }, price: "15–30 €", detail: { fr: "Langoustes, daurades, crevettes", en: "Lobster, sea bream, shrimp", es: "Langostas, doradas, camarones", de: "Hummer, Dorade, Garnelen" } },
          { label: { fr: "Restaurant gastronomique Saint-Domingue", en: "Santo Domingo fine-dining restaurant", es: "Restaurante gastronómico en Santo Domingo", de: "Gourmetrestaurant Santo Domingo" }, price: "20–40 €", detail: { fr: "Cuisine créative", en: "Creative cuisine", es: "Cocina creativa", de: "Kreative Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Guagua (bus collectif)", en: "Guagua (shared bus)", es: "Guagua (autobús colectivo)", de: "Guagua (Sammelbus)" }, price: "2–5 €", detail: { fr: "Trajet interurbain", en: "Intercity journey", es: "Trayecto interurbano", de: "Intercity-Reisen" } },
          { label: { fr: "Transfer privé aéroport–Samaná", en: "Private airport–Samaná transfer", es: "Traslado privado aeropuerto–Samaná", de: "Privater Flughafentransfer – Samana" }, price: "40–70 €", detail: { fr: "3h depuis Punta Cana", en: "3 hours from Punta Cana", es: "3h desde Punta Cana", de: "3 Stunden von Punta Cana entfernt" } },
          { label: { fr: "Vol intérieur (STI–SDQ)", en: "Domestic flight (STI–SDQ)", es: "Vuelo interno (STI–SDQ)", de: "Inlandsflug (STI–SDQ)" }, price: "50–100 €", detail: { fr: "Quand disponible", en: "When available", es: "Cuando está disponible", de: "Sofern verfügbar" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Excursion baleines Samaná", en: "Samaná whale excursion", es: "Excursión de ballenas en Samaná", de: "Walausflug Samana" }, price: "50–80 €", detail: { fr: "Janvier–mars, bateau 3h", en: "January–March, 3-hour boat trip", es: "Enero–marzo, barco de 3h", de: "Januar–März, Bootsfahrt 3 Stunden" } },
          { label: { fr: "Isla Saona (catamaran, journée)", en: "Saona Island (catamaran, full day)", es: "Isla Saona (catamarán, día completo)", de: "Isla Saona (Katamaran, Tag)" }, price: "60–90 €", detail: { fr: "Transport + repas inclus", en: "Transport + meal included", es: "Transporte + comida incluidos", de: "Transport + Mahlzeiten inklusive" } },
          { label: { fr: "Randonnée El Limón à cheval", en: "El Limón horseback trek", es: "Excursión a caballo a El Limón", de: "Ausritt zu Pferd durch El Limón" }, price: "30–50 €", detail: { fr: "3h, guide inclus", en: "3 hours, guide included", es: "3h, guía incluido", de: "3 Stunden, inklusive Führer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + guagua", en: "Guesthouse + local food + guagua", es: "Guesthouse + cocina local + guagua", de: "Gästehaus + lokale Küche + Guagua" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 3★ + restos + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "300 €+/j", desc: { fr: "Resort all-inclusive 5★ + circuit privé", en: "5★ all-inclusive resort + private itinerary", es: "Resort todo incluido 5★ + circuito privado", de: "5★ All-Inclusive-Resort + private Tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "Saint-Domingue (2j) → Las Terrenas & Samaná (4j) → Punta Cana (6j)", en: "Santo Domingo (2d) → Las Terrenas & Samaná (4d) → Punta Cana (6d)", es: "Santo Domingo (2d) → Las Terrenas y Samaná (4d) → Punta Cana (6d)", de: "Santo Domingo (2 Tage) → Las Terrenas und Samaná (4 Tage) → Punta Cana (6 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–République Dominicaine", en: "Return flight Paris–Dominican Republic", es: "Vuelo ida y vuelta Madrid–República Dominicana", de: "Hin- und Rückflug Paris–Dominikanische Republik" }, amount: "350–600 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "450–750 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–450 €" },
            { label: { fr: "Transports", en: "Transport", es: "Transporte", de: "Transport" }, amount: "200–300 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–RD", en: "Return flight Paris–DR", es: "Vuelo ida y vuelta Madrid–RD", de: "Hin- und Rückflug Paris–DR" }, amount: "450–750 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails", es: "Comida y cócteles", de: "Essen und Cocktails" }, amount: "600–900 €" },
            { label: { fr: "Excursions & baleines", en: "Excursions & whale watching", es: "Excursiones y ballenas", de: "Ausflüge & Wale" }, amount: "500–800 €" },
            { label: { fr: "Transports & imprévus", en: "Transport & contingency", es: "Transporte e imprevistos", de: "Transport und unvorhergesehene Ereignisse" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–RD (Business)", en: "Return flight Paris–DR (business)", es: "Vuelo ida y vuelta Madrid–RD (business)", de: "Hin- und Rückflug Paris–DR (Business)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Resort all-inclusive 5★ (12 nuits)", en: "5★ all-inclusive resort (12 nights)", es: "Resort todo incluido 5★ (12 noches)", de: "All-Inclusive-Resort 5★ (12 Nächte)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Excursions privées & spa", en: "Private excursions & spa", es: "Excursiones privadas y spa", de: "Private Ausflüge & Spa" }, amount: "800–1 500 €" },
            { label: { fr: "Gastronomie gastronomique", en: "Fine dining", es: "Alta gastronomía", de: "Gourmet-Gastronomie" }, amount: "500–800 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~9h direct (Air France, Corsair, Air Caraïbes, Level)", en: "~9h direct (Air France, Corsair, Air Caraïbes, Level)", es: "~9h directo (Air France, Corsair, Air Caraïbes, Level)", de: "ca. 9 Std. direkt (Air France, Corsair, Air Caraibes, Level)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Carte touristique (~10$) incluse dans la plupart des vols charters", en: "Tourist card (~$10) included in most charter flights", es: "Tarjeta turística (~10$) incluida en la mayoría de los vuelos chárter", de: "Bei den meisten Charterflügen ist eine Touristenkarte (ca. 10 $) inbegriffen" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Peso dominicain (1€ ≈ 65 DOP) — USD acceptés partout", en: "Dominican peso (1€ ≈ 65 DOP) — USD widely accepted", es: "Peso dominicano (1€ ≈ 65 DOP) — se aceptan USD en todas partes", de: "Dominikanischer Peso (1 € ≈ 65 DOP) – USD wird überall akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol (officiel) — français compris à Las Terrenas", en: "Spanish (official) — French is understood in Las Terrenas", es: "Español (oficial) — se entiende francés en Las Terrenas", de: "Spanisch (offiziell) – Französisch in Las Terrenas enthalten" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B – 110 V (comme USA)", en: "Type A/B – 110 V (same as the USA)", es: "Tipo A/B – 110 V (como en EE. UU.)", de: "Typ A/B – 110 V (wie USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Mobile network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture nationale (Claro, Altice)", en: "Good nationwide coverage (Claro, Altice)", es: "Buena cobertura nacional (Claro, Altice)", de: "Gute landesweite Abdeckung (Claro, Altice)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water required", es: "No potable — agua embotellada obligatoria", de: "Nicht trinkbar – Wasser in Flaschen erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas d'antipaludéen requis dans les zones touristiques standards", en: "No antimalarial medication required in standard tourist areas", es: "No se requiere antipalúdico en las zonas turísticas habituales", de: "In normalen Touristengebieten sind keine Malariamittel erforderlich" } },
  ],
};
