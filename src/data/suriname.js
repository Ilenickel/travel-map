export const SURINAME = {
  code: "SUR",
  numericId: 740,
  name: "Suriname",
  emoji: "🇸🇷",
  capital: "Paramaribo",
  language: "Néerlandais",
  currency: "Dollar surinamais (SRD)",
  timezone: "UTC-3",
  filter: { budgetMin: 40, budgetMid: 80, tripMin: 1000, tripMid: 2200 },
  description:
    "Le Suriname est le pays le plus boisé du monde, avec plus de 93 % de son territoire couvert par la forêt amazonienne tropicale, dont l'essentiel est protégé et quasi vierge. Ancienne colonie néerlandaise, il présente un mélange culturel unique en Amérique du Sud : Hindoustans, Javanais, Marrons africains, Amérindiens, Créoles et Chinois cohabitent dans une harmonie remarquable. Paramaribo, sa capitale, est inscrite au patrimoine mondial de l'UNESCO pour son centre historique colonial néerlandais parfaitement préservé.",
  bestPeriods: [
    {
      months: "Fév – Avr & Aoû – Nov",
      label: "Saisons sèches",
      color: "#22c55e",
      description: "Deux saisons sèches idéales pour l'écotourisme et l'exploration de la forêt amazonienne",
      icon: "☀️",
    },
    {
      months: "Déc – Jan & Mai – Jul",
      label: "Saisons des pluies",
      color: "#f59e0b",
      description: "Pluies importantes rendant certains accès forestiers difficiles — végétation exubérante",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "paramaribo",
      name: "Paramaribo",
      region: "District de Paramaribo",
      data: [
        { month: "Jan", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 25, rain: 90, icon: "☀️" },
        { month: "Oct", temp: 26, rain: 90, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 130, icon: "☀️" },
        { month: "Déc", temp: 27, rain: 200, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Paramaribo — Centre historique UNESCO",
      region: "Côte nord",
      description:
        "Le centre historique de Paramaribo est classé au patrimoine mondial de l'UNESCO depuis 2002 pour son exceptionnel ensemble colonial néerlandais des XVIIe–XIXe siècles, avec ses maisons en bois peintes de couleurs vives et ses rues bordées de palmiers royaux. La cathédrale Saint-Pierre-et-Saint-Paul, entièrement construite en bois tropical, est l'une des plus grandes au monde de ce type. Le marché central offre un fascinant mélange de cultures avec ses échoppes hindoustanes, javanaises et créoles.",
      wikipedia: "File:P1060656a.jpg",
      tags: ["UNESCO", "Architecture coloniale", "Culture", "Marché"],
      mustSee: [
        { name: "Fort Zeelandia — forteresse néerlandaise du XVIIe siècle devenue musée", wikipedia: "File:Fort Zeelandia, Paramaribo, Suriname.jpg" },
        { name: "Cathédrale Saint-Pierre-et-Saint-Paul — plus grande église en bois des Amériques", wikipedia: "File:Sint-Petrus-en-Pauluskathedraal.jpg" },
        { name: "Marché central — carrefour des cultures surinamiennes", wikipedia: "File:Paramaribo_market_(33557504165).jpg" },
        { name: "Moskee Keizerstraat — mosquée et synagogue côte à côte, symbole de tolérance", wikipedia: "Neveh_Shalom_Synagogue" },
      ],
    },
    {
      id: 2,
      name: "Réserve naturelle de Raleighvallen",
      region: "Sipaliwini (centre forestier)",
      description:
        "La réserve naturelle de Raleighvallen, au cœur de la forêt amazonienne surinamaise, est accessible uniquement par avion ou pirogue et offre une expérience d'écotourisme parmi les plus sauvages d'Amérique du Sud. La chute de Voltsberg et le camping sur les inselbergs (collines rocheuses émergeant de la canopée) permettent d'observer jaguars, tapirs, singes et ara de Maynard dans leur habitat naturel. Le lodge de Raleighvallen accueille les voyageurs dans un cadre totalement immersif.",
      wikipedia: "File:Amazon_jungle_from_above.jpg",
      tags: ["Écotourisme", "Faune sauvage", "Forêt amazonienne", "Randonnée"],
      mustSee: [
        { name: "Observation des jaguars et tapirs en pirogue", wikipedia: "Jaguar" },
        { name: "Ara de Maynard — perroquet endémique du Suriname", wikipedia: "Red-and-green_macaw" },
        { name: "Cataractes de Raleigh — rapides puissants en forêt dense", wikipedia: "File:Amazon_jungle_from_above.jpg" },
      ],
    },
    {
      id: 3,
      name: "Villages Marrons du fleuve Maroni",
      region: "Marowijne (est)",
      description:
        "Les Marrons sont les descendants d'esclaves africains ayant fui les plantations néerlandaises aux XVIIe–XVIIIe siècles pour s'établir dans la forêt tropicale, où ils ont reconstitué une civilisation africaine unique en Amérique. Leurs villages le long du fleuve Maroni, frontière naturelle avec la Guyane française, sont accessibles en pirogue depuis Saint-Laurent-du-Maroni côté français. L'artisanat Marron — sculptures sur bois, textiles brodés, bijoux — est reconnu parmi les plus beaux d'Amérique du Sud.",
      wikipedia: "File:Roseau - Neg mawon emancipation monument.jpg",
      tags: ["Culture", "Histoire", "Rivière", "Artisanat"],
      mustSee: [
        { name: "Village Saramaka — société matrilinéaire d'origine africaine", wikipedia: "File:Tribus de Saramaka (Guyane Française).jpg" },
        { name: "Navigation en pirogue sur le Maroni — expérience unique", wikipedia: "File:ALI,_M._(2011-2013)._Parc_Amazonien_de_la_Guyane._Fleuve_Maroni._1_(20).jpg" },
        { name: "Albina — dernier village avant la frontière guyanaise", wikipedia: "File:Albina2008.jpg" },
      ],
    },
    {
      id: 4,
      name: "Brownsberg Nature Park",
      region: "Brokopondo (centre)",
      description:
        "Le parc naturel de Brownsberg, perché sur un plateau à 500 mètres d'altitude, offre des vues spectaculaires sur le lac de barrage de Brokopondo et la forêt tropicale s'étendant à l'infini. Accessible en 3 heures depuis Paramaribo, il constitue la porte d'entrée la plus facile vers l'intérieur sauvage du Suriname. De nombreux sentiers permettent d'observer singes hurleurs, toucans et papillons morpho dans un environnement préservé.",
      wikipedia: "File:Brownsberg panorama.jpg",
      tags: ["Nature", "Randonnée", "Vues panoramiques", "Faune"],
      mustSee: [
        { name: "Plateau de Brownsberg — panorama sur le lac Brokopondo", wikipedia: "File:Suriname,_view_over_Brokopondo_reservoir_from_Brownsberg.JPG" },
        { name: "Singes hurleurs — observation quasi garantie à l'aube", wikipedia: "File:Mantled howler monkey and baby (81337)2.jpg" },
        { name: "Cascades de Irene et Wiwo — chutes au milieu de la forêt", wikipedia: "File:Leo waterval - panoramio.jpg" },
        { name: "Lac Brokopondo — lac artificiel né d'un barrage hydroélectrique", wikipedia: "File:Brokopondo reservoir.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Suriname est une destination abordable pour les voyageurs venant d'Europe, avec des coûts similaires à ceux de ses voisins guyanais. L'écotourisme en forêt profonde nécessite des tours organisés qui augmentent le budget global.",
    currency: "SRD",
    exchangeRate: "1€ ≈ 38 SRD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / auberge à Paramaribo", range: "15–30 €" },
          { label: "Hôtel confort en ville", range: "50–90 €" },
          { label: "Lodge écotouristique en forêt", range: "80–180 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Warung javanais / roti shop", range: "3–6 €" },
          { label: "Restaurant intermédiaire", range: "10–20 €" },
          { label: "Dîner gastronomique", range: "25–45 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Minibus collectif en ville", range: "0,50–1,50 €" },
          { label: "Vol intérieur vers l'intérieur (Cessna)", range: "100–200 € A/R" },
          { label: "Pirogue en forêt (par jour)", range: "30–80 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Tour guidé Raleighvallen (3 jours)", range: "250–450 €" },
          { label: "Visite villages Marrons en pirogue", range: "60–120 €" },
          { label: "Excursion Brownsberg (journée)", range: "40–70 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "40–65 €/j",
        desc: "Guesthouse, warungs locaux, transports collectifs, excursions courtes",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "80–160 €/j",
        desc: "Hôtel confort, lodge en forêt, restaurants variés, tours organisés",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Paramaribo (3j) → Brownsberg (2j) → Villages Marrons (2j) → Raleighvallen (4j) → Retour",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Paramaribo", amount: "500–700 €" },
            { label: "Hébergement (11 nuits)", amount: "165–330 €" },
            { label: "Transports locaux + pirogues", amount: "100–180 €" },
            { label: "Nourriture + boissons", amount: "130–200 €" },
            { label: "Activités + excursions", amount: "105–190 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Paramaribo", amount: "700–950 €" },
            { label: "Hébergement (11 nuits)", amount: "770–1 100 €" },
            { label: "Vols intérieurs + transports", amount: "300–500 €" },
            { label: "Nourriture + restaurants", amount: "250–400 €" },
            { label: "Tours guidés + activités", amount: "300–500 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "11–16h avec escale (Amsterdam via KLM recommandé, ou Miami/Bogotá)" },
    { icon: "🪪", label: "Visa", value: "Visa requis pour les Français — e-visa disponible en ligne ou visa à l'arrivée (environ 25 USD)" },
    { icon: "💰", label: "Monnaie", value: "Dollar surinamais (SRD) — USD et EUR échangeables facilement à Paramaribo" },
    { icon: "🗣️", label: "Langue", value: "Néerlandais (officiel) — Sranan Tongo (créole local) très répandu, anglais dans le tourisme" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F (127V ou 220V selon zones) — vérifier avant connexion d'appareils sensibles" },
    { icon: "💊", label: "Santé", value: "Vaccins fièvre jaune OBLIGATOIRE. Paludisme en forêt — prophylaxie indispensable. Dengue dans toutes les régions." },
    { icon: "🌿", label: "Forêt", value: "93 % du territoire en forêt tropicale — guide obligatoire pour l'intérieur, prévoir équipement approprié" },
    { icon: "🌡️", label: "Climat", value: "Chaud et humide toute l'année (27°C en moyenne) — deux saisons sèches (fév–avr et aoû–nov)" },
  ],
};
