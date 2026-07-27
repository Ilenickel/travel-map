export const MADAGASCAR = {
  code: "MDG",
  numericId: 450,
  name: { fr: "Madagascar", en: "Madagascar", es: "Madagascar", de: "Madagaskar" },
  emoji: "🇲🇬",
  capital: { fr: "Antananarivo", en: "Antananarivo", es: "Antananarivo", de: "Antananarivo" },
  language: { fr: "Malgache, Français", en: "Malagasy, French", es: "Malgache, francés", de: "Madagassisch, Französisch" },
  currency: { fr: "Ariary (MGA)", en: "Ariary (MGA)", es: "Ariary (MGA)", de: "Ariary (MGA)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 2000, tripMid: 4000,
  },
  criteria: {
    unesco: 1,
    nature: 3,
    randonnee: 2,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Madagascar, « la Grande Île », est l'une des destinations les plus uniques au monde : 90% de sa faune et flore sont endémiques. Lémuriens dans les forêts, baobabs géants de l'allée des Baobabs, caméléons multicolores et plages sauvages de Nosy Be. Un autre monde.", en: "Madagascar, 'the Great Island', is one of the most unique destinations in the world: 90% of its flora and fauna are endemic. Lemurs in the forests, giant baobabs along the Avenue of the Baobabs, multicoloured chameleons and wild beaches at Nosy Be. A world apart.", es: "Madagascar, «la Gran Isla», es uno de los destinos más singulares del mundo: el 90% de su fauna y flora son endémicas. Lémures en los bosques, baobabs gigantes en la Avenida de los Baobabs, camaleones multicolores y playas salvajes de Nosy Be. Otro mundo.", de: "Madagaskar, „die große Insel“, ist eines der einzigartigsten Reiseziele der Welt: 90 % seiner Fauna und Flora sind endemisch. Lemuren in den Wäldern, riesige Affenbrotbäume der Allée des Baobabs, bunte Chamäleons und wilde Strände von Nosy Be. Eine andere Welt.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Novembre", en: "April – November", es: "Abril – Noviembre", de: "April – November" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche et fraîche, idéale pour tout le pays. Routes praticables, lémuriens actifs. Saison des baleines à bosse sur la côte est (juillet–septembre).", en: "Dry, cool season, ideal for the whole country. Roads passable, lemurs active. Humpback whale season on the east coast (July–September).", es: "Temporada seca y fresca, ideal para todo el país. Carreteras transitables, lémures activos. Temporada de ballenas jorobadas en la costa este (julio–septiembre).", de: "Trockene und kühle Jahreszeit, ideal für das ganze Land. Befahrbare Straßen, aktive Lemuren. Buckelwal-Saison an der Ostküste (Juli–September).",
      },
      icon: "🦎",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Temporada de lluvias", de: "Regenzeit" },
      color: "#3b82f6",
      description: {
        fr: "Végétation luxuriante, moins de touristes. Routes impraticables au nord-ouest. Nosy Be reste accessible.", en: "Lush vegetation, fewer tourists. Roads impassable in the north-west. Nosy Be remains accessible.", es: "Vegetación exuberante, menos turistas. Carreteras intransitables en el noroeste. Nosy Be sigue siendo accesible.", de: "Üppige Vegetation, weniger Touristen. Unpassierbare Straßen im Nordwesten. Nosy Be bleibt zugänglich.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "antananarivo",
      name: "Antananarivo",
      region: "Analamanga",
      data: [
        { month: "Jan", temp: 20, rain: 270, icon: "⛅" },
        { month: "Fév", temp: 20, rain: 245, icon: "⛅" },
        { month: "Mar", temp: 19, rain: 180, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 16, rain: 15,  icon: "☀️" },
        { month: "Jun", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Jul", temp: 13, rain: 10,  icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Sep", temp: 17, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 20, rain: 150, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 230, icon: "⛅" },
      ],
    },
    {
      id: "nosy_be",
      name: "Nosy Be",
      region: "Diana",
      data: [
        { month: "Jan", temp: 28, rain: 320, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 290, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 220, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 26, rain: 25,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 250, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Allée des Baobabs", en: "Avenue of the Baobabs", es: "Avenida de los Baobabs", de: "Baobab-Gasse" },
      region: "Menabe",
      description: {
        fr: "L'allée des Baobabs, entre Morondava et Belo Tsiribihina, est l'image iconique de Madagascar : des dizaines de baobabs centenaires (20–30 m de haut, 1000 ans d'âge) encadrant une piste de latérite rouge au coucher du soleil.", en: "The Avenue of the Baobabs, between Morondava and Belo Tsiribihina, is Madagascar's iconic image: dozens of centuries-old baobabs (20–30 m tall, 1,000 years old) lining a red laterite track at sunset.", es: "La Avenida de los Baobabs, entre Morondava y Belo Tsiribihina, es la imagen icónica de Madagascar: decenas de baobabs centenarios (20–30 m de altura, 1.000 años de edad) flanqueando una pista de laterita roja al atardecer.", de: "Die Allee der Baobabs zwischen Morondava und Belo Tsiribihina ist das Wahrzeichen Madagaskars: Dutzende jahrhundertealte Baobabs (20–30 m hoch, 1000 Jahre alt) umrahmen bei Sonnenuntergang eine rote Lateritspur.",
      },
      wikipedia: "Avenue_of_the_Baobabs",
      tags: ["Nature", "Culture"],
      mustSee: [
        { name: { fr: "Coucher de soleil sur les baobabs", en: "Sunset over the baobabs", es: "Atardecer sobre los baobabs", de: "Sonnenuntergang über den Baobabs" }, wikipedia: "File:Avenue of the Baobabs at Sunset.jpg" },
        { name: { fr: "Baobabs amoureux (deux baobabs enlacés)", en: "Baobabs Amoureux (two intertwined baobabs)", es: "Baobabs enamorados (dos baobabs entrelazados)", de: "Verliebte Baobabs (zwei ineinander verschlungene Baobabs)" }, wikipedia: "Avenue_of_the_Baobabs" },
        { name: { fr: "Village de Kirindy (lémuriens)", en: "Kirindy village (lemurs)", es: "Pueblo de Kirindy (lémures)", de: "Dorf Kirindy (Lemuren)" }, wikipedia: "File:Ring-tailed lemur (Lemur catta).jpg" },
        { name: { fr: "Réserve de Bemaraha (UNESCO)", en: "Bemaraha Reserve (UNESCO)", es: "Reserva de Bemaraha (UNESCO)", de: "Bemaraha-Reservat (UNESCO)" }, wikipedia: "Tsingy_de_Bemaraha_Strict_Nature_Reserve" },
      ],
    },
    {
      id: 2,
      name: { fr: "Tsingy de Bemaraha", en: "Tsingy de Bemaraha", es: "Tsingy de Bemaraha", de: "Tsingy von Bemaraha" },
      region: "Melaky",
      description: {
        fr: "Les Tsingy sont des forêts de calcaire en lames de couteau, inscrites à l'UNESCO. Ces formations karstiques uniques sont parcourues via des via ferrata, avec une biodiversité extraordinaire (lémuriens, oiseaux endémiques).", en: "The Tsingy are UNESCO-listed forests of knife-edged limestone. These unique karst formations are explored via via ferrata routes, amid extraordinary biodiversity (lemurs, endemic birds).", es: "Los Tsingy son «bosques» de piedra caliza en forma de cuchillas, Patrimonio UNESCO. Estas formaciones kársticas únicas se recorren mediante vías ferratas, en medio de una biodiversidad extraordinaria (lémures, aves endémicas).", de: "Die Tsingy sind messerscharfe Kalksteinwälder, die von der UNESCO zum Weltkulturerbe erklärt wurden. Über Klettersteige werden diese einzigartigen Karstformationen mit außergewöhnlicher Artenvielfalt (Lemuren, endemische Vögel) erkundet.",
      },
      wikipedia: "Tsingy_de_Bemaraha_Strict_Nature_Reserve",
      tags: ["UNESCO", "Nature", "Aventure"],
      mustSee: [
        { name: { fr: "Grands Tsingy — via ferrata suspendue", en: "Grands Tsingy — suspended via ferrata", es: "Grands Tsingy — vía ferrata suspendida", de: "Grands Tsingy – abgehängter Klettersteig" }, wikipedia: "File:Tsingy de Bemaraha, Madagascar.jpg" },
        { name: { fr: "Lémuriens dans la forêt", en: "Lemurs in the forest", es: "Lémures en el bosque", de: "Lemuren im Wald" }, wikipedia: "File:Grote vasapapegaai, Tsingy de Bemaraha.JPG" },
        { name: { fr: "Pirogue sur la rivière Manambolo", en: "Canoe trip on the Manambolo river", es: "Piragua en el río Manambolo", de: "Kanu auf dem Manambolo River" }, wikipedia: "File:Manambolorivier 13.JPG" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national d'Isalo", en: "Isalo National Park", es: "Parque nacional de Isalo", de: "Isalo-Nationalpark" },
      region: "Ihorombe",
      description: {
        fr: "Isalo est le « Canyon du Colorado » malgache : un massif de grès sculpté par l'érosion en canyons, piscines naturelles, pluies de sable orange et forêts de pachypodes en fleurs. Randonnées inoubliables.", en: "Isalo is Madagascar's 'Grand Canyon': a sandstone massif carved by erosion into canyons, natural pools, orange sand formations and forests of flowering pachypodium. Unforgettable hikes.", es: "Isalo es el «Gran Cañón» malgache: un macizo de arenisca esculpido por la erosión en cañones, piscinas naturales, formaciones de arena naranja y bosques de pachypodium en flor. Caminatas inolvidables.", de: "Isalo ist der madagassische „Colorado Canyon“: ein massiver Sandstein, der durch Erosion zu Schluchten, natürlichen Becken, Regenfällen aus orangefarbenem Sand und Wäldern aus blühenden Pachypoden geformt wurde. Unvergessliche Wanderungen.",
      },
      wikipedia: "Isalo_National_Park",
      tags: ["Randonnée", "Nature", "Détente"],
      mustSee: [
        { name: { fr: "Piscine naturelle bleue (nage)", en: "Blue natural pool (swimming)", es: "Piscina natural azul (baño)", de: "Blauer Naturpool (Schwimmen)" }, wikipedia: "File:Falls_of_Anjofo,_Isalo,_Madagascar_(21833449081).jpg" },
        { name: { fr: "Canyon des Makis (lémuriens)", en: "Canyon des Makis (lemurs)", es: "Cañón de los Makis (lémures)", de: "Makis Canyon (Lemuren)" }, wikipedia: "File:Eulemur_rufifrons,_Isalo_National_Park_2007-03-01.jpg" },
        { name: { fr: "Fenêtre de l'Isalo (coucher de soleil)", en: "Isalo Window (sunset)", es: "Ventana de Isalo (atardecer)", de: "Isalo-Fenster (Sonnenuntergang)" }, wikipedia: "File:IsaloRock.jpg" },
      ],
    },
    {
      id: 4,
      name: "Nosy Be",
      region: "Diana",
      description: {
        fr: "L'île de Nosy Be est le paradis balnéaire de Madagascar : plages de sable blanc, lagons aux eaux tropicales, observation des baleines à bosse (juil.–sept.) et requins-baleines. L'île aux parfums (ylang-ylang).", en: "The island of Nosy Be is Madagascar's seaside paradise: white sand beaches, tropical lagoons, humpback whale watching (Jul.–Sep.) and whale sharks. The 'island of perfumes' (ylang-ylang).", es: "La isla de Nosy Be es el paraíso costero de Madagascar: playas de arena blanca, lagunas de aguas tropicales, avistamiento de ballenas jorobadas (jul.–sept.) y tiburones ballena. La «isla de los perfumes» (ylang-ylang).", de: "Die Insel Nosy Be ist Madagaskars Badeparadies: weiße Sandstrände, Lagunen mit tropischem Wasser, Beobachtung von Buckelwalen (Juli–September) und Walhaien. Die Insel der Düfte (Ylang-Ylang).",
      },
      wikipedia: "File:Nosy Iranja, Madagascar, 2025-09-17, DD 21.jpg",
      tags: ["Plage", "Safari"],
      mustSee: [
        { name: { fr: "Plage de Hell-Ville & Madirokely", en: "Hell-Ville & Madirokely beach", es: "Playa de Hell-Ville y Madirokely", de: "Hell-Ville und Madirokely Beach" }, wikipedia: "File:Ville de Nosy Be Hell ville, Madagascar.jpg" },
        { name: { fr: "Baleines à bosse (juil.–sept.)", en: "Humpback whales (Jul.–Sep.)", es: "Ballenas jorobadas (jul.–sept.)", de: "Buckelwale (Juli–September)" }, wikipedia: "Humpback_whale" },
        { name: { fr: "Requins-baleines à Nosy Mitsio", en: "Whale sharks at Nosy Mitsio", es: "Tiburones ballena en Nosy Mitsio", de: "Walhaie in Nosy Mitsio" }, wikipedia: "Whale_shark" },
        { name: { fr: "Plongée aux îlots de Nosy Tanikely", en: "Diving at the Nosy Tanikely islets", es: "Buceo en los islotes de Nosy Tanikely", de: "Tauchen auf den Inseln Nosy Tanikely" }, wikipedia: "Coral_reef" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Madagascar est l'un des pays les moins chers au monde. Le transport est la variable principale : les routes sont difficiles et les vols intérieurs indispensables pour certaines zones.", en: "Madagascar is one of the cheapest countries in the world. Transport is the main variable: roads are difficult and domestic flights are essential for some areas.", es: "Madagascar es uno de los países más baratos del mundo. El transporte es la variable principal: las carreteras son difíciles y los vuelos internos indispensables en algunas zonas.", de: "Madagaskar ist eines der günstigsten Länder der Welt. Der Transport ist die wichtigste Variable: Straßen sind schwierig und Inlandsflüge sind für bestimmte Gebiete unerlässlich.",
    },
    currency: "MGA",
    exchangeRate: "1€ ≈ 4 900 MGA",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Bungalow local", en: "Local bungalow", es: "Bungaló local", de: "Lokaler Bungalow" }, price: "10–25 €", detail: { fr: "Propre et authentique", en: "Clean and authentic", es: "Limpio y auténtico", de: "Sauber und authentisch" } },
          { label: { fr: "Hôtel 3★ Antananarivo", en: "3★ hotel in Antananarivo", es: "Hotel 3★ en Antananarivo", de: "Hotel 3★ Antananarivo" }, price: "35–60 €", detail: { fr: "Confort standard", en: "Standard comfort", es: "Confort estándar", de: "Standardkomfort" } },
          { label: { fr: "Lodge éco / vue plage Nosy Be", en: "Eco-lodge / beach view in Nosy Be", es: "Ecolodge / vista a la playa en Nosy Be", de: "Öko-Lodge / Strandblick Nosy Be" }, price: "80–180 €", detail: { fr: "Proche paradis tropical", en: "Near-paradise tropical setting", es: "Entorno tropical casi paradisíaco", de: "In der Nähe eines tropischen Paradieses" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Romazava (viande feuilles)", en: "Romazava (meat and greens stew)", es: "Romazava (guiso de carne y hojas)", de: "Romazava (Fleischblätter)" }, price: "1–3 €", detail: { fr: "Plat national, économique", en: "National dish, cheap", es: "Plato nacional, económico", de: "Nationales, preiswertes Gericht" } },
          { label: { fr: "Restaurant local (riz, zébu)", en: "Local restaurant (rice, zebu beef)", es: "Restaurante local (arroz, cebú)", de: "Lokales Restaurant (Reis, Zebu)" }, price: "3–8 €", detail: { fr: "Très abordable", en: "Very affordable", es: "Muy asequible", de: "Sehr erschwinglich" } },
          { label: { fr: "Fruits de mer Nosy Be", en: "Seafood in Nosy Be", es: "Marisco en Nosy Be", de: "Meeresfrüchte Nosy Be" }, price: "10–20 €", detail: { fr: "Homard, crevettes géantes", en: "Lobster, giant prawns", es: "Langosta, gambas gigantes", de: "Hummer, Riesengarnelen" } },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Vol intérieur Tana–Morondava", en: "Domestic flight Tana–Morondava", es: "Vuelo interno Tana–Morondava", de: "Inlandsflug Tana–Morondava" }, price: "100–200 €", detail: { fr: "A/R — évite 2j de piste", en: "Round trip — saves 2 days on the track", es: "Ida y vuelta — evita 2 días de pista", de: "A/R – vermeidet 2 Tage Rennstrecke" } },
          { label: { fr: "Taxi-brousse (piste)", en: "Taxi-brousse (bush taxi)", es: "Taxi-brousse (taxi rural)", de: "Buschtaxi (Schiene)" }, price: "5–20 €", detail: { fr: "Lent mais authentique", en: "Slow but authentic", es: "Lento pero auténtico", de: "Langsam, aber authentisch" } },
          { label: { fr: "Location 4x4 avec chauffeur", en: "4x4 rental with driver", es: "Alquiler de 4x4 con chófer", de: "4x4-Vermietung mit Fahrer" }, price: "80–120 €/j", detail: { fr: "Obligatoire hors routes", en: "Essential off the main roads", es: "Obligatorio fuera de las carreteras principales", de: "Obligatorisch im Gelände" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée parc national (Isalo, Ranomafana)", en: "National park entrance (Isalo, Ranomafana)", es: "Entrada a parque nacional (Isalo, Ranomafana)", de: "Nationalparkeingang (Isalo, Ranomafana)" }, price: "10–20 €/j", detail: { fr: "Guide obligatoire", en: "Guide mandatory", es: "Guía obligatorio", de: "Obligatorischer Leitfaden" } },
          { label: { fr: "Observation baleines (Nosy Be)", en: "Whale watching (Nosy Be)", es: "Avistamiento de ballenas (Nosy Be)", de: "Walbeobachtung (Nosy Be)" }, price: "60–100 €", detail: { fr: "Demi-journée", en: "Half day", es: "Medio día", de: "Halber Tag" } },
          { label: { fr: "Trek Tsingy (via ferrata)", en: "Tsingy trek (via ferrata)", es: "Trekking en los Tsingy (vía ferrata)", de: "Trek Tsingy (Klettersteig)" }, price: "30–60 €", detail: { fr: "Guide obligatoire", en: "Guide mandatory", es: "Guía obligatorio", de: "Obligatorischer Leitfaden" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Bungalow + cuisine locale + transport taxi-brousse", en: "Bungalow + local food + taxi-brousse transport", es: "Bungaló + cocina local + transporte en taxi-brousse", de: "Bungalow + lokale Küche + Buschtaxi-Transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + vols intérieurs", en: "3★ hotel + restaurants + domestic flights", es: "Hotel 3★ + restaurantes + vuelos internos", de: "3★ Hotel + Restaurants + Inlandsflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "250 €+/j", desc: { fr: "Lodges & Nosy Be + vols privés + guides premium", en: "Lodges & Nosy Be + private flights + premium guides", es: "Lodges y Nosy Be + vuelos privados + guías premium", de: "Lodges & Nosy Be + Privatflüge + Premium-Guides" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Antananarivo (2j) → Isalo (3j) → Allée des Baobabs (2j) → Tsingy de Bemaraha (2j) → Nosy Be (5j)", en: "Antananarivo (2d) → Isalo (3d) → Avenue of the Baobabs (2d) → Tsingy de Bemaraha (2d) → Nosy Be (5d)", es: "Antananarivo (2d) → Isalo (3d) → Avenida de los Baobabs (2d) → Tsingy de Bemaraha (2d) → Nosy Be (5d)", de: "Antananarivo (2 Tage) → Isalo (3 Tage) → Allée des Baobabs (2 Tage) → Tsingy de Bemaraha (2 Tage) → Nosy Be (5 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Antananarivo", en: "Return flight Paris–Antananarivo", es: "Vuelo ida y vuelta Madrid–Antananarivo", de: "Hin- und Rückflug Paris–Antananarivo" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "250–450 €" },
            { label: { fr: "Vols intérieurs (3–4)", en: "Domestic flights (3–4)", es: "Vuelos internos (3–4)", de: "Inlandsflüge (3–4)" }, amount: "400–600 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–450 €" },
            { label: { fr: "Parcs & guides & imprévus", en: "Parks & guides & contingency", es: "Parques, guías e imprevistos", de: "Parks, Reiseführer und unvorhergesehene Ereignisse" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Antananarivo", en: "Return flight Paris–Antananarivo", es: "Vuelo ida y vuelta Madrid–Antananarivo", de: "Hin- und Rückflug Paris–Antananarivo" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "800–1 300 €" },
            { label: { fr: "Vols intérieurs (3–4)", en: "Domestic flights (3–4)", es: "Vuelos internos (3–4)", de: "Inlandsflüge (3–4)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "500–700 €" },
            { label: { fr: "Excursions & parcs", en: "Excursions & parks", es: "Excursiones y parques", de: "Ausflüge & Parks" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Antananarivo (Business)", en: "Return flight Paris–Antananarivo (Business)", es: "Vuelo ida y vuelta Madrid–Antananarivo (business)", de: "Hin- und Rückflug Paris–Antananarivo (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Lodges premium (14 nuits)", en: "Premium lodges (14 nights)", es: "Lodges premium (14 noches)", de: "Premium-Lodges (14 Nächte)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Vols charter", en: "Charter flights", es: "Vuelos chárter", de: "Charterflüge" }, amount: "1 500–3 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias", de: "Gastronomie & Erlebnisse" }, amount: "800–1 500 €" },
            { label: { fr: "Guides privés", en: "Private guides", es: "Guías privados", de: "Private Reiseführer" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~11h (Air Austral direct, Air France via escale)", en: "~11h (Air Austral direct, Air France with a stopover)", es: "~11h con escala", de: "ca. 11 Std. (Air Austral direkt, Air France mit Zwischenstopp)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée : gratuit jusqu'à 30 jours, 35€ jusqu'à 60 jours, 80€ jusqu'à 90 jours. E-Visa en ligne disponible.", en: "Visa on arrival: free up to 30 days, 35€ up to 60 days, 80€ up to 90 days. Online e-Visa available.", es: "Visado a la llegada: gratis hasta 30 días, 35€ hasta 60 días, 80€ hasta 90 días. E-Visa en línea disponible.", de: "Visum bei der Ankunft: kostenlos bis zu 30 Tagen, 35 € bis zu 60 Tagen, 80 € bis zu 90 Tagen. Online-E-Visum verfügbar." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Ariary (1€ ≈ 4 900 MGA) — espèces indispensables", en: "Ariary (1€ ≈ 4,900 MGA) — cash essential", es: "Ariary (1€ ≈ 4.900 MGA) — efectivo indispensable", de: "Ariary (1€ ≈ 4.900 MGA) – unverzichtbares Bargeld" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Malgache + Français (largement compris)", en: "Malagasy + French (widely understood)", es: "Malgache + francés (ampliamente entendido)", de: "Madagassisch + Französisch (allgemein verstanden)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: "Type C/E – 220 V" },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Couverture villes, très limitée en zone rurale", en: "Coverage in cities, very limited in rural areas", es: "Cobertura en ciudades, muy limitada en zonas rurales", de: "Abdeckung in Städten, in ländlichen Gebieten sehr begrenzt" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water essential", es: "No potable — agua embotellada obligatoria", de: "Nicht trinkbar – Wasser in Flaschen erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen OBLIGATOIRE + vaccins hépatite A/B recommandés", en: "Antimalarial treatment MANDATORY + hepatitis A/B vaccines recommended", es: "Antipalúdico OBLIGATORIO + se recomiendan vacunas de hepatitis A/B", de: "OBLIGATORISCHE Impfungen gegen Malaria und Hepatitis A/B werden empfohlen" } },
  ],
};
