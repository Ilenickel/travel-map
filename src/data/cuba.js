export const CUBA = {
  code: "CUB",
  numericId: 192,
  name: { fr: "Cuba", en: "Cuba", es: "Cuba", de: "Kuba" },
  emoji: "🇨🇺",
  capital: { fr: "La Havane", en: "Havana", es: "La Habana", de: "Havanna" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" },
  currency: { fr: "Peso cubain (CUP)", en: "Cuban peso (CUP)", es: "Peso cubano (CUP)", de: "Kubanischer Peso (CUP)" },
  timezone: "UTC-5",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1500, tripMid: 3500,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 3,
  },
  description: {
    fr: "Cuba est une capsule temporelle : voitures américaines des années 50, musique de salsa et son dans les ruelles de la Havane, plages vierges de Varadero et de Cayo Coco, Trinidad coloniale classée UNESCO et la vallée de Viñales, ses mogotes calcaires et ses plantations de tabac. Un pays unique, figé et fascinant.", en: "Cuba is a time capsule: 1950s American cars, salsa and son music drifting through Havana's streets, untouched beaches in Varadero and Cayo Coco, UNESCO-listed colonial Trinidad, and the Viñales Valley with its limestone mogotes and tobacco plantations. A unique country, frozen in time and utterly captivating.", es: "Cuba es una cápsula del tiempo: coches americanos de los años 50, música de salsa y son en las callejuelas de La Habana, playas vírgenes en Varadero y Cayo Coco, la colonial Trinidad declarada Patrimonio de la UNESCO y el valle de Viñales, con sus mogotes calizos y sus plantaciones de tabaco. Un país único, congelado en el tiempo y fascinante.", de: "Kuba ist eine Zeitkapsel: amerikanische Autos aus den 1950er Jahren, Salsa-Musik und Sound in den Straßen von Havanna, unberührte Strände von Varadero und Cayo Coco, das zum UNESCO-Weltkulturerbe gehörende koloniale Trinidad und das Viñales-Tal, seine Kalksteinmogotes und Tabakplantagen. Ein einzigartiges, gefrorenes und faszinierendes Land.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Saison idéale : températures parfaites (25–28°C), pluies rares, mer calme pour les cayes. Haute saison touristique mais justifiée.", en: "The ideal season: perfect temperatures (25–28°C), little rain and calm seas around the cays. Peak tourist season, but for good reason.", es: "Temporada ideal: temperaturas perfectas (25–28°C), lluvias escasas y mar en calma para los cayos. Temporada alta turística, pero con motivo.", de: "Ideale Jahreszeit: perfekte Temperaturen (25–28 °C), seltener Regen, ruhige See für die Inseln. Hochsaison für Touristen, aber gerechtfertigt.",
      },
      icon: "🚗",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August", es: "Julio – Agosto", de: "Juli – August" },
      label: { fr: "Été chaud", en: "Hot summer", es: "Verano cálido", de: "heißer Sommer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur et humidité élevées (30–33°C), saison des cyclones (août–octobre). Réservé aux amateurs de plage sous la chaleur.", en: "High heat and humidity (30–33°C), with hurricane season from August to October. Best for travellers who love beach days in intense heat.", es: "Calor y humedad elevados (30–33°C), temporada de ciclones (agosto–octubre). Reservado a los amantes de la playa bajo el calor.", de: "Hohe Hitze und Luftfeuchtigkeit (30–33 °C), Zyklonsaison (August–Oktober). Reserviert für Strandliebhaber in der Hitze.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "la_havane",
      name: "La Havane",
      region: { fr: "Occidente", en: "Western Cuba", es: "Occidente", de: "Westen" },
      data: [
        { month: "Jan", temp: 22, rain: 45,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Nov", temp: 25, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 23, rain: 50,  icon: "☀️" },
      ],
    },
    {
      id: "trinidad",
      name: "Trinidad",
      region: { fr: "Centre", en: "Central Cuba", es: "Centro", de: "Center" },
      data: [
        { month: "Jan", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 31, rain: 150, icon: "🌧️" },
        { month: "Aoû", temp: 31, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 24, rain: 40,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "La Havane", en: "Havana", es: "La Habana", de: "Havanna" },
      region: { fr: "Occidente", en: "Western Cuba", es: "Occidente", de: "Westen" },
      description: {
        fr: "La Havane est une des capitales les plus charismatiques du monde : son Malecón face à la mer, ses Américaines rutilantes des années 50, son Vieux-Havane classé UNESCO, ses bars à mojitos légendaires (La Bodeguita del Medio) et sa musique omniprésente. Une ville qui vit intensément malgré tout.", en: "Havana is one of the most charismatic capitals in the world: its seafront Malecón, gleaming 1950s American cars, UNESCO-listed Old Havana, legendary mojito bars (La Bodeguita del Medio) and music everywhere you go. A city that lives intensely despite everything.", es: "La Habana es una de las capitales más carismáticas del mundo: su Malecón frente al mar, sus relucientes coches americanos de los años 50, su Habana Vieja declarada Patrimonio de la UNESCO, sus legendarios bares de mojitos (La Bodeguita del Medio) y su música omnipresente. Una ciudad que vive intensamente pese a todo.", de: "Havanna ist eine der charismatischsten Hauptstädte der Welt: ihr Malecón mit Blick auf das Meer, ihre glänzenden Amerikaner aus den 1950er Jahren, ihre Altstadt von Havanna, die zum UNESCO-Weltkulturerbe gehört, ihre legendären Mojito-Bars (La Bodeguita del Medio) und ihre allgegenwärtige Musik. Eine Stadt, die trotz allem intensiv lebt.",
      },
      wikipedia: "Havana",
      tags: ["UNESCO", "Culture", "Architecture"],
      mustSee: [
        { name: { fr: "Malecón au coucher du soleil", en: "Malecón at sunset", es: "El Malecón al atardecer", de: "Malecón bei Sonnenuntergang" }, wikipedia: "Malecón,_Havana" },
        { name: { fr: "Capitolio Nacional", en: "El Capitolio", es: "Capitolio Nacional", de: "Nationales Kapitol" }, wikipedia: "File:CapitolioNacionalDeColombia2004-7.jpg" },
        { name: { fr: "Plaza de la Revolución", en: "Revolution Square", es: "Plaza de la Revolución", de: "Plaza de la Revolution" }, wikipedia: "File:Plaza_de_la_Revolution.jpg" },
      ],
    },
    {
      id: 2,
      name: "Trinidad",
      region: { fr: "Centre", en: "Central Cuba", es: "Centro", de: "Center" },
      description: {
        fr: "Trinidad est la ville coloniale la mieux préservée de Cuba, classée UNESCO : son centre historique en pavés rose et ses maisons ocre-orangées encadrent la Plaza Mayor. La nuit, les escaliers de la Casa de la Música et les bars de la rue résonnent de son cubain jusqu'à l'aube.", en: "Trinidad is Cuba's best-preserved colonial town and a UNESCO site: its historic centre of pink cobblestones and ochre-orange houses frames Plaza Mayor. At night, the steps of Casa de la Música and the street bars pulse with Cuban son until dawn.", es: "Trinidad es la ciudad colonial mejor conservada de Cuba, declarada Patrimonio de la UNESCO: su centro histórico de adoquines rosados y casas ocre-anaranjadas enmarca la Plaza Mayor. Por la noche, las escaleras de la Casa de la Música y los bares de la calle resuenan con son cubano hasta el amanecer.", de: "Trinidad ist die am besten erhaltene Kolonialstadt Kubas und wurde von der UNESCO zum UNESCO-Weltkulturerbe erklärt: Ihr historisches Zentrum mit rosa Kopfsteinpflaster und ockerorangefarbenen Häusern umrahmen die Plaza Mayor. Nachts hallen die Treppen der Casa de la Música und die Bars auf der Straße bis zum Morgengrauen von kubanischen Klängen wider.",
      },
      wikipedia: "Trinidad,_Cuba",
      tags: ["UNESCO", "Histoire", "Culture"],
      mustSee: [
        { name: { fr: "Plaza Mayor & Église de la Santísima Trinidad", en: "Plaza Mayor & Church of the Holy Trinity", es: "Plaza Mayor e Iglesia de la Santísima Trinidad", de: "Plaza Mayor und Kirche von Santisima Trinidad" }, wikipedia: "File:Trinidad_(Kuba)_03.jpg" },
        { name: { fr: "Cascades Topes de Collantes (randonnée)", en: "Topes de Collantes waterfalls (hiking)", es: "Cascadas de Topes de Collantes (senderismo)", de: "Wasserfälle Topes de Collantes (Wandern)" }, wikipedia: "File:Cuba_2013-01-27_(8554174568).jpg" },
        { name: { fr: "Valle de los Ingenios (UNESCO) — anciens moulins", en: "Valle de los Ingenios (UNESCO) — former sugar mills", es: "Valle de los Ingenios (UNESCO) — antiguos ingenios azucareros", de: "Valle de los Ingenios (UNESCO) – alte Mühlen" }, wikipedia: "File:Valle_de_los_ingenios2.jpg" },
      ],
    },
    {
      id: 3,
      name: "Viñales",
      region: { fr: "Occidente (Pinar del Río)", en: "Western Cuba (Pinar del Río)", es: "Occidente (Pinar del Río)", de: "Occidente (Pinar del Río)" },
      description: {
        fr: "La Vallée de Viñales, classée UNESCO, est le paysage le plus iconique de Cuba : des formations calcaires en pain de sucre (mogotes) s'élèvent au-dessus des plantations de tabac rouge — le meilleur tabac du monde. Les « vegas » (fermes de tabac) se visitent à cheval ou en vélo.", en: "The Viñales Valley, a UNESCO site, is Cuba's most iconic landscape: limestone sugarloaf formations (mogotes) rise above red tobacco plantations—the finest tobacco in the world. The vegas (tobacco farms) can be explored on horseback or by bike.", es: "El valle de Viñales, declarado Patrimonio de la UNESCO, es el paisaje más icónico de Cuba: formaciones calizas en forma de pan de azúcar (mogotes) se alzan sobre plantaciones de tabaco rojo, el mejor tabaco del mundo. Las «vegas» (fincas de tabaco) se visitan a caballo o en bicicleta.", de: "Das zum UNESCO-Weltkulturerbe gehörende Viñales-Tal ist Kubas ikonischste Landschaft: Zuckerhut-Kalksteinformationen (Mogotes) erheben sich über roten Tabakplantagen – dem besten Tabak der Welt. Die „Vegas“ (Tabakfarmen) können zu Pferd oder mit dem Fahrrad besichtigt werden.",
      },
      wikipedia: "Viñales_Valley",
      tags: ["UNESCO", "Nature", "Gastronomie", "Randonnée"],
      mustSee: [
        { name: { fr: "Mogotes — formations karstiques géantes", en: "Mogotes — giant karst formations", es: "Mogotes — formaciones kársticas gigantes", de: "Mogotes – riesige Karstformationen" }, wikipedia: "File:Vallée_de_Viñales-Mogote_(1).jpg" },
        { name: { fr: "Cueva del Indio — grotte en barque", en: "Cueva del Indio — cave boat ride", es: "Cueva del Indio — recorrido en barca por la cueva", de: "Cueva del Indio – Bootshöhle" }, wikipedia: "File:CUBA_-_panoramio_(59).jpg" },
        { name: { fr: "Randonnée ou cheval entre les mogotes", en: "Hike or ride horseback between the mogotes", es: "Senderismo o paseo a caballo entre los mogotes", de: "Wandern oder Reiten zwischen den Mogotes" }, wikipedia: "File:Fragmento_del_Valle_de_Viñales._Cuba.JPG" },
      ],
    },
    {
      id: 4,
      name: { fr: "Varadero & Cayes", en: "Varadero & Cays", es: "Varadero y cayos", de: "Varadero und Cayes" },
      region: { fr: "Matanzas / Ciego de Ávila", en: "Matanzas / Ciego de Ávila", es: "Matanzas / Ciego de Ávila", de: "Matanzas / Ciego de Ávila" },
      description: {
        fr: "Varadero offre 23 km de plage de sable blanc, une des plus longues des Caraïbes. Les cayes (Cayo Coco, Cayo Santa María) sont des atolls sauvages aux eaux turquoise, peu fréquentés, accessibles depuis Ciego de Ávila.", en: "Varadero offers 23 km of white-sand beach, one of the longest in the Caribbean. The cays (Cayo Coco, Cayo Santa María) are wild islets with turquoise waters and relatively few crowds, accessible from Ciego de Ávila.", es: "Varadero ofrece 23 km de playa de arena blanca, una de las más largas del Caribe. Los cayos (Cayo Coco, Cayo Santa María) son islotes salvajes de aguas turquesas, poco frecuentados, accesibles desde Ciego de Ávila.", de: "Varadero bietet 23 km weißen Sandstrand, einen der längsten in der Karibik. Die Inseln (Cayo Coco, Cayo Santa María) sind wilde Atolle mit türkisfarbenem Wasser, wenig besucht und von Ciego de Ávila aus erreichbar.",
      },
      wikipedia: "Varadero",
      tags: ["Plage", "Luxe"],
      mustSee: [
        { name: { fr: "Plage de Varadero (23 km de sable blanc)", en: "Varadero Beach (23 km of white sand)", es: "Playa de Varadero (23 km de arena blanca)", de: "Strand von Varadero (23 km weißer Sand)" }, wikipedia: "File:Plage_de_Varadero.JPG" },
        { name: { fr: "Cayo Coco — plage sauvage & flamants roses", en: "Cayo Coco — wild beach & flamingos", es: "Cayo Coco — playa salvaje y flamencos rosados", de: "Cayo Coco – wilder Strand und rosa Flamingos" }, wikipedia: "Cayo_Coco" },
        { name: { fr: "Snorkel et plongée (récifs Varadero)", en: "Snorkelling and diving (Varadero reefs)", es: "Esnórquel y buceo (arrecifes de Varadero)", de: "Schnorcheln und Tauchen (Varadero-Riffe)" }, wikipedia: "Varadero" },
        { name: { fr: "Cayo Santa María — eaux cristallines", en: "Cayo Santa María — crystal-clear waters", es: "Cayo Santa María — aguas cristalinas", de: "Cayo Santa María – kristallklares Wasser" }, wikipedia: "Cayo_Santa_María" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Cuba a un système monétaire complexe pour les touristes. Depuis 2021, le CUP (peso cubain) est la seule monnaie officielle. Les euros ou dollars s'échangent en CUP. L'accès aux biens de consommation est limité et les prix fluctuent. Prévoir du cash.", en: "Cuba has a complex monetary system for travellers. Since 2021, the CUP (Cuban peso) has been the only official currency. Euros or dollars are exchanged into CUP. Consumer goods can be hard to find and prices fluctuate. Bring cash.", es: "Cuba tiene un sistema monetario complejo para los turistas. Desde 2021, el CUP (peso cubano) es la única moneda oficial. Los euros o dólares se cambian a CUP. El acceso a bienes de consumo es limitado y los precios fluctúan. Hay que llevar efectivo.", de: "Kuba verfügt über ein komplexes Währungssystem für Touristen. Seit 2021 ist der CUP (kubanischer Peso) die einzige offizielle Währung. Euro oder Dollar werden in CUP umgetauscht. Der Zugang zu Konsumgütern ist begrenzt und die Preise schwanken. Bringen Sie Bargeld mit.",
    },
    currency: "CUP",
    exchangeRate: "1€ ≈ 120 CUP (taux non officiel, varie)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Casa particular (chambre chez l'habitant)", en: "Casa particular (room in a local home)", es: "Casa particular (habitación en casa de un local)", de: "Casa Particular (Gastfamilie)" }, price: "20–40 €", detail: { fr: "Authentique, recommandé", en: "Authentic, highly recommended", es: "Auténtico, muy recomendable", de: "Authentisch, empfehlenswert" } },
          { label: { fr: "Hôtel d'État 3★", en: "State-run 3★ hotel", es: "Hotel estatal 3★", de: "Staatshotel 3★" }, price: "50–100 €", detail: { fr: "Qualité variable", en: "Quality varies", es: "Calidad variable", de: "Variable Qualität" } },
          { label: { fr: "Resort all-inclusive Varadero", en: "Varadero all-inclusive resort", es: "Resort todo incluido en Varadero", de: "All-Inclusive-Resort Varadero" }, price: "100–200 €", detail: { fr: "Tout compris, plage privée", en: "All-inclusive, private beach", es: "Todo incluido, playa privada", de: "All inclusive, Privatstrand" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Repas casa particular (inclus souvent)", en: "Meal at a casa particular (often included)", es: "Comida en la casa particular (a menudo incluida)", de: "Casa Particular-Mahlzeit (oft inbegriffen)" }, price: "8–15 €", detail: { fr: "Copieux, poisson, fruits", en: "Hearty, with fish and fruit", es: "Abundante, con pescado y fruta", de: "Herzhaft, Fisch, Obst" } },
          { label: { fr: "Paladares (restos privés)", en: "Paladares (private restaurants)", es: "Paladares (restaurantes privados)", de: "Paladares (private Restaurants)" }, price: "10–25 €", detail: { fr: "Bien meilleurs que l'État", en: "Far better than state-run places", es: "Mucho mejores que los estatales", de: "Viel besser als der Staat" } },
          { label: { fr: "Mojito ou daiquiri (La Floridita)", en: "Mojito or daiquiri (La Floridita)", es: "Mojito o daiquiri (La Floridita)", de: "Mojito oder Daiquiri (La Floridita)" }, price: "5–8 €", detail: { fr: "L'expérience Hemingway", en: "The Hemingway experience", es: "La experiencia Hemingway", de: "Das Hemingway-Erlebnis" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Viazul (bus inter-villes)", en: "Viazul (intercity bus)", es: "Viazul (autobús interurbano)", de: "Viazul (Überlandbus)" }, price: "10–25 €", detail: { fr: "La Havane–Trinidad : 6h", en: "Havana–Trinidad: 6h", es: "La Habana–Trinidad: 6h", de: "Havanna–Trinidad: 6 Stunden" } },
          { label: { fr: "Taxi colectivo (voiture partagée)", en: "Taxi colectivo (shared car)", es: "Taxi colectivo (coche compartido)", de: "Taxi colectivo (gemeinsames Auto)" }, price: "15–30 €", detail: { fr: "Américaines vintage !", en: "Vintage American cars!", es: "¡Coches americanos vintage!", de: "Vintage-Amerikaner!" } },
          { label: { fr: "Vol intérieur La Havane–Santiago", en: "Domestic flight Havana–Santiago", es: "Vuelo interno La Habana–Santiago", de: "Inlandsflug Havanna–Santiago" }, price: "60–100 €", detail: { fr: "Quand disponible (Cubana)", en: "When available (Cubana)", es: "Cuando está disponible (Cubana)", de: "Wenn verfügbar (Cubana)" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Tour en Américaine décapotable (2h)", en: "Convertible classic car tour (2h)", es: "Paseo en coche americano descapotable (2h)", de: "Tour in einem amerikanischen Cabrio (2 Std.)" }, price: "25–40 €", detail: { fr: "La Havane — incontournable", en: "Havana — a must", es: "La Habana — imprescindible", de: "Havanna – ein Muss" } },
          { label: { fr: "Cours de salsa (1h)", en: "Salsa class (1h)", es: "Clase de salsa (1h)", de: "Salsa-Kurs (1 Stunde)" }, price: "10–20 €", detail: { fr: "Avec musiciens en direct", en: "With live musicians", es: "Con músicos en directo", de: "Mit Live-Musikern" } },
          { label: { fr: "Excursion Viñales (journée)", en: "Viñales excursion (day trip)", es: "Excursión a Viñales (día completo)", de: "Viñales-Ausflug (Tag)" }, price: "30–50 €", detail: { fr: "Cheval + cave + tabac", en: "Horseback + cave + tobacco", es: "Caballo + cueva + tabaco", de: "Pferd + Keller + Tabak" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Casa particular + paladar + Viazul", en: "Casa particular + paladar + Viazul", es: "Casa particular + paladar + Viazul", de: "Casa Particular + Paladar + Viazul" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "120–180 €/j", desc: { fr: "Hôtel correct + restos privés + excursions", en: "Decent hotel + private restaurants + excursions", es: "Hotel decente + restaurantes privados + excursiones", de: "Ordentliches Hotel + private Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "300 €+/j", desc: { fr: "Resort all-inclusive + guide privé + américaines", en: "All-inclusive resort + private guide + classic cars", es: "Resort todo incluido + guía privado + coches clásicos", de: "All-Inclusive-Resort + privater Reiseführer + Amerikaner" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "La Havane (4j) → Viñales (2j) → Trinidad (3j) → Varadero (3j)", en: "Havana (4d) → Viñales (2d) → Trinidad (3d) → Varadero (3d)", es: "La Habana (4d) → Viñales (2d) → Trinidad (3d) → Varadero (3d)", de: "Havanna (4 Tage) → Viñales (2 Tage) → Trinidad (3 Tage) → Varadero (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Havane", en: "Return flight Paris–Havana", es: "Vuelo ida y vuelta París–La Habana", de: "Hin- und Rückflug Paris–Havanna" }, amount: "400–700 €" },
            { label: { fr: "Casas particulares (12 nuits)", en: "Casas particulares (12 nights)", es: "Casas particulares (12 noches)", de: "Besondere Häuser (12 Nächte)" }, amount: "350–550 €" },
            { label: { fr: "Nourriture & mojitos", en: "Food & mojitos", es: "Comida y mojitos", de: "Essen und Mojitos" }, amount: "350–500 €" },
            { label: { fr: "Transports (Viazul + taxis)", en: "Transport (Viazul + taxis)", es: "Transporte (Viazul + taxis)", de: "Transport (Viazul + Taxis)" }, amount: "200–300 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Havane", en: "Return flight Paris–Havana", es: "Vuelo ida y vuelta París–La Habana", de: "Hin- und Rückflug Paris–Havanna" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "900–1 500 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails", es: "Comida y cócteles", de: "Essen und Cocktails" }, amount: "600–900 €" },
            { label: { fr: "Taxis privés & transports", en: "Private taxis & transport", es: "Taxis privados y transporte", de: "Private Taxis und Transport" }, amount: "500–800 €" },
            { label: { fr: "Excursions & activités", en: "Excursions & activities", es: "Excursiones y actividades", de: "Ausflüge & Aktivitäten" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Havane (direct)", en: "Return flight Paris–Havana (direct)", es: "Vuelo ida y vuelta París–La Habana (directo)", de: "Hin- und Rückflug Paris–Havanna (direkt)" }, amount: "1 000–2 000 €" },
            { label: { fr: "Hôtels & resorts (12 nuits)", en: "Hotels & resorts (12 nights)", es: "Hoteles y resorts (12 noches)", de: "Hotels & Resorts (12 Nächte)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Gastronomie & cigares Cohiba", en: "Fine dining & Cohiba cigars", es: "Gastronomía y puros Cohiba", de: "Gastronomie & Cohiba-Zigarren" }, amount: "800–1 500 €" },
            { label: { fr: "Américaine privée + guide", en: "Private classic car + guide", es: "Coche clásico privado + guía", de: "Privater Amerikaner + Führer" }, amount: "600–1 000 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~10h direct (Air France, Corsair, TUI fly)", en: "~10h direct (Air France, Corsair, TUI fly)", es: "~10h directo (Air France, Corsair, TUI fly)", de: "ca. 10 Std. direkt (Air France, Corsair, TUI Fly)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Tarjeta turística (~25€, incluse dans certains vols) obligatoire", en: "Tourist card (~€25, included with some flights) required", es: "Tarjeta turística (~25€, incluida en algunos vuelos) obligatoria", de: "Der Touristentarif (ca. 25 €, in bestimmten Flügen inbegriffen) ist obligatorisch" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Peso cubain (CUP) — espèces OBLIGATOIRES, cartes refusées", en: "Cuban peso (CUP) — cash is ESSENTIAL, cards are often refused", es: "Peso cubano (CUP) — efectivo OBLIGATORIO, las tarjetas suelen ser rechazadas", de: "Kubanischer Peso (CUP) – Bargeld ERFORDERLICH, Karten werden abgelehnt" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type A/B/C – 110 V ou 220 V selon zones", en: "Type A/B/C – 110 V or 220 V depending on the area", es: "Tipo A/B/C – 110 V o 220 V según la zona", de: "Typ A/B/C – 110 V oder 220 V, je nach Region" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Wi-Fi limité (ETECSA, hôtels) — internet très lent", en: "Limited Wi-Fi (ETECSA, hotels) — very slow internet", es: "Wi-Fi limitado (ETECSA, hoteles) — internet muy lento", de: "Begrenztes WLAN (ETECSA, Hotels) – sehr langsames Internet" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water is mandatory", es: "No potable — agua embotellada obligatoria", de: "Nicht trinkbar – Wasser in Flaschen erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Assurance voyage OBLIGATOIRE (vérifiée à l'arrivée)", en: "Travel insurance is MANDATORY (checked on arrival)", es: "Seguro de viaje OBLIGATORIO (se verifica a la llegada)", de: "OBLIGATORISCHE Reiseversicherung (bei Ankunft überprüft)" } },
  ],
};
