export const LIBERIA = {
  code: "LBR",
  numericId: 430,
  name: { fr: "Libéria", en: "Liberia", es: "Liberia", de: "Liberia" },
  emoji: "🇱🇷",
  capital: { fr: "Monrovia", en: "Monrovia", es: "Monrovia", de: "Monrovia" },
  language: { fr: "Anglais (officiel)", en: "English (official)", es: "Inglés (oficial)", de: "Englisch (offiziell)" },
  currency: { fr: "Dollar libérien (LRD)", en: "Liberian Dollar (LRD)", es: "Dólar liberiano (LRD)", de: "Liberianischer Dollar (LRD)" },
  timezone: "UTC",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 850, tripMid: 1700,
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
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Libéria, seul pays d'Afrique subsaharienne jamais colonisé par une puissance européenne, a été fondé en 1847 par des esclaves affranchis américains. Le parc national de Sapo, l'un des derniers grands blocs de forêt primaire d'Afrique de l'Ouest, abrite éléphants de forêt, hippopotames pygmées et chimpanzés. Ses plages atlantiques sauvages et son histoire unique en font une destination pour explorateurs.", en: "Liberia, the only country in sub-Saharan Africa never colonised by a European power, was founded in 1847 by freed American slaves. Sapo National Park, one of the last great blocks of primary forest in West Africa, is home to forest elephants, pygmy hippos and chimpanzees. Its wild Atlantic beaches and unique history make it a destination for explorers.", es: "Liberia, el único país del África subsahariana nunca colonizado por una potencia europea, fue fundado en 1847 por esclavos liberados estadounidenses. El parque nacional de Sapo, uno de los últimos grandes bloques de selva primaria del África Occidental, alberga elefantes de bosque, hipopótamos pigmeos y chimpancés. Sus playas atlánticas salvajes y su historia única lo convierten en un destino para exploradores.", de: "Liberia, das einzige Land in Afrika südlich der Sahara, das jemals von einer europäischen Macht kolonisiert wurde, wurde 1847 von freigelassenen amerikanischen Sklaven gegründet. Der Sapo-Nationalpark, einer der letzten großen Primärwaldblöcke in Westafrika, ist die Heimat von Waldelefanten, Zwergflusspferden und Schimpansen. Seine wilden Atlantikstrände und seine einzigartige Geschichte machen es zu einem Ziel für Entdecker.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche avec un temps ensoleillé, des routes praticables et une faune plus visible dans les forêts de Sapo. Températures de 27–31°C, idéal pour le surf et les plages.", en: "Dry season with sunny weather, passable roads and more visible wildlife in the Sapo forests. Temperatures of 27–31°C, ideal for surfing and the beach.", es: "Temporada seca con clima soleado, carreteras transitables y fauna más visible en los bosques de Sapo. Temperaturas de 27–31°C, ideal para el surf y las playas.", de: "Trockenzeit mit sonnigem Wetter, befahrbaren Straßen und besser sichtbarer Tierwelt in den Sapo-Wäldern. Temperaturen 27–31°C, ideal zum Surfen und für Strände.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre", de: "Mai – Oktober" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Temporada de lluvias", de: "Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "Saison des pluies intense (jusqu'à 600 mm/mois à Monrovia en juin). Routes dégradées, certaines zones forestières inaccessibles. Fortement déconseillé pour le tourisme.", en: "Intense rainy season (up to 600 mm/month in Monrovia in June). Roads deteriorate, some forest areas become inaccessible. Strongly discouraged for tourism.", es: "Temporada de lluvias intensa (hasta 600 mm/mes en Monrovia en junio). Carreteras deterioradas, algunas zonas forestales inaccesibles. Muy desaconsejada para el turismo.", de: "Intensive Regenzeit (bis zu 600 mm/Monat in Monrovia im Juni). Degradierte Straßen, bestimmte unzugängliche Waldgebiete. Für den Tourismus absolut nicht zu empfehlen.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "monrovia",
      name: "Monrovia",
      region: { fr: "Monrovia (côte)", en: "Monrovia (coast)", es: "Monrovia (costa)", de: "Monrovia (Küste)" },
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 140, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 380, icon: "🌧️" },
        { month: "Jun", temp: 23, rain: 600, icon: "🌧️" },
        { month: "Jul", temp: 23, rain: 520, icon: "🌧️" },
        { month: "Aoû", temp: 23, rain: 500, icon: "🌧️" },
        { month: "Sep", temp: 24, rain: 420, icon: "🌧️" },
        { month: "Oct", temp: 25, rain: 280, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 100, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 35,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Parc national de Sapo", en: "Sapo National Park", es: "Parque nacional de Sapo", de: "Sapo-Nationalpark" },
      region: "Sinoe",
      description: {
        fr: "Le parc national de Sapo est le plus grand parc naturel du Libéria et l'une des dernières et plus belles forêts tropicales primaires d'Afrique de l'Ouest. Il abrite des éléphants de forêt, des hippopotames pygmées, des chimpanzés et plus de 600 espèces d'oiseaux dans un écosystème pratiquement intact.", en: "Sapo National Park is Liberia's largest nature reserve and one of the last and most beautiful primary rainforests in West Africa. It is home to forest elephants, pygmy hippos, chimpanzees and over 600 bird species in a virtually intact ecosystem.", es: "El parque nacional de Sapo es la mayor reserva natural de Liberia y una de las últimas y más bellas selvas primarias del África Occidental. Alberga elefantes de bosque, hipopótamos pigmeos, chimpancés y más de 600 especies de aves en un ecosistema prácticamente intacto.", de: "Der Sapo-Nationalpark ist Liberias größter Naturpark und einer der letzten und schönsten Primärregenwälder Westafrikas. Es ist die Heimat von Waldelefanten, Zwergflusspferden, Schimpansen und mehr als 600 Vogelarten in einem nahezu unberührten Ökosystem.",
      },
      wikipedia: "African_forest_elephant",
      tags: ["Nature", "Safari"],
      mustSee: [
        { name: { fr: "Éléphants de forêt d'Afrique de l'Ouest", en: "West African forest elephants", es: "Elefantes de bosque de África Occidental", de: "Westafrikanische Waldelefanten" }, wikipedia: "African_forest_elephant" },
        { name: { fr: "Hippopotames pygmées dans les rivières", en: "Pygmy hippos in the rivers", es: "Hipopótamos pigmeos en los ríos", de: "Zwergflusspferde in Flüssen" }, wikipedia: "Pygmy_hippopotamus" },
        { name: { fr: "Chimpanzés dans la forêt primaire", en: "Chimpanzees in the primary forest", es: "Chimpancés en la selva primaria", de: "Schimpansen im Primärwald" }, wikipedia: "File:Voa_Guinea_chimpanzee_picking_30jan08.jpg" },
        { name: { fr: "Randonnée multi-jours dans la forêt dense", en: "Multi-day trek through the dense forest", es: "Trekking de varios días por la selva densa", de: "Mehrtägige Wanderung im dichten Wald" }, wikipedia: "File:Rio Sapo 2.jpg" },
      ],
    },
    {
      id: 2,
      name: "Monrovia",
      region: { fr: "Grand Cape Mount / Monrovia", en: "Grand Cape Mount / Monrovia", es: "Grand Cape Mount / Monrovia", de: "Grand Cape Mount / Monrovia" },
      description: {
        fr: "Monrovia, fondée en 1822 et nommée en hommage au président américain Monroe, est la seule capitale africaine portant le nom d'un président américain. Son histoire liée aux esclaves affranchis est visible dans les vieux quartiers, et les environs offrent des plages sauvages et des lagunes.", en: "Monrovia, founded in 1822 and named in honour of American President Monroe, is the only African capital named after a US president. Its history tied to freed slaves is visible in the old districts, and the surrounding area offers wild beaches and lagoons.", es: "Monrovia, fundada en 1822 y bautizada en honor al presidente estadounidense Monroe, es la única capital africana que lleva el nombre de un presidente de EE. UU. Su historia ligada a los esclavos liberados es visible en los barrios antiguos, y sus alrededores ofrecen playas salvajes y lagunas.", de: "Monrovia wurde 1822 gegründet und nach dem amerikanischen Präsidenten Monroe benannt. Es ist die einzige afrikanische Hauptstadt, die nach einem amerikanischen Präsidenten benannt ist. Die Geschichte der Stadt, die mit befreiten Sklaven verbunden ist, ist in den alten Vierteln sichtbar, und die Umgebung bietet wilde Strände und Lagunen.",
      },
      wikipedia: "Monrovia",
      tags: ["Ville", "Histoire", "Culture"],
      mustSee: [
        { name: { fr: "Capitol Building du Libéria", en: "Liberian Capitol Building", es: "Capitol Building de Liberia", de: "Kapitol von Liberia" }, wikipedia: "File:Liberian_Capitol_Building.jpg" },
        { name: { fr: "Providence Island — île fondatrice de Monrovia", en: "Providence Island — Monrovia's founding island", es: "Providence Island — isla fundadora de Monrovia", de: "Providence Island – Gründungsinsel von Monrovia" }, wikipedia: "Providence_Island,_Liberia" },
        { name: { fr: "Marché de Waterside à Monrovia", en: "Waterside Market in Monrovia", es: "Mercado de Waterside en Monrovia", de: "Waterside Market in Monrovia" }, wikipedia: "Monrovia" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plages atlantiques", en: "Atlantic beaches", es: "Playas atlánticas", de: "Atlantikstrände" },
      region: { fr: "Margibi / Grand Cape Mount", en: "Margibi / Grand Cape Mount", es: "Margibi / Grand Cape Mount", de: "Margibi / Grand Cape Mount" },
      description: {
        fr: "Le Libéria possède plus de 500 km de côte atlantique avec des plages de sable blanc encore presque désertes. Silver Beach et les plages autour de Robertsport, ancien spot de surf à la réputation grandissante, attirent une poignée d'aventuriers en quête d'une Afrique de l'Ouest préservée.", en: "Liberia boasts over 500 km of Atlantic coastline with white-sand beaches that remain nearly deserted. Silver Beach and the beaches around Robertsport, a long-standing surf spot with a growing reputation, draw a handful of adventurers seeking an unspoiled West Africa.", es: "Liberia cuenta con más de 500 km de costa atlántica con playas de arena blanca todavía casi desiertas. Silver Beach y las playas alrededor de Robertsport, un spot de surf de reputación creciente, atraen a un puñado de aventureros en busca de un África Occidental preservada.", de: "Liberia verfügt über mehr als 500 km Atlantikküste mit weißen Sandstränden, die noch fast menschenleer sind. Silver Beach und die Strände rund um Robertsport, ein alter Surfspot mit wachsendem Ruf, locken eine Handvoll Abenteurer auf der Suche nach dem unberührten Westafrika an.",
      },
      wikipedia: "Robertsport",
      tags: ["Plage", "Nature"],
      mustSee: [
        { name: { fr: "Robertsport — plage de surf mythique", en: "Robertsport — legendary surf beach", es: "Robertsport — mítica playa de surf", de: "Robertsport – legendärer Surfstrand" }, wikipedia: "Robertsport" },
        { name: { fr: "Lac Piso — lagon naturel protégé", en: "Lake Piso — protected natural lagoon", es: "Lago Piso — laguna natural protegida", de: "Piso-See – geschützte natürliche Lagune" }, wikipedia: "Lake_Piso" },
        { name: { fr: "Silver Beach près de Monrovia", en: "Silver Beach near Monrovia", es: "Silver Beach cerca de Monrovia", de: "Silver Beach in der Nähe von Monrovia" }, wikipedia: "Monrovia" },
        { name: { fr: "Coucher de soleil sur l'Atlantique", en: "Sunset over the Atlantic", es: "Atardecer sobre el Atlántico", de: "Sonnenuntergang über dem Atlantik" }, wikipedia: "File:Sunset at Noronhas' beach.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Libéria est une destination abordable avec une infrastructure touristique encore limitée. Le dollar américain est la monnaie de facto dans les hôtels et restaurants, aux côtés du dollar libérien local. La reconstruction post-guerre civile a amélioré les infrastructures de Monrovia.", en: "Liberia is an affordable destination with still-limited tourist infrastructure. The US dollar is the de facto currency in hotels and restaurants, alongside the local Liberian dollar. Post-civil war reconstruction has improved Monrovia's infrastructure.", es: "Liberia es un destino asequible con una infraestructura turística todavía limitada. El dólar estadounidense es la moneda de facto en hoteles y restaurantes, junto al dólar liberiano local. La reconstrucción tras la guerra civil ha mejorado la infraestructura de Monrovia.", de: "Liberia ist ein erschwingliches Reiseziel mit noch begrenzter Tourismusinfrastruktur. Der US-Dollar ist neben dem lokalen liberianischen Dollar die De-facto-Währung in Hotels und Restaurants. Der Wiederaufbau nach dem Bürgerkrieg hat die Infrastruktur von Monrovia verbessert.",
    },
    currency: "LRD",
    exchangeRate: "1€ ≈ 200 LRD (1 USD ≈ 185 LRD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse locale Monrovia", en: "Local guesthouse in Monrovia", es: "Guesthouse local en Monrovia", de: "Lokales Gästehaus Monrovia" }, price: "15–30 €", detail: { fr: "Simple, avec moustiquaire", en: "Simple, with mosquito net", es: "Sencillo, con mosquitera", de: "Einfach, mit Moskitonetz" } },
          { label: { fr: "Hôtel 2–3★ Monrovia", en: "2–3★ hotel in Monrovia", es: "Hotel 2–3★ en Monrovia", de: "Hotel 2–3★ Monrovia" }, price: "40–70 €", detail: { fr: "Clim, eau chaude, sécurité", en: "A/C, hot water, security", es: "Aire acondicionado, agua caliente, seguridad", de: "Klimaanlage, Warmwasser, Sicherheit" } },
          { label: { fr: "Lodge de surf à Robertsport", en: "Surf lodge in Robertsport", es: "Lodge de surf en Robertsport", de: "Robertsport Surf Lodge" }, price: "40–80 €", detail: { fr: "Bord de plage, ambiance détendue", en: "Beachfront, relaxed atmosphere", es: "Frente a la playa, ambiente relajado", de: "Strandnahe, entspannte Atmosphäre" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Jollof rice au marché (rue)", en: "Jollof rice at the market (street)", es: "Jollof rice en el mercado (callejero)", de: "Jollof-Reis auf dem (Straßen-)Markt" }, price: "2–4 €", detail: { fr: "Incontournable d'Afrique de l'Ouest", en: "A West African staple", es: "Imprescindible de África Occidental", de: "Ein Muss in Westafrika" } },
          { label: { fr: "Restaurant local — fufu, cassava", en: "Local restaurant — fufu, cassava", es: "Restaurante local — fufu, mandioca", de: "Lokales Restaurant – Fufu, Maniok" }, price: "4–8 €", detail: { fr: "Cuisine traditionnelle libérienne", en: "Traditional Liberian cuisine", es: "Cocina tradicional liberiana", de: "Traditionelle liberianische Küche" } },
          { label: { fr: "Restaurant expatriés / hôtel Monrovia", en: "Expat restaurant / hotel in Monrovia", es: "Restaurante de expatriados / hotel en Monrovia", de: "Expatriate-Restaurant / Hotel in Monrovia" }, price: "12–25 €", detail: { fr: "Cuisine internationale, poissons", en: "International cuisine, fish", es: "Cocina internacional, pescado", de: "Internationale Küche, Fisch" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bush taxi Monrovia–Robertsport", en: "Bush taxi Monrovia–Robertsport", es: "Bush taxi Monrovia–Robertsport", de: "Buschtaxi Monrovia–Robertsport" }, price: "5–10 €", detail: { fr: "~3h de route", en: "~3h drive", es: "~3h de trayecto", de: "ca. 3 Stunden Fahrt" } },
          { label: { fr: "Moto-taxi à Monrovia", en: "Motorbike taxi in Monrovia", es: "Mototaxi en Monrovia", de: "Motorradtaxi in Monrovia" }, price: "0,50–2 €", detail: { fr: "Transport quotidien courant", en: "Common everyday transport", es: "Transporte cotidiano habitual", de: "Gemeinsamer täglicher Transport" } },
          { label: { fr: "4x4 avec chauffeur / jour (Sapo)", en: "4x4 with driver / day (Sapo)", es: "4x4 con chófer / día (Sapo)", de: "4x4 mit Fahrer / Tag (Sapo)" }, price: "80–120 €", detail: { fr: "Piste forestière difficile", en: "Difficult forest track", es: "Pista forestal difícil", de: "Schwieriger Waldweg" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée parc Sapo + logement forestier / nuit", en: "Sapo park entrance + forest lodging / night", es: "Entrada al parque de Sapo + alojamiento forestal / noche", de: "Eintritt in den Sapo-Park + Unterkunft im Wald / Nacht" }, price: "30–60 €", detail: { fr: "Guide inclus", en: "Guide included", es: "Guía incluido", de: "Anleitung inklusive" } },
          { label: { fr: "Cours de surf à Robertsport", en: "Surf lesson in Robertsport", es: "Clase de surf en Robertsport", de: "Surfunterricht in Robertsport" }, price: "20–40 €", detail: { fr: "Instructeur local, planche fournie", en: "Local instructor, board provided", es: "Instructor local, tabla incluida", de: "Lokaler Lehrer, Verpflegung wird gestellt" } },
          { label: { fr: "Excursion Providence Island en pirogue", en: "Canoe excursion to Providence Island", es: "Excursión en piragua a Providence Island", de: "Kanuausflug zur Insel Providence" }, price: "10–20 €", detail: { fr: "Île historique fondatrice", en: "Historic founding island", es: "Isla histórica fundadora", de: "Historische Gründerinsel" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Guesthouse + nourriture locale + bush taxi", en: "Guesthouse + local food + bush taxi", es: "Guesthouse + comida local + bush taxi", de: "Gästehaus + lokales Essen + Buschtaxi" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "70–110 €/j", desc: { fr: "Hôtel 3★ + restos + 4x4 + guides", en: "3★ hotel + restaurants + 4x4 + guides", es: "Hotel 3★ + restaurantes + 4x4 + guías", de: "3★ Hotel + Restaurants + 4x4 + Führer" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Monrovia (2j) → Harbel & Plantation Firestone (1j) → Robertsport & plages (2j) → Parc de Sapo (4j) → Monrovia (1j)", en: "Monrovia (2d) → Harbel & Firestone Plantation (1d) → Robertsport & beaches (2d) → Sapo Park (4d) → Monrovia (1d)", es: "Monrovia (2d) → Harbel y plantación Firestone (1d) → Robertsport y playas (2d) → Parque de Sapo (4d) → Monrovia (1d)", de: "Monrovia (2T) → Harbel & Plantation Firestone (1T) → Robertsport & Strände (2T) → Sapo Park (4T) → Monrovia (1T)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Monrovia (via escale)", en: "Return flight Paris–Monrovia (via stopover)", es: "Vuelo ida y vuelta Madrid–Monrovia (con escala)", de: "Hin- und Rückflug Paris–Monrovia (mit Zwischenstopp)" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–280 €" },
            { label: { fr: "Transports locaux + bush taxis", en: "Local transport + bush taxis", es: "Transporte local + bush taxis", de: "Nahverkehr + Buschtaxis" }, amount: "120–180 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "80–120 €" },
            { label: { fr: "Activités + Sapo + guides", en: "Activities + Sapo + guides", es: "Actividades + Sapo + guías", de: "Aktivitäten + Sapo + Führer" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Monrovia (via escale)", en: "Return flight Paris–Monrovia (via stopover)", es: "Vuelo ida y vuelta Madrid–Monrovia (con escala)", de: "Hin- und Rückflug Paris–Monrovia (mit Zwischenstopp)" }, amount: "500–750 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "550–800 €" },
            { label: { fr: "4x4 privatif + chauffeur + guides", en: "Private 4x4 + driver + guides", es: "4x4 privado + chófer + guías", de: "Privater 4x4 + Fahrer + Guides" }, amount: "350–500 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "180–250 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entrance fees", es: "Actividades + entradas", de: "Aktivitäten + Einträge" }, amount: "150–200 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~9–10h (via Bruxelles, Casablanca ou Addis-Abeba — pas de direct)", en: "~9–10h (via Brussels, Casablanca or Addis Ababa — no direct flight)", es: "~9–10h (vía Bruselas, Casablanca o Adís Abeba — sin vuelo directo)", de: "ca. 9–10 Std. (über Brüssel, Casablanca oder Addis Abeba – kein Direktflug)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (85 $)", en: "Visa required — e-Visa available online (85 $)", es: "Visado obligatorio — e-Visa disponible en línea (85 $)", de: "Visum erforderlich – E-Visum online verfügbar (85 $)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dollar libérien (LRD) + dollar américain accepté partout — espèces indispensables", en: "Liberian dollar (LRD) + US dollar accepted everywhere — cash essential", es: "Dólar liberiano (LRD) + dólar estadounidense aceptado en todas partes — efectivo indispensable", de: "Liberianischer Dollar (LRD) + US-Dollar werden überall akzeptiert – Bargeld erforderlich" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (officiel et courant) — langue unique en Afrique de l'Ouest", en: "English (official and widely spoken) — unique among West African countries", es: "Inglés (oficial y habitual) — idioma único en África Occidental", de: "Englisch (offiziell und fließend) – einzigartige Sprache in Westafrika" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B (comme aux États-Unis) — 120 V (adaptateur nécessaire)", en: "Type A/B (as in the United States) — 120V (adapter required)", es: "Tipo A/B (como en Estados Unidos) — 120 V (adaptador necesario)", de: "Typ A/B (wie in den Vereinigten Staaten) – 120 V (Adapter erforderlich)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarial treatment MANDATORY + yellow fever vaccine MANDATORY — bottled water only", es: "Antipalúdico OBLIGATORIO + fiebre amarilla OBLIGATORIA — solo agua embotellada", de: "OBLIGATORISCHES Malariamittel + OBLIGATORISCHES Gelbfiebermittel – nur Wasser in Flaschen" } },
    { icon: "🛣️", label: { fr: "Routes", en: "Roads", es: "Carreteras", de: "Straßen" }, value: { fr: "Routes souvent en mauvais état hors de Monrovia — 4x4 recommandé en saison sèche", en: "Roads often in poor condition outside Monrovia — 4x4 recommended in the dry season", es: "Carreteras a menudo en mal estado fuera de Monrovia — se recomienda 4x4 en temporada seca", de: "Straßen außerhalb von Monrovia oft in schlechtem Zustand – 4x4 wird in der Trockenzeit empfohlen" } },
    { icon: "🔒", label: { fr: "Sécurité", en: "Safety", es: "Seguridad", de: "Sicherheit" }, value: { fr: "Situation stable depuis 2003 — quartiers de Monrovia à éviter la nuit, consulter le Quai d'Orsay", en: "Stable situation since 2003 — some Monrovia neighbourhoods best avoided at night, check government travel advisories", es: "Situación estable desde 2003 — algunos barrios de Monrovia mejor evitarlos de noche, consultar las alertas oficiales de viaje", de: "Stabile Situation seit 2003 – Gebiete in Monrovia, die man nachts meiden sollte, konsultieren Sie den Quai d'Orsay" } },
  ],
};
