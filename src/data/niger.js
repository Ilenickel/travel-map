export const NIGER = {
  code: "NER",
  numericId: 562,
  name: { fr: "Niger", en: "Niger", es: "Níger" },
  emoji: "🇳🇪",
  capital: { fr: "Niamey", en: "Niamey", es: "Niamey" },
  language: { fr: "Français, Haoussa, Zarma", en: "French, Hausa, Zarma", es: "Francés, hausa, zarma" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)", es: "Franco CFA (XOF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 750, tripMid: 1500,
  },
  description: {
    fr: "Le Niger était l'une des destinations d'aventure les plus fascinantes du Sahara : Agadez, cité médiévale classée à l'UNESCO, les montagnes de l'Aïr et le désert du Ténéré avec ses dunes monumentales, et le parc W pour la faune sahélienne. Suite au coup d'état militaire de juillet 2023 et à l'instabilité sécuritaire persistante, le pays est actuellement déconseillé aux voyageurs.",
    en: "Niger used to be one of the most fascinating adventure destinations in the Sahara: Agadez, a medieval UNESCO-listed city, the Aïr mountains and the Ténéré desert with its monumental dunes, and W National Park for Sahelian wildlife. Following the military coup of July 2023 and ongoing security instability, the country is currently advised against for travellers.",
    es: "Níger era uno de los destinos de aventura más fascinantes del Sáhara: Agadez, ciudad medieval declarada Patrimonio de la Humanidad, las montañas del Aïr y el desierto del Ténéré con sus dunas monumentales, y el parque W para la fauna saheliana. Tras el golpe de estado militar de julio de 2023 y la persistente inestabilidad de seguridad, el país está actualmente desaconsejado para los viajeros.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero" },
      label: { fr: "Saison fraîche (pré-coup d'état)", en: "Cool season (pre-coup)", es: "Estación fresca (previa al golpe de estado)" },
      color: "#22c55e",
      description: {
        fr: "Avant le coup d'état de 2023, c'était la seule période praticable : températures supportables (18–30°C), pistes du désert accessibles en 4x4, nuits fraîches et étoilées dans le Ténéré.",
        en: "Before the 2023 coup, this was the only viable period: bearable temperatures (18–30°C), desert tracks accessible by 4x4, cool starry nights in the Ténéré.",
        es: "Antes del golpe de 2023, era la única época practicable: temperaturas soportables (18–30 °C), pistas del desierto accesibles en 4x4, noches frescas y estrelladas en el Ténéré.",
      },
      icon: "🏜️",
    },
    {
      months: { fr: "Juillet – Septembre", en: "July – September", es: "Julio – Septiembre" },
      label: { fr: "Saison des pluies (Sahel)", en: "Rainy season (Sahel)", es: "Estación de lluvias (Sahel)" },
      color: "#f59e0b",
      description: {
        fr: "Pluies au sud (Niamey, parc W), verdoyant mais routes difficiles. Le nord reste sec et torride (40°C+). Période de la fête du Sultan d'Agadez (Sultanat de l'Aïr).",
        en: "Rain in the south (Niamey, W Park), lush but difficult roads. The north stays dry and scorching (40°C+). Time of the Sultan of Agadez festival (Sultanate of Aïr).",
        es: "Lluvias en el sur (Niamey, parque W), verde pero con carreteras difíciles. El norte sigue seco y tórrido (40 °C+). Época de la fiesta del Sultán de Agadez (Sultanato del Aïr).",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "niamey",
      name: "Niamey",
      region: { fr: "Capitale (Sahel, fleuve Niger)", en: "Capital (Sahel, Niger River)", es: "Capital (Sahel, río Níger)" },
      data: [
        { month: "Jan", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 31, rain: 2,   icon: "⛅" },
        { month: "Avr", temp: 36, rain: 10,  icon: "🌡️" },
        { month: "Mai", temp: 38, rain: 30,  icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 55,  icon: "🌡️" },
        { month: "Jul", temp: 32, rain: 85,  icon: "🌡️" },
        { month: "Aoû", temp: 31, rain: 100, icon: "🌧️" },
        { month: "Sep", temp: 30, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 32, rain: 20,  icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 2,   icon: "⛅" },
        { month: "Déc", temp: 22, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "agadez",
      name: "Agadez",
      region: { fr: "Aïr (désert, 500m)", en: "Aïr (desert, 500m)", es: "Aïr (desierto, 500 m)" },
      data: [
        { month: "Jan", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 29, rain: 0,  icon: "⛅" },
        { month: "Avr", temp: 35, rain: 2,  icon: "🌡️" },
        { month: "Mai", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Jun", temp: 39, rain: 10, icon: "🌡️" },
        { month: "Jul", temp: 36, rain: 30, icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 55, icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 25, icon: "🌡️" },
        { month: "Oct", temp: 32, rain: 5,  icon: "🌡️" },
        { month: "Nov", temp: 25, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 19, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Agadez — Cité du Désert", en: "Agadez — Desert City", es: "Agadez — Ciudad del desierto" },
      region: { fr: "Région d'Agadez (centre-nord)", en: "Agadez Region (north-centre)", es: "Región de Agadez (centro-norte)" },
      description: {
        fr: "Agadez est l'une des grandes villes caravanières du Sahara, classée au patrimoine mondial de l'UNESCO. Sa Grande Mosquée avec son minaret de terre et de bois est l'un des édifices les plus emblématiques d'Afrique de l'Ouest. La vieille ville en adobe aux ruelles labyrinthiques témoigne de cinq siècles d'histoire touareg, commerce trans-saharien et culture nomade. Avant la crise sécuritaire, c'était la principale porte d'entrée vers le Ténéré.",
        en: "Agadez is one of the Sahara's great caravan cities, a UNESCO World Heritage site. Its Grand Mosque with its earthen and wooden minaret is one of the most iconic buildings in West Africa. The adobe old town, with its labyrinthine alleys, bears witness to five centuries of Tuareg history, trans-Saharan trade and nomadic culture. Before the security crisis, it was the main gateway to the Ténéré.",
        es: "Agadez es una de las grandes ciudades caravaneras del Sáhara, declarada Patrimonio de la Humanidad por la UNESCO. Su Gran Mezquita, con su minarete de tierra y madera, es uno de los edificios más emblemáticos de África Occidental. El casco antiguo de adobe, de callejuelas laberínticas, es testigo de cinco siglos de historia tuareg, comercio transahariano y cultura nómada. Antes de la crisis de seguridad, era la principal puerta de entrada al Ténéré.",
      },
      wikipedia: "Agadez",
      tags: ["UNESCO", "Culture touareg", "Architecture", "Désert"],
      mustSee: [
        { name: { fr: "Grande Mosquée d'Agadez — minaret de terre et de bois (27m), symbole de la ville", en: "Agadez Grand Mosque — 27m earthen and wooden minaret, symbol of the city", es: "Gran Mezquita de Agadez — minarete de tierra y madera (27 m), símbolo de la ciudad" }, wikipedia: "File:Niger, Agadez (43), Grand Mosque.jpg" },
        { name: { fr: "Vieille ville (médina) d'Agadez — ruelles en adobe et palais du Sultan", en: "Agadez old town (medina) — adobe alleys and the Sultan's palace", es: "Casco antiguo (medina) de Agadez — callejuelas de adobe y palacio del Sultán" }, wikipedia: "Agadez" },
        { name: { fr: "Palais du Sultan de l'Aïr — siège du pouvoir touareg", en: "Sultan of Aïr's Palace — seat of Tuareg power", es: "Palacio del Sultán del Aïr — sede del poder tuareg" }, wikipedia: "File:Pałac_wodza_Tuaregów_-_Agades_-_001189s.jpg" },
        { name: { fr: "Marché artisanal touareg — argent ciselé, cuir et instruments", en: "Tuareg craft market — chiselled silver, leather and instruments", es: "Mercado artesanal tuareg — plata cincelada, cuero e instrumentos" }, wikipedia: "File:Esprit nomade.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Montagnes de l'Aïr & Désert du Ténéré", en: "Aïr Mountains & Ténéré Desert", es: "Montañas del Aïr y desierto del Ténéré" },
      region: { fr: "Région d'Agadez (nord)", en: "Agadez Region (north)", es: "Región de Agadez (norte)" },
      description: {
        fr: "Le massif de l'Aïr et le désert du Ténéré forment une réserve naturelle classée à l'UNESCO de plus de 7 millions d'hectares, l'une des plus grandes au monde. Les montagnes volcaniques de l'Aïr abritent des vallées verdoyantes (oasis), des gravures rupestres néolithiques et les célèbres addax, antilopes sahariennes. Le Ténéré, « désert dans le désert », offre des paysages de sable et d'ergs d'une beauté absolue, dominés par l'Arbre du Ténéré (aujourd'hui disparu).",
        en: "The Aïr massif and the Ténéré desert form a UNESCO-listed nature reserve of over 7 million hectares, one of the largest in the world. The volcanic Aïr mountains shelter green valleys (oases), Neolithic rock carvings and the famous addax, a Saharan antelope. The Ténéré, a 'desert within the desert', offers absolutely beautiful sand and erg landscapes, once dominated by the Tree of Ténéré (now gone).",
        es: "El macizo del Aïr y el desierto del Ténéré forman una reserva natural declarada Patrimonio de la Humanidad de más de 7 millones de hectáreas, una de las más grandes del mundo. Las montañas volcánicas del Aïr albergan valles verdes (oasis), grabados rupestres neolíticos y el célebre addax, antílope sahariano. El Ténéré, «desierto dentro del desierto», ofrece paisajes de arena y ergs de una belleza absoluta, antaño dominados por el Árbol del Ténéré (hoy desaparecido).",
      },
      wikipedia: "File:Montagnes Bleus1.jpg",
      tags: ["UNESCO", "Sahara", "Gravures rupestres", "Faune"],
      mustSee: [
        { name: { fr: "Erg du Ténéré — mer de sable monumentale", en: "Ténéré Erg — a monumental sand sea", es: "Erg del Ténéré — mar de arena monumental" }, wikipedia: "Ténéré" },
        { name: { fr: "Gravures rupestres de l'Aïr — art néolithique saharien", en: "Aïr rock carvings — Neolithic Saharan art", es: "Grabados rupestres del Aïr — arte neolítico sahariano" }, wikipedia: "File:Fondazione Passaré V27 230.jpg" },
        { name: { fr: "Oasis de Timia — palmeraie dans les montagnes de l'Aïr", en: "Timia oasis — palm grove in the Aïr mountains", es: "Oasis de Timia — palmeral en las montañas del Aïr" }, wikipedia: "Timia" },
        { name: { fr: "Massif de l'Arakao — dunes rouges spectaculaires", en: "Arakao massif — spectacular red dunes", es: "Macizo de Arakao — dunas rojas espectaculares" }, wikipedia: "File:Michael martin wüste (49).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc National du W", en: "W National Park", es: "Parque nacional del W" },
      region: { fr: "Région de Dosso / Tillabéri (sud-ouest)", en: "Dosso / Tillabéri Region (south-west)", es: "Región de Dosso / Tillabéri (suroeste)" },
      description: {
        fr: "Le parc du W (ainsi nommé pour les méandres en W du fleuve Niger à ses frontières) est un parc transfrontalier classé à l'UNESCO partagé entre le Niger, le Bénin et le Burkina Faso. Il abrite lions, éléphants, buffles, hippopotames et une avifaune remarquable dans une savane sahélienne caractéristique. C'est la destination de safari la plus accessible depuis Niamey, à environ 150 km.",
        en: "W National Park (named after the W-shaped meanders of the Niger River along its borders) is a UNESCO-listed transboundary park shared between Niger, Benin and Burkina Faso. It shelters lions, elephants, buffalo, hippos and remarkable birdlife within a typical Sahelian savannah. It's the most accessible safari destination from Niamey, about 150 km away.",
        es: "El parque del W (llamado así por los meandros en forma de W del río Níger en sus fronteras) es un parque transfronterizo declarado Patrimonio de la Humanidad, compartido entre Níger, Benín y Burkina Faso. Alberga leones, elefantes, búfalos, hipopótamos y una avifauna notable en una sabana saheliana característica. Es el destino de safari más accesible desde Niamey, a unos 150 km.",
      },
      wikipedia: "W_National_Park",
      tags: ["Safari", "UNESCO", "Lions", "Éléphants"],
      mustSee: [
        { name: { fr: "Mares d'hippopotames — nombreux dans le fleuve Niger", en: "Hippo pools — numerous in the Niger River", es: "Charcas de hipopótamos — numerosas en el río Níger" }, wikipedia: "File:La_boule_du_monde,_Chutes_de_koudou,_Parc_W,_Benin.jpg" },
        { name: { fr: "Troupeaux d'éléphants — migration entre les trois pays", en: "Elephant herds — migrating between the three countries", es: "Manadas de elefantes — migración entre los tres países" }, wikipedia: "File:Elephants bath park w wide 2006.jpg" },
        { name: { fr: "Panoramas sur le fleuve Niger", en: "Views over the Niger River", es: "Panorámicas sobre el río Níger" }, wikipedia: "File:Niger_Safari.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Niger est l'une des destinations les moins chères de la région, mais les coûts d'expédition vers le désert (4x4 obligatoire, carburant, guide) représentent l'essentiel du budget. Suite au coup d'état de 2023, la situation économique et sécuritaire a considérablement affecté l'accès aux sites touristiques.",
      en: "Niger is one of the cheapest destinations in the region, but the cost of desert expeditions (mandatory 4x4, fuel, guide) makes up most of the budget. Following the 2023 coup, the economic and security situation has significantly affected access to tourist sites.",
      es: "Níger es uno de los destinos más baratos de la región, pero el coste de las expediciones al desierto (4x4 obligatorio, combustible, guía) representa la mayor parte del presupuesto. Tras el golpe de 2023, la situación económica y de seguridad ha afectado considerablemente el acceso a los lugares turísticos.",
    },
    currency: "XOF",
    exchangeRate: "1€ ≈ 655 XOF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Auberge / guesthouse basique", en: "Basic hostel / guesthouse", es: "Albergue / guesthouse básico" }, range: "8–20 €" },
          { label: { fr: "Hôtel milieu de gamme (Niamey)", en: "Mid-range hotel (Niamey)", es: "Hotel de gama media (Niamey)" }, range: "30–60 €" },
          { label: { fr: "Camp désert (Ténéré, tente)", en: "Desert camp (Ténéré, tent)", es: "Campamento en el desierto (Ténéré, tienda)" }, range: "20–40 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Riz, millet ou pâtes au marché local", en: "Rice, millet or pasta at the local market", es: "Arroz, mijo o pasta en el mercado local" }, range: "1–3 €" },
          { label: { fr: "Restaurant en ville", en: "Restaurant in town", es: "Restaurante en la ciudad" }, range: "5–12 €" },
          { label: { fr: "Thé touareg (cérémonie des 3 thés)", en: "Tuareg tea (the three-tea ceremony)", es: "Té tuareg (ceremonia de los 3 tés)" }, range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bush taxi (Niamey–Dosso)", en: "Bush taxi (Niamey–Dosso)", es: "Taxi rural (Niamey–Dosso)" }, range: "3–8 €" },
          { label: { fr: "Location 4x4 avec chauffeur-guide", en: "4x4 rental with driver-guide", es: "Alquiler de 4x4 con conductor-guía" }, range: "100–180 €/j" },
          { label: { fr: "Carburant supplémentaire pour désert", en: "Extra fuel for the desert", es: "Combustible adicional para el desierto" }, range: "50–100 € par expédition" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée parc du W", en: "W Park entry", es: "Entrada al parque del W" }, range: "5–10 €" },
          { label: { fr: "Guide culturel à Agadez (demi-journée)", en: "Cultural guide in Agadez (half day)", es: "Guía cultural en Agadez (medio día)" }, range: "15–30 €" },
          { label: { fr: "Promenade à dromadaire (Ténéré)", en: "Camel ride (Ténéré)", es: "Paseo en dromedario (Ténéré)" }, range: "20–40 €/j" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "30–50 €/j", desc: { fr: "Hors logistique désert. Hébergement basique, nourriture locale.", en: "Excluding desert logistics. Basic accommodation, local food.", es: "Sin logística de desierto. Alojamiento básico, comida local." }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "60–120 €/j", desc: { fr: "Hôtel correct + expédition Ténéré avec 4x4 et guide.", en: "Decent hotel + Ténéré expedition with 4x4 and guide.", es: "Hotel correcto + expedición al Ténéré con 4x4 y guía." }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: { fr: "Niamey → Parc W → Dosso → Agadez → Aïr & Ténéré", en: "Niamey → W Park → Dosso → Agadez → Aïr & Ténéré", es: "Niamey → Parque W → Dosso → Agadez → Aïr y Ténéré" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "750 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Niamey", en: "Return flight Paris–Niamey", es: "Vuelo ida y vuelta Madrid–Niamey" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)" }, amount: "90–180 €" },
            { label: { fr: "Transports locaux + bush taxi", en: "Local transport + bush taxi", es: "Transporte local + taxi rural" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "100–180 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías" }, amount: "100–180 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Niamey", en: "Return flight Paris–Niamey", es: "Vuelo ida y vuelta Madrid–Niamey" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)", es: "Alojamiento (9 noches)" }, amount: "270–540 €" },
            { label: { fr: "Location 4x4 + carburant désert", en: "4x4 rental + desert fuel", es: "Alquiler de 4x4 + combustible del desierto" }, amount: "450–700 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "200–350 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías" }, amount: "150–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "Vols avec Air France ou via Casablanca (Royal Air Maroc) et Abidjan (Air Côte d'Ivoire). Durée ~6–10h selon connexion.", en: "Flights with Air France or via Casablanca (Royal Air Maroc) and Abidjan (Air Côte d'Ivoire). ~6–10h depending on connection.", es: "Vuelos con Air France o vía Casablanca (Royal Air Maroc) y Abiyán (Air Côte d'Ivoire). Duración ~6–10h según la conexión." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire. Obtention en ambassade à Paris. Les formalités peuvent être perturbées selon la situation politique actuelle.", en: "Visa required. Obtainable from the embassy in Paris. Formalities may be disrupted depending on the current political situation.", es: "Visado obligatorio. Se obtiene en la embajada. Los trámites pueden verse afectados según la situación política actual." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Franc CFA UEMOA (XOF). Espèces indispensables dans tout le pays. Quelques distributeurs à Niamey seulement.", en: "UEMOA CFA franc (XOF). Cash essential throughout the country. Only a few ATMs, in Niamey only.", es: "Franco CFA UEMOA (XOF). Efectivo indispensable en todo el país. Solo unos pocos cajeros en Niamey." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Français (officiel), haoussa et zarma (langues véhiculaires), tamachek (langue touareg). Le français est compris dans les villes.", en: "French (official), Hausa and Zarma (lingua francas), Tamashek (Tuareg language). French is understood in the cities.", es: "Francés (oficial), hausa y zarma (lenguas vehiculares), tamashek (lengua tuareg). El francés se entiende en las ciudades." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C et Type E (comme en France). Tension 220V. Coupures de courant très fréquentes à Niamey.", en: "Type C and Type E (as in France). 220V. Power cuts very frequent in Niamey.", es: "Tipo C y tipo E (como en Francia). Tensión 220V. Cortes de electricidad muy frecuentes en Niamey." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Vaccin fièvre jaune obligatoire. Paludisme présent dans le sud : prophylaxie indispensable. Méningite recommandée (ceinture de la méningite). Chaleur extrême : hydratation vitale.", en: "Yellow fever vaccine mandatory. Malaria present in the south: prophylaxis essential. Meningitis vaccine recommended (meningitis belt). Extreme heat: hydration is vital.", es: "Vacuna contra la fiebre amarilla obligatoria. Presencia de malaria en el sur: profilaxis indispensable. Se recomienda vacuna contra la meningitis (cinturón de la meningitis). Calor extremo: hidratación vital." } },
    { icon: "⚠️", label: { fr: "Sécurité — AVERTISSEMENT", en: "Safety — WARNING", es: "Seguridad — ADVERTENCIA" }, value: { fr: "🚫 Le Niger est classé en zone rouge par le MEAE depuis le coup d'état militaire de juillet 2023. Risque d'enlèvements, attaques jihadistes (zones frontalières Mali, Burkina). Consulter impérativement conseils-aux-voyageurs.gouv.fr avant tout projet.", en: "🚫 Niger has been classified a red zone by the French Foreign Ministry since the July 2023 military coup. Risk of kidnappings, jihadist attacks (border areas with Mali, Burkina Faso). Always check official travel advisories before planning a trip.", es: "🚫 Níger está clasificado como zona roja desde el golpe de estado militar de julio de 2023. Riesgo de secuestros y ataques yihadistas (zonas fronterizas con Malí y Burkina Faso). Consultar imperativamente los avisos oficiales de viaje antes de cualquier proyecto." } },
    { icon: "🏜️", label: { fr: "Logistique désert", en: "Desert logistics", es: "Logística del desierto" }, value: { fr: "Toute expédition dans l'Aïr ou le Ténéré nécessite au minimum 2 véhicules 4x4, guide touareg homologué, carburant pour 1 000+ km, GPS et communication satellite.", en: "Any expedition into the Aïr or the Ténéré requires at least 2 4x4 vehicles, a certified Tuareg guide, fuel for 1,000+ km, GPS and satellite communication.", es: "Cualquier expedición al Aïr o al Ténéré requiere como mínimo 2 vehículos 4x4, guía tuareg homologado, combustible para más de 1.000 km, GPS y comunicación satelital." } },
  ],
};
