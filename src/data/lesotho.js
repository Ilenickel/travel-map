export const LESOTHO = {
  code: "LSO",
  numericId: 426,
  name: { fr: "Lesotho", en: "Lesotho" },
  emoji: "🇱🇸",
  capital: { fr: "Maseru", en: "Maseru" },
  language: { fr: "Sotho du Sud, Anglais", en: "Southern Sotho, English" },
  currency: { fr: "Loti (LSL)", en: "Loti (LSL)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1600,
  },
  description: {
    fr: "Le Lesotho est surnommé le « Royaume dans le ciel » : entièrement enclavé dans l'Afrique du Sud, c'est le seul pays au monde dont la totalité du territoire se trouve au-dessus de 1 000 mètres d'altitude. Ce petit royaume montagnard offre des randonnées à poney uniques dans les Montagnes du Maluti, le majestueux col de Sani et une culture basotho authentique restée à l'écart du tourisme de masse.",
    en: "Lesotho is nicknamed the 'Kingdom in the Sky': entirely landlocked within South Africa, it is the only country in the world whose entire territory lies above 1,000 metres altitude. This small mountain kingdom offers unique pony trekking in the Maluti Mountains, the majestic Sani Pass and an authentic Basotho culture that has remained off the mass tourism trail.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April" },
      label: { fr: "Été (saison verte)", en: "Summer (green season)" },
      color: "#22c55e",
      description: {
        fr: "Printemps et été austral : prairies verdoyantes, fleurs sauvages, températures agréables (18–25°C). Idéal pour les randonnées et le trekking à poney. Quelques pluies en après-midi.",
        en: "Southern hemisphere spring and summer: lush green meadows, wildflowers, pleasant temperatures (18–25°C). Ideal for hiking and pony trekking. Occasional afternoon rain.",
      },
      icon: "🌿",
    },
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Hiver (neige & ciel bleu)", en: "Winter (snow & blue skies)" },
      color: "#3b82f6",
      description: {
        fr: "Hiver sec avec ciels d'un bleu parfait. Les sommets sont enneigés, les cols spectaculaires. Temperatures négatives la nuit dans les hautes montagnes. Ski possible à Afriski.",
        en: "Dry winter with perfectly blue skies. Peaks are snow-capped, the passes spectacular. Below-freezing nights in the high mountains. Skiing possible at Afriski.",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "maseru",
      name: "Maseru",
      region: { fr: "Capitale (1 400m)", en: "Capital (1,400m)" },
      data: [
        { month: "Jan", temp: 22, rain: 100, icon: "☀️" },
        { month: "Fév", temp: 22, rain: 95,  icon: "☀️" },
        { month: "Mar", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Avr", temp: 17, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 13, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 8,  rain: 15,  icon: "⛅" },
        { month: "Jul", temp: 7,  rain: 15,  icon: "❄️" },
        { month: "Aoû", temp: 10, rain: 15,  icon: "⛅" },
        { month: "Sep", temp: 15, rain: 25,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 90,  icon: "☀️" },
      ],
    },
    {
      id: "sani_top",
      name: "Sani Top",
      region: { fr: "Maluti (col à 2 874m)", en: "Maluti (pass at 2,874m)" },
      data: [
        { month: "Jan", temp: 14, rain: 130, icon: "☀️" },
        { month: "Fév", temp: 14, rain: 115, icon: "☀️" },
        { month: "Mar", temp: 12, rain: 95,  icon: "☀️" },
        { month: "Avr", temp: 8,  rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 3,  rain: 20,  icon: "⛅" },
        { month: "Jun", temp: 0,  rain: 15,  icon: "❄️" },
        { month: "Jul", temp: -1, rain: 20,  icon: "❄️" },
        { month: "Aoû", temp: 2,  rain: 15,  icon: "❄️" },
        { month: "Sep", temp: 7,  rain: 30,  icon: "⛅" },
        { month: "Oct", temp: 11, rain: 65,  icon: "☀️" },
        { month: "Nov", temp: 12, rain: 100, icon: "☀️" },
        { month: "Déc", temp: 14, rain: 120, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Col de Sani & Sani Pass", en: "Sani Pass" },
      region: { fr: "District de Mokhotlong", en: "Mokhotlong District" },
      description: {
        fr: "Le col de Sani (2 874m) est l'une des routes de montagne les plus spectaculaires d'Afrique australe, accessible uniquement en 4x4 depuis la province du KwaZulu-Natal en Afrique du Sud. La montée en lacets révèle des panoramas vertigineux sur les Drakensberg et les hautes prairies du Lesotho. Au sommet, un pub revendique d'être le plus haut d'Afrique, et les bergers basotho à cheval dans leurs couvertures colorées forment un tableau inoubliable.",
        en: "Sani Pass (2,874m) is one of the most spectacular mountain routes in Southern Africa, accessible only by 4x4 from KwaZulu-Natal province in South Africa. The zigzagging climb reveals breathtaking views over the Drakensberg and Lesotho's high plains. At the top, a pub claims to be the highest in Africa, and Basotho shepherds on horseback in their colourful blankets make for an unforgettable scene.",
      },
      wikipedia: "Sani_Pass",
      tags: ["Montagne", "4x4", "Panorama", "Aventure"],
      mustSee: [
        { name: { fr: "Route en lacets du Sani Pass — l'une des plus spectaculaires d'Afrique", en: "Sani Pass zigzag road — one of the most spectacular in Africa" }, wikipedia: "Sani_Pass" },
        { name: { fr: "Sani Mountain Lodge — pub le plus haut d'Afrique (2 874m)", en: "Sani Mountain Lodge — Africa's highest pub (2,874m)" }, wikipedia: "File:Sani Pass cliff (Unsplash).jpg" },
        { name: { fr: "Bergers basotho à cheval — rencontres avec les gardiens de troupeaux", en: "Basotho shepherds on horseback — encounters with livestock herders" }, wikipedia: "File:Basotho blanket lesotho.jpg" },
        { name: { fr: "Vues sur les Drakensberg — panoramas depuis le sommet du col", en: "Views of the Drakensberg — panoramas from the top of the pass" }, wikipedia: "File:Amphitheatre Drakensberg View.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Trekking à poney dans les Maluti", en: "Pony trekking in the Maluti Mountains" },
      region: { fr: "Districts de Mokhotlong et Thaba-Tseka", en: "Mokhotlong and Thaba-Tseka Districts" },
      description: {
        fr: "Le trekking à poney basotho est l'expérience signature du Lesotho. Les poneys du Basotho, robustes et sûrs de pied, permettent de traverser des paysages de hautes montagnes inaccessibles autrement : vallées profondes, villages de huttes rondes aux toits de chaume et rivières claires. Des circuits d'un jour à plusieurs semaines sont proposés depuis de nombreux lodges, accompagnés de guides basotho expérimentés.",
        en: "Basotho pony trekking is Lesotho's signature experience. The sturdy, sure-footed Basotho ponies allow travellers to cross otherwise inaccessible high-mountain landscapes: deep valleys, villages of round thatched-roof huts and clear rivers. Tours ranging from one day to several weeks are offered from numerous lodges, accompanied by experienced Basotho guides.",
      },
      wikipedia: "File:Basotho on Horses.jpg",
      tags: ["Équitation", "Randonnée", "Hautes montagnes", "Tradition"],
      mustSee: [
        { name: { fr: "Malealea Lodge — base classique pour les treks à poney", en: "Malealea Lodge — classic base for pony treks" }, wikipedia: "Malealea" },
        { name: { fr: "Gorges du Makhaleng — canyon accessible à cheval", en: "Makhaleng Gorges — canyon accessible on horseback" }, wikipedia: "File:Lesotho Makhaleng.jpg" },
        { name: { fr: "Afriski Mountain Resort — seule station de ski d'Afrique australe", en: "Afriski Mountain Resort — the only ski resort in Southern Africa" }, wikipedia: "File:AfriSki.jpg" },
      ],
    },
    {
      id: 3,
      name: "Thaba Bosiu",
      region: { fr: "District de Maseru", en: "Maseru District" },
      description: {
        fr: "Thaba Bosiu (« La Montagne de la Nuit ») est le site historique le plus important du Lesotho : c'est sur ce plateau rocheux imprenable que le roi Moshoeshoe Ier rassembla et protégea son peuple contre les raids nguni et boers au XIXe siècle, fondant ainsi la nation basotho. Le site abrite les ruines de son kraal royal, sa tombe et un excellent musée retraçant l'histoire de la résistance basotho.",
        en: "Thaba Bosiu ('Mountain of the Night') is Lesotho's most important historical site: it was on this impregnable rocky plateau that King Moshoeshoe I gathered and protected his people against Nguni and Boer raids in the 19th century, thereby founding the Basotho nation. The site holds the ruins of his royal kraal, his tomb and an excellent museum tracing the history of Basotho resistance.",
      },
      wikipedia: "Thaba_Bosiu",
      tags: ["Histoire", "Roi", "Culture", "Nation"],
      mustSee: [
        { name: { fr: "Ruines du kraal royal de Moshoeshoe Ier", en: "Ruins of King Moshoeshoe I's royal kraal" }, wikipedia: "File:Thaba Bosiu - panoramio.jpg" },
        { name: { fr: "Tombe de Moshoeshoe Ier — fondateur de la nation basotho", en: "Tomb of Moshoeshoe I — founder of the Basotho nation" }, wikipedia: "File:Grave of King Moshoeshoe I.jpg" },
        { name: { fr: "Panorama sur la plaine de Maseru depuis le plateau", en: "View over the Maseru plain from the plateau" }, wikipedia: "File:Thaba Bosigo - panoramio.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Barrage de Katse", en: "Katse Dam" },
      region: { fr: "District de Thaba-Tseka", en: "Thaba-Tseka District" },
      description: {
        fr: "Le barrage de Katse est la deuxième plus grande arche de barrage d'Afrique, un exploit d'ingénierie monumental dans les montagnes du Lesotho. Construit dans le cadre du Highland Water Project pour exporter de l'eau vers l'Afrique du Sud, il crée un lac de retenue spectaculaire entouré de montagnes vertigineuses. Des visites guidées de l'infrastructure sont proposées, et la route d'accès depuis Maseru est déjà en soi un voyage extraordinaire.",
        en: "Katse Dam is Africa's second-largest arch dam, a monumental feat of engineering in the mountains of Lesotho. Built as part of the Highland Water Project to export water to South Africa, it creates a spectacular reservoir surrounded by towering mountains. Guided tours of the infrastructure are available, and the access road from Maseru is already an extraordinary journey in itself.",
      },
      wikipedia: "Katse_Dam",
      tags: ["Ingénierie", "Barrage", "Paysage", "Eau"],
      mustSee: [
        { name: { fr: "Barrage de Katse — arche de 185m de haut dans un canyon de montagne", en: "Katse Dam — 185 m-high arch in a mountain canyon" }, wikipedia: "Katse_Dam" },
        { name: { fr: "Lac de retenue — kayak et pêche à la truite", en: "Reservoir — kayaking and trout fishing" }, wikipedia: "File:Katse dam intake tower.jpg" },
        { name: { fr: "Route des montagnes (A1) — panoramas grandioses", en: "Mountain road (A1) — grand panoramas" }, wikipedia: "File:Malibamatso.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Lesotho est l'une des destinations les moins chères d'Afrique australe. Le loti est ancré au rand sud-africain (1:1) et les deux monnaies sont utilisées partout. Les treks à poney sont la principale dépense touristique, mais restent très abordables par rapport aux safaris d'Afrique orientale.",
      en: "Lesotho is one of the cheapest destinations in Southern Africa. The loti is pegged to the South African rand (1:1) and both currencies are used everywhere. Pony treks are the main tourist expense, but remain very affordable compared to East African safaris.",
    },
    currency: "LSL",
    exchangeRate: "1€ ≈ 20 LSL (= 20 ZAR)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Camping ou dortoir en lodge", en: "Camping or lodge dorm" }, price: "8–15 €" },
          { label: { fr: "Chambre en guesthouse rurale", en: "Room in a rural guesthouse" }, price: "20–40 €" },
          { label: { fr: "Lodge confort (Malealea, Sani)", en: "Comfort lodge (Malealea, Sani)" }, price: "50–100 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Papa (bouillie de maïs) + légumes, local", en: "Papa (maize porridge) + vegetables, local" }, price: "2–5 €" },
          { label: { fr: "Restaurant en ville (Maseru)", en: "Restaurant in town (Maseru)" }, price: "8–18 €" },
          { label: { fr: "Repas en lodge inclus (demi-pension)", en: "Meal included at lodge (half board)" }, price: "15–30 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Minibus local entre villages", en: "Local minibus between villages" }, price: "1–5 €" },
          { label: { fr: "4x4 avec chauffeur (Sani Pass)", en: "4x4 with driver (Sani Pass)" }, price: "30–60 €" },
          { label: { fr: "Location voiture 4x4 (depuis Jo'burg)", en: "4x4 car rental (from Jo'burg)" }, price: "50–80 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Trek à poney (journée complète)", en: "Pony trek (full day)" }, price: "20–40 €" },
          { label: { fr: "Trek poney multi-jours (par jour)", en: "Multi-day pony trek (per day)" }, price: "35–60 €" },
          { label: { fr: "Visite Thaba Bosiu avec guide", en: "Guided visit of Thaba Bosiu" }, price: "5–15 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–55 €/j", desc: { fr: "Guesthouse rurale, nourriture locale, minibus, poney d'entrée de gamme", en: "Rural guesthouse, local food, minibus, entry-level pony trek" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "70–120 €/j", desc: { fr: "Lodge confort, demi-pension, 4x4 et guides privés", en: "Comfort lodge, half board, 4x4 and private guides" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "6 jours", en: "6 days" },
      route: {
        fr: "Maseru → Thaba Bosiu → Malealea (trekking poney) → Sani Pass → Katse Dam",
        en: "Maseru → Thaba Bosiu → Malealea (pony trekking) → Sani Pass → Katse Dam",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg" }, amount: "500–650 €" },
            { label: { fr: "Hébergement (5 nuits)", en: "Accommodation (5 nights)" }, amount: "75–150 €" },
            { label: { fr: "Transports locaux + 4x4 Sani", en: "Local transport + 4x4 Sani" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "80–150 €" },
            { label: { fr: "Activités (poney, guides)", en: "Activities (pony, guides)" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 600 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (5 nuits)", en: "Accommodation (5 nights)" }, amount: "250–500 €" },
            { label: { fr: "Location 4x4", en: "4x4 rental" }, amount: "300–500 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "200–350 €" },
            { label: { fr: "Activités + guides privés", en: "Activities + private guides" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Vol jusqu'à Johannesburg puis route de 4–6h en voiture. Vols directs Paris–Jo'burg avec Air France ou South African Airways (~11h).", en: "Flight to Johannesburg then a 4–6h drive. Direct flights Paris–Jo'burg with Air France or South African Airways (~11h)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Pas de visa requis pour les Français (séjour jusqu'à 30 jours). Passeport valide 6 mois minimum.", en: "No visa required for French citizens (stays up to 30 days). Passport valid for at least 6 months." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Loti (LSL) à parité avec le rand sud-africain. Les rands sont acceptés partout. Emportez du cash car les distributeurs sont rares en dehors de Maseru.", en: "Loti (LSL) pegged to the South African rand. Rands accepted everywhere. Bring cash as ATMs are rare outside Maseru." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Sotho du Sud (sesotho) et anglais (langues officielles). L'anglais est utilisé dans le tourisme et l'administration.", en: "Southern Sotho (Sesotho) and English (official languages). English is used in tourism and administration." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type M (3 grosses broches rondes, comme en Afrique du Sud). Tension 220V. Adaptateur européen indispensable.", en: "Type M (3 large round pins, as in South Africa). 220V. A European adapter is essential." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas de paludisme en altitude (au-dessus de 1 800m, soit presque tout le pays). Risque modéré à Maseru. UV forts en altitude : protège-toi. Eau des sources de montagne généralement potable.", en: "No malaria at altitude (above 1,800m, i.e. almost the whole country). Moderate risk in Maseru. Strong UV at altitude: protect yourself. Mountain spring water is generally drinkable." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Pays globalement sûr. Maseru nécessite une vigilance habituelle la nuit. Dans les montagnes, risque de changement météo rapide : emportez des vêtements chauds même en été.", en: "Generally safe country. Maseru requires the usual caution at night. In the mountains, weather can change quickly: bring warm clothes even in summer." } },
    { icon: "🏔️", label: { fr: "Altitude", en: "Altitude" }, value: { fr: "Tout le Lesotho est au-dessus de 1 000m. Les cols et hauts plateaux dépassent 3 000m. Le mal des montagnes est rare mais l'adaptation est conseillée. Nuits très froides en toute saison en haute altitude.", en: "All of Lesotho lies above 1,000m. Passes and high plateaus exceed 3,000m. Altitude sickness is rare but acclimatisation is advised. Nights are very cold year-round at high altitude." } },
  ],
};
