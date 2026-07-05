export const CAMBODIA = {
  code: "KHM",
  numericId: 116,
  name: { fr: "Cambodge", en: "Cambodia" },
  emoji: "🇰🇭",
  capital: { fr: "Phnom Penh", en: "Phnom Penh" },
  language: { fr: "Khmer", en: "Khmer" },
  currency: { fr: "Riel cambodgien (KHR) / Dollar américain (USD)", en: "Cambodian riel (KHR) / US dollar (USD)" },
  timezone: "UTC+7",
  filter: {
    budgetMin: 25,
    budgetMid: 55,
    tripMin: 900,
    tripMid: 1800,
  },
  description: {
    fr: "Le Cambodge est le pays d'Angkor, l'un des plus grands sites archéologiques du monde. Au-delà des temples khmers, il offre des plages encore sauvages, le Mékong et le lac Tonlé Sap, et une culture empreinte de sérénité bouddhiste malgré un passé traumatique avec les Khmers rouges.",
    en: "Cambodia is the land of Angkor, one of the world's greatest archaeological sites. Beyond its Khmer temples, it offers still-unspoiled beaches, the Mekong and Tonlé Sap Lake, and a culture steeped in Buddhist serenity despite the traumatic legacy of the Khmer Rouge.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison sèche et fraîche", en: "Dry and cool season" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période : températures douces (25–30 °C), ciel bleu, routes praticables. Idéal pour Angkor et les plages.",
        en: "Best time to visit: mild temperatures (25–30 °C), blue skies and passable roads. Ideal for Angkor and the beaches.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Octobre", en: "June – October" },
      label: { fr: "Saison des pluies (vert et moins de monde)", en: "Rainy season (lush and less crowded)" },
      color: "#22c55e",
      description: {
        fr: "Campagne verdoyante et moins de touristes à Angkor. Les pluies sont souvent brèves. Coût plus bas.",
        en: "The countryside turns lush and Angkor sees fewer tourists. Showers are often brief. Costs are lower.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "phnom-penh",
      name: "Phnom Penh",
      region: { fr: "Mékong", en: "Mekong" },
      data: [
        { month: "Jan", temp: 25, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 8, icon: "⛅" },
        { month: "Mar", temp: 29, rain: 30, icon: "⛅" },
        { month: "Avr", temp: 31, rain: 65, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 145, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 190, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 260, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 240, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 65, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 15, icon: "☀️" },
      ],
    },
    {
      id: "siem-reap",
      name: "Siem Reap",
      region: { fr: "Angkor", en: "Angkor" },
      data: [
        { month: "Jan", temp: 25, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 10, icon: "⛅" },
        { month: "Mar", temp: 29, rain: 30, icon: "⛅" },
        { month: "Avr", temp: 31, rain: 60, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 135, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 165, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 185, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 245, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 60, icon: "⛅" },
        { month: "Déc", temp: 25, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Angkor & Siem Reap", en: "Angkor & Siem Reap" },
      region: { fr: "Siem Reap", en: "Siem Reap" },
      description: {
        fr: "Angkor est l'un des sites archéologiques les plus impressionnants du monde : 400 km² de temples khmers du IXe au XVe siècle. Angkor Wat, la plus grande structure religieuse jamais construite, est le symbole même du Cambodge.",
        en: "Angkor is one of the world's most awe-inspiring archaeological sites: 400 km² of Khmer temples dating from the 9th to the 15th century. Angkor Wat, the largest religious structure ever built, is Cambodia's defining symbol.",
      },
      wikipedia: "File:2016 Angkor, Angkor Wat, Brama Angkor Wat (48).jpg",
      tags: ["Temples", "Archéologie", "UNESCO", "Histoire", "Gastronomie"],
      mustSee: [
        { name: "Angkor Wat", wikipedia: "Angkor_Wat" },
        { name: { fr: "Angkor Thom & Bayon", en: "Angkor Thom & Bayon" }, wikipedia: "Angkor_Thom" },
        { name: { fr: "Ta Prohm (temple forêt)", en: "Ta Prohm (jungle temple)" }, wikipedia: "Ta_Prohm" },
        { name: "Banteay Srei", wikipedia: "Banteay_Srei" },
      ],
    },
    {
      id: 2,
      name: "Phnom Penh",
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "La capitale est une ville attachante au bord du Mékong. Le Palais Royal, les pagodes bouddhistes et le marché central contrastent avec les mémoriaux Tuol Sleng (S-21) et Choeung Ek, témoignages poignants du génocide khmer rouge.",
        en: "The capital is a compelling city on the banks of the Mekong. The Royal Palace, Buddhist pagodas and Central Market stand in stark contrast to the Tuol Sleng (S-21) and Choeung Ek memorials, poignant reminders of the Khmer Rouge genocide.",
      },
      wikipedia: "Phnom_Penh",
      tags: ["Ville", "Histoire", "Culture", "Mémorial", "Gastronomie"],
      mustSee: [
        { name: { fr: "Palais Royal de Phnom Penh", en: "Phnom Penh Royal Palace" }, wikipedia: "File:2016 Phnom Penh, Pałac Królewski, Srebrna Pagoda (02).jpg" },
        { name: { fr: "Musée Tuol Sleng (S-21)", en: "Tuol Sleng Museum (S-21)" }, wikipedia: "Tuol_Sleng_Genocide_Museum" },
        { name: { fr: "Choeung Ek (Killing Fields)", en: "Choeung Ek (Killing Fields)" }, wikipedia: "Choeung_Ek" },
        { name: { fr: "Musée National", en: "National Museum" }, wikipedia: "National_Museum_of_Cambodia" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plages de Sihanoukville & îles", en: "Sihanoukville beaches & islands" },
      region: { fr: "Côte Sud", en: "South Coast" },
      description: {
        fr: "Les îles de Koh Rong et Koh Rong Samloem offrent des plages de sable blanc et des eaux turquoise encore préservées. Sihanoukville est la porte d'entrée, bien que la ville principale ait beaucoup changé ces dernières années.",
        en: "The islands of Koh Rong and Koh Rong Samloem offer white-sand beaches and still-preserved turquoise waters. Sihanoukville is the gateway, although the main town has changed dramatically in recent years.",
      },
      wikipedia: "Sihanoukville",
      tags: ["Plage", "Îles", "Plongée", "Nature"],
      mustSee: [
        { name: "Koh Rong Samloem", wikipedia: "File:Koh Rong Sanloem estuary.jpg" },
        { name: "Koh Rong", wikipedia: "Koh_Rong" },
        { name: "Long Set Beach", wikipedia: "Sihanoukville" },
        { name: "Ream National Park", wikipedia: "Ream_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Battambang",
      region: { fr: "Nord-Ouest", en: "Northwest" },
      description: {
        fr: "Battambang est la deuxième ville du Cambodge, plus authentique et moins touristique que Siem Reap. Ses temples préangkoriens, son train de bambou (Norry), ses villages de potiers et son architecture coloniale en font une étape charmante.",
        en: "Battambang is Cambodia's second-largest city, more authentic and less touristy than Siem Reap. Its pre-Angkorian temples, bamboo train (Norry), pottery villages and colonial architecture make it a charming stop.",
      },
      wikipedia: "Battambang",
      tags: ["Authentique", "Culture", "Architecture", "Vélo"],
      mustSee: [
        { name: { fr: "Train de bambou (Norry)", en: "Bamboo train (Norry)" }, wikipedia: "File:Bamboo train (Norry) station near Battambang in 2012.jpg" },
        { name: { fr: "Phnom Sampeau (temple-falaise)", en: "Phnom Sampeau (cliffside temple)" }, wikipedia: "File:Wat Phnom Sampeau.Battambang.2006.jpg" },
        { name: { fr: "Wat Banan (temple)", en: "Wat Banan Temple" }, wikipedia: "Wat_Banan" },
        { name: { fr: "Village de Phnom Pros", en: "Phnom Pros village" }, wikipedia: "Battambang" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Cambodge est l'une des destinations les plus abordables d'Asie du Sud-Est. Le dollar américain est largement accepté et souvent préféré au riel local.",
      en: "Cambodia is one of the most affordable destinations in Southeast Asia. The US dollar is widely accepted and often preferred over the local riel.",
    },
    currency: "Dollar américain (USD) / Riel (KHR)",
    exchangeRate: "1€ ≈ 1,05–1,10 USD (utilisez des dollars)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir auberge de jeunesse", en: "Hostel dorm" }, price: "4–8 €", detail: { fr: "Siem Reap, Phnom Penh, très bon réseau", en: "Well developed in Siem Reap and Phnom Penh" } },
          { label: { fr: "Guesthouse double AC", en: "Double guesthouse room with A/C" }, price: "10–25 €", detail: { fr: "Bon rapport qualité-prix", en: "Good value for money" } },
          { label: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel" }, price: "50–120 €", detail: { fr: "Siem Reap, piscine souvent incluse", en: "In Siem Reap, a pool is often included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas local (lok lak, amok)", en: "Local meal (lok lak, amok)" }, price: "1,5–3 €", detail: { fr: "Dans les restos locaux ou marchés", en: "At local restaurants or markets" } },
          { label: { fr: "Happy pizza ou restaurant rue", en: "Happy pizza or street-side restaurant" }, price: "3–7 €", detail: { fr: "Restaurant touristique de base", en: "Basic tourist restaurant" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" }, price: "8–18 €", detail: { fr: "Fish amok, beef lok lak, desserts", en: "Fish amok, beef lok lak, desserts" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Phnom Penh–Siem Reap (6h)", en: "Phnom Penh–Siem Reap bus (6h)" }, price: "5–10 €", detail: { fr: "Giant Ibis ou Mekong Express, AC", en: "Giant Ibis or Mekong Express, A/C" } },
          { label: { fr: "Tuk-tuk trajet ville", en: "Tuk-tuk city ride" }, price: "1–4 €", detail: { fr: "Négocier le prix, omniprésent", en: "Negotiate the price, available everywhere" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Pass Angkor 1 jour", en: "1-day Angkor pass" }, price: "35 €", detail: { fr: "3 jours : 55 €, 7 jours : 70 €", en: "3 days: €55, 7 days: €70" } },
          { label: { fr: "Cooking class khmer", en: "Khmer cooking class" }, price: "15–25 €", detail: { fr: "Visite marché + cours 3h", en: "Market visit + 3-hour class" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Dortoir, restos locaux, tuk-tuk", en: "Dorm bed, local eateries, tuk-tuks" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "55–90 €/j", desc: { fr: "Hôtel 3★, restaurants, excursions guidées", en: "3★ hotel, restaurants, guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "150 €+/j", desc: { fr: "Hôtel boutique piscine, spa, tours privés", en: "Boutique hotel with pool, spa, private tours" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Phnom Penh – Siem Reap (Angkor) – Plages", en: "Phnom Penh – Siem Reap (Angkor) – Beaches" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Phnom Penh", en: "Return flight Paris–Phnom Penh" }, amount: "550–750 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "100–180 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "120–200 €" },
            { label: { fr: "Transport local + bus", en: "Local transport + buses" }, amount: "60–100 €" },
            { label: { fr: "Pass Angkor + activités", en: "Angkor pass + activities" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Phnom Penh", en: "Return flight Paris–Phnom Penh" }, amount: "700–950 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "450–700 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Transport + excursions", en: "Transport + excursions" }, amount: "200–300 €" },
            { label: { fr: "Pass Angkor + activités", en: "Angkor pass + activities" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "4 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Phnom Penh (Business)", en: "Return flight Paris–Phnom Penh (business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 000–1 500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "350–500 €" },
            { label: { fr: "Tours privés Angkor", en: "Private Angkor tours" }, amount: "300–500 €" },
            { label: { fr: "Activités premium + spa", en: "Premium activities + spa" }, amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13–14h avec escale (Bangkok, Singapour, KL)", en: "~13–14h with a stopover (Bangkok, Singapore, KL)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa en ligne (~36 USD = 30 $ visa + 6 $ frais) ou visa à l'arrivée (35 USD)", en: "Online e-visa (~USD 36 = $30 visa + $6 fee) or visa on arrival (USD 35)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "USD très accepté (1€ ≈ 1,05–1,10 USD)", en: "USD widely accepted (1€ ≈ USD 1.05–1.10)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Khmer (l'anglais est très répandu dans le tourisme)", en: "Khmer (English is widely spoken in tourist areas)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/C/G – 230 V (adaptateur universel conseillé)", en: "Type A/C/G – 230 V (a universal adapter is recommended)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "4G dans les villes, SIM locale chez Smart ou Metfone", en: "4G in cities, local SIM from Smart or Metfone" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water is essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéens recommandés pour les zones rurales et forestières", en: "Antimalarial medication is recommended for rural and forested areas" } },
  ],
};
