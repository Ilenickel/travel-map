export const OMAN = {
  code: "OMN",
  numericId: 512,
  name: { fr: "Oman", en: "Oman", es: "Omán" },
  emoji: "🇴🇲",
  capital: { fr: "Mascate", en: "Muscat", es: "Mascate" },
  language: { fr: "Arabe", en: "Arabic", es: "Árabe" },
  currency: { fr: "Rial omanais (OMR)", en: "Omani Rial (OMR)", es: "Rial omaní (OMR)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 55, budgetMid: 120,
    tripMin: 1800, tripMid: 3500,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 2,
  },
  description: {
    fr: "Oman est le pays le plus authentique et sûr du Golfe. Déserts de sable fins (Wahiba), montagnes vertigineuses (Jebel Akhdar), côtes sauvages où pondent les tortues marines, vieilles fortresses et la chaleur légendaire de l'hospitalité omanaise.",
    en: "Oman is the most authentic and safe country in the Gulf. Fine desert sands (Wahiba), dizzying mountains (Jebel Akhdar), wild coastlines where sea turtles nest, old fortresses and the legendary warmth of Omani hospitality.",
    es: "Omán es el país más auténtico y seguro del Golfo. Desiertos de arena fina (Wahiba), montañas vertiginosas (Jebel Akhdar), costas salvajes donde anidan las tortugas marinas, viejas fortalezas y la legendaria calidez de la hospitalidad omaní.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April", es: "Octubre – Abril" },
      label: { fr: "Saison fraîche", en: "Cool season", es: "Estación fresca" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (20–30 °C). Haute saison pour le désert, les montagnes et la plongée à Musandam.",
        en: "Ideal temperatures (20–30 °C). High season for the desert, the mountains and diving in Musandam.",
        es: "Temperaturas ideales (20–30 °C). Temporada alta para el desierto, las montañas y el buceo en Musandam.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre" },
      label: { fr: "Khareef (mousson Dhofar)", en: "Khareef (Dhofar monsoon)", es: "Khareef (monzón de Dhofar)" },
      color: "#3b82f6",
      description: {
        fr: "La région de Salalah reçoit une mousson unique, transformant le désert en oasis verte. Phénomène rare dans la péninsule arabique.",
        en: "The Salalah region receives a unique monsoon, turning the desert into a green oasis. A rare phenomenon in the Arabian peninsula.",
        es: "La región de Salalah recibe un monzón único, que transforma el desierto en un oasis verde. Fenómeno excepcional en la península arábiga.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "muscat",
      name: { fr: "Mascate", en: "Muscat", es: "Mascate" },
      region: { fr: "Mascate", en: "Muscat", es: "Mascate" },
      data: [
        { month: "Jan", temp: 21, rain: 25,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Mai", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Nov", temp: 25, rain: 10,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 20,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Mascate", en: "Muscat", es: "Mascate" },
      region: { fr: "Mascate", en: "Muscat", es: "Mascate" },
      description: {
        fr: "Capitale propre et ordonnée, avec la grandiose mosquée du Sultan Qaboos (l'une des plus grandes du monde), le souk Mutrah aux mille senteurs et la corniche longeant la mer d'Oman.",
        en: "A clean, orderly capital, with the grandiose Sultan Qaboos Mosque (one of the largest in the world), the fragrant Mutrah souk and the corniche running along the Sea of Oman.",
        es: "Capital limpia y ordenada, con la grandiosa mezquita del Sultán Qaboos (una de las más grandes del mundo), el zoco de Mutrah lleno de aromas y el paseo marítimo a lo largo del mar de Omán.",
      },
      wikipedia: "Muscat",
      tags: ["Ville", "Architecture", "Culture", "Histoire", "UNESCO", "Gastronomie"],
      mustSee: [
        { name: { fr: "Grande Mosquée Sultan Qaboos", en: "Sultan Qaboos Grand Mosque", es: "Gran Mezquita del Sultán Qaboos" }, wikipedia: "Sultan_Qaboos_Grand_Mosque" },
        { name: { fr: "Souk Mutrah", en: "Mutrah Souk", es: "Zoco de Mutrah" }, wikipedia: "File:Muttrah (4).jpg" },
        { name: { fr: "Fort Bahla", en: "Bahla Fort", es: "Fuerte de Bahla" }, wikipedia: "Bahla_Fort" },
      ],
    },
    {
      id: 2,
      name: { fr: "Désert des Wahiba (Sharqiyah Sands)", en: "Wahiba Sands (Sharqiyah Sands)", es: "Desierto de Wahiba (Sharqiyah Sands)" },
      region: { fr: "Sharqiyah", en: "Sharqiyah", es: "Sharqiyah" },
      description: {
        fr: "Mer de dunes aux couleurs or et rouge, avec des camps de tente de luxe ou des bivouacs chez les Bédouins. Randonnées en dromadaire et nuits étoilées.",
        en: "A sea of dunes in shades of gold and red, with luxury tented camps or Bedouin bivouacs. Camel treks and starry nights.",
        es: "Mar de dunas de colores dorados y rojos, con campamentos de lujo o vivacs junto a beduinos. Rutas en dromedario y noches estrelladas.",
      },
      wikipedia: "File:Wahiba Sands (7).jpg",
      tags: ["Désert", "Aventure", "Nature"],
      mustSee: [
        { name: { fr: "Dunes de sable rouge", en: "Red sand dunes", es: "Dunas de arena roja" }, wikipedia: "File:Wahiba Sands (7).jpg" },
        { name: { fr: "Balades en dromadaire", en: "Camel rides", es: "Paseos en dromedario" }, wikipedia: "Camel_racing" },
        { name: { fr: "Wadi Bani Khalid (oasis)", en: "Wadi Bani Khalid (oasis)", es: "Wadi Bani Khalid (oasis)" }, wikipedia: "Wadi_Bani_Khalid" },
      ],
    },
    {
      id: 3,
      name: { fr: "Jebel Akhdar — Montagne Verte", en: "Jebel Akhdar — Green Mountain", es: "Jebel Akhdar — Montaña Verde" },
      region: { fr: "Al-Dakhiliyah", en: "Al-Dakhiliyah", es: "Al-Dakhiliyah" },
      description: {
        fr: "Plateau montagneux à 2 000 m d'altitude avec des microclimats uniques, des terrasses cultivées de rosiers (essence de rose mondialement connue) et des villages perchés.",
        en: "A mountain plateau at 2,000 m altitude with unique microclimates, terraced rose plantations (world-renowned rose essence) and clifftop villages.",
        es: "Meseta montañosa a 2.000 m de altitud con microclimas únicos, terrazas de rosales cultivados (esencia de rosa mundialmente conocida) y pueblos encaramados.",
      },
      wikipedia: "File:Dschabal_Mischt_(Jebel_Misht,_Kamm-Berg),_Oman_-_Hadschar-Gebirge_01.jpg",
      tags: ["Nature", "Randonnée", "Rural", "Montagne"],
      mustSee: [
        { name: { fr: "Terasses de Wadi Ghul (Grand Canyon d'Oman)", en: "Wadi Ghul terraces (Oman's Grand Canyon)", es: "Terrazas de Wadi Ghul (el Gran Cañón de Omán)" }, wikipedia: "Jebel_Shams" },
        { name: { fr: "Village de Nizwa & souq", en: "Nizwa village & souq", es: "Pueblo de Nizwa y su zoco" }, wikipedia: "Nizwa" },
        { name: { fr: "Plantation de roses (avril)", en: "Rose plantation (April)", es: "Plantación de rosas (abril)" }, wikipedia: "File:Ras_Ash,_small_mountain_village_located_in_the_Hajar_Mountains.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Wadi Shab & Côte Est", en: "Wadi Shab & East Coast", es: "Wadi Shab y la costa este" },
      region: { fr: "Sharqiyah", en: "Sharqiyah", es: "Sharqiyah" },
      description: {
        fr: "Wadi Shab est l'un des plus beaux canyons d'Oman, avec des piscines naturelles turquoise et une grotte secrète cachée sous une cascade.",
        en: "Wadi Shab is one of Oman's most beautiful canyons, with turquoise natural pools and a secret cave hidden behind a waterfall.",
        es: "Wadi Shab es uno de los cañones más bellos de Omán, con piscinas naturales turquesas y una cueva secreta oculta tras una cascada.",
      },
      wikipedia: "File:Wadi Oman.jpg",
      tags: ["Nature", "Randonnée", "Plage"],
      mustSee: [
        { name: { fr: "Baignade dans les piscines du Wadi Shab", en: "Swimming in Wadi Shab's pools", es: "Baño en las piscinas del Wadi Shab" }, wikipedia: "File:Tiwi, wadi shabt, 01.jpg" },
        { name: { fr: "Plage de Fins (tortues vertes)", en: "Fins Beach (green turtles)", es: "Playa de Fins (tortugas verdes)" }, wikipedia: "File:Ras Al Jinz turtle reserve (14746801408).jpg" },
        { name: { fr: "Péninsule de Musandam (fjords)", en: "Musandam Peninsula (fjords)", es: "Península de Musandam (fiordos)" }, wikipedia: "File:Musandam Peninsula aerial.webp" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Oman est moins cher que Dubaï mais reste une destination premium. Location de voiture indispensable pour explorer le pays.",
      en: "Oman is cheaper than Dubai but remains a premium destination. Renting a car is essential to explore the country.",
      es: "Omán es más barato que Dubái, pero sigue siendo un destino premium. El alquiler de coche es indispensable para explorar el país.",
    },
    currency: "OMR",
    exchangeRate: "1€ ≈ 0,42 OMR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / budget", en: "Guesthouse / budget", es: "Guesthouse / económico" }, price: "25–45 €", detail: { fr: "Intérieur, loin du littoral", en: "Inland, far from the coast", es: "Interior, lejos del litoral" } },
          { label: { fr: "Hôtel 3–4★", en: "3–4★ Hotel", es: "Hotel 3–4★" }, price: "60–120 €", detail: { fr: "Standard Mascate", en: "Standard in Muscat", es: "Estándar en Mascate" } },
          { label: { fr: "Desert Camp luxe", en: "Luxury desert camp", es: "Campamento de lujo en el desierto" }, price: "150–300 €", detail: { fr: "Dîner étoilé inclus", en: "Fine dining included", es: "Cena de alta gama incluida" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Shuwa / shawarma local", en: "Shuwa / local shawarma", es: "Shuwa / shawarma local" }, price: "2–5 €", detail: { fr: "Agneau cuit en fosse, délicieux" , en: "Pit-cooked lamb, delicious", es: "Cordero cocido en fosa, delicioso" } },
          { label: { fr: "Restaurant local", en: "Local restaurant", es: "Restaurante local" }, price: "8–15 €", detail: { fr: "Restaurants de quartier", en: "Neighbourhood restaurants", es: "Restaurantes de barrio" } },
          { label: { fr: "Restaurant hôtel/touristique", en: "Hotel / tourist restaurant", es: "Restaurante de hotel / turístico" }, price: "25–50 €", detail: { fr: "Mascate, Salalah", en: "Muscat, Salalah", es: "Mascate, Salalah" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Location 4×4 / jour", en: "4x4 rental / day", es: "Alquiler de 4x4 / día" }, price: "40–70 €", detail: { fr: "Obligatoire pour wadis et désert", en: "Required for wadis and desert", es: "Obligatorio para wadis y desierto" } },
          { label: { fr: "Taxi Mascate (Uber)", en: "Muscat taxi (Uber)", es: "Taxi en Mascate (Uber)" }, price: "3–8 €", detail: { fr: "Courses urbaines", en: "Urban rides", es: "Trayectos urbanos" } },
          { label: { fr: "Vol Mascate–Salalah", en: "Muscat–Salalah flight", es: "Vuelo Mascate–Salalah" }, price: "60–120 €", detail: { fr: "Gain de temps (1h vs 12h route)", en: "Time saver (1h vs 12h by road)", es: "Ahorro de tiempo (1h frente a 12h por carretera)" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Safari Wahiba Sands (1j)", en: "Wahiba Sands safari (1d)", es: "Safari por Wahiba Sands (1d)" }, price: "60–100 €", detail: { fr: "4×4, dunes, camp", en: "4x4, dunes, camp", es: "4x4, dunas, campamento" } },
          { label: { fr: "Plongée/snorkeling Musandam", en: "Musandam diving/snorkelling", es: "Buceo/esnórquel en Musandam" }, price: "50–80 €", detail: { fr: "Dauphins et coraux", en: "Dolphins and coral", es: "Delfines y corales" } },
          { label: { fr: "Trek Jebel Akhdar", en: "Jebel Akhdar trek", es: "Trekking por el Jebel Akhdar" }, price: "40–80 €/j", detail: { fr: "Guide local recommandé", en: "Local guide recommended", es: "Se recomienda guía local" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "55–80 €/j", desc: { fr: "Guesthouses + restaurants locaux + location 4×4 partagée", en: "Guesthouses + local restaurants + shared 4x4 rental", es: "Guesthouses + restaurantes locales + alquiler de 4x4 compartido" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "120–180 €/j", desc: { fr: "Hôtel 4★ + bonnes tables + excursions guidées", en: "4★ hotel + good restaurants + guided excursions", es: "Hotel 4★ + buenos restaurantes + excursiones guiadas" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo" }, daily: "300 €+/j", desc: { fr: "Resorts + camps désert + expériences exclusives", en: "Resorts + desert camps + exclusive experiences", es: "Resorts + campamentos en el desierto + experiencias exclusivas" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas" },
      route: {
        fr: "Mascate (2j) → Jebel Akhdar (2j) → Nizwa & forts (2j) → Wahiba Sands (2j) → Wadi Shab (2j) → Musandam (2j) → Mascate (2j)",
        en: "Muscat (2d) → Jebel Akhdar (2d) → Nizwa & forts (2d) → Wahiba Sands (2d) → Wadi Shab (2d) → Musandam (2d) → Muscat (2d)",
        es: "Mascate (2d) → Jebel Akhdar (2d) → Nizwa y fuertes (2d) → Wahiba Sands (2d) → Wadi Shab (2d) → Musandam (2d) → Mascate (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mascate", en: "Return flight Paris–Muscat", es: "Vuelo ida y vuelta Madrid–Mascate" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)" }, amount: "450–700 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "300–450 €" },
            { label: { fr: "Location 4×4", en: "4x4 rental", es: "Alquiler de 4x4" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos" }, amount: "250–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mascate", en: "Return flight Paris–Muscat", es: "Vuelo ida y vuelta Madrid–Mascate" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)" }, amount: "1 100–1 800 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "600–900 €" },
            { label: { fr: "Location 4×4 + guides", en: "4x4 rental + guides", es: "Alquiler de 4x4 + guías" }, amount: "700–1 100 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions", es: "Actividades y excursiones" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mascate (Business)", en: "Return flight Paris–Muscat (Business)", es: "Vuelo ida y vuelta Madrid–Mascate (Business)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Hébergement premium (14 nuits)", en: "Premium accommodation (14 nights)", es: "Alojamiento premium (14 noches)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias" }, amount: "1 000–2 000 €" },
            { label: { fr: "Circuit privé", en: "Private tour", es: "Circuito privado" }, amount: "1 000–1 500 €" },
            { label: { fr: "Activités exclusives", en: "Exclusive activities", es: "Actividades exclusivas" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~7h (Oman Air direct, Air France via escale)", en: "~7h (Oman Air direct, Air France via layover)", es: "~7h (Oman Air directo, Iberia vía escala)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "e-Visa en ligne (~20 €, 30 jours)", en: "Online e-Visa (~20 €, 30 days)", es: "e-Visa en línea (~20 €, 30 días)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Rial omanais (1€ ≈ 0,42 OMR)", en: "Omani Rial (1€ ≈ 0.42 OMR)", es: "Rial omaní (1€ ≈ 0,42 OMR)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Arabe (anglais bien répandu)", en: "Arabic (English widely spoken)", es: "Árabe (el inglés está muy extendido)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G – 240 V (comme UK)", en: "Type G – 240 V (like the UK)", es: "Tipo G – 240 V (como en el Reino Unido)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red" }, value: { fr: "Très bonne couverture, e-SIM disponible", en: "Very good coverage, e-SIM available", es: "Muy buena cobertura, e-SIM disponible" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non recommandée — eau en bouteille", en: "Not recommended — bottled water advised", es: "No recomendada — se aconseja agua embotellada" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucun vaccin obligatoire, soins excellents", en: "No mandatory vaccines, excellent healthcare", es: "Ninguna vacuna obligatoria, atención médica excelente" } },
  ],
};
