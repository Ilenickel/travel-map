export const ZAMBIA = {
  code: "ZMB",
  numericId: 894,
  name: { fr: "Zambie", en: "Zambia", es: "Zambia" },
  emoji: "🇿🇲",
  capital: { fr: "Lusaka", en: "Lusaka", es: "Lusaka" },
  language: { fr: "Anglais, Bemba, Nyanja, Tonga", en: "English, Bemba, Nyanja, Tonga", es: "Inglés, bemba, nyanja, tonga" },
  currency: { fr: "Kwacha zambien (ZMW)", en: "Zambian Kwacha (ZMW)", es: "Kwacha zambiano (ZMW)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 50, budgetMid: 130,
    tripMin: 1800, tripMid: 4000,
  },
  description: {
    fr: "La Zambie est la Rolls-Royce des safaris africains : le South Luangwa (fondateur du walking safari), le Kafue, les plaines d'inondation du Liuwa — et les chutes Victoria (Mosi-oa-Tunya, 'la fumée qui gronde'), classées UNESCO, partagées avec le Zimbabwe. Un pays sans masse touristique, avec une faune abondante et les lodges de safari les plus exclusifs d'Afrique.",
    en: "Zambia is the Rolls-Royce of African safaris: South Luangwa (birthplace of the walking safari), Kafue, the Liuwa floodplains — and Victoria Falls (Mosi-oa-Tunya, 'the smoke that thunders'), a UNESCO site shared with Zimbabwe. A country free of mass tourism, with abundant wildlife and Africa's most exclusive safari lodges.",
    es: "Zambia es el Rolls-Royce de los safaris africanos: South Luangwa (cuna del walking safari), Kafue, las llanuras inundables de Liuwa, y las cataratas Victoria (Mosi-oa-Tunya, «el humo que truena»), declaradas Patrimonio UNESCO y compartidas con Zimbabue. Un país sin turismo de masas, con fauna abundante y los lodges de safari más exclusivos de África.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – octubre" },
      label: { fr: "Saison sèche (Green Season)", en: "Dry season (Green Season)", es: "Estación seca (Green Season)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour les safaris : faune concentrée autour des points d'eau, végétation clairsemée pour l'observation. Températures agréables 20–32°C. Victoria Falls à son plus faible niveau mais accessible à pied côté zambien.",
        en: "Best period for safaris: wildlife concentrated around water points, sparse vegetation for viewing. Pleasant temperatures 20–32°C. Victoria Falls at its lowest level but accessible on foot from the Zambian side.",
        es: "Mejor época para los safaris: fauna concentrada alrededor de los puntos de agua, vegetación escasa para la observación. Temperaturas agradables 20–32°C. Cataratas Victoria en su nivel más bajo pero accesibles a pie desde el lado zambiano.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – abril" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes (150–250mm/mois), pistes impraticables, certains camps fermés. Victoria Falls au maximum spectaculaire. 'Green season' avec moins de touristes.",
        en: "Heavy rain (150–250mm/month), tracks impassable, some camps closed. Victoria Falls at its most spectacular. The 'green season' with fewer tourists.",
        es: "Lluvias abundantes (150–250 mm/mes), pistas intransitables, algunos campamentos cerrados. Cataratas Victoria en su máximo esplendor. «Green season» con menos turistas.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "livingstone",
      name: { fr: "Livingstone", en: "Livingstone", es: "Livingstone" },
      region: { fr: "Province du Sud (Victoria Falls)", en: "Southern Province (Victoria Falls)", es: "Provincia del Sur (cataratas Victoria)" },
      data: [
        { month: "Jan", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 100, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 18, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 18, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 160, icon: "🌧️" },
      ],
    },
    {
      id: "south_luangwa",
      name: { fr: "South Luangwa", en: "South Luangwa", es: "South Luangwa" },
      region: { fr: "Province de l'Est (parc national)", en: "Eastern Province (national park)", es: "Provincia del Este (parque nacional)" },
      data: [
        { month: "Jan", temp: 28, rain: 220, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 18, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 17, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 31, rain: 10,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 180, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Chutes Victoria — Mosi-oa-Tunya", en: "Victoria Falls — Mosi-oa-Tunya", es: "Cataratas Victoria — Mosi-oa-Tunya" },
      region: { fr: "Livingstone (province du Sud)", en: "Livingstone (Southern Province)", es: "Livingstone (provincia del Sur)" },
      description: {
        fr: "Les chutes Victoria sont les plus grandes chutes d'eau au monde (1 708m de large, 108m de hauteur) — classées UNESCO et merveille naturelle du monde. En saison sèche (sept-oct), on peut nager dans la 'Devil's Pool' au bord du précipice. En saison des pluies, le panache de brume se voit à 50km. L'accès côté zambien permet de longer la falaise face aux chutes.",
        en: "Victoria Falls is the largest waterfall in the world (1,708m wide, 108m high) — a UNESCO site and natural wonder of the world. In the dry season (Sept-Oct), you can swim in the 'Devil's Pool' at the edge of the precipice. In the rainy season, the mist plume is visible from 50km away. The Zambian side allows visitors to walk along the cliff facing the falls.",
        es: "Las cataratas Victoria son la mayor caída de agua del mundo (1708 m de ancho, 108 m de altura) — declaradas Patrimonio UNESCO y maravilla natural del mundo. En temporada seca (sept-oct) se puede nadar en la «Devil's Pool» al borde del precipicio. En temporada de lluvias, la nube de vapor se ve a 50 km. El acceso del lado zambiano permite recorrer el acantilado frente a las cataratas.",
      },
      wikipedia: "Victoria_Falls",
      tags: ["Chutes", "UNESCO", "Incontournable", "Aventure", "Nature", "Randonnée"],
      mustSee: [
        { name: "Victoria Falls", wikipedia: "File:Victoria Falls, Zimbabwe 01.jpg" },
        { name: { fr: "Promenade du bord du précipice côté zambien", en: "Cliffside walk on the Zambian side", es: "Paseo por el borde del precipicio del lado zambiano" }, wikipedia: "File:Mosi-oa-Tunya National Park, Zambia (48598581361).jpg" },
        { name: { fr: "Devil's Pool — baignade au bord de la chute (sept-janv)", en: "Devil's Pool — swimming at the edge of the falls (Sept-Jan)", es: "Devil's Pool — baño al borde de la catarata (sept-ene)" }, wikipedia: "File:Visitors at the Devil's Pool, Victoria Falls.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "South Luangwa — Walking Safari", en: "South Luangwa — Walking Safari", es: "South Luangwa — Walking Safari" },
      region: { fr: "Province de l'Est", en: "Eastern Province", es: "Provincia del Este" },
      description: {
        fr: "Le South Luangwa est le berceau du walking safari, inventé ici par Norman Carr en 1950. C'est le seul parc africain où l'on peut approcher les animaux à pied avec un guide armé — lions, léopards, éléphants à quelques mètres. La vallée de la rivière Luangwa concentre l'une des plus hautes densités de faune d'Afrique. Considéré par les puristes comme le meilleur parc d'Afrique.",
        en: "South Luangwa is the birthplace of the walking safari, invented here by Norman Carr in 1950. It is the only African park where you can approach animals on foot with an armed guide — lions, leopards, elephants just a few metres away. The Luangwa River valley holds one of the highest wildlife densities in Africa. Considered by purists to be Africa's finest park.",
        es: "South Luangwa es la cuna del walking safari, inventado aquí por Norman Carr en 1950. Es el único parque africano donde se puede acercar a los animales a pie con un guía armado — leones, leopardos, elefantes a pocos metros. El valle del río Luangwa concentra una de las densidades de fauna más altas de África. Considerado por los puristas el mejor parque de África.",
      },
      wikipedia: "South_Luangwa_National_Park",
      tags: ["Walking safari", "Léopards", "Éléphants", "Exclusif", "Safari"],
      mustSee: [
        { name: { fr: "Safari nocturne — léopards et civettes en chasse", en: "Night safari — leopards and civets on the hunt", es: "Safari nocturno — leopardos y civetas cazando" }, wikipedia: "File:South Luangwa National Park animals 2022 16.png" },
        { name: { fr: "Rive de la Luangwa — hippopotames et crocodiles", en: "Luangwa riverbank — hippos and crocodiles", es: "Orilla del Luangwa — hipopótamos y cocodrilos" }, wikipedia: "File:South Luangwa National Park - 51865178097.jpg" },
        { name: { fr: "Camp de brousse (fly camp) sous les étoiles", en: "Bush fly camp under the stars", es: "Campamento de sabana (fly camp) bajo las estrellas" }, wikipedia: "File:Sunrise in South Luangwa National Park.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plaines du Kafue — Antilopes et lions", en: "Kafue Plains — Antelopes and lions", es: "Llanuras de Kafue — Antílopes y leones" },
      region: { fr: "Province du Nord-Ouest", en: "North-Western Province", es: "Provincia del Noroeste" },
      description: {
        fr: "Le Kafue est le plus grand parc d'Afrique subsaharienne (22 400 km²) — plus grand que la Belgique. Moins connu que le Luangwa, il offre des paysages variés (plaines d'inondation de Busanga, forêts de miombo) et une faune abondante : lions, guépards, lycaons (chien sauvage d'Afrique en voie de disparition), hippos et sitatungas.",
        en: "Kafue is the largest park in sub-Saharan Africa (22,400 km²) — larger than Belgium. Less known than Luangwa, it offers varied landscapes (Busanga floodplains, miombo woodlands) and abundant wildlife: lions, cheetahs, African wild dogs (an endangered species), hippos and sitatungas.",
        es: "Kafue es el parque más grande del África subsahariana (22 400 km²) — más grande que Bélgica. Menos conocido que Luangwa, ofrece paisajes variados (llanuras inundables de Busanga, bosques de miombo) y fauna abundante: leones, guepardos, licaones (perro salvaje africano en peligro de extinción), hipopótamos y sitatungas.",
      },
      wikipedia: "Kafue_National_Park",
      tags: ["Safari", "Lycaons", "Immensité", "Nature"],
      mustSee: [
        { name: { fr: "Plaines de Busanga — guépards et lions en saison sèche", en: "Busanga Plains — cheetahs and lions in the dry season", es: "Llanuras de Busanga — guepardos y leones en temporada seca" }, wikipedia: "Kafue_National_Park" },
        { name: { fr: "Lycaons (chiens sauvages) — espèce en danger critique", en: "African wild dogs — critically endangered species", es: "Licaones (perros salvajes) — especie en peligro crítico" }, wikipedia: "African_wild_dog" },
        { name: { fr: "Rivière Kafue — crocodiles et hippopotames", en: "Kafue River — crocodiles and hippos", es: "Río Kafue — cocodrilos e hipopótamos" }, wikipedia: "File:Kafue_River_Hook_Downstream_Zambia_Jul23_A7C_05328.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Lusaka et Lower Zambezi", en: "Lusaka and Lower Zambezi", es: "Lusaka y Lower Zambezi" },
      region: { fr: "Province de Lusaka + Vallée du Zambèze", en: "Lusaka Province + Zambezi Valley", es: "Provincia de Lusaka + valle del Zambeze" },
      description: {
        fr: "Lusaka est une capitale animée avec ses marchés (Soweto Market, le plus grand marché d'Afrique centrale) et ses galeries d'art contemporain zambien. Le Lower Zambezi National Park, en face du Zimbabwe, permet des safaris en canoë sur le Zambèze — paddling entre les éléphants qui traversent le fleuve, unique en Afrique.",
        en: "Lusaka is a lively capital with its markets (Soweto Market, the largest in central Africa) and contemporary Zambian art galleries. Lower Zambezi National Park, facing Zimbabwe, offers canoe safaris on the Zambezi — paddling among elephants crossing the river, a unique experience in Africa.",
        es: "Lusaka es una capital animada con sus mercados (Soweto Market, el más grande de África central) y sus galerías de arte contemporáneo zambiano. El Lower Zambezi National Park, frente a Zimbabue, ofrece safaris en canoa por el Zambeze — remando entre elefantes que cruzan el río, una experiencia única en África.",
      },
      wikipedia: "File:Lusaka, capital city of Zambia.jpg",
      tags: ["Ville", "Canoë", "Zambèze", "Éléphants", "Gastronomie", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Safari en canoë sur le Zambèze — éléphants traversant le fleuve", en: "Canoe safari on the Zambezi — elephants crossing the river", es: "Safari en canoa por el Zambeze — elefantes cruzando el río" }, wikipedia: "Lower_Zambezi_National_Park" },
        { name: { fr: "Soweto Market Lusaka — artisanat et cuisine zambienne", en: "Soweto Market Lusaka — Zambian crafts and cuisine", es: "Soweto Market de Lusaka — artesanía y cocina zambiana" }, wikipedia: "File:Fast Food in Lusaka 10.jpg" },
        { name: { fr: "Marché Kalingalinga — peintures et sculptures lusaka", en: "Kalingalinga Market — Lusaka paintings and sculptures", es: "Mercado Kalingalinga — pinturas y esculturas de Lusaka" }, wikipedia: "File:Kalingalinga.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Zambie est une destination de safari haut de gamme : les camps de brousse sont parmi les plus chers du monde. Il est cependant possible de voyager à budget moyen en restant dans des lodges de catégorie intermédiaire à Livingstone. Les parcs eux-mêmes ont des droits d'entrée élevés.",
      en: "Zambia is a high-end safari destination: bush camps are among the most expensive in the world. However, it is possible to travel on a mid-range budget by staying in mid-tier lodges in Livingstone. The parks themselves have high entry fees.",
      es: "Zambia es un destino de safari de alta gama: los campamentos de sabana están entre los más caros del mundo. Sin embargo, es posible viajar con un presupuesto medio alojándose en lodges de categoría intermedia en Livingstone. Los propios parques tienen tasas de entrada elevadas.",
    },
    currency: "ZMW",
    exchangeRate: "1€ ≈ 28 ZMW",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / backpackers Livingstone", en: "Guesthouse / backpackers in Livingstone", es: "Guesthouse / backpackers en Livingstone" }, price: "25–60 €", detail: { fr: "Chambre simple, piscine souvent disponible", en: "Simple room, pool often available", es: "Habitación simple, piscina a menudo disponible" } },
          { label: { fr: "Lodge 3★ Livingstone ou Lusaka", en: "3★ lodge in Livingstone or Lusaka", es: "Lodge 3★ en Livingstone o Lusaka" }, price: "80–150 €", detail: { fr: "Confortable, proches des activités", en: "Comfortable, close to activities", es: "Confortable, cerca de las actividades" } },
          { label: { fr: "Camp de brousse exclusif (Luangwa, Kafue)", en: "Exclusive bush camp (Luangwa, Kafue)", es: "Campamento de sabana exclusivo (Luangwa, Kafue)" }, price: "400–1 500 €", detail: { fr: "Tout inclus, all-inclusive, guides experts", en: "All-inclusive, expert guides", es: "Todo incluido, guías expertos" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Nshima + kapenta (petits poissons séchés) restaurant local", en: "Nshima + kapenta (dried small fish), local restaurant", es: "Nshima + kapenta (pescaditos secos), restaurante local" }, price: "5–12 €", detail: { fr: "Cuisine zambienne traditionnelle", en: "Traditional Zambian cuisine", es: "Cocina tradicional zambiana" } },
          { label: { fr: "Restaurant touristique Livingstone (steakhouse, pizza)", en: "Tourist restaurant in Livingstone (steakhouse, pizza)", es: "Restaurante turístico en Livingstone (steakhouse, pizza)" }, price: "15–30 €", detail: { fr: "Clientèle internationale", en: "International clientele", es: "Clientela internacional" } },
          { label: { fr: "Supermarché Shoprite (chaîne locale)", en: "Shoprite supermarket (local chain)", es: "Supermercado Shoprite (cadena local)" }, price: { fr: "comme en Europe", en: "same as Europe", es: "como en Europa" }, detail: { fr: "Produits importés, prix similaires", en: "Imported goods, similar prices", es: "Productos importados, precios similares" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus Lusaka–Livingstone (Power Tools, Mazhandu)", en: "Lusaka–Livingstone bus (Power Tools, Mazhandu)", es: "Autobús Lusaka–Livingstone (Power Tools, Mazhandu)" }, price: "10–20 €", detail: { fr: "7h de trajet", en: "7h journey", es: "7h de trayecto" } },
          { label: { fr: "Vol intérieur Lusaka–Mfuwe (Luangwa)", en: "Domestic flight Lusaka–Mfuwe (Luangwa)", es: "Vuelo interno Lusaka–Mfuwe (Luangwa)" }, price: "150–300 €", detail: { fr: "Proflight Zambia, 1h15", en: "Proflight Zambia, 1h15", es: "Proflight Zambia, 1h15" } },
          { label: { fr: "Transfer privé lodge (souvent inclus)", en: "Private lodge transfer (often included)", es: "Traslado privado al lodge (a menudo incluido)" }, price: "50–150 €", detail: { fr: "Depuis l'aéroport de brousse", en: "From the bush airstrip", es: "Desde la pista de aterrizaje de sabana" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Devil's Pool Victoria Falls (entrée + guide)", en: "Devil's Pool Victoria Falls (entry + guide)", es: "Devil's Pool cataratas Victoria (entrada + guía)" }, price: "90–130 €", detail: { fr: "Sept–janv, frisson garanti", en: "Sept–Jan, thrills guaranteed", es: "Sept–ene, emoción garantizada" } },
          { label: { fr: "Walking safari South Luangwa (demi-journée)", en: "South Luangwa walking safari (half day)", es: "Walking safari en South Luangwa (medio día)" }, price: "80–150 €", detail: { fr: "Guide professionnel armé", en: "Professional armed guide", es: "Guía profesional armado" } },
          { label: { fr: "Rafting Zambèze (journée complète)", en: "Zambezi rafting (full day)", es: "Rafting en el Zambeze (día completo)" }, price: "90–130 €", detail: { fr: "23 rapides, niveau 5", en: "23 rapids, grade 5", es: "23 rápidos, nivel 5" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "50–90 €/j", desc: { fr: "Guesthouse + cuisine locale + activités basiques", en: "Guesthouse + local food + basic activities", es: "Guesthouse + comida local + actividades básicas" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "130–250 €/j", desc: { fr: "Lodge 3★ + restaurants + safaris guidés", en: "3★ lodge + restaurants + guided safaris", es: "Lodge 3★ + restaurantes + safaris guiados" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Lusaka (1j) → Livingstone / Victoria Falls (3j) → South Luangwa (5j) → retour (1j)",
        en: "Lusaka (1d) → Livingstone / Victoria Falls (3d) → South Luangwa (5d) → return (1d)",
        es: "Lusaka (1d) → Livingstone / cataratas Victoria (3d) → South Luangwa (5d) → regreso (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Lusaka", en: "Return flight Europe–Lusaka", es: "Vuelo ida/vuelta Europa–Lusaka" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "400–700 €" },
            { label: { fr: "Vols intérieurs + transport", en: "Domestic flights + transport", es: "Vuelos internos + transporte" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "200–350 €" },
            { label: { fr: "Activités & droits d'entrée parcs", en: "Activities & park entry fees", es: "Actividades y tasas de entrada a los parques" }, amount: "300–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "4 000 – 8 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Lusaka", en: "Return flight Europe–Lusaka", es: "Vuelo ida/vuelta Europa–Lusaka" }, amount: "700–1 200 €" },
            { label: { fr: "Lodges et camps (10 nuits)", en: "Lodges and camps (10 nights)", es: "Lodges y campamentos (10 noches)" }, amount: "1 500–4 000 €" },
            { label: { fr: "Vols intérieurs + transfers", en: "Domestic flights + transfers", es: "Vuelos internos + traslados" }, amount: "500–1 000 €" },
            { label: { fr: "Nourriture & bar (souvent inclus)", en: "Food & bar (often included)", es: "Comida y bar (a menudo incluido)" }, amount: { fr: "inclus–500 €", en: "included–500 €", es: "incluido–500 €" } },
            { label: { fr: "Safaris, rafting, activités", en: "Safaris, rafting, activities", es: "Safaris, rafting, actividades" }, amount: "400–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~12–14h via Johannesburg (South African, Lufthansa), Nairobi (Kenya Airways) ou Addis-Abeba (Ethiopian).", en: "~12–14h via Johannesburg (South African, Lufthansa), Nairobi (Kenya Airways) or Addis Ababa (Ethiopian).", es: "~13–15h vía Johannesburgo, Nairobi o Adís Abeba." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa à l'arrivée (50 USD, 30 jours) pour les Français. Possible en ligne (e-Visa). KAZA UniVisa disponible (Zambie + Zimbabwe).", en: "Visa on arrival (50 USD, 30 days) for French citizens. Also available online (e-Visa). KAZA UniVisa available (Zambia + Zimbabwe).", es: "Visado a la llegada (50 USD, 30 días) para los españoles. También disponible en línea (e-Visa). KAZA UniVisa disponible (Zambia + Zimbabue)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Kwacha zambien (ZMW). Dollars USD et euros acceptés dans les lodges. Carte bancaire dans les grandes villes uniquement.", en: "Zambian Kwacha (ZMW). US dollars and euros accepted in lodges. Bank cards only in major cities.", es: "Kwacha zambiano (ZMW). Dólares y euros aceptados en los lodges. Tarjeta bancaria solo en las grandes ciudades." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Anglais (officiel, langue du quotidien dans les villes). Bemba, Nyanja et Tonga entre habitants.", en: "English (official, everyday language in cities). Bemba, Nyanja and Tonga among locals.", es: "Inglés (oficial, idioma cotidiano en las ciudades). Bemba, nyanja y tonga entre los habitantes." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe" }, value: { fr: "Type G (britannique, 3 broches carrées) — 230V. Adaptateur recommandé.", en: "Type G (British, 3 square pins) — 230V. Adapter recommended.", es: "Tipo G (británico, 3 clavijas cuadradas) — 230V. Adaptador recomendado." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen indispensable. Vaccin fièvre jaune obligatoire si arrivée depuis pays endémique. Eau en bouteille.", en: "Malaria prophylaxis essential. Yellow fever vaccine mandatory if arriving from an endemic country. Bottled water.", es: "Antipalúdico imprescindible. Vacuna contra la fiebre amarilla obligatoria si se llega desde un país endémico. Agua embotellada." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille uniquement.", en: "Not drinkable — bottled water only.", es: "No potable — solo agua embotellada." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red" }, value: { fr: "MTN et Airtel couvrent les principales villes. Les parcs de brousse sont en zone blanche — prévoir communication satellite si besoin.", en: "MTN and Airtel cover the main cities. Bush parks are dead zones — plan for satellite communication if needed.", es: "MTN y Airtel cubren las principales ciudades. Los parques de sabana son zonas sin cobertura — prever comunicación satelital si es necesario." } },
  ],
};
