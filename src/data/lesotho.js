export const LESOTHO = {
  code: "LSO",
  numericId: 426,
  name: "Lesotho",
  emoji: "🇱🇸",
  capital: "Maseru",
  language: "Sotho du Sud, Anglais",
  currency: "Loti (LSL)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1600,
  },
  description:
    "Le Lesotho est surnommé le « Royaume dans le ciel » : entièrement enclavé dans l'Afrique du Sud, c'est le seul pays au monde dont la totalité du territoire se trouve au-dessus de 1 000 mètres d'altitude. Ce petit royaume montagnard offre des randonnées à poney uniques dans les Montagnes du Maluti, le majestueux col de Sani et une culture basotho authentique restée à l'écart du tourisme de masse.",

  bestPeriods: [
    {
      months: "Octobre – Avril",
      label: "Été (saison verte)",
      color: "#22c55e",
      description:
        "Printemps et été austral : prairies verdoyantes, fleurs sauvages, températures agréables (18–25°C). Idéal pour les randonnées et le trekking à poney. Quelques pluies en après-midi.",
      icon: "🌿",
    },
    {
      months: "Mai – Septembre",
      label: "Hiver (neige & ciel bleu)",
      color: "#3b82f6",
      description:
        "Hiver sec avec ciels d'un bleu parfait. Les sommets sont enneigés, les cols spectaculaires. Temperatures négatives la nuit dans les hautes montagnes. Ski possible à Afriski.",
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "maseru",
      name: "Maseru",
      region: "Capitale (1 400m)",
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
      region: "Maluti (col à 2 874m)",
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
      name: "Col de Sani & Sani Pass",
      region: "District de Mokhotlong",
      description:
        "Le col de Sani (2 874m) est l'une des routes de montagne les plus spectaculaires d'Afrique australe, accessible uniquement en 4x4 depuis la province du KwaZulu-Natal en Afrique du Sud. La montée en lacets révèle des panoramas vertigineux sur les Drakensberg et les hautes prairies du Lesotho. Au sommet, un pub revendique d'être le plus haut d'Afrique, et les bergers basotho à cheval dans leurs couvertures colorées forment un tableau inoubliable.",
      wikipedia: "Sani_Pass",
      tags: ["Montagne", "4x4", "Panorama", "Aventure"],
      mustSee: [
        { name: "Route en lacets du Sani Pass — l'une des plus spectaculaires d'Afrique", wikipedia: "Sani_Pass" },
        { name: "Sani Mountain Lodge — pub le plus haut d'Afrique (2 874m)", wikipedia: "File:Sani Pass cliff (Unsplash).jpg" },
        { name: "Bergers basotho à cheval — rencontres avec les gardiens de troupeaux", wikipedia: "File:Basotho blanket lesotho.jpg" },
        { name: "Vues sur les Drakensberg — panoramas depuis le sommet du col", wikipedia: "File:Amphitheatre Drakensberg View.jpg" },
      ],
    },
    {
      id: 2,
      name: "Trekking à poney dans les Maluti",
      region: "Districts de Mokhotlong et Thaba-Tseka",
      description:
        "Le trekking à poney basotho est l'expérience signature du Lesotho. Les poneys du Basotho, robustes et sûrs de pied, permettent de traverser des paysages de hautes montagnes inaccessibles autrement : vallées profondes, villages de huttes rondes aux toits de chaume et rivières claires. Des circuits d'un jour à plusieurs semaines sont proposés depuis de nombreux lodges, accompagnés de guides basotho expérimentés.",
      wikipedia: "File:Basotho on Horses.jpg",
      tags: ["Équitation", "Randonnée", "Hautes montagnes", "Tradition"],
      mustSee: [
        { name: "Malealea Lodge — base classique pour les treks à poney", wikipedia: "Malealea" },
        { name: "Gorges du Makhaleng — canyon accessible à cheval", wikipedia: "File:Lesotho Makhaleng.jpg" },
        { name: "Afriski Mountain Resort — seule station de ski d'Afrique australe", wikipedia: "File:AfriSki.jpg" },
      ],
    },
    {
      id: 3,
      name: "Thaba Bosiu",
      region: "District de Maseru",
      description:
        "Thaba Bosiu (« La Montagne de la Nuit ») est le site historique le plus important du Lesotho : c'est sur ce plateau rocheux imprenable que le roi Moshoeshoe Ier rassembla et protégea son peuple contre les raids nguni et boers au XIXe siècle, fondant ainsi la nation basotho. Le site abrite les ruines de son kraal royal, sa tombe et un excellent musée retraçant l'histoire de la résistance basotho.",
      wikipedia: "Thaba_Bosiu",
      tags: ["Histoire", "Roi", "Culture", "Nation"],
      mustSee: [
        { name: "Ruines du kraal royal de Moshoeshoe Ier", wikipedia: "File:Thaba Bosiu - panoramio.jpg" },
        { name: "Tombe de Moshoeshoe Ier — fondateur de la nation basotho", wikipedia: "File:Grave of King Moshoeshoe I.jpg" },
        { name: "Panorama sur la plaine de Maseru depuis le plateau", wikipedia: "File:Thaba Bosigo - panoramio.jpg" },
      ],
    },
    {
      id: 4,
      name: "Barrage de Katse",
      region: "District de Thaba-Tseka",
      description:
        "Le barrage de Katse est la deuxième plus grande arche de barrage d'Afrique, un exploit d'ingénierie monumental dans les montagnes du Lesotho. Construit dans le cadre du Highland Water Project pour exporter de l'eau vers l'Afrique du Sud, il crée un lac de retenue spectaculaire entouré de montagnes vertigineuses. Des visites guidées de l'infrastructure sont proposées, et la route d'accès depuis Maseru est déjà en soi un voyage extraordinaire.",
      wikipedia: "Katse_Dam",
      tags: ["Ingénierie", "Barrage", "Paysage", "Eau"],
      mustSee: [
        { name: "Barrage de Katse — arche de 185m de haut dans un canyon de montagne", wikipedia: "Katse_Dam" },
        { name: "Lac de retenue — kayak et pêche à la truite", wikipedia: "File:Katse dam intake tower.jpg" },
        { name: "Route des montagnes (A1) — panoramas grandioses", wikipedia: "File:Malibamatso.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Lesotho est l'une des destinations les moins chères d'Afrique australe. Le loti est ancré au rand sud-africain (1:1) et les deux monnaies sont utilisées partout. Les treks à poney sont la principale dépense touristique, mais restent très abordables par rapport aux safaris d'Afrique orientale.",
    currency: "LSL",
    exchangeRate: "1€ ≈ 20 LSL (= 20 ZAR)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camping ou dortoir en lodge", range: "8–15 €" },
          { label: "Chambre en guesthouse rurale", range: "20–40 €" },
          { label: "Lodge confort (Malealea, Sani)", range: "50–100 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Papa (bouillie de maïs) + légumes, local", range: "2–5 €" },
          { label: "Restaurant en ville (Maseru)", range: "8–18 €" },
          { label: "Repas en lodge inclus (demi-pension)", range: "15–30 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Minibus local entre villages", range: "1–5 €" },
          { label: "4x4 avec chauffeur (Sani Pass)", range: "30–60 €" },
          { label: "Location voiture 4x4 (depuis Jo'burg)", range: "50–80 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Trek à poney (journée complète)", range: "20–40 €" },
          { label: "Trek poney multi-jours (par jour)", range: "35–60 €" },
          { label: "Visite Thaba Bosiu avec guide", range: "5–15 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Guesthouse rurale, nourriture locale, minibus, poney d'entrée de gamme", color: "#22c55e" },
      { type: "Confort", daily: "70–120 €/j", desc: "Lodge confort, demi-pension, 4x4 et guides privés", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "6 jours",
      route: "Maseru → Thaba Bosiu → Malealea (trekking poney) → Sani Pass → Katse Dam",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Johannesburg", amount: "500–650 €" },
            { label: "Hébergement (5 nuits)", amount: "75–150 €" },
            { label: "Transports locaux + 4x4 Sani", amount: "80–150 €" },
            { label: "Nourriture + boissons", amount: "80–150 €" },
            { label: "Activités (poney, guides)", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 600 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Johannesburg", amount: "600–800 €" },
            { label: "Hébergement (5 nuits)", amount: "250–500 €" },
            { label: "Location 4x4", amount: "300–500 €" },
            { label: "Nourriture + boissons", amount: "200–350 €" },
            { label: "Activités + guides privés", amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vol jusqu'à Johannesburg puis route de 4–6h en voiture. Vols directs Paris–Jo'burg avec Air France ou South African Airways (~11h)." },
    { icon: "🪪", label: "Visa", value: "Pas de visa requis pour les Français (séjour jusqu'à 30 jours). Passeport valide 6 mois minimum." },
    { icon: "💰", label: "Monnaie", value: "Loti (LSL) à parité avec le rand sud-africain. Les rands sont acceptés partout. Emportez du cash car les distributeurs sont rares en dehors de Maseru." },
    { icon: "🗣️", label: "Langue", value: "Sotho du Sud (sesotho) et anglais (langues officielles). L'anglais est utilisé dans le tourisme et l'administration." },
    { icon: "🔌", label: "Prise électrique", value: "Type M (3 grosses broches rondes, comme en Afrique du Sud). Tension 220V. Adaptateur européen indispensable." },
    { icon: "💊", label: "Santé", value: "Pas de paludisme en altitude (au-dessus de 1 800m, soit presque tout le pays). Risque modéré à Maseru. UV forts en altitude : protège-toi. Eau des sources de montagne généralement potable." },
    { icon: "⚠️", label: "Sécurité", value: "Pays globalement sûr. Maseru nécessite une vigilance habituelle la nuit. Dans les montagnes, risque de changement météo rapide : emportez des vêtements chauds même en été." },
    { icon: "🏔️", label: "Altitude", value: "Tout le Lesotho est au-dessus de 1 000m. Les cols et hauts plateaux dépassent 3 000m. Le mal des montagnes est rare mais l'adaptation est conseillée. Nuits très froides en toute saison en haute altitude." },
  ],
};
