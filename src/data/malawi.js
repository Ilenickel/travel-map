export const MALAWI = {
  code: "MWI",
  numericId: 454,
  name: "Malawi",
  emoji: "🇲🇼",
  capital: "Lilongwe",
  language: "Chichewa, Anglais",
  currency: "Kwacha malawien (MWK)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 25, budgetMid: 65,
    tripMin: 1000, tripMid: 2200,
  },
  description:
    "Le Malawi est le 'Warm Heart of Africa' : le lac Malawi (UNESCO, 9e plus grand lac du monde) avec ses 1 000 espèces de cichlidés endémiques — plus que dans tout autre lac de la planète — est une merveille de biodiversité. Pays enclavé, doux et abordable, avec les parcs animaliers de Liwonde et Nyika, les plateaux de Mulanje, et une hospitalité légendaire.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période : moins de pluie, faune concentrée autour de l'eau, températures agréables (16–26°C). Visibilité exceptionnelle dans le lac.",
      icon: "☀️",
    },
    {
      months: "Novembre – Avril",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Pluies abondantes (200–350mm/mois sur le lac), pistes de brousse difficiles. Températures chaudes (25–30°C). Verdure luxuriante.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "monkey_bay",
      name: "Monkey Bay (lac Malawi)",
      region: "Mangochi — rive sud du lac",
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
      region: "Centre (altitude ~1 100m)",
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
      name: "Lac Malawi — Snorkeling et cichlidés",
      region: "Rift est-africain",
      description:
        "Le lac Malawi (UNESCO) est un aquarium géant : 1 000 espèces de cichlidés (poissons tropicaux colorés) endémiques, plus que dans tout autre lac ou océan au monde. Le snorkeling depuis les lodges de Cape Maclear ou Likoma Island offre une expérience comparable aux Maldives — sans les foules. Le lac est également sans risque de bilharziose dans ses zones sablonneuses nord.",
      wikipedia: "Lake_Malawi",
      tags: ["Snorkeling", "Poissons", "UNESCO", "Lac"],
      mustSee: [
        { name: "Snorkeling Cape Maclear — cichlidés multicolores", wikipedia: "Cape_Maclear" },
        { name: "Likoma Island — cathédrale anglicane en brousse + plage", wikipedia: "Likoma_Island" },
        { name: "Parc national du Lac Malawi (UNESCO)", wikipedia: "Lake_Malawi_National_Park" },
        { name: "Kayak de mer entre les îles rocheuses", wikipedia: "Lake_Malawi" },
      ],
    },
    {
      id: 2,
      name: "Parc national de Liwonde",
      region: "Shire Valley (sud)",
      description:
        "Liwonde est le meilleur parc animalier du Malawi : crocodiles et hippopotames dans la rivière Shire, éléphants, buffles, et depuis 2017 rhinocéros noirs et lions réintroduits par African Parks. Le safari en bateau sur le Shire est l'une des expériences animalières les plus saisissantes d'Afrique australe — sans les touristes du Kenya ou d'Afrique du Sud.",
      wikipedia: "File:Liwonde Park - view of Shire River.jpg",
      tags: ["Safari", "Éléphants", "Rivière", "Rhinos"],
      mustSee: [
        { name: "Safari en bateau sur la rivière Shire — crocos et éléphants", wikipedia: "File:Shire fluss liwonde.jpg" },
        { name: "Rhinocéros noirs réintroduits (programme African Parks)", wikipedia: "File:Ngorongoro Spitzmaulnashorn.jpg" },
        { name: "Lever du soleil sur les hippos depuis le camp de rivière", wikipedia: "File:Hippo Pool in Ngorongoro Crater.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mont Mulanje — Trekking en altitude",
      region: "Thyolo (sud)",
      description:
        "Le massif de Mulanje (3 002m, point culminant du Malawi) est un inselberg granitique qui surgit spectaculairement des plaines de thé à 2 000m de hauteur. Les sentiers traversent forêts de cèdres endémiques, cascades et prairies alpines. La traversée en 3-5 jours avec porteurs est l'une des randonnées les plus belles d'Afrique centrale.",
      wikipedia: "File:Mount Mulanje.jpg",
      tags: ["Randonnée", "Montagne", "Cèdres", "Cascade"],
      mustSee: [
        { name: "Sommet Sapitwa (3 002m) — point le plus haut du Malawi", wikipedia: "File:Mulanje Massif, Sapitwa Peak.jpg" },
        { name: "Forêts de cèdres de Mulanje (espèce endémique)", wikipedia: "File:Mount Mulanje (15073634244).jpg" },
        { name: "Cascades de Likabula — baignade dans la nature", wikipedia: "File:Likhubula Falls.JPG" },
      ],
    },
    {
      id: 4,
      name: "Plateau de Nyika — Safari à cheval",
      region: "Mzimba (nord)",
      description:
        "Le Nyika est le plus grand parc national du Malawi : un vaste plateau herbu à 2 000-2 500m d'altitude avec une flore d'orchidées endémiques, des zèbres, des élands, des léopards et les seuls safaris à cheval du Malawi. Les prairies ondulantes rappellent les Highlands écossais transplantés en Afrique. Vue saisissante sur le lac Malawi par temps clair.",
      wikipedia: "Nyika_National_Park",
      tags: ["Safari", "Cheval", "Orchidées", "Plateau"],
      mustSee: [
        { name: "Safari à cheval sur le plateau de Nyika (unique au Malawi)", wikipedia: "Nyika_National_Park" },
        { name: "Orchidées sauvages (200+ espèces) en saison des pluies", wikipedia: "File:Flower Quartz Nyika National Park Malawi.jpg" },
        { name: "Vue panoramique sur le lac Malawi depuis le plateau", wikipedia: "File:Nyika kaulime.jpg" },
        { name: "Randonnée nocturne — léopards et hyènes", wikipedia: "File:Kuzama jua.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Malawi est l'une des destinations les moins chères d'Afrique subsaharienne. Les lodges de la rive du lac sont abordables ; seuls les camps de safari haut de gamme dans les parcs coûtent cher. Le kwacha fluctue fortement — espèces en dollars conseillées.",
    currency: "MWK",
    exchangeRate: "1€ ≈ 1 900 MWK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / backpackers lodge", price: "15–35 €", detail: "Chambre ou dortoir, bord de lac" },
          { label: "Lodge 3★ Cape Maclear ou Lilongwe", price: "50–100 €", detail: "Chalet en bois, vue sur le lac" },
          { label: "Camp de safari (Liwonde, Nyika)", price: "150–350 €", detail: "Demi-pension, activités incluses" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Nsima (bouillie de maïs) + chambo grillé (tilapia local)", price: "3–8 €", detail: "Repas typique malawien" },
          { label: "Restaurant mid-range Lilongwe ou Blantyre", price: "10–20 €", detail: "Cuisine internationale et locale" },
          { label: "Marché local — fruits et légumes frais", price: "1–3 €/j", detail: "Très abondant et bon marché" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Minibus (matola) entre villes", price: "5–15 €", detail: "Réseau étendu mais lent" },
          { label: "AXA Coach Lilongwe–Blantyre", price: "8–12 €", detail: "Confortable, 4h de trajet" },
          { label: "Bateau Ilala sur le lac (1re classe, Likoma)", price: "30–50 €", detail: "Traversée mythique du lac" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Snorkeling lac Malawi (matériel + guide)", price: "10–20 €", detail: "Cape Maclear, demi-journée" },
          { label: "Safari en bateau Liwonde (2h)", price: "25–45 €", detail: "Hippos, éléphants, crocodiles" },
          { label: "Trek guidé Mulanje (journée, porteur)", price: "30–60 €", detail: "Guide + porteur inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–45 €/j", desc: "Lodge abordable + cuisine locale + matola", color: "#22c55e" },
      { type: "Confort", daily: "70–130 €/j", desc: "Lodge 3★ + restaurants + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Lilongwe (1j) → Cape Maclear / Lac (4j) → Liwonde (3j) → Mulanje (3j) → retour Blantyre (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Europe–Lilongwe (via Nairobi ou Addis)", amount: "500–800 €" },
            { label: "Hébergement (12 nuits)", amount: "200–400 €" },
            { label: "Transports locaux", amount: "100–200 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités & safaris", amount: "150–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Europe–Lilongwe", amount: "600–1 000 €" },
            { label: "Lodges et camps (12 nuits)", amount: "700–1 400 €" },
            { label: "Vols intérieurs + transports", amount: "200–400 €" },
            { label: "Nourriture & restaurants", amount: "300–500 €" },
            { label: "Safaris, lac, randonnées", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~13–15h via Nairobi (Kenya Airways), Addis-Abeba (Ethiopian) ou Johannesburg. Pas de direct." },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée gratuit pour les Français (30 jours). Passeport valide 6 mois minimum." },
    { icon: "💰", label: "Monnaie",           value: "Kwacha malawien (MWK). Dollars USD très acceptés dans les lodges. Espèces indispensables hors des villes." },
    { icon: "🗣️", label: "Langue",            value: "Chichewa (langue nationale) + Anglais (officiel). L'anglais est parlé partout dans les zones touristiques." },
    { icon: "🔌", label: "Prise électrique",  value: "Type G (britannique, 3 broches carrées) — 230V. Adaptateur recommandé." },
    { icon: "💊", label: "Santé",             value: "Antipaludéen indispensable. Bilharziose dans le lac (éviter les eaux peu profondes et bordées de végétation). Eau en bouteille." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille ou filtrée uniquement." },
    { icon: "📱", label: "Réseau",            value: "Airtel et TNM offrent une couverture correcte sur les axes principaux. Internet lent mais disponible dans les lodges." },
  ],
};
