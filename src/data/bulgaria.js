export const BULGARIA = {
  code: "BGR",
  numericId: 100,
  name: { fr: "Bulgarie", en: "Bulgaria", es: "Bulgaria", de: "Bulgarien" },
  emoji: "🇧🇬",
  capital: { fr: "Sofia", en: "Sofia", es: "Sofía", de: "Sofia" },
  language: { fr: "Bulgare", en: "Bulgarian", es: "Búlgaro", de: "Bulgarisch" },
  currency: { fr: "Lev bulgare (BGN)", en: "Bulgarian lev (BGN)", es: "Lev búlgaro (BGN)", de: "Bulgarischer Lew (BGN)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1600,
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
    ville: 1,
    plage: 2,
    plongee: 2,
  },
  description: {
    fr: "La Bulgarie est l'une des meilleures valeurs d'Europe : la côte de la mer Noire avec ses plages de sable et ses eaux chaudes (27°C en été), les villes médiévales de Veliko Tarnovo et Plovdiv (capitale européenne de la culture 2019), le monastère de Rila (UNESCO), les Balkans avec leurs villages roses de Koprivshtitsa, et le vin local parmi les meilleurs d'Europe de l'Est.", en: "Bulgaria is one of Europe's best-value destinations: the Black Sea coast with its sandy beaches and warm waters (27°C in summer), the medieval cities of Veliko Tarnovo and Plovdiv (European Capital of Culture 2019), the Rila Monastery (UNESCO), the Balkan Mountains with their pink-hued villages like Koprivshtitsa, and local wine that ranks among the best in Eastern Europe.", es: "Bulgaria es uno de los destinos con mejor relación calidad-precio de Europa: la costa del mar Negro con sus playas de arena y aguas cálidas (27°C en verano), las ciudades medievales de Veliko Tarnovo y Plovdiv (Capital Europea de la Cultura en 2019), el monasterio de Rila (UNESCO), los Balcanes con sus pueblos rosados como Koprivshtitsa, y un vino local que está entre los mejores de Europa del Este.", de: "Bulgarien gehört zu den besten Werten Europas: die Schwarzmeerküste mit ihren Sandstränden und dem warmen Wasser (27°C im Sommer), die mittelalterlichen Städte Weliko Tarnowo und Plowdiw (Kulturhauptstadt Europas 2019), das Rila-Kloster (UNESCO), der Balkan mit seinen rosa Dörfern Koprivshtitsa und der lokale Wein, der zu den besten in Osteuropa zählt.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Printemps et été", en: "Spring and summer", es: "Primavera y verano", de: "Frühling und Sommer" },
      color: "#22c55e",
      description: {
        fr: "Côte noire excellente de juin à septembre (eau 26–28°C). Intérieur des terres agréable en mai-juin et septembre. Températures 22–28°C à Sofia en été.", en: "The Black Sea coast is excellent from June to September (water at 26–28°C). Inland areas are pleasant in May-June and September. Summer temperatures in Sofia range from 22–28°C.", es: "La costa del mar Negro es excelente de junio a septiembre (agua a 26–28°C). El interior es agradable en mayo-junio y septiembre. Temperaturas de 22–28°C en Sofía en verano.", de: "Die schwarze Küste ist von Juni bis September ausgezeichnet (Wassertemperatur 26–28 °C). Angenehmes Interieur im Mai-Juni und September. Temperaturen 22–28°C in Sofia im Sommer.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Ski hivernal", en: "Winter skiing", es: "Esquí de invierno", de: "Skifahren im Winter" },
      color: "#3b82f6",
      description: {
        fr: "Bansko et Borovets offrent le ski le moins cher d'Europe (forfait 25–35€/jour). Températures -5 à -10°C en montagne.", en: "Bansko and Borovets offer the cheapest skiing in Europe (lift pass 25–35€/day). Temperatures in the mountains range from -5 to -10°C.", es: "Bansko y Borovets ofrecen el esquí más barato de Europa (forfait de 25–35€/día). Temperaturas de -5 a -10°C en la montaña.", de: "Bansko und Borovets bieten das günstigste Skifahren in Europa (Paket 25–35 €/Tag). Temperaturen -5 bis -10°C in den Bergen.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "sofia",
      name: "Sofia",
      region: { fr: "Thrace (centre-ouest)", en: "Thrace (central-west)", es: "Tracia (centro-oeste)", de: "Thrakien (Zentralwesten)" },
      data: [
        { month: "Jan", temp:  0, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  7, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 12, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 75,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 45,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 45,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 60,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "varna",
      name: "Varna",
      region: { fr: "Côte de la mer Noire", en: "Black Sea coast", es: "Costa del mar Negro", de: "Schwarzmeerküste" },
      data: [
        { month: "Jan", temp:  3, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  4, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 50,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Sep", temp: 22, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 16, rain: 45,  icon: "⛅" },
        { month: "Nov", temp: 10, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  5, rain: 50,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Côte de la mer Noire — Plages et histoire", en: "Black Sea Coast — Beaches and history", es: "Costa del mar Negro — Playas e historia", de: "Schwarzmeerküste – Strände und Geschichte" },
      region: { fr: "Littorale Est", en: "Eastern coast", es: "Litoral este", de: "Ostküste" },
      description: {
        fr: "La côte bulgare de la mer Noire offre 350km de plages de sable doré et des eaux chaudes (27°C en juillet-août). Sozopol, cité grecque antique sur un cap rocheux, est l'une des plus belles villes côtières de Bulgarie. Nessebar (UNESCO) est une ville byzantine et médiévale préservée sur un isthme rocheux. Les stations de Sunny Beach et Golden Sands attirent les familles.", en: "Bulgaria's Black Sea coast offers 350 km of golden sandy beaches and warm waters (27°C in July-August). Sozopol, an ancient Greek town on a rocky cape, is one of the country's most beautiful seaside destinations. Nessebar (UNESCO) is a well-preserved Byzantine and medieval town set on a rocky isthmus. The resorts of Sunny Beach and Golden Sands are especially popular with families.", es: "La costa búlgara del mar Negro ofrece 350 km de playas de arena dorada y aguas cálidas (27°C en julio-agosto). Sozópolis, antigua ciudad griega sobre un cabo rocoso, es una de las localidades costeras más bellas de Bulgaria. Nesebar (UNESCO) es una ciudad bizantina y medieval bien conservada sobre un istmo rocoso. Las estaciones de Sunny Beach y Golden Sands atraen a las familias.", de: "Die bulgarische Schwarzmeerküste bietet 350 km goldene Sandstrände und warmes Wasser (27 °C im Juli-August). Sozopol, eine antike griechische Stadt auf einem felsigen Kap, ist eine der schönsten Küstenstädte Bulgariens. Nessebar (UNESCO) ist eine erhaltene byzantinische und mittelalterliche Stadt auf einer felsigen Landenge. Die Ferienorte Sonnenstrand und Goldstrand ziehen Familien an.",
      },
      wikipedia: "File:Bulgaria black sea coast.jpg",
      tags: ["Plage", "Histoire", "UNESCO", "Nature"],
      mustSee: [
        { name: { fr: "Sozopol — cité grecque antique sur cap rocheux", en: "Sozopol — ancient Greek town on a rocky cape", es: "Sozópolis — antigua ciudad griega sobre un cabo rocoso", de: "Sozopol – antike griechische Stadt am felsigen Kap" }, wikipedia: "File:Sozopol2.jpg" },
        { name: { fr: "Nessebar — ville byzantine et médiévale (UNESCO)", en: "Nessebar — Byzantine and medieval town (UNESCO)", es: "Nesebar — ciudad bizantina y medieval (UNESCO)", de: "Nessebar – byzantinische und mittelalterliche Stadt (UNESCO)" }, wikipedia: "File:Church of Christ Pantocrator Nesebar.jpg" },
        { name: { fr: "Plages de sable de Sunny Beach et Golden Sands", en: "Sandy beaches of Sunny Beach and Golden Sands", es: "Playas de arena de Sunny Beach y Golden Sands", de: "Sandstrände von Sonnenstrand und Goldstrand" }, wikipedia: "File:Sunny-Beach-BDimitrov.jpg" },
        { name: { fr: "Cap Kaliakra — falaises sur la mer Noire + colonie de dauphins", en: "Cape Kaliakra — Black Sea cliffs and dolphin colony", es: "Cabo Kaliakra — acantilados sobre el mar Negro y colonia de delfines", de: "Kap Kaliakra – Klippen am Schwarzen Meer + Delfinkolonie" }, wikipedia: "File:Kaliakra.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Monastère de Rila — UNESCO", en: "Rila Monastery — UNESCO", es: "Monasterio de Rila — UNESCO", de: "Rila-Kloster – UNESCO" },
      region: { fr: "Balkans (massif de Rila)", en: "Balkans (Rila massif)", es: "Balcanes (macizo de Rila)", de: "Balkan (Rila-Massiv)" },
      description: {
        fr: "Le monastère de Rila (UNESCO) est le plus grand et le plus important de Bulgarie — fondé au Xe siècle dans les montagnes à 1 147m d'altitude. Ses fresques du XIXe siècle (plus de 1 200 scènes bibliques sur les galeries) et son architecture à arcs rayés noirs et blancs en font l'un des plus beaux ensembles religieux des Balkans. Pèlerinage national vivant.", en: "Rila Monastery (UNESCO) is Bulgaria's largest and most important monastery — founded in the 10th century in the mountains at an altitude of 1,147 m. Its 19th-century frescoes (more than 1,200 biblical scenes across the galleries) and black-and-white striped arcaded architecture make it one of the Balkans' finest religious ensembles. It remains a living national pilgrimage site.", es: "El monasterio de Rila (UNESCO) es el más grande e importante de Bulgaria — fundado en el siglo X en las montañas, a 1.147 m de altitud. Sus frescos del siglo XIX (más de 1.200 escenas bíblicas en las galerías) y su arquitectura de arcos rayados en blanco y negro lo convierten en uno de los conjuntos religiosos más bellos de los Balcanes. Sigue siendo un vivo lugar de peregrinación nacional.", de: "Das Rila-Kloster (UNESCO) ist das größte und bedeutendste in Bulgarien – gegründet im 10. Jahrhundert in den Bergen auf 1.147 m über dem Meeresspiegel. Seine Fresken aus dem 19. Jahrhundert (mehr als 1.200 biblische Szenen auf den Galerien) und seine Architektur mit schwarz-weiß gestreiften Bögen machen ihn zu einem der schönsten religiösen Komplexe auf dem Balkan. Lebendige nationale Pilgerreise.",
      },
      wikipedia: "Rila_Monastery",
      tags: ["Spiritualité", "UNESCO", "Culture", "Montagne", "Nature", "Randonnée", "Architecture"],
      mustSee: [
        { name: { fr: "Fresques des galeries du monastère (1 200 scènes)", en: "Frescoes in the monastery galleries (1,200 scenes)", es: "Frescos de las galerías del monasterio (1.200 escenas)", de: "Fresken in den Klostergalerien (1.200 Szenen)" }, wikipedia: "File:Religious fresco in Rila Monastery.jpg" },
        { name: { fr: "Musée du monastère — trésor religieux et icônes", en: "Monastery museum — religious treasures and icons", es: "Museo del monasterio — tesoro religioso e iconos", de: "Klostermuseum – religiöse Schätze und Ikonen" }, wikipedia: "Rila_Monastery" },
        { name: { fr: "Randonnée aux Lacs de Rila (7 lacs glaciaires à 2 500m)", en: "Hike to the Rila Lakes (7 glacial lakes at 2,500 m)", es: "Excursión a los Lagos de Rila (7 lagos glaciares a 2.500 m)", de: "Wanderung zu den Rila-Seen (7 Gletscherseen auf 2.500 m)" }, wikipedia: "Seven_Rila_Lakes" },
        { name: { fr: "Tour des Balkans depuis le monastère — vue sur les crêtes", en: "Balkan tower above the monastery — ridge views", es: "Torre de los Balcanes sobre el monasterio — vistas de las crestas", de: "Balkantour vom Kloster aus – Blick auf die Bergrücken" }, wikipedia: "File:Rila Monastery 12.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plovdiv — Capitale européenne de la culture", en: "Plovdiv — European Capital of Culture", es: "Plovdiv — Capital Europea de la Cultura", de: "Plovdiv – Kulturhauptstadt Europas" },
      region: { fr: "Thrace (sud)", en: "Thrace (south)", es: "Tracia (sur)", de: "Thrakien (Süden)" },
      description: {
        fr: "Plovdiv est la deuxième ville de Bulgarie et l'une des plus vieilles villes d'Europe continuellement habitée (6 000 ans). Son vieux quartier sur les collines (Kapana — le labyrinthe) mélange maisons renaissance bulgare du XIXe siècle, rues pavées, galeries d'art et cafés branchés. L'amphithéâtre romain du IIe siècle est encore utilisé pour les concerts.", en: "Plovdiv is Bulgaria's second city and one of the oldest continuously inhabited cities in Europe (6,000 years). Its old quarter on the hills (Kapana — the maze) blends 19th-century Bulgarian Revival houses, cobbled streets, art galleries and trendy cafés. The 2nd-century Roman amphitheatre is still used for concerts.", es: "Plovdiv es la segunda ciudad de Bulgaria y una de las ciudades habitadas de forma continua más antiguas de Europa (6.000 años). Su casco antiguo sobre las colinas (Kapana — el laberinto) mezcla casas del renacimiento búlgaro del siglo XIX, calles empedradas, galerías de arte y cafés de moda. El anfiteatro romano del siglo II todavía se usa para conciertos.", de: "Plovdiv ist die zweitgrößte Stadt Bulgariens und eine der ältesten durchgehend bewohnten Städte Europas (6.000 Jahre alt). Das alte Viertel auf den Hügeln (Kapana – das Labyrinth) vereint bulgarische Renaissancehäuser aus dem 19. Jahrhundert, gepflasterte Straßen, Kunstgalerien und trendige Cafés. Das römische Amphitheater aus dem 2. Jahrhundert wird noch immer für Konzerte genutzt.",
      },
      wikipedia: "Plovdiv",
      tags: ["Architecture", "Histoire", "Ville", "Art", "Gastronomie"],
      mustSee: [
        { name: { fr: "Vieille ville de Plovdiv — maisons renaissance bulgare du XIXe s.", en: "Plovdiv Old Town — 19th-century Bulgarian Revival houses", es: "Casco antiguo de Plovdiv — casas del renacimiento búlgaro del siglo XIX", de: "Altstadt von Plovdiv – bulgarische Renaissancehäuser aus dem 19. Jahrhundert." }, wikipedia: "File:Odeon plovdiv old.jpg" },
        { name: { fr: "Amphithéâtre romain (IIe s.) — concerts en plein air", en: "Roman amphitheatre (2nd c.) — open-air concerts", es: "Anfiteatro romano (siglo II) — conciertos al aire libre", de: "Römisches Amphitheater (2. Jahrhundert) – Open-Air-Konzerte" }, wikipedia: "File:Plovdiv Ancient theatre.jpg" },
        { name: { fr: "Kapana — le labyrinthe, quartier artiste et café", en: "Kapana — the maze, arts-and-café district", es: "Kapana — el laberinto, barrio de artistas y cafés", de: "Kapana – Labyrinth, Künstlerviertel und Café" }, wikipedia: "File:Plovdiv116.jpg" },
        { name: { fr: "Musée d'histoire régionale + collections thraces et romaines", en: "Regional History Museum and its Thracian and Roman collections", es: "Museo de Historia Regional y sus colecciones tracias y romanas", de: "Regionales Geschichtsmuseum + thrakische und römische Sammlungen" }, wikipedia: "File:Regional Ethnographic Museum, Plovdiv.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Veliko Tarnovo — Ancienne capitale médiévale", en: "Veliko Tarnovo — Former medieval capital", es: "Veliko Tarnovo — Antigua capital medieval", de: "Veliko Tarnovo – alte mittelalterliche Hauptstadt" },
      region: { fr: "Bulgarie centrale", en: "Central Bulgaria", es: "Bulgaria central", de: "Zentralbulgarien" },
      description: {
        fr: "Veliko Tarnovo était la capitale du Second Empire bulgare (1185–1393). Sa forteresse de Tsarevets, sur une colline entourée d'un méandre de la Yantra, est le symbole national bulgare. Le spectacle son-et-lumière nocturne sur les remparts est inoubliable. La vieille ville en terrasses descend vers la rivière dans un paysage de carte postale.", en: "Veliko Tarnovo was the capital of the Second Bulgarian Empire (1185–1393). Its Tsarevets Fortress, perched on a hill encircled by a bend in the Yantra River, is a national symbol of Bulgaria. The nighttime sound-and-light show on the ramparts is unforgettable. The terraced old town tumbles down toward the river in a postcard-perfect setting.", es: "Veliko Tarnovo fue la capital del Segundo Imperio Búlgaro (1185–1393). Su fortaleza de Tsarevets, sobre una colina rodeada por un meandro del río Yantra, es el símbolo nacional de Bulgaria. El espectáculo nocturno de luz y sonido sobre las murallas es inolvidable. El casco antiguo, en terrazas, desciende hacia el río en un paisaje digno de postal.", de: "Veliko Tarnovo war die Hauptstadt des Zweiten Bulgarischen Reiches (1185–1393). Die Zarewez-Festung auf einem Hügel, umgeben von einem Mäander des Yantra, ist das bulgarische Nationalsymbol. Die nächtliche Ton- und Lichtshow auf der Stadtmauer ist unvergesslich. Die terrassenförmig angelegte Altstadt fällt in einer Postkartenlandschaft zum Fluss hin ab.",
      },
      wikipedia: "File:Veliko Tarnovo (Велико Търново) - Tsarevets.JPG",
      tags: ["Histoire", "Architecture", "Ville", "Culture"],
      mustSee: [
        { name: { fr: "Forteresse de Tsarevets — spectacle son-et-lumière le soir", en: "Tsarevets Fortress — evening sound-and-light show", es: "Fortaleza de Tsarevets — espectáculo de luz y sonido al anochecer", de: "Festung Zarewez – Ton- und Lichtshow am Abend" }, wikipedia: "File:Tsarevets - Veliko Tarnovo - 2.jpg" },
        { name: { fr: "Vieille ville de Veliko Tarnovo — maisons en terrasses", en: "Veliko Tarnovo Old Town — terraced houses", es: "Casco antiguo de Veliko Tarnovo — casas en terrazas", de: "Altstadt von Veliko Tarnovo – Reihenhäuser" }, wikipedia: "File:Veliko Tarnovo - Varosha quarter.jpg" },
        { name: { fr: "Monastère de Preobrazhenski au pied des falaises", en: "Preobrazhenski Monastery at the foot of the cliffs", es: "Monasterio de Preobrazhenski al pie de los acantilados", de: "Preobrazhensky-Kloster am Fuße der Klippen" }, wikipedia: "File:MONASTERY OF PREOBRZENSKI, VELIKO TURNOVO.jpg" },
        { name: { fr: "Village artisanal d'Arbanasi — maisons forteresses ottomanes", en: "Artisan village of Arbanasi — Ottoman fortress houses", es: "Pueblo artesanal de Arbanasi — casas fortificadas otomanas", de: "Handwerkerdorf Arbanasi – osmanische Festungshäuser" }, wikipedia: "File:Arbanasi-imagesfrombulgaria.jpg" },
      ],
    },
    {
      id: 5,
      name: { fr: "Bansko & Pirin", en: "Bansko & Pirin", es: "Bansko y Pirin", de: "Bansko & Pirin" },
      region: { fr: "Blagoevgrad", en: "Blagoevgrad", es: "Blagoevgrad", de: "Blagoewgrad" },
      description: {
        fr: "Au pied des sommets du Pirin classés à l'UNESCO, Bansko est la première station de ski des Balkans. Son centre historique aux maisons de pierre et bois charme autant que ses pistes modernes. Lacs glaciaires, forêts et monastères proches en font une base idéale toute l'année.", en: "At the foot of the UNESCO-listed Pirin peaks, Bansko is the Balkans' leading ski resort. Its historic centre of stone-and-wood houses is every bit as charming as its modern slopes. Glacial lakes, forests and nearby monasteries make it an ideal base all year round.", es: "Al pie de las cumbres de Pirin, declaradas Patrimonio de la UNESCO, Bansko es la principal estación de esquí de los Balcanes. Su centro histórico de casas de piedra y madera cautiva tanto como sus pistas modernas. Lagos glaciares, bosques y monasterios cercanos la convierten en una base ideal todo el año.", de: "Bansko liegt am Fuße der zum UNESCO-Weltkulturerbe gehörenden Pirin-Gipfel und ist das erste Skigebiet auf dem Balkan. Sein historisches Zentrum mit seinen Stein- und Holzhäusern ist ebenso bezaubernd wie seine modernen Hänge. Gletscherseen, Wälder und nahe gelegene Klöster machen es zu einem idealen Ausgangspunkt für das ganze Jahr.",
      },
      wikipedia: "Bansko",
      tags: ["Ski", "Randonnée", "Nature", "UNESCO"],
      mustSee: [
        { name: { fr: "Domaine skiable de Bansko", en: "Bansko ski area", es: "Dominio esquiable de Bansko", de: "Skigebiet Bansko" }, wikipedia: "File:Bansko ski 2025 19.jpg" },
        { name: { fr: "Parc national de Pirin", en: "Pirin National Park", es: "Parque nacional de Pirin", de: "Pirin-Nationalpark" }, wikipedia: "Pirin_National_Park" },
        { name: { fr: "Vieille ville de Bansko — maisons bulgares", en: "Bansko Old Town — traditional Bulgarian houses", es: "Casco antiguo de Bansko — casas tradicionales búlgaras", de: "Altstadt von Bansko – bulgarische Häuser" }, wikipedia: "Bansko" },
        { name: { fr: "Lac de Vihren", en: "Vihren Lake", es: "Lago de Vihren", de: "Vihrensee" }, wikipedia: "Vihren" },
        { name: { fr: "Monastère de Rila depuis Bansko", en: "Rila Monastery from Bansko", es: "Monasterio de Rila desde Bansko", de: "Rila-Kloster aus Bansko" }, wikipedia: "File:Klosterkirche des Rilaklosters.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Bulgarie est la destination la moins chère de l'UE. Les prix sont 50–60% inférieurs à ceux de la France. La côte de la mer Noire, très touristique, est un peu plus chère en juillet-août. Le ski à Bansko est le moins cher d'Europe pour la même qualité de neige.", en: "Bulgaria is the cheapest destination in the EU. Prices are 50–60% lower than in France. The Black Sea coast, which is very touristy, gets a little pricier in July and August. Skiing in Bansko is the cheapest in Europe for a comparable snow quality.", es: "Bulgaria es el destino más barato de la UE. Los precios son entre un 50 y un 60% inferiores a los de Francia. La costa del mar Negro, muy turística, se encarece un poco en julio y agosto. Esquiar en Bansko es lo más barato de Europa para una calidad de nieve comparable.", de: "Bulgarien ist das günstigste Reiseziel in der EU. Die Preise sind 50–60 % niedriger als in Frankreich. Die sehr touristische Schwarzmeerküste ist im Juli-August etwas teurer. Skifahren in Bansko ist bei gleicher Schneequalität das günstigste in Europa.",
    },
    currency: "BGN",
    exchangeRate: "1€ ≈ 1,96 BGN (taux fixe — lev arrimé à l'euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / pension en province", en: "Guesthouse / countryside pension", es: "Guesthouse / pensión en provincia", de: "Gästehaus/Pension in der Provinz" }, price: "15–30 €", detail: { fr: "Chambre propre, petit-déj inclus souvent", en: "Clean room, breakfast often included", es: "Habitación limpia, desayuno a menudo incluido", de: "Sauberes Zimmer, Frühstück oft inklusive" } },
          { label: { fr: "Hôtel 3★ Sofia ou Plovdiv", en: "3★ hotel in Sofia or Plovdiv", es: "Hotel 3★ en Sofía o Plovdiv", de: "Hotel 3★ Sofia oder Plovdiv" }, price: "45–90 €", detail: { fr: "Bon confort, bien situé", en: "Comfortable and well located", es: "Buen confort, bien ubicado", de: "Guter Komfort, gute Lage" } },
          { label: { fr: "Appartement bord de mer (Sozopol, juillet-août)", en: "Seaside apartment (Sozopol, July-August)", es: "Apartamento junto al mar (Sozópolis, julio-agosto)", de: "Apartment am Meer (Sozopol, Juli-August)" }, price: "40–90 €", detail: { fr: "Location directe, vue mer", en: "Direct rental, sea view", es: "Alquiler directo, vista al mar", de: "Direktvermietung, Meerblick" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Shopska salade + banitsa (feta et épinards feuilletés)", en: "Shopska salad + banitsa (flaky pastry with feta and spinach)", es: "Ensalada shopska + banitsa (hojaldre con feta y espinacas)", de: "Shopska-Salat + Banitsa (Feta und Blattspinat)" }, price: "5–10 €", detail: { fr: "Repas complet bulgare", en: "Complete Bulgarian meal", es: "Comida búlgara completa", de: "Komplette bulgarische Mahlzeit" } },
          { label: { fr: "Restaurant mid-range Sofia ou Plovdiv", en: "Mid-range restaurant in Sofia or Plovdiv", es: "Restaurante de gama media en Sofía o Plovdiv", de: "Mittelklasserestaurant Sofia oder Plovdiv" }, price: "10–20 €", detail: { fr: "Kavarma, grillades et vin local", en: "Kavarma, grilled meats and local wine", es: "Kavarma, carnes a la parrilla y vino local", de: "Kavarma, gegrilltes Fleisch und lokaler Wein" } },
          { label: { fr: "Boza + banitsa au marché du matin", en: "Boza + banitsa at the morning market", es: "Boza + banitsa en el mercado matutino", de: "Boza + Banitsa auf dem Morgenmarkt" }, price: "1–3 €", detail: { fr: "Petit-déjeuner bulgare ultra-typique", en: "A super-typical Bulgarian breakfast", es: "Un desayuno búlgaro muy típico", de: "Ultratypisches bulgarisches Frühstück" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus interurbain (Sofia–Plovdiv, 2h)", en: "Intercity bus (Sofia–Plovdiv, 2h)", es: "Autobús interurbano (Sofía–Plovdiv, 2h)", de: "Überlandbus (Sofia–Plovdiv, 2 Stunden)" }, price: "6–10 €", detail: { fr: "Réseau dense et abordable", en: "Extensive and affordable network", es: "Red densa y asequible", de: "Dichtes und erschwingliches Netz" } },
          { label: { fr: "Train BDZ Sofia–Varna (7h, ligne panoramique)", en: "BDZ train Sofia–Varna (7h, scenic route)", es: "Tren BDZ Sofía–Varna (7h, ruta panorámica)", de: "Zug BDZ Sofia–Varna (7 Stunden, Panoramalinie)" }, price: "12–20 €", detail: { fr: "Traversée des Balkans", en: "Crossing the Balkan Mountains", es: "Travesía de los Balcanes", de: "Durchquerung des Balkans" } },
          { label: { fr: "Tramway Sofia (ticket)", en: "Sofia tram (single ticket)", es: "Tranvía de Sofía (billete)", de: "Sofia Straßenbahn (Ticket)" }, price: "0,50 €", detail: { fr: "Réseau étendu en capitale", en: "Extensive network in the capital", es: "Red extensa en la capital", de: "Ausgedehntes Netz in der Hauptstadt" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite monastère de Rila + randonnée 7 lacs", en: "Rila Monastery visit + Seven Lakes hike", es: "Visita al monasterio de Rila + excursión a los 7 lagos", de: "Besuch des Rila-Klosters + 7-Seen-Wanderung" }, price: "15–40 €", detail: { fr: "Journée depuis Sofia", en: "Day trip from Sofia", es: "Excursión de un día desde Sofía", de: "Tagesausflug von Sofia" } },
          { label: { fr: "Spectacle son-et-lumière Tsarevets (soir)", en: "Tsarevets sound-and-light show (evening)", es: "Espectáculo de luz y sonido de Tsarevets (noche)", de: "Tsarevets Ton- und Lichtshow (abends)" }, price: "5–10 €", detail: { fr: "Incontournable à Tarnovo", en: "A must in Tarnovo", es: "Imprescindible en Tarnovo", de: "Unverzichtbar in Tarnovo" } },
          { label: { fr: "Forfait ski Bansko (journée)", en: "Bansko ski pass (day)", es: "Forfait de esquí en Bansko (día)", de: "Bansko-Skipass (Tag)" }, price: "25–35 €", detail: { fr: "Le ski le moins cher d'Europe", en: "The cheapest skiing in Europe", es: "El esquí más barato de Europa", de: "Der günstigste Ski in Europa" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + restaurants locaux + bus", en: "Guesthouse + local restaurants + buses", es: "Guesthouse + restaurantes locales + autobuses", de: "Gästehaus + lokale Restaurants + Bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "65–120 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided visits", es: "Hotel 3★ + restaurantes + visitas guiadas", de: "3★ Hotel + Restaurants + Führungen" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Sofia (2j) → Rila (1j) → Plovdiv (2j) → Veliko Tarnovo (2j) → Côte mer Noire / Sozopol (3j)", en: "Sofia (2d) → Rila (1d) → Plovdiv (2d) → Veliko Tarnovo (2d) → Black Sea coast / Sozopol (3d)", es: "Sofía (2d) → Rila (1d) → Plovdiv (2d) → Veliko Tarnovo (2d) → Costa del mar Negro / Sozópolis (3d)", de: "Sofia (2 Tage) → Rila (1 Tage) → Plovdiv (2 Tage) → Veliko Tarnovo (2 Tage) → Schwarzmeerküste / Sozopol (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sofia (Wizz Air, Ryanair, Bulgaria Air)", en: "Return flight Paris–Sofia (Wizz Air, Ryanair, Bulgaria Air)", es: "Vuelo ida y vuelta París–Sofía (Wizz Air, Ryanair, Bulgaria Air)", de: "Hin- und Rückflug Paris–Sofia (Wizz Air, Ryanair, Bulgaria Air)" }, amount: "70–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Transports (bus + train)", en: "Transport (bus + train)", es: "Transporte (autobús + tren)", de: "Transport (Bus + Bahn)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + vins locaux", en: "Food + local wines", es: "Comida + vinos locales", de: "Essen + lokale Weine" }, amount: "200–350 €" },
            { label: { fr: "Activités, monastères, plages", en: "Activities, monasteries, beaches", es: "Actividades, monasterios, playas", de: "Aktivitäten, Klöster, Strände" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 600 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sofia", en: "Return flight Paris–Sofia", es: "Vuelo ida y vuelta París–Sofía", de: "Hin- und Rückflug Paris–Sofia" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)", de: "3★ Hotels (10 Nächte)" }, amount: "500–900 €" },
            { label: { fr: "Voiture de location (10 jours)", en: "Rental car (10 days)", es: "Coche de alquiler (10 días)", de: "Mietwagen (10 Tage)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "350–650 €" },
            { label: { fr: "Activités, ski, sorties", en: "Activities, skiing, outings", es: "Actividades, esquí, salidas", de: "Aktivitäten, Skifahren, Ausflüge" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~2h30 (Wizz Air, Ryanair, Bulgaria Air direct CDG/Beauvais–Sofia). Aussi vols vers Varna et Bourgas en été.", en: "~2h30 (Wizz Air, Ryanair, Bulgaria Air direct CDG/Beauvais–Sofia). There are also flights to Varna and Burgas in summer.", es: "~2h30 (Wizz Air, Ryanair, Bulgaria Air directo CDG/Beauvais–Sofía). También hay vuelos a Varna y Burgas en verano.", de: "ca. 2 Std. 30 Min. (Wizz Air, Ryanair, Bulgaria Air direkt CDG/Beauvais–Sofia). Im Sommer auch Flüge nach Varna und Burgas." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — UE (Bulgarie membre depuis 2007). Carte d'identité française suffisante.", en: "No visa required — EU country (Bulgaria has been a member since 2007). A French national ID card is sufficient.", es: "Sin visado — país de la UE (Bulgaria es miembro desde 2007). Basta con el DNI.", de: "Kein Visum – EU (Bulgarien Mitglied seit 2007). Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Lev bulgare (BGN, arrimé à l'euro). Carte bancaire bien acceptée en ville. Espèces indispensables à la campagne et dans les monastères.", en: "Bulgarian lev (BGN, pegged to the euro). Cards are widely accepted in cities. Cash is essential in the countryside and in monasteries.", es: "Lev búlgaro (BGN, vinculado al euro). La tarjeta se acepta bien en las ciudades. El efectivo es indispensable en el campo y en los monasterios.", de: "Bulgarischer Lew (BGN, an den Euro gekoppelt). Kreditkarte wird in der Stadt gut akzeptiert. Unverzichtbare Arten auf dem Land und in Klöstern." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Bulgare (alphabet cyrillique). Anglais parlé par les jeunes. Russe compris par les anciens. Peu de français.", en: "Bulgarian (Cyrillic alphabet). English is spoken by younger people. Older generations often understand Russian. Very little French.", es: "Búlgaro (alfabeto cirílico). Los jóvenes hablan inglés. Los mayores suelen entender ruso. Muy poco francés.", de: "Bulgarisch (kyrillisches Alphabet). Englisch wird von jungen Leuten gesprochen. Russisch wurde von den Alten verstanden. Kleines Französisch." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No hace falta adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution. CEAM valide. Eau du robinet potable dans les villes (vérifier en zone rurale).", en: "No special precautions. EHIC accepted. Tap water is drinkable in cities (check locally in rural areas).", es: "Sin precauciones especiales. La TSE es válida. El agua del grifo es potable en las ciudades (verificar en zonas rurales).", de: "Keine Vorsichtsmaßnahmen. Gültige EHIC. Trinkbares Leitungswasser in Städten (in ländlichen Gebieten prüfen)." } },
    { icon: "🤝", label: { fr: "Gestuelle", en: "Body language", es: "Gestos", de: "Geste" }, value: { fr: "ATTENTION : en Bulgarie, hocher la tête de haut en bas signifie NON, et secouer la tête de gauche à droite signifie OUI — le contraire de la France. Source de nombreux malentendus.", en: "IMPORTANT: in Bulgaria, nodding up and down means NO, while shaking your head side to side means YES — the opposite of France. This causes plenty of misunderstandings.", es: "ATENCIÓN: en Bulgaria, asentir con la cabeza de arriba abajo significa NO, y negar de un lado a otro significa SÍ — lo contrario que en Francia. Es fuente de muchos malentendidos.", de: "BITTE BEACHTEN: In Bulgarien bedeutet Kopfnicken nach oben und unten NEIN, und Kopfschütteln von links nach rechts bedeutet JA – das Gegenteil von Frankreich. Quelle vieler Missverständnisse." } },
    { icon: "🍷", label: { fr: "Vin", en: "Wine", es: "Vino", de: "Wein" }, value: { fr: "La Bulgarie produit d'excellents vins (Mavrud, Melnik, Rubin) à des prix imbattables. Les régions de Melnik et Plovdiv sont les meilleures.", en: "Bulgaria produces excellent wines (Mavrud, Melnik, Rubin) at unbeatable prices. The Melnik and Plovdiv regions are the best.", es: "Bulgaria produce excelentes vinos (Mavrud, Melnik, Rubin) a precios inmejorables. Las regiones de Melnik y Plovdiv son las mejores.", de: "Bulgarien produziert hervorragende Weine (Mavrud, Melnik, Rubin) zu unschlagbaren Preisen. Die Regionen Melnik und Plovdiv sind die besten." } },
  ],
};
