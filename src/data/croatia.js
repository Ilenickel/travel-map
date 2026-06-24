export const CROATIA = {
  code: "HRV",
  numericId: 191,
  name: "Croatie",
  emoji: "🇭🇷",
  capital: "Zagreb",
  language: "Croate",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 65, budgetMid: 120,
    tripMin: 1000, tripMid: 2500,
  },
  description:
    "La Croatie est une révélation adriatique : 1 778km de côte avec des eaux turquoise cristallines, plus de 1 000 îles dont Hvar, Brač et Korčula, la vieille ville de Dubrovnik (UNESCO, 'la perle de l'Adriatique'), les lacs de Plitvice (UNESCO, cascades turquoise en forêt), et Split avec le palais de Dioclétien habité depuis 1 700 ans. La destination méditerranéenne la plus en vogue d'Europe.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Été adriatique",
      color: "#22c55e",
      description:
        "Côte et îles en pleine saison : eaux chaudes (26°C), soleil garanti. Juin et septembre idéaux (moins de foules que juillet-août). Dubrovnik très chargé en juillet-août.",
      icon: "☀️",
    },
    {
      months: "Avril – Mai",
      label: "Printemps",
      color: "#f59e0b",
      description:
        "Plitvice à son plus beau (cascades au maximum), côte déserte, températures agréables (16–22°C). Idéal pour l'intérieur.",
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "split",
      name: "Split",
      region: "Dalmatie centrale",
      data: [
        { month: "Jan", temp:  8, rain: 90,  icon: "⛅" },
        { month: "Fév", temp:  9, rain: 75,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 25,  icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 65,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 95,  icon: "⛅" },
        { month: "Nov", temp: 13, rain: 120, icon: "⛅" },
        { month: "Déc", temp:  9, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "zagreb",
      name: "Zagreb",
      region: "Plaine pannonnienne (capitale)",
      data: [
        { month: "Jan", temp:  1, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 20, rain: 85,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 12, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 75,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 55,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Dubrovnik — La Perle de l'Adriatique",
      region: "Dalmatie du Sud",
      description:
        "Dubrovnik (UNESCO) est une des villes les plus belles du monde : ses remparts médiévaux du XVe siècle (2km de tour complet au-dessus de la mer) dominent une vieille ville de marbre blanc parfaitement préservée. La Stradun (rue principale), les palais gothiques, les fontaines de la Renaissance et la vue sur les îles Élaphites depuis les murailles sont inoubliables. Cadre de Game of Thrones.",
      wikipedia: "Dubrovnik",
      tags: ["Remparts", "UNESCO", "Adriatique", "Game of Thrones", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: "Tour des remparts médiévaux (2km) vue sur l'Adriatique", wikipedia: "Walls_of_Dubrovnik" },
        { name: "Stradun — rue de marbre principal de la Vieille Ville", wikipedia: "File:Stradun rano ujutro.jpg" },
        { name: "Île de Lokrum en ferry (10 min) — jardins et paons", wikipedia: "Lokrum" },
        { name: "Téléphérique Srđ — panorama à 412m sur Dubrovnik", wikipedia: "File:Dubrovnik Cable Car Station.jpg" },
      ],
    },
    {
      id: 2,
      name: "Lacs de Plitvice — Cascades UNESCO",
      region: "Lika (intérieur)",
      description:
        "Le parc national des lacs de Plitvice (UNESCO) est l'une des merveilles naturelles de Croatie : 16 lacs en cascade reliés par 90 cascades dans une forêt de hêtres et de sapins. L'eau est d'un turquoise surnaturel grâce aux dépôts de travertin. Les passerelles en bois au-dessus des cascades et la Grande Cascade (78m) créent un spectacle unique.",
      wikipedia: "Plitvice_Lakes_National_Park",
      tags: ["Cascades", "UNESCO", "Turquoise", "Forêt", "Nature", "Randonnée"],
      mustSee: [
        { name: "Grande Cascade (Veliki Slap, 78m) — la plus haute de Croatie", wikipedia: "File:Plitvice Lakes1.jpg" },
        { name: "Passerelles en bois entre les lacs du niveau inférieur", wikipedia: "File:A bridge in Plitvice lakes national park, Croatia.jpg" },
        { name: "Lac Kozjak en bateau électrique (le plus grand lac)", wikipedia: "File:Plitvice Lakes National Park BW 2014-10-13 12-27-16.jpg" },
        { name: "Grotte des oiseaux (Šupljara) — déversoir dans la falaise", wikipedia: "File:Plitvice 12.jpg" },
      ],
    },
    {
      id: 3,
      name: "Split — Palais de Dioclétien habité",
      region: "Dalmatie centrale",
      description:
        "Split est une ville unique au monde : son centre historique (UNESCO) EST le palais de l'empereur Dioclétien (305 apr. J.-C.) — 3 000 personnes vivent encore à l'intérieur des murs antiques. Les caves du palais, le mausolée transformé en cathédrale, et les ruelles animées de bars et restaurants font de Split une des villes les plus vivantes de l'Adriatique.",
      wikipedia: "Split,_Croatia",
      tags: ["Palais romain", "UNESCO", "Vivant", "Dioclétien", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: "Caves du palais de Dioclétien (IVe s.) — sous la ville", wikipedia: "Diocletian's_Palace" },
        { name: "Cathédrale Saint-Domnius — mausolée impérial transformé en église", wikipedia: "Cathedral_of_Saint_Domnius" },
        { name: "Promenade de la Riva au coucher du soleil", wikipedia: "Split,_Croatia" },
        { name: "Ferry vers les îles Brač, Hvar ou Korčula", wikipedia: "File:J32 807 Brač, Leuchtturm Rt Ražanj.jpg" },
      ],
    },
    {
      id: 4,
      name: "Hvar — L'île la plus ensoleillée d'Europe",
      region: "Dalmatie — Adriatique",
      description:
        "Hvar est l'île la plus longue (68km) et la plus ensoleillée de Croatie (2 724h de soleil/an — parmi les plus élevées d'Europe). Sa forteresse espagnole domine la vieille ville blanche et son théâtre du XVIe siècle (l'un des plus anciens d'Europe). L'intérieur est couvert de lavande (juillet) et de vignobles produisant le Plavac Mali, l'un des meilleurs vins rouges de Croatie.",
      wikipedia: "Hvar",
      tags: ["Île", "Lavande", "Forteresse", "Vin", "Plage", "Nature"],
      mustSee: [
        { name: "Forteresse espagnole Španjola — vue panoramique sur l'archipel", wikipedia: "File:Spanjola.JPG" },
        { name: "Champs de lavande de Brusje (juillet — floraison)", wikipedia: "File:Brusje_-_panoramio_(1).jpg" },
        { name: "Îles Pakleni — eaux turquoise en bateau taxi", wikipedia: "Pakleni_Islands" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Croatie a adopté l'euro en 2023. Les prix sont montés, surtout sur la côte en juillet-août où la demande dépasse l'offre. Dubrovnik est devenue chère. L'intérieur (Zagreb, Plitvice) reste abordable. Voyager en mai-juin ou septembre permet d'économiser 30–40%.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro depuis 2023)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Sobe (chambre chez l'habitant) sur la côte", price: "40–80 €", detail: "Charmant et abordable, souvent avec cuisine" },
          { label: "Hôtel 3★ Split ou Zagreb", price: "80–150 €", detail: "Bon confort, proche de la vieille ville" },
          { label: "Hôtel 3★ Dubrovnik (haute saison)", price: "150–280 €", detail: "Très demandé, réserver 3–6 mois à l'avance" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Ćevapi (saucisses grillées) + ajvar dans une konoba", price: "8–15 €", detail: "Cuisine dalmate typique" },
          { label: "Peka (agneau ou poulpe sous la cloche) en restaurant côtier", price: "18–30 €", detail: "Plat traditionnel à commander à l'avance" },
          { label: "Pizza napolitaine sur la promenade", price: "8–14 €", detail: "Influence italienne évidente" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Ferry Split–Hvar (Jadrolinija)", price: "6–12 €", detail: "Liaisons quotidiennes, billet à l'avance" },
          { label: "Bus Zagreb–Split (5h, FlixBus, Flixbus)", price: "15–30 €", detail: "Réseau dense et fiable" },
          { label: "Location de scooter (île de Hvar, journée)", price: "30–50 €", detail: "Le meilleur moyen de visiter les îles" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc de Plitvice (haute saison)", price: "40 €", detail: "Inclut bateau et bus dans le parc" },
          { label: "Tour des remparts de Dubrovnik", price: "35 €", detail: "Incontournable, faire tôt le matin" },
          { label: "Excursion kayak mer depuis Dubrovnik (demi-journée)", price: "50–80 €", detail: "Grotte Bleue + plage secrète" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "65–100 €/j", desc: "Sobe + konoba + ferry + bus", color: "#22c55e" },
      { type: "Confort", daily: "120–220 €/j", desc: "Hôtel 3★ + restaurants + activités", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Zagreb (1j) → Plitvice (2j) → Split (3j) → Hvar (2j) → Dubrovnik (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Zagreb ou Split (Ryanair, Air France)", amount: "80–200 €" },
            { label: "Hébergement (10 nuits)", amount: "400–750 €" },
            { label: "Ferries + bus + transports", amount: "150–280 €" },
            { label: "Nourriture + vin local", amount: "300–500 €" },
            { label: "Plitvice + remparts + activités", amount: "150–280 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Split ou Dubrovnik", amount: "100–300 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "1 000–2 000 €" },
            { label: "Ferries + voiture + scooter", amount: "350–600 €" },
            { label: "Nourriture & peka + vin", amount: "500–900 €" },
            { label: "Kayak, sorties, activités", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h (Croatia Airlines, Ryanair, Air France direct CDG–Zagreb ou Split). Vols directs vers Dubrovnik en saison." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen (depuis 2023). Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€, depuis jan. 2023). Carte bancaire très bien acceptée. Espèces utiles dans les marchés ruraux." },
    { icon: "🗣️", label: "Langue",            value: "Croate. Anglais très bien parlé partout sur la côte. Italien compris en Dalmatie." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. CEAM valide. Méduses possibles sur certaines plages en été." },
    { icon: "🚢", label: "Ferries",           value: "Jadrolinija opère toutes les lignes côtières. Réserver à l'avance en juillet-août (complets des semaines avant). Arriver tôt pour les ferries avec voitures." },
    { icon: "☀️", label: "Haute saison",      value: "Juillet-août : foules extrêmes à Dubrovnik et Hvar, prix au maximum. Préférer juin et septembre pour 30% moins cher et deux fois moins de monde." },
  ],
};
