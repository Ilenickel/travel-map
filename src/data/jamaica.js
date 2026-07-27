export const JAMAICA = {
  code: "JAM",
  numericId: 388,
  name: { fr: "Jamaïque", en: "Jamaica", es: "Jamaica", de: "Jamaika" },
  emoji: "🇯🇲",
  capital: { fr: "Kingston", en: "Kingston", es: "Kingston", de: "Kingston" },
  language: { fr: "Anglais, Créole jamaïcain", en: "English, Jamaican Creole", es: "Inglés, criollo jamaicano", de: "Englisch, jamaikanisches Kreol" },
  currency: { fr: "Dollar jamaïcain (JMD)", en: "Jamaican dollar (JMD)", es: "Dólar jamaicano (JMD)", de: "Jamaika-Dollar (JMD)" },
  timezone: "UTC-5",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 1800, tripMid: 4000,
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
    plongee: 2,
  },
  description: {
    fr: "La Jamaïque est l'âme des Caraïbes : berceau du reggae et de Bob Marley, des Blue Mountains (le meilleur café du monde), des couchers de soleil légendaires de Negril et des plages animées de Montego Bay. Une île vibrante, colorée et profondément musicale qui définit la culture caribéenne.", en: "Jamaica is the soul of the Caribbean: the birthplace of reggae and Bob Marley, home to the Blue Mountains and their world-class coffee, Negril's legendary sunsets and the lively beaches of Montego Bay. It is a vibrant, colourful and deeply musical island that defines Caribbean culture.", es: "Jamaica es el alma del Caribe: cuna del reggae y de Bob Marley, hogar de las Blue Mountains (el mejor café del mundo), de las legendarias puestas de sol de Negril y de las animadas playas de Montego Bay. Una isla vibrante, colorida y profundamente musical que define la cultura caribeña.", de: "Jamaika ist die Seele der Karibik: Geburtsort von Reggae und Bob Marley, die Blue Mountains (der beste Kaffee der Welt), die legendären Sonnenuntergänge von Negril und die pulsierenden Strände von Montego Bay. Eine lebendige, farbenfrohe und zutiefst musikalische Insel, die die karibische Kultur definiert.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : températures idéales (26–28 °C), pas de cyclones, mer calme, festivals musicaux (Reggae Sumfest en juillet mais après la saison sèche).", en: "The best time to go: ideal temperatures (26–28°C), no hurricanes, calm seas and a relaxed island rhythm. Major music events such as Reggae Sumfest happen later in July, outside the dry season.", es: "La mejor época para ir: temperaturas ideales (26–28 °C), sin ciclones, mar en calma, festivales musicales (el Reggae Sumfest en julio, pero después de la temporada seca).", de: "Beste Zeit: ideale Temperaturen (26–28°C), keine Wirbelstürme, ruhige See, Musikfestivals (Reggae Sumfest im Juli, aber nach der Trockenzeit).",
      },
      icon: "🎵",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August", es: "Julio – Agosto", de: "Juli – August" },
      label: { fr: "Été chaud", en: "Hot summer", es: "Verano cálido", de: "heißer Sommer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur (30–32 °C) et humidité, risque de cyclones. Reggae Sumfest en juillet — ambiance unique pour les fans de musique.", en: "Hot and humid (30–32°C), with a hurricane risk. Reggae Sumfest in July brings a one-of-a-kind atmosphere for music lovers.", es: "Calor (30–32 °C) y humedad, riesgo de ciclones. El Reggae Sumfest en julio ofrece un ambiente único para los amantes de la música.", de: "Hitze (30–32°C) und Feuchtigkeit, Zyklongefahr. Reggae Sumfest im Juli – einzigartige Atmosphäre für Musikfans.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "montego_bay",
      name: "Montego Bay",
      region: { fr: "Nord-Ouest", en: "North-west", es: "Noroeste", de: "Nordwest" },
      data: [
        { month: "Jan", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Mar", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 80,  icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 90,  icon: "⛅" },
        { month: "Sep", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "kingston",
      name: "Kingston",
      region: { fr: "Sud-Est", en: "South-east", es: "Sureste", de: "Südost" },
      data: [
        { month: "Jan", temp: 25, rain: 20,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Jul", temp: 30, rain: 40,  icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 20,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Montego Bay & Doctor's Cave", en: "Montego Bay & Doctor's Cave", es: "Montego Bay y Doctor's Cave", de: "Montego Bay und Doctor's Cave" },
      region: { fr: "Nord-Ouest", en: "North-west", es: "Noroeste", de: "Nordwest" },
      description: {
        fr: "Montego Bay est la capitale touristique de la Jamaïque : Doctor's Cave Beach, plage historique aux eaux claires, les chutes de Dunn's River à Ocho Ríos (1h30 de route), et Rose Hall Great House avec sa légende de la « Sorcière Blanche ». Hub de tous les circuits île.", en: "Montego Bay is Jamaica's tourism capital: Doctor's Cave Beach with its clear historic waters, Dunn's River Falls in Ocho Ríos (about 1h30 away by road), and Rose Hall Great House with its White Witch legend. It is also the island's main hub for excursions.", es: "Montego Bay es la capital turística de Jamaica: Doctor's Cave Beach, playa histórica de aguas claras, las cascadas de Dunn's River en Ocho Ríos (a 1h30 en coche), y Rose Hall Great House con su leyenda de la «Bruja Blanca». Es el punto de partida de todos los circuitos de la isla.", de: "Montego Bay ist die Touristenhauptstadt Jamaikas: Doctor's Cave Beach, ein historischer Strand mit klarem Wasser, Dunn's River Falls in Ocho Ríos (1 Std. 30 Min. Fahrt) und Rose Hall Great House mit seiner Legende von der „Weißen Hexe“. Knotenpunkt aller Inselrundfahrten.",
      },
      wikipedia: "Montego_Bay",
      tags: ["Plage", "Luxe", "Nature"],
      mustSee: [
        { name: { fr: "Doctor's Cave Beach — eaux cristallines historiques", en: "Doctor's Cave Beach — historic crystal-clear waters", es: "Doctor's Cave Beach — aguas cristalinas históricas", de: "Doctor's Cave Beach – historisches kristallklares Wasser" }, wikipedia: "File:Doctors-Cave-Beach.jpg" },
        { name: { fr: "Chutes de Dunn's River (Ocho Ríos)", en: "Dunn's River Falls (Ocho Ríos)", es: "Cascadas de Dunn's River (Ocho Ríos)", de: "Dunn's River Falls (Ocho Ríos)" }, wikipedia: "Dunn's_River_Falls" },
        { name: { fr: "Rose Hall Great House — légende de la Sorcière Blanche", en: "Rose Hall Great House — the White Witch legend", es: "Rose Hall Great House — leyenda de la Bruja Blanca", de: "Rose Hall Great House – Legende der Weißen Hexe" }, wikipedia: "File:Rose Hall Jamaica Photo Don Ramey Logan.jpg" },
        { name: { fr: "Snorkel à Coral Gardens (Montego Bay)", en: "Snorkelling at Coral Gardens (Montego Bay)", es: "Buceo con tubo en Coral Gardens (Montego Bay)", de: "Schnorcheln in Coral Gardens (Montego Bay)" }, wikipedia: "File:Montego bay-1001.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Blue Mountains", en: "Blue Mountains", es: "Blue Mountains", de: "Blaue Berge" },
      region: { fr: "Est", en: "East", es: "Este", de: "Ost " },
      description: {
        fr: "Les Blue Mountains, parc national classé UNESCO, culminent à 2 256 m et produisent le café Blue Mountain, l'un des plus chers et réputés du monde. Le trek jusqu'au Blue Mountain Peak (départ 2h du matin pour le lever de soleil) est une expérience inoubliable au-dessus des nuages.", en: "The Blue Mountains, a UNESCO-listed national park, rise to 2,256 metres and produce Blue Mountain coffee, one of the world's most prized and expensive coffees. The trek to Blue Mountain Peak, often starting around 2 a.m. for sunrise, is an unforgettable walk above the clouds.", es: "Las Blue Mountains, parque nacional declarado Patrimonio de la Humanidad por la UNESCO, culminan a 2256 m y producen el café Blue Mountain, uno de los más caros y reputados del mundo. La caminata hasta el Blue Mountain Peak (salida a las 2 de la madrugada para ver el amanecer) es una experiencia inolvidable por encima de las nubes.", de: "Die Blue Mountains, ein UNESCO-Nationalpark, erreichen eine Höhe von 2.256 m und produzieren den Blue Mountain-Kaffee, einen der teuersten und berühmtesten der Welt. Die Wanderung zum Blue Mountain Peak (Abfahrt um 2 Uhr morgens zum Sonnenaufgang) ist ein unvergessliches Erlebnis über den Wolken.",
      },
      wikipedia: "File:JM Blue Mountain Peak 1010 (12) (17257070915).jpg",
      tags: ["UNESCO", "Randonnée", "Gastronomie", "Nature"],
      mustSee: [
        { name: { fr: "Blue Mountain Peak (2 256 m) — lever de soleil", en: "Blue Mountain Peak (2,256 m) — sunrise", es: "Blue Mountain Peak (2256 m) — amanecer", de: "Blue Mountain Peak (2.256 m) – Sonnenaufgang" }, wikipedia: "Blue_Mountain_Peak" },
        { name: { fr: "Plantation de café — torréfaction artisanale", en: "Coffee plantation — small-batch roasting", es: "Plantación de café — tostado artesanal", de: "Kaffeeplantage – handwerkliche Röstung" }, wikipedia: "File:Fog_hangs_over_the_village_of_Section_in_the_Blue_Mountains_of_Portland_Parish,_Jamaica.jpg" },
        { name: { fr: "Forêt nuageuse — oiseaux endémiques", en: "Cloud forest — endemic birds", es: "Bosque nuboso — aves endémicas", de: "Nebelwald – endemische Vögel" }, wikipedia: "File:JM Blue Mountain Peak 1010 (12) (17257070915).jpg" },
        { name: { fr: "Mavis Bank — village café authentique", en: "Mavis Bank — an authentic coffee village", es: "Mavis Bank — auténtico pueblo cafetero", de: "Mavis Bank – authentisches Dorfcafé" }, wikipedia: "File:Mavis bank.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Negril", en: "Negril", es: "Negril", de: "Negril" },
      region: { fr: "Ouest", en: "West", es: "Oeste", de: "Westen" },
      description: {
        fr: "Negril est la capitale des couchers de soleil de la Jamaïque : Seven Mile Beach (l'une des plus longues des Caraïbes), Rick's Café où les locaux plongent depuis les falaises de corail, et la récente réputation de Negril comme haut lieu du reggae et de la vie nocturne décontractée.", en: "Negril is Jamaica's sunset capital: Seven Mile Beach, one of the longest beaches in the Caribbean, Rick's Café where locals dive from coral cliffs, and a newfound reputation as a laid-back reggae and nightlife hotspot.", es: "Negril es la capital de las puestas de sol de Jamaica: Seven Mile Beach (una de las playas más largas del Caribe), Rick's Café, donde los lugareños se lanzan desde los acantilados de coral, y su reciente fama como meca del reggae y de una vida nocturna relajada.", de: "Negril ist die Sonnenuntergangshauptstadt Jamaikas: Seven Mile Beach (einer der längsten in der Karibik), Rick's Café, wo Einheimische von den Korallenklippen tauchen, und Negrils jüngster Ruf als Mekka für Reggae und entspanntes Nachtleben.",
      },
      wikipedia: "Negril",
      tags: ["Plage", "Nature", "Nightlife"],
      mustSee: [
        { name: { fr: "Seven Mile Beach — 11 km de sable doré", en: "Seven Mile Beach — 11 km of golden sand", es: "Seven Mile Beach — 11 km de arena dorada", de: "Seven Mile Beach – 11 km goldener Sand" }, wikipedia: "File:Jamaica, Negril - Flickr - VV Nincic.jpg" },
        { name: { fr: "Plongée récifs coralliens (Throne Room Cave)", en: "Coral reef diving (Throne Room Cave)", es: "Buceo en arrecifes de coral (Throne Room Cave)", de: "Korallenrifftauchen (Throne Room Cave)" }, wikipedia: "File:Yellow stingray (Urobatis jamaicensis).jpg" },
        { name: { fr: "Coucher de soleil légendaire de Negril", en: "Negril's legendary sunset", es: "La legendaria puesta de sol de Negril", de: "Legendärer Negril-Sonnenuntergang" }, wikipedia: "File:Jamaica - Negril - 036.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Kingston — Berceau du Reggae", en: "Kingston — Birthplace of Reggae", es: "Kingston — Cuna del Reggae", de: "Kingston – Wiege des Reggae" },
      region: { fr: "Est", en: "East", es: "Este", de: "Ost " },
      description: {
        fr: "Kingston est la capitale culturelle de la Jamaïque : le Bob Marley Museum (ancienne maison du chanteur), le quartier Trench Town où est né le reggae, la National Gallery of Jamaica et Devon House avec ses glaces artisanales légendaires composent un circuit culturel unique.", en: "Kingston is Jamaica's cultural capital: the Bob Marley Museum in the singer's former home, Trench Town where reggae was born, the National Gallery of Jamaica and Devon House with its legendary ice cream make for a uniquely rich cultural route.", es: "Kingston es la capital cultural de Jamaica: el Bob Marley Museum (antigua casa del cantante), el barrio de Trench Town donde nació el reggae, la National Gallery of Jamaica y Devon House con sus legendarios helados artesanales conforman un circuito cultural único.", de: "Kingston ist die Kulturhauptstadt Jamaikas: Das Bob Marley Museum (ehemalige Heimat des Sängers), das Viertel Trench Town, in dem der Reggae geboren wurde, die National Gallery of Jamaica und das Devon House mit seinen legendären handwerklich hergestellten Eissorten bilden einen einzigartigen Kulturrundgang.",
      },
      wikipedia: "Kingston,_Jamaica",
      tags: ["Culture", "Musées", "Art"],
      mustSee: [
        { name: { fr: "Bob Marley Museum (9 Hope Road)", en: "Bob Marley Museum (9 Hope Road)", es: "Bob Marley Museum (9 Hope Road)", de: "Bob Marley Museum (9 Hope Road)" }, wikipedia: "Bob_Marley_Museum" },
        { name: { fr: "Trench Town — berceau du reggae (visite guidée)", en: "Trench Town — birthplace of reggae (guided tour)", es: "Trench Town — cuna del reggae (visita guiada)", de: "Trench Town – Geburtsort des Reggae (Führung)" }, wikipedia: "File:Shop in Trench Town (4547356620).jpg" },
        { name: { fr: "National Gallery of Jamaica (art caribéen)", en: "National Gallery of Jamaica (Caribbean art)", es: "National Gallery of Jamaica (arte caribeño)", de: "National Gallery of Jamaica (karibische Kunst)" }, wikipedia: "National_Gallery_of_Jamaica" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Jamaïque est modérément chère dans les zones touristiques. Les resorts all-inclusive représentent une bonne valeur. En dehors des circuits touristiques, la vie locale est très accessible. Les taxis non officiels sont à négocier.", en: "Jamaica is moderately expensive in the main tourist areas. All-inclusive resorts can be good value, while local life outside the tourist circuit is much more affordable. Unofficial taxis should be negotiated before departure.", es: "Jamaica resulta moderadamente cara en las zonas turísticas. Los resorts todo incluido ofrecen buena relación calidad-precio. Fuera de los circuitos turísticos, la vida local es muy accesible. Los taxis no oficiales hay que negociarlos.", de: "Jamaika ist in Touristengebieten mäßig teuer. All-Inclusive-Resorts bieten ein gutes Preis-Leistungs-Verhältnis. Außerhalb der Touristenströme ist das Leben vor Ort sehr gut zugänglich. Inoffizielle Taxis sind zu verhandeln.",
    },
    currency: "JMD",
    exchangeRate: "1€ ≈ 175 JMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / B&B (Kingston ou Negril)", en: "Guesthouse / B&B (Kingston or Negril)", es: "Casa de huéspedes / B&B (Kingston o Negril)", de: "Gästehaus / B&B (Kingston oder Negril)" }, price: "30–60 €", detail: { fr: "Chambres avec ventilateur ou clim", en: "Rooms with fan or air conditioning", es: "Habitaciones con ventilador o aire acondicionado", de: "Zimmer mit Ventilator oder Klimaanlage" } },
          { label: { fr: "Hôtel 3★ Montego Bay", en: "3-star hotel in Montego Bay", es: "Hotel 3★ en Montego Bay", de: "Hotel 3★ Montego Bay" }, price: "80–150 €", detail: { fr: "Piscine, plage à proximité", en: "Pool, beach nearby", es: "Piscina, playa cercana", de: "Schwimmbad, Strand in der Nähe" } },
          { label: { fr: "Resort all-inclusive Negril", en: "All-inclusive resort in Negril", es: "Resort todo incluido en Negril", de: "All-Inclusive-Resort Negril" }, price: "200–400 €/pers", detail: { fr: "Tout inclus, front de mer", en: "All inclusive, beachfront", es: "Todo incluido, frente al mar", de: "All inclusive, direkt am Strand" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Jerk chicken (cuisine de rue)", en: "Jerk chicken (street food)", es: "Jerk chicken (comida callejera)", de: "Jerk Chicken (Streetfood)" }, price: "3–6 €", detail: { fr: "Incontournable jamaïcain", en: "A Jamaican essential", es: "Imprescindible jamaicano", de: "Ein jamaikanisches Muss" } },
          { label: { fr: "Ackee & saltfish (petit-déjeuner national)", en: "Ackee & saltfish (national breakfast)", es: "Ackee & saltfish (desayuno nacional)", de: "Ackee & Saltfish (nationales Frühstück)" }, price: "5–10 €", detail: { fr: "Plat national officiel", en: "The official national dish", es: "Plato nacional oficial", de: "Offizielles Nationalgericht" } },
          { label: { fr: "Restaurant touristique (Blue Mountains café)", en: "Tourist restaurant (Blue Mountains café)", es: "Restaurante turístico (café de las Blue Mountains)", de: "Touristenrestaurant (Blue Mountains Café)" }, price: "15–30 €", detail: { fr: "Fruits tropicaux, rum cake", en: "Tropical fruit, rum cake", es: "Fruta tropical, rum cake", de: "Tropische Früchte, Rumkuchen" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Minibus public (route nord)", en: "Public minibus (north coast route)", es: "Minibús público (ruta norte)", de: "Öffentlicher Kleinbus (Nordroute)" }, price: "3–8 €", detail: { fr: "Montego Bay–Negril (2h)", en: "Montego Bay–Negril (2h)", es: "Montego Bay–Negril (2h)", de: "Montego Bay–Negril (2 Std.)" } },
          { label: { fr: "Taxi touristique (négocié)", en: "Tourist taxi (negotiated)", es: "Taxi turístico (negociado)", de: "Touristentaxi (auf Anfrage)" }, price: "15–30 €", detail: { fr: "Trajet entre villes", en: "Intercity ride", es: "Trayecto entre ciudades", de: "Reisen Sie zwischen Städten" } },
          { label: { fr: "Location voiture (indispensable Blue Mountains)", en: "Car rental (useful for the Blue Mountains)", es: "Alquiler de coche (indispensable para las Blue Mountains)", de: "Autovermietung (unverzichtbar in den Blue Mountains)" }, price: "50–80 €/j", detail: { fr: "Prudence — conduite à gauche", en: "Drive carefully — traffic keeps left", es: "Precaución — se conduce por la izquierda", de: "Achtung – Linksverkehr" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Bob Marley Museum (Kingston)", en: "Bob Marley Museum (Kingston)", es: "Bob Marley Museum (Kingston)", de: "Bob Marley Museum (Kingston)" }, price: "20–25 €", detail: { fr: "Visite guidée 1h30", en: "1h30 guided tour", es: "Visita guiada de 1h30", de: "Führung 1 Std. 30 Min." } },
          { label: { fr: "Chutes Dunn's River (escalade)", en: "Dunn's River Falls (climb)", es: "Cascadas de Dunn's River (escalada)", de: "Dunn's River Falls (Klettern)" }, price: "20–25 €", detail: { fr: "Entrée + guide", en: "Entry + guide", es: "Entrada + guía", de: "Eintritt + Führung" } },
          { label: { fr: "Trek Blue Mountain Peak (guide requis)", en: "Blue Mountain Peak trek (guide required)", es: "Trekking al Blue Mountain Peak (guía requerido)", de: "Blue Mountain Peak Trek (Führer erforderlich)" }, price: "40–70 €", detail: { fr: "Départ 2h du matin", en: "Departure around 2 a.m.", es: "Salida a las 2 de la madrugada", de: "Abfahrt 2 Uhr morgens" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Guesthouse + jerk chicken + minibus", en: "Guesthouse + jerk chicken + minibus", es: "Casa de huéspedes + jerk chicken + minibús", de: "Gästehaus + Jerk Chicken + Minibus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 3★ + restos + excursions guidées", en: "3-star hotel + restaurants + guided excursions", es: "Hotel 3★ + restaurantes + excursiones guiadas", de: "3★ Hotel + Restaurants + geführte Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "400 €/j+", desc: { fr: "Resort all-inclusive 5★ + guide privé + spa", en: "5-star all-inclusive resort + private guide + spa", es: "Resort todo incluido 5★ + guía privado + spa", de: "5★ All-Inclusive-Resort + privater Reiseführer + Spa" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Montego Bay (3j) → Negril (2j) → Blue Mountains (2j) → Kingston (2j) → Ocho Ríos (1j)", en: "Montego Bay (3d) → Negril (2d) → Blue Mountains (2d) → Kingston (2d) → Ocho Ríos (1d)", es: "Montego Bay (3d) → Negril (2d) → Blue Mountains (2d) → Kingston (2d) → Ocho Ríos (1d)", de: "Montego Bay (3 Tage) → Negril (2 Tage) → Blue Mountains (2 Tage) → Kingston (2 Tage) → Ocho Ríos (1 Tag)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Jamaïque", en: "Return flight Paris–Jamaica", es: "Vuelo ida y vuelta Madrid–Jamaica", de: "Hin- und Rückflug Paris–Jamaika" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "400–650 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–450 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "200–350 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "4 000 – 5 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Jamaïque", en: "Return flight Paris–Jamaica", es: "Vuelo ida y vuelta Madrid–Jamaica", de: "Hin- und Rückflug Paris–Jamaika" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture & rhum", en: "Food & rum", es: "Comida y ron", de: "Essen & Rum" }, amount: "600–900 €" },
            { label: { fr: "Location voiture + excursions", en: "Car rental + excursions", es: "Alquiler de coche + excursiones", de: "Autovermietung + Ausflüge" }, amount: "700–1 000 €" },
            { label: { fr: "Activités & extras", en: "Activities & extras", es: "Actividades y extras", de: "Aktivitäten & Extras" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Jamaïque (Business)", en: "Return flight Paris–Jamaica (business)", es: "Vuelo ida y vuelta Madrid–Jamaica (business)", de: "Hin- und Rückflug Paris–Jamaika (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Resort all-inclusive 5★ (10 nuits)", en: "5-star all-inclusive resort (10 nights)", es: "Resort todo incluido 5★ (10 noches)", de: "All-Inclusive-Resort 5★ (10 Nächte)" }, amount: "3 500–6 000 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa", es: "Alta gastronomía y spa", de: "Gastronomie & Spa" }, amount: "800–1 500 €" },
            { label: { fr: "Circuit privé + guide", en: "Private tour + guide", es: "Circuito privado + guía", de: "Private Tour + Führer" }, amount: "500–800 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~10h avec escale (British Airways via Londres, Air France via Miami)", en: "~10h with a layover (British Airways via London, Air France via Miami)", es: "~10h con escala (British Airways vía Londres, Air France vía Miami)", de: "ca. 10 Std. mit Zwischenstopp (British Airways via London, Air France via Miami)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa 90 jours (Français)", en: "No visa required for French citizens for stays up to 90 days", es: "Sin visado 90 días (españoles)", de: "Visumfrei 90 Tage (Französisch)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dollar jamaïcain (1€ ≈ 175 JMD) — USD acceptés", en: "Jamaican dollar (1€ ≈ 175 JMD) — USD widely accepted", es: "Dólar jamaicano (1€ ≈ 175 JMD) — se acepta el USD", de: "Jamaika-Dollar (1 € ≈ 175 JMD) – USD akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (officiel) + Créole jamaïcain (patois)", en: "English (official) + Jamaican Creole (patois)", es: "Inglés (oficial) + criollo jamaicano (patois)", de: "Englisch (offiziell) + jamaikanisches Kreol (Patois)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B – 110 V (comme USA)", en: "Type A/B – 110V (same as the US)", es: "Tipo A/B – 110 V (como en EE. UU.)", de: "Typ A/B – 110 V (wie USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture nationale (Digicel, Flow)", en: "Good national coverage (Digicel, Flow)", es: "Buena cobertura nacional (Digicel, Flow)", de: "Gute landesweite Abdeckung (Digicel, Flow)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable en général — eau en bouteille recommandée", en: "Generally not drinkable — bottled water recommended", es: "Generalmente no potable — se recomienda agua embotellada", de: "Im Allgemeinen nicht trinkbar – Wasser in Flaschen wird empfohlen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas d'antipaludéen requis. Dengue possible en saison humide.", en: "No malaria prophylaxis required. Dengue is possible during the wet season.", es: "No se requiere antipalúdico. Posible dengue en temporada húmeda.", de: "Kein Malariamittel erforderlich. In der Regenzeit ist Dengue-Fieber möglich." } },
  ],
};
