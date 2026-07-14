export const ROMANIA = {
  code: "ROU",
  numericId: 642,
  name: { fr: "Roumanie", en: "Romania", es: "Rumanía" },
  emoji: "🇷🇴",
  capital: { fr: "Bucarest", en: "Bucharest", es: "Bucarest" },
  language: { fr: "Roumain", en: "Romanian", es: "Rumano" },
  currency: { fr: "Leu roumain (RON)", en: "Romanian leu (RON)", es: "Leu rumano (RON)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1800,
  },
  description: {
    fr: "La Roumanie est la grande surprise d'Europe de l'Est : la Transylvanie avec ses forteresses saxonnes médiévales et le château de Bran (Dracula), le delta du Danube (UNESCO, plus grand delta d'Europe), les monastères peints de Bucovine (UNESCO), les Carpates avec ours et loups sauvages, et Bucarest avec son architecture Art Nouveau et son absurde Palais du Parlement — le deuxième plus grand bâtiment du monde.",
    en: "Romania is the great surprise of Eastern Europe: Transylvania with its medieval Saxon fortresses and Bran Castle (Dracula), the Danube Delta (UNESCO, the largest delta in Europe), the painted monasteries of Bucovina (UNESCO), the Carpathians with wild bears and wolves, and Bucharest with its Art Nouveau architecture and its absurd Palace of the Parliament — the second-largest building in the world.",
    es: "Rumanía es la gran sorpresa de Europa del Este: Transilvania con sus fortalezas medievales sajonas y el castillo de Bran (Drácula), el delta del Danubio (UNESCO, el mayor delta de Europa), los monasterios pintados de Bucovina (UNESCO), los Cárpatos con osos y lobos salvajes, y Bucarest con su arquitectura Art Nouveau y su desmesurado Palacio del Parlamento, el segundo edificio más grande del mundo.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre" },
      label: { fr: "Saison idéale", en: "Ideal season", es: "Temporada ideal" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (20–28°C), fleurs des Carpates en mai-juin, delta du Danube en juillet-août, couleurs d'automne splendides en septembre. Eviter le cœur de l'été (35°C+ à Bucarest en juillet).",
        en: "Pleasant temperatures (20–28°C), Carpathian wildflowers in May–June, Danube Delta in July–August, splendid autumn colours in September. Avoid the height of summer (35°C+ in Bucharest in July).",
        es: "Temperaturas agradables (20–28 °C), flores de los Cárpatos en mayo-junio, delta del Danubio en julio-agosto, espléndidos colores otoñales en septiembre. Evitar pleno verano (35 °C+ en Bucarest en julio).",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February", es: "Diciembre – Febrero" },
      label: { fr: "Hiver en Transylvanie", en: "Winter in Transylvania", es: "Invierno en Transilvania" },
      color: "#f59e0b",
      description: {
        fr: "Villages médiévaux enneigés, ski dans les Carpates (Sinaia, Poiana Brasov), marchés de Noël de Sibiu. Températures -5 à -10°C en montagne.",
        en: "Snow-covered medieval villages, skiing in the Carpathians (Sinaia, Poiana Brasov), Sibiu's Christmas markets. Temperatures -5 to -10°C in the mountains.",
        es: "Pueblos medievales nevados, esquí en los Cárpatos (Sinaia, Poiana Brasov), mercados navideños de Sibiu. Temperaturas de -5 a -10 °C en la montaña.",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "bucharest",
      name: "Bucarest",
      region: { fr: "Munténie (plaine du sud)", en: "Wallachia (southern plain)", es: "Muntenia (llanura del sur)" },
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
      region: { fr: "Carpates (altitude 600m)", en: "Carpathians (600m altitude)", es: "Cárpatos (altitud 600 m)" },
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
      name: { fr: "Transylvanie — Châteaux et forêts de Dracula", en: "Transylvania — Dracula's castles and forests", es: "Transilvania — Castillos y bosques de Drácula" },
      region: { fr: "Carpates", en: "Carpathians", es: "Cárpatos" },
      description: {
        fr: "La Transylvanie est une région magique : le château de Bran (associé à Dracula/Vlad l'Empaleur), la citadelle médiévale saxonne de Sighișoara (UNESCO, ville natale de Vlad Tepeș), les villages fortifiés de Viscri et Biertan (UNESCO), et les Carpates avec des populations sauvages d'ours bruns, loups et lynx — les plus importantes d'Europe hors Russie.",
        en: "Transylvania is a magical region: Bran Castle (associated with Dracula/Vlad the Impaler), the medieval Saxon citadel of Sighișoara (UNESCO, Vlad Tepeș's birthplace), the fortified villages of Viscri and Biertan (UNESCO), and the Carpathians with wild populations of brown bears, wolves and lynx — the largest in Europe outside Russia.",
        es: "Transilvania es una región mágica: el castillo de Bran (asociado a Drácula/Vlad el Empalador), la ciudadela medieval sajona de Sighișoara (UNESCO, ciudad natal de Vlad Tepeș), los pueblos fortificados de Viscri y Biertan (UNESCO), y los Cárpatos con poblaciones salvajes de osos pardos, lobos y linces, las más importantes de Europa fuera de Rusia.",
      },
      wikipedia: "File:Cheile_Turzii-(42).JPG",
      tags: ["Histoire", "Safari", "UNESCO", "Architecture", "Randonnée", "Ski"],
      mustSee: [
        { name: { fr: "Château de Bran — 'château de Dracula' dans les Carpates", en: "Bran Castle — 'Dracula's castle' in the Carpathians", es: "Castillo de Bran — el 'castillo de Drácula' en los Cárpatos" }, wikipedia: "Bran_Castle" },
        { name: { fr: "Sighișoara — ville médiévale saxonne fortifiée (UNESCO)", en: "Sighișoara — fortified medieval Saxon town (UNESCO)", es: "Sighișoara — ciudad medieval sajona fortificada (UNESCO)" }, wikipedia: "Sighișoara" },
        { name: { fr: "Viscri — village saxon UNESCO, ferme du Prince Charles", en: "Viscri — UNESCO Saxon village, Prince Charles's farm", es: "Viscri — pueblo sajón UNESCO, granja del príncipe Carlos" }, wikipedia: "File:ViscriKirchenburg.jpg" },
        { name: { fr: "Randonnée ours bruns des Carpates (guide, Braşov)", en: "Carpathian brown bear hike (guided, Braşov)", es: "Ruta de osos pardos de los Cárpatos (con guía, Brasov)" }, wikipedia: "Brown_bear" },
      ],
    },
    {
      id: 2,
      name: { fr: "Delta du Danube — Wilderness UNESCO", en: "Danube Delta — UNESCO wilderness", es: "Delta del Danubio — Naturaleza salvaje UNESCO" },
      region: { fr: "Dobrogée (côte est)", en: "Dobruja (east coast)", es: "Dobrugea (costa este)" },
      description: {
        fr: "Le delta du Danube est le troisième plus grand delta d'Europe et l'un des écosystèmes les plus riches : 300 espèces d'oiseaux (pélicans, aigrettes, cormorans pygmées), 45 espèces de poissons dont l'esturgeon beluga, des forêts flottantes et des lacs intérieurs sans route. On se déplace uniquement en bateau depuis Tulcea. Classé UNESCO et réserve de biosphère.",
        en: "The Danube Delta is the third-largest delta in Europe and one of the richest ecosystems: 300 bird species (pelicans, egrets, pygmy cormorants), 45 fish species including the beluga sturgeon, floating forests and roadless inland lakes. You get around only by boat from Tulcea. UNESCO-listed and a biosphere reserve.",
        es: "El delta del Danubio es el tercer delta más grande de Europa y uno de los ecosistemas más ricos: 300 especies de aves (pelícanos, garcetas, cormoranes pigmeos), 45 especies de peces incluido el esturión beluga, bosques flotantes y lagos interiores sin carreteras. Solo se puede recorrer en barco desde Tulcea. Patrimonio UNESCO y reserva de la biosfera.",
      },
      wikipedia: "File:Danube Delta, autumn.jpg",
      tags: ["Nature", "Safari", "UNESCO", "Randonnée"],
      mustSee: [
        { name: { fr: "Pélicans blancs et frisés (la plus grande colonie d'Europe)", en: "White and Dalmatian pelicans (Europe's largest colony)", es: "Pelícanos blancos y ceñudos (la mayor colonia de Europa)" }, wikipedia: "File:White pelicans (Pelecanus onocrotalus) Danube delta.jpg" },
        { name: { fr: "Excursion en bateau dans les bras secondaires du delta", en: "Boat trip through the delta's secondary channels", es: "Excursión en barco por los brazos secundarios del delta" }, wikipedia: "File:Comrades from the Danube Delta. (29724046008).jpg" },
        { name: { fr: "Village de Sfântu Gheorghe — pêcheurs au bout du delta", en: "Sfântu Gheorghe village — fishermen at the tip of the delta", es: "Pueblo de Sfântu Gheorghe — pescadores en el extremo del delta" }, wikipedia: "File:Danube-Delta2008a.jpg" },
        { name: { fr: "Coucher de soleil sur les roseaux depuis un bateau", en: "Sunset over the reeds from a boat", es: "Atardecer sobre los cañaverales desde un barco" }, wikipedia: "File:Danube Delta oct 2006 101.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Monastères de Bucovine — Fresques UNESCO", en: "Bucovina Monasteries — UNESCO frescoes", es: "Monasterios de Bucovina — Frescos UNESCO" },
      region: { fr: "Moldavie (nord-est)", en: "Moldavia (north-east)", es: "Moldavia (noreste)" },
      description: {
        fr: "Les monastères peints de Bucovine (Voronet, Sucevita, Moldovita) sont classés UNESCO : leurs façades extérieures entièrement couvertes de fresques du XVe–XVIe siècle représentant des scènes bibliques en bleu de Voronet (un bleu unique jamais reproduit). Une des curiosités artistiques les plus étonnantes d'Europe, dans des collines vertes et boisées.",
        en: "The painted monasteries of Bucovina (Voronet, Sucevita, Moldovita) are UNESCO-listed: their exterior facades entirely covered in 15th–16th-century frescoes depicting biblical scenes in Voronet blue (a unique shade never replicated). One of the most astonishing artistic curiosities in Europe, set among green wooded hills.",
        es: "Los monasterios pintados de Bucovina (Voroneț, Sucevița, Moldovița) están declarados Patrimonio de la Humanidad: sus fachadas exteriores están totalmente cubiertas de frescos de los siglos XV-XVI que representan escenas bíblicas en el famoso azul de Voroneț (un azul único jamás replicado). Una de las curiosidades artísticas más asombrosas de Europa, entre colinas verdes y boscosas.",
      },
      wikipedia: "File:Voronet murals 2010 15.jpg",
      tags: ["Culture", "UNESCO", "Spiritualité", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Voronet — 'la chapelle Sixtine de l'Est', bleu unique", en: "Voronet — the 'Sistine Chapel of the East', a unique blue", es: "Voroneț — la 'Capilla Sixtina de Oriente', azul único" }, wikipedia: "Voroneț_Monastery" },
        { name: { fr: "Sucevița — forteresse monastique avec fresques intactes", en: "Sucevița — monastic fortress with intact frescoes", es: "Sucevița — fortaleza monástica con frescos intactos" }, wikipedia: "Sucevița_Monastery" },
        { name: { fr: "Moldovița — fresques du Siège de Constantinople", en: "Moldovița — frescoes of the Siege of Constantinople", es: "Moldovița — frescos del Sitio de Constantinopla" }, wikipedia: "Moldovița_Monastery" },
        { name: { fr: "Humor — détails comiques rares dans l'art religieux", en: "Humor — rare comic details in religious art", es: "Humor — raros detalles cómicos en el arte religioso" }, wikipedia: "Humor_Monastery" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bucarest — Excès et beauté", en: "Bucharest — Excess and beauty", es: "Bucarest — Exceso y belleza" },
      region: { fr: "Munténie (capitale)", en: "Wallachia (capital)", es: "Muntenia (capital)" },
      description: {
        fr: "Bucarest est une capitale fascinante par ses contradictions : le Palais du Parlement (2e plus grand bâtiment du monde, commandé par Ceaușescu), les quartiers Art Nouveau de Floreasca et Dorobanți, le Village Museum (musées en plein air avec 300 bâtisses paysannes), et une scène nocturne et gastronomique en plein essor. La 'Petite Paris des Balkans' retrouve sa splendeur.",
        en: "Bucharest is a capital fascinating for its contradictions: the Palace of the Parliament (the 2nd-largest building in the world, commissioned by Ceaușescu), the Art Nouveau districts of Floreasca and Dorobanți, the Village Museum (open-air museum with 300 peasant buildings), and a booming nightlife and food scene. The 'Little Paris of the Balkans' is regaining its splendour.",
        es: "Bucarest es una capital fascinante por sus contradicciones: el Palacio del Parlamento (2.º edificio más grande del mundo, encargado por Ceaușescu), los barrios Art Nouveau de Floreasca y Dorobanți, el Museo del Pueblo (museo al aire libre con 300 construcciones campesinas), y una escena nocturna y gastronómica en pleno auge. El 'Pequeño París de los Balcanes' recupera su esplendor.",
      },
      wikipedia: "Bucharest",
      tags: ["Architecture", "Musées", "Nightlife", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Palais du Parlement (Ceaușescu) — visite guidée obligatoire", en: "Palace of the Parliament (Ceaușescu) — guided tour mandatory", es: "Palacio del Parlamento (Ceaușescu) — visita guiada obligatoria" }, wikipedia: "Palace_of_the_Parliament" },
        { name: { fr: "Musée du Village — 300 maisons paysannes en plein air", en: "Village Museum — 300 open-air peasant houses", es: "Museo del Pueblo — 300 casas campesinas al aire libre" }, wikipedia: "Dimitrie_Gusti_National_Village_Museum" },
        { name: { fr: "Calea Victoriei — boulevard Art Nouveau et palais Belle Époque", en: "Calea Victoriei — Art Nouveau boulevard and Belle Époque palaces", es: "Calea Victoriei — bulevar Art Nouveau y palacios de la Belle Époque" }, wikipedia: "Calea_Victoriei" },
        { name: { fr: "Quartier de Floreasca — terrasses, restaurants, vie de nuit", en: "Floreasca district — terraces, restaurants, nightlife", es: "Barrio de Floreasca — terrazas, restaurantes, vida nocturna" }, wikipedia: "File:Bis Sofia Floreasca 62.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Roumanie est l'une des destinations les moins chères de l'Union européenne. Bucarest a le coût de la vie le plus bas des capitales de l'UE. Le leu est stable. La qualité des restaurants est en forte progression.",
      en: "Romania is one of the cheapest destinations in the European Union. Bucharest has the lowest cost of living among EU capitals. The leu is stable. Restaurant quality is rising sharply.",
      es: "Rumanía es uno de los destinos más baratos de la Unión Europea. Bucarest tiene el coste de vida más bajo de las capitales de la UE. El leu es estable. La calidad de los restaurantes progresa con fuerza.",
    },
    currency: "RON",
    exchangeRate: "1€ ≈ 5 RON",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / pension en Transylvanie", en: "Guesthouse in Transylvania", es: "Guesthouse / pensión en Transilvania" }, price: "20–40 €", detail: { fr: "Chambre chez l'habitant, repas disponibles", en: "Room with a local host, meals available", es: "Habitación con anfitrión local, comidas disponibles" } },
          { label: { fr: "Hôtel 3★ Bucarest ou Brasov", en: "3★ hotel in Bucharest or Brasov", es: "Hotel 3★ en Bucarest o Brasov" }, price: "50–100 €", detail: { fr: "Bon confort, souvent petit-déj inclus", en: "Good comfort, breakfast often included", es: "Buen confort, desayuno a menudo incluido" } },
          { label: { fr: "Cabane de montagne (Carpates)", en: "Mountain cabin (Carpathians)", es: "Cabaña de montaña (Cárpatos)" }, price: "20–40 €", detail: { fr: "Demi-pension disponible", en: "Half-board available", es: "Media pensión disponible" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Sarmale (chou farci) + mămăligă dans un restaurant local", en: "Sarmale (stuffed cabbage) + mămăligă at a local restaurant", es: "Sarmale (col rellena) + mămăligă en un restaurante local" }, price: "7–12 €", detail: { fr: "Cuisine roumaine copieuse", en: "Hearty Romanian cuisine", es: "Cocina rumana abundante" } },
          { label: { fr: "Restaurant mid-range Bucarest", en: "Mid-range restaurant in Bucharest", es: "Restaurante de gama media en Bucarest" }, price: "14–25 €", detail: { fr: "Cuisine créative + vins locaux", en: "Creative cuisine + local wines", es: "Cocina creativa + vinos locales" } },
          { label: { fr: "Marché agroalimentaire — légumes, fromages, charcuteries", en: "Food market — vegetables, cheeses, cured meats", es: "Mercado de alimentación — verduras, quesos, embutidos" }, price: "5–10 €", detail: { fr: "Extraordinaire diversité locale", en: "Extraordinary local variety", es: "Extraordinaria variedad local" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Train CFR Bucarest–Brasov (2h30)", en: "CFR train Bucharest–Brasov (2h30)", es: "Tren CFR Bucarest–Brasov (2h30)" }, price: "8–15 €", detail: { fr: "Paysage des Carpates magnifique", en: "Magnificent Carpathian scenery", es: "Paisaje magnífico de los Cárpatos" } },
          { label: { fr: "Bus interurbain (FlixBus, Autocar)", en: "Intercity bus (FlixBus, coach)", es: "Autobús interurbano (FlixBus)" }, price: "10–20 €", detail: { fr: "Liaisons fréquentes", en: "Frequent connections", es: "Conexiones frecuentes" } },
          { label: { fr: "Location de voiture (Bucarest, journée)", en: "Car rental (Bucharest, per day)", es: "Alquiler de coche (Bucarest, por día)" }, price: "25–50 €", detail: { fr: "Recommandée pour les monastères", en: "Recommended for the monasteries", es: "Recomendado para los monasterios" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Visite château de Bran", en: "Bran Castle visit", es: "Visita al castillo de Bran" }, price: "9 €", detail: { fr: "Musée d'histoire medievale", en: "Medieval history museum", es: "Museo de historia medieval" } },
          { label: { fr: "Excursion bateau delta du Danube (demi-journée)", en: "Danube Delta boat trip (half-day)", es: "Excursión en barco por el delta del Danubio (medio día)" }, price: "20–40 €", detail: { fr: "Guide ornithologie + pique-nique", en: "Birdwatching guide + picnic", es: "Guía ornitológico + pícnic" } },
          { label: { fr: "Randonnée guidée ours bruns (départ Brasov)", en: "Guided brown bear hike (from Brasov)", es: "Ruta guiada de osos pardos (salida desde Brasov)" }, price: "40–80 €", detail: { fr: "Affût en forêt, guide naturaliste", en: "Forest hide, naturalist guide", es: "Observatorio en el bosque, guía naturalista" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "35–60 €/j", desc: { fr: "Pension + restaurant local + transports publics", en: "Guesthouse + local restaurant + public transport", es: "Pensión + restaurante local + transporte público" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "70–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided tours", es: "Hotel 3★ + restaurantes + visitas guiadas" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Bucarest (2j) → Sinaia (1j) → Brasov + Bran (2j) → Sighișoara (1j) → Bucovine (3j) → retour (1j)",
        en: "Bucharest (2d) → Sinaia (1d) → Brasov + Bran (2d) → Sighișoara (1d) → Bucovina (3d) → return (1d)",
        es: "Bucarest (2d) → Sinaia (1d) → Brasov + Bran (2d) → Sighișoara (1d) → Bucovina (3d) → regreso (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bucarest (Wizz Air, Ryanair, Tarom)", en: "Return flight Paris–Bucharest (Wizz Air, Ryanair, Tarom)", es: "Vuelo ida y vuelta Madrid–Bucarest (Wizz Air, Ryanair, Tarom)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "250–450 €" },
            { label: { fr: "Transports (train + voiture partage)", en: "Transport (train + shared car)", es: "Transporte (tren + coche compartido)" }, amount: "100–200 €" },
            { label: { fr: "Nourriture + vins", en: "Food + wine", es: "Comida + vinos" }, amount: "200–350 €" },
            { label: { fr: "Visites + guide ours", en: "Visits + bear guide", es: "Visitas + guía de osos" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bucarest", en: "Return flight Paris–Bucharest", es: "Vuelo ida y vuelta Madrid–Bucarest" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)" }, amount: "550–1 000 €" },
            { label: { fr: "Voiture de location (10 jours)", en: "Car rental (10 days)", es: "Coche de alquiler (10 días)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes" }, amount: "400–700 €" },
            { label: { fr: "Activités, guides, delta", en: "Activities, guides, delta", es: "Actividades, guías, delta" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~2h45 (Wizz Air, Ryanair, Tarom direct CDG/Beauvais–Bucarest). Aussi vols vers Cluj-Napoca et Timisoara.", en: "~2h45 (Wizz Air, Ryanair, direct Tarom CDG/Beauvais–Bucharest). Also flights to Cluj-Napoca and Timisoara.", es: "~3h30 (Wizz Air, Ryanair, Tarom). También vuelos a Cluj-Napoca y Timisoara." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Aucun visa — UE (Roumanie membre depuis 2007, intégration Schengen terrestre 2024). Carte d'identité française suffisante.", en: "No visa required — EU (Romania a member since 2007, land Schengen integration in 2024). A French ID card is sufficient.", es: "Sin visado — UE (Rumanía miembro desde 2007, integración Schengen terrestre en 2024). DNI suficiente." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Leu roumain (RON). Carte bancaire acceptée en ville. Espèces utiles en zone rurale et dans les marchés.", en: "Romanian leu (RON). Bank cards accepted in towns. Cash useful in rural areas and markets.", es: "Leu rumano (RON). Tarjeta bancaria aceptada en la ciudad. Efectivo útil en zonas rurales y mercados." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Roumain (langue latine proche du français). Anglais parlé par les jeunes. Allemand utile en Transylvanie (héritage saxon).", en: "Romanian (a Latin language close to French). English spoken by young people. German useful in Transylvania (Saxon heritage).", es: "Rumano (lengua latina cercana al español). Los jóvenes hablan inglés. El alemán es útil en Transilvania (herencia sajona)." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucune précaution particulière. CEAM valide. Tiques dans les forêts des Carpates — protéger les jambes.", en: "No particular precautions needed. EHIC valid. Ticks in the Carpathian forests — cover your legs.", es: "Ninguna precaución especial. TSE válida. Garrapatas en los bosques de los Cárpatos — proteger las piernas." } },
    { icon: "🐻", label: { fr: "Ours bruns", en: "Brown bears", es: "Osos pardos" }, value: { fr: "Les Carpates abritent 6 000 ours bruns — la plus grande population d'Europe hors Russie. Ne pas randonner seul en forêt profonde. Les guides connaissent les zones.", en: "The Carpathians are home to 6,000 brown bears — the largest population in Europe outside Russia. Don't hike alone deep in the forest. Guides know the areas.", es: "Los Cárpatos albergan 6.000 osos pardos — la mayor población de Europa fuera de Rusia. No caminar solo en lo profundo del bosque. Los guías conocen las zonas." } },
    { icon: "🚗", label: { fr: "Routes", en: "Roads", es: "Carreteras" }, value: { fr: "L'état des routes en dehors des autoroutes est variable. La Transfăgărășan (route de montagne ouverte juin–octobre) est l'une des plus belles du monde.", en: "Road quality off the motorways varies. The Transfăgărășan (mountain road open June–October) is one of the most beautiful in the world.", es: "El estado de las carreteras fuera de las autopistas es variable. La Transfăgărășan (carretera de montaña abierta de junio a octubre) es una de las más bellas del mundo." } },
  ],
};
