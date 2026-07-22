export const MAURITANIA = {
  code: "MRT",
  numericId: 478,
  name: { fr: "Mauritanie", en: "Mauritania", es: "Mauritania" },
  emoji: "🇲🇷",
  capital: { fr: "Nouakchott", en: "Nouakchott", es: "Nuakchot" },
  language: { fr: "Arabe (officiel), Français, Pulaar, Soninké, Wolof", en: "Arabic (official), French, Pulaar, Soninke, Wolof", es: "Árabe (oficial), francés, pulaar, soninké, wólof" },
  currency: { fr: "Ouguiya (MRU)", en: "Ouguiya (MRU)", es: "Uguiya (MRU)" },
  timezone: "UTC",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 850, tripMid: 1700,
  },
  criteria: {
    unesco: 1,
    nature: 1,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "La Mauritanie est un immense pays saharien entre mer et désert, peu visité mais d'une beauté saisissante. Les villes caravanières de Chinguetti et Ouadane (UNESCO), le plateau de l'Adrar avec ses dunes et ses gorges, et le banc d'Arguin (UNESCO), sanctuaire mondial des oiseaux migrateurs, composent un itinéraire inoubliable pour les aventuriers.",
    en: "Mauritania is a vast Saharan country between sea and desert, seldom visited but strikingly beautiful. The caravan towns of Chinguetti and Ouadane (UNESCO), the Adrar plateau with its dunes and gorges, and the Banc d'Arguin (UNESCO), a world sanctuary for migratory birds, form an unforgettable route for adventurers.",
    es: "Mauritania es un inmenso país sahariano entre el mar y el desierto, poco visitado pero de una belleza impactante. Las ciudades caravaneras de Chinguetti y Ouadane (UNESCO), la meseta del Adrar con sus dunas y desfiladeros, y el banco de Arguin (UNESCO), santuario mundial de aves migratorias, componen un itinerario inolvidable para los aventureros.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero" },
      label: { fr: "Saison fraîche idéale", en: "Ideal cool season", es: "Estación fresca ideal" },
      color: "#22c55e",
      description: {
        fr: "La meilleure période pour voyager : températures agréables (20–28°C), pas de pluie, ciel bleu. Idéal pour le désert, les randonnées dans l'Adrar et la côte atlantique.",
        en: "The best time to travel: pleasant temperatures (20–28°C), no rain, blue skies. Ideal for the desert, hikes in the Adrar and the Atlantic coast.",
        es: "El mejor momento para viajar: temperaturas agradables (20–28°C), sin lluvia, cielo azul. Ideal para el desierto, las caminatas en el Adrar y la costa atlántica.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Avril", en: "March – April", es: "Marzo – Abril" },
      label: { fr: "Début de chaleur", en: "Early heat", es: "Inicio del calor" },
      color: "#f59e0b",
      description: {
        fr: "Températures montant à 30–35°C, quelques vents de sable (harmattan). Encore possible mais inconfortable pour les randonnées prolongées.",
        en: "Temperatures climbing to 30–35°C, occasional sandstorms (harmattan). Still possible but uncomfortable for extended hiking.",
        es: "Temperaturas que suben a 30–35°C, algunas tormentas de arena (harmatán). Aún posible pero incómodo para caminatas prolongadas.",
      },
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "nouakchott",
      name: "Nouakchott",
      region: { fr: "Nouakchott (côte atlantique)", en: "Nouakchott (Atlantic coast)", es: "Nuakchot (costa atlántica)" },
      data: [
        { month: "Jan", temp: 18, rain: 5,  icon: "☀️" },
        { month: "Fév", temp: 20, rain: 3,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 2,  icon: "☀️" },
        { month: "Avr", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Mai", temp: 28, rain: 3,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 5,  icon: "⛅" },
        { month: "Jul", temp: 30, rain: 10, icon: "⛅" },
        { month: "Aoû", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Sep", temp: 32, rain: 20, icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 23, rain: 5,  icon: "☀️" },
        { month: "Déc", temp: 19, rain: 3,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Chinguetti & l'Adrar", en: "Chinguetti & the Adrar", es: "Chinguetti y el Adrar" },
      region: "Adrar",
      description: {
        fr: "Chinguetti, inscrite au patrimoine mondial de l'UNESCO, est l'une des sept villes saintes de l'Islam et un haut lieu du commerce caravanier transsaharien. Ses bibliothèques de manuscrits anciens et ses maisons en banco se noient dans les dunes de l'erg du Sahara.",
        en: "Chinguetti, a UNESCO World Heritage Site, is one of the seven holy cities of Islam and a major hub of trans-Saharan caravan trade. Its libraries of ancient manuscripts and mud-brick houses are swallowed by the dunes of the Saharan erg.",
        es: "Chinguetti, declarada Patrimonio de la Humanidad por la UNESCO, es una de las siete ciudades santas del islam y un importante centro del comercio caravanero transahariano. Sus bibliotecas de manuscritos antiguos y sus casas de barro se hunden en las dunas del erg del Sahara.",
      },
      wikipedia: "Chinguetti",
      tags: ["UNESCO", "Désert", "Histoire", "Spiritualité"],
      mustSee: [
        { name: { fr: "Mosquée de Chinguetti — minaret en pierre", en: "Chinguetti Mosque — stone minaret", es: "Mezquita de Chinguetti — minarete de piedra" }, wikipedia: "Chinguetti_Mosque" },
        { name: { fr: "Dunes de l'Erg de Chinguetti — coucher de soleil", en: "Chinguetti Erg dunes — sunset", es: "Dunas del erg de Chinguetti — atardecer" }, wikipedia: "File:Erg Chebbi.jpeg" },
        { name: { fr: "Atar — ville de l'Adrar, point de départ", en: "Atar — Adrar town, starting point", es: "Atar — ciudad del Adrar, punto de partida" }, wikipedia: "Atar,_Mauritania" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc national du Banc d'Arguin", en: "Banc d'Arguin National Park", es: "Parque nacional del Banco de Arguin" },
      region: { fr: "Dakhlet Nouadhibou / Inchiri", en: "Dakhlet Nouadhibou / Inchiri", es: "Dakhlet Nouadhibou / Inchiri" },
      description: {
        fr: "Le banc d'Arguin est l'un des plus importants sanctuaires ornithologiques au monde, inscrit à l'UNESCO. Des millions d'oiseaux migrateurs s'y arrêtent entre l'Europe et l'Afrique sub-saharienne. Les pêcheurs imraguen utilisent encore des pirogues à voile pour pêcher au sein de ce lagon unique.",
        en: "The Banc d'Arguin is one of the world's most important bird sanctuaries, a UNESCO World Heritage Site. Millions of migratory birds stop here between Europe and sub-Saharan Africa. Imraguen fishermen still use sailing canoes to fish within this unique lagoon.",
        es: "El banco de Arguin es uno de los santuarios ornitológicos más importantes del mundo, declarado Patrimonio de la Humanidad por la UNESCO. Millones de aves migratorias se detienen aquí entre Europa y el África subsahariana. Los pescadores imraguen todavía utilizan piraguas de vela para pescar en esta laguna única.",
      },
      wikipedia: "File:ISS058-E-7710 - View of Mauritania.jpg",
      tags: ["UNESCO", "Safari", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Pêcheurs imraguen en pirogue à voile", en: "Imraguen fishermen in sailing canoes", es: "Pescadores imraguen en piragua de vela" }, wikipedia: "File:Banc-dArguin-byRundvald.jpg" },
        { name: { fr: "Plages désertes du parc", en: "The park's deserted beaches", es: "Playas desiertas del parque" }, wikipedia: "File:PNBA 43.JPG" },
        { name: { fr: "Coucher de soleil sur la lagune", en: "Sunset over the lagoon", es: "Atardecer sobre la laguna" }, wikipedia: "File:Banc d'arguin.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Ouadane & l'Églab", en: "Ouadane & the Eglab", es: "Ouadane y el Eglab" },
      region: "Adrar",
      description: {
        fr: "Ouadane, autre cité caravanière inscrite à l'UNESCO, domine une gorge spectaculaire au cœur du plateau de l'Adrar. Les paysages de roches rouges, de palmeraies et de ruines médiévales créent une atmosphère hors du temps pour les amateurs d'aventure saharienne.",
        en: "Ouadane, another UNESCO-listed caravan town, overlooks a spectacular gorge in the heart of the Adrar plateau. Landscapes of red rock, palm groves and medieval ruins create a timeless atmosphere for lovers of Saharan adventure.",
        es: "Ouadane, otra ciudad caravanera declarada Patrimonio de la Humanidad por la UNESCO, domina un desfiladero espectacular en el corazón de la meseta del Adrar. Los paisajes de roca roja, palmerales y ruinas medievales crean una atmósfera intemporal para los amantes de la aventura sahariana.",
      },
      wikipedia: "Ouadane",
      tags: ["UNESCO", "Désert", "Nature", "Histoire"],
      mustSee: [
        { name: { fr: "Ancienne ville médiévale de Ouadane", en: "Ouadane's old medieval town", es: "Antigua ciudad medieval de Ouadane" }, wikipedia: "Ouadane" },
        { name: { fr: "Peintures rupestres de l'Adrar", en: "Adrar rock paintings", es: "Pinturas rupestres del Adrar" }, wikipedia: "File:Adrar-Peintures rupestres (4).JPG" },
        { name: { fr: "Randonnée chameau dans le plateau", en: "Camel trek across the plateau", es: "Paseo en camello por la meseta" }, wikipedia: "File:Adrar-Camel (1).jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Nouakchott & la côte", en: "Nouakchott & the coast", es: "Nuakchot y la costa" },
      region: "Nouakchott",
      description: {
        fr: "Nouakchott, capitale née du désert en 1960, est une ville fascinante par ses contrastes : dunes qui avancent vers la mer, marché de poissons de Port de Pêche Artisanale où des pirogues déchargent des tonnes de poissons chaque matin, et quartiers de caravanes.",
        en: "Nouakchott, a capital born from the desert in 1960, is a fascinating city of contrasts: dunes advancing toward the sea, the fish market at the Port de Pêche Artisanale where canoes unload tonnes of fish every morning, and caravan neighbourhoods.",
        es: "Nuakchot, capital nacida del desierto en 1960, es una ciudad fascinante por sus contrastes: dunas que avanzan hacia el mar, el mercado de pescado del Puerto de Pesca Artesanal donde cada mañana las piraguas descargan toneladas de pescado, y barrios de caravanas.",
      },
      wikipedia: "Nouakchott",
      tags: ["Ville", "Shopping", "Plage", "Culture"],
      mustSee: [
        { name: { fr: "Port de Pêche Artisanale — marché au poisson", en: "Port de Pêche Artisanale — fish market", es: "Puerto de Pesca Artesanal — mercado de pescado" }, wikipedia: "File:Nouakchott beach - fishing boat.jpg" },
        { name: { fr: "Musée national de Mauritanie", en: "National Museum of Mauritania", es: "Museo Nacional de Mauritania" }, wikipedia: "File:NouakchottNationalMuseum1.jpg" },
        { name: { fr: "Marché Capitale — tissus et artisanat", en: "Marché Capitale — fabrics and crafts", es: "Marché Capitale — telas y artesanía" }, wikipedia: "File:Nouakchott,MarcheCapitale1.jpg" },
        { name: { fr: "Plage de Nouakchott au coucher de soleil", en: "Nouakchott beach at sunset", es: "Playa de Nuakchot al atardecer" }, wikipedia: "File:Sunset on the Aresquiers beach.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Mauritanie est une destination abordable mais l'infrastructure touristique est limitée, surtout dans les zones désertiques. Les hôtels de milieu de gamme existent principalement dans les grandes villes ; dans l'Adrar, on trouve surtout des campements sahariens.",
      en: "Mauritania is an affordable destination, but tourist infrastructure is limited, especially in desert areas. Mid-range hotels exist mainly in the larger cities; in the Adrar, Saharan camps are the norm.",
      es: "Mauritania es un destino asequible, pero la infraestructura turística es limitada, sobre todo en las zonas desérticas. Los hoteles de gama media existen principalmente en las grandes ciudades; en el Adrar, predominan los campamentos saharianos.",
    },
    currency: "MRU",
    exchangeRate: "1€ ≈ 38 MRU",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Campement saharien (Adrar)", en: "Saharan camp (Adrar)", es: "Campamento sahariano (Adrar)" }, price: "15–30 €", detail: { fr: "Tente ou chambre simple, repas inclus parfois", en: "Tent or simple room, meals sometimes included", es: "Tienda o habitación sencilla, a veces con comidas incluidas" } },
          { label: { fr: "Hôtel 2–3★ Nouakchott / Atar", en: "2–3★ hotel in Nouakchott / Atar", es: "Hotel 2–3★ en Nuakchot / Atar" }, price: "30–50 €", detail: { fr: "Clim, eau chaude", en: "Air conditioning, hot water", es: "Aire acondicionado, agua caliente" } },
          { label: { fr: "Hôtel de confort Nouakchott", en: "Comfort hotel in Nouakchott", es: "Hotel confort en Nuakchot" }, price: "60–100 €", detail: { fr: "Meilleur rapport qualité-prix en capitale", en: "Best value for money in the capital", es: "Mejor relación calidad-precio en la capital" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Thé à la menthe + pain (rue)", en: "Mint tea + bread (street)", es: "Té a la menta + pan (calle)" }, price: "0,50–1 €", detail: { fr: "Rituel social mauritanien", en: "A Mauritanian social ritual", es: "Ritual social mauritano" } },
          { label: { fr: "Restaurant local (méchoui, couscous)", en: "Local restaurant (méchoui, couscous)", es: "Restaurante local (méchoui, cuscús)" }, price: "4–8 €", detail: { fr: "Repas copieux", en: "Hearty meal", es: "Comida abundante" } },
          { label: { fr: "Restaurant touristique Nouakchott", en: "Touristy restaurant in Nouakchott", es: "Restaurante turístico en Nuakchot" }, price: "12–25 €", detail: { fr: "Poisson frais, cuisine internationale", en: "Fresh fish, international cuisine", es: "Pescado fresco, cocina internacional" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Taxi collectif Nouakchott–Atar", en: "Shared taxi Nouakchott–Atar", es: "Taxi colectivo Nuakchot–Atar" }, price: "15–25 €", detail: { fr: "~450 km, route bitumée", en: "~450 km, paved road", es: "~450 km, carretera asfaltada" } },
          { label: { fr: "4x4 avec chauffeur-guide / jour", en: "4x4 with driver-guide / day", es: "4x4 con chófer-guía / día" }, price: "60–100 €", detail: { fr: "Indispensable pour le désert", en: "Essential for the desert", es: "Indispensable para el desierto" } },
          { label: { fr: "Vol Nouakchott–Atar (Mauritania Airlines)", en: "Flight Nouakchott–Atar (Mauritania Airlines)", es: "Vuelo Nuakchot–Atar (Mauritania Airlines)" }, price: "60–100 €", detail: { fr: "1h de vol, gain de temps", en: "1h flight, saves time", es: "1h de vuelo, ahorra tiempo" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Randonnée chameau dans les dunes (1j)", en: "Camel trek in the dunes (1 day)", es: "Paseo en camello por las dunas (1 día)" }, price: "40–70 €", detail: { fr: "Guide + chameau + bivouac", en: "Guide + camel + bivouac", es: "Guía + camello + vivac" } },
          { label: { fr: "Visite bibliothèques de Chinguetti", en: "Chinguetti libraries visit", es: "Visita a las bibliotecas de Chinguetti" }, price: "5–10 €", detail: { fr: "Donation recommandée", en: "Donation recommended", es: "Se recomienda donación" } },
          { label: { fr: "Excursion banc d'Arguin (1j)", en: "Banc d'Arguin excursion (1 day)", es: "Excursión al banco de Arguin (1 día)" }, price: "50–80 €", detail: { fr: "Pirogue + guide ornithologique", en: "Canoe + birdwatching guide", es: "Piragua + guía ornitológico" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "40–60 €/j", desc: { fr: "Campement + bouffe locale + 4x4 partagé", en: "Camp + local food + shared 4x4", es: "Campamento + comida local + 4x4 compartido" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "80–120 €/j", desc: { fr: "Hôtel 3★ + restos + 4x4 privatif + guides", en: "3★ hotel + restaurants + private 4x4 + guides", es: "Hotel 3★ + restaurantes + 4x4 privado + guías" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: {
        fr: "Nouakchott (2j) → Banc d'Arguin (1j) → Atar (1j) → Chinguetti (2j) → Ouadane (2j) → Atar → Nouakchott (2j)",
        en: "Nouakchott (2d) → Banc d'Arguin (1d) → Atar (1d) → Chinguetti (2d) → Ouadane (2d) → Atar → Nouakchott (2d)",
        es: "Nuakchot (2d) → Banco de Arguin (1d) → Atar (1d) → Chinguetti (2d) → Ouadane (2d) → Atar → Nuakchot (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nouakchott", en: "Return flight Paris–Nouakchott", es: "Vuelo ida y vuelta París–Nuakchot" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "200–280 €" },
            { label: { fr: "Transports locaux + 4x4 partagé", en: "Local transport + shared 4x4", es: "Transporte local + 4x4 compartido" }, amount: "150–220 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida y bebidas" }, amount: "100–150 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades y guías" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nouakchott", en: "Return flight Paris–Nouakchott", es: "Vuelo ida y vuelta París–Nuakchot" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "500–700 €" },
            { label: { fr: "4x4 privatif + chauffeur", en: "Private 4x4 + driver", es: "4x4 privado con chófer" }, amount: "400–600 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida y bebidas" }, amount: "200–280 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides", es: "Actividades y guías" }, amount: "200–250 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París" }, value: { fr: "~5h (Mauritania Airlines direct ou via Casablanca)", en: "~5h (Mauritania Airlines direct or via Casablanca)", es: "~5h (Mauritania Airlines directo o vía Casablanca)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa obligatoire — obtenu à l'arrivée (25 €) ou e-Visa en ligne", en: "Visa required — obtained on arrival (25 €) or e-Visa online", es: "Visado obligatorio — se obtiene a la llegada (25 €) o e-visado en línea" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Ouguiya MRU — espèces indispensables, peu de DAB en dehors de Nouakchott", en: "Ouguiya (MRU) — cash essential, few ATMs outside Nouakchott", es: "Uguiya (MRU) — el efectivo es indispensable, pocos cajeros fuera de Nuakchot" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Arabe hassaniya (courant) + Français compris dans les milieux touristiques", en: "Hassaniya Arabic (common) + French understood in tourist circles", es: "Árabe hasanía (común) + francés comprendido en los círculos turísticos" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/E — 220 V", en: "Type C/E — 220V", es: "Tipo C/E — 220 V" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen recommandé + fièvre jaune recommandée — eau en bouteille uniquement", en: "Antimalarials recommended + yellow fever recommended — bottled water only", es: "Se recomienda antipalúdico y vacuna contra la fiebre amarilla — solo agua embotellada" } },
    { icon: "🌡️", label: { fr: "Chaleur", en: "Heat", es: "Calor" }, value: { fr: "Températures dépassant 45°C en été — voyage juillet-septembre fortement déconseillé", en: "Temperatures exceeding 45°C in summer — travel from July to September strongly discouraged", es: "Temperaturas que superan los 45°C en verano — se desaconseja firmemente viajar entre julio y septiembre" } },
    { icon: "🔒", label: { fr: "Sécurité", en: "Security", es: "Seguridad" }, value: { fr: "Consulter les avis du Quai d'Orsay — certaines zones frontalières déconseillées", en: "Check your government's travel advisory — some border areas are advised against", es: "Consultar las recomendaciones oficiales de viaje — algunas zonas fronterizas están desaconsejadas" } },
  ],
};
