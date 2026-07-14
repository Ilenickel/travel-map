export const ERITREA = {
  code: "ERI",
  numericId: 232,
  name: { fr: "Érythrée", en: "Eritrea", es: "Eritrea" },
  emoji: "🇪🇷",
  capital: { fr: "Asmara", en: "Asmara", es: "Asmara" },
  language: { fr: "Tigrigna, Arabe, Anglais", en: "Tigrinya, Arabic, English", es: "Tigriña, árabe, inglés" },
  currency: { fr: "Nakfa érythréen (ERN)", en: "Eritrean nakfa (ERN)", es: "Nakfa eritreo (ERN)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 30, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  description: {
    fr: "L'Érythrée est l'une des destinations les plus isolées du monde : Asmara la capitale a été classée UNESCO en 2017 pour son incroyable concentration d'architecture Art déco et Futuriste italienne (années 1930), préservée à l'identique comme un musée à ciel ouvert. La côte mer Rouge (Massawa, Dahlak) et les hauts plateaux du Tigrigna complètent un pays mystérieux, peu touristique, à l'hospitalité préservée.",
    en: "Eritrea is one of the most isolated destinations in the world: its capital Asmara was listed as a UNESCO World Heritage Site in 2017 for its extraordinary concentration of Italian Art Deco and Futurist architecture from the 1930s, preserved almost unchanged like an open-air museum. The Red Sea coast (Massawa, Dahlak) and the Tigrinya highlands complete a mysterious, little-visited country with deeply preserved hospitality.",
    es: "Eritrea es uno de los destinos más aislados del mundo: su capital, Asmara, fue declarada Patrimonio de la Humanidad por la UNESCO en 2017 por su increíble concentración de arquitectura Art déco y futurista italiana (años 1930), preservada tal cual como un museo al aire libre. La costa del mar Rojo (Massawa, Dahlak) y las tierras altas de Tigriña completan un país misterioso, poco turístico, de hospitalidad intacta.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April", es: "Octubre – Abril" },
      label: { fr: "Saison fraîche et sèche", en: "Cool dry season", es: "Estación fresca y seca" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : Asmara agréable (15–24°C), mer Rouge accessible (30°C). Plongée et snorkeling excellents dans l'archipel de Dahlak.",
        en: "Best time to go: pleasant weather in Asmara (15–24°C), and the Red Sea is accessible (30°C). Diving and snorkelling are excellent in the Dahlak archipelago.",
        es: "Mejor época: Asmara agradable (15–24°C), mar Rojo accesible (30°C). Buceo y esnórquel excelentes en el archipiélago de Dahlak.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto" },
      label: { fr: "Saison des pluies (hauts plateaux)", en: "Rainy season (highlands)", es: "Estación de lluvias (tierras altas)" },
      color: "#f59e0b",
      description: {
        fr: "Pluies sur les hauts plateaux d'Asmara (60–90mm). Côte (Massawa) très chaude (38–42°C). Meilleure période évitée.",
        en: "Rain falls over Asmara's highlands (60–90 mm). The coast (Massawa) is extremely hot (38–42°C). Best avoided.",
        es: "Lluvias en las tierras altas de Asmara (60–90 mm). La costa (Massawa) es muy calurosa (38–42°C). Mejor evitar esta época.",
      },
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "asmara",
      name: "Asmara",
      region: { fr: "Hauts plateaux (altitude 2 325m)", en: "Highlands (2,325 m altitude)", es: "Tierras altas (altitud 2325 m)" },
      data: [
        { month: "Jan", temp: 14, rain: 5,   icon: "⛅" },
        { month: "Fév", temp: 15, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 17, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 18, rain: 25,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 20,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 17, rain: 90,  icon: "⛅" },
        { month: "Aoû", temp: 17, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 18, rain: 30,  icon: "⛅" },
        { month: "Oct", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 14, rain: 5,   icon: "⛅" },
      ],
    },
    {
      id: "massawa",
      name: "Massawa",
      region: { fr: "Côte mer Rouge", en: "Red Sea coast", es: "Costa del mar Rojo" },
      data: [
        { month: "Jan", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Avr", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 38, rain: 5,   icon: "🌡️" },
        { month: "Aoû", temp: 38, rain: 5,   icon: "🌡️" },
        { month: "Sep", temp: 35, rain: 5,   icon: "🌡️" },
        { month: "Oct", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Nov", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 26, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Asmara — Art déco unique (UNESCO)", en: "Asmara — Unique Art Deco city (UNESCO)", es: "Asmara — Art déco singular (UNESCO)" },
      region: { fr: "Hauts plateaux", en: "Highlands", es: "Tierras altas" },
      description: {
        fr: "Asmara a été classée au patrimoine mondial UNESCO en 2017 pour son exceptionnelle architecture italienne des années 1930 : le Cinema Impero (futuriste, 1937), la station-service FIAT Tagliero (avion en béton sans piliers, 1938), l'opéra, les immeubles art déco de la Harnet Avenue. Une ville figée dans les années 30 italiens, sans publicités ni néons — un musée vivant.",
        en: "Asmara was listed as a UNESCO World Heritage Site in 2017 for its exceptional Italian architecture from the 1930s: Cinema Impero (Futurist, 1937), the FIAT Tagliero service station (a concrete airplane with no pillars, 1938), the opera house, and the Art Deco buildings along Harnet Avenue. A city frozen in the Italian 1930s, with no billboards or neon signs — a living museum.",
        es: "Asmara fue declarada Patrimonio de la Humanidad por la UNESCO en 2017 por su excepcional arquitectura italiana de los años 1930: el Cinema Impero (futurista, 1937), la gasolinera FIAT Tagliero (un avión de hormigón sin pilares, 1938), la ópera, los edificios art déco de Harnet Avenue. Una ciudad congelada en la Italia de los años 30, sin publicidad ni neones — un museo viviente.",
      },
      wikipedia: "File:Asmara-Night Panorama.jpeg",
      tags: ["Architecture", "UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Cinema Impero (1937) — chef-d'œuvre du futurisme", en: "Cinema Impero (1937) — a Futurist masterpiece", es: "Cinema Impero (1937) — obra maestra del futurismo" }, wikipedia: "Cinema_Impero" },
        { name: { fr: "Station FIAT Tagliero (1938) — avion en béton sans piliers", en: "FIAT Tagliero station (1938) — a pillarless concrete airplane", es: "Estación FIAT Tagliero (1938) — avión de hormigón sin pilares" }, wikipedia: "Fiat_Tagliero_Building" },
        { name: { fr: "Harnet Avenue — promenade art déco", en: "Harnet Avenue — Art Deco promenade", es: "Harnet Avenue — paseo art déco" }, wikipedia: "File:Harnet Avenue (8352530432).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Massawa — Cité des coraux et de l'histoire", en: "Massawa — City of coral and history", es: "Massawa — Ciudad del coral y la historia" },
      region: { fr: "Côte mer Rouge", en: "Red Sea coast", es: "Costa del mar Rojo" },
      description: {
        fr: "Massawa est le principal port eritréen sur la mer Rouge : son centre historique (Taulud Island) avec ses maisons ottomanes à moucharabieh, ses mosquées et ses souks a survécu aux guerres. Les ruines du palais d'Hailé Sélassié et les chars de guerre abandonnés rappellent la brutale libération de 1990. La mer est cristalline et les poissons abondants.",
        en: "Massawa is Eritrea's main Red Sea port: its historic centre (Taulud Island), with its Ottoman houses with mashrabiya balconies, mosques and souks, survived the wars. The ruins of Haile Selassie's palace and abandoned war tanks recall the brutal liberation of 1990. The sea is crystal clear and fish are plentiful.",
        es: "Massawa es el principal puerto eritreo del mar Rojo: su centro histórico (isla de Taulud), con sus casas otomanas de celosías, mezquitas y zocos, sobrevivió a las guerras. Las ruinas del palacio de Haile Selassie y los tanques de guerra abandonados recuerdan la brutal liberación de 1990. El mar es cristalino y el pescado abunda.",
      },
      wikipedia: "Massawa",
      tags: ["Plage", "Histoire"],
      mustSee: [
        { name: { fr: "Vieille ville de Taulud — maisons ottomanes et moucharabieh", en: "Taulud old town — Ottoman houses and mashrabiya balconies", es: "Casco antiguo de Taulud — casas otomanas y celosías" }, wikipedia: "File:Massawa Island Causeway (8529061280).jpg" },
        { name: { fr: "Chars de guerre devant la gare — mémorial de libération", en: "War tanks in front of the station — liberation memorial", es: "Tanques de guerra frente a la estación — memorial de la liberación" }, wikipedia: "File:Three Tanks (8529065894).jpg" },
        { name: { fr: "Palais impérial d'Hailé Sélassié en ruines", en: "Ruins of Haile Selassie's imperial palace", es: "Ruinas del palacio imperial de Haile Selassie" }, wikipedia: "File:Massawa,_Eritrea_-_City_Administration_Building_(8527951359).jpg" },
        { name: { fr: "Plage de Gurgusum — mer Rouge et récifs coralliens", en: "Gurgusum Beach — Red Sea and coral reefs", es: "Playa de Gurgusum — mar Rojo y arrecifes de coral" }, wikipedia: "File:Bay of Taulud (8527951431).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Archipel de Dahlak — Plongée mer Rouge", en: "Dahlak Archipelago — Red Sea diving", es: "Archipiélago de Dahlak — Buceo en el mar Rojo" },
      region: { fr: "Mer Rouge (au large de Massawa)", en: "Red Sea (off Massawa)", es: "Mar Rojo (frente a Massawa)" },
      description: {
        fr: "L'archipel de Dahlak comprend 209 îles coralliennes (seulement 4 habitées) sur les plus riches récifs de la mer Rouge. Les eaux sont parmi les moins polluées et les moins fréquentées de la planète : dauphins, raies manta, requins-baleines, tortues et coraux préservés. L'accès se fait depuis Massawa par bateau charter.",
        en: "The Dahlak archipelago includes 209 coral islands (only 4 are inhabited) on some of the richest reefs in the Red Sea. Its waters are among the least polluted and least visited on the planet: dolphins, manta rays, whale sharks, turtles and remarkably preserved coral thrive here. Access is from Massawa by charter boat.",
        es: "El archipiélago de Dahlak comprende 209 islas coralinas (solo 4 habitadas) sobre los arrecifes más ricos del mar Rojo. Sus aguas están entre las menos contaminadas y menos frecuentadas del planeta: delfines, mantarrayas, tiburones ballena, tortugas y corales preservados. El acceso se hace desde Massawa en barco chárter.",
      },
      wikipedia: "Dahlak_Archipelago",
      tags: ["Plage"],
      mustSee: [
        { name: { fr: "Plongée récifs de Dahlak — coraux 40m de profondeur", en: "Dahlak reef diving — coral down to 40 m deep", es: "Buceo en los arrecifes de Dahlak — corales a 40 m de profundidad" }, wikipedia: "File:Coral reef on Dahlak Island (Eritrea), Red Sea.jpg" },
        { name: { fr: "Dauphins et raies manta dans les canaux inter-îles", en: "Dolphins and manta rays in the channels between the islands", es: "Delfines y mantarrayas en los canales entre islas" }, wikipedia: "File:ISS016-E-11489 - View of Eritrea.jpg" },
        { name: { fr: "Plage déserte blanche sur île non-habitée", en: "Deserted white beach on an uninhabited island", es: "Playa blanca desierta en isla deshabitada" }, wikipedia: "File:Dahlak Marine Nataional Park banner.jpg" },
        { name: { fr: "Epaves de la 2e guerre mondiale (navires italiens)", en: "Second World War wrecks (Italian ships)", es: "Restos navales de la II Guerra Mundial (barcos italianos)" }, wikipedia: "File:Высадка на остров Нокра.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Érythrée est l'une des destinations les plus abordables au monde, mais le pays impose des règles strictes aux voyageurs (guide officiel obligatoire, permis pour quitter Asmara). Le nakfa n'est pas convertible à l'étranger — prévoir dollars ou euros en espèces.",
      en: "Eritrea is one of the most affordable destinations in the world, but the country imposes strict rules on travellers (official guide required, permit needed to leave Asmara). The nakfa cannot be exchanged abroad — bring US dollars or euros in cash.",
      es: "Eritrea es uno de los destinos más asequibles del mundo, pero el país impone normas estrictas a los viajeros (guía oficial obligatorio, permiso para salir de Asmara). El nakfa no es convertible en el extranjero — llevar dólares o euros en efectivo.",
    },
    currency: "ERN",
    exchangeRate: "1€ ≈ 17 ERN (officiel)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Pension / guesthouse à Asmara", en: "Guesthouse / pension in Asmara", es: "Pensión / casa de huéspedes en Asmara" }, price: "15–35 €", detail: { fr: "Simple mais propre, chambre privée", en: "Simple but clean, private room", es: "Sencillo pero limpio, habitación privada" } },
          { label: { fr: "Hôtel 3★ Asmara (Ambassador, Intercontinental)", en: "3★ hotel in Asmara (Ambassador, Intercontinental)", es: "Hotel 3★ en Asmara (Ambassador, Intercontinental)" }, price: "60–120 €", detail: { fr: "Architecture italienne préservée", en: "Well-preserved Italian architecture", es: "Arquitectura italiana bien conservada" } },
          { label: { fr: "Lodge côtier Massawa ou Dahlak", en: "Coastal lodge in Massawa or Dahlak", es: "Lodge costero en Massawa o Dahlak" }, price: "50–100 €", detail: { fr: "Bungalows face à la mer Rouge", en: "Bungalows facing the Red Sea", es: "Bungalós frente al mar Rojo" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Injera + zigni (ragoût de viande) dans un tefera", en: "Injera + zigni (meat stew) in a tefera", es: "Injera + zigni (estofado de carne) en un tefera" }, price: "3–8 €", detail: { fr: "Cuisine habesha typique", en: "Typical Habesha cuisine", es: "Cocina habesha típica" } },
          { label: { fr: "Café érythréen (cérémonial, 3 tasses)", en: "Eritrean coffee ceremony (3 cups)", es: "Ceremonia del café eritreo (3 tazas)" }, price: "1–2 €", detail: { fr: "Rituel incontournable", en: "An unmissable ritual", es: "Ritual imprescindible" } },
          { label: { fr: "Restaurant d'Asmara — pizza et pasta italienne", en: "Asmara restaurant — Italian pizza and pasta", es: "Restaurante de Asmara — pizza y pasta italiana" }, price: "8–15 €", detail: { fr: "Héritage culinaire italien visible partout", en: "Italian culinary heritage visible everywhere", es: "Herencia culinaria italiana visible en todas partes" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus Asmara–Massawa", en: "Asmara–Massawa bus", es: "Autobús Asmara–Massawa" }, price: "5–8 €", detail: { fr: "3h de route spectaculaire", en: "3 hours on a spectacular road", es: "3h de carretera espectacular" } },
          { label: { fr: "Guide officiel obligatoire (hors Asmara)", en: "Mandatory official guide (outside Asmara)", es: "Guía oficial obligatorio (fuera de Asmara)" }, price: "30–60 €/j", detail: { fr: "Requis par la loi pour visiter le pays", en: "Legally required to visit the country", es: "Exigido por ley para visitar el país" } },
          { label: { fr: "Taxi en ville Asmara", en: "Taxi within Asmara", es: "Taxi en la ciudad de Asmara" }, price: "1–3 €", detail: { fr: "Négocier le prix avant de monter", en: "Negotiate the fare before getting in", es: "Negociar el precio antes de subir" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Visite guidée architecture art déco Asmara", en: "Guided Art Deco architecture tour in Asmara", es: "Visita guiada de arquitectura art déco en Asmara" }, price: "20–40 €", detail: { fr: "Guide obligatoire, 3h", en: "Guide required, 3 hours", es: "Guía obligatorio, 3h" } },
          { label: { fr: "Charter bateau Dahlak (journée plongée)", en: "Dahlak boat charter (diving day trip)", es: "Chárter de barco a Dahlak (día de buceo)" }, price: "100–200 €", detail: { fr: "À diviser entre participants", en: "To be split between participants", es: "A repartir entre participantes" } },
          { label: { fr: "Voyage en train Asmara–Nefasit (week-end)", en: "Asmara–Nefasit train trip (weekend)", es: "Viaje en tren Asmara–Nefasit (fin de semana)" }, price: "20–40 €", detail: { fr: "Sur réservation, train à vapeur", en: "Advance booking required, steam train", es: "Con reserva previa, tren de vapor" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "30–55 €/j", desc: { fr: "Guesthouse + cuisine locale + transports + guide", en: "Guesthouse + local food + transport + guide", es: "Casa de huéspedes + comida local + transporte + guía" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "80–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions privées", en: "3★ hotel + restaurants + private excursions", es: "Hotel 3★ + restaurantes + excursiones privadas" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días" },
      route: {
        fr: "Asmara art déco (3j) → Train spectaculaire (1j) → Massawa + Dahlak (3j) → retour (1j)",
        en: "Art Deco Asmara (3d) → Scenic train ride (1d) → Massawa + Dahlak (3d) → return (1d)",
        es: "Asmara art déco (3d) → Tren espectacular (1d) → Massawa y Dahlak (3d) → regreso (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 200 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asmara (Turkish, Ethiopian)", en: "Return flight Paris–Asmara (Turkish, Ethiopian)", es: "Vuelo ida y vuelta Madrid–Asmara (Turkish, Ethiopian)" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)" }, amount: "200–350 €" },
            { label: { fr: "Guide officiel (obligatoire, 6 jours)", en: "Official guide (mandatory, 6 days)", es: "Guía oficial (obligatorio, 6 días)" }, amount: "180–360 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "120–200 €" },
            { label: { fr: "Transports + bateau Dahlak", en: "Transport + Dahlak boat", es: "Transporte + barco a Dahlak" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2 500 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asmara", en: "Return flight Paris–Asmara", es: "Vuelo ida y vuelta Madrid–Asmara" }, amount: "700–1 000 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)" }, amount: "600–1 000 €" },
            { label: { fr: "Guide privé + véhicule", en: "Private guide + vehicle", es: "Guía privado + vehículo" }, amount: "500–800 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes" }, amount: "300–500 €" },
            { label: { fr: "Plongée Dahlak + train", en: "Dahlak diving + train", es: "Buceo en Dahlak + tren" }, amount: "250–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~9–12h via Istanbul (Turkish), Addis-Abeba (Ethiopian) ou Dubaï (flydubai). Aucun direct.", en: "~9–12h via Istanbul (Turkish), Addis Ababa (Ethiopian) or Dubai (flydubai). No direct flights.", es: "~9–12h vía Estambul (Turkish), Adís Abeba (Ethiopian) o Dubái (flydubai). Sin vuelos directos." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire, à demander à l'ambassade d'Érythrée à Paris. Pas de visa à l'arrivée. Délai : 2–4 semaines.", en: "Visa required, to be requested from the Eritrean embassy in Paris. No visa on arrival. Processing time: 2–4 weeks.", es: "Visado obligatorio, solicitar en la embajada de Eritrea. Sin visado a la llegada. Plazo: 2–4 semanas." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Nakfa (ERN). Non convertible à l'étranger. Prévoir dollars USD ou euros en espèces. Aucun distributeur accessible aux étrangers.", en: "Nakfa (ERN). Cannot be exchanged abroad. Bring US dollars or euros in cash. No ATMs are accessible to foreigners.", es: "Nakfa (ERN). No convertible en el extranjero. Llevar dólares USD o euros en efectivo. Ningún cajero accesible para extranjeros." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Tigrigna (principale), Arabe et Anglais (officiels). Français peu parlé. Guide bilingue très utile.", en: "Tigrinya (main language), Arabic and English (official). French is rarely spoken. A bilingual guide is very useful.", es: "Tigriña (principal), árabe e inglés (oficiales). El español apenas se habla. Un guía bilingüe es muy útil." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/L (européen + italien) — 230V. Adaptateur européen standard fonctionne.", en: "Type C/L (European + Italian) — 230V. A standard European adapter works.", es: "Tipo C/L (europeo + italiano) — 230V. Funciona un adaptador europeo estándar." } },
    { icon: "🪪", label: { fr: "Guide obligatoire", en: "Mandatory guide", es: "Guía obligatorio" }, value: { fr: "Un guide officiel agréé est requis pour quitter Asmara. Prévoir ce coût dans le budget. L'agence de voyage organise cela.", en: "An approved official guide is required to leave Asmara. Factor this cost into your budget. Your travel agency usually arranges it.", es: "Se requiere un guía oficial autorizado para salir de Asmara. Incluir este coste en el presupuesto. La agencia de viajes lo organiza." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen nécessaire sur la côte (Massawa). Vaccins standard Afrique recommandés. Eau en bouteille.", en: "Malaria prophylaxis is needed on the coast (Massawa). Standard Africa travel vaccinations are recommended. Drink bottled water.", es: "Antipalúdico necesario en la costa (Massawa). Se recomiendan las vacunas estándar para África. Agua embotellada." } },
    { icon: "📵", label: { fr: "Internet", en: "Internet", es: "Internet" }, value: { fr: "Accès Internet très limité et lent. Réseaux sociaux parfois bloqués. Prévoir un déconnecté assumé.", en: "Internet access is very limited and slow. Social media is sometimes blocked. Expect an intentionally unplugged trip.", es: "Acceso a Internet muy limitado y lento. Las redes sociales a veces están bloqueadas. Prepárese para desconectar." } },
  ],
};
