export const UAE = {
  code: "ARE",
  numericId: 784,
  name: { fr: "Émirats Arabes Unis", en: "United Arab Emirates" },
  emoji: "🇦🇪",
  capital: { fr: "Abou Dabi", en: "Abu Dhabi" },
  language: { fr: "Arabe", en: "Arabic" },
  currency: { fr: "Dirham (AED)", en: "Dirham (AED)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 200,
    tripMin: 2500, tripMid: 5000,
  },
  description: {
    fr: "Les Émirats Arabes Unis incarnent le luxe et la modernité au cœur du désert. Entre les gratte-ciels de Dubaï, la grande mosquée d'Abou Dabi, les dunes dorées du désert et les souks parfumés d'épices, les EAU offrent un contraste fascinant entre tradition et futurisme.",
    en: "The United Arab Emirates embody luxury and modernity in the heart of the desert. Between Dubai's skyscrapers, Abu Dhabi's grand mosque, the golden desert dunes and spice-scented souks, the UAE offers a fascinating contrast between tradition and futurism.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March" },
      label: { fr: "Saison fraîche", en: "Cool season" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (20–28 °C), ciel bleu, parfait pour visiter Dubaï, Abou Dabi et faire du désert.",
        en: "Ideal temperatures (20–28 °C), blue skies, perfect for visiting Dubai, Abu Dhabi and the desert.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November" },
      label: { fr: "Transition douce", en: "Mild transition" },
      color: "#f59e0b",
      description: {
        fr: "Températures encore agréables (28–32 °C), foules moins importantes, tarifs plus bas.",
        en: "Still pleasant temperatures (28–32 °C), smaller crowds, lower prices.",
      },
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "dubai",
      name: { fr: "Dubaï", en: "Dubai" },
      region: { fr: "Dubai", en: "Dubai" },
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
      name: { fr: "Dubaï", en: "Dubai" },
      region: { fr: "Émirat de Dubaï", en: "Emirate of Dubai" },
      description: {
        fr: "Métropole ultra-moderne avec la plus haute tour du monde, des centres commerciaux gigantesques, un ski en intérieur et le luxe accessible à tous les budgets.",
        en: "An ultra-modern metropolis with the world's tallest tower, gigantic shopping malls, indoor skiing and luxury accessible to every budget.",
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
      name: { fr: "Abou Dabi", en: "Abu Dhabi" },
      region: { fr: "Émirat d'Abou Dabi", en: "Emirate of Abu Dhabi" },
      description: {
        fr: "Capitale fédérale plus tranquille que Dubaï, avec la majestueuse Grande Mosquée Sheikh Zayed, le Louvre Abu Dhabi et les circuits de F1 de Yas Island.",
        en: "A federal capital quieter than Dubai, with the majestic Sheikh Zayed Grand Mosque, the Louvre Abu Dhabi and the F1 circuit on Yas Island.",
      },
      wikipedia: "Abu_Dhabi",
      tags: ["Culture", "Architecture", "Art", "Luxe", "Gastronomie"],
      mustSee: [
        { name: { fr: "Grande Mosquée Sheikh Zayed", en: "Sheikh Zayed Grand Mosque" }, wikipedia: "Sheikh_Zayed_Grand_Mosque" },
        { name: "Louvre Abu Dhabi", wikipedia: "Louvre_Abu_Dhabi" },
        { name: "Yas Island", wikipedia: "Yas_Island" },
      ],
    },
    {
      id: 3,
      name: { fr: "Désert & Safaris", en: "Desert & Safaris" },
      region: { fr: "Intérieur", en: "Interior" },
      description: {
        fr: "Les dunes de Liwa et Al Awir offrent des safaris 4×4 inoubliables, du sandboarding et des nuits sous les étoiles dans des camps de luxe.",
        en: "The dunes of Liwa and Al Awir offer unforgettable 4x4 safaris, sandboarding and nights under the stars in luxury camps.",
      },
      wikipedia: "Rub'_al_Khali",
      tags: ["Nature", "Aventure", "Désert", "Safari"],
      mustSee: [
        { name: { fr: "Oasis de Liwa", en: "Liwa Oasis" }, wikipedia: "Liwa_Oasis" },
        { name: { fr: "Dunes de l'Empty Quarter", en: "Empty Quarter dunes" }, wikipedia: "Rub'_al_Khali" },
        { name: "Hatta Mountain Reserve", wikipedia: "File:Hatta Mountain Reserve Picture 04.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Les EAU sont une destination premium. Dubaï offre cependant toutes les gammes de prix, des food courts abordables aux restaurants gastronomiques d'exception.",
      en: "The UAE is a premium destination. Dubai nonetheless offers every price range, from affordable food courts to exceptional fine dining.",
    },
    currency: "AED",
    exchangeRate: "1€ ≈ 3,90 AED",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hôtel 3★ budget", en: "Budget 3★ hotel" }, price: "60–90 €", detail: { fr: "Zones éloignées du centre", en: "Areas away from the centre" } },
          { label: { fr: "Hôtel 4★ confort", en: "Comfortable 4★ hotel" }, price: "120–200 €", detail: { fr: "Marina, DIFC, Downtown", en: "Marina, DIFC, Downtown" } },
          { label: { fr: "Hôtel 5★ luxe", en: "Luxury 5★ hotel" }, price: "300–600 €", detail: { fr: "Burj Al Arab, Atlantis…", en: "Burj Al Arab, Atlantis…" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Food court / shawarma", en: "Food court / shawarma" }, price: "5–10 €", detail: { fr: "Malls ou street food", en: "Malls or street food" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" }, price: "25–50 €", detail: { fr: "Sans alcool souvent", en: "Often alcohol-free" } },
          { label: { fr: "Restaurant gastronomique", en: "Fine dining" }, price: "100–300 €", detail: { fr: "Chefs étoilés mondiaux", en: "World-renowned starred chefs" } },
        ],
      },
      {
        id: "transport",
        icon: "🚇",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Métro Dubaï (trajet)", en: "Dubai Metro (ride)" }, price: "1–2 €", detail: { fr: "Réseau limité mais utile", en: "Limited but useful network" } },
          { label: { fr: "Taxi (tarif de base)", en: "Taxi (base fare)" }, price: "2 € + distance", detail: { fr: "Nombreux, A/C", en: "Plentiful, air-conditioned" } },
          { label: { fr: "Location voiture / jour", en: "Car rental / day" }, price: "30–60 €", detail: { fr: "Recommandé pour Abou Dabi", en: "Recommended for Abu Dhabi" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Burj Khalifa (observation)", en: "Burj Khalifa (observation deck)" }, price: "25–50 €", detail: { fr: "Réservation conseillée", en: "Booking recommended" } },
          { label: { fr: "Safari désert (demi-journée)", en: "Desert safari (half day)" }, price: "50–90 €", detail: { fr: "4×4, dîner bédouin inclus", en: "4x4, Bedouin dinner included" } },
          { label: "Ski Dubai", price: "60–80 €", detail: { fr: "Ski en intérieur, unique", en: "Unique indoor skiing" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Hostel + street food + transports en commun", en: "Hostel + street food + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "200–350 €/j", desc: { fr: "Hôtel 4★ + restos mid-range + activités", en: "4★ hotel + mid-range restaurants + activities" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "500 €+/j", desc: { fr: "Hôtel 5★ + gastronomie + expériences premium", en: "5★ hotel + fine dining + premium experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Dubaï (5j) → Abou Dabi (3j) → Safari désert (2j)", en: "Dubai (5d) → Abu Dhabi (3d) → Desert safari (2d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 500 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dubaï", en: "Return flight Paris–Dubai" }, amount: "300–500 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "600–900 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transport local", en: "Local transport" }, amount: "150–200 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dubaï", en: "Return flight Paris–Dubai" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "800–1 200 €" },
            { label: { fr: "Transport & location", en: "Transport & rental" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "800–1 200 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dubaï (Business)", en: "Return flight Paris–Dubai (Business)" }, amount: "2 000–4 000 €" },
            { label: { fr: "Hébergement 5★ (10 nuits)", en: "5★ accommodation (10 nights)" }, amount: "4 000–7 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "2 000–4 000 €" },
            { label: { fr: "Transport premium", en: "Premium transport" }, amount: "500–1 000 €" },
            { label: { fr: "Shopping & imprévus", en: "Shopping & contingency" }, amount: "1 000 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h (Emirates, Air France, Transavia)", en: "~6h (Emirates, Air France, Transavia)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours) — depuis 2015", en: "No visa required for French citizens (90 days) — since 2015" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dirham (1€ ≈ 3,90 AED)", en: "Dirham (1€ ≈ 3.90 AED)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arabe (anglais très répandu)", en: "Arabic (English widely spoken)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 220/240 V (adaptateur UK)", en: "Type G – 220/240 V (UK adapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture excellente, e-SIM disponible", en: "Excellent coverage, e-SIM available" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non recommandée — eau en bouteille", en: "Not recommended — bottled water advised" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire, soins excellents", en: "No mandatory vaccines, excellent healthcare" } },
  ],
};
