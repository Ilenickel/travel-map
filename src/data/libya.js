export const LIBYA = {
  code: "LBY",
  numericId: 434,
  name: { fr: "Libye", en: "Libya", es: "Libia", de: "Libyen" },
  emoji: "🇱🇾",
  capital: { fr: "Tripoli", en: "Tripoli", es: "Trípoli", de: "Tripolis" },
  language: { fr: "Arabe", en: "Arabic", es: "Árabe", de: "Arabisch" },
  currency: { fr: "Dinar libyen (LYD)", en: "Libyan Dinar (LYD)", es: "Dinar libio (LYD)", de: "Libyscher Dinar (LYD)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 2000, tripMid: 4000,
  },
  criteria: {
    unesco: 3,
    nature: 1,
    randonnee: 1,
    gastronomie: 1,
    architecture: 2,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
    plongee: 1,
  },
  description: {
    fr: "La Libye abrite certains des sites antiques les mieux conservés du monde méditerranéen : Leptis Magna (UNESCO), la cité romaine la plus complète d'Afrique, Sabratha avec son théâtre sur la Méditerranée, et Cyrène la cité grecque (UNESCO). Le Fezzan et ses dunes du Sahara (oasis de Ghadamès, UNESCO) complètent un pays d'une richesse archéologique stupéfiante. Situation sécuritaire très instable — voyage déconseillé.", en: "Libya is home to some of the best-preserved ancient sites in the Mediterranean world: Leptis Magna (UNESCO), Africa's most complete Roman city, Sabratha with its theatre facing the Mediterranean, and Cyrene, the Greek city (UNESCO). The Fezzan and its Sahara dunes (Ghadamès oasis, UNESCO) complete a country of astonishing archaeological wealth. Security situation is highly unstable — travel is discouraged.", es: "Libia alberga algunos de los sitios antiguos mejor conservados del mundo mediterráneo: Leptis Magna (UNESCO), la ciudad romana más completa de África, Sabratha con su teatro frente al Mediterráneo, y Cirene, la ciudad griega (UNESCO). El Fezzan y sus dunas del Sáhara (oasis de Ghadamés, UNESCO) completan un país de una riqueza arqueológica asombrosa. Situación de seguridad muy inestable — se desaconseja viajar.", de: "Libyen beherbergt einige der am besten erhaltenen antiken Stätten im Mittelmeerraum: Leptis Magna (UNESCO), die vollständigste römische Stadt Afrikas, Sabratha mit seinem Theater am Mittelmeer und die griechische Stadt Kyrene (UNESCO). Fezzan und seine Sahara-Dünen (Oase Ghadames, UNESCO) vervollständigen ein Land mit erstaunlichem archäologischem Reichtum. Sehr instabile Sicherheitslage – Reisen nicht empfohlen.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April", es: "Octubre – Abril", de: "Oktober – April" },
      label: { fr: "Période la moins chaude", en: "Coolest period", es: "Periodo menos caluroso", de: "Coolste Zeit" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables sur la côte (15–25°C). Meilleure période pour visiter les sites antiques. Désert supportable de novembre à mars (10–20°C).", en: "Pleasant coastal temperatures (15–25°C). The best time to visit the ancient sites. Desert bearable from November to March (10–20°C).", es: "Temperaturas agradables en la costa (15–25°C). Mejor época para visitar los sitios antiguos. Desierto soportable de noviembre a marzo (10–20°C).", de: "Angenehme Temperaturen an der Küste (15–25°C). Beste Zeit, um antike Stätten zu besuchen. Wüste erträglich von November bis März (10–20°C).",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Été méditerranéen et désertique", en: "Mediterranean and desert summer", es: "Verano mediterráneo y desértico", de: "Mittelmeer- und Wüstensommer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur extrême sur la côte (35–40°C) et dans le désert (45–50°C). Ghibli (vent de sable brûlant) fréquent. Déconseillé.", en: "Extreme heat on the coast (35–40°C) and in the desert (45–50°C). Frequent ghibli (scorching sandy wind). Not recommended.", es: "Calor extremo en la costa (35–40°C) y en el desierto (45–50°C). Ghibli (viento de arena abrasador) frecuente. No recomendado.", de: "Extreme Hitze an der Küste (35–40°C) und in der Wüste (45–50°C). Ghibli (brennender Sandwind) kommt häufig vor. Nicht empfohlen.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "tripoli",
      name: "Tripoli",
      region: { fr: "Tripolitaine (côte)", en: "Tripolitania (coast)", es: "Tripolitania (costa)", de: "Tripolitanien (Küste)" },
      data: [
        { month: "Jan", temp: 12, rain: 55,  icon: "⛅" },
        { month: "Fév", temp: 13, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 22, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 17, rain: 40,  icon: "⛅" },
        { month: "Déc", temp: 13, rain: 50,  icon: "⛅" },
      ],
    },
    {
      id: "sebha",
      name: "Sebha",
      region: { fr: "Fezzan (désert)", en: "Fezzan (desert)", es: "Fezzan (desierto)", de: "Fezzan (Wüste)" },
      data: [
        { month: "Jan", temp: 13, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 17, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 0,  icon: "⛅" },
        { month: "Mai", temp: 33, rain: 0,  icon: "🌡️" },
        { month: "Jun", temp: 37, rain: 0,  icon: "🌡️" },
        { month: "Jul", temp: 39, rain: 0,  icon: "🌡️" },
        { month: "Aoû", temp: 38, rain: 0,  icon: "🌡️" },
        { month: "Sep", temp: 34, rain: 0,  icon: "🌡️" },
        { month: "Oct", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Nov", temp: 20, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 14, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Leptis Magna — La Rome d'Afrique", en: "Leptis Magna — The Rome of Africa", es: "Leptis Magna — La Roma de África", de: "Leptis Magna – Das Rom Afrikas" },
      region: { fr: "Tripolitaine", en: "Tripolitania", es: "Tripolitania", de: "Tripolitanien" },
      description: {
        fr: "Leptis Magna (UNESCO) est l'un des sites romains les mieux conservés du monde : des forums, thermes, arcs de triomphe, un amphithéâtre et un théâtre pratiquement intacts sous le sable libyen. Ville natale de l'empereur Septime Sévère qui la transforma en une cité de marbre au IIe siècle. Un spectacle archéologique sans équivalent.", en: "Leptis Magna (UNESCO) is one of the best-preserved Roman sites in the world: forums, baths, triumphal arches, an amphitheatre and a theatre practically intact beneath the Libyan sand. The birthplace of Emperor Septimius Severus, who transformed it into a city of marble in the 2nd century. An archaeological spectacle without equal.", es: "Leptis Magna (UNESCO) es uno de los sitios romanos mejor conservados del mundo: foros, termas, arcos de triunfo, un anfiteatro y un teatro prácticamente intactos bajo la arena libia. Ciudad natal del emperador Septimio Severo, que la transformó en una ciudad de mármol en el siglo II. Un espectáculo arqueológico sin igual.", de: "Leptis Magna (UNESCO) ist eine der am besten erhaltenen römischen Stätten der Welt: Foren, Bäder, Triumphbögen, ein Amphitheater und ein Theater, das praktisch intakt unter dem libyschen Sand liegt. Geburtsort des Kaisers Septimius Severus, der es im 2. Jahrhundert in eine Stadt aus Marmor verwandelte. Ein archäologisches Spektakel, das seinesgleichen sucht.",
      },
      wikipedia: "Leptis_Magna",
      tags: ["UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Forum de Septime Sévère et arc de triomphe", en: "Forum of Septimius Severus and triumphal arch", es: "Foro de Septimio Severo y arco de triunfo", de: "Forum des Septimius Severus und Triumphbogen" }, wikipedia: "File:00IMGL4379.jpg" },
        { name: { fr: "Théâtre romain de Leptis Magna (IIe s.)", en: "Roman theatre of Leptis Magna (2nd c.)", es: "Teatro romano de Leptis Magna (s. II)", de: "Römisches Theater von Leptis Magna (2. Jahrhundert)" }, wikipedia: "File:Leptis_Magna_Theatre.jpg" },
        { name: { fr: "Amphithéâtre et bassin du port romain", en: "Amphitheatre and Roman harbour basin", es: "Anfiteatro y dársena del puerto romano", de: "Amphitheater und Becken des römischen Hafens" }, wikipedia: "File:Leptis_Magna_amphitheatre_-_panoramio.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Sabratha — Théâtre sur la Méditerranée", en: "Sabratha — Theatre on the Mediterranean", es: "Sabratha — Teatro frente al Mediterráneo", de: "Sabratha – Theater am Mittelmeer" },
      region: { fr: "Tripolitaine", en: "Tripolitania", es: "Tripolitania", de: "Tripolitanien" },
      description: {
        fr: "Sabratha (UNESCO) est une ancienne cité phénicienne et romaine dont le théâtre, avec sa façade à trois étages de colonnes donnant directement sur la Méditerranée, est l'un des plus beaux du monde antique. Funduk central avec mosaïques et forum préservés.", en: "Sabratha (UNESCO) is an ancient Phoenician and Roman city whose theatre, with its three-tiered colonnaded façade facing directly onto the Mediterranean, is one of the finest in the ancient world. A central funduk with preserved mosaics and a forum.", es: "Sabratha (UNESCO) es una antigua ciudad fenicia y romana cuyo teatro, con su fachada de columnas de tres niveles frente al Mediterráneo, es uno de los más bellos del mundo antiguo. Un funduk central con mosaicos y foro conservados.", de: "Sabratha (UNESCO) ist eine antike phönizische und römische Stadt, deren Theater mit seiner dreistöckigen Säulenfassade mit Blick auf das Mittelmeer zu den schönsten der Antike zählt. Zentralfunduk mit erhaltenen Mosaiken und Forum.",
      },
      wikipedia: "Sabratha",
      tags: ["UNESCO", "Histoire", "Culture", "Plage"],
      mustSee: [
        { name: { fr: "Théâtre de Sabratha (IIe s.) — façade à 3 étages sur la mer", en: "Theatre of Sabratha (2nd c.) — three-tiered façade facing the sea", es: "Teatro de Sabratha (s. II) — fachada de 3 niveles frente al mar", de: "Sabratha-Theater (2. Jahrhundert) – 3-stöckige Fassade mit Blick auf das Meer" }, wikipedia: "File:Theatre of Sabratha, Libya.jpg" },
        { name: { fr: "Temple de Liber Pater et mosaïques", en: "Temple of Liber Pater and mosaics", es: "Templo de Liber Pater y mosaicos", de: "Tempel des Liber Pater und Mosaike" }, wikipedia: "File:Triumph of liber pater2.JPG" },
        { name: { fr: "Musée archéologique de Sabratha", en: "Sabratha Archaeological Museum", es: "Museo arqueológico de Sabratha", de: "Archäologisches Museum Sabratha" }, wikipedia: "File:Roman Museum, Sabratha (68372).jpg" },
        { name: { fr: "Forum romain et basilique judiciaire", en: "Roman forum and judicial basilica", es: "Foro romano y basílica judicial", de: "Römisches Forum und Gerichtsbasilika" }, wikipedia: "File:Amphitheatre, Sabratha (50144698711).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Ghadamès — Oasis du Sahara", en: "Ghadamès — Sahara oasis", es: "Ghadamés — Oasis del Sáhara", de: "Ghadames – Oase der Sahara" },
      region: "Fezzan",
      description: {
        fr: "Ghadamès (UNESCO) est une oasis du Sahara libyen à la frontière algérienne et tunisienne : ses maisons blanches interconnectées avec des passages couverts qui permettent de circuler en ville à l'abri du soleil, ses rues labyrintiques séculaires, et son artisanat en cuir et en maroquinerie. La 'perle du désert' berbère.", en: "Ghadamès (UNESCO) is a Libyan Sahara oasis on the Algerian and Tunisian border: its interconnected white houses with covered passageways allow people to move around town sheltered from the sun, its centuries-old labyrinthine streets, and its leather craftsmanship. The Berber 'pearl of the desert'.", es: "Ghadamés (UNESCO) es un oasis del Sáhara libio en la frontera con Argelia y Túnez: sus casas blancas interconectadas por pasajes cubiertos permiten circular por la ciudad al abrigo del sol, sus centenarias calles laberínticas y su artesanía en cuero y marroquinería. La «perla del desierto» bereber.", de: "Ghadamès (UNESCO) ist eine Oase in der libyschen Sahara an der algerisch-tunesischen Grenze: seine miteinander verbundenen weißen Häuser mit überdachten Durchgängen, die es Ihnen ermöglichen, sich geschützt vor der Sonne durch die Stadt zu bewegen, seine jahrhundertealten, labyrinthischen Straßen und sein Leder- und Lederhandwerk. Die berberische „Perle der Wüste“.",
      },
      wikipedia: "Ghadames",
      tags: ["UNESCO", "Désert", "Nature", "Culture"],
      mustSee: [
        { name: { fr: "Vieille ville de Ghadamès (UNESCO) — passages couverts", en: "Old town of Ghadamès (UNESCO) — covered passageways", es: "Casco antiguo de Ghadamés (UNESCO) — pasajes cubiertos", de: "Altstadt von Ghadamès (UNESCO) – überdachte Passagen" }, wikipedia: "File:Ghadames, 2006.jpg" },
        { name: { fr: "Palmiers et jardins de l'oasis", en: "Palm trees and gardens of the oasis", es: "Palmeras y jardines del oasis", de: "Palmen und Oasengärten" }, wikipedia: "File:Ghadames - Altstadt-Palmenhain.jpg" },
        { name: { fr: "Coucher de soleil sur les dunes environnantes", en: "Sunset over the surrounding dunes", es: "Atardecer sobre las dunas circundantes", de: "Sonnenuntergang über den umliegenden Dünen" }, wikipedia: "File:Ghadames - Grosse Moschee.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Cyrène — Cité grecque de Cyrénaïque", en: "Cyrene — Greek city of Cyrenaica", es: "Cirene — Ciudad griega de Cirenaica", de: "Kyrene – griechische Stadt Cyrenaica" },
      region: { fr: "Cyrénaïque", en: "Cyrenaica", es: "Cirenaica", de: "Cyrenaica" },
      description: {
        fr: "Cyrène (UNESCO) est une colonie grecque du VIIe siècle av. J.-C., capitale de la Cyrénaïque : son temple d'Apollon (le plus grand de l'Afrique antique), la nécropole grecque taillée dans la roche, et l'agora hellénistique préservée dans un cadre montagneux spectaculaire sur les contreforts du Djebel Akhdar.", en: "Cyrene (UNESCO) is a Greek colony founded in the 7th century BC, capital of Cyrenaica: its Temple of Apollo (the largest in ancient Africa), the rock-cut Greek necropolis, and the preserved Hellenistic agora set in a spectacular mountainous landscape on the foothills of the Djebel Akhdar.", es: "Cirene (UNESCO) es una colonia griega del siglo VII a. C., capital de Cirenaica: su templo de Apolo (el más grande de la África antigua), la necrópolis griega excavada en la roca y el ágora helenística conservada en un entorno montañoso espectacular en las estribaciones del Djebel Akhdar.", de: "Kyrene (UNESCO) ist eine griechische Kolonie aus dem 7. Jahrhundert v. Chr. BC, Hauptstadt der Cyrenaica: der Apollontempel (der größte im alten Afrika), die in den Felsen gehauene griechische Nekropole und die hellenistische Agora, die in einer spektakulären Bergkulisse am Fuße des Jebel Akhdar erhalten bleibt.",
      },
      wikipedia: "Cyrene,_Libya",
      tags: ["UNESCO", "Histoire", "Montagne"],
      mustSee: [
        { name: { fr: "Temple d'Apollon de Cyrène (VIe s. av. J.-C.)", en: "Temple of Apollo at Cyrene (6th c. BC)", es: "Templo de Apolo de Cirene (s. VI a. C.)", de: "Tempel des Apollon von Kyrene (6. Jahrhundert v. Chr.)" }, wikipedia: "File:CireneTempioApollo.jpg" },
        { name: { fr: "Nécropole grecque taillée dans la roche", en: "Rock-cut Greek necropolis", es: "Necrópolis griega excavada en la roca", de: "In den Fels gehauene griechische Nekropole" }, wikipedia: "File:Exedra of Apollo Karneios, Cyrene (50144977036).jpg" },
        { name: { fr: "Agora hellénistique et forum romain", en: "Hellenistic agora and Roman forum", es: "Ágora helenística y foro romano", de: "Hellenistische Agora und Forum Romanum" }, wikipedia: "File:1Roman theater ancient Cyrene (Cyrene, Libya).jpg" },
        { name: { fr: "Vue sur la Méditerranée depuis le Djebel Akhdar", en: "View of the Mediterranean from the Djebel Akhdar", es: "Vistas al Mediterráneo desde el Djebel Akhdar", de: "Blick auf das Mittelmeer vom Jebel Akhdar" }, wikipedia: "File:8(Temple of Apollo, Cyrene, Libya).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "En temps normal (avant le conflit), la Libye était une destination abordable. Aujourd'hui, le tourisme est quasiment inexistant et les prix très variables selon les zones de contrôle. Informations données à titre indicatif pour une période de stabilité.", en: "In normal times (before the conflict), Libya was an affordable destination. Today, tourism is virtually non-existent and prices vary greatly depending on the controlling authority in each area. Figures given here are indicative, for a period of stability.", es: "En tiempos normales (antes del conflicto), Libia era un destino asequible. Hoy, el turismo es prácticamente inexistente y los precios varían mucho según las zonas de control. Información dada a título indicativo para un periodo de estabilidad.", de: "In normalen Zeiten (vor dem Konflikt) war Libyen ein erschwingliches Reiseziel. Heutzutage gibt es fast keinen Tourismus mehr und die Preise variieren je nach Kontrollzone stark. Die angegebenen Informationen dienen als Hinweis auf eine Periode der Stabilität.",
    },
    currency: "LYD",
    exchangeRate: { fr: "1€ ≈ 5–6 LYD (taux variable selon marché)", en: "1€ ≈ 5–6 LYD (rate varies by market)", es: "1€ ≈ 5–6 LYD (tipo variable según el mercado)", de: "1€ ≈ 5–6 LYD (variabler Tarif je nach Markt)" },
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / simple room", es: "Guesthouse / habitación sencilla", de: "Gästehaus / Einzelzimmer" }, price: "20–40 €", detail: { fr: "Dans les zones accessibles", en: "In accessible areas", es: "En las zonas accesibles", de: "In zugänglichen Bereichen" } },
          { label: { fr: "Hôtel 3★ (Tripoli)", en: "3★ hotel (Tripoli)", es: "Hotel 3★ (Trípoli)", de: "Hotel 3★ (Tripolis)" }, price: "60–100 €", detail: { fr: "Quand disponible", en: "When available", es: "Cuando está disponible", de: "Sofern verfügbar" } },
          { label: { fr: "Hôtel international (Tripoli)", en: "International hotel (Tripoli)", es: "Hotel internacional (Trípoli)", de: "International Hotel (Tripolis)" }, price: "120–200 €", detail: { fr: "Rare en période de conflit", en: "Rare during periods of conflict", es: "Poco frecuente en periodos de conflicto", de: "Selten in Konfliktzeiten" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Cuisine locale (asida, couscous)", en: "Local cuisine (asida, couscous)", es: "Cocina local (asida, cuscús)", de: "Lokale Küche (Asida, Couscous)" }, price: "3–8 €", detail: { fr: "Restaurants locaux", en: "Local restaurants", es: "Restaurantes locales", de: "Lokale Restaurants" } },
          { label: { fr: "Restaurant mid-range Tripoli", en: "Mid-range restaurant in Tripoli", es: "Restaurante de gama media en Trípoli", de: "Mittelklasserestaurant Tripoli" }, price: "10–20 €", detail: { fr: "Cuisine arabe et méditerranéenne", en: "Arab and Mediterranean cuisine", es: "Cocina árabe y mediterránea", de: "Arabische und mediterrane Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Taxi collectif entre villes", en: "Shared taxi between towns", es: "Taxi compartido entre ciudades", de: "Sammeltaxi zwischen Städten" }, price: "5–15 €", detail: { fr: "Selon trajet", en: "Depending on route", es: "Según el trayecto", de: "Abhängig von der Route" } },
          { label: { fr: "4x4 avec chauffeur-guide / journée", en: "4x4 with driver-guide / day", es: "4x4 con chófer-guía / día", de: "4x4 mit Fahrer-Guide / Tag" }, price: "80–150 €", detail: { fr: "Indispensable pour les sites", en: "Essential for visiting the sites", es: "Indispensable para visitar los sitios", de: "Unverzichtbar für Websites" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite guidée Leptis Magna ou Sabratha", en: "Guided tour of Leptis Magna or Sabratha", es: "Visita guiada a Leptis Magna o Sabratha", de: "Geführte Tour Leptis Magna oder Sabratha" }, price: "15–30 €", detail: { fr: "Guide francophone rare", en: "French-speaking guide rare", es: "Guía en español poco frecuente", de: "Seltener französischsprachiger Reiseführer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + transport collectif", en: "Guesthouse + local food + shared transport", es: "Guesthouse + cocina local + transporte compartido", de: "Gästehaus + lokale Küche + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "120–180 €/j", desc: { fr: "Hôtel 3★ + restaurants + 4x4 + guide", en: "3★ hotel + restaurants + 4x4 + guide", es: "Hotel 3★ + restaurantes + 4x4 + guía", de: "3★ Hotel + Restaurants + 4x4 + Führer" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Tripoli (2j) → Sabratha (1j) → Leptis Magna (1j) → Ghadamès (3j) → Cyrène (3j)", en: "Tripoli (2d) → Sabratha (1d) → Leptis Magna (1d) → Ghadamès (3d) → Cyrene (3d)", es: "Trípoli (2d) → Sabratha (1d) → Leptis Magna (1d) → Ghadamés (3d) → Cirene (3d)", de: "Tripolis (2 Tage) → Sabratha (1 Tage) → Leptis Magna (1 Tage) → Ghadames (3 Tage) → Kyrene (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R (escale Tunis ou Le Caire)", en: "Return flight (via Tunis or Cairo)", es: "Vuelo ida y vuelta (con escala en Túnez o El Cairo)", de: "Rückflug (Zwischenstopp in Tunis oder Kairo)" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "600–1 000 €" },
            { label: { fr: "4x4 + chauffeur-guide (agence)", en: "4x4 + driver-guide (agency)", es: "4x4 + chófer-guía (agencia)", de: "4x4 + Fahrerführer (Agentur)" }, amount: "800–1 500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–600 €" },
            { label: { fr: "Guides & entrées", en: "Guides & entrance fees", es: "Guías y entradas", de: "Führer und Einträge" }, amount: "200–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "Via Tunis (Tunisair), Le Caire (EgyptAir) ou Istanbul (Turkish). Pas de vol direct.", en: "Via Tunis (Tunisair), Cairo (EgyptAir) or Istanbul (Turkish Airlines). No direct flight.", es: "Vía Túnez (Tunisair), El Cairo (EgyptAir) o Estambul (Turkish). Sin vuelo directo.", de: "Über Tunis (Tunisair), Kairo (EgyptAir) oder Istanbul (Turkish Airlines). Kein Direktflug." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety", es: "Seguridad", de: "Sicherheit" }, value: { fr: "AVERTISSEMENT MAJEUR : voyage formellement déconseillé dans l'ensemble du pays (zone rouge MEAE). Conflit armé actif dans de nombreuses régions.", en: "MAJOR WARNING: travel is formally advised against throughout the country (red zone on government advisories). Active armed conflict in many regions.", es: "ADVERTENCIA IMPORTANTE: viaje formalmente desaconsejado en todo el país (zona roja según las alertas oficiales). Conflicto armado activo en numerosas regiones.", de: "WICHTIGE WARNUNG: Reisen werden im gesamten Land (rote Zone der MEAE) grundsätzlich nicht empfohlen. Aktiver bewaffneter Konflikt in vielen Regionen." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — procédures très complexes en période de conflit. Invitation d'une agence locale souvent requise.", en: "Visa required — procedures very complex during the conflict. An invitation from a local agency is often required.", es: "Visado obligatorio — trámites muy complejos en periodo de conflicto. A menudo se requiere invitación de una agencia local.", de: "Visum erforderlich – in Konfliktzeiten sehr komplexe Verfahren. Oft ist eine Einladung einer örtlichen Agentur erforderlich." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dinar libyen (LYD). Taux de change double (officiel / marché noir). Espèces indispensables.", en: "Libyan dinar (LYD). Dual exchange rate (official / black market). Cash essential.", es: "Dinar libio (LYD). Tipo de cambio dual (oficial / mercado negro). Efectivo indispensable.", de: "Libyscher Dinar (LYD). Dualer Wechselkurs (offizieller/Schwarzmarkt). Wesentliche Arten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Arabe dialectal libyen. Très peu de francophones — anglais ou guide arabophone nécessaire.", en: "Libyan dialectal Arabic. Very few French speakers — English or an Arabic-speaking guide is necessary.", es: "Árabe dialectal libio. Muy pocos hispanohablantes — se necesita inglés o guía arabófono.", de: "Libyscher Dialekt Arabisch. Sehr wenige Französischsprachige – Englisch- oder Arabischsprachiger Reiseführer erforderlich." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/L (européen et italien) — 127/230V. Coupures fréquentes.", en: "Type C/L (European and Italian) — 127/230V. Frequent power cuts.", es: "Tipo C/L (europeo e italiano) — 127/230V. Cortes frecuentes.", de: "Typ C/L (europäisch und italienisch) – 127/230 V. Häufige Ausfälle." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Infrastructure médicale très dégradée. Rapatriement sanitaire indispensable. Antipaludéen non nécessaire (zone désertique).", en: "Medical infrastructure severely degraded. Medical evacuation insurance essential. Antimalarial treatment not necessary (desert region).", es: "Infraestructura médica muy deteriorada. Seguro de repatriación sanitaria indispensable. Antipalúdico no necesario (zona desértica).", de: "Sehr heruntergekommene medizinische Infrastruktur. Krankenrücktransport unerlässlich. Antimalariamittel nicht erforderlich (Wüstengebiet)." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential.", es: "No potable — agua embotellada indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
  ],
};
