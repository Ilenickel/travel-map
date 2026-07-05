export const GHANA = {
  code: "GHA",
  numericId: 288,
  name: { fr: "Ghana", en: "Ghana" },
  emoji: "🇬🇭",
  capital: { fr: "Accra", en: "Accra" },
  language: { fr: "Anglais, Akan, Ewe, Dagbani", en: "English, Akan, Ewe, Dagbani" },
  currency: { fr: "Cedi ghanéen (GHS)", en: "Ghanaian cedi (GHS)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "Le Ghana est le pays d'Afrique de l'Ouest le plus stable et accueillant pour le tourisme : berceaux de la traite négrière avec les châteaux coloniaux de Cape Coast et Elmina (UNESCO), forêts tropicales et primates sauvages du parc de Kakum, tissage du kente à Kumasi capitale des Ashanti, et une scène musicale (highlife, afrobeats) rayonnant sur toute l'Afrique.",
    en: "Ghana is West Africa's most stable and welcoming country for tourism: a cradle of the slave trade with the colonial castles of Cape Coast and Elmina (UNESCO), tropical forests and wild primates in Kakum National Park, kente weaving in Kumasi, capital of the Ashanti, and a music scene (highlife, afrobeats) that shines across the continent.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison sèche (nord et sud)", en: "Dry season (north and south)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : harmattan doux, ciel dégagé, conditions idéales pour les parcs et la côte. Températures supportables 25–30°C.",
        en: "Best time to go: mild harmattan winds, clear skies, and ideal conditions for the parks and the coast. Pleasant temperatures of 25–30°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Grande saison des pluies", en: "Main rainy season" },
      color: "#ef4444",
      description: {
        fr: "Fortes pluies au sud (200–300mm/mois), routes difficiles. Nord plus sec mais chaud. Moins favorable.",
        en: "Heavy rain in the south (200–300 mm/month) and difficult roads. The north is drier but still hot. Less favourable overall.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "accra",
      name: "Accra",
      region: { fr: "Côte atlantique", en: "Atlantic coast" },
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
      region: { fr: "Région Ashanti (centre)", en: "Ashanti Region (central Ghana)" },
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
      name: { fr: "Cape Coast & Elmina — Châteaux esclavagistes", en: "Cape Coast & Elmina — Slave trade castles" },
      region: { fr: "Région Centrale", en: "Central Region" },
      description: {
        fr: "Cape Coast Castle et Elmina Castle (tous deux UNESCO) sont les témoins les plus bouleversants de la traite atlantique : les \"Door of No Return\" par lesquelles 12 millions d'Africains ont embarqué pour l'esclavage. Une visite profondément émouvante et essentielle pour comprendre l'histoire de l'Afrique.",
        en: "Cape Coast Castle and Elmina Castle (both UNESCO-listed) are the most moving witnesses to the Atlantic slave trade: the \"Door of No Return\" through which 12 million Africans were forced into slavery. A deeply emotional visit, and an essential one for understanding Africa's history.",
      },
      wikipedia: "Cape_Coast_Castle",
      tags: ["Histoire", "UNESCO", "Émouvant", "Côte", "Architecture"],
      mustSee: [
        { name: { fr: "Cape Coast Castle (UNESCO) — Door of No Return", en: "Cape Coast Castle (UNESCO) — Door of No Return" }, wikipedia: "Cape_Coast_Castle" },
        { name: { fr: "Elmina Castle (UNESCO) — le plus ancien fort européen d'Afrique subsaharienne", en: "Elmina Castle (UNESCO) — the oldest European fort in sub-Saharan Africa" }, wikipedia: "Elmina_Castle" },
        { name: { fr: "Parc national de Kakum — pont suspendu dans la canopée (40m)", en: "Kakum National Park — canopy walkway (40m high)" }, wikipedia: "Kakum_National_Park" },
        { name: { fr: "Plage de Anomabo", en: "Anomabo Beach" }, wikipedia: "File:Anomabo Beach 01.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Kumasi — Capitale Ashanti", en: "Kumasi — Ashanti capital" },
      region: { fr: "Région Ashanti", en: "Ashanti Region" },
      description: {
        fr: "Kumasi est le cœur culturel du Ghana : le palais du roi Ashanti (Manhyia Palace), le grand marché Kejetia (le plus grand d'Afrique de l'Ouest), les ateliers de tissage du kente (tissu royal aux couleurs vives), et le musée national Ashanti. Une immersion dans la civilisation Ashanti, l'une des plus puissantes d'Afrique.",
        en: "Kumasi is the cultural heart of Ghana: the Ashanti king's palace (Manhyia Palace), Kejetia Market (the largest in West Africa), kente weaving workshops (the brightly coloured royal cloth), and the Ashanti National Museum. It is a deep dive into Ashanti civilisation, one of the most powerful in Africa.",
      },
      wikipedia: "Kumasi",
      tags: ["Culture", "Artisanat", "Marché", "Royauté", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Grand marché Kejetia — le plus grand d'Afrique de l'Ouest", en: "Kejetia Market — the largest in West Africa" }, wikipedia: "Kejetia_Market" },
        { name: { fr: "Tissage du kente à Bonwire", en: "Kente weaving in Bonwire" }, wikipedia: "Kente_cloth" },
        { name: { fr: "Manhyia Palace Museum — résidence du roi Ashanti", en: "Manhyia Palace Museum — residence of the Ashanti king" }, wikipedia: "Manhyia_Palace" },
        { name: { fr: "Musée national Ashanti", en: "Ashanti National Museum" }, wikipedia: "File:Historic_Statues_at_the_Africa_Culture_-_Kumasi_Centre_for_National_Culture.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Mole National Park — Éléphants et savane", en: "Mole National Park — Elephants and savannah" },
      region: { fr: "Région Nord", en: "Northern Region" },
      description: {
        fr: "Mole est le plus grand parc national du Ghana (4 840 km²) : des éléphants en liberté que l'on peut observer à pied depuis le lodge perché sur un escarpement surplombant les points d'eau. Buffles, phacochères, hippotragues, cobes. L'un des safaris pédestres les plus accessibles d'Afrique.",
        en: "Mole is Ghana's largest national park (4,840 km²): free-roaming elephants that can be observed on foot from the lodge perched on an escarpment above the waterholes. Buffalo, warthogs, roan antelope and kob. One of the most accessible walking safaris in Africa.",
      },
      wikipedia: "Mole_National_Park",
      tags: ["Safari", "Éléphants", "Nature", "Savane"],
      mustSee: [
        { name: { fr: "Safari pédestre avec guide — éléphants au point d'eau", en: "Guided walking safari — elephants at the waterhole" }, wikipedia: "Mole_National_Park" },
        { name: { fr: "Larabanga Mosque — mosquée en banco la plus ancienne du Ghana (XIIIe s.)", en: "Larabanga Mosque — Ghana's oldest mud-and-stick mosque (13th century)" }, wikipedia: "Larabanga_Mosque" },
        { name: { fr: "Village de Larabanga et arbre sacré", en: "Larabanga village and sacred tree" }, wikipedia: "File:The Larabanga Mosque - Northern Ghana.jpg" },
        { name: { fr: "Observation hippotragues et buffles", en: "Roan antelope and buffalo spotting" }, wikipedia: "File:Elephants at Mole National Park 01.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Accra — Afrobeats et art contemporain", en: "Accra — Afrobeats and contemporary art" },
      region: { fr: "Grand Accra", en: "Greater Accra" },
      description: {
        fr: "Accra est l'une des capitales les plus dynamiques d'Afrique : le quartier de Jamestown avec son phare colonial et ses boxeurs en plein air, le marché Makola, Labadi Beach la nuit, et une scène artistique contemporaine (galleries, street art) qui rayonne sur tout le continent. Berceau de l'afrobeats.",
        en: "Accra is one of Africa's most dynamic capitals: the Jamestown district with its colonial lighthouse and open-air boxers, Makola Market, Labadi Beach at night, and a contemporary art scene (galleries, street art) that radiates across the continent. It is a cradle of afrobeats.",
      },
      wikipedia: "Accra",
      tags: ["Ville", "Art", "Musique", "Plage", "Gastronomie"],
      mustSee: [
        { name: "Kwame Nkrumah Memorial Park", wikipedia: "File:Kwame Nkrumah artworks at Kwame Nkrumah Mausoleum.jpg" },
        { name: { fr: "Labadi Beach — nuits afrobeats", en: "Labadi Beach — afrobeats nights" }, wikipedia: "Labadi_Beach" },
        { name: "National Museum of Ghana", wikipedia: "National_Museum_of_Ghana" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Ghana est abordable pour un touriste occidental, bien que plus cher que certains voisins (Togo, Bénin). Accra est la ville la plus chère. La cuisine locale est excellente et bon marché. Le cedi a connu une forte dévaluation ces dernières années.",
      en: "Ghana is affordable for a Western traveller, although it is pricier than some neighbouring countries (Togo, Benin). Accra is the most expensive city. Local food is excellent and inexpensive. The cedi has gone through a sharp devaluation in recent years.",
    },
    currency: "GHS",
    exchangeRate: "1€ ≈ 16–18 GHS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / homestay room" }, price: "20–40 €", detail: { fr: "Quartiers locaux", en: "Local neighbourhoods" } },
          { label: { fr: "Hôtel 3★ confort (Accra, Cape Coast)", en: "Comfortable 3★ hotel (Accra, Cape Coast)" }, price: "60–100 €", detail: { fr: "Clim, wifi, petit-déj", en: "A/C, Wi-Fi, breakfast" } },
          { label: { fr: "Hôtel de luxe (Accra)", en: "Luxury hotel (Accra)" }, price: "150–250 €", detail: { fr: "Piscine, restaurant", en: "Pool, restaurant" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Jollof rice / fufu dans un chop bar", en: "Jollof rice / fufu in a chop bar" }, price: "2–5 €", detail: { fr: "Cuisine locale populaire", en: "Popular local food" } },
          { label: { fr: "Restaurant mid-range Accra", en: "Mid-range restaurant in Accra" }, price: "10–20 €", detail: { fr: "Menu complet + boisson", en: "Full meal + drink" } },
          { label: { fr: "Restaurant gastronomique Accra", en: "Fine dining restaurant in Accra" }, price: "30–60 €", detail: { fr: "Cuisine internationale", en: "International cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Tro-tro (minibus collectif) — trajet urbain", en: "Tro-tro (shared minibus) — urban ride" }, price: "0,20–0,50 €", detail: { fr: "Transport local populaire", en: "Popular local transport" } },
          { label: { fr: "Bus inter-villes (Accra–Kumasi, 4h)", en: "Intercity bus (Accra–Kumasi, 4h)" }, price: "5–10 €", detail: { fr: "VIP Bus confortable", en: "Comfortable VIP Bus service" } },
          { label: { fr: "Location voiture avec chauffeur / journée", en: "Car with driver / day" }, price: "50–80 €", detail: { fr: "Recommandé pour Mole", en: "Recommended for Mole" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Cape Coast Castle (avec visite guidée)", en: "Cape Coast Castle entry (with guided tour)" }, price: "10–15 €", detail: { fr: "1h30 de visite émotionnelle", en: "1.5-hour emotional visit" } },
          { label: { fr: "Safari pédestre Mole National Park", en: "Mole National Park walking safari" }, price: "20–35 €", detail: { fr: "Guide obligatoire, 2–3h", en: "Guide mandatory, 2–3 hours" } },
          { label: { fr: "Atelier tissage kente à Bonwire", en: "Kente weaving workshop in Bonwire" }, price: "5–15 €", detail: { fr: "Démonstration + achat possible", en: "Demonstration + possible purchase" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + tro-tro", en: "Guesthouse + local food + tro-tro" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "100–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "250 €+/j", desc: { fr: "Hôtel 5★ Accra + safaris privés", en: "5★ hotel in Accra + private safaris" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Accra (3j) → Cape Coast / Elmina (2j) → Kumasi (3j) → Mole National Park (4j)",
        en: "Accra (3d) → Cape Coast / Elmina (2d) → Kumasi (3d) → Mole National Park (4d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Accra", en: "Return flight Paris–Accra" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "300–500 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–350 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Accra", en: "Return flight Paris–Accra" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "900–1 400 €" },
            { label: { fr: "Transports / chauffeur", en: "Transport / driver" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & going out" }, amount: "400–700 €" },
            { label: { fr: "Activités & safaris", en: "Activities & safaris" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h direct (Air France, British Airways via Londres, Ethiopian Airlines)", en: "~6h direct (Air France), or via London with British Airways / on Ethiopian Airlines" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — e-Visa en ligne (~90 USD, ghana.gov.gh/visa) ou ambassade. Valable 30–60 jours.", en: "Visa required — online e-visa (~USD 90, ghana.gov.gh/visa) or embassy application. Valid for 30–60 days." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Cedi ghanéen (GHS). Taux variable — prévoir euros à changer sur place.", en: "Ghanaian cedi (GHS). Exchange rate fluctuates — bring euros to change locally." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (officiel) — communication facile. Akan / Twi couramment parlé.", en: "English (official) — easy communication. Akan / Twi widely spoken." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G (britannique) — 230V. Adaptateur recommandé.", en: "Type G (British) — 230V. Adapter recommended." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable (Malarone ou Doxycycline).", en: "Yellow fever vaccination required. Anti-malaria medication is essential (Malarone or doxycycline)." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille ou filtre indispensable.", en: "Not safe to drink — bottled water or a filter is essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture 4G à Accra et grandes villes. Roaming possible, SIM locale recommandée.", en: "Good 4G coverage in Accra and major cities. Roaming may work, but a local SIM is recommended." } },
  ],
};
