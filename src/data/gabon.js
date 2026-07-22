export const GABON = {
  code: "GAB",
  numericId: 266,
  name: { fr: "Gabon", en: "Gabon", es: "Gabón" },
  emoji: "🇬🇦",
  capital: { fr: "Libreville", en: "Libreville", es: "Libreville" },
  language: { fr: "Français, Fang, Myene, Nzebi", en: "French, Fang, Myene, Nzebi", es: "Francés, fang, myene, nzebi" },
  currency: { fr: "Franc CFA (XAF)", en: "CFA franc (XAF)", es: "Franco CFA (XAF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 80, budgetMid: 180,
    tripMin: 2500, tripMid: 5000,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 2,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Le Gabon est le sanctuaire de la forêt équatoriale d'Afrique centrale : 80% du territoire couvert par la forêt primaire, 13 parcs nationaux abritant gorilles des plaines, éléphants de forêt, hippopotames de mer sur les plages de Loango, et les mandrills (les plus grandes colonies mondiales au Parc de la Lopé). Un des pays les mieux préservés d'Afrique, peu touristique mais d'une richesse naturelle stupéfiante.",
    en: "Gabon is the sanctuary of Central Africa's equatorial rainforest: 80% of the country is covered in primary forest, and its 13 national parks shelter lowland gorillas, forest elephants, hippos on Loango's beaches, and mandrills, including the world's largest colonies in Lopé National Park. One of Africa's best-preserved countries, it remains little visited yet astonishingly rich in nature.",
    es: "Gabón es el santuario de la selva ecuatorial de África central: el 80% del territorio está cubierto de bosque primario, y sus 13 parques nacionales albergan gorilas de llanura, elefantes de bosque, hipopótamos en las playas de Loango, y los mandriles (las mayores colonias del mundo en el Parque de la Lopé). Uno de los países mejor conservados de África, poco turístico pero de una riqueza natural asombrosa.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre" },
      label: { fr: "Grande saison sèche", en: "Long dry season", es: "Gran temporada seca" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, forêt plus accessible, gorilles plus faciles à observer. Loango : baleines à bosse (juil–sept). Températures 22–28°C.",
        en: "Best time to go: less rain, easier access to the forest, and gorillas are easier to spot. In Loango, humpback whales are present from July to September. Temperatures range from 22 to 28°C.",
        es: "Mejor época: menos lluvia, bosque más accesible, gorilas más fáciles de observar. En Loango: ballenas jorobadas (jul–sept). Temperaturas de 22–28°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January", es: "Diciembre – Enero" },
      label: { fr: "Petite saison sèche", en: "Short dry season", es: "Pequeña temporada seca" },
      color: "#f59e0b",
      description: {
        fr: "Courte période sèche, acceptable pour visiter. Éléphants visibles sur la plage de Loango en décembre.",
        en: "A short dry spell that is still fine for visiting. Elephants can be seen on Loango's beach in December.",
        es: "Breve periodo seco, aceptable para visitar. Elefantes visibles en la playa de Loango en diciembre.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November", es: "Octubre – Noviembre" },
      label: { fr: "Grande saison des pluies", en: "Long rainy season", es: "Gran temporada de lluvias" },
      color: "#ef4444",
      description: {
        fr: "Fortes pluies (300–400mm/mois), forêt difficile d'accès, pistes impraticables. Moins favorable.",
        en: "Heavy rainfall (300–400 mm/month), difficult forest access, and tracks that become impassable. Less favourable.",
        es: "Lluvias intensas (300–400mm/mes), bosque de difícil acceso, pistas intransitables. Menos favorable.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "libreville",
      name: "Libreville",
      region: { fr: "Estuaire (côte)", en: "Estuary (coast)", es: "Estuario (costa)" },
      data: [
        { month: "Jan", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 150, icon: "⛅" },
        { month: "Jun", temp: 24, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 380, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 270, icon: "🌧️" },
      ],
    },
    {
      id: "lope",
      name: "Lopé",
      region: { fr: "Ogooué-Ivindo (centre)", en: "Ogooué-Ivindo (central)", es: "Ogooué-Ivindo (centro)" },
      data: [
        { month: "Jan", temp: 25, rain: 100, icon: "⛅" },
        { month: "Fév", temp: 25, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 200, icon: "⛅" },
        { month: "Avr", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 23, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 25, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 25, rain: 300, icon: "🌧️" },
        { month: "Déc", temp: 25, rain: 150, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Parc national de Loango — Éléphants sur la plage", en: "Loango National Park — Elephants on the Beach", es: "Parque nacional de Loango — Elefantes en la playa" },
      region: { fr: "Ogooué-Maritime", en: "Ogooué-Maritime", es: "Ogooué-Maritime" },
      description: {
        fr: "Loango est l'un des parcs les plus spectaculaires d'Afrique : des éléphants de forêt qui se baignent dans l'océan Atlantique, des hippopotames de mer qui surfent dans les vagues, des baleines à bosse (juillet–septembre), des gorilles des plaines dans la forêt derrière la plage. Un décor où la forêt primaire rencontre la mer — unique au monde.",
        en: "Loango is one of Africa's most spectacular parks: forest elephants bathing in the Atlantic Ocean, hippos in the surf, humpback whales from July to September, and lowland gorillas in the forest just behind the beach. It is a landscape where primary rainforest meets the sea — something truly unique in the world.",
        es: "Loango es uno de los parques más espectaculares de África: elefantes de bosque que se bañan en el océano Atlántico, hipopótamos que surfean entre las olas, ballenas jorobadas (julio–septiembre), gorilas de llanura en el bosque tras la playa. Un escenario donde la selva primaria se encuentra con el mar — único en el mundo.",
      },
      wikipedia: "File:Gabon Loango National Park Elephant with offspring.jpeg",
      tags: ["Safari", "Plage"],
      mustSee: [
        { name: { fr: "Éléphants de forêt sur la plage de Loango (déc–janv)", en: "Forest elephants on Loango beach (Dec–Jan)", es: "Elefantes de bosque en la playa de Loango (dic–ene)" }, wikipedia: "File:Gabon Loango National Park Elephant with offspring.jpeg" },
        { name: { fr: "Baleines à bosse (juillet–septembre) depuis la plage", en: "Humpback whales (July–September) seen from the beach", es: "Ballenas jorobadas (julio–septiembre) desde la playa" }, wikipedia: "File:Syncerus caffer nanus 153689273.jpg" },
        { name: { fr: "Hippopotames de mer dans les vagues", en: "Hippos in the waves", es: "Hipopótamos entre las olas" }, wikipedia: "File:Syncerus caffer nanus 153689273.jpg" },
        { name: { fr: "Gorilles des plaines dans la forêt côtière", en: "Lowland gorillas in the coastal forest", es: "Gorilas de llanura en el bosque costero" }, wikipedia: "File:Western Lowland Gorilla mother and baby.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc de la Lopé — Gorilles et mandrills", en: "Lopé National Park — Gorillas and Mandrills", es: "Parque de la Lopé — Gorilas y mandriles" },
      region: { fr: "Ogooué-Ivindo", en: "Ogooué-Ivindo", es: "Ogooué-Ivindo" },
      description: {
        fr: "La Lopé (UNESCO) est l'un des rares endroits où l'on peut observer des gorilles des plaines occidentaux et des mandrills en groupes de plusieurs centaines d'individus — la plus grande colonie de mandrills au monde. La Lopé est aussi remarquable pour ses paysages : prairie d'altitude entourée de forêt primaire et de falaises rocheuses.",
        en: "Lopé (UNESCO-listed) is one of the rare places where you can see western lowland gorillas and mandrills in groups of several hundred individuals — the largest mandrill colony in the world. Lopé is also remarkable for its landscapes: upland grasslands surrounded by primary forest and rocky cliffs.",
        es: "La Lopé (UNESCO) es uno de los pocos lugares donde se pueden observar gorilas de llanura occidental y mandriles en grupos de varios cientos de individuos — la mayor colonia de mandriles del mundo. La Lopé también destaca por sus paisajes: praderas de altitud rodeadas de bosque primario y acantilados rocosos.",
      },
      wikipedia: "File:La-lopé-gabon.jpg",
      tags: ["UNESCO", "Safari", "Nature"],
      mustSee: [
        { name: { fr: "Observation gorilles des plaines (habitués aux humains)", en: "Western lowland gorilla tracking (habituated groups)", es: "Observación de gorilas de llanura (grupos habituados)" }, wikipedia: "File:La-lopé-gabon.jpg" },
        { name: { fr: "Colonie de mandrills — jusqu'à 1 300 individus", en: "Mandrill colony — up to 1,300 individuals", es: "Colonia de mandriles — hasta 1.300 individuos" }, wikipedia: "File:La-lopé-gabon.jpg" },
        { name: { fr: "Gravures rupestres néolithiques de la Lopé", en: "Lopé's Neolithic rock carvings", es: "Grabados rupestres neolíticos de la Lopé" }, wikipedia: "File:La lopé-rupestre2.jpg" },
        { name: { fr: "Savanes et galeries forestières depuis le lodge", en: "Savannas and gallery forests from the lodge", es: "Sabanas y bosques de galería desde el lodge" }, wikipedia: "File:Lopé National Park village panorama.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Gabon est l'une des destinations les plus chères d'Afrique subsaharienne. Le pétrole a fait monter les prix, et les parcs nationaux exigent des lodges coûteux pour minimiser l'impact touristique. Un voyage au Gabon est un investissement pour des expériences uniques.",
      en: "Gabon is one of the most expensive destinations in sub-Saharan Africa. Oil wealth has pushed prices up, and the national parks rely on costly lodges to keep tourism's impact low. A trip to Gabon is an investment in truly unique experiences.",
      es: "Gabón es uno de los destinos más caros del África subsahariana. El petróleo ha disparado los precios, y los parques nacionales exigen lodges costosos para minimizar el impacto turístico. Un viaje a Gabón es una inversión en experiencias únicas.",
    },
    currency: "XAF",
    exchangeRate: "1€ = 655 XAF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Chambre d'hôte / guesthouse Libreville", en: "Guesthouse / B&B in Libreville", es: "Casa de huéspedes / guesthouse en Libreville" }, price: "50–80 €", detail: { fr: "Milieu de gamme en ville", en: "Mid-range option in the city", es: "Gama media en la ciudad" } },
          { label: { fr: "Hôtel 3★ Libreville", en: "3★ hotel in Libreville", es: "Hotel 3★ en Libreville" }, price: "100–160 €", detail: { fr: "Standard correct, clim, wifi", en: "Decent standard, air conditioning, Wi-Fi", es: "Estándar correcto, aire acondicionado, wifi" } },
          { label: { fr: "Lodge parcs nationaux (Loango, Lopé)", en: "National park lodge (Loango, Lopé)", es: "Lodge en parques nacionales (Loango, Lopé)" }, price: "200–500 €", detail: { fr: "Pension complète + activités", en: "Full board + activities", es: "Pensión completa + actividades" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Cuisine locale dans un boui-boui", en: "Local food at a roadside eatery", es: "Cocina local en un puesto callejero" }, price: "4–10 €", detail: { fr: "Poisson grillé, sauces locales", en: "Grilled fish, local sauces", es: "Pescado a la parrilla, salsas locales" } },
          { label: { fr: "Restaurant mid-range Libreville", en: "Mid-range restaurant in Libreville", es: "Restaurante de gama media en Libreville" }, price: "15–30 €", detail: { fr: "Fruits de mer, cuisine française", en: "Seafood, French cuisine", es: "Marisco, cocina francesa" } },
          { label: { fr: "Restaurant gastronomique Libreville", en: "Fine-dining restaurant in Libreville", es: "Restaurante gastronómico en Libreville" }, price: "35–70 €", detail: { fr: "Cuisine internationale de qualité", en: "High-quality international cuisine", es: "Cocina internacional de calidad" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Taxi partagé urbain", en: "Shared city taxi", es: "Taxi compartido urbano" }, price: "1–3 €", detail: { fr: "Transport local Libreville", en: "Local transport in Libreville", es: "Transporte local en Libreville" } },
          { label: { fr: "Vol intérieur (Libreville–Port-Gentil)", en: "Domestic flight (Libreville–Port-Gentil)", es: "Vuelo interno (Libreville–Port-Gentil)" }, price: "60–130 €", detail: { fr: "Gabon Airlines, Afrijet", en: "Gabon Airlines, Afrijet", es: "Gabon Airlines, Afrijet" } },
          { label: { fr: "Transfer lodge en avion léger ou pirogue", en: "Lodge transfer by light aircraft or pirogue", es: "Traslado al lodge en avioneta o piragua" }, price: "100–300 €", detail: { fr: "Loango et parcs reculés", en: "Loango and remote parks", es: "Loango y parques remotos" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Journée safari Lopé (guide + 4x4)", en: "Full-day Lopé safari (guide + 4x4)", es: "Día de safari en la Lopé (guía + 4x4)" }, price: "80–150 €", detail: { fr: "Gorilles et mandrills", en: "Gorillas and mandrills", es: "Gorilas y mandriles" } },
          { label: { fr: "Tour nocturne tortues Cap Esterias (guide)", en: "Night turtle tour at Cap Esterias (guide)", es: "Tour nocturno de tortugas en Cap Esterias (guía)" }, price: "30–60 €", detail: { fr: "Oct–mars, départ 21h", en: "Oct–Mar, departure at 9 pm", es: "Oct–mar, salida a las 21h" } },
          { label: { fr: "Balade en kayak / pirogue (Loango)", en: "Kayak / pirogue trip (Loango)", es: "Paseo en kayak / piragua (Loango)" }, price: "40–80 €", detail: { fr: "Lagunes et mangroves", en: "Lagoons and mangroves", es: "Lagunas y manglares" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "80–120 €/j", desc: { fr: "Guesthouse Libreville + restaurants locaux + taxi", en: "Guesthouse in Libreville + local restaurants + taxis", es: "Guesthouse en Libreville + restaurantes locales + taxi" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "180–280 €/j", desc: { fr: "Hôtel 3★ + excursions guidées + vols intérieurs", en: "3★ hotel + guided excursions + domestic flights", es: "Hotel 3★ + excursiones guiadas + vuelos internos" }, color: "#3b82f6" },
      { type: { fr: "Lodge", en: "Lodge", es: "Lodge" }, daily: "300–600 €/j", desc: { fr: "Lodge parc national pension complète + safaris", en: "Full-board national park lodge + safaris", es: "Lodge en parque nacional, pensión completa + safaris" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Libreville (3j) → Parc de la Lopé (3j) → Loango (4j)",
        en: "Libreville (3d) → Lopé National Park (3d) → Loango (4d)",
        es: "Libreville (3d) → Parque de la Lopé (3d) → Loango (4d)",
      },
      budgets: [
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Libreville", en: "Return flight Paris–Libreville", es: "Vuelo ida y vuelta Madrid–Libreville" }, amount: "700–1 200 €" },
            { label: { fr: "Hébergement ville (4 nuits)", en: "City accommodation (4 nights)", es: "Alojamiento en ciudad (4 noches)" }, amount: "400–700 €" },
            { label: { fr: "Lodge Lopé (3 nuits, pension complète)", en: "Lopé lodge (3 nights, full board)", es: "Lodge en la Lopé (3 noches, pensión completa)" }, amount: "700–1 200 €" },
            { label: { fr: "Lodge Loango (3 nuits, pension complète)", en: "Loango lodge (3 nights, full board)", es: "Lodge en Loango (3 noches, pensión completa)" }, amount: "900–1 500 €" },
            { label: { fr: "Vols intérieurs + transfers", en: "Domestic flights + transfers", es: "Vuelos internos + traslados" }, amount: "400–700 €" },
            { label: { fr: "Nourriture ville + activités", en: "Meals in town + activities", es: "Comida en la ciudad + actividades" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~7h direct (Air France, Corsair) vers Libreville — liaisons régulières", en: "~7h direct to Libreville (Air France, Corsair) — regular connections", es: "Con conexión hacia Libreville (Air France, Corsair) — conexiones regulares" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "e-Visa obligatoire — disponible en ligne avant le départ (~85€). Valable 90 jours.", en: "e-Visa required — available online before departure (~€85). Valid for 90 days.", es: "e-Visa obligatorio — disponible en línea antes de partir (~85€). Válido 90 días." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Franc CFA BEAC (XAF). 1€ = 655 XAF taux fixe. Carte bancaire dans grands hôtels. Espèces pour les parcs.", en: "BEAC CFA franc (XAF). €1 = 655 XAF at a fixed rate. Cards are accepted in major hotels. Cash is needed for the parks.", es: "Franco CFA BEAC (XAF). 1€ = 655 XAF a tipo fijo. Tarjeta bancaria en grandes hoteles. Efectivo para los parques." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Français (officiel) — communication facile pour francophones.", en: "French (official) — easy communication for French speakers.", es: "Francés (oficial) — comunicación fácil para hispanohablantes con nociones de francés." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V.", es: "Tipo C/E (europeo) — 220V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Hépatites A/B et typhoïde recommandés.", en: "Yellow fever vaccination is mandatory. Antimalarial medication is essential. Hepatitis A/B and typhoid are recommended.", es: "Vacuna de fiebre amarilla obligatoria. Antipalúdico indispensable. Se recomiendan hepatitis A/B y tifoidea." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not safe to drink — bottled water is essential.", es: "No potable — el agua embotellada es indispensable." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil" }, value: { fr: "Bonne couverture à Libreville. Parcs : réseau absent, communication par radio satellite.", en: "Good coverage in Libreville. In the parks there is no network, with communication handled by satellite radio.", es: "Buena cobertura en Libreville. En los parques: sin red, comunicación por radio satelital." } },
  ],
};
