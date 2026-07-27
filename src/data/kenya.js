export const KENYA = {
  code: "KEN",
  numericId: 404,
  name: { fr: "Kenya", en: "Kenya", es: "Kenia", de: "Kenia" },
  emoji: "🇰🇪",
  capital: { fr: "Nairobi", en: "Nairobi", es: "Nairobi", de: "Nairobi" },
  language: { fr: "Swahili, Anglais", en: "Swahili, English", es: "Suajili, inglés", de: "Suaheli, Englisch" },
  currency: { fr: "Shilling kényan (KES)", en: "Kenyan Shilling (KES)", es: "Chelín keniano (KES)", de: "Kenianischer Schilling (KES)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 50, budgetMid: 150,
    tripMin: 2500, tripMid: 5000,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 3,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Kenya est le berceau du safari africain : Masai Mara et sa Grande Migration, amboseli avec les éléphants devant le Kilimandjaro, côte swahilie de Mombasa et culture Maasai vivante. Un pays qui définit l'Afrique sauvage.", en: "Kenya is the birthplace of the African safari: Masai Mara and its Great Migration, Amboseli with elephants roaming before Kilimanjaro, the Swahili coast around Mombasa and a living Maasai culture. A country that defines wild Africa.", es: "Kenia es la cuna del safari africano: el Masai Mara y su Gran Migración, Amboseli con elefantes ante el Kilimanjaro, la costa suajili de Mombasa y una cultura maasái viva. Un país que define el África salvaje.", de: "Kenia ist die Wiege der afrikanischen Safari: Masai Mara und ihre große Völkerwanderung, Amboseli mit Elefanten vor dem Kilimandscharo, Swahili-Küste von Mombasa und lebendige Massai-Kultur. Ein Land, das das wilde Afrika definiert.",
  },

  bestPeriods: [
    {
      months: { fr: "Juillet – Octobre", en: "July – October", es: "Julio – Octubre", de: "Juli – Oktober" },
      label: { fr: "Grande Migration", en: "Great Migration", es: "Gran Migración", de: "Große Migration" },
      color: "#22c55e",
      description: {
        fr: "La Grande Migration (juillet–septembre) : des millions de gnous traversent la Mara River sous les yeux des crocodiles. Plus belle période safari. Saison sèche, herbe rase.", en: "The Great Migration (July–September): millions of wildebeest cross the Mara River under the watch of crocodiles. The best safari season. Dry season, short grass.", es: "La Gran Migración (julio–septiembre): millones de ñus cruzan el río Mara ante la mirada de los cocodrilos. La mejor época de safari. Temporada seca, hierba corta.", de: "Die große Vogelwanderung (Juli–September): Millionen Gnus überqueren den Mara-Fluss unter den Augen von Krokodilen. Schönste Safari-Zeit. Trockenzeit, kurzes Gras.",
      },
      icon: "🦁",
    },
    {
      months: { fr: "Janvier – Février", en: "January – February", es: "Enero – Febrero", de: "Januar – Februar" },
      label: { fr: "Petite saison sèche", en: "Short dry season", es: "Pequeña temporada seca", de: "Kurze Trockenzeit" },
      color: "#fb923c",
      description: {
        fr: "Courte saison sèche entre les deux moussons. Moins de touristes, safaris excellents, bébés animaux nombreux.", en: "A short dry spell between the two rainy seasons. Fewer tourists, excellent safaris, plenty of baby animals.", es: "Breve temporada seca entre los dos monzones. Menos turistas, safaris excelentes, muchas crías de animales.", de: "Kurze Trockenzeit zwischen den beiden Monsunen. Weniger Touristen, ausgezeichnete Safaris, zahlreiche Tierbabys.",
      },
      icon: "🐘",
    },
  ],

  weatherCities: [
    {
      id: "nairobi",
      name: "Nairobi",
      region: { fr: "Nairobi", en: "Nairobi", es: "Nairobi", de: "Nairobi" },
      data: [
        { month: "Jan", temp: 24, rain: 60,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 45,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 220, icon: "⛅" },
        { month: "Mai", temp: 22, rain: 200, icon: "⛅" },
        { month: "Jun", temp: 20, rain: 35,  icon: "⛅" },
        { month: "Jul", temp: 20, rain: 20,  icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 25,  icon: "⛅" },
        { month: "Sep", temp: 21, rain: 35,  icon: "☀️" },
        { month: "Oct", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 23, rain: 150, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 90,  icon: "☀️" },
      ],
    },
    {
      id: "masai_mara",
      name: "Masai Mara",
      region: { fr: "Rift Valley", en: "Rift Valley", es: "Valle del Rift", de: "Grabenbruch" },
      data: [
        { month: "Jan", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Fév", temp: 29, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 150, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 60,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Masai Mara",
      region: { fr: "Rift Valley", en: "Rift Valley", es: "Valle del Rift", de: "Grabenbruch" },
      description: {
        fr: "La réserve nationale du Masai Mara est le théâtre de la Grande Migration : entre juillet et octobre, 1,5 million de gnous et zèbres traversent la Mara River, sous la surveillance des crocodiles du Nil et des lions. Un spectacle sans équivalent au monde.", en: "The Masai Mara National Reserve is the stage for the Great Migration: between July and October, 1.5 million wildebeest and zebras cross the Mara River, watched by Nile crocodiles and lions. A spectacle unmatched anywhere in the world.", es: "La Reserva Nacional del Masai Mara es el escenario de la Gran Migración: entre julio y octubre, 1,5 millones de ñus y cebras cruzan el río Mara, bajo la vigilancia de cocodrilos del Nilo y leones. Un espectáculo sin igual en el mundo.", de: "Das Masai Mara Nationalreservat ist Schauplatz der Großen Völkerwanderung: Zwischen Juli und Oktober überqueren 1,5 Millionen Gnus und Zebras den Mara-Fluss, überwacht von Nilkrokodilen und Löwen. Ein Spektakel, das weltweit seinesgleichen sucht.",
      },
      wikipedia: "Maasai_Mara",
      tags: ["Safari", "Nature"],
      mustSee: [
        { name: { fr: "Grande Migration (juil.–sept.)", en: "Great Migration (Jul.–Sep.)", es: "Gran Migración (jul.–sept.)", de: "Große Völkerwanderung (Juli–September)" }, wikipedia: "File:Wildebeests migration crossing.jpg" },
        { name: { fr: "Traversée de la Mara River", en: "Mara River crossing", es: "Cruce del río Mara", de: "Überquerung des Mara-Flusses" }, wikipedia: "Mara_River" },
        { name: { fr: "Vol en montgolfière au lever du soleil", en: "Sunrise hot-air balloon flight", es: "Vuelo en globo aerostático al amanecer", de: "Heißluftballonflug bei Sonnenaufgang" }, wikipedia: "Maasai_Mara" },
        { name: { fr: "Village Maasai", en: "Maasai village", es: "Pueblo maasái", de: "Massai-Dorf" }, wikipedia: "Maasai_people" },
      ],
    },
    {
      id: 2,
      name: { fr: "Amboseli & Kilimandjaro", en: "Amboseli & Kilimanjaro", es: "Amboseli y el Kilimanjaro", de: "Amboseli und Kilimandscharo" },
      region: { fr: "Rift Valley / Kajiado", en: "Rift Valley / Kajiado", es: "Valle del Rift / Kajiado", de: "Rift Valley / Kajiado" },
      description: {
        fr: "Le parc national d'Amboseli offre l'image iconique de l'Afrique : des éléphants marchant sous la silhouette enneigée du Kilimandjaro. Un des meilleurs parcs pour photographier les éléphants en très grands troupeaux.", en: "Amboseli National Park offers the iconic image of Africa: elephants walking beneath the snow-capped silhouette of Kilimanjaro. One of the best parks to photograph elephants in very large herds.", es: "El parque nacional de Amboseli ofrece la imagen icónica de África: elefantes caminando bajo la silueta nevada del Kilimanjaro. Uno de los mejores parques para fotografiar elefantes en grandes manadas.", de: "Der Amboseli-Nationalpark bietet das ikonische Bild Afrikas: Elefanten, die unter der schneebedeckten Silhouette des Kilimandscharo spazieren. Einer der besten Parks zum Fotografieren von Elefanten in sehr großen Herden.",
      },
      wikipedia: "File:Kilimanjaro_from_Amboseli.jpg",
      tags: ["Safari", "Montagne", "Culture", "Randonnée"],
      mustSee: [
        { name: { fr: "Éléphants devant le Kilimandjaro", en: "Elephants before Kilimanjaro", es: "Elefantes ante el Kilimanjaro", de: "Elefanten vor dem Kilimandscharo" }, wikipedia: "African_bush_elephant" },
        { name: { fr: "Lac Amboseli (flamants)", en: "Lake Amboseli (flamingos)", es: "Lago Amboseli (flamencos)", de: "Amboseli-See (Flamingos)" }, wikipedia: "Flamingo" },
        { name: { fr: "Kilimandjaro (vue depuis Kenya)", en: "Kilimanjaro (view from Kenya)", es: "Kilimanjaro (vista desde Kenia)", de: "Kilimandscharo (Blick von Kenia)" }, wikipedia: "Mount_Kilimanjaro" },
      ],
    },
    {
      id: 3,
      name: "Nairobi",
      region: { fr: "Nairobi", en: "Nairobi", es: "Nairobi", de: "Nairobi" },
      description: {
        fr: "La seule capitale au monde avec un parc national dans ses faubourgs : Nairobi National Park, où lions et girafes évoluent avec la skyline en arrière-plan. La ville est aussi le hub gastronomique de l'Afrique de l'Est.", en: "The only capital in the world with a national park on its doorstep: Nairobi National Park, where lions and giraffes roam with the skyline in the background. The city is also East Africa's culinary hub.", es: "La única capital del mundo con un parque nacional en sus afueras: el Parque Nacional de Nairobi, donde leones y jirafas se mueven con el skyline de fondo. La ciudad es también el centro gastronómico de África Oriental.", de: "Die einzige Hauptstadt der Welt mit einem Nationalpark in ihren Vororten: der Nairobi-Nationalpark, in dem Löwen und Giraffen umherstreifen und die Skyline im Hintergrund zu sehen ist. Die Stadt ist auch das gastronomische Zentrum Ostafrikas.",
      },
      wikipedia: "Nairobi",
      tags: ["Ville", "Safari", "Culture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Nairobi National Park (lions & skyline)", en: "Nairobi National Park (lions & skyline)", es: "Parque Nacional de Nairobi (leones y skyline)", de: "Nairobi-Nationalpark (Löwen & Skyline)" }, wikipedia: "Nairobi_National_Park" },
        { name: { fr: "Centre des girafes de Nairobi", en: "Nairobi Giraffe Centre", es: "Centro de las jirafas de Nairobi", de: "Nairobi Giraffe Center" }, wikipedia: "Rothschild's_giraffe" },
        { name: { fr: "Karen Blixen Museum (Out of Africa)", en: "Karen Blixen Museum (Out of Africa)", es: "Museo Karen Blixen (Memorias de África)", de: "Karen Blixen Museum (Jenseits von Afrika)" }, wikipedia: "File:Karen blixen museum in nairobi kenya 02.jpg" },
        { name: { fr: "Marché Maasai", en: "Maasai Market", es: "Mercado maasái", de: "Massai-Markt" }, wikipedia: "File:The Maasai Market Vendors.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Côte swahilie — Mombasa & Zanzibar", en: "Swahili Coast — Mombasa & Zanzibar", es: "Costa suajili — Mombasa y Zanzíbar", de: "Swahili-Küste – Mombasa und Sansibar" },
      region: { fr: "Côte", en: "Coast", es: "Costa", de: "Seite" },
      description: {
        fr: "La côte kényane offre des plages paradisiaques aux eaux turquoise, des villes swahilies historiques (Lamu UNESCO) et une culture métissée arabo-africaine unique.", en: "The Kenyan coast offers paradisiac beaches with turquoise waters, historic Swahili towns (UNESCO-listed Lamu) and a unique blend of Arab and African culture.", es: "La costa keniana ofrece playas paradisíacas de aguas turquesa, ciudades suajilis históricas (Lamu, Patrimonio UNESCO) y una cultura mestiza árabe-africana única.", de: "Die kenianische Küste bietet paradiesische Strände mit türkisfarbenem Wasser, historische Swahili-Städte (Lamu UNESCO) und eine einzigartige gemischte arabisch-afrikanische Kultur.",
      },
      wikipedia: "Mombasa",
      tags: ["Plage", "Histoire", "Culture", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Fort Jésus de Mombasa (UNESCO)", en: "Fort Jesus in Mombasa (UNESCO)", es: "Fuerte Jesús de Mombasa (UNESCO)", de: "Fort Jesus von Mombasa (UNESCO)" }, wikipedia: "Fort_Jesus" },
        { name: { fr: "Lamu — vieille ville (UNESCO)", en: "Lamu — old town (UNESCO)", es: "Lamu — casco antiguo (UNESCO)", de: "Lamu – Altstadt (UNESCO)" }, wikipedia: "Lamu" },
        { name: { fr: "Plages de Diani Beach", en: "Diani Beach", es: "Playas de Diani Beach", de: "Diani Beach Strände" }, wikipedia: "Diani_Beach" },
        { name: { fr: "Réserve marine de Watamu", en: "Watamu Marine Reserve", es: "Reserva marina de Watamu", de: "Watamu-Meeresreservat" }, wikipedia: "File:Watamu Marine Park.JPG" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Kenya offre un large spectre de prix : des camps de camping aux lodges de luxe. Les safaris sont l'investissement principal. Les droits d'entrée dans les parcs sont en dollars.", en: "Kenya offers a wide range of prices: from campsites to luxury lodges. Safaris are the main investment. Park entrance fees are charged in dollars.", es: "Kenia ofrece un amplio abanico de precios: desde campings hasta lodges de lujo. Los safaris son la principal inversión. Las tasas de entrada a los parques se cobran en dólares.", de: "Kenia bietet ein breites Preisspektrum: vom Camping-Camp bis zur Luxus-Lodge. Safaris sind die Hauptinvestition. Die Eintrittspreise für die Parks werden in Dollar berechnet.",
    },
    currency: "KES",
    exchangeRate: "1€ ≈ 145 KES",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / camping", en: "Guesthouse / camping", es: "Guesthouse / camping", de: "Gästehaus/Campingplatz" }, price: "15–35 €", detail: { fr: "Hors parcs nationaux", en: "Outside national parks", es: "Fuera de los parques nacionales", de: "Ohne Nationalparks" } },
          { label: { fr: "Lodge mid-range", en: "Mid-range lodge", es: "Lodge de gama media", de: "Mittelklasse-Lodge" }, price: "100–200 €", detail: { fr: "Safari lodge avec repas", en: "Safari lodge with meals", es: "Lodge de safari con comidas", de: "Safari-Lodge mit Mahlzeiten" } },
          { label: { fr: "Tented camp luxe", en: "Luxury tented camp", es: "Campamento de lujo con tiendas", de: "Luxuriöses Zeltlager" }, price: "400–1 000 €", detail: { fr: "All-inclusive dans la Mara", en: "All-inclusive in the Mara", es: "Todo incluido en el Mara", de: "All-Inclusive in der Mara" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Ugali, nyama choma, mandazi", en: "Ugali, nyama choma, mandazi", es: "Ugali, nyama choma, mandazi", de: "Ugali, Nyama Choma, Mandazi" }, price: "2–5 €", detail: { fr: "Cuisine locale traditionnelle", en: "Traditional local cuisine", es: "Cocina local tradicional", de: "Traditionelle lokale Küche" } },
          { label: { fr: "Restaurant local / Nairobi", en: "Local restaurant / Nairobi", es: "Restaurante local / Nairobi", de: "Lokales Restaurant / Nairobi" }, price: "8–15 €", detail: { fr: "Bonne cuisine kényane", en: "Good Kenyan cuisine", es: "Buena cocina keniana", de: "Gutes kenianisches Essen" } },
          { label: { fr: "Dîner dans un lodge safari", en: "Dinner at a safari lodge", es: "Cena en un lodge de safari", de: "Abendessen in einer Safari-Lodge" }, price: "40–80 €", detail: { fr: "Inclus dans all-inclusive", en: "Included in all-inclusive packages", es: "Incluido en los paquetes todo incluido", de: "Im All-Inclusive-Angebot enthalten" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Vol Nairobi–Masai Mara (30 min)", en: "Flight Nairobi–Masai Mara (30 min)", es: "Vuelo Nairobi–Masai Mara (30 min)", de: "Flug Nairobi–Masai Mara (30 Min.)" }, price: "150–250 €", detail: { fr: "Indispensable, recommandé", en: "Essential, recommended", es: "Indispensable, recomendado", de: "Unverzichtbar, empfehlenswert" } },
          { label: { fr: "Location 4x4 safari / jour", en: "4x4 safari rental / day", es: "Alquiler de 4x4 de safari / día", de: "4x4-Safari-Vermietung / Tag" }, price: "80–150 €", detail: { fr: "Avec chauffeur-guide", en: "With driver-guide", es: "Con chófer-guía", de: "Mit Fahrerführer" } },
          { label: { fr: "Matatu (minibus local)", en: "Matatu (local minibus)", es: "Matatu (minibús local)", de: "Matatu (örtlicher Kleinbus)" }, price: "1–3 €", detail: { fr: "Trajet interurbain", en: "Intercity trip", es: "Trayecto interurbano", de: "Intercity-Reisen" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Droit d'entrée Masai Mara/jour", en: "Masai Mara entrance fee/day", es: "Entrada al Masai Mara/día", de: "Eintrittsgebühr für die Masai Mara/Tag" }, price: "50–80 €", detail: { fr: "Résidents non-africains", en: "Non-African residents", es: "Residentes no africanos", de: "Nicht-afrikanische Einwohner" } },
          { label: { fr: "Montgolfière (1,5h)", en: "Hot-air balloon (1.5h)", es: "Globo aerostático (1,5h)", de: "Heißluftballon (1,5 Std.)" }, price: "400–500 €", detail: { fr: "Expérience unique", en: "A unique experience", es: "Una experiencia única", de: "Einzigartiges Erlebnis" } },
          { label: { fr: "Visite village Maasai", en: "Maasai village visit", es: "Visita a pueblo maasái", de: "Besuch eines Massai-Dorfes" }, wikipedia: "Maasai_people", price: "10–25 €", detail: { fr: "Participation aux danses", en: "Includes taking part in dances", es: "Incluye participación en danzas", de: "Teilnahme an Tänzen" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Hors parcs nationaux : guesthouse + matatu + cuisine locale", en: "Outside national parks: guesthouse + matatu + local food", es: "Fuera de los parques nacionales: guesthouse + matatu + cocina local", de: "Außerhalb von Nationalparks: Gästehaus + Matatu + lokale Küche" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "150–300 €/j", desc: { fr: "Lodge safari mid-range + game drives + repas inclus", en: "Mid-range safari lodge + game drives + meals included", es: "Lodge de safari de gama media + game drives + comidas incluidas", de: "Mittelklasse-Safari-Lodge + Pirschfahrten + Mahlzeiten inklusive" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "500 €+/j", desc: { fr: "Tented camp 5★ all-inclusive + vols privés", en: "5-star all-inclusive tented camp + private flights", es: "Campamento con tiendas 5★ todo incluido + vuelos privados", de: "Zeltlager 5★ All-Inclusive + Privatflüge" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Nairobi (2j) → Amboseli (2j) → Masai Mara (4j) → Mombasa / côte (2j)", en: "Nairobi (2d) → Amboseli (2d) → Masai Mara (4d) → Mombasa / coast (2d)", es: "Nairobi (2d) → Amboseli (2d) → Masai Mara (4d) → Mombasa / costa (2d)", de: "Nairobi (2 Tage) → Amboseli (2 Tage) → Masai Mara (4 Tage) → Mombasa / Küste (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nairobi", en: "Return flight Paris–Nairobi", es: "Vuelo ida y vuelta Madrid–Nairobi", de: "Hin- und Rückflug Paris–Nairobi" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "600–900 €" },
            { label: { fr: "Vols intérieurs + safaris", en: "Domestic flights + safaris", es: "Vuelos internos + safaris", de: "Inlandsflüge + Safaris" }, amount: "600–900 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entrance fees", es: "Tasas de entrada a los parques", de: "Parkeintrittsgebühren" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & imprévus", en: "Food & contingency", es: "Comida e imprevistos", de: "Essen und unvorhergesehene Ereignisse" }, amount: "300–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nairobi", en: "Return flight Paris–Nairobi", es: "Vuelo ida y vuelta Madrid–Nairobi", de: "Hin- und Rückflug Paris–Nairobi" }, amount: "600–900 €" },
            { label: { fr: "Lodges safari (10 nuits)", en: "Safari lodges (10 nights)", es: "Lodges de safari (10 noches)", de: "Safari-Lodges (10 Nächte)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Vols intérieurs + safaris guidés", en: "Domestic flights + guided safaris", es: "Vuelos internos + safaris guiados", de: "Inlandsflüge + geführte Safaris" }, amount: "1 000–1 500 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entrance fees", es: "Tasas de entrada a los parques", de: "Parkeintrittsgebühren" }, amount: "400–600 €" },
            { label: { fr: "Extras & imprévus", en: "Extras & contingency", es: "Extras e imprevistos", de: "Extras und Unvorhergesehenes" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nairobi (Business)", en: "Return flight Paris–Nairobi (Business)", es: "Vuelo ida y vuelta Madrid–Nairobi (business)", de: "Hin- und Rückflug Paris–Nairobi (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Tented camps & lodges 5★ (10 nuits)", en: "5-star tented camps & lodges (10 nights)", es: "Campamentos con tiendas y lodges 5★ (10 noches)", de: "Zeltlager und Lodges 5★ (10 Nächte)" }, amount: "4 000–8 000 €" },
            { label: { fr: "Vols charter privés", en: "Private charter flights", es: "Vuelos chárter privados", de: "Private Charterflüge" }, amount: "2 000–4 000 €" },
            { label: { fr: "Montgolfière & expériences", en: "Hot-air balloon & experiences", es: "Globo aerostático y experiencias", de: "Heißluftballonfahrten und Erlebnisse" }, amount: "800–1 500 €" },
            { label: { fr: "Imprévus", en: "Contingency", es: "Imprevistos", de: "Unerwartet" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~8,5h (Kenya Airways direct, Air France via escale)", en: "~8.5h (Kenya Airways direct, Air France with a stopover)", es: "~8,5h (Kenya Airways directo, Air France con escala)", de: "ca. 8,5 Std. (Kenya Airways direkt, Air France mit Zwischenstopp)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "e-Visa en ligne (~51 USD, 90 jours) — etakenya.go.ke", en: "Online e-Visa (~51 USD, 90 days) — etakenya.go.ke", es: "e-Visa en línea (~51 USD, 90 días) — etakenya.go.ke", de: "E-Visum online (ca. 51 USD, 90 Tage) – etakenya.go.ke" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Shilling (1€ ≈ 145 KES) — dollars acceptés", en: "Shilling (1€ ≈ 145 KES) — dollars accepted", es: "Chelín (1€ ≈ 145 KES) — se aceptan dólares", de: "Schilling (1 € ≈ 145 KES) – Dollar akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Swahili + anglais (officielle)", en: "Swahili + English (official)", es: "Suajili + inglés (oficiales)", de: "Suaheli + Englisch (offiziell)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G – 240 V (comme UK)", en: "Type G – 240V (like the UK)", es: "Tipo G – 240 V (como en el Reino Unido)", de: "Typ G – 240 V (wie Großbritannien)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture, SIM locale ~5€ (Safaricom)", en: "Good coverage, local SIM ~5€ (Safaricom)", es: "Buena cobertura, SIM local ~5€ (Safaricom)", de: "Gute Abdeckung, lokale SIM ca. 5€ (Safaricom)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water recommended", es: "No potable — se recomienda agua embotellada", de: "Kein Trinkwasser – Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen OBLIGATOIRE — fièvre jaune si certaines zones", en: "Antimalarial treatment MANDATORY — yellow fever vaccine required for certain areas", es: "Antipalúdico OBLIGATORIO — fiebre amarilla para ciertas zonas", de: "Antimalariamittel OBLIGATORISCH – Gelbfieber in bestimmten Gebieten" } },
  ],
};
