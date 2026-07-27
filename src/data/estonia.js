export const ESTONIA = {
  code: "EST",
  numericId: 233,
  name: { fr: "Estonie", en: "Estonia", es: "Estonia", de: "Estland" },
  emoji: "🇪🇪",
  capital: { fr: "Tallinn", en: "Tallinn", es: "Tallin", de: "Tallinn" },
  language: { fr: "Estonien", en: "Estonian", es: "Estonio", de: "Estnisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 60, budgetMid: 100,
    tripMin: 900, tripMid: 2000,
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
    fr: "L'Estonie est la plus numérique des nations — la première au monde à avoir voté en ligne (2005), à déclarer l'accès à Internet comme droit humain, et à proposer la résidence e-citoyenne mondiale. Tallinn sa capitale est l'une des vieilles villes médiévales les mieux préservées d'Europe (UNESCO). Les forêts de bouleaux, les tourbières, les 2 000 îles et les plages de la mer Baltique complètent le tableau.", en: "Estonia is the most digital nation on earth — the first country in the world to vote online (2005), to declare Internet access a human right, and to offer global e-residency. Its capital, Tallinn, has one of the best-preserved medieval old towns in Europe (UNESCO). Birch forests, peat bogs, 2,000 islands and Baltic Sea beaches complete the picture.", es: "Estonia es la nación más digital del mundo — la primera en votar en línea (2005), en declarar el acceso a internet como derecho humano y en ofrecer la e-residencia global. Su capital, Tallin, tiene uno de los cascos antiguos medievales mejor conservados de Europa (UNESCO). Los bosques de abedules, las turberas, las 2.000 islas y las playas del mar Báltico completan el cuadro.", de: "Estland ist das digitalste aller Länder – das erste Land der Welt, das online abstimmt (2005), den Internetzugang zum Menschenrecht erklärt und einen globalen E-Bürger-Aufenthalt anbietet. Die Hauptstadt Tallinn ist eine der am besten erhaltenen alten mittelalterlichen Städte Europas (UNESCO). Birkenwälder, Torfmoore, 2.000 Inseln und die Strände der Ostsee runden das Bild ab.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Été baltique", en: "Baltic summer", es: "Verano báltico", de: "Baltischer Sommer" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (16–22°C), journées très longues (soleil jusqu'à 23h en juin), festivals (Song Festival, médiéval de Tallinn), plages animées. Meilleure période.", en: "Pleasant temperatures (16–22°C), very long days (sunset as late as 11 pm in June), festivals (the Song Festival, Tallinn's medieval festival), and lively beaches. The best time to go.", es: "Temperaturas agradables (16–22°C), días muy largos (sol hasta las 23h en junio), festivales (Song Festival, medieval de Tallin), playas animadas. Mejor época.", de: "Angenehme Temperaturen (16–22 °C), sehr lange Tage mit Sonne bis 23 Uhr im Juni, Festivals wie das Song Festival und das Mittelalterfest in Tallinn sowie belebte Strände. Die beste Reisezeit.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February", es: "Diciembre – Febrero", de: "Dezember – Februar" },
      label: { fr: "Hiver blanc", en: "White winter", es: "Invierno blanco", de: "Weißer Winter" },
      color: "#3b82f6",
      description: {
        fr: "Tallinn sous la neige est magnifique — marchés de Noël sur la place de la mairie, vieille ville enneigée. Températures -5 à -15°C. Ski de fond sur les tourbières.", en: "Tallinn under the snow is stunning — Christmas markets on Town Hall Square and a snow-covered old town. Temperatures range from -5 to -15°C. Cross-country skiing on the peat bogs.", es: "Tallin bajo la nieve es magnífica — mercados navideños en la plaza del ayuntamiento, casco antiguo nevado. Temperaturas de -5 a -15°C. Esquí de fondo en las turberas.", de: "Tallinn im Schnee ist herrlich – Weihnachtsmärkte auf dem Rathausplatz, schneebedeckte Altstadt. Temperaturen -5 bis -15°C. Langlaufen in den Torfmooren.",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "tallinn",
      name: "Tallinn",
      region: { fr: "Harju (nord, golfe de Finlande)", en: "Harju (north, Gulf of Finland)", es: "Harju (norte, golfo de Finlandia)", de: "Harju (Norden, Finnischer Meerbusen)" },
      data: [
        { month: "Jan", temp: -3, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 35,  icon: "❄️" },
        { month: "Mar", temp: -1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "saaremaa",
      name: "Saaremaa",
      region: { fr: "Grande île de la mer Baltique", en: "Large island in the Baltic Sea", es: "Gran isla del mar Báltico", de: "Große Insel in der Ostsee" },
      data: [
        { month: "Jan", temp: -2, rain: 50,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 40,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 35,  icon: "⛅" },
        { month: "Jun", temp: 15, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 70,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 75,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 55,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Tallinn — Vieille ville médiévale UNESCO", en: "Tallinn — UNESCO-listed medieval old town", es: "Tallin — Casco antiguo medieval UNESCO", de: "Tallinn – mittelalterliche Altstadt UNESCO" },
      region: { fr: "Harju (nord)", en: "Harju (north)", es: "Harju (norte)", de: "Harju (Norden)" },
      description: {
        fr: "Tallinn possède l'une des vieilles villes médiévales les mieux préservées d'Europe du Nord (UNESCO) : la place de l'Hôtel de Ville (XIVe s.), les tours de guet de la muraille, la colline de Toompea avec son château et sa cathédrale orthodoxe aux bulbes bleus, et les guildes hanséatiques. La ville est à la fois médiévale et hyper-numérique — une contradiction fascinante.", en: "Tallinn has one of the best-preserved medieval old towns in Northern Europe (UNESCO): Town Hall Square (14th century), the watchtowers along the city wall, Toompea Hill with its castle and blue-domed Orthodox cathedral, and the Hanseatic guild halls. The city is both medieval and hyper-digital — a fascinating contradiction.", es: "Tallin tiene uno de los cascos antiguos medievales mejor conservados del norte de Europa (UNESCO): la plaza del Ayuntamiento (s. XIV), las torres de vigilancia de la muralla, la colina de Toompea con su castillo y su catedral ortodoxa de cúpulas azules, y los gremios hanseáticos. La ciudad es a la vez medieval e hiperdigital — una contradicción fascinante.", de: "Tallinn verfügt über eine der am besten erhaltenen alten mittelalterlichen Städte Nordeuropas (UNESCO): den Rathausplatz (14. Jahrhundert), die Wachtürme der Mauer, den Hügel von Toompea mit seiner Burg und seiner orthodoxen Kathedrale mit blauen Zwiebeln sowie die Hanseatischen Zünfte. Die Stadt ist sowohl mittelalterlich als auch hyperdigital – ein faszinierender Widerspruch.",
      },
      wikipedia: "Tallinn",
      tags: ["Histoire", "UNESCO", "Modernité", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Place de l'Hôtel de Ville de Tallinn (XIVe s.) et tour Raekoja", en: "Tallinn Town Hall Square (14th century) and Raekoja Tower", es: "Plaza del Ayuntamiento de Tallin (s. XIV) y torre Raekoja", de: "Rathausplatz von Tallinn (14. Jahrhundert) und Raekoja-Turm" }, wikipedia: "Tallinn_Town_Hall" },
        { name: { fr: "Toompea — colline avec château, parlement, cathédrale orthodoxe", en: "Toompea — hill with the castle, parliament and Orthodox cathedral", es: "Toompea — colina con castillo, parlamento y catedral ortodoxa", de: "Toompea – Hügel mit Burg, Parlament, orthodoxer Kathedrale" }, wikipedia: "Toompea" },
        { name: { fr: "Muraille médiévale — tours Kiek in de Kök et chemin de ronde", en: "Medieval city wall — Kiek in de Kök towers and the ramparts walk", es: "Muralla medieval — torres Kiek in de Kök y camino de ronda", de: "Mittelalterliche Mauer – Kiek in de Kök-Türme und Mauerweg" }, wikipedia: "File:City wall Towers Tallinn 2015.jpg" },
        { name: { fr: "Quartier Telliskivi — culture alternative", en: "Telliskivi district — alternative culture", es: "Barrio de Telliskivi — cultura alternativa", de: "Bezirk Telliskivi – alternative Kultur" }, wikipedia: "Telliskivi_Creative_City" },
      ],
    },
    {
      id: 2,
      name: { fr: "Île de Saaremaa — Nature et moulin à vent", en: "Saaremaa Island — Nature and windmills", es: "Isla de Saaremaa — Naturaleza y molinos de viento", de: "Insel Saaremaa – Natur und Windmühle" },
      region: { fr: "Mer Baltique (île)", en: "Baltic Sea (island)", es: "Mar Báltico (isla)", de: "Ostsee (Insel)" },
      description: {
        fr: "Saaremaa est la plus grande île d'Estonie : ses moulins à vent de Angla, le château épiscopal de Kuressaare (le mieux préservé des États baltes), le cratère de météorite de Kaali (l'un des plus visibles en Europe), et les falaises de Panga au bord de la Baltique. Une île paisible, venteuse, avec un caractère nordique marqué.", en: "Saaremaa is Estonia's largest island: the Angla windmills, Kuressaare's episcopal castle (the best preserved in the Baltic states), the Kaali meteorite crater (one of the most visible in Europe), and the Panga cliffs on the Baltic coast. A peaceful, windswept island with a distinctly Nordic character.", es: "Saaremaa es la isla más grande de Estonia: sus molinos de viento de Angla, el castillo episcopal de Kuressaare (el mejor conservado de los estados bálticos), el cráter de meteorito de Kaali (uno de los más visibles de Europa), y los acantilados de Panga junto al Báltico. Una isla apacible y ventosa con un marcado carácter nórdico.", de: "Saaremaa ist die größte Insel Estlands: ihre Angla-Windmühlen, die Bischofsburg von Kuressaare (die am besten erhaltene im Baltikum), der Meteoritenkrater von Kaali (einer der sichtbarsten in Europa) und die Klippen von Panga am Rande der Ostsee. Eine friedliche, windige Insel mit ausgeprägt nordischem Charakter.",
      },
      wikipedia: "Saaremaa",
      tags: ["Plage", "Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Moulins à vent d'Angla — les plus beaux d'Estonie", en: "Angla windmills — the finest in Estonia", es: "Molinos de viento de Angla — los más bellos de Estonia", de: "Angla-Windmühlen – die schönsten in Estland" }, wikipedia: "File:Angla tuulikud Saaremaal.jpg" },
        { name: { fr: "Château de Kuressaare — forteresse épiscopale gothique intacte", en: "Kuressaare Castle — an intact Gothic episcopal fortress", es: "Castillo de Kuressaare — fortaleza episcopal gótica intacta", de: "Schloss Kuressaare – intakte gotische bischöfliche Festung" }, wikipedia: "Kuressaare_Castle" },
        { name: { fr: "Cratère de météorite de Kaali (4 000 ans, 110m de diamètre)", en: "Kaali meteorite crater (4,000 years old, 110 m in diameter)", es: "Cráter de meteorito de Kaali (4.000 años, 110 m de diámetro)", de: "Kaali-Meteoritenkrater (4.000 Jahre alt, 110 m Durchmesser)" }, wikipedia: "Kaali_crater" },
        { name: { fr: "Falaises de Panga — vue sur la mer Baltique depuis les escarpements", en: "Panga cliffs — Baltic Sea views from the escarpments", es: "Acantilados de Panga — vistas al mar Báltico desde los escarpes", de: "Panga-Klippen – Blick von den Steilhängen auf die Ostsee" }, wikipedia: "Panga_Cliff" },
      ],
    },
    {
      id: 3,
      name: { fr: "Tourbières et forêts — Randonnées nordiques", en: "Peat bogs and forests — Nordic hikes", es: "Turberas y bosques — Senderismo nórdico", de: "Moore und Wälder – Nordic-Wanderungen" },
      region: { fr: "Parc national de Lahemaa", en: "Lahemaa National Park", es: "Parque nacional de Lahemaa", de: "Lahemaa-Nationalpark" },
      description: {
        fr: "L'Estonie est couverte à 50% de forêts de bouleaux et de pins, et à 22% de tourbières (bog) — des marécages de mousse de sphaigne où l'on marche sur des planches de bois. Le parc national de Lahemaa (à 70km de Tallinn) est le plus grand d'Estonie : manoirs baltes, forêts vierges et côte rocheuse. Les bains de boue et les saunas de tourbière sont une tradition locale.", en: "Estonia is covered by 50% birch and pine forests and 22% peat bogs — sphagnum moss wetlands crossed on wooden boardwalks. Lahemaa National Park (70 km from Tallinn) is the country's largest: Baltic manors, virgin forests and a rocky shoreline. Mud baths and bog saunas are part of the local tradition.", es: "Estonia está cubierta en un 50% por bosques de abedules y pinos, y en un 22% por turberas — humedales de musgo de esfagno que se cruzan sobre pasarelas de madera. El parque nacional de Lahemaa (a 70 km de Tallin) es el más grande de Estonia: mansiones bálticas, bosques vírgenes y costa rocosa. Los baños de barro y las saunas de turbera son una tradición local.", de: "Estland ist zu 50 % von Birken- und Kiefernwäldern und zu 22 % von Mooren bedeckt – Sphagnummoos-Sümpfen, in denen man auf Holzbrettern läuft. Der Nationalpark Lahemaa (70 km von Tallinn entfernt) ist der größte in Estland: baltische Herrenhäuser, Urwälder und felsige Küste. Schlammbäder und Moorsaunen sind eine lokale Tradition.",
      },
      wikipedia: "Lahemaa_National_Park",
      tags: ["Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Marche en tourbière (Viru Bog, Lahemaa) — sensation de nuages sous les pieds", en: "Bog walk (Viru Bog, Lahemaa) — like walking on clouds", es: "Caminata por la turbera (Viru Bog, Lahemaa) — sensación de nubes bajo los pies", de: "Moorgehen (Viru Bog, Lahemaa) – Gefühl von Wolken unter den Füßen" }, wikipedia: "Lahemaa_National_Park" },
        { name: { fr: "Manoir de Palmse (XVIIIe s.) au cœur du parc", en: "Palmse Manor (18th century) in the heart of the park", es: "Mansión de Palmse (s. XVIII) en el corazón del parque", de: "Palmse Manor (18. Jahrhundert) im Herzen des Parks" }, wikipedia: "File:Palmse manor house at summer.jpg" },
        { name: { fr: "Plage rocheuse de Käsmu — village de capitaines", en: "Käsmu rocky beach — the captains' village", es: "Playa rocosa de Käsmu — pueblo de capitanes", de: "Käsmu-Felsstrand – Kapitänsdorf" }, wikipedia: "File:Käsmu sadam 2015.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Tartu — Ville universitaire et culture", en: "Tartu — University city and culture", es: "Tartu — Ciudad universitaria y cultura", de: "Tartu – Universitätsstadt und Kultur" },
      region: { fr: "Tartumaa (sud)", en: "Tartumaa (south)", es: "Tartumaa (sur)", de: "Tartumaa (Süden)" },
      description: {
        fr: "Tartu est la deuxième ville d'Estonie et la capitale intellectuelle du pays : l'Université de Tartu (fondée en 1632 par Gustave Adolphe de Suède) est l'une des plus anciennes du monde. Le musée estonien national (architecture contemporaine spectaculaire), les cafés de la vieille ville et l'Élan Festival en juillet font de Tartu une ville vivante et créative.", en: "Tartu is Estonia's second city and the country's intellectual capital: the University of Tartu (founded in 1632 by Gustavus Adolphus of Sweden) is one of the oldest in the world. The Estonian National Museum (with its striking contemporary architecture), the cafés of the old town and the Élan Festival in July make Tartu a lively, creative city.", es: "Tartu es la segunda ciudad de Estonia y la capital intelectual del país: la Universidad de Tartu (fundada en 1632 por Gustavo Adolfo de Suecia) es una de las más antiguas del mundo. El Museo Nacional de Estonia (con su espectacular arquitectura contemporánea), los cafés del casco antiguo y el Élan Festival en julio hacen de Tartu una ciudad viva y creativa.", de: "Tartu ist die zweitgrößte Stadt Estlands und die intellektuelle Hauptstadt des Landes: Die Universität Tartu (gegründet 1632 von Gustav Adolf von Schweden) ist eine der ältesten der Welt. Das Estnische Nationalmuseum (spektakuläre zeitgenössische Architektur), die Cafés der Altstadt und das Élan-Festival im Juli machen Tartu zu einer lebendigen und kreativen Stadt.",
      },
      wikipedia: "Tartu",
      tags: ["Ville", "Culture", "Musées"],
      mustSee: [
        { name: { fr: "Musée national estonien (KUMU de Tartu) — architecture remarquable", en: "Estonian National Museum (Tartu's KUMU) — remarkable architecture", es: "Museo Nacional de Estonia (KUMU de Tartu) — arquitectura notable", de: "Estnisches Nationalmuseum (KUMU Tartu) – bemerkenswerte Architektur" }, wikipedia: "File:Wall from the Estonian National Museum.jpg" },
        { name: { fr: "Colline de Toome — ruines de cathédrale médiévale + observatoire", en: "Toome Hill — medieval cathedral ruins + observatory", es: "Colina de Toome — ruinas de catedral medieval + observatorio", de: "Toome Hill – Ruinen einer mittelalterlichen Kathedrale + Observatorium" }, wikipedia: "File:Ruins_of_Tartu_Dome_Cathedral_-_Toomemagi_(Cathedral_Hill)_-_Tartu_-_Estonia_(35961979372).jpg" },
        { name: { fr: "Rues animées de la vieille ville — cafés, galeries, étudiants", en: "Lively old-town streets — cafés, galleries, students", es: "Calles animadas del casco antiguo — cafés, galerías, estudiantes", de: "Belebte Straßen der Altstadt – Cafés, Galerien, Studenten" }, wikipedia: "File:Tartu Town Hall Place towards Kaarsild 2015.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Estonie utilise l'euro depuis 2011. Les prix sont 30–40% inférieurs à ceux de la France en dehors de Tallinn. La vieille ville de Tallinn est plus touristique (et plus chère) — sortir du centre pour retrouver les prix locaux.", en: "Estonia has used the euro since 2011. Prices are 30–40% lower than in France outside Tallinn. Tallinn's old town is more touristy (and pricier) — step outside the centre to get back to local prices.", es: "Estonia utiliza el euro desde 2011. Los precios son entre un 30 y un 40% inferiores a los de Europa occidental fuera de Tallin. El casco antiguo de Tallin es más turístico (y más caro) — salir del centro para encontrar precios locales.", de: "Estland verwendet den Euro seit 2011. Die Preise sind 30–40 % niedriger als in Frankreich außerhalb von Tallinn. Die Altstadt von Tallinn ist touristischer (und teurer) – verlassen Sie das Zentrum, um die lokalen Preise zu finden.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge / hostel Tallinn Vieille Ville", en: "Hostel in Tallinn Old Town", es: "Albergue / hostel en el casco antiguo de Tallin", de: "Hostel Tallinn Altstadt" }, price: "20–45 €", detail: { fr: "Bonne qualité, bien situé", en: "Good quality, well located", es: "Buena calidad, bien ubicado", de: "Gute Qualität, gut gelegen" } },
          { label: { fr: "Hôtel 3★ Tallinn ou Tartu", en: "3★ hotel in Tallinn or Tartu", es: "Hotel 3★ en Tallin o Tartu", de: "Hotel 3★ Tallinn oder Tartu" }, price: "65–120 €", detail: { fr: "Confortable, souvent inclus petit-déj", en: "Comfortable, breakfast often included", es: "Cómodo, desayuno a menudo incluido", de: "Gemütliches, oft inklusives Frühstück" } },
          { label: { fr: "Ferme / pension à Saaremaa", en: "Farm stay / guesthouse in Saaremaa", es: "Granja / pensión en Saaremaa", de: "Bauernhof / Pension in Saaremaa" }, price: "35–70 €", detail: { fr: "Demi-pension disponible, nature", en: "Half-board available, surrounded by nature", es: "Media pensión disponible, en plena naturaleza", de: "Halbpension möglich, Natur" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Soupe de poisson estonienne + pain noir (rukkileib)", en: "Estonian fish soup + black bread (rukkileib)", es: "Sopa de pescado estonia + pan negro (rukkileib)", de: "Estnische Fischsuppe + Schwarzbrot (rukkileib)" }, price: "8–14 €", detail: { fr: "Cuisine nordique simple et bonne", en: "Simple, tasty Nordic cuisine", es: "Cocina nórdica sencilla y sabrosa", de: "Einfache und gute nordische Küche" } },
          { label: { fr: "Restaurant mid-range Tallinn", en: "Mid-range restaurant in Tallinn", es: "Restaurante de gama media en Tallin", de: "Mittelklasserestaurant Tallinn" }, price: "15–28 €", detail: { fr: "Cuisine estonienne moderne ou internationale", en: "Modern Estonian or international cuisine", es: "Cocina estonia moderna o internacional", de: "Moderne estnische oder internationale Küche" } },
          { label: { fr: "Marché de Tallinn (Balti Jaam) — fromages et charcuteries", en: "Tallinn market (Balti Jaam) — cheeses and cured meats", es: "Mercado de Tallin (Balti Jaam) — quesos y embutidos", de: "Tallinner Markt (Balti Jaam) – Käse und Aufschnitt" }, price: "8–15 €", detail: { fr: "Marché couvert animé", en: "Lively covered market", es: "Mercado cubierto animado", de: "Lebhafte Markthalle" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Lux Express Tallinn–Tartu (2h30)", en: "Lux Express bus Tallinn–Tartu (2h30)", es: "Autobús Lux Express Tallin–Tartu (2h30)", de: "Bus Lux Express Tallinn–Tartu (2 Std. 30 Min.)" }, price: "10–18 €", detail: { fr: "Confortable, WiFi, café", en: "Comfortable, WiFi, coffee", es: "Cómodo, wifi, café", de: "Komfortabel, WLAN, Kaffee" } },
          { label: { fr: "Ferry Tallinn–Helsinki (2h30)", en: "Tallinn–Helsinki ferry (2h30)", es: "Ferry Tallin–Helsinki (2h30)", de: "Fähre Tallinn–Helsinki (2 Std. 30 Min.)" }, price: "20–50 €", detail: { fr: "Tallink Silja, plusieurs fois par jour", en: "Tallink Silja, several departures a day", es: "Tallink Silja, varias salidas al día", de: "Tallink Silja, mehrmals täglich" } },
          { label: { fr: "Tramway Tallinn (ticket journée)", en: "Tallinn tram (day ticket)", es: "Tranvía de Tallin (billete de día)", de: "Straßenbahn Tallinn (Tageskarte)" }, price: "3 €", detail: { fr: "Réseau pratique", en: "Convenient network", es: "Red práctica", de: "Praktisches Netz" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite guidée de la vieille ville de Tallinn (2h)", en: "Guided tour of Tallinn's old town (2h)", es: "Visita guiada al casco antiguo de Tallin (2h)", de: "Geführte Tour durch die Altstadt von Tallinn (2 Stunden)" }, price: "15–25 €", detail: { fr: "Histoire médiévale et hanséatique", en: "Medieval and Hanseatic history", es: "Historia medieval y hanseática", de: "Mittelalterliche und hanseatische Geschichte" } },
          { label: { fr: "Randonnée en tourbière Viru Bog (Lahemaa)", en: "Viru Bog hike (Lahemaa)", es: "Caminata por la turbera Viru Bog (Lahemaa)", de: "Wandern im Viru-Moor (Lahemaa)" }, price: "5–15 €", detail: { fr: "Entrée parc + planches bois", en: "Park entry + wooden boardwalks", es: "Entrada al parque + pasarelas de madera", de: "Parkeingang + Holzbretter" } },
          { label: { fr: "Sauna traditionnel estonien (suivi d'une baignade)", en: "Traditional Estonian sauna (followed by a swim)", es: "Sauna tradicional estonia (seguida de un baño)", de: "Traditionelle estnische Sauna (anschließend schwimmen)" }, price: "15–30 €", detail: { fr: "Expérience culturelle fondamentale", en: "A core cultural experience", es: "Experiencia cultural fundamental", de: "Grundlegende kulturelle Erfahrung" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "60–95 €/j", desc: { fr: "Hostel + restaurant local + transports publics", en: "Hostel + local restaurant + public transport", es: "Hostel + restaurante local + transporte público", de: "Hostel + lokales Restaurant + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "100–180 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días", de: "8 Tage" },
      route: { fr: "Tallinn (3j) → Lahemaa (1j) → Tartu (2j) → Saaremaa (2j)", en: "Tallinn (3d) → Lahemaa (1d) → Tartu (2d) → Saaremaa (2d)", es: "Tallin (3d) → Lahemaa (1d) → Tartu (2d) → Saaremaa (2d)", de: "Tallinn (3 Tage) → Lahemaa (1 Tage) → Tartu (2 Tage) → Saaremaa (2 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tallinn (Ryanair, Air Baltic)", en: "Return flight Paris–Tallinn (Ryanair, Air Baltic)", es: "Vuelo ida y vuelta Madrid–Tallin (Ryanair, Air Baltic)", de: "Hin- und Rückflug Paris–Tallinn (Ryanair, Air Baltic)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)", de: "Unterkunft (8 Nächte)" }, amount: "250–450 €" },
            { label: { fr: "Transports (bus + ferry Saaremaa)", en: "Transport (bus + Saaremaa ferry)", es: "Transporte (autobús + ferry a Saaremaa)", de: "Transport (Bus + Fähre Saaremaa)" }, amount: "100–200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "250–400 €" },
            { label: { fr: "Activités, musées, sauna", en: "Activities, museums, sauna", es: "Actividades, museos, sauna", de: "Aktivitäten, Museen, Sauna" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 000 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tallinn", en: "Return flight Paris–Tallinn", es: "Vuelo ida y vuelta Madrid–Tallin", de: "Hin- und Rückflug Paris–Tallinn" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)", de: "3★ Hotels (8 Nächte)" }, amount: "600–1 100 €" },
            { label: { fr: "Voiture de location (5 jours)", en: "Rental car (5 days)", es: "Coche de alquiler (5 días)", de: "Mietwagen (5 Tage)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités, excursions, sauna", en: "Activities, excursions, sauna", es: "Actividades, excursiones, sauna", de: "Aktivitäten, Ausflüge, Sauna" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~2h30 (Ryanair Beauvais–Tallinn, Air Baltic via Riga). Ferry depuis Helsinki en 2h30 (Tallink).", en: "~2h30 (Ryanair Beauvais–Tallinn, Air Baltic via Riga). Ferry from Helsinki takes 2h30 (Tallink).", es: "~2h30 (Ryanair, Air Baltic vía Riga). Ferry desde Helsinki en 2h30 (Tallink).", de: "ca. 2 Std. 30 Min. (Ryanair Beauvais–Tallinn, Air Baltic über Riga). Fähre von Helsinki in 2 Std. 30 Min. (Tallink)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French national ID card is enough.", es: "Sin visado — espacio Schengen. DNI válido para ciudadanos de la UE.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€). Carte bancaire acceptée partout — les Estoniens paient tout par carte. Espèces quasi inutiles.", en: "Euro (€). Cards are accepted everywhere — Estonians pay for almost everything by card. Cash is barely needed.", es: "Euro (€). Tarjeta bancaria aceptada en todas partes — los estonios pagan casi todo con tarjeta. El efectivo apenas se usa.", de: "Euro (€). Kreditkarten werden überall akzeptiert – Esten bezahlen alles mit Karte. Fast nutzlose Art." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Estonien (langue finno-ougrienne, proche du finnois). Anglais parfaitement maîtrisé par les jeunes. Russe encore parlé par 25% de la population.", en: "Estonian (a Finno-Ugric language, close to Finnish). Young people speak excellent English. Russian is still spoken by 25% of the population.", es: "Estonio (lengua fino-úgrica, cercana al finés). Los jóvenes dominan el inglés perfectamente. El ruso todavía lo habla el 25% de la población.", de: "Estnisch (finno-ugrische Sprache, ähnlich dem Finnischen). Englisch wird von den Jugendlichen perfekt beherrscht. Noch immer wird Russisch von 25 % der Bevölkerung gesprochen." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution. CEAM valide. Tiques dans les forêts — pantalon long. Eau du robinet potable.", en: "No special precautions. EHIC valid. Ticks in the forests — wear long trousers. Tap water is safe to drink.", es: "Sin precauciones especiales. TSE válida. Garrapatas en los bosques — pantalón largo. Agua del grifo potable.", de: "Keine Vorsichtsmaßnahmen. Gültige EHIC. Zecken im Wald – lange Hosen. Leitungswasser trinken." } },
    { icon: "💻", label: { fr: "Numérique", en: "Digital", es: "Digital", de: "Digital" }, value: { fr: "L'Estonie est la nation la plus numérique du monde : WiFi gratuit partout (même dans les forêts et les ferries), déclaration d'impôts en 3 minutes en ligne, e-résidence disponible.", en: "Estonia is the most digital nation in the world: free WiFi everywhere (even in forests and on ferries), tax returns filed online in 3 minutes, and e-residency available.", es: "Estonia es la nación más digital del mundo: wifi gratis en todas partes (incluso en los bosques y los ferris), declaración de impuestos en 3 minutos en línea, e-residencia disponible.", de: "Estland ist die digitalste Nation der Welt: kostenloses WLAN überall (sogar in Wäldern und auf Fähren), Steuererklärung in 3 Minuten online, E-Residency verfügbar." } },
    { icon: "🧖", label: { fr: "Sauna", en: "Sauna", es: "Sauna", de: "Sauna" }, value: { fr: "Le sauna est aussi central qu'en Finlande : chaque maison, chaque ferme, chaque pension en a un. Tradition de se baigner dans un lac ou une rivière froide après.", en: "Sauna is just as central here as in Finland: every house, farm and guesthouse has one. Tradition calls for a dip in a cold lake or river afterwards.", es: "La sauna es tan central como en Finlandia: cada casa, granja o pensión tiene una. La tradición manda darse un baño después en un lago o río frío.", de: "Die Sauna ist so zentral wie in Finnland: Jedes Haus, jeder Bauernhof, jede Pension hat eine. Tradition, anschließend in einem kalten See oder Fluss zu baden." } },
  ],
};
