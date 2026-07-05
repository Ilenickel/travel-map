export const KENYA = {
  code: "KEN",
  numericId: 404,
  name: { fr: "Kenya", en: "Kenya" },
  emoji: "🇰🇪",
  capital: { fr: "Nairobi", en: "Nairobi" },
  language: { fr: "Swahili, Anglais", en: "Swahili, English" },
  currency: { fr: "Shilling kényan (KES)", en: "Kenyan Shilling (KES)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 50, budgetMid: 150,
    tripMin: 2500, tripMid: 5000,
  },
  description: {
    fr: "Le Kenya est le berceau du safari africain : Masai Mara et sa Grande Migration, amboseli avec les éléphants devant le Kilimandjaro, côte swahilie de Mombasa et culture Maasai vivante. Un pays qui définit l'Afrique sauvage.",
    en: "Kenya is the birthplace of the African safari: Masai Mara and its Great Migration, Amboseli with elephants roaming before Kilimanjaro, the Swahili coast around Mombasa and a living Maasai culture. A country that defines wild Africa.",
  },

  bestPeriods: [
    {
      months: { fr: "Juillet – Octobre", en: "July – October" },
      label: { fr: "Grande Migration", en: "Great Migration" },
      color: "#22c55e",
      description: {
        fr: "La Grande Migration (juillet–septembre) : des millions de gnous traversent la Mara River sous les yeux des crocodiles. Plus belle période safari. Saison sèche, herbe rase.",
        en: "The Great Migration (July–September): millions of wildebeest cross the Mara River under the watch of crocodiles. The best safari season. Dry season, short grass.",
      },
      icon: "🦁",
    },
    {
      months: { fr: "Janvier – Février", en: "January – February" },
      label: { fr: "Petite saison sèche", en: "Short dry season" },
      color: "#fb923c",
      description: {
        fr: "Courte saison sèche entre les deux moussons. Moins de touristes, safaris excellents, bébés animaux nombreux.",
        en: "A short dry spell between the two rainy seasons. Fewer tourists, excellent safaris, plenty of baby animals.",
      },
      icon: "🐘",
    },
  ],

  weatherCities: [
    {
      id: "nairobi",
      name: "Nairobi",
      region: { fr: "Nairobi", en: "Nairobi" },
      data: [
        { month: "Jan", temp: 24, rain: 60,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 45,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 220, icon: "⛅" },
        { month: "Mai", temp: 22, rain: 200, icon: "⛅" },
        { month: "Jun", temp: 20, rain: 35,  icon: "⛅" },
        { month: "Jul", temp: 20, rain: 20,  icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 25,  icon: "⛅" },
        { month: "Sep", temp: 21, rain: 35,  icon: "☀️" },
        { month: "Oct", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 23, rain: 150, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 90,  icon: "☀️" },
      ],
    },
    {
      id: "masai_mara",
      name: "Masai Mara",
      region: { fr: "Rift Valley", en: "Rift Valley" },
      data: [
        { month: "Jan", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Fév", temp: 29, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 150, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 60,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Masai Mara",
      region: { fr: "Rift Valley", en: "Rift Valley" },
      description: {
        fr: "La réserve nationale du Masai Mara est le théâtre de la Grande Migration : entre juillet et octobre, 1,5 million de gnous et zèbres traversent la Mara River, sous la surveillance des crocodiles du Nil et des lions. Un spectacle sans équivalent au monde.",
        en: "The Masai Mara National Reserve is the stage for the Great Migration: between July and October, 1.5 million wildebeest and zebras cross the Mara River, watched by Nile crocodiles and lions. A spectacle unmatched anywhere in the world.",
      },
      wikipedia: "Maasai_Mara",
      tags: ["Safari", "Grande Migration", "Big Five", "Nature"],
      mustSee: [
        { name: { fr: "Grande Migration (juil.–sept.)", en: "Great Migration (Jul.–Sep.)" }, wikipedia: "File:Wildebeests migration crossing.jpg" },
        { name: { fr: "Traversée de la Mara River", en: "Mara River crossing" }, wikipedia: "Mara_River" },
        { name: { fr: "Vol en montgolfière au lever du soleil", en: "Sunrise hot-air balloon flight" }, wikipedia: "Maasai_Mara" },
        { name: { fr: "Village Maasai", en: "Maasai village" }, wikipedia: "Maasai_people" },
      ],
    },
    {
      id: 2,
      name: { fr: "Amboseli & Kilimandjaro", en: "Amboseli & Kilimanjaro" },
      region: { fr: "Rift Valley / Kajiado", en: "Rift Valley / Kajiado" },
      description: {
        fr: "Le parc national d'Amboseli offre l'image iconique de l'Afrique : des éléphants marchant sous la silhouette enneigée du Kilimandjaro. Un des meilleurs parcs pour photographier les éléphants en très grands troupeaux.",
        en: "Amboseli National Park offers the iconic image of Africa: elephants walking beneath the snow-capped silhouette of Kilimanjaro. One of the best parks to photograph elephants in very large herds.",
      },
      wikipedia: "File:Kilimanjaro_from_Amboseli.jpg",
      tags: ["Éléphants", "Kilimandjaro", "Safari", "Photographie", "Randonnée"],
      mustSee: [
        { name: { fr: "Éléphants devant le Kilimandjaro", en: "Elephants before Kilimanjaro" }, wikipedia: "African_bush_elephant" },
        { name: { fr: "Lac Amboseli (flamants)", en: "Lake Amboseli (flamingos)" }, wikipedia: "Flamingo" },
        { name: { fr: "Kilimandjaro (vue depuis Kenya)", en: "Kilimanjaro (view from Kenya)" }, wikipedia: "Mount_Kilimanjaro" },
      ],
    },
    {
      id: 3,
      name: "Nairobi",
      region: { fr: "Nairobi", en: "Nairobi" },
      description: {
        fr: "La seule capitale au monde avec un parc national dans ses faubourgs : Nairobi National Park, où lions et girafes évoluent avec la skyline en arrière-plan. La ville est aussi le hub gastronomique de l'Afrique de l'Est.",
        en: "The only capital in the world with a national park on its doorstep: Nairobi National Park, where lions and giraffes roam with the skyline in the background. The city is also East Africa's culinary hub.",
      },
      wikipedia: "Nairobi",
      tags: ["Ville", "Faune", "Culture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Nairobi National Park (lions & skyline)", en: "Nairobi National Park (lions & skyline)" }, wikipedia: "Nairobi_National_Park" },
        { name: { fr: "Centre des girafes de Nairobi", en: "Nairobi Giraffe Centre" }, wikipedia: "Rothschild's_giraffe" },
        { name: { fr: "Karen Blixen Museum (Out of Africa)", en: "Karen Blixen Museum (Out of Africa)" }, wikipedia: "File:Karen blixen museum in nairobi kenya 02.jpg" },
        { name: { fr: "Marché Maasai", en: "Maasai Market" }, wikipedia: "File:The Maasai Market Vendors.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Côte swahilie — Mombasa & Zanzibar", en: "Swahili Coast — Mombasa & Zanzibar" },
      region: { fr: "Côte", en: "Coast" },
      description: {
        fr: "La côte kényane offre des plages paradisiaques aux eaux turquoise, des villes swahilies historiques (Lamu UNESCO) et une culture métissée arabo-africaine unique.",
        en: "The Kenyan coast offers paradisiac beaches with turquoise waters, historic Swahili towns (UNESCO-listed Lamu) and a unique blend of Arab and African culture.",
      },
      wikipedia: "Mombasa",
      tags: ["Plage", "Histoire", "Culture", "Plongée", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Fort Jésus de Mombasa (UNESCO)", en: "Fort Jesus in Mombasa (UNESCO)" }, wikipedia: "Fort_Jesus" },
        { name: { fr: "Lamu — vieille ville (UNESCO)", en: "Lamu — old town (UNESCO)" }, wikipedia: "Lamu" },
        { name: { fr: "Plages de Diani Beach", en: "Diani Beach" }, wikipedia: "Diani_Beach" },
        { name: { fr: "Réserve marine de Watamu", en: "Watamu Marine Reserve" }, wikipedia: "File:Watamu Marine Park.JPG" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Kenya offre un large spectre de prix : des camps de camping aux lodges de luxe. Les safaris sont l'investissement principal. Les droits d'entrée dans les parcs sont en dollars.",
      en: "Kenya offers a wide range of prices: from campsites to luxury lodges. Safaris are the main investment. Park entrance fees are charged in dollars.",
    },
    currency: "KES",
    exchangeRate: "1€ ≈ 145 KES",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / camping", en: "Guesthouse / camping" }, price: "15–35 €", detail: { fr: "Hors parcs nationaux", en: "Outside national parks" } },
          { label: { fr: "Lodge mid-range", en: "Mid-range lodge" }, price: "100–200 €", detail: { fr: "Safari lodge avec repas", en: "Safari lodge with meals" } },
          { label: { fr: "Tented camp luxe", en: "Luxury tented camp" }, price: "400–1 000 €", detail: { fr: "All-inclusive dans la Mara", en: "All-inclusive in the Mara" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Ugali, nyama choma, mandazi", en: "Ugali, nyama choma, mandazi" }, price: "2–5 €", detail: { fr: "Cuisine locale traditionnelle", en: "Traditional local cuisine" } },
          { label: { fr: "Restaurant local / Nairobi", en: "Local restaurant / Nairobi" }, price: "8–15 €", detail: { fr: "Bonne cuisine kényane", en: "Good Kenyan cuisine" } },
          { label: { fr: "Dîner dans un lodge safari", en: "Dinner at a safari lodge" }, price: "40–80 €", detail: { fr: "Inclus dans all-inclusive", en: "Included in all-inclusive packages" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol Nairobi–Masai Mara (30 min)", en: "Flight Nairobi–Masai Mara (30 min)" }, price: "150–250 €", detail: { fr: "Indispensable, recommandé", en: "Essential, recommended" } },
          { label: { fr: "Location 4x4 safari / jour", en: "4x4 safari rental / day" }, price: "80–150 €", detail: { fr: "Avec chauffeur-guide", en: "With driver-guide" } },
          { label: { fr: "Matatu (minibus local)", en: "Matatu (local minibus)" }, price: "1–3 €", detail: { fr: "Trajet interurbain", en: "Intercity trip" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Droit d'entrée Masai Mara/jour", en: "Masai Mara entrance fee/day" }, price: "50–80 €", detail: { fr: "Résidents non-africains", en: "Non-African residents" } },
          { label: { fr: "Montgolfière (1,5h)", en: "Hot-air balloon (1.5h)" }, price: "400–500 €", detail: { fr: "Expérience unique", en: "A unique experience" } },
          { label: { fr: "Visite village Maasai", en: "Maasai village visit" }, wikipedia: "Maasai_people", price: "10–25 €", detail: { fr: "Participation aux danses", en: "Includes taking part in dances" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Hors parcs nationaux : guesthouse + matatu + cuisine locale", en: "Outside national parks: guesthouse + matatu + local food" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "150–300 €/j", desc: { fr: "Lodge safari mid-range + game drives + repas inclus", en: "Mid-range safari lodge + game drives + meals included" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "500 €+/j", desc: { fr: "Tented camp 5★ all-inclusive + vols privés", en: "5-star all-inclusive tented camp + private flights" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Nairobi (2j) → Amboseli (2j) → Masai Mara (4j) → Mombasa / côte (2j)",
        en: "Nairobi (2d) → Amboseli (2d) → Masai Mara (4d) → Mombasa / coast (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nairobi", en: "Return flight Paris–Nairobi" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "600–900 €" },
            { label: { fr: "Vols intérieurs + safaris", en: "Domestic flights + safaris" }, amount: "600–900 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entrance fees" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & imprévus", en: "Food & contingency" }, amount: "300–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nairobi", en: "Return flight Paris–Nairobi" }, amount: "600–900 €" },
            { label: { fr: "Lodges safari (10 nuits)", en: "Safari lodges (10 nights)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Vols intérieurs + safaris guidés", en: "Domestic flights + guided safaris" }, amount: "1 000–1 500 €" },
            { label: { fr: "Droits d'entrée parcs", en: "Park entrance fees" }, amount: "400–600 €" },
            { label: { fr: "Extras & imprévus", en: "Extras & contingency" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nairobi (Business)", en: "Return flight Paris–Nairobi (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Tented camps & lodges 5★ (10 nuits)", en: "5-star tented camps & lodges (10 nights)" }, amount: "4 000–8 000 €" },
            { label: { fr: "Vols charter privés", en: "Private charter flights" }, amount: "2 000–4 000 €" },
            { label: { fr: "Montgolfière & expériences", en: "Hot-air balloon & experiences" }, amount: "800–1 500 €" },
            { label: { fr: "Imprévus", en: "Contingency" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~8,5h (Kenya Airways direct, Air France via escale)", en: "~8.5h (Kenya Airways direct, Air France with a stopover)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa en ligne (~51 USD, 90 jours) — etakenya.go.ke", en: "Online e-Visa (~51 USD, 90 days) — etakenya.go.ke" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Shilling (1€ ≈ 145 KES) — dollars acceptés", en: "Shilling (1€ ≈ 145 KES) — dollars accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Swahili + anglais (officielle)", en: "Swahili + English (official)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 240 V (comme UK)", en: "Type G – 240V (like the UK)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture, SIM locale ~5€ (Safaricom)", en: "Good coverage, local SIM ~5€ (Safaricom)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water recommended" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE — fièvre jaune si certaines zones", en: "Antimalarial treatment MANDATORY — yellow fever vaccine required for certain areas" } },
  ],
};
