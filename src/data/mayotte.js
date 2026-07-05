export const MAYOTTE = {
  code: "MYT",
  numericId: 175,
  name: { fr: "Mayotte", en: "Mayotte" },
  emoji: "🇾🇹",
  capital: { fr: "Mamoudzou", en: "Mamoudzou" },
  language: { fr: "Français, Shimaoré, Kibushi", en: "French, Shimaore, Kibushi" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 70, budgetMid: 165,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "Mayotte est un département français de l'océan Indien entre les Comores et Madagascar : le deuxième plus grand lagon du monde (1 100 km²), protégé par la seule double barrière de corail de l'océan Indien, avec dauphins, tortues vertes, requins-baleines, dugongs et raies manta. L'île au lagon, encore méconnue, offre une plongée et un snorkeling d'exception à prix euro.",
    en: "Mayotte is a French overseas department in the Indian Ocean between the Comoros and Madagascar: the world's second-largest lagoon (1,100 km²), protected by the Indian Ocean's only double coral barrier reef, home to dolphins, green turtles, whale sharks, dugongs and manta rays. Still little known, this lagoon island offers exceptional diving and snorkelling at euro prices.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Novembre", en: "April – November" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour le lagon : mer calme, visibilité sous-marine excellente (20–30m), dauphins et tortues présents toute l'année. Températures agréables 24–28°C.",
        en: "Ideal for the lagoon: calm sea, excellent underwater visibility (20–30m), dolphins and turtles present year-round. Pleasant temperatures of 24–28°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Saison des pluies / cyclones", en: "Rainy / cyclone season" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes, mer agitée, risque cyclonique. Températures élevées (28–32°C). Mois les moins favorables pour la plongée.",
        en: "Heavy rain, rough sea, cyclone risk. High temperatures (28–32°C). The least favourable months for diving.",
      },
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "mamoudzou",
      name: "Mamoudzou",
      region: { fr: "Grande-Terre", en: "Grande-Terre" },
      data: [
        { month: "Jan", temp: 28, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 380, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 270, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lagon de Mayotte — Plongée et dauphins", en: "Mayotte Lagoon — Diving and dolphins" },
      region: { fr: "Lagon", en: "Lagoon" },
      description: {
        fr: "Le lagon de Mayotte est l'un des plus beaux au monde : 1 100 km² d'eaux turquoise entourées d'une double barrière de corail, où nagent des dauphins-toupies (en permanence), des tortues vertes (pondent sur les plages d'avril à août), des dugongs et des raies manta. La visibilité sous-marine y dépasse régulièrement 30 mètres.",
        en: "Mayotte's lagoon is one of the most beautiful in the world: 1,100 km² of turquoise waters surrounded by a double coral barrier reef, home to spinner dolphins (present year-round), green turtles (nesting on the beaches from April to August), dugongs and manta rays. Underwater visibility regularly exceeds 30 metres.",
      },
      wikipedia: "File:Le lagon de Mayotte (34707734326).jpg",
      tags: ["Lagon", "Plongée", "Dauphins", "Tortues"],
      mustSee: [
        { name: { fr: "Nage avec les dauphins-toupies dans le lagon", en: "Swimming with spinner dolphins in the lagoon" }, wikipedia: "File:Eilat Dolphin Reef (3).jpg" },
        { name: { fr: "Snorkeling Petite-Terre — tortues et poissons perroquets", en: "Snorkelling at Petite-Terre — turtles and parrotfish" }, wikipedia: "File:Mayotte, Petite Terre (2850837100).jpg" },
        { name: { fr: "Banc de sable Ilot Sable Blanc", en: "Ilot Sable Blanc sandbank" }, wikipedia: "File:Îlot de sable blanc.JPG" },
      ],
    },
    {
      id: 3,
      name: { fr: "Baie de Bouéni & plages du sud", en: "Bouéni Bay & southern beaches" },
      region: { fr: "Grande-Terre (sud)", en: "Grande-Terre (south)" },
      description: {
        fr: "Le sud de Mayotte concentre les plus belles plages et baies : la baie de Bouéni avec ses eaux turquoise et ses mangroves, la plage de Moya (la plus longue de l'île, tortues en saison), et les villages traditionnels swahili aux mosquées blanches. Un mzungu (étranger) qui sort des sentiers battus y sera souvent seul.",
        en: "Southern Mayotte concentrates the island's finest beaches and bays: Bouéni Bay with its turquoise waters and mangroves, Moya Beach (the island's longest, with turtles in season), and traditional Swahili villages with white mosques. A mzungu (foreigner) who ventures off the beaten path will often be the only one there.",
      },
      wikipedia: "File:Riffs before SW Mayotte (30592452163).jpg",
      tags: ["Plage", "Mangroves", "Tortues", "Authentique"],
      mustSee: [
        { name: { fr: "Plage de Moya — la plus longue de Mayotte + tortues", en: "Moya Beach — Mayotte's longest, with turtles" }, wikipedia: "File:Plage de Grand Moya .jpg" },
        { name: { fr: "Baie de Bouéni — kayak en mangroves", en: "Bouéni Bay — kayaking through the mangroves" }, wikipedia: "File:Riffs before SW Mayotte (30592452163).jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Petite-Terre — Mamoudzou historique", en: "Petite-Terre — Historic Mamoudzou" },
      region: "Petite-Terre",
      description: {
        fr: "Petite-Terre est la petite île où se trouvent les institutions (préfecture), le quartier de Dzaoudzi et le marché de Mamoudzou. La promenade du bord de mer, les toits colorés de Dzaoudzi, et la plage du Sables-Blancs sont les points d'attraction de cette mini-île reliée par bac à la Grande-Terre.",
        en: "Petite-Terre is the small island home to the local institutions (prefecture), the Dzaoudzi district and Mamoudzou's market. The seafront promenade, the colourful rooftops of Dzaoudzi and Sables-Blancs beach are the main attractions of this mini-island, connected to Grande-Terre by ferry.",
      },
      wikipedia: "File:Phare de Petite Terre.jpg",
      tags: ["Ville", "Marché", "Bac", "Plage"],
      mustSee: [
        { name: { fr: "Marché de Mamoudzou — épices et artisanat mahorais", en: "Mamoudzou market — Mahoran spices and crafts" }, wikipedia: "Mamoudzou" },
        { name: { fr: "Traversée en bac Grande-Terre / Petite-Terre", en: "Ferry crossing between Grande-Terre and Petite-Terre" }, wikipedia: "File:Mayotte, Petite Terre (2850837100).jpg" },
        { name: { fr: "Promenade de Dzaoudzi et panorama lagon", en: "Dzaoudzi promenade and lagoon panorama" }, wikipedia: "File:Mayotte, Petite Terre (2850837570).jpg" },
        { name: { fr: "Plage de Petite-Terre (Sables Blancs) — snorkeling avec tortues", en: "Petite-Terre beach (Sables Blancs) — snorkelling with turtles" }, wikipedia: "File:Petite Terre vue de l’îlot de sable blanc.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Mayotte est un département français — les prix s'alignent sur la métropole pour les produits importés, mais restent inférieurs pour la restauration locale. L'hébergement est en développement. Avantage majeur : l'euro sans change.",
      en: "Mayotte is a French overseas department — prices for imported goods match mainland France, but remain lower for local dining. Accommodation is still developing. A major advantage: the euro, with no currency exchange needed.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (territoire français)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Chambre d'hôte / gîte local", en: "Guesthouse / local gîte" }, price: "40–70 €", detail: { fr: "Simple mais confortable", en: "Simple but comfortable" } },
          { label: { fr: "Hôtel 3★ Mamoudzou / Petite-Terre", en: "3★ hotel in Mamoudzou / Petite-Terre" }, price: "90–150 €", detail: { fr: "Vue lagon, piscine", en: "Lagoon view, pool" } },
          { label: { fr: "Lodge bord de mer (Bouéni)", en: "Seaside lodge (Bouéni)" }, price: "120–200 €", detail: { fr: "Immersion nature", en: "Immersion in nature" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Barquette coco / mataba dans un restaurant local", en: "Coconut dish / mataba at a local restaurant" }, price: "5–12 €", detail: { fr: "Cuisine mahoraise typique", en: "Typical Mahoran cuisine" } },
          { label: { fr: "Restaurant mid-range Mamoudzou", en: "Mid-range restaurant in Mamoudzou" }, price: "15–30 €", detail: { fr: "Poissons et fruits de mer du lagon", en: "Fish and seafood from the lagoon" } },
          { label: { fr: "Supermarché (Jumbo Score, Score)", en: "Supermarket (Jumbo Score, Score)" }, price: "Same as France", detail: { fr: "Prix métropole + transport", en: "Mainland French prices + shipping" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bac Grande-Terre / Petite-Terre", en: "Ferry Grande-Terre / Petite-Terre" }, price: "1–2 €", detail: { fr: "Traversée 5 min", en: "5 min crossing" } },
          { label: { fr: "Taxi-brousse / taxi collectif", en: "Bush taxi / shared taxi" }, price: "1–5 €", detail: { fr: "Transport inter-villages", en: "Transport between villages" } },
          { label: { fr: "Location de voiture", en: "Car rental" }, price: "50–80 €/j", detail: { fr: "Recommandé pour le sud et randonnées", en: "Recommended for the south and hikes" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Plongée 2 immersions (club de plongée)", en: "2-dive session (dive club)" }, price: "70–100 €", detail: { fr: "Lagon exceptionnel", en: "Exceptional lagoon" } },
          { label: { fr: "Excursion dauphins et snorkeling (demi-journée)", en: "Dolphin & snorkelling excursion (half-day)" }, price: "40–70 €", detail: { fr: "En bateau, guide", en: "By boat, with guide" } },
          { label: { fr: "Kayak en mangroves (Bouéni)", en: "Kayaking through mangroves (Bouéni)" }, price: "20–40 €", detail: { fr: "Location ou guidée", en: "Rental or guided" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "70–100 €/j", desc: { fr: "Chambre d'hôte + cuisine locale + taxi-brousse", en: "Guesthouse + local food + bush taxi" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "140–220 €/j", desc: { fr: "Hôtel 3★ + restaurants + plongée + location voiture", en: "3★ hotel + restaurants + diving + car rental" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Mamoudzou / Petite-Terre (2j) → Tour du lagon en bateau (3j) → Sud et plages (3j) → Bénara et forêt (2j)",
        en: "Mamoudzou / Petite-Terre (2d) → Lagoon boat tour (3d) → South and beaches (3d) → Bénara and forest (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mayotte (Air Austral, Corsair)", en: "Return flight Paris–Mayotte (Air Austral, Corsair)" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–650 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "250–400 €" },
            { label: { fr: "Plongée & excursions lagon", en: "Diving & lagoon excursions" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mayotte", en: "Return flight Paris–Mayotte" }, amount: "600–900 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "1 000–1 600 €" },
            { label: { fr: "Location voiture", en: "Car rental" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–650 €" },
            { label: { fr: "Plongée, dauphins, kayak", en: "Diving, dolphins, kayaking" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~12h (Air Austral direct depuis CDG, ou Corsair via escale) — 3 à 5 fois par semaine", en: "~12h (Air Austral direct from CDG, or Corsair with a stopover) — 3 to 5 times a week" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — département français. Carte nationale d'identité suffisante pour les ressortissants français.", en: "No visa needed — French overseas department. A national ID card is sufficient for French citizens." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€). Carte bancaire acceptée dans les commerces principaux. Espèces utiles en zone rurale.", en: "Euro (€). Bank cards accepted at major shops. Cash useful in rural areas." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel). Shimaoré et Kibushi entre habitants. Français suffisant pour voyager.", en: "French (official). Shimaore and Kibushi spoken among locals. French is sufficient for travelling." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type E/F (européen) — 220V. Aucun adaptateur nécessaire.", en: "Type E/F (European) — 220V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé (paludisme présent à Mayotte). Crème solaire indispensable. Eau du robinet à éviter.", en: "Antimalarials recommended (malaria present in Mayotte). Sunscreen essential. Avoid tap water." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Qualité variable — eau en bouteille recommandée.", en: "Variable quality — bottled water recommended." } },
    { icon: "🌀", label: { fr: "Cyclones", en: "Cyclones" }, value: { fr: "Risque cyclonique de novembre à avril. Consulter Météo-France Mayotte en saison.", en: "Cyclone risk from November to April. Check Météo-France Mayotte during the season." } },
  ],
};
