export const BRUNEI = {
  code: "BRN",
  numericId: 96,
  name: { fr: "Brunéi", en: "Brunei", es: "Brunéi" },
  emoji: "🇧🇳",
  capital: { fr: "Bandar Seri Begawan", en: "Bandar Seri Begawan", es: "Bandar Seri Begawan" },
  language: { fr: "Malais, Anglais", en: "Malay, English", es: "Malayo, inglés" },
  currency: { fr: "Dollar de Brunéi (BND)", en: "Brunei dollar (BND)", es: "Dólar de Brunéi (BND)" },
  timezone: "UTC+8",
  filter: { budgetMin: 60, budgetMid: 120, tripMin: 1000, tripMid: 2200 },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "Brunéi est un minuscule sultanat souverain niché sur l'île de Bornéo, l'un des États les plus riches du monde grâce à ses immenses réserves pétrolières. Cette richesse se reflète dans ses mosquées aux dômes dorés spectaculaires, ses palais royaux et son architecture de prestige, mais aussi dans la conservation de vastes forêts tropicales primaires. Kampong Ayer, le plus grand village sur pilotis du monde habité en permanence, offre un contraste saisissant avec l'opulence royale environnante.",
    en: "Brunei is a tiny sovereign sultanate tucked away on the island of Borneo, one of the richest states in the world thanks to its vast oil reserves. This wealth is reflected in its spectacular golden-domed mosques, royal palaces and grand architecture, but also in the preservation of vast stretches of primary rainforest. Kampong Ayer, the world's largest permanently inhabited stilt village, offers a striking contrast to the surrounding royal opulence.",
    es: "Brunéi es un pequeño sultanato soberano enclavado en la isla de Borneo, uno de los estados más ricos del mundo gracias a sus inmensas reservas petrolíferas. Esta riqueza se refleja en sus espectaculares mezquitas de cúpulas doradas, sus palacios reales y su arquitectura de prestigio, pero también en la conservación de vastos bosques tropicales primarios. Kampong Ayer, el mayor pueblo sobre pilotes habitado permanentemente del mundo, ofrece un contraste sorprendente con la opulencia real circundante.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Octobre", en: "March – October", es: "Marzo – Octubre" },
      label: { fr: "Moins pluvieux", en: "Drier season", es: "Estación menos lluviosa" },
      color: "#22c55e",
      description: {
        fr: "Pluies moins fréquentes, idéal pour visiter les forêts de Temburong et les sites culturels.",
        en: "Less frequent rainfall, ideal for exploring the forests of Temburong and cultural landmarks.",
        es: "Lluvias menos frecuentes, ideal para visitar los bosques de Temburong y los sitios culturales.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias" },
      color: "#f59e0b",
      description: {
        fr: "Pluies abondantes du nord-est, mais les sites restent accessibles. Températures identiques.",
        en: "Heavy north-east monsoon rains, though sites remain accessible. Temperatures stay the same.",
        es: "Lluvias abundantes del monzón del noreste, pero los sitios siguen siendo accesibles. Temperaturas idénticas.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "bandar_seri_begawan",
      name: "Bandar Seri Begawan",
      region: { fr: "Capitale", en: "Capital", es: "Capital" },
      data: [
        { month: "Jan", temp: 26, rain: 200, icon: "⛅" },
        { month: "Fév", temp: 26, rain: 150, icon: "☀️" },
        { month: "Mar", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 26, rain: 130, icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 155, icon: "☀️" },
        { month: "Sep", temp: 26, rain: 145, icon: "☀️" },
        { month: "Oct", temp: 26, rain: 170, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 230, icon: "⛅" },
        { month: "Déc", temp: 27, rain: 200, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Mosquée Omar Ali Saifuddien", en: "Omar Ali Saifuddien Mosque", es: "Mezquita Omar Ali Saifuddien" },
      region: { fr: "Bandar Seri Begawan", en: "Bandar Seri Begawan", es: "Bandar Seri Begawan" },
      description: {
        fr: "La mosquée Omar Ali Saifuddien est l'emblème architectural de Brunéi, une chef-d'œuvre de marbre blanc et de dômes dorés construite en 1958 et entourée d'un lagon artificiel qui reflète sa silhouette majestueuse. Considérée comme l'une des plus belles mosquées d'Asie du Sud-Est, elle peut accueillir jusqu'à 3 000 fidèles dans ses espaces intérieurs ornés de mosaïques vénitiennes et de vitraux britanniques. La promenade nocturne autour du lagon illuminé est un moment de sérénité inoubliable.",
        en: "The Omar Ali Saifuddien Mosque is Brunei's architectural emblem, a masterpiece of white marble and golden domes built in 1958 and surrounded by an artificial lagoon reflecting its majestic silhouette. Considered one of the finest mosques in Southeast Asia, it can accommodate up to 3,000 worshippers in interiors adorned with Venetian mosaics and British stained glass. An evening stroll around the illuminated lagoon is an unforgettable moment of serenity.",
        es: "La mezquita Omar Ali Saifuddien es el emblema arquitectónico de Brunéi, una obra maestra de mármol blanco y cúpulas doradas construida en 1958 y rodeada de una laguna artificial que refleja su majestuosa silueta. Considerada una de las mezquitas más bellas del sudeste asiático, puede acoger hasta 3000 fieles en su interior adornado con mosaicos venecianos y vidrieras británicas. El paseo nocturno alrededor de la laguna iluminada es un momento de serenidad inolvidable.",
      },
      wikipedia: "Omar_Ali_Saifuddien_Mosque",
      tags: ["Architecture", "Spiritualité", "Nightlife"],
      mustSee: [
        { name: { fr: "Dôme doré — vue depuis le lagon au coucher du soleil", en: "Golden dome — view from the lagoon at sunset", es: "Cúpula dorada — vista desde la laguna al atardecer" }, wikipedia: "File:Sultan Omar Ali Saifuddien Mosque; 2002.jpg" },
        { name: { fr: "Réplique de la barge royale — sur le lagon, décoration de fêtes", en: "Replica of the royal barge — on the lagoon, used for festive ceremonies", es: "Réplica de la barcaza real — en la laguna, decoración festiva" }, wikipedia: "File:Mahligai barge, Omar Ali Saifuddien Mosque, April 2025 05.jpg" },
        { name: { fr: "Intérieur — mosaïques vénitiennes et marbres italiens", en: "Interior — Venetian mosaics and Italian marble", es: "Interior — mosaicos venecianos y mármoles italianos" }, wikipedia: "File:Interior of Omar Ali Saifuddien Mosque, April 2025.jpg" },
        { name: { fr: "Promenade nocturne — illuminations spectaculaires après la nuit", en: "Evening walk — spectacular illuminations after dark", es: "Paseo nocturno — iluminación espectacular tras el anochecer" }, wikipedia: "File:Sultan Omar Ali Saifuddin Mosque 02.jpg" },
      ],
    },
    {
      id: 2,
      name: "Kampong Ayer",
      region: { fr: "Bandar Seri Begawan", en: "Bandar Seri Begawan", es: "Bandar Seri Begawan" },
      description: {
        fr: "Kampong Ayer est le plus grand village sur pilotis du monde, une ville aquatique de 30 000 habitants construite sur les eaux du fleuve Brunéi depuis au moins 1521, date à laquelle Magellan le décrivit déjà dans ses journaux de voyage. Ce labyrinthe de maisons en bois reliées par des passerelles et desservies par des taxis-bateaux abrite des mosquées, des cliniques, des écoles et des marchés flottants. Se promener dans ses ruelles à l'aube, loin des circuits touristiques, révèle une vie quotidienne fascinante.",
        en: "Kampong Ayer is the world's largest stilt village, a waterborne settlement of 30,000 people built over the Brunei River since at least 1521, when Magellan already described it in his travel journals. This maze of wooden houses linked by walkways and served by water taxis is home to mosques, clinics, schools and floating markets. Wandering its lanes at dawn, away from the tourist trail, reveals a fascinating daily life.",
        es: "Kampong Ayer es el mayor pueblo sobre pilotes del mundo, una ciudad acuática de 30 000 habitantes construida sobre las aguas del río Brunéi desde al menos 1521, fecha en la que Magallanes ya lo describió en sus diarios de viaje. Este laberinto de casas de madera unidas por pasarelas y servidas por taxis acuáticos alberga mezquitas, clínicas, escuelas y mercados flotantes. Pasear por sus callejuelas al amanecer, lejos de los circuitos turísticos, revela una vida cotidiana fascinante.",
      },
      wikipedia: "Kampong_Ayer",
      tags: ["Rural", "Culture", "Histoire", "Plage"],
      mustSee: [
        { name: { fr: "Musée culturel de Kampong Ayer — exposition sur la vie aquatique", en: "Kampong Ayer Cultural Museum — exhibition on life on the water", es: "Museo cultural de Kampong Ayer — exposición sobre la vida acuática" }, wikipedia: "File:BN-bsb-kampong-ayer.jpg" },
        { name: { fr: "Traversée en water taxi — réseau de bateaux-taxis entre les villages", en: "Water taxi ride — network of boat taxis between the villages", es: "Travesía en taxi acuático — red de taxis acuáticos entre los pueblos" }, wikipedia: "File:Kampong Ayer 27 May 2023 34.jpg" },
        { name: { fr: "Mosquée flottante — prière du vendredi en communauté", en: "Floating mosque — communal Friday prayers", es: "Mezquita flotante — oración comunitaria del viernes" }, wikipedia: "File:Jeti 16, Kampong Ayer, Brunei, April 2025.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national d'Ulu Temburong", en: "Ulu Temburong National Park", es: "Parque nacional de Ulu Temburong" },
      region: { fr: "District de Temburong", en: "Temburong District", es: "Distrito de Temburong" },
      description: {
        fr: "Le parc national d'Ulu Temburong est un sanctuaire de forêt primaire de 550 km² accessible uniquement en bateau rapide et en longboat depuis la capitale, traversant la Malaisie orientale. Cette forêt vierge millénaire, pratiquement intacte, abrite une biodiversité extraordinaire : proboscis, gibbons, pythons réticulés et des centaines d'espèces d'oiseaux. La passerelle aérienne culminant à 60 mètres au-dessus de la canopée offre une vue spectaculaire sur l'immensité de la forêt tropicale.",
        en: "Ulu Temburong National Park is a 550 km² primary rainforest sanctuary accessible only by speedboat and longboat from the capital, crossing eastern Malaysia along the way. This ancient, virtually untouched jungle is home to extraordinary biodiversity: proboscis monkeys, gibbons, reticulated pythons and hundreds of bird species. The canopy walkway rising 60 metres above the treetops offers a spectacular view over the immensity of the rainforest.",
        es: "El parque nacional de Ulu Temburong es un santuario de bosque primario de 550 km² accesible únicamente en lancha rápida y longboat desde la capital, atravesando la Malasia oriental. Esta jungla milenaria, prácticamente intacta, alberga una biodiversidad extraordinaria: monos narigudos, gibones, pitones reticuladas y cientos de especies de aves. La pasarela aérea, que se eleva 60 metros sobre las copas de los árboles, ofrece una vista espectacular sobre la inmensidad de la selva tropical.",
      },
      wikipedia: "Ulu_Temburong_National_Park",
      tags: ["Nature"],
      mustSee: [
        { name: { fr: "Passerelle de la canopée — 60 m de hauteur sur la forêt primaire", en: "Canopy walkway — 60 m above the primary rainforest", es: "Pasarela de la canopea — 60 m de altura sobre el bosque primario" }, wikipedia: "File:Ulu Temburong Canopy Walk 2013 12.jpg" },
        { name: { fr: "Longboat sur la rivière — navigation en pirogue à moteur dans la jungle", en: "Longboat ride on the river — motorised canoe through the jungle", es: "Longboat por el río — navegación en piragua a motor por la jungla" }, wikipedia: "Ulu_Temburong_National_Park" },
        { name: { fr: "Cascades de Temburong — baignade dans les eaux cristallines de la rivière", en: "Temburong waterfalls — swimming in the river's crystal-clear waters", es: "Cascadas de Temburong — baño en las aguas cristalinas del río" }, wikipedia: "File:Ulu Temburong Canopy Walk 2013 24.jpg" },
        { name: { fr: "Observation des proboscis — singes au grand nez au lever du soleil", en: "Proboscis monkey watching — long-nosed monkeys at sunrise", es: "Observación de monos narigudos — al amanecer" }, wikipedia: "Proboscis_monkey" },
      ],
    },
    {
      id: 4,
      name: { fr: "Palais royal Istana Nurul Iman", en: "Istana Nurul Iman Royal Palace", es: "Palacio real Istana Nurul Iman" },
      region: { fr: "Bandar Seri Begawan", en: "Bandar Seri Begawan", es: "Bandar Seri Begawan" },
      description: {
        fr: "L'Istana Nurul Iman est la résidence officielle du Sultan de Brunéi et la plus grande résidence royale au monde, avec ses 1 788 pièces, ses 257 salles de bain et ses écuries pour 110 poneys de polo. Cette architecture moghole-malaise aux dômes dorés est normalement fermée au public, mais son parc extérieur et la vue depuis le fleuve restent accessibles. Lors de la fête du Hari Raya Aïd el-Fitr, le sultan ouvre traditionnellement le palais aux habitants et aux visiteurs.",
        en: "Istana Nurul Iman is the official residence of the Sultan of Brunei and the largest royal residence in the world, with 1,788 rooms, 257 bathrooms and stables for 110 polo ponies. This Mughal-Malay masterpiece with golden domes is normally closed to the public, but its outer grounds and river views remain accessible. During the Hari Raya Eid al-Fitr celebrations, the Sultan traditionally opens the palace to residents and visitors.",
        es: "El Istana Nurul Iman es la residencia oficial del sultán de Brunéi y la mayor residencia real del mundo, con 1788 habitaciones, 257 baños y establos para 110 ponis de polo. Esta obra maestra mogol-malaya de cúpulas doradas suele estar cerrada al público, pero su parque exterior y las vistas desde el río siguen siendo accesibles. Durante la festividad del Hari Raya Aidilfitri, el sultán abre tradicionalmente el palacio a los habitantes y visitantes.",
      },
      wikipedia: "Istana_Nurul_Iman",
      tags: ["Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Vue depuis le fleuve — panorama du palais depuis un bateau", en: "View from the river — panorama of the palace by boat", es: "Vista desde el río — panorámica del palacio desde un barco" }, wikipedia: "File:Istana Nurul Iman's Heliport.jpg" },
        { name: { fr: "Dômes et minarets — architecture islamique à grande échelle", en: "Domes and minarets — large-scale Islamic architecture", es: "Cúpulas y minaretes — arquitectura islámica a gran escala" }, wikipedia: "File:1000200673.mp4-45579(1).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Brunéi est plus cher que ses voisins malaisiens ou indonésiens, mais reste abordable comparé aux standards occidentaux. La vente d'alcool est interdite dans le pays — il faut passer par les duty-free ou les hôtels internationaux autorisés.",
      en: "Brunei is pricier than neighbouring Malaysia or Indonesia, but still affordable by Western standards. Alcohol sales are banned in the country, so visitors must rely on duty-free allowances or licensed international hotels.",
      es: "Brunéi es más caro que sus vecinos Malasia o Indonesia, pero sigue siendo asequible según los estándares occidentales. La venta de alcohol está prohibida en el país — hay que recurrir al duty-free o a los hoteles internacionales autorizados.",
    },
    currency: "BND",
    exchangeRate: "1€ ≈ 1,45 BND",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse ou petit hôtel", en: "Guesthouse or small hotel", es: "Casa de huéspedes o hotel pequeño" }, price: "25–50 €" },
          { label: { fr: "Hôtel 3 étoiles", en: "3-star hotel", es: "Hotel 3 estrellas" }, price: "60–100 €" },
          { label: { fr: "Hôtel de luxe (Empire Hotel)", en: "Luxury hotel (Empire Hotel)", es: "Hotel de lujo (Empire Hotel)" }, price: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Nasi lemak ou mie goreng au marché", en: "Nasi lemak or mie goreng at the market", es: "Nasi lemak o mie goreng en el mercado" }, price: "2–4 €" },
          { label: { fr: "Restaurant local complet", en: "Full meal at a local restaurant", es: "Comida completa en restaurante local" }, price: "6–12 €" },
          { label: { fr: "Restaurant international ou hôtel", en: "International restaurant or hotel dining", es: "Restaurante internacional o de hotel" }, price: "20–40 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Bus local en ville (rare, peu pratique)", en: "Local city bus (rare, not very convenient)", es: "Autobús urbano local (escaso, poco práctico)" }, price: "0,50–1 €" },
          { label: { fr: "Taxi en ville (8–10 km)", en: "Taxi in town (8–10 km)", es: "Taxi en la ciudad (8–10 km)" }, price: "5–10 €" },
          { label: { fr: "Water taxi vers Kampong Ayer", en: "Water taxi to Kampong Ayer", es: "Taxi acuático a Kampong Ayer" }, price: "1–2 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Entrée mosquée Omar Ali (gratuite)", en: "Omar Ali Mosque entry (free)", es: "Entrada a la mezquita Omar Ali (gratis)" }, price: "Gratuit" },
          { label: { fr: "Tour guidé Ulu Temburong (journée)", en: "Ulu Temburong guided tour (day trip)", es: "Tour guiado a Ulu Temburong (día completo)" }, price: "60–120 €" },
          { label: { fr: "Location voiture / jour", en: "Car rental / day", es: "Alquiler de coche / día" }, price: "30–60 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
        daily: "50–80 €/j",
        desc: { fr: "Guesthouse, repas au marché, transports en taxi, visites gratuites.", en: "Guesthouse, market meals, taxi transport and free visits.", es: "Casa de huéspedes, comidas de mercado, transporte en taxi, visitas gratuitas." },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort" },
        daily: "100–180 €/j",
        desc: { fr: "Hôtel 3-4 étoiles, restaurants, excursion Temburong, voiture de location.", en: "3- to 4-star hotel, restaurants, Temburong excursion and rental car.", es: "Hotel 3-4 estrellas, restaurantes, excursión a Temburong, coche de alquiler." },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "5 jours", en: "5 days", es: "5 días" },
      route: { fr: "Bandar Seri Begawan → Kampong Ayer → Ulu Temburong → BSB", en: "Bandar Seri Begawan → Kampong Ayer → Ulu Temburong → BSB", es: "Bandar Seri Begawan → Kampong Ayer → Ulu Temburong → BSB" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1000 – 1400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Brunéi (via KL ou Singapour)", en: "Return flight Paris–Brunei (via KL or Singapore)", es: "Vuelo ida y vuelta Madrid–Brunéi (vía KL o Singapur)" }, amount: "550–800 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)", es: "Alojamiento (4 noches)" }, amount: "100–160 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local" }, amount: "30–60 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas" }, amount: "60–100 €" },
            { label: { fr: "Activités (Temburong inclus)", en: "Activities (including Temburong)", es: "Actividades (incluye Temburong)" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "2000 – 3000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Brunéi (direct ou premium)", en: "Return flight Paris–Brunei (direct or premium)", es: "Vuelo ida y vuelta Madrid–Brunéi (directo o premium)" }, amount: "700–1100 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)", es: "Alojamiento (4 noches)" }, amount: "400–700 €" },
            { label: { fr: "Transports et location voiture", en: "Transport and car rental", es: "Transporte y alquiler de coche" }, amount: "150–250 €" },
            { label: { fr: "Nourriture + restaurants", en: "Food + restaurants", es: "Comida + restaurantes" }, amount: "150–250 €" },
            { label: { fr: "Activités et excursions", en: "Activities and excursions", es: "Actividades y excursiones" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "14–18h avec 1–2 escales (Kuala Lumpur, Singapour ou Dubaï). Royal Brunei Airlines depuis certains hubs", en: "14–18 hours with 1–2 stopovers (Kuala Lumpur, Singapore or Dubai). Royal Brunei Airlines operates from some hubs.", es: "14–18h con 1–2 escalas (Kuala Lumpur, Singapur o Dubái). Royal Brunei Airlines opera desde algunos hubs." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Exemption de visa pour les ressortissants français jusqu'à 30 jours", en: "Visa-free entry for French citizens for up to 30 days", es: "Entrada sin visado para ciudadanos europeos hasta 30 días" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Dollar de Brunéi (BND), paritaire avec le dollar de Singapour. CB largement acceptée", en: "Brunei dollar (BND), pegged at parity with the Singapore dollar. Credit cards are widely accepted.", es: "Dólar de Brunéi (BND), a la par con el dólar de Singapur. Tarjeta ampliamente aceptada." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Malais officiel, anglais très répandu dans les commerces et hôtels", en: "Malay is the official language, and English is widely spoken in shops and hotels.", es: "Malayo oficial, el inglés está muy extendido en comercios y hoteles." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G britannique (240V) — adaptateur universel nécessaire", en: "British Type G plug (240V) — a universal adapter is needed.", es: "Tipo G británico (240V) — se necesita adaptador universal." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Pas de vaccin obligatoire. Hépatite A recommandée. Soins de santé de bonne qualité", en: "No mandatory vaccines. Hepatitis A is recommended. Healthcare is of good quality.", es: "Sin vacunas obligatorias. Se recomienda la hepatitis A. Atención sanitaria de buena calidad." } },
    { icon: "🍺", label: { fr: "Alcool", en: "Alcohol", es: "Alcohol" }, value: { fr: "Vente et consommation publique d'alcool interdites. Touristes peuvent importer 2L en duty-free à l'arrivée", en: "Public sale and consumption of alcohol are banned. Tourists may bring in 2 litres duty-free on arrival.", es: "Venta y consumo público de alcohol prohibidos. Los turistas pueden importar 2 L libres de impuestos a la llegada." } },
    { icon: "👗", label: { fr: "Tenue vestimentaire", en: "Dress code", es: "Vestimenta" }, value: { fr: "Tenue décente requise dans les mosquées et bâtiments officiels. Code vestimentaire respectueux recommandé partout", en: "Modest clothing is required in mosques and official buildings. Respectful dress is recommended everywhere.", es: "Se exige vestimenta decente en mezquitas y edificios oficiales. Se recomienda una vestimenta respetuosa en todas partes." } },
  ],
};
