export const CUBA = {
  code: "CUB",
  numericId: 192,
  name: { fr: "Cuba", en: "Cuba" },
  emoji: "🇨🇺",
  capital: { fr: "La Havane", en: "Havana" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Peso cubain (CUP)", en: "Cuban peso (CUP)" },
  timezone: "UTC-5",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1500, tripMid: 3500,
  },
  description: {
    fr: "Cuba est une capsule temporelle : voitures américaines des années 50, musique de salsa et son dans les ruelles de la Havane, plages vierges de Varadero et de Cayo Coco, Trinidad coloniale classée UNESCO et la vallée de Viñales, ses mogotes calcaires et ses plantations de tabac. Un pays unique, figé et fascinant.",
    en: "Cuba is a time capsule: 1950s American cars, salsa and son music drifting through Havana's streets, untouched beaches in Varadero and Cayo Coco, UNESCO-listed colonial Trinidad, and the Viñales Valley with its limestone mogotes and tobacco plantations. A unique country, frozen in time and utterly captivating.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison idéale : températures parfaites (25–28°C), pluies rares, mer calme pour les cayes. Haute saison touristique mais justifiée.",
        en: "The ideal season: perfect temperatures (25–28°C), little rain and calm seas around the cays. Peak tourist season, but for good reason.",
      },
      icon: "🚗",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August" },
      label: { fr: "Été chaud", en: "Hot summer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur et humidité élevées (30–33°C), saison des cyclones (août–octobre). Réservé aux amateurs de plage sous la chaleur.",
        en: "High heat and humidity (30–33°C), with hurricane season from August to October. Best for travellers who love beach days in intense heat.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "la_havane",
      name: "La Havane",
      region: { fr: "Occidente", en: "Western Cuba" },
      data: [
        { month: "Jan", temp: 22, rain: 45,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Nov", temp: 25, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 23, rain: 50,  icon: "☀️" },
      ],
    },
    {
      id: "trinidad",
      name: "Trinidad",
      region: { fr: "Centre", en: "Central Cuba" },
      data: [
        { month: "Jan", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 30, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 31, rain: 150, icon: "🌧️" },
        { month: "Aoû", temp: 31, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 24, rain: 40,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "La Havane", en: "Havana" },
      region: { fr: "Occidente", en: "Western Cuba" },
      description: {
        fr: "La Havane est une des capitales les plus charismatiques du monde : son Malecón face à la mer, ses Américaines rutilantes des années 50, son Vieux-Havane classé UNESCO, ses bars à mojitos légendaires (La Bodeguita del Medio) et sa musique omniprésente. Une ville qui vit intensément malgré tout.",
        en: "Havana is one of the most charismatic capitals in the world: its seafront Malecón, gleaming 1950s American cars, UNESCO-listed Old Havana, legendary mojito bars (La Bodeguita del Medio) and music everywhere you go. A city that lives intensely despite everything.",
      },
      wikipedia: "Havana",
      tags: ["UNESCO", "Musique", "Architecture", "Emblématique"],
      mustSee: [
        { name: { fr: "Malecón au coucher du soleil", en: "Malecón at sunset" }, wikipedia: "Malecón,_Havana" },
        { name: { fr: "Capitolio Nacional", en: "El Capitolio" }, wikipedia: "File:CapitolioNacionalDeColombia2004-7.jpg" },
        { name: { fr: "Plaza de la Revolución", en: "Revolution Square" }, wikipedia: "File:Plaza_de_la_Revolution.jpg" },
      ],
    },
    {
      id: 2,
      name: "Trinidad",
      region: { fr: "Centre", en: "Central Cuba" },
      description: {
        fr: "Trinidad est la ville coloniale la mieux préservée de Cuba, classée UNESCO : son centre historique en pavés rose et ses maisons ocre-orangées encadrent la Plaza Mayor. La nuit, les escaliers de la Casa de la Música et les bars de la rue résonnent de son cubain jusqu'à l'aube.",
        en: "Trinidad is Cuba's best-preserved colonial town and a UNESCO site: its historic centre of pink cobblestones and ochre-orange houses frames Plaza Mayor. At night, the steps of Casa de la Música and the street bars pulse with Cuban son until dawn.",
      },
      wikipedia: "Trinidad,_Cuba",
      tags: ["UNESCO", "Colonial", "Musique", "Salsa"],
      mustSee: [
        { name: { fr: "Plaza Mayor & Église de la Santísima Trinidad", en: "Plaza Mayor & Church of the Holy Trinity" }, wikipedia: "File:Trinidad_(Kuba)_03.jpg" },
        { name: { fr: "Salsa sur les escaliers de la Casa de la Música", en: "Salsa on the Casa de la Música steps" }, wikipedia: "Trinidad,_Cuba" },
        { name: { fr: "Cascades Topes de Collantes (randonnée)", en: "Topes de Collantes waterfalls (hiking)" }, wikipedia: "File:Cuba_2013-01-27_(8554174568).jpg" },
        { name: { fr: "Valle de los Ingenios (UNESCO) — anciens moulins", en: "Valle de los Ingenios (UNESCO) — former sugar mills" }, wikipedia: "File:Valle_de_los_ingenios2.jpg" },
      ],
    },
    {
      id: 3,
      name: "Viñales",
      region: { fr: "Occidente (Pinar del Río)", en: "Western Cuba (Pinar del Río)" },
      description: {
        fr: "La Vallée de Viñales, classée UNESCO, est le paysage le plus iconique de Cuba : des formations calcaires en pain de sucre (mogotes) s'élèvent au-dessus des plantations de tabac rouge — le meilleur tabac du monde. Les « vegas » (fermes de tabac) se visitent à cheval ou en vélo.",
        en: "The Viñales Valley, a UNESCO site, is Cuba's most iconic landscape: limestone sugarloaf formations (mogotes) rise above red tobacco plantations—the finest tobacco in the world. The vegas (tobacco farms) can be explored on horseback or by bike.",
      },
      wikipedia: "Viñales_Valley",
      tags: ["UNESCO", "Nature", "Tabac", "Randonnée"],
      mustSee: [
        { name: { fr: "Mogotes — formations karstiques géantes", en: "Mogotes — giant karst formations" }, wikipedia: "File:Vallée_de_Viñales-Mogote_(1).jpg" },
        { name: { fr: "Cueva del Indio — grotte en barque", en: "Cueva del Indio — cave boat ride" }, wikipedia: "File:CUBA_-_panoramio_(59).jpg" },
        { name: { fr: "Randonnée ou cheval entre les mogotes", en: "Hike or ride horseback between the mogotes" }, wikipedia: "File:Fragmento_del_Valle_de_Viñales._Cuba.JPG" },
      ],
    },
    {
      id: 4,
      name: { fr: "Varadero & Cayes", en: "Varadero & Cays" },
      region: { fr: "Matanzas / Ciego de Ávila", en: "Matanzas / Ciego de Ávila" },
      description: {
        fr: "Varadero offre 23 km de plage de sable blanc, une des plus longues des Caraïbes. Les cayes (Cayo Coco, Cayo Santa María) sont des atolls sauvages aux eaux turquoise, peu fréquentés, accessibles depuis Ciego de Ávila.",
        en: "Varadero offers 23 km of white-sand beach, one of the longest in the Caribbean. The cays (Cayo Coco, Cayo Santa María) are wild islets with turquoise waters and relatively few crowds, accessible from Ciego de Ávila.",
      },
      wikipedia: "Varadero",
      tags: ["Plage", "Caraïbes", "All-inclusive", "Snorkel"],
      mustSee: [
        { name: { fr: "Plage de Varadero (23 km de sable blanc)", en: "Varadero Beach (23 km of white sand)" }, wikipedia: "File:Plage_de_Varadero.JPG" },
        { name: { fr: "Cayo Coco — plage sauvage & flamants roses", en: "Cayo Coco — wild beach & flamingos" }, wikipedia: "Cayo_Coco" },
        { name: { fr: "Snorkel et plongée (récifs Varadero)", en: "Snorkelling and diving (Varadero reefs)" }, wikipedia: "Varadero" },
        { name: { fr: "Cayo Santa María — eaux cristallines", en: "Cayo Santa María — crystal-clear waters" }, wikipedia: "Cayo_Santa_María" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Cuba a un système monétaire complexe pour les touristes. Depuis 2021, le CUP (peso cubain) est la seule monnaie officielle. Les euros ou dollars s'échangent en CUP. L'accès aux biens de consommation est limité et les prix fluctuent. Prévoir du cash.",
      en: "Cuba has a complex monetary system for travellers. Since 2021, the CUP (Cuban peso) has been the only official currency. Euros or dollars are exchanged into CUP. Consumer goods can be hard to find and prices fluctuate. Bring cash.",
    },
    currency: "CUP",
    exchangeRate: "1€ ≈ 120 CUP (taux non officiel, varie)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Casa particular (chambre chez l'habitant)", en: "Casa particular (room in a local home)" }, price: "20–40 €", detail: { fr: "Authentique, recommandé", en: "Authentic, highly recommended" } },
          { label: { fr: "Hôtel d'État 3★", en: "State-run 3★ hotel" }, price: "50–100 €", detail: { fr: "Qualité variable", en: "Quality varies" } },
          { label: { fr: "Resort all-inclusive Varadero", en: "Varadero all-inclusive resort" }, price: "100–200 €", detail: { fr: "Tout compris, plage privée", en: "All-inclusive, private beach" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas casa particular (inclus souvent)", en: "Meal at a casa particular (often included)" }, price: "8–15 €", detail: { fr: "Copieux, poisson, fruits", en: "Hearty, with fish and fruit" } },
          { label: { fr: "Paladares (restos privés)", en: "Paladares (private restaurants)" }, price: "10–25 €", detail: { fr: "Bien meilleurs que l'État", en: "Far better than state-run places" } },
          { label: { fr: "Mojito ou daiquiri (La Floridita)", en: "Mojito or daiquiri (La Floridita)" }, price: "5–8 €", detail: { fr: "L'expérience Hemingway", en: "The Hemingway experience" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Viazul (bus inter-villes)", en: "Viazul (intercity bus)" }, price: "10–25 €", detail: { fr: "La Havane–Trinidad : 6h", en: "Havana–Trinidad: 6h" } },
          { label: { fr: "Taxi colectivo (voiture partagée)", en: "Taxi colectivo (shared car)" }, price: "15–30 €", detail: { fr: "Américaines vintage !", en: "Vintage American cars!" } },
          { label: { fr: "Vol intérieur La Havane–Santiago", en: "Domestic flight Havana–Santiago" }, price: "60–100 €", detail: { fr: "Quand disponible (Cubana)", en: "When available (Cubana)" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Tour en Américaine décapotable (2h)", en: "Convertible classic car tour (2h)" }, price: "25–40 €", detail: { fr: "La Havane — incontournable", en: "Havana — a must" } },
          { label: { fr: "Cours de salsa (1h)", en: "Salsa class (1h)" }, price: "10–20 €", detail: { fr: "Avec musiciens en direct", en: "With live musicians" } },
          { label: { fr: "Excursion Viñales (journée)", en: "Viñales excursion (day trip)" }, price: "30–50 €", detail: { fr: "Cheval + cave + tabac", en: "Horseback + cave + tobacco" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Casa particular + paladar + Viazul", en: "Casa particular + paladar + Viazul" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "120–180 €/j", desc: { fr: "Hôtel correct + restos privés + excursions", en: "Decent hotel + private restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €+/j", desc: { fr: "Resort all-inclusive + guide privé + américaines", en: "All-inclusive resort + private guide + classic cars" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "La Havane (4j) → Viñales (2j) → Trinidad (3j) → Varadero (3j)",
        en: "Havana (4d) → Viñales (2d) → Trinidad (3d) → Varadero (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Havane", en: "Return flight Paris–Havana" }, amount: "400–700 €" },
            { label: { fr: "Casas particulares (12 nuits)", en: "Casas particulares (12 nights)" }, amount: "350–550 €" },
            { label: { fr: "Nourriture & mojitos", en: "Food & mojitos" }, amount: "350–500 €" },
            { label: { fr: "Transports (Viazul + taxis)", en: "Transport (Viazul + taxis)" }, amount: "200–300 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Havane", en: "Return flight Paris–Havana" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "900–1 500 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails" }, amount: "600–900 €" },
            { label: { fr: "Taxis privés & transports", en: "Private taxis & transport" }, amount: "500–800 €" },
            { label: { fr: "Excursions & activités", en: "Excursions & activities" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–La Havane (direct)", en: "Return flight Paris–Havana (direct)" }, amount: "1 000–2 000 €" },
            { label: { fr: "Hôtels & resorts (12 nuits)", en: "Hotels & resorts (12 nights)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Gastronomie & cigares Cohiba", en: "Fine dining & Cohiba cigars" }, amount: "800–1 500 €" },
            { label: { fr: "Américaine privée + guide", en: "Private classic car + guide" }, amount: "600–1 000 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~10h direct (Air France, Corsair, TUI fly)", en: "~10h direct (Air France, Corsair, TUI fly)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Tarjeta turística (~25€, incluse dans certains vols) obligatoire", en: "Tourist card (~€25, included with some flights) required" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Peso cubain (CUP) — espèces OBLIGATOIRES, cartes refusées", en: "Cuban peso (CUP) — cash is ESSENTIAL, cards are often refused" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol", en: "Spanish" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B/C – 110 V ou 220 V selon zones", en: "Type A/B/C – 110 V or 220 V depending on the area" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Wi-Fi limité (ETECSA, hôtels) — internet très lent", en: "Limited Wi-Fi (ETECSA, hotels) — very slow internet" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water is mandatory" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Assurance voyage OBLIGATOIRE (vérifiée à l'arrivée)", en: "Travel insurance is MANDATORY (checked on arrival)" } },
  ],
};
