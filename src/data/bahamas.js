export const BAHAMAS = {
  code: "BHS",
  numericId: 44,
  name: { fr: "Bahamas", en: "Bahamas", es: "Bahamas", de: "Bahamas" },
  emoji: "🇧🇸",
  capital: { fr: "Nassau", en: "Nassau", es: "Nasáu", de: "Nassau" },
  language: { fr: "Anglais", en: "English", es: "Inglés", de: "Englisch" },
  currency: { fr: "Dollar des Bahamas (BSD)", en: "Bahamian dollar (BSD)", es: "Dólar bahameño (BSD)", de: "Bahama-Dollar (BSD)" },
  timezone: "UTC-5",
  filter: { budgetMin: 100, budgetMid: 200, tripMin: 1800, tripMid: 3500 },
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
  },
  description: {
    fr: "L'archipel des Bahamas s'étend sur plus de 700 îles et îlots dispersés entre la Floride et Cuba, offrant certaines des eaux les plus transparentes et les plus colorées du monde, des bleus électriques aux turquoises éclatants. Nassau, la capitale animée, mêle resorts luxueux, culture junkanoo et histoire coloniale, tandis que les îles extérieures (Out Islands) comme les Exumas ou Eleuthera offrent une solitude paradisiaque à quelques minutes d'avion. Les Bahamas sont aussi réputées pour leur faune marine exceptionnelle : requins des récifs, raies, dauphins sauvages et les célèbres cochons nageurs d'Exuma.", en: "The Bahamian archipelago stretches across more than 700 islands and cays scattered between Florida and Cuba, offering some of the clearest and most vividly coloured waters in the world, from electric blues to dazzling turquoise. Nassau, the lively capital, blends luxury resorts, Junkanoo culture and colonial history, while the Out Islands such as the Exumas and Eleuthera offer blissful seclusion just a short flight away. The Bahamas are also renowned for their exceptional marine life: reef sharks, rays, wild dolphins and Exuma's famous swimming pigs.", es: "El archipiélago de las Bahamas se extiende por más de 700 islas e islotes dispersos entre Florida y Cuba, ofreciendo algunas de las aguas más transparentes y coloridas del mundo, de azules eléctricos a turquesas deslumbrantes. Nasáu, la animada capital, combina resorts de lujo, cultura junkanoo e historia colonial, mientras que las islas exteriores (Out Islands) como los Exumas o Eleuthera ofrecen una soledad paradisíaca a pocos minutos de avión. Las Bahamas también son célebres por su fauna marina excepcional: tiburones de arrecife, rayas, delfines salvajes y los famosos cerdos nadadores de Exuma.", de: "Der Bahamas-Archipel erstreckt sich über mehr als 700 Inseln und Inselchen, die zwischen Florida und Kuba verstreut sind, und bietet einige der transparentesten und farbenfrohsten Gewässer der Welt, von leuchtendem Blau bis hin zu leuchtendem Türkis. Nassau, die geschäftige Hauptstadt, vereint luxuriöse Resorts, Junkanoo-Kultur und Kolonialgeschichte, während die Außeninseln (Out Islands) wie die Exumas oder Eleuthera himmlische Einsamkeit bieten, die nur wenige Flugminuten entfernt liegt. Die Bahamas sind auch für ihre außergewöhnliche Meerestierwelt bekannt: Riffhaie, Rochen, wilde Delfine und die berühmten schwimmenden Schweine von Exuma.",
  },
  bestPeriods: [
    {
      months: { fr: "Déc – Mai", en: "December – May", es: "Dic – May", de: "Dezember – Mai" },
      label: { fr: "Haute saison", en: "High season", es: "Temporada alta", de: "Hochsaison" },
      color: "#22c55e",
      description: {
        fr: "Temps sec et ensoleillé, eaux calmes, températures idéales — réserver longtemps à l'avance", en: "Dry, sunny weather, calm waters and ideal temperatures — book well in advance", es: "Tiempo seco y soleado, aguas tranquilas, temperaturas ideales — reservar con mucha antelación", de: "Trockenes, sonniges Wetter, ruhiges Wasser, ideale Temperaturen – buchen Sie rechtzeitig",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Jun – Nov", en: "June – November", es: "Jun – Nov", de: "Juni – Nov" },
      label: { fr: "Saison cyclonique", en: "Hurricane season", es: "Temporada de huracanes", de: "Hurrikansaison" },
      color: "#f59e0b",
      description: {
        fr: "Prix réduits, moins de touristes, mais risque significatif d'ouragans — vérifier les prévisions", en: "Lower prices and fewer tourists, but a significant hurricane risk — check forecasts carefully", es: "Precios reducidos, menos turistas, pero riesgo significativo de huracanes — comprobar las previsiones", de: "Reduzierte Preise, weniger Touristen, aber erhebliches Hurrikanrisiko – prüfen Sie die Prognosen",
      },
      icon: "🌀",
    },
  ],
  weatherCities: [
    {
      id: "nassau",
      name: "Nassau",
      region: { fr: "New Providence", en: "New Providence", es: "New Providence", de: "Neue Vorsehung" },
      data: [
        { month: "Jan", temp: 22, rain: 40, icon: "☀️" },
        { month: "Fév", temp: 22, rain: 38, icon: "☀️" },
        { month: "Mar", temp: 23, rain: 40, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 140, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 65, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 50, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Nassau & Paradise Island", en: "Nassau & Paradise Island", es: "Nasáu y Paradise Island", de: "Nassau und Paradiesinsel" },
      region: { fr: "New Providence", en: "New Providence", es: "New Providence", de: "Neue Vorsehung" },
      description: {
        fr: "Nassau, capitale des Bahamas, est une ville animée où les demeures coloniales pastel côtoient les casinos et les bateaux de croisière géants. Le quartier historique offre des rues colorées, le marché artisanal de Straw Market et les fortifications britanniques du XVIIIe siècle. Paradise Island, reliée par pont, abrite l'Atlantis Resort avec son parc aquatique spectaculaire, ses aquariums ouverts et ses plages de sable blanc.", en: "Nassau, the capital of the Bahamas, is a lively city where pastel colonial mansions sit alongside casinos and giant cruise ships. The historic district features colourful streets, the Straw Market craft market and 18th-century British fortifications. Connected by bridge, Paradise Island is home to Atlantis Resort, with its spectacular water park, open-air aquariums and white-sand beaches.", es: "Nasáu, capital de las Bahamas, es una ciudad animada donde las mansiones coloniales pastel conviven con casinos y enormes cruceros. El barrio histórico ofrece calles coloridas, el mercado artesanal de Straw Market y las fortificaciones británicas del siglo XVIII. Paradise Island, conectada por un puente, alberga el Atlantis Resort con su espectacular parque acuático, sus acuarios abiertos y sus playas de arena blanca.", de: "Nassau, die Hauptstadt der Bahamas, ist eine lebhafte Stadt, in der pastellfarbene Kolonialvillen neben Casinos und riesigen Kreuzfahrtschiffen liegen. Das historische Viertel bietet farbenfrohe Straßen, den Kunsthandwerksmarkt Straw Market und britische Befestigungsanlagen aus dem 18. Jahrhundert. Paradise Island ist durch eine Brücke verbunden und beherbergt das Atlantis Resort mit seinem spektakulären Wasserpark, offenen Aquarien und weißen Sandstränden.",
      },
      wikipedia: "Nassau,_Bahamas",
      tags: ["Plage", "Culture", "Nightlife", "Histoire"],
      mustSee: [
        {
          name: { fr: "Fort Fincastle et Queen's Staircase — escalier taillé dans le corail", en: "Fort Fincastle and Queen's Staircase — staircase carved into coral", es: "Fort Fincastle y Queen's Staircase — escalera tallada en coral", de: "Fort Fincastle und Queen's Staircase – in die Koralle gehauene Treppe" },
          wikipedia: "File:Bahamas - Nassau, Queens Staircase - panoramio.jpg",
        },
        {
          name: { fr: "Cable Beach — plage urbaine avec hôtels en bord de mer", en: "Cable Beach — urban beach lined with seafront hotels", es: "Cable Beach — playa urbana con hoteles frente al mar", de: "Cable Beach – Stadtstrand mit Strandhotels" },
          wikipedia: "File:Cable Beach, Torndirrup National Park, April 2022 04.jpg",
        },
        {
          name: { fr: "Atlantis Paradise Island — resort aquatique spectaculaire", en: "Atlantis Paradise Island — spectacular water resort", es: "Atlantis Paradise Island — espectacular resort acuático", de: "Atlantis Paradise Island – spektakuläres Wasserresort" },
          wikipedia: "Atlantis_Paradise_Island",
        },
        {
          name: { fr: "Bay Street — shopping colonial et marché artisanal", en: "Bay Street — colonial shopping street and craft market", es: "Bay Street — compras coloniales y mercado artesanal", de: "Bay Street – Einkaufs- und Kunsthandwerksmarkt im Kolonialstil" },
          wikipedia: "Nassau,_Bahamas",
        },
      ],
    },
    {
      id: 2,
      name: "Exuma Cays",
      region: { fr: "Exumas", en: "Exumas", es: "Exumas", de: "Exumas" },
      description: {
        fr: "Les Exumas sont un archipel d'îlots sauvages aux eaux d'un bleu irréel, mondialement célèbre pour ses cochons nageurs de Big Major Cay, ses requins nourrices de Compass Cay et ses raies géantes de Stingray City. L'Exuma Land and Sea Park, l'un des premiers parcs marins protégés de l'Atlantique, abrite des coraux en excellent état et une biodiversité marine exceptionnelle. George Town, chef-lieu paisible, est un point de départ idéal pour explorer l'archipel en catamaran.", en: "The Exumas are an archipelago of wild cays with unreal blue waters, world-famous for the swimming pigs of Big Major Cay, the nurse sharks of Compass Cay and the giant rays of Stingray City. Exuma Land and Sea Park, one of the Atlantic's first protected marine parks, is home to healthy coral and outstanding marine biodiversity. The peaceful town of George Town is an ideal base for exploring the archipelago by catamaran.", es: "Los Exumas son un archipiélago de islotes salvajes de aguas de un azul irreal, mundialmente célebre por los cerdos nadadores de Big Major Cay, los tiburones nodriza de Compass Cay y las rayas gigantes de Stingray City. El Exuma Land and Sea Park, uno de los primeros parques marinos protegidos del Atlántico, alberga corales en excelente estado y una biodiversidad marina excepcional. George Town, tranquila capital, es un punto de partida ideal para explorar el archipiélago en catamarán.", de: "Die Exumas sind ein Archipel wilder Inseln mit unwirklich blauem Wasser, weltberühmt für die schwimmenden Schweine von Big Major Cay, die Ammenhaie von Compass Cay und die Riesenrochen von Stingray City. Der Exuma Land and Sea Park, einer der ersten geschützten Meeresparks im Atlantik, beherbergt Korallen in ausgezeichnetem Zustand und eine außergewöhnliche Meeresbiodiversität. George Town, eine friedliche Hauptstadt, ist ein idealer Ausgangspunkt für die Erkundung des Archipels mit dem Katamaran.",
      },
      wikipedia: "File:Emerald bay great exuma bahamas.jpg",
      tags: ["Plage", "Safari", "Aventure"],
      mustSee: [
        {
          name: { fr: "Cochons nageurs de Big Major Cay — unique au monde", en: "Big Major Cay swimming pigs — one of a kind", es: "Cerdos nadadores de Big Major Cay — únicos en el mundo", de: "Schwimmende Schweine von Big Major Cay – einzigartig auf der Welt" },
          wikipedia: "File:Pigs and gulls on the beach.jpg",
        },
        {
          name: { fr: "Exuma Land and Sea Park — premier parc marin protégé de l'Atlantique", en: "Exuma Land and Sea Park — the Atlantic's first protected marine park", es: "Exuma Land and Sea Park — primer parque marino protegido del Atlántico", de: "Exuma Land and Sea Park – der erste geschützte Meerespark im Atlantik" },
          wikipedia: "Exuma_Cays_Land_and_Sea_Park",
        },
        { name: "Thunderball Grotto", wikipedia: "File:Mary_938.JPG" },
      ],
    },
    {
      id: 3,
      name: { fr: "Eleuthera & Harbour Island", en: "Eleuthera & Harbour Island", es: "Eleuthera y Harbour Island", de: "Eleuthera und Harbour Island" },
      region: { fr: "Eleuthera", en: "Eleuthera", es: "Eleuthera", de: "Eleuthera" },
      description: {
        fr: "Eleuthera est une île longue et fine réputée pour ses plages de sable rose, phénomène naturel dû aux foraminifères microscopiques brisés par les vagues. Harbour Island, minuscule îlot accessible en water taxi, est considérée comme l'une des plus belles adresses des Caraïbes avec sa célèbre Pink Sand Beach et ses maisons en bois pastel. Glass Window Bridge, point le plus étroit de l'île, offre la vue saisissante de l'Atlantique sombre d'un côté et des eaux turquoise des Caraïbes de l'autre.", en: "Eleuthera is a long, slender island famed for its pink-sand beaches, a natural phenomenon caused by microscopic foraminifera broken up by the waves. Harbour Island, a tiny islet reached by water taxi, is considered one of the Caribbean's most beautiful hideaways, with its famous Pink Sand Beach and pastel wooden houses. Glass Window Bridge, the island's narrowest point, offers a striking view of the dark Atlantic on one side and the turquoise Caribbean waters on the other.", es: "Eleuthera es una isla larga y estrecha famosa por sus playas de arena rosa, un fenómeno natural causado por foraminíferos microscópicos triturados por las olas. Harbour Island, un islote minúsculo accesible en taxi acuático, está considerada uno de los rincones más bellos del Caribe, con su célebre Pink Sand Beach y sus casas de madera pastel. Glass Window Bridge, el punto más estrecho de la isla, ofrece una vista impresionante del oscuro Atlántico por un lado y las aguas turquesas del Caribe por el otro.", de: "Eleuthera ist eine lange, schmale Insel, die für ihre rosa Sandstrände bekannt ist, ein Naturphänomen, das auf mikroskopisch kleine Foraminiferen zurückzuführen ist, die von den Wellen aufgebrochen werden. Harbour Island, eine winzige Insel, die mit dem Wassertaxi erreichbar ist, gilt mit seinem berühmten Pink Sand Beach und seinen pastellfarbenen Holzhäusern als eine der schönsten Adressen in der Karibik. Die Glass Window Bridge, die engste Stelle der Insel, bietet atemberaubende Ausblicke auf den dunklen Atlantik auf der einen Seite und das türkisfarbene Wasser der Karibik auf der anderen Seite.",
      },
      wikipedia: "File:Eleuthera.jpg",
      tags: ["Plage", "Luxe", "Culture"],
      mustSee: [
        {
          name: { fr: "Pink Sand Beach (Harbour Island) — sable rose unique", en: "Pink Sand Beach (Harbour Island) — uniquely pink sand", es: "Pink Sand Beach (Harbour Island) — arena rosa única", de: "Pink Sand Beach (Harbor Island) – einzigartiger rosa Sand" },
          wikipedia: "File:Beachsunsetdog.jpg",
        },
        {
          name: { fr: "Dunmore Town — village colonial aux maisons de couleur", en: "Dunmore Town — colonial village with colourful houses", es: "Dunmore Town — pueblo colonial de casas coloridas", de: "Dunmore Town – Kolonialdorf mit bunten Häusern" },
          wikipedia: "File:Bahamas_1989_(339)_Eleuthera_Dunmore_Town,_Harbour_Island_(24293986816).jpg",
        },
        {
          name: { fr: "Current Cut — passage rapide pour plongée en dérive", en: "Current Cut — swift channel for drift diving", es: "Current Cut — canal rápido para buceo a la deriva", de: "Current Cut – schneller Schnitt für Strömungstauchen" },
          wikipedia: "File:Eleuthera.jpg",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Grand Bahama & Freeport", en: "Grand Bahama & Freeport", es: "Grand Bahama y Freeport", de: "Grand Bahama und Freeport" },
      region: { fr: "Grand Bahama", en: "Grand Bahama", es: "Grand Bahama", de: "Grand Bahama" },
      description: {
        fr: "Grand Bahama est la quatrième île en superficie de l'archipel et la plus accessible depuis la Floride, à seulement 90 km de Palm Beach. Le Lucayan National Park abrite l'un des plus longs systèmes de grottes sous-marines du monde, ainsi que des mangroves préservées. Les centres de plongée de Freeport proposent des excursions vers des épaves et des récifs coralliens en excellente santé, avec une forte présence de dauphins sauvages.", en: "Grand Bahama is the archipelago's fourth-largest island and the easiest to reach from Florida, just 90 km from Palm Beach. Lucayan National Park contains one of the world's longest underwater cave systems as well as unspoiled mangroves. Freeport's dive centres offer trips to wrecks and coral reefs in excellent condition, with frequent sightings of wild dolphins.", es: "Grand Bahama es la cuarta isla en superficie del archipiélago y la más accesible desde Florida, a solo 90 km de Palm Beach. El Lucayan National Park alberga uno de los sistemas de cuevas submarinas más largos del mundo, además de manglares preservados. Los centros de buceo de Freeport ofrecen excursiones a pecios y arrecifes de coral en excelente estado, con una fuerte presencia de delfines salvajes.", de: "Grand Bahama ist die viertgrößte Insel des Archipels und von Florida aus am besten erreichbar, nur 90 km von Palm Beach entfernt. Der Lucayan-Nationalpark beherbergt eines der längsten Unterwasserhöhlensysteme der Welt sowie erhaltene Mangroven. Freeport-Tauchzentren bieten Ausflüge zu Wracks und Korallenriffen in ausgezeichnetem Gesundheitszustand mit einer starken Präsenz wilder Delfine an.",
      },
      wikipedia: "Grand_Bahama",
      tags: ["Plage", "Nature"],
      mustSee: [
        {
          name: { fr: "Lucayan National Park — grottes sous-marines et mangroves", en: "Lucayan National Park — underwater caves and mangroves", es: "Lucayan National Park — cuevas submarinas y manglares", de: "Lucayan-Nationalpark – Unterwasserhöhlen und Mangroven" },
          wikipedia: "Lucayan_National_Park",
        },
        {
          name: { fr: "UNEXSO — centre de plongée avec dauphins sauvages", en: "UNEXSO — dive centre with wild dolphins", es: "UNEXSO — centro de buceo con delfines salvajes", de: "UNEXSO – Tauchzentrum mit wilden Delfinen" },
          wikipedia: "File:Grand Bahama Island (Little Bahama Bank) 4.jpg",
        },
        {
          name: { fr: "Gold Rock Beach — plage isolée aux eaux cristallines", en: "Gold Rock Beach — secluded beach with crystal-clear water", es: "Gold Rock Beach — playa aislada de aguas cristalinas", de: "Gold Rock Beach – abgeschiedener Strand mit kristallklarem Wasser" },
          wikipedia: "File:Gold_Rock_Beach_Grand_Bahama_Island.jpg",
        },
        {
          name: { fr: "Freeport International Bazaar — marché artisanal couvert", en: "Freeport International Bazaar — covered craft market", es: "Freeport International Bazaar — mercado artesanal cubierto", de: "Freeport International Bazaar – Indoor-Kunsthandwerksmarkt" },
          wikipedia: "Freeport,_Bahamas",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Les Bahamas font partie des destinations caribéennes les plus chères, notamment en raison de leur proximité avec les États-Unis et de leur économie orientée vers le tourisme de luxe. Les îles extérieures (Out Islands) sont souvent moins onéreuses que Nassau.", en: "The Bahamas are among the Caribbean's most expensive destinations, largely because of their proximity to the United States and an economy geared towards luxury tourism. The Out Islands are often less expensive than Nassau.", es: "Las Bahamas están entre los destinos más caros del Caribe, principalmente por su proximidad a Estados Unidos y su economía orientada al turismo de lujo. Las islas exteriores (Out Islands) suelen ser menos costosas que Nasáu.", de: "Die Bahamas gehören zu den teuersten Reisezielen in der Karibik, insbesondere aufgrund ihrer Nähe zu den Vereinigten Staaten und ihrer auf Luxustourismus ausgerichteten Wirtschaft. Die Out Islands sind oft günstiger als Nassau.",
    },
    currency: "BSD",
    exchangeRate: "1€ ≈ 1,08 BSD (parité quasi-fixe avec le dollar américain)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Petit hôtel / guesthouse", en: "Small hotel / guesthouse", es: "Hotel pequeño / casa de huéspedes", de: "Kleines Hotel/Pension" }, price: "80–130 €" },
          { label: { fr: "Hôtel de confort intermédiaire", en: "Mid-range hotel", es: "Hotel de gama media", de: "Mittelklasse-Komforthotel" }, price: "150–250 €" },
          { label: { fr: "Resort balnéaire haut de gamme", en: "High-end beach resort", es: "Resort de playa de alta gama", de: "Gehobenes Strandresort" }, price: "300–600 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Fish fry local (langouste grillée, conch)", en: "Local fish fry (grilled lobster, conch)", es: "Fish fry local (langosta a la parrilla, caracola)", de: "Lokaler Fischbraten (gegrillter Hummer, Muschel)" }, price: "12–20 €" },
          { label: { fr: "Restaurant intermédiaire", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelschweres Restaurant" }, price: "25–45 €" },
          { label: { fr: "Dîner gastronomique dans un resort", en: "Fine-dining dinner in a resort", es: "Cena gastronómica en un resort", de: "Gourmet-Abendessen in einem Resort" }, price: "60–120 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Jitney (bus local à Nassau)", en: "Jitney (local bus in Nassau)", es: "Jitney (autobús local en Nasáu)", de: "Jitney (örtlicher Bus in Nassau)" }, price: "1–2 €" },
          { label: { fr: "Vol inter-îles (Nassau–Exuma)", en: "Inter-island flight (Nassau–Exuma)", es: "Vuelo interislas (Nasáu–Exuma)", de: "Flug zwischen den Inseln (Nassau–Exuma)" }, price: "80–200 € A/R" },
          { label: { fr: "Location de voiture / jour", en: "Car rental / day", es: "Alquiler de coche / día", de: "Autovermietung / Tag" }, price: "50–100 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Excursion cochons nageurs (Exuma, journée)", en: "Swimming pigs excursion (Exuma, full day)", es: "Excursión a los cerdos nadadores (Exuma, día completo)", de: "Schwimmender Schweineausflug (Exuma, Tag)" }, price: "80–150 €" },
          { label: { fr: "Plongée (2 bouteilles + équipement)", en: "Diving (2 tanks + gear)", es: "Buceo (2 botellas + equipo)", de: "Tauchen (2 Flaschen + Ausrüstung)" }, price: "80–120 €" },
          { label: { fr: "Bateau privatisé pour snorkeling", en: "Private boat for snorkelling", es: "Barco privado para esnórquel", de: "Privates Boot zum Schnorcheln" }, price: "100–200 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "100–150 €/j",
        desc: { fr: "Guesthouse, fish fry local, jitneys et ferrys, snorkeling sans guide", en: "Guesthouse, local fish fry, jitneys and ferries, unguided snorkelling", es: "Casa de huéspedes, fish fry local, jitneys y ferris, esnórquel sin guía", de: "Gästehaus, lokale Fischbrut, Jitneys und Fähren, Schnorcheln ohne Führer" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "200–400 €/j",
        desc: { fr: "Resort en bord de mer, restaurants variés, excursions guidées, vols inter-îles", en: "Seafront resort, varied restaurants, guided excursions, inter-island flights", es: "Resort frente al mar, restaurantes variados, excursiones guiadas, vuelos interislas", de: "Strandresort, abwechslungsreiche Restaurants, geführte Ausflüge, Flüge zwischen den Inseln" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Nassau (3j) → Exumas (4j, cochons nageurs + snorkeling) → Eleuthera/Harbour Island (3j)", en: "Nassau (3d) → Exumas (4d, swimming pigs + snorkelling) → Eleuthera/Harbour Island (3d)", es: "Nasáu (3d) → Exumas (4d, cerdos nadadores + esnórquel) → Eleuthera/Harbour Island (3d)", de: "Nassau (3 Tage) → Exumas (4 Tage, schwimmende Schweine + Schnorcheln) → Eleuthera/Harbour Island (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nassau", en: "Return flight Paris–Nassau", es: "Vuelo ida y vuelta Madrid–Nasáu", de: "Hin- und Rückflug Paris–Nassau" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)", de: "Unterkunft (9 Nächte)" }, amount: "720–1 170 €" },
            { label: { fr: "Vols inter-îles + ferrys", en: "Inter-island flights + ferries", es: "Vuelos interislas + ferris", de: "Flüge zwischen den Inseln + Fähren" }, amount: "200–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "180–300 €" },
            { label: { fr: "Activités + excursions", en: "Activities + excursions", es: "Actividades + excursiones", de: "Aktivitäten + Ausflüge" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nassau", en: "Return flight Paris–Nassau", es: "Vuelo ida y vuelta Madrid–Nasáu", de: "Hin- und Rückflug Paris–Nassau" }, amount: "900–1 300 €" },
            { label: { fr: "Hébergement (9 nuits, resorts)", en: "Accommodation (9 nights, resorts)", es: "Alojamiento (9 noches, resorts)", de: "Unterkunft (9 Nächte, Resorts)" }, amount: "1 800–3 000 €" },
            { label: { fr: "Transports + vols inter-îles", en: "Transport + inter-island flights", es: "Transporte + vuelos interislas", de: "Transport + Flüge zwischen den Inseln" }, amount: "350–600 €" },
            { label: { fr: "Nourriture + restaurants", en: "Food + restaurants", es: "Comida + restaurantes", de: "Essen + Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités guidées + plongée", en: "Guided activities + diving", es: "Actividades guiadas + buceo", de: "Geführte Aktivitäten + Tauchen" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" },
      value: { fr: "10–13h avec escale (Miami, New York ou Atlanta — American Airlines, Delta, Air France)", en: "10–13h with a stopover (Miami, New York or Atlanta — American Airlines, Delta, Air France)", es: "10–13h con escala (Miami, Nueva York o Atlanta — American Airlines, Delta, Air France)", de: "10–13 Stunden mit Zwischenstopp (Miami, New York oder Atlanta – American Airlines, Delta, Air France)" },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" },
      value: { fr: "Pas de visa requis pour les Français (séjour ≤ 90 jours) — passeport valide 6 mois minimum", en: "No visa required for French citizens (stay ≤ 90 days) — passport valid for at least 6 months", es: "Sin visado requerido para españoles (estancia ≤ 90 días) — pasaporte válido mínimo 6 meses", de: "Für Franzosen ist kein Visum erforderlich (Aufenthalt ≤ 90 Tage) – Reisepass mindestens 6 Monate gültig" },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" },
      value: { fr: "Dollar bahamien (BSD, parité 1:1 avec le USD) — USD accepté partout, cartes bancaires généralisées", en: "Bahamian dollar (BSD, 1:1 peg with the US dollar) — USD accepted everywhere, card payments widely used", es: "Dólar bahameño (BSD, paridad 1:1 con el USD) — USD aceptado en todas partes, tarjetas muy extendidas", de: "Bahama-Dollar (BSD, Parität 1:1 mit USD) – USD wird überall akzeptiert, Bankkarten sind weit verbreitet" },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" },
      value: { fr: "Anglais (officiel) — créole bahamien dans les milieux locaux", en: "English (official) — Bahamian Creole in local communities", es: "Inglés (oficial) — criollo bahameño en ambientes locales", de: "Englisch (offiziell) – Bahamaisches Kreolisch in lokalen Kreisen" },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" },
      value: { fr: "Type A/B (120V, 60Hz) — adaptateur nécessaire pour les Européens", en: "Type A/B (120V, 60Hz) — adapter needed for European travellers", es: "Tipo A/B (120V, 60Hz) — adaptador necesario para europeos", de: "Typ A/B (120 V, 60 Hz) – Adapter für Europäer erforderlich" },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" },
      value: { fr: "Pas de vaccins tropicaux requis. Dengue présente — protection anti-moustiques recommandée. Crème solaire biodégradable conseillée pour préserver les récifs.", en: "No tropical vaccines required. Dengue is present — mosquito protection is recommended. Reef-safe sunscreen is advised to help preserve the coral reefs.", es: "No se requieren vacunas tropicales. Presencia de dengue — se recomienda protección antimosquitos. Se aconseja crema solar biodegradable para preservar los arrecifes.", de: "Keine Tropenimpfung erforderlich. Dengue-Fieber vorhanden – Mückenschutz empfohlen. Zur Erhaltung der Riffe wird biologisch abbaubarer Sonnenschutz empfohlen." },
    },
    {
      icon: "🌀",
      label: { fr: "Cyclones", en: "Hurricanes", es: "Huracanes", de: "Zyklone" },
      value: { fr: "Saison cyclonique juin–novembre — risque réel, éviter ou souscrire une assurance annulation solide", en: "Hurricane season runs from June to November — the risk is real, so either avoid this period or take out strong cancellation cover", es: "Temporada de huracanes junio–noviembre — riesgo real, evitar esta época o contratar un buen seguro de cancelación", de: "Hurrikansaison Juni–November – echtes Risiko, vermeiden Sie es oder schließen Sie eine solide Reiserücktrittsversicherung ab" },
    },
    {
      icon: "🐠",
      label: { fr: "Plongée", en: "Diving", es: "Buceo", de: "Tauchen" },
      value: { fr: "Certains sites interdisent les crèmes solaires chimiques — utiliser des protections minérales pour protéger les coraux", en: "Some sites ban chemical sunscreens — use mineral protection to help safeguard the coral", es: "Algunos sitios prohíben las cremas solares químicas — usar protección mineral para proteger los corales", de: "Auf einigen Websites sind chemische Sonnenschutzmittel verboten. Verwenden Sie zum Schutz der Korallen mineralische Sonnenschutzmittel" },
    },
  ],
};
