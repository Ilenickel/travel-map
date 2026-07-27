export const TOGO = {
  code: "TGO",
  numericId: 768,
  name: { fr: "Togo", en: "Togo", es: "Togo", de: "Togo" },
  emoji: "🇹🇬",
  capital: { fr: "Lomé", en: "Lomé", es: "Lomé", de: "Lomé" },
  language: { fr: "Français, Ewe, Kabiyé", en: "French, Ewe, Kabiye", es: "Francés, ewe, kabiyé", de: "Französisch, Ewe, Kabiyé" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA Franc (XOF)", es: "Franco CFA (XOF)", de: "CFA-Franc (XOF)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 30, budgetMid: 75,
    tripMin: 1100, tripMid: 2200,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 1,
    ski: 0,
    ville: 1,
    plage: 1,
    plongee: 1,
  },
  description: {
    fr: "Le Togo est un corridor étroit entre Ghana et Bénin : Lomé et son Grand Marché des Fétiches (vaudou en plein air), les villages perchés des Tamberma sur la route des châteaux de banco (UNESCO), les cascades de Kpalimé dans la forêt tropicale, et les plages de la côte atlantique. Un pays ignoré qui récompense les curieux.", en: "Togo is a narrow corridor between Ghana and Benin: Lomé and its Grand Marché des Fétiches (an open-air voodoo market), the perched Tamberma villages along the mud-castle route (UNESCO), Kpalimé's waterfalls in the tropical forest, and the beaches of the Atlantic coast. An overlooked country that rewards the curious.", es: "Togo es un corredor estrecho entre Ghana y Benín: Lomé y su Gran Mercado de los Fetiches (vudú al aire libre), los pueblos encaramados de los Tamberma en la ruta de los castillos de barro (UNESCO), las cascadas de Kpalimé en la selva tropical, y las playas de la costa atlántica. Un país ignorado que recompensa a los curiosos.", de: "Togo ist ein schmaler Korridor zwischen Ghana und Benin: Lomé und sein Grand Marché des Fétiches (Voodoo unter freiem Himmel), die hochgelegenen Dörfer der Tamberma auf dem Weg zu den Banco-Schlössern (UNESCO), die Kpalimé-Wasserfälle im tropischen Wald und die Strände der Atlantikküste. Ein ignoriertes Land, das die Neugierigen belohnt.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March", es: "Noviembre – marzo", de: "November – März" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour voyager : harmattan frais, ciel dégagé. Routes praticables dans tout le pays. Nord sec et accessible.", en: "Ideal for travelling: cool harmattan winds, clear skies. Roads passable throughout the country. The north is dry and accessible.", es: "Ideal para viajar: harmatán fresco, cielo despejado. Carreteras transitables en todo el país. Norte seco y accesible.", de: "Ideal zum Reisen: kühles Harmattan, klarer Himmel. Befahrbare Straßen im ganzen Land. Trockener und zugänglicher Norden.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – septiembre", de: "Juni – September" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias", de: "Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "Pluies régulières au sud, routes de brousse difficiles, nord moins touché mais chaud. Moins favorable.", en: "Regular rain in the south, difficult bush roads, the north is less affected but hot. Less favourable.", es: "Lluvias regulares en el sur, carreteras de monte difíciles, el norte menos afectado pero caluroso. Menos favorable.", de: "Regelmäßige Regenfälle im Süden, schwierige Buschstraßen, weniger betroffener, aber heißer Norden. Weniger günstig.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "lome",
      name: { fr: "Lomé", en: "Lomé", es: "Lomé", de: "Lomé" },
      region: { fr: "Maritime (côte)", en: "Maritime (coast)", es: "Marítima (costa)", de: "Maritim (Küste)" },
      data: [
        { month: "Jan", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "⛅" },
      ],
    },
    {
      id: "kara",
      name: { fr: "Kara", en: "Kara", es: "Kara", de: "Kara" },
      region: { fr: "Kara (nord-centre)", en: "Kara (north-central)", es: "Kara (centro-norte)", de: "Kara (Nord-Zentral)" },
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 33, rain: 40,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 80,  icon: "🌡️" },
        { month: "Mai", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lomé — Marché des Fétiches", en: "Lomé — Fetish Market", es: "Lomé — Mercado de los Fetiches", de: "Lomé – Fetischmarkt" },
      region: { fr: "Maritime", en: "Maritime", es: "Marítima", de: "Maritim" },
      description: {
        fr: "Le Grand Marché des Fétiches de Lomé (Akodessewa) est le plus grand marché vaudou du monde : des milliers de crânes d'animaux, peaux, plantes médicinales et fétiches utilisés par les guérisseurs. Un spectacle saisissant qui n'existe nulle part ailleurs. Le front de mer de Lomé, la seule capitale africaine directement sur l'Atlantique, complète la visite.", en: "Lomé's Grand Marché des Fétiches (Akodessewa) is the largest voodoo market in the world: thousands of animal skulls, skins, medicinal plants and fetishes used by traditional healers. A striking sight found nowhere else. Lomé's seafront, the only African capital directly on the Atlantic, rounds out the visit.", es: "El Gran Mercado de los Fetiches de Lomé (Akodessewa) es el mercado vudú más grande del mundo: miles de cráneos de animales, pieles, plantas medicinales y fetiches utilizados por los curanderos tradicionales. Un espectáculo impactante que no existe en ningún otro lugar. El paseo marítimo de Lomé, la única capital africana directamente sobre el Atlántico, completa la visita.", de: "Der Grand Marché des Fétiches de Lomé (Akodessewa) ist der größte Voodoo-Markt der Welt: Tausende von Tierschädeln, Häuten, Heilpflanzen und Fetischen, die von Heilern verwendet werden. Ein beeindruckendes Spektakel, das es sonst nirgendwo gibt. Die Küste von Lomé, der einzigen afrikanischen Hauptstadt direkt am Atlantik, rundet den Besuch ab.",
      },
      wikipedia: "Lomé",
      tags: ["Spiritualité", "Shopping", "Ville"],
      mustSee: [
        { name: { fr: "Marché des Fétiches d'Akodessewa — le plus grand marché vaudou du monde", en: "Akodessewa Fetish Market — the world's largest voodoo market", es: "Mercado de los Fetiches de Akodessewa — el mercado vudú más grande del mundo", de: "Akodessewa-Fetischmarkt – der größte Voodoo-Markt der Welt" }, wikipedia: "File:Akodessawa Fetish Market 2016.jpg" },
        { name: { fr: "Front de mer de Lomé — la seule capitale africaine sur l'Atlantique", en: "Lomé seafront — the only African capital on the Atlantic", es: "Paseo marítimo de Lomé — la única capital africana sobre el Atlántico", de: "Uferpromenade von Lomé – die einzige afrikanische Hauptstadt am Atlantik" }, wikipedia: "File:Lome Beach Togo 1.jpg" },
        { name: { fr: "Grand Marché de Lomé — tissus, artisanat", en: "Lomé Grand Market — fabrics, crafts", es: "Gran Mercado de Lomé — telas, artesanía", de: "Grand Marché de Lomé – Stoffe, Kunsthandwerk" }, wikipedia: "File:Lomé Grand Market in full swing.jpg" },
        { name: { fr: "Palais des congrès", en: "Palais des Congrès", es: "Palacio de Congresos", de: "Kongresszentrum" }, wikipedia: "File:Lomé-Palais des Congrès.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Koutammakou — Châteaux Tamberma", en: "Koutammakou — Tamberma Castles", es: "Koutammakou — Castillos tamberma", de: "Koutammakou – Tamberma-Schlösser" },
      region: { fr: "Kara", en: "Kara", es: "Kara", de: "Kara" },
      description: {
        fr: "Le pays Tamberma (UNESCO) dans le nord du Togo est parsemé de tata — des maisons-châteaux en banco à deux étages, construites comme des forteresses avec des tours de guet et des greniers à mil. Cette architecture unique, vieille de plusieurs siècles, reflète la résistance des Tamberma aux razzias esclavagistes. Un paysage hors du commun, habité.", en: "The Tamberma country (UNESCO) in northern Togo is dotted with tata — two-storey mud-brick castle-houses, built like fortresses with watchtowers and millet granaries. This unique, centuries-old architecture reflects the Tamberma's resistance to slave raids. An extraordinary, inhabited landscape.", es: "El país tamberma (UNESCO) en el norte de Togo está salpicado de tata — casas-castillo de barro de dos plantas, construidas como fortalezas con torres de vigilancia y graneros de mijo. Esta arquitectura única, de varios siglos de antigüedad, refleja la resistencia de los tamberma a las razias esclavistas. Un paisaje extraordinario y habitado.", de: "Das Tamberma-Land (UNESCO) im Norden Togos ist übersät mit Tata – zweistöckigen Banco-Burghäusern, die wie Festungen mit Wachtürmen und Hirsespeichern gebaut sind. Diese einzigartige, mehrere Jahrhunderte alte Architektur spiegelt den Widerstand der Tamberma gegen Sklavenüberfälle wider. Eine ungewöhnliche, bewohnte Landschaft.",
      },
      wikipedia: "Koutammakou",
      tags: ["UNESCO", "Architecture", "Culture"],
      mustSee: [
        { name: { fr: "Village de Nadoba — tatas Tamberma les mieux conservés", en: "Nadoba village — the best-preserved Tamberma tatas", es: "Pueblo de Nadoba — los tatas tamberma mejor conservados", de: "Dorf Nadoba – die am besten erhaltenen Tamberma Tatas" }, wikipedia: "File:Les Tata de koutammakou 03.jpg" },
        { name: { fr: "Paysage de la plaine Tamberma au coucher de soleil", en: "Tamberma plain landscape at sunset", es: "Paisaje de la llanura tamberma al atardecer", de: "Landschaft der Tamberma-Ebene bei Sonnenuntergang" }, wikipedia: "File:Paysage tata 01.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kpalimé — Forêt et cascades", en: "Kpalimé — Forest and waterfalls", es: "Kpalimé — Bosque y cascadas", de: "Kpalimé – Wald und Wasserfälle" },
      region: { fr: "Plateaux", en: "Plateaux", es: "Plateaux", de: "Tabletts" },
      description: {
        fr: "Kpalimé et sa région constituent le poumon vert du Togo : forêt tropicale dense, cascades de Kpimé et de Wome, fermes de papillons, plantations de café et de cacao. Le mont Agou (986m, point culminant du Togo) s'y trouve. Une région fraîche et verdoyante, idéale pour la randonnée.", en: "Kpalimé and its surrounding region form Togo's green lung: dense tropical forest, the Kpimé and Wome waterfalls, butterfly farms, coffee and cocoa plantations. Mount Agou (986 m, Togo's highest point) is located here. A cool, lush region, ideal for hiking.", es: "Kpalimé y su región constituyen el pulmón verde de Togo: selva tropical densa, cascadas de Kpimé y de Wome, granjas de mariposas, plantaciones de café y cacao. Allí se encuentra el monte Agou (986 m, punto más alto de Togo). Una región fresca y verde, ideal para el senderismo.", de: "Kpalimé und seine Region bilden die grüne Lunge Togos: dichter Tropenwald, Kpimé- und Wome-Wasserfälle, Schmetterlingsfarmen, Kaffee- und Kakaoplantagen. Dort befindet sich der Berg Agou (986 m, höchster Punkt Togos). Eine kühle und grüne Region, ideal zum Wandern.",
      },
      wikipedia: "Kpalimé",
      tags: ["Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Cascades de Kpimé (1h de Kpalimé)", en: "Kpimé Falls (1h from Kpalimé)", es: "Cascadas de Kpimé (1h de Kpalimé)", de: "Kpimé-Wasserfälle (1 Stunde von Kpalimé entfernt)" }, wikipedia: "File:Vue de la cascade de Kpimé, Kpalimé 01.jpg" },
        { name: { fr: "Mont Agou (986m) — point culminant du Togo", en: "Mount Agou (986m) — Togo's highest point", es: "Monte Agou (986 m) — punto más alto de Togo", de: "Mont Agou (986 m) – höchster Punkt in Togo" }, wikipedia: "Mount_Agou" },
        { name: { fr: "Plantations de café et cacao — balades pédestres", en: "Coffee and cocoa plantations — walking tours", es: "Plantaciones de café y cacao — paseos a pie", de: "Kaffee- und Kakaoplantagen – Wandertouren" }, wikipedia: "File:Cacao à kpalimé 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Togo est l'une des destinations les plus abordables d'Afrique de l'Ouest. Le franc CFA arrimé à l'euro facilite la gestion du budget. Lomé est la plus chère des villes, mais reste très abordable comparée aux standards européens.", en: "Togo is one of the most affordable destinations in West Africa. The CFA Franc, pegged to the euro, makes budgeting easy. Lomé is the priciest city, but remains very affordable by European standards.", es: "Togo es uno de los destinos más asequibles de África Occidental. El franco CFA, vinculado al euro, facilita la gestión del presupuesto. Lomé es la ciudad más cara, pero sigue siendo muy asequible según los estándares europeos.", de: "Togo ist eines der günstigsten Reiseziele in Westafrika. Der an den Euro gekoppelte CFA-Franc erleichtert die Haushaltsführung. Lomé ist die teuerste der Städte, aber im europäischen Vergleich immer noch sehr erschwinglich.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / simple room", es: "Guesthouse / habitación simple", de: "Gästehaus / Einzelzimmer" }, price: "10–25 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic AC", es: "Ventilador o aire acondicionado básico", de: "Ventilator oder einfache Klimaanlage" } },
          { label: { fr: "Hôtel 3★ confort (Lomé, Kpalimé)", en: "Comfortable 3★ hotel (Lomé, Kpalimé)", es: "Hotel 3★ confort (Lomé, Kpalimé)", de: "3★ Komforthotel (Lomé, Kpalimé)" }, price: "45–80 €", detail: { fr: "Clim, salle de bain privée, wifi", en: "AC, private bathroom, wifi", es: "Aire acondicionado, baño privado, wifi", de: "Klimaanlage, eigenes Bad, WLAN" } },
          { label: { fr: "Hôtel de luxe Lomé (Radisson, Sarakawa)", en: "Luxury hotel in Lomé (Radisson, Sarakawa)", es: "Hotel de lujo en Lomé (Radisson, Sarakawa)", de: "Luxushotel Lomé (Radisson, Sarakawa)" }, price: "120–200 €", detail: { fr: "Standard international", en: "International standard", es: "Estándar internacional", de: "Internationaler Standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Pâte / sauces dans un buvette locale", en: "Pâte / sauces at a local buvette", es: "Pâte / salsas en una buvette local", de: "Pasta/Soßen in einer örtlichen Erfrischungsbar" }, price: "1–3 €", detail: { fr: "Cuisine togolaise typique", en: "Typical Togolese cuisine", es: "Cocina togolesa típica", de: "Typische togoische Küche" } },
          { label: { fr: "Restaurant mid-range Lomé", en: "Mid-range restaurant in Lomé", es: "Restaurante de gama media en Lomé", de: "Lomé-Mittelklasserestaurant" }, price: "7–15 €", detail: { fr: "Poisson, viande, menu complet", en: "Fish, meat, full menu", es: "Pescado, carne, menú completo", de: "Fisch, Fleisch, komplette Speisekarte" } },
          { label: { fr: "Restaurant gastronomique Lomé", en: "Fine dining in Lomé", es: "Restaurante gastronómico en Lomé", de: "Gourmetrestaurant Lomé" }, price: "20–40 €", detail: { fr: "Cuisine française et fusion", en: "French and fusion cuisine", es: "Cocina francesa y fusión", de: "Französische und Fusionsküche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Moto-taxi (zemidjan) — trajet urbain", en: "Motorbike taxi (zemidjan) — urban ride", es: "Mototaxi (zemidjan) — trayecto urbano", de: "Motorradtaxi (zemidjan) – Stadtfahrt" }, price: "0,30–1 €", detail: { fr: "Transport populaire Lomé", en: "Popular transport in Lomé", es: "Transporte popular en Lomé", de: "Beliebtes Transportmittel Lomé" } },
          { label: { fr: "Bus / bush taxi (Lomé–Kpalimé, 2h)", en: "Bus / bush taxi (Lomé–Kpalimé, 2h)", es: "Autobús / bush taxi (Lomé–Kpalimé, 2h)", de: "Bus / Buschtaxi (Lomé–Kpalimé, 2 Std.)" }, price: "3–5 €", detail: { fr: "Transport interurbain local", en: "Local intercity transport", es: "Transporte interurbano local", de: "Lokaler Überlandverkehr" } },
          { label: { fr: "Location voiture avec chauffeur / journée", en: "Car rental with driver / day", es: "Alquiler de coche con chófer / día", de: "Autovermietung mit Fahrer / Tag" }, price: "50–80 €", detail: { fr: "Recommandé pour nord Togo", en: "Recommended for northern Togo", es: "Recomendado para el norte de Togo", de: "Empfohlen für den Norden Togos" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite guidée Marché des Fétiches", en: "Guided tour of the Fetish Market", es: "Visita guiada al Mercado de los Fetiches", de: "Führung durch den Fetischmarkt" }, price: "5–15 €", detail: { fr: "Guide local conseillé", en: "Local guide recommended", es: "Guía local recomendado", de: "Empfohlener lokaler Führer" } },
          { label: { fr: "Trek vers les cascades de Kpimé (guide)", en: "Trek to Kpimé Falls (guide)", es: "Trekking a las cascadas de Kpimé (guía)", de: "Wanderung zu den Kpimé-Wasserfällen (Führer)" }, price: "10–20 €", detail: { fr: "Demi-journée", en: "Half day", es: "Medio día", de: "Halber Tag" } },
          { label: { fr: "Visite pays Tamberma avec guide", en: "Guided visit of Tamberma country", es: "Visita al país tamberma con guía", de: "Besuch des Tamberma-Landes mit Führer" }, price: "20–40 €", detail: { fr: "Journée depuis Kara", en: "Full day from Kara", es: "Día completo desde Kara", de: "Tag von Kara" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–55 €/j", desc: { fr: "Guesthouse + cuisine locale + moto-taxi", en: "Guesthouse + local food + motorbike taxi", es: "Guesthouse + comida local + mototaxi", de: "Gästehaus + lokale Küche + Motorradtaxi" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "75–120 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3★ hotel + restaurants + guided excursions", es: "Hotel 3★ + restaurantes + excursiones guiadas", de: "3★ Hotel + Restaurants + geführte Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Grand hôtel Lomé + excursions privées", en: "Grand hotel in Lomé + private excursions", es: "Gran hotel en Lomé + excursiones privadas", de: "Grand Hotel Lomé + private Ausflüge" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Lomé (3j) → Kpalimé (2j) → Atakpamé (1j) → Kara (2j) → Koutammakou (2j)", en: "Lomé (3d) → Kpalimé (2d) → Atakpamé (1d) → Kara (2d) → Koutammakou (2d)", es: "Lomé (3d) → Kpalimé (2d) → Atakpamé (1d) → Kara (2d) → Koutammakou (2d)", de: "Lomé (3 Tage) → Kpalimé (2 Tage) → Atakpamé (1 Tage) → Kara (2 Tage) → Koutammakou (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lomé", en: "Return flight Paris–Lomé", es: "Vuelo ida/vuelta Madrid–Lomé", de: "Hin- und Rückflug Paris–Lomé" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–300 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "100–200 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "150–250 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides", es: "Actividades y guías", de: "Aktivitäten und Führer" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lomé", en: "Return flight Paris–Lomé", es: "Vuelo ida/vuelta Madrid–Lomé", de: "Hin- und Rückflug Paris–Lomé" }, amount: "550–750 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "600–900 €" },
            { label: { fr: "Location voiture / chauffeur", en: "Car rental / driver", es: "Alquiler de coche / chófer", de: "Auto-/Fahrervermietung" }, amount: "350–550 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings", es: "Comida y salidas", de: "Essen und Ausflüge" }, amount: "350–550 €" },
            { label: { fr: "Guides & excursions", en: "Guides & excursions", es: "Guías y excursiones", de: "Führungen und Ausflüge" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~6h (Ethiopian Airlines via Addis, Air France via escale, parfois Corsair)", en: "~6h (Ethiopian Airlines via Addis, Air France via layover, sometimes Corsair)", es: "~7h (Ethiopian Airlines vía Addis, Air France con escala, a veces Corsair)", de: "ca. 6 Std. (Ethiopian Airlines via Addis, Air France mit Zwischenstopp, manchmal Corsair)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée possible (30€) ou e-Visa en ligne. Valable 7 à 30 jours.", en: "Visa on arrival possible (30€) or online e-Visa. Valid 7 to 30 days.", es: "Visado a la llegada posible (30€) o e-Visa en línea. Válido de 7 a 30 días.", de: "Visum bei Ankunft möglich (30€) oder E-Visum online. Gültig für 7 bis 30 Tage." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces essentielles hors Lomé.", en: "CFA Franc (XOF). 1€ = 655 XOF fixed rate. Cash essential outside Lomé.", es: "Franco CFA (XOF). 1€ = 655 XOF tipo fijo. Efectivo esencial fuera de Lomé.", de: "CFA-Franc (XOF). 1€ = 655 XOF Festpreis. Wesentliche Arten außerhalb von Lomé." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français (officiel) — communication facile. Ewe au sud, Kabiyé au nord.", en: "French (official) — easy to communicate. Ewe in the south, Kabiye in the north.", es: "Francés (oficial) — comunicación fácil. Ewe en el sur, kabiyé en el norte.", de: "Französisch (offiziell) – einfache Kommunikation. Ewe im Süden, Kabiyé im Norden." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V.", es: "Tipo C/E (europeo) — 220V.", de: "Typ C/E (europäisch) – 220 V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable toute l'année.", en: "Yellow fever vaccine mandatory. Malaria prophylaxis essential year-round.", es: "Vacuna contra la fiebre amarilla obligatoria. Antipalúdico imprescindible todo el año.", de: "Gelbfieberimpfung erforderlich. Das ganze Jahr über unverzichtbar gegen Malaria." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential.", es: "No potable — agua embotellada imprescindible.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Couverture 4G à Lomé. Nord du pays : couverture limitée. SIM Togocel locale recommandée.", en: "4G coverage in Lomé. Northern part of the country: limited coverage. Local Togocel SIM recommended.", es: "Cobertura 4G en Lomé. Norte del país: cobertura limitada. Se recomienda SIM Togocel local.", de: "4G-Abdeckung in Lomé. Norden des Landes: begrenzte Abdeckung. Lokale Togocel-SIM-Karte empfohlen." } },
  ],
};
