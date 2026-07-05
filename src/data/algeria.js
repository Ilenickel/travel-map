export const ALGERIA = {
  code: "DZA",
  numericId: 12,
  name: { fr: "Algérie", en: "Algeria" },
  emoji: "🇩🇿",
  capital: { fr: "Alger", en: "Algiers" },
  language: { fr: "Arabe, Tamazight (berbère), Français", en: "Arabic, Tamazight (Berber), French" },
  currency: { fr: "Dinar algérien (DZD)", en: "Algerian Dinar (DZD)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "L'Algérie est le plus grand pays d'Afrique et l'un des moins visités : la Casbah d'Alger (UNESCO) avec ses maisons ottomanes, Ghardaïa et la vallée du M'Zab (UNESCO), les dunes dorées du Grand Erg Occidental dans le Sahara, les ruines romaines de Timgad et Djémila (UNESCO), et les gorges des Aures. Un pays aux dimensions continentales et à l'hospitalité légendaire.",
    en: "Algeria is the largest country in Africa and one of the least visited: the Casbah of Algiers (UNESCO) with its Ottoman houses, Ghardaïa and the M'Zab valley (UNESCO), the golden dunes of the Grand Erg Occidental in the Sahara, the Roman ruins of Timgad and Djémila (UNESCO), and the Aures gorges. A country of continental scale and legendary hospitality.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Printemps méditerranéen", en: "Mediterranean spring" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour le nord : Alger et la côte sont agréables (18–25°C). Sahara encore supportable (25–35°C). Meilleure période globale.",
        en: "Ideal for the north: Algiers and the coast are pleasant (18–25°C). Sahara still bearable (25–35°C). Best overall period.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November" },
      label: { fr: "Automne doux", en: "Mild autumn" },
      color: "#22c55e",
      description: {
        fr: "Excellent pour le Sahara (20–28°C) et les sites romains. Nord agréable. Dunes sans chaleur extrême.",
        en: "Excellent for the Sahara (20–28°C) and the Roman sites. Pleasant in the north. Dunes without extreme heat.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été saharien", en: "Saharan summer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur extrême dans le Sahara (45–50°C) et le sud. Côte méditerranéenne agréable mais bondée. Sahara déconseillé.",
        en: "Extreme heat in the Sahara (45–50°C) and the south. Mediterranean coast pleasant but crowded. Sahara not recommended.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "algiers",
      name: { fr: "Alger", en: "Algiers" },
      region: { fr: "Méditerranée (nord)", en: "Mediterranean (north)" },
      data: [
        { month: "Jan", temp: 12, rain: 90,  icon: "⛅" },
        { month: "Fév", temp: 13, rain: 70,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Avr", temp: 17, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Sep", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Oct", temp: 21, rain: 55,  icon: "⛅" },
        { month: "Nov", temp: 16, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 13, rain: 100, icon: "⛅" },
      ],
    },
    {
      id: "tamanrasset",
      name: "Tamanrasset",
      region: { fr: "Hoggar / Sahara (extrême sud)", en: "Hoggar / Sahara (far south)" },
      data: [
        { month: "Jan", temp: 14, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 17, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 21, rain: 0,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 5,  icon: "☀️" },
        { month: "Mai", temp: 30, rain: 5,  icon: "⛅" },
        { month: "Jun", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 10, icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Sep", temp: 30, rain: 10, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Nov", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 15, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "La Casbah d'Alger", en: "The Casbah of Algiers" },
      region: { fr: "Alger", en: "Algiers" },
      description: {
        fr: "La Casbah d'Alger (UNESCO) est un labyrinthe de ruelles ottomanes en pente douce sur la colline surplombant la mer : palais des Deys, mosquées du XVIe siècle, maisons à patios intérieurs avec fontaines, et les marches de rue emblématiques des films de la bataille d'Alger. Un monde à part, vivant et authentique.",
        en: "The Casbah of Algiers (UNESCO) is a labyrinth of gently sloping Ottoman alleyways on the hill overlooking the sea: palaces of the Deys, 16th-century mosques, houses with interior courtyards and fountains, and the iconic stairways made famous by films about the Battle of Algiers. A world apart, lively and authentic.",
      },
      wikipedia: "Casbah_of_Algiers",
      tags: ["UNESCO", "Casbah", "Ottoman", "Méditerranée", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Casbah d'Alger (UNESCO) — ruelles ottomanes du XVIe s.", en: "Casbah of Algiers (UNESCO) — 16th-century Ottoman alleyways" }, wikipedia: "Casbah_of_Algiers" },
        { name: { fr: "Palais des Raïs (Bastion 23) — musée des arts et traditions", en: "Palais des Raïs (Bastion 23) — museum of arts and traditions" }, wikipedia: "File:Palais des Rais (Es'hine) - Alger.JPG" },
        { name: { fr: "Mosquée Ketchaoua (1612) — ottomane puis cathédrale", en: "Ketchaoua Mosque (1612) — Ottoman mosque turned cathedral" }, wikipedia: "Ketchaoua_Mosque" },
        { name: { fr: "Front de mer d'Alger — la Méditerranée au pied de la Casbah", en: "Algiers waterfront — the Mediterranean at the foot of the Casbah" }, wikipedia: "File:Alger Kasbah02.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Tassili n'Ajjer — Art rupestre saharien", en: "Tassili n'Ajjer — Saharan rock art" },
      region: { fr: "Illizi / Sahara", en: "Illizi / Sahara" },
      description: {
        fr: "Le Tassili n'Ajjer (UNESCO) est le plus grand site d'art rupestre préhistorique du monde : 15 000 gravures et peintures réparties sur un plateau de grès éreinté par l'érosion, représentant les animaux et les hommes du Sahara vert d'il y a 10 000 ans. Une forêt de rochers en formes fantastiques dans un désert absolument pur.",
        en: "Tassili n'Ajjer (UNESCO) is the largest prehistoric rock art site in the world: 15,000 engravings and paintings spread across a sandstone plateau worn by erosion, depicting the animals and people of the green Sahara of 10,000 years ago. A forest of rocks in fantastical shapes within an utterly pristine desert.",
      },
      wikipedia: "File:Tassili Desert Algeria.jpg",
      tags: ["UNESCO", "Sahara", "Art rupestre", "Préhistoire", "Désert", "Nature"],
      mustSee: [
        { name: { fr: "Peintures rupestres de Sefar — le 'musée' préhistorique", en: "Rock paintings of Sefar — the prehistoric 'museum'" }, wikipedia: "File:Eheren1.jpg" },
        { name: { fr: "Forêt de rochers de Tamrit — cyprès du Sahara millénaires", en: "Rock forest of Tamrit — thousand-year-old Saharan cypresses" }, wikipedia: "File:Tassili n'Ajjer-Tamghit 02.jpg" },
        { name: { fr: "Bivouac sous les étoiles du désert", en: "Overnight camp under the desert stars" }, wikipedia: "File:Tassili Desert Algeria.jpg" },
        { name: { fr: "Gravures d'Iheren — girafes et éléphants dans le Sahara", en: "Iheren engravings — giraffes and elephants in the Sahara" }, wikipedia: "File:The Tanzoumaitak cave painting in Tassili n'ajjer.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Djémila & Timgad — Cités romaines", en: "Djémila & Timgad — Roman cities" },
      region: { fr: "Sétif / Batna", en: "Sétif / Batna" },
      description: {
        fr: "Djémila (UNESCO) et Timgad (UNESCO) sont deux cités romaines exceptionnellement bien conservées dans les montagnes algériennes : Timgad, construite en 100 apr. J.-C. par Trajan pour ses légions, étale sa grille parfaite dans la steppe ; Djémila, 'la belle' en arabe, est perchée sur un éperon rocheux avec forums, temples et arc de triomphe intacts.",
        en: "Djémila (UNESCO) and Timgad (UNESCO) are two exceptionally well-preserved Roman cities in the Algerian mountains: Timgad, built in 100 AD by Trajan for his legions, lays out its perfect grid across the steppe; Djémila, 'the beautiful' in Arabic, sits perched on a rocky spur with intact forums, temples and a triumphal arch.",
      },
      wikipedia: "Timgad",
      tags: ["UNESCO", "Romain", "Antique", "Montagne", "Architecture"],
      mustSee: [
        { name: { fr: "Timgad (UNESCO) — cité romaine de Trajan aux plans parfaits", en: "Timgad (UNESCO) — Trajan's Roman city with its perfect layout" }, wikipedia: "File:Timgad Ruins Panorama.jpg" },
        { name: { fr: "Djémila (UNESCO) — forum et arc de triomphe sur un éperon", en: "Djémila (UNESCO) — forum and triumphal arch on a rocky spur" }, wikipedia: "Djémila" },
        { name: { fr: "Musée archéologique de Djémila — mosaïques romaines", en: "Djémila Archaeological Museum — Roman mosaics" }, wikipedia: "File:Algerie Djemila 05.jpg" },
        { name: { fr: "Paysage de montagne autour des cités", en: "Mountain scenery surrounding the cities" }, wikipedia: "Timgad" },
      ],
    },
    {
      id: 4,
      name: { fr: "Hoggar — Désert et Touaregs", en: "Hoggar — Desert and Tuareg" },
      region: { fr: "Tamanrasset", en: "Tamanrasset" },
      description: {
        fr: "Le Hoggar (Ahaggar) est le cœur montagneux et spirituel du Sahara algérien : des volcans et des pics de granite rouge formant un paysage minéral et désertique à 3 000m d'altitude, l'ermitage du père de Foucauld sur l'Assekrem (lever de soleil légendaire), et les campements Touaregs aux tentes bleues. Une des plus grandes solitudes au monde.",
        en: "The Hoggar (Ahaggar) is the mountainous, spiritual heart of the Algerian Sahara: volcanoes and red granite peaks forming a mineral, desert landscape at 3,000m altitude, Father de Foucauld's hermitage on the Assekrem (legendary sunrise), and Tuareg camps with their blue tents. One of the greatest expanses of solitude on Earth.",
      },
      wikipedia: "File:Le Hoggar, Massif de l'Attekor.png",
      tags: ["Sahara", "Touaregs", "Montagne", "Désert", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Assekrem — lever de soleil sur le Hoggar (2 780m)", en: "Assekrem — sunrise over the Hoggar (2,780m)" }, wikipedia: "Assekrem" },
        { name: { fr: "Ermitage du Père de Foucauld (1905)", en: "Father de Foucauld's hermitage (1905)" }, wikipedia: "Charles_de_Foucauld" },
        { name: { fr: "Bivouac Touareg dans le désert de pierres (reg)", en: "Tuareg camp in the stony desert (reg)" }, wikipedia: "File:Ahaggar Mountains 1981 33.jpg" },
        { name: { fr: "Tamanrasset — marché Touareg (bijoux argent, cuir)", en: "Tamanrasset — Tuareg market (silver jewelry, leather)" }, wikipedia: "Tamanrasset" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Algérie est très abordable pour les touristes : les prix officiels sont fixés en dinars, peu chers au taux officiel. La principale difficulté est la nécessité d'une agence touristique agréée pour le Sahara. Les visas pour les Français sont parfois restrictifs — vérifier les conditions actuelles.",
      en: "Algeria is very affordable for tourists: prices are set in dinars and cheap at the official rate. The main hurdle is the requirement to use a licensed tourist agency for the Sahara. Visas can sometimes be restrictive — check current conditions before booking.",
    },
    currency: "DZD",
    exchangeRate: "1€ ≈ 145–155 DZD (taux officiel)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hôtel économique / pension", en: "Budget hotel / guesthouse" }, price: "20–40 €", detail: { fr: "Simple, clim ou ventilateur", en: "Basic, AC or fan" } },
          { label: { fr: "Hôtel 3★ (Alger, Constantine)", en: "3-star hotel (Algiers, Constantine)" }, price: "60–100 €", detail: { fr: "Clim, wifi, bon niveau", en: "AC, wifi, good standard" } },
          { label: { fr: "Hôtel de luxe / El Aurassi Alger", en: "Luxury hotel / El Aurassi Algiers" }, price: "130–220 €", detail: { fr: "Standard international", en: "International standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Chorba / couscous dans un restaurant local", en: "Chorba / couscous at a local restaurant" }, price: "2–5 €", detail: { fr: "Cuisine algérienne authentique", en: "Authentic Algerian cuisine" } },
          { label: { fr: "Restaurant mid-range Alger", en: "Mid-range restaurant in Algiers" }, price: "8–18 €", detail: { fr: "Fruits de mer, menu complet", en: "Seafood, full menu" } },
          { label: { fr: "Restaurant gastronomique Alger", en: "Fine dining in Algiers" }, price: "25–50 €", detail: { fr: "Cuisine méditerranéenne", en: "Mediterranean cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Métro / tram Alger", en: "Algiers metro / tram" }, price: "0,30–0,50 €", detail: { fr: "Réseau correct dans la capitale", en: "Decent network in the capital" } },
          { label: { fr: "Bus ou train inter-villes", en: "Intercity bus or train" }, price: "3–10 €", detail: { fr: "Selon trajet", en: "Depending on route" } },
          { label: { fr: "Circuit Sahara avec agence (par jour)", en: "Sahara tour with agency (per day)" }, price: "80–150 €/j", detail: { fr: "Obligatoire pour le Tassili et Hoggar", en: "Mandatory for the Tassili and Hoggar" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite guidée Casbah d'Alger", en: "Guided tour of the Casbah of Algiers" }, price: "10–20 €", detail: { fr: "Guide francophone", en: "French-speaking guide" } },
          { label: { fr: "Visite Timgad ou Djémila (transport inclus)", en: "Visit to Timgad or Djémila (transport included)" }, price: "15–30 €", detail: { fr: "Depuis Batna ou Sétif", en: "From Batna or Sétif" } },
          { label: { fr: "Circuit Tassili n'Ajjer (7 jours, agence)", en: "Tassili n'Ajjer tour (7 days, agency)" }, price: "800–1 500 €", detail: { fr: "Tout compris depuis Djanet", en: "All-inclusive from Djanet" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "40–70 €/j", desc: { fr: "Hôtel économique + cuisine locale + transports en commun", en: "Budget hotel + local food + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "90–140 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3-star hotel + restaurants + guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Sahara", en: "Sahara" }, daily: "120–200 €/j", desc: { fr: "Circuit agence Tassili / Hoggar tout compris", en: "All-inclusive agency tour of Tassili / Hoggar" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: { fr: "Alger (3j) → Timgad / Djémila (2j) → Ghardaïa / M'Zab (2j) → Djanet / Tassili (5j)", en: "Algiers (3d) → Timgad / Djémila (2d) → Ghardaïa / M'Zab (2d) → Djanet / Tassili (5d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Alger", en: "Round-trip flight Paris–Algiers" }, amount: "200–400 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "350–600 €" },
            { label: { fr: "Transports (bus, train, vol intérieur)", en: "Transport (bus, train, domestic flight)" }, amount: "200–400 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–300 €" },
            { label: { fr: "Guides & excursions nord", en: "Guides & northern excursions" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort + Sahara", en: "Comfort + Sahara" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Alger", en: "Round-trip flight Paris–Algiers" }, amount: "250–450 €" },
            { label: { fr: "Hébergement (7 nuits nord)", en: "Accommodation (7 nights, north)" }, amount: "500–800 €" },
            { label: { fr: "Circuit Tassili (5j, agence)", en: "Tassili tour (5 days, agency)" }, amount: "800–1 500 €" },
            { label: { fr: "Vols intérieurs Alger–Djanet", en: "Domestic flights Algiers–Djanet" }, amount: "200–400 €" },
            { label: { fr: "Nourriture & guides", en: "Food & guides" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" },  value: { fr: "~2h30 direct (Air Algérie, Air France, Transavia, Vueling — nombreuses liaisons)", en: "~2h30 direct (Air Algérie, Air France, Transavia, Vueling — many connections)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" },              value: { fr: "Visa obligatoire pour les Français — ambassade d'Algérie à Paris. Délais variables, parfois refus. Vérifier les conditions actuelles avant de réserver.", en: "Visa mandatory for French citizens — Algerian embassy in Paris. Variable processing times, occasional refusals. Check current conditions before booking." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" },           value: { fr: "Dinar algérien (DZD). Euros à changer dans les banques. Carte bancaire peu acceptée en dehors des grands hôtels.", en: "Algerian dinar (DZD). Change euros at banks. Credit cards rarely accepted outside major hotels." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" },            value: { fr: "Arabe (officiel) + Tamazight. Français très largement parlé et compris — communication facile.", en: "Arabic (official) + Tamazight. French is very widely spoken and understood — easy to communicate." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" },  value: { fr: "Type C/F (européen) — 230V.", en: "Type C/F (European) — 230V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" },             value: { fr: "Pas de vaccin obligatoire. Antipaludéen non nécessaire. Précautions alimentaires habituelles.", en: "No mandatory vaccination. Anti-malarial not needed. Usual food precautions apply." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" },    value: { fr: "Non potable dans la plupart des régions — eau en bouteille recommandée.", en: "Not drinkable in most regions — bottled water recommended." } },
    { icon: "📷", label: { fr: "Photographie", en: "Photography" },      value: { fr: "Éviter de photographier bâtiments officiels, militaires, police, frontières. Demander l'autorisation pour les personnes.", en: "Avoid photographing official buildings, military, police, or border areas. Ask permission before photographing people." } },
  ],
};
