export const DOMINICAN_REPUBLIC = {
  code: "DOM",
  numericId: 214,
  name: { fr: "République Dominicaine", en: "Dominican Republic" },
  emoji: "🇩🇴",
  capital: { fr: "Saint-Domingue", en: "Santo Domingo" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Peso dominicain (DOP)", en: "Dominican peso (DOP)" },
  timezone: "UTC-4",
  filter: {
    budgetMin: 50, budgetMid: 130,
    tripMin: 1500, tripMid: 3800,
  },
  description: {
    fr: "La République Dominicaine offre la diversité des Grandes Antilles dans un seul pays : Punta Cana et ses 23 km de plage de cocotiers, Samaná et ses baleines à bosse (janvier–mars), la Zona Colonial de Saint-Domingue classée UNESCO — première ville européenne des Amériques — et Las Terrenas, la Côte d'Azur des Caraïbes.",
    en: "The Dominican Republic brings together the diversity of the Greater Antilles in a single country: Punta Cana and its 23 km of palm-lined beaches, Samaná and its humpback whales (January–March), Santo Domingo's UNESCO-listed Colonial Zone — the first European city in the Americas — and Las Terrenas, the French Riviera of the Caribbean.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Avril", en: "December – April" },
      label: { fr: "Haute saison", en: "High season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : plages parfaites, mer calme, pas de cyclones, baleines à Samaná (jan–mar). Températures idéales 26–28°C.",
        en: "Best time to go: perfect beaches, calm seas, no hurricanes, and whales in Samaná (Jan–Mar). Ideal temperatures of 26–28°C.",
      },
      icon: "🐋",
    },
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été chaud", en: "Hot summer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur (30–33°C), humidité élevée et saison des cyclones. Réservé aux budgets serrés et amateurs de soleil intense.",
        en: "Hot weather (30–33°C), high humidity and hurricane season. Best suited to tight budgets and travellers who love intense sunshine.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "santo_domingo",
      name: "Saint-Domingue",
      region: { fr: "Sud", en: "South" },
      data: [
        { month: "Jan", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 70,  icon: "⛅" },
      ],
    },
    {
      id: "punta_cana",
      name: "Punta Cana",
      region: { fr: "Est", en: "East" },
      data: [
        { month: "Jan", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 45,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 70,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Punta Cana & plages Est", en: "Punta Cana & East Coast beaches" },
      region: { fr: "Est", en: "East" },
      description: {
        fr: "Punta Cana est le symbole caribéen du all-inclusive : 23 km de plage de cocotiers au sable blanc, eau turquoise à 28°C toute l'année et une offre hôtelière parmi les plus grandes au monde. L'Isla Saona voisine est une excursion classique incontournable.",
        en: "Punta Cana is the Caribbean symbol of the all-inclusive holiday: 23 km of palm-lined white-sand beaches, turquoise water at 28°C year-round, and one of the largest resort offerings in the world. Nearby Saona Island is a classic must-do excursion.",
      },
      wikipedia: "Punta_Cana",
      tags: ["Plage", "All-inclusive", "Cocotiers", "Mer"],
      mustSee: [
        { name: { fr: "Plage Bávaro (23 km) — cocotiers & sable blanc", en: "Bávaro Beach (23 km) — palm trees & white sand" }, wikipedia: "File:Bavaro - 23 octobre 2011.JPG" },
        { name: { fr: "Isla Saona — plage déserte en catamaran", en: "Saona Island — deserted beach by catamaran" }, wikipedia: "Saona_Island" },
        { name: { fr: "Isla Catalina — snorkel & barracudas", en: "Catalina Island — snorkelling & barracudas" }, wikipedia: "File:Isla Catalina, Caribbean.jpg" },
        { name: { fr: "Hoyo Azul — lagon bleu dans la jungle", en: "Hoyo Azul — blue lagoon in the jungle" }, wikipedia: "Punta_Cana" },
      ],
    },
    {
      id: 2,
      name: { fr: "Saint-Domingue — Zona Colonial", en: "Santo Domingo — Colonial Zone" },
      region: { fr: "Sud", en: "South" },
      description: {
        fr: "La Zona Colonial de Saint-Domingue, classée UNESCO, est la première ville coloniale européenne fondée dans les Amériques (1498). La Cathédrale Primatiale (la plus ancienne des Amériques), le Palais de Diego Colomb et la Calle el Conde composent un musée vivant de l'histoire hispanique.",
        en: "Santo Domingo's UNESCO-listed Colonial Zone is the first European colonial city founded in the Americas (1498). The Primatial Cathedral — the oldest in the Americas — Diego Columbus's palace and Calle El Conde together form a living museum of Hispanic history.",
      },
      wikipedia: "Santo_Domingo",
      tags: ["UNESCO", "Histoire", "Colonial", "Architecture"],
      mustSee: [
        { name: { fr: "Zona Colonial — Calle el Conde (piétonne)", en: "Colonial Zone — Calle El Conde (pedestrian street)" }, wikipedia: "File:Aerial view Ciudad Colonial Santo Domingo 09 2019 0067.jpg" },
        { name: { fr: "Alcázar de Colón (palais de Diego Colomb)", en: "Alcázar de Colón (Diego Columbus's palace)" }, wikipedia: "Alcázar_de_Colón" },
        { name: { fr: "Cathédrale primatiale (la plus ancienne des Amériques)", en: "Primatial Cathedral (the oldest in the Americas)" }, wikipedia: "File:Santo Domingo de la Calzada, catedral-PM 32754.jpg" },
        { name: { fr: "Fortaleza Ozama — fort colonial face à la mer", en: "Fortaleza Ozama — seafront colonial fort" }, wikipedia: "File:Santo Domingo - Fortaleza Ozama 0960.jpg" },
      ],
    },
    {
      id: 3,
      name: "Samaná",
      region: { fr: "Nord-Est", en: "Northeast" },
      description: {
        fr: "La Péninsule de Samaná est l'une des plus belles destinations de la Caraïbe : les baleines à bosse (janvier–mars) viennent s'y reproduire en grand nombre, la cascade El Limón se visite à cheval dans la jungle tropicale, et Cayo Levantado (l'île aux bacardis) est un paradis blanc.",
        en: "The Samaná Peninsula is one of the Caribbean's most beautiful destinations: humpback whales (January–March) come here in large numbers to breed, El Limón waterfall can be reached on horseback through tropical jungle, and Cayo Levantado (Bacardi Island) is a white-sand paradise.",
      },
      wikipedia: "File:Samaná Pueblo Principe 2.jpg",
      tags: ["Baleines", "Nature", "Cascade", "Île"],
      mustSee: [
        { name: { fr: "Baleines à bosse (jan–mars) — observation en bateau", en: "Humpback whales (Jan–Mar) — boat watching" }, wikipedia: "Humpback_whale" },
        { name: { fr: "Cascada El Limón — à cheval dans la jungle", en: "El Limón waterfall — horseback ride through the jungle" }, wikipedia: "File:El Limon.JPG" },
        { name: { fr: "Cayo Levantado — plage déserte intime", en: "Cayo Levantado — intimate deserted beach" }, wikipedia: "Cayo_Levantado" },
        { name: { fr: "Los Haitises — mangroves et grottes taïnos", en: "Los Haitises — mangroves and Taíno caves" }, wikipedia: "Los_Haitises_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Las Terrenas",
      region: { fr: "Nord-Est (Samaná)", en: "Northeast (Samaná)" },
      description: {
        fr: "Las Terrenas est surnommée la « Saint-Tropez des Caraïbes » : une communauté franco-italo-dominicaine cosmopolite, des plages sauvages (Playa Bonita), une gastronomie étonnante et une atmosphère décontractée sans les excès du all-inclusive. Idéal pour les voyageurs indépendants.",
        en: "Las Terrenas is nicknamed the 'Saint-Tropez of the Caribbean': a cosmopolitan French-Italian-Dominican community, wild beaches such as Playa Bonita, surprisingly good food and a laid-back atmosphere without the excesses of all-inclusive resorts. Ideal for independent travellers.",
      },
      wikipedia: "File:Las-Terrenas.jpg",
      tags: ["Plage", "Gastronomie", "Indépendant", "Cosmopolite"],
      mustSee: [
        { name: { fr: "Playa Bonita — la plus belle plage de Las Terrenas", en: "Playa Bonita — Las Terrenas' most beautiful beach" }, wikipedia: "File:Las Terrenas beach 7.JPG" },
        { name: { fr: "Plage aux Champignons — formations coralliennes", en: "Mushroom Beach — coral formations" }, wikipedia: "File:Photo LFILT.jpg" },
        { name: { fr: "Gastronomie franco-caribéenne — rue principale", en: "French-Caribbean dining — main street" }, wikipedia: "File:Las-Terrenas.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La République Dominicaine est accessible — le all-inclusive peut paraître cher mais inclut tout. En dehors des resorts, les prix sont très raisonnables. Saint-Domingue et Las Terrenas permettent une vie locale authentique à petit prix.",
      en: "The Dominican Republic is affordable — all-inclusive stays can look expensive, but they cover everything. Outside the resorts, prices are very reasonable. Santo Domingo and Las Terrenas offer an authentic local lifestyle on a modest budget.",
    },
    currency: "DOP",
    exchangeRate: "1€ ≈ 65 DOP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse Las Terrenas", en: "Las Terrenas guesthouse" }, price: "30–60 €", detail: { fr: "Chambre avec clim", en: "Room with air conditioning" } },
          { label: { fr: "Hôtel 3★ (hors resort)", en: "3★ hotel (outside resorts)" }, price: "50–90 €", detail: { fr: "Bon confort, petit-déjeuner", en: "Good comfort, breakfast included" } },
          { label: { fr: "Resort all-inclusive Punta Cana", en: "Punta Cana all-inclusive resort" }, price: "120–300 €", detail: { fr: "Tout inclus par personne", en: "Everything included per person" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Sancocho, tostones (cuisine locale)", en: "Sancocho, tostones (local cuisine)" }, price: "3–6 €", detail: { fr: "Marché ou comedor local", en: "Market or local comedor" } },
          { label: { fr: "Fruits de mer Las Terrenas", en: "Las Terrenas seafood" }, price: "15–30 €", detail: { fr: "Langoustes, daurades, crevettes", en: "Lobster, sea bream, shrimp" } },
          { label: { fr: "Restaurant gastronomique Saint-Domingue", en: "Santo Domingo fine-dining restaurant" }, price: "20–40 €", detail: { fr: "Cuisine créative", en: "Creative cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Guagua (bus collectif)", en: "Guagua (shared bus)" }, price: "2–5 €", detail: { fr: "Trajet interurbain", en: "Intercity journey" } },
          { label: { fr: "Transfer privé aéroport–Samaná", en: "Private airport–Samaná transfer" }, price: "40–70 €", detail: { fr: "3h depuis Punta Cana", en: "3 hours from Punta Cana" } },
          { label: { fr: "Vol intérieur (STI–SDQ)", en: "Domestic flight (STI–SDQ)" }, price: "50–100 €", detail: { fr: "Quand disponible", en: "When available" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Excursion baleines Samaná", en: "Samaná whale excursion" }, price: "50–80 €", detail: { fr: "Janvier–mars, bateau 3h", en: "January–March, 3-hour boat trip" } },
          { label: { fr: "Isla Saona (catamaran, journée)", en: "Saona Island (catamaran, full day)" }, price: "60–90 €", detail: { fr: "Transport + repas inclus", en: "Transport + meal included" } },
          { label: { fr: "Randonnée El Limón à cheval", en: "El Limón horseback trek" }, price: "30–50 €", detail: { fr: "3h, guide inclus", en: "3 hours, guide included" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + guagua", en: "Guesthouse + local food + guagua" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 3★ + restos + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €+/j", desc: { fr: "Resort all-inclusive 5★ + circuit privé", en: "5★ all-inclusive resort + private itinerary" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Saint-Domingue (2j) → Las Terrenas & Samaná (4j) → Punta Cana (6j)",
        en: "Santo Domingo (2d) → Las Terrenas & Samaná (4d) → Punta Cana (6d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–République Dominicaine", en: "Return flight Paris–Dominican Republic" }, amount: "350–600 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "450–750 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Transports", en: "Transport" }, amount: "200–300 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–RD", en: "Return flight Paris–DR" }, amount: "450–750 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails" }, amount: "600–900 €" },
            { label: { fr: "Excursions & baleines", en: "Excursions & whale watching" }, amount: "500–800 €" },
            { label: { fr: "Transports & imprévus", en: "Transport & contingency" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–RD (Business)", en: "Return flight Paris–DR (business)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Resort all-inclusive 5★ (12 nuits)", en: "5★ all-inclusive resort (12 nights)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Excursions privées & spa", en: "Private excursions & spa" }, amount: "800–1 500 €" },
            { label: { fr: "Gastronomie gastronomique", en: "Fine dining" }, amount: "500–800 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~9h direct (Air France, Corsair, Air Caraïbes, Level)", en: "~9h direct (Air France, Corsair, Air Caraïbes, Level)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Carte touristique (~10$) incluse dans la plupart des vols charters", en: "Tourist card (~$10) included in most charter flights" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Peso dominicain (1€ ≈ 65 DOP) — USD acceptés partout", en: "Dominican peso (1€ ≈ 65 DOP) — USD widely accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol (officiel) — français compris à Las Terrenas", en: "Spanish (official) — French is understood in Las Terrenas" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B – 110 V (comme USA)", en: "Type A/B – 110 V (same as the USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Mobile network" }, value: { fr: "Bonne couverture nationale (Claro, Altice)", en: "Good nationwide coverage (Claro, Altice)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water required" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas d'antipaludéen requis dans les zones touristiques standards", en: "No antimalarial medication required in standard tourist areas" } },
  ],
};
