export const GUINEA = {
  code: "GIN",
  numericId: 324,
  name: { fr: "Guinée", en: "Guinea", es: "Guinea" },
  emoji: "🇬🇳",
  capital: { fr: "Conakry", en: "Conakry", es: "Conakri" },
  language: { fr: "Français (officiel), Pular, Mandingue, Soussou", en: "French (official), Pular, Mandinka, Susu", es: "Francés (oficial), pular, mandinga, susú" },
  currency: { fr: "Franc guinéen (GNF)", en: "Guinean franc (GNF)", es: "Franco guineano (GNF)" },
  timezone: "UTC",
  filter: {
    budgetMin: 30, budgetMid: 65,
    tripMin: 750, tripMid: 1600,
  },
  description: {
    fr: "Surnommée le « château d'eau de l'Afrique de l'Ouest », la Guinée est un pays de contrastes saisissants. Le Fouta Djalon, un plateau montagneux aux cascades spectaculaires et villages peuls, contraste avec la capitale côtière de Conakry et les forêts denses du sud abritant chimpanzés et hippopotames. Les monts Nimba, classés à l'UNESCO, témoignent d'une biodiversité exceptionnelle.",
    en: "Nicknamed the \"water tower of West Africa,\" Guinea is a country of striking contrasts. Fouta Djallon, a mountainous plateau of spectacular waterfalls and Fulani villages, contrasts with the coastal capital of Conakry and the dense southern forests that shelter chimpanzees and hippos. The UNESCO-listed Nimba Mountains testify to exceptional biodiversity.",
    es: "Apodada la «torre de agua de África Occidental», Guinea es un país de contrastes sorprendentes. El Fouta Djalon, una meseta montañosa de cascadas espectaculares y pueblos peules, contrasta con la capital costera, Conakri, y los densos bosques del sur que albergan chimpancés e hipopótamos. Los montes Nimba, declarados Patrimonio de la Humanidad por la UNESCO, dan testimonio de una biodiversidad excepcional.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca" },
      color: "#22c55e",
      description: {
        fr: "Période idéale avec un temps sec, des températures agréables de 25–30°C et des routes praticables. Parfait pour le Fouta Djalon, les cascades et les parcs nationaux.",
        en: "Ideal period with dry weather, pleasant 25–30°C temperatures and passable roads. Perfect for Fouta Djallon, the waterfalls and the national parks.",
        es: "Época ideal, con clima seco, temperaturas agradables de 25–30°C y carreteras transitables. Perfecta para el Fouta Djalon, las cascadas y los parques nacionales.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Juin", en: "May – June", es: "Mayo – Junio" },
      label: { fr: "Début de saison des pluies", en: "Start of the rainy season", es: "Inicio de la estación de lluvias" },
      color: "#f59e0b",
      description: {
        fr: "Les premières pluies verdissent les paysages mais les routes se dégradent. La végétation est luxuriante, les cascades du Fouta Djalon sont impressionnantes.",
        en: "The first rains turn the landscapes green, but the roads deteriorate. Vegetation is lush and the waterfalls of Fouta Djallon are impressive.",
        es: "Las primeras lluvias reverdecen el paisaje, pero las carreteras se deterioran. La vegetación es exuberante y las cascadas del Fouta Djalon son impresionantes.",
      },
      icon: "🌦️",
    },
  ],

  weatherCities: [
    {
      id: "conakry",
      name: "Conakry",
      region: { fr: "Conakry (côte)", en: "Conakry (coast)", es: "Conakri (costa)" },
      data: [
        { month: "Jan", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 28, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 450, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 700, icon: "🌧️" },
        { month: "Aoû", temp: 24, rain: 800, icon: "🌧️" },
        { month: "Sep", temp: 25, rain: 600, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Fouta Djalon",
      region: { fr: "Mamou / Labé / Pita", en: "Mamou / Labé / Pita", es: "Mamou / Labé / Pita" },
      description: {
        fr: "Le Fouta Djalon est un plateau montagneux d'une beauté grandiose, parcouru de gorges profondes, de cascades majestueuses et de villages peuls perchés. La chute de Kinkon, les gorges de Ditinn et les falaises de Doucki offrent des paysages de randonnée parmi les plus beaux d'Afrique de l'Ouest.",
        en: "Fouta Djallon is a mountainous plateau of grand beauty, crossed by deep gorges, majestic waterfalls and perched Fulani villages. Kinkon Falls, Ditinn Gorges and the Doucki cliffs offer some of the finest hiking scenery in West Africa.",
        es: "El Fouta Djalon es una meseta montañosa de una belleza grandiosa, surcada por profundos desfiladeros, cascadas majestuosas y pueblos peules encaramados en altura. La catarata de Kinkon, los desfiladeros de Ditinn y los acantilados de Doucki ofrecen algunos de los paisajes de senderismo más bellos de África Occidental.",
      },
      wikipedia: "File:Fouta Djallon (14582291826).jpg",
      tags: ["Nature", "Randonnée", "Culture"],
      mustSee: [
        { name: { fr: "Cascade de Kinkon — 90 mètres de hauteur", en: "Kinkon Falls — 90 metres high", es: "Catarata de Kinkon — 90 metros de altura" }, wikipedia: "File:Chute de Ditinn à Dalaba.jpg" },
        { name: { fr: "Gorges de Ditinn et villages peuls", en: "Ditinn Gorges and Fulani villages", es: "Desfiladeros de Ditinn y pueblos peules" }, wikipedia: "File:Fouta Djallon (14418743529).jpg" },
        { name: { fr: "Falaises de Doucki — point de vue spectaculaire", en: "Doucki cliffs — spectacular viewpoint", es: "Acantilados de Doucki — mirador espectacular" }, wikipedia: "File:Fouta Djallon (14582291826).jpg" },
        { name: { fr: "Marché hebdomadaire de Labé", en: "Labé weekly market", es: "Mercado semanal de Labé" }, wikipedia: "File:Marche sasse Labé.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Monts Nimba", en: "Nimba Mountains", es: "Montes Nimba" },
      region: { fr: "N'Zérékoré", en: "N'Zérékoré", es: "N'Zérékoré" },
      description: {
        fr: "Les monts Nimba, partagés entre la Guinée, la Côte d'Ivoire et le Libéria, sont un site du patrimoine mondial de l'UNESCO pour leur biodiversité exceptionnelle. On y trouve des chimpanzés qui utilisent des outils, des hippopotames pygmées et des centaines d'espèces endémiques dans cette forêt dense et brumeuse.",
        en: "The Nimba Mountains, shared by Guinea, Côte d'Ivoire and Liberia, are a UNESCO World Heritage site for their exceptional biodiversity. They are home to tool-using chimpanzees, pygmy hippos and hundreds of endemic species in this dense, misty forest.",
        es: "Los montes Nimba, compartidos entre Guinea, Costa de Marfil y Liberia, son un sitio del Patrimonio Mundial de la UNESCO por su excepcional biodiversidad. Allí se encuentran chimpancés que utilizan herramientas, hipopótamos pigmeos y cientos de especies endémicas en este bosque denso y brumoso.",
      },
      wikipedia: "Mount_Nimba_Strict_Nature_Reserve",
      tags: ["UNESCO", "Nature", "Safari"],
      mustSee: [
        { name: { fr: "Hippopotames pygmées dans les rivières", en: "Pygmy hippos in the rivers", es: "Hipopótamos pigmeos en los ríos" }, wikipedia: "Pygmy_hippopotamus" },
        { name: { fr: "Sommet du mont Nimba (1752 m)", en: "Summit of Mount Nimba (1752 m)", es: "Cima del monte Nimba (1752 m)" }, wikipedia: "File:Mount Nimba Strict Nature Reserve-123989.jpg" },
        { name: { fr: "Forêt montagnarde dense et brume matinale", en: "Dense montane forest and morning mist", es: "Bosque montano denso y neblina matinal" }, wikipedia: "Mount_Nimba_Strict_Nature_Reserve" },
      ],
    },
    {
      id: 3,
      name: "Conakry",
      region: { fr: "Conakry", en: "Conakry", es: "Conakri" },
      description: {
        fr: "Conakry, capitale construite sur une presqu'île, est une ville animée et musicale. La Guinée est le berceau du djembé et du balafon, et les soirées de musique mandingue sont réputées dans tout le continent. Le marché Madina, le musée national et les îles de Los, accessibles en pirogue, complètent la visite.",
        en: "Conakry, a capital built on a peninsula, is a lively and musical city. Guinea is the cradle of the djembe and balafon, and evenings of Mandinka music are renowned across the continent. Madina Market, the National Museum and the Los Islands, reached by pirogue, round out the visit.",
        es: "Conakri, capital construida sobre una península, es una ciudad animada y musical. Guinea es la cuna del djembé y el balafón, y las veladas de música mandinga son célebres en todo el continente. El mercado de Madina, el museo nacional y las islas de Los, accesibles en piragua, completan la visita.",
      },
      wikipedia: "Conakry",
      tags: ["Ville", "Culture", "Shopping", "Plage"],
      mustSee: [
        { name: { fr: "Musée national de Guinée", en: "National Museum of Guinea", es: "Museo Nacional de Guinea" }, wikipedia: "File:Musée National de Guinée 27042022 005.jpg" },
        { name: { fr: "Marché Madina — le plus grand d'Afrique de l'Ouest", en: "Madina Market — the largest in West Africa", es: "Mercado de Madina — el más grande de África Occidental" }, wikipedia: "File:Madina 2.jpg" },
        { name: { fr: "Îles de Los en pirogue (détente, snorkeling)", en: "Los Islands by pirogue (relaxation, snorkelling)", es: "Islas de Los en piragua (relax, esnórquel)" }, wikipedia: "File:Los island SPOT 1386.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bossou & forêt de Ziama", en: "Bossou & Ziama Forest", es: "Bossou y bosque de Ziama" },
      region: { fr: "N'Zérékoré", en: "N'Zérékoré", es: "N'Zérékoré" },
      description: {
        fr: "Le village de Bossou abrite une communauté de chimpanzés étudiée depuis les années 1970, célèbre pour son utilisation d'outils en pierre pour casser des noix. La forêt de Ziama, réserve de biosphère de l'UNESCO, est l'un des derniers grands massifs forestiers d'Afrique de l'Ouest.",
        en: "The village of Bossou is home to a community of chimpanzees studied since the 1970s, famous for using stone tools to crack nuts. Ziama Forest, a UNESCO biosphere reserve, is one of the last great forest blocks in West Africa.",
        es: "El pueblo de Bossou alberga una comunidad de chimpancés estudiada desde los años 1970, célebre por su uso de herramientas de piedra para romper nueces. El bosque de Ziama, reserva de biosfera de la UNESCO, es uno de los últimos grandes macizos forestales de África Occidental.",
      },
      wikipedia: "File:Marché de Bossou.jpg",
      tags: ["Safari", "Musées", "Nature", "UNESCO"],
      mustSee: [
        { name: { fr: "Chimpanzés de Bossou et leur utilisation d'outils", en: "Bossou chimpanzees and their tool use", es: "Chimpancés de Bossou y su uso de herramientas" }, wikipedia: "File:Chimpanzé de Bossou 29.jpg" },
        { name: { fr: "Réserve de biosphère de Ziama", en: "Ziama Biosphere Reserve", es: "Reserva de biosfera de Ziama" }, wikipedia: "Ziama_Massif" },
        { name: { fr: "Villages forestiers de la région de N'Zérékoré", en: "Forest villages of the N'Zérékoré region", es: "Pueblos forestales de la región de N'Zérékoré" }, wikipedia: "File:Nzerekore.jpg" },
        { name: { fr: "Marché de N'Zérékoré — carrefour de l'Afrique forestière", en: "N'Zérékoré market — crossroads of forested West Africa", es: "Mercado de N'Zérékoré — encrucijada de la África boscosa" }, wikipedia: "File:Marché de Bossou.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Guinée est une destination économique avec une infrastructure touristique en développement. Les hôtels de milieu de gamme existent principalement à Conakry et dans quelques villes du Fouta Djalon. Le franc guinéen est volatile, l'euro ou le dollar sont souvent préférés.",
      en: "Guinea is a budget-friendly destination with tourism infrastructure that is still developing. Mid-range hotels are found mainly in Conakry and a few towns in Fouta Djallon. The Guinean franc is volatile, so euros or US dollars are often preferred.",
      es: "Guinea es un destino económico con una infraestructura turística aún en desarrollo. Los hoteles de gama media existen principalmente en Conakri y en algunas ciudades del Fouta Djalon. El franco guineano es volátil, por lo que suele preferirse el euro o el dólar.",
    },
    currency: "GNF",
    exchangeRate: "1€ ≈ 9 500 GNF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / chambre locale (Fouta Djalon)", en: "Guesthouse / local room (Fouta Djallon)", es: "Casa de huéspedes / habitación local (Fouta Djalon)" }, price: "10–25 €", detail: { fr: "Simple, avec moustiquaire", en: "Simple, with mosquito net", es: "Sencilla, con mosquitero" } },
          { label: { fr: "Hôtel 2–3★ Conakry", en: "2–3★ hotel in Conakry", es: "Hotel 2–3★ en Conakri" }, price: "35–60 €", detail: { fr: "Clim, eau chaude, sécurité", en: "Air-con, hot water, security", es: "Aire acondicionado, agua caliente, seguridad" } },
          { label: { fr: "Hôtel de confort Conakry", en: "Comfort hotel in Conakry", es: "Hotel de confort en Conakri" }, price: "70–120 €", detail: { fr: "Meilleure option de la capitale", en: "Best option in the capital", es: "Mejor opción de la capital" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Riz sauce feuilles (rue ou maquis)", en: "Rice with leaf sauce (street stall or maquis)", es: "Arroz con salsa de hojas (calle o maquis)" }, price: "1–3 €", detail: { fr: "Plat local omniprésent", en: "Ubiquitous local dish", es: "Plato local omnipresente" } },
          { label: { fr: "Restaurant local — thiéboudienne, poulet yassa", en: "Local restaurant — thiéboudienne, yassa chicken", es: "Restaurante local — thiéboudienne, pollo yassa" }, price: "4–9 €", detail: { fr: "Repas complet", en: "Full meal", es: "Comida completa" } },
          { label: { fr: "Restaurant touristique Conakry", en: "Tourist restaurant in Conakry", es: "Restaurante turístico en Conakri" }, price: "12–25 €", detail: { fr: "Cuisine internationale, poisson", en: "International cuisine, fish", es: "Cocina internacional, pescado" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bush taxi Conakry–Labé (Fouta)", en: "Bush taxi Conakry–Labé (Fouta)", es: "Taxi colectivo Conakri–Labé (Fouta)" }, price: "10–18 €", detail: { fr: "~5h de route", en: "~5h by road", es: "~5h por carretera" } },
          { label: { fr: "Taxi-moto à Conakry", en: "Motorbike taxi in Conakry", es: "Mototaxi en Conakri" }, price: "0,50–2 €", detail: { fr: "Transport quotidien local", en: "Everyday local transport", es: "Transporte cotidiano local" } },
          { label: { fr: "Location 4x4 pour le Fouta / jour", en: "4x4 rental for Fouta / day", es: "Alquiler de 4x4 para el Fouta / día" }, price: "70–100 €", detail: { fr: "Pistes parfois difficiles", en: "Roads can be rough at times", es: "Pistas a veces difíciles" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Randonnée guidée Fouta Djalon (1 jour)", en: "Guided hike in Fouta Djallon (1 day)", es: "Senderismo guiado por el Fouta Djalon (1 día)" }, price: "20–40 €", detail: { fr: "Guide local + porteur option", en: "Local guide + optional porter", es: "Guía local + porteador opcional" } },
          { label: { fr: "Visite chimpanzés de Bossou", en: "Bossou chimpanzee visit", es: "Visita a los chimpancés de Bossou" }, price: "25–50 €", detail: { fr: "Entrée + guide scientifique", en: "Entry + scientific guide", es: "Entrada + guía científico" } },
          { label: { fr: "Pirogue vers îles de Los (Conakry)", en: "Pirogue to the Los Islands (Conakry)", es: "Piragua a las islas de Los (Conakri)" }, price: "10–20 €", detail: { fr: "Demi-journée de détente", en: "Half-day of relaxation", es: "Media jornada de relax" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + repas locaux + bush taxi", en: "Guesthouse + local meals + bush taxi", es: "Casa de huéspedes + comidas locales + taxi colectivo" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "65–100 €/j", desc: { fr: "Hôtel 3★ + restos + 4x4 + guides", en: "3★ hotel + restaurants + 4x4 + guides", es: "Hotel 3★ + restaurantes + 4x4 + guías" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Conakry (2j) → Îles de Los (1j) → Fouta Djalon : Labé, Pita, cascades (4j) → N'Zérékoré & Nimba (3j)",
        en: "Conakry (2d) → Los Islands (1d) → Fouta Djallon: Labé, Pita, waterfalls (4d) → N'Zérékoré & Nimba (3d)",
        es: "Conakri (2d) → Islas de Los (1d) → Fouta Djalon: Labé, Pita, cascadas (4d) → N'Zérékoré y Nimba (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "750 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Conakry", en: "Return flight Paris–Conakry", es: "Vuelo ida y vuelta París–Conakri" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "160–250 €" },
            { label: { fr: "Transports locaux + bush taxis", en: "Local transport + bush taxis", es: "Transporte local + taxis colectivos" }, amount: "120–180 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "80–120 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías" }, amount: "80–120 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 600 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Conakry", en: "Return flight Paris–Conakry", es: "Vuelo ida y vuelta París–Conakri" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "500–750 €" },
            { label: { fr: "4x4 + chauffeur + vols intérieurs", en: "4x4 + driver + domestic flights", es: "4x4 + chófer + vuelos internos" }, amount: "350–500 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "180–250 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías" }, amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flights from Paris", es: "Vuelo desde París" }, value: { fr: "~6h (Air France, Brussels Airlines, Royal Air Maroc via escale)", en: "~6h (Air France, Brussels Airlines, Royal Air Maroc with stopover)", es: "~6h (Air France, Brussels Airlines, Royal Air Maroc con escala)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire — à obtenir avant le départ à l'ambassade (35–60 €)", en: "Visa required — must be obtained before departure from the embassy (35–60 €)", es: "Visado obligatorio — debe obtenerse antes de la salida en la embajada (35–60 €)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Franc guinéen (GNF) — euro et dollar acceptés dans les hôtels, espèces indispensables", en: "Guinean franc (GNF) — euros and US dollars accepted in hotels, cash essential", es: "Franco guineano (GNF) — euros y dólares aceptados en los hoteles, efectivo indispensable" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Français (officiel) + Pular (Fouta Djalon) + Mandingue + Soussou", en: "French (official) + Pular (Fouta Djallon) + Mandinka + Susu", es: "Francés (oficial) + pular (Fouta Djalon) + mandinga + susú" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/E — 220 V (coupures fréquentes, prévoir batterie)", en: "Type C/E — 220 V (frequent outages, bring a battery pack)", es: "Tipo C/E — 220 V (cortes frecuentes, llevar batería externa)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarial REQUIRED + yellow fever REQUIRED — bottled water only", es: "Antipalúdico OBLIGATORIO + fiebre amarilla OBLIGATORIA — solo agua embotellada" } },
    { icon: "🏔️", label: { fr: "Fouta Djalon", en: "Fouta Djallon", es: "Fouta Djalon" }, value: { fr: "Fraîche la nuit (10–15°C en altitude) — prévoir une veste légère", en: "Cool at night (10–15°C at altitude) — bring a light jacket", es: "Fresco por la noche (10–15°C en altitud) — llevar una chaqueta ligera" } },
    { icon: "🔒", label: { fr: "Sécurité", en: "Safety", es: "Seguridad" }, value: { fr: "Situation politique à surveiller — consulter le Quai d'Orsay avant le départ", en: "Political situation to monitor — check the French Foreign Ministry advice before departure", es: "Situación política a vigilar — consultar las recomendaciones oficiales antes de partir" } },
  ],
};
