export const HONDURAS = {
  code: "HND",
  numericId: 340,
  name: { fr: "Honduras", en: "Honduras" },
  emoji: "🇭🇳",
  capital: { fr: "Tegucigalpa", en: "Tegucigalpa" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Lempira (HNL)", en: "Lempira (HNL)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 30, budgetMid: 80,
    tripMin: 1200, tripMid: 2800,
  },
  description: {
    fr: "Le Honduras est la destination confidentielle d'Amérique centrale : Copán, l'une des grandes cités mayas classée UNESCO, les îles Bay Islands aux récifs parmi les plus riches de la Mésoamérique — et Utila, paradis mondial de la certification de plongée à petit prix.",
    en: "Honduras is Central America's under-the-radar destination: Copán, one of the great UNESCO-listed Maya cities; the Bay Islands, with some of the richest reefs in Mesoamerica; and Utila, a world-famous bargain destination for dive certification.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour Copán, les îles et les randonnées. Températures agréables, mer calme, excellent pour la plongée.",
        en: "Best time for Copán, the islands and hiking. Pleasant temperatures, calm seas and excellent diving conditions.",
      },
      icon: "🐚",
    },
    {
      months: { fr: "Mars – Juin", en: "March – June" },
      label: { fr: "Requins-baleines (Utila)", en: "Whale sharks (Utila)" },
      color: "#3b82f6",
      description: {
        fr: "Saison principale des requins-baleines à Utila (mars–juin). Eau chaude et claire malgré quelques pluies.",
        en: "Main whale shark season in Utila (March–June). Warm, clear water despite some rain.",
      },
      icon: "🦈",
    },
  ],

  weatherCities: [
    {
      id: "tegucigalpa",
      name: "Tegucigalpa",
      region: { fr: "Centre", en: "Central" },
      data: [
        { month: "Jan", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Mar", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 80,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 110, icon: "☀️" },
        { month: "Jul", temp: 24, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 90,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 110, icon: "☀️" },
        { month: "Oct", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 30,  icon: "☀️" },
        { month: "Déc", temp: 21, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "bay_islands",
      name: "Bay Islands (Roatán)",
      region: { fr: "Caraïbes", en: "Caribbean" },
      data: [
        { month: "Jan", temp: 26, rain: 100, icon: "☀️" },
        { month: "Fév", temp: 26, rain: 70,  icon: "☀️" },
        { month: "Mar", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 230, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Déc", temp: 26, rain: 130, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Copán",
      region: { fr: "Copán", en: "Copán" },
      description: {
        fr: "Copán est l'une des cités mayas les plus élaborées artistiquement : ses stèles sculptées, son Escalier Hiéroglyphique (la plus longue inscription maya du monde) et ses places cérémonielles rivalisant avec Tikal. Les aras rouges volent librement au-dessus du site.",
        en: "Copán is one of the most artistically sophisticated Maya cities: its carved stelae, Hieroglyphic Stairway (the longest Maya inscription in the world) and ceremonial plazas rival Tikal. Scarlet macaws fly freely above the site.",
      },
      wikipedia: "Copán",
      tags: ["UNESCO", "Mayas", "Archéologie", "Art"],
      mustSee: [
        { name: { fr: "Escalier Hiéroglyphique (2 200 glyphes)", en: "Hieroglyphic Stairway (2,200 glyphs)" }, wikipedia: "File:Stela_M_and_the_Hieroglyphic_Stairway_on_the_archeological_site_of_Copán,_a_mayan_city.jpg" },
        { name: { fr: "Acropole et temples sculptés", en: "Acropolis and carved temples" }, wikipedia: "Copán_Ruinas" },
        { name: { fr: "Macaw Mountain — aras rouges en liberté", en: "Macaw Mountain — free-flying scarlet macaws" }, wikipedia: "Scarlet_macaw" },
        { name: { fr: "Musée de la sculpture Maya de Copán", en: "Copán Maya Sculpture Museum" }, wikipedia: "File:Museo de la escultura de Copán en 2025 01.jpg" },
      ],
    },
    {
      id: 2,
      name: "Roatán",
      region: { fr: "Bay Islands", en: "Bay Islands" },
      description: {
        fr: "Roatán est l'île principale des Bay Islands, posée sur la barrière de corail mésoaméricaine. West Bay Beach figure parmi les plus belles plages des Caraïbes et les récifs y offrent une plongée exceptionnelle, accessibles en snorkel depuis la rive.",
        en: "Roatán is the main island of the Bay Islands, resting on the Mesoamerican Barrier Reef. West Bay Beach ranks among the most beautiful beaches in the Caribbean, and the reefs offer exceptional diving, with snorkelling spots accessible straight from the shore.",
      },
      wikipedia: "Roatán",
      tags: ["Plage", "Plongée", "Récifs", "Île"],
      mustSee: [
        { name: { fr: "West Bay Beach — plongée depuis la plage", en: "West Bay Beach — shore diving from the beach" }, wikipedia: "West_Bay,_Roatán" },
        { name: { fr: "Barrière corallienne mésoaméricaine", en: "Mesoamerican Barrier Reef" }, wikipedia: "Mesoamerican_Barrier_Reef_System" },
        { name: "Arch's Iguana & Marine Park", wikipedia: "File:Green iguana, Roatán, Honduras.jpg" },
        { name: { fr: "Tour en kayak de mer des mangroves", en: "Mangrove sea-kayak tour" }, wikipedia: "File:Coxen Hole2 Roatan Honduras 2025.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Utila — Capital mondiale du PADI", en: "Utila — PADI world capital" },
      region: { fr: "Bay Islands", en: "Bay Islands" },
      description: {
        fr: "Utila est célèbre dans le monde entier pour deux raisons : c'est l'endroit le moins cher pour apprendre à plonger (PADI), et l'un des rares endroits au monde où observer des requins-baleines depuis la côte (mars–juin). Une île bohème et accessible.",
        en: "Utila is world-famous for two reasons: it is the cheapest place to learn diving (PADI), and one of the few places on earth where you can see whale sharks from shore (March–June). A bohemian, accessible island.",
      },
      wikipedia: "File:Utila, Islas de la Bahía.jpg",
      tags: ["Plongée", "Requins-baleines", "Bon plan", "Île"],
      mustSee: [
        { name: { fr: "Requins-baleines (mars–juin, depuis Utila)", en: "Whale sharks (March–June, from Utila)" }, wikipedia: "Whale_shark" },
        { name: { fr: "Certification PADI Open Water (~200€)", en: "PADI Open Water certification (~200€)" }, wikipedia: "File:Discover Scuba Diving -- St. Croix, US Virgin Islands.jpg" },
        { name: { fr: "Bioluminescence la nuit dans la baie", en: "Night-time bioluminescence in the bay" }, wikipedia: "Bioluminescence" },
        { name: { fr: "Plongée nuit — poulpes et murènes", en: "Night dive — octopuses and moray eels" }, wikipedia: "Moray_eel" },
      ],
    },
    {
      id: 4,
      name: "Lago de Yojoa",
      region: { fr: "Centre", en: "Central" },
      description: {
        fr: "Le Lago de Yojoa est le plus grand lac naturel du Honduras : un paradis pour le birdwatching (400+ espèces d'oiseaux), entouré de forêts nuageuses, avec les chutes Pulhapanzak à couper le souffle et la microbrasserie D&D — surprenante au fond des tropiques.",
        en: "Lago de Yojoa is Honduras's largest natural lake: a paradise for birdwatching (400+ bird species), surrounded by cloud forest, with the breathtaking Pulhapanzak Falls and the unlikely D&D microbrewery deep in the tropics.",
      },
      wikipedia: "Lake_Yojoa",
      tags: ["Nature", "Oiseaux", "Randonnée", "Insolite"],
      mustSee: [
        { name: { fr: "Birdwatching (400+ espèces, dont toucans)", en: "Birdwatching (400+ species, including toucans)" }, wikipedia: "Keel-billed_toucan" },
        { name: { fr: "Chutes de Pulhapanzak (43 m)", en: "Pulhapanzak Falls (43 m)" }, wikipedia: "File:Cataratas de Pulhapanzak (III).JPG" },
        { name: { fr: "Parc Cerro Azul Meámbar — forêt nuageuse", en: "Cerro Azul Meámbar Park — cloud forest" }, wikipedia: "Cerro_Azul_Meámbar_National_Park" },
        { name: { fr: "Brasserie D&D — bières artisanales au lac", en: "D&D Brewery — craft beers by the lake" }, wikipedia: "Lake_Yojoa" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Honduras est l'un des pays les moins chers d'Amérique centrale, surtout hors des îles. Utila est un vrai bon plan : y apprendre à plonger revient deux fois moins cher qu'ailleurs. La lempira est très faible face à l'euro.",
      en: "Honduras is one of the cheapest countries in Central America, especially outside the islands. Utila is a real bargain: learning to dive there costs about half as much as elsewhere. The lempira is very weak against the euro.",
    },
    currency: "HNL",
    exchangeRate: "1€ ≈ 27 HNL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hostel / guesthouse locale", en: "Hostel / local guesthouse" }, price: "10–20 €", detail: { fr: "Tegucigalpa ou Copán", en: "Tegucigalpa or Copán" } },
          { label: { fr: "Hôtel de plage Roatán", en: "Roatán beach hotel" }, price: "50–100 €", detail: { fr: "Vue mer, ventilateur ou clim", en: "Sea view, fan or air conditioning" } },
          { label: { fr: "Resort Roatán tout inclus", en: "Roatán all-inclusive resort" }, price: "200–400 €", detail: { fr: "All-inclusive face au récif", en: "All-inclusive facing the reef" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Baleadas (tortilla + haricots)", en: "Baleadas (tortilla + beans)" }, price: "1–2 €", detail: { fr: "Street food national", en: "National street food staple" } },
          { label: { fr: "Fruits de mer frais (Roatán)", en: "Fresh seafood (Roatán)" }, price: "10–20 €", detail: { fr: "Langouste, poisson grillé", en: "Lobster, grilled fish" } },
          { label: { fr: "Restaurant occidental (Utila)", en: "Western restaurant (Utila)" }, price: "8–15 €", detail: { fr: "Cuisine internationale", en: "International cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Tegucigalpa–San Pedro Sula", en: "Tegucigalpa–San Pedro Sula bus" }, price: "5–10 €", detail: { fr: "Confortable, 3h30", en: "Comfortable, 3h30" } },
          { label: { fr: "Ferry La Ceiba–Utila ou Roatán", en: "La Ceiba–Utila or Roatán ferry" }, price: "15–20 €", detail: { fr: "1h30 bateau rapide", en: "1h30 fast boat" } },
          { label: { fr: "Vol intérieur Tegucigalpa–Roatán", en: "Domestic flight Tegucigalpa–Roatán" }, price: "60–130 €", detail: { fr: "Aller simple, 45 min", en: "One way, 45 min" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée site de Copán", en: "Copán site entrance" }, price: "15 €", detail: { fr: "Inclut le tunnel maya", en: "Includes the Maya tunnel" } },
          { label: { fr: "Certification PADI (Utila)", en: "PADI certification (Utila)" }, price: "200–250 €", detail: { fr: "Formation complète open water", en: "Full open water course" } },
          { label: { fr: "Excursion requins-baleines", en: "Whale shark excursion" }, wikipedia: "Whale_shark", price: "50–80 €", detail: { fr: "Snorkel ou apnée", en: "Snorkelling or freediving" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + baleadas + bus", en: "Guesthouse + baleadas + bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel de plage + restos + plongée", en: "Beach hotel + restaurants + diving" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "250 €+/j", desc: { fr: "Resort Roatán all-inclusive + guide privé", en: "Roatán all-inclusive resort + private guide" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Copán (2j) → San Pedro Sula (1j) → Utila (3j) → Roatán (3j) → Lac Yojoa (1j)",
        en: "Copán (2d) → San Pedro Sula (1d) → Utila (3d) → Roatán (3d) → Lake Yojoa (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Honduras", en: "Return flight Paris–Honduras" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–300 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–250 €" },
            { label: { fr: "Ferries & transports", en: "Ferries & transport" }, amount: "100–200 €" },
            { label: { fr: "Activités & plongée", en: "Activities & diving" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 800 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Honduras", en: "Return flight Paris–Honduras" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture & bars", en: "Food & bars" }, amount: "400–600 €" },
            { label: { fr: "Vols intérieurs + ferries", en: "Domestic flights + ferries" }, amount: "350–500 €" },
            { label: { fr: "Plongées & excursions", en: "Dives & excursions" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Honduras (Business)", en: "Return flight Paris–Honduras (business)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Resorts Roatán (10 nuits)", en: "Roatán resorts (10 nights)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa" }, amount: "500–800 €" },
            { label: { fr: "Transferts privés & vols charters", en: "Private transfers & charter flights" }, amount: "500–800 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13h avec escale (via Miami ou Atlanta)", en: "~13h with a stopover (via Miami or Atlanta)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 90 jours CA-4 (Guatemala, Honduras, El Salvador, Nicaragua)", en: "No visa for 90 days under the CA-4 agreement (Guatemala, Honduras, El Salvador, Nicaragua)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Lempira (1€ ≈ 27 HNL) — dollars US largement acceptés", en: "Lempira (1€ ≈ 27 HNL) — US dollars widely accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol (officiel) — anglais sur les Bay Islands", en: "Spanish (official) — English spoken on the Bay Islands" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B – 110 V (comme USA)", en: "Type A/B – 110 V (same as the USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture Tegucigalpa et villes, correcte sur îles", en: "Good coverage in Tegucigalpa and cities, decent on the islands" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water required" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé sur le continent (pas sur les îles)", en: "Antimalarial medication recommended on the mainland (not on the islands)" } },
  ],
};
