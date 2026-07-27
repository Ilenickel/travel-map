export const GEORGIA = {
  code: "GEO",
  numericId: 268,
  name: { fr: "Géorgie", en: "Georgia", es: "Georgia", de: "Georgien" },
  emoji: "🇬🇪",
  capital: { fr: "Tbilissi", en: "Tbilisi", es: "Tiflis", de: "Tiflis" },
  language: { fr: "Géorgien", en: "Georgian", es: "Georgiano", de: "Georgisch" },
  currency: { fr: "Lari (GEL)", en: "Lari (GEL)", es: "Lari (GEL)", de: "Lari (GEL)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1100, tripMid: 2000,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 1,
  },
  description: {
    fr: "La Géorgie est l'une des destinations les plus authentiques et abordables d'Europe orientale. Entre les monastères perchés dans les montagnes du Caucase, la vieille ville de Tbilissi aux maisons à balcons sculptés, les vignobles de Kakhétie et la côte Noire de Batoumi, c'est un pays qui émerveille.", en: "Georgia is one of Eastern Europe's most authentic and affordable destinations. Between monasteries perched in the Caucasus mountains, Tbilisi's old town with its carved wooden balconies, the vineyards of Kakheti and Batumi's Black Sea coast, it is a country that never fails to amaze.", es: "Georgia es uno de los destinos más auténticos y asequibles de Europa oriental. Entre monasterios encaramados en las montañas del Cáucaso, el casco antiguo de Tiflis con sus balcones de madera tallada, los viñedos de Kajetia y la costa del mar Negro de Batumi, es un país que maravilla.", de: "Georgien ist eines der authentischsten und erschwinglichsten Reiseziele in Osteuropa. Zwischen den Klöstern im Kaukasus, der Altstadt von Tiflis mit ihren Häusern mit geschnitzten Balkonen, den Weinbergen von Kachetien und der Schwarzen Küste von Batumi ist es ein Land, das staunen lässt.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Juin", en: "May – June", es: "Mayo – Junio", de: "Mai – Juni" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera", de: "Frühling" },
      color: "#22c55e",
      description: {
        fr: "Températures douces (18–25 °C), nature verdoyante, idéal pour les randonnées en montagne (Svanétie, Kazbégi).", en: "Mild temperatures (18–25 °C), lush green landscapes, and ideal conditions for mountain hikes (Svaneti, Kazbegi).", es: "Temperaturas suaves (18–25 °C), naturaleza exuberante, ideal para el senderismo de montaña (Svanetia, Kazbegi).", de: "Milde Temperaturen (18–25°C), grüne Natur, ideal für Bergwanderungen (Swanetien, Kasbegi).",
      },
      icon: "🌿",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October", es: "Septiembre – Octubre", de: "September – Oktober" },
      label: { fr: "Vendanges", en: "Harvest season", es: "Vendimia", de: "Ernte" },
      color: "#fb923c",
      description: {
        fr: "Saison des vendanges en Kakhétie, feuillages d'automne en montagne, températures agréables (15–22 °C).", en: "Harvest season in Kakheti, autumn foliage in the mountains, and pleasant temperatures (15–22 °C).", es: "Temporada de vendimia en Kajetia, follaje otoñal en las montañas, temperaturas agradables (15–22 °C).", de: "Erntezeit in Kachetien, Herbstlaub in den Bergen, angenehme Temperaturen (15–22°C).",
      },
      icon: "🍇",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August", es: "Julio – Agosto", de: "Juli – August" },
      label: { fr: "Été en montagne", en: "Summer in the mountains", es: "Verano en la montaña", de: "Sommer in den Bergen" },
      color: "#3b82f6",
      description: {
        fr: "Chaud à Tbilissi (26 °C) mais parfait pour les randonnées en altitude et la côte de Batoumi.", en: "Hot in Tbilisi (26 °C), but perfect for high-altitude hikes and time on the Batumi coast.", es: "Caluroso en Tiflis (26 °C) pero perfecto para el senderismo de altitud y la costa de Batumi.", de: "Heiß in Tiflis (26°C), aber perfekt für Höhenwanderungen und die Küste von Batumi.",
      },
      icon: "⛰️",
    },
  ],

  weatherCities: [
    {
      id: "tbilisi",
      name: "Tbilissi",
      region: { fr: "Est", en: "East", es: "Este", de: "Ost " },
      data: [
        { month: "Jan", temp: 3,  rain: 20,  icon: "❄️" },
        { month: "Fév", temp: 4,  rain: 25,  icon: "⛅" },
        { month: "Mar", temp: 8,  rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 14, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 35,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 15, rain: 45,  icon: "⛅" },
        { month: "Nov", temp: 9,  rain: 35,  icon: "⛅" },
        { month: "Déc", temp: 4,  rain: 25,  icon: "⛅" },
      ],
    },
    {
      id: "batumi",
      name: "Batoumi",
      region: { fr: "Adjarie (côte Noire)", en: "Adjara (Black Sea coast)", es: "Ayaria (costa del mar Negro)", de: "Adjara (Schwarze Küste)" },
      data: [
        { month: "Jan", temp: 9,  rain: 200, icon: "⛅" },
        { month: "Fév", temp: 9,  rain: 150, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 140, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 130, icon: "☀️" },
        { month: "Mai", temp: 20, rain: 145, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 150, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 230, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 310, icon: "⛅" },
        { month: "Nov", temp: 14, rain: 270, icon: "⛅" },
        { month: "Déc", temp: 11, rain: 240, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Tbilissi", en: "Tbilisi", es: "Tiflis", de: "Tiflis" },
      region: { fr: "Kvemo Kartli", en: "Kvemo Kartli", es: "Kvemo Kartli", de: "Kvemo Kartli" },
      description: {
        fr: "Capitale aux maisons anciennes à balcons en bois sculpté, sulfureux bains de soufre (abanotubani), forteresse Narikala et vie nocturne animée — une ville authentique et attachante.", en: "A capital of old houses with carved wooden balconies, sulphur baths (Abanotubani), the Narikala fortress and lively nightlife — an authentic, endearing city.", es: "Capital de casas antiguas con balcones de madera tallada, baños sulfurosos (Abanotubani), la fortaleza de Narikala y una animada vida nocturna — una ciudad auténtica y entrañable.", de: "Hauptstadt mit alten Häusern mit geschnitzten Holzbalkonen, schwefelhaltigen Schwefelbädern (Abanotubani), der Festung Narikala und einem lebhaften Nachtleben – eine authentische und liebenswerte Stadt.",
      },
      wikipedia: "Tbilisi",
      tags: ["Ville", "Histoire", "Culture", "Nightlife", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Forteresse Narikala", en: "Narikala Fortress", es: "Fortaleza de Narikala", de: "Narikala-Festung" }, wikipedia: "Narikala" },
        { name: { fr: "Cathédrale Sainte-Trinité", en: "Holy Trinity Cathedral", es: "Catedral de la Santísima Trinidad", de: "Kathedrale der Heiligen Dreifaltigkeit" }, wikipedia: "Holy_Trinity_Cathedral_of_Tbilisi" },
        { name: { fr: "Bains sulfureux d'Abanotubani", en: "Abanotubani sulphur baths", es: "Baños sulfurosos de Abanotubani", de: "Schwefelbäder von Abanotubani" }, wikipedia: "Abanotubani" },
        { name: { fr: "Vieille ville", en: "Old Town", es: "Casco antiguo", de: "Altstadt" }, wikipedia: "Old_Tbilisi" },
      ],
    },
    {
      id: 2,
      name: { fr: "Kazbégi & Montagnes", en: "Kazbegi & Mountains", es: "Kazbegi y montañas", de: "Kasbegi und Berge" },
      region: { fr: "Mtskheta-Mtianeti", en: "Mtskheta-Mtianeti", es: "Mtsjeta-Mtianeti", de: "Mzcheta-Mtianeti" },
      description: {
        fr: "Le mont Kazbek (5 047 m) et l'église Guerguéti trônant à 2 170 m offrent des panoramas à couper le souffle. La route militaire géorgienne traverse des paysages épiques.", en: "Mount Kazbek (5,047 m) and the Gergeti church perched at 2,170 m offer breathtaking panoramas. The Georgian Military Road crosses epic landscapes.", es: "El monte Kazbek (5.047 m) y la iglesia de Guerguetí, encaramada a 2.170 m, ofrecen panorámicas de vértigo. La Carretera Militar Georgiana atraviesa paisajes épicos.", de: "Der Berg Kasbek (5.047 m) und die Gergeti-Kirche auf 2.170 m bieten atemberaubende Panoramen. Der Georgian Military Highway führt durch epische Landschaften.",
      },
      wikipedia: "File:Kazbegi, Stepantsminda, Gergeti, Georgia.jpg",
      tags: ["Montagne", "Randonnée", "Nature", "Panorama", "Ski"],
      mustSee: [
        { name: { fr: "Église Guerguéti Trinity", en: "Gergeti Trinity Church", es: "Iglesia de la Trinidad de Guerguetí", de: "Gergetische Dreifaltigkeitskirche" }, wikipedia: "Gergeti_Trinity_Church" },
        { name: { fr: "Mont Kazbek", en: "Mount Kazbek", es: "Monte Kazbek", de: "Berg Kasbek" }, wikipedia: "Mount_Kazbek" },
        { name: "Dariali Gorge", wikipedia: "File:Darial Gorge, Terek River, Georgia.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Svanétie", en: "Svaneti", es: "Svanetia", de: "Swanetien" },
      region: { fr: "Samegrelo-Zemo Svaneti", en: "Samegrelo-Zemo Svaneti", es: "Samegrelo-Zemo Svanetia", de: "Samegrelo-Zemo Swanetien" },
      description: {
        fr: "Région montagneuse sauvage avec ses tours médiévales millénaires, ses villages isolés et ses randonnées parmi les plus belles du Caucase.", en: "A wild mountain region with age-old medieval towers, isolated villages and some of the Caucasus's most beautiful hikes.", es: "Región montañosa salvaje con sus torres medievales milenarias, sus pueblos aislados y algunas de las rutas de senderismo más bellas del Cáucaso.", de: "Wilde Bergregion mit tausendjährigen mittelalterlichen Türmen, abgelegenen Dörfern und einigen der schönsten Wanderungen im Kaukasus.",
      },
      wikipedia: "File:Svaneti, Georgia. 2018 79.jpg",
      tags: ["Montagne", "UNESCO", "Randonnée", "Rural", "Architecture"],
      mustSee: [
        { name: { fr: "Tours svanes de Mestia", en: "Mestia's Svan towers", es: "Torres suanas de Mestia", de: "Swanische Touren durch Mestia" }, wikipedia: "Mestia" },
        { name: { fr: "Glacier d'Ushguli", en: "Ushguli Glacier", es: "Glaciar de Ushguli", de: "Ushguli-Gletscher" }, wikipedia: "Ushguli" },
        { name: { fr: "Randonnée Mestia–Ushguli", en: "Mestia–Ushguli trek", es: "Trekking Mestia–Ushguli", de: "Wanderung Mestia–Uschguli" }, wikipedia: "File:Svaneti, Georgia. 2018 79.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Kakhétie — Route des Vins", en: "Kakheti — Wine Route", es: "Kajetia — Ruta del vino", de: "Kachetien – Weinstraße" },
      region: { fr: "Kakhétie", en: "Kakheti", es: "Kajetia", de: "Kachetien" },
      description: {
        fr: "Berceau de la viticulture mondiale (8 000 ans), les vignobles de Kakhétie et les monastères de Sighnaghi offrent un voyage gastronomique et culturel incomparable.", en: "The cradle of world viticulture (8,000 years old), Kakheti's vineyards and the monasteries of Sighnaghi offer an unparalleled culinary and cultural journey.", es: "Cuna de la viticultura mundial (8.000 años), los viñedos de Kajetia y los monasterios de Sighnaghi ofrecen un viaje gastronómico y cultural incomparable.", de: "Als Wiege des weltweiten Weinbaus (8.000 Jahre) bieten die Weinberge von Kachetien und die Klöster von Sighnaghi eine unvergleichliche gastronomische und kulturelle Reise.",
      },
      wikipedia: "Kakheti",
      tags: ["Gastronomie", "Culture", "Nature"],
      mustSee: [
        { name: { fr: "Monastère de Bodbe", en: "Bodbe Monastery", es: "Monasterio de Bodbe", de: "Bodbe-Kloster" }, wikipedia: "Bodbe_Monastery" },
        { name: { fr: "Sighnaghi — ville de l'amour", en: "Sighnaghi — the city of love", es: "Sighnaghi — la ciudad del amor", de: "Sighnaghi – Stadt der Liebe" }, wikipedia: "File:Sighnaghi IMG 9071 1920.jpg" },
        { name: { fr: "Cave coopérative Tsinandali", en: "Tsinandali cooperative winery", es: "Bodega cooperativa de Tsinandali", de: "Genossenschaftskeller Tsinandali" }, wikipedia: "Tsinandali" },
      ],
    },
    {
      id: 5,
      name: { fr: "Batumi & Côte de la Mer Noire", en: "Batumi & the Black Sea Coast", es: "Batumi y la costa del mar Negro", de: "Batumi und Schwarzmeerküste" },
      region: { fr: "Adjarie", en: "Adjara", es: "Ayaria", de: "Adjara" },
      description: {
        fr: "Station balnéaire pétillante sur la mer Noire, Batumi marie front de mer moderne, vieux quartiers ottomans et architecture audacieuse. Son boulevard, son jardin botanique luxuriant et ses plages voisines en font une destination estivale prisée. La forteresse de Gonio rappelle son passé antique.", en: "A vibrant Black Sea resort, Batumi blends a modern seafront, old Ottoman quarters and bold architecture. Its boulevard, lush botanical garden and nearby beaches make it a sought-after summer destination. The Gonio fortress is a reminder of its ancient past.", es: "Efervescente estación balnearia en el mar Negro, Batumi combina un frente marítimo moderno, antiguos barrios otomanos y una arquitectura atrevida. Su bulevar, su exuberante jardín botánico y sus playas cercanas la convierten en un destino de verano muy popular. La fortaleza de Gonio recuerda su pasado antiguo.", de: "Batumi ist ein glitzernder Badeort am Schwarzen Meer und vereint moderne Uferpromenade, alte osmanische Viertel und kühne Architektur. Sein Boulevard, der üppige botanische Garten und die benachbarten Strände machen es zu einem beliebten Sommerziel. Die Gonio-Festung erinnert an ihre antike Vergangenheit.",
      },
      wikipedia: "Batumi",
      tags: ["Plage", "Ville", "Nature", "Architecture"],
      mustSee: [
        { name: { fr: "Boulevard de Batumi", en: "Batumi Boulevard", es: "Bulevar de Batumi", de: "Batumi-Boulevard" }, wikipedia: "File:Batumi Cycleway.jpg" },
        { name: { fr: "Vieux Batumi — quartier Ottoman", en: "Old Batumi — Ottoman quarter", es: "Antiguo Batumi — barrio otomano", de: "Alt-Batumi – Osmanisches Viertel" }, wikipedia: "Batumi" },
        { name: { fr: "Jardin botanique de Batumi", en: "Batumi Botanical Garden", es: "Jardín botánico de Batumi", de: "Botanischer Garten Batumi" }, wikipedia: "Batumi_Botanical_Garden" },
        { name: { fr: "Plages de Kobuleti", en: "Kobuleti beaches", es: "Playas de Kobuleti", de: "Kobuleti-Strände" }, wikipedia: "File:Kobuleti Beach.JPG" },
        { name: { fr: "Château de Gonio", en: "Gonio Fortress", es: "Fortaleza de Gonio", de: "Gonio-Schloss" }, wikipedia: "File:Gonio-Apsaros Fortress-Museum.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Géorgie est l'une des destinations les plus économiques d'Europe/Asie. La nourriture, le logement et les transports sont remarquablement bon marché.", en: "Georgia is one of the most budget-friendly destinations in Europe/Asia. Food, accommodation and transport are remarkably inexpensive.", es: "Georgia es uno de los destinos más económicos de Europa/Asia. La comida, el alojamiento y el transporte son notablemente baratos.", de: "Georgien ist eines der günstigsten Reiseziele in Europa/Asien. Essen, Unterkunft und Transport sind bemerkenswert günstig.",
    },
    currency: "GEL",
    exchangeRate: "1€ ≈ 2,90 GEL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / homestay room", es: "Guesthouse / habitación con anfitrión local", de: "Gästehaus / Gastfamilie" }, price: "10–20 €", detail: { fr: "Souvent avec petit-déjeuner", en: "Often includes breakfast", es: "A menudo con desayuno incluido", de: "Oft mit Frühstück" } },
          { label: { fr: "Hôtel 3★", en: "3★ hotel", es: "Hotel 3★", de: "Hotel 3★" }, price: "30–55 €", detail: { fr: "Confort correct à Tbilissi", en: "Decent comfort in Tbilisi", es: "Confort correcto en Tiflis", de: "Richtiger Komfort in Tiflis" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel", es: "Hotel boutique 4★", de: "Boutique-Hotel 4★" }, price: "70–120 €", detail: { fr: "Vieille ville de Tbilissi", en: "In Tbilisi's old town", es: "En el casco antiguo de Tiflis", de: "Altstadt von Tiflis" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Khachapuri (pain au fromage)", en: "Khachapuri (cheese bread)", es: "Khachapuri (pan de queso)", de: "Khachapuri (Käsebrot)" }, price: "2–4 €", detail: { fr: "Plat national incontournable", en: "An unmissable national dish", es: "Plato nacional imprescindible", de: "Unverzichtbares Nationalgericht" } },
          { label: { fr: "Restaurant local (khinkali)", en: "Local restaurant (khinkali)", es: "Restaurante local (khinkali)", de: "Lokales Restaurant (Khinkali)" }, price: "5–10 €", detail: { fr: "Raviolis géorgiens, délicieux", en: "Delicious Georgian dumplings", es: "Deliciosos raviolis georgianos", de: "Georgische Ravioli, lecker" } },
          { label: { fr: "Restaurant gastronomique", en: "Fine-dining restaurant", es: "Restaurante gastronómico", de: "Gourmet-Restaurant" }, price: "20–40 €", detail: { fr: "Tbilissi, cuisine moderne géorgienne", en: "In Tbilisi, modern Georgian cuisine", es: "En Tiflis, cocina georgiana moderna", de: "Tiflis, moderne georgische Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Marshrutka (minibus)", en: "Marshrutka (minibus)", es: "Marshrutka (minibús)", de: "Marshrutka (Kleinbus)" }, price: "1–5 €", detail: { fr: "Réseau dense entre villes", en: "Dense network between cities", es: "Red densa entre ciudades", de: "Dichtes Netz zwischen Städten" } },
          { label: { fr: "Taxi Tbilissi (Yandex)", en: "Tbilisi taxi (Yandex)", es: "Taxi en Tiflis (Yandex)", de: "Taxi Tiflis (Yandex)" }, price: "1–3 €", detail: { fr: "Application recommandée", en: "Recommended app", es: "Aplicación recomendada", de: "Empfohlene Anwendung" } },
          { label: { fr: "Location 4×4 / jour", en: "4×4 rental / day", es: "Alquiler de 4x4 / día", de: "4×4-Vermietung / Tag" }, price: "40–70 €", detail: { fr: "Indispensable pour la Svanétie", en: "Essential for Svaneti", es: "Indispensable para Svanetia", de: "Unverzichtbar für Swanetien" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Bains de soufre d'Abanotubani", en: "Abanotubani sulphur baths", es: "Baños sulfurosos de Abanotubani", de: "Abanotubani-Schwefelbäder" }, price: "5–15 €", detail: { fr: "Cabine privée ou bain commun", en: "Private room or shared bath", es: "Cabina privada o baño común", de: "Private Kabine oder Gemeinschaftsbad" } },
          { label: { fr: "Dégustation de vins en Kakhétie", en: "Wine tasting in Kakheti", es: "Cata de vinos en Kajetia", de: "Weinprobe in Kachetien" }, price: "10–20 €", detail: { fr: "Avec guide dans les caves", en: "With a guide in the cellars", es: "Con guía en las bodegas", de: "Mit Führer in den Kellern" } },
          { label: { fr: "Guide trek en Svanétie", en: "Trekking guide in Svaneti", es: "Guía de trekking en Svanetia", de: "Wanderführer in Swanetien" }, price: "40–80 €/j", detail: { fr: "Guides locaux recommandés", en: "Local guides recommended", es: "Se recomiendan guías locales", de: "Empfohlene lokale Führer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + restaurants locaux + marshrutkas", en: "Guesthouse + local restaurants + marshrutkas", es: "Guesthouse + restaurantes locales + marshrutkas", de: "Gästehaus + lokale Restaurants + Marshrutkas" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "70–100 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + excursions", en: "3★ hotel + good restaurants + excursions", es: "Hotel 3★ + buenos restaurantes + excursiones", de: "3★ Hotel + gute Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "150 €+/j", desc: { fr: "Hôtel boutique + gastronomie + guide privé", en: "Boutique hotel + fine dining + private guide", es: "Hotel boutique + alta gastronomía + guía privado", de: "Boutique-Hotel + Gastronomie + privater Reiseführer" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Tbilissi (4j) → Kakhétie (2j) → Kazbégi (2j) → Svanétie (4j) → Batoumi (2j)", en: "Tbilisi (4d) → Kakheti (2d) → Kazbegi (2d) → Svaneti (4d) → Batumi (2d)", es: "Tiflis (4d) → Kajetia (2d) → Kazbegi (2d) → Svanetia (4d) → Batumi (2d)", de: "Tiflis (4 Tage) → Kachetien (2 Tage) → Kasbegi (2 Tage) → Swanetien (4 Tage) → Batumi (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tbilissi", en: "Return flight Paris–Tbilisi", es: "Vuelo ida y vuelta Madrid–Tiflis", de: "Hin- und Rückflug Paris–Tiflis" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "200–300 €" },
            { label: { fr: "Transport local", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "100–150 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 000 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tbilissi", en: "Return flight Paris–Tbilisi", es: "Vuelo ida y vuelta Madrid–Tiflis", de: "Hin- und Rückflug Paris–Tiflis" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "600–1 000 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "400–600 €" },
            { label: { fr: "Transport & location", en: "Transport & car rental", es: "Transporte y alquiler de coche", de: "Transport & Vermietung" }, amount: "250–400 €" },
            { label: { fr: "Activités & visites guidées", en: "Activities & guided tours", es: "Actividades y visitas guiadas", de: "Aktivitäten & Führungen" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "5 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tbilissi (direct)", en: "Return flight Paris–Tbilisi (direct)", es: "Vuelo ida y vuelta Madrid–Tiflis (directo)", de: "Hin- und Rückflug Paris–Tiflis (direkt)" }, amount: "800–1 500 €" },
            { label: { fr: "Hébergement boutique (14 nuits)", en: "Boutique accommodation (14 nights)", es: "Alojamiento boutique (14 noches)", de: "Boutique-Unterkunft (14 Nächte)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Gastronomie", en: "Fine dining", es: "Alta gastronomía", de: "Gastronomie" }, amount: "600–1 000 €" },
            { label: { fr: "Transport privé", en: "Private transport", es: "Transporte privado", de: "Privater Transport" }, amount: "500–800 €" },
            { label: { fr: "Guide & expériences", en: "Guide & experiences", es: "Guía y experiencias", de: "Führer & Erlebnisse" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~4h direct (Georgian Airways, Wizz Air)", en: "~4h direct (Georgian Airways, Wizz Air)", es: "~4h directo (Georgian Airways, Wizz Air)", de: "ca. 4 Std. direkt (Georgian Airways, Wizz Air)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (365 jours)", en: "No visa required for French citizens (365 days)", es: "Sin visado para ciudadanos de la UE (365 días)", de: "Visumfrei für Franzosen (365 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Lari (1€ ≈ 2,90 GEL)", en: "Lari (€1 ≈ 2.90 GEL)", es: "Lari (1€ ≈ 2,90 GEL)", de: "Lari (1€ ≈ 2,90 GEL)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Géorgien (russe et anglais chez les jeunes)", en: "Georgian (Russian and English among younger people)", es: "Georgiano (ruso e inglés entre los jóvenes)", de: "Georgisch (Russisch und Englisch unter Jugendlichen)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V", es: "Tipo C/F – 220 V", de: "Typ C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture, SIM locale ~5€/semaine", en: "Good coverage, local SIM ~€5/week", es: "Buena cobertura, SIM local ~5€/semana", de: "Gute Abdeckung, lokale SIM-Karte ca. 5€/Woche" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable à Tbilissi, prudence en province", en: "Drinkable in Tbilisi, caution advised in the countryside", es: "Potable en Tiflis, precaución en el resto del país", de: "Trinken in Tiflis, Vorsicht in der Provinz" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucun vaccin obligatoire, hépatite A conseillée", en: "No mandatory vaccines, hepatitis A recommended", es: "Ninguna vacuna obligatoria, se recomienda hepatitis A", de: "Keine Impfpflicht, Hepatitis A empfohlen" } },
  ],
};
