export const MALAWI = {
  code: "MWI",
  numericId: 454,
  name: { fr: "Malawi", en: "Malawi" },
  emoji: "🇲🇼",
  capital: { fr: "Lilongwe", en: "Lilongwe" },
  language: { fr: "Chichewa, Anglais", en: "Chichewa, English" },
  currency: { fr: "Kwacha malawien (MWK)", en: "Malawian Kwacha (MWK)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 25, budgetMid: 65,
    tripMin: 1000, tripMid: 2200,
  },
  description: {
    fr: "Le Malawi est le 'Warm Heart of Africa' : le lac Malawi (UNESCO, 9e plus grand lac du monde) avec ses 1 000 espèces de cichlidés endémiques — plus que dans tout autre lac de la planète — est une merveille de biodiversité. Pays enclavé, doux et abordable, avec les parcs animaliers de Liwonde et Nyika, les plateaux de Mulanje, et une hospitalité légendaire.",
    en: "Malawi is the 'Warm Heart of Africa': Lake Malawi (UNESCO, the world's 9th-largest lake) with its 1,000 endemic cichlid species — more than any other lake on the planet — is a wonder of biodiversity. A landlocked, gentle and affordable country, with the wildlife parks of Liwonde and Nyika, the Mulanje highlands, and legendary hospitality.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, faune concentrée autour de l'eau, températures agréables (16–26°C). Visibilité exceptionnelle dans le lac.",
        en: "The best time to visit: less rain, wildlife concentrated around water sources, pleasant temperatures (16–26°C). Exceptional visibility in the lake.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes (200–350mm/mois sur le lac), pistes de brousse difficiles. Températures chaudes (25–30°C). Verdure luxuriante.",
        en: "Heavy rain (200–350mm/month around the lake), difficult bush tracks. Warm temperatures (25–30°C). Lush greenery.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "monkey_bay",
      name: { fr: "Monkey Bay (lac Malawi)", en: "Monkey Bay (Lake Malawi)" },
      region: { fr: "Mangochi — rive sud du lac", en: "Mangochi — southern lakeshore" },
      data: [
        { month: "Jan", temp: 28, rain: 280, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 26, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 21, rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Sep", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 200, icon: "🌧️" },
      ],
    },
    {
      id: "lilongwe",
      name: "Lilongwe",
      region: { fr: "Centre (altitude ~1 100m)", en: "Central region (altitude ~1,100m)" },
      data: [
        { month: "Jan", temp: 23, rain: 220, icon: "🌧️" },
        { month: "Fév", temp: 23, rain: 200, icon: "🌧️" },
        { month: "Mar", temp: 23, rain: 140, icon: "🌧️" },
        { month: "Avr", temp: 22, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Jun", temp: 16, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 16, rain: 5,   icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Sep", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 20,  icon: "☀️" },
        { month: "Nov", temp: 24, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: 23, rain: 180, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lac Malawi — Snorkeling et cichlidés", en: "Lake Malawi — Snorkelling and cichlids" },
      region: { fr: "Rift est-africain", en: "East African Rift" },
      description: {
        fr: "Le lac Malawi (UNESCO) est un aquarium géant : 1 000 espèces de cichlidés (poissons tropicaux colorés) endémiques, plus que dans tout autre lac ou océan au monde. Le snorkeling depuis les lodges de Cape Maclear ou Likoma Island offre une expérience comparable aux Maldives — sans les foules. Le lac est également sans risque de bilharziose dans ses zones sablonneuses nord.",
        en: "Lake Malawi (UNESCO) is a giant aquarium: 1,000 endemic species of cichlids (colourful tropical fish), more than in any other lake or ocean in the world. Snorkelling from the lodges at Cape Maclear or Likoma Island offers an experience comparable to the Maldives — without the crowds. The lake's sandy northern areas are also free of bilharzia risk.",
      },
      wikipedia: "Lake_Malawi",
      tags: ["Snorkeling", "Poissons", "UNESCO", "Lac"],
      mustSee: [
        { name: { fr: "Snorkeling Cape Maclear — cichlidés multicolores", en: "Snorkelling at Cape Maclear — multicoloured cichlids" }, wikipedia: "Cape_Maclear" },
        { name: { fr: "Likoma Island — cathédrale anglicane en brousse + plage", en: "Likoma Island — Anglican cathedral in the bush + beach" }, wikipedia: "Likoma_Island" },
        { name: { fr: "Parc national du Lac Malawi (UNESCO)", en: "Lake Malawi National Park (UNESCO)" }, wikipedia: "Lake_Malawi_National_Park" },
        { name: { fr: "Kayak de mer entre les îles rocheuses", en: "Sea kayaking among the rocky islands" }, wikipedia: "Lake_Malawi" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc national de Liwonde", en: "Liwonde National Park" },
      region: { fr: "Shire Valley (sud)", en: "Shire Valley (south)" },
      description: {
        fr: "Liwonde est le meilleur parc animalier du Malawi : crocodiles et hippopotames dans la rivière Shire, éléphants, buffles, et depuis 2017 rhinocéros noirs et lions réintroduits par African Parks. Le safari en bateau sur le Shire est l'une des expériences animalières les plus saisissantes d'Afrique australe — sans les touristes du Kenya ou d'Afrique du Sud.",
        en: "Liwonde is Malawi's best wildlife park: crocodiles and hippos in the Shire River, elephants, buffaloes, and since 2017 black rhinos and lions reintroduced by African Parks. A boat safari on the Shire is one of the most striking wildlife experiences in Southern Africa — without the crowds of Kenya or South Africa.",
      },
      wikipedia: "File:Liwonde Park - view of Shire River.jpg",
      tags: ["Safari", "Éléphants", "Rivière", "Rhinos"],
      mustSee: [
        { name: { fr: "Safari en bateau sur la rivière Shire — crocos et éléphants", en: "Boat safari on the Shire River — crocodiles and elephants" }, wikipedia: "File:Shire fluss liwonde.jpg" },
        { name: { fr: "Rhinocéros noirs réintroduits (programme African Parks)", en: "Reintroduced black rhinos (African Parks programme)" }, wikipedia: "File:Ngorongoro Spitzmaulnashorn.jpg" },
        { name: { fr: "Lever du soleil sur les hippos depuis le camp de rivière", en: "Sunrise over the hippos from the riverside camp" }, wikipedia: "File:Hippo Pool in Ngorongoro Crater.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Mont Mulanje — Trekking en altitude", en: "Mount Mulanje — High-altitude trekking" },
      region: { fr: "Thyolo (sud)", en: "Thyolo (south)" },
      description: {
        fr: "Le massif de Mulanje (3 002m, point culminant du Malawi) est un inselberg granitique qui surgit spectaculairement des plaines de thé à 2 000m de hauteur. Les sentiers traversent forêts de cèdres endémiques, cascades et prairies alpines. La traversée en 3-5 jours avec porteurs est l'une des randonnées les plus belles d'Afrique centrale.",
        en: "The Mulanje Massif (3,002m, Malawi's highest point) is a granite inselberg that rises spectacularly 2,000m above the surrounding tea plains. Trails cross endemic cedar forests, waterfalls and alpine meadows. The 3-5 day traverse with porters is one of the finest treks in Central Africa.",
      },
      wikipedia: "File:Mount Mulanje.jpg",
      tags: ["Randonnée", "Montagne", "Cèdres", "Cascade"],
      mustSee: [
        { name: { fr: "Sommet Sapitwa (3 002m) — point le plus haut du Malawi", en: "Sapitwa Peak (3,002m) — Malawi's highest point" }, wikipedia: "File:Mulanje Massif, Sapitwa Peak.jpg" },
        { name: { fr: "Forêts de cèdres de Mulanje (espèce endémique)", en: "Mulanje cedar forests (endemic species)" }, wikipedia: "File:Mount Mulanje (15073634244).jpg" },
        { name: { fr: "Cascades de Likabula — baignade dans la nature", en: "Likabula Falls — swimming in nature" }, wikipedia: "File:Likhubula Falls.JPG" },
      ],
    },
    {
      id: 4,
      name: { fr: "Plateau de Nyika — Safari à cheval", en: "Nyika Plateau — Horseback safari" },
      region: { fr: "Mzimba (nord)", en: "Mzimba (north)" },
      description: {
        fr: "Le Nyika est le plus grand parc national du Malawi : un vaste plateau herbu à 2 000-2 500m d'altitude avec une flore d'orchidées endémiques, des zèbres, des élands, des léopards et les seuls safaris à cheval du Malawi. Les prairies ondulantes rappellent les Highlands écossais transplantés en Afrique. Vue saisissante sur le lac Malawi par temps clair.",
        en: "Nyika is Malawi's largest national park: a vast grassy plateau at 2,000–2,500m altitude with endemic orchids, zebras, elands, leopards and Malawi's only horseback safaris. The rolling grasslands evoke the Scottish Highlands transplanted to Africa. Striking views over Lake Malawi on clear days.",
      },
      wikipedia: "Nyika_National_Park",
      tags: ["Safari", "Cheval", "Orchidées", "Plateau"],
      mustSee: [
        { name: { fr: "Safari à cheval sur le plateau de Nyika (unique au Malawi)", en: "Horseback safari on the Nyika Plateau (unique in Malawi)" }, wikipedia: "Nyika_National_Park" },
        { name: { fr: "Orchidées sauvages (200+ espèces) en saison des pluies", en: "Wild orchids (200+ species) in the rainy season" }, wikipedia: "File:Flower Quartz Nyika National Park Malawi.jpg" },
        { name: { fr: "Vue panoramique sur le lac Malawi depuis le plateau", en: "Panoramic view over Lake Malawi from the plateau" }, wikipedia: "File:Nyika kaulime.jpg" },
        { name: { fr: "Randonnée nocturne — léopards et hyènes", en: "Night walk — leopards and hyenas" }, wikipedia: "File:Kuzama jua.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Malawi est l'une des destinations les moins chères d'Afrique subsaharienne. Les lodges de la rive du lac sont abordables ; seuls les camps de safari haut de gamme dans les parcs coûtent cher. Le kwacha fluctue fortement — espèces en dollars conseillées.",
      en: "Malawi is one of the cheapest destinations in sub-Saharan Africa. Lakeshore lodges are affordable; only the high-end safari camps in the parks are expensive. The kwacha fluctuates significantly — cash in dollars is recommended.",
    },
    currency: "MWK",
    exchangeRate: "1€ ≈ 1 900 MWK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / backpackers lodge", en: "Guesthouse / backpackers lodge" }, price: "15–35 €", detail: { fr: "Chambre ou dortoir, bord de lac", en: "Room or dorm, lakeside" } },
          { label: { fr: "Lodge 3★ Cape Maclear ou Lilongwe", en: "3★ lodge in Cape Maclear or Lilongwe" }, price: "50–100 €", detail: { fr: "Chalet en bois, vue sur le lac", en: "Wooden chalet, lake view" } },
          { label: { fr: "Camp de safari (Liwonde, Nyika)", en: "Safari camp (Liwonde, Nyika)" }, price: "150–350 €", detail: { fr: "Demi-pension, activités incluses", en: "Half board, activities included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Nsima (bouillie de maïs) + chambo grillé (tilapia local)", en: "Nsima (maize porridge) + grilled chambo (local tilapia)" }, price: "3–8 €", detail: { fr: "Repas typique malawien", en: "Typical Malawian meal" } },
          { label: { fr: "Restaurant mid-range Lilongwe ou Blantyre", en: "Mid-range restaurant in Lilongwe or Blantyre" }, price: "10–20 €", detail: { fr: "Cuisine internationale et locale", en: "International and local cuisine" } },
          { label: { fr: "Marché local — fruits et légumes frais", en: "Local market — fresh fruit and vegetables" }, price: "1–3 €/j", detail: { fr: "Très abondant et bon marché", en: "Very abundant and cheap" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Minibus (matola) entre villes", en: "Minibus (matola) between towns" }, price: "5–15 €", detail: { fr: "Réseau étendu mais lent", en: "Extensive but slow network" } },
          { label: { fr: "AXA Coach Lilongwe–Blantyre", en: "AXA Coach Lilongwe–Blantyre" }, price: "8–12 €", detail: { fr: "Confortable, 4h de trajet", en: "Comfortable, 4h journey" } },
          { label: { fr: "Bateau Ilala sur le lac (1re classe, Likoma)", en: "Ilala ferry on the lake (1st class, Likoma)" }, price: "30–50 €", detail: { fr: "Traversée mythique du lac", en: "Legendary lake crossing" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Snorkeling lac Malawi (matériel + guide)", en: "Snorkelling in Lake Malawi (gear + guide)" }, price: "10–20 €", detail: { fr: "Cape Maclear, demi-journée", en: "Cape Maclear, half day" } },
          { label: { fr: "Safari en bateau Liwonde (2h)", en: "Boat safari in Liwonde (2h)" }, price: "25–45 €", detail: { fr: "Hippos, éléphants, crocodiles", en: "Hippos, elephants, crocodiles" } },
          { label: { fr: "Trek guidé Mulanje (journée, porteur)", en: "Guided Mulanje trek (day, porter)" }, price: "30–60 €", detail: { fr: "Guide + porteur inclus", en: "Guide + porter included" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–45 €/j", desc: { fr: "Lodge abordable + cuisine locale + matola", en: "Affordable lodge + local food + matola" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70–130 €/j", desc: { fr: "Lodge 3★ + restaurants + excursions", en: "3★ lodge + restaurants + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Lilongwe (1j) → Cape Maclear / Lac (4j) → Liwonde (3j) → Mulanje (3j) → retour Blantyre (1j)",
        en: "Lilongwe (1d) → Cape Maclear / Lake (4d) → Liwonde (3d) → Mulanje (3d) → return via Blantyre (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 000 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Lilongwe (via Nairobi ou Addis)", en: "Return flight Europe–Lilongwe (via Nairobi or Addis Ababa)" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "200–400 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "100–200 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–250 €" },
            { label: { fr: "Activités & safaris", en: "Activities & safaris" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Lilongwe", en: "Return flight Europe–Lilongwe" }, amount: "600–1 000 €" },
            { label: { fr: "Lodges et camps (12 nuits)", en: "Lodges and camps (12 nights)" }, amount: "700–1 400 €" },
            { label: { fr: "Vols intérieurs + transports", en: "Domestic flights + transport" }, amount: "200–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "300–500 €" },
            { label: { fr: "Safaris, lac, randonnées", en: "Safaris, lake, hiking" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13–15h via Nairobi (Kenya Airways), Addis-Abeba (Ethiopian) ou Johannesburg. Pas de direct.", en: "~13–15h via Nairobi (Kenya Airways), Addis Ababa (Ethiopian) or Johannesburg. No direct flight." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée gratuit pour les Français (30 jours). Passeport valide 6 mois minimum.", en: "Free visa on arrival for French citizens (30 days). Passport valid for at least 6 months." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Kwacha malawien (MWK). Dollars USD très acceptés dans les lodges. Espèces indispensables hors des villes.", en: "Malawian kwacha (MWK). US dollars widely accepted in lodges. Cash essential outside towns." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Chichewa (langue nationale) + Anglais (officiel). L'anglais est parlé partout dans les zones touristiques.", en: "Chichewa (national language) + English (official). English is spoken everywhere in tourist areas." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G (britannique, 3 broches carrées) — 230V. Adaptateur recommandé.", en: "Type G (British, 3 square pins) — 230V. Adapter recommended." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen indispensable. Bilharziose dans le lac (éviter les eaux peu profondes et bordées de végétation). Eau en bouteille.", en: "Antimalarial treatment essential. Bilharzia risk in the lake (avoid shallow, vegetation-lined water). Bottled water." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille ou filtrée uniquement.", en: "Not drinkable — bottled or filtered water only." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Airtel et TNM offrent une couverture correcte sur les axes principaux. Internet lent mais disponible dans les lodges.", en: "Airtel and TNM offer decent coverage on main routes. Internet slow but available at lodges." } },
  ],
};
