export const SOMALIA = {
  code: "SOM",
  numericId: 706,
  name: { fr: "Somalie", en: "Somalia", es: "Somalia" },
  emoji: "🇸🇴",
  capital: { fr: "Mogadiscio", en: "Mogadishu", es: "Mogadiscio" },
  language: { fr: "Somali, Arabe", en: "Somali, Arabic", es: "Somalí, árabe" },
  currency: { fr: "Shilling somalien (SOS)", en: "Somali shilling (SOS)", es: "Chelín somalí (SOS)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 120,
    tripMin: 1200, tripMid: 2500,
  },
  description: {
    fr: "La Somalie abrite des merveilles souvent ignorées : les peintures rupestres de Laas Geel, parmi les mieux conservées au monde, la côte du Somaliland avec ses plages immaculées, et Berbera, ancien port caravanier. Le Somaliland (autoproclamé indépendant depuis 1991) est la partie la plus accessible et la plus sûre du pays, tandis que Mogadiscio se reconstruit timidement après des décennies de conflit.",
    en: "Somalia is home to often-overlooked wonders: the Laas Geel rock paintings, among the best preserved in the world, the Somaliland coast with its pristine beaches, and Berbera, a former caravan port. Somaliland (self-declared independent since 1991) is the most accessible and safest part of the country, while Mogadishu is tentatively rebuilding after decades of conflict.",
    es: "Somalia alberga maravillas a menudo ignoradas: las pinturas rupestres de Laas Geel, entre las mejor conservadas del mundo, la costa de Somalilandia con sus playas inmaculadas, y Berbera, antiguo puerto caravanero. Somalilandia (autoproclamada independiente desde 1991) es la parte más accesible y segura del país, mientras que Mogadiscio se reconstruye tímidamente tras décadas de conflicto.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo" },
      label: { fr: "Saison sèche (Jilaal)", en: "Dry season (Jilaal)", es: "Estación seca (Jilaal)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour le Somaliland : températures clémentes (25–30°C), mer calme à Berbera, pistes praticables. Idéal pour Laas Geel et les sites côtiers.",
        en: "Best time for Somaliland: mild temperatures (25–30°C), calm sea in Berbera, passable tracks. Ideal for Laas Geel and coastal sites.",
        es: "Mejor época para Somalilandia: temperaturas suaves (25–30 °C), mar en calma en Berbera, pistas transitables. Ideal para Laas Geel y los sitios costeros.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto" },
      label: { fr: "Petite saison sèche (Hagaa)", en: "Short dry season (Hagaa)", es: "Pequeña estación seca (Hagaa)" },
      color: "#f59e0b",
      description: {
        fr: "Seconde fenêtre favorable. Vent d'est à Berbera, idéal pour la planche à voile. Températures supportables grâce à la brise maritime.",
        en: "A second favourable window. East wind in Berbera, ideal for windsurfing. Bearable temperatures thanks to the sea breeze.",
        es: "Segunda ventana favorable. Viento del este en Berbera, ideal para el windsurf. Temperaturas soportables gracias a la brisa marina.",
      },
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "mogadishu",
      name: "Mogadiscio",
      region: { fr: "Banadir (côte sud)", en: "Banadir (south coast)", es: "Banadir (costa sur)" },
      data: [
        { month: "Jan", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Fév", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 75,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 26, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "hargeisa",
      name: "Hargeisa",
      region: { fr: "Somaliland (nord, altitude 1300m)", en: "Somaliland (north, 1,300m altitude)", es: "Somalilandia (norte, altitud 1.300 m)" },
      data: [
        { month: "Jan", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 24, rain: 25,  icon: "☀️" },
        { month: "Avr", temp: 24, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 45,  icon: "☀️" },
        { month: "Sep", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Déc", temp: 20, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Laas Geel — Peintures rupestres", en: "Laas Geel — Rock paintings", es: "Laas Geel — Pinturas rupestres" },
      region: { fr: "Somaliland, région de Hargeisa", en: "Somaliland, Hargeisa region", es: "Somalilandia, región de Hargeisa" },
      description: {
        fr: "Laas Geel est l'un des sites d'art rupestre les mieux conservés du monde entier. Découvertes par une mission française en 2002, ces peintures vieilles de 5 000 à 11 000 ans représentent des bovins aux cornes décorées, des pasteurs et des animaux sauvages avec des couleurs d'une fraîcheur saisissante. Le site, situé à 50 km de Hargeisa, est accessible en une journée et constitue la principale raison de visiter le Somaliland.",
        en: "Laas Geel is one of the best-preserved rock art sites in the entire world. Discovered by a French mission in 2002, these 5,000 to 11,000-year-old paintings depict cattle with decorated horns, herders and wild animals, with colours of striking freshness. The site, 50 km from Hargeisa, can be visited in a day and is the main reason to visit Somaliland.",
        es: "Laas Geel es uno de los yacimientos de arte rupestre mejor conservados del mundo entero. Descubiertas por una misión francesa en 2002, estas pinturas de entre 5.000 y 11.000 años de antigüedad representan bovinos de cuernos decorados, pastores y animales salvajes con colores de una frescura sorprendente. El sitio, situado a 50 km de Hargeisa, es visitable en un día y constituye la principal razón para visitar Somalilandia.",
      },
      wikipedia: "Laas_Geel",
      tags: ["Histoire", "UNESCO"],
      mustSee: [
        { name: { fr: "Grottes principales — panneaux de peintures aux couleurs vives", en: "Main caves — vividly coloured painting panels", es: "Cuevas principales — paneles de pinturas de colores vivos" }, wikipedia: "File:Laas Geel.jpg" },
        { name: { fr: "Bovins néolithiques peints — représentations uniques au monde", en: "Painted Neolithic cattle — depictions unique in the world", es: "Bovinos neolíticos pintados — representaciones únicas en el mundo" }, wikipedia: "File:Laas Geel single cow.jpg" },
        { name: { fr: "Paysage de vallée — cadre naturel autour du confluent", en: "Valley landscape — natural setting around the confluence", es: "Paisaje del valle — entorno natural alrededor de la confluencia" }, wikipedia: "File:Laas Geel rock.jpg" },
        { name: { fr: "Site de Dhagah Kure — peintures rupestres secondaires proches", en: "Dhagah Kure site — nearby secondary rock paintings", es: "Sitio de Dhagah Kure — pinturas rupestres secundarias cercanas" }, wikipedia: "File:Laas Geel, 2024.jpg" },
      ],
    },
    {
      id: 2,
      name: "Berbera",
      region: { fr: "Somaliland, côte du Golfe d'Aden", en: "Somaliland, Gulf of Aden coast", es: "Somalilandia, costa del golfo de Adén" },
      description: {
        fr: "Berbera est le principal port du Somaliland et une ville d'une grande valeur historique, ancien comptoir caravanier sur la route de l'encens et des esclaves. Ses plages de sable blanc bordées de palmiers et ses eaux translucides du golfe d'Aden en font une station balnéaire confidentielle et authentique. Les ruines ottomanes, les vieilles maisons de corail et le marché animé témoignent de son passé commerçant.",
        en: "Berbera is Somaliland's main port and a town of great historical value, a former caravan trading post on the incense and slave route. Its palm-lined white sand beaches and translucent Gulf of Aden waters make it an off-the-radar, authentic seaside town. Ottoman ruins, old coral houses and a lively market bear witness to its trading past.",
        es: "Berbera es el principal puerto de Somalilandia y una ciudad de gran valor histórico, antiguo enclave caravanero en la ruta del incienso y de los esclavos. Sus playas de arena blanca bordeadas de palmeras y sus aguas translúcidas del golfo de Adén la convierten en una localidad costera discreta y auténtica. Las ruinas otomanas, las antiguas casas de coral y el animado mercado dan fe de su pasado comercial.",
      },
      wikipedia: "Berbera",
      tags: ["Plage", "Histoire"],
      mustSee: [
        { name: { fr: "Plage de Berbera — plages immaculées sur le golfe d'Aden", en: "Berbera beach — pristine beaches on the Gulf of Aden", es: "Playa de Berbera — playas inmaculadas en el golfo de Adén" }, wikipedia: "File:Clean of berbera beach.jpg" },
        { name: { fr: "Vieux quartier colonial", en: "Old colonial quarter", es: "Antiguo barrio colonial" }, wikipedia: "File:Berbera Somaliland view northeast.JPG" },
        { name: { fr: "Port de Berbera — activité portuaire et pêche traditionnelle", en: "Port of Berbera — port activity and traditional fishing", es: "Puerto de Berbera — actividad portuaria y pesca tradicional" }, wikipedia: "File:Port_de_Berbera.jpg" },
        { name: { fr: "Récifs coralliens du golfe d'Aden — snorkeling et plongée", en: "Gulf of Aden coral reefs — snorkelling and diving", es: "Arrecifes de coral del golfo de Adén — esnórquel y buceo" }, wikipedia: "Gulf_of_Aden" },
      ],
    },
    {
      id: 3,
      name: "Hargeisa",
      region: { fr: "Somaliland, capitale", en: "Somaliland, capital", es: "Somalilandia, capital" },
      description: {
        fr: "Hargeisa est la capitale du Somaliland, région autonome autoproclamée depuis 1991 qui fonctionne comme un état indépendant de facto avec ses propres institutions, monnaie et passeport. La ville est relativement sûre et animée, avec un marché central coloré, des mosquées historiques et le monument de l'avion de guerre transformé en symbole de résistance. C'est la porte d'entrée pour tous les voyageurs souhaitant explorer le Somaliland.",
        en: "Hargeisa is the capital of Somaliland, a self-declared autonomous region since 1991 that functions as a de facto independent state with its own institutions, currency and passport. The city is relatively safe and lively, with a colourful central market, historic mosques and the war-plane monument turned symbol of resistance. It's the gateway for any traveller wishing to explore Somaliland.",
        es: "Hargeisa es la capital de Somalilandia, región autónoma autoproclamada desde 1991 que funciona como un estado independiente de facto con sus propias instituciones, moneda y pasaporte. La ciudad es relativamente segura y animada, con un colorido mercado central, mezquitas históricas y el monumento del avión de guerra convertido en símbolo de resistencia. Es la puerta de entrada para todo viajero que desee explorar Somalilandia.",
      },
      wikipedia: "Hargeisa",
      tags: ["Ville", "Culture", "Shopping", "Histoire"],
      mustSee: [
        { name: { fr: "Avion-monument de la guerre civile — symbole de la résistance du Somaliland", en: "Civil war plane monument — symbol of Somaliland's resistance", es: "Avión-monumento de la guerra civil — símbolo de la resistencia de Somalilandia" }, wikipedia: "File:New rebuilt of Hargeisa War Memorial.jpg" },
        { name: { fr: "Marché central — épices, tissus et vie locale", en: "Central market — spices, textiles and local life", es: "Mercado central — especias, telas y vida local" }, wikipedia: "File:Street Market Hargeisa, Somaliland (29322262370).jpg" },
      ],
    },
    {
      id: 4,
      name: "Mogadiscio",
      region: { fr: "Banadir (capitale fédérale)", en: "Banadir (federal capital)", es: "Banadir (capital federal)" },
      description: {
        fr: "Mogadiscio, l'une des plus anciennes villes de la Corne de l'Afrique, se reconstruit progressivement après des décennies de guerre civile. Sa vieille ville (Hamarweyne) avec ses maisons arabes et ses mosquées médiévales reprend vie, et quelques hôtels de luxe accueillent les visiteurs avec une sécurité privée renforcée. La visite reste réservée aux voyageurs expérimentés avec guide et sécurité privée, en raison des risques d'attentats.",
        en: "Mogadishu, one of the oldest cities in the Horn of Africa, is gradually being rebuilt after decades of civil war. Its old town (Hamarweyne), with its Arab houses and medieval mosques, is coming back to life, and a few luxury hotels welcome visitors with reinforced private security. A visit remains reserved for experienced travellers with a guide and private security, due to the risk of attacks.",
        es: "Mogadiscio, una de las ciudades más antiguas del Cuerno de África, se reconstruye progresivamente tras décadas de guerra civil. Su casco antiguo (Hamarweyne), con sus casas árabes y mezquitas medievales, vuelve a la vida, y algunos hoteles de lujo acogen a los visitantes con seguridad privada reforzada. La visita sigue reservada a viajeros experimentados con guía y seguridad privada, debido al riesgo de atentados.",
      },
      wikipedia: "Mogadishu",
      tags: ["Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Cathédrale de Mogadiscio — édifice colonial en ruines partielles", en: "Mogadishu Cathedral — partially ruined colonial building", es: "Catedral de Mogadiscio — edificio colonial parcialmente en ruinas" }, wikipedia: "Mogadishu_Cathedral" },
        { name: { fr: "Plage de Lido — front de mer qui renaît peu à peu", en: "Lido Beach — a seafront gradually coming back to life", es: "Playa de Lido — paseo marítimo que renace poco a poco" }, wikipedia: "Mogadishu" },
        { name: { fr: "Marché Bakara — grand marché animé (avec précautions)", en: "Bakara Market — large lively market (with precautions)", es: "Mercado Bakara — gran mercado animado (con precauciones)" }, wikipedia: "File:Bakaara Market.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le coût de la vie en Somalie varie fortement selon la région. Le Somaliland est relativement abordable avec des prix similaires à l'Éthiopie voisine. Mogadiscio est plus chère en raison des frais de sécurité importants. Le dollar américain est largement accepté aux côtés du shilling somalien.",
      en: "The cost of living in Somalia varies greatly by region. Somaliland is relatively affordable, with prices similar to neighbouring Ethiopia. Mogadishu is pricier due to significant security costs. The US dollar is widely accepted alongside the Somali shilling.",
      es: "El coste de vida en Somalia varía mucho según la región. Somalilandia es relativamente asequible, con precios similares a los de la vecina Etiopía. Mogadiscio es más cara debido a los importantes gastos de seguridad. El dólar estadounidense es ampliamente aceptado junto al chelín somalí.",
    },
    currency: "SOS",
    exchangeRate: "1€ ≈ 640 SOS (Somaliland: shilling du Somaliland)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse simple (Hargeisa)", en: "Simple guesthouse (Hargeisa)", es: "Guesthouse sencillo (Hargeisa)" }, range: "15–30 €" },
          { label: { fr: "Hôtel milieu de gamme", en: "Mid-range hotel", es: "Hotel de gama media" }, range: "40–80 €" },
          { label: { fr: "Hôtel sécurisé (Mogadiscio)", en: "Secured hotel (Mogadishu)", es: "Hotel con seguridad (Mogadiscio)" }, range: "100–200 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Canjeero (crêpes) + viande, restaurant local", en: "Canjeero (flatbread) + meat, local restaurant", es: "Canjeero (tortitas) + carne, restaurante local" }, range: "3–7 €" },
          { label: { fr: "Restaurant milieu de gamme", en: "Mid-range restaurant", es: "Restaurante de gama media" }, range: "10–20 €" },
          { label: { fr: "Thé somalien (shaax) + gâteaux", en: "Somali tea (shaax) + pastries", es: "Té somalí (shaax) + pasteles" }, range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Taxi en ville (Hargeisa)", en: "Taxi in town (Hargeisa)", es: "Taxi en la ciudad (Hargeisa)" }, range: "2–5 €" },
          { label: { fr: "Minibus Hargeisa–Berbera", en: "Minibus Hargeisa–Berbera", es: "Minibús Hargeisa–Berbera" }, range: "5–10 €" },
          { label: { fr: "Guide + véhicule pour Laas Geel", en: "Guide + vehicle for Laas Geel", es: "Guía + vehículo para Laas Geel" }, range: "40–80 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée site de Laas Geel", en: "Laas Geel site entry", es: "Entrada al sitio de Laas Geel" }, range: "10–20 €" },
          { label: { fr: "Sécurité privée Mogadiscio (obligatoire)", en: "Private security in Mogadishu (mandatory)", es: "Seguridad privada en Mogadiscio (obligatoria)" }, range: "150–300 €/j" },
          { label: { fr: "Sortie snorkeling Berbera", en: "Snorkelling trip in Berbera", es: "Salida de esnórquel en Berbera" }, range: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "60–90 €/j", desc: { fr: "Somaliland uniquement : guesthouse, nourriture locale, transports publics", en: "Somaliland only: guesthouse, local food, public transport", es: "Solo Somalilandia: guesthouse, comida local, transporte público" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "120–250 €/j", desc: { fr: "Hôtel correct, guide, sécurité à Mogadiscio si nécessaire", en: "Decent hotel, guide, security in Mogadishu if needed", es: "Hotel correcto, guía, seguridad en Mogadiscio si es necesario" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días" },
      route: { fr: "Hargeisa → Laas Geel → Berbera → Hargeisa", en: "Hargeisa → Laas Geel → Berbera → Hargeisa", es: "Hargeisa → Laas Geel → Berbera → Hargeisa" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Hargeisa (via Addis ou Dubaï)", en: "Return flight Paris–Hargeisa (via Addis Ababa or Dubai)", es: "Vuelo ida y vuelta Madrid–Hargeisa (vía Addis Abeba o Dubái)" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)" }, amount: "105–210 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local" }, amount: "100–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "150–250 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees", es: "Actividades + entradas" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Hargeisa (via Dubaï)", en: "Return flight Paris–Hargeisa (via Dubai)", es: "Vuelo ida y vuelta Madrid–Hargeisa (vía Dubái)" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)", es: "Alojamiento (7 noches)" }, amount: "280–560 €" },
            { label: { fr: "Location véhicule + guide", en: "Vehicle rental + guide", es: "Alquiler de vehículo + guía" }, amount: "700–1 000 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "300–500 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees", es: "Actividades + entradas" }, amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "Vols via Dubaï (flydubai vers Hargeisa), Addis-Abeba (Ethiopian Airlines) ou Nairobi (Kenya Airways). Pas de vol direct Paris–Somaliland.", en: "Flights via Dubai (flydubai to Hargeisa), Addis Ababa (Ethiopian Airlines) or Nairobi (Kenya Airways). No direct flight Paris–Somaliland.", es: "Vuelos vía Dubái (flydubai a Hargeisa), Addis Abeba (Ethiopian Airlines) o Nairobi (Kenya Airways). Sin vuelo directo a Somalilandia." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Somaliland : visa à l'arrivée à l'aéroport de Hargeisa (20–30 USD). Somalie fédérale : visa difficile à obtenir, formalités complexes.", en: "Somaliland: visa on arrival at Hargeisa airport ($20–30). Federal Somalia: visa difficult to obtain, complex procedures.", es: "Somalilandia: visado a la llegada en el aeropuerto de Hargeisa (20–30 USD). Somalia federal: visado difícil de obtener, trámites complejos." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Dollar américain (USD) largement accepté. Shilling du Somaliland en usage local. Pas de carte bancaire internationale acceptée.", en: "US dollar (USD) widely accepted. Somaliland shilling used locally. No international bank cards accepted.", es: "Dólar estadounidense (USD) ampliamente aceptado. Chelín de Somalilandia de uso local. No se aceptan tarjetas bancarias internacionales." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Somali (langue nationale), arabe (deuxième langue). Anglais compris dans les milieux commerciaux du Somaliland.", en: "Somali (national language), Arabic (second language). English understood in Somaliland's business circles.", es: "Somalí (lengua nacional), árabe (segunda lengua). El inglés se entiende en los círculos comerciales de Somalilandia." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G (britannique à 3 broches). Tension 220V. Générateurs fréquents, coupures habituelles.", en: "Type G (British 3-pin). 220V. Generators common, power cuts frequent.", es: "Tipo G (británico de 3 clavijas). Tensión 220V. Generadores frecuentes, cortes habituales." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Vaccin fièvre jaune recommandé (peut être exigé). Paludisme dans les zones basses. Méningite, hépatites A/B conseillés. Eau en bouteille impérative.", en: "Yellow fever vaccine recommended (may be required). Malaria in low-lying areas. Meningitis, hepatitis A/B advised. Bottled water essential.", es: "Se recomienda vacuna contra la fiebre amarilla (puede ser exigida). Malaria en zonas bajas. Se aconsejan meningitis, hepatitis A/B. Agua embotellada imprescindible." } },
    { icon: "⚠️", label: { fr: "Sécurité — Somaliland", en: "Safety — Somaliland", es: "Seguridad — Somalilandia" }, value: { fr: "Le Somaliland est relativement stable. Laas Geel et Berbera sont accessibles avec un guide local. Respecter les règles locales (tenue, photographies des sites militaires interdites).", en: "Somaliland is relatively stable. Laas Geel and Berbera are accessible with a local guide. Follow local rules (dress code, photographing military sites forbidden).", es: "Somalilandia es relativamente estable. Laas Geel y Berbera son accesibles con guía local. Respetar las normas locales (vestimenta, fotografiar instalaciones militares prohibido)." } },
    { icon: "🚫", label: { fr: "Sécurité — Somalie fédérale", en: "Safety — Federal Somalia", es: "Seguridad — Somalia federal" }, value: { fr: "Mogadiscio et le reste de la Somalie fédérale sont classés en zone rouge absolue par le MEAE. Risque élevé d'attentats (Al-Shabaab), enlèvements et violence. Sécurité privée obligatoire si déplacement professionnel indispensable.", en: "Mogadishu and the rest of federal Somalia are classified as an absolute no-go zone by official travel advisories. High risk of attacks (Al-Shabaab), kidnappings and violence. Private security mandatory if essential business travel is required.", es: "Mogadiscio y el resto de Somalia federal están clasificados como zona roja absoluta. Alto riesgo de atentados (Al-Shabaab), secuestros y violencia. Seguridad privada obligatoria si el desplazamiento profesional es indispensable." } },
  ],
};
