export const FIJI = {
  code: "FJI",
  numericId: 242,
  name: { fr: "Fidji", en: "Fiji" },
  emoji: "🇫🇯",
  capital: { fr: "Suva", en: "Suva" },
  language: { fr: "Fidjien, Hindi fidjien, Anglais", en: "Fijian, Fiji Hindi, English" },
  currency: { fr: "Dollar fidjien (FJD)", en: "Fijian dollar (FJD)" },
  timezone: "UTC+12",
  filter: { budgetMin: 70, budgetMid: 150, tripMin: 1800, tripMid: 3500 },
  description: {
    fr: "Les Fidji forment un archipel de 333 îles au cœur du Pacifique Sud, réputé pour ses plages de sable blanc, ses eaux cristallines et sa chaleur humaine légendaire — le fameux 'Bula !' accueille chaque visiteur avec un sourire sincère. Au-delà des resorts luxueux, les Fidji offrent une culture mélanésienne vivante, des villages traditionnels et des récifs coralliens parmi les plus beaux du monde. L'archipel est une destination idéale pour les plongeurs, les amateurs de voile et ceux en quête de tranquillité insulaire.",
    en: "Fiji is an archipelago of 333 islands in the heart of the South Pacific, famed for its white-sand beaches, crystal-clear waters and legendary warmth — the famous 'Bula!' welcomes every visitor with a genuine smile. Beyond its luxurious resorts, Fiji offers a vibrant Melanesian culture, traditional villages and some of the world's most beautiful coral reefs. The archipelago is an ideal destination for divers, sailing enthusiasts and anyone seeking island tranquillity.",
  },
  bestPeriods: [
    {
      months: { fr: "Mai – Oct", en: "May – October" },
      label: { fr: "Saison fraîche et sèche", en: "Cool, dry season" },
      color: "#22c55e",
      description: {
        fr: "Temps idéal avec chaleur modérée, peu de pluies et mer calme — haute saison touristique",
        en: "Ideal weather with moderate warmth, little rain and calm seas — peak tourist season.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Nov – Avr", en: "November – April" },
      label: { fr: "Saison chaude et humide", en: "Hot, humid season" },
      color: "#f59e0b",
      description: {
        fr: "Pluies fréquentes, risque de cyclones (jan–mars). Tarifs réduits hors saison",
        en: "Frequent rain and a risk of cyclones (Jan–Mar). Lower off-season rates.",
      },
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "suva",
      name: "Suva",
      region: { fr: "Viti Levu Est", en: "Eastern Viti Levu" },
      data: [
        { month: "Jan", temp: 26, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 26, rain: 330, icon: "⛅" },
        { month: "Mar", temp: 26, rain: 340, icon: "⛅" },
        { month: "Avr", temp: 25, rain: 260, icon: "⛅" },
        { month: "Mai", temp: 24, rain: 190, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 130, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 140, icon: "☀️" },
        { month: "Sep", temp: 23, rain: 150, icon: "☀️" },
        { month: "Oct", temp: 24, rain: 170, icon: "☀️" },
        { month: "Nov", temp: 25, rain: 230, icon: "⛅" },
        { month: "Déc", temp: 26, rain: 300, icon: "⛅" },
      ],
    },
    {
      id: "nadi",
      name: "Nadi",
      region: { fr: "Viti Levu Ouest", en: "Western Viti Levu" },
      data: [
        { month: "Jan", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 260, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 230, icon: "🌧️" },
        { month: "Avr", temp: 26, rain: 120, icon: "☀️" },
        { month: "Mai", temp: 25, rain: 70, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 50, icon: "☀️" },
        { month: "Jul", temp: 23, rain: 50, icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 55, icon: "☀️" },
        { month: "Sep", temp: 24, rain: 60, icon: "☀️" },
        { month: "Oct", temp: 25, rain: 80, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 130, icon: "☀️" },
        { month: "Déc", temp: 27, rain: 200, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Îles Yasawa", en: "Yasawa Islands" },
      region: { fr: "Archipel des Yasawa", en: "Yasawa Archipelago" },
      description: {
        fr: "Les îles Yasawa s'étendent sur 80 km au nord-ouest de Viti Levu, formant un chapelet de volcans endormis aux plages sauvages et aux eaux d'un bleu irréel. Cet archipel a longtemps été interdit aux touristes et conserve aujourd'hui encore une authenticité rare, avec des villages fidjiens traditionnels accueillant les voyageurs. Le Lagon Bleu rendu célèbre par le film éponyme se trouve sur l'île de Nanuya Levu.",
        en: "The Yasawa Islands stretch for 80 km northwest of Viti Levu, forming a chain of dormant volcanoes with wild beaches and waters of an almost unreal blue. This archipelago was closed to tourists for many years and still retains a rare authenticity today, with traditional Fijian villages welcoming travellers. The Blue Lagoon, made famous by the film of the same name, lies on the island of Nanuya Levu.",
      },
      wikipedia: "File:Yasawa Islands2.jpg",
      tags: ["Plages", "Snorkeling", "Village", "Isolé", "Plage", "Nature"],
      mustSee: [
        {
          name: { fr: "Blue Lagoon de Nanuya Levu — eaux turquoise d'une beauté légendaire", en: "Blue Lagoon on Nanuya Levu — legendary turquoise waters" },
          wikipedia: "File:Waya Lailai 1.jpg",
        },
        {
          name: { fr: "Grottes de Sawa-i-Lau — grottes calcaires aux eaux claires accessibles en plongée", en: "Sawa-i-Lau Caves — limestone caves with clear waters accessible by diving" },
          wikipedia: "File:Limestone ceiling inside the Sawa-i-Lau Caves, Fiji.jpg",
        },
        {
          name: { fr: "Village de Nabukeru — cérémonie du kava et danse meke traditionnelle", en: "Nabukeru village — kava ceremony and traditional meke dance" },
          wikipedia: "File:Yasawa3.jpeg",
        },
        {
          name: { fr: "Plage de Naviti — snorkeling avec tortues marines", en: "Naviti Beach — snorkelling with sea turtles" },
          wikipedia: "File:Beach on Naviti island, Yasawa Islands, Fiji (1) - August 2016.jpg",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Îles Mamanuca", en: "Mamanuca Islands" },
      region: { fr: "Archipel des Mamanuca", en: "Mamanuca Archipelago" },
      description: {
        fr: "À seulement 30 minutes de bateau de Nadi, les îles Mamanuca sont le terrain de jeu idéal pour les vacanciers cherchant plages de rêve et activités nautiques. Tournage du film 'Cast Away' avec Tom Hanks, l'île de Monuriki est un symbole de l'isolement insulaire fidjien. Cet archipel offre un large éventail d'hébergements, des bungalows économiques aux resorts cinq étoiles.",
        en: "Just 30 minutes by boat from Nadi, the Mamanuca Islands are the perfect playground for holidaymakers seeking dream beaches and water activities. Featured in the film 'Cast Away' with Tom Hanks, Monuriki Island has become a symbol of Fijian island isolation. This archipelago offers a wide range of accommodation, from budget bungalows to five-star resorts.",
      },
      wikipedia: "Mamanuca_Islands",
      tags: ["Resort", "Nautisme", "Famille", "Plongée"],
      mustSee: [
        {
          name: { fr: "Île de Monuriki — décor du film Cast Away et snorkeling exceptionnel", en: "Monuriki Island — the setting for Cast Away and home to exceptional snorkelling" },
          wikipedia: "Monuriki",
        },
        {
          name: { fr: "Plongée aux Manta Rays — raies manta entre mai et octobre", en: "Manta Ray diving — manta rays from May to October" },
          wikipedia: "Mamanuca_Islands",
        },
        {
          name: { fr: "Plage de Castaway Island — eau transparente et récif frangeant coloré", en: "Castaway Island beach — crystal-clear water and a colourful fringing reef" },
          wikipedia: "File:Castaway Bay Battle Boats at Sea World.jpg",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Grande Barrière d'Astrolabe", en: "Great Astrolabe Reef" },
      region: { fr: "Kadavu", en: "Kadavu" },
      description: {
        fr: "Le Grand Récif Astrolabe, au large de l'île de Kadavu, est l'un des récifs barrières les plus importants du Pacifique Sud et un paradis pour les plongeurs confirmés. Ses eaux profondes et peu fréquentées abritent une biodiversité marine exceptionnelle : requins dormeurs, napoléons, tortues et une multitude de coraux en parfait état. L'île de Kadavu elle-même est restée préservée du tourisme de masse.",
        en: "Great Astrolabe Reef, off the island of Kadavu, is one of the South Pacific's most important barrier reefs and a paradise for experienced divers. Its deep, little-visited waters are home to exceptional marine biodiversity: nurse sharks, humphead wrasse, turtles and a wealth of pristine coral. Kadavu itself has remained untouched by mass tourism.",
      },
      wikipedia: "Great_Astrolabe_Reef",
      tags: ["Plongée", "Récif", "Nature", "Préservé"],
      mustSee: [
        {
          name: { fr: "Great Astrolabe Reef — plongée avec requins, raies et poissons tropicaux", en: "Great Astrolabe Reef — diving with sharks, rays and tropical fish" },
          wikipedia: "Great_Astrolabe_Reef",
        },
        {
          name: { fr: "Nabukelevu (Mt. Washington) — randonnée au sommet de Kadavu (838 m)", en: "Nabukelevu (Mt. Washington) — hike to Kadavu's summit (838 m)" },
          wikipedia: "File:Uluinabukelevu.jpg",
        },
        {
          name: { fr: "Village de Vunisea — life fidjienne authentique loin du tourisme", en: "Vunisea village — authentic Fijian life far from tourism" },
          wikipedia: "File:Vunisea.jpg",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Suva & Dunes de Sigatoka", en: "Suva & Sigatoka Dunes" },
      region: { fr: "Viti Levu", en: "Viti Levu" },
      description: {
        fr: "Suva, la capitale cosmopolite, mêle architecture coloniale britannique, marchés animés et musées révélant la richesse culturelle fidjienne. Non loin, les Dunes de Sigatoka sont un site préhistorique et naturel remarquable : ces dunes de sable côtières révèlent des vestiges archéologiques lapita vieux de 2 600 ans. La Côte des Coraux entre Nadi et Suva offre des plages plus accessibles et des expériences culturelles authentiques.",
        en: "Suva, the cosmopolitan capital, blends British colonial architecture, lively markets and museums that reveal the richness of Fijian culture. Nearby, the Sigatoka Dunes are a remarkable prehistoric and natural site: these coastal sand dunes have revealed 2,600-year-old Lapita archaeological remains. The Coral Coast between Nadi and Suva offers more accessible beaches and authentic cultural experiences.",
      },
      wikipedia: "Suva",
      tags: ["Ville", "Culture", "Histoire", "Archéologie", "Gastronomie", "Architecture"],
      mustSee: [
        {
          name: { fr: "Musée de Fidji — histoire mélanésienne et artefacts des guerriers cannibales", en: "Fiji Museum — Melanesian history and artefacts from cannibal warriors" },
          wikipedia: "Fiji_Museum",
        },
        {
          name: { fr: "Dunes de Sigatoka — parc national et site archéologique lapita", en: "Sigatoka Dunes — national park and Lapita archaeological site" },
          wikipedia: "File:SigatokaDunesFiji.jpg",
        },
        {
          name: { fr: "Marché de Suva — marché couvert animé avec épices, kava et artisanat", en: "Suva Market — a lively covered market filled with spices, kava and handicrafts" },
          wikipedia: "File:Suva,_Fiji_52.jpg",
        },
        {
          name: { fr: "Cérémonie du kava — tradition sociale fidjienne incontournable", en: "Kava ceremony — an essential Fijian social tradition" },
          wikipedia: "Kava",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Les Fidji proposent un large spectre de budgets, des complexes hôteliers parmi les plus luxueux du Pacifique aux guesthouses économiques dans les villages. Les îles Yasawa et Mamanuca sont plus chères que Viti Levu. La nourriture locale (dalo, poisson grillé, lovo) est abordable, mais les restaurants touristiques peuvent être onéreux. Les transferts en bateau entre îles constituent un poste de dépense notable.",
      en: "Fiji caters to a wide range of budgets, from some of the Pacific's most luxurious resorts to budget guesthouses in village settings. The Yasawa and Mamanuca Islands are more expensive than Viti Levu. Local food (dalo, grilled fish, lovo) is affordable, but tourist-oriented restaurants can be pricey. Boat transfers between islands are a significant expense to factor in.",
    },
    currency: "FJD",
    exchangeRate: "1€ ≈ 2,4 FJD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Dortoir ou bure basique (Yasawa)", en: "Dorm bed or basic bure (Yasawa)" }, price: "25–50 €" },
          { label: { fr: "Hôtel ou guesthouse confortable", en: "Comfortable hotel or guesthouse" }, price: "70–130 €" },
          { label: { fr: "Resort 4–5 étoiles tout inclus", en: "All-inclusive 4–5 star resort" }, price: "200–500 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Marché local et plat fidjien (curry, poisson)", en: "Local market meal or Fijian dish (curry, fish)" }, price: "3–7 €" },
          { label: { fr: "Restaurant simple à Nadi ou Suva", en: "Simple restaurant in Nadi or Suva" }, price: "8–15 €" },
          { label: { fr: "Restaurant de resort ou gastronomique", en: "Resort restaurant or fine dining" }, price: "25–50 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus local entre villes (Nadi–Suva)", en: "Local bus between towns (Nadi–Suva)" }, price: "4–6 €" },
          { label: { fr: "Ferry Yasawa Flyer (Nadi–Yasawa aller)", en: "Yasawa Flyer ferry (one way Nadi–Yasawa)" }, price: "40–60 €" },
          { label: { fr: "Location de voiture / jour à Viti Levu", en: "Car rental / day on Viti Levu" }, price: "40–70 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Plongée sous-marine (2 bouteilles)", en: "Scuba diving (2 tanks)" }, price: "60–90 €" },
          { label: { fr: "Excursion village fidjien avec cérémonie kava", en: "Fijian village excursion with kava ceremony" }, price: "30–50 €" },
          { label: { fr: "Surf à Cloudbreak (bateau + guide)", en: "Surfing at Cloudbreak (boat + guide)" }, price: "80–120 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "70–100 €/j",
        desc: { fr: "Dortoirs ou bures basiques, marchés locaux, bus et ferries", en: "Dorms or basic bures, local markets, buses and ferries" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "150–250 €/j",
        desc: { fr: "Hôtels confortables, restaurants variés, excursions organisées", en: "Comfortable hotels, varied restaurants and organised excursions" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "14 jours", en: "14 days" },
      route: { fr: "Nadi → Mamanuca → Yasawa → Côte des Coraux → Suva", en: "Nadi → Mamanuca → Yasawa → Coral Coast → Suva" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nadi", en: "Return flight Paris–Nadi" }, amount: "900–1 200 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "350–550 €" },
            { label: { fr: "Transports inter-îles (ferries, bus)", en: "Inter-island transport (ferries, buses)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "250–400 €" },
            { label: { fr: "Activités (plongée, excursions)", en: "Activities (diving, excursions)" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nadi", en: "Return flight Paris–Nadi" }, amount: "1 100–1 500 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 050–1 800 €" },
            { label: { fr: "Transports inter-îles + transfers privés", en: "Inter-island transport + private transfers" }, amount: "300–500 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "500–800 €" },
            { label: { fr: "Activités (plongée, spa, excursions)", en: "Activities (diving, spa, excursions)" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "22–26h avec 1–2 escales (via Sydney, Auckland ou Singapour)", en: "22–26 hours with 1–2 stopovers (via Sydney, Auckland or Singapore)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français jusqu'à 4 mois (tampon à l'arrivée)", en: "No visa required for French citizens for stays of up to 4 months (stamp on arrival)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar fidjien (FJD). Cartes bancaires acceptées dans les resorts, espèces recommandées dans les villages", en: "Fijian dollar (FJD). Bank cards are accepted in resorts, but cash is recommended in villages" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais officiel et très répandu ; fidjien et hindi fidjien parlés localement", en: "English is official and widely spoken; Fijian and Fiji Hindi are also spoken locally" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type I (comme en Australie), 240V — adaptateur nécessaire", en: "Type I (as in Australia), 240V — adapter required" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccins recommandés : hépatites A et B, typhoïde. Pas de paludisme aux Fidji. Attention aux eaux de boisson", en: "Recommended vaccines: hepatitis A and B, typhoid. No malaria in Fiji. Take care with drinking water" } },
    { icon: "🌀", label: { fr: "Cyclones", en: "Cyclones" }, value: { fr: "Saison cyclonique de novembre à avril. Saison sèche (mai–oct) très recommandée", en: "Cyclone season runs from November to April. The dry season (May–Oct) is highly recommended" } },
    { icon: "🤿", label: { fr: "Plongée", en: "Diving" }, value: { fr: "Certification PADI conseillée pour profiter pleinement des récifs. Nombreux centres de plongée à Nadi et Mamanuca", en: "A PADI certification is recommended to fully enjoy the reefs. There are many dive centres in Nadi and the Mamanuca Islands" } },
  ],
};
