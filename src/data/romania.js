export const ROMANIA = {
  code: "ROU",
  numericId: 642,
  name: { fr: "Roumanie", en: "Romania", es: "Rumanía", de: "Rumänien" },
  emoji: "🇷🇴",
  capital: { fr: "Bucarest", en: "Bucharest", es: "Bucarest", de: "Bukarest" },
  language: { fr: "Roumain", en: "Romanian", es: "Rumano", de: "Rumänisch" },
  currency: { fr: "Leu roumain (RON)", en: "Romanian leu (RON)", es: "Leu rumano (RON)", de: "Rumänischer Leu (RON)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1800,
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
    plage: 0,
  },
  description: {
    fr: "La Roumanie est la grande surprise d'Europe de l'Est : la Transylvanie avec ses forteresses saxonnes médiévales et le château de Bran (Dracula), le delta du Danube (UNESCO, plus grand delta d'Europe), les monastères peints de Bucovine (UNESCO), les Carpates avec ours et loups sauvages, et Bucarest avec son architecture Art Nouveau et son absurde Palais du Parlement — le deuxième plus grand bâtiment du monde.", en: "Romania is the great surprise of Eastern Europe: Transylvania with its medieval Saxon fortresses and Bran Castle (Dracula), the Danube Delta (UNESCO, the largest delta in Europe), the painted monasteries of Bucovina (UNESCO), the Carpathians with wild bears and wolves, and Bucharest with its Art Nouveau architecture and its absurd Palace of the Parliament — the second-largest building in the world.", es: "Rumanía es la gran sorpresa de Europa del Este: Transilvania con sus fortalezas medievales sajonas y el castillo de Bran (Drácula), el delta del Danubio (UNESCO, el mayor delta de Europa), los monasterios pintados de Bucovina (UNESCO), los Cárpatos con osos y lobos salvajes, y Bucarest con su arquitectura Art Nouveau y su desmesurado Palacio del Parlamento, el segundo edificio más grande del mundo.", de: "Rumänien ist die große Überraschung Osteuropas: Siebenbürgen mit seinen mittelalterlichen sächsischen Festungen und der Burg Bran (Dracula), das Donaudelta (UNESCO, größtes Delta Europas), die bemalten Klöster der Bukowina (UNESCO), die Karpaten mit wilden Bären und Wölfen und Bukarest mit seiner Jugendstilarchitektur und seinem absurden Parlamentspalast – dem zweitgrößten Gebäude der Welt.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Saison idéale", en: "Ideal season", es: "Temporada ideal", de: "Ideale Jahreszeit" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (20–28°C), fleurs des Carpates en mai-juin, delta du Danube en juillet-août, couleurs d'automne splendides en septembre. Eviter le cœur de l'été (35°C+ à Bucarest en juillet).", en: "Pleasant temperatures (20–28°C), Carpathian wildflowers in May–June, Danube Delta in July–August, splendid autumn colours in September. Avoid the height of summer (35°C+ in Bucharest in July).", es: "Temperaturas agradables (20–28 °C), flores de los Cárpatos en mayo-junio, delta del Danubio en julio-agosto, espléndidos colores otoñales en septiembre. Evitar pleno verano (35 °C+ en Bucarest en julio).", de: "Angenehme Temperaturen (20–28°C), Karpatenblüten im Mai-Juni, Donaudelta im Juli-August, prächtige Herbstfarben im September. Vermeiden Sie den Hochsommer (35°C+ in Bukarest im Juli).",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February", es: "Diciembre – Febrero", de: "Dezember – Februar" },
      label: { fr: "Hiver en Transylvanie", en: "Winter in Transylvania", es: "Invierno en Transilvania", de: "Winter in Siebenbürgen" },
      color: "#f59e0b",
      description: {
        fr: "Villages médiévaux enneigés, ski dans les Carpates (Sinaia, Poiana Brasov), marchés de Noël de Sibiu. Températures -5 à -10°C en montagne.", en: "Snow-covered medieval villages, skiing in the Carpathians (Sinaia, Poiana Brasov), Sibiu's Christmas markets. Temperatures -5 to -10°C in the mountains.", es: "Pueblos medievales nevados, esquí en los Cárpatos (Sinaia, Poiana Brasov), mercados navideños de Sibiu. Temperaturas de -5 a -10 °C en la montaña.", de: "Verschneite mittelalterliche Dörfer, Skifahren in den Karpaten (Sinaia, Poiana Brasov), Weihnachtsmärkte in Sibiu. Temperaturen -5 bis -10°C in den Bergen.",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "bucharest",
      name: "Bucarest",
      region: { fr: "Munténie (plaine du sud)", en: "Wallachia (southern plain)", es: "Muntenia (llanura del sur)", de: "Muntenia (südliche Ebene)" },
      data: [
        { month: "Jan", temp: -1, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  7, rain: 40,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 45,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "transylvania",
      name: "Brasov (Transylvanie)",
      region: { fr: "Carpates (altitude 600m)", en: "Carpathians (600m altitude)", es: "Cárpatos (altitud 600 m)", de: "Karpaten (Höhe 600 m)" },
      data: [
        { month: "Jan", temp: -4, rain: 35,  icon: "❄️" },
        { month: "Fév", temp: -2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 75,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 90,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 45,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 35,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Transylvanie — Châteaux et forêts de Dracula", en: "Transylvania — Dracula's castles and forests", es: "Transilvania — Castillos y bosques de Drácula", de: "Siebenbürgen – Draculas Schlösser und Wälder" },
      region: { fr: "Carpates", en: "Carpathians", es: "Cárpatos", de: "Karpaten" },
      description: {
        fr: "La Transylvanie est une région magique : le château de Bran (associé à Dracula/Vlad l'Empaleur), la citadelle médiévale saxonne de Sighișoara (UNESCO, ville natale de Vlad Tepeș), les villages fortifiés de Viscri et Biertan (UNESCO), et les Carpates avec des populations sauvages d'ours bruns, loups et lynx — les plus importantes d'Europe hors Russie.", en: "Transylvania is a magical region: Bran Castle (associated with Dracula/Vlad the Impaler), the medieval Saxon citadel of Sighișoara (UNESCO, Vlad Tepeș's birthplace), the fortified villages of Viscri and Biertan (UNESCO), and the Carpathians with wild populations of brown bears, wolves and lynx — the largest in Europe outside Russia.", es: "Transilvania es una región mágica: el castillo de Bran (asociado a Drácula/Vlad el Empalador), la ciudadela medieval sajona de Sighișoara (UNESCO, ciudad natal de Vlad Tepeș), los pueblos fortificados de Viscri y Biertan (UNESCO), y los Cárpatos con poblaciones salvajes de osos pardos, lobos y linces, las más importantes de Europa fuera de Rusia.", de: "Siebenbürgen ist eine magische Region: Schloss Bran (verbunden mit Dracula/Vlad dem Pfähler), die mittelalterliche sächsische Zitadelle von Sighișoara (UNESCO, Geburtsort von Vlad Tepeș), die befestigten Dörfer Viscri und Biertan (UNESCO) und die Karpaten mit wilden Populationen von Braunbären, Wölfen und Luchsen – den größten in Europa außerhalb Russlands.",
      },
      wikipedia: "File:Cheile_Turzii-(42).JPG",
      tags: ["Histoire", "Safari", "UNESCO", "Architecture", "Randonnée", "Ski"],
      mustSee: [
        { name: { fr: "Château de Bran — 'château de Dracula' dans les Carpates", en: "Bran Castle — 'Dracula's castle' in the Carpathians", es: "Castillo de Bran — el 'castillo de Drácula' en los Cárpatos", de: "Schloss Bran – „Draculas Schloss“ in den Karpaten" }, wikipedia: "Bran_Castle" },
        { name: { fr: "Sighișoara — ville médiévale saxonne fortifiée (UNESCO)", en: "Sighișoara — fortified medieval Saxon town (UNESCO)", es: "Sighișoara — ciudad medieval sajona fortificada (UNESCO)", de: "Sighișoara – mittelalterliche befestigte sächsische Stadt (UNESCO)" }, wikipedia: "Sighișoara" },
        { name: { fr: "Viscri — village saxon UNESCO, ferme du Prince Charles", en: "Viscri — UNESCO Saxon village, Prince Charles's farm", es: "Viscri — pueblo sajón UNESCO, granja del príncipe Carlos", de: "Viscri – sächsisches UNESCO-Dorf, Prinz-Karl-Farm" }, wikipedia: "File:ViscriKirchenburg.jpg" },
        { name: { fr: "Randonnée ours bruns des Carpates (guide, Braşov)", en: "Carpathian brown bear hike (guided, Braşov)", es: "Ruta de osos pardos de los Cárpatos (con guía, Brasov)", de: "Karpaten-Braunbären-Wanderung (Führer, Braşov)" }, wikipedia: "Brown_bear" },
      ],
    },
    {
      id: 2,
      name: { fr: "Delta du Danube — Wilderness UNESCO", en: "Danube Delta — UNESCO wilderness", es: "Delta del Danubio — Naturaleza salvaje UNESCO", de: "Donaudelta – Wildnis UNESCO" },
      region: { fr: "Dobrogée (côte est)", en: "Dobruja (east coast)", es: "Dobrugea (costa este)", de: "Dobrogee (Ostküste)" },
      description: {
        fr: "Le delta du Danube est le troisième plus grand delta d'Europe et l'un des écosystèmes les plus riches : 300 espèces d'oiseaux (pélicans, aigrettes, cormorans pygmées), 45 espèces de poissons dont l'esturgeon beluga, des forêts flottantes et des lacs intérieurs sans route. On se déplace uniquement en bateau depuis Tulcea. Classé UNESCO et réserve de biosphère.", en: "The Danube Delta is the third-largest delta in Europe and one of the richest ecosystems: 300 bird species (pelicans, egrets, pygmy cormorants), 45 fish species including the beluga sturgeon, floating forests and roadless inland lakes. You get around only by boat from Tulcea. UNESCO-listed and a biosphere reserve.", es: "El delta del Danubio es el tercer delta más grande de Europa y uno de los ecosistemas más ricos: 300 especies de aves (pelícanos, garcetas, cormoranes pigmeos), 45 especies de peces incluido el esturión beluga, bosques flotantes y lagos interiores sin carreteras. Solo se puede recorrer en barco desde Tulcea. Patrimonio UNESCO y reserva de la biosfera.", de: "Das Donaudelta ist das drittgrößte Delta Europas und eines der reichsten Ökosysteme: 300 Vogelarten (Pelikane, Reiher, Zwergkormorane), 45 Fischarten, darunter der Beluga-Stör, schwimmende Wälder und straßenlose Binnenseen. Wir reisen nur mit dem Boot von Tulcea aus. Als UNESCO- und Biosphärenreservat klassifiziert.",
      },
      wikipedia: "File:Danube Delta, autumn.jpg",
      tags: ["Nature", "Safari", "UNESCO", "Randonnée"],
      mustSee: [
        { name: { fr: "Pélicans blancs et frisés (la plus grande colonie d'Europe)", en: "White and Dalmatian pelicans (Europe's largest colony)", es: "Pelícanos blancos y ceñudos (la mayor colonia de Europa)", de: "Weiße und Krauskopfpelikane (die größte Kolonie Europas)" }, wikipedia: "File:White pelicans (Pelecanus onocrotalus) Danube delta.jpg" },
        { name: { fr: "Excursion en bateau dans les bras secondaires du delta", en: "Boat trip through the delta's secondary channels", es: "Excursión en barco por los brazos secundarios del delta", de: "Bootsfahrt in den Nebenarmen des Deltas" }, wikipedia: "File:Comrades from the Danube Delta. (29724046008).jpg" },
        { name: { fr: "Village de Sfântu Gheorghe — pêcheurs au bout du delta", en: "Sfântu Gheorghe village — fishermen at the tip of the delta", es: "Pueblo de Sfântu Gheorghe — pescadores en el extremo del delta", de: "Dorf Sfântu Gheorghe – Fischer am Ende des Deltas" }, wikipedia: "File:Danube-Delta2008a.jpg" },
        { name: { fr: "Coucher de soleil sur les roseaux depuis un bateau", en: "Sunset over the reeds from a boat", es: "Atardecer sobre los cañaverales desde un barco", de: "Sonnenuntergang über dem Schilf von einem Boot aus" }, wikipedia: "File:Danube Delta oct 2006 101.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Monastères de Bucovine — Fresques UNESCO", en: "Bucovina Monasteries — UNESCO frescoes", es: "Monasterios de Bucovina — Frescos UNESCO", de: "Klöster der Bukowina – UNESCO-Fresken" },
      region: { fr: "Moldavie (nord-est)", en: "Moldavia (north-east)", es: "Moldavia (noreste)", de: "Moldawien (Nordosten)" },
      description: {
        fr: "Les monastères peints de Bucovine (Voronet, Sucevita, Moldovita) sont classés UNESCO : leurs façades extérieures entièrement couvertes de fresques du XVe–XVIe siècle représentant des scènes bibliques en bleu de Voronet (un bleu unique jamais reproduit). Une des curiosités artistiques les plus étonnantes d'Europe, dans des collines vertes et boisées.", en: "The painted monasteries of Bucovina (Voronet, Sucevita, Moldovita) are UNESCO-listed: their exterior facades entirely covered in 15th–16th-century frescoes depicting biblical scenes in Voronet blue (a unique shade never replicated). One of the most astonishing artistic curiosities in Europe, set among green wooded hills.", es: "Los monasterios pintados de Bucovina (Voroneț, Sucevița, Moldovița) están declarados Patrimonio de la Humanidad: sus fachadas exteriores están totalmente cubiertas de frescos de los siglos XV-XVI que representan escenas bíblicas en el famoso azul de Voroneț (un azul único jamás replicado). Una de las curiosidades artísticas más asombrosas de Europa, entre colinas verdes y boscosas.", de: "Die bemalten Klöster der Bukowina (Voronet, Sucevita, Moldovita) stehen auf der UNESCO-Liste: Ihre Außenfassaden sind vollständig mit Fresken aus dem 15.–16. Jahrhundert bedeckt, die biblische Szenen in Voronet-Blau (ein einzigartiges Blau, das nie reproduziert wurde) darstellen. Eine der erstaunlichsten künstlerischen Kuriositäten Europas, inmitten grüner und bewaldeter Hügel.",
      },
      wikipedia: "File:Voronet murals 2010 15.jpg",
      tags: ["Culture", "UNESCO", "Spiritualité", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Voronet — 'la chapelle Sixtine de l'Est', bleu unique", en: "Voronet — the 'Sistine Chapel of the East', a unique blue", es: "Voroneț — la 'Capilla Sixtina de Oriente', azul único", de: "Voronet – „die Sixtinische Kapelle des Ostens“, einzigartiges Blau" }, wikipedia: "Voroneț_Monastery" },
        { name: { fr: "Sucevița — forteresse monastique avec fresques intactes", en: "Sucevița — monastic fortress with intact frescoes", es: "Sucevița — fortaleza monástica con frescos intactos", de: "Sucevița – Klosterfestung mit intakten Fresken" }, wikipedia: "Sucevița_Monastery" },
        { name: { fr: "Moldovița — fresques du Siège de Constantinople", en: "Moldovița — frescoes of the Siege of Constantinople", es: "Moldovița — frescos del Sitio de Constantinopla", de: "Moldovița – Fresken aus der Belagerung von Konstantinopel" }, wikipedia: "Moldovița_Monastery" },
        { name: { fr: "Humor — détails comiques rares dans l'art religieux", en: "Humor — rare comic details in religious art", es: "Humor — raros detalles cómicos en el arte religioso", de: "Humor – seltene komische Details in der religiösen Kunst" }, wikipedia: "Humor_Monastery" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bucarest — Excès et beauté", en: "Bucharest — Excess and beauty", es: "Bucarest — Exceso y belleza", de: "Bukarest – Exzess und Schönheit" },
      region: { fr: "Munténie (capitale)", en: "Wallachia (capital)", es: "Muntenia (capital)", de: "Muntenia (Hauptstadt)" },
      description: {
        fr: "Bucarest est une capitale fascinante par ses contradictions : le Palais du Parlement (2e plus grand bâtiment du monde, commandé par Ceaușescu), les quartiers Art Nouveau de Floreasca et Dorobanți, le Village Museum (musées en plein air avec 300 bâtisses paysannes), et une scène nocturne et gastronomique en plein essor. La 'Petite Paris des Balkans' retrouve sa splendeur.", en: "Bucharest is a capital fascinating for its contradictions: the Palace of the Parliament (the 2nd-largest building in the world, commissioned by Ceaușescu), the Art Nouveau districts of Floreasca and Dorobanți, the Village Museum (open-air museum with 300 peasant buildings), and a booming nightlife and food scene. The 'Little Paris of the Balkans' is regaining its splendour.", es: "Bucarest es una capital fascinante por sus contradicciones: el Palacio del Parlamento (2.º edificio más grande del mundo, encargado por Ceaușescu), los barrios Art Nouveau de Floreasca y Dorobanți, el Museo del Pueblo (museo al aire libre con 300 construcciones campesinas), y una escena nocturna y gastronómica en pleno auge. El 'Pequeño París de los Balcanes' recupera su esplendor.", de: "Bukarest ist eine faszinierende Hauptstadt mit ihren Widersprüchen: dem Parlamentspalast (zweitgrößtes Gebäude der Welt, in Auftrag gegeben von Ceaușescu), den Jugendstilvierteln Floreasca und Dorobanți, dem Dorfmuseum (Freilichtmuseen mit 300 Bauernhäusern) und einem boomenden Nachtleben und einer gastronomischen Szene. Das „Kleine Paris des Balkans“ erstrahlt wieder in neuem Glanz.",
      },
      wikipedia: "Bucharest",
      tags: ["Architecture", "Musées", "Nightlife", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Palais du Parlement (Ceaușescu) — visite guidée obligatoire", en: "Palace of the Parliament (Ceaușescu) — guided tour mandatory", es: "Palacio del Parlamento (Ceaușescu) — visita guiada obligatoria", de: "Parlamentspalast (Ceaușescu) – obligatorische Führung" }, wikipedia: "Palace_of_the_Parliament" },
        { name: { fr: "Musée du Village — 300 maisons paysannes en plein air", en: "Village Museum — 300 open-air peasant houses", es: "Museo del Pueblo — 300 casas campesinas al aire libre", de: "Dorfmuseum – 300 Bauernhäuser im Freien" }, wikipedia: "Dimitrie_Gusti_National_Village_Museum" },
        { name: { fr: "Calea Victoriei — boulevard Art Nouveau et palais Belle Époque", en: "Calea Victoriei — Art Nouveau boulevard and Belle Époque palaces", es: "Calea Victoriei — bulevar Art Nouveau y palacios de la Belle Époque", de: "Calea Victoriei – Jugendstilboulevard und Belle-Époque-Palast" }, wikipedia: "Calea_Victoriei" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Roumanie est l'une des destinations les moins chères de l'Union européenne. Bucarest a le coût de la vie le plus bas des capitales de l'UE. Le leu est stable. La qualité des restaurants est en forte progression.", en: "Romania is one of the cheapest destinations in the European Union. Bucharest has the lowest cost of living among EU capitals. The leu is stable. Restaurant quality is rising sharply.", es: "Rumanía es uno de los destinos más baratos de la Unión Europea. Bucarest tiene el coste de vida más bajo de las capitales de la UE. El leu es estable. La calidad de los restaurantes progresa con fuerza.", de: "Rumänien ist eines der günstigsten Reiseziele in der Europäischen Union. Bukarest hat die niedrigsten Lebenshaltungskosten unter den EU-Hauptstädten. Der Leu ist stabil. Die Qualität der Restaurants verbessert sich deutlich.",
    },
    currency: "RON",
    exchangeRate: "1€ ≈ 5 RON",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / pension en Transylvanie", en: "Guesthouse in Transylvania", es: "Guesthouse / pensión en Transilvania", de: "Gästehaus / Pension in Siebenbürgen" }, price: "20–40 €", detail: { fr: "Chambre chez l'habitant, repas disponibles", en: "Room with a local host, meals available", es: "Habitación con anfitrión local, comidas disponibles", de: "Gastfamilie, Mahlzeiten verfügbar" } },
          { label: { fr: "Hôtel 3★ Bucarest ou Brasov", en: "3★ hotel in Bucharest or Brasov", es: "Hotel 3★ en Bucarest o Brasov", de: "Hotel 3★ Bukarest oder Brasov" }, price: "50–100 €", detail: { fr: "Bon confort, souvent petit-déj inclus", en: "Good comfort, breakfast often included", es: "Buen confort, desayuno a menudo incluido", de: "Guter Komfort, oft Frühstück inklusive" } },
          { label: { fr: "Cabane de montagne (Carpates)", en: "Mountain cabin (Carpathians)", es: "Cabaña de montaña (Cárpatos)", de: "Berghütte (Karpaten)" }, price: "20–40 €", detail: { fr: "Demi-pension disponible", en: "Half-board available", es: "Media pensión disponible", de: "Halbpension möglich" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Sarmale (chou farci) + mămăligă dans un restaurant local", en: "Sarmale (stuffed cabbage) + mămăligă at a local restaurant", es: "Sarmale (col rellena) + mămăligă en un restaurante local", de: "Sarmale (gefüllter Kohl) + mămăligă in einem lokalen Restaurant" }, price: "7–12 €", detail: { fr: "Cuisine roumaine copieuse", en: "Hearty Romanian cuisine", es: "Cocina rumana abundante", de: "Herzhafte rumänische Küche" } },
          { label: { fr: "Restaurant mid-range Bucarest", en: "Mid-range restaurant in Bucharest", es: "Restaurante de gama media en Bucarest", de: "Mittelklasserestaurant Bukarest" }, price: "14–25 €", detail: { fr: "Cuisine créative + vins locaux", en: "Creative cuisine + local wines", es: "Cocina creativa + vinos locales", de: "Kreative Küche + lokale Weine" } },
          { label: { fr: "Marché agroalimentaire — légumes, fromages, charcuteries", en: "Food market — vegetables, cheeses, cured meats", es: "Mercado de alimentación — verduras, quesos, embutidos", de: "Agrarlebensmittelmarkt – Gemüse, Käse, Aufschnitt" }, price: "5–10 €", detail: { fr: "Extraordinaire diversité locale", en: "Extraordinary local variety", es: "Extraordinaria variedad local", de: "Außergewöhnliche lokale Vielfalt" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Train CFR Bucarest–Brasov (2h30)", en: "CFR train Bucharest–Brasov (2h30)", es: "Tren CFR Bucarest–Brasov (2h30)", de: "CFR-Zug Bukarest–Brasov (2 Std. 30 Min.)" }, price: "8–15 €", detail: { fr: "Paysage des Carpates magnifique", en: "Magnificent Carpathian scenery", es: "Paisaje magnífico de los Cárpatos", de: "Herrliche Karpatenlandschaft" } },
          { label: { fr: "Bus interurbain (FlixBus, Autocar)", en: "Intercity bus (FlixBus, coach)", es: "Autobús interurbano (FlixBus)", de: "Überlandbus (FlixBus, Reisebus)" }, price: "10–20 €", detail: { fr: "Liaisons fréquentes", en: "Frequent connections", es: "Conexiones frecuentes", de: "Häufige Verbindungen" } },
          { label: { fr: "Location de voiture (Bucarest, journée)", en: "Car rental (Bucharest, per day)", es: "Alquiler de coche (Bucarest, por día)", de: "Autovermietung (Bukarest, Tag)" }, price: "25–50 €", detail: { fr: "Recommandée pour les monastères", en: "Recommended for the monasteries", es: "Recomendado para los monasterios", de: "Empfohlen für Klöster" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite château de Bran", en: "Bran Castle visit", es: "Visita al castillo de Bran", de: "Besuchen Sie das Schloss Bran" }, price: "9 €", detail: { fr: "Musée d'histoire medievale", en: "Medieval history museum", es: "Museo de historia medieval", de: "Mittelalterliches Geschichtsmuseum" } },
          { label: { fr: "Excursion bateau delta du Danube (demi-journée)", en: "Danube Delta boat trip (half-day)", es: "Excursión en barco por el delta del Danubio (medio día)", de: "Bootsfahrt im Donaudelta (halber Tag)" }, price: "20–40 €", detail: { fr: "Guide ornithologie + pique-nique", en: "Birdwatching guide + picnic", es: "Guía ornitológico + pícnic", de: "Ornithologie + Picknickführer" } },
          { label: { fr: "Randonnée guidée ours bruns (départ Brasov)", en: "Guided brown bear hike (from Brasov)", es: "Ruta guiada de osos pardos (salida desde Brasov)", de: "Geführte Braunbärenwanderung (Abfahrt von Brasov)" }, price: "40–80 €", detail: { fr: "Affût en forêt, guide naturaliste", en: "Forest hide, naturalist guide", es: "Observatorio en el bosque, guía naturalista", de: "Waldausguck, Naturführer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Pension + restaurant local + transports publics", en: "Guesthouse + local restaurant + public transport", es: "Pensión + restaurante local + transporte público", de: "Pension + lokales Restaurant + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "70–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided tours", es: "Hotel 3★ + restaurantes + visitas guiadas", de: "3★ Hotel + Restaurants + Führungen" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Bucarest (2j) → Sinaia (1j) → Brasov + Bran (2j) → Sighișoara (1j) → Bucovine (3j) → retour (1j)", en: "Bucharest (2d) → Sinaia (1d) → Brasov + Bran (2d) → Sighișoara (1d) → Bucovina (3d) → return (1d)", es: "Bucarest (2d) → Sinaia (1d) → Brasov + Bran (2d) → Sighișoara (1d) → Bucovina (3d) → regreso (1d)", de: "Bukarest (2T) → Sinaia (1T) → Brasov + Bran (2T) → Sighișoara (1T) → Bukowina (3T) → Rückfahrt (1T)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bucarest (Wizz Air, Ryanair, Tarom)", en: "Return flight Paris–Bucharest (Wizz Air, Ryanair, Tarom)", es: "Vuelo ida y vuelta Madrid–Bucarest (Wizz Air, Ryanair, Tarom)", de: "Hin- und Rückflug Paris–Bukarest (Wizz Air, Ryanair, Tarom)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "250–450 €" },
            { label: { fr: "Transports (train + voiture partage)", en: "Transport (train + shared car)", es: "Transporte (tren + coche compartido)", de: "Transport (Zug + Carsharing)" }, amount: "100–200 €" },
            { label: { fr: "Nourriture + vins", en: "Food + wine", es: "Comida + vinos", de: "Essen + Wein" }, amount: "200–350 €" },
            { label: { fr: "Visites + guide ours", en: "Visits + bear guide", es: "Visitas + guía de osos", de: "Besichtigungen + Bärenführer" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bucarest", en: "Return flight Paris–Bucharest", es: "Vuelo ida y vuelta Madrid–Bucarest", de: "Hin- und Rückflug Paris–Bukarest" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)", de: "3★ Hotels (10 Nächte)" }, amount: "550–1 000 €" },
            { label: { fr: "Voiture de location (10 jours)", en: "Car rental (10 days)", es: "Coche de alquiler (10 días)", de: "Mietwagen (10 Tage)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités, guides, delta", en: "Activities, guides, delta", es: "Actividades, guías, delta", de: "Aktivitäten, Führer, Delta" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~2h45 (Wizz Air, Ryanair, Tarom direct CDG/Beauvais–Bucarest). Aussi vols vers Cluj-Napoca et Timisoara.", en: "~2h45 (Wizz Air, Ryanair, direct Tarom CDG/Beauvais–Bucharest). Also flights to Cluj-Napoca and Timisoara.", es: "~3h30 (Wizz Air, Ryanair, Tarom). También vuelos a Cluj-Napoca y Timisoara.", de: "ca. 2 Std. 45 Min. (Wizz Air, Ryanair, Tarom direkt CDG/Beauvais–Bukarest). Auch Flüge nach Cluj-Napoca und Timisoara." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — UE (Roumanie membre depuis 2007, intégration Schengen terrestre 2024). Carte d'identité française suffisante.", en: "No visa required — EU (Romania a member since 2007, land Schengen integration in 2024). A French ID card is sufficient.", es: "Sin visado — UE (Rumanía miembro desde 2007, integración Schengen terrestre en 2024). DNI suficiente.", de: "Kein Visum – EU (Rumänien Mitglied seit 2007, Land Schengen-Integration 2024). Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Leu roumain (RON). Carte bancaire acceptée en ville. Espèces utiles en zone rurale et dans les marchés.", en: "Romanian leu (RON). Bank cards accepted in towns. Cash useful in rural areas and markets.", es: "Leu rumano (RON). Tarjeta bancaria aceptada en la ciudad. Efectivo útil en zonas rurales y mercados.", de: "Rumänischer Leu (RON). Kreditkarte wird in der Stadt akzeptiert. Nützliche Arten in ländlichen Gebieten und auf Märkten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Roumain (langue latine proche du français). Anglais parlé par les jeunes. Allemand utile en Transylvanie (héritage saxon).", en: "Romanian (a Latin language close to French). English spoken by young people. German useful in Transylvania (Saxon heritage).", es: "Rumano (lengua latina cercana al español). Los jóvenes hablan inglés. El alemán es útil en Transilvania (herencia sajona).", de: "Rumänisch (lateinische Sprache, die dem Französischen ähnelt). Englisch wird von jungen Leuten gesprochen. Deutsch nützlich in Siebenbürgen (sächsisches Erbe)." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution particulière. CEAM valide. Tiques dans les forêts des Carpates — protéger les jambes.", en: "No particular precautions needed. EHIC valid. Ticks in the Carpathian forests — cover your legs.", es: "Ninguna precaución especial. TSE válida. Garrapatas en los bosques de los Cárpatos — proteger las piernas.", de: "Keine besonderen Vorsichtsmaßnahmen. Gültige EHIC. Zecken in den Karpatenwäldern – schützen Sie die Beine." } },
    { icon: "🐻", label: { fr: "Ours bruns", en: "Brown bears", es: "Osos pardos", de: "Braunbären" }, value: { fr: "Les Carpates abritent 6 000 ours bruns — la plus grande population d'Europe hors Russie. Ne pas randonner seul en forêt profonde. Les guides connaissent les zones.", en: "The Carpathians are home to 6,000 brown bears — the largest population in Europe outside Russia. Don't hike alone deep in the forest. Guides know the areas.", es: "Los Cárpatos albergan 6.000 osos pardos — la mayor población de Europa fuera de Rusia. No caminar solo en lo profundo del bosque. Los guías conocen las zonas.", de: "In den Karpaten leben 6.000 Braunbären – die größte Population in Europa außerhalb Russlands. Wandern Sie nicht alleine im tiefen Wald. Die Guides kennen die Gebiete." } },
    { icon: "🚗", label: { fr: "Routes", en: "Roads", es: "Carreteras", de: "Straßen" }, value: { fr: "L'état des routes en dehors des autoroutes est variable. La Transfăgărășan (route de montagne ouverte juin–octobre) est l'une des plus belles du monde.", en: "Road quality off the motorways varies. The Transfăgărășan (mountain road open June–October) is one of the most beautiful in the world.", es: "El estado de las carreteras fuera de las autopistas es variable. La Transfăgărășan (carretera de montaña abierta de junio a octubre) es una de las más bellas del mundo.", de: "Die Straßenverhältnisse außerhalb von Autobahnen variieren. Die Transfăgărășan (Bergstraße, geöffnet von Juni bis Oktober) ist eine der schönsten der Welt." } },
  ],
};
