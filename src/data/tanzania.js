export const TANZANIA = {
  code: "TZA",
  numericId: 834,
  name: { fr: "Tanzanie", en: "Tanzania", es: "Tanzania", de: "Tansania" },
  emoji: "🇹🇿",
  capital: { fr: "Dodoma", en: "Dodoma", es: "Dodoma", de: "Dodoma" },
  language: { fr: "Swahili, Anglais", en: "Swahili, English", es: "Suajili, inglés", de: "Suaheli, Englisch" },
  currency: { fr: "Shilling tanzanien (TZS)", en: "Tanzanian Shilling (TZS)", es: "Chelín tanzano (TZS)", de: "Tansania-Schilling (TZS)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 200,
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
    plage: 3,
  },
  description: {
    fr: "La Tanzanie concentre les plus grands spectacles naturels d'Afrique : le Serengeti avec la Grande Migration, le Ngorongoro (caldeira la plus dense en faune au monde), le toit de l'Afrique Kilimandjaro, et les plages idylliques de Zanzibar. Un pays d'exception.", en: "Tanzania is home to Africa's greatest natural spectacles: the Serengeti with the Great Migration, Ngorongoro (the caldera with the highest concentration of wildlife on Earth), the Roof of Africa Kilimanjaro, and Zanzibar's idyllic beaches. An exceptional country.", es: "Tanzania concentra los mayores espectáculos naturales de África: el Serengueti con la Gran Migración, el Ngorongoro (la caldera con mayor densidad de fauna del mundo), el Kilimanjaro, techo de África, y las playas idílicas de Zanzíbar. Un país excepcional.", de: "In Tansania befinden sich die größten Naturschauspiele Afrikas: die Serengeti mit der Völkerwanderung, der Ngorongoro (Caldera mit der dichtesten Fauna der Welt), das Dach des afrikanischen Kilimandscharo und die idyllischen Strände von Sansibar. Ein außergewöhnliches Land.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Octobre", en: "June – October", es: "Junio – Octubre", de: "Juni – Oktober" },
      label: { fr: "Saison sèche & Migration", en: "Dry season & Migration", es: "Estación seca y migración", de: "Trockenzeit und Migration" },
      color: "#22c55e",
      description: {
        fr: "Meilleure saison safari, Grande Migration dans le nord du Serengeti (juil.–oct.). Zanzibar au top de novembre à mars.", en: "Best safari season, Great Migration in the northern Serengeti (Jul.–Oct.). Zanzibar at its best from November to March.", es: "Mejor temporada de safari, Gran Migración en el norte del Serengueti (jul.–oct.). Zanzíbar en su mejor momento de noviembre a marzo.", de: "Beste Safari-Saison, Great Migration in der nördlichen Serengeti (Juli–Okt). Sansibar von November bis März von seiner schönsten Seite.",
      },
      icon: "🦁",
    },
    {
      months: { fr: "Janvier – Mars", en: "January – March", es: "Enero – Marzo", de: "Januar – März" },
      label: { fr: "Saison sèche courte & Zanzibar", en: "Short dry season & Zanzibar", es: "Estación seca corta y Zanzíbar", de: "Kurze Trockenzeit und Sansibar" },
      color: "#fb923c",
      description: {
        fr: "Vêlage des gnous dans le Serengeti (janvier–février), Zanzibar ensoleillée, Kilimandjaro accessible.", en: "Wildebeest calving in the Serengeti (January–February), sunny Zanzibar, Kilimanjaro accessible.", es: "Parto de los ñus en el Serengueti (enero–febrero), Zanzíbar soleada, Kilimanjaro accesible.", de: "Gnuskalben in der Serengeti (Januar–Februar), sonniges Sansibar, zugänglicher Kilimandscharo.",
      },
      icon: "🏝️",
    },
  ],

  weatherCities: [
    {
      id: "serengeti",
      name: { fr: "Serengeti", en: "Serengeti", es: "Serengueti", de: "Serengeti" },
      region: { fr: "Arusha / Mara", en: "Arusha / Mara", es: "Arusha / Mara", de: "Arusha/Mara" },
      data: [
        { month: "Jan", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Fév", temp: 29, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 26, rain: 260, icon: "⛅" },
        { month: "Mai", temp: 25, rain: 140, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 55,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 90,  icon: "⛅" },
      ],
    },
    {
      id: "zanzibar",
      name: { fr: "Zanzibar", en: "Zanzibar", es: "Zanzíbar", de: "Sansibar" },
      region: { fr: "Zanzibar", en: "Zanzibar", es: "Zanzíbar", de: "Sansibar" },
      data: [
        { month: "Jan", temp: 30, rain: 55,  icon: "⛅" },
        { month: "Fév", temp: 30, rain: 55,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 290, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 160, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 85,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Déc", temp: 30, rain: 90,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Serengeti", en: "Serengeti", es: "Serengueti", de: "Serengeti" },
      region: { fr: "Arusha / Mara", en: "Arusha / Mara", es: "Arusha / Mara", de: "Arusha/Mara" },
      description: {
        fr: "Le parc national du Serengeti est le royaume de la Grande Migration : 1,5 million de gnous, 400 000 zèbres en cercle permanent dans l'écosystème Mara-Serengeti. La biodiversité la plus spectaculaire au monde.", en: "Serengeti National Park is the kingdom of the Great Migration: 1.5 million wildebeest, 400,000 zebras in a permanent circuit within the Mara-Serengeti ecosystem. The most spectacular biodiversity on Earth.", es: "El parque nacional del Serengueti es el reino de la Gran Migración: 1,5 millones de ñus, 400.000 cebras en un circuito permanente dentro del ecosistema Mara-Serengueti. La biodiversidad más espectacular del planeta.", de: "Der Serengeti-Nationalpark ist das Königreich der Großen Wanderung: 1,5 Millionen Gnus und 400.000 Zebras in einem permanenten Kreis im Mara-Serengeti-Ökosystem. Die spektakulärste Artenvielfalt der Welt.",
      },
      wikipedia: "Serengeti_National_Park",
      tags: ["Safari", "UNESCO"],
      mustSee: [
        { name: { fr: "Grande Migration des gnous", en: "Great Wildebeest Migration", es: "Gran Migración de los ñus", de: "Große Gnuwanderung" }, wikipedia: "File:Gnous Beauval.jpg" },
        { name: { fr: "Lions du Serengeti", en: "Serengeti lions", es: "Leones del Serengueti", de: "Löwen der Serengeti" }, wikipedia: "File:011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" },
        { name: { fr: "Montgolfière au lever du soleil", en: "Hot-air balloon at sunrise", es: "Globo aerostático al amanecer", de: "Heißluftballon bei Sonnenaufgang" }, wikipedia: "File:Serengeti Balloon.jpg" },
        { name: { fr: "Guépard — le plus rapide du monde", en: "Cheetah — the fastest animal in the world", es: "Guepardo — el animal más rápido del mundo", de: "Gepard – der schnellste der Welt" }, wikipedia: "Cheetah" },
      ],
    },
    {
      id: 2,
      name: { fr: "Cratère du Ngorongoro", en: "Ngorongoro Crater", es: "Cráter del Ngorongoro", de: "Ngorongoro-Krater" },
      region: { fr: "Arusha", en: "Arusha", es: "Arusha", de: "Arusha" },
      description: {
        fr: "La caldeira du Ngorongoro (260 km²) est la plus grande au monde et la plus dense en faune : lions, léopards, rhinocéros noirs, hyènes et flamants roses concentrés dans un amphithéâtre naturel spectaculaire.", en: "The Ngorongoro caldera (260 km²) is the largest in the world and the densest in wildlife: lions, leopards, black rhinos, hyenas and flamingos concentrated in a spectacular natural amphitheatre.", es: "La caldera del Ngorongoro (260 km²) es la más grande del mundo y la de mayor densidad de fauna: leones, leopardos, rinocerontes negros, hienas y flamencos concentrados en un espectacular anfiteatro natural.", de: "Die Ngorongoro-Caldera (260 km²) ist die größte der Welt und die dichteste Tierwelt: Löwen, Leoparden, Spitzmaulnashörner, Hyänen und rosa Flamingos sind in einem spektakulären natürlichen Amphitheater konzentriert.",
      },
      wikipedia: "Ngorongoro_Conservation_Area",
      tags: ["Safari", "UNESCO", "Nature"],
      mustSee: [
        { name: { fr: "Rhinocéros noir — espèce menacée", en: "Black rhinoceros — endangered species", es: "Rinoceronte negro — especie amenazada", de: "Spitzmaulnashorn – vom Aussterben bedrohte Art" }, wikipedia: "Black_rhinoceros" },
        { name: { fr: "Flamants roses du Lac Magadi", en: "Flamingos of Lake Magadi", es: "Flamencos del lago Magadi", de: "Rosa Flamingos des Magadi-Sees" }, wikipedia: "Flamingo" },
        { name: { fr: "Hippopotames du Ngorongoro", en: "Ngorongoro hippos", es: "Hipopótamos del Ngorongoro", de: "Ngorongoro-Flusspferde" }, wikipedia: "Hippopotamus" },
        { name: { fr: "Olmoti & Empakaai (cratères secondaires)", en: "Olmoti & Empakaai (secondary craters)", es: "Olmoti y Empakaai (cráteres secundarios)", de: "Olmoti & Empakaai (Sekundärkrater)" }, wikipedia: "Ngorongoro_Conservation_Area" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kilimandjaro", en: "Kilimanjaro", es: "Kilimanjaro", de: "Kilimandscharo" },
      region: { fr: "Kilimanjaro", en: "Kilimanjaro", es: "Kilimanjaro", de: "Kilimandscharo" },
      description: {
        fr: "Le Toit de l'Afrique (5 895 m) est l'ascension emblématique du continent, accessible sans équipement technique via les routes Marangu ou Lemosho (5–8 jours). Un défi accessible récompensé par une vue depuis les glaciers.", en: "The Roof of Africa (5,895 m) is the continent's iconic climb, accessible without technical equipment via the Marangu or Lemosho routes (5–8 days). An achievable challenge rewarded with a view from the glaciers.", es: "El Techo de África (5.895 m) es la ascensión emblemática del continente, accesible sin equipo técnico por las rutas Marangu o Lemosho (5–8 días). Un reto asequible recompensado con vistas desde los glaciares.", de: "Das Dach Afrikas (5.895 m) ist der ikonische Aufstieg des Kontinents und ohne technische Ausrüstung über die Routen Marangu oder Lemosho erreichbar (5–8 Tage). Eine zugängliche Herausforderung, die mit einer Aussicht von den Gletschern belohnt wird.",
      },
      wikipedia: "Mount_Kilimanjaro",
      tags: ["Randonnée", "Nature", "UNESCO", "Aventure"],
      mustSee: [
        { name: { fr: "Sommet Uhuru Peak (5 895 m)", en: "Uhuru Peak summit (5,895 m)", es: "Cumbre Uhuru Peak (5.895 m)", de: "Uhuru-Gipfel (5.895 m)" }, wikipedia: "Mount_Kilimanjaro" },
        { name: { fr: "Zone de brume (forêt tropicale)", en: "Cloud forest zone (rainforest)", es: "Zona de bruma (selva tropical)", de: "Dunstzone (Tropenwald)" }, wikipedia: "File:Kilimanjaro forest.jpg" },
        { name: { fr: "Glaciers du Kibo", en: "Kibo glaciers", es: "Glaciares del Kibo", de: "Kibo-Gletscher" }, wikipedia: "File:Kibo Mt. Kilimanjaro 6.JPG" },
        { name: { fr: "Parc national Kilimandjaro (UNESCO)", en: "Kilimanjaro National Park (UNESCO)", es: "Parque nacional del Kilimanjaro (UNESCO)", de: "Kilimandscharo-Nationalpark (UNESCO)" }, wikipedia: "Kilimanjaro_National_Park" },
      ],
    },
    {
      id: 4,
      name: { fr: "Zanzibar", en: "Zanzibar", es: "Zanzíbar", de: "Sansibar" },
      region: { fr: "Zanzibar", en: "Zanzibar", es: "Zanzíbar", de: "Sansibar" },
      description: {
        fr: "L'archipel de Zanzibar, « l'île aux épices », est un paradis de sable blanc, lagons turquoise, récifs coralliens et Stone Town (UNESCO) — vieille ville swahilie-arabe aux ruelles envoûtantes et aux portes sculptées.", en: "The Zanzibar archipelago, the \"Spice Island\", is a paradise of white sand, turquoise lagoons, coral reefs and Stone Town (UNESCO) — an old Swahili-Arab town with enchanting lanes and carved doors.", es: "El archipiélago de Zanzíbar, la «isla de las especias», es un paraíso de arena blanca, lagunas turquesas, arrecifes de coral y Stone Town (UNESCO), la antigua ciudad suajili-árabe de callejuelas cautivadoras y puertas talladas.", de: "Der Sansibar-Archipel, „die Insel der Gewürze“, ist ein Paradies aus weißem Sand, türkisfarbenen Lagunen, Korallenriffen und Stone Town (UNESCO) – einer alten suaheli-arabischen Stadt mit bezaubernden Straßen und geschnitzten Türen.",
      },
      wikipedia: "File:Stone Town, Zanzibar (1).jpg",
      tags: ["Plage", "UNESCO", "Culture", "Gastronomie", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Stone Town (UNESCO)", en: "Stone Town (UNESCO)", es: "Stone Town (UNESCO)", de: "Stone Town (UNESCO)" }, wikipedia: "Stone_Town" },
        { name: { fr: "Plage de Nungwi", en: "Nungwi Beach", es: "Playa de Nungwi", de: "Nungwi-Strand" }, wikipedia: "Nungwi" },
        { name: { fr: "Plage de Paje (côte est)", en: "Paje Beach (east coast)", es: "Playa de Paje (costa este)", de: "Paje Beach (Ostküste)" }, wikipedia: "File:Paje beach view.jpg" },
        { name: { fr: "Tour de l'île aux épices", en: "Spice island tour", es: "Tour de la isla de las especias", de: "Gewürzinseltour" }, wikipedia: "Zanzibar_Archipelago" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Tanzanie est plus chère que prévu en raison des droits d'entrée des parcs (parmi les plus chers d'Afrique) et des vols intérieurs indispensables. Le luxe est plus abordable que la réputation ne le laisse penser.", en: "Tanzania is pricier than expected due to park entry fees (among the most expensive in Africa) and essential domestic flights. Luxury is more affordable than its reputation suggests.", es: "Tanzania es más cara de lo esperado debido a las tasas de entrada a los parques (entre las más caras de África) y a los vuelos interiores indispensables. El lujo es más asequible de lo que sugiere su reputación.", de: "Tansania ist aufgrund der Parkeintrittsgebühren (die zu den teuersten in Afrika gehören) und der notwendigen Inlandsflüge teurer als erwartet. Luxus ist erschwinglicher, als der Ruf vermuten lässt.",
    },
    currency: "TZS",
    exchangeRate: "1€ ≈ 2 700 TZS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse Zanzibar", en: "Zanzibar guesthouse", es: "Guesthouse en Zanzíbar", de: "Gästehaus Sansibar" }, price: "25–60 €", detail: { fr: "Avec vue mer", en: "Sea view", es: "Con vista al mar", de: "Mit Meerblick" } },
          { label: { fr: "Lodge safari mid-range", en: "Mid-range safari lodge", es: "Lodge de safari de gama media", de: "Mittelklasse-Safari-Lodge" }, price: "150–300 €", detail: { fr: "Repas et game drive inclus", en: "Meals and game drive included", es: "Comidas y game drive incluidos", de: "Mahlzeiten und Pirschfahrt inklusive" } },
          { label: { fr: "Luxury tented camp", en: "Luxury tented camp", es: "Luxury tented camp", de: "Luxuriöses Zeltlager" }, price: "500–1 500 €", detail: { fr: "Au cœur du Serengeti", en: "In the heart of the Serengeti", es: "En el corazón del Serengueti", de: "Im Herzen der Serengeti" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Street food Zanzibar (Forodhani)", en: "Zanzibar street food (Forodhani)", es: "Comida callejera en Zanzíbar (Forodhani)", de: "Streetfood Sansibar (Forodhani)" }, price: "3–6 €", detail: { fr: "Fruits de mer grillés, pilau", en: "Grilled seafood, pilau", es: "Marisco a la parrilla, pilau", de: "Gegrillte Meeresfrüchte, Pilau" } },
          { label: { fr: "Restaurant Zanzibar", en: "Zanzibar restaurant", es: "Restaurante en Zanzíbar", de: "Restaurant Sansibar" }, price: "10–20 €", detail: { fr: "Poisson swahili, biryani", en: "Swahili fish, biryani", es: "Pescado suajili, biryani", de: "Swahili-Fisch, Biryani" } },
          { label: { fr: "Dîner lodge safari (inclus)", en: "Safari lodge dinner (included)", es: "Cena en lodge de safari (incluida)", de: "Lodge-Safari-Abendessen (im Preis inbegriffen)" }, price: "40–60 €", detail: { fr: "Repas sous les étoiles", en: "Dining under the stars", es: "Cena bajo las estrellas", de: "Mahlzeit unter den Sternen" } },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Vol Arusha–Serengeti (45 min)", en: "Arusha–Serengeti flight (45 min)", es: "Vuelo Arusha–Serengueti (45 min)", de: "Flug Arusha–Serengeti (45 Min.)" }, price: "200–350 €", detail: { fr: "Indispensable, gain de temps", en: "Essential, saves time", es: "Indispensable, ahorra tiempo", de: "Unverzichtbar, spart Zeit" } },
          { label: { fr: "Ferry Dar–Zanzibar (2h)", en: "Dar–Zanzibar ferry (2h)", es: "Ferry Dar–Zanzíbar (2h)", de: "Fähre Dar–Sansibar (2 Std.)" }, price: "35–50 €", detail: { fr: "Zanzibar Speed Boat ou Azam Marine", en: "Zanzibar Speed Boat or Azam Marine", es: "Zanzibar Speed Boat o Azam Marine", de: "Sansibar Speed Boat oder Azam Marine" } },
          { label: { fr: "Safari 4x4 avec guide (journée)", en: "4x4 safari with guide (day)", es: "Safari en 4x4 con guía (día)", de: "4x4-Safari mit Führer (Tag)" }, price: "100–200 €", detail: { fr: "Obligatoire dans les parcs", en: "Mandatory inside the parks", es: "Obligatorio dentro de los parques", de: "In den Parks obligatorisch" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Droit Serengeti/jour", en: "Serengeti fee/day", es: "Tasa del Serengueti/día", de: "Serengeti-Gesetz/Tag" }, price: "60–80 €/j", detail: { fr: "Adulte non-résident", en: "Non-resident adult", es: "Adulto no residente", de: "Nicht ansässiger Erwachsener" } },
          { label: { fr: "Droit Ngorongoro/jour", en: "Ngorongoro fee/day", es: "Tasa del Ngorongoro/día", de: "Ngorongoro-Gebühr/Tag" }, price: "60 €/j", detail: { fr: "En sus du lodge", en: "On top of the lodge", es: "Aparte del lodge", de: "Zusätzlich zur Lodge" } },
          { label: { fr: "Ascension Kilimandjaro (7j tout compris)", en: "Kilimanjaro climb (7 days all-inclusive)", es: "Ascensión al Kilimanjaro (7 días todo incluido)", de: "Besteigung des Kilimandscharo (7 Tage alles inklusive)" }, price: "1 500–2 500 €", detail: { fr: "Guide + porteurs + équipement", en: "Guide + porters + equipment", es: "Guía + porteadores + equipo", de: "Führer + Träger + Ausrüstung" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "80–130 €/j", desc: { fr: "Budget uniquement possible à Zanzibar/Dar — parcs exigent plus", en: "Budget only feasible in Zanzibar/Dar — parks require more", es: "Presupuesto ajustado solo posible en Zanzíbar/Dar — los parques exigen más", de: "Budget nur in Sansibar/Dar möglich – Parks erfordern mehr" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "200–350 €/j", desc: { fr: "Lodges mid-range + safaris guidés + Zanzibar", en: "Mid-range lodges + guided safaris + Zanzibar", es: "Lodges de gama media + safaris guiados + Zanzíbar", de: "Mittelklasse-Lodges + geführte Safaris + Sansibar" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "600 €+/j", desc: { fr: "Tented camps exclusifs + vols privés + spa", en: "Exclusive tented camps + private flights + spa", es: "Tented camps exclusivos + vuelos privados + spa", de: "Exklusive Zeltlager + Privatflüge + Spa" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Arusha (1j) → Ngorongoro (2j) → Serengeti (4j) → Arusha (1j) → Zanzibar (6j)", en: "Arusha (1d) → Ngorongoro (2d) → Serengeti (4d) → Arusha (1d) → Zanzibar (6d)", es: "Arusha (1d) → Ngorongoro (2d) → Serengueti (4d) → Arusha (1d) → Zanzíbar (6d)", de: "Arusha (1T) → Ngorongoro (2T) → Serengeti (4T) → Arusha (1T) → Sansibar (6T)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Arusha ou Dar", en: "Return flight Paris–Arusha or Dar", es: "Vuelo ida y vuelta Madrid–Arusha o Dar", de: "Hin- und Rückflug Paris–Arusha oder Dar" }, amount: "600–900 €" },
            { label: { fr: "Safari budget (7j)", en: "Budget safari (7d)", es: "Safari económico (7d)", de: "Budget-Safari (7 Tage)" }, amount: "800–1 200 €" },
            { label: { fr: "Zanzibar guesthouse (6 nuits)", en: "Zanzibar guesthouse (6 nights)", es: "Guesthouse en Zanzíbar (6 noches)", de: "Sansibar Gästehaus (6 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entry fees", es: "Tasas de entrada a los parques", de: "Parkeintrittsgebühren" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & transports", en: "Food & transport", es: "Comida y transporte", de: "Essen und Transport" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "6 000 – 9 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kilimanjaro", en: "Return flight Paris–Kilimanjaro", es: "Vuelo ida y vuelta Madrid–Kilimanjaro", de: "Hin- und Rückflug Paris–Kilimanjaro" }, amount: "700–1 000 €" },
            { label: { fr: "Lodges mid-range (14 nuits)", en: "Mid-range lodges (14 nights)", es: "Lodges de gama media (14 noches)", de: "Mittelklasse-Lodges (14 Nächte)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Vols intérieurs Arusha–Serengeti", en: "Domestic flights Arusha–Serengeti", es: "Vuelos interiores Arusha–Serengueti", de: "Inlandsflüge Arusha–Serengeti" }, amount: "600–1 000 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entry fees", es: "Tasas de entrada a los parques", de: "Parkeintrittsgebühren" }, amount: "500–800 €" },
            { label: { fr: "Extras & Zanzibar", en: "Extras & Zanzibar", es: "Extras y Zanzíbar", de: "Extras & Sansibar" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kilimanjaro (Business)", en: "Return flight Paris–Kilimanjaro (Business)", es: "Vuelo ida y vuelta Madrid–Kilimanjaro (Business)", de: "Hin- und Rückflug Paris–Kilimanjaro (Business)" }, amount: "3 500–6 000 €" },
            { label: { fr: "Tented camps exclusifs (14 nuits)", en: "Exclusive tented camps (14 nights)", es: "Tented camps exclusivos (14 noches)", de: "Exklusive Zeltlager (14 Nächte)" }, amount: "7 000–15 000 €" },
            { label: { fr: "Vols charter privés", en: "Private charter flights", es: "Vuelos chárter privados", de: "Private Charterflüge" }, amount: "2 000–4 000 €" },
            { label: { fr: "Extras & Zanzibar luxe", en: "Extras & luxury Zanzibar", es: "Extras y Zanzíbar de lujo", de: "Extras und Luxus auf Sansibar" }, amount: "1 000–3 000 €" },
            { label: { fr: "Kilimandjaro ou expériences", en: "Kilimanjaro or experiences", es: "Kilimanjaro o experiencias", de: "Kilimandscharo oder Erlebnisse" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~9h (Kenya Airways via Nairobi, KLM via Amsterdam)", en: "~9h (Kenya Airways via Nairobi, KLM via Amsterdam)", es: "~9h (Kenya Airways vía Nairobi, KLM vía Ámsterdam)", de: "ca. 9 Std. (Kenya Airways via Nairobi, KLM via Amsterdam)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "eVisa en ligne (~50$, 90 jours)", en: "Online eVisa (~$50, 90 days)", es: "eVisa en línea (~50 $, 90 días)", de: "eVisa online (ca. 50 $, 90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Shilling (1€ ≈ 2 700 TZS) — dollars acceptés dans les lodges", en: "Shilling (1€ ≈ 2,700 TZS) — dollars accepted in lodges", es: "Chelín (1€ ≈ 2.700 TZS) — dólares aceptados en los lodges", de: "Schilling (1 € ≈ 2.700 TZS) – Dollar werden in Lodges akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Swahili + anglais", en: "Swahili + English", es: "Suajili + inglés", de: "Suaheli + Englisch" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G – 230 V (comme UK)", en: "Type G – 230 V (like the UK)", es: "Tipo G – 230 V (como en el Reino Unido)", de: "Typ G – 230 V (wie Großbritannien)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture villes, faible dans les parcs — SIM Vodacom", en: "Good coverage in cities, weak in parks — Vodacom SIM", es: "Buena cobertura en las ciudades, débil en los parques — SIM Vodacom", de: "Gute Stadtabdeckung, schwach in Parks – SIM Vodacom" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water advised", es: "No potable — se recomienda agua embotellada", de: "Kein Trinkwasser – Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune recommandée", en: "Malaria prophylaxis MANDATORY + yellow fever recommended", es: "Antipalúdico OBLIGATORIO + fiebre amarilla recomendada", de: "OBLIGATORISCHES Malariamittel + Gelbfieber empfohlen" } },
  ],
};
