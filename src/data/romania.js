export const ROMANIA = {
  code: "ROU",
  numericId: 642,
  name: "Roumanie",
  emoji: "🇷🇴",
  capital: "Bucarest",
  language: "Roumain",
  currency: "Leu roumain (RON)",
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1800,
  },
  description:
    "La Roumanie est la grande surprise d'Europe de l'Est : la Transylvanie avec ses forteresses saxonnes médiévales et le château de Bran (Dracula), le delta du Danube (UNESCO, plus grand delta d'Europe), les monastères peints de Bucovine (UNESCO), les Carpates avec ours et loups sauvages, et Bucarest avec son architecture Art Nouveau et son absurde Palais du Parlement — le deuxième plus grand bâtiment du monde.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Saison idéale",
      color: "#22c55e",
      description:
        "Températures agréables (20–28°C), fleurs des Carpates en mai-juin, delta du Danube en juillet-août, couleurs d'automne splendides en septembre. Eviter le cœur de l'été (35°C+ à Bucarest en juillet).",
      icon: "☀️",
    },
    {
      months: "Décembre – Février",
      label: "Hiver en Transylvanie",
      color: "#f59e0b",
      description:
        "Villages médiévaux enneigés, ski dans les Carpates (Sinaia, Poiana Brasov), marchés de Noël de Sibiu. Températures -5 à -10°C en montagne.",
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "bucharest",
      name: "Bucarest",
      region: "Munténie (plaine du sud)",
      data: [
        { month: "Jan", temp: -1, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  7, rain: 40,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 45,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "transylvania",
      name: "Brasov (Transylvanie)",
      region: "Carpates (altitude 600m)",
      data: [
        { month: "Jan", temp: -4, rain: 35,  icon: "❄️" },
        { month: "Fév", temp: -2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 75,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 90,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 45,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 35,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Transylvanie — Châteaux et forêts de Dracula",
      region: "Carpates",
      description:
        "La Transylvanie est une région magique : le château de Bran (associé à Dracula/Vlad l'Empaleur), la citadelle médiévale saxonne de Sighișoara (UNESCO, ville natale de Vlad Tepeș), les villages fortifiés de Viscri et Biertan (UNESCO), et les Carpates avec des populations sauvages d'ours bruns, loups et lynx — les plus importantes d'Europe hors Russie.",
      wikipedia: "File:Cheile_Turzii-(42).JPG",
      tags: ["Dracula", "Médiéval", "Ours", "UNESCO", "Histoire", "Architecture", "Randonnée", "Ski"],
      mustSee: [
        { name: "Château de Bran — 'château de Dracula' dans les Carpates", wikipedia: "Bran_Castle" },
        { name: "Sighișoara — ville médiévale saxonne fortifiée (UNESCO)", wikipedia: "Sighișoara" },
        { name: "Viscri — village saxon UNESCO, ferme du Prince Charles", wikipedia: "File:ViscriKirchenburg.jpg" },
        { name: "Randonnée ours bruns des Carpates (guide, Braşov)", wikipedia: "Brown_bear" },
      ],
    },
    {
      id: 2,
      name: "Delta du Danube — Wilderness UNESCO",
      region: "Dobrogée (côte est)",
      description:
        "Le delta du Danube est le troisième plus grand delta d'Europe et l'un des écosystèmes les plus riches : 300 espèces d'oiseaux (pélicans, aigrettes, cormorans pygmées), 45 espèces de poissons dont l'esturgeon beluga, des forêts flottantes et des lacs intérieurs sans route. On se déplace uniquement en bateau depuis Tulcea. Classé UNESCO et réserve de biosphère.",
      wikipedia: "File:Danube Delta, autumn.jpg",
      tags: ["Delta", "Oiseaux", "UNESCO", "Nature", "Randonnée"],
      mustSee: [
        { name: "Pélicans blancs et frisés (la plus grande colonie d'Europe)", wikipedia: "File:White pelicans (Pelecanus onocrotalus) Danube delta.jpg" },
        { name: "Excursion en bateau dans les bras secondaires du delta", wikipedia: "File:Comrades from the Danube Delta. (29724046008).jpg" },
        { name: "Village de Sfântu Gheorghe — pêcheurs au bout du delta", wikipedia: "File:Danube-Delta2008a.jpg" },
        { name: "Coucher de soleil sur les roseaux depuis un bateau", wikipedia: "File:Danube Delta oct 2006 101.jpg" },
      ],
    },
    {
      id: 3,
      name: "Monastères de Bucovine — Fresques UNESCO",
      region: "Moldavie (nord-est)",
      description:
        "Les monastères peints de Bucovine (Voronet, Sucevita, Moldovita) sont classés UNESCO : leurs façades extérieures entièrement couvertes de fresques du XVe–XVIe siècle représentant des scènes bibliques en bleu de Voronet (un bleu unique jamais reproduit). Une des curiosités artistiques les plus étonnantes d'Europe, dans des collines vertes et boisées.",
      wikipedia: "File:Voronet murals 2010 15.jpg",
      tags: ["Fresques", "UNESCO", "Monastères", "Art byzantin", "Architecture"],
      mustSee: [
        { name: "Voronet — 'la chapelle Sixtine de l'Est', bleu unique", wikipedia: "Voroneț_Monastery" },
        { name: "Sucevița — forteresse monastique avec fresques intactes", wikipedia: "Sucevița_Monastery" },
        { name: "Moldovița — fresques du Siège de Constantinople", wikipedia: "Moldovița_Monastery" },
        { name: "Humor — détails comiques rares dans l'art religieux", wikipedia: "Humor_Monastery" },
      ],
    },
    {
      id: 4,
      name: "Bucarest — Excès et beauté",
      region: "Munténie (capitale)",
      description:
        "Bucarest est une capitale fascinante par ses contradictions : le Palais du Parlement (2e plus grand bâtiment du monde, commandé par Ceaușescu), les quartiers Art Nouveau de Floreasca et Dorobanți, le Village Museum (musées en plein air avec 300 bâtisses paysannes), et une scène nocturne et gastronomique en plein essor. La 'Petite Paris des Balkans' retrouve sa splendeur.",
      wikipedia: "Bucharest",
      tags: ["Palais", "Art Nouveau", "Musée", "Nuit", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Palais du Parlement (Ceaușescu) — visite guidée obligatoire", wikipedia: "Palace_of_the_Parliament" },
        { name: "Musée du Village — 300 maisons paysannes en plein air", wikipedia: "Dimitrie_Gusti_National_Village_Museum" },
        { name: "Calea Victoriei — boulevard Art Nouveau et palais Belle Époque", wikipedia: "Calea_Victoriei" },
        { name: "Quartier de Floreasca — terrasses, restaurants, vie de nuit", wikipedia: "File:Bis Sofia Floreasca 62.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Roumanie est l'une des destinations les moins chères de l'Union européenne. Bucarest a le coût de la vie le plus bas des capitales de l'UE. Le leu est stable. La qualité des restaurants est en forte progression.",
    currency: "RON",
    exchangeRate: "1€ ≈ 5 RON",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / pension en Transylvanie", price: "20–40 €", detail: "Chambre chez l'habitant, repas disponibles" },
          { label: "Hôtel 3★ Bucarest ou Brasov", price: "50–100 €", detail: "Bon confort, souvent petit-déj inclus" },
          { label: "Cabane de montagne (Carpates)", price: "20–40 €", detail: "Demi-pension disponible" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Sarmale (chou farci) + mămăligă dans un restaurant local", price: "7–12 €", detail: "Cuisine roumaine copieuse" },
          { label: "Restaurant mid-range Bucarest", price: "14–25 €", detail: "Cuisine créative + vins locaux" },
          { label: "Marché agroalimentaire — légumes, fromages, charcuteries", price: "5–10 €", detail: "Extraordinaire diversité locale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train CFR Bucarest–Brasov (2h30)", price: "8–15 €", detail: "Paysage des Carpates magnifique" },
          { label: "Bus interurbain (FlixBus, Autocar)", price: "10–20 €", detail: "Liaisons fréquentes" },
          { label: "Location de voiture (Bucarest, journée)", price: "25–50 €", detail: "Recommandée pour les monastères" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite château de Bran", price: "9 €", detail: "Musée d'histoire medievale" },
          { label: "Excursion bateau delta du Danube (demi-journée)", price: "20–40 €", detail: "Guide ornithologie + pique-nique" },
          { label: "Randonnée guidée ours bruns (départ Brasov)", price: "40–80 €", detail: "Affût en forêt, guide naturaliste" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Pension + restaurant local + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "70–130 €/j", desc: "Hôtel 3★ + restaurants + visites guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Bucarest (2j) → Sinaia (1j) → Brasov + Bran (2j) → Sighișoara (1j) → Bucovine (3j) → retour (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bucarest (Wizz Air, Ryanair, Tarom)", amount: "80–200 €" },
            { label: "Hébergement (10 nuits)", amount: "250–450 €" },
            { label: "Transports (train + voiture partage)", amount: "100–200 €" },
            { label: "Nourriture + vins", amount: "200–350 €" },
            { label: "Visites + guide ours", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bucarest", amount: "100–250 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "550–1 000 €" },
            { label: "Voiture de location (10 jours)", amount: "300–500 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Activités, guides, delta", amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h45 (Wizz Air, Ryanair, Tarom direct CDG/Beauvais–Bucarest). Aussi vols vers Cluj-Napoca et Timisoara." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — UE (Roumanie membre depuis 2007, intégration Schengen terrestre 2024). Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Leu roumain (RON). Carte bancaire acceptée en ville. Espèces utiles en zone rurale et dans les marchés." },
    { icon: "🗣️", label: "Langue",            value: "Roumain (langue latine proche du français). Anglais parlé par les jeunes. Allemand utile en Transylvanie (héritage saxon)." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. CEAM valide. Tiques dans les forêts des Carpates — protéger les jambes." },
    { icon: "🐻", label: "Ours bruns",        value: "Les Carpates abritent 6 000 ours bruns — la plus grande population d'Europe hors Russie. Ne pas randonner seul en forêt profonde. Les guides connaissent les zones." },
    { icon: "🚗", label: "Routes",            value: "L'état des routes en dehors des autoroutes est variable. La Transfăgărășan (route de montagne ouverte juin–octobre) est l'une des plus belles du monde." },
  ],
};
