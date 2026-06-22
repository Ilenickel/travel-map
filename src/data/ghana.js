export const GHANA = {
  code: "GHA",
  numericId: 288,
  name: "Ghana",
  emoji: "🇬🇭",
  capital: "Accra",
  language: "Anglais, Akan, Ewe, Dagbani",
  currency: "Cedi ghanéen (GHS)",
  timezone: "UTC+0",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "Le Ghana est le pays d'Afrique de l'Ouest le plus stable et accueillant pour le tourisme : berceaux de la traite négrière avec les châteaux coloniaux de Cape Coast et Elmina (UNESCO), forêts tropicales et primates sauvages du parc de Kakum, tissage du kente à Kumasi capitale des Ashanti, et une scène musicale (highlife, afrobeats) rayonnant sur toute l'Afrique.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche (nord et sud)",
      color: "#22c55e",
      description:
        "Meilleure période : harmattan doux, ciel dégagé, conditions idéales pour les parcs et la côte. Températures supportables 25–30°C.",
      icon: "☀️",
    },
    {
      months: "Juin – Août",
      label: "Grande saison des pluies",
      color: "#ef4444",
      description:
        "Fortes pluies au sud (200–300mm/mois), routes difficiles. Nord plus sec mais chaud. Moins favorable.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "accra",
      name: "Accra",
      region: "Côte atlantique",
      data: [
        { month: "Jan", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 30,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 40,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 20,  icon: "⛅" },
      ],
    },
    {
      id: "kumasi",
      name: "Kumasi",
      region: "Région Ashanti (centre)",
      data: [
        { month: "Jan", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Fév", temp: 29, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 30, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 30, rain: 140, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 110, icon: "🌧️" },
        { month: "Aoû", temp: 25, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 160, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 180, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 20,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Cape Coast & Elmina — Châteaux esclavagistes",
      region: "Région Centrale",
      description:
        "Cape Coast Castle et Elmina Castle (tous deux UNESCO) sont les témoins les plus bouleversants de la traite atlantique : les \"Door of No Return\" par lesquelles 12 millions d'Africains ont embarqué pour l'esclavage. Une visite profondément émouvante et essentielle pour comprendre l'histoire de l'Afrique.",
      wikipedia: "Cape_Coast_Castle",
      tags: ["Histoire", "UNESCO", "Émouvant", "Côte"],
      mustSee: [
        { name: "Cape Coast Castle (UNESCO) — Door of No Return", wikipedia: "Cape_Coast_Castle" },
        { name: "Elmina Castle (UNESCO) — le plus ancien fort européen d'Afrique subsaharienne", wikipedia: "Elmina_Castle" },
        { name: "Parc national de Kakum — pont suspendu dans la canopée (40m)", wikipedia: "Kakum_National_Park" },
        { name: "Plage de Anomabo", wikipedia: "File:Anomabo Beach 01.jpg" },
      ],
    },
    {
      id: 2,
      name: "Kumasi — Capitale Ashanti",
      region: "Région Ashanti",
      description:
        "Kumasi est le cœur culturel du Ghana : le palais du roi Ashanti (Manhyia Palace), le grand marché Kejetia (le plus grand d'Afrique de l'Ouest), les ateliers de tissage du kente (tissu royal aux couleurs vives), et le musée national Ashanti. Une immersion dans la civilisation Ashanti, l'une des plus puissantes d'Afrique.",
      wikipedia: "Kumasi",
      tags: ["Culture", "Artisanat", "Marché", "Royauté"],
      mustSee: [
        { name: "Grand marché Kejetia — le plus grand d'Afrique de l'Ouest", wikipedia: "Kejetia_Market" },
        { name: "Tissage du kente à Bonwire", wikipedia: "Kente_cloth" },
        { name: "Manhyia Palace Museum — résidence du roi Ashanti", wikipedia: "Manhyia_Palace" },
        { name: "Musée national Ashanti", wikipedia: "File:Historic_Statues_at_the_Africa_Culture_-_Kumasi_Centre_for_National_Culture.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mole National Park — Éléphants et savane",
      region: "Région Nord",
      description:
        "Mole est le plus grand parc national du Ghana (4 840 km²) : des éléphants en liberté que l'on peut observer à pied depuis le lodge perché sur un escarpement surplombant les points d'eau. Buffles, phacochères, hippotragues, cobes. L'un des safaris pédestres les plus accessibles d'Afrique.",
      wikipedia: "Mole_National_Park",
      tags: ["Safari", "Éléphants", "Nature", "Savane"],
      mustSee: [
        { name: "Safari pédestre avec guide — éléphants au point d'eau", wikipedia: "Mole_National_Park" },
        { name: "Larabanga Mosque — mosquée en banco la plus ancienne du Ghana (XIIIe s.)", wikipedia: "Larabanga_Mosque" },
        { name: "Village de Larabanga et arbre sacré", wikipedia: "File:The Larabanga Mosque - Northern Ghana.jpg" },
        { name: "Observation hippotragues et buffles", wikipedia: "File:Elephants at Mole National Park 01.jpg" },
      ],
    },
    {
      id: 4,
      name: "Accra — Afrobeats et art contemporain",
      region: "Grand Accra",
      description:
        "Accra est l'une des capitales les plus dynamiques d'Afrique : le quartier de Jamestown avec son phare colonial et ses boxeurs en plein air, le marché Makola, Labadi Beach la nuit, et une scène artistique contemporaine (galleries, street art) qui rayonne sur tout le continent. Berceau de l'afrobeats.",
      wikipedia: "Accra",
      tags: ["Capitale", "Art", "Musique", "Plage"],
      mustSee: [
        { name: "Kwame Nkrumah Memorial Park", wikipedia: "File:Kwame Nkrumah artworks at Kwame Nkrumah Mausoleum.jpg" },
        { name: "Labadi Beach — nuits afrobeats", wikipedia: "Labadi_Beach" },
        { name: "National Museum of Ghana", wikipedia: "National_Museum_of_Ghana" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Ghana est abordable pour un touriste occidental, bien que plus cher que certains voisins (Togo, Bénin). Accra est la ville la plus chère. La cuisine locale est excellente et bon marché. Le cedi a connu une forte dévaluation ces dernières années.",
    currency: "GHS",
    exchangeRate: "1€ ≈ 16–18 GHS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre chez l'habitant", price: "20–40 €", detail: "Quartiers locaux" },
          { label: "Hôtel 3★ confort (Accra, Cape Coast)", price: "60–100 €", detail: "Clim, wifi, petit-déj" },
          { label: "Hôtel de luxe (Accra)", price: "150–250 €", detail: "Piscine, restaurant" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Jollof rice / fufu dans un chop bar", price: "2–5 €", detail: "Cuisine locale populaire" },
          { label: "Restaurant mid-range Accra", price: "10–20 €", detail: "Menu complet + boisson" },
          { label: "Restaurant gastronomique Accra", price: "30–60 €", detail: "Cuisine internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Tro-tro (minibus collectif) — trajet urbain", price: "0,20–0,50 €", detail: "Transport local populaire" },
          { label: "Bus inter-villes (Accra–Kumasi, 4h)", price: "5–10 €", detail: "VIP Bus confortable" },
          { label: "Location voiture avec chauffeur / journée", price: "50–80 €", detail: "Recommandé pour Mole" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Cape Coast Castle (avec visite guidée)", price: "10–15 €", detail: "1h30 de visite émotionnelle" },
          { label: "Safari pédestre Mole National Park", price: "20–35 €", detail: "Guide obligatoire, 2–3h" },
          { label: "Atelier tissage kente à Bonwire", price: "5–15 €", detail: "Démonstration + achat possible" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Guesthouse + cuisine locale + tro-tro", color: "#22c55e" },
      { type: "Confort", daily: "100–160 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Hôtel 5★ Accra + safaris privés", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Accra (3j) → Cape Coast / Elmina (2j) → Kumasi (3j) → Mole National Park (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Accra", amount: "500–800 €" },
            { label: "Hébergement (12 nuits)", amount: "300–500 €" },
            { label: "Transports locaux", amount: "150–250 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Activités & entrées", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Accra", amount: "600–900 €" },
            { label: "Hébergement (12 nuits)", amount: "900–1 400 €" },
            { label: "Transports / chauffeur", amount: "400–600 €" },
            { label: "Nourriture & sorties", amount: "400–700 €" },
            { label: "Activités & safaris", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h direct (Air France, British Airways via Londres, Ethiopian Airlines)" },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire — e-Visa en ligne (~90 USD, ghana.gov.gh/visa) ou ambassade. Valable 30–60 jours." },
    { icon: "💰", label: "Monnaie",           value: "Cedi ghanéen (GHS). Taux variable — prévoir euros à changer sur place." },
    { icon: "🗣️", label: "Langue",            value: "Anglais (officiel) — communication facile. Akan / Twi couramment parlé." },
    { icon: "🔌", label: "Prise électrique",  value: "Type G (britannique) — 230V. Adaptateur recommandé." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable (Malarone ou Doxycycline)." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille ou filtre indispensable." },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture 4G à Accra et grandes villes. Roaming possible, SIM locale recommandée." },
  ],
};
