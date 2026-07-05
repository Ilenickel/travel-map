export const CAMEROON = {
  code: "CMR",
  numericId: 120,
  name: { fr: "Cameroun", en: "Cameroon" },
  emoji: "🇨🇲",
  capital: { fr: "Yaoundé", en: "Yaoundé" },
  language: { fr: "Français, Anglais, Pidgin, Fulfulde, Bassa", en: "French, English, Pidgin, Fulfulde, Bassa" },
  currency: { fr: "Franc CFA (XAF)", en: "CFA Franc (XAF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 45, budgetMid: 100,
    tripMin: 1800, tripMid: 3500,
  },
  description: {
    fr: "Le Cameroun est surnommé 'l'Afrique en miniature' : désert du Sahara au nord avec le lac Tchad, savane, forêt tropicale dense du bassin du Congo (gorilles et chimpanzés), côte atlantique avec le mont Cameroun (4 095m, volcan actif), et la diversité culturelle de 300 ethnies. Douala sa métropole, Kribi et ses plages, et le Nord avec les Kirdi et les sultanats peuls.",
    en: "Cameroon is nicknamed 'Africa in miniature': Sahara desert in the north with Lake Chad, savannah, dense Congo Basin rainforest (home to gorillas and chimpanzees), an Atlantic coastline with Mount Cameroon (4,095m, an active volcano), and the cultural diversity of 300 ethnic groups. Douala its metropolis, Kribi and its beaches, and the North with the Kirdi people and Fulani sultanates.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March" },
      label: { fr: "Saison sèche (nord et centre)", en: "Dry season (north and centre)" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour le nord (Maroua, Waza) et les parcs nationaux. Centre et sud plus pluvieux mais praticables. Températures agréables 22–30°C.",
        en: "Ideal for the north (Maroua, Waza) and national parks. Centre and south are rainier but still manageable. Pleasant temperatures of 22–30°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Saison des pluies (sud)", en: "Rainy season (south)" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes au sud et centre (200–400mm/mois), routes difficiles en forêt. Nord sec mais très chaud (35–40°C).",
        en: "Heavy rainfall in the south and centre (200–400mm/month), difficult forest roads. The north is dry but very hot (35–40°C).",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "yaounde",
      name: "Yaoundé",
      region: { fr: "Centre", en: "Centre" },
      data: [
        { month: "Jan", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Mar", temp: 25, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 24, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 23, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 22, rain: 60,  icon: "⛅" },
        { month: "Aoû", temp: 22, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 220, icon: "🌧️" },
        { month: "Oct", temp: 23, rain: 280, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 100, icon: "⛅" },
        { month: "Déc", temp: 24, rain: 20,  icon: "☀️" },
      ],
    },
    {
      id: "maroua",
      name: "Maroua",
      region: { fr: "Extrême-Nord", en: "Far North" },
      data: [
        { month: "Jan", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 5,   icon: "🌡️" },
        { month: "Avr", temp: 36, rain: 20,  icon: "🌡️" },
        { month: "Mai", temp: 35, rain: 60,  icon: "🌡️" },
        { month: "Jun", temp: 31, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 31, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Déc", temp: 26, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Parc de Waza — Éléphants du Sahel", en: "Waza National Park — Sahel Elephants" },
      region: { fr: "Extrême-Nord", en: "Far North" },
      description: {
        fr: "Le Parc national de Waza est le plus accessible et le plus riche en faune du Cameroun : éléphants (la plus grande population du pays), lions, girafes, autruches et hippotragues dans une savane sahélienne spectaculaire. Meilleur en saison sèche (novembre–avril) quand les animaux se concentrent autour des points d'eau.",
        en: "Waza National Park is Cameroon's most accessible and wildlife-rich park: elephants (the country's largest population), lions, giraffes, ostriches and roan antelopes in a spectacular Sahelian savannah. Best during the dry season (November–April) when animals gather around waterholes.",
      },
      wikipedia: "Waza_National_Park",
      tags: ["Safari", "Éléphants", "Lions", "Savane"],
      mustSee: [
        { name: { fr: "Safari Waza — éléphants, girafes et lions en saison sèche", en: "Waza safari — elephants, giraffes and lions in the dry season" }, wikipedia: "Waza_National_Park" },
        { name: { fr: "Sultanat de Maroua — palais du sultan peul", en: "Maroua Sultanate — palace of the Fulani sultan" }, wikipedia: "Maroua" },
        { name: { fr: "Mont Mandara et villages perchés Kirdi", en: "Mandara Mountains and perched Kirdi villages" }, wikipedia: "Mandara_Mountains" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mont Cameroun — Volcan et ascension", en: "Mount Cameroon — Volcano and Climb" },
      region: { fr: "Sud-Ouest", en: "Southwest" },
      description: {
        fr: "Le mont Cameroun (4 095m) est le plus haut sommet d'Afrique de l'Ouest et de Centrale : un volcan actif (dernière éruption 1999) dont l'ascension de 3 jours traverse toutes les zones de végétation, de la forêt tropicale aux laves récentes. La ville de Buea est la base de départ. Limbe, sur la côte, complète le circuit avec ses plages de sable noir volcanique.",
        en: "Mount Cameroon (4,095m) is the highest peak in West and Central Africa: an active volcano (last erupted in 1999) whose three-day ascent crosses every vegetation zone, from rainforest to recent lava flows. The town of Buea is the starting base. Limbe, on the coast, rounds out the trip with its black volcanic sand beaches.",
      },
      wikipedia: "Mount_Cameroon",
      tags: ["Volcan", "Randonnée", "Altitude", "Forêt"],
      mustSee: [
        { name: { fr: "Ascension mont Cameroun (3j, guide obligatoire)", en: "Mount Cameroon ascent (3 days, guide required)" }, wikipedia: "Mount_Cameroon" },
        { name: { fr: "Plages de sable noir de Limbe", en: "Limbe's black sand beaches" }, wikipedia: "File:Limbe view with Bioko.jpg" },
        { name: { fr: "Wildlife Centre de Limbe — chimpanzés et gorilles sauvés", en: "Limbe Wildlife Centre — rescued chimpanzees and gorillas" }, wikipedia: "File:Limbé Wildlife Centre (4).jpg" },
        { name: { fr: "Plantation de thé de Tole", en: "Tole tea plantation" }, wikipedia: "Mount_Cameroon" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kribi — Plages et chutes", en: "Kribi — Beaches and Waterfalls" },
      region: { fr: "Océan", en: "Ocean" },
      description: {
        fr: "Kribi est la plus belle station balnéaire du Cameroun : plages de sable blanc bordées de palmiers avec la forêt tropicale en arrière-plan. Les chutes de la Lobé sont uniques au monde : une rivière qui se jette directement dans l'océan Atlantique depuis une falaise rocheuse. À proximité : les Pygmées Baka et la forêt primaire.",
        en: "Kribi is Cameroon's finest seaside resort town: white sand beaches lined with palm trees, with rainforest as a backdrop. The Lobé Falls are unique in the world: a river that plunges directly into the Atlantic Ocean from a rocky cliff. Nearby: the Baka Pygmies and primary forest.",
      },
      wikipedia: "Kribi",
      tags: ["Plage", "Cascades", "Forêt", "Pygmées"],
      mustSee: [
        { name: { fr: "Chutes de la Lobé — chutes tombant directement dans l'océan", en: "Lobé Falls — waterfalls plunging directly into the ocean" }, wikipedia: "File:Les chutes de la lobé kribi cameroon1.jpg" },
        { name: { fr: "Plages de Kribi — sable blanc et palmiers", en: "Kribi beaches — white sand and palm trees" }, wikipedia: "Kribi" },
        { name: { fr: "Rencontre avec les Pygmées Baka (forêt)", en: "Meeting the Baka Pygmies (forest)" }, wikipedia: "File:Baka Drf Dja.JPG" },
        { name: { fr: "Pêche et fruits de mer frais sur la plage", en: "Fishing and fresh seafood on the beach" }, wikipedia: "File:Couché du soleil kribi.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bafut & Chefferies Bamoun", en: "Bafut & Bamoun Chiefdoms" },
      region: { fr: "Ouest / Nord-Ouest", en: "West / Northwest" },
      description: {
        fr: "Les chefferies traditionnelles de l'Ouest camerounais sont parmi les plus vivantes d'Afrique : le palais de la chefferie de Bafut avec ses danses Abakwa, les tisserands Ndop, et le palais du Sultan des Bamoun à Foumban avec son musée de 2 000 pièces retraçant l'histoire du royaume Bamoun. L'Ouest camerounais est aussi une région agricole spectaculaire aux paysages de montagnes.",
        en: "The traditional chiefdoms of western Cameroon are among the most vibrant in Africa: the Bafut chiefdom's palace with its Abakwa dances, the Ndop weavers, and the Bamoun Sultan's palace in Foumban with its 2,000-piece museum tracing the history of the Bamoun kingdom. Western Cameroon is also a spectacular farming region with mountain landscapes.",
      },
      wikipedia: "Foumban",
      tags: ["Royauté", "Culture", "Artisanat", "Montagne"],
      mustSee: [
        { name: { fr: "Palais du Sultan des Bamoun à Foumban + musée", en: "Bamoun Sultan's Palace in Foumban + museum" }, wikipedia: "Foumban" },
        { name: { fr: "Chefferie de Bafut et danse Abakwa sacrée", en: "Bafut chiefdom and the sacred Abakwa dance" }, wikipedia: "File:Bafut Palace - EcoVillage - Cameroon.JPG" },
        { name: { fr: "Marché de Foumban — bronzes, masques et tissus", en: "Foumban market — bronzes, masks and fabrics" }, wikipedia: "File:Cameroon - Foumban market.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Cameroun est abordable mais les parcs nationaux et les circuits guidés représentent un coût significatif. Douala est la ville la plus chère. La cuisine camerounaise est excellente et bon marché dans les restaurants locaux.",
      en: "Cameroon is affordable, but national parks and guided tours represent a significant expense. Douala is the most expensive city. Cameroonian cuisine is excellent and cheap in local restaurants.",
    },
    currency: "XAF",
    exchangeRate: "1€ = 655 XAF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / chambre en lodge", en: "Guesthouse / lodge room" }, price: "20–40 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic air conditioning" } },
          { label: { fr: "Hôtel 3★ (Yaoundé, Douala, Kribi)", en: "3-star hotel (Yaoundé, Douala, Kribi)" }, price: "60–100 €", detail: { fr: "Clim, wifi, sécurité", en: "AC, wifi, security" } },
          { label: { fr: "Hôtel de luxe (Hilton Douala, Yaoundé Hilton)", en: "Luxury hotel (Hilton Douala, Yaoundé Hilton)" }, price: "150–250 €", detail: { fr: "Standard international", en: "International standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Ndolé / eru dans un resto local", en: "Ndolé / eru at a local restaurant" }, price: "2–6 €", detail: { fr: "Cuisine camerounaise typique", en: "Typical Cameroonian cuisine" } },
          { label: { fr: "Restaurant mid-range Yaoundé", en: "Mid-range restaurant in Yaoundé" }, price: "8–20 €", detail: { fr: "Grillades, poisson, bière locale", en: "Grilled meat, fish, local beer" } },
          { label: { fr: "Restaurant gastronomique Douala", en: "Fine dining in Douala" }, price: "25–50 €", detail: { fr: "Fruits de mer, cuisine française", en: "Seafood, French cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus express (Yaoundé–Douala, 4h)", en: "Express bus (Yaoundé–Douala, 4h)" }, price: "5–10 €", detail: { fr: "Compagnies confortables (Général Express)", en: "Comfortable companies (Général Express)" } },
          { label: { fr: "Vol intérieur Douala–Maroua", en: "Domestic flight Douala–Maroua" }, price: "80–150 €", detail: { fr: "Recommandé pour éviter les longues routes", en: "Recommended to avoid long road trips" } },
          { label: { fr: "4x4 avec chauffeur / journée", en: "4x4 with driver / day" }, price: "70–120 €", detail: { fr: "Indispensable pour les parcs", en: "Essential for the parks" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Safari Waza (guide + jeep, journée)", en: "Waza safari (guide + jeep, full day)" }, price: "50–90 €", detail: { fr: "Depuis Maroua", en: "From Maroua" } },
          { label: { fr: "Ascension mont Cameroun (3 jours)", en: "Mount Cameroon ascent (3 days)" }, price: "150–250 €", detail: { fr: "Guide + porteurs + hébergement", en: "Guide + porters + accommodation" } },
          { label: { fr: "Visite Foumban + Bafut avec guide", en: "Foumban + Bafut guided visit" }, price: "30–60 €", detail: { fr: "Journée depuis Bafoussam", en: "Day trip from Bafoussam" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Guesthouse + cuisine locale + bus", en: "Guesthouse + local food + bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "100–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3-star hotel + restaurants + guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "250 €+/j", desc: { fr: "Grand hôtel + safaris privés + vols intérieurs", en: "Grand hotel + private safaris + domestic flights" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "14 jours", en: "14 days" },
      route: { fr: "Douala (2j) → Yaoundé (2j) → Bafoussam / Ouest (3j) → Mont Cameroun / Limbe (3j) → Kribi (2j) → Maroua / Waza (2j)", en: "Douala (2d) → Yaoundé (2d) → Bafoussam / West (3d) → Mount Cameroon / Limbe (3d) → Kribi (2d) → Maroua / Waza (2d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Douala", en: "Return flight Paris–Douala" }, amount: "550–800 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "400–650 €" },
            { label: { fr: "Transports locaux + 1 vol intérieur", en: "Local transport + 1 domestic flight" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–400 €" },
            { label: { fr: "Guides & activités", en: "Guides & activities" }, amount: "250–450 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Douala", en: "Return flight Paris–Douala" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 000–1 600 €" },
            { label: { fr: "4x4 + vols intérieurs", en: "4x4 + domestic flights" }, amount: "700–1 200 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "500–900 €" },
            { label: { fr: "Guides & safaris", en: "Guides & safaris" }, amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~7h direct (Air France, Corsair, Camair-Co) vers Douala ou Yaoundé", en: "~7h direct (Air France, Corsair, Camair-Co) to Douala or Yaoundé" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (~90€) ou ambassade. Valable 30–90 jours.", en: "Visa required — e-Visa available online (~90€) or via embassy. Valid 30–90 days." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA BEAC (XAF). 1€ = 655 XAF taux fixe. Espèces indispensables hors grandes villes.", en: "CFA BEAC Franc (XAF). 1€ = 655 XAF fixed rate. Cash essential outside major cities." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français et Anglais (officiels). Français prédominant au centre et sud. Anglais au nord-ouest et sud-ouest.", en: "French and English (official). French predominant in the centre and south. English in the northwest and southwest." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable. Fièvre typhoïde et hépatites A/B recommandés.", en: "Yellow fever vaccine mandatory. Antimalarials essential. Typhoid fever and hepatitis A/B vaccines recommended." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture 4G dans les grandes villes. Zones reculées sans réseau. SIM MTN locale recommandée.", en: "Good 4G coverage in major cities. Remote areas without signal. Local MTN SIM recommended." } },
  ],
};
