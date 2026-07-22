export const UAE = {
  code: "ARE",
  numericId: 784,
  name: { fr: "Émirats Arabes Unis", en: "United Arab Emirates", es: "Emiratos Árabes Unidos" },
  emoji: "🇦🇪",
  capital: { fr: "Abou Dabi", en: "Abu Dhabi", es: "Abu Dabi" },
  language: { fr: "Arabe", en: "Arabic", es: "Árabe" },
  currency: { fr: "Dirham (AED)", en: "Dirham (AED)", es: "Dirham (AED)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 200,
    tripMin: 2500, tripMid: 5000,
  },
  criteria: {
    unesco: 1,
    nature: 1,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 3,
    safari: 0,
    ski: 0,
    ville: 3,
    plage: 2,
  },
  description: {
    fr: "Les Émirats Arabes Unis incarnent le luxe et la modernité au cœur du désert. Entre les gratte-ciels de Dubaï, la grande mosquée d'Abou Dabi, les dunes dorées du désert et les souks parfumés d'épices, les EAU offrent un contraste fascinant entre tradition et futurisme.",
    en: "The United Arab Emirates embody luxury and modernity in the heart of the desert. Between Dubai's skyscrapers, Abu Dhabi's grand mosque, the golden desert dunes and spice-scented souks, the UAE offers a fascinating contrast between tradition and futurism.",
    es: "Los Emiratos Árabes Unidos encarnan el lujo y la modernidad en pleno corazón del desierto. Entre los rascacielos de Dubái, la gran mezquita de Abu Dabi, las dunas doradas del desierto y los zocos perfumados de especias, los EAU ofrecen un contraste fascinante entre tradición y futurismo.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March", es: "Noviembre – marzo" },
      label: { fr: "Saison fraîche", en: "Cool season", es: "Estación fresca" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (20–28 °C), ciel bleu, parfait pour visiter Dubaï, Abou Dabi et faire du désert.",
        en: "Ideal temperatures (20–28 °C), blue skies, perfect for visiting Dubai, Abu Dhabi and the desert.",
        es: "Temperaturas ideales (20–28 °C), cielo despejado, perfecto para visitar Dubái, Abu Dabi y el desierto.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November", es: "Octubre – noviembre" },
      label: { fr: "Transition douce", en: "Mild transition", es: "Transición suave" },
      color: "#f59e0b",
      description: {
        fr: "Températures encore agréables (28–32 °C), foules moins importantes, tarifs plus bas.",
        en: "Still pleasant temperatures (28–32 °C), smaller crowds, lower prices.",
        es: "Temperaturas todavía agradables (28–32 °C), menos aglomeraciones, precios más bajos.",
      },
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "dubai",
      name: { fr: "Dubaï", en: "Dubai", es: "Dubái" },
      region: { fr: "Dubai", en: "Dubai", es: "Dubái" },
      data: [
        { month: "Jan", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Mai", temp: 35, rain: 1,   icon: "🌡️" },
        { month: "Jun", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 3,   icon: "⛅" },
        { month: "Déc", temp: 22, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Dubaï", en: "Dubai", es: "Dubái" },
      region: { fr: "Émirat de Dubaï", en: "Emirate of Dubai", es: "Emirato de Dubái" },
      description: {
        fr: "Métropole ultra-moderne avec la plus haute tour du monde, des centres commerciaux gigantesques, un ski en intérieur et le luxe accessible à tous les budgets.",
        en: "An ultra-modern metropolis with the world's tallest tower, gigantic shopping malls, indoor skiing and luxury accessible to every budget.",
        es: "Metrópolis ultramoderna con la torre más alta del mundo, centros comerciales gigantescos, esquí en interior y lujo accesible para todos los presupuestos.",
      },
      wikipedia: "Dubai",
      tags: ["Ville", "Luxe", "Shopping", "Architecture", "Plage", "Gastronomie", "Histoire"],
      mustSee: [
        { name: "Burj Khalifa", wikipedia: "Burj_Khalifa" },
        { name: "Burj Al Arab", wikipedia: "Burj_Al_Arab" },
        { name: "Palm Jumeirah", wikipedia: "Palm_Jumeirah" },
        { name: "Dubai Mall", wikipedia: "Dubai_Mall" },
      ],
    },
    {
      id: 2,
      name: { fr: "Abou Dabi", en: "Abu Dhabi", es: "Abu Dabi" },
      region: { fr: "Émirat d'Abou Dabi", en: "Emirate of Abu Dhabi", es: "Emirato de Abu Dabi" },
      description: {
        fr: "Capitale fédérale plus tranquille que Dubaï, avec la majestueuse Grande Mosquée Sheikh Zayed, le Louvre Abu Dhabi et les circuits de F1 de Yas Island.",
        en: "A federal capital quieter than Dubai, with the majestic Sheikh Zayed Grand Mosque, the Louvre Abu Dhabi and the F1 circuit on Yas Island.",
        es: "Capital federal más tranquila que Dubái, con la majestuosa Gran Mezquita Sheikh Zayed, el Louvre Abu Dabi y el circuito de F1 de Yas Island.",
      },
      wikipedia: "Abu_Dhabi",
      tags: ["Culture", "Architecture", "Art", "Luxe", "Gastronomie"],
      mustSee: [
        { name: { fr: "Grande Mosquée Sheikh Zayed", en: "Sheikh Zayed Grand Mosque", es: "Gran Mezquita Sheikh Zayed" }, wikipedia: "Sheikh_Zayed_Grand_Mosque" },
        { name: "Louvre Abu Dhabi", wikipedia: "Louvre_Abu_Dhabi" },
        { name: "Yas Island", wikipedia: "Yas_Island" },
      ],
    },
    {
      id: 3,
      name: { fr: "Désert & Safaris", en: "Desert & Safaris", es: "Desierto y safaris" },
      region: { fr: "Intérieur", en: "Interior", es: "Interior" },
      description: {
        fr: "Les dunes de Liwa et Al Awir offrent des safaris 4×4 inoubliables, du sandboarding et des nuits sous les étoiles dans des camps de luxe.",
        en: "The dunes of Liwa and Al Awir offer unforgettable 4x4 safaris, sandboarding and nights under the stars in luxury camps.",
        es: "Las dunas de Liwa y Al Awir ofrecen safaris en 4×4 inolvidables, sandboarding y noches bajo las estrellas en campamentos de lujo.",
      },
      wikipedia: "Rub'_al_Khali",
      tags: ["Nature", "Aventure", "Désert", "Safari"],
      mustSee: [
        { name: { fr: "Oasis de Liwa", en: "Liwa Oasis", es: "Oasis de Liwa" }, wikipedia: "Liwa_Oasis" },
        { name: { fr: "Dunes de l'Empty Quarter", en: "Empty Quarter dunes", es: "Dunas del Cuarto Vacío" }, wikipedia: "Rub'_al_Khali" },
        { name: "Hatta Mountain Reserve", wikipedia: "File:Hatta Mountain Reserve Picture 04.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Les EAU sont une destination premium. Dubaï offre cependant toutes les gammes de prix, des food courts abordables aux restaurants gastronomiques d'exception.",
      en: "The UAE is a premium destination. Dubai nonetheless offers every price range, from affordable food courts to exceptional fine dining.",
      es: "Los EAU son un destino premium. Sin embargo, Dubái ofrece todas las gamas de precios, desde food courts asequibles hasta restaurantes gastronómicos de excepción.",
    },
    currency: "AED",
    exchangeRate: "1€ ≈ 3,90 AED",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Hôtel 3★ budget", en: "Budget 3★ hotel", es: "Hotel 3★ económico" }, price: "60–90 €", detail: { fr: "Zones éloignées du centre", en: "Areas away from the centre", es: "Zonas alejadas del centro" } },
          { label: { fr: "Hôtel 4★ confort", en: "Comfortable 4★ hotel", es: "Hotel 4★ confort" }, price: "120–200 €", detail: { fr: "Marina, DIFC, Downtown", en: "Marina, DIFC, Downtown", es: "Marina, DIFC, Downtown" } },
          { label: { fr: "Hôtel 5★ luxe", en: "Luxury 5★ hotel", es: "Hotel 5★ de lujo" }, price: "300–600 €", detail: { fr: "Burj Al Arab, Atlantis…", en: "Burj Al Arab, Atlantis…", es: "Burj Al Arab, Atlantis…" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Food court / shawarma", en: "Food court / shawarma", es: "Food court / shawarma" }, price: "5–10 €", detail: { fr: "Malls ou street food", en: "Malls or street food", es: "Centros comerciales o comida callejera" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media" }, price: "25–50 €", detail: { fr: "Sans alcool souvent", en: "Often alcohol-free", es: "A menudo sin alcohol" } },
          { label: { fr: "Restaurant gastronomique", en: "Fine dining", es: "Restaurante gastronómico" }, price: "100–300 €", detail: { fr: "Chefs étoilés mondiaux", en: "World-renowned starred chefs", es: "Chefs estrellados de fama mundial" } },
        ],
      },
      {
        id: "transport",
        icon: "🚇",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Métro Dubaï (trajet)", en: "Dubai Metro (ride)", es: "Metro de Dubái (trayecto)" }, price: "1–2 €", detail: { fr: "Réseau limité mais utile", en: "Limited but useful network", es: "Red limitada pero útil" } },
          { label: { fr: "Taxi (tarif de base)", en: "Taxi (base fare)", es: "Taxi (tarifa base)" }, price: "2 € + distance", detail: { fr: "Nombreux, A/C", en: "Plentiful, air-conditioned", es: "Numerosos, con aire acondicionado" } },
          { label: { fr: "Location voiture / jour", en: "Car rental / day", es: "Alquiler de coche / día" }, price: "30–60 €", detail: { fr: "Recommandé pour Abou Dabi", en: "Recommended for Abu Dhabi", es: "Recomendado para Abu Dabi" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Burj Khalifa (observation)", en: "Burj Khalifa (observation deck)", es: "Burj Khalifa (mirador)" }, price: "25–50 €", detail: { fr: "Réservation conseillée", en: "Booking recommended", es: "Se recomienda reservar" } },
          { label: { fr: "Safari désert (demi-journée)", en: "Desert safari (half day)", es: "Safari por el desierto (medio día)" }, price: "50–90 €", detail: { fr: "4×4, dîner bédouin inclus", en: "4x4, Bedouin dinner included", es: "4×4, cena beduina incluida" } },
          { label: "Ski Dubai", price: "60–80 €", detail: { fr: "Ski en intérieur, unique", en: "Unique indoor skiing", es: "Esquí en interior, único" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "80–120 €/j", desc: { fr: "Hostel + street food + transports en commun", en: "Hostel + street food + public transport", es: "Hostel + comida callejera + transporte público" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "200–350 €/j", desc: { fr: "Hôtel 4★ + restos mid-range + activités", en: "4★ hotel + mid-range restaurants + activities", es: "Hotel 4★ + restaurantes de gama media + actividades" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo" }, daily: "500 €+/j", desc: { fr: "Hôtel 5★ + gastronomie + expériences premium", en: "5★ hotel + fine dining + premium experiences", es: "Hotel 5★ + gastronomía + experiencias premium" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: { fr: "Dubaï (5j) → Abou Dabi (3j) → Safari désert (2j)", en: "Dubai (5d) → Abu Dhabi (3d) → Desert safari (2d)", es: "Dubái (5d) → Abu Dabi (3d) → Safari por el desierto (2d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "2 500 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dubaï", en: "Return flight Paris–Dubai", es: "Vuelo ida/vuelta Madrid–Dubái" }, amount: "300–500 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "600–900 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "400–600 €" },
            { label: { fr: "Transport local", en: "Local transport", es: "Transporte local" }, amount: "150–200 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dubaï", en: "Return flight Paris–Dubai", es: "Vuelo ida/vuelta Madrid–Dubái" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "800–1 200 €" },
            { label: { fr: "Transport & location", en: "Transport & rental", es: "Transporte y alquiler" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos" }, amount: "800–1 200 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo" },
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dubaï (Business)", en: "Return flight Paris–Dubai (Business)", es: "Vuelo ida/vuelta Madrid–Dubái (Business)" }, amount: "2 000–4 000 €" },
            { label: { fr: "Hébergement 5★ (10 nuits)", en: "5★ accommodation (10 nights)", es: "Alojamiento 5★ (10 noches)" }, amount: "4 000–7 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias" }, amount: "2 000–4 000 €" },
            { label: { fr: "Transport premium", en: "Premium transport", es: "Transporte premium" }, amount: "500–1 000 €" },
            { label: { fr: "Shopping & imprévus", en: "Shopping & contingency", es: "Compras e imprevistos" }, amount: "1 000 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~6h (Emirates, Air France, Transavia)", en: "~6h (Emirates, Air France, Transavia)", es: "~7h (Emirates, Air France, Transavia)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Sans visa pour les Français (90 jours) — depuis 2015", en: "No visa required for French citizens (90 days) — since 2015", es: "Sin visado para los españoles (90 días)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Dirham (1€ ≈ 3,90 AED)", en: "Dirham (1€ ≈ 3.90 AED)", es: "Dirham (1€ ≈ 3,90 AED)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Arabe (anglais très répandu)", en: "Arabic (English widely spoken)", es: "Árabe (el inglés está muy extendido)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe" }, value: { fr: "Type G – 220/240 V (adaptateur UK)", en: "Type G – 220/240 V (UK adapter)", es: "Tipo G – 220/240 V (adaptador UK)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red" }, value: { fr: "Couverture excellente, e-SIM disponible", en: "Excellent coverage, e-SIM available", es: "Cobertura excelente, e-SIM disponible" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non recommandée — eau en bouteille", en: "Not recommended — bottled water advised", es: "No recomendada — agua embotellada" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucun vaccin obligatoire, soins excellents", en: "No mandatory vaccines, excellent healthcare", es: "Ninguna vacuna obligatoria, atención sanitaria excelente" } },
  ],
};
