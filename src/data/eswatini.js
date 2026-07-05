export const ESWATINI = {
  code: "SWZ",
  numericId: 748,
  name: { fr: "Eswatini", en: "Eswatini" },
  emoji: "🇸🇿",
  capital: { fr: "Mbabane", en: "Mbabane" },
  language: { fr: "Swati, Anglais", en: "Swati, English" },
  currency: { fr: "Lilangeni (SZL)", en: "Lilangeni (SZL)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 900, tripMid: 1800,
  },
  description: {
    fr: "L'Eswatini (anciennement Swaziland) est un petit royaume montagneux enclavé entre l'Afrique du Sud et le Mozambique, l'une des dernières monarchies absolues d'Afrique. Ce pays méconnu offre des parcs naturels avec rhinocéros blancs et éléphants, une culture swazi vivante avec la cérémononie Reed Dance (Umhlanga), et des paysages verdoyants d'une grande beauté.",
    en: "Eswatini (formerly Swaziland) is a small mountainous kingdom landlocked between South Africa and Mozambique, and one of Africa's last absolute monarchies. This little-known country offers wildlife parks with white rhinos and elephants, a vibrant Swazi culture highlighted by the Reed Dance (Umhlanga), and lush landscapes of remarkable beauty.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Saison sèche & Safari", en: "Dry Season & Safari" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche : végétation basse idéale pour observer la faune dans Hlane, températures agréables (15–24°C), randonnées dans les montagnes. Nuits fraîches dans les hauts plateaux.",
        en: "Dry season: sparse vegetation makes wildlife easier to spot in Hlane, temperatures are pleasant (15–24°C), and mountain hikes are at their best. Nights are cool in the highlands.",
      },
      icon: "🦏",
    },
    {
      months: { fr: "Août – Septembre", en: "August – September" },
      label: { fr: "Umhlanga (Reed Dance)", en: "Umhlanga (Reed Dance)" },
      color: "#8b5cf6",
      description: {
        fr: "La cérémonie Umhlanga rassemble des dizaines de milliers de jeunes femmes swazies portant des roseaux au palais royal. L'un des spectacles culturels les plus impressionnants d'Afrique australe.",
        en: "The Umhlanga ceremony brings together tens of thousands of young Swazi women carrying reeds to the royal palace. It is one of the most striking cultural spectacles in Southern Africa.",
      },
      icon: "🎋",
    },
  ],

  weatherCities: [
    {
      id: "mbabane",
      name: "Mbabane",
      region: { fr: "Hhohho (Hauts Plateaux, 1 243m)", en: "Hhohho (Highlands, 1,243m)" },
      data: [
        { month: "Jan", temp: 20, rain: 175, icon: "⛅" },
        { month: "Fév", temp: 20, rain: 155, icon: "⛅" },
        { month: "Mar", temp: 19, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Mai", temp: 15, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 12, rain: 20,  icon: "⛅" },
        { month: "Jul", temp: 12, rain: 15,  icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 25,  icon: "⛅" },
        { month: "Sep", temp: 17, rain: 45,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Nov", temp: 19, rain: 120, icon: "☀️" },
        { month: "Déc", temp: 20, rain: 165, icon: "⛅" },
      ],
    },
    {
      id: "big_bend",
      name: "Big Bend",
      region: { fr: "Lubombo (Basse Vallée)", en: "Lubombo (Lowveld)" },
      data: [
        { month: "Jan", temp: 28, rain: 100, icon: "⛅" },
        { month: "Fév", temp: 27, rain: 95,  icon: "⛅" },
        { month: "Mar", temp: 26, rain: 80,  icon: "☀️" },
        { month: "Avr", temp: 24, rain: 45,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 55,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 85,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 105, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Hlane Royal National Park",
      region: { fr: "Province de Lubombo", en: "Lubombo Region" },
      description: {
        fr: "Hlane est le plus grand parc national d'Eswatini et abrite les Big Five (éléphants, rhinocéros blancs, lions, léopards, buffles), une rareté pour un si petit pays. Le parc, propriété de la famille royale swazi, offre des safaris en 4x4 et des randonnées guidées à pied près des rhinocéros. Les populations d'éléphants et de rhinocéros blancs y sont remarquablement accessibles.",
        en: "Hlane is Eswatini's largest national park and is home to the Big Five (elephants, white rhinos, lions, leopards and buffalo), something rare in such a small country. Owned by the Swazi royal family, the park offers 4x4 safaris and guided walking excursions near the rhinos. Its elephant and white rhino populations are remarkably easy to see.",
      },
      wikipedia: "Hlane_Royal_National_Park",
      tags: ["Safari", "Rhinocéros", "Éléphants", "Big Five"],
      mustSee: [
        { name: { fr: "Zone des rhinocéros blancs — approche en safari à pied possible", en: "White rhino area — possible to approach on a walking safari" }, wikipedia: "File:Hlane_Royal_National_Park_banner_White_Rhinos_wallowing_and_resting_in_the_bushes.jpg" },
        { name: { fr: "Zone des lions — lions introduits dans le parc", en: "Lion area — lions introduced into the park" }, wikipedia: "File:04.20_總統參訪_Hlane_Royal_National_Park_(40954029404).jpg" },
      ],
    },
    {
      id: 2,
      name: "Mlilwane Wildlife Sanctuary",
      region: { fr: "Province de Manzini", en: "Manzini Region" },
      description: {
        fr: "Mlilwane est la réserve animalière la plus ancienne et la plus accessible d'Eswatini, idéalement située près de la capitale Mbabane. On peut y faire du vélo, de l'équitation et des randonnées à pied parmi les antilopes, zèbres, hippopotames et oiseaux. L'absence de prédateurs en fait un endroit parfait pour explorer à pied en toute sécurité, une expérience unique en Afrique australe.",
        en: "Mlilwane is Eswatini's oldest and most accessible wildlife reserve, ideally located near the capital, Mbabane. You can explore it by bike, on horseback or on foot among antelope, zebras, hippos and birdlife. With no predators, it is a perfect place to roam safely on foot, a rare experience in Southern Africa.",
      },
      wikipedia: "Mlilwane_Wildlife_Sanctuary",
      tags: ["Nature", "Randonnée", "Équitation", "Famille"],
      mustSee: [
        { name: { fr: "Randonnée à pied entre les zèbres et antilopes", en: "Walking trails among zebras and antelope" }, wikipedia: "File:Plains zebra in Mlilwane Wildlife Sanctuary 02.jpg" },
        { name: { fr: "Hippo Haunt — observation des hippopotames", en: "Hippo Haunt — hippo watching" }, wikipedia: "File:Hippo Swaziland.jpg" },
        { name: { fr: "Snyamane Area — cyclisme en nature sauvage", en: "Snyamane Area — cycling through the wild" }, wikipedia: "File:Mlilwane Wildlife Sanctuary 02.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mantenga Cultural Village",
      region: { fr: "Province de Hhohho", en: "Hhohho Region" },
      description: {
        fr: "Mantenga est un village culturel swazi authentique reconstituant la vie traditionnelle d'un kraal du XVIIIe siècle, avec des danses guerrières, des démonstrations d'artisanat et des huttes en paille traditionnelles. Adjacent au pittoresque canyon de Mantenga et aux chutes de Mantenga, c'est le meilleur endroit pour s'immerger dans la culture swazi sans se déplacer loin de Mbabane.",
        en: "Mantenga is an authentic Swazi cultural village recreating life in an 18th-century kraal, with warrior dances, craft demonstrations and traditional thatched huts. Set beside the scenic Mantenga Gorge and Mantenga Falls, it is the best place to immerse yourself in Swazi culture without venturing far from Mbabane.",
      },
      wikipedia: "File:Mantenga nature reserve (37097743884).jpg",
      tags: ["Culture", "Traditions", "Artisanat", "Danse"],
      mustSee: [
        { name: { fr: "Danses traditionnelles swazies — spectacles quotidiens", en: "Traditional Swazi dances — daily performances" }, wikipedia: "File:Mantenga nature reserve (37097743884).jpg" },
        { name: { fr: "Chutes de Mantenga — cascade dans le canyon", en: "Mantenga Falls — waterfall in the gorge" }, wikipedia: "File:Mantenga nature reserve (37097743884).jpg" },
        { name: { fr: "Ngwenya Glass — fabrique de verre recyclé mondialement connue", en: "Ngwenya Glass — world-famous recycled glass workshop" }, wikipedia: "File:Glass Elephant.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Cérémonie Umhlanga (Reed Dance)", en: "Umhlanga Ceremony (Reed Dance)" },
      region: { fr: "Lobamba, Vallée d'Ezulwini", en: "Lobamba, Ezulwini Valley" },
      description: {
        fr: "La Reed Dance (Umhlanga) est la plus grande cérémonie culturelle swazi, rassemblant chaque année en août-septembre des dizaines de milliers de jeunes femmes non mariées qui portent des roseaux au palais royal de la Reine Mère. Ce spectacle extraordinaire de couleurs, de chant et de danse traditionnelle est ouvert aux visiteurs étrangers et constitue l'une des expériences culturelles les plus uniques d'Afrique australe.",
        en: "The Reed Dance (Umhlanga) is Swazi culture's largest ceremony, gathering tens of thousands of unmarried young women every August and September to carry reeds to the Queen Mother's royal residence. This extraordinary display of colour, song and traditional dance is open to foreign visitors and ranks among Southern Africa's most unique cultural experiences.",
      },
      wikipedia: "Umhlanga_(ceremony)",
      tags: ["Festival", "Culture", "Cérémonie", "Roi"],
      mustSee: [
        { name: { fr: "Cortège des porteuses de roseaux — des milliers de femmes en tenue traditionnelle", en: "Procession of reed bearers — thousands of women in traditional dress" }, wikipedia: "Umhlanga_(ceremony)" },
        { name: { fr: "Palais royal de Lobamba — siège de la monarchie swazi", en: "Lobamba Royal Palace — seat of the Swazi monarchy" }, wikipedia: "Lobamba" },
        { name: { fr: "Incwala (cérémonie des premiers fruits) — autre grande cérémonie royale", en: "Incwala (first fruits ceremony) — another major royal ceremony" }, wikipedia: "Incwala" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Eswatini est une destination abordable, très souvent visitée en combiné avec l'Afrique du Sud ou le Mozambique. Le lilangeni est ancré au rand sud-africain (parité 1:1), et les rands sont acceptés partout. Les prix sont comparables à l'Afrique du Sud rurale.",
      en: "Eswatini is an affordable destination, often visited as part of a wider trip with South Africa or Mozambique. The lilangeni is pegged to the South African rand (1:1), and rand notes are accepted everywhere. Prices are similar to those in rural South Africa.",
    },
    currency: "SZL",
    exchangeRate: "1€ ≈ 20 SZL (= 20 ZAR)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Camping / dortoir en lodge", en: "Camping / lodge dorm" }, price: "10–20 €" },
          { label: { fr: "Chambre en guesthouse / B&B", en: "Guesthouse / B&B room" }, price: "30–60 €" },
          { label: { fr: "Lodge confort avec safari", en: "Comfort lodge with safari" }, price: "80–150 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Braai (barbecue) local ou marché", en: "Local braai (barbecue) or market food" }, price: "3–7 €" },
          { label: { fr: "Restaurant milieu de gamme", en: "Mid-range restaurant" }, price: "10–20 €" },
          { label: { fr: "Supermarché (repas self)", en: "Supermarket (self-catered meal)" }, price: "5–10 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Kombi (minibus) entre villes", en: "Kombi (minibus) between towns" }, price: "2–5 €" },
          { label: { fr: "Taxi en ville (Mbabane)", en: "Taxi in town (Mbabane)" }, price: "3–8 €" },
          { label: { fr: "Location voiture (depuis Jo'burg)", en: "Car rental (from Jo'burg)" }, price: "40–80 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée Hlane Royal National Park", en: "Hlane Royal National Park entry" }, price: "10–15 €" },
          { label: { fr: "Safari guidé en 4x4 (Hlane)", en: "Guided 4x4 safari (Hlane)" }, price: "25–50 €" },
          { label: { fr: "Randonnée à pied Mlilwane", en: "Mlilwane walking trail" }, price: "10–20 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "40–65 €/j", desc: { fr: "Camping, repas locaux, kombi, safaris d'entrée de gamme", en: "Camping, local meals, kombi transport and entry-level safaris" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–150 €/j", desc: { fr: "Lodge confort, restaurant, voiture de location, guides privés", en: "Comfort lodge, restaurants, rental car and private guides" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "5 jours", en: "5 days" },
      route: {
        fr: "Johannesburg → Mbabane → Mantenga → Hlane → Mlilwane → Johannesburg",
        en: "Johannesburg → Mbabane → Mantenga → Hlane → Mlilwane → Johannesburg",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)" }, amount: "80–160 €" },
            { label: { fr: "Transports locaux + kombi", en: "Local transport + kombi" }, amount: "50–100 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "120–180 €" },
            { label: { fr: "Activités + entrées parcs", en: "Activities + park entry fees" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)" }, amount: "320–600 €" },
            { label: { fr: "Location voiture", en: "Car rental" }, amount: "200–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "250–400 €" },
            { label: { fr: "Activités + safaris guidés", en: "Activities + guided safaris" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flights from Paris" }, value: { fr: "Vol jusqu'à Johannesburg (O.R. Tambo) puis route de 4h en voiture ou bus. Vols directs Paris–Jo'burg avec Air France ou South African Airways.", en: "Fly to Johannesburg (O.R. Tambo), then continue by road for 4 hours by car or bus. Direct Paris–Jo'burg flights are available with Air France or South African Airways." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Pas de visa pour les citoyens français (séjour jusqu'à 30 jours). Passeport valide 6 mois requis.", en: "No visa is required for French citizens (stays of up to 30 days). A passport valid for 6 months is required." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Lilangeni (SZL) à parité avec le rand sud-africain. Les rands sont acceptés partout. Distributeurs dans les principales villes.", en: "The lilangeni (SZL) is pegged to the South African rand. Rand notes are accepted everywhere. ATMs are available in the main towns." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Swati et anglais (langues officielles). L'anglais est parlé dans les commerces, hôtels et parcs nationaux.", en: "Swati and English are the official languages. English is widely spoken in shops, hotels and national parks." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type M (à 3 grosses broches rondes, comme en Afrique du Sud). Tension 230V. Adaptateur indispensable depuis l'Europe.", en: "Type M (three large round pins, as in South Africa). Voltage is 230V. An adapter is essential for travellers from Europe." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Paludisme dans les basses vallées (est du pays). Prophylaxie recommandée si vous visitez Hlane ou Big Bend. Vaccins hépatite A/B conseillés. Eau du robinet non potable.", en: "Malaria is present in the low-lying valleys in the east of the country. Preventive treatment is recommended if you plan to visit Hlane or Big Bend. Hepatitis A/B vaccines are advised. Tap water is not considered safe to drink." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Pays globalement stable et sûr. Prudence habituelle contre le vol dans les villes. Éviter les randonnées seul dans les zones isolées. Respect du protocole royal (photos du palais déconseillées).", en: "The country is generally stable and safe. Take the usual precautions against theft in towns. Avoid hiking alone in isolated areas. Respect royal protocol (photographing the palace is discouraged)." } },
    { icon: "🚗", label: { fr: "Déplacements", en: "Getting around" }, value: { fr: "Petit pays (17 364 km²) : tout est accessible en une journée depuis Mbabane. Routes en bon état. Location voiture depuis Jo'burg fortement conseillée pour la flexibilité.", en: "It is a small country (17,364 km²): everything is reachable within a day from Mbabane. Roads are in good condition. Renting a car from Jo'burg is strongly recommended for flexibility." } },
  ],
};
