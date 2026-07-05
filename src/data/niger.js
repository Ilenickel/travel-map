export const NIGER = {
  code: "NER",
  numericId: 562,
  name: { fr: "Niger", en: "Niger" },
  emoji: "🇳🇪",
  capital: { fr: "Niamey", en: "Niamey" },
  language: { fr: "Français, Haoussa, Zarma", en: "French, Hausa, Zarma" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 750, tripMid: 1500,
  },
  description: {
    fr: "Le Niger était l'une des destinations d'aventure les plus fascinantes du Sahara : Agadez, cité médiévale classée à l'UNESCO, les montagnes de l'Aïr et le désert du Ténéré avec ses dunes monumentales, et le parc W pour la faune sahélienne. Suite au coup d'état militaire de juillet 2023 et à l'instabilité sécuritaire persistante, le pays est actuellement déconseillé aux voyageurs.",
    en: "Niger used to be one of the most fascinating adventure destinations in the Sahara: Agadez, a medieval UNESCO-listed city, the Aïr mountains and the Ténéré desert with its monumental dunes, and W National Park for Sahelian wildlife. Following the military coup of July 2023 and ongoing security instability, the country is currently advised against for travellers.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison fraîche (pré-coup d'état)", en: "Cool season (pre-coup)" },
      color: "#22c55e",
      description: {
        fr: "Avant le coup d'état de 2023, c'était la seule période praticable : températures supportables (18–30°C), pistes du désert accessibles en 4x4, nuits fraîches et étoilées dans le Ténéré.",
        en: "Before the 2023 coup, this was the only viable period: bearable temperatures (18–30°C), desert tracks accessible by 4x4, cool starry nights in the Ténéré.",
      },
      icon: "🏜️",
    },
    {
      months: { fr: "Juillet – Septembre", en: "July – September" },
      label: { fr: "Saison des pluies (Sahel)", en: "Rainy season (Sahel)" },
      color: "#f59e0b",
      description: {
        fr: "Pluies au sud (Niamey, parc W), verdoyant mais routes difficiles. Le nord reste sec et torride (40°C+). Période de la fête du Sultan d'Agadez (Sultanat de l'Aïr).",
        en: "Rain in the south (Niamey, W Park), lush but difficult roads. The north stays dry and scorching (40°C+). Time of the Sultan of Agadez festival (Sultanate of Aïr).",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "niamey",
      name: "Niamey",
      region: { fr: "Capitale (Sahel, fleuve Niger)", en: "Capital (Sahel, Niger River)" },
      data: [
        { month: "Jan", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 31, rain: 2,   icon: "⛅" },
        { month: "Avr", temp: 36, rain: 10,  icon: "🌡️" },
        { month: "Mai", temp: 38, rain: 30,  icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 55,  icon: "🌡️" },
        { month: "Jul", temp: 32, rain: 85,  icon: "🌡️" },
        { month: "Aoû", temp: 31, rain: 100, icon: "🌧️" },
        { month: "Sep", temp: 30, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 32, rain: 20,  icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 2,   icon: "⛅" },
        { month: "Déc", temp: 22, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "agadez",
      name: "Agadez",
      region: { fr: "Aïr (désert, 500m)", en: "Aïr (desert, 500m)" },
      data: [
        { month: "Jan", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 29, rain: 0,  icon: "⛅" },
        { month: "Avr", temp: 35, rain: 2,  icon: "🌡️" },
        { month: "Mai", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Jun", temp: 39, rain: 10, icon: "🌡️" },
        { month: "Jul", temp: 36, rain: 30, icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 55, icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 25, icon: "🌡️" },
        { month: "Oct", temp: 32, rain: 5,  icon: "🌡️" },
        { month: "Nov", temp: 25, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 19, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Agadez — Cité du Désert", en: "Agadez — Desert City" },
      region: { fr: "Région d'Agadez (centre-nord)", en: "Agadez Region (north-centre)" },
      description: {
        fr: "Agadez est l'une des grandes villes caravanières du Sahara, classée au patrimoine mondial de l'UNESCO. Sa Grande Mosquée avec son minaret de terre et de bois est l'un des édifices les plus emblématiques d'Afrique de l'Ouest. La vieille ville en adobe aux ruelles labyrinthiques témoigne de cinq siècles d'histoire touareg, commerce trans-saharien et culture nomade. Avant la crise sécuritaire, c'était la principale porte d'entrée vers le Ténéré.",
        en: "Agadez is one of the Sahara's great caravan cities, a UNESCO World Heritage site. Its Grand Mosque with its earthen and wooden minaret is one of the most iconic buildings in West Africa. The adobe old town, with its labyrinthine alleys, bears witness to five centuries of Tuareg history, trans-Saharan trade and nomadic culture. Before the security crisis, it was the main gateway to the Ténéré.",
      },
      wikipedia: "Agadez",
      tags: ["UNESCO", "Culture touareg", "Architecture", "Désert"],
      mustSee: [
        { name: { fr: "Grande Mosquée d'Agadez — minaret de terre et de bois (27m), symbole de la ville", en: "Agadez Grand Mosque — 27m earthen and wooden minaret, symbol of the city" }, wikipedia: "File:Niger, Agadez (43), Grand Mosque.jpg" },
        { name: { fr: "Vieille ville (médina) d'Agadez — ruelles en adobe et palais du Sultan", en: "Agadez old town (medina) — adobe alleys and the Sultan's palace" }, wikipedia: "Agadez" },
        { name: { fr: "Palais du Sultan de l'Aïr — siège du pouvoir touareg", en: "Sultan of Aïr's Palace — seat of Tuareg power" }, wikipedia: "File:Pałac_wodza_Tuaregów_-_Agades_-_001189s.jpg" },
        { name: { fr: "Marché artisanal touareg — argent ciselé, cuir et instruments", en: "Tuareg craft market — chiselled silver, leather and instruments" }, wikipedia: "File:Esprit nomade.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Montagnes de l'Aïr & Désert du Ténéré", en: "Aïr Mountains & Ténéré Desert" },
      region: { fr: "Région d'Agadez (nord)", en: "Agadez Region (north)" },
      description: {
        fr: "Le massif de l'Aïr et le désert du Ténéré forment une réserve naturelle classée à l'UNESCO de plus de 7 millions d'hectares, l'une des plus grandes au monde. Les montagnes volcaniques de l'Aïr abritent des vallées verdoyantes (oasis), des gravures rupestres néolithiques et les célèbres addax, antilopes sahariennes. Le Ténéré, « désert dans le désert », offre des paysages de sable et d'ergs d'une beauté absolue, dominés par l'Arbre du Ténéré (aujourd'hui disparu).",
        en: "The Aïr massif and the Ténéré desert form a UNESCO-listed nature reserve of over 7 million hectares, one of the largest in the world. The volcanic Aïr mountains shelter green valleys (oases), Neolithic rock carvings and the famous addax, a Saharan antelope. The Ténéré, a 'desert within the desert', offers absolutely beautiful sand and erg landscapes, once dominated by the Tree of Ténéré (now gone).",
      },
      wikipedia: "File:Montagnes Bleus1.jpg",
      tags: ["UNESCO", "Sahara", "Gravures rupestres", "Faune"],
      mustSee: [
        { name: { fr: "Erg du Ténéré — mer de sable monumentale", en: "Ténéré Erg — a monumental sand sea" }, wikipedia: "Ténéré" },
        { name: { fr: "Gravures rupestres de l'Aïr — art néolithique saharien", en: "Aïr rock carvings — Neolithic Saharan art" }, wikipedia: "File:Fondazione Passaré V27 230.jpg" },
        { name: { fr: "Oasis de Timia — palmeraie dans les montagnes de l'Aïr", en: "Timia oasis — palm grove in the Aïr mountains" }, wikipedia: "Timia" },
        { name: { fr: "Massif de l'Arakao — dunes rouges spectaculaires", en: "Arakao massif — spectacular red dunes" }, wikipedia: "File:Michael martin wüste (49).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc National du W", en: "W National Park" },
      region: { fr: "Région de Dosso / Tillabéri (sud-ouest)", en: "Dosso / Tillabéri Region (south-west)" },
      description: {
        fr: "Le parc du W (ainsi nommé pour les méandres en W du fleuve Niger à ses frontières) est un parc transfrontalier classé à l'UNESCO partagé entre le Niger, le Bénin et le Burkina Faso. Il abrite lions, éléphants, buffles, hippopotames et une avifaune remarquable dans une savane sahélienne caractéristique. C'est la destination de safari la plus accessible depuis Niamey, à environ 150 km.",
        en: "W National Park (named after the W-shaped meanders of the Niger River along its borders) is a UNESCO-listed transboundary park shared between Niger, Benin and Burkina Faso. It shelters lions, elephants, buffalo, hippos and remarkable birdlife within a typical Sahelian savannah. It's the most accessible safari destination from Niamey, about 150 km away.",
      },
      wikipedia: "W_National_Park",
      tags: ["Safari", "UNESCO", "Lions", "Éléphants"],
      mustSee: [
        { name: { fr: "Mares d'hippopotames — nombreux dans le fleuve Niger", en: "Hippo pools — numerous in the Niger River" }, wikipedia: "File:La_boule_du_monde,_Chutes_de_koudou,_Parc_W,_Benin.jpg" },
        { name: { fr: "Troupeaux d'éléphants — migration entre les trois pays", en: "Elephant herds — migrating between the three countries" }, wikipedia: "File:Elephants bath park w wide 2006.jpg" },
        { name: { fr: "Panoramas sur le fleuve Niger", en: "Views over the Niger River" }, wikipedia: "File:Niger_Safari.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Niger est l'une des destinations les moins chères de la région, mais les coûts d'expédition vers le désert (4x4 obligatoire, carburant, guide) représentent l'essentiel du budget. Suite au coup d'état de 2023, la situation économique et sécuritaire a considérablement affecté l'accès aux sites touristiques.",
      en: "Niger is one of the cheapest destinations in the region, but the cost of desert expeditions (mandatory 4x4, fuel, guide) makes up most of the budget. Following the 2023 coup, the economic and security situation has significantly affected access to tourist sites.",
    },
    currency: "XOF",
    exchangeRate: "1€ ≈ 655 XOF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / guesthouse basique", en: "Basic hostel / guesthouse" }, range: "8–20 €" },
          { label: { fr: "Hôtel milieu de gamme (Niamey)", en: "Mid-range hotel (Niamey)" }, range: "30–60 €" },
          { label: { fr: "Camp désert (Ténéré, tente)", en: "Desert camp (Ténéré, tent)" }, range: "20–40 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Riz, millet ou pâtes au marché local", en: "Rice, millet or pasta at the local market" }, range: "1–3 €" },
          { label: { fr: "Restaurant en ville", en: "Restaurant in town" }, range: "5–12 €" },
          { label: { fr: "Thé touareg (cérémonie des 3 thés)", en: "Tuareg tea (the three-tea ceremony)" }, range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bush taxi (Niamey–Dosso)", en: "Bush taxi (Niamey–Dosso)" }, range: "3–8 €" },
          { label: { fr: "Location 4x4 avec chauffeur-guide", en: "4x4 rental with driver-guide" }, range: "100–180 €/j" },
          { label: { fr: "Carburant supplémentaire pour désert", en: "Extra fuel for the desert" }, range: "50–100 € par expédition" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée parc du W", en: "W Park entry" }, range: "5–10 €" },
          { label: { fr: "Guide culturel à Agadez (demi-journée)", en: "Cultural guide in Agadez (half day)" }, range: "15–30 €" },
          { label: { fr: "Promenade à dromadaire (Ténéré)", en: "Camel ride (Ténéré)" }, range: "20–40 €/j" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Hors logistique désert. Hébergement basique, nourriture locale.", en: "Excluding desert logistics. Basic accommodation, local food." }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "60–120 €/j", desc: { fr: "Hôtel correct + expédition Ténéré avec 4x4 et guide.", en: "Decent hotel + Ténéré expedition with 4x4 and guide." }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Niamey → Parc W → Dosso → Agadez → Aïr & Ténéré", en: "Niamey → W Park → Dosso → Agadez → Aïr & Ténéré" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "750 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Niamey", en: "Return flight Paris–Niamey" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "90–180 €" },
            { label: { fr: "Transports locaux + bush taxi", en: "Local transport + bush taxi" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "100–180 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "100–180 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Niamey", en: "Return flight Paris–Niamey" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "270–540 €" },
            { label: { fr: "Location 4x4 + carburant désert", en: "4x4 rental + desert fuel" }, amount: "450–700 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "200–350 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "150–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Vols avec Air France ou via Casablanca (Royal Air Maroc) et Abidjan (Air Côte d'Ivoire). Durée ~6–10h selon connexion.", en: "Flights with Air France or via Casablanca (Royal Air Maroc) and Abidjan (Air Côte d'Ivoire). ~6–10h depending on connection." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire. Obtention en ambassade à Paris. Les formalités peuvent être perturbées selon la situation politique actuelle.", en: "Visa required. Obtainable from the embassy in Paris. Formalities may be disrupted depending on the current political situation." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA UEMOA (XOF). Espèces indispensables dans tout le pays. Quelques distributeurs à Niamey seulement.", en: "UEMOA CFA franc (XOF). Cash essential throughout the country. Only a few ATMs, in Niamey only." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel), haoussa et zarma (langues véhiculaires), tamachek (langue touareg). Le français est compris dans les villes.", en: "French (official), Hausa and Zarma (lingua francas), Tamashek (Tuareg language). French is understood in the cities." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C et Type E (comme en France). Tension 220V. Coupures de courant très fréquentes à Niamey.", en: "Type C and Type E (as in France). 220V. Power cuts very frequent in Niamey." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Paludisme présent dans le sud : prophylaxie indispensable. Méningite recommandée (ceinture de la méningite). Chaleur extrême : hydratation vitale.", en: "Yellow fever vaccine mandatory. Malaria present in the south: prophylaxis essential. Meningitis vaccine recommended (meningitis belt). Extreme heat: hydration is vital." } },
    { icon: "⚠️", label: { fr: "Sécurité — AVERTISSEMENT", en: "Safety — WARNING" }, value: { fr: "🚫 Le Niger est classé en zone rouge par le MEAE depuis le coup d'état militaire de juillet 2023. Risque d'enlèvements, attaques jihadistes (zones frontalières Mali, Burkina). Consulter impérativement conseils-aux-voyageurs.gouv.fr avant tout projet.", en: "🚫 Niger has been classified a red zone by the French Foreign Ministry since the July 2023 military coup. Risk of kidnappings, jihadist attacks (border areas with Mali, Burkina Faso). Always check official travel advisories before planning a trip." } },
    { icon: "🏜️", label: { fr: "Logistique désert", en: "Desert logistics" }, value: { fr: "Toute expédition dans l'Aïr ou le Ténéré nécessite au minimum 2 véhicules 4x4, guide touareg homologué, carburant pour 1 000+ km, GPS et communication satellite.", en: "Any expedition into the Aïr or the Ténéré requires at least 2 4x4 vehicles, a certified Tuareg guide, fuel for 1,000+ km, GPS and satellite communication." } },
  ],
};
