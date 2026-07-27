export const NIGERIA = {
  code: "NGA",
  numericId: 566,
  name: { fr: "Nigéria", en: "Nigeria", es: "Nigeria", de: "Nigeria" },
  emoji: "🇳🇬",
  capital: { fr: "Abuja", en: "Abuja", es: "Abuya", de: "Abuja" },
  language: { fr: "Anglais, Haoussa, Yoruba, Igbo", en: "English, Hausa, Yoruba, Igbo", es: "Inglés, hausa, yoruba, igbo", de: "Englisch, Hausa, Yoruba, Igbo" },
  currency: { fr: "Naira (NGN)", en: "Naira (NGN)", es: "Naira (NGN)", de: "Naira (NGN)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 40, budgetMid: 85,
    tripMin: 900, tripMid: 1900,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 2,
    plongee: 1,
  },
  description: {
    fr: "Le Nigéria est la première économie d'Afrique et le pays le plus peuplé du continent. Entre la mégalopole trépidante de Lagos, la capitale moderne d'Abuja, les réserves animalières de Yankari et l'héritage artistique millénaire du royaume de Bénin, le pays offre une diversité fascinante rarement explorée par les voyageurs.", en: "Nigeria is Africa's largest economy and the continent's most populous country. Between the bustling megacity of Lagos, the modern capital Abuja, the Yankari wildlife reserve and the centuries-old artistic legacy of the Kingdom of Benin, the country offers a fascinating diversity rarely explored by travellers.", es: "Nigeria es la primera economía de África y el país más poblado del continente. Entre la trepidante megalópolis de Lagos, la moderna capital Abuya, las reservas de fauna de Yankari y el legado artístico milenario del reino de Benín, el país ofrece una diversidad fascinante rara vez explorada por los viajeros.", de: "Nigeria ist Afrikas größte Volkswirtschaft und das bevölkerungsreichste Land des Kontinents. Zwischen der geschäftigen Metropole Lagos, der modernen Hauptstadt Abuja, den Wildreservaten von Yankari und dem jahrtausendealten künstlerischen Erbe des Königreichs Benin bietet das Land eine faszinierende Vielfalt, die von Reisenden selten erkundet wird.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March", es: "Noviembre – Marzo", de: "November – März" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche avec l'harmattan du nord. Températures agréables, pas de pluie, idéal pour visiter les parcs nationaux et les villes. Meilleure période pour les safaris à Yankari.", en: "Dry season with the harmattan wind from the north. Pleasant temperatures, no rain, ideal for visiting national parks and cities. Best period for safaris in Yankari.", es: "Estación seca con el harmatán procedente del norte. Temperaturas agradables, sin lluvia, ideal para visitar los parques nacionales y las ciudades. Mejor época para los safaris en Yankari.", de: "Trockenzeit mit dem nördlichen Harmattan. Angenehme Temperaturen, kein Regen, ideal für den Besuch von Nationalparks und Städten. Beste Zeit für Safaris in Yankari.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avril – Juin", en: "April – June", es: "Abril – Junio", de: "April – Juni" },
      label: { fr: "Début de saison des pluies", en: "Start of the rainy season", es: "Inicio de la estación de lluvias", de: "Beginn der Regenzeit" },
      color: "#f59e0b",
      description: {
        fr: "Les pluies commencent progressivement. La végétation verdit, les parcs sont encore accessibles. Éviter juillet-octobre au sud (Lagos très humide).", en: "Rains gradually begin. The vegetation turns green, the parks are still accessible. Avoid July-October in the south (Lagos very humid).", es: "Las lluvias comienzan progresivamente. La vegetación reverdece, los parques siguen siendo accesibles. Evitar julio-octubre en el sur (Lagos muy húmedo).", de: "Der Regen beginnt allmählich. Die Vegetation wird grüner, die Parks sind weiterhin zugänglich. Vermeiden Sie Juli-Oktober im Süden (Lagos ist sehr feucht).",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "lagos",
      name: "Lagos",
      region: { fr: "Lagos (côte)", en: "Lagos (coast)", es: "Lagos (costa)", de: "Lagos (Küste)" },
      data: [
        { month: "Jan", temp: 27, rain: 35,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 45,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 190, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 280, icon: "⛅" },
        { month: "Jul", temp: 25, rain: 320, icon: "⛅" },
        { month: "Aoû", temp: 24, rain: 210, icon: "⛅" },
        { month: "Sep", temp: 25, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 26, rain: 150, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 25,  icon: "⛅" },
      ],
    },
    {
      id: "abuja",
      name: "Abuja",
      region: { fr: "Territoire de la capitale fédérale (intérieur)", en: "Federal Capital Territory (inland)", es: "Territorio de la Capital Federal (interior)", de: "Bundeshauptstadtterritorium (Innenraum)" },
      data: [
        { month: "Jan", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 30, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 31, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 230, icon: "⛅" },
        { month: "Aoû", temp: 24, rain: 270, icon: "⛅" },
        { month: "Sep", temp: 25, rain: 220, icon: "⛅" },
        { month: "Oct", temp: 27, rain: 85,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lagos",
      region: { fr: "Lagos", en: "Lagos", es: "Lagos", de: "Lagos" },
      description: {
        fr: "Lagos est la plus grande ville d'Afrique, une mégalopole de plus de 20 millions d'habitants débordant d'énergie, de culture et de contrastes. Le marché de Lekki, la plage de Bar Beach, le National Museum et la scène musicale afrobeats en font une destination unique au monde.", en: "Lagos is Africa's largest city, a megacity of over 20 million people brimming with energy, culture and contrasts. Lekki Market, Bar Beach, the National Museum and the afrobeats music scene make it a one-of-a-kind destination.", es: "Lagos es la ciudad más grande de África, una megalópolis de más de 20 millones de habitantes que rebosa energía, cultura y contrastes. El mercado de Lekki, la playa de Bar Beach, el Museo Nacional y la escena musical afrobeats la convierten en un destino único en el mundo.", de: "Lagos ist die größte Stadt Afrikas, eine Megalopolis mit mehr als 20 Millionen Einwohnern voller Energie, Kultur und Kontrasten. Der Lekki-Markt, der Bar Beach, das Nationalmuseum und die Afrobeats-Musikszene machen es zu einem einzigartigen Reiseziel auf der Welt.",
      },
      wikipedia: "Lagos",
      tags: ["Ville", "Culture", "Shopping", "Plage", "Gastronomie"],
      mustSee: [
        { name: { fr: "Marché de Lekki — artisanat et tissus", en: "Lekki Market — crafts and fabrics", es: "Mercado de Lekki — artesanía y telas", de: "Lekki-Markt – Kunsthandwerk und Stoffe" }, wikipedia: "File:Shopping District - Lagos Nigeria.jpg" },
        { name: { fr: "Nike Art Gallery — art contemporain nigérian", en: "Nike Art Gallery — contemporary Nigerian art", es: "Nike Art Gallery — arte contemporáneo nigeriano", de: "Nike Art Gallery – zeitgenössische nigerianische Kunst" }, wikipedia: "Nike_Art_Gallery" },
        { name: { fr: "National Museum Lagos — bronzes et ivoires", en: "Lagos National Museum — bronzes and ivories", es: "Museo Nacional de Lagos — bronces y marfiles", de: "Nationalmuseum Lagos – Bronzen und Elfenbein" }, wikipedia: "File:Garden in front of museum (6349971557).jpg" },
        { name: { fr: "Bar Beach & Victoria Island", en: "Bar Beach & Victoria Island", es: "Bar Beach y Victoria Island", de: "Bar Beach und Victoria Island" }, wikipedia: "File:Aerial_view_of_victoria_island_in_Lagos,_Nigeria_with_habours_for_yatches.jpg" },
      ],
    },
    {
      id: 2,
      name: "Abuja",
      region: { fr: "Territoire de la capitale fédérale", en: "Federal Capital Territory", es: "Territorio de la Capital Federal", de: "Bundeshauptstadtterritorium" },
      description: {
        fr: "Abuja, capitale fédérale planifiée depuis les années 1980, impressionne par son architecture moderne et ses monuments grandioses. La mosquée nationale, la cathédrale nationale et le rocher d'Aso Rock offrent un visage très différent du Nigéria.", en: "Abuja, a federal capital planned since the 1980s, impresses with its modern architecture and grand monuments. The National Mosque, the National Cathedral and Aso Rock offer a very different face of Nigeria.", es: "Abuya, capital federal planificada desde la década de 1980, impresiona por su arquitectura moderna y sus monumentos grandiosos. La mezquita nacional, la catedral nacional y la roca de Aso Rock ofrecen un rostro muy distinto de Nigeria.", de: "Abuja, die seit den 1980er Jahren geplante Bundeshauptstadt, beeindruckt mit moderner Architektur und grandiosen Denkmälern. Die Nationalmoschee, die Nationalkathedrale und der Aso-Felsen bieten ein ganz anderes Gesicht Nigerias.",
      },
      wikipedia: "Abuja",
      tags: ["Ville", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Aso Rock — rocher monolithique emblématique", en: "Aso Rock — iconic monolithic outcrop", es: "Aso Rock — roca monolítica emblemática", de: "Aso Rock – ikonischer monolithischer Felsen" }, wikipedia: "Aso_Rock" },
        { name: { fr: "Mosquée nationale du Nigéria", en: "National Mosque of Nigeria", es: "Mezquita Nacional de Nigeria", de: "Nationalmoschee von Nigeria" }, wikipedia: "File:AbujaNationalMosque.jpg" },
        { name: "Millenium Tower & Cultural Centre", wikipedia: "File:Newlea.jpg" },
        { name: { fr: "Musée national d'Abuja", en: "Abuja National Museum", es: "Museo Nacional de Abuya", de: "Nationalmuseum Abuja" }, wikipedia: "Abuja" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national de Yankari", en: "Yankari National Park", es: "Parque nacional de Yankari", de: "Yankari-Nationalpark" },
      region: { fr: "Bauchi", en: "Bauchi", es: "Bauchi", de: "Bauchi" },
      description: {
        fr: "Le parc national de Yankari est la plus grande réserve naturelle du Nigéria. On y observe éléphants, lions, buffles et babouins, avec en bonus les sources d'eau chaude naturelles de Wikki Spring, véritables piscines naturelles dans la brousse.", en: "Yankari National Park is Nigeria's largest nature reserve. Here you can spot elephants, lions, buffalo and baboons, with the added bonus of the natural hot springs of Wikki Spring, true natural pools in the bush.", es: "El parque nacional de Yankari es la mayor reserva natural de Nigeria. Aquí se pueden observar elefantes, leones, búfalos y babuinos, con el añadido de las fuentes termales naturales de Wikki Spring, auténticas piscinas naturales en la sabana.", de: "Der Yankari-Nationalpark ist das größte Naturschutzgebiet in Nigeria. Sie können Elefanten, Löwen, Büffel und Paviane beobachten und als zusätzlichen Bonus die natürlichen Warmwasserquellen von Wikki Spring nutzen, echte natürliche Schwimmbecken im Busch.",
      },
      wikipedia: "File:Wikki warm spring, YANKARI Game Reserve, Bauchi.jpg",
      tags: ["Safari", "Nature", "Détente"],
      mustSee: [
        { name: { fr: "Wikki Spring — sources chaudes cristallines", en: "Wikki Spring — crystal-clear hot springs", es: "Wikki Spring — fuentes termales cristalinas", de: "Wikki Spring – kristallklare heiße Quellen" }, wikipedia: "File:Wikki Warm Spring Lake.jpg" },
        { name: { fr: "Éléphants de savane du parc", en: "The park's savannah elephants", es: "Elefantes de sabana del parque", de: "Savannah-Elefanten im Park" }, wikipedia: "File:Elephants in yankari 2.jpg" },
        { name: { fr: "Marshall Caves — grottes préhistoriques", en: "Marshall Caves — prehistoric caves", es: "Cuevas de Marshall — cuevas prehistóricas", de: "Marshall Caves – prähistorische Höhlen" }, wikipedia: "File:Marshall Caves.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bénin City & Royaume du Bénin", en: "Benin City & the Kingdom of Benin", es: "Benin City y el Reino de Benín", de: "Benin-Stadt und Königreich Benin" },
      region: { fr: "Edo", en: "Edo", es: "Edo", de: "Edo" },
      description: {
        fr: "Bénin City est le berceau de l'un des royaumes les plus sophistiqués d'Afrique précoloniale, célèbre pour ses bronzes et ivoires arrachés par les Britanniques en 1897. Le musée national de Bénin expose ce patrimoine exceptionnel, et certaines pièces commencent à être restituées.", en: "Benin City is the birthplace of one of the most sophisticated kingdoms of pre-colonial Africa, famous for its bronzes and ivories looted by the British in 1897. The Benin National Museum displays this exceptional heritage, and some pieces are beginning to be repatriated.", es: "Benin City es la cuna de uno de los reinos más sofisticados de la África precolonial, célebre por sus bronces y marfiles saqueados por los británicos en 1897. El Museo Nacional de Benín expone este patrimonio excepcional, y algunas piezas empiezan a ser repatriadas.", de: "Benin-Stadt ist die Wiege eines der anspruchsvollsten Königreiche im vorkolonialen Afrika, das für seine 1897 von den Briten geraubten Bronzen und Elfenbeine berühmt ist. Das Nationalmuseum von Benin stellt dieses außergewöhnliche Erbe aus, und bestimmte Stücke werden nun zurückgegeben.",
      },
      wikipedia: "File:Areal view of the ancient city of Benin.jpg",
      tags: ["Histoire", "Art", "Musées", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Musée national de Bénin — bronzes et ivoires", en: "Benin National Museum — bronzes and ivories", es: "Museo Nacional de Benín — bronces y marfiles", de: "Nationalmuseum von Benin – Bronzen und Elfenbein" }, wikipedia: "File:Nat Museum, Benin.jpg" },
        { name: { fr: "Palais royal d'Oba — siège de la monarchie", en: "Oba's Royal Palace — seat of the monarchy", es: "Palacio real del Oba — sede de la monarquía", de: "Königspalast Oba – Sitz der Monarchie" }, wikipedia: "File:Royal_Palace_of_the_Oba_of_Benin_cropped.jpg" },
        { name: { fr: "Ruines des remparts de Bénin (UNESCO proposé)", en: "Ruins of the Benin walls (proposed UNESCO site)", es: "Ruinas de las murallas de Benín (candidatura UNESCO)", de: "Ruinen der Stadtmauer von Benin (UNESCO vorgeschlagen)" }, wikipedia: "File:Benin Moat 1.png" },
        { name: { fr: "Marché de Bénin City", en: "Benin City Market", es: "Mercado de Benin City", de: "Benin-Stadtmarkt" }, wikipedia: "File:New Benin Market, Benin City.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Nigéria présente des coûts très variables selon les villes et le standing choisi. Lagos est l'une des villes les plus chères d'Afrique subsaharienne pour les étrangers, mais la nourriture de rue reste très accessible. Le naira est soumis à des fluctuations importantes.", en: "Nigeria's costs vary widely by city and comfort level. Lagos is one of the most expensive cities in Sub-Saharan Africa for foreigners, but street food remains very affordable. The naira is subject to significant fluctuations.", es: "Los costes en Nigeria varían mucho según la ciudad y el nivel de confort elegido. Lagos es una de las ciudades más caras de África subsahariana para los extranjeros, pero la comida callejera sigue siendo muy accesible. La naira está sujeta a importantes fluctuaciones.", de: "Nigeria hat je nach Stadt und gewähltem Standard sehr unterschiedliche Kosten. Lagos ist für Ausländer eine der teuersten Städte in Subsahara-Afrika, aber Straßenessen sind nach wie vor sehr gut zugänglich. Der Naira unterliegt erheblichen Schwankungen.",
    },
    currency: "NGN",
    exchangeRate: "1€ ≈ 1 800 NGN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / auberge locale", en: "Guesthouse / local hostel", es: "Guesthouse / albergue local", de: "Lokales Gästehaus/Hostel" }, price: "15–30 €", detail: { fr: "En dehors de Lagos", en: "Outside Lagos", es: "Fuera de Lagos", de: "Außerhalb von Lagos" } },
          { label: { fr: "Hôtel 3★ Lagos / Abuja", en: "3★ hotel Lagos / Abuja", es: "Hotel 3★ Lagos / Abuya", de: "Hotel 3★ Lagos / Abuja" }, price: "50–80 €", detail: { fr: "Clim, sécurité, petit-déjeuner", en: "AC, security, breakfast", es: "Aire acondicionado, seguridad, desayuno", de: "Klimaanlage, Sicherheit, Frühstück" } },
          { label: { fr: "Hôtel de charme / lodge", en: "Charming hotel / lodge", es: "Hotel con encanto / lodge", de: "Charmantes Hotel/Lodge" }, price: "90–150 €", detail: { fr: "Yankari, Victoria Island", en: "Yankari, Victoria Island", es: "Yankari, Victoria Island", de: "Yankari, Victoria-Insel" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Suya (brochettes de rue)", en: "Suya (street skewers)", es: "Suya (pinchos callejeros)", de: "Suya (Straßenspieße)" }, price: "1–3 €", detail: { fr: "Incontournable et délicieux", en: "Unmissable and delicious", es: "Imprescindible y delicioso", de: "Unverzichtbar und lecker" } },
          { label: { fr: "Buka (resto local — jollof rice)", en: "Buka (local eatery — jollof rice)", es: "Buka (comedor local — arroz jollof)", de: "Buka (lokales Restaurant – Jollof Rice)" }, price: "3–7 €", detail: { fr: "Repas complet local", en: "Full local meal", es: "Comida local completa", de: "Lokale komplette Mahlzeit" } },
          { label: { fr: "Restaurant touristique Lagos", en: "Tourist restaurant in Lagos", es: "Restaurante turístico en Lagos", de: "Touristenrestaurant Lagos" }, price: "15–35 €", detail: { fr: "Cuisine internationale", en: "International cuisine", es: "Cocina internacional", de: "Internationale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus local (danfo) Lagos", en: "Local bus (danfo) in Lagos", es: "Autobús local (danfo) en Lagos", de: "Lokaler Bus (Danfo) Lagos" }, price: "0,20–0,50 €", detail: { fr: "Minibus jaunes emblématiques", en: "Iconic yellow minibuses", es: "Emblemáticos minibuses amarillos", de: "Ikonische gelbe Kleinbusse" } },
          { label: { fr: "Uber / bolt (Lagos)", en: "Uber / Bolt (Lagos)", es: "Uber / Bolt (Lagos)", de: "Uber/bolt (Lagos)" }, price: "3–10 €", detail: { fr: "Plus sûr que les taxis", en: "Safer than taxis", es: "Más seguro que los taxis", de: "Sicherer als Taxis" } },
          { label: { fr: "Vol domestique Lagos–Abuja", en: "Domestic flight Lagos–Abuja", es: "Vuelo doméstico Lagos–Abuya", de: "Inlandsflug Lagos–Abuja" }, price: "40–80 €", detail: { fr: "1h de vol", en: "1h flight", es: "1h de vuelo", de: "1 Stunde Flug" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée parc Yankari + logement", en: "Yankari Park entry + lodging", es: "Entrada al parque Yankari + alojamiento", de: "Eingang zum Yankari-Park + Unterkunft" }, price: "20–40 €", detail: { fr: "Par personne par nuit", en: "Per person per night", es: "Por persona y noche", de: "Pro Person und Nacht" } },
          { label: { fr: "Visite National Museum Lagos", en: "Lagos National Museum visit", es: "Visita al Museo Nacional de Lagos", de: "Besuchen Sie das Nationalmuseum Lagos" }, price: "2–5 €", detail: { fr: "Entrée + guide", en: "Entry + guide", es: "Entrada + guía", de: "Eintritt + Führung" } },
          { label: { fr: "Excursion en pirogue — Delta Niger", en: "Canoe excursion — Niger Delta", es: "Excursión en piragua — Delta del Níger", de: "Kanuausflug – Nigerdelta" }, price: "30–60 €", detail: { fr: "Demi-journée avec guide", en: "Half day with guide", es: "Medio día con guía", de: "Halber Tag mit Führer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Guesthouse + bouffe locale + transport public", en: "Guesthouse + local food + public transport", es: "Guesthouse + comida local + transporte público", de: "Gästehaus + lokales Essen + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "85–130 €/j", desc: { fr: "Hôtel 3★ + restos + Uber + excursions", en: "3★ hotel + restaurants + Uber + excursions", es: "Hotel 3★ + restaurantes + Uber + excursiones", de: "3★ Hotel + Restaurants + Uber + Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: { fr: "Lagos (3j) → Bénin City (2j) → Abuja (2j) → Yankari (3j)", en: "Lagos (3d) → Benin City (2d) → Abuja (2d) → Yankari (3d)", es: "Lagos (3d) → Benin City (2d) → Abuya (2d) → Yankari (3d)", de: "Lagos (3 Tage) → Benin-Stadt (2 Tage) → Abuja (2 Tage) → Yankari (3 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lagos", en: "Return flight Paris–Lagos", es: "Vuelo ida y vuelta Madrid–Lagos", de: "Hin- und Rückflug Paris–Lagos" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–300 €" },
            { label: { fr: "Transports locaux + vols domestiques", en: "Local transport + domestic flights", es: "Transporte local + vuelos domésticos", de: "Nahverkehr + Inlandsflüge" }, amount: "150–200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "120–180 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees", es: "Actividades + entradas", de: "Aktivitäten + Einträge" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 900 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lagos", en: "Return flight Paris–Lagos", es: "Vuelo ida y vuelta Madrid–Lagos", de: "Hin- und Rückflug Paris–Lagos" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "600–900 €" },
            { label: { fr: "Transports locaux + vols domestiques", en: "Local transport + domestic flights", es: "Transporte local + vuelos domésticos", de: "Nahverkehr + Inlandsflüge" }, amount: "300–450 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "300–400 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías", de: "Aktivitäten + Führer" }, amount: "200–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~6h (Ethiopian Airlines, Air France, Turkish Airlines via escale)", en: "~6h (Ethiopian Airlines, Air France, Turkish Airlines via layover)", es: "~6h (Ethiopian Airlines, Iberia, Turkish Airlines vía escala)", de: "ca. 6 Std. (Ethiopian Airlines, Air France, Turkish Airlines mit Zwischenstopp)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — e-Visa en ligne (~160 USD+). Processus complexe, prévoir plusieurs semaines.", en: "Visa required — e-Visa online (~160 USD+). Complex process, allow several weeks.", es: "Visado obligatorio — e-Visa en línea (~160 USD+). Proceso complejo, prever varias semanas.", de: "Visum erforderlich – E-Visum online (ca. 160 USD+). Komplexer Prozess, mehrere Wochen einplanen." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Naira (NGN) — retrait DAB conseillé, cartes acceptées dans les hôtels", en: "Naira (NGN) — ATM withdrawal recommended, cards accepted at hotels", es: "Naira (NGN) — se recomienda retirar en cajero, tarjetas aceptadas en los hoteles", de: "Naira (NGN) – Abhebung am Geldautomaten empfohlen, Karten werden in Hotels akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (officiel) + Yoruba, Haoussa, Igbo selon la région", en: "English (official) + Yoruba, Hausa, Igbo depending on the region", es: "Inglés (oficial) + yoruba, hausa, igbo según la región", de: "Englisch (offiziell) + Yoruba, Hausa, Igbo je nach Region" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G (comme au Royaume-Uni) — 220 V", en: "Type G (as in the UK) — 220 V", es: "Tipo G (como en el Reino Unido) — 220 V", de: "Typ G (wie im Vereinigten Königreich) – 220 V" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarials MANDATORY + yellow fever vaccine MANDATORY — bottled water only", es: "Antipalúdico OBLIGATORIO + fiebre amarilla OBLIGATORIA — solo agua embotellada", de: "OBLIGATORISCHES Malariamittel + OBLIGATORISCHES Gelbfiebermittel – nur Wasser in Flaschen" } },
    { icon: "🔒", label: { fr: "Sécurité", en: "Safety", es: "Seguridad", de: "Sicherheit" }, value: { fr: "Vigilance élevée à Lagos — éviter les quartiers isolés la nuit, informez-vous avant le voyage", en: "High vigilance in Lagos — avoid isolated areas at night, research before travelling", es: "Alta vigilancia en Lagos — evitar zonas aisladas por la noche, infórmese antes del viaje", de: "Hohe Wachsamkeit in Lagos – meiden Sie abgelegene Gebiete in der Nacht, informieren Sie sich vor Reiseantritt" } },
    { icon: "📱", label: { fr: "Réseau & Internet", en: "Network & Internet", es: "Red e internet", de: "Netz & Internet" }, value: { fr: "Bonne 4G dans les grandes villes, MTN et Airtel disponibles en SIM locale", en: "Good 4G in major cities, MTN and Airtel available as local SIMs", es: "Buena 4G en las grandes ciudades, MTN y Airtel disponibles como SIM local", de: "Gutes 4G in Großstädten, MTN und Airtel sind in der lokalen SIM-Karte verfügbar" } },
  ],
};
