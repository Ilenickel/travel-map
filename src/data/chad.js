export const CHAD = {
  code: "TCD",
  numericId: 148,
  name: { fr: "Tchad", en: "Chad", es: "Chad" },
  emoji: "🇹🇩",
  capital: "N'Djamena",
  language: { fr: "Français, Arabe tchadien", en: "French, Chadian Arabic", es: "Francés, árabe chadiano" },
  currency: { fr: "Franc CFA (XAF)", en: "CFA Franc (XAF)", es: "Franco CFA (XAF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 45, budgetMid: 90,
    tripMin: 1000, tripMid: 2200,
  },
  description: {
    fr: "Le Tchad est une destination d'aventure hors des sentiers battus, offrant le plateau de l'Ennedi (UNESCO) avec ses arches de grès et ses peintures rupestres sahariennes, et le parc de Zakouma qui abrite l'une des dernières grandes concentrations d'éléphants d'Afrique centrale. Pays enclavé entre désert et savane, il demande une bonne préparation logistique.",
    en: "Chad is an off-the-beaten-path adventure destination, offering the Ennedi Plateau (UNESCO) with its sandstone arches and Saharan rock art, and Zakouma National Park, home to one of the last great concentrations of elephants in Central Africa. A landlocked country between desert and savanna, it requires solid logistical preparation.",
    es: "Chad es un destino de aventura fuera de los caminos trillados, que ofrece la meseta de Ennedi (UNESCO) con sus arcos de arenisca y su arte rupestre sahariano, y el parque de Zakouma, hogar de una de las últimas grandes concentraciones de elefantes de África Central. País sin salida al mar entre el desierto y la sabana, requiere una buena preparación logística.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero" },
      label: { fr: "Saison fraîche", en: "Cool season", es: "Temporada fresca" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour voyager : températures supportables (20–30°C), routes praticables, safari à Zakouma. L'Ennedi est accessible et les nuits dans le désert sont fraîches et étoilées.",
        en: "The best time to travel: bearable temperatures (20–30°C), passable roads, safari at Zakouma. The Ennedi is accessible and desert nights are cool and starlit.",
        es: "El mejor momento para viajar: temperaturas soportables (20–30°C), carreteras transitables, safari en Zakouma. El Ennedi es accesible y las noches en el desierto son frescas y estrelladas.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juillet – Septembre", en: "July – September", es: "Julio – Septiembre" },
      label: { fr: "Saison des pluies (sud)", en: "Rainy season (south)", es: "Temporada de lluvias (sur)" },
      color: "#f59e0b",
      description: {
        fr: "Les pluies transforment le Sahel en savane verte. Routes difficiles voire impraticables dans le sud. Le désert du nord reste sec mais extrêmement chaud (40°C+).",
        en: "The rains turn the Sahel into green savanna. Roads become difficult or even impassable in the south. The northern desert stays dry but extremely hot (40°C+).",
        es: "Las lluvias transforman el Sahel en una sabana verde. Carreteras difíciles o incluso intransitables en el sur. El desierto del norte se mantiene seco pero extremadamente caluroso (40°C+).",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "ndjamena",
      name: "N'Djamena",
      region: { fr: "Capitale (Sahel)", en: "Capital (Sahel)", es: "Capital (Sahel)" },
      data: [
        { month: "Jan", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 2,   icon: "🌡️" },
        { month: "Avr", temp: 37, rain: 15,  icon: "🌡️" },
        { month: "Mai", temp: 38, rain: 35,  icon: "🌡️" },
        { month: "Jun", temp: 32, rain: 60,  icon: "🌡️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 31, rain: 25,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 2,   icon: "⛅" },
        { month: "Déc", temp: 22, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "faya",
      name: "Faya-Largeau",
      region: { fr: "Borkou (Désert saharien)", en: "Borkou (Saharan Desert)", es: "Borkou (Desierto sahariano)" },
      data: [
        { month: "Jan", temp: 20, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Avr", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 5,   icon: "🌡️" },
        { month: "Aoû", temp: 36, rain: 10,  icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 5,   icon: "🌡️" },
        { month: "Oct", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Nov", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Déc", temp: 20, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Plateau de l'Ennedi", en: "Ennedi Plateau", es: "Meseta de Ennedi" },
      region: { fr: "Région d'Ennedi (nord-est)", en: "Ennedi Region (northeast)", es: "Región de Ennedi (noreste)" },
      description: {
        fr: "Le plateau de l'Ennedi est l'un des joyaux cachés de l'Afrique, classé au patrimoine mondial de l'UNESCO pour ses formations rocheuses de grès aux formes spectaculaires et ses milliers de peintures et gravures rupestres vieilles de 7 000 ans. L'Arche de Aloba, parmi les plus grandes du monde, et les gorges de Guelta d'Archei, dernier refuge des crocodiles sahariens, sont ses sites emblématiques. L'accès nécessite un 4x4 et une organisation logistique sérieuse.",
        en: "The Ennedi Plateau is one of Africa's hidden gems, a UNESCO World Heritage site famed for its dramatically shaped sandstone rock formations and thousands of 7,000-year-old rock paintings and engravings. The Aloba Arch, among the largest natural arches in the world, and the Guelta d'Archei gorges, last refuge of the Saharan crocodiles, are its landmark sites. Access requires a 4x4 and serious logistical planning.",
        es: "La meseta de Ennedi es una de las joyas ocultas de África, declarada Patrimonio de la Humanidad por la UNESCO por sus formaciones rocosas de arenisca de formas espectaculares y sus miles de pinturas y grabados rupestres de 7.000 años de antigüedad. El Arco de Aloba, uno de los más grandes del mundo, y las gargantas de Guelta d'Archei, último refugio de los cocodrilos saharianos, son sus lugares emblemáticos. El acceso requiere un 4x4 y una organización logística seria.",
      },
      wikipedia: "Ennedi_Plateau",
      tags: ["UNESCO", "Désert", "Art rupestre", "Aventure"],
      mustSee: [
        { name: { fr: "Arche d'Aloba — l'une des plus grandes arches naturelles du monde", en: "Aloba Arch — one of the largest natural arches in the world", es: "Arco de Aloba — uno de los arcos naturales más grandes del mundo" }, wikipedia: "Aloba_Arch" },
        { name: { fr: "Guelta d'Archei — oasis avec crocodiles sahariens reliques", en: "Guelta d'Archei — oasis with relic Saharan crocodiles", es: "Guelta d'Archei — oasis con cocodrilos saharianos reliquia" }, wikipedia: "Guelta_d'Archei" },
        { name: { fr: "Peintures rupestres de l'Ennedi — art préhistorique saharien", en: "Ennedi rock paintings — prehistoric Saharan art", es: "Pinturas rupestres de Ennedi — arte prehistórico sahariano" }, wikipedia: "File:Kamel Terkei.jpg" },
        { name: { fr: "Bichagara — formation rocheuse et camp nomade touareg", en: "Bichagara — rock formation and Tuareg nomad camp", es: "Bichagara — formación rocosa y campamento nómada tuareg" }, wikipedia: "File:Camels in Hope of a Drink (23555725233).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc National de Zakouma", en: "Zakouma National Park", es: "Parque Nacional de Zakouma" },
      region: { fr: "Région du Salamat (sud-est)", en: "Salamat Region (southeast)", es: "Región de Salamat (sureste)" },
      description: {
        fr: "Zakouma est l'une des plus belles réussites de conservation animalière d'Afrique centrale. Après avoir failli disparaître sous les braconniers, ses populations d'éléphants (plus de 600 individus) ont retrouvé une dynamique positive grâce à African Parks. Lions, buffles, lycaons, hippos et une avifaune exceptionnelle en font une destination de safari de premier ordre, encore confidentielle.",
        en: "Zakouma is one of Central Africa's greatest wildlife conservation success stories. After nearly being wiped out by poachers, its elephant population (over 600 individuals) has bounced back thanks to African Parks. Lions, buffalo, wild dogs, hippos and an exceptional birdlife make it a top-tier safari destination that remains largely off the radar.",
        es: "Zakouma es uno de los mayores éxitos de conservación animal de África Central. Tras haber estado a punto de desaparecer por los furtivos, sus poblaciones de elefantes (más de 600 individuos) han recuperado una dinámica positiva gracias a African Parks. Leones, búfalos, licaones, hipopótamos y una avifauna excepcional lo convierten en un destino de safari de primer nivel, todavía poco conocido.",
      },
      wikipedia: "Zakouma_National_Park",
      tags: ["Safari", "Éléphants", "Conservation", "Faune"],
      mustSee: [
        { name: { fr: "Troupeaux d'éléphants — regroupements spectaculaires en saison sèche", en: "Elephant herds — spectacular gatherings in the dry season", es: "Manadas de elefantes — agrupaciones espectaculares en la estación seca" }, wikipedia: "File:Elephant du parc national de Zakouma.jpg" },
        { name: { fr: "Lions de Zakouma — meutes emblématiques du parc", en: "Zakouma lions — the park's iconic prides", es: "Leones de Zakouma — manadas emblemáticas del parque" }, wikipedia: "Zakouma_National_Park" },
        { name: { fr: "Lac Zakouma — point d'eau central avec hippos et oiseaux", en: "Lake Zakouma — central watering hole with hippos and birds", es: "Lago Zakouma — punto de agua central con hipopótamos y aves" }, wikipedia: "Zakouma_National_Park" },
        { name: { fr: "Goz Beida — ville de départ avec camp de réfugiés et ONG", en: "Goz Beida — starting town with a refugee camp and NGOs", es: "Goz Beida — ciudad de partida con campo de refugiados y ONG" }, wikipedia: "File:Goz beida.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lac Tchad", en: "Lake Chad", es: "Lago Chad" },
      region: { fr: "Région du Lac (ouest)", en: "Lac Region (west)", es: "Región del Lago (oeste)" },
      description: {
        fr: "Le lac Tchad, autrefois 4e plus grand lac d'Afrique, a rétréci de 90% depuis les années 1960 en raison du changement climatique et des prélèvements agricoles, devenant un symbole des défis environnementaux du continent. Les villages de pêcheurs buduma vivent encore sur ses rives et ses îles flottantes de papyrus. N'Djamena, la capitale animée, est le point de départ naturel.",
        en: "Lake Chad, once Africa's 4th largest lake, has shrunk by 90% since the 1960s due to climate change and agricultural water extraction, becoming a symbol of the continent's environmental challenges. Buduma fishing villages still live along its shores and its floating papyrus islands. N'Djamena, the lively capital, is the natural starting point.",
        es: "El lago Chad, antaño el 4º lago más grande de África, se ha reducido un 90% desde la década de 1960 debido al cambio climático y a la extracción agrícola de agua, convirtiéndose en un símbolo de los desafíos ambientales del continente. Los pueblos de pescadores buduma siguen viviendo en sus orillas y en sus islas flotantes de papiro. N'Djamena, la animada capital, es el punto de partida natural.",
      },
      wikipedia: "Lake_Chad",
      tags: ["Environnement", "Culture", "Pêche", "Histoire"],
      mustSee: [
        { name: { fr: "Villages buduma — communautés de pêcheurs sur les îles du lac", en: "Buduma villages — fishing communities on the lake's islands", es: "Pueblos buduma — comunidades de pescadores en las islas del lago" }, wikipedia: "File:Habitat d’un boudouma du Tchad.jpg" },
        { name: { fr: "N'Djamena — capitale avec grand marché central", en: "N'Djamena — capital with a large central market", es: "N'Djamena — capital con gran mercado central" }, wikipedia: "N'Djamena" },
        { name: { fr: "Musée National du Tchad — collections archéologiques et ethnographiques", en: "National Museum of Chad — archaeological and ethnographic collections", es: "Museo Nacional de Chad — colecciones arqueológicas y etnográficas" }, wikipedia: "File:Musée national 2.jpg" },
        { name: { fr: "Bol — principale ville riveraine du lac", en: "Bol — the lake's main lakeside town", es: "Bol — principal ciudad ribereña del lago" }, wikipedia: "Bol,_Chad" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Tchad est une destination peu coûteuse mais les infrastructures touristiques sont quasi inexistantes en dehors des grands axes. Les expéditions vers l'Ennedi ou Zakouma nécessitent une logistique lourde (4x4, carburant, guide) qui représente l'essentiel du budget. Le franc CFA est la monnaie commune à l'Afrique centrale francophone.",
      en: "Chad is an inexpensive destination, but tourist infrastructure is almost non-existent outside the main routes. Expeditions to the Ennedi or Zakouma require heavy logistics (4x4, fuel, guide) which account for most of the budget. The CFA franc is the common currency of Francophone Central Africa.",
      es: "Chad es un destino económico, pero las infraestructuras turísticas son casi inexistentes fuera de los grandes ejes. Las expediciones hacia el Ennedi o Zakouma requieren una logística pesada (4x4, combustible, guía) que representa la mayor parte del presupuesto. El franco CFA es la moneda común del África Central francófona.",
    },
    currency: "XAF",
    exchangeRate: "1€ ≈ 655 XAF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Auberge / chambre basique", en: "Basic guesthouse / room", es: "Albergue / habitación básica" }, price: "10–25 €" },
          { label: { fr: "Hôtel milieu de gamme (N'Djamena)", en: "Mid-range hotel (N'Djamena)", es: "Hotel de gama media (N'Djamena)" }, price: "40–80 €" },
          { label: { fr: "Camp safari (Zakouma)", en: "Safari camp (Zakouma)", es: "Campamento de safari (Zakouma)" }, price: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Gargote locale (riz, viande)", en: "Local eatery (rice, meat)", es: "Comedor local (arroz, carne)" }, price: "2–5 €" },
          { label: { fr: "Restaurant en ville", en: "Restaurant in town", es: "Restaurante en la ciudad" }, price: "8–20 €" },
          { label: { fr: "Provisions pour expédition", en: "Supplies for an expedition", es: "Provisiones para una expedición" }, price: "10–20 €/j" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Taxi en ville (N'Djamena)", en: "City taxi (N'Djamena)", es: "Taxi en la ciudad (N'Djamena)" }, price: "2–5 €" },
          { label: { fr: "Location 4x4 avec chauffeur", en: "4x4 rental with driver", es: "Alquiler de 4x4 con conductor" }, price: "100–200 €/j" },
          { label: { fr: "Vol intérieur (N'Djamena–Abéché)", en: "Domestic flight (N'Djamena–Abéché)", es: "Vuelo interior (N'Djamena–Abéché)" }, price: "100–200 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée parc de Zakouma (par jour)", en: "Zakouma park entry (per day)", es: "Entrada al parque de Zakouma (por día)" }, price: "20–40 €" },
          { label: { fr: "Guide pour l'Ennedi (forfait)", en: "Ennedi guide (package)", es: "Guía para el Ennedi (paquete)" }, price: "80–150 €/j" },
          { label: { fr: "Excursion lac Tchad depuis Bol", en: "Lake Chad excursion from Bol", es: "Excursión al lago Chad desde Bol" }, price: "30–60 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "45–70 €/j", desc: { fr: "Hébergement simple, nourriture locale, hors logistique expédition", en: "Simple accommodation, local food, excluding expedition logistics", es: "Alojamiento sencillo, comida local, sin incluir la logística de expedición" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "90–200 €/j", desc: { fr: "Hôtel correct, camp safari, guide et 4x4 inclus", en: "Decent hotel, safari camp, guide and 4x4 included", es: "Hotel decente, campamento de safari, guía y 4x4 incluidos" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días" },
      route: { fr: "N'Djamena → Zakouma (safari) → Abéché → Plateau de l'Ennedi", en: "N'Djamena → Zakouma (safari) → Abéché → Ennedi Plateau", es: "N'Djamena → Zakouma (safari) → Abéché → Meseta de Ennedi" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–N'Djamena", en: "Return flight Paris–N'Djamena", es: "Vuelo ida y vuelta París–N'Djamena" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (11 nuits)", en: "Accommodation (11 nights)", es: "Alojamiento (11 noches)" }, amount: "150–300 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transportes locales" }, amount: "100–200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "150–250 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 200 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–N'Djamena", en: "Return flight Paris–N'Djamena", es: "Vuelo ida y vuelta París–N'Djamena" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (11 nuits)", en: "Accommodation (11 nights)", es: "Alojamiento (11 noches)" }, amount: "440–900 €" },
            { label: { fr: "Location 4x4 + carburant", en: "4x4 rental + fuel", es: "Alquiler de 4x4 + combustible" }, amount: "600–1 000 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "300–450 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades + guías" }, amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París" }, value: { fr: "Vols via Casablanca (Royal Air Maroc), Addis-Abeba (Ethiopian) ou Paris direct avec Air France selon saison. Durée totale ~8–12h.", en: "Flights via Casablanca (Royal Air Maroc), Addis Ababa (Ethiopian) or direct from Paris with Air France depending on season. Total duration ~8–12h.", es: "Vuelos vía Casablanca (Royal Air Maroc), Addis Abeba (Ethiopian) o directo desde París con Air France según la temporada. Duración total ~8–12h." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire. Obtention en ambassade du Tchad à Paris. Permis de photographie souvent requis séparément pour les sites sensibles.", en: "Visa required. Obtained from the Chadian embassy in Paris. A separate photography permit is often required for sensitive sites.", es: "Visado obligatorio. Se obtiene en la embajada de Chad en París. A menudo se requiere un permiso de fotografía aparte para los sitios sensibles." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Franc CFA CEMAC (XAF). Espèces indispensables, peu de distributeurs en dehors de N'Djamena. Prévoyez largement en cash pour les expéditions.", en: "CEMAC CFA Franc (XAF). Cash is essential, few ATMs outside N'Djamena. Bring plenty of cash for expeditions.", es: "Franco CFA CEMAC (XAF). El efectivo es indispensable, hay pocos cajeros automáticos fuera de N'Djamena. Prevea suficiente efectivo para las expediciones." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Français et arabe tchadien (langue du commerce). Dans le désert, les langues toubu et arabe local prédominent.", en: "French and Chadian Arabic (the trade language). In the desert, Toubou and local Arabic dialects predominate.", es: "Francés y árabe chadiano (lengua del comercio). En el desierto predominan el tubu y el árabe local." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C et Type E (comme en France). Tension 220V. Électricité très aléatoire en dehors de N'Djamena.", en: "Type C and Type E (same as France). Voltage 220V. Power supply is very unreliable outside N'Djamena.", es: "Tipo C y tipo E (como en Francia). Tensión de 220V. Suministro eléctrico muy irregular fuera de N'Djamena." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Vaccin fièvre jaune obligatoire. Paludisme présent dans le sud : prophylaxie indispensable. Méningite, typhoïde recommandés. Emportez une pharmacie complète pour les expéditions.", en: "Yellow fever vaccine mandatory. Malaria present in the south: prophylaxis essential. Meningitis and typhoid vaccines recommended. Bring a full medical kit for expeditions.", es: "Vacuna contra la fiebre amarilla obligatoria. Paludismo presente en el sur: profilaxis indispensable. Se recomiendan las vacunas contra la meningitis y la fiebre tifoidea. Lleve un botiquín completo para las expediciones." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety", es: "Seguridad" }, value: { fr: "Zone nord (Tibesti) déconseillée. Région du lac Tchad (ouest) : risque Boko Haram. Ennedi et Zakouma relativement sûrs mais conseiller officiel recommandé. Consulter les avis du MEAE avant départ.", en: "The northern Tibesti area is not recommended. Lake Chad region (west): Boko Haram risk. Ennedi and Zakouma are relatively safe, but an official guide is recommended. Check French foreign ministry advisories before departure.", es: "No se recomienda la zona norte (Tibesti). Región del lago Chad (oeste): riesgo de Boko Haram. Ennedi y Zakouma son relativamente seguros, pero se recomienda un guía oficial. Consulte los avisos del ministerio de asuntos exteriores francés antes de partir." } },
    { icon: "🏜️", label: { fr: "Logistique désert", en: "Desert logistics", es: "Logística del desierto" }, value: { fr: "Expédition Ennedi : minimum 2 véhicules 4x4, guide obligatoire, carburant pour 1 000 km. Agences spécialisées à Paris ou N'Djamena fortement conseillées.", en: "Ennedi expedition: minimum 2 4x4 vehicles, guide mandatory, fuel for 1,000 km. Specialised agencies in Paris or N'Djamena strongly recommended.", es: "Expedición al Ennedi: mínimo 2 vehículos 4x4, guía obligatorio, combustible para 1.000 km. Se recomiendan encarecidamente agencias especializadas en París o N'Djamena." } },
  ],
};
