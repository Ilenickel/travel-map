export const TANZANIA = {
  code: "TZA",
  numericId: 834,
  name: { fr: "Tanzanie", en: "Tanzania" },
  emoji: "🇹🇿",
  capital: { fr: "Dodoma", en: "Dodoma" },
  language: { fr: "Swahili, Anglais", en: "Swahili, English" },
  currency: { fr: "Shilling tanzanien (TZS)", en: "Tanzanian Shilling (TZS)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 200,
    tripMin: 3000, tripMid: 6000,
  },
  description: {
    fr: "La Tanzanie concentre les plus grands spectacles naturels d'Afrique : le Serengeti avec la Grande Migration, le Ngorongoro (caldeira la plus dense en faune au monde), le toit de l'Afrique Kilimandjaro, et les plages idylliques de Zanzibar. Un pays d'exception.",
    en: "Tanzania is home to Africa's greatest natural spectacles: the Serengeti with the Great Migration, Ngorongoro (the caldera with the highest concentration of wildlife on Earth), the Roof of Africa Kilimanjaro, and Zanzibar's idyllic beaches. An exceptional country.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Octobre", en: "June – October" },
      label: { fr: "Saison sèche & Migration", en: "Dry season & Migration" },
      color: "#22c55e",
      description: {
        fr: "Meilleure saison safari, Grande Migration dans le nord du Serengeti (juil.–oct.). Zanzibar au top de novembre à mars.",
        en: "Best safari season, Great Migration in the northern Serengeti (Jul.–Oct.). Zanzibar at its best from November to March.",
      },
      icon: "🦁",
    },
    {
      months: { fr: "Janvier – Mars", en: "January – March" },
      label: { fr: "Saison sèche courte & Zanzibar", en: "Short dry season & Zanzibar" },
      color: "#fb923c",
      description: {
        fr: "Vêlage des gnous dans le Serengeti (janvier–février), Zanzibar ensoleillée, Kilimandjaro accessible.",
        en: "Wildebeest calving in the Serengeti (January–February), sunny Zanzibar, Kilimanjaro accessible.",
      },
      icon: "🏝️",
    },
  ],

  weatherCities: [
    {
      id: "serengeti",
      name: { fr: "Serengeti", en: "Serengeti" },
      region: { fr: "Arusha / Mara", en: "Arusha / Mara" },
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
      name: { fr: "Zanzibar", en: "Zanzibar" },
      region: { fr: "Zanzibar", en: "Zanzibar" },
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
      name: { fr: "Serengeti", en: "Serengeti" },
      region: { fr: "Arusha / Mara", en: "Arusha / Mara" },
      description: {
        fr: "Le parc national du Serengeti est le royaume de la Grande Migration : 1,5 million de gnous, 400 000 zèbres en cercle permanent dans l'écosystème Mara-Serengeti. La biodiversité la plus spectaculaire au monde.",
        en: "Serengeti National Park is the kingdom of the Great Migration: 1.5 million wildebeest, 400,000 zebras in a permanent circuit within the Mara-Serengeti ecosystem. The most spectacular biodiversity on Earth.",
      },
      wikipedia: "Serengeti_National_Park",
      tags: ["Safari", "Grande Migration", "Big Five", "UNESCO"],
      mustSee: [
        { name: { fr: "Grande Migration des gnous", en: "Great Wildebeest Migration" }, wikipedia: "File:Gnous Beauval.jpg" },
        { name: { fr: "Lions du Serengeti", en: "Serengeti lions" }, wikipedia: "File:011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" },
        { name: { fr: "Montgolfière au lever du soleil", en: "Hot-air balloon at sunrise" }, wikipedia: "File:Serengeti Balloon.jpg" },
        { name: { fr: "Guépard — le plus rapide du monde", en: "Cheetah — the fastest animal in the world" }, wikipedia: "Cheetah" },
      ],
    },
    {
      id: 2,
      name: { fr: "Cratère du Ngorongoro", en: "Ngorongoro Crater" },
      region: { fr: "Arusha", en: "Arusha" },
      description: {
        fr: "La caldeira du Ngorongoro (260 km²) est la plus grande au monde et la plus dense en faune : lions, léopards, rhinocéros noirs, hyènes et flamants roses concentrés dans un amphithéâtre naturel spectaculaire.",
        en: "The Ngorongoro caldera (260 km²) is the largest in the world and the densest in wildlife: lions, leopards, black rhinos, hyenas and flamingos concentrated in a spectacular natural amphitheatre.",
      },
      wikipedia: "Ngorongoro_Conservation_Area",
      tags: ["Safari", "UNESCO", "Rhinocéros", "Caldeira"],
      mustSee: [
        { name: { fr: "Rhinocéros noir — espèce menacée", en: "Black rhinoceros — endangered species" }, wikipedia: "Black_rhinoceros" },
        { name: { fr: "Flamants roses du Lac Magadi", en: "Flamingos of Lake Magadi" }, wikipedia: "Flamingo" },
        { name: { fr: "Hippopotames du Ngorongoro", en: "Ngorongoro hippos" }, wikipedia: "Hippopotamus" },
        { name: { fr: "Olmoti & Empakaai (cratères secondaires)", en: "Olmoti & Empakaai (secondary craters)" }, wikipedia: "Ngorongoro_Conservation_Area" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kilimandjaro", en: "Kilimanjaro" },
      region: { fr: "Kilimanjaro", en: "Kilimanjaro" },
      description: {
        fr: "Le Toit de l'Afrique (5 895 m) est l'ascension emblématique du continent, accessible sans équipement technique via les routes Marangu ou Lemosho (5–8 jours). Un défi accessible récompensé par une vue depuis les glaciers.",
        en: "The Roof of Africa (5,895 m) is the continent's iconic climb, accessible without technical equipment via the Marangu or Lemosho routes (5–8 days). An achievable challenge rewarded with a view from the glaciers.",
      },
      wikipedia: "Mount_Kilimanjaro",
      tags: ["Ascension", "Nature", "UNESCO", "Défi", "Randonnée"],
      mustSee: [
        { name: { fr: "Sommet Uhuru Peak (5 895 m)", en: "Uhuru Peak summit (5,895 m)" }, wikipedia: "Mount_Kilimanjaro" },
        { name: { fr: "Zone de brume (forêt tropicale)", en: "Cloud forest zone (rainforest)" }, wikipedia: "File:Kilimanjaro forest.jpg" },
        { name: { fr: "Glaciers du Kibo", en: "Kibo glaciers" }, wikipedia: "File:Kibo Mt. Kilimanjaro 6.JPG" },
        { name: { fr: "Parc national Kilimandjaro (UNESCO)", en: "Kilimanjaro National Park (UNESCO)" }, wikipedia: "Kilimanjaro_National_Park" },
      ],
    },
    {
      id: 4,
      name: { fr: "Zanzibar", en: "Zanzibar" },
      region: { fr: "Zanzibar", en: "Zanzibar" },
      description: {
        fr: "L'archipel de Zanzibar, « l'île aux épices », est un paradis de sable blanc, lagons turquoise, récifs coralliens et Stone Town (UNESCO) — vieille ville swahilie-arabe aux ruelles envoûtantes et aux portes sculptées.",
        en: "The Zanzibar archipelago, the \"Spice Island\", is a paradise of white sand, turquoise lagoons, coral reefs and Stone Town (UNESCO) — an old Swahili-Arab town with enchanting lanes and carved doors.",
      },
      wikipedia: "File:Stone Town, Zanzibar (1).jpg",
      tags: ["Plage", "UNESCO", "Culture", "Épices", "Histoire", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Stone Town (UNESCO)", en: "Stone Town (UNESCO)" }, wikipedia: "Stone_Town" },
        { name: { fr: "Plage de Nungwi", en: "Nungwi Beach" }, wikipedia: "Nungwi" },
        { name: { fr: "Plage de Paje (côte est)", en: "Paje Beach (east coast)" }, wikipedia: "File:Paje beach view.jpg" },
        { name: { fr: "Tour de l'île aux épices", en: "Spice island tour" }, wikipedia: "Zanzibar_Archipelago" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Tanzanie est plus chère que prévu en raison des droits d'entrée des parcs (parmi les plus chers d'Afrique) et des vols intérieurs indispensables. Le luxe est plus abordable que la réputation ne le laisse penser.",
      en: "Tanzania is pricier than expected due to park entry fees (among the most expensive in Africa) and essential domestic flights. Luxury is more affordable than its reputation suggests.",
    },
    currency: "TZS",
    exchangeRate: "1€ ≈ 2 700 TZS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse Zanzibar", en: "Zanzibar guesthouse" }, price: "25–60 €", detail: { fr: "Avec vue mer", en: "Sea view" } },
          { label: { fr: "Lodge safari mid-range", en: "Mid-range safari lodge" }, price: "150–300 €", detail: { fr: "Repas et game drive inclus", en: "Meals and game drive included" } },
          { label: { fr: "Luxury tented camp", en: "Luxury tented camp" }, price: "500–1 500 €", detail: { fr: "Au cœur du Serengeti", en: "In the heart of the Serengeti" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Street food Zanzibar (Forodhani)", en: "Zanzibar street food (Forodhani)" }, price: "3–6 €", detail: { fr: "Fruits de mer grillés, pilau", en: "Grilled seafood, pilau" } },
          { label: { fr: "Restaurant Zanzibar", en: "Zanzibar restaurant" }, price: "10–20 €", detail: { fr: "Poisson swahili, biryani", en: "Swahili fish, biryani" } },
          { label: { fr: "Dîner lodge safari (inclus)", en: "Safari lodge dinner (included)" }, price: "40–60 €", detail: { fr: "Repas sous les étoiles", en: "Dining under the stars" } },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol Arusha–Serengeti (45 min)", en: "Arusha–Serengeti flight (45 min)" }, price: "200–350 €", detail: { fr: "Indispensable, gain de temps", en: "Essential, saves time" } },
          { label: { fr: "Ferry Dar–Zanzibar (2h)", en: "Dar–Zanzibar ferry (2h)" }, price: "35–50 €", detail: { fr: "Zanzibar Speed Boat ou Azam Marine", en: "Zanzibar Speed Boat or Azam Marine" } },
          { label: { fr: "Safari 4x4 avec guide (journée)", en: "4x4 safari with guide (day)" }, price: "100–200 €", detail: { fr: "Obligatoire dans les parcs", en: "Mandatory inside the parks" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Droit Serengeti/jour", en: "Serengeti fee/day" }, price: "60–80 €/j", detail: { fr: "Adulte non-résident", en: "Non-resident adult" } },
          { label: { fr: "Droit Ngorongoro/jour", en: "Ngorongoro fee/day" }, price: "60 €/j", detail: { fr: "En sus du lodge", en: "On top of the lodge" } },
          { label: { fr: "Ascension Kilimandjaro (7j tout compris)", en: "Kilimanjaro climb (7 days all-inclusive)" }, price: "1 500–2 500 €", detail: { fr: "Guide + porteurs + équipement", en: "Guide + porters + equipment" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "80–130 €/j", desc: { fr: "Budget uniquement possible à Zanzibar/Dar — parcs exigent plus", en: "Budget only feasible in Zanzibar/Dar — parks require more" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "200–350 €/j", desc: { fr: "Lodges mid-range + safaris guidés + Zanzibar", en: "Mid-range lodges + guided safaris + Zanzibar" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "600 €+/j", desc: { fr: "Tented camps exclusifs + vols privés + spa", en: "Exclusive tented camps + private flights + spa" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Arusha (1j) → Ngorongoro (2j) → Serengeti (4j) → Arusha (1j) → Zanzibar (6j)",
        en: "Arusha (1d) → Ngorongoro (2d) → Serengeti (4d) → Arusha (1d) → Zanzibar (6d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "3 000 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Arusha ou Dar", en: "Return flight Paris–Arusha or Dar" }, amount: "600–900 €" },
            { label: { fr: "Safari budget (7j)", en: "Budget safari (7d)" }, amount: "800–1 200 €" },
            { label: { fr: "Zanzibar guesthouse (6 nuits)", en: "Zanzibar guesthouse (6 nights)" }, amount: "200–350 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entry fees" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & transports", en: "Food & transport" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "6 000 – 9 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kilimanjaro", en: "Return flight Paris–Kilimanjaro" }, amount: "700–1 000 €" },
            { label: { fr: "Lodges mid-range (14 nuits)", en: "Mid-range lodges (14 nights)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Vols intérieurs Arusha–Serengeti", en: "Domestic flights Arusha–Serengeti" }, amount: "600–1 000 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entry fees" }, amount: "500–800 €" },
            { label: { fr: "Extras & Zanzibar", en: "Extras & Zanzibar" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kilimanjaro (Business)", en: "Return flight Paris–Kilimanjaro (Business)" }, amount: "3 500–6 000 €" },
            { label: { fr: "Tented camps exclusifs (14 nuits)", en: "Exclusive tented camps (14 nights)" }, amount: "7 000–15 000 €" },
            { label: { fr: "Vols charter privés", en: "Private charter flights" }, amount: "2 000–4 000 €" },
            { label: { fr: "Extras & Zanzibar luxe", en: "Extras & luxury Zanzibar" }, amount: "1 000–3 000 €" },
            { label: { fr: "Kilimandjaro ou expériences", en: "Kilimanjaro or experiences" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~9h (Kenya Airways via Nairobi, KLM via Amsterdam)", en: "~9h (Kenya Airways via Nairobi, KLM via Amsterdam)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "eVisa en ligne (~50$, 90 jours)", en: "Online eVisa (~$50, 90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Shilling (1€ ≈ 2 700 TZS) — dollars acceptés dans les lodges", en: "Shilling (1€ ≈ 2,700 TZS) — dollars accepted in lodges" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Swahili + anglais", en: "Swahili + English" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 230 V (comme UK)", en: "Type G – 230 V (like the UK)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture villes, faible dans les parcs — SIM Vodacom", en: "Good coverage in cities, weak in parks — Vodacom SIM" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water advised" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune recommandée", en: "Malaria prophylaxis MANDATORY + yellow fever recommended" } },
  ],
};
