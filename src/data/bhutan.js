export const BHUTAN = {
  code: "BTN",
  numericId: 64,
  name: { fr: "Bhoutan", en: "Bhutan" },
  emoji: "🇧🇹",
  capital: { fr: "Thimphou", en: "Thimphu" },
  language: { fr: "Dzongkha", en: "Dzongkha" },
  currency: { fr: "Ngultrum (BTN)", en: "Ngultrum (BTN)" },
  timezone: "UTC+6",
  filter: {
    budgetMin: 200, budgetMid: 350,
    tripMin: 3000, tripMid: 5500,
  },
  description: {
    fr: "Le Bhoutan est le dernier royaume bouddhiste de l'Himalaya, mesurant son succès au « Bonheur National Brut » plutôt qu'au PIB. Monastères perchés à flanc de falaise, rizières en terrasses, forêts vierges et une culture tibétaine intacte — une destination hors du temps, accessible mais unique.",
    en: "Bhutan is the last Buddhist kingdom in the Himalayas, measuring its success by “Gross National Happiness” rather than GDP. Cliffside monasteries, terraced rice fields, pristine forests and an unspoilt Tibetan culture make it a timeless destination—accessible, yet truly unique.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Printemps & Rhododendrons", en: "Spring & Rhododendrons" },
      color: "#22c55e",
      description: {
        fr: "Rhododendrons en fleurs (plus de 46 espèces), ciels clairs sur l'Himalaya, températures douces. Idéal pour trek et festivals (Paro Tsechu en avril).",
        en: "Blooming rhododendrons (more than 46 species), clear Himalayan skies and mild temperatures. Ideal for trekking and festivals (Paro Tsechu in April).",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November" },
      label: { fr: "Automne cristallin", en: "Crystal-clear autumn" },
      color: "#fb923c",
      description: {
        fr: "Après la mousson, l'air est lavé, les panoramas sur les sommets (Jomolhari, Gangkhar Puensum) sont spectaculaires. Idéal pour les treks.",
        en: "After the monsoon, the air is washed clean and the views of the peaks (Jomolhari, Gangkhar Puensum) are spectacular. Ideal for trekking.",
      },
      icon: "🏔️",
    },
  ],

  weatherCities: [
    {
      id: "thimphu",
      name: "Thimphou",
      region: { fr: "Thimphou", en: "Thimphu" },
      data: [
        { month: "Jan", temp:  5, rain:  10, icon: "❄️" },
        { month: "Fév", temp:  7, rain:  20, icon: "❄️" },
        { month: "Mar", temp: 10, rain:  30, icon: "⛅" },
        { month: "Avr", temp: 13, rain:  60, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 150, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 200, icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 200, icon: "⛅" },
        { month: "Sep", temp: 18, rain: 120, icon: "☀️" },
        { month: "Oct", temp: 14, rain:  50, icon: "⛅" },
        { month: "Nov", temp:  9, rain:  15, icon: "⛅" },
        { month: "Déc", temp:  6, rain:   5, icon: "❄️" },
      ],
    },
    {
      id: "paro",
      name: "Paro",
      region: { fr: "Paro", en: "Paro" },
      data: [
        { month: "Jan", temp:  3, rain:   8, icon: "❄️" },
        { month: "Fév", temp:  5, rain:  15, icon: "❄️" },
        { month: "Mar", temp:  9, rain:  25, icon: "⛅" },
        { month: "Avr", temp: 13, rain:  55, icon: "⛅" },
        { month: "Mai", temp: 16, rain:  90, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 140, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 200, icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 200, icon: "⛅" },
        { month: "Sep", temp: 17, rain: 110, icon: "☀️" },
        { month: "Oct", temp: 13, rain:  45, icon: "⛅" },
        { month: "Nov", temp:  8, rain:  12, icon: "⛅" },
        { month: "Déc", temp:  4, rain:   4, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Paro — Taktsang (Nid du Tigre)", en: "Paro — Taktsang (Tiger's Nest)" },
      region: { fr: "Paro", en: "Paro" },
      description: {
        fr: "Le monastère de Paro Taktsang, perché à 3 120 m sur une falaise verticale, est l'image iconique du Bhoutan. La randonnée de 2h depuis la vallée est accessible à tous.",
        en: "The Paro Taktsang monastery, perched at 3,120 m on a sheer cliff face, is Bhutan's iconic image. The 2-hour hike up from the valley is accessible to most travellers.",
      },
      wikipedia: "Paro_Taktsang",
      tags: ["Randonnée", "Bouddhisme", "Panorama", "Incontournable"],
      mustSee: [
        { name: { fr: "Monastère du Nid du Tigre (Taktsang)", en: "Tiger's Nest Monastery (Taktsang)" }, wikipedia: "Paro_Taktsang" },
        { name: { fr: "Rinpung Dzong — forteresse-monastère", en: "Rinpung Dzong — fortress-monastery" }, wikipedia: "Rinpung_Dzong" },
        { name: { fr: "Musée national du Bhoutan", en: "National Museum of Bhutan" }, wikipedia: "National_Museum_of_Bhutan" },
      ],
    },
    {
      id: 2,
      name: { fr: "Thimphou", en: "Thimphu" },
      region: { fr: "Thimphou", en: "Thimphu" },
      description: {
        fr: "Capitale sans feux de circulation (unique au monde), Thimphou est une ville à taille humaine avec le Tashichho Dzong, la statue de Bouddha Dordenma (51 m) et des marchés colorés.",
        en: "A capital city with no traffic lights (unique in the world), Thimphu is a human-scale city with Tashichho Dzong, the 51 m Buddha Dordenma statue and colourful markets.",
      },
      wikipedia: "Thimphu",
      tags: ["Ville", "Culture", "Bouddhisme"],
      mustSee: [
        { name: { fr: "Bouddha Dordenma (51 m)", en: "Buddha Dordenma (51 m)" }, wikipedia: "Buddha_Dordenma_statue" },
        { name: "Tashichho Dzong", wikipedia: "Tashichho_Dzong" },
        { name: { fr: "Changangkha Lhakhang (XIIe s.)", en: "Changangkha Lhakhang (12th c.)" }, wikipedia: "Changangkha_Lhakhang" },
      ],
    },
    {
      id: 3,
      name: "Punakha",
      region: { fr: "Punakha", en: "Punakha" },
      description: {
        fr: "Ancienne capitale d'hiver, Punakha abrite le plus beau dzong du Bhoutan, à la confluence de deux rivières sacrées, entouré de rizières et de champs de moutarde dorée.",
        en: "Former winter capital, Punakha is home to Bhutan's most beautiful dzong, at the confluence of two sacred rivers, surrounded by rice paddies and golden mustard fields.",
      },
      wikipedia: "Punakha_Dzong",
      tags: ["Histoire", "Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Punakha Dzong — joyau architectural", en: "Punakha Dzong — architectural jewel" }, wikipedia: "Punakha_Dzong" },
        { name: { fr: "Champs de moutarde (fév–mars)", en: "Mustard fields (Feb–Mar)" }, wikipedia: "Punakha" },
        { name: { fr: "Chimi Lhakhang — temple de la fertilité", en: "Chimi Lhakhang — fertility temple" }, wikipedia: "Chimi_Lhakhang" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bumthang — Vallée sacrée", en: "Bumthang — Sacred Valley" },
      region: { fr: "Bumthang", en: "Bumthang" },
      description: {
        fr: "Le cœur culturel et spirituel du Bhoutan, avec les plus anciens temples du pays, des forêts de sapins, des brasseries artisanales et la chaleur des habitants.",
        en: "Bhutan's cultural and spiritual heart, with the country's oldest temples, fir forests, craft breweries and warmly welcoming locals.",
      },
      wikipedia: "Bumthang_District",
      tags: ["Spiritualité", "Randonnée", "Culture"],
      mustSee: [
        { name: "Jakar Dzong", wikipedia: "Jakar_Dzong" },
        { name: { fr: "Kurjey Lhakhang (empreinte de Guru Rinpoché)", en: "Kurjey Lhakhang (Guru Rinpoche footprint)" }, wikipedia: "Kurjey_Lhakhang" },
        { name: { fr: "Red Panda Brewery (bière bhoutanaise)", en: "Red Panda Brewery (Bhutanese beer)" }, wikipedia: "Bumthang_District" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Bhoutan impose une taxe touristique journalière (Sustainable Development Fee : 100$/jour en 2024, réduite de 200$/jour depuis 2023). Cela inclut hébergement 3★, repas, guide et transport locaux.",
      en: "Bhutan charges a daily tourism fee (Sustainable Development Fee: $100/day in 2024, down from $200/day since 2023). This includes 3-star accommodation, meals, a guide and local transport.",
    },
    currency: "BTN / INR",
    exchangeRate: "1€ ≈ 90 BTN (parité avec roupie indienne)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hôtel 3★ (inclus dans SDF)", en: "3-star hotel (included in SDF)" }, price: "Inclus", detail: { fr: "Dans la taxe touristique journalière", en: "Included in the daily tourism fee" } },
          { label: { fr: "Hôtel 4★ (supplément)", en: "4-star hotel (supplement)" }, price: "+50–100 €/nuit", detail: { fr: "Au-dessus du minimum SDF", en: "On top of the minimum SDF package" } },
          { label: { fr: "Lodge de luxe Aman/Six Senses", en: "Aman / Six Senses luxury lodge" }, price: "600–1 500 €/nuit", detail: { fr: "En sus du SDF", en: "In addition to the SDF" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Ema Datshi (chili au fromage)", en: "Ema Datshi (chilli and cheese)" }, price: "Inclus SDF", detail: { fr: "Plat national, 3 repas inclus", en: "National dish, 3 meals included" } },
          { label: { fr: "Restaurant upgradé", en: "Higher-end restaurant" }, price: "15–30 €", detail: { fr: "En supplément du SDF", en: "At extra cost beyond the SDF" } },
          { label: { fr: "Red Rice & Momo", en: "Red Rice & Momo" }, price: "3–6 €", detail: { fr: "Si hors circuit officiel", en: "If travelling outside the official circuit" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Transport inclus dans SDF", en: "Transport included in SDF" }, price: "Inclus", detail: { fr: "Véhicule + chauffeur dans le circuit", en: "Vehicle + driver within the itinerary" } },
          { label: { fr: "Vol Paro–Katmandou", en: "Paro–Kathmandu flight" }, price: "150–250 €", detail: { fr: "Option combinaison avec Népal", en: "A good add-on option with Nepal" } },
          { label: { fr: "Druk Air (vol arrivée)", en: "Druk Air (inbound flight)" }, price: "200–400 €", detail: { fr: "Seul accès aérien", en: "Bhutan's only commercial air gateway" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Toutes visites incluses dans SDF", en: "All sightseeing included in SDF" }, price: "Inclus", detail: { fr: "Guide + entrées", en: "Guide + entrance fees" } },
          { label: { fr: "Trek Jomolhari (7j)", en: "Jomolhari trek (7d)" }, price: "+200–400 €", detail: { fr: "Supplément trek avec guide", en: "Extra charge for a guided trek" } },
          { label: { fr: "Festival Tsechu (place réservée)", en: "Tsechu festival (reserved seat)" }, price: "+30–60 €", detail: { fr: "Billets pour meilleurs places", en: "Tickets for the best seats" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "200 €/j", desc: { fr: "SDF 100$/j + vol A/R lissé + suppléments minimum", en: "SDF $100/day + averaged return flight + minimal extras" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "300–400 €/j", desc: { fr: "SDF + hôtel 4★ + excursions supplémentaires", en: "SDF + 4-star hotel + extra excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "700 €+/j", desc: { fr: "SDF + lodges Aman/Six Senses + treks privés", en: "SDF + Aman / Six Senses lodges + private treks" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Paro (2j) → Thimphou (3j) → Punakha (2j) → Bumthang (3j)", en: "Paro (2d) → Thimphu (3d) → Punakha (2d) → Bumthang (3d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "3 000 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Paro (Druk Air/Bangkok Air)", en: "Return flight Paris–Paro (Druk Air/Bangkok Air)" }, amount: "700–1 200 €" },
            { label: { fr: "SDF 100$/j × 10 jours", en: "SDF $100/day × 10 days" }, amount: "~920 €" },
            { label: { fr: "Hébergement & repas (inclus SDF)", en: "Accommodation & meals (included in SDF)" }, amount: "Inclus" },
            { label: { fr: "Guide & transport (inclus SDF)", en: "Guide & transport (included in SDF)" }, amount: "Inclus" },
            { label: { fr: "Suppléments & imprévus", en: "Extras & contingency" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "5 500 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Paro", en: "Return flight Paris–Paro" }, amount: "900–1 400 €" },
            { label: { fr: "SDF 100$/j × 10 jours", en: "SDF $100/day × 10 days" }, amount: "~920 €" },
            { label: { fr: "Hôtel 4★ (supplément)", en: "4-star hotel (supplement)" }, amount: "700–1 200 €" },
            { label: { fr: "Treks & excursions", en: "Treks & excursions" }, amount: "500–800 €" },
            { label: { fr: "Repas upgradés & imprévus", en: "Premium meals & contingency" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Paro (Business)", en: "Return flight Paris–Paro (Business)" }, amount: "2 000–4 000 €" },
            { label: { fr: "SDF 100$/j × 10 jours", en: "SDF $100/day × 10 days" }, amount: "~920 €" },
            { label: { fr: "Lodges Amankora ou Six Senses", en: "Amankora or Six Senses lodges" }, amount: "6 000–12 000 €" },
            { label: { fr: "Treks privés & expériences exclusives", en: "Private treks & exclusive experiences" }, amount: "1 000–2 000 €" },
            { label: { fr: "Gastronomie & imprévus", en: "Fine dining & contingency" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~12h (Druk Air/Bangkok Air via Bangkok ou Delhi)", en: "~12h (Druk Air/Bangkok Air via Bangkok or Delhi)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire (obtenu via agence agréée + SDF)", en: "Visa required (arranged through an approved agency + SDF)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Ngultrum = Roupie indienne (1€ ≈ 90 BTN)", en: "Ngultrum = pegged to the Indian rupee (1€ ≈ 90 BTN)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Dzongkha (anglais dans le tourisme)", en: "Dzongkha (English is used in tourism)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type D/F/G – 230 V", en: "Type D/F/G – 230 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture dans les vallées, limité en montagne", en: "Coverage in the valleys, limited in the mountains" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non recommandée — eau en bouteille", en: "Not recommended — bottled water" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin hépatite A recommandé, médicaments anti-altitude", en: "Hepatitis A vaccine recommended, plus altitude medication" } },
  ],
};
