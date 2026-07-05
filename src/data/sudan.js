export const SUDAN = {
  code: "SDN",
  numericId: 729,
  name: { fr: "Soudan", en: "Sudan" },
  emoji: "🇸🇩",
  capital: { fr: "Khartoum", en: "Khartoum" },
  language: { fr: "Arabe, Anglais", en: "Arabic, English" },
  currency: { fr: "Livre soudanaise (SDG)", en: "Sudanese pound (SDG)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 850, tripMid: 1800,
  },
  description: {
    fr: "Le Soudan possédait l'une des destinations archéologiques les plus extraordinaires du monde : les pyramides nubiennes de Méroé (plus nombreuses qu'en Égypte), les temples de Jebel Barkal et la culture nubienne millénaire. Depuis avril 2023, le pays est plongé dans une guerre civile dévastatrice qui rend tout voyage impossible et constitue l'une des pires crises humanitaires mondiales.",
    en: "Sudan was home to one of the most extraordinary archaeological destinations in the world: the Nubian pyramids of Meroë (more numerous than in Egypt), the temples of Jebel Barkal and a millennia-old Nubian culture. Since April 2023, the country has been plunged into a devastating civil war that makes travel impossible and constitutes one of the world's worst humanitarian crises.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison fraîche (pré-conflit)", en: "Cool season (pre-conflict)" },
      color: "#22c55e",
      description: {
        fr: "Avant le conflit, la seule période vraiment praticable : températures entre 18–32°C, sec, idéal pour les sites archéologiques. Les nuits dans le désert nubien étaient froides et étoilées.",
        en: "Before the conflict, the only truly practical period: temperatures between 18–32°C, dry, ideal for archaeological sites. Nights in the Nubian desert were cold and starlit.",
      },
      icon: "🏛️",
    },
    {
      months: { fr: "Mars – Octobre", en: "March – October" },
      label: { fr: "Chaleur extrême / pluies (sud)", en: "Extreme heat / rain (south)" },
      color: "#ef4444",
      description: {
        fr: "Températures dépassant 40–47°C à Khartoum. Saison des pluies de juillet à septembre dans le Sahel. Conditions difficiles même en temps de paix.",
        en: "Temperatures exceeding 40–47°C in Khartoum. Rainy season from July to September in the Sahel. Difficult conditions even in peacetime.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "khartoum",
      name: "Khartoum",
      region: { fr: "Capitale (désert)", en: "Capital (desert)" },
      data: [
        { month: "Jan", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Avr", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Mai", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 10, icon: "🌡️" },
        { month: "Jul", temp: 34, rain: 25, icon: "🌡️" },
        { month: "Aoû", temp: 32, rain: 40, icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Oct", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Déc", temp: 19, rain: 0,  icon: "☀️" },
      ],
    },
    {
      id: "kassala",
      name: "Kassala",
      region: { fr: "Collines de la Mer Rouge (est)", en: "Red Sea Hills (east)" },
      data: [
        { month: "Jan", temp: 18, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 21, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 2,  icon: "☀️" },
        { month: "Avr", temp: 30, rain: 5,  icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 10, icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 20, icon: "🌡️" },
        { month: "Jul", temp: 31, rain: 60, icon: "🌡️" },
        { month: "Aoû", temp: 29, rain: 80, icon: "⛅" },
        { month: "Sep", temp: 30, rain: 50, icon: "🌡️" },
        { month: "Oct", temp: 29, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 23, rain: 2,  icon: "☀️" },
        { month: "Déc", temp: 18, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Pyramides de Méroé", en: "Pyramids of Meroë" },
      region: { fr: "État du Nil (nord)", en: "River Nile State (north)" },
      description: {
        fr: "Les pyramides de Méroé sont le joyau archéologique du Soudan : plus de 200 pyramides nubiennes aux proportions élancées, plus nombreuses qu'en Égypte, classées au patrimoine mondial de l'UNESCO. Capitales du royaume de Koush et Méroé pendant plus de mille ans, elles témoignent d'une civilisation africaine d'une richesse exceptionnelle. Avant la guerre, Méroé accueillait des milliers de visiteurs par an venus admirer ces sentinelles de grès rose dans le désert nubien.",
        en: "The pyramids of Meroë are Sudan's archaeological jewel: over 200 slender Nubian pyramids, more numerous than in Egypt, a UNESCO World Heritage site. Capitals of the Kingdom of Kush and Meroë for over a thousand years, they bear witness to an exceptionally rich African civilisation. Before the war, Meroë welcomed thousands of visitors a year who came to admire these pink sandstone sentinels in the Nubian desert.",
      },
      wikipedia: "File:Sudan Meroe Pyramids 2001.JPG",
      tags: ["UNESCO", "Archéologie", "Pyramides", "Nubie"],
      mustSee: [
        { name: { fr: "Nécropole nord de Méroé — principale concentration de pyramides", en: "Northern necropolis of Meroë — the main cluster of pyramids" }, wikipedia: "Meroë" },
        { name: { fr: "Temple d'Apedemak à Naqa — temple du lion nubien", en: "Temple of Apedemak at Naqa — the Nubian lion temple" }, wikipedia: "Naqa" },
        { name: { fr: "Bains royaux de Méroé — thermes de la cité antique", en: "Royal Baths of Meroë — the ancient city's thermal baths" }, wikipedia: "File:Meroe Royal Bath.JPG" },
        { name: { fr: "Musée national de Khartoum — collections nubiennes (pré-conflit)", en: "Khartoum National Museum — Nubian collections (pre-conflict)" }, wikipedia: "File:Republican Palace Museum (Khartoum) 002.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Jebel Barkal & Kerma", en: "Jebel Barkal & Kerma" },
      region: { fr: "État du Nil Nord (Nubie)", en: "Northern State (Nubia)" },
      description: {
        fr: "Jebel Barkal est une montagne sacrée des anciens Égyptiens et Nubiens, dominée par une falaise de 100 mètres de haut sur le Nil, abritant temples et pyramides royales classés à l'UNESCO. Kerma, plus au nord, est le site de la plus ancienne ville d'Afrique subsaharienne connue, avec des objets remontant à 2500 av. J.-C. Ces sites constituaient avant la guerre les étapes incontournables d'un circuit nubien unique au monde.",
        en: "Jebel Barkal is a sacred mountain of the ancient Egyptians and Nubians, dominated by a 100-metre cliff over the Nile, housing UNESCO-listed temples and royal pyramids. Kerma, further north, is the site of the oldest known city in sub-Saharan Africa, with artefacts dating back to 2500 BC. Before the war, these sites were the essential stops on a uniquely Nubian tour.",
      },
      wikipedia: "Jebel_Barkal",
      tags: ["UNESCO", "Archéologie", "Nubie", "Antiquité"],
      mustSee: [
        { name: { fr: "Temple d'Amon à Jebel Barkal — sanctuaire taillé dans la roche", en: "Temple of Amun at Jebel Barkal — sanctuary carved into the rock" }, wikipedia: "Jebel_Barkal" },
        { name: { fr: "Pyramides de Nuri — tombeaux royaux nubiens", en: "Pyramids of Nuri — royal Nubian tombs" }, wikipedia: "Nuri" },
        { name: { fr: "Kerma — plus ancienne ville d'Afrique subsaharienne", en: "Kerma — the oldest city in sub-Saharan Africa" }, wikipedia: "Kerma" },
        { name: { fr: "Deffufa Occidentale de Kerma — monument en briques de terre crue", en: "Western Deffufa of Kerma — mudbrick monument" }, wikipedia: "File:Western Deffufa - Kerma.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Port Soudan & Mer Rouge", en: "Port Sudan & the Red Sea" },
      region: { fr: "État de la Mer Rouge", en: "Red Sea State" },
      description: {
        fr: "Port Soudan donnait accès à l'une des plus belles plongées de la mer Rouge, dans des eaux encore peu explorées avec des récifs coralliens intacts, des épaves historiques et une biodiversité marine remarquable. Les collines de la Mer Rouge offrent une atmosphère nubienne authentique avec les communautés Beja nomades. La région est aujourd'hui moins touchée par la guerre civile que Khartoum.",
        en: "Port Sudan gave access to some of the finest diving in the Red Sea, in still little-explored waters with intact coral reefs, historic wrecks and remarkable marine biodiversity. The Red Sea Hills offer an authentic Nubian atmosphere with nomadic Beja communities. The region is today less affected by the civil war than Khartoum.",
      },
      wikipedia: "Port_Sudan",
      tags: ["Plongée", "Mer Rouge", "Nature", "Pêche"],
      mustSee: [
        { name: { fr: "Récifs de Sanganeb — parc marin avec requins et dauphins", en: "Sanganeb reefs — marine park with sharks and dolphins" }, wikipedia: "File:Barracuda_Tornado.jpg" },
        { name: { fr: "Épave du MV Umbria — navire mussolini coulé en 1940", en: "MV Umbria wreck — Mussolini-era ship sunk in 1940" }, wikipedia: "SS_Umbria" },
        { name: { fr: "Collines Taka (Kassala) — formations rocheuses et communauté Beja", en: "Taka Hills (Kassala) — rock formations and Beja community" }, wikipedia: "Kassala" },
        { name: { fr: "Suakin — ancienne ville ottomane en corail sur l'île", en: "Suakin — former Ottoman coral town on the island" }, wikipedia: "Suakin" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Avant la guerre, le Soudan était l'une des destinations archéologiques les moins chères au monde. La situation actuelle rend toute évaluation de coût hors de propos : le pays vit une catastrophe humanitaire et économique majeure. Les informations ci-dessous sont données à titre historique uniquement.",
      en: "Before the war, Sudan was one of the cheapest archaeological destinations in the world. The current situation makes any cost assessment irrelevant: the country is experiencing a major humanitarian and economic catastrophe. The information below is given for historical reference only.",
    },
    currency: "SDG",
    exchangeRate: "1€ ≈ 600 SDG (taux pré-conflit, instable)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / chambre basique (pré-conflit)", en: "Hostel / basic room (pre-conflict)" }, range: "8–15 €" },
          { label: { fr: "Hôtel milieu de gamme", en: "Mid-range hotel" }, range: "25–50 €" },
          { label: { fr: "Hôtel international (Khartoum)", en: "International hotel (Khartoum)" }, range: "60–120 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Foul médamès et falafels (rue)", en: "Ful medames and falafel (street)" }, range: "1–3 €" },
          { label: { fr: "Restaurant local (viande grillée)", en: "Local restaurant (grilled meat)" }, range: "5–12 €" },
          { label: { fr: "Café soudanais et jus de fruits", en: "Sudanese coffee and fruit juice" }, range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Khartoum–Méroé", en: "Bus Khartoum–Meroë" }, range: "5–10 €" },
          { label: { fr: "Taxi en ville", en: "Taxi in town" }, range: "2–5 €" },
          { label: { fr: "Location 4x4 avec chauffeur", en: "4x4 rental with driver" }, range: "60–120 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée site de Méroé", en: "Meroë site entry" }, range: "5–15 €" },
          { label: { fr: "Guide archéologique local", en: "Local archaeological guide" }, range: "20–40 €/j" },
          { label: { fr: "Plongée mer Rouge (forfait journée)", en: "Red Sea diving (day package)" }, range: "40–80 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Chiffres pré-conflit uniquement. Voyage actuellement impossible.", en: "Pre-conflict figures only. Travel is currently impossible." }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70–120 €/j", desc: { fr: "Chiffres pré-conflit uniquement. Voyage actuellement impossible.", en: "Pre-conflict figures only. Travel is currently impossible." }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Khartoum → Méroé → Jebel Barkal → Kerma → Port Soudan", en: "Khartoum → Meroë → Jebel Barkal → Kerma → Port Sudan" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Khartoum (pré-conflit)", en: "Return flight Paris–Khartoum (pre-conflict)" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "80–150 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "120–200 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Khartoum (pré-conflit)", en: "Return flight Paris–Khartoum (pre-conflict)" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "250–500 €" },
            { label: { fr: "Location 4x4 + carburant", en: "4x4 rental + fuel" }, amount: "500–800 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "250–400 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "200–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Vols via Le Caire (EgyptAir), Istanbul (Turkish) ou Dubaï (Emirates). Liaisons directes suspendues depuis le conflit.", en: "Flights via Cairo (EgyptAir), Istanbul (Turkish) or Dubai (Emirates). Direct flights suspended since the conflict." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — procédures actuellement suspendues pour les voyageurs civils en raison du conflit armé.", en: "Visa required — procedures currently suspended for civilian travellers due to the armed conflict." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Livre soudanaise (SDG). Économie en effondrement depuis 2023. Transactions en cash USD historiquement nécessaires.", en: "Sudanese pound (SDG). Economy collapsing since 2023. Cash USD transactions have historically been necessary." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arabe (officiel), anglais dans les villes et les milieux éduqués. Langues nubiennes dans le nord.", en: "Arabic (official), English in cities and educated circles. Nubian languages in the north." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type D et Type G (britannique). Tension 230V. Coupures fréquentes même en temps normal.", en: "Type D and Type G (British). 230V. Frequent power cuts even in normal times." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Paludisme présent, chaleur extrême (jusqu'à 47°C). Accès aux soins très limité. Situation sanitaire désastreuse depuis 2023.", en: "Malaria present, extreme heat (up to 47°C). Very limited access to healthcare. Disastrous health situation since 2023." } },
    { icon: "⚠️", label: { fr: "Sécurité — AVERTISSEMENT CRITIQUE", en: "Safety — CRITICAL WARNING" }, value: { fr: "🚫 VOYAGE FORMELLEMENT DÉCONSEILLÉ. Guerre civile active depuis avril 2023 entre les FAR (armée) et les RSF (paramilitaires). Khartoum est une zone de combat. Des millions de déplacés. Le MEAE classe le Soudan en zone rouge absolue. N'envisagez aucun déplacement.", en: "🚫 TRAVEL FORMALLY ADVISED AGAINST. Active civil war since April 2023 between the SAF (army) and the RSF (paramilitaries). Khartoum is a combat zone. Millions displaced. Official government travel advisories classify Sudan as an absolute no-go zone. Do not consider any travel." } },
    { icon: "📰", label: { fr: "Contexte politique", en: "Political context" }, value: { fr: "Crise humanitaire majeure : plus de 8 millions de déplacés, famine, infrastructures détruites. Suivre l'évolution sur le site du Ministère des Affaires Étrangères (France.fr/conseils-aux-voyageurs).", en: "Major humanitarian crisis: over 8 million displaced, famine, destroyed infrastructure. Follow developments on your government's foreign travel advisory website." } },
  ],
};
