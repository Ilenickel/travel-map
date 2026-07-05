export const TUNISIA = {
  code: "TUN",
  numericId: 788,
  name: { fr: "Tunisie", en: "Tunisia" },
  emoji: "🇹🇳",
  capital: { fr: "Tunis", en: "Tunis" },
  language: { fr: "Arabe, Français", en: "Arabic, French" },
  currency: { fr: "Dinar tunisien (TND)", en: "Tunisian Dinar (TND)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1500,
  },
  description: {
    fr: "La Tunisie est la destination africaine la plus accessible depuis l'Europe : Carthage et son histoire millénaire, Sidi Bou Saïd aux maisons blanc et bleu, le désert du Sahara à Douz, les plages de Djerba et la médina de Tunis inscrite à l'UNESCO.",
    en: "Tunisia is the most accessible African destination from Europe: Carthage and its millennia-old history, Sidi Bou Saïd with its white and blue houses, the Sahara desert in Douz, Djerba's beaches and the UNESCO-listed medina of Tunis.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (16–25 °C), fleurs de pommiers dans le Tell, peu de touristes. Idéal pour Tunis, Dougga, Kairouan.",
        en: "Ideal temperatures (16–25 °C), apple blossom in the Tell region, few tourists. Ideal for Tunis, Dougga, Kairouan.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November" },
      label: { fr: "Arrière-saison", en: "Late season" },
      color: "#fb923c",
      description: {
        fr: "Mer chaude (24–27 °C), températures agréables, foules moins denses que juillet-août. Bon moment pour tout.",
        en: "Warm sea (24–27 °C), pleasant temperatures, smaller crowds than July-August. A good time for everything.",
      },
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "tunis",
      name: { fr: "Tunis", en: "Tunis" },
      region: { fr: "Grand Tunis", en: "Greater Tunis" },
      data: [
        { month: "Jan", temp: 11, rain: 60,  icon: "⛅" },
        { month: "Fév", temp: 12, rain: 50,  icon: "⛅" },
        { month: "Mar", temp: 14, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 20, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 29, rain: 2,   icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Sep", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Oct", temp: 22, rain: 50,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: 12, rain: 65,  icon: "⛅" },
      ],
    },
    {
      id: "djerba",
      name: { fr: "Djerba", en: "Djerba" },
      region: { fr: "Médenine", en: "Medenine" },
      data: [
        { month: "Jan", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Fév", temp: 14, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 18, rain: 15,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Jun", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 31, rain: 2,   icon: "⛅" },
        { month: "Sep", temp: 28, rain: 20,  icon: "⛅" },
        { month: "Oct", temp: 23, rain: 45,  icon: "☀️" },
        { month: "Nov", temp: 18, rain: 45,  icon: "⛅" },
        { month: "Déc", temp: 14, rain: 45,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Tunis & Carthage", en: "Tunis & Carthage" },
      region: { fr: "Grand Tunis", en: "Greater Tunis" },
      description: {
        fr: "La médina de Tunis (UNESCO) est un labyrinthe envoûtant de souks, mosquées et palais. À 15 km, les ruines de Carthage (UNESCO) et le village blanc et bleu de Sidi Bou Saïd complètent une journée inoubliable.",
        en: "The medina of Tunis (UNESCO) is an enchanting maze of souks, mosques and palaces. 15 km away, the ruins of Carthage (UNESCO) and the white and blue village of Sidi Bou Saïd round out an unforgettable day.",
      },
      wikipedia: "Tunis",
      tags: ["Histoire", "UNESCO", "Médina", "Archéologie"],
      mustSee: [
        { name: { fr: "Médina de Tunis (UNESCO)", en: "Medina of Tunis (UNESCO)" }, wikipedia: "Medina_of_Tunis" },
        { name: { fr: "Ruines de Carthage (UNESCO)", en: "Ruins of Carthage (UNESCO)" }, wikipedia: "File:Tunisie Carthage Ruines 08.JPG" },
        { name: { fr: "Sidi Bou Saïd — village blanc et bleu", en: "Sidi Bou Saïd — white and blue village" }, wikipedia: "Sidi_Bou_Said" },
        { name: { fr: "Musée du Bardo — mosaïques romaines", en: "Bardo Museum — Roman mosaics" }, wikipedia: "File:Bardo Museum Hall.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Sahara & Déserts du Sud", en: "Sahara & Southern Deserts" },
      region: { fr: "Kébili / Tozeur", en: "Kebili / Tozeur" },
      description: {
        fr: "Les déserts du Sud tunisien offrent des paysages grandioses : dunes de l'Erg Oriental à Douz, l'oasis de Tozeur, les chott (lacs salés) et le tournage de Star Wars dans des décors extraterrestres.",
        en: "The deserts of southern Tunisia offer grandiose landscapes: the dunes of the Erg Oriental in Douz, the oasis of Tozeur, the chott (salt lakes) and the Star Wars filming locations in otherworldly settings.",
      },
      wikipedia: "File:Sahara autour de Jbil.jpg",
      tags: ["Désert", "Dunes", "4x4", "Star Wars"],
      mustSee: [
        { name: { fr: "Dunes de Douz (porte du Sahara)", en: "Douz dunes (gateway to the Sahara)" }, wikipedia: "File:Douz Tunisia.jpg" },
        { name: { fr: "Chott el-Jérid (lac de sel)", en: "Chott el-Jerid (salt lake)" }, wikipedia: "File:Chott-El-Jerid-Sunrise.JPG" },
        { name: { fr: "Oasis de Tozeur & palmeraie", en: "Tozeur oasis & palm grove" }, wikipedia: "Tozeur" },
        { name: { fr: "Décors de Star Wars (Matmata)", en: "Star Wars filming locations (Matmata)" }, wikipedia: "Matmata,_Tunisia" },
      ],
    },
    {
      id: 3,
      name: { fr: "Djerba", en: "Djerba" },
      region: { fr: "Médenine", en: "Medenine" },
      description: {
        fr: "L'île de Djerba est la principale destination balnéaire de Tunisie : plages dorées, eaux turquoise, la vieille ville d'Houmt Souk et la synagogue de La Ghriba, l'une des plus anciennes du monde.",
        en: "Djerba Island is Tunisia's main beach destination: golden beaches, turquoise waters, the old town of Houmt Souk and the La Ghriba synagogue, one of the oldest in the world.",
      },
      wikipedia: "File:Djerba harbor.jpg",
      tags: ["Plage", "Détente", "Culture", "Balnéaire"],
      mustSee: [
        { name: { fr: "Plage de Sidi Mahrez", en: "Sidi Mahrez Beach" }, wikipedia: "File:Djerba el mouradi menzel hotel beach-3.jpg" },
        { name: { fr: "Synagogue de La Ghriba (IIIe s. av. J.-C.)", en: "La Ghriba Synagogue (3rd century BC)" }, wikipedia: "File:Synagogue de la Ghriba Djerba 11.jpg" },
        { name: { fr: "Houmt Souk — quartier historique", en: "Houmt Souk — historic quarter" }, wikipedia: "File:Houmt Souk May 2007.JPG" },
        { name: { fr: "Fort Borj El Kebir", en: "Borj El Kebir Fort" }, wikipedia: "File:Borj ghazi Mustapha002.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Dougga & Sites romains", en: "Dougga & Roman sites" },
      region: { fr: "Beja / Siliana", en: "Beja / Siliana" },
      description: {
        fr: "Dougga est le site romain le mieux conservé d'Afrique du Nord (UNESCO) : théâtre, temples, forum et arc de triomphe dans un cadre rural préservé. Sbeitla et El-Djem complètent un circuit archéologique exceptionnel.",
        en: "Dougga is the best-preserved Roman site in North Africa (UNESCO): theatre, temples, forum and triumphal arch in a preserved rural setting. Sbeitla and El-Djem round out an exceptional archaeological tour.",
      },
      wikipedia: "Dougga",
      tags: ["Archéologie", "Romain", "UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Site romain de Dougga (UNESCO)", en: "Roman site of Dougga (UNESCO)" }, wikipedia: "Dougga" },
        { name: { fr: "Amphithéâtre d'El-Djem (UNESCO)", en: "Amphitheatre of El-Djem (UNESCO)" }, wikipedia: "Amphitheatre_of_El_Jem" },
        { name: { fr: "Kairouan — mosquée Aghlabide (UNESCO)", en: "Kairouan — Great Mosque (UNESCO)" }, wikipedia: "Great_Mosque_of_Kairouan" },
        { name: { fr: "Sbeitla — ruines romano-byzantines", en: "Sbeitla — Roman-Byzantine ruins" }, wikipedia: "File:Sbeitla 10.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Tunisie est l'une des destinations les moins chères de la Méditerranée. Le dinar est faible, tout est abordable pour les touristes européens.",
      en: "Tunisia is one of the cheapest destinations in the Mediterranean. The dinar is weak, making everything affordable for European tourists.",
    },
    currency: "TND",
    exchangeRate: "1€ ≈ 3,40 TND",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Riad / maison d'hôte", en: "Riad / guesthouse" }, price: "20–40 €", detail: { fr: "Dans la médina de Tunis", en: "In the medina of Tunis" } },
          { label: { fr: "Hôtel 3★ balnéaire", en: "3★ beach hotel" }, price: "40–70 €", detail: { fr: "Demi-pension souvent incluse", en: "Half board often included" } },
          { label: { fr: "Resort 4★ Djerba", en: "4★ resort in Djerba" }, price: "70–120 €", detail: { fr: "All-inclusive disponible", en: "All-inclusive available" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Brik à l'œuf, fricassé", en: "Egg brik, fricassé" }, price: "1–3 €", detail: { fr: "Snacks emblématiques", en: "Iconic snacks" } },
          { label: { fr: "Restaurant local (couscous, chorba)", en: "Local restaurant (couscous, chorba)" }, price: "5–10 €", detail: { fr: "Repas complet", en: "Full meal" } },
          { label: { fr: "Restaurant gastronomique Tunis", en: "Fine dining in Tunis" }, price: "15–30 €", detail: { fr: "Fruits de mer, cuisine moderne", en: "Seafood, modern cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Location voiture / jour", en: "Car rental / day" }, price: "25–40 €", detail: { fr: "Pratique pour le sud", en: "Handy for the south" } },
          { label: { fr: "Taxi (Tunis, trajet)", en: "Taxi (Tunis, ride)" }, price: "2–5 €", detail: { fr: "Compteur obligatoire", en: "Meter mandatory" } },
          { label: { fr: "Louage (taxi partagé intercités)", en: "Louage (shared intercity taxi)" }, price: "5–15 €", detail: { fr: "Rapide et local", en: "Fast and local" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Carthage / Dougga", en: "Carthage / Dougga entry" }, price: "3–6 €", detail: { fr: "Tarifs très accessibles", en: "Very affordable rates" } },
          { label: { fr: "Musée du Bardo", en: "Bardo Museum" }, price: "5–8 €", detail: { fr: "Collections romaines uniques", en: "Unique Roman collections" } },
          { label: { fr: "Excursion Sahara (1 nuit)", en: "Sahara excursion (1 night)" }, price: "60–100 €", detail: { fr: "Dune, nuit sous les étoiles", en: "Dunes, night under the stars" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Guesthouse + restaurants locaux + transports", en: "Guesthouse + local restaurants + transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70–110 €/j", desc: { fr: "Hôtel 3★ + bons restos + excursions", en: "3★ hotel + good restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Resort 5★ all-inclusive + expériences privées", en: "5★ all-inclusive resort + private experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Tunis & Carthage (3j) → Kairouan (1j) → El-Djem (1j) → Djerba (3j) → Sahara / Tozeur (2j)",
        en: "Tunis & Carthage (3d) → Kairouan (1d) → El-Djem (1d) → Djerba (3d) → Sahara / Tozeur (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tunis", en: "Return flight Paris–Tunis" }, amount: "150–300 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–250 €" },
            { label: { fr: "Location voiture", en: "Car rental" }, amount: "200–300 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tunis", en: "Return flight Paris–Tunis" }, amount: "200–400 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–500 €" },
            { label: { fr: "Transport + excursions", en: "Transport + excursions" }, amount: "300–400 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–300 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "3 500 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tunis (direct)", en: "Return flight Paris–Tunis (direct)" }, amount: "400–800 €" },
            { label: { fr: "Resorts & riads de luxe (10 nuits)", en: "Luxury resorts & riads (10 nights)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Gastronomie & dégustations", en: "Fine dining & tastings" }, amount: "500–800 €" },
            { label: { fr: "Circuit privé & safari désert", en: "Private tour & desert safari" }, amount: "400–600 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "200 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2,5h (Transavia, Tunisair, Nouvelair)", en: "~2.5h (Transavia, Tunisair, Nouvelair)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (jusqu'à 3 mois)", en: "No visa required for French citizens (up to 3 months)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dinar (1€ ≈ 3,40 TND) — espèces, euros acceptés", en: "Dinar (1€ ≈ 3.40 TND) — cash, euros accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arabe + Français (très courant)", en: "Arabic + French (very common)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E – 220 V", en: "Type C/E – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture, SIM locale ~5€ (Ooredoo, Orange)", en: "Good coverage, local SIM ~5€ (Ooredoo, Orange)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non recommandée (calcaire) — eau en bouteille", en: "Not recommended (hard water) — bottled water advised" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire, soins corrects", en: "No mandatory vaccines, decent healthcare" } },
  ],
};
