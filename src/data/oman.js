export const OMAN = {
  code: "OMN",
  numericId: 512,
  name: { fr: "Oman", en: "Oman" },
  emoji: "🇴🇲",
  capital: { fr: "Mascate", en: "Muscat" },
  language: { fr: "Arabe", en: "Arabic" },
  currency: { fr: "Rial omanais (OMR)", en: "Omani Rial (OMR)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 55, budgetMid: 120,
    tripMin: 1800, tripMid: 3500,
  },
  description: {
    fr: "Oman est le pays le plus authentique et sûr du Golfe. Déserts de sable fins (Wahiba), montagnes vertigineuses (Jebel Akhdar), côtes sauvages où pondent les tortues marines, vieilles fortresses et la chaleur légendaire de l'hospitalité omanaise.",
    en: "Oman is the most authentic and safe country in the Gulf. Fine desert sands (Wahiba), dizzying mountains (Jebel Akhdar), wild coastlines where sea turtles nest, old fortresses and the legendary warmth of Omani hospitality.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April" },
      label: { fr: "Saison fraîche", en: "Cool season" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (20–30 °C). Haute saison pour le désert, les montagnes et la plongée à Musandam.",
        en: "Ideal temperatures (20–30 °C). High season for the desert, the mountains and diving in Musandam.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Khareef (mousson Dhofar)", en: "Khareef (Dhofar monsoon)" },
      color: "#3b82f6",
      description: {
        fr: "La région de Salalah reçoit une mousson unique, transformant le désert en oasis verte. Phénomène rare dans la péninsule arabique.",
        en: "The Salalah region receives a unique monsoon, turning the desert into a green oasis. A rare phenomenon in the Arabian peninsula.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "muscat",
      name: { fr: "Mascate", en: "Muscat" },
      region: { fr: "Mascate", en: "Muscat" },
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
      name: { fr: "Mascate", en: "Muscat" },
      region: { fr: "Mascate", en: "Muscat" },
      description: {
        fr: "Capitale propre et ordonnée, avec la grandiose mosquée du Sultan Qaboos (l'une des plus grandes du monde), le souk Mutrah aux mille senteurs et la corniche longeant la mer d'Oman.",
        en: "A clean, orderly capital, with the grandiose Sultan Qaboos Mosque (one of the largest in the world), the fragrant Mutrah souk and the corniche running along the Sea of Oman.",
      },
      wikipedia: "Muscat",
      tags: ["Ville", "Architecture", "Culture", "Souks", "Histoire", "UNESCO", "Gastronomie"],
      mustSee: [
        { name: { fr: "Grande Mosquée Sultan Qaboos", en: "Sultan Qaboos Grand Mosque" }, wikipedia: "Sultan_Qaboos_Grand_Mosque" },
        { name: { fr: "Souk Mutrah", en: "Mutrah Souk" }, wikipedia: "File:Muttrah (4).jpg" },
        { name: { fr: "Fort Bahla", en: "Bahla Fort" }, wikipedia: "Bahla_Fort" },
      ],
    },
    {
      id: 2,
      name: { fr: "Désert des Wahiba (Sharqiyah Sands)", en: "Wahiba Sands (Sharqiyah Sands)" },
      region: { fr: "Sharqiyah", en: "Sharqiyah" },
      description: {
        fr: "Mer de dunes aux couleurs or et rouge, avec des camps de tente de luxe ou des bivouacs chez les Bédouins. Randonnées en dromadaire et nuits étoilées.",
        en: "A sea of dunes in shades of gold and red, with luxury tented camps or Bedouin bivouacs. Camel treks and starry nights.",
      },
      wikipedia: "File:Wahiba Sands (7).jpg",
      tags: ["Désert", "Aventure", "Nature"],
      mustSee: [
        { name: { fr: "Dunes de sable rouge", en: "Red sand dunes" }, wikipedia: "File:Wahiba Sands (7).jpg" },
        { name: { fr: "Balades en dromadaire", en: "Camel rides" }, wikipedia: "Camel_racing" },
        { name: { fr: "Wadi Bani Khalid (oasis)", en: "Wadi Bani Khalid (oasis)" }, wikipedia: "Wadi_Bani_Khalid" },
      ],
    },
    {
      id: 3,
      name: { fr: "Jebel Akhdar — Montagne Verte", en: "Jebel Akhdar — Green Mountain" },
      region: { fr: "Al-Dakhiliyah", en: "Al-Dakhiliyah" },
      description: {
        fr: "Plateau montagneux à 2 000 m d'altitude avec des microclimats uniques, des terrasses cultivées de rosiers (essence de rose mondialement connue) et des villages perchés.",
        en: "A mountain plateau at 2,000 m altitude with unique microclimates, terraced rose plantations (world-renowned rose essence) and clifftop villages.",
      },
      wikipedia: "File:Dschabal_Mischt_(Jebel_Misht,_Kamm-Berg),_Oman_-_Hadschar-Gebirge_01.jpg",
      tags: ["Nature", "Randonnée", "Villages", "Altitude"],
      mustSee: [
        { name: { fr: "Terasses de Wadi Ghul (Grand Canyon d'Oman)", en: "Wadi Ghul terraces (Oman's Grand Canyon)" }, wikipedia: "Jebel_Shams" },
        { name: { fr: "Village de Nizwa & souq", en: "Nizwa village & souq" }, wikipedia: "Nizwa" },
        { name: { fr: "Plantation de roses (avril)", en: "Rose plantation (April)" }, wikipedia: "File:Ras_Ash,_small_mountain_village_located_in_the_Hajar_Mountains.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Wadi Shab & Côte Est", en: "Wadi Shab & East Coast" },
      region: { fr: "Sharqiyah", en: "Sharqiyah" },
      description: {
        fr: "Wadi Shab est l'un des plus beaux canyons d'Oman, avec des piscines naturelles turquoise et une grotte secrète cachée sous une cascade.",
        en: "Wadi Shab is one of Oman's most beautiful canyons, with turquoise natural pools and a secret cave hidden behind a waterfall.",
      },
      wikipedia: "File:Wadi Oman.jpg",
      tags: ["Nature", "Randonnée", "Mer"],
      mustSee: [
        { name: { fr: "Baignade dans les piscines du Wadi Shab", en: "Swimming in Wadi Shab's pools" }, wikipedia: "File:Tiwi, wadi shabt, 01.jpg" },
        { name: { fr: "Plage de Fins (tortues vertes)", en: "Fins Beach (green turtles)" }, wikipedia: "File:Ras Al Jinz turtle reserve (14746801408).jpg" },
        { name: { fr: "Péninsule de Musandam (fjords)", en: "Musandam Peninsula (fjords)" }, wikipedia: "File:Musandam Peninsula aerial.webp" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Oman est moins cher que Dubaï mais reste une destination premium. Location de voiture indispensable pour explorer le pays.",
      en: "Oman is cheaper than Dubai but remains a premium destination. Renting a car is essential to explore the country.",
    },
    currency: "OMR",
    exchangeRate: "1€ ≈ 0,42 OMR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / budget", en: "Guesthouse / budget" }, price: "25–45 €", detail: { fr: "Intérieur, loin du littoral", en: "Inland, far from the coast" } },
          { label: { fr: "Hôtel 3–4★", en: "3–4★ Hotel" }, price: "60–120 €", detail: { fr: "Standard Mascate", en: "Standard in Muscat" } },
          { label: { fr: "Desert Camp luxe", en: "Luxury desert camp" }, price: "150–300 €", detail: { fr: "Dîner étoilé inclus", en: "Fine dining included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Shuwa / shawarma local", en: "Shuwa / local shawarma" }, price: "2–5 €", detail: { fr: "Agneau cuit en fosse, délicieux" , en: "Pit-cooked lamb, delicious" } },
          { label: { fr: "Restaurant local", en: "Local restaurant" }, price: "8–15 €", detail: { fr: "Restaurants de quartier", en: "Neighbourhood restaurants" } },
          { label: { fr: "Restaurant hôtel/touristique", en: "Hotel / tourist restaurant" }, price: "25–50 €", detail: { fr: "Mascate, Salalah", en: "Muscat, Salalah" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Location 4×4 / jour", en: "4x4 rental / day" }, price: "40–70 €", detail: { fr: "Obligatoire pour wadis et désert", en: "Required for wadis and desert" } },
          { label: { fr: "Taxi Mascate (Uber)", en: "Muscat taxi (Uber)" }, price: "3–8 €", detail: { fr: "Courses urbaines", en: "Urban rides" } },
          { label: { fr: "Vol Mascate–Salalah", en: "Muscat–Salalah flight" }, price: "60–120 €", detail: { fr: "Gain de temps (1h vs 12h route)", en: "Time saver (1h vs 12h by road)" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Safari Wahiba Sands (1j)", en: "Wahiba Sands safari (1d)" }, price: "60–100 €", detail: { fr: "4×4, dunes, camp", en: "4x4, dunes, camp" } },
          { label: { fr: "Plongée/snorkeling Musandam", en: "Musandam diving/snorkelling" }, price: "50–80 €", detail: { fr: "Dauphins et coraux", en: "Dolphins and coral" } },
          { label: { fr: "Trek Jebel Akhdar", en: "Jebel Akhdar trek" }, price: "40–80 €/j", detail: { fr: "Guide local recommandé", en: "Local guide recommended" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "55–80 €/j", desc: { fr: "Guesthouses + restaurants locaux + location 4×4 partagée", en: "Guesthouses + local restaurants + shared 4x4 rental" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "120–180 €/j", desc: { fr: "Hôtel 4★ + bonnes tables + excursions guidées", en: "4★ hotel + good restaurants + guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €+/j", desc: { fr: "Resorts + camps désert + expériences exclusives", en: "Resorts + desert camps + exclusive experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Mascate (2j) → Jebel Akhdar (2j) → Nizwa & forts (2j) → Wahiba Sands (2j) → Wadi Shab (2j) → Musandam (2j) → Mascate (2j)",
        en: "Muscat (2d) → Jebel Akhdar (2d) → Nizwa & forts (2d) → Wahiba Sands (2d) → Wadi Shab (2d) → Musandam (2d) → Muscat (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mascate", en: "Return flight Paris–Muscat" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "450–700 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Location 4×4", en: "4x4 rental" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "250–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mascate", en: "Return flight Paris–Muscat" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 100–1 800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "600–900 €" },
            { label: { fr: "Location 4×4 + guides", en: "4x4 rental + guides" }, amount: "700–1 100 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mascate (Business)", en: "Return flight Paris–Muscat (Business)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Hébergement premium (14 nuits)", en: "Premium accommodation (14 nights)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "1 000–2 000 €" },
            { label: { fr: "Circuit privé", en: "Private tour" }, amount: "1 000–1 500 €" },
            { label: { fr: "Activités exclusives", en: "Exclusive activities" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~7h (Oman Air direct, Air France via escale)", en: "~7h (Oman Air direct, Air France via layover)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa en ligne (~20 €, 30 jours)", en: "Online e-Visa (~20 €, 30 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Rial omanais (1€ ≈ 0,42 OMR)", en: "Omani Rial (1€ ≈ 0.42 OMR)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arabe (anglais bien répandu)", en: "Arabic (English widely spoken)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 240 V (comme UK)", en: "Type G – 240 V (like the UK)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Très bonne couverture, e-SIM disponible", en: "Very good coverage, e-SIM available" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non recommandée — eau en bouteille", en: "Not recommended — bottled water advised" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire, soins excellents", en: "No mandatory vaccines, excellent healthcare" } },
  ],
};
