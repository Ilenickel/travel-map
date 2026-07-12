export const GHANA = {
  code: "GHA",
  numericId: 288,
  name: { fr: "Ghana", en: "Ghana", es: "Ghana" },
  emoji: "🇬🇭",
  capital: { fr: "Accra", en: "Accra", es: "Accra" },
  language: { fr: "Anglais, Akan, Ewe, Dagbani", en: "English, Akan, Ewe, Dagbani", es: "Inglés, akan, ewé, dagbani" },
  currency: { fr: "Cedi ghanéen (GHS)", en: "Ghanaian cedi (GHS)", es: "Cedi ghanés (GHS)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "Le Ghana est le pays d'Afrique de l'Ouest le plus stable et accueillant pour le tourisme : berceaux de la traite négrière avec les châteaux coloniaux de Cape Coast et Elmina (UNESCO), forêts tropicales et primates sauvages du parc de Kakum, tissage du kente à Kumasi capitale des Ashanti, et une scène musicale (highlife, afrobeats) rayonnant sur toute l'Afrique.",
    en: "Ghana is West Africa's most stable and welcoming country for tourism: a cradle of the slave trade with the colonial castles of Cape Coast and Elmina (UNESCO), tropical forests and wild primates in Kakum National Park, kente weaving in Kumasi, capital of the Ashanti, and a music scene (highlife, afrobeats) that shines across the continent.",
    es: "Ghana es el país más estable y acogedor de África Occidental para el turismo: cuna de la trata de esclavos con los castillos coloniales de Cape Coast y Elmina (UNESCO), bosques tropicales y primates salvajes del parque de Kakum, tejido del kente en Kumasi, capital de los ashanti, y una escena musical (highlife, afrobeats) que irradia por todo el continente.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero" },
      label: { fr: "Saison sèche (nord et sud)", en: "Dry season (north and south)", es: "Temporada seca (norte y sur)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : harmattan doux, ciel dégagé, conditions idéales pour les parcs et la côte. Températures supportables 25–30°C.",
        en: "Best time to go: mild harmattan winds, clear skies, and ideal conditions for the parks and the coast. Pleasant temperatures of 25–30°C.",
        es: "Mejor época: harmattán suave, cielo despejado, condiciones ideales para los parques y la costa. Temperaturas soportables de 25–30°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto" },
      label: { fr: "Grande saison des pluies", en: "Main rainy season", es: "Gran temporada de lluvias" },
      color: "#ef4444",
      description: {
        fr: "Fortes pluies au sud (200–300mm/mois), routes difficiles. Nord plus sec mais chaud. Moins favorable.",
        en: "Heavy rain in the south (200–300 mm/month) and difficult roads. The north is drier but still hot. Less favourable overall.",
        es: "Lluvias intensas en el sur (200–300mm/mes), carreteras difíciles. El norte es más seco pero caluroso. Menos favorable.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "accra",
      name: "Accra",
      region: { fr: "Côte atlantique", en: "Atlantic coast", es: "Costa atlántica" },
      data: [
        { month: "Jan", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 30,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 40,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 20,  icon: "⛅" },
      ],
    },
    {
      id: "kumasi",
      name: "Kumasi",
      region: { fr: "Région Ashanti (centre)", en: "Ashanti Region (central Ghana)", es: "Región de Ashanti (centro)" },
      data: [
        { month: "Jan", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Fév", temp: 29, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 30, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 30, rain: 140, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 110, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 160, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 180, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 20,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Cape Coast & Elmina — Châteaux esclavagistes", en: "Cape Coast & Elmina — Slave trade castles", es: "Cape Coast y Elmina — Castillos esclavistas" },
      region: { fr: "Région Centrale", en: "Central Region", es: "Región Central" },
      description: {
        fr: "Cape Coast Castle et Elmina Castle (tous deux UNESCO) sont les témoins les plus bouleversants de la traite atlantique : les \"Door of No Return\" par lesquelles 12 millions d'Africains ont embarqué pour l'esclavage. Une visite profondément émouvante et essentielle pour comprendre l'histoire de l'Afrique.",
        en: "Cape Coast Castle and Elmina Castle (both UNESCO-listed) are the most moving witnesses to the Atlantic slave trade: the \"Door of No Return\" through which 12 million Africans were forced into slavery. A deeply emotional visit, and an essential one for understanding Africa's history.",
        es: "El Castillo de Cape Coast y el Castillo de Elmina (ambos Patrimonio UNESCO) son los testigos más desgarradores de la trata atlántica: la «Puerta sin Retorno» por la que 12 millones de africanos embarcaron hacia la esclavitud. Una visita profundamente conmovedora y esencial para comprender la historia de África.",
      },
      wikipedia: "Cape_Coast_Castle",
      tags: ["Histoire", "UNESCO", "Émouvant", "Côte", "Architecture"],
      mustSee: [
        { name: { fr: "Cape Coast Castle (UNESCO) — Door of No Return", en: "Cape Coast Castle (UNESCO) — Door of No Return", es: "Castillo de Cape Coast (UNESCO) — Puerta sin Retorno" }, wikipedia: "Cape_Coast_Castle" },
        { name: { fr: "Elmina Castle (UNESCO) — le plus ancien fort européen d'Afrique subsaharienne", en: "Elmina Castle (UNESCO) — the oldest European fort in sub-Saharan Africa", es: "Castillo de Elmina (UNESCO) — el fuerte europeo más antiguo del África subsahariana" }, wikipedia: "Elmina_Castle" },
        { name: { fr: "Parc national de Kakum — pont suspendu dans la canopée (40m)", en: "Kakum National Park — canopy walkway (40m high)", es: "Parque nacional de Kakum — puente colgante en el dosel forestal (40m)" }, wikipedia: "Kakum_National_Park" },
        { name: { fr: "Plage de Anomabo", en: "Anomabo Beach", es: "Playa de Anomabo" }, wikipedia: "File:Anomabo Beach 01.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Kumasi — Capitale Ashanti", en: "Kumasi — Ashanti capital", es: "Kumasi — Capital ashanti" },
      region: { fr: "Région Ashanti", en: "Ashanti Region", es: "Región de Ashanti" },
      description: {
        fr: "Kumasi est le cœur culturel du Ghana : le palais du roi Ashanti (Manhyia Palace), le grand marché Kejetia (le plus grand d'Afrique de l'Ouest), les ateliers de tissage du kente (tissu royal aux couleurs vives), et le musée national Ashanti. Une immersion dans la civilisation Ashanti, l'une des plus puissantes d'Afrique.",
        en: "Kumasi is the cultural heart of Ghana: the Ashanti king's palace (Manhyia Palace), Kejetia Market (the largest in West Africa), kente weaving workshops (the brightly coloured royal cloth), and the Ashanti National Museum. It is a deep dive into Ashanti civilisation, one of the most powerful in Africa.",
        es: "Kumasi es el corazón cultural de Ghana: el palacio del rey ashanti (Manhyia Palace), el gran mercado de Kejetia (el más grande de África Occidental), los talleres de tejido del kente (la vistosa tela real) y el Museo Nacional Ashanti. Una inmersión en la civilización ashanti, una de las más poderosas de África.",
      },
      wikipedia: "Kumasi",
      tags: ["Culture", "Artisanat", "Marché", "Royauté", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Grand marché Kejetia — le plus grand d'Afrique de l'Ouest", en: "Kejetia Market — the largest in West Africa", es: "Gran mercado de Kejetia — el más grande de África Occidental" }, wikipedia: "Kejetia_Market" },
        { name: { fr: "Tissage du kente à Bonwire", en: "Kente weaving in Bonwire", es: "Tejido del kente en Bonwire" }, wikipedia: "Kente_cloth" },
        { name: { fr: "Manhyia Palace Museum — résidence du roi Ashanti", en: "Manhyia Palace Museum — residence of the Ashanti king", es: "Museo del Palacio Manhyia — residencia del rey ashanti" }, wikipedia: "Manhyia_Palace" },
        { name: { fr: "Musée national Ashanti", en: "Ashanti National Museum", es: "Museo Nacional Ashanti" }, wikipedia: "File:Historic_Statues_at_the_Africa_Culture_-_Kumasi_Centre_for_National_Culture.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Mole National Park — Éléphants et savane", en: "Mole National Park — Elephants and savannah", es: "Parque nacional de Mole — Elefantes y sabana" },
      region: { fr: "Région Nord", en: "Northern Region", es: "Región Norte" },
      description: {
        fr: "Mole est le plus grand parc national du Ghana (4 840 km²) : des éléphants en liberté que l'on peut observer à pied depuis le lodge perché sur un escarpement surplombant les points d'eau. Buffles, phacochères, hippotragues, cobes. L'un des safaris pédestres les plus accessibles d'Afrique.",
        en: "Mole is Ghana's largest national park (4,840 km²): free-roaming elephants that can be observed on foot from the lodge perched on an escarpment above the waterholes. Buffalo, warthogs, roan antelope and kob. One of the most accessible walking safaris in Africa.",
        es: "Mole es el mayor parque nacional de Ghana (4.840 km²): elefantes en libertad que se pueden observar a pie desde el lodge encaramado en un escarpe sobre los abrevaderos. Búfalos, facóqueros, antílopes ruanos y cobos. Uno de los safaris a pie más accesibles de África.",
      },
      wikipedia: "Mole_National_Park",
      tags: ["Safari", "Éléphants", "Nature", "Savane"],
      mustSee: [
        { name: { fr: "Safari pédestre avec guide — éléphants au point d'eau", en: "Guided walking safari — elephants at the waterhole", es: "Safari a pie con guía — elefantes en el abrevadero" }, wikipedia: "Mole_National_Park" },
        { name: { fr: "Larabanga Mosque — mosquée en banco la plus ancienne du Ghana (XIIIe s.)", en: "Larabanga Mosque — Ghana's oldest mud-and-stick mosque (13th century)", es: "Mezquita de Larabanga — la mezquita de barro más antigua de Ghana (s. XIII)" }, wikipedia: "Larabanga_Mosque" },
        { name: { fr: "Village de Larabanga et arbre sacré", en: "Larabanga village and sacred tree", es: "Pueblo de Larabanga y árbol sagrado" }, wikipedia: "File:The Larabanga Mosque - Northern Ghana.jpg" },
        { name: { fr: "Observation hippotragues et buffles", en: "Roan antelope and buffalo spotting", es: "Observación de antílopes ruanos y búfalos" }, wikipedia: "File:Elephants at Mole National Park 01.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Accra — Afrobeats et art contemporain", en: "Accra — Afrobeats and contemporary art", es: "Accra — Afrobeats y arte contemporáneo" },
      region: { fr: "Grand Accra", en: "Greater Accra", es: "Gran Accra" },
      description: {
        fr: "Accra est l'une des capitales les plus dynamiques d'Afrique : le quartier de Jamestown avec son phare colonial et ses boxeurs en plein air, le marché Makola, Labadi Beach la nuit, et une scène artistique contemporaine (galleries, street art) qui rayonne sur tout le continent. Berceau de l'afrobeats.",
        en: "Accra is one of Africa's most dynamic capitals: the Jamestown district with its colonial lighthouse and open-air boxers, Makola Market, Labadi Beach at night, and a contemporary art scene (galleries, street art) that radiates across the continent. It is a cradle of afrobeats.",
        es: "Accra es una de las capitales más dinámicas de África: el barrio de Jamestown con su faro colonial y sus boxeadores al aire libre, el mercado de Makola, Labadi Beach de noche, y una escena artística contemporánea (galerías, arte urbano) que irradia por todo el continente. Cuna del afrobeats.",
      },
      wikipedia: "Accra",
      tags: ["Ville", "Art", "Musique", "Plage", "Gastronomie"],
      mustSee: [
        { name: "Kwame Nkrumah Memorial Park", wikipedia: "File:Kwame Nkrumah artworks at Kwame Nkrumah Mausoleum.jpg" },
        { name: { fr: "Labadi Beach — nuits afrobeats", en: "Labadi Beach — afrobeats nights", es: "Labadi Beach — noches de afrobeats" }, wikipedia: "Labadi_Beach" },
        { name: "National Museum of Ghana", wikipedia: "National_Museum_of_Ghana" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Ghana est abordable pour un touriste occidental, bien que plus cher que certains voisins (Togo, Bénin). Accra est la ville la plus chère. La cuisine locale est excellente et bon marché. Le cedi a connu une forte dévaluation ces dernières années.",
      en: "Ghana is affordable for a Western traveller, although it is pricier than some neighbouring countries (Togo, Benin). Accra is the most expensive city. Local food is excellent and inexpensive. The cedi has gone through a sharp devaluation in recent years.",
      es: "Ghana es asequible para un turista occidental, aunque más caro que algunos vecinos (Togo, Benín). Accra es la ciudad más cara. La cocina local es excelente y barata. El cedi ha sufrido una fuerte devaluación en los últimos años.",
    },
    currency: "GHS",
    exchangeRate: "1€ ≈ 16–18 GHS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / homestay room", es: "Guesthouse / habitación con anfitrión local" }, price: "20–40 €", detail: { fr: "Quartiers locaux", en: "Local neighbourhoods", es: "Barrios locales" } },
          { label: { fr: "Hôtel 3★ confort (Accra, Cape Coast)", en: "Comfortable 3★ hotel (Accra, Cape Coast)", es: "Hotel 3★ confort (Accra, Cape Coast)" }, price: "60–100 €", detail: { fr: "Clim, wifi, petit-déj", en: "A/C, Wi-Fi, breakfast", es: "Aire acondicionado, wifi, desayuno" } },
          { label: { fr: "Hôtel de luxe (Accra)", en: "Luxury hotel (Accra)", es: "Hotel de lujo (Accra)" }, price: "150–250 €", detail: { fr: "Piscine, restaurant", en: "Pool, restaurant", es: "Piscina, restaurante" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Jollof rice / fufu dans un chop bar", en: "Jollof rice / fufu in a chop bar", es: "Jollof rice / fufu en un chop bar" }, price: "2–5 €", detail: { fr: "Cuisine locale populaire", en: "Popular local food", es: "Cocina local popular" } },
          { label: { fr: "Restaurant mid-range Accra", en: "Mid-range restaurant in Accra", es: "Restaurante de gama media en Accra" }, price: "10–20 €", detail: { fr: "Menu complet + boisson", en: "Full meal + drink", es: "Menú completo + bebida" } },
          { label: { fr: "Restaurant gastronomique Accra", en: "Fine dining restaurant in Accra", es: "Restaurante gastronómico en Accra" }, price: "30–60 €", detail: { fr: "Cuisine internationale", en: "International cuisine", es: "Cocina internacional" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Tro-tro (minibus collectif) — trajet urbain", en: "Tro-tro (shared minibus) — urban ride", es: "Tro-tro (minibús colectivo) — trayecto urbano" }, price: "0,20–0,50 €", detail: { fr: "Transport local populaire", en: "Popular local transport", es: "Transporte local popular" } },
          { label: { fr: "Bus inter-villes (Accra–Kumasi, 4h)", en: "Intercity bus (Accra–Kumasi, 4h)", es: "Autobús interurbano (Accra–Kumasi, 4h)" }, price: "5–10 €", detail: { fr: "VIP Bus confortable", en: "Comfortable VIP Bus service", es: "VIP Bus cómodo" } },
          { label: { fr: "Location voiture avec chauffeur / journée", en: "Car with driver / day", es: "Coche con chófer / día" }, price: "50–80 €", detail: { fr: "Recommandé pour Mole", en: "Recommended for Mole", es: "Recomendado para Mole" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée Cape Coast Castle (avec visite guidée)", en: "Cape Coast Castle entry (with guided tour)", es: "Entrada al Castillo de Cape Coast (con visita guiada)" }, price: "10–15 €", detail: { fr: "1h30 de visite émotionnelle", en: "1.5-hour emotional visit", es: "1h30 de visita conmovedora" } },
          { label: { fr: "Safari pédestre Mole National Park", en: "Mole National Park walking safari", es: "Safari a pie en el parque nacional de Mole" }, price: "20–35 €", detail: { fr: "Guide obligatoire, 2–3h", en: "Guide mandatory, 2–3 hours", es: "Guía obligatorio, 2–3h" } },
          { label: { fr: "Atelier tissage kente à Bonwire", en: "Kente weaving workshop in Bonwire", es: "Taller de tejido del kente en Bonwire" }, price: "5–15 €", detail: { fr: "Démonstration + achat possible", en: "Demonstration + possible purchase", es: "Demostración + posible compra" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + tro-tro", en: "Guesthouse + local food + tro-tro", es: "Guesthouse + cocina local + tro-tro" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "100–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo" }, daily: "250 €+/j", desc: { fr: "Hôtel 5★ Accra + safaris privés", en: "5★ hotel in Accra + private safaris", es: "Hotel 5★ en Accra + safaris privados" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días" },
      route: {
        fr: "Accra (3j) → Cape Coast / Elmina (2j) → Kumasi (3j) → Mole National Park (4j)",
        en: "Accra (3d) → Cape Coast / Elmina (2d) → Kumasi (3d) → Mole National Park (4d)",
        es: "Accra (3d) → Cape Coast / Elmina (2d) → Kumasi (3d) → Parque nacional de Mole (4d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Accra", en: "Return flight Paris–Accra", es: "Vuelo ida y vuelta Madrid–Accra" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)" }, amount: "300–500 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "200–350 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees", es: "Actividades y entradas" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Accra", en: "Return flight Paris–Accra", es: "Vuelo ida y vuelta Madrid–Accra" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)" }, amount: "900–1 400 €" },
            { label: { fr: "Transports / chauffeur", en: "Transport / driver", es: "Transporte / chófer" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & going out", es: "Comida y salidas" }, amount: "400–700 €" },
            { label: { fr: "Activités & safaris", en: "Activities & safaris", es: "Actividades y safaris" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~6h direct (Air France, British Airways via Londres, Ethiopian Airlines)", en: "~6h direct (Air France), or via London with British Airways / on Ethiopian Airlines", es: "Con conexión (Air France, British Airways vía Londres, Ethiopian Airlines)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire — e-Visa en ligne (~90 USD, ghana.gov.gh/visa) ou ambassade. Valable 30–60 jours.", en: "Visa required — online e-visa (~USD 90, ghana.gov.gh/visa) or embassy application. Valid for 30–60 days.", es: "Visado obligatorio — e-Visa en línea (~90 USD, ghana.gov.gh/visa) o embajada. Válido 30–60 días." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Cedi ghanéen (GHS). Taux variable — prévoir euros à changer sur place.", en: "Ghanaian cedi (GHS). Exchange rate fluctuates — bring euros to change locally.", es: "Cedi ghanés (GHS). Tipo de cambio variable — llevar euros para cambiar in situ." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Anglais (officiel) — communication facile. Akan / Twi couramment parlé.", en: "English (official) — easy communication. Akan / Twi widely spoken.", es: "Inglés (oficial) — comunicación fácil. El akan/twi se habla habitualmente." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G (britannique) — 230V. Adaptateur recommandé.", en: "Type G (British) — 230V. Adapter recommended.", es: "Tipo G (británico) — 230V. Adaptador recomendado." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable (Malarone ou Doxycycline).", en: "Yellow fever vaccination required. Anti-malaria medication is essential (Malarone or doxycycline).", es: "Vacuna de fiebre amarilla obligatoria. Antipalúdico indispensable (Malarone o doxiciclina)." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille ou filtre indispensable.", en: "Not safe to drink — bottled water or a filter is essential.", es: "No potable — agua embotellada o filtro indispensable." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil" }, value: { fr: "Bonne couverture 4G à Accra et grandes villes. Roaming possible, SIM locale recommandée.", en: "Good 4G coverage in Accra and major cities. Roaming may work, but a local SIM is recommended.", es: "Buena cobertura 4G en Accra y grandes ciudades. Roaming posible, se recomienda SIM local." } },
  ],
};
