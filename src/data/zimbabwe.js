export const ZIMBABWE = {
  code: "ZWE",
  numericId: 716,
  name: { fr: "Zimbabwe", en: "Zimbabwe" },
  emoji: "🇿🇼",
  capital: { fr: "Harare", en: "Harare" },
  language: { fr: "Shona, Ndébélé, Anglais", en: "Shona, Ndebele, English" },
  currency: { fr: "Dollar américain (USD)", en: "US Dollar (USD)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 80, budgetMid: 220,
    tripMin: 2500, tripMid: 7000,
  },
  description: {
    fr: "Le Zimbabwe recèle deux des merveilles naturelles africaines : les chutes Victoria, classées UNESCO, la plus grande cascade du monde par volume d'eau et brume visible à 40 km, et le mystérieux Grand Zimbabwe, ruines médiévales témoignant d'un empire africain disparu. Hwange abrite 40 000 éléphants.",
    en: "Zimbabwe holds two of Africa's natural wonders: Victoria Falls, a UNESCO site and the world's largest waterfall by water volume, its mist visible from 40 km away, and the mysterious Great Zimbabwe, medieval ruins bearing witness to a vanished African empire. Hwange is home to 40,000 elephants.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour les safaris (animaux concentrés aux points d'eau). Victoria Falls en mai–juillet = débit maximum. Sep–oct = meilleure visibilité du Devil's Pool.",
        en: "Ideal for safaris (animals concentrated at water points). Victoria Falls May–July = peak flow. Sep–Oct = best visibility for Devil's Pool.",
      },
      icon: "🌊",
    },
    {
      months: { fr: "Décembre – Avril", en: "December – April" },
      label: { fr: "Saison verte", en: "Green season" },
      color: "#3b82f6",
      description: {
        fr: "Paysages verdoyants, oiseaux migrateurs, moins de touristes. Les chutes sont moins impressionnantes (après la crue).",
        en: "Lush landscapes, migratory birds, fewer tourists. The falls are less impressive (after the flood peak).",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "victoria_falls",
      name: { fr: "Victoria Falls", en: "Victoria Falls" },
      region: { fr: "Matabeleland Nord", en: "Matabeleland North" },
      data: [
        { month: "Jan", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Oct", temp: 31, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 30, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 29, rain: 120, icon: "🌧️" },
      ],
    },
    {
      id: "harare",
      name: { fr: "Harare", en: "Harare" },
      region: { fr: "Mashonaland", en: "Mashonaland" },
      data: [
        { month: "Jan", temp: 25, rain: 200, icon: "⛅" },
        { month: "Fév", temp: 25, rain: 175, icon: "☀️" },
        { month: "Mar", temp: 24, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Mai", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Jun", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Sep", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Nov", temp: 25, rain: 100, icon: "☀️" },
        { month: "Déc", temp: 25, rain: 180, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Chutes Victoria", en: "Victoria Falls" },
      region: { fr: "Matabeleland Nord", en: "Matabeleland North" },
      description: {
        fr: "Les chutes Victoria, classées UNESCO et 7e merveille naturelle, sont la plus grande cascade du monde par volume d'eau : 1,7 km de large, 108 m de haut, un rugissement audible à 40 km et une brume permanente. Le Devil's Pool permet de nager à 10 cm du précipice entre septembre et décembre.",
        en: "Victoria Falls, a UNESCO site and one of the 7 natural wonders, is the world's largest waterfall by water volume: 1.7 km wide, 108 m high, a roar audible from 40 km away and a permanent mist. Devil's Pool lets you swim just 10 cm from the precipice between September and December.",
      },
      wikipedia: "Victoria_Falls",
      tags: ["UNESCO", "7e Merveille", "Cascade", "Aventure", "Nature", "Randonnée"],
      mustSee: [
        { name: "Victoria Falls", wikipedia: "File:Victoria Falls, Zimbabwe 01.jpg" },
        { name: { fr: "Devil's Pool — nager au bord de la chute (sep–déc)", en: "Devil's Pool — swimming at the edge of the falls (Sep–Dec)" }, wikipedia: "File:Visitors at the Devil's Pool, Victoria Falls.jpg" },
        { name: { fr: "Bungee jumping sur le pont du Zimbabwe (111 m)", en: "Bungee jumping off the Zimbabwe bridge (111 m)" }, wikipedia: "File:Victoria Falls Bridge.JPG" },
        { name: { fr: "Promenade du bord du précipice côté zambien", en: "Cliffside walk on the Zambian side" }, wikipedia: "File:Mosi-oa-Tunya National Park, Zambia (48598581361).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Hwange National Park", en: "Hwange National Park" },
      region: { fr: "Matabeleland Nord", en: "Matabeleland North" },
      description: {
        fr: "Hwange est le plus grand parc national du Zimbabwe : 14 651 km² abritant 40 000 éléphants (la plus grande population de Zimbabwe), des meutes de lycaons peints (espèce menacée), des lions et des rhinocéros noirs. Les points d'eau artificiels concentrent la faune en saison sèche.",
        en: "Hwange is Zimbabwe's largest national park: 14,651 km² home to 40,000 elephants (Zimbabwe's largest population), packs of African wild dogs (an endangered species), lions and black rhinos. Artificial waterholes concentrate wildlife during the dry season.",
      },
      wikipedia: "Hwange_National_Park",
      tags: ["Éléphants", "Safari", "Lycaons", "Big Five", "Nature"],
      mustSee: [
        { name: { fr: "Troupeaux d'éléphants (40 000 dans le parc)", en: "Elephant herds (40,000 in the park)" }, wikipedia: "African_bush_elephant" },
        { name: { fr: "Meutes de lycaons peints (painted dogs)", en: "African wild dog (painted dog) packs" }, wikipedia: "African_wild_dog" },
        { name: { fr: "Lions de Hwange (notoirement confiants)", en: "Hwange lions (notoriously confident)" }, wikipedia: "Lion" },
        { name: { fr: "Rhinos noirs — à pied (guides armés)", en: "Black rhinos — on foot (armed guides)" }, wikipedia: "Black_rhinoceros" },
      ],
    },
    {
      id: 3,
      name: { fr: "Grand Zimbabwe", en: "Great Zimbabwe" },
      region: { fr: "Masvingo", en: "Masvingo" },
      description: {
        fr: "Le Grand Zimbabwe, classé UNESCO, est l'ensemble de ruines en pierre sèche le plus grand d'Afrique subsaharienne : une cité médiévale (XI–XV s.) qui fut capitale d'un empire commercant sur l'or, la taille et la complexité de ses murs défiant toute explication longtemps. Mystérieux et grandiose.",
        en: "Great Zimbabwe, a UNESCO site, is the largest dry-stone ruin complex in sub-Saharan Africa: a medieval city (11th–15th century) that was the capital of a gold-trading empire, its walls' size and complexity defying explanation for a long time. Mysterious and grandiose.",
      },
      wikipedia: "Great_Zimbabwe",
      tags: ["UNESCO", "Histoire", "Archéologie", "Mystère", "Architecture"],
      mustSee: [
        { name: { fr: "La Grande Enceinte (mur de 250 m, 11 m de haut)", en: "The Great Enclosure (250 m wall, 11 m high)" }, wikipedia: "File:Great-Zimbabwe.jpg" },
        { name: { fr: "Colline du Roi (acropole royale)", en: "Hill Complex (royal acropolis)" }, wikipedia: "Great_Zimbabwe" },
        { name: { fr: "Musée national du Grand Zimbabwe", en: "Great Zimbabwe National Museum" }, wikipedia: "File:Natural History Museum Zimbabwe Bulawayo.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Matobo Hills", en: "Matobo Hills" },
      region: { fr: "Matabeleland Sud", en: "Matabeleland South" },
      description: {
        fr: "Les collines Matobo (UNESCO) sont un paysage de rochers balancés géants (kopjes) parsemé de peintures rupestres San parmi les plus belles d'Afrique. C'est aussi le seul endroit au monde où l'on peut tracker des rhinocéros blancs à pied, sans grillage, avec des guides.",
        en: "The Matobo Hills (UNESCO) are a landscape of giant balancing rocks (kopjes) dotted with San rock art among the finest in Africa. It is also the only place in the world where you can track white rhinos on foot, without fencing, with guides.",
      },
      wikipedia: "File:Matobo Road and kopje.jpg",
      tags: ["UNESCO", "Art rupestre", "Rhinos", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Tracking rhinos blancs à pied (sans barrière)", en: "Tracking white rhinos on foot (no barrier)" }, wikipedia: "White_rhinoceros" },
        { name: { fr: "Peintures rupestres San (parmi les plus belles d'Afrique)", en: "San rock art (among the finest in Africa)" }, wikipedia: "San_rock_art" },
        { name: { fr: "World's View — tombe de Cecil Rhodes & panorama", en: "World's View — Cecil Rhodes' grave & panorama" }, wikipedia: "File:Tomb Cecil Rhodes1.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Zimbabwe utilise principalement le dollar américain pour le tourisme. Les prix sont en hausse mais restent raisonnables comparés au Botswana voisin. Victoria Falls est la ville la plus chère. La KAZA Univisa (Zambie-Zimbabwe) est très pratique.",
      en: "Zimbabwe mainly uses the US dollar for tourism. Prices are rising but remain reasonable compared to neighbouring Botswana. Victoria Falls is the most expensive town. The KAZA Univisa (Zambia-Zimbabwe) is very convenient.",
    },
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / backpacker", en: "Guesthouse / backpacker" }, price: "20–40 €", detail: { fr: "Harare ou Vic Falls town", en: "Harare or Vic Falls town" } },
          { label: { fr: "Lodge safari mid-range", en: "Mid-range safari lodge" }, price: "120–250 €", detail: { fr: "Pension complète + safaris", en: "Full board + safaris" } },
          { label: { fr: "Lodge luxe (Hwange ou Vic Falls)", en: "Luxury lodge (Hwange or Vic Falls)" }, price: "400–1 000 €", detail: { fr: "All-inclusive haut de gamme", en: "High-end all-inclusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Sadza + ragoût (plat national)", en: "Sadza + stew (national dish)" }, price: "3–6 €", detail: { fr: "Excellent et copieux", en: "Excellent and hearty" } },
          { label: { fr: "Restaurant Victoria Falls", en: "Victoria Falls restaurant" }, price: "15–30 €", detail: { fr: "Vue fleuve Zambèze", en: "Zambezi River view" } },
          { label: { fr: "Dinner au lodge (inclus)", en: "Lodge dinner (included)" }, price: { fr: "inclus", en: "included" }, detail: { fr: "Braai au feu de bois en brousse", en: "Wood-fire braai in the bush" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol Harare–Victoria Falls", en: "Harare–Victoria Falls flight" }, price: "80–150 €", detail: { fr: "A/R, 1h30", en: "Return, 1h30" } },
          { label: { fr: "Transfert privé (Victoria Falls–Hwange)", en: "Private transfer (Victoria Falls–Hwange)" }, price: "30–50 €", detail: { fr: "2h de piste", en: "2h on track roads" } },
          { label: { fr: "Bus Intercape (Harare–Bulawayo)", en: "Intercape bus (Harare–Bulawayo)" }, price: "15–25 €", detail: { fr: "Confortable, 5h", en: "Comfortable, 5h" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée chutes Victoria", en: "Victoria Falls entry" }, price: "30 €", detail: { fr: "Côté zimbabwéen", en: "Zimbabwean side" } },
          { label: { fr: "Bungee jumping pont Vic Falls (111 m)", en: "Bungee jumping Vic Falls bridge (111 m)" }, price: "130–160 €", detail: { fr: "Expérience inoubliable", en: "Unforgettable experience" } },
          { label: { fr: "KAZA Univisa (Zambie + Zimbabwe)", en: "KAZA Univisa (Zambia + Zimbabwe)" }, price: "50 €", detail: { fr: "Valable 30 jours les deux pays", en: "Valid 30 days for both countries" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "80–130 €/j", desc: { fr: "Guesthouse + sadza + bus + entrées parcs", en: "Guesthouse + sadza + bus + park entries" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "220–400 €/j", desc: { fr: "Lodge safari + safaris guidés + vols intérieurs", en: "Safari lodge + guided safaris + domestic flights" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "700 €+/j", desc: { fr: "Lodge all-inclusive premium + hélicoptère + privé", en: "Premium all-inclusive lodge + helicopter + private tours" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Harare (1j) → Grand Zimbabwe (2j) → Hwange (3j) → Victoria Falls (4j)", en: "Harare (1d) → Great Zimbabwe (2d) → Hwange (3d) → Victoria Falls (4d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zimbabwe (via Johannesburg)", en: "Return flight Paris–Zimbabwe (via Johannesburg)" }, amount: "700–1 100 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "600–900 €" },
            { label: { fr: "Vols intérieurs + transports", en: "Domestic flights + transport" }, amount: "300–500 €" },
            { label: { fr: "Activités & entrées parcs", en: "Activities & park entries" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & imprévus", en: "Food & contingency" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "7 000 – 10 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zimbabwe", en: "Return flight Paris–Zimbabwe" }, amount: "800–1 300 €" },
            { label: { fr: "Lodges mid-range (10 nuits)", en: "Mid-range lodges (10 nights)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Vols intérieurs + transferts", en: "Domestic flights + transfers" }, amount: "600–1 000 €" },
            { label: { fr: "Safaris & activités (bungee etc.)", en: "Safaris & activities (bungee etc.)" }, amount: "800–1 500 €" },
            { label: { fr: "Nourriture & extras", en: "Food & extras" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zimbabwe (Business)", en: "Return flight Paris–Zimbabwe (Business)" }, amount: "3 500–6 000 €" },
            { label: { fr: "Lodges all-inclusive premium (10 nuits)", en: "Premium all-inclusive lodges (10 nights)" }, amount: "6 000–10 000 €" },
            { label: { fr: "Hélicoptère Vic Falls + privé", en: "Vic Falls helicopter + private tours" }, amount: "1 500–3 000 €" },
            { label: { fr: "Safaris privés + Devil's Pool", en: "Private safaris + Devil's Pool" }, amount: { fr: "inclus", en: "included" } },
            { label: { fr: "Extras", en: "Extras" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13h avec escale (Ethiopian Airlines, South African Airways, Kenya Airways)", en: "~13h with a stopover (Ethiopian Airlines, South African Airways, Kenya Airways)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa on arrival (~50 USD) ou KAZA Univisa (~50 USD, valable Zimbabwe + Zambie)", en: "Visa on arrival (~50 USD) or KAZA Univisa (~50 USD, valid for Zimbabwe + Zambia)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar américain (USD) — espèces essentielles en brousse", en: "US Dollar (USD) — cash essential in the bush" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "16 langues officielles — Shona, Ndébélé et Anglais principaux", en: "16 official languages — Shona, Ndebele and English are the main ones" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type D/G – 220 V", en: "Type D/G – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture villes, limitée Hwange et brousse", en: "City coverage, limited in Hwange and the bush" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water mandatory" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE pour Hwange, Chobe et Zambèze", en: "Malaria prophylaxis MANDATORY for Hwange, Chobe and Zambezi" } },
  ],
};
