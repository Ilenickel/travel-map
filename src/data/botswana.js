export const BOTSWANA = {
  code: "BWA",
  numericId: 72,
  name: { fr: "Botswana", en: "Botswana", es: "Botsuana", de: "Botswana" },
  emoji: "🇧🇼",
  capital: { fr: "Gaborone", en: "Gaborone", es: "Gaborone", de: "Gaborone" },
  language: { fr: "Tswana, Anglais", en: "Tswana, English", es: "Tsuana, inglés", de: "Tswana, Englisch" },
  currency: { fr: "Pula (BWP)", en: "Pula (BWP)", es: "Pula (BWP)", de: "Pula (BWP)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 100, budgetMid: 350,
    tripMin: 4000, tripMid: 12000,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 2,
    safari: 3,
    ski: 0,
    ville: 1,
    plage: 0,
  },
  description: {
    fr: "Le Botswana est le summum du safari haut de gamme : le Delta de l'Okavango, classé UNESCO, est une oasis flottante unique au monde où l'on se déplace en mokoro entre les îles aux éléphants. Chobe abrite la plus grande concentration d'éléphants d'Afrique, et le Kalahari révèle les lions noirs des sables.", en: "Botswana is the pinnacle of high-end safari travel: the UNESCO-listed Okavango Delta is a one-of-a-kind floating oasis where you travel by mokoro between elephant-filled islands. Chobe is home to Africa's largest concentration of elephants, while the Kalahari reveals its black-maned lions of the sands.", es: "Botsuana es la cúspide del safari de alta gama: el Delta del Okavango, declarado Patrimonio de la UNESCO, es un oasis flotante único en el mundo donde se navega en mokoro entre islas repletas de elefantes. Chobe alberga la mayor concentración de elefantes de África, y el Kalahari revela sus leones de melena negra en las arenas del desierto.", de: "Botswana ist der Gipfel der High-End-Safari: Das Okavango-Delta, das zum UNESCO-Weltkulturerbe gehört, ist eine weltweit einzigartige schwimmende Oase, in der Sie mit dem Mokoro zwischen den Elefanteninseln reisen. Chobe ist die Heimat der größten Elefantenkonzentration Afrikas und in der Kalahari gibt es schwarze Sandlöwen.",
  },

  bestPeriods: [
    {
      months: { fr: "Juillet – Octobre", en: "July – October", es: "Julio – Octubre", de: "Juli – Oktober" },
      label: { fr: "Saison sèche — Delta inondé", en: "Dry season — flooded Delta", es: "Estación seca — Delta inundado", de: "Trockenzeit – überflutetes Delta" },
      color: "#22c55e",
      description: {
        fr: "Le Delta de l'Okavango est à son maximum d'inondation (juil–oct). Faune concentrée autour des points d'eau. Températures idéales. Safaris de rêve à Chobe.", en: "The Okavango Delta is at its peak flood stage (Jul–Oct). Wildlife gathers around water sources. Temperatures are ideal. Dream safari conditions in Chobe.", es: "El Delta del Okavango alcanza su máxima inundación (jul–oct). La fauna se concentra alrededor de los puntos de agua. Temperaturas ideales. Safaris de ensueño en Chobe.", de: "Das Okavango-Delta erlebt den Höhepunkt der Überschwemmungen (Juli–Oktober). Die Fauna konzentriert sich um Wasserstellen. Ideale Temperaturen. Traumsafaris im Chobe.",
      },
      icon: "🐘",
    },
    {
      months: { fr: "Mai – Juin", en: "May – June", es: "Mayo – Junio", de: "Mai – Juni" },
      label: { fr: "Début saison sèche", en: "Early dry season", es: "Inicio de la estación seca", de: "Beginn der Trockenzeit" },
      color: "#fb923c",
      description: {
        fr: "Moins de touristes, animaux encore dispersés mais conditions très agréables. Delta commence à se remplir.", en: "Fewer tourists, wildlife still more spread out, but conditions are very pleasant. The Delta starts to fill.", es: "Menos turistas, la fauna todavía dispersa pero condiciones muy agradables. El Delta empieza a llenarse.", de: "Weniger Touristen, Tiere immer noch verstreut, aber sehr angenehme Bedingungen. Delta beginnt sich zu füllen.",
      },
      icon: "🦁",
    },
  ],

  weatherCities: [
    {
      id: "maun",
      name: "Maun (Delta Okavango)",
      region: { fr: "Ngamiland", en: "Ngamiland", es: "Ngamiland", de: "Ngamiland" },
      data: [
        { month: "Jan", temp: 30, rain: 70,  icon: "⛅" },
        { month: "Fév", temp: 30, rain: 60,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 50,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Oct", temp: 31, rain: 25,  icon: "⛅" },
        { month: "Nov", temp: 30, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 30, rain: 75,  icon: "⛅" },
      ],
    },
    {
      id: "kasane",
      name: "Kasane (Chobe)",
      region: { fr: "Chobe", en: "Chobe", es: "Chobe", de: "Chobe" },
      data: [
        { month: "Jan", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Fév", temp: 30, rain: 90,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Oct", temp: 32, rain: 30,  icon: "🌡️" },
        { month: "Nov", temp: 31, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 30, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Delta de l'Okavango", en: "Okavango Delta", es: "Delta del Okavango", de: "Okavango-Delta" },
      region: { fr: "Ngamiland", en: "Ngamiland", es: "Ngamiland", de: "Ngamiland" },
      description: {
        fr: "Le Delta de l'Okavango est l'un des plus grands deltas intérieurs du monde : une oasis de 15 000 km² au cœur du désert du Kalahari, classée UNESCO. Les mokoros (pirogues locales) glissent silencieusement entre les papyrus et les nénuphars, au milieu des hippopotames, éléphants et léopards.", en: "The Okavango Delta is one of the world's largest inland deltas: a 15,000 km² oasis in the heart of the Kalahari Desert, listed as a UNESCO World Heritage site. Mokoros (local dugout canoes) glide silently between papyrus and water lilies, among hippos, elephants and leopards.", es: "El Delta del Okavango es uno de los mayores deltas interiores del mundo: un oasis de 15 000 km² en el corazón del desierto del Kalahari, declarado Patrimonio de la UNESCO. Los mokoros (piraguas locales) se deslizan en silencio entre papiros y nenúfares, entre hipopótamos, elefantes y leopardos.", de: "Das Okavango-Delta ist eines der größten Binnendeltas der Welt: eine 15.000 km² große Oase im Herzen der Kalahari-Wüste, die zum UNESCO-Weltkulturerbe zählt. Die Mokoros (lokale Kanus) gleiten lautlos zwischen Papyrus und Seerosen, zwischen Flusspferden, Elefanten und Leoparden.",
      },
      wikipedia: "Okavango_Delta",
      tags: ["UNESCO", "Safari", "Nature"],
      mustSee: [
        { name: { fr: "Safari en mokoro entre les îles aux éléphants", en: "Mokoro safari between elephant islands", es: "Safari en mokoro entre islas de elefantes", de: "Mokoro-Safari zwischen den Elefanteninseln" }, wikipedia: "Dugout_canoe" },
        { name: { fr: "Camp flottant — nuit dans le delta", en: "Floating camp — night in the delta", es: "Campamento flotante — noche en el delta", de: "Schwimmendes Lager – Nacht im Delta" }, wikipedia: "File:Moremi Game Reserve in summer 02.jpg" },
        { name: { fr: "Léopards et lycaons sauvages", en: "Leopards and African wild dogs", es: "Leopardos y licaones salvajes", de: "Wilde Leoparden und wilde Hunde" }, wikipedia: "African_wild_dog" },
        { name: { fr: "Vol ULM au lever du soleil sur le delta", en: "Microlight flight over the delta at sunrise", es: "Vuelo en ultraligero al amanecer sobre el delta", de: "Ultraleichtflug bei Sonnenaufgang über dem Delta" }, wikipedia: "Okavango_Delta" },
      ],
    },
    {
      id: 2,
      name: "Chobe National Park",
      region: { fr: "Chobe", en: "Chobe", es: "Chobe", de: "Chobe" },
      description: {
        fr: "Le Chobe abrite la plus grande concentration d'éléphants du continent : jusqu'à 130 000 pachydermes dans le parc. Le safari en bateau sur la rivière Chobe, où les éléphants traversent à la nage devant les yeux des touristes, est une expérience incomparable.", en: "Chobe is home to the largest concentration of elephants on the continent: up to 130,000 pachyderms in the park. A boat safari on the Chobe River, where elephants swim across right before your eyes, is an incomparable experience.", es: "Chobe alberga la mayor concentración de elefantes del continente: hasta 130 000 paquidermos en el parque. El safari en barco por el río Chobe, donde los elefantes cruzan a nado ante los ojos de los turistas, es una experiencia incomparable.", de: "Der Chobe ist die Heimat der größten Elefantenkonzentration auf dem Kontinent: bis zu 130.000 Dickhäuter im Park. Die Bootssafari auf dem Chobe-Fluss, bei der Elefanten vor den Augen der Touristen hinüberschwimmen, ist ein unvergleichliches Erlebnis.",
      },
      wikipedia: "Chobe_National_Park",
      tags: ["Safari", "Plage"],
      mustSee: [
        { name: { fr: "Safari bateau rivière Chobe — éléphants à la nage", en: "Boat safari on the Chobe River — swimming elephants", es: "Safari en barco por el río Chobe — elefantes nadando", de: "Bootssafari auf dem Chobe-Fluss – Elefanten schwimmen" }, wikipedia: "File:Cuando River, Botswana.jpg" },
        { name: { fr: "Troupeaux de buffles et lions (Savuti)", en: "Herds of buffalo and lions (Savuti)", es: "Manadas de búfalos y leones (Savuti)", de: "Büffel- und Löwenherden (Savuti)" }, wikipedia: "File:Lion-savuti-botswana-april-2025.jpg" },
        { name: { fr: "Painted dogs (lycaons) — espèce menacée", en: "Painted dogs (African wild dogs) — endangered species", es: "Perros pintados (licaones) — especie amenazada", de: "Bemalte Hunde (Lycaons) – gefährdete Arten" }, wikipedia: "African_wild_dog" },
        { name: { fr: "Kasane — gateway et coucher soleil sur le Zambèze", en: "Kasane — gateway town and sunset over the Zambezi", es: "Kasane — puerta de entrada y atardecer sobre el Zambeze", de: "Kasane – Tor und Sonnenuntergang am Sambesi" }, wikipedia: "File:Kasane a velký baobab - Botswana - panoramio.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kalahari — Lions et Méerkats", en: "Kalahari — Lions & Meerkats", es: "Kalahari — Leones y suricatas", de: "Kalahari – Löwen und Erdmännchen" },
      region: { fr: "Ghanzi / CKGR", en: "Ghanzi / CKGR", es: "Ghanzi / CKGR", de: "Ghanzi / CKGR" },
      description: {
        fr: "Le Kalahari central (Central Kalahari Game Reserve, CKGR) est l'une des plus grandes réserves du monde : domaine des lions aux crinières noires, des méerkats observables chaque matin à quelques mètres, et des communautés San (Bushmen) aux techniques de chasse millénaires.", en: "The Central Kalahari (Central Kalahari Game Reserve, CKGR) is one of the world's largest reserves: home to black-maned lions, meerkats that can be observed every morning from just a few metres away, and San (Bushmen) communities with millennia-old hunting techniques.", es: "El Kalahari Central (Central Kalahari Game Reserve, CKGR) es una de las mayores reservas del mundo: dominio de los leones de melena negra, de las suricatas que se pueden observar cada mañana a pocos metros, y de las comunidades san (bosquimanos) con técnicas de caza milenarias.", de: "Das Central Kalahari Game Reserve (CKGR) ist eines der größten Reservate der Welt: Heimat von Löwen mit schwarzen Mähnen, Erdmännchen, die jeden Morgen aus wenigen Metern Entfernung beobachtet werden können, und San-Gemeinschaften (Buschmänner) mit jahrhundertealten Jagdtechniken.",
      },
      wikipedia: "File:Kalahari C17.JPG",
      tags: ["Safari", "Culture", "Désert"],
      mustSee: [
        { name: { fr: "Méerkats au lever du soleil (à 1 m)", en: "Meerkats at sunrise (just 1 metre away)", es: "Suricatas al amanecer (a solo 1 m)", de: "Erdmännchen bei Sonnenaufgang (1 m entfernt)" }, wikipedia: "Meerkat" },
        { name: { fr: "Nuits étoilées — ciel parmi les plus purs du monde", en: "Star-filled nights — one of the purest skies in the world", es: "Noches estrelladas — uno de los cielos más puros del mundo", de: "Sternenklare Nächte – einige der reinsten Himmel der Welt" }, wikipedia: "File:Kalahari desert, South Africa.jpg" },
      ],
    },
    {
      id: 4,
      name: "Makgadikgadi Pans",
      region: { fr: "Central", en: "Central", es: "Central", de: "Zentral" },
      description: {
        fr: "Les Makgadikgadi Pans sont l'un des plus grands déserts de sel du monde : en saison sèche, une immensité blanche à perte de vue et des méerkats des salines ; en saison des pluies (nov–mars), des millions de zèbres et gnous y migrent. Baobabs de Chapman's et lune de miel sous les étoiles.", en: "The Makgadikgadi Pans are one of the world's largest salt deserts: in the dry season, an endless white expanse with salt-pan meerkats; in the rainy season (Nov–Mar), millions of zebras and wildebeest migrate here. Chapman's baobabs and honeymoon-worthy nights under the stars complete the picture.", es: "Los Makgadikgadi Pans son uno de los mayores desiertos de sal del mundo: en la estación seca, una inmensidad blanca hasta donde alcanza la vista y suricatas de las salinas; en la estación de lluvias (nov–mar), millones de cebras y ñus migran hasta aquí. Los baobabs de Chapman y noches de luna de miel bajo las estrellas completan el cuadro.", de: "Die Makgadikgadi-Pfannen sind eine der größten Salzwüsten der Welt: In der Trockenzeit eine weiße Unermesslichkeit soweit das Auge reicht und Erdmännchen der Salzpfannen; In der Regenzeit (November–März) wandern Millionen Zebras und Gnus dorthin. Chapmans Baobabs und Flitterwochen unter den Sternen.",
      },
      wikipedia: "File:Avestruces_(Struthio_camelus),_salar_del_parque_nacional_Makgadikgadi_Pans,_Botsuana,_2018-07-30,_DD_51.jpg",
      tags: ["Nature", "Safari"],
      mustSee: [
        { name: { fr: "Migration des zèbres (nov–mars)", en: "Zebra migration (Nov–Mar)", es: "Migración de cebras (nov–mar)", de: "Zebrawanderung (November–März)" }, wikipedia: "Plains_zebra" },
        { name: { fr: "Méerkats des salines — observatoire privé", en: "Salt-pan meerkats — private viewing hide", es: "Suricatas de las salinas — observatorio privado", de: "Salinen-Erdmännchen – private Sternwarte" }, wikipedia: "Meerkat" },
        { name: { fr: "Baobabs de Chapman's (3 000 ans)", en: "Chapman's baobabs (3,000 years old)", es: "Baobabs de Chapman (3000 años)", de: "Chapmans Baobabs (3.000 Jahre alt)" }, wikipedia: "Adansonia_digitata" },
        { name: { fr: "Canoë dans les salines inondées", en: "Canoeing across the flooded salt pans", es: "Canoa en las salinas inundadas", de: "Kanufahren in überfluteten Salzwüsten" }, wikipedia: "File:690V3686 - Flickr - Lip Kee.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Botswana pratique une politique de tourisme « haut de gamme, faible volume » : les lodges sont volontairement chers pour protéger les écosystèmes. C'est l'un des safaris les plus exclusifs au monde, mais aussi le plus pristine.", en: "Botswana follows a 'high-end, low-volume' tourism policy: lodges are deliberately expensive to protect ecosystems. It is one of the most exclusive safari destinations in the world, but also one of the most pristine.", es: "Botsuana aplica una política turística de «alta gama, bajo volumen»: los lodges son deliberadamente caros para proteger los ecosistemas. Es uno de los safaris más exclusivos del mundo, pero también uno de los más prístinos.", de: "Botswana praktiziert eine „High-End-, Low-Volume“-Tourismuspolitik: Lodges sind bewusst teuer, um Ökosysteme zu schützen. Es ist eine der exklusivsten Safaris der Welt, aber auch die unberührteste.",
    },
    currency: "BWP",
    exchangeRate: "1€ ≈ 14,5 BWP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Camp de base / camping", en: "Basic camp / camping", es: "Campamento básico / camping", de: "Basislager/Campingplatz" }, price: "30–60 €", detail: { fr: "CKGR uniquement", en: "CKGR only", es: "Solo CKGR", de: "Nur CKGR" } },
          { label: { fr: "Lodge mid-range (Chobe)", en: "Mid-range lodge (Chobe)", es: "Lodge de gama media (Chobe)", de: "Mittelklasse-Lodge (Chobe)" }, price: "150–300 €", detail: { fr: "Demi-pension ou pension complète", en: "Half board or full board", es: "Media pensión o pensión completa", de: "Halbpension oder Vollpension" } },
          { label: { fr: "Camp flottant Delta (all-inclusive)", en: "Delta floating camp (all-inclusive)", es: "Campamento flotante del Delta (todo incluido)", de: "Delta Floating Camp (All-Inclusive)" }, price: "800–2 000 €", detail: { fr: "Safaris inclus, exclusivité totale", en: "Safaris included, total exclusivity", es: "Safaris incluidos, exclusividad total", de: "Safaris inklusive, absolute Exklusivität" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Nourriture locale (Maun)", en: "Local food (Maun)", es: "Comida local (Maun)", de: "Lokales Essen (Maun)" }, price: "8–15 €", detail: { fr: "Restaurants basiques en ville", en: "Basic restaurants in town", es: "Restaurantes básicos en la ciudad", de: "Einfache Restaurants in der Stadt" } },
          { label: { fr: "Repas lodge (inclus)", en: "Lodge meals (included)", es: "Comidas del lodge (incluidas)", de: "Lodge-Mahlzeit (im Preis inbegriffen)" }, price: "inclus", detail: { fr: "Gastronomie au feu de bois dans la brousse", en: "Bush cooking over a wood fire", es: "Gastronomía al fuego de leña en la sabana", de: "Gastronomie am Holzfeuer im Busch" } },
          { label: { fr: "Braai (barbecue bush)", en: "Braai (bush barbecue)", es: "Braai (barbacoa en la sabana)", de: "Braai (Buschgrillen)" }, price: "inclus", detail: { fr: "Tradition sud-africaine sous les étoiles", en: "South African tradition under the stars", es: "Tradición sudafricana bajo las estrellas", de: "Südafrikanische Tradition unter den Sternen" } },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Vol Maun–Johannesburg", en: "Maun–Johannesburg flight", es: "Vuelo Maun–Johannesburgo", de: "Flug Maun–Johannesburg" }, price: "150–300 €", detail: { fr: "A/R, 1h30", en: "Return, 1h30", es: "Ida y vuelta, 1h30", de: "Hin- und Rückflug, 1 Std. 30 Min." } },
          { label: { fr: "Vol charter Delta (obligatoire)", en: "Delta charter flight (mandatory)", es: "Vuelo chárter al Delta (obligatorio)", de: "Delta-Charterflug (erforderlich)" }, price: "200–500 €", detail: { fr: "Seul accès aux camps", en: "The only way to reach the camps", es: "Único acceso a los campamentos", de: "Nur Zugang zu Lagern" } },
          { label: { fr: "4x4 location (CKGR, autonomie)", en: "4x4 rental (CKGR, self-drive)", es: "Alquiler de 4x4 (CKGR, autónomo)", de: "4x4-Vermietung (CKGR, Autonomie)" }, price: "100–180 €/j", detail: { fr: "Indispensable Kalahari", en: "Essential in the Kalahari", es: "Indispensable en el Kalahari", de: "Unverzichtbare Kalahari" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Safari mokoro (demi-journée)", en: "Mokoro safari (half day)", es: "Safari en mokoro (medio día)", de: "Mokoro-Safari (halber Tag)" }, price: "60–100 €", detail: { fr: "Dans le delta", en: "In the delta", es: "En el delta", de: "Im Delta" } },
          { label: { fr: "Safari bateau Chobe (2h)", en: "Chobe boat safari (2h)", es: "Safari en barco por el Chobe (2h)", de: "Chobe-Bootssafari (2 Stunden)" }, price: "40–60 €", detail: { fr: "Depuis Kasane", en: "From Kasane", es: "Desde Kasane", de: "Von Kasane" } },
          { label: { fr: "Expérience méerkats (Makgadikgadi)", en: "Meerkat experience (Makgadikgadi)", es: "Experiencia con suricatas (Makgadikgadi)", de: "Erdmännchen-Erlebnis (Makgadikgadi)" }, price: "inclus lodge", detail: { fr: "Guide spécialisé", en: "Specialist guide", es: "Guía especializado", de: "Spezialisierter Führer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "100–200 €/j", desc: { fr: "Camping + 4x4 autonome + CKGR", en: "Camping + self-drive 4x4 + CKGR", es: "Camping + 4x4 autónomo + CKGR", de: "Camping + autonomes 4x4 + CKGR" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "350–600 €/j", desc: { fr: "Lodge mid-range + safaris inclus", en: "Mid-range lodge + included safaris", es: "Lodge de gama media + safaris incluidos", de: "Mittelklasse-Lodge + Safaris inklusive" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "1 000 €+/j", desc: { fr: "Camp flottant Okavango tout inclus", en: "All-inclusive Okavango floating camp", es: "Campamento flotante del Okavango todo incluido", de: "All-Inclusive-Okavango-Floating-Camp" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Maun (1j) → Delta Okavango (3j) → Makgadikgadi (2j) → Chobe (3j) → Kasane départ (1j)", en: "Maun (1d) → Okavango Delta (3d) → Makgadikgadi (2d) → Chobe (3d) → Departure from Kasane (1d)", es: "Maun (1d) → Delta del Okavango (3d) → Makgadikgadi (2d) → Chobe (3d) → Salida desde Kasane (1d)", de: "Maun (1 Tag) → Okavango-Delta (3 Tage) → Makgadikgadi (2 Tage) → Chobe (3 Tage) → Kasane-Abfahrt (1 Tag)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Maun (via Johannesburg)", en: "Return flight Paris–Maun (via Johannesburg)", es: "Vuelo ida y vuelta Madrid–Maun (vía Johannesburgo)", de: "Hin- und Rückflug Paris–Maun (über Johannesburg)" }, amount: "800–1 200 €" },
            { label: { fr: "Lodges & camping (10 nuits)", en: "Lodges & camping (10 nights)", es: "Lodges y camping (10 noches)", de: "Lodges & Campingplatz (10 Nächte)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Vols charters intérieurs", en: "Domestic charter flights", es: "Vuelos chárter internos", de: "Inländische Charterflüge" }, amount: "600–900 €" },
            { label: { fr: "Safaris & activités", en: "Safaris & activities", es: "Safaris y actividades", de: "Safaris und Aktivitäten" }, amount: "800–1 200 €" },
            { label: { fr: "Nourriture & imprévus", en: "Food & contingency", es: "Comida e imprevistos", de: "Essen und unvorhergesehene Ereignisse" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "12 000 – 18 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Botswana", en: "Return flight Paris–Botswana", es: "Vuelo ida y vuelta Madrid–Botsuana", de: "Hin- und Rückflug Paris–Botswana" }, amount: "1 000–1 600 €" },
            { label: { fr: "Lodges mid-range (10 nuits)", en: "Mid-range lodges (10 nights)", es: "Lodges de gama media (10 noches)", de: "Mittelklasse-Lodges (10 Nächte)" }, amount: "3 500–6 000 €" },
            { label: { fr: "Vols charters + transferts", en: "Charter flights + transfers", es: "Vuelos chárter y traslados", de: "Charterflüge + Transfers" }, amount: "2 000–3 000 €" },
            { label: { fr: "Safaris guidés inclus", en: "Guided safaris included", es: "Safaris guiados incluidos", de: "Geführte Safaris inklusive" }, amount: "inclus" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "500 €+" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "25 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Botswana (Business)", en: "Return flight Paris–Botswana (business class)", es: "Vuelo ida y vuelta Madrid–Botsuana (business)", de: "Hin- und Rückflug Paris–Botswana (Business)" }, amount: "4 000–7 000 €" },
            { label: { fr: "Camps flottants & lodges exclusifs (10 nuits)", en: "Floating camps & exclusive lodges (10 nights)", es: "Campamentos flotantes y lodges exclusivos (10 noches)", de: "Exklusive schwimmende Camps & Lodges (10 Nächte)" }, amount: "12 000–20 000 €" },
            { label: { fr: "Vols privés inter-lodges", en: "Private flights between lodges", es: "Vuelos privados entre lodges", de: "Private Flüge zwischen den Lodges" }, amount: "3 000–5 000 €" },
            { label: { fr: "Tout inclus (safaris, repas, bar)", en: "All inclusive (safaris, meals, bar)", es: "Todo incluido (safaris, comidas, bar)", de: "All inclusive (Safaris, Mahlzeiten, Bar)" }, amount: "inclus" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~12–14h avec escale (via Johannesburg, Nairobi ou Addis)", en: "~12–14h with a stopover (via Johannesburg, Nairobi or Addis Ababa)", es: "~12–14h con escala (vía Johannesburgo, Nairobi o Adís Abeba)", de: "ca. 12–14 Std. mit Zwischenstopp (über Johannesburg, Nairobi oder Addis)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa 90 jours (Français)", en: "No visa for up to 90 days (French citizens)", es: "Sin visado 90 días (españoles)", de: "Visumfrei 90 Tage (Französisch)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Pula (1€ ≈ 14,5 BWP) — USD/€ acceptés dans les lodges", en: "Pula (1€ ≈ 14.5 BWP) — USD/€ accepted in lodges", es: "Pula (1€ ≈ 14,5 BWP) — se aceptan USD/€ en los lodges", de: "Pula (1 € ≈ 14,5 BWP) – USD/€ in Lodges akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Tswana + Anglais (officiel)", en: "Tswana + English (official)", es: "Setsuana + inglés (oficial)", de: "Tswana + Englisch (offiziell)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type D/G – 230 V (comme Afrique du Sud / UK)", en: "Type D/G – 230 V (same as South Africa / UK)", es: "Tipo D/G – 230 V (como Sudáfrica / Reino Unido)", de: "Typ D/G – 230 V (wie Südafrika / Großbritannien)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Couverture villes, inexistante Delta et Kalahari profond", en: "Coverage in towns, non-existent in the Delta and deep Kalahari", es: "Cobertura en ciudades, inexistente en el Delta y el Kalahari profundo", de: "Städteabdeckung, nicht existierendes Delta und tiefe Kalahari" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable en ville, non potable en brousse", en: "Drinkable in town, not drinkable in the bush", es: "Potable en la ciudad, no potable en la sabana", de: "In der Stadt trinkbar, im Busch nicht trinkbar" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen OBLIGATOIRE pour Okavango, Chobe et CKGR", en: "Anti-malaria medication MANDATORY for Okavango, Chobe and CKGR", es: "Antipalúdico OBLIGATORIO para Okavango, Chobe y CKGR", de: "OBLIGATORISCHES Malariamittel für Okavango, Chobe und CKGR" } },
  ],
};
