export const NIGERIA = {
  code: "NGA",
  numericId: 566,
  name: { fr: "Nigéria", en: "Nigeria" },
  emoji: "🇳🇬",
  capital: { fr: "Abuja", en: "Abuja" },
  language: { fr: "Anglais, Haoussa, Yoruba, Igbo", en: "English, Hausa, Yoruba, Igbo" },
  currency: { fr: "Naira (NGN)", en: "Naira (NGN)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 40, budgetMid: 85,
    tripMin: 900, tripMid: 1900,
  },
  description: {
    fr: "Le Nigéria est la première économie d'Afrique et le pays le plus peuplé du continent. Entre la mégalopole trépidante de Lagos, la capitale moderne d'Abuja, les réserves animalières de Yankari et l'héritage artistique millénaire du royaume de Bénin, le pays offre une diversité fascinante rarement explorée par les voyageurs.",
    en: "Nigeria is Africa's largest economy and the continent's most populous country. Between the bustling megacity of Lagos, the modern capital Abuja, the Yankari wildlife reserve and the centuries-old artistic legacy of the Kingdom of Benin, the country offers a fascinating diversity rarely explored by travellers.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche avec l'harmattan du nord. Températures agréables, pas de pluie, idéal pour visiter les parcs nationaux et les villes. Meilleure période pour les safaris à Yankari.",
        en: "Dry season with the harmattan wind from the north. Pleasant temperatures, no rain, ideal for visiting national parks and cities. Best period for safaris in Yankari.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avril – Juin", en: "April – June" },
      label: { fr: "Début de saison des pluies", en: "Start of the rainy season" },
      color: "#f59e0b",
      description: {
        fr: "Les pluies commencent progressivement. La végétation verdit, les parcs sont encore accessibles. Éviter juillet-octobre au sud (Lagos très humide).",
        en: "Rains gradually begin. The vegetation turns green, the parks are still accessible. Avoid July-October in the south (Lagos very humid).",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "lagos",
      name: "Lagos",
      region: { fr: "Lagos (côte)", en: "Lagos (coast)" },
      data: [
        { month: "Jan", temp: 27, rain: 35,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 45,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 190, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 280, icon: "⛅" },
        { month: "Jul", temp: 25, rain: 320, icon: "⛅" },
        { month: "Aoû", temp: 24, rain: 210, icon: "⛅" },
        { month: "Sep", temp: 25, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 26, rain: 150, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 25,  icon: "⛅" },
      ],
    },
    {
      id: "abuja",
      name: "Abuja",
      region: { fr: "Territoire de la capitale fédérale (intérieur)", en: "Federal Capital Territory (inland)" },
      data: [
        { month: "Jan", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 30, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 31, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 230, icon: "⛅" },
        { month: "Aoû", temp: 24, rain: 270, icon: "⛅" },
        { month: "Sep", temp: 25, rain: 220, icon: "⛅" },
        { month: "Oct", temp: 27, rain: 85,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lagos",
      region: { fr: "Lagos", en: "Lagos" },
      description: {
        fr: "Lagos est la plus grande ville d'Afrique, une mégalopole de plus de 20 millions d'habitants débordant d'énergie, de culture et de contrastes. Le marché de Lekki, la plage de Bar Beach, le National Museum et la scène musicale afrobeats en font une destination unique au monde.",
        en: "Lagos is Africa's largest city, a megacity of over 20 million people brimming with energy, culture and contrasts. Lekki Market, Bar Beach, the National Museum and the afrobeats music scene make it a one-of-a-kind destination.",
      },
      wikipedia: "Lagos",
      tags: ["Ville", "Culture", "Marché", "Musique", "Plage", "Gastronomie"],
      mustSee: [
        { name: { fr: "Marché de Lekki — artisanat et tissus", en: "Lekki Market — crafts and fabrics" }, wikipedia: "File:Shopping District - Lagos Nigeria.jpg" },
        { name: { fr: "Nike Art Gallery — art contemporain nigérian", en: "Nike Art Gallery — contemporary Nigerian art" }, wikipedia: "Nike_Art_Gallery" },
        { name: { fr: "National Museum Lagos — bronzes et ivoires", en: "Lagos National Museum — bronzes and ivories" }, wikipedia: "File:Garden in front of museum (6349971557).jpg" },
        { name: { fr: "Bar Beach & Victoria Island", en: "Bar Beach & Victoria Island" }, wikipedia: "File:Aerial_view_of_victoria_island_in_Lagos,_Nigeria_with_habours_for_yatches.jpg" },
      ],
    },
    {
      id: 2,
      name: "Abuja",
      region: { fr: "Territoire de la capitale fédérale", en: "Federal Capital Territory" },
      description: {
        fr: "Abuja, capitale fédérale planifiée depuis les années 1980, impressionne par son architecture moderne et ses monuments grandioses. La mosquée nationale, la cathédrale nationale et le rocher d'Aso Rock offrent un visage très différent du Nigéria.",
        en: "Abuja, a federal capital planned since the 1980s, impresses with its modern architecture and grand monuments. The National Mosque, the National Cathedral and Aso Rock offer a very different face of Nigeria.",
      },
      wikipedia: "Abuja",
      tags: ["Ville", "Architecture", "Monuments", "Politique"],
      mustSee: [
        { name: { fr: "Aso Rock — rocher monolithique emblématique", en: "Aso Rock — iconic monolithic outcrop" }, wikipedia: "Aso_Rock" },
        { name: { fr: "Mosquée nationale du Nigéria", en: "National Mosque of Nigeria" }, wikipedia: "File:AbujaNationalMosque.jpg" },
        { name: "Millenium Tower & Cultural Centre", wikipedia: "File:Newlea.jpg" },
        { name: { fr: "Musée national d'Abuja", en: "Abuja National Museum" }, wikipedia: "Abuja" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national de Yankari", en: "Yankari National Park" },
      region: { fr: "Bauchi", en: "Bauchi" },
      description: {
        fr: "Le parc national de Yankari est la plus grande réserve naturelle du Nigéria. On y observe éléphants, lions, buffles et babouins, avec en bonus les sources d'eau chaude naturelles de Wikki Spring, véritables piscines naturelles dans la brousse.",
        en: "Yankari National Park is Nigeria's largest nature reserve. Here you can spot elephants, lions, buffalo and baboons, with the added bonus of the natural hot springs of Wikki Spring, true natural pools in the bush.",
      },
      wikipedia: "File:Wikki warm spring, YANKARI Game Reserve, Bauchi.jpg",
      tags: ["Safari", "Nature", "Faune", "Sources chaudes"],
      mustSee: [
        { name: { fr: "Wikki Spring — sources chaudes cristallines", en: "Wikki Spring — crystal-clear hot springs" }, wikipedia: "File:Wikki Warm Spring Lake.jpg" },
        { name: { fr: "Éléphants de savane du parc", en: "The park's savannah elephants" }, wikipedia: "File:Elephants in yankari 2.jpg" },
        { name: { fr: "Marshall Caves — grottes préhistoriques", en: "Marshall Caves — prehistoric caves" }, wikipedia: "File:Marshall Caves.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bénin City & Royaume du Bénin", en: "Benin City & the Kingdom of Benin" },
      region: { fr: "Edo", en: "Edo" },
      description: {
        fr: "Bénin City est le berceau de l'un des royaumes les plus sophistiqués d'Afrique précoloniale, célèbre pour ses bronzes et ivoires arrachés par les Britanniques en 1897. Le musée national de Bénin expose ce patrimoine exceptionnel, et certaines pièces commencent à être restituées.",
        en: "Benin City is the birthplace of one of the most sophisticated kingdoms of pre-colonial Africa, famous for its bronzes and ivories looted by the British in 1897. The Benin National Museum displays this exceptional heritage, and some pieces are beginning to be repatriated.",
      },
      wikipedia: "File:Areal view of the ancient city of Benin.jpg",
      tags: ["Histoire", "Art", "Royaume", "Bronzes", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Musée national de Bénin — bronzes et ivoires", en: "Benin National Museum — bronzes and ivories" }, wikipedia: "File:Nat Museum, Benin.jpg" },
        { name: { fr: "Palais royal d'Oba — siège de la monarchie", en: "Oba's Royal Palace — seat of the monarchy" }, wikipedia: "File:Royal_Palace_of_the_Oba_of_Benin_cropped.jpg" },
        { name: { fr: "Ruines des remparts de Bénin (UNESCO proposé)", en: "Ruins of the Benin walls (proposed UNESCO site)" }, wikipedia: "File:Benin Moat 1.png" },
        { name: { fr: "Marché de Bénin City", en: "Benin City Market" }, wikipedia: "File:New Benin Market, Benin City.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Nigéria présente des coûts très variables selon les villes et le standing choisi. Lagos est l'une des villes les plus chères d'Afrique subsaharienne pour les étrangers, mais la nourriture de rue reste très accessible. Le naira est soumis à des fluctuations importantes.",
      en: "Nigeria's costs vary widely by city and comfort level. Lagos is one of the most expensive cities in Sub-Saharan Africa for foreigners, but street food remains very affordable. The naira is subject to significant fluctuations.",
    },
    currency: "NGN",
    exchangeRate: "1€ ≈ 1 800 NGN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / auberge locale", en: "Guesthouse / local hostel" }, price: "15–30 €", detail: { fr: "En dehors de Lagos", en: "Outside Lagos" } },
          { label: { fr: "Hôtel 3★ Lagos / Abuja", en: "3★ hotel Lagos / Abuja" }, price: "50–80 €", detail: { fr: "Clim, sécurité, petit-déjeuner", en: "AC, security, breakfast" } },
          { label: { fr: "Hôtel de charme / lodge", en: "Charming hotel / lodge" }, price: "90–150 €", detail: { fr: "Yankari, Victoria Island", en: "Yankari, Victoria Island" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Suya (brochettes de rue)", en: "Suya (street skewers)" }, price: "1–3 €", detail: { fr: "Incontournable et délicieux", en: "Unmissable and delicious" } },
          { label: { fr: "Buka (resto local — jollof rice)", en: "Buka (local eatery — jollof rice)" }, price: "3–7 €", detail: { fr: "Repas complet local", en: "Full local meal" } },
          { label: { fr: "Restaurant touristique Lagos", en: "Tourist restaurant in Lagos" }, price: "15–35 €", detail: { fr: "Cuisine internationale", en: "International cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus local (danfo) Lagos", en: "Local bus (danfo) in Lagos" }, price: "0,20–0,50 €", detail: { fr: "Minibus jaunes emblématiques", en: "Iconic yellow minibuses" } },
          { label: { fr: "Uber / bolt (Lagos)", en: "Uber / Bolt (Lagos)" }, price: "3–10 €", detail: { fr: "Plus sûr que les taxis", en: "Safer than taxis" } },
          { label: { fr: "Vol domestique Lagos–Abuja", en: "Domestic flight Lagos–Abuja" }, price: "40–80 €", detail: { fr: "1h de vol", en: "1h flight" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée parc Yankari + logement", en: "Yankari Park entry + lodging" }, price: "20–40 €", detail: { fr: "Par personne par nuit", en: "Per person per night" } },
          { label: { fr: "Visite National Museum Lagos", en: "Lagos National Museum visit" }, price: "2–5 €", detail: { fr: "Entrée + guide", en: "Entry + guide" } },
          { label: { fr: "Excursion en pirogue — Delta Niger", en: "Canoe excursion — Niger Delta" }, price: "30–60 €", detail: { fr: "Demi-journée avec guide", en: "Half day with guide" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Guesthouse + bouffe locale + transport public", en: "Guesthouse + local food + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "85–130 €/j", desc: { fr: "Hôtel 3★ + restos + Uber + excursions", en: "3★ hotel + restaurants + Uber + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Lagos (3j) → Bénin City (2j) → Abuja (2j) → Yankari (3j)", en: "Lagos (3d) → Benin City (2d) → Abuja (2d) → Yankari (3d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lagos", en: "Return flight Paris–Lagos" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–300 €" },
            { label: { fr: "Transports locaux + vols domestiques", en: "Local transport + domestic flights" }, amount: "150–200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "120–180 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 900 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lagos", en: "Return flight Paris–Lagos" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "600–900 €" },
            { label: { fr: "Transports locaux + vols domestiques", en: "Local transport + domestic flights" }, amount: "300–450 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "300–400 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "200–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h (Ethiopian Airlines, Air France, Turkish Airlines via escale)", en: "~6h (Ethiopian Airlines, Air France, Turkish Airlines via layover)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — e-Visa en ligne (~160 USD+). Processus complexe, prévoir plusieurs semaines.", en: "Visa required — e-Visa online (~160 USD+). Complex process, allow several weeks." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Naira (NGN) — retrait DAB conseillé, cartes acceptées dans les hôtels", en: "Naira (NGN) — ATM withdrawal recommended, cards accepted at hotels" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (officiel) + Yoruba, Haoussa, Igbo selon la région", en: "English (official) + Yoruba, Hausa, Igbo depending on the region" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G (comme au Royaume-Uni) — 220 V", en: "Type G (as in the UK) — 220 V" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE — eau en bouteille uniquement", en: "Antimalarials MANDATORY + yellow fever vaccine MANDATORY — bottled water only" } },
    { icon: "🔒", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Vigilance élevée à Lagos — éviter les quartiers isolés la nuit, informez-vous avant le voyage", en: "High vigilance in Lagos — avoid isolated areas at night, research before travelling" } },
    { icon: "📱", label: { fr: "Réseau & Internet", en: "Network & Internet" }, value: { fr: "Bonne 4G dans les grandes villes, MTN et Airtel disponibles en SIM locale", en: "Good 4G in major cities, MTN and Airtel available as local SIMs" } },
  ],
};
