export const UZBEKISTAN = {
  code: "UZB",
  numericId: 860,
  name: { fr: "Ouzbékistan", en: "Uzbekistan", es: "Uzbekistán", de: "Usbekistan" },
  emoji: "🇺🇿",
  capital: { fr: "Tachkent", en: "Tashkent", es: "Taskent", de: "Taschkent" },
  language: { fr: "Ouzbek", en: "Uzbek", es: "Uzbeko", de: "Usbekisch" },
  currency: { fr: "Som ouzbek (UZS)", en: "Uzbekistani Som (UZS)", es: "Som uzbeko (UZS)", de: "Usbekischer Som (UZS)" },
  timezone: "UTC+5",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 1200, tripMid: 2200,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 2,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 0,
  },
  description: {
    fr: "L'Ouzbékistan est le cœur de la Route de la Soie. Samarcande, Boukhara et Khiva sont des villes-musées à ciel ouvert, avec leurs mosaïques de faïence turquoise, leurs minarets et leurs médersas du XIVe siècle. Une destination qui touche à l'absolu.", en: "Uzbekistan is the heart of the Silk Road. Samarkand, Bukhara and Khiva are open-air museum cities, with their turquoise tile mosaics, minarets and 14th-century madrasas. A destination that borders on the sublime.", es: "Uzbekistán es el corazón de la Ruta de la Seda. Samarcanda, Bujará y Jiva son ciudades-museo al aire libre, con sus mosaicos de azulejos turquesa, sus minaretes y sus madrasas del siglo XIV. Un destino que roza lo absoluto.", de: "Usbekistan ist das Herz der Seidenstraße. Samarkand, Buchara und Chiwa sind Freilichtmuseumsstädte mit ihren türkisfarbenen Steingutmosaiken, Minaretten und Medresen aus dem 14. Jahrhundert. Ein Reiseziel, das das Absolute berührt.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June", es: "Abril – junio", de: "April – Juni" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera", de: "Frühling" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (17–25 °C), jardins en fleurs, idéal pour visiter Samarcande, Boukhara, Khiva.", en: "Ideal temperatures (17–25 °C), gardens in bloom, ideal for visiting Samarkand, Bukhara, Khiva.", es: "Temperaturas ideales (17–25 °C), jardines en flor, ideal para visitar Samarcanda, Bujará y Jiva.", de: "Ideale Temperaturen (17–25 °C), blühende Gärten, ideal für Besuche in Samarkand, Buchara und Chiwa.",
      },
      icon: "🌺",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October", es: "Septiembre – octubre", de: "September – Oktober" },
      label: { fr: "Automne doré", en: "Golden autumn", es: "Otoño dorado", de: "Goldener Herbst" },
      color: "#fb923c",
      description: {
        fr: "Chaleur retombée, lumière magnifique sur les mosaïques, saison des abricots et des raisins secs.", en: "Heat has eased, beautiful light on the mosaics, apricot and raisin season.", es: "El calor ha bajado, luz magnífica sobre los mosaicos, temporada de albaricoques y pasas.", de: "Die Hitze ließ nach, herrliches Licht auf den Mosaiken, Aprikosen- und Rosinenzeit.",
      },
      icon: "🏛️",
    },
  ],

  weatherCities: [
    {
      id: "samarkand",
      name: { fr: "Samarcande", en: "Samarkand", es: "Samarcanda", de: "Samarkand" },
      region: { fr: "Samarcande", en: "Samarkand", es: "Samarcanda", de: "Samarkand" },
      data: [
        { month: "Jan", temp: 2,  rain: 30,  icon: "❄️" },
        { month: "Fév", temp: 4,  rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 10, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 17, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Jun", temp: 28, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 30, rain: 2,   icon: "☀️" },
        { month: "Aoû", temp: 29, rain: 2,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 17, rain: 15,  icon: "☀️" },
        { month: "Nov", temp: 10, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 4,  rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "tashkent",
      name: { fr: "Tachkent", en: "Tashkent", es: "Taskent", de: "Taschkent" },
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      data: [
        { month: "Jan", temp: 1,  rain: 50,  icon: "❄️" },
        { month: "Fév", temp: 3,  rain: 45,  icon: "⛅" },
        { month: "Mar", temp: 9,  rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 27, rain: 8,   icon: "☀️" },
        { month: "Jul", temp: 29, rain: 3,   icon: "☀️" },
        { month: "Aoû", temp: 28, rain: 2,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 16, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 9,  rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 3,  rain: 55,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Samarcande", en: "Samarkand", es: "Samarcanda", de: "Samarkand" },
      region: { fr: "Samarcande", en: "Samarkand", es: "Samarcanda", de: "Samarkand" },
      description: {
        fr: "Joyau de la Route de la Soie, avec le Registan (trois médersas monumentales), le mausolée de Tamerlan (Gour-é-Amir) et les observatoires de l'astronome Oulough Beg.", en: "A jewel of the Silk Road, with the Registan (three monumental madrasas), Tamerlane's mausoleum (Gur-e-Amir) and the observatories of astronomer Ulugh Beg.", es: "Joya de la Ruta de la Seda, con el Registán (tres madrasas monumentales), el mausoleo de Tamerlán (Gur-e-Amir) y los observatorios del astrónomo Ulugh Beg.", de: "Juwel der Seidenstraße mit dem Registan (drei monumentale Medresen), dem Mausoleum von Tamerlane (Gour-é-Amir) und den Observatorien des Astronomen Oulough Beg.",
      },
      wikipedia: "Samarkand",
      tags: ["Histoire", "Architecture", "UNESCO", "Désert"],
      mustSee: [
        { name: { fr: "Registan — 3 médersas monumentales", en: "Registan — 3 monumental madrasas", es: "Registán — 3 madrasas monumentales", de: "Registan – 3 monumentale Medresen" }, wikipedia: "Registan" },
        { name: { fr: "Gour-é-Amir — tombeau de Tamerlan", en: "Gur-e-Amir — Tamerlane's tomb", es: "Gur-e-Amir — tumba de Tamerlán", de: "Gour-é-Amir – Grab von Tamerlane" }, wikipedia: "Gur-e-Amir" },
        { name: { fr: "Shah-i-Zinda — allée des mausolées", en: "Shah-i-Zinda — avenue of mausoleums", es: "Shah-i-Zinda — avenida de los mausoleos", de: "Shah-i-Zinda – Allee der Mausoleen" }, wikipedia: "Shah-i-Zinda" },
        { name: { fr: "Bibi-Khanym — grande mosquée", en: "Bibi-Khanym — great mosque", es: "Bibi-Khanym — gran mezquita", de: "Bibi-Khanym – tolle Moschee" }, wikipedia: "Bibi-Khanym_Mosque" },
      ],
    },
    {
      id: 2,
      name: { fr: "Boukhara", en: "Bukhara", es: "Bujará", de: "Buchara" },
      region: { fr: "Boukhara", en: "Bukhara", es: "Bujará", de: "Buchara" },
      description: {
        fr: "Boukhara la Sainte conserve son centre historique médiéval presque intact, avec ses 140 monuments classés, sa forteresse Ark et son marché aux dômes couverts.", en: "Holy Bukhara preserves its medieval historic centre almost intact, with its 140 listed monuments, the Ark fortress and its domed covered market.", es: "Bujará la Santa conserva su centro histórico medieval casi intacto, con sus 140 monumentos catalogados, su fortaleza Ark y su mercado de cúpulas cubiertas.", de: "Buchara, der Heilige, hat sein mittelalterliches historisches Zentrum mit seinen 140 denkmalgeschützten Denkmälern, seiner Ark-Festung und seinem Markt mit überdachten Kuppeln fast vollständig erhalten.",
      },
      wikipedia: "Bukhara",
      tags: ["Histoire", "Architecture", "UNESCO"],
      mustSee: [
        { name: { fr: "Forteresse Ark (IVe s.)", en: "Ark Fortress (4th century)", es: "Fortaleza Ark (siglo IV)", de: "Ark-Festung (4. Jahrhundert)" }, wikipedia: "Ark_of_Bukhara" },
        { name: { fr: "Minaret Kalon et mosquée", en: "Kalon Minaret and mosque", es: "Minarete Kalón y mezquita", de: "Kalon-Minarett und Moschee" }, wikipedia: "File:Le_minaret_et_la_mosquée_Kalon_(Boukhara,_Ouzbékistan)_(5658826884).jpg" },
        { name: { fr: "Bazar Toqi-Zargaron", en: "Toqi-Zargaron Bazaar", es: "Bazar Toqi-Zargaron", de: "Toqi-Zargaron-Basar" }, wikipedia: "Bukhara" },
        { name: { fr: "Mausolée des Samanides", en: "Samanid Mausoleum", es: "Mausoleo samánida", de: "Samaniden-Mausoleum" }, wikipedia: "File:Samanid_mausoleum_bukhara.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Khiva", en: "Khiva", es: "Jiva", de: "Chiwa" },
      region: { fr: "Khorezm", en: "Khorezm", es: "Corasmia", de: "Khorezm" },
      description: {
        fr: "Khiva est la ville la mieux préservée de la Route de la Soie : son centre historique Itchan Kala est un musée à ciel ouvert, avec ses ruelles de terre et ses tours de faïence.", en: "Khiva is the best-preserved city on the Silk Road: its historic centre, Itchan Kala, is an open-air museum, with its earthen lanes and tiled towers.", es: "Jiva es la ciudad mejor conservada de la Ruta de la Seda: su centro histórico, Itchan Kala, es un museo al aire libre, con sus callejuelas de tierra y sus torres de azulejos.", de: "Chiwa ist die am besten erhaltene Stadt an der Seidenstraße: Ihr historisches Zentrum Itchan Kala ist ein Freilichtmuseum mit seinen Lehmstraßen und Steinguttürmen.",
      },
      wikipedia: "Khiva",
      tags: ["Histoire", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Itchan Kala (vieille ville UNESCO)", en: "Itchan Kala (UNESCO old town)", es: "Itchan Kala (casco antiguo UNESCO)", de: "Itchan Kala (UNESCO-Altstadt)" }, wikipedia: "Itchan_Kala" },
        { name: { fr: "Minaret Islam-Khodja", en: "Islam Khodja Minaret", es: "Minarete Islam Khodja", de: "Islam-Khodscha-Minarett" }, wikipedia: "File:Emin Khoja Minaret.jpg" },
        { name: { fr: "Mausolée Pakhlavan Mahmud", en: "Pakhlavan Mahmud Mausoleum", es: "Mausoleo de Pahlavan Mahmud", de: "Pakhlavan-Mahmud-Mausoleum" }, wikipedia: "File:Itchan Kala.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Tachkent", en: "Tashkent", es: "Taskent", de: "Taschkent" },
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      description: {
        fr: "Capitale cosmopolite rebâtie après le tremblement de terre de 1966, avec ses monuments soviétiques imposants, ses bazars colorés et sa montée en puissance gastronomique.", en: "A cosmopolitan capital rebuilt after the 1966 earthquake, with its imposing Soviet monuments, colourful bazaars and rising culinary scene.", es: "Capital cosmopolita reconstruida tras el terremoto de 1966, con sus imponentes monumentos soviéticos, sus coloridos bazares y su creciente escena gastronómica.", de: "Nach dem Erdbeben von 1966 wiederaufgebaute kosmopolitische Hauptstadt mit imposanten sowjetischen Denkmälern, farbenfrohen Basaren und einem wachsenden gastronomischen Angebot.",
      },
      wikipedia: "Tashkent",
      tags: ["Ville", "Culture", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Bazar Tchorsu", en: "Chorsu Bazaar", es: "Bazar Chorsu", de: "Chorsu-Basar" }, wikipedia: "Chorsu_Bazaar" },
        { name: { fr: "Musée d'histoire de l'Ouzbékistan", en: "State Museum of History of Uzbekistan", es: "Museo estatal de historia de Uzbekistán", de: "Geschichtsmuseum Usbekistans" }, wikipedia: "State_Museum_of_History_of_Uzbekistan" },
        { name: { fr: "Complexe Khast Imam", en: "Khast Imam Complex", es: "Complejo Khast Imam", de: "Khast-Imam-Komplex" }, wikipedia: "File:Hazrat Imam 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Ouzbékistan est très abordable. La nourriture, l'hébergement et les transports sont peu coûteux. Les entrées des monuments sont modiques.", en: "Uzbekistan is very affordable. Food, accommodation and transport are inexpensive. Monument entry fees are modest.", es: "Uzbekistán es muy asequible. La comida, el alojamiento y el transporte son baratos. Las entradas a los monumentos son módicas.", de: "Usbekistan ist sehr erschwinglich. Verpflegung, Unterkunft und Transport sind günstig. Die Eingänge zu den Denkmälern sind bescheiden.",
    },
    currency: "UZS",
    exchangeRate: "1€ ≈ 13 500 UZS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse traditionnelle", en: "Traditional guesthouse", es: "Guesthouse tradicional", de: "Traditionelles Gästehaus" }, price: "15–30 €", detail: { fr: "Souvent avec breakfast inclus", en: "Often with breakfast included", es: "A menudo con desayuno incluido", de: "Oft inklusive Frühstück" } },
          { label: { fr: "Hôtel 3★", en: "3★ hotel", es: "Hotel 3★", de: "Hotel 3★" }, price: "35–60 €", detail: { fr: "Confort correct", en: "Decent comfort", es: "Confort correcto", de: "Richtiger Komfort" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel", es: "Hotel boutique 4★", de: "Boutique-Hotel 4★" }, price: "70–120 €", detail: { fr: "Meilleure option Samarcande", en: "Best option in Samarkand", es: "Mejor opción en Samarcanda", de: "Beste Option Samarkand" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Plov (plat national)", en: "Plov (national dish)", es: "Plov (plato nacional)", de: "Plov (Nationalgericht)" }, price: "2–4 €", detail: { fr: "Riz au mouton, incontournable", en: "Rice with mutton, a must-try", es: "Arroz con cordero, imprescindible", de: "Hammelreis, ein Muss" } },
          { label: { fr: "Restaurant local (samsa, lagman)", en: "Local restaurant (samsa, lagman)", es: "Restaurante local (samsa, lagman)", de: "Lokales Restaurant (Samsa, Lagman)" }, price: "4–8 €", detail: { fr: "Excellent et copieux", en: "Excellent and hearty", es: "Excelente y abundante", de: "Ausgezeichnet und reichlich" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant", es: "Restaurante turístico", de: "Touristenrestaurant" }, price: "12–25 €", detail: { fr: "Terrasses des médersas", en: "Madrasa terrace restaurants", es: "Terrazas de las madrasas", de: "Madrasa-Terrassen" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Train rapide Afrosiyob", en: "Afrosiyob high-speed train", es: "Tren de alta velocidad Afrosiyob", de: "Afrosiyob-Schnellzug" }, price: "8–15 €", detail: { fr: "Tachkent–Samarcande en 2h", en: "Tashkent–Samarkand in 2h", es: "Taskent–Samarcanda en 2h", de: "Taschkent – Samarkand in 2 Stunden" } },
          { label: { fr: "Minibus / marshrutka", en: "Minibus / marshrutka", es: "Minibús / marshrutka", de: "Kleinbus / Marshrutka" }, price: "1–3 €", detail: { fr: "Entre villes principales", en: "Between main cities", es: "Entre las principales ciudades", de: "Zwischen den wichtigsten Städten" } },
          { label: { fr: "Taxi local", en: "Local taxi", es: "Taxi local", de: "Lokales Taxi" }, price: "2–5 €", detail: { fr: "Négocier le prix avant", en: "Negotiate the price beforehand", es: "Negociar el precio antes", de: "Verhandeln Sie den Preis vorher" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée Registan", en: "Registan entry", es: "Entrada al Registán", de: "Registan-Eingang" }, price: "5–8 €", detail: { fr: "Son & lumière en soirée ~10 €", en: "Evening sound & light show ~10 €", es: "Espectáculo de luz y sonido nocturno ~10 €", de: "Abendliche Ton-und-Licht-Show ca. 10 €" } },
          { label: { fr: "Visite guidée Boukhara (1j)", en: "Guided tour of Bukhara (1 day)", es: "Visita guiada a Bujará (1 día)", de: "Geführte Tour Buchara (1 Tag)" }, price: "20–40 €", detail: { fr: "Guide anglophone", en: "English-speaking guide", es: "Guía de habla inglesa", de: "Englischsprachiger Reiseführer" } },
          { label: { fr: "Stage poterie / artisanat", en: "Pottery / craft workshop", es: "Taller de cerámica / artesanía", de: "Töpfer-/Handwerkskurs" }, price: "15–30 €", detail: { fr: "Ateliers traditionnels", en: "Traditional workshops", es: "Talleres tradicionales", de: "Traditionelle Werkstätten" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–45 €/j", desc: { fr: "Guesthouse + restaurants locaux + train", en: "Guesthouse + local restaurants + train", es: "Guesthouse + restaurantes locales + tren", de: "Gästehaus + lokale Restaurants + Zug" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "65–100 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + guides", en: "3★ hotel + good restaurants + guides", es: "Hotel 3★ + buenos restaurantes + guías", de: "3★ Hotel + gute Restaurants + Reiseführer" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "150 €+/j", desc: { fr: "Hôtel boutique + circuit organisé + gastronomie", en: "Boutique hotel + organised tour + fine dining", es: "Hotel boutique + circuito organizado + gastronomía", de: "Boutique-Hotel + organisierte Tour + Gastronomie" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Tachkent (2j) → Samarcande (3j) → Chakhrisabz (1j) → Boukhara (3j) → Khiva (3j) → Tachkent (2j)", en: "Tashkent (2d) → Samarkand (3d) → Shakhrisabz (1d) → Bukhara (3d) → Khiva (3d) → Tashkent (2d)", es: "Taskent (2d) → Samarcanda (3d) → Shajrisabz (1d) → Bujará (3d) → Jiva (3d) → Taskent (2d)", de: "Taschkent (2 Tage) → Samarkand (3 Tage) → Shakhrisabz (1 Tage) → Buchara (3 Tage) → Chiwa (3 Tage) → Taschkent (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tachkent", en: "Return flight Paris–Tashkent", es: "Vuelo ida/vuelta Madrid–Taskent", de: "Hin- und Rückflug Paris–Taschkent" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "200–400 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–300 €" },
            { label: { fr: "Trains & transports", en: "Trains & transport", es: "Trenes y transportes", de: "Züge und Transport" }, amount: "100–150 €" },
            { label: { fr: "Entrées & activités", en: "Entry fees & activities", es: "Entradas y actividades", de: "Eintritte und Aktivitäten" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tachkent", en: "Return flight Paris–Tashkent", es: "Vuelo ida/vuelta Madrid–Taskent", de: "Hin- und Rückflug Paris–Taschkent" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Transports & guides", en: "Transport & guides", es: "Transporte y guías", de: "Transport und Reiseführer" }, amount: "300–500 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tachkent (Business)", en: "Return flight Paris–Tashkent (Business)", es: "Vuelo ida/vuelta Madrid–Taskent (Business)", de: "Hin- und Rückflug Paris–Taschkent (Business)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hébergement boutique (14 nuits)", en: "Boutique accommodation (14 nights)", es: "Alojamiento boutique (14 noches)", de: "Boutique-Unterkunft (14 Nächte)" }, amount: "1 400–2 200 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias", de: "Gastronomie & Erlebnisse" }, amount: "700–1 000 €" },
            { label: { fr: "Circuit privé", en: "Private tour", es: "Circuito privado", de: "Private Tour" }, amount: "600–1 000 €" },
            { label: { fr: "Artisanat & imprévus", en: "Crafts & contingency", es: "Artesanía e imprevistos", de: "Kunsthandwerk und unvorhergesehene Ereignisse" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~6h (Uzbekistan Airways via Tachkent)", en: "~6h (Uzbekistan Airways via Tashkent)", es: "~7h (Uzbekistan Airways vía Taskent)", de: "ca. 6 Std. (Uzbekistan Airways über Taschkent)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (30 jours)", en: "No visa required for French citizens (30 days)", es: "Sin visado para los españoles (30 días)", de: "Visumfrei für Franzosen (30 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Som (1€ ≈ 13 500 UZS) — espèces préférées", en: "Som (1€ ≈ 13,500 UZS) — cash preferred", es: "Som (1€ ≈ 13 500 UZS) — se prefiere efectivo", de: "Som (1€ ≈ 13.500 UZS) – bevorzugtes Bargeld" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Ouzbek (russe compris, peu d'anglais)", en: "Uzbek (Russian understood, little English)", es: "Uzbeko (se entiende el ruso, poco inglés)", de: "Usbekisch (Russisch verstanden, wenig Englisch)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V", es: "Tipo C/F – 220 V", de: "Typ C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Couverture correcte, SIM locale ~3€", en: "Decent coverage, local SIM ~3€", es: "Cobertura correcta, SIM local ~3€", de: "Gute Netzabdeckung, lokale SIM-Karte ca. 3€" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water advised", es: "No potable — se recomienda agua embotellada", de: "Kein Trinkwasser – Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Hépatite A recommandée, fièvre typhoïde possible", en: "Hepatitis A recommended, typhoid possible", es: "Se recomienda hepatitis A, posible fiebre tifoidea", de: "Hepatitis A empfohlen, Typhus möglich" } },
  ],
};
