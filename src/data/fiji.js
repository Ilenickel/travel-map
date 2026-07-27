export const FIJI = {
  code: "FJI",
  numericId: 242,
  name: { fr: "Fidji", en: "Fiji", es: "Fiyi", de: "Fidschi" },
  emoji: "🇫🇯",
  capital: { fr: "Suva", en: "Suva", es: "Suva", de: "Suva" },
  language: { fr: "Fidjien, Hindi fidjien, Anglais", en: "Fijian, Fiji Hindi, English", es: "Fiyiano, hindi fiyiano, inglés", de: "Fidschianisch, Fidschianisches Hindi, Englisch" },
  currency: { fr: "Dollar fidjien (FJD)", en: "Fijian dollar (FJD)", es: "Dólar fiyiano (FJD)", de: "Fidschi-Dollar (FJD)" },
  timezone: "UTC+12",
  filter: { budgetMin: 70, budgetMid: 150, tripMin: 1800, tripMid: 3500 },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 3,
    plongee: 3,
  },
  description: {
    fr: "Les Fidji forment un archipel de 333 îles au cœur du Pacifique Sud, réputé pour ses plages de sable blanc, ses eaux cristallines et sa chaleur humaine légendaire — le fameux 'Bula !' accueille chaque visiteur avec un sourire sincère. Au-delà des resorts luxueux, les Fidji offrent une culture mélanésienne vivante, des villages traditionnels et des récifs coralliens parmi les plus beaux du monde. L'archipel est une destination idéale pour les plongeurs, les amateurs de voile et ceux en quête de tranquillité insulaire.", en: "Fiji is an archipelago of 333 islands in the heart of the South Pacific, famed for its white-sand beaches, crystal-clear waters and legendary warmth — the famous 'Bula!' welcomes every visitor with a genuine smile. Beyond its luxurious resorts, Fiji offers a vibrant Melanesian culture, traditional villages and some of the world's most beautiful coral reefs. The archipelago is an ideal destination for divers, sailing enthusiasts and anyone seeking island tranquillity.", es: "Fiyi forma un archipiélago de 333 islas en pleno Pacífico Sur, célebre por sus playas de arena blanca, sus aguas cristalinas y su legendaria calidez humana — el famoso «¡Bula!» recibe a cada visitante con una sonrisa sincera. Más allá de sus lujosos resorts, Fiyi ofrece una vibrante cultura melanesia, pueblos tradicionales y algunos de los arrecifes de coral más bellos del mundo. El archipiélago es un destino ideal para buceadores, aficionados a la vela y quienes buscan tranquilidad insular.", de: "Fidschi bildet einen Archipel aus 333 Inseln im Herzen des Südpazifiks, der für seine weißen Sandstrände, das kristallklare Wasser und die legendäre menschliche Wärme – das berühmte „Bula!“ – bekannt ist. begrüßt jeden Besucher mit einem aufrichtigen Lächeln. Neben luxuriösen Resorts bietet Fidschi eine lebendige melanesische Kultur, traditionelle Dörfer und einige der schönsten Korallenriffe der Welt. Der Archipel ist ein ideales Reiseziel für Taucher, Segelbegeisterte und diejenigen, die die Ruhe der Insel suchen.",
  },
  bestPeriods: [
    {
      months: { fr: "Mai – Oct", en: "May – October", es: "Mayo – Octubre", de: "Mai – Okt" },
      label: { fr: "Saison fraîche et sèche", en: "Cool, dry season", es: "Temporada fresca y seca", de: "Kühle und trockene Jahreszeit" },
      color: "#22c55e",
      description: {
        fr: "Temps idéal avec chaleur modérée, peu de pluies et mer calme — haute saison touristique", en: "Ideal weather with moderate warmth, little rain and calm seas — peak tourist season.", es: "Clima ideal con calor moderado, pocas lluvias y mar tranquilo — temporada alta turística.", de: "Ideales Wetter mit mäßiger Hitze, wenig Regen und ruhiger See – Hochsaison für Touristen",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Nov – Avr", en: "November – April", es: "Noviembre – Abril", de: "Nov. – Apr" },
      label: { fr: "Saison chaude et humide", en: "Hot, humid season", es: "Temporada cálida y húmeda", de: "Heiße und feuchte Jahreszeit" },
      color: "#f59e0b",
      description: {
        fr: "Pluies fréquentes, risque de cyclones (jan–mars). Tarifs réduits hors saison", en: "Frequent rain and a risk of cyclones (Jan–Mar). Lower off-season rates.", es: "Lluvias frecuentes, riesgo de ciclones (ene–mar). Tarifas reducidas fuera de temporada.", de: "Häufiger Regen, Zyklongefahr (Januar–März). Außerhalb der Saison ermäßigte Preise",
      },
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "suva",
      name: "Suva",
      region: { fr: "Viti Levu Est", en: "Eastern Viti Levu", es: "Viti Levu Este", de: "Viti Levu Ost" },
      data: [
        { month: "Jan", temp: 26, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 26, rain: 330, icon: "⛅" },
        { month: "Mar", temp: 26, rain: 340, icon: "⛅" },
        { month: "Avr", temp: 25, rain: 260, icon: "⛅" },
        { month: "Mai", temp: 24, rain: 190, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 130, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 140, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 150, icon: "☀️" },
        { month: "Oct", temp: 24, rain: 170, icon: "☀️" },
        { month: "Nov", temp: 25, rain: 230, icon: "⛅" },
        { month: "Déc", temp: 26, rain: 300, icon: "⛅" },
      ],
    },
    {
      id: "nadi",
      name: "Nadi",
      region: { fr: "Viti Levu Ouest", en: "Western Viti Levu", es: "Viti Levu Oeste", de: "Viti Levu West" },
      data: [
        { month: "Jan", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 260, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 230, icon: "🌧️" },
        { month: "Avr", temp: 26, rain: 120, icon: "☀️" },
        { month: "Mai", temp: 25, rain: 70, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 50, icon: "☀️" },
        { month: "Jul", temp: 23, rain: 50, icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 55, icon: "☀️" },
        { month: "Sep", temp: 24, rain: 60, icon: "☀️" },
        { month: "Oct", temp: 25, rain: 80, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 130, icon: "☀️" },
        { month: "Déc", temp: 27, rain: 200, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Îles Yasawa", en: "Yasawa Islands", es: "Islas Yasawa", de: "Yasawa-Inseln" },
      region: { fr: "Archipel des Yasawa", en: "Yasawa Archipelago", es: "Archipiélago de las Yasawa", de: "Yasawa-Archipel" },
      description: {
        fr: "Les îles Yasawa s'étendent sur 80 km au nord-ouest de Viti Levu, formant un chapelet de volcans endormis aux plages sauvages et aux eaux d'un bleu irréel. Cet archipel a longtemps été interdit aux touristes et conserve aujourd'hui encore une authenticité rare, avec des villages fidjiens traditionnels accueillant les voyageurs. Le Lagon Bleu rendu célèbre par le film éponyme se trouve sur l'île de Nanuya Levu.", en: "The Yasawa Islands stretch for 80 km northwest of Viti Levu, forming a chain of dormant volcanoes with wild beaches and waters of an almost unreal blue. This archipelago was closed to tourists for many years and still retains a rare authenticity today, with traditional Fijian villages welcoming travellers. The Blue Lagoon, made famous by the film of the same name, lies on the island of Nanuya Levu.", es: "Las islas Yasawa se extienden 80 km al noroeste de Viti Levu, formando un rosario de volcanes dormidos con playas salvajes y aguas de un azul casi irreal. Este archipiélago estuvo cerrado a los turistas durante mucho tiempo y conserva hoy una autenticidad poco común, con pueblos fiyianos tradicionales que acogen a los viajeros. La Laguna Azul, hecha famosa por la película homónima, se encuentra en la isla de Nanuya Levu.", de: "Die Yasawa-Inseln erstrecken sich 80 km nordwestlich von Viti Levu und bilden eine Reihe ruhender Vulkane mit wilden Stränden und unwirklich blauem Wasser. Dieser Archipel war lange Zeit für Touristen gesperrt und bewahrt auch heute noch eine seltene Authentizität, wobei traditionelle fidschianische Dörfer Reisende willkommen heißen. Auf der Insel Nanuya Levu liegt die Blaue Lagune, die durch den gleichnamigen Film bekannt wurde.",
      },
      wikipedia: "File:Yasawa Islands2.jpg",
      tags: ["Plage", "Rural", "Nature"],
      mustSee: [
        {
          name: { fr: "Blue Lagoon de Nanuya Levu — eaux turquoise d'une beauté légendaire", en: "Blue Lagoon on Nanuya Levu — legendary turquoise waters", es: "Laguna Azul de Nanuya Levu — aguas turquesa de belleza legendaria", de: "Blaue Lagune von Nanuya Levu – türkisfarbenes Wasser von legendärer Schönheit" },
          wikipedia: "File:Waya Lailai 1.jpg",
        },
        {
          name: { fr: "Grottes de Sawa-i-Lau — grottes calcaires aux eaux claires accessibles en plongée", en: "Sawa-i-Lau Caves — limestone caves with clear waters accessible by diving", es: "Cuevas de Sawa-i-Lau — cuevas calizas de aguas cristalinas accesibles buceando", de: "Sawa-i-Lau-Höhlen – Kalksteinhöhlen mit klarem Wasser, die durch Tauchen zugänglich sind" },
          wikipedia: "File:Limestone ceiling inside the Sawa-i-Lau Caves, Fiji.jpg",
        },
        {
          name: { fr: "Plage de Naviti — snorkeling avec tortues marines", en: "Naviti Beach — snorkelling with sea turtles", es: "Playa de Naviti — esnórquel con tortugas marinas", de: "Naviti Beach – Schnorcheln mit Meeresschildkröten" },
          wikipedia: "File:Beach on Naviti island, Yasawa Islands, Fiji (1) - August 2016.jpg",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Îles Mamanuca", en: "Mamanuca Islands", es: "Islas Mamanuca", de: "Mamanuca-Inseln" },
      region: { fr: "Archipel des Mamanuca", en: "Mamanuca Archipelago", es: "Archipiélago de las Mamanuca", de: "Mamanuca-Archipel" },
      description: {
        fr: "À seulement 30 minutes de bateau de Nadi, les îles Mamanuca sont le terrain de jeu idéal pour les vacanciers cherchant plages de rêve et activités nautiques. Tournage du film 'Cast Away' avec Tom Hanks, l'île de Monuriki est un symbole de l'isolement insulaire fidjien. Cet archipel offre un large éventail d'hébergements, des bungalows économiques aux resorts cinq étoiles.", en: "Just 30 minutes by boat from Nadi, the Mamanuca Islands are the perfect playground for holidaymakers seeking dream beaches and water activities. Featured in the film 'Cast Away' with Tom Hanks, Monuriki Island has become a symbol of Fijian island isolation. This archipelago offers a wide range of accommodation, from budget bungalows to five-star resorts.", es: "A solo 30 minutos en barco de Nadi, las islas Mamanuca son el escenario ideal para quienes buscan playas de ensueño y actividades acuáticas. Escenario de la película 'Náufrago' con Tom Hanks, la isla de Monuriki es un símbolo del aislamiento insular fiyiano. Este archipiélago ofrece un amplio abanico de alojamientos, desde bungalós económicos hasta resorts de cinco estrellas.", de: "Nur 30 Minuten mit dem Boot von Nadi entfernt sind die Mamanuca-Inseln der ideale Spielplatz für Urlauber, die auf der Suche nach Traumstränden und Wasseraktivitäten sind. Die Insel Monuriki, die mit Tom Hanks den Film „Cast Away“ drehte, ist ein Symbol für die Isolation der fidschianischen Insel. Dieser Archipel bietet eine große Auswahl an Unterkünften, von günstigen Bungalows bis hin zu Fünf-Sterne-Resorts.",
      },
      wikipedia: "Mamanuca_Islands",
      tags: ["Luxe", "Plage", "Famille"],
      mustSee: [
        {
          name: { fr: "Île de Monuriki — décor du film Cast Away et snorkeling exceptionnel", en: "Monuriki Island — the setting for Cast Away and home to exceptional snorkelling", es: "Isla de Monuriki — escenario de la película Náufrago y esnórquel excepcional", de: "Monuriki Island – Schauplatz des Films „Cast Away“ und außergewöhnliche Schnorchelmöglichkeiten" },
          wikipedia: "Monuriki",
        },
        {
          name: { fr: "Plongée aux Manta Rays — raies manta entre mai et octobre", en: "Manta Ray diving — manta rays from May to October", es: "Buceo con mantarrayas — mantarrayas entre mayo y octubre", de: "Tauchen mit Mantarochen – Mantarochen zwischen Mai und Oktober" },
          wikipedia: "Mamanuca_Islands",
        },
        {
          name: { fr: "Plage de Castaway Island — eau transparente et récif frangeant coloré", en: "Castaway Island beach — crystal-clear water and a colourful fringing reef", es: "Playa de Castaway Island — agua transparente y arrecife franjeante colorido", de: "Castaway Island Beach – klares Wasser und farbenfrohes Saumriff" },
          wikipedia: "File:Castaway Bay Battle Boats at Sea World.jpg",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Grande Barrière d'Astrolabe", en: "Great Astrolabe Reef", es: "Gran Arrecife Astrolabe", de: "Große Astrolabium-Barriere" },
      region: { fr: "Kadavu", en: "Kadavu", es: "Kadavu", de: "Kadavu" },
      description: {
        fr: "Le Grand Récif Astrolabe, au large de l'île de Kadavu, est l'un des récifs barrières les plus importants du Pacifique Sud et un paradis pour les plongeurs confirmés. Ses eaux profondes et peu fréquentées abritent une biodiversité marine exceptionnelle : requins dormeurs, napoléons, tortues et une multitude de coraux en parfait état. L'île de Kadavu elle-même est restée préservée du tourisme de masse.", en: "Great Astrolabe Reef, off the island of Kadavu, is one of the South Pacific's most important barrier reefs and a paradise for experienced divers. Its deep, little-visited waters are home to exceptional marine biodiversity: nurse sharks, humphead wrasse, turtles and a wealth of pristine coral. Kadavu itself has remained untouched by mass tourism.", es: "El Gran Arrecife Astrolabe, frente a la isla de Kadavu, es uno de los arrecifes barrera más importantes del Pacífico Sur y un paraíso para buceadores expertos. Sus aguas profundas y poco frecuentadas albergan una biodiversidad marina excepcional: tiburones nodriza, peces napoleón, tortugas y una multitud de corales en perfecto estado. La propia isla de Kadavu se ha mantenido al margen del turismo de masas.", de: "Das Great Astrolabe Reef vor der Insel Kadavu ist eines der wichtigsten Barriereriffe im Südpazifik und ein Paradies für erfahrene Taucher. Seine tiefen, menschenleeren Gewässer beherbergen eine außergewöhnliche Artenvielfalt im Meer: schlafende Haie, Lippfische, Schildkröten und eine Vielzahl von Korallen in perfektem Zustand. Die Insel Kadavu selbst ist vom Massentourismus verschont geblieben.",
      },
      wikipedia: "Great_Astrolabe_Reef",
      tags: ["Plage", "Nature"],
      mustSee: [
        {
          name: { fr: "Great Astrolabe Reef — plongée avec requins, raies et poissons tropicaux", en: "Great Astrolabe Reef — diving with sharks, rays and tropical fish", es: "Gran Arrecife Astrolabe — buceo con tiburones, rayas y peces tropicales", de: "Great Astrolabe Reef – Tauchen mit Haien, Rochen und tropischen Fischen" },
          wikipedia: "Great_Astrolabe_Reef",
        },
        {
          name: { fr: "Nabukelevu (Mt. Washington) — randonnée au sommet de Kadavu (838 m)", en: "Nabukelevu (Mt. Washington) — hike to Kadavu's summit (838 m)", es: "Nabukelevu (monte Washington) — senderismo a la cumbre de Kadavu (838 m)", de: "Nabukelevu (Mt. Washington) – Wanderung zum Kadavu-Gipfel (838 m)" },
          wikipedia: "File:Uluinabukelevu.jpg",
        },
        {
          name: { fr: "Village de Vunisea — life fidjienne authentique loin du tourisme", en: "Vunisea village — authentic Fijian life far from tourism", es: "Pueblo de Vunisea — vida fiyiana auténtica lejos del turismo", de: "Vunisea Village – authentisches fidschianisches Leben fernab des Tourismus" },
          wikipedia: "File:Vunisea.jpg",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Suva & Dunes de Sigatoka", en: "Suva & Sigatoka Dunes", es: "Suva y dunas de Sigatoka", de: "Suva- und Sigatoka-Dünen" },
      region: { fr: "Viti Levu", en: "Viti Levu", es: "Viti Levu", de: "Viti Levu" },
      description: {
        fr: "Suva, la capitale cosmopolite, mêle architecture coloniale britannique, marchés animés et musées révélant la richesse culturelle fidjienne. Non loin, les Dunes de Sigatoka sont un site préhistorique et naturel remarquable : ces dunes de sable côtières révèlent des vestiges archéologiques lapita vieux de 2 600 ans. La Côte des Coraux entre Nadi et Suva offre des plages plus accessibles et des expériences culturelles authentiques.", en: "Suva, the cosmopolitan capital, blends British colonial architecture, lively markets and museums that reveal the richness of Fijian culture. Nearby, the Sigatoka Dunes are a remarkable prehistoric and natural site: these coastal sand dunes have revealed 2,600-year-old Lapita archaeological remains. The Coral Coast between Nadi and Suva offers more accessible beaches and authentic cultural experiences.", es: "Suva, la capital cosmopolita, combina arquitectura colonial británica, mercados animados y museos que revelan la riqueza cultural fiyiana. Cerca de allí, las dunas de Sigatoka son un notable sitio prehistórico y natural: estas dunas de arena costeras han revelado restos arqueológicos lapita de 2.600 años de antigüedad. La Costa de Coral entre Nadi y Suva ofrece playas más accesibles y experiencias culturales auténticas.", de: "Suva, die kosmopolitische Hauptstadt, vereint britische Kolonialarchitektur, geschäftige Märkte und Museen, die den kulturellen Reichtum Fidschis offenbaren. Nicht weit entfernt sind die Sigatoka-Dünen eine bemerkenswerte prähistorische und natürliche Stätte: Diese Sanddünen an der Küste offenbaren archäologische Überreste von Lapita, die 2.600 Jahre alt sind. Die Korallenküste zwischen Nadi und Suva bietet besser zugängliche Strände und authentische Kulturerlebnisse.",
      },
      wikipedia: "Suva",
      tags: ["Ville", "Culture", "Histoire", "Gastronomie", "Architecture"],
      mustSee: [
        {
          name: { fr: "Musée de Fidji — histoire mélanésienne et artefacts des guerriers cannibales", en: "Fiji Museum — Melanesian history and artefacts from cannibal warriors", es: "Museo de Fiyi — historia melanesia y artefactos de guerreros caníbales", de: "Fidschi-Museum – melanesische Geschichte und Artefakte von Kannibalenkriegern" },
          wikipedia: "Fiji_Museum",
        },
        {
          name: { fr: "Dunes de Sigatoka — parc national et site archéologique lapita", en: "Sigatoka Dunes — national park and Lapita archaeological site", es: "Dunas de Sigatoka — parque nacional y sitio arqueológico lapita", de: "Sigatoka-Dünen – Lapita-Nationalpark und archäologische Stätte" },
          wikipedia: "File:SigatokaDunesFiji.jpg",
        },
        {
          name: { fr: "Marché de Suva — marché couvert animé avec épices, kava et artisanat", en: "Suva Market — a lively covered market filled with spices, kava and handicrafts", es: "Mercado de Suva — animado mercado cubierto con especias, kava y artesanía", de: "Suva-Markt – lebhafter Indoor-Markt mit Gewürzen, Kava und Kunsthandwerk" },
          wikipedia: "File:Suva,_Fiji_52.jpg",
        },
        {
          name: { fr: "Cérémonie du kava — tradition sociale fidjienne incontournable", en: "Kava ceremony — an essential Fijian social tradition", es: "Ceremonia del kava — tradición social fiyiana imprescindible", de: "Kava-Zeremonie – eine wesentliche fidschianische Gesellschaftstradition" },
          wikipedia: "Kava",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Les Fidji proposent un large spectre de budgets, des complexes hôteliers parmi les plus luxueux du Pacifique aux guesthouses économiques dans les villages. Les îles Yasawa et Mamanuca sont plus chères que Viti Levu. La nourriture locale (dalo, poisson grillé, lovo) est abordable, mais les restaurants touristiques peuvent être onéreux. Les transferts en bateau entre îles constituent un poste de dépense notable.", en: "Fiji caters to a wide range of budgets, from some of the Pacific's most luxurious resorts to budget guesthouses in village settings. The Yasawa and Mamanuca Islands are more expensive than Viti Levu. Local food (dalo, grilled fish, lovo) is affordable, but tourist-oriented restaurants can be pricey. Boat transfers between islands are a significant expense to factor in.", es: "Fiyi ofrece un amplio abanico de presupuestos, desde algunos de los resorts más lujosos del Pacífico hasta guesthouses económicas en los pueblos. Las islas Yasawa y Mamanuca son más caras que Viti Levu. La comida local (dalo, pescado a la parrilla, lovo) es asequible, pero los restaurantes turísticos pueden resultar caros. Los traslados en barco entre islas son un gasto notable a tener en cuenta.", de: "Fidschi bietet eine große Auswahl an Budgets, von einigen der luxuriösesten Resorts im Pazifik bis hin zu preisgünstigen Pensionen in den Dörfern. Die Inseln Yasawa und Mamanuca sind teurer als Viti Levu. Lokale Speisen (Dalo, gegrillter Fisch, Lovo) sind erschwinglich, Touristenrestaurants können jedoch teuer sein. Bootstransfers zwischen den Inseln stellen einen erheblichen Kostenfaktor dar.",
    },
    currency: "FJD",
    exchangeRate: "1€ ≈ 2,4 FJD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir ou bure basique (Yasawa)", en: "Dorm bed or basic bure (Yasawa)", es: "Dormitorio o bure básico (Yasawa)", de: "Schlafsaal oder einfache Lodge (Yasawa)" }, price: "25–50 €" },
          { label: { fr: "Hôtel ou guesthouse confortable", en: "Comfortable hotel or guesthouse", es: "Hotel o guesthouse cómodo", de: "Komfortables Hotel oder Gästehaus" }, price: "70–130 €" },
          { label: { fr: "Resort 4–5 étoiles tout inclus", en: "All-inclusive 4–5 star resort", es: "Resort 4–5 estrellas todo incluido", de: "4–5-Sterne-All-Inclusive-Resort" }, price: "200–500 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Marché local et plat fidjien (curry, poisson)", en: "Local market meal or Fijian dish (curry, fish)", es: "Mercado local y plato fiyiano (curry, pescado)", de: "Lokaler Markt und fidschianisches Gericht (Curry, Fisch)" }, price: "3–7 €" },
          { label: { fr: "Restaurant simple à Nadi ou Suva", en: "Simple restaurant in Nadi or Suva", es: "Restaurante sencillo en Nadi o Suva", de: "Einfaches Restaurant in Nadi oder Suva" }, price: "8–15 €" },
          { label: { fr: "Restaurant de resort ou gastronomique", en: "Resort restaurant or fine dining", es: "Restaurante de resort o alta gastronomía", de: "Resort- oder Gourmetrestaurant" }, price: "25–50 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus local entre villes (Nadi–Suva)", en: "Local bus between towns (Nadi–Suva)", es: "Autobús local entre ciudades (Nadi–Suva)", de: "Lokaler Bus zwischen Städten (Nadi–Suva)" }, price: "4–6 €" },
          { label: { fr: "Ferry Yasawa Flyer (Nadi–Yasawa aller)", en: "Yasawa Flyer ferry (one way Nadi–Yasawa)", es: "Ferry Yasawa Flyer (ida Nadi–Yasawa)", de: "Fähre Yasawa Flyer (Hinfahrt Nadi–Yasawa)" }, price: "40–60 €" },
          { label: { fr: "Location de voiture / jour à Viti Levu", en: "Car rental / day on Viti Levu", es: "Alquiler de coche / día en Viti Levu", de: "Autovermietung / Tag in Viti Levu" }, price: "40–70 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Plongée sous-marine (2 bouteilles)", en: "Scuba diving (2 tanks)", es: "Buceo (2 botellas)", de: "Tauchen (2 Flaschen)" }, price: "60–90 €" },
          { label: { fr: "Excursion village fidjien avec cérémonie kava", en: "Fijian village excursion with kava ceremony", es: "Excursión a pueblo fiyiano con ceremonia del kava", de: "Fidschi-Dorfausflug mit Kava-Zeremonie" }, price: "30–50 €" },
          { label: { fr: "Surf à Cloudbreak (bateau + guide)", en: "Surfing at Cloudbreak (boat + guide)", es: "Surf en Cloudbreak (barco + guía)", de: "Surfen bei Cloudbreak (Boot + Guide)" }, price: "80–120 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "70–100 €/j",
        desc: { fr: "Dortoirs ou bures basiques, marchés locaux, bus et ferries", en: "Dorms or basic bures, local markets, buses and ferries", es: "Dormitorios o bures básicos, mercados locales, autobuses y ferris", de: "Einfache Schlafsäle oder Büros, lokale Märkte, Busse und Fähren" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "150–250 €/j",
        desc: { fr: "Hôtels confortables, restaurants variés, excursions organisées", en: "Comfortable hotels, varied restaurants and organised excursions", es: "Hoteles cómodos, restaurantes variados, excursiones organizadas", de: "Komfortable Hotels, abwechslungsreiche Restaurants, organisierte Ausflüge" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "14 jours", en: "14 days", es: "14 días", de: "14 Tage" },
      route: { fr: "Nadi → Mamanuca → Yasawa → Côte des Coraux → Suva", en: "Nadi → Mamanuca → Yasawa → Coral Coast → Suva", es: "Nadi → Mamanuca → Yasawa → Costa de Coral → Suva", de: "Nadi → Mamanuca → Yasawa → Korallenküste → Suva" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nadi", en: "Return flight Paris–Nadi", es: "Vuelo ida y vuelta Madrid–Nadi", de: "Hin- und Rückflug Paris–Nadi" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "350–550 €" },
            { label: { fr: "Transports inter-îles (ferries, bus)", en: "Inter-island transport (ferries, buses)", es: "Transporte entre islas (ferris, autobuses)", de: "Transport zwischen den Inseln (Fähren, Busse)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "250–400 €" },
            { label: { fr: "Activités (plongée, excursions)", en: "Activities (diving, excursions)", es: "Actividades (buceo, excursiones)", de: "Aktivitäten (Tauchen, Ausflüge)" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nadi", en: "Return flight Paris–Nadi", es: "Vuelo ida y vuelta Madrid–Nadi", de: "Hin- und Rückflug Paris–Nadi" }, amount: "1 100–1 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 050–1 800 €" },
            { label: { fr: "Transports inter-îles + transfers privés", en: "Inter-island transport + private transfers", es: "Transporte entre islas + traslados privados", de: "Transport zwischen den Inseln + private Transfers" }, amount: "300–500 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "500–800 €" },
            { label: { fr: "Activités (plongée, spa, excursions)", en: "Activities (diving, spa, excursions)", es: "Actividades (buceo, spa, excursiones)", de: "Aktivitäten (Tauchen, Spa, Ausflüge)" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "22–26h avec 1–2 escales (via Sydney, Auckland ou Singapour)", en: "22–26 hours with 1–2 stopovers (via Sydney, Auckland or Singapore)", es: "22–26h con 1–2 escalas (vía Sídney, Auckland o Singapur)", de: "22–26 Std. mit 1–2 Zwischenstopps (über Sydney, Auckland oder Singapur)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français jusqu'à 4 mois (tampon à l'arrivée)", en: "No visa required for French citizens for stays of up to 4 months (stamp on arrival)", es: "Sin visado para ciudadanos de la UE hasta 4 meses (sello a la llegada)", de: "Visafreiheit für Franzosen bis zu 4 Monate (Stempel bei der Ankunft)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dollar fidjien (FJD). Cartes bancaires acceptées dans les resorts, espèces recommandées dans les villages", en: "Fijian dollar (FJD). Bank cards are accepted in resorts, but cash is recommended in villages", es: "Dólar fiyiano (FJD). Tarjetas bancarias aceptadas en los resorts, se recomienda efectivo en los pueblos", de: "Fidschi-Dollar (FJD). Bankkarten werden in Resorts akzeptiert, Bargeld wird in Dörfern empfohlen" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais officiel et très répandu ; fidjien et hindi fidjien parlés localement", en: "English is official and widely spoken; Fijian and Fiji Hindi are also spoken locally", es: "Inglés oficial y muy extendido; fiyiano e hindi fiyiano se hablan localmente", de: "Offizielles und weit verbreitetes Englisch; Fidschianisch und Fidschi-Hindi werden vor Ort gesprochen" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type I (comme en Australie), 240V — adaptateur nécessaire", en: "Type I (as in Australia), 240V — adapter required", es: "Tipo I (como en Australia), 240V — se necesita adaptador", de: "Typ I (wie in Australien), 240 V – Adapter erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccins recommandés : hépatites A et B, typhoïde. Pas de paludisme aux Fidji. Attention aux eaux de boisson", en: "Recommended vaccines: hepatitis A and B, typhoid. No malaria in Fiji. Take care with drinking water", es: "Vacunas recomendadas: hepatitis A y B, tifoidea. Sin malaria en Fiyi. Cuidado con el agua potable", de: "Empfohlene Impfungen: Hepatitis A und B, Typhus. Keine Malaria auf Fidschi. Seien Sie vorsichtig mit Trinkwasser" } },
    { icon: "🌀", label: { fr: "Cyclones", en: "Cyclones", es: "Ciclones", de: "Zyklone" }, value: { fr: "Saison cyclonique de novembre à avril. Saison sèche (mai–oct) très recommandée", en: "Cyclone season runs from November to April. The dry season (May–Oct) is highly recommended", es: "Temporada de ciclones de noviembre a abril. Se recomienda encarecidamente la temporada seca (mayo–oct)", de: "Hurrikansaison von November bis April. Trockenzeit (Mai–Okt) sehr zu empfehlen" } },
    { icon: "🤿", label: { fr: "Plongée", en: "Diving", es: "Buceo", de: "Tauchen" }, value: { fr: "Certification PADI conseillée pour profiter pleinement des récifs. Nombreux centres de plongée à Nadi et Mamanuca", en: "A PADI certification is recommended to fully enjoy the reefs. There are many dive centres in Nadi and the Mamanuca Islands", es: "Se recomienda certificación PADI para disfrutar plenamente de los arrecifes. Numerosos centros de buceo en Nadi y Mamanuca", de: "Um die Riffe in vollen Zügen genießen zu können, wird eine PADI-Zertifizierung empfohlen. Viele Tauchzentren in Nadi und Mamanuca" } },
  ],
};
