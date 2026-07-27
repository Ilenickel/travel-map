export const MALI = {
  code: "MLI",
  numericId: 466,
  name: { fr: "Mali", en: "Mali", es: "Malí", de: "Mali" },
  emoji: "🇲🇱",
  capital: { fr: "Bamako", en: "Bamako", es: "Bamako", de: "Bamako" },
  language: { fr: "Français, Bambara, Peul, Dogon, Tamachek", en: "French, Bambara, Fula, Dogon, Tamasheq", es: "Francés, bambara, fula, dogón, tamasheq", de: "Französisch, Bambara, Fulani, Dogon, Tamachek" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA Franc (XOF)", es: "Franco CFA (XOF)", de: "CFA-Franc (XOF)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  criteria: {
    unesco: 3,
    nature: 1,
    randonnee: 1,
    gastronomie: 1,
    architecture: 2,
    desert: 2,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 0,
  },
  description: {
    fr: "Le Mali abrite certains des sites les plus fascinants d'Afrique : Tombouctou la légendaire cité du désert (UNESCO), les falaises de Bandiagara pays Dogon (UNESCO), la mosquée de Djenné en banco (la plus grande au monde, UNESCO), et Bamako capitale musicale avec le blues du désert Touareg. Attention : situation sécuritaire extrêmement dégradée depuis 2012 — le voyage au Mali est déconseillé sauf zones très limitées.", en: "Mali is home to some of Africa's most fascinating sites: Timbuktu, the legendary desert city (UNESCO), the Bandiagara cliffs of Dogon country (UNESCO), the mud-brick Great Mosque of Djenné (the largest in the world, UNESCO), and Bamako, a musical capital known for Tuareg desert blues. Warning: the security situation has been extremely degraded since 2012 — travel to Mali is discouraged except in very limited areas.", es: "Malí alberga algunos de los sitios más fascinantes de África: Tombuctú, la legendaria ciudad del desierto (UNESCO), los acantilados de Bandiagara en el país dogón (UNESCO), la mezquita de barro de Djenné (la más grande del mundo, UNESCO), y Bamako, capital musical con el blues del desierto tuareg. Atención: la situación de seguridad se ha deteriorado enormemente desde 2012 — se desaconseja viajar a Malí salvo en zonas muy limitadas.", de: "Mali beherbergt einige der faszinierendsten Orte Afrikas: Timbuktu, die legendäre Wüstenstadt (UNESCO), die Klippen von Bandiagara, Dogon-Land (UNESCO), die Djenné-Moschee in Banco (die größte der Welt, UNESCO) und Bamako, die Musikhauptstadt mit dem Tuareg-Wüstenblues. Warnung: Extrem verschlechterte Sicherheitslage seit 2012 – Reisen nach Mali werden außer in sehr begrenzten Gebieten nicht empfohlen.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero", de: "November – Februar" },
      label: { fr: "Saison sèche et fraîche", en: "Cool dry season", es: "Estación seca y fresca", de: "Trockene und kühle Jahreszeit" },
      color: "#22c55e",
      description: {
        fr: "Seule période praticable pour le tourisme : harmattan frais (20–32°C), ciel dégagé. Pays Dogon accessible. Températures nocturnes fraîches dans le nord.", en: "The only period practical for tourism: cool harmattan winds (20–32°C), clear skies. Dogon country is accessible. Cool nighttime temperatures in the north.", es: "Único período practicable para el turismo: harmatán fresco (20–32°C), cielo despejado. El país dogón es accesible. Temperaturas nocturnas frescas en el norte.", de: "Einzig praktikabler Zeitraum für den Tourismus: kühles Harmattan (20–32 °C), klarer Himmel. Barrierefreies Dogon-Land. Kühle Nachttemperaturen im Norden.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Juin", en: "March – June", es: "Marzo – Junio", de: "März – Juni" },
      label: { fr: "Saison chaude", en: "Hot season", es: "Estación calurosa", de: "Heiße Jahreszeit" },
      color: "#f59e0b",
      description: {
        fr: "Températures extrêmes (38–46°C), vents de sable. Déconseillé pour le confort et les activités de plein air.", en: "Extreme temperatures (38–46°C), sandstorms. Not advisable for comfort or outdoor activities.", es: "Temperaturas extremas (38–46°C), tormentas de arena. No recomendable por el confort ni para actividades al aire libre.", de: "Extreme Temperaturen (38–46°C), sandige Winde. Nicht für Komfort und Outdoor-Aktivitäten empfohlen.",
      },
      icon: "🌡️",
    },
    {
      months: { fr: "Juillet – Octobre", en: "July – October", es: "Julio – Octubre", de: "Juli – Oktober" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias", de: "Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "Pluies au sud (100–200mm/mois), nord désertique. Routes souvent impraticables. Nord toujours chaud.", en: "Rain in the south (100–200mm/month), the north remains desert. Roads are often impassable. The north stays hot.", es: "Lluvias en el sur (100–200mm/mes), norte desértico. Carreteras a menudo intransitables. El norte sigue caluroso.", de: "Regenfälle im Süden (100–200 mm/Monat), in der Wüste im Norden. Straßen oft unpassierbar. Im Norden ist es immer heiß.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "bamako",
      name: "Bamako",
      region: { fr: "Capitale (sud-ouest)", en: "Capital (southwest)", es: "Capital (suroeste)", de: "Hauptstadt (Südwesten)" },
      data: [
        { month: "Jan", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Mar", temp: 32, rain: 5,   icon: "🌡️" },
        { month: "Avr", temp: 35, rain: 10,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 230, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 24, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "timbuktu",
      name: { fr: "Tombouctou", en: "Timbuktu", es: "Tombuctú", de: "Timbuktu" },
      region: { fr: "Tombouctou (nord)", en: "Timbuktu (north)", es: "Tombuctú (norte)", de: "Timbuktu (Norden)" },
      data: [
        { month: "Jan", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Avr", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 40, rain: 5,   icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 10,  icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 30,  icon: "🌡️" },
        { month: "Aoû", temp: 35, rain: 60,  icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 30,  icon: "🌡️" },
        { month: "Oct", temp: 34, rain: 5,   icon: "🌡️" },
        { month: "Nov", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Déc", temp: 23, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Pays Dogon — Falaises de Bandiagara", en: "Dogon Country — Bandiagara Escarpment", es: "País dogón — Acantilados de Bandiagara", de: "Dogon-Land – Bandiagara-Klippen" },
      region: "Mopti",
      description: {
        fr: "Les falaises de Bandiagara (UNESCO) sont l'un des sites les plus spectaculaires d'Afrique : 150km de falaises de grès rouge où s'accrochent les villages Dogon, leurs greniers à mil en banco, et les cases funéraires des Tellem perchées dans la roche. La cosmogonie Dogon, préservée depuis des siècles, est l'une des plus complexes et poétiques du monde.", en: "The Bandiagara Escarpment (UNESCO) is one of Africa's most spectacular sites: 150km of red sandstone cliffs where Dogon villages cling to the rock, along with their mud-brick millet granaries and the Tellem funerary huts perched in the cliffside. Dogon cosmogony, preserved for centuries, is one of the most complex and poetic in the world.", es: "Los acantilados de Bandiagara (UNESCO) son uno de los sitios más espectaculares de África: 150 km de acantilados de arenisca roja donde se aferran los pueblos dogón, sus graneros de mijo de barro y las cabañas funerarias tellem encaramadas en la roca. La cosmogonía dogón, preservada durante siglos, es una de las más complejas y poéticas del mundo.", de: "Die Bandiagara-Klippen (UNESCO) sind eine der spektakulärsten Stätten Afrikas: 150 km rote Sandsteinklippen, an denen die Dogon-Dörfer hängen, ihre Hirsespeicher aus Banco und die im Felsen thronenden Tellem-Grabhütten. Die über Jahrhunderte erhaltene Dogon-Kosmogonie ist eine der komplexesten und poetischsten der Welt.",
      },
      wikipedia: "Bandiagara_Escarpment",
      tags: ["UNESCO", "Culture", "Nature"],
      mustSee: [
        { name: { fr: "Village de Sangha — porte d'entrée du pays Dogon", en: "Sangha village — gateway to Dogon country", es: "Pueblo de Sangha — puerta de entrada al país dogón", de: "Dorf Sangha – Tor zum Dogon-Land" }, wikipedia: "File:ASangha 03.JPG" },
        { name: { fr: "Cases Tellem dans les falaises (XIIe–XVe s.)", en: "Tellem huts in the cliffs (12th–15th c.)", es: "Cabañas tellem en los acantilados (siglos XII–XV)", de: "Tellem-Hütten in den Klippen (12.–15. Jahrhundert)" }, wikipedia: "Tellem" },
        { name: { fr: "Trek entre villages accrochés aux falaises (2–5 jours)", en: "Trek between cliffside villages (2–5 days)", es: "Trekking entre pueblos aferrados a los acantilados (2–5 días)", de: "Wanderung zwischen Dörfern an Klippen (2–5 Tage)" }, wikipedia: "Bandiagara_Escarpment" },
      ],
    },
    {
      id: 2,
      name: { fr: "Djenné — Mosquée en banco", en: "Djenné — Mud-Brick Mosque", es: "Djenné — Mezquita de barro", de: "Djenné – Banco-Moschee" },
      region: "Mopti",
      description: {
        fr: "La Grande Mosquée de Djenné (UNESCO) est la plus grande construction en banco (argile et paille) du monde et le symbole de l'architecture soudano-sahélienne. Reconstruite en 1907 sur les fondations d'une mosquée du XIIIe siècle, elle est entretenue chaque année par toute la communauté lors de la grande crépissage. Le marché du lundi autour de la mosquée est l'un des plus beaux d'Afrique.", en: "The Great Mosque of Djenné (UNESCO) is the largest mud-brick (clay and straw) structure in the world and the symbol of Sudano-Sahelian architecture. Rebuilt in 1907 on the foundations of a 13th-century mosque, it is re-plastered every year by the whole community during the great replastering festival. The Monday market around the mosque is one of the finest in Africa.", es: "La Gran Mezquita de Djenné (UNESCO) es la mayor construcción de barro (arcilla y paja) del mundo y el símbolo de la arquitectura sudanosaheliana. Reconstruida en 1907 sobre los cimientos de una mezquita del siglo XIII, toda la comunidad la restaura cada año durante el gran enlucido. El mercado de los lunes alrededor de la mezquita es uno de los más hermosos de África.", de: "Die Große Moschee von Djenné (UNESCO) ist das größte Banco-Bauwerk (aus Lehm und Stroh) der Welt und das Symbol der sudanesisch-sahelischen Architektur. Sie wurde 1907 auf den Fundamenten einer Moschee aus dem 13. Jahrhundert wieder aufgebaut und wird jedes Jahr während der großen Verputzarbeiten von der gesamten Gemeinde instand gehalten. Der Montagsmarkt rund um die Moschee ist einer der schönsten in Afrika.",
      },
      wikipedia: "Great_Mosque_of_Djenné",
      tags: ["UNESCO", "Architecture", "Shopping"],
      mustSee: [
        { name: { fr: "Grande Mosquée de Djenné (UNESCO) — la plus grande en banco du monde", en: "Great Mosque of Djenné (UNESCO) — the largest mud-brick building in the world", es: "Gran Mezquita de Djenné (UNESCO) — la mayor construcción de barro del mundo", de: "Große Moschee von Djenné (UNESCO) – die größte Steinmoschee der Welt" }, wikipedia: "Great_Mosque_of_Djenné" },
        { name: { fr: "Marché du lundi de Djenné — autour de la mosquée", en: "Djenné Monday market — around the mosque", es: "Mercado de los lunes de Djenné — alrededor de la mezquita", de: "Montagsmarkt in Djenné – rund um die Moschee" }, wikipedia: "Djenné" },
        { name: { fr: "Île de Djenné — cité médiévale entourée de fleuves", en: "Djenné Island — medieval city surrounded by rivers", es: "Isla de Djenné — ciudad medieval rodeada de ríos", de: "Insel Djenné – mittelalterliche Stadt, umgeben von Flüssen" }, wikipedia: "File:Djenne Ferry (6861649).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Tombouctou — La cité mystérieuse", en: "Timbuktu — The Mysterious City", es: "Tombuctú — La ciudad misteriosa", de: "Timbuktu – Die geheimnisvolle Stadt" },
      region: { fr: "Tombouctou", en: "Timbuktu", es: "Tombuctú", de: "Timbuktu" },
      description: {
        fr: "Tombouctou (UNESCO) fut aux XIVe–XVIe siècles la capitale intellectuelle et spirituelle de l'Afrique de l'Ouest : 25 000 étudiants, 180 écoles coraniques, des manuscrits anciens de valeur inestimable. Ses mosquées Djingareyber, Sankore et Sidi Yahia (UNESCO) et ses maisons à portails sculptés témoignent de cet âge d'or. Accessible uniquement par vol depuis Bamako actuellement.", en: "In the 14th–16th centuries, Timbuktu (UNESCO) was the intellectual and spiritual capital of West Africa: 25,000 students, 180 Quranic schools, and priceless ancient manuscripts. Its Djingareyber, Sankore and Sidi Yahia mosques (UNESCO) and houses with carved doorways bear witness to this golden age. Currently accessible only by flight from Bamako.", es: "Tombuctú (UNESCO) fue, entre los siglos XIV y XVI, la capital intelectual y espiritual de África Occidental: 25.000 estudiantes, 180 escuelas coránicas, manuscritos antiguos de valor incalculable. Sus mezquitas de Djingareyber, Sankore y Sidi Yahia (UNESCO) y sus casas con portales tallados dan testimonio de esta edad de oro. Actualmente solo es accesible por vuelo desde Bamako.", de: "Timbuktu (UNESCO) war im 14.–16. Jahrhundert die intellektuelle und spirituelle Hauptstadt Westafrikas: 25.000 Studenten, 180 Koranschulen, alte Manuskripte von unschätzbarem Wert. Die Djingareyber-, Sankore- und Sidi-Yahia-Moscheen (UNESCO) und ihre Häuser mit geschnitzten Portalen zeugen von diesem goldenen Zeitalter. Derzeit nur per Flug von Bamako aus erreichbar.",
      },
      wikipedia: "Timbuktu",
      tags: ["UNESCO", "Désert", "Histoire"],
      mustSee: [
        { name: { fr: "Mosquée Djingareyber (XIVe s., UNESCO)", en: "Djingareyber Mosque (14th c., UNESCO)", es: "Mezquita de Djingareyber (siglo XIV, UNESCO)", de: "Djingareyber-Moschee (14. Jahrhundert, UNESCO)" }, wikipedia: "Djinguereber_Mosque" },
        { name: { fr: "Mosquée Sankore (XIVe s., UNESCO) — ancienne université", en: "Sankore Mosque (14th c., UNESCO) — former university", es: "Mezquita de Sankore (siglo XIV, UNESCO) — antigua universidad", de: "Sankore-Moschee (14. Jahrhundert, UNESCO) – ehemalige Universität" }, wikipedia: "File:Timbuktu Mosque Sankore.jpg" },
        { name: { fr: "Manuscrits anciens de Tombouctou (Ahmed Baba Institute)", en: "Ancient Timbuktu manuscripts (Ahmed Baba Institute)", es: "Manuscritos antiguos de Tombuctú (Instituto Ahmed Baba)", de: "Alte Manuskripte aus Timbuktu (Ahmed-Baba-Institut)" }, wikipedia: "Ahmed_Baba_Institute" },
        { name: { fr: "Coucher de soleil sur le Sahara depuis les dunes", en: "Sunset over the Sahara from the dunes", es: "Atardecer sobre el Sahara desde las dunas", de: "Sonnenuntergang über der Sahara von den Dünen aus" }, wikipedia: "Timbuktu" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Mali est abordable mais la situation sécuritaire a rendu le tourisme très difficile. Les circuits se limitent à Bamako et ses environs pour la plupart des voyageurs actuels. Le franc CFA arrimé à l'euro facilite le budget.", en: "Mali is affordable, but the security situation has made tourism very difficult. Itineraries are currently limited to Bamako and its surroundings for most travellers. The CFA franc, pegged to the euro, makes budgeting easier.", es: "Malí es asequible, pero la situación de seguridad ha dificultado enormemente el turismo. Los circuitos se limitan actualmente a Bamako y sus alrededores para la mayoría de los viajeros. El franco CFA, vinculado al euro, facilita la gestión del presupuesto.", de: "Mali ist erschwinglich, aber die Sicherheitslage hat den Tourismus sehr erschwert. Für die meisten aktuellen Reisenden sind die Touren auf Bamako und Umgebung beschränkt. Der an den Euro gekoppelte CFA-Franc erleichtert den Haushalt.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / campement", en: "Guesthouse / camp", es: "Guesthouse / campamento", de: "Gästehaus/Lager" }, price: "15–35 €", detail: { fr: "Simple, avec ou sans clim", en: "Simple, with or without air conditioning", es: "Sencillo, con o sin aire acondicionado", de: "Einfach, mit oder ohne Klimaanlage" } },
          { label: { fr: "Hôtel 3★ Bamako", en: "3★ hotel in Bamako", es: "Hotel 3★ en Bamako", de: "Hotel 3★ Bamako" }, price: "55–90 €", detail: { fr: "Clim, sécurité, wifi", en: "Air conditioning, security, wifi", es: "Aire acondicionado, seguridad, wifi", de: "Klimaanlage, Sicherheit, WLAN" } },
          { label: { fr: "Hôtel de luxe Bamako (Radisson, Azalaï)", en: "Luxury hotel in Bamako (Radisson, Azalaï)", es: "Hotel de lujo en Bamako (Radisson, Azalaï)", de: "Luxushotel Bamako (Radisson, Azalaï)" }, price: "130–200 €", detail: { fr: "Standard international", en: "International standard", es: "Estándar internacional", de: "Internationaler Standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Tô / riz au poisson dans un gargote", en: "Tô / fish and rice at a local eatery", es: "Tô / arroz con pescado en un puesto local", de: "Tô / Fischreis in einem Restaurant" }, price: "1–3 €", detail: { fr: "Cuisine locale typique", en: "Typical local cuisine", es: "Cocina local típica", de: "Typische lokale Küche" } },
          { label: { fr: "Restaurant mid-range Bamako", en: "Mid-range restaurant in Bamako", es: "Restaurante de gama media en Bamako", de: "Mittelklasserestaurant Bamako" }, price: "8–18 €", detail: { fr: "Grillades, plats traditionnels", en: "Grilled dishes, traditional meals", es: "Parrilladas, platos tradicionales", de: "Grillgerichte, traditionelle Gerichte" } },
          { label: { fr: "Restaurant hôtel Bamako", en: "Hotel restaurant in Bamako", es: "Restaurante de hotel en Bamako", de: "Restauranthotel Bamako" }, price: "20–40 €", detail: { fr: "Cuisine internationale sécurisée", en: "Secure international cuisine", es: "Cocina internacional en entorno seguro", de: "Sichere internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Sotrama / taxi-brousse", en: "Sotrama / bush taxi", es: "Sotrama / taxi rural", de: "Sotrama / Buschtaxi" }, price: "0,20–2 €", detail: { fr: "Transport local selon trajet", en: "Local transport depending on route", es: "Transporte local según el trayecto", de: "Lokaler Transport je nach Route" } },
          { label: { fr: "Vol intérieur Bamako–Tombouctou", en: "Domestic flight Bamako–Timbuktu", es: "Vuelo interior Bamako–Tombuctú", de: "Inlandsflug Bamako–Timbuktu" }, price: "100–200 €", detail: { fr: "Seule option sûre pour Tombouctou", en: "Only safe option to reach Timbuktu", es: "Única opción segura para llegar a Tombuctú", de: "Einzig sichere Option für Timbuktu" } },
          { label: { fr: "4x4 avec chauffeur-guide (journée)", en: "4x4 with driver-guide (day)", es: "4x4 con chófer-guía (día)", de: "4x4 mit Fahrer-Guide (Tag)" }, price: "80–150 €", detail: { fr: "Indispensable pays Dogon", en: "Essential for Dogon country", es: "Indispensable para el país dogón", de: "Unverzichtbares Dogon-Land" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Trek pays Dogon (guide obligatoire, 3 jours)", en: "Dogon country trek (guide mandatory, 3 days)", es: "Trekking en el país dogón (guía obligatorio, 3 días)", de: "Dogon-Landwanderung (obligatorischer Führer, 3 Tage)" }, price: "80–150 €", detail: { fr: "Guide + hébergement campement", en: "Guide + camp accommodation", es: "Guía + alojamiento en campamento", de: "Reiseführer + Camp-Unterkunft" } },
          { label: { fr: "Balade en pinasse sur le Niger", en: "Pinasse boat ride on the Niger", es: "Paseo en pinasse por el río Níger", de: "Pinassenfahrt auf dem Niger" }, price: "30–80 €", detail: { fr: "Depuis Mopti ou Djenné", en: "From Mopti or Djenné", es: "Desde Mopti o Djenné", de: "Von Mopti oder Djenné" } },
          { label: { fr: "Concert à l'Espace Bouna (Bamako)", en: "Concert at Espace Bouna (Bamako)", es: "Concierto en el Espace Bouna (Bamako)", de: "Konzert im Espace Bouna (Bamako)" }, price: "5–15 €", detail: { fr: "Blues du désert, balafon", en: "Desert blues, balafon", es: "Blues del desierto, balafón", de: "Wüstenblues, Balafon" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–70 €/j", desc: { fr: "Guesthouse + cuisine locale + transport commun", en: "Guesthouse + local food + public transport", es: "Guesthouse + comida local + transporte público", de: "Gästehaus + lokale Küche + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "90–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + guide + 4x4", en: "3★ hotel + restaurants + guide + 4x4", es: "Hotel 3★ + restaurantes + guía + 4x4", de: "3★ Hotel + Restaurants + Reiseführer + 4x4" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "Bamako (3j) → Ségou (2j) → Djenné (2j) → Mopti (1j) → Pays Dogon (4j)", en: "Bamako (3d) → Ségou (2d) → Djenné (2d) → Mopti (1d) → Dogon Country (4d)", es: "Bamako (3d) → Ségou (2d) → Djenné (2d) → Mopti (1d) → País dogón (4d)", de: "Bamako (3 Tage) → Ségou (2 Tage) → Djenné (2 Tage) → Mopti (1 Tage) → Dogon-Land (4 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bamako", en: "Return flight Paris–Bamako", es: "Vuelo ida y vuelta París–Bamako", de: "Hin- und Rückflug Paris–Bamako" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "250–450 €" },
            { label: { fr: "Transports locaux + pinasse", en: "Local transport + pinasse boat", es: "Transporte local + pinasse", de: "Nahverkehr + Pinasse" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "180–300 €" },
            { label: { fr: "Guides & activités", en: "Guides & activities", es: "Guías y actividades", de: "Führer und Aktivitäten" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bamako", en: "Return flight Paris–Bamako", es: "Vuelo ida y vuelta París–Bamako", de: "Hin- und Rückflug Paris–Bamako" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "800–1 200 €" },
            { label: { fr: "4x4 + chauffeur-guide", en: "4x4 + driver-guide", es: "4x4 con chófer-guía", de: "4x4 + Fahrerführer" }, amount: "700–1 000 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Vols intérieurs + activités", en: "Domestic flights + activities", es: "Vuelos interiores y actividades", de: "Inlandsflüge + Aktivitäten" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~5h30 direct (Air France, Air Mali) ou via Casablanca (Royal Air Maroc)", en: "~5h30 direct (Air France, Air Mali) or via Casablanca (Royal Air Maroc)", es: "~5h30 directo (Air France, Air Mali) o vía Casablanca (Royal Air Maroc)", de: "ca. 5 Std. 30 Min. direkt (Air France, Air Mali) oder über Casablanca (Royal Air Maroc)" } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Security", es: "Seguridad", de: "Sicherheit" }, value: { fr: "AVERTISSEMENT MAJEUR : quasiment tout le pays est en zone rouge (déconseillé). Bamako en zone orange. Consulter impérativement Diplomatie.gouv.fr avant tout projet.", en: "MAJOR WARNING: almost the entire country is a red zone (travel advised against). Bamako is an orange zone. Be sure to check your government's travel advisory before planning any trip.", es: "ADVERTENCIA IMPORTANTE: prácticamente todo el país está en zona roja (viaje desaconsejado). Bamako está en zona naranja. Es imprescindible consultar las recomendaciones oficiales de viaje antes de planificar cualquier desplazamiento.", de: "WICHTIGE WARNUNG: Fast das gesamte Land befindet sich in der roten Zone (nicht empfohlen). Bamako in der orangen Zone. Es ist wichtig, vor jedem Projekt Diplomatie.gouv.fr zu konsultieren." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — ambassade de Mali à Paris. Procédures variables, vérifier avant départ.", en: "Visa required — Malian embassy in Paris. Procedures vary, check before departure.", es: "Visado obligatorio — embajada de Malí. Los trámites varían, comprobar antes de partir.", de: "Visum erforderlich – malische Botschaft in Paris. Variable Abläufe, vor Abflug prüfen." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces indispensables.", en: "CFA Franc (XOF). 1€ = 655 XOF fixed rate. Cash is essential.", es: "Franco CFA (XOF). 1€ = 655 XOF tipo fijo. El efectivo es indispensable.", de: "CFA-Franc (XOF). 1€ = 655 XOF Festpreis. Wesentliche Arten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français (officiel) + Bambara (langue véhiculaire nationale).", en: "French (official) + Bambara (national lingua franca).", es: "Francés (oficial) + bambara (lengua vehicular nacional).", de: "Französisch (offiziell) + Bambara (nationale Fahrzeugsprache)." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V.", es: "Tipo C/E (europeo) — 220V.", de: "Typ C/E (europäisch) – 220 V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Méningite recommandé.", en: "Yellow fever vaccine mandatory. Antimalarials essential. Meningitis vaccine recommended.", es: "Vacuna contra la fiebre amarilla obligatoria. Antipalúdico indispensable. Se recomienda la vacuna contra la meningitis.", de: "Gelbfieberimpfung erforderlich. Unverzichtbares Malariamittel. Meningitis empfohlen." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential.", es: "No potable — el agua embotellada es indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
  ],
};
