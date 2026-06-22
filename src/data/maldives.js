export const MALDIVES = {
  code: "MDV",
  numericId: 462,
  name: "Maldives",
  emoji: "🇲🇻",
  capital: "Malé",
  language: "Maldivien (dhivehi)",
  currency: "Rufiyaa (MVR)",
  timezone: "UTC+5",
  filter: {
    budgetMin: 100, budgetMid: 160,
    tripMin: 2500, tripMid: 5000,
  },
  description:
    "Les Maldives sont la quintessence du paradis tropical : 1 200 îles coralliennes aux lagons turquoise, sable blanc immaculé et biodiversité marine exceptionnelle. Destination emblématique des bungalows sur pilotis et de la plongée avec requins-baleines et raies manta.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Ciel bleu, mer calme, visibilité parfaite pour la plongée (30–40 m). Idéal pour les atolls du Nord.",
      icon: "🏝️",
    },
    {
      months: "Mai – Octobre",
      label: "Mousson douce",
      color: "#3b82f6",
      description:
        "Pluies passagères mais mers plus vertes, plancton bioluminescent, raies mantas et requins-baleines plus nombreux dans le Sud.",
      icon: "🦈",
    },
  ],

  weatherCities: [
    {
      id: "male",
      name: "Malé",
      region: "Atoll Nord Malé",
      data: [
        { month: "Jan", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 55,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 29, rain: 265, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 240, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 195, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 175, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 185, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 220, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 225, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 170, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Atoll Nord Malé",
      region: "Kaafu",
      description:
        "Le plus accessible depuis l'aéroport international, avec des resorts iconiques sur pilotis, la plongée à Banana Reef (premier site de plongée des Maldives) et les excursions de dauphin.",
      wikipedia: "File:Kaafu Atoll, Maldives - panoramio (9).jpg",
      tags: ["Plongée", "Luxe", "Plage"],
      mustSee: [
        { name: "Bungalows sur pilotis", wikipedia: "File:1 Maldives, Indian Ocean, Asia.jpg" },
        { name: "Banana Reef (plongée)", wikipedia: "File:Funadhoo.jpg" },
        { name: "Malé — capitale colorée", wikipedia: "File:Male-total.jpg" },
      ],
    },
    {
      id: 2,
      name: "Atoll d'Ari",
      region: "Alif Alif & Alif Dhaal",
      description:
        "Paradis des plongeurs avec les requins-baleines présents toute l'année, les raies manta dans les passes et des murs coralliaux à couper le souffle.",
      wikipedia: "Ari_Atoll",
      tags: ["Plongée", "Faune marine", "Nature"],
      mustSee: [
        { name: "Plongée avec requins-baleines", wikipedia: "Whale_shark" },
        { name: "Nage avec raies mantas", wikipedia: "File:Manta birostris-Thailand3.jpg" },
        { name: "Récif corallien de Kuramathi", wikipedia: "Ari_Atoll" },
      ],
    },
    {
      id: 3,
      name: "Atoll de Baa — Réserve UNESCO",
      region: "Baa",
      description:
        "Réserve de biosphère UNESCO, l'atoll de Baa abrite le lagon de Hanifaru Bay, où des centaines de raies manta se rassemblent chaque saison pour se nourrir.",
      wikipedia: "File:Baa atoll islands.JPG",
      tags: ["UNESCO", "Faune marine", "Plongée"],
      mustSee: [
        { name: "Hanifaru Bay — banquet de raies manta", wikipedia: "File:Manta birostris-Thailand3.jpg" },
        { name: "Snorkeling — récifs de Baa", wikipedia: "File:Baa Atoll (Voavah).JPG" },
        { name: "Fuvahmulah — requins tigres", wikipedia: "File:Dharavandhoo_Thila_-_Hanifaru_Bay_Sharks.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Les Maldives sont une destination principalement de luxe. Les resorts sur îles privées pratiquent des tarifs parmi les plus élevés du monde. Une alternative plus économique existe via les guesthouses des îles locales.",
    currency: "MVR",
    exchangeRate: "1€ ≈ 17,00 MVR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse île locale", price: "60–120 €", detail: "Maafushi, Rasdhoo — plus authentique" },
          { label: "Resort 4★", price: "250–500 €", detail: "All-inclusive recommandé" },
          { label: "Bungalow sur pilotis 5★", price: "800–3 000 €", detail: "One&Only, Soneva, Six Senses…" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Mas huni (petit-déj local)", price: "3–5 €", detail: "Thon râpé et noix de coco" },
          { label: "Restaurant île locale", price: "10–20 €", detail: "Curry de poisson et riz" },
          { label: "Dîner resort (all-inclusive inclus)", price: "80–200 €", detail: "Si non AI" },
        ],
      },
      {
        id: "transport",
        icon: "🚤",
        label: "Transport",
        items: [
          { label: "Speed boat inter-îles", price: "10–30 €", detail: "Navette partagée depuis Malé" },
          { label: "Hydravion vers resort (20 min)", price: "300–600 €", detail: "Aller simple en hydravion" },
          { label: "Dhoni (bateau local)", price: "5–15 €", detail: "Transfers courts entre îles proches" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Excursion plongée (2 plongées)", price: "60–100 €", detail: "Équipement inclus" },
          { label: "Snorkeling guidé + nourrissage raies", price: "30–60 €", detail: "Demi-journée" },
          { label: "Excursion dauphin au coucher du soleil", price: "40–70 €", detail: "Dhoni au crépuscule" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "100–150 €/j", desc: "Guesthouses îles locales + restaurants locaux", color: "#22c55e" },
      { type: "Confort", daily: "300–500 €/j", desc: "Resort all-inclusive 4★ avec activités", color: "#3b82f6" },
      { type: "Luxe", daily: "1 000 €+/j", desc: "Bungalow sur pilotis 5★ + expériences exclusives", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Malé (1j) → Atoll Nord Malé (4j) → Atoll d'Ari (3j) → Malé (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Malé", amount: "600–900 €" },
            { label: "Guesthouses (10 nuits)", amount: "700–1 100 €" },
            { label: "Nourriture", amount: "500–700 €" },
            { label: "Speed boats & transports", amount: "300–500 €" },
            { label: "Plongée & activités", amount: "400–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "5 000 – 7 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Malé", amount: "700–1 000 €" },
            { label: "Resort all-inclusive (10 nuits)", amount: "2 500–4 000 €" },
            { label: "Hydravion", amount: "600–1 000 €" },
            { label: "Excursions premium", amount: "500–800 €" },
            { label: "Extras & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Malé (Business)", amount: "3 000–6 000 €" },
            { label: "Bungalow sur pilotis 5★ (10 nuits)", amount: "8 000–20 000 €" },
            { label: "Hydravion privé", amount: "2 000–4 000 €" },
            { label: "Expériences exclusives", amount: "1 000–3 000 €" },
            { label: "Extras & spa", amount: "1 000 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~10h (Emirates via Dubaï, Qatar Airways)" },
    { icon: "🪪", label: "Visa",              value: "Gratuit à l'arrivée (30 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Rufiyaa ($ acceptés dans les resorts)" },
    { icon: "🗣️", label: "Langue",            value: "Dhivehi (anglais dans tout le tourisme)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 230 V (comme UK)" },
    { icon: "📱", label: "Réseau",            value: "Couverture dans les resorts, wifi inclus" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau dessalinisée en bouteille" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, médecin dans les grands resorts" },
  ],
};
