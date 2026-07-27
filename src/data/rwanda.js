export const RWANDA = {
  code: "RWA",
  numericId: 646,
  name: { fr: "Rwanda", en: "Rwanda", es: "Ruanda", de: "Ruanda" },
  emoji: "🇷🇼",
  capital: { fr: "Kigali", en: "Kigali", es: "Kigali", de: "Kigali" },
  language: { fr: "Kinyarwanda, Français, Anglais", en: "Kinyarwanda, French, English", es: "Kinyarwanda, francés, inglés", de: "Kinyarwanda, Französisch, Englisch" },
  currency: { fr: "Franc rwandais (RWF)", en: "Rwandan franc (RWF)", es: "Franco ruandés (RWF)", de: "Ruandischer Franken (RWF)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 60, budgetMid: 150,
    tripMin: 3000, tripMid: 6000,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 3,
    ski: 0,
    ville: 1,
    plage: 0,
  },
  description: {
    fr: "Le Rwanda, « pays des mille collines », s'est réinventé en modèle de développement africain. Kigali, ville la plus propre d'Afrique, et le parc des Volcans — dernier refuge des gorilles de montagne — font du Rwanda une destination d'exception, à la fois émouvante et inspirante.", en: "Rwanda, the 'land of a thousand hills', has reinvented itself as a model of African development. Kigali, Africa's cleanest city, and Volcanoes National Park — the last refuge of the mountain gorillas — make Rwanda an exceptional destination, both moving and inspiring.", es: "Ruanda, el «país de las mil colinas», se ha reinventado como modelo de desarrollo africano. Kigali, la ciudad más limpia de África, y el parque de los Volcanes —último refugio de los gorilas de montaña— convierten a Ruanda en un destino excepcional, a la vez conmovedor e inspirador.", de: "Ruanda, das „Land der tausend Hügel“, hat sich als Modell afrikanischer Entwicklung neu erfunden. Kigali, die sauberste Stadt Afrikas, und der Vulkanpark – der letzte Zufluchtsort der Berggorillas – machen Ruanda zu einem außergewöhnlichen Reiseziel, das sowohl bewegend als auch inspirierend ist.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Grande saison sèche", en: "Long dry season", es: "Gran estación seca", de: "Lange Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour les gorilles et le Parc des Volcans. Herbe courte, sentiers praticables. Mois de juin au top.", en: "Best time for gorillas and Volcanoes National Park. Short grass, passable trails. June is the top month.", es: "Mejor época para los gorilas y el parque de los Volcanes. Hierba corta, senderos transitables. Junio es el mejor mes.", de: "Beste Zeit für Gorillas und den Vulkanpark. Kurzes Gras, passierbare Wege. Juni an der Spitze.",
      },
      icon: "🦍",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January", es: "Diciembre – Enero", de: "Dezember – Januar" },
      label: { fr: "Petite saison sèche", en: "Short dry season", es: "Pequeña estación seca", de: "Kurze Trockenzeit" },
      color: "#fb923c",
      description: {
        fr: "Courte saison sèche, bonnes conditions pour les gorilles et les chimpanzés de la forêt de Nyungwe.", en: "Short dry season, good conditions for gorillas and chimpanzees in Nyungwe Forest.", es: "Corta estación seca, buenas condiciones para los gorilas y los chimpancés del bosque de Nyungwe.", de: "Kurze Trockenzeit, gute Bedingungen für Gorillas und Schimpansen im Nyungwe-Wald.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "kigali",
      name: "Kigali",
      region: { fr: "Kigali", en: "Kigali", es: "Kigali", de: "Kigali" },
      data: [
        { month: "Jan", temp: 21, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 21, rain: 110, icon: "☀️" },
        { month: "Mar", temp: 21, rain: 140, icon: "☀️" },
        { month: "Avr", temp: 21, rain: 170, icon: "☀️" },
        { month: "Mai", temp: 20, rain: 110, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 20,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 60,  icon: "☀️" },
        { month: "Oct", temp: 21, rain: 95,  icon: "☀️" },
        { month: "Nov", temp: 21, rain: 110, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 80,  icon: "☀️" },
      ],
    },
    {
      id: "parc_volcans",
      name: { fr: "Parc des Volcans", en: "Volcanoes National Park", es: "Parque de los Volcanes", de: "Vulkanpark" },
      region: { fr: "Rwanda Nord", en: "Northern Rwanda", es: "Ruanda Norte", de: "Ruanda Nord" },
      data: [
        { month: "Jan", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Fév", temp: 15, rain: 80,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 130, icon: "⛅" },
        { month: "Avr", temp: 14, rain: 180, icon: "⛅" },
        { month: "Mai", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 13, rain: 20,  icon: "⛅" },
        { month: "Jul", temp: 13, rain: 5,   icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 10,  icon: "⛅" },
        { month: "Sep", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Oct", temp: 15, rain: 100, icon: "⛅" },
        { month: "Nov", temp: 15, rain: 120, icon: "⛅" },
        { month: "Déc", temp: 15, rain: 70,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Gorilles de montagne — Parc des Volcans", en: "Mountain gorillas — Volcanoes National Park", es: "Gorilas de montaña — Parque de los Volcanes", de: "Berggorillas – Volcanoes Park" },
      region: { fr: "Rwanda Nord", en: "Northern Rwanda", es: "Ruanda Norte", de: "Ruanda Nord" },
      description: {
        fr: "Le Parc national des Volcans est l'un des rares endroits au monde où observer des gorilles de montagne en liberté. Ces primates, proches parents de l'homme, vivent en familles dans les forêts brumeuses des Virunga. Un permis (1 500$) donne accès à une heure inoubliable.", en: "Volcanoes National Park is one of the few places in the world to observe wild mountain gorillas. These primates, close relatives of humans, live in family groups in the misty forests of the Virunga range. A permit ($1,500) grants access to an unforgettable hour with them.", es: "El parque nacional de los Volcanes es uno de los pocos lugares del mundo donde se pueden observar gorilas de montaña en libertad. Estos primates, parientes cercanos del ser humano, viven en familias en los bosques brumosos de los Virunga. Un permiso (1.500$) da acceso a una hora inolvidable.", de: "Der Volcanoes-Nationalpark ist einer der wenigen Orte auf der Welt, an denen man Berggorillas in freier Wildbahn beobachten kann. Diese Primaten, enge Verwandte des Menschen, leben in Familien in den nebligen Wäldern von Virunga. Eine Genehmigung (1.500 $) ermöglicht den Zugang zu einer unvergesslichen Stunde.",
      },
      wikipedia: "Volcanoes_National_Park",
      tags: ["Safari", "Nature", "UNESCO", "Randonnée"],
      mustSee: [
        { name: { fr: "Trekking gorilles de montagne", en: "Mountain gorilla trekking", es: "Trekking con gorilas de montaña", de: "Berggorilla-Trekking" }, wikipedia: "Mountain_gorilla" },
        { name: { fr: "Volcan Karisimbi (4 507 m)", en: "Mount Karisimbi (4,507 m)", es: "Volcán Karisimbi (4.507 m)", de: "Vulkan Karisimbi (4.507 m)" }, wikipedia: "Mount_Karisimbi" },
        { name: { fr: "Forêt brumeuse des Virunga", en: "Virunga misty forest", es: "Bosque brumoso de los Virunga", de: "Virunga-Nebelwald" }, wikipedia: "Virunga_Mountains" },
        { name: "Diane Fossey Tomb (Karisoke)", wikipedia: "Dian_Fossey" },
      ],
    },
    {
      id: 2,
      name: "Kigali",
      region: { fr: "Kigali", en: "Kigali", es: "Kigali", de: "Kigali" },
      description: {
        fr: "Kigali est la capitale la plus propre et la plus moderne d'Afrique sub-saharienne : interdiction des sacs plastiques depuis 2008, rues impeccables, gastronomie dynamique. Le Mémorial du Génocide est une visite essentielle pour comprendre l'histoire rwandaise.", en: "Kigali is the cleanest and most modern capital in sub-Saharan Africa: plastic bags banned since 2008, spotless streets, a dynamic food scene. The Genocide Memorial is an essential visit for understanding Rwandan history.", es: "Kigali es la capital más limpia y moderna del África subsahariana: prohibición de las bolsas de plástico desde 2008, calles impecables, gastronomía dinámica. El Memorial del Genocidio es una visita esencial para comprender la historia ruandesa.", de: "Kigali ist die sauberste und modernste Hauptstadt in Subsahara-Afrika: Verbot von Plastiktüten seit 2008, makellose Straßen, dynamische Gastronomie. Das Genozid-Denkmal ist ein unverzichtbarer Besuch, um die Geschichte Ruandas zu verstehen.",
      },
      wikipedia: "Kigali",
      tags: ["Ville", "Modernité", "Histoire", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Mémorial du Génocide de Kigali", en: "Kigali Genocide Memorial", es: "Memorial del Genocidio de Kigali", de: "Kigali-Genozid-Denkmal" }, wikipedia: "Kigali_Genocide_Memorial" },
        { name: { fr: "Quartier Kimironko — marché des artisans", en: "Kimironko district — craft market", es: "Barrio de Kimironko — mercado de artesanos", de: "Bezirk Kimironko – Kunsthandwerkermarkt" }, wikipedia: "File:Paintings Images.jpg" },
        { name: "Inema Arts Center", wikipedia: "File:Inema Art Center.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Forêt de Nyungwe", en: "Nyungwe Forest", es: "Bosque de Nyungwe", de: "Nyungwe-Wald" },
      region: { fr: "Rwanda Sud-Ouest", en: "South-West Rwanda", es: "Ruanda Suroeste", de: "Ruanda Südwesten" },
      description: {
        fr: "Nyungwe est l'une des forêts tropicales les mieux conservées d'Afrique : 1 000 km² de forêt de montagne abritant des chimpanzés, des colobes angolais (500+), des centaines d'espèces d'oiseaux et une canopée accessible par une passerelle suspendue à 50 m.", en: "Nyungwe is one of the best-preserved rainforests in Africa: 1,000 km² of montane forest home to chimpanzees, Angolan colobus monkeys (500+), hundreds of bird species and a canopy accessible via a suspended walkway 50m up.", es: "Nyungwe es uno de los bosques tropicales mejor conservados de África: 1.000 km² de bosque de montaña que alberga chimpancés, colobos angoleños (más de 500), cientos de especies de aves y un dosel arbóreo accesible mediante una pasarela colgante a 50 m de altura.", de: "Nyungwe ist einer der am besten erhaltenen Tropenwälder Afrikas: 1.000 km² Bergwald beherbergen Schimpansen, angolanische Colobus-Affen (500+), Hunderte von Vogelarten und ein Blätterdach, das über eine 50 m schwebende Fußgängerbrücke erreichbar ist.",
      },
      wikipedia: "File:NYUNGWE.jpg",
      tags: ["Nature", "Safari", "Randonnée"],
      mustSee: [
        { name: { fr: "Trek chimpanzés de Nyungwe", en: "Nyungwe chimpanzee trek", es: "Trekking con chimpancés en Nyungwe", de: "Nyungwe-Schimpansen-Wanderung" }, wikipedia: "Chimpanzee" },
        { name: { fr: "Canopy Walk — passerelle à 50 m", en: "Canopy Walk — 50m suspended walkway", es: "Canopy Walk — pasarela a 50 m", de: "Canopy Walk – Fußgängerbrücke 50 m entfernt" }, wikipedia: "File:Nyungwe canopy walk.jpg" },
        { name: { fr: "Colobes angolais (plus grand groupe d'Afrique)", en: "Angolan colobus monkeys (Africa's largest group)", es: "Colobos angoleños (el mayor grupo de África)", de: "Angolanische Colobus (größte Gruppe in Afrika)" }, wikipedia: "File:Colobus angolensis.jpg" },
        { name: { fr: "Chutes de Kamiranzovu", en: "Kamiranzovu Waterfall", es: "Cascadas de Kamiranzovu", de: "Kamiranzovu-Wasserfälle" }, wikipedia: "File:Kamiranzovu Waterfall.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Lac Kivu", en: "Lake Kivu", es: "Lago Kivu", de: "Kivu-See" },
      region: { fr: "Rwanda Ouest", en: "Western Rwanda", es: "Ruanda Oeste", de: "Ruanda West" },
      description: {
        fr: "Le lac Kivu, partagé avec la RDC, est l'un des plus beaux lacs d'Afrique : eaux bleues entre collines verdoyantes, îles tropicales à explorer en kayak, plages de Gisenyi et Kibuye, et culture de café de spécialité sur les rives.", en: "Lake Kivu, shared with the DRC, is one of the most beautiful lakes in Africa: blue waters between green hills, tropical islands to explore by kayak, the beaches of Gisenyi and Kibuye, and specialty coffee growing along its shores.", es: "El lago Kivu, compartido con la RDC, es uno de los lagos más bellos de África: aguas azules entre colinas verdes, islas tropicales para explorar en kayak, las playas de Gisenyi y Kibuye, y cultivo de café de especialidad en sus orillas.", de: "Der Kivu-See, der mit der Demokratischen Republik Kongo geteilt wird, ist einer der schönsten Seen Afrikas: blaues Wasser zwischen grünen Hügeln, tropische Inseln, die man mit dem Kajak erkunden kann, Strände von Gisenyi und Kibuye und Kaffeespezialitätenkultur an den Ufern.",
      },
      wikipedia: "File:Along Lake Kivu.jpg",
      tags: ["Nature", "Détente", "Aventure"],
      mustSee: [
        { name: { fr: "Gisenyi — bord du lac, plages", en: "Gisenyi — lakeside, beaches", es: "Gisenyi — orilla del lago, playas", de: "Gisenyi – Seeufer, Strände" }, wikipedia: "File:Beach in Gisenyi (Rwanda).JPG" },
        { name: { fr: "Îles Amahoro & Nkombo (kayak)", en: "Amahoro & Nkombo islands (kayaking)", es: "Islas Amahoro y Nkombo (kayak)", de: "Amahoro- und Nkombo-Inseln (Kajak)" }, wikipedia: "File:Amahoro_Island_in_Kivu.jpg" },
        { name: { fr: "Kibuye — ville coloniale & collines", en: "Kibuye — colonial town & hills", es: "Kibuye — ciudad colonial y colinas", de: "Kibuye – Kolonialstadt und Hügel" }, wikipedia: "File:Kibuye view , Rwanda.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Rwanda est cher pour l'Afrique, notamment à cause du permis gorilles (1 500$ l'unité). Kigali est une ville moderne avec des prix intermédiaires. Hors permis et gorilles, le pays reste abordable.", en: "Rwanda is expensive for Africa, mainly due to the gorilla permit ($1,500 each). Kigali is a modern city with mid-range prices. Outside of the gorilla permit, the country remains affordable.", es: "Ruanda es caro para África, sobre todo por el permiso de gorilas (1.500$ cada uno). Kigali es una ciudad moderna con precios intermedios. Fuera del permiso de gorilas, el país sigue siendo asequible.", de: "Ruanda ist für Afrika teuer, vor allem wegen der Gorilla-Genehmigung (1.500 Dollar pro Stück). Kigali ist eine moderne Stadt mit mittleren Preisen. Abgesehen von Genehmigungen und Gorillas bleibt das Land erschwinglich.",
    },
    currency: "RWF",
    exchangeRate: "1€ ≈ 1 300 RWF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / hôtel local", en: "Guesthouse / local hotel", es: "Guesthouse / hotel local", de: "Lokale Pension/Hotel" }, price: "20–50 €", detail: { fr: "Kigali hors luxe", en: "Kigali, non-luxury", es: "Kigali, gama no lujo", de: "Kigali ohne Luxus" } },
          { label: { fr: "Lodge mid-range Volcans", en: "Mid-range lodge, Volcanoes", es: "Lodge de gama media en los Volcanes", de: "Volcanoes-Mittelklasse-Lodge" }, price: "150–300 €", detail: { fr: "Pension complète", en: "Full board", es: "Pensión completa", de: "Vollpension" } },
          { label: { fr: "Lodge luxe (gorilla lodge)", en: "Luxury lodge (gorilla lodge)", es: "Lodge de lujo (gorilla lodge)", de: "Luxus-Lodge (Gorilla-Lodge)" }, price: "500–1 500 €", detail: { fr: "All-inclusive premium", en: "Premium all-inclusive", es: "Todo incluido premium", de: "All-Inclusive-Prämie" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Brochettes de viande (inshis)", en: "Meat skewers (inshis)", es: "Pinchos de carne (inshis)", de: "Fleischspieße (Inshis)" }, price: "3–6 €", detail: { fr: "Street food local", en: "Local street food", es: "Comida callejera local", de: "Lokales Streetfood" } },
          { label: { fr: "Restaurant Kigali", en: "Kigali restaurant", es: "Restaurante en Kigali", de: "Restaurant Kigali" }, price: "10–20 €", detail: { fr: "Cuisine rwandaise moderne", en: "Modern Rwandan cuisine", es: "Cocina ruandesa moderna", de: "Moderne ruandische Küche" } },
          { label: { fr: "Gastronomie lodge", en: "Lodge dining", es: "Gastronomía de lodge", de: "Hüttengastronomie" }, price: "40–60 €", detail: { fr: "Inclus souvent dans le forfait", en: "Often included in the package", es: "A menudo incluida en el paquete", de: "Oft im Paket enthalten" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Moto-taxi (Kigali)", en: "Motorbike taxi (Kigali)", es: "Mototaxi (Kigali)", de: "Motorradtaxi (Kigali)" }, price: "1–3 €", detail: { fr: "Rapide et incontournable", en: "Fast and essential", es: "Rápido e imprescindible", de: "Schnell und unverzichtbar" } },
          { label: { fr: "Minibus Kigali–Ruhengeri", en: "Minibus Kigali–Ruhengeri", es: "Minibús Kigali–Ruhengeri", de: "Kleinbus Kigali–Ruhengeri" }, price: "3–5 €", detail: { fr: "Vers le parc des Volcans", en: "To Volcanoes National Park", es: "Hacia el parque de los Volcanes", de: "Richtung Vulkanpark" } },
          { label: { fr: "Transfert hôtel avec chauffeur", en: "Hotel transfer with driver", es: "Traslado de hotel con conductor", de: "Hoteltransfer mit Fahrer" }, price: "30–60 €", detail: { fr: "Pratique et sûr", en: "Convenient and safe", es: "Práctico y seguro", de: "Praktisch und sicher" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Permis gorilles de montagne", en: "Mountain gorilla permit", es: "Permiso de gorilas de montaña", de: "Genehmigung für Berggorillas" }, price: "1 500 $", detail: { fr: "1h avec une famille, quotas limités", en: "1h with a family group, limited quotas", es: "1h con una familia, cupos limitados", de: "1 Stunde mit der Familie, begrenzte Kontingente" } },
          { label: { fr: "Trek chimpanzés Nyungwe", en: "Nyungwe chimpanzee trek", es: "Trekking con chimpancés en Nyungwe", de: "Nyungwe-Schimpansen-Wanderung" }, price: "100–150 €", detail: { fr: "Demi-journée guidée", en: "Half-day guided", es: "Medio día guiado", de: "Geführter halber Tag" } },
          { label: { fr: "Canopy Walk Nyungwe", en: "Nyungwe Canopy Walk", es: "Canopy Walk en Nyungwe", de: "Canopy Walk Nyungwe" }, price: "30–50 €", detail: { fr: "Passerelle suspendue", en: "Suspended walkway", es: "Pasarela colgante", de: "Abgehängter Gehweg" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "60–100 €/j", desc: { fr: "Hors permis gorilles : guesthouse + cuisine locale", en: "Excluding gorilla permit: guesthouse + local food", es: "Sin el permiso de gorilas: guesthouse + cocina local", de: "Ohne Gorilla-Genehmigung: Gästehaus + lokale Küche" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "200–350 €/j", desc: { fr: "Lodge mid-range + permis gorilles amorti", en: "Mid-range lodge + gorilla permit amortised", es: "Lodge de gama media + permiso de gorilas amortizado", de: "Mittelklasse-Lodge + gepolsterte Gorilla-Genehmigung" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "600 €+/j", desc: { fr: "Gorilla lodge all-inclusive + expériences privées", en: "All-inclusive gorilla lodge + private experiences", es: "Gorilla lodge todo incluido + experiencias privadas", de: "Gorilla Lodge All-Inclusive + private Erlebnisse" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días", de: "8 Tage" },
      route: {
        fr: "Kigali (2j) → Parc des Volcans — gorilles (2j) → Nyungwe (2j) → Lac Kivu (2j)", en: "Kigali (2d) → Volcanoes National Park — gorillas (2d) → Nyungwe (2d) → Lake Kivu (2d)", es: "Kigali (2d) → Parque de los Volcanes — gorilas (2d) → Nyungwe (2d) → Lago Kivu (2d)", de: "Kigali (2 Tage) → Parc des Volcans – Gorillas (2 Tage) → Nyungwe (2 Tage) → Kivusee (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kigali", en: "Return flight Paris–Kigali", es: "Vuelo ida y vuelta Madrid–Kigali", de: "Hin- und Rückflug Paris–Kigali" }, amount: "600–900 €" },
            { label: { fr: "Permis gorilles (1 unité)", en: "Gorilla permit (1 unit)", es: "Permiso de gorilas (1 unidad)", de: "Gorilla-Genehmigung (1 Einheit)" }, amount: "1 350 € (1 500$)" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)", de: "Unterkunft (8 Nächte)" }, amount: "250–450 €" },
            { label: { fr: "Nourriture & transports", en: "Food & transport", es: "Comida y transporte", de: "Essen und Transport" }, amount: "250–400 €" },
            { label: { fr: "Activités Nyungwe & Kivu", en: "Nyungwe & Kivu activities", es: "Actividades en Nyungwe y Kivu", de: "Aktivitäten Nyungwe und Kivu" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "6 000 – 8 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kigali", en: "Return flight Paris–Kigali", es: "Vuelo ida y vuelta Madrid–Kigali", de: "Hin- und Rückflug Paris–Kigali" }, amount: "700–1 000 €" },
            { label: { fr: "Permis gorilles (2 unités)", en: "Gorilla permits (2 units)", es: "Permisos de gorilas (2 unidades)", de: "Gorilla-Genehmigung (2 Einheiten)" }, amount: "2 700 € (3 000$)" },
            { label: { fr: "Lodges mid-range (8 nuits)", en: "Mid-range lodges (8 nights)", es: "Lodges de gama media (8 noches)", de: "Mittelklasse-Lodges (8 Nächte)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Nourriture & excursions", en: "Food & excursions", es: "Comida y excursiones", de: "Essen & Ausflüge" }, amount: "600–1 000 €" },
            { label: { fr: "Transports & extras", en: "Transport & extras", es: "Transporte y extras", de: "Transport & Extras" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "14 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kigali (Business)", en: "Return flight Paris–Kigali (Business)", es: "Vuelo ida y vuelta Madrid–Kigali (Business)", de: "Hin- und Rückflug Paris–Kigali (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Permis gorilles (2–3 unités)", en: "Gorilla permits (2–3 units)", es: "Permisos de gorilas (2–3 unidades)", de: "Gorilla-Genehmigungen (2–3 Einheiten)" }, amount: "2 700–4 050 €" },
            { label: { fr: "Gorilla lodge 5★ (8 nuits)", en: "5★ gorilla lodge (8 nights)", es: "Gorilla lodge 5★ (8 noches)", de: "Gorilla Lodge 5★ (8 Nächte)" }, amount: "4 000–8 000 €" },
            { label: { fr: "Expériences & gastronomie", en: "Experiences & fine dining", es: "Experiencias y gastronomía", de: "Erlebnisse & Gastronomie" }, amount: "800–1 500 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~8h (RwandAir direct ou Kenya Airways, Brussels Airlines)", en: "~8h (RwandAir direct or Kenya Airways, Brussels Airlines)", es: "~8h (RwandAir directo o Kenya Airways, Brussels Airlines)", de: "ca. 8 Std. (RwandAir direkt oder Kenya Airways, Brussels Airlines)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa gratuit à l'arrivée ou e-Visa gratuit en ligne (irembo.gov.rw)", en: "Free visa on arrival or free online e-Visa (irembo.gov.rw)", es: "Visado gratuito a la llegada o e-Visa gratuito en línea (irembo.gov.rw)", de: "Kostenloses Visum bei Ankunft oder kostenloses E-Visum online (irembo.gov.rw)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc rwandais (1€ ≈ 1 300 RWF) — dollars & euros acceptés", en: "Rwandan franc (1€ ≈ 1,300 RWF) — dollars & euros accepted", es: "Franco ruandés (1€ ≈ 1.300 RWF) — dólares y euros aceptados", de: "Ruandischer Franc (1 € ≈ 1.300 RWF) – Dollar und Euro werden akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Kinyarwanda + Anglais (officiel) + Français", en: "Kinyarwanda + English (official) + French", es: "Kinyarwanda + inglés (oficial) + francés", de: "Kinyarwanda + Englisch (offiziell) + Französisch" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/J – 230 V", en: "Type C/J — 230V", es: "Tipo C/J – 230 V", de: "Typ C/J – 230 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture nationale (MTN, Airtel)", en: "Good national coverage (MTN, Airtel)", es: "Buena cobertura nacional (MTN, Airtel)", de: "Gute landesweite Abdeckung (MTN, Airtel)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water", es: "No potable — agua embotellada", de: "Kein Trinkwasser – Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen recommandé, fièvre jaune si pays à risque transité", en: "Antimalarial recommended, yellow fever if transiting a risk country", es: "Antipalúdico recomendado, fiebre amarilla si se transita por un país de riesgo", de: "Empfohlenes Mittel gegen Malaria und Gelbfieber, wenn ein Risikoland durchquert wird" } },
  ],
};
