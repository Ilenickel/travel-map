export const LITHUANIA = {
  code: "LTU",
  numericId: 440,
  name: { fr: "Lituanie", en: "Lithuania", es: "Lituania", de: "Litauen" },
  emoji: "🇱🇹",
  capital: { fr: "Vilnius", en: "Vilnius", es: "Vilna", de: "Vilnius" },
  language: { fr: "Lituanien", en: "Lithuanian", es: "Lituano", de: "Litauisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 2,
    plage: 2,
    plongee: 1,
  },
  description: {
    fr: "La Lituanie est le plus grand et le plus méconnu des États baltes : Vilnius et son extraordinaire vieille ville baroque (UNESCO, la plus grande vieille ville baroque du nord de l'Europe), la flèche de sable de Courlande (UNESCO, la plus grande dune migratrice d'Europe), Kaunas et son Art Déco interwar unique, et Trakai et son château rouge sur une île lacustre.", en: "Lithuania is the largest and least known of the Baltic states: Vilnius with its extraordinary baroque old town (UNESCO, the largest baroque old town in Northern Europe), the sandy Curonian Spit (UNESCO, Europe's largest migrating dune), Kaunas with its unique interwar Art Deco, and Trakai with its red castle on a lake island.", es: "Lituania es el mayor y más desconocido de los Estados bálticos: Vilna con su extraordinario casco antiguo barroco (UNESCO, el casco antiguo barroco más grande del norte de Europa), la Curlandia (UNESCO, la mayor duna móvil de Europa), Kaunas con su Art Déco de entreguerras único, y Trakai con su castillo rojo en una isla lacustre.", de: "Litauen ist der größte und unbekannteste der baltischen Staaten: Vilnius und seine außergewöhnliche barocke Altstadt (UNESCO, die größte barocke Altstadt Nordeuropas), die Kurische Sandnehrung (UNESCO, die größte Wanderdüne Europas), Kaunas und seine einzigartige Art-Déco-Zwischenkriegszeit und Trakai und sein Rotes Schloss auf einer Seeinsel.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Été et automne dorés", en: "Golden summer and autumn", es: "Verano y otoño dorados", de: "Goldener Sommer und Herbst" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (17–22°C), longues journées, festivals (Vilnius City Days, Jazz Festival). Septembre splendide avec les couleurs de forêt.", en: "Pleasant temperatures (17–22°C), long days, festivals (Vilnius City Days, Jazz Festival). September is stunning with the forest colours.", es: "Temperaturas agradables (17–22°C), días largos, festivales (Vilnius City Days, Jazz Festival). Septiembre es espléndido con los colores del bosque.", de: "Angenehme Temperaturen (17–22°C), lange Tage, Festivals (Vilnius City Days, Jazz Festival). Herrlicher September mit Waldfarben.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January", es: "Diciembre – Enero", de: "Dezember – Januar" },
      label: { fr: "Noël baroque", en: "Baroque Christmas", es: "Navidad barroca", de: "Barocke Weihnachten" },
      color: "#f59e0b",
      description: {
        fr: "Marchés de Noël sur la place de la cathédrale de Vilnius, lumières sur les clochers baroques, ambiance magique. Froid (-5°C).", en: "Christmas markets on Vilnius Cathedral Square, lights on the baroque spires, magical atmosphere. Cold (-5°C).", es: "Mercados navideños en la plaza de la catedral de Vilna, luces en los campanarios barrocos, ambiente mágico. Frío (-5°C).", de: "Weihnachtsmärkte auf dem Domplatz von Vilnius, Lichter auf den barocken Glockentürmen, magische Atmosphäre. Kalt (-5°C).",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "vilnius",
      name: "Vilnius",
      region: { fr: "Aukštaitija (est, capitale)", en: "Aukštaitija (east, capital)", es: "Aukštaitija (este, capital)", de: "Aukštaitija (Osten, Hauptstadt)" },
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "curonian_spit",
      name: { fr: "Flèche de Courlande", en: "Curonian Spit", es: "Curlandia", de: "Kurische Nehrung" },
      region: { fr: "Côte baltique (UNESCO)", en: "Baltic coast (UNESCO)", es: "Costa báltica (UNESCO)", de: "Ostseeküste (UNESCO)" },
      data: [
        { month: "Jan", temp: -3, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 60,  icon: "⛅" },
        { month: "Nov", temp:  4, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  0, rain: 50,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Vilnius — Baroque du Nord (UNESCO)", en: "Vilnius — Baroque of the North (UNESCO)", es: "Vilna — Barroco del Norte (UNESCO)", de: "Vilnius – Nördlicher Barock (UNESCO)" },
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      description: {
        fr: "La vieille ville de Vilnius est la plus grande vieille ville baroque du nord de l'Europe (classée UNESCO) : 1 500 bâtiments des XVIe–XVIIIe siècles, 65 églises, la cathédrale néoclassique sur sa grande place et le quartier bohème d'Užupis (qui a déclaré son indépendance comme 'République' artistique en 1997). Le panorama depuis la colline de Gediminas est inoubliable.", en: "Vilnius Old Town is the largest baroque old town in Northern Europe (UNESCO-listed): 1,500 buildings from the 16th–18th centuries, 65 churches, the neoclassical cathedral on its main square, and the bohemian district of Užupis (which declared itself an artistic 'Republic' in 1997). The panorama from Gediminas Hill is unforgettable.", es: "El casco antiguo de Vilna es el mayor casco antiguo barroco del norte de Europa (declarado Patrimonio de la Humanidad): 1.500 edificios de los siglos XVI–XVIII, 65 iglesias, la catedral neoclásica en su gran plaza y el barrio bohemio de Užupis (que declaró su independencia como 'República' artística en 1997). El panorama desde la colina de Gediminas es inolvidable.", de: "Die Altstadt von Vilnius ist die größte barocke Altstadt Nordeuropas (UNESCO-Weltkulturerbe): 1.500 Gebäude aus dem 16.–18. Jahrhundert, 65 Kirchen, die neoklassizistische Kathedrale auf ihrem Hauptplatz und das Künstlerviertel Užupis (das 1997 seine Unabhängigkeit als künstlerische „Republik“ erklärte). Das Panorama vom Gediminas-Hügel ist unvergesslich.",
      },
      wikipedia: "Vilnius",
      tags: ["Architecture", "UNESCO", "Culture", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Vieille Ville baroque de Vilnius (UNESCO) — 65 églises", en: "Baroque Old Town of Vilnius (UNESCO) — 65 churches", es: "Casco antiguo barroco de Vilna (UNESCO) — 65 iglesias", de: "Barocke Altstadt von Vilnius (UNESCO) – 65 Kirchen" }, wikipedia: "Vilnius_Old_Town" },
        { name: { fr: "Tour de Gediminas — panorama sur la ville et ses clochers", en: "Gediminas Tower — panorama over the city and its spires", es: "Torre de Gediminas — panorama sobre la ciudad y sus campanarios", de: "Gediminas-Turm – Panorama der Stadt und ihrer Glockentürme" }, wikipedia: "File:Gedimino pilis by Augustas Didzgalvis.jpg" },
        { name: { fr: "République d'Užupis — quartier artiste avec sa propre constitution", en: "Republic of Užupis — artists' district with its own constitution", es: "República de Užupis — barrio artístico con su propia constitución", de: "Republik Užupis – Künstlerviertel mit eigener Verfassung" }, wikipedia: "Užupis" },
        { name: { fr: "Porte de l'Aurore — Madone miraculeuse vénérée depuis 1671", en: "Gate of Dawn — miraculous Madonna venerated since 1671", es: "Puerta de la Aurora — Virgen milagrosa venerada desde 1671", de: "Tor der Morgenröte – Wundertätige Madonna, die seit 1671 verehrt wird" }, wikipedia: "Gate_of_Dawn" },
      ],
    },
    {
      id: 2,
      name: { fr: "Flèche de Courlande — Dunes UNESCO", en: "Curonian Spit — UNESCO dunes", es: "Curlandia — Dunas UNESCO", de: "Kurische Nehrung – UNESCO-Dünen" },
      region: { fr: "Côte baltique", en: "Baltic coast", es: "Costa báltica", de: "Ostseeküste" },
      description: {
        fr: "La flèche de Courlande (UNESCO) est une langue de sable de 98km séparant le lagon de Courlande de la mer Baltique — la plus grande dune migratrice d'Europe (60m de haut). Les villages de pêcheurs colorés, les forêts de pins et les plages de sable blanc sont accessibles depuis Klaipėda. La partie lituanienne fait partie du parc national de Neringa.", en: "The Curonian Spit (UNESCO) is a 98km sand strip separating the Curonian Lagoon from the Baltic Sea — Europe's largest migrating dune (60m high). Colourful fishing villages, pine forests and white sand beaches are accessible from Klaipėda. The Lithuanian side is part of Neringa National Park.", es: "La Curlandia (UNESCO) es una franja de arena de 98km que separa la laguna de Curlandia del mar Báltico — la mayor duna móvil de Europa (60m de altura). Los coloridos pueblos de pescadores, los bosques de pinos y las playas de arena blanca son accesibles desde Klaipėda. La parte lituana forma parte del parque nacional de Neringa.", de: "Die Kurische Nehrung (UNESCO) ist eine 98 km lange Sandzunge, die das Kurische Haff von der Ostsee trennt – die größte Wanderdüne Europas (60 m hoch). Bunte Fischerdörfer, Pinienwälder und weiße Sandstrände sind von Klaipėda aus erreichbar. Der litauische Teil ist Teil des Neringa-Nationalparks.",
      },
      wikipedia: "Curonian_Spit",
      tags: ["Nature", "UNESCO", "Plage", "Randonnée"],
      mustSee: [
        { name: { fr: "Dunes du Désert mort (Parnidis) — panorama depuis 52m", en: "Dead Dunes of Parnidis — panorama from 52m", es: "Dunas del Desierto Muerto (Parnidis) — panorama desde 52m", de: "Dünen der Toten Wüste (Parnidis) – Panorama aus 52 m Höhe" }, wikipedia: "File:Kurische Nehrung Parnidden-Düne 01.JPG" },
        { name: { fr: "Nida — village de pêcheurs avec maisons en bois colorées", en: "Nida — fishing village with colourful wooden houses", es: "Nida — pueblo de pescadores con casas de madera coloridas", de: "Nida – Fischerdorf mit bunten Holzhäusern" }, wikipedia: "Nida,_Lithuania" },
        { name: { fr: "Plage de Juodkrantė — observation des cormorans et hérons", en: "Juodkrantė beach — cormorant and heron watching", es: "Playa de Juodkrantė — observación de cormoranes y garzas", de: "Strand Juodkrantė – Beobachtung von Kormoranen und Reihern" }, wikipedia: "Juodkrantė" },
      ],
    },
    {
      id: 3,
      name: { fr: "Trakai — Château rouge sur l'eau", en: "Trakai — Red castle on the water", es: "Trakai — Castillo rojo sobre el agua", de: "Trakai – Rotes Schloss auf dem Wasser" },
      region: { fr: "Aukštaitija (à 30km de Vilnius)", en: "Aukštaitija (30km from Vilnius)", es: "Aukštaitija (a 30km de Vilna)", de: "Aukštaitija (30 km von Vilnius entfernt)" },
      description: {
        fr: "Le château de l'île de Trakai (XIVe s.) est le château le plus photographié de Lituanie : brique rouge reflétée dans le lac Galvė, accessible par un pont de bois. La ville est aussi le berceau des Karaïtes — une communauté turcique de 300 personnes installée depuis 600 ans, qui perpétue la cuisine traditionnelle kibinas (chausson karaïte).", en: "Trakai Island Castle (14th c.) is Lithuania's most photographed castle: red brick reflected in Lake Galvė, reached by a wooden bridge. The town is also home to the Karaites — a Turkic community of 300 people settled here for 600 years, who keep alive the traditional kibinas (Karaite pastry) cuisine.", es: "El castillo de la isla de Trakai (s. XIV) es el castillo más fotografiado de Lituania: ladrillo rojo reflejado en el lago Galvė, accesible por un puente de madera. La ciudad es también la cuna de los caraítas — una comunidad túrquica de 300 personas asentada desde hace 600 años, que perpetúa la cocina tradicional del kibinas (empanadilla caraíta).", de: "Das Schloss auf der Insel Trakai (14. Jahrhundert) ist das am meisten fotografierte Schloss Litauens: roter Backstein, der sich im Galvė-See spiegelt und über eine Holzbrücke erreichbar ist. Die Stadt ist auch die Wiege der Karaiten – einer türkischen Gemeinschaft von 300 Menschen, die seit 600 Jahren besteht und die traditionelle Kibinas-Küche (karaitische Pantoffelküche) fortführt.",
      },
      wikipedia: "Trakai_Island_Castle",
      tags: ["Architecture", "Histoire", "Nature", "Spiritualité"],
      mustSee: [
        { name: { fr: "Château de l'île de Trakai — brique rouge sur le lac Galvė", en: "Trakai Island Castle — red brick on Lake Galvė", es: "Castillo de la isla de Trakai — ladrillo rojo sobre el lago Galvė", de: "Inselschloss Trakai – roter Backstein am Galvė-See" }, wikipedia: "Trakai_Island_Castle" },
        { name: { fr: "Kayak ou paddle sur le lac autour du château", en: "Kayaking or paddleboarding on the lake around the castle", es: "Kayak o paddle surf en el lago alrededor del castillo", de: "Fahren Sie Kajak oder paddeln Sie auf dem See rund um die Burg" }, wikipedia: "Trakai" },
        { name: { fr: "Péninsule de Trakai — vue sur 30 lacs depuis la colline", en: "Trakai Peninsula — view over 30 lakes from the hill", es: "Península de Trakai — vistas de 30 lagos desde la colina", de: "Halbinsel Trakai – Blick auf 30 Seen vom Hügel aus" }, wikipedia: "Trakai" },
      ],
    },
    {
      id: 4,
      name: { fr: "Kaunas — Art Déco Interwar", en: "Kaunas — Interwar Art Deco", es: "Kaunas — Art Déco de entreguerras", de: "Kaunas – Art-Deco-Zwischenkrieg" },
      region: { fr: "Žemaitija (centre)", en: "Žemaitija (centre)", es: "Žemaitija (centro)", de: "Žemaitija (Mitte)" },
      description: {
        fr: "Kaunas fut la capitale provisoire de la Lituanie entre les deux guerres (1920–1939) et concentre le plus bel ensemble Art Déco d'Europe du Nord pour cette période. La Laisvės Alėja (Boulevard de la Liberté, piétonne, 1,7km) est bordée de bâtiments interwar exceptionnels. Le musée Čiurlionis expose le peintre symboliste le plus important de Lituanie.", en: "Kaunas was Lithuania's provisional capital between the two world wars (1920–1939) and holds the finest collection of interwar Art Deco architecture in Northern Europe. Laisvės Alėja (Liberty Avenue, a 1.7km pedestrian boulevard) is lined with exceptional interwar buildings. The Čiurlionis Museum showcases Lithuania's most important symbolist painter.", es: "Kaunas fue la capital provisional de Lituania entre las dos guerras (1920–1939) y concentra el conjunto Art Déco más bello del norte de Europa de ese periodo. La Laisvės Alėja (Bulevar de la Libertad, peatonal, 1,7km) está bordeada de edificios excepcionales de entreguerras. El museo Čiurlionis expone al pintor simbolista más importante de Lituania.", de: "Kaunas war zwischen den beiden Kriegen (1920–1939) die provisorische Hauptstadt Litauens und beherbergt in dieser Zeit das schönste Art-déco-Ensemble Nordeuropas. Laisvės Alėja (Freiheitsboulevard, Fußgängerzone, 1,7 km) ist gesäumt von außergewöhnlichen Zwischenkriegsgebäuden. Das Čiurlionis-Museum stellt Litauens bedeutendsten symbolistischen Maler aus.",
      },
      wikipedia: "Kaunas",
      tags: ["Architecture", "Histoire", "Musées", "Ville"],
      mustSee: [
        { name: { fr: "Laisvės Alėja — boulevard Art Déco de 1,7km (piéton)", en: "Laisvės Alėja — 1.7km Art Deco boulevard (pedestrian)", es: "Laisvės Alėja — bulevar Art Déco de 1,7km (peatonal)", de: "Laisvės Alėja – 1,7 km Art-Deco-Boulevard (Fußgängerzone)" }, wikipedia: "File:Laisvės alėja, Kaunas.jpg" },
        { name: { fr: "Musée Čiurlionis — peintre symboliste et compositeur lituanien", en: "Čiurlionis Museum — Lithuanian symbolist painter and composer", es: "Museo Čiurlionis — pintor simbolista y compositor lituano", de: "Čiurlionis-Museum – litauischer symbolistischer Maler und Komponist" }, wikipedia: "File:M. K. Ciurlionis National Art Museum (2018).jpg" },
        { name: { fr: "Château de Kaunas (XIVe s.) au confluent du Neris et Némunas", en: "Kaunas Castle (14th c.) at the confluence of the Neris and Nemunas rivers", es: "Castillo de Kaunas (s. XIV) en la confluencia del Neris y el Nemunas", de: "Burg Kaunas (14. Jahrhundert) am Zusammenfluss von Neris und Nemunas" }, wikipedia: "Kaunas_Castle" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Lituanie est la moins chère des trois capitales baltes. Vilnius est particulièrement abordable pour une capitale de l'UE. Le niveau de restauration a fortement progressé ces dernières années.", en: "Lithuania is the cheapest of the three Baltic capitals. Vilnius is particularly affordable for an EU capital. Dining standards have improved significantly in recent years.", es: "Lituania es la más barata de las tres capitales bálticas. Vilna es especialmente asequible para una capital de la UE. El nivel de la restauración ha progresado mucho en los últimos años.", de: "Litauen ist die günstigste der drei baltischen Hauptstädte. Vilnius ist für eine EU-Hauptstadt besonders erschwinglich. Das Niveau der Gastronomie ist in den letzten Jahren deutlich gestiegen.",
    },
    currency: "EUR",
    exchangeRate: { fr: "1€ = 1€ (zone euro)", en: "1€ = 1€ (eurozone)", es: "1€ = 1€ (zona euro)", de: "1€ = 1€ (Eurozone)" },
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse Vilnius (dortoir ou chambre)", en: "Vilnius youth hostel (dorm or room)", es: "Albergue juvenil en Vilna (dormitorio o habitación)", de: "Vilnius Hostel (Schlafsaal oder Zimmer)" }, price: "18–35 €", detail: { fr: "Nombreuses et bien situées en Vieille Ville", en: "Numerous and well located in the Old Town", es: "Numerosos y bien ubicados en el casco antiguo", de: "Zahlreiche und gut gelegen in der Altstadt" } },
          { label: { fr: "Hôtel 3★ Vilnius Vieille Ville", en: "3★ hotel in Vilnius Old Town", es: "Hotel 3★ en el casco antiguo de Vilna", de: "Hotel 3★ Altstadt von Vilnius" }, price: "55–100 €", detail: { fr: "Souvent dans des bâtisses baroques", en: "Often in baroque buildings", es: "A menudo en edificios barrocos", de: "Oftmals in Barockbauten" } },
          { label: { fr: "Pension Nida (Flèche de Courlande)", en: "Guesthouse in Nida (Curonian Spit)", es: "Pensión en Nida (Curlandia)", de: "Pension Nida (Kurische Nehrung)" }, price: "40–80 €", detail: { fr: "Charme balnéaire de la Baltique", en: "Baltic seaside charm", es: "Encanto balneario del Báltico", de: "Charme der Ostseeküste" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Cepelinai (zeppelins de pomme de terre farcis) dans une kavinė", en: "Cepelinai (stuffed potato dumplings) at a kavinė", es: "Cepelinai (albóndigas de patata rellenas) en una kavinė", de: "Cepelinai (gefüllte Kartoffelzeppeline) in einer Kavinė" }, price: "7–12 €", detail: { fr: "Plat national lituanien, très copieux", en: "Lithuania's national dish, very filling", es: "Plato nacional lituano, muy contundente", de: "Litauisches Nationalgericht, sehr herzhaft" } },
          { label: { fr: "Restaurant mid-range Vilnius Vieille Ville", en: "Mid-range restaurant in Vilnius Old Town", es: "Restaurante de gama media en el casco antiguo de Vilna", de: "Mittelklasserestaurant in der Altstadt von Vilnius" }, price: "12–22 €", detail: { fr: "Cuisine moderne lituanienne", en: "Modern Lithuanian cuisine", es: "Cocina lituana moderna", de: "Moderne litauische Küche" } },
          { label: { fr: "Kibinai (chausson karaïte farci) à Trakai", en: "Kibinai (stuffed Karaite pastry) in Trakai", es: "Kibinai (empanadilla caraíta rellena) en Trakai", de: "Kibinai (ausgestopfter Karait-Pantoffel) in Trakai" }, price: "3–5 €", detail: { fr: "Snack unique d'Europe", en: "A snack unique in Europe", es: "Aperitivo único en Europa", de: "Einzigartiger Snack aus Europa" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus + trolley Vilnius (ticket 24h)", en: "Bus + trolleybus in Vilnius (24h ticket)", es: "Bus + trolebús en Vilna (billete 24h)", de: "Bus + Straßenbahn Vilnius (24-Stunden-Ticket)" }, price: "4 €", detail: { fr: "Réseau étendu en ville", en: "Extensive city network", es: "Amplia red en la ciudad", de: "Erweitertes Stadtnetz" } },
          { label: { fr: "Train Vilnius–Kaunas (1h30)", en: "Train Vilnius–Kaunas (1h30)", es: "Tren Vilna–Kaunas (1h30)", de: "Zug Vilnius–Kaunas (1 Std. 30 Min.)" }, price: "5–10 €", detail: { fr: "Fréquent et abordable", en: "Frequent and affordable", es: "Frecuente y asequible", de: "Häufig und erschwinglich" } },
          { label: { fr: "Bus Lux Express Vilnius–Riga ou Tallinn", en: "Lux Express bus Vilnius–Riga or Tallinn", es: "Bus Lux Express Vilna–Riga o Tallin", de: "Bus Lux Express Vilnius–Riga oder Tallinn" }, price: "15–25 €", detail: { fr: "Confortables avec WiFi", en: "Comfortable with WiFi", es: "Cómodos y con WiFi", de: "Komfortabel mit WLAN" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée château de Trakai (bateau inclus)", en: "Trakai Castle entrance (boat included)", es: "Entrada al castillo de Trakai (barco incluido)", de: "Eintritt zur Burg Trakai (Boot inklusive)" }, price: "8 €", detail: { fr: "Musée du Grand-Duché à l'intérieur", en: "Grand Duchy museum inside", es: "Museo del Gran Ducado en el interior", de: "Großherzogliches Museum im Inneren" } },
          { label: { fr: "Tour guidé Vilnius baroque (2h à pied)", en: "Guided baroque Vilnius walking tour (2h)", es: "Tour guiado por la Vilna barroca (2h a pie)", de: "Führung durch das barocke Vilnius (2 Stunden zu Fuß)" }, price: "12–20 €", detail: { fr: "Guide francophone disponible", en: "French-speaking guide available", es: "Guía en español o francés disponible", de: "Französischsprachiger Reiseführer verfügbar" } },
          { label: { fr: "Location de vélo Flèche de Courlande (journée)", en: "Bike rental on the Curonian Spit (day)", es: "Alquiler de bicicleta en Curlandia (día)", de: "Fahrradverleih Kurische Nehrung (Tag)" }, price: "10–18 €", detail: { fr: "Idéal pour longer les dunes", en: "Ideal for riding along the dunes", es: "Ideal para recorrer las dunas", de: "Ideal für Spaziergänge entlang der Dünen" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Auberge + cepelinai + transports publics", en: "Hostel + cepelinai + public transport", es: "Albergue + cepelinai + transporte público", de: "Hostel + Cepelinai + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "85–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days", es: "7 días", de: "7 Tage" },
      route: {
        fr: "Vilnius (3j) → Trakai (1j) → Kaunas (1j) → Flèche de Courlande (2j)", en: "Vilnius (3d) → Trakai (1d) → Kaunas (1d) → Curonian Spit (2d)", es: "Vilna (3d) → Trakai (1d) → Kaunas (1d) → Curlandia (2d)", de: "Vilnius (3 Tage) → Trakai (1 Tage) → Kaunas (1 Tage) → Kurische Nehrung (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vilnius (Ryanair, Wizz Air)", en: "Return flight Paris–Vilnius (Ryanair, Wizz Air)", es: "Vuelo ida/vuelta París–Vilna (Ryanair, Wizz Air)", de: "Hin- und Rückflug Paris–Vilnius (Ryanair, Wizz Air)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)", de: "Unterkunft (7 Nächte)" }, amount: "180–320 €" },
            { label: { fr: "Transports (train + bus)", en: "Transport (train + bus)", es: "Transporte (tren + bus)", de: "Transport (Zug + Bus)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + cepelinai + bière", en: "Food + cepelinai + beer", es: "Comida + cepelinai + cerveza", de: "Essen + Cepelinai + Bier" }, amount: "200–350 €" },
            { label: { fr: "Activités + château Trakai", en: "Activities + Trakai Castle", es: "Actividades + castillo de Trakai", de: "Aktivitäten + Burg Trakai" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vilnius", en: "Return flight Paris–Vilnius", es: "Vuelo ida/vuelta París–Vilna", de: "Hin- und Rückflug Paris–Vilnius" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (7 nuits)", en: "3★ hotels (7 nights)", es: "Hoteles 3★ (7 noches)", de: "3★ Hotels (7 Nächte)" }, amount: "450–800 €" },
            { label: { fr: "Voiture de location + transports", en: "Rental car + transport", es: "Coche de alquiler + transporte", de: "Mietwagen + Transport" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "350–600 €" },
            { label: { fr: "Activités, concerts, Courlande", en: "Activities, concerts, Curonian Spit", es: "Actividades, conciertos, Curlandia", de: "Aktivitäten, Konzerte, Kurland" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~3h (Ryanair direct Beauvais/CDG–Vilnius, Wizz Air). Liaisons régulières.", en: "~3h (Ryanair direct from Beauvais/CDG–Vilnius, Wizz Air). Regular flights.", es: "~3h (Ryanair directo Beauvais/CDG–Vilna, Wizz Air). Vuelos regulares.", de: "ca. 3 Std. (Ryanair direkt Beauvais/CDG–Vilnius, Wizz Air). Regelmäßige Verbindungen." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. French national ID card is sufficient.", es: "Sin visado — espacio Schengen. El DNI es suficiente para ciudadanos de la UE.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€). Carte bancaire très bien acceptée partout. Espèces utiles sur la Flèche de Courlande.", en: "Euro (€). Cards very widely accepted. Cash useful on the Curonian Spit.", es: "Euro (€). Tarjeta bancaria muy bien aceptada en todas partes. El efectivo es útil en Curlandia.", de: "Euro (€). Kreditkarte wird überall sehr gut akzeptiert. Nützliche Arten auf der Kurischen Nehrung." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Lituanien (langue indo-européenne très ancienne). Anglais bien parlé par les jeunes. Russe compris par les plus âgés.", en: "Lithuanian (a very ancient Indo-European language). English well spoken by young people. Russian understood by older generations.", es: "Lituano (lengua indoeuropea muy antigua). Los jóvenes hablan bien inglés. Los mayores entienden ruso.", de: "Litauisch (sehr alte indoeuropäische Sprache). Englisch wird von jungen Leuten gut gesprochen. Russisch wird von den Älteren verstanden." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution. CEAM valide. Tiques en forêt (Courlande) — répulsif recommandé en été.", en: "No special precautions. EHIC valid. Ticks in the forest (Curonian Spit) — repellent recommended in summer.", es: "Sin precauciones especiales. TSE válida. Garrapatas en el bosque (Curlandia) — se recomienda repelente en verano.", de: "Keine Vorsichtsmaßnahmen. Gültige EHIC. Zecken im Wald (Kurland) – im Sommer empfohlenes Abwehrmittel." } },
    { icon: "🏖️", label: { fr: "Plages baltiques", en: "Baltic beaches", es: "Playas bálticas", de: "Ostseestrände" }, value: { fr: "La mer Baltique est froide en Lituanie (19°C max en juillet) mais les plages de sable sont immenses et peu fréquentées hors de la Flèche de Courlande.", en: "The Baltic Sea is cold in Lithuania (19°C max in July) but the sandy beaches are vast and uncrowded outside the Curonian Spit.", es: "El mar Báltico es frío en Lituania (19°C máx. en julio) pero las playas de arena son inmensas y poco concurridas fuera de Curlandia.", de: "Die Ostsee in Litauen ist kalt (maximal 19 °C im Juli), aber die Sandstrände außerhalb der Kurischen Nehrung sind riesig und nicht überfüllt." } },
    { icon: "🍺", label: { fr: "Bière", en: "Beer", es: "Cerveza", de: "Bier" }, value: { fr: "La Lituanie a une forte tradition brassicole artisanale — les bières de ferme (farmhouse ales) de la région de Biržai sont uniques en Europe et introuvables ailleurs.", en: "Lithuania has a strong craft brewing tradition — the farmhouse ales of the Biržai region are unique in Europe and unavailable elsewhere.", es: "Lituania tiene una fuerte tradición cervecera artesanal — las farmhouse ales de la región de Biržai son únicas en Europa e imposibles de encontrar en otro lugar.", de: "Litauen hat eine starke handwerkliche Brautradition – Bauernbiere aus der Region Biržai sind einzigartig in Europa und nirgendwo anders zu finden." } },
  ],
};
