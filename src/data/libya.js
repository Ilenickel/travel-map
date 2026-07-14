export const LIBYA = {
  code: "LBY",
  numericId: 434,
  name: { fr: "Libye", en: "Libya", es: "Libia" },
  emoji: "🇱🇾",
  capital: { fr: "Tripoli", en: "Tripoli", es: "Trípoli" },
  language: { fr: "Arabe", en: "Arabic", es: "Árabe" },
  currency: { fr: "Dinar libyen (LYD)", en: "Libyan Dinar (LYD)", es: "Dinar libio (LYD)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 2000, tripMid: 4000,
  },
  description: {
    fr: "La Libye abrite certains des sites antiques les mieux conservés du monde méditerranéen : Leptis Magna (UNESCO), la cité romaine la plus complète d'Afrique, Sabratha avec son théâtre sur la Méditerranée, et Cyrène la cité grecque (UNESCO). Le Fezzan et ses dunes du Sahara (oasis de Ghadamès, UNESCO) complètent un pays d'une richesse archéologique stupéfiante. Situation sécuritaire très instable — voyage déconseillé.",
    en: "Libya is home to some of the best-preserved ancient sites in the Mediterranean world: Leptis Magna (UNESCO), Africa's most complete Roman city, Sabratha with its theatre facing the Mediterranean, and Cyrene, the Greek city (UNESCO). The Fezzan and its Sahara dunes (Ghadamès oasis, UNESCO) complete a country of astonishing archaeological wealth. Security situation is highly unstable — travel is discouraged.",
    es: "Libia alberga algunos de los sitios antiguos mejor conservados del mundo mediterráneo: Leptis Magna (UNESCO), la ciudad romana más completa de África, Sabratha con su teatro frente al Mediterráneo, y Cirene, la ciudad griega (UNESCO). El Fezzan y sus dunas del Sáhara (oasis de Ghadamés, UNESCO) completan un país de una riqueza arqueológica asombrosa. Situación de seguridad muy inestable — se desaconseja viajar.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April", es: "Octubre – Abril" },
      label: { fr: "Période la moins chaude", en: "Coolest period", es: "Periodo menos caluroso" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables sur la côte (15–25°C). Meilleure période pour visiter les sites antiques. Désert supportable de novembre à mars (10–20°C).",
        en: "Pleasant coastal temperatures (15–25°C). The best time to visit the ancient sites. Desert bearable from November to March (10–20°C).",
        es: "Temperaturas agradables en la costa (15–25°C). Mejor época para visitar los sitios antiguos. Desierto soportable de noviembre a marzo (10–20°C).",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre" },
      label: { fr: "Été méditerranéen et désertique", en: "Mediterranean and desert summer", es: "Verano mediterráneo y desértico" },
      color: "#ef4444",
      description: {
        fr: "Chaleur extrême sur la côte (35–40°C) et dans le désert (45–50°C). Ghibli (vent de sable brûlant) fréquent. Déconseillé.",
        en: "Extreme heat on the coast (35–40°C) and in the desert (45–50°C). Frequent ghibli (scorching sandy wind). Not recommended.",
        es: "Calor extremo en la costa (35–40°C) y en el desierto (45–50°C). Ghibli (viento de arena abrasador) frecuente. No recomendado.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "tripoli",
      name: "Tripoli",
      region: { fr: "Tripolitaine (côte)", en: "Tripolitania (coast)", es: "Tripolitania (costa)" },
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
      region: { fr: "Fezzan (désert)", en: "Fezzan (desert)", es: "Fezzan (desierto)" },
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
      name: { fr: "Leptis Magna — La Rome d'Afrique", en: "Leptis Magna — The Rome of Africa", es: "Leptis Magna — La Roma de África" },
      region: { fr: "Tripolitaine", en: "Tripolitania", es: "Tripolitania" },
      description: {
        fr: "Leptis Magna (UNESCO) est l'un des sites romains les mieux conservés du monde : des forums, thermes, arcs de triomphe, un amphithéâtre et un théâtre pratiquement intacts sous le sable libyen. Ville natale de l'empereur Septime Sévère qui la transforma en une cité de marbre au IIe siècle. Un spectacle archéologique sans équivalent.",
        en: "Leptis Magna (UNESCO) is one of the best-preserved Roman sites in the world: forums, baths, triumphal arches, an amphitheatre and a theatre practically intact beneath the Libyan sand. The birthplace of Emperor Septimius Severus, who transformed it into a city of marble in the 2nd century. An archaeological spectacle without equal.",
        es: "Leptis Magna (UNESCO) es uno de los sitios romanos mejor conservados del mundo: foros, termas, arcos de triunfo, un anfiteatro y un teatro prácticamente intactos bajo la arena libia. Ciudad natal del emperador Septimio Severo, que la transformó en una ciudad de mármol en el siglo II. Un espectáculo arqueológico sin igual.",
      },
      wikipedia: "Leptis_Magna",
      tags: ["UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Forum de Septime Sévère et arc de triomphe", en: "Forum of Septimius Severus and triumphal arch", es: "Foro de Septimio Severo y arco de triunfo" }, wikipedia: "File:00IMGL4379.jpg" },
        { name: { fr: "Théâtre romain de Leptis Magna (IIe s.)", en: "Roman theatre of Leptis Magna (2nd c.)", es: "Teatro romano de Leptis Magna (s. II)" }, wikipedia: "File:Leptis_Magna_Theatre.jpg" },
        { name: { fr: "Amphithéâtre et bassin du port romain", en: "Amphitheatre and Roman harbour basin", es: "Anfiteatro y dársena del puerto romano" }, wikipedia: "File:Leptis_Magna_amphitheatre_-_panoramio.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Sabratha — Théâtre sur la Méditerranée", en: "Sabratha — Theatre on the Mediterranean", es: "Sabratha — Teatro frente al Mediterráneo" },
      region: { fr: "Tripolitaine", en: "Tripolitania", es: "Tripolitania" },
      description: {
        fr: "Sabratha (UNESCO) est une ancienne cité phénicienne et romaine dont le théâtre, avec sa façade à trois étages de colonnes donnant directement sur la Méditerranée, est l'un des plus beaux du monde antique. Funduk central avec mosaïques et forum préservés.",
        en: "Sabratha (UNESCO) is an ancient Phoenician and Roman city whose theatre, with its three-tiered colonnaded façade facing directly onto the Mediterranean, is one of the finest in the ancient world. A central funduk with preserved mosaics and a forum.",
        es: "Sabratha (UNESCO) es una antigua ciudad fenicia y romana cuyo teatro, con su fachada de columnas de tres niveles frente al Mediterráneo, es uno de los más bellos del mundo antiguo. Un funduk central con mosaicos y foro conservados.",
      },
      wikipedia: "Sabratha",
      tags: ["UNESCO", "Histoire", "Culture", "Plage"],
      mustSee: [
        { name: { fr: "Théâtre de Sabratha (IIe s.) — façade à 3 étages sur la mer", en: "Theatre of Sabratha (2nd c.) — three-tiered façade facing the sea", es: "Teatro de Sabratha (s. II) — fachada de 3 niveles frente al mar" }, wikipedia: "File:Theatre of Sabratha, Libya.jpg" },
        { name: { fr: "Temple de Liber Pater et mosaïques", en: "Temple of Liber Pater and mosaics", es: "Templo de Liber Pater y mosaicos" }, wikipedia: "File:Triumph of liber pater2.JPG" },
        { name: { fr: "Musée archéologique de Sabratha", en: "Sabratha Archaeological Museum", es: "Museo arqueológico de Sabratha" }, wikipedia: "File:Roman Museum, Sabratha (68372).jpg" },
        { name: { fr: "Forum romain et basilique judiciaire", en: "Roman forum and judicial basilica", es: "Foro romano y basílica judicial" }, wikipedia: "File:Amphitheatre, Sabratha (50144698711).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Ghadamès — Oasis du Sahara", en: "Ghadamès — Sahara oasis", es: "Ghadamés — Oasis del Sáhara" },
      region: "Fezzan",
      description: {
        fr: "Ghadamès (UNESCO) est une oasis du Sahara libyen à la frontière algérienne et tunisienne : ses maisons blanches interconnectées avec des passages couverts qui permettent de circuler en ville à l'abri du soleil, ses rues labyrintiques séculaires, et son artisanat en cuir et en maroquinerie. La 'perle du désert' berbère.",
        en: "Ghadamès (UNESCO) is a Libyan Sahara oasis on the Algerian and Tunisian border: its interconnected white houses with covered passageways allow people to move around town sheltered from the sun, its centuries-old labyrinthine streets, and its leather craftsmanship. The Berber 'pearl of the desert'.",
        es: "Ghadamés (UNESCO) es un oasis del Sáhara libio en la frontera con Argelia y Túnez: sus casas blancas interconectadas por pasajes cubiertos permiten circular por la ciudad al abrigo del sol, sus centenarias calles laberínticas y su artesanía en cuero y marroquinería. La «perla del desierto» bereber.",
      },
      wikipedia: "Ghadames",
      tags: ["UNESCO", "Désert", "Nature", "Culture"],
      mustSee: [
        { name: { fr: "Vieille ville de Ghadamès (UNESCO) — passages couverts", en: "Old town of Ghadamès (UNESCO) — covered passageways", es: "Casco antiguo de Ghadamés (UNESCO) — pasajes cubiertos" }, wikipedia: "File:Ghadames, 2006.jpg" },
        { name: { fr: "Palmiers et jardins de l'oasis", en: "Palm trees and gardens of the oasis", es: "Palmeras y jardines del oasis" }, wikipedia: "File:Ghadames - Altstadt-Palmenhain.jpg" },
        { name: { fr: "Coucher de soleil sur les dunes environnantes", en: "Sunset over the surrounding dunes", es: "Atardecer sobre las dunas circundantes" }, wikipedia: "File:Ghadames - Grosse Moschee.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Cyrène — Cité grecque de Cyrénaïque", en: "Cyrene — Greek city of Cyrenaica", es: "Cirene — Ciudad griega de Cirenaica" },
      region: { fr: "Cyrénaïque", en: "Cyrenaica", es: "Cirenaica" },
      description: {
        fr: "Cyrène (UNESCO) est une colonie grecque du VIIe siècle av. J.-C., capitale de la Cyrénaïque : son temple d'Apollon (le plus grand de l'Afrique antique), la nécropole grecque taillée dans la roche, et l'agora hellénistique préservée dans un cadre montagneux spectaculaire sur les contreforts du Djebel Akhdar.",
        en: "Cyrene (UNESCO) is a Greek colony founded in the 7th century BC, capital of Cyrenaica: its Temple of Apollo (the largest in ancient Africa), the rock-cut Greek necropolis, and the preserved Hellenistic agora set in a spectacular mountainous landscape on the foothills of the Djebel Akhdar.",
        es: "Cirene (UNESCO) es una colonia griega del siglo VII a. C., capital de Cirenaica: su templo de Apolo (el más grande de la África antigua), la necrópolis griega excavada en la roca y el ágora helenística conservada en un entorno montañoso espectacular en las estribaciones del Djebel Akhdar.",
      },
      wikipedia: "Cyrene,_Libya",
      tags: ["UNESCO", "Histoire", "Montagne"],
      mustSee: [
        { name: { fr: "Temple d'Apollon de Cyrène (VIe s. av. J.-C.)", en: "Temple of Apollo at Cyrene (6th c. BC)", es: "Templo de Apolo de Cirene (s. VI a. C.)" }, wikipedia: "File:CireneTempioApollo.jpg" },
        { name: { fr: "Nécropole grecque taillée dans la roche", en: "Rock-cut Greek necropolis", es: "Necrópolis griega excavada en la roca" }, wikipedia: "File:Exedra of Apollo Karneios, Cyrene (50144977036).jpg" },
        { name: { fr: "Agora hellénistique et forum romain", en: "Hellenistic agora and Roman forum", es: "Ágora helenística y foro romano" }, wikipedia: "File:1Roman theater ancient Cyrene (Cyrene, Libya).jpg" },
        { name: { fr: "Vue sur la Méditerranée depuis le Djebel Akhdar", en: "View of the Mediterranean from the Djebel Akhdar", es: "Vistas al Mediterráneo desde el Djebel Akhdar" }, wikipedia: "File:8(Temple of Apollo, Cyrene, Libya).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "En temps normal (avant le conflit), la Libye était une destination abordable. Aujourd'hui, le tourisme est quasiment inexistant et les prix très variables selon les zones de contrôle. Informations données à titre indicatif pour une période de stabilité.",
      en: "In normal times (before the conflict), Libya was an affordable destination. Today, tourism is virtually non-existent and prices vary greatly depending on the controlling authority in each area. Figures given here are indicative, for a period of stability.",
      es: "En tiempos normales (antes del conflicto), Libia era un destino asequible. Hoy, el turismo es prácticamente inexistente y los precios varían mucho según las zonas de control. Información dada a título indicativo para un periodo de estabilidad.",
    },
    currency: "LYD",
    exchangeRate: { fr: "1€ ≈ 5–6 LYD (taux variable selon marché)", en: "1€ ≈ 5–6 LYD (rate varies by market)", es: "1€ ≈ 5–6 LYD (tipo variable según el mercado)" },
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / simple room", es: "Guesthouse / habitación sencilla" }, price: "20–40 €", detail: { fr: "Dans les zones accessibles", en: "In accessible areas", es: "En las zonas accesibles" } },
          { label: { fr: "Hôtel 3★ (Tripoli)", en: "3★ hotel (Tripoli)", es: "Hotel 3★ (Trípoli)" }, price: "60–100 €", detail: { fr: "Quand disponible", en: "When available", es: "Cuando está disponible" } },
          { label: { fr: "Hôtel international (Tripoli)", en: "International hotel (Tripoli)", es: "Hotel internacional (Trípoli)" }, price: "120–200 €", detail: { fr: "Rare en période de conflit", en: "Rare during periods of conflict", es: "Poco frecuente en periodos de conflicto" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Cuisine locale (asida, couscous)", en: "Local cuisine (asida, couscous)", es: "Cocina local (asida, cuscús)" }, price: "3–8 €", detail: { fr: "Restaurants locaux", en: "Local restaurants", es: "Restaurantes locales" } },
          { label: { fr: "Restaurant mid-range Tripoli", en: "Mid-range restaurant in Tripoli", es: "Restaurante de gama media en Trípoli" }, price: "10–20 €", detail: { fr: "Cuisine arabe et méditerranéenne", en: "Arab and Mediterranean cuisine", es: "Cocina árabe y mediterránea" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Taxi collectif entre villes", en: "Shared taxi between towns", es: "Taxi compartido entre ciudades" }, price: "5–15 €", detail: { fr: "Selon trajet", en: "Depending on route", es: "Según el trayecto" } },
          { label: { fr: "4x4 avec chauffeur-guide / journée", en: "4x4 with driver-guide / day", es: "4x4 con chófer-guía / día" }, price: "80–150 €", detail: { fr: "Indispensable pour les sites", en: "Essential for visiting the sites", es: "Indispensable para visitar los sitios" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Visite guidée Leptis Magna ou Sabratha", en: "Guided tour of Leptis Magna or Sabratha", es: "Visita guiada a Leptis Magna o Sabratha" }, price: "15–30 €", detail: { fr: "Guide francophone rare", en: "French-speaking guide rare", es: "Guía en español poco frecuente" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + transport collectif", en: "Guesthouse + local food + shared transport", es: "Guesthouse + cocina local + transporte compartido" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "120–180 €/j", desc: { fr: "Hôtel 3★ + restaurants + 4x4 + guide", en: "3★ hotel + restaurants + 4x4 + guide", es: "Hotel 3★ + restaurantes + 4x4 + guía" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Tripoli (2j) → Sabratha (1j) → Leptis Magna (1j) → Ghadamès (3j) → Cyrène (3j)",
        en: "Tripoli (2d) → Sabratha (1d) → Leptis Magna (1d) → Ghadamès (3d) → Cyrene (3d)",
        es: "Trípoli (2d) → Sabratha (1d) → Leptis Magna (1d) → Ghadamés (3d) → Cirene (3d)",
      },
      budgets: [
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R (escale Tunis ou Le Caire)", en: "Return flight (via Tunis or Cairo)", es: "Vuelo ida y vuelta (con escala en Túnez o El Cairo)" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "600–1 000 €" },
            { label: { fr: "4x4 + chauffeur-guide (agence)", en: "4x4 + driver-guide (agency)", es: "4x4 + chófer-guía (agencia)" }, amount: "800–1 500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "300–600 €" },
            { label: { fr: "Guides & entrées", en: "Guides & entrance fees", es: "Guías y entradas" }, amount: "200–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "Via Tunis (Tunisair), Le Caire (EgyptAir) ou Istanbul (Turkish). Pas de vol direct.", en: "Via Tunis (Tunisair), Cairo (EgyptAir) or Istanbul (Turkish Airlines). No direct flight.", es: "Vía Túnez (Tunisair), El Cairo (EgyptAir) o Estambul (Turkish). Sin vuelo directo." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety", es: "Seguridad" }, value: { fr: "AVERTISSEMENT MAJEUR : voyage formellement déconseillé dans l'ensemble du pays (zone rouge MEAE). Conflit armé actif dans de nombreuses régions.", en: "MAJOR WARNING: travel is formally advised against throughout the country (red zone on government advisories). Active armed conflict in many regions.", es: "ADVERTENCIA IMPORTANTE: viaje formalmente desaconsejado en todo el país (zona roja según las alertas oficiales). Conflicto armado activo en numerosas regiones." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire — procédures très complexes en période de conflit. Invitation d'une agence locale souvent requise.", en: "Visa required — procedures very complex during the conflict. An invitation from a local agency is often required.", es: "Visado obligatorio — trámites muy complejos en periodo de conflicto. A menudo se requiere invitación de una agencia local." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Dinar libyen (LYD). Taux de change double (officiel / marché noir). Espèces indispensables.", en: "Libyan dinar (LYD). Dual exchange rate (official / black market). Cash essential.", es: "Dinar libio (LYD). Tipo de cambio dual (oficial / mercado negro). Efectivo indispensable." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Arabe dialectal libyen. Très peu de francophones — anglais ou guide arabophone nécessaire.", en: "Libyan dialectal Arabic. Very few French speakers — English or an Arabic-speaking guide is necessary.", es: "Árabe dialectal libio. Muy pocos hispanohablantes — se necesita inglés o guía arabófono." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/L (européen et italien) — 127/230V. Coupures fréquentes.", en: "Type C/L (European and Italian) — 127/230V. Frequent power cuts.", es: "Tipo C/L (europeo e italiano) — 127/230V. Cortes frecuentes." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Infrastructure médicale très dégradée. Rapatriement sanitaire indispensable. Antipaludéen non nécessaire (zone désertique).", en: "Medical infrastructure severely degraded. Medical evacuation insurance essential. Antimalarial treatment not necessary (desert region).", es: "Infraestructura médica muy deteriorada. Seguro de repatriación sanitaria indispensable. Antipalúdico no necesario (zona desértica)." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential.", es: "No potable — agua embotellada indispensable." } },
  ],
};
