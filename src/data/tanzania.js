export const TANZANIA = {
  code: "TZA",
  numericId: 834,
  name: "Tanzanie",
  emoji: "🇹🇿",
  capital: "Dodoma",
  language: "Swahili, Anglais",
  currency: "Shilling tanzanien (TZS)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 200,
    tripMin: 3000, tripMid: 6000,
  },
  description:
    "La Tanzanie concentre les plus grands spectacles naturels d'Afrique : le Serengeti avec la Grande Migration, le Ngorongoro (caldeira la plus dense en faune au monde), le toit de l'Afrique Kilimandjaro, et les plages idylliques de Zanzibar. Un pays d'exception.",

  bestPeriods: [
    {
      months: "Juin – Octobre",
      label: "Saison sèche & Migration",
      color: "#22c55e",
      description:
        "Meilleure saison safari, Grande Migration dans le nord du Serengeti (juil.–oct.). Zanzibar au top de novembre à mars.",
      icon: "🦁",
    },
    {
      months: "Janvier – Mars",
      label: "Saison sèche courte & Zanzibar",
      color: "#fb923c",
      description:
        "Vêlage des gnous dans le Serengeti (janvier–février), Zanzibar ensoleillée, Kilimandjaro accessible.",
      icon: "🏝️",
    },
  ],

  weatherCities: [
    {
      id: "serengeti",
      name: "Serengeti",
      region: "Arusha / Mara",
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
      name: "Zanzibar",
      region: "Zanzibar",
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
      name: "Serengeti",
      region: "Arusha / Mara",
      description:
        "Le parc national du Serengeti est le royaume de la Grande Migration : 1,5 million de gnous, 400 000 zèbres en cercle permanent dans l'écosystème Mara-Serengeti. La biodiversité la plus spectaculaire au monde.",
      wikipedia: "Serengeti_National_Park",
      tags: ["Safari", "Grande Migration", "Big Five", "UNESCO"],
      mustSee: [
        { name: "Grande Migration des gnous", wikipedia: "File:Gnous Beauval.jpg" },
        { name: "Lions du Serengeti", wikipedia: "File:011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" },
        { name: "Montgolfière au lever du soleil", wikipedia: "File:Serengeti Balloon.jpg" },
        { name: "Guépard — le plus rapide du monde", wikipedia: "Cheetah" },
      ],
    },
    {
      id: 2,
      name: "Cratère du Ngorongoro",
      region: "Arusha",
      description:
        "La caldeira du Ngorongoro (260 km²) est la plus grande au monde et la plus dense en faune : lions, léopards, rhinocéros noirs, hyènes et flamants roses concentrés dans un amphithéâtre naturel spectaculaire.",
      wikipedia: "Ngorongoro_Conservation_Area",
      tags: ["Safari", "UNESCO", "Rhinocéros", "Caldeira"],
      mustSee: [
        { name: "Rhinocéros noir — espèce menacée", wikipedia: "Black_rhinoceros" },
        { name: "Flamants roses du Lac Magadi", wikipedia: "Flamingo" },
        { name: "Hippopotames du Ngorongoro", wikipedia: "Hippopotamus" },
        { name: "Olmoti & Empakaai (cratères secondaires)", wikipedia: "Ngorongoro_Conservation_Area" },
      ],
    },
    {
      id: 3,
      name: "Kilimandjaro",
      region: "Kilimanjaro",
      description:
        "Le Toit de l'Afrique (5 895 m) est l'ascension emblématique du continent, accessible sans équipement technique via les routes Marangu ou Lemosho (5–8 jours). Un défi accessible récompensé par une vue depuis les glaciers.",
      wikipedia: "Mount_Kilimanjaro",
      tags: ["Ascension", "Nature", "UNESCO", "Défi"],
      mustSee: [
        { name: "Sommet Uhuru Peak (5 895 m)", wikipedia: "Mount_Kilimanjaro" },
        { name: "Zone de brume (forêt tropicale)", wikipedia: "File:Kilimanjaro forest.jpg" },
        { name: "Glaciers du Kibo", wikipedia: "File:Kibo Mt. Kilimanjaro 6.JPG" },
        { name: "Parc national Kilimandjaro (UNESCO)", wikipedia: "Kilimanjaro_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Zanzibar",
      region: "Zanzibar",
      description:
        "L'archipel de Zanzibar, « l'île aux épices », est un paradis de sable blanc, lagons turquoise, récifs coralliens et Stone Town (UNESCO) — vieille ville swahilie-arabe aux ruelles envoûtantes et aux portes sculptées.",
      wikipedia: "File:Stone Town, Zanzibar (1).jpg",
      tags: ["Plage", "UNESCO", "Culture", "Épices"],
      mustSee: [
        { name: "Stone Town (UNESCO)", wikipedia: "Stone_Town" },
        { name: "Plage de Nungwi", wikipedia: "Nungwi" },
        { name: "Plage de Paje (côte est)", wikipedia: "File:Paje beach view.jpg" },
        { name: "Tour de l'île aux épices", wikipedia: "Zanzibar_Archipelago" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Tanzanie est plus chère que prévu en raison des droits d'entrée des parcs (parmi les plus chers d'Afrique) et des vols intérieurs indispensables. Le luxe est plus abordable que la réputation ne le laisse penser.",
    currency: "TZS",
    exchangeRate: "1€ ≈ 2 700 TZS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse Zanzibar", price: "25–60 €", detail: "Avec vue mer" },
          { label: "Lodge safari mid-range", price: "150–300 €", detail: "Repas et game drive inclus" },
          { label: "Luxury tented camp", price: "500–1 500 €", detail: "Au cœur du Serengeti" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Street food Zanzibar (Forodhani)", price: "3–6 €", detail: "Fruits de mer grillés, pilau" },
          { label: "Restaurant Zanzibar", price: "10–20 €", detail: "Poisson swahili, biryani" },
          { label: "Dîner lodge safari (inclus)", price: "40–60 €", detail: "Repas sous les étoiles" },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: "Transport",
        items: [
          { label: "Vol Arusha–Serengeti (45 min)", price: "200–350 €", detail: "Indispensable, gain de temps" },
          { label: "Ferry Dar–Zanzibar (2h)", price: "35–50 €", detail: "Zanzibar Speed Boat ou Azam Marine" },
          { label: "Safari 4x4 avec guide (journée)", price: "100–200 €", detail: "Obligatoire dans les parcs" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Droit Serengeti/jour", price: "60–80 €/j", detail: "Adulte non-résident" },
          { label: "Droit Ngorongoro/jour", price: "60 €/j", detail: "En sus du lodge" },
          { label: "Ascension Kilimandjaro (7j tout compris)", price: "1 500–2 500 €", detail: "Guide + porteurs + équipement" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–130 €/j", desc: "Budget uniquement possible à Zanzibar/Dar — parcs exigent plus", color: "#22c55e" },
      { type: "Confort", daily: "200–350 €/j", desc: "Lodges mid-range + safaris guidés + Zanzibar", color: "#3b82f6" },
      { type: "Luxe", daily: "600 €+/j", desc: "Tented camps exclusifs + vols privés + spa", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Arusha (1j) → Ngorongoro (2j) → Serengeti (4j) → Arusha (1j) → Zanzibar (6j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Arusha ou Dar", amount: "600–900 €" },
            { label: "Safari budget (7j)", amount: "800–1 200 €" },
            { label: "Zanzibar guesthouse (6 nuits)", amount: "200–350 €" },
            { label: "Droits d'entrée parcs", amount: "400–600 €" },
            { label: "Nourriture & transports", amount: "400–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "6 000 – 9 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Kilimanjaro", amount: "700–1 000 €" },
            { label: "Lodges mid-range (14 nuits)", amount: "2 500–4 000 €" },
            { label: "Vols intérieurs Arusha–Serengeti", amount: "600–1 000 €" },
            { label: "Droits d'entrée parcs", amount: "500–800 €" },
            { label: "Extras & Zanzibar", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Kilimanjaro (Business)", amount: "3 500–6 000 €" },
            { label: "Tented camps exclusifs (14 nuits)", amount: "7 000–15 000 €" },
            { label: "Vols charter privés", amount: "2 000–4 000 €" },
            { label: "Extras & Zanzibar luxe", amount: "1 000–3 000 €" },
            { label: "Kilimandjaro ou expériences", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~9h (Kenya Airways via Nairobi, KLM via Amsterdam)" },
    { icon: "🪪", label: "Visa",              value: "eVisa en ligne (~50$, 90 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Shilling (1€ ≈ 2 700 TZS) — dollars acceptés dans les lodges" },
    { icon: "🗣️", label: "Langue",            value: "Swahili + anglais" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 230 V (comme UK)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture villes, faible dans les parcs — SIM Vodacom" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen OBLIGATOIRE + fièvre jaune recommandée" },
  ],
};
