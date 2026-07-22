export const MAURITIUS = {
  code: "MUS",
  numericId: 480,
  name: { fr: "Île Maurice", en: "Mauritius", es: "Mauricio" },
  emoji: "🇲🇺",
  capital: { fr: "Port-Louis", en: "Port Louis", es: "Port Louis" },
  language: { fr: "Anglais, Français, Créole mauricien", en: "English, French, Mauritian Creole", es: "Inglés, francés, criollo mauriciano" },
  currency: { fr: "Roupie mauricienne (MUR)", en: "Mauritian Rupee (MUR)", es: "Rupia mauriciana (MUR)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 170,
    tripMin: 2000, tripMid: 6000,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 3,
  },
  description: {
    fr: "L'île Maurice est le paradis de l'océan Indien : lagons turquoise protégés par la 3e plus grande barrière de corail du monde, plages de sable blanc encerclées de cocotiers, Blue Bay Marine Park (UNESCO), couleurs de la Terre des 7 couleurs et culture créole métissée, indienne et française.",
    en: "Mauritius is the Indian Ocean's paradise: turquoise lagoons protected by the world's 3rd largest coral reef, white sand beaches ringed with coconut palms, Blue Bay Marine Park (UNESCO), the colours of the Seven Coloured Earths, and a blended Creole, Indian and French culture.",
    es: "Mauricio es el paraíso del océano Índico: lagunas turquesas protegidas por la tercera barrera de coral más grande del mundo, playas de arena blanca rodeadas de cocoteros, el Blue Bay Marine Park (UNESCO), los colores de la Tierra de los 7 colores y una cultura mestiza criolla, india y francesa.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Novembre", en: "May – November", es: "Mayo – Noviembre" },
      label: { fr: "Saison fraîche et sèche", en: "Cool, dry season", es: "Estación fresca y seca" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : températures idéales (22–26°C), peu de pluie, lagons calmes. Idéal pour la plongée et les randonnées.",
        en: "The best time to visit: ideal temperatures (22–26°C), little rain, calm lagoons. Ideal for diving and hiking.",
        es: "Mejor período: temperaturas ideales (22–26°C), poca lluvia, lagunas tranquilas. Ideal para el buceo y las caminatas.",
      },
      icon: "🐢",
    },
    {
      months: { fr: "Décembre – Avril", en: "December – April", es: "Diciembre – Abril" },
      label: { fr: "Saison chaude (cyclones possibles)", en: "Hot season (cyclones possible)", es: "Estación cálida (posibles ciclones)" },
      color: "#ef4444",
      description: {
        fr: "Chaud et humide (28–32°C), risque de cyclones de janvier à mars. Végétation luxuriante, tarifs plus bas.",
        en: "Hot and humid (28–32°C), cyclone risk from January to March. Lush vegetation, lower prices.",
        es: "Cálido y húmedo (28–32°C), riesgo de ciclones de enero a marzo. Vegetación exuberante, precios más bajos.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "port_louis",
      name: "Port-Louis",
      region: { fr: "Nord-Ouest", en: "Northwest", es: "Noroeste" },
      data: [
        { month: "Jan", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Fév", temp: 29, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 22, rain: 40,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 29, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Côte Nord — Grand Baie & Trou aux Biches", en: "North Coast — Grand Baie & Trou aux Biches", es: "Costa Norte — Grand Baie y Trou aux Biches" },
      region: { fr: "Grand Baie / Rivière du Rempart", en: "Grand Baie / Rivière du Rempart", es: "Grand Baie / Rivière du Rempart" },
      description: {
        fr: "La côte nord est la plus animée de l'île : Trou aux Biches, plage de carte postale avec un lagon transparent, Grand Baie pour le shopping et la vie nocturne, et Tamarin où l'on nage avec les dauphins sauvages le matin — une expérience unique en pleine mer.",
        en: "The north coast is the island's liveliest: Trou aux Biches, a postcard beach with a crystal-clear lagoon, Grand Baie for shopping and nightlife, and Tamarin where you can swim with wild dolphins in the morning — a unique experience out at sea.",
        es: "La costa norte es la más animada de la isla: Trou aux Biches, una playa de postal con una laguna transparente, Grand Baie para las compras y la vida nocturna, y Tamarin, donde se nada con delfines salvajes por la mañana — una experiencia única en alta mar.",
      },
      wikipedia: "File:Grand Baie, La Cuvette Beach.jpg",
      tags: ["Plage", "Safari"],
      mustSee: [
        { name: { fr: "Nager avec les dauphins sauvages (Tamarin)", en: "Swimming with wild dolphins (Tamarin)", es: "Nadar con delfines salvajes (Tamarin)" }, wikipedia: "Indo-Pacific_bottlenose_dolphin" },
        { name: { fr: "Trou aux Biches — lagon turquoise parfait", en: "Trou aux Biches — perfect turquoise lagoon", es: "Trou aux Biches — laguna turquesa perfecta" }, wikipedia: "File:Aerial_view_of_Trou-aux-Biches,_Mauritius_(53697980183).jpg" },
        { name: { fr: "Île Plate et Île Gabriel — snorkel vierge", en: "Île Plate and Île Gabriel — unspoiled snorkelling", es: "Île Plate e Île Gabriel — snorkel virgen" }, wikipedia: "File:Trou-aux-Biches (3).jpg" },
        { name: { fr: "Grand Baie Bazaar — shopping & vie nocturne", en: "Grand Baie Bazaar — shopping & nightlife", es: "Grand Baie Bazaar — compras y vida nocturna" }, wikipedia: "File:Grand Baie, Bazar.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Sud-Ouest — Black River Gorges & Chamarel", en: "Southwest — Black River Gorges & Chamarel", es: "Suroeste — Black River Gorges y Chamarel" },
      region: { fr: "Black River / Savanne", en: "Black River / Savanne", es: "Black River / Savanne" },
      description: {
        fr: "Le sud-ouest concentre les beautés naturelles de l'île : le Parc national Black River Gorges (forêt primaire, kestrel de Maurice), la Terre des 7 couleurs de Chamarel (formations de sable volcanique multicolore unique au monde), et La Gaulette pour le kitesurf.",
        en: "The southwest concentrates the island's natural beauty: Black River Gorges National Park (primary forest, Mauritius kestrel), the Chamarel Seven Coloured Earths (a unique multicoloured volcanic sand formation), and La Gaulette for kitesurfing.",
        es: "El suroeste concentra las bellezas naturales de la isla: el Parque Nacional Black River Gorges (bosque primario, cernícalo de Mauricio), la Tierra de los 7 colores de Chamarel (una formación de arena volcánica multicolor única en el mundo), y La Gaulette para el kitesurf.",
      },
      wikipedia: "Black_River_Gorges_National_Park",
      tags: ["Nature", "Randonnée", "Plage"],
      mustSee: [
        { name: { fr: "Terre des 7 couleurs de Chamarel", en: "Chamarel Seven Coloured Earths", es: "Tierra de los 7 colores de Chamarel" }, wikipedia: "Chamarel" },
        { name: { fr: "Chutes de Chamarel (83 m)", en: "Chamarel Falls (83 m)", es: "Cascadas de Chamarel (83 m)" }, wikipedia: "File:2006-10-02 Chamarel Waterfalls.jpg" },
        { name: { fr: "Kitesurf & windsurf à Le Morne", en: "Kitesurfing & windsurfing at Le Morne", es: "Kitesurf y windsurf en Le Morne" }, wikipedia: "Le_Morne_Brabant" },
        { name: { fr: "Randonnée Black River Gorges — kestrel Maurice", en: "Black River Gorges hike — Mauritius kestrel", es: "Caminata por Black River Gorges — cernícalo de Mauricio" }, wikipedia: "Mauritius_kestrel" },
      ],
    },
    {
      id: 3,
      name: "Rodrigues",
      region: "Rodrigues",
      description: {
        fr: "Rodrigues est l'île sœur de Maurice, à 560 km à l'est : un lagon quatre fois plus grand que l'île elle-même, des fonds marins vierges et un calme absolu. Pas d'hôtel de chaîne, juste des guesthouses familiales, une pêche artisanale et la lenteur des Caraïbes en plein Indien.",
        en: "Rodrigues is Mauritius's sister island, 560 km to the east: a lagoon four times bigger than the island itself, pristine seabeds and absolute calm. No chain hotels, just family guesthouses, artisanal fishing and a Caribbean-like slowness in the middle of the Indian Ocean.",
        es: "Rodrigues es la isla hermana de Mauricio, a 560 km al este: una laguna cuatro veces más grande que la isla misma, fondos marinos vírgenes y una calma absoluta. Sin hoteles de cadena, solo guesthouses familiares, pesca artesanal y la lentitud caribeña en pleno océano Índico.",
      },
      wikipedia: "File:Rodrigues (21238823983).jpg",
      tags: ["Plage", "Détente"],
      mustSee: [
        { name: { fr: "Lagon turquoise — snorkel & kitesurf", en: "Turquoise lagoon — snorkelling & kitesurfing", es: "Laguna turquesa — snorkel y kitesurf" }, wikipedia: "File:Aerial view of Rodrigues, Mauritius.jpg" },
        { name: { fr: "Île aux Cocos — pique-nique désert", en: "Île aux Cocos — deserted island picnic", es: "Île aux Cocos — picnic en isla desierta" }, wikipedia: "File:Île aux Cocos, Rodrigues.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Blue Bay & Îlots du Sud-Est", en: "Blue Bay & Southeast Islets", es: "Blue Bay e islotes del sureste" },
      region: "Grand Port",
      description: {
        fr: "Blue Bay Marine Park est classé UNESCO : la plus belle plage de Maurice, un récif corallien époustouflant en snorkel (coraux cérébral, poissons-perroquets, raies), et des îlots accessibles en bateau — Île aux Cerfs, le plus grand lagon de Maurice.",
        en: "Blue Bay Marine Park is UNESCO-listed: Mauritius's finest beach, a breathtaking coral reef for snorkelling (brain coral, parrotfish, rays), and islets reachable by boat — Île aux Cerfs, Mauritius's largest lagoon.",
        es: "Blue Bay Marine Park está declarado Patrimonio de la Humanidad por la UNESCO: la playa más bella de Mauricio, un arrecife de coral impresionante para hacer snorkel (coral cerebro, peces loro, rayas), e islotes accesibles en barco — Île aux Cerfs, la laguna más grande de Mauricio.",
      },
      wikipedia: "Blue_Bay_Marine_Park",
      tags: ["UNESCO", "Plage"],
      mustSee: [
        { name: { fr: "Snorkel Blue Bay Marine Park (UNESCO)", en: "Snorkelling at Blue Bay Marine Park (UNESCO)", es: "Snorkel en Blue Bay Marine Park (UNESCO)" }, wikipedia: "Blue_Bay_Marine_Park" },
        { name: { fr: "Île aux Cerfs — lagon géant & excursion bateau", en: "Île aux Cerfs — giant lagoon & boat excursion", es: "Île aux Cerfs — laguna gigante y excursión en barco" }, wikipedia: "Île_aux_Cerfs" },
        { name: { fr: "Plongée sous-marine — requins de récif", en: "Scuba diving — reef sharks", es: "Buceo — tiburones de arrecife" }, wikipedia: "Blacktip_reef_shark" },
        { name: { fr: "Pique-nique îlot désert", en: "Deserted islet picnic", es: "Picnic en islote desierto" }, wikipedia: "Blue_Bay_Marine_Park" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'île Maurice est l'une des destinations les plus onéreuses de l'océan Indien, dominée par les resorts all-inclusive haut de gamme. Il est toutefois possible de visiter avec un budget moyen en logeant en guesthouse et en mangeant chez l'habitant.",
      en: "Mauritius is one of the priciest destinations in the Indian Ocean, dominated by upscale all-inclusive resorts. It is still possible to visit on a mid-range budget by staying in guesthouses and eating with locals.",
      es: "Mauricio es uno de los destinos más caros del océano Índico, dominado por resorts todo incluido de alta gama. Aún así, es posible visitarlo con un presupuesto medio alojándose en guesthouses y comiendo con los locales.",
    },
    currency: "MUR",
    exchangeRate: "1€ ≈ 50 MUR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse familiale", en: "Family guesthouse", es: "Guesthouse familiar" }, price: "40–70 €", detail: { fr: "Petit-déjeuner inclus", en: "Breakfast included", es: "Desayuno incluido" } },
          { label: { fr: "Hôtel 3★ front de mer", en: "3★ beachfront hotel", es: "Hotel 3★ frente al mar" }, price: "100–200 €", detail: { fr: "Vue lagon, piscine", en: "Lagoon view, pool", es: "Vista a la laguna, piscina" } },
          { label: { fr: "Resort 5★ all-inclusive", en: "5★ all-inclusive resort", es: "Resort 5★ todo incluido" }, price: "400–1 000 €/pers", detail: { fr: "Ultra-luxe, plage privée", en: "Ultra-luxury, private beach", es: "Ultra lujo, playa privada" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Dholl puri (street food créole)", en: "Dholl puri (Creole street food)", es: "Dholl puri (comida callejera criolla)" }, price: "1–2 €", detail: { fr: "Plat national de rue", en: "The national street dish", es: "Plato callejero nacional" } },
          { label: { fr: "Restaurant local (riz + curry + cari)", en: "Local restaurant (rice + curry)", es: "Restaurante local (arroz + curry)" }, price: "8–15 €", detail: { fr: "Cuisine créole + indienne", en: "Creole + Indian cuisine", es: "Cocina criolla e india" } },
          { label: { fr: "Restaurant hôtel gastronomique", en: "Fine dining hotel restaurant", es: "Restaurante gastronómico de hotel" }, price: "40–80 €", detail: { fr: "Fruits de mer, vue mer", en: "Seafood, sea view", es: "Marisco, vistas al mar" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus (réseau national)", en: "Bus (national network)", es: "Autobús (red nacional)" }, price: "0,5–1 €", detail: { fr: "Couvre toute l'île, lent", en: "Covers the whole island, slow", es: "Cubre toda la isla, lento" } },
          { label: { fr: "Location voiture (recommandée)", en: "Car rental (recommended)", es: "Alquiler de coche (recomendado)" }, price: "35–55 €/j", detail: { fr: "Conduite à gauche", en: "Left-hand drive", es: "Se conduce por la izquierda" } },
          { label: { fr: "Vol Port-Louis–Rodrigues", en: "Flight Port Louis–Rodrigues", es: "Vuelo Port Louis–Rodrigues" }, price: "150–250 €", detail: { fr: "A/R Air Mauritius, 1h30", en: "Return trip on Air Mauritius, 1h30", es: "Ida y vuelta Air Mauritius, 1h30" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Nage avec dauphins (excursion matin)", en: "Swimming with dolphins (morning excursion)", es: "Nado con delfines (excursión matutina)" }, price: "50–80 €", detail: { fr: "Tamarin, 4h", en: "Tamarin, 4h", es: "Tamarin, 4h" } },
          { label: { fr: "Plongée sous-marine (2 plongées)", en: "Scuba diving (2 dives)", es: "Buceo (2 inmersiones)" }, price: "60–90 €", detail: { fr: "Guide + matériel", en: "Guide + equipment", es: "Guía + equipo" } },
          { label: { fr: "Kitesurf initiation (2h)", en: "Kitesurfing lesson (2h)", es: "Iniciación al kitesurf (2h)" }, price: "80–100 €", detail: { fr: "Le Morne ou La Gaulette", en: "Le Morne or La Gaulette", es: "Le Morne o La Gaulette" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "80–120 €/j", desc: { fr: "Guesthouse + cuisine créole + bus + location voiture", en: "Guesthouse + Creole food + bus + car rental", es: "Casa de huéspedes + cocina criolla + autobús + coche de alquiler" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "250–400 €/j", desc: { fr: "Hôtel 3★ front de mer + excursions + restos", en: "3★ beachfront hotel + excursions + restaurants", es: "Hotel 3★ frente al mar + excursiones + restaurantes" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo" }, daily: "700 €+/j", desc: { fr: "Resort 5★ all-inclusive + spa + activités nautic", en: "5★ all-inclusive resort + spa + water activities", es: "Resort 5★ todo incluido + spa + actividades acuáticas" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días" },
      route: {
        fr: "Port-Louis (1j) → Nord & Trou aux Biches (3j) → Chamarel & sud-ouest (2j) → Blue Bay & est (3j) → Rodrigues (3j)",
        en: "Port Louis (1d) → North & Trou aux Biches (3d) → Chamarel & southwest (2d) → Blue Bay & east (3d) → Rodrigues (3d)",
        es: "Port Louis (1d) → Norte y Trou aux Biches (3d) → Chamarel y suroeste (2d) → Blue Bay y este (3d) → Rodrigues (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Île Maurice (direct)", en: "Return flight Paris–Mauritius (direct)", es: "Vuelo ida y vuelta Madrid–Mauricio (directo)" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)" }, amount: "600–900 €" },
            { label: { fr: "Vol + séjour Rodrigues", en: "Flight + stay in Rodrigues", es: "Vuelo + estancia en Rodrigues" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "300–450 €" },
            { label: { fr: "Location voiture + activités", en: "Car rental + activities", es: "Alquiler de coche + actividades" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "6 000 – 9 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Île Maurice (direct)", en: "Return flight Paris–Mauritius (direct)", es: "Vuelo ida y vuelta Madrid–Mauricio (directo)" }, amount: "600–1 000 €" },
            { label: { fr: "Hôtels front de mer (12 nuits)", en: "Beachfront hotels (12 nights)", es: "Hoteles frente al mar (12 noches)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Rodrigues (vol + lodge)", en: "Rodrigues (flight + lodge)", es: "Rodrigues (vuelo + lodge)" }, amount: "700–1 200 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails", es: "Comida y cócteles" }, amount: "800–1 200 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions", es: "Actividades y excursiones" }, amount: "700–1 000 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo" },
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Île Maurice (Business)", en: "Return flight Paris–Mauritius (Business)", es: "Vuelo ida y vuelta Madrid–Mauricio (business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Resorts 5★ all-inclusive (12 nuits)", en: "5★ all-inclusive resorts (12 nights)", es: "Resorts 5★ todo incluido (12 noches)" }, amount: "7 000–12 000 €" },
            { label: { fr: "Spa & activités nautiques", en: "Spa & water activities", es: "Spa y actividades acuáticas" }, amount: "1 000–2 000 €" },
            { label: { fr: "Gastronomie & sorties privées", en: "Fine dining & private outings", es: "Alta gastronomía y salidas privadas" }, amount: "800–1 500 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~11h direct (Air Mauritius, Air France)", en: "~11h direct (Air Mauritius, Air France)", es: "~11h directo (Air Mauritius, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Sans visa 90 jours (Français)", en: "No visa needed for 90 days (French citizens)", es: "Sin visado 90 días (españoles)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Roupie mauricienne (1€ ≈ 50 MUR) — €/USD acceptés hôtels", en: "Mauritian Rupee (1€ ≈ 50 MUR) — EUR/USD accepted in hotels", es: "Rupia mauriciana (1€ ≈ 50 MUR) — se aceptan €/USD en hoteles" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Créole mauricien + Français + Anglais (tous compris)", en: "Mauritian Creole + French + English (all widely understood)", es: "Criollo mauriciano + francés + inglés (todos comprendidos)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G – 230 V (comme UK) — adaptateur recommandé", en: "Type G – 230V (same as UK) — adapter recommended", es: "Tipo G – 230 V (como en el Reino Unido) — adaptador recomendado" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil" }, value: { fr: "Excellente couverture nationale", en: "Excellent nationwide coverage", es: "Excelente cobertura nacional" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Potable en théorie — eau en bouteille recommandée", en: "Technically drinkable — bottled water recommended", es: "Potable en teoría — se recomienda agua embotellada" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Pas de vaccin obligatoire. Dengue possible en saison chaude.", en: "No mandatory vaccines. Dengue fever possible during the hot season.", es: "Sin vacunas obligatorias. Posible dengue en temporada cálida." } },
  ],
};
