export const SAO_TOME = {
  code: "STP",
  numericId: 678,
  name: { fr: "São Tomé-et-Príncipe", en: "São Tomé and Príncipe", es: "Santo Tomé y Príncipe", de: "São Tomé und Príncipe" },
  emoji: "🇸🇹",
  capital: { fr: "São Tomé", en: "São Tomé", es: "Santo Tomé", de: "São Tomé" },
  language: { fr: "Portugais, Forro, Angolar", en: "Portuguese, Forro, Angolar", es: "Portugués, forro, angolar", de: "Portugiesisch, Forro, Angolar" },
  currency: { fr: "Dobra (STN)", en: "Dobra (STN)", es: "Dobra (STN)", de: "Dobra (STN)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2500, tripMid: 5000,
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
    ville: 0,
    plage: 2,
  },
  description: {
    fr: "São Tomé-et-Príncipe est un minuscule archipel de deux îles volcanique dans le golfe de Guinée, à l'équateur : des forêts tropicales primaires couvertes de brume, des plantations de cacao parmi les meilleures au monde (Claudio Corallo), des plages désertes spectaculaires, et une culture créole luso-africaine unique. Un des pays les moins visités au monde, préservé et authentique.", en: "São Tomé and Príncipe is a tiny volcanic two-island archipelago in the Gulf of Guinea, on the equator: primary rainforests shrouded in mist, some of the best cocoa plantations in the world (Claudio Corallo), spectacular deserted beaches, and a unique Luso-African Creole culture. One of the least-visited countries in the world, preserved and authentic.", es: "Santo Tomé y Príncipe es un pequeño archipiélago volcánico de dos islas en el golfo de Guinea, sobre el ecuador: selvas tropicales vírgenes cubiertas de bruma, algunas de las mejores plantaciones de cacao del mundo (Claudio Corallo), playas desiertas espectaculares, y una cultura criolla luso-africana única. Uno de los países menos visitados del mundo, preservado y auténtico.", de: "São Tomé und Príncipe ist ein winziger Archipel aus zwei Vulkaninseln im Golf von Guinea am Äquator: nebelbedeckte Primärregenwälder, einige der besten Kakaoplantagen der Welt (Claudio Corallo), spektakuläre einsame Strände und eine einzigartige luso-afrikanische kreolische Kultur. Eines der am wenigsten besuchten Länder der Welt, erhalten und authentisch.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Saison sèche (Gravana)", en: "Dry season (Gravana)", es: "Estación seca (Gravana)", de: "Trockenzeit (Gravana)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, mer calme, températures agréables (24–28°C). Idéal pour plages et randonnées. Pico de São Tomé accessible.", en: "Best time to visit: less rain, calm seas, pleasant temperatures (24–28°C). Ideal for beaches and hiking. Pico de São Tomé is accessible.", es: "Mejor época: menos lluvia, mar en calma, temperaturas agradables (24–28 °C). Ideal para playas y senderismo. Pico de São Tomé accesible.", de: "Beste Zeit: weniger Regen, ruhige See, angenehme Temperaturen (24–28°C). Ideal für Strände und Wanderungen. Pico de São Tomé zugänglich.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February", es: "Diciembre – Febrero", de: "Dezember – Februar" },
      label: { fr: "Petite saison sèche", en: "Short dry season", es: "Pequeña estación seca", de: "Kurze Trockenzeit" },
      color: "#f59e0b",
      description: {
        fr: "Courte période plus sèche, acceptable. Mer parfois agitée. Bonne période pour observer les baleines.", en: "A short, drier, acceptable period. Sea sometimes rough. Good time for whale watching.", es: "Periodo corto más seco, aceptable. Mar a veces agitado. Buena época para observar ballenas.", de: "Kurze Trocknungszeit, akzeptabel. Das Meer ist manchmal rau. Gute Zeit zum Walbeobachten.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Grande saison des pluies", en: "Long rainy season", es: "Gran estación de lluvias", de: "Lange Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "Pluies très abondantes au sud (400–600mm/mois), routes impraticables, Príncipe isolée. Nord moins touché.", en: "Very heavy rain in the south (400–600mm/month), impassable roads, Príncipe cut off. North less affected.", es: "Lluvias muy abundantes en el sur (400–600 mm/mes), caminos intransitables, Príncipe aislada. Norte menos afectado.", de: "Sehr starke Regenfälle im Süden (400–600 mm/Monat), unpassierbare Straßen, isoliertes Príncipe. Norden weniger betroffen.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "sao_tome_city",
      name: { fr: "São Tomé (ville)", en: "São Tomé (city)", es: "Santo Tomé (ciudad)", de: "São Tomé (Stadt)" },
      region: { fr: "Nord de l'île principale", en: "North of the main island", es: "Norte de la isla principal", de: "Nördlich der Hauptinsel" },
      data: [
        { month: "Jan", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Fév", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mar", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 250, icon: "⛅" },
        { month: "Jun", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 140, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Pico de São Tomé — Sommet volcanique", en: "Pico de São Tomé — Volcanic peak", es: "Pico de Santo Tomé — Cumbre volcánica", de: "Pico de São Tomé – Vulkangipfel" },
      region: { fr: "Centre de l'île", en: "Centre of the island", es: "Centro de la isla", de: "Mittelpunkt der Insel" },
      description: {
        fr: "Le Pico de São Tomé (2 024m) est le point culminant de l'île : une ascension de 2 jours à travers toutes les strates de la forêt tropicale (forêt dense, forêt de brume, landes d'altitude) avec une biodiversité endémique exceptionnelle (oiseaux rares, plantes géantes). Une aventure dans une forêt vierge où l'Afrique rencontre les Galápagos.", en: "Pico de São Tomé (2,024m) is the island's highest point: a 2-day climb through every layer of the rainforest (dense forest, cloud forest, high-altitude moorland) with exceptional endemic biodiversity (rare birds, giant plants). An adventure in a pristine forest where Africa meets the Galápagos.", es: "El Pico de Santo Tomé (2.024 m) es el punto más alto de la isla: una ascensión de 2 días a través de todos los estratos de la selva tropical (bosque denso, bosque de niebla, páramos de altitud) con una biodiversidad endémica excepcional (aves raras, plantas gigantes). Una aventura en un bosque virgen donde África se encuentra con las Galápagos.", de: "Der Pico de São Tomé (2.024 m) ist der höchste Punkt der Insel: ein zweitägiger Aufstieg durch alle Schichten des tropischen Waldes (dichter Wald, Nebelwald, Hochmoore) mit außergewöhnlicher endemischer Artenvielfalt (seltene Vögel, Riesenpflanzen). Ein Abenteuer in einem Urwald, wo Afrika auf die Galapagosinseln trifft.",
      },
      wikipedia: "Pico_de_São_Tomé",
      tags: ["Randonnée", "Nature", "Montagne"],
      mustSee: [
        { name: { fr: "Ascension Pico de São Tomé (2 024m, 2 jours, guide)", en: "Pico de São Tomé climb (2,024m, 2 days, guided)", es: "Ascensión al Pico de Santo Tomé (2.024 m, 2 días, con guía)", de: "Besteigung des Pico de São Tomé (2.024 m, 2 Tage, Führer)" }, wikipedia: "Pico_de_São_Tomé" },
        { name: { fr: "Forêt de brume — espèces végétales endémiques géantes", en: "Cloud forest — giant endemic plant species", es: "Bosque de niebla — especies vegetales endémicas gigantes", de: "Nebelwald – riesige endemische Pflanzenarten" }, wikipedia: "File:Sao_Tome_Ponta_Figo_Hike_8_(16063229667).jpg" },
        { name: { fr: "Cascades dans la forêt primaire", en: "Waterfalls in the primary forest", es: "Cascadas en el bosque primario", de: "Wasserfälle im Primärwald" }, wikipedia: "File:Forest_of_São_Tomé_Island.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Cacao Claudio Corallo — Chocolat d'exception", en: "Claudio Corallo Cocoa — Exceptional chocolate", es: "Cacao Claudio Corallo — Chocolate excepcional", de: "Claudio Corallo Kakao – Außergewöhnliche Schokolade" },
      region: { fr: "Île de Príncipe", en: "Príncipe Island", es: "Isla de Príncipe", de: "Insel Principe" },
      description: {
        fr: "Claudio Corallo, considéré comme faisant le meilleur chocolat du monde, cultive son cacao sur l'île de Príncipe dans des plantations coloniales restaurées depuis les années 1990. La visite de sa ferme de Terreiro Velho est une expérience sensorielle unique : de la cabosse à la tablette, en passant par la fermentation et le séchage au soleil.", en: "Claudio Corallo, regarded as making the best chocolate in the world, grows his cocoa on Príncipe Island in colonial plantations restored since the 1990s. Visiting his Terreiro Velho farm is a unique sensory experience: from the pod to the bar, via fermentation and sun-drying.", es: "Claudio Corallo, considerado el productor del mejor chocolate del mundo, cultiva su cacao en la isla de Príncipe en plantaciones coloniales restauradas desde los años 1990. Visitar su granja de Terreiro Velho es una experiencia sensorial única: de la mazorca a la tableta, pasando por la fermentación y el secado al sol.", de: "Claudio Corallo, der als Hersteller der besten Schokolade der Welt gilt, baut seinen Kakao seit den 1990er Jahren auf der Insel Príncipe in restaurierten Kolonialplantagen an. Der Besuch seiner Farm in Terreiro Velho ist ein einzigartiges Sinneserlebnis: von der Schote bis zur Bar, inklusive Gärung und Trocknung in der Sonne.",
      },
      wikipedia: "File:Principe 1220.jpg",
      tags: ["Gastronomie", "Rural"],
      mustSee: [
        { name: { fr: "Ferme Claudio Corallo — dégustation du meilleur cacao mondial", en: "Claudio Corallo farm — tasting the world's finest cocoa", es: "Granja Claudio Corallo — degustación del mejor cacao del mundo", de: "Claudio Corallo Farm – Verkostung des besten Kakaos der Welt" }, wikipedia: "Claudio_Corallo" },
        { name: { fr: "Forêt primaire de Príncipe (UNESCO Biosphère)", en: "Príncipe primary forest (UNESCO Biosphere)", es: "Bosque primario de Príncipe (Reserva de la Biosfera UNESCO)", de: "Príncipe-Primärwald (UNESCO-Biosphäre)" }, wikipedia: "File:Principe 3181.jpg" },
        { name: { fr: "Plages désertes de Príncipe — Baia das Agulhas", en: "Deserted beaches of Príncipe — Baia das Agulhas", es: "Playas desiertas de Príncipe — Baia das Agulhas", de: "Einsame Strände von Príncipe – Baia das Agulhas" }, wikipedia: "File:Principe 1220.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Roças & Plantations coloniales", en: "Roças & Colonial plantations", es: "Roças y plantaciones coloniales", de: "Roças und Kolonialplantagen" },
      region: { fr: "Île principale", en: "Main island", es: "Isla principal", de: "Hauptinsel" },
      description: {
        fr: "Les 'roças' sont les grandes plantations coloniales portugaises abandonnées qui parsèment São Tomé : Roça Agostinho Neto, Roça Monte Café (cacao), Roça Sundy (la plus belle, à Príncipe). Ces immenses domaines en ruines romantiques, avec leur architecture coloniale Art Nouveau et leurs anciens entrepôts, sont le symbole de l'histoire de l'île.", en: "The 'roças' are the large abandoned Portuguese colonial plantations scattered across São Tomé: Roça Agostinho Neto, Roça Monte Café (cocoa), Roça Sundy (the most beautiful, on Príncipe). These vast estates, romantically ruined, with their Art Nouveau colonial architecture and old warehouses, are the symbol of the island's history.", es: "Las 'roças' son las grandes plantaciones coloniales portuguesas abandonadas que salpican Santo Tomé: Roça Agostinho Neto, Roça Monte Café (cacao), Roça Sundy (la más bella, en Príncipe). Estas inmensas fincas en ruinas románticas, con su arquitectura colonial Art Nouveau y sus antiguos almacenes, son el símbolo de la historia de la isla.", de: "Die „Roças“ sind die großen verlassenen portugiesischen Kolonialplantagen, die überall auf São Tomé zu finden sind: Roça Agostinho Neto, Roça Monte Café (Kakao), Roça Sundy (die schönste in Príncipe). Diese riesigen Anwesen in romantischen Ruinen mit ihrer Jugendstil-Kolonialarchitektur und alten Lagerhäusern sind das Symbol der Geschichte der Insel.",
      },
      wikipedia: "File:Roça Agostinho Neto (São Tomé) (2).jpg",
      tags: ["Rural", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Roça Agostinho Neto — ancienne capitale des plantations", en: "Roça Agostinho Neto — former plantation capital", es: "Roça Agostinho Neto — antigua capital de las plantaciones", de: "Roça Agostinho Neto – ehemalige Plantagenhauptstadt" }, wikipedia: "File:Roça Agostinho Neto (São Tomé) (2).jpg" },
        { name: { fr: "Roça Monte Café — cacao et chemin de fer colonial", en: "Roça Monte Café — cocoa and colonial railway", es: "Roça Monte Café — cacao y ferrocarril colonial", de: "Roça Monte Café – Kakao und Kolonialeisenbahn" }, wikipedia: "File:Musée du Café à Monte Café (São Tomé) (2).jpg" },
        { name: { fr: "Roça Sundy (Príncipe) — la plus grande et la mieux préservée", en: "Roça Sundy (Príncipe) — the largest and best preserved", es: "Roça Sundy (Príncipe) — la más grande y mejor conservada", de: "Roça Sundy (Príncipe) – der größte und am besten erhaltene" }, wikipedia: "File:Principe 1468.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Plages et baie de l'Abade", en: "Beaches and Abade Bay", es: "Playas y bahía de Abade", de: "Strände und Bucht von Abade" },
      region: { fr: "Nord et Sud de l'île", en: "North and South of the island", es: "Norte y sur de la isla", de: "Nördlich und südlich der Insel" },
      description: {
        fr: "São Tomé possède certaines des plages les plus belles et les plus désertes d'Afrique centrale : Praia Lagarto, Praia Micondó, la Baie de l'Abade avec ses tortues. Le sud de l'île, plus pluvieux, est couvert de forêt dense jusqu'à la mer. La plage de Praia Grande au nord est la principale plage de baignade.", en: "São Tomé has some of the most beautiful and deserted beaches in Central Africa: Praia Lagarto, Praia Micondó, Abade Bay with its turtles. The rainier south of the island is covered in dense forest right down to the sea. Praia Grande beach in the north is the main swimming beach.", es: "Santo Tomé posee algunas de las playas más bellas y desiertas de África Central: Praia Lagarto, Praia Micondó, la bahía de Abade con sus tortugas. El sur de la isla, más lluvioso, está cubierto de bosque denso hasta el mar. La playa de Praia Grande al norte es la principal playa de baño.", de: "São Tomé hat einige der schönsten und einsamsten Strände Zentralafrikas: Praia Lagarto, Praia Micondó, Abade Bay mit ihren Schildkröten. Der regenreichere Süden der Insel ist bis zum Meer von dichtem Wald bedeckt. Der Strand Praia Grande im Norden ist der Hauptbadestrand.",
      },
      wikipedia: "File:Praia Grande do Rodízio 01.jpg",
      tags: ["Plage", "Safari"],
      mustSee: [
        { name: { fr: "Praia Lagarto — plage déserte au sud-ouest", en: "Praia Lagarto — deserted beach in the south-west", es: "Praia Lagarto — playa desierta al suroeste", de: "Praia Lagarto – einsamer Strand im Südwesten" }, wikipedia: "File:Praia das Calhetas - PE.jpg" },
        { name: { fr: "Baie de l'Abade — observation des tortues marines", en: "Abade Bay — sea turtle watching", es: "Bahía de Abade — observación de tortugas marinas", de: "Abade Bay – Beobachtung von Meeresschildkröten" }, wikipedia: "File:Hawaii turtle 2.JPG" },
        { name: { fr: "Praia Grande — principale plage de baignade", en: "Praia Grande — main swimming beach", es: "Praia Grande — principal playa de baño", de: "Praia Grande – Hauptbadestrand" }, wikipedia: "File:Praia Grande do Rodízio 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "São Tomé-et-Príncipe est relativement chère pour sa taille : peu de touristes, peu de concurrence, et une dépendance aux importations. Príncipe est encore plus chère que São Tomé. Le cacao et le chocolat Corallo sont des souvenirs incontournables.", en: "São Tomé and Príncipe is relatively expensive for its size: few tourists, little competition, and reliance on imports. Príncipe is even pricier than São Tomé. Corallo cocoa and chocolate are must-buy souvenirs.", es: "Santo Tomé y Príncipe es relativamente cara para su tamaño: pocos turistas, poca competencia, y dependencia de las importaciones. Príncipe es aún más cara que Santo Tomé. El cacao y el chocolate Corallo son recuerdos imprescindibles.", de: "São Tomé und Príncipe ist für seine Größe relativ teuer: wenige Touristen, wenig Konkurrenz und Abhängigkeit von Importen. Príncipe ist sogar teurer als São Tomé. Kakao und Corallo-Schokolade sind unverzichtbare Souvenirs.",
    },
    currency: "STN",
    exchangeRate: "1€ ≈ 24–25 STN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / pension locale", en: "Local guesthouse", es: "Guesthouse / pensión local", de: "Lokale Pension/Pension" }, price: "40–70 €", detail: { fr: "Simple, avec ou sans clim", en: "Simple, with or without AC", es: "Sencilla, con o sin aire acondicionado", de: "Einfach, mit oder ohne Klimaanlage" } },
          { label: { fr: "Hôtel 3★ São Tomé (Pestana, Miramar)", en: "3★ hotel in São Tomé (Pestana, Miramar)", es: "Hotel 3★ en Santo Tomé (Pestana, Miramar)", de: "Hotel 3★ São Tomé (Pestana, Miramar)" }, price: "90–150 €", detail: { fr: "Piscine, plage, petit-déj", en: "Pool, beach, breakfast", es: "Piscina, playa, desayuno", de: "Schwimmbad, Strand, Frühstück" } },
          { label: { fr: "Eco-lodge / bungalow en forêt", en: "Eco-lodge / forest bungalow", es: "Eco-lodge / bungaló en el bosque", de: "Öko-Lodge/Bungalow im Wald" }, price: "150–300 €", detail: { fr: "Immersion nature", en: "Nature immersion", es: "Inmersión en la naturaleza", de: "Eintauchen in die Natur" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Calulu de poisson dans un restaurant local", en: "Fish calulu at a local restaurant", es: "Calulu de pescado en un restaurante local", de: "Fisch-Calulu in einem lokalen Restaurant" }, price: "5–12 €", detail: { fr: "Plat traditionnel santoméen", en: "Traditional São Toméan dish", es: "Plato tradicional santotomense", de: "Traditionelles Santome-Gericht" } },
          { label: { fr: "Restaurant mid-range São Tomé", en: "Mid-range restaurant in São Tomé", es: "Restaurante de gama media en Santo Tomé", de: "Mittelklasserestaurant São Tomé" }, price: "15–30 €", detail: { fr: "Langoustes, crevettes, cacao", en: "Lobster, prawns, cocoa", es: "Langostas, gambas, cacao", de: "Hummer, Garnelen, Kakao" } },
          { label: { fr: "Chocolat Claudio Corallo (tablette 50g)", en: "Claudio Corallo chocolate (50g bar)", es: "Chocolate Claudio Corallo (tableta 50g)", de: "Claudio Corallo Schokolade (50g Tafel)" }, price: "8–15 €", detail: { fr: "Meilleur chocolat du monde", en: "The best chocolate in the world", es: "El mejor chocolate del mundo", de: "Beste Schokolade der Welt" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Taxi collectif / hiace São Tomé", en: "Shared taxi / hiace in São Tomé", es: "Taxi compartido / hiace en Santo Tomé", de: "Sammeltaxi / Hiace São Tomé" }, price: "1–3 €", detail: { fr: "Transport local", en: "Local transport", es: "Transporte local", de: "Nahverkehr" } },
          { label: { fr: "Location de voiture 4x4", en: "4x4 car rental", es: "Alquiler de coche 4x4", de: "4x4-Autovermietung" }, price: "60–100 €/j", detail: { fr: "Recommandé pour explorer", en: "Recommended for exploring", es: "Recomendado para explorar", de: "Empfohlen zum Erkunden" } },
          { label: { fr: "Vol São Tomé–Príncipe (STP Airways)", en: "Flight São Tomé–Príncipe (STP Airways)", es: "Vuelo Santo Tomé–Príncipe (STP Airways)", de: "Flug São Tomé–Príncipe (STP Airways)" }, price: "80–150 €", detail: { fr: "30 min — A/R obligatoire", en: "30 min — return trip mandatory", es: "30 min — ida y vuelta obligatoria", de: "30 Min. – Hin- und Rückflug obligatorisch" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Ascension Pico de São Tomé (2j, guide + porteur)", en: "Pico de São Tomé climb (2d, guide + porter)", es: "Ascensión al Pico de Santo Tomé (2d, guía + porteador)", de: "Besteigung des Pico de São Tomé (2 Tage, Führer + Träger)" }, price: "100–180 €", detail: { fr: "Tout inclus", en: "All-inclusive", es: "Todo incluido", de: "Alles inklusive" } },
          { label: { fr: "Visite roças avec guide", en: "Guided roça visit", es: "Visita a las roças con guía", de: "Roças-Besuch mit Führer" }, price: "20–50 €", detail: { fr: "Demi-journée ou journée", en: "Half-day or full day", es: "Medio día o día completo", de: "Halber Tag oder ganzer Tag" } },
          { label: { fr: "Plongée sous-marine (2 plongées)", en: "Scuba diving (2 dives)", es: "Buceo (2 inmersiones)", de: "Tauchen (2 Tauchgänge)" }, price: "80–130 €", detail: { fr: "Visibilité exceptionnelle", en: "Exceptional visibility", es: "Visibilidad excepcional", de: "Außergewöhnliche Sicht" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Guesthouse + cuisine locale + taxis", en: "Guesthouse + local food + taxis", es: "Guesthouse + cocina local + taxis", de: "Gästehaus + lokale Küche + Taxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "180–280 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "300–500 €/j", desc: { fr: "Eco-lodge + plongée + Príncipe tout inclus", en: "Eco-lodge + diving + Príncipe all-inclusive", es: "Eco-lodge + buceo + Príncipe todo incluido", de: "Öko-Lodge + Tauchen + Príncipe all inclusive" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "São Tomé ville (2j) → Roças et Pico (3j) → Plages sud (2j) → Príncipe (3j)", en: "São Tomé city (2d) → Roças and Pico (3d) → Southern beaches (2d) → Príncipe (3d)", es: "Ciudad de Santo Tomé (2d) → Roças y Pico (3d) → Playas del sur (2d) → Príncipe (3d)", de: "Stadt São Tomé (2 Tage) → Roças und Pico (3 Tage) → Südstrände (2 Tage) → Príncipe (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–São Tomé (souvent via Lisbonne)", en: "Return flight Paris–São Tomé (often via Lisbon)", es: "Vuelo ida y vuelta Madrid–Santo Tomé (a menudo vía Lisboa)", de: "Hin- und Rückflug Paris–São Tomé (oft über Lissabon)" }, amount: "800–1 400 €" },
            { label: { fr: "Hébergement São Tomé (7 nuits)", en: "Accommodation in São Tomé (7 nights)", es: "Alojamiento en Santo Tomé (7 noches)", de: "Unterkunft São Tomé (7 Nächte)" }, amount: "700–1 200 €" },
            { label: { fr: "Vol A/R + hébergement Príncipe (3 nuits)", en: "Return flight + accommodation in Príncipe (3 nights)", es: "Vuelo ida y vuelta + alojamiento en Príncipe (3 noches)", de: "Rückflug + Unterkunft Príncipe (3 Nächte)" }, amount: "700–1 200 €" },
            { label: { fr: "Location 4x4", en: "4x4 rental", es: "Alquiler de 4x4", de: "4x4-Vermietung" }, amount: "350–600 €" },
            { label: { fr: "Nourriture & activités", en: "Food & activities", es: "Comida y actividades", de: "Essen und Aktivitäten" }, amount: "500–900 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~9h via Lisbonne (TAP Air Portugal + STP Airways) ou via Douala/Libreville", en: "~9h via Lisbon (TAP Air Portugal + STP Airways) or via Douala/Libreville", es: "~9h vía Lisboa (TAP Air Portugal + STP Airways) o vía Duala/Libreville", de: "ca. 9 Std. über Lissabon (TAP Air Portugal + STP Airways) oder über Douala/Libreville" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée gratuit pour ressortissants français (30 jours). Vérifier avant départ.", en: "Free visa on arrival for French citizens (30 days). Check before departure.", es: "Visado gratuito a la llegada para ciudadanos de la UE (30 días). Verificar antes de partir.", de: "Kostenloses Visum bei der Ankunft für französische Staatsangehörige (30 Tage). Überprüfen Sie dies vor der Abreise." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dobra (STN). Euros acceptés dans les hôtels et restaurants. Espèces pour les locaux.", en: "Dobra (STN). Euros accepted in hotels and restaurants. Cash for locals.", es: "Dobra (STN). Euros aceptados en hoteles y restaurantes. Efectivo para gastos locales.", de: "Dobra (STN). Euro werden in Hotels und Restaurants akzeptiert. Bargeld für Einheimische." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Portugais (officiel) — utile de connaître quelques mots. Créole local entre habitants.", en: "Portuguese (official) — useful to know a few words. Local Creole among residents.", es: "Portugués (oficial) — útil conocer algunas palabras. Criollo local entre los habitantes.", de: "Portugiesisch (offiziell) – nützlich, um ein paar Wörter zu kennen. Lokales Kreol unter den Bewohnern." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 220V.", en: "Type C/F (European) — 220V.", es: "Tipo C/F (europeo) — 220V.", de: "Typ C/F (europäisch) – 220 V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune recommandé. Antipaludéen indispensable (Malarone). Hépatites recommandées.", en: "Yellow fever vaccine recommended. Antimalarial essential (Malarone). Hepatitis vaccines recommended.", es: "Se recomienda vacuna contra la fiebre amarilla. Antipalúdico indispensable (Malarone). Se recomiendan vacunas de hepatitis.", de: "Gelbfieberimpfung empfohlen. Essentielles Malariamittel (Malarone). Hepatitis empfohlen." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential.", es: "No potable — agua embotellada indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Couverture 4G correcte à São Tomé ville. Forêts et Príncipe : réseau très limité. SIM locale CST.", en: "Decent 4G coverage in São Tomé city. Forests and Príncipe: very limited network. Local CST SIM.", es: "Cobertura 4G correcta en la ciudad de Santo Tomé. Bosques y Príncipe: red muy limitada. SIM local CST.", de: "Gute 4G-Abdeckung in der Stadt São Tomé. Wälder und Príncipe: sehr begrenztes Netz. Lokale CST-SIM." } },
  ],
};
