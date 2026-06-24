export const KENYA = {
  code: "KEN",
  numericId: 404,
  name: "Kenya",
  emoji: "🇰🇪",
  capital: "Nairobi",
  language: "Swahili, Anglais",
  currency: "Shilling kényan (KES)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 50, budgetMid: 150,
    tripMin: 2500, tripMid: 5000,
  },
  description:
    "Le Kenya est le berceau du safari africain : Masai Mara et sa Grande Migration, amboseli avec les éléphants devant le Kilimandjaro, côte swahilie de Mombasa et culture Maasai vivante. Un pays qui définit l'Afrique sauvage.",

  bestPeriods: [
    {
      months: "Juillet – Octobre",
      label: "Grande Migration",
      color: "#22c55e",
      description:
        "La Grande Migration (juillet–septembre) : des millions de gnous traversent la Mara River sous les yeux des crocodiles. Plus belle période safari. Saison sèche, herbe rase.",
      icon: "🦁",
    },
    {
      months: "Janvier – Février",
      label: "Petite saison sèche",
      color: "#fb923c",
      description:
        "Courte saison sèche entre les deux moussons. Moins de touristes, safaris excellents, bébés animaux nombreux.",
      icon: "🐘",
    },
  ],

  weatherCities: [
    {
      id: "nairobi",
      name: "Nairobi",
      region: "Nairobi",
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
      region: "Rift Valley",
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
      region: "Rift Valley",
      description:
        "La réserve nationale du Masai Mara est le théâtre de la Grande Migration : entre juillet et octobre, 1,5 million de gnous et zèbres traversent la Mara River, sous la surveillance des crocodiles du Nil et des lions. Un spectacle sans équivalent au monde.",
      wikipedia: "Maasai_Mara",
      tags: ["Safari", "Grande Migration", "Big Five", "Nature"],
      mustSee: [
        { name: "Grande Migration (juil.–sept.)", wikipedia: "File:Wildebeests migration crossing.jpg" },
        { name: "Traversée de la Mara River", wikipedia: "Mara_River" },
        { name: "Vol en montgolfière au lever du soleil", wikipedia: "Maasai_Mara" },
        { name: "Village Maasai", wikipedia: "Maasai_people" },
      ],
    },
    {
      id: 2,
      name: "Amboseli & Kilimandjaro",
      region: "Rift Valley / Kajiado",
      description:
        "Le parc national d'Amboseli offre l'image iconique de l'Afrique : des éléphants marchant sous la silhouette enneigée du Kilimandjaro. Un des meilleurs parcs pour photographier les éléphants en très grands troupeaux.",
      wikipedia: "File:Kilimanjaro_from_Amboseli.jpg",
      tags: ["Éléphants", "Kilimandjaro", "Safari", "Photographie", "Randonnée"],
      mustSee: [
        { name: "Éléphants devant le Kilimandjaro", wikipedia: "African_bush_elephant" },
        { name: "Lac Amboseli (flamants)", wikipedia: "Flamingo" },
        { name: "Kilimandjaro (vue depuis Kenya)", wikipedia: "Mount_Kilimanjaro" },
      
      ],
    },
    {
      id: 3,
      name: "Nairobi",
      region: "Nairobi",
      description:
        "La seule capitale au monde avec un parc national dans ses faubourgs : Nairobi National Park, où lions et girafes évoluent avec la skyline en arrière-plan. La ville est aussi le hub gastronomique de l'Afrique de l'Est.",
      wikipedia: "Nairobi",
      tags: ["Ville", "Faune", "Culture", "Gastronomie"],
      mustSee: [
        { name: "Nairobi National Park (lions & skyline)", wikipedia: "Nairobi_National_Park" },
        { name: "Centre des girafes de Nairobi", wikipedia: "Rothschild's_giraffe" },
        { name: "Karen Blixen Museum (Out of Africa)", wikipedia: "File:Karen blixen museum in nairobi kenya 02.jpg" },
        { name: "Marché Maasai", wikipedia: "File:The Maasai Market Vendors.jpg" },
      ],
    },
    {
      id: 4,
      name: "Côte swahilie — Mombasa & Zanzibar",
      region: "Côte",
      description:
        "La côte kényane offre des plages paradisiaques aux eaux turquoise, des villes swahilies historiques (Lamu UNESCO) et une culture métissée arabo-africaine unique.",
      wikipedia: "Mombasa",
      tags: ["Plage", "Histoire", "Culture", "Plongée", "UNESCO", "Architecture"],
      mustSee: [
        { name: "Fort Jésus de Mombasa (UNESCO)", wikipedia: "Fort_Jesus" },
        { name: "Lamu — vieille ville (UNESCO)", wikipedia: "Lamu" },
        { name: "Plages de Diani Beach", wikipedia: "Diani_Beach" },
        { name: "Réserve marine de Watamu", wikipedia: "File:Watamu Marine Park.JPG" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Kenya offre un large spectre de prix : des camps de camping aux lodges de luxe. Les safaris sont l'investissement principal. Les droits d'entrée dans les parcs sont en dollars.",
    currency: "KES",
    exchangeRate: "1€ ≈ 145 KES",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / camping", price: "15–35 €", detail: "Hors parcs nationaux" },
          { label: "Lodge mid-range", price: "100–200 €", detail: "Safari lodge avec repas" },
          { label: "Tented camp luxe", price: "400–1 000 €", detail: "All-inclusive dans la Mara" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Ugali, nyama choma, mandazi", price: "2–5 €", detail: "Cuisine locale traditionnelle" },
          { label: "Restaurant local / Nairobi", price: "8–15 €", detail: "Bonne cuisine kényane" },
          { label: "Dîner dans un lodge safari", price: "40–80 €", detail: "Inclus dans all-inclusive" },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: "Transport",
        items: [
          { label: "Vol Nairobi–Masai Mara (30 min)", price: "150–250 €", detail: "Indispensable, recommandé" },
          { label: "Location 4x4 safari / jour", price: "80–150 €", detail: "Avec chauffeur-guide" },
          { label: "Matatu (minibus local)", price: "1–3 €", detail: "Trajet interurbain" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Droit d'entrée Masai Mara/jour", price: "50–80 €", detail: "Résidents non-africains" },
          { label: "Montgolfière (1,5h)", price: "400–500 €", detail: "Expérience unique" },
          { label: "Visite village Maasai", wikipedia: "Maasai_people", price: "10–25 €", detail: "Participation aux danses" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Hors parcs nationaux : guesthouse + matatu + cuisine locale", color: "#22c55e" },
      { type: "Confort", daily: "150–300 €/j", desc: "Lodge safari mid-range + game drives + repas inclus", color: "#3b82f6" },
      { type: "Luxe", daily: "500 €+/j", desc: "Tented camp 5★ all-inclusive + vols privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Nairobi (2j) → Amboseli (2j) → Masai Mara (4j) → Mombasa / côte (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nairobi", amount: "500–800 €" },
            { label: "Hébergement (10 nuits)", amount: "600–900 €" },
            { label: "Vols intérieurs + safaris", amount: "600–900 €" },
            { label: "Droits d'entrée parcs", amount: "300–500 €" },
            { label: "Nourriture & imprévus", amount: "300–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nairobi", amount: "600–900 €" },
            { label: "Lodges safari (10 nuits)", amount: "1 500–2 500 €" },
            { label: "Vols intérieurs + safaris guidés", amount: "1 000–1 500 €" },
            { label: "Droits d'entrée parcs", amount: "400–600 €" },
            { label: "Extras & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nairobi (Business)", amount: "3 000–5 000 €" },
            { label: "Tented camps & lodges 5★ (10 nuits)", amount: "4 000–8 000 €" },
            { label: "Vols charter privés", amount: "2 000–4 000 €" },
            { label: "Montgolfière & expériences", amount: "800–1 500 €" },
            { label: "Imprévus", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~8,5h (Kenya Airways direct, Air France via escale)" },
    { icon: "🪪", label: "Visa",              value: "e-Visa en ligne (~51 USD, 90 jours) — etakenya.go.ke" },
    { icon: "💰", label: "Monnaie",           value: "Shilling (1€ ≈ 145 KES) — dollars acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Swahili + anglais (officielle)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 240 V (comme UK)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture, SIM locale ~5€ (Safaricom)" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen OBLIGATOIRE — fièvre jaune si certaines zones" },
  ],
};
