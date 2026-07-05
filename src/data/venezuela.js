export const VENEZUELA = {
  code: "VEN",
  numericId: 862,
  name: { fr: "Venezuela", en: "Venezuela" },
  emoji: "🇻🇪",
  capital: { fr: "Caracas", en: "Caracas" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Bolívar soberano (VES)", en: "Sovereign Bolívar (VES)" },
  timezone: "UTC-4",
  filter: {
    budgetMin: 30,
    budgetMid: 65,
    tripMin: 1500,
    tripMid: 2800,
  },
  description: {
    fr: "Le Venezuela possède l'une des plus grandes biodiversités au monde : le Salto Ángel (plus haute chute du monde), les tepuys de la Gran Sabana, les Llanos (plaines à jaguar et anaconda) et les plages des Caraïbes. Attention : la situation politique et économique est instable — vérifiez impérativement les derniers conseils aux voyageurs du ministère des Affaires étrangères avant tout départ.",
    en: "Venezuela has one of the greatest biodiversities in the world: Angel Falls (the world's highest waterfall), the tepuis of the Gran Sabana, the Llanos (plains with jaguars and anacondas) and Caribbean beaches. Warning: the political and economic situation is unstable — be sure to check the latest travel advisories from the Foreign Ministry before departing.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Avril", en: "December – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#fbbf24",
      description: {
        fr: "Meilleure période pour visiter les tepuys, la Gran Sabana et les côtes. Routes praticables, chutes visibles.",
        en: "Best period to visit the tepuis, the Gran Sabana and the coast. Roads passable, falls visible.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Novembre", en: "June – November" },
      label: { fr: "Saison des pluies (Llanos)", en: "Rainy season (Llanos)" },
      color: "#22c55e",
      description: {
        fr: "Les Llanos inondés accueillent une faune extraordinaire (caïmans, capybaras, oiseaux). Certaines zones inaccessibles.",
        en: "The flooded Llanos host extraordinary wildlife (caimans, capybaras, birds). Some areas are inaccessible.",
      },
      icon: "🐊",
    },
  ],

  weatherCities: [
    {
      id: "caracas",
      name: { fr: "Caracas", en: "Caracas" },
      region: { fr: "Région Capitale", en: "Capital Region" },
      data: [
        { month: "Jan", temp: 23, rain: 20, icon: "☀️" },
        { month: "Fév", temp: 23, rain: 15, icon: "☀️" },
        { month: "Mar", temp: 24, rain: 25, icon: "☀️" },
        { month: "Avr", temp: 25, rain: 65, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 26, rain: 105, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 90, icon: "☀️" },
        { month: "Aoû", temp: 27, rain: 95, icon: "⛅" },
        { month: "Sep", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 24, rain: 85, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 40, icon: "☀️" },
      ],
    },
    {
      id: "ciudad-bolivar",
      name: { fr: "Ciudad Bolívar", en: "Ciudad Bolívar" },
      region: { fr: "Bolívar (Gran Sabana)", en: "Bolívar (Gran Sabana)" },
      data: [
        { month: "Jan", temp: 28, rain: 30, icon: "☀️" },
        { month: "Fév", temp: 29, rain: 20, icon: "☀️" },
        { month: "Mar", temp: 31, rain: 25, icon: "🌡️" },
        { month: "Avr", temp: 31, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 155, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 145, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 90, icon: "⛅" },
        { month: "Déc", temp: 27, rain: 40, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Salto Ángel", en: "Angel Falls" },
      region: { fr: "Bolívar", en: "Bolívar" },
      description: {
        fr: "La plus haute chute d'eau du monde (979 m, soit 15 fois Niagara) plonge depuis le sommet du Tepuy Auyán depuis des millénaires. Accessible en avion ou en pirogue depuis Ciudad Bolívar ou Canaima, c'est l'une des merveilles naturelles absolues de la planète.",
        en: "The world's highest waterfall (979 m, 15 times Niagara) has plunged from the summit of Auyán Tepui for millennia. Accessible by plane or canoe from Ciudad Bolívar or Canaima, it is one of the planet's absolute natural wonders.",
      },
      wikipedia: "File:Salto del Angel-Canaima-Venezuela03.JPG",
      tags: ["Cascade", "Unique", "Nature", "Tepuy", "UNESCO"],
      mustSee: [
        { name: "Tepuy Auyán-tepui", wikipedia: "File:Auyan Tepui 01.JPG" },
        { name: { fr: "Lagune de Canaima", en: "Canaima Lagoon" }, wikipedia: "File:Canaima 34.JPG" },
        { name: { fr: "Parc national Canaima", en: "Canaima National Park" }, wikipedia: "File:Canaima National Park.JPG" },
        { name: { fr: "Pirogue sur le Río Carrao", en: "Canoe trip on the Río Carrao" }, wikipedia: "File:Canaima 21.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Gran Sabana & Roraima", en: "Gran Sabana & Roraima" },
      region: { fr: "Bolívar", en: "Bolívar" },
      description: {
        fr: "La Gran Sabana est un plateau mystique de savanes et tepuys (montagnes tabulaires) à la frontière brésilienne. Le Tepuy Roraima, dont le sommet perdu dans les nuages a inspiré Conan Doyle pour Le Monde Perdu, se trek en 6 jours depuis San Francisco de Yuruaní.",
        en: "The Gran Sabana is a mystical plateau of savannas and tepuis (tabletop mountains) on the Brazilian border. Mount Roraima, whose cloud-shrouded summit inspired Conan Doyle's The Lost World, is trekked in 6 days from San Francisco de Yuruaní.",
      },
      wikipedia: "Gran_Sabana",
      tags: ["Tepuys", "Randonnée", "Nature", "Mystique"],
      mustSee: [
        { name: "Mount Roraima", wikipedia: "Mount_Roraima" },
        { name: "Salto Kama", wikipedia: "File:Kamá Falls - Salto Kama (23495860840).jpg" },
        { name: { fr: "Quebrada de Jaspe (rivière rouge)", en: "Quebrada de Jaspe (red river)" }, wikipedia: "File:Quebrada del Jaspe-La Gran Sabana-Venezuela07.JPG" },
        { name: "San Francisco de Yuruaní", wikipedia: "File:San Francisco de Yuruani.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Llanos (plaines)", en: "Llanos (plains)" },
      region: { fr: "Apure / Barinas", en: "Apure / Barinas" },
      description: {
        fr: "Les Llanos vénézuéliens sont l'un des meilleurs endroits au monde pour observer la faune sauvage : anacondas, caïmans, capybaras, jaguars et plus de 400 espèces d'oiseaux. Les hatos (ranchs) proposent des safaris à cheval ou en 4x4.",
        en: "The Venezuelan Llanos are one of the best places in the world to observe wildlife: anacondas, caimans, capybaras, jaguars and over 400 bird species. The hatos (ranches) offer safaris on horseback or by 4x4.",
      },
      wikipedia: "File:Los_Llanos_Colombia_by_David.png",
      tags: ["Safari", "Faune", "Jaguar", "Nature"],
      mustSee: [
        { name: "Hato El Cedral", wikipedia: "Capybara" },
        { name: "Hato Piñero", wikipedia: "File:Hato Piñero 2002 001.jpg" },
        { name: { fr: "Caïmans du Llanos", en: "Llanos caimans" }, wikipedia: "Spectacled_caiman" },
        { name: { fr: "Anaconda géant", en: "Giant anaconda" }, wikipedia: "Green_anaconda" },
      ],
    },
    {
      id: 4,
      name: { fr: "Archipel Los Roques", en: "Los Roques Archipelago" },
      region: { fr: "Caraïbes", en: "Caribbean" },
      description: {
        fr: "L'archipel Los Roques est un parc national marin d'eaux turquoise et de plages de sable blanc à 160 km au nord de Caracas. Pêche à la mouche, plongée et voile dans un cadre préservé des Caraïbes.",
        en: "The Los Roques Archipelago is a marine national park of turquoise waters and white sand beaches, 160 km north of Caracas. Fly fishing, diving and sailing in a pristine Caribbean setting.",
      },
      wikipedia: "File:CayoCareneroLosRoquesVenezuelapic1.jpg",
      tags: ["Plage", "Plongée", "Île", "Caraïbes", "Nature"],
      mustSee: [
        { name: "Cayo de Agua", wikipedia: "File:Cayo de Agua in Los Roques.jpg" },
        { name: "Francisquí", wikipedia: "File:Cayo Francisqui apacible.JPG" },
        { name: { fr: "Gran Roque (village)", en: "Gran Roque (village)" }, wikipedia: "File:Village Gran Roque.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Venezuela connaît une situation économique très instable avec une inflation élevée. Les prix sont difficiles à estimer avec précision. La monnaie locale est peu fiable ; le dollar américain et l'euro sont largement acceptés.",
      en: "Venezuela is experiencing a very unstable economic situation with high inflation. Prices are difficult to estimate precisely. The local currency is unreliable; the US dollar and euro are widely accepted.",
    },
    currency: "Bolívar soberano (VES) / Dollar américain (USD)",
    exchangeRate: "Taux officiel instable — vérifiez avant le départ",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Posada simple", en: "Simple posada" }, price: "15–30 USD", detail: { fr: "Qualité variable, payer en USD", en: "Variable quality, pay in USD" } },
          { label: { fr: "Hôtel correct (Caracas)", en: "Decent hotel (Caracas)" }, price: "40–80 USD", detail: { fr: "Avec sécurité, quartiers sûrs", en: "With security, safe neighbourhoods" } },
          { label: { fr: "Hato (ranch Llanos)", en: "Hato (Llanos ranch)" }, price: "80–200 USD", detail: { fr: "Tout compris, safaris inclus", en: "All-inclusive, safaris included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Arepa (plat national)", en: "Arepa (national dish)" }, price: "1–3 USD", detail: { fr: "Galette de maïs fourrée, partout", en: "Stuffed corn cake, everywhere" } },
          { label: { fr: "Menu local", en: "Local set menu" }, price: "5–10 USD", detail: { fr: "Soupe + plat, dans les comedores", en: "Soup + main, at the comedores" } },
          { label: { fr: "Restaurant touristique", en: "Tourist restaurant" }, price: "15–30 USD", detail: { fr: "Payer en USD, qualité variable", en: "Pay in USD, variable quality" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol Caracas–Canaima (Salto Ángel)", en: "Caracas–Canaima flight (Angel Falls)" }, price: "100–200 USD", detail: { fr: "Vol charter, inclus dans les tours", en: "Charter flight, included in tours" } },
          { label: { fr: "Bus longue distance", en: "Long-distance bus" }, price: "5–20 USD", detail: { fr: "Réseau variable selon la région", en: "Network varies by region" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture" },
        items: [
          { label: { fr: "Tour Salto Ángel (3 jours)", en: "Angel Falls tour (3 days)" }, price: "250–450 USD", detail: { fr: "Tout compris, pirogue + camping", en: "All-inclusive, canoe + camping" } },
          { label: { fr: "Trek Roraima (6 jours)", en: "Roraima trek (6 days)" }, price: "300–500 USD", detail: { fr: "Guide + porteur + nourriture obligatoires", en: "Guide + porter + food mandatory" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Posada, arepas, transport local, prudence requise", en: "Posada, arepas, local transport, caution required" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "65–100 €/j", desc: { fr: "Hôtel sécurisé, tours guidés, USD recommandé", en: "Secure hotel, guided tours, USD recommended" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "150 €+/j", desc: { fr: "Hatos, lodges privés, vols charters", en: "Hatos, private lodges, charter flights" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: { fr: "Caracas – Gran Sabana/Canaima – Llanos – Los Roques", en: "Caracas – Gran Sabana/Canaima – Llanos – Los Roques" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Caracas", en: "Return flight Paris–Caracas" }, amount: "700–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–300 €" },
            { label: { fr: "Tours Salto Ángel + transport", en: "Angel Falls tours + transport" }, amount: "300–450 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 800 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Caracas", en: "Return flight Paris–Caracas" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "500–700 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Tours + vols intérieurs", en: "Tours + domestic flights" }, amount: "600–900 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Caracas (Business)", en: "Return flight Paris–Caracas (Business)" }, amount: "2 500–3 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 500–2 200 €" },
            { label: { fr: "Tours privés + vols charters", en: "Private tours + charter flights" }, amount: "1 000–1 500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–600 €" },
            { label: { fr: "Activités premium + sécurité", en: "Premium activities + security" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~11–13h avec escale (Bogotá, Panama, Madrid)", en: "~11–13h with a stopover (Bogotá, Panama, Madrid)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours) — vérifiez avant départ", en: "No visa required for French citizens (90 days) — check before departure" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "USD/EUR largement préférés au bolivar local", en: "USD/EUR widely preferred over the local bolívar" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol", en: "Spanish" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B – 120 V (adaptateur nécessaire)", en: "Type A/B – 120 V (adapter needed)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture variable, évitez de dépendre du réseau local", en: "Variable coverage, avoid relying on the local network" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable, eau en bouteille indispensable", en: "Not drinkable, bottled water essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire ; vérifiez les derniers conseils sécurité MEAE", en: "Yellow fever vaccine mandatory; check the latest French Foreign Ministry security advisories" } },
  ],
};
