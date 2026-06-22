export const FRENCH_GUIANA = {
  code: "GUF",
  numericId: 254,
  name: "Guyane française",
  emoji: "🇬🇫",
  capital: "Cayenne",
  language: "Français",
  currency: "Euro (EUR)",
  timezone: "UTC-3",
  filter: { budgetMin: 60, budgetMid: 120, tripMin: 700, tripMid: 1600 },
  description:
    "La Guyane française est un département et région d'outre-mer français situé sur la côte nord-est de l'Amérique du Sud, bordant l'Équateur. Couverte à plus de 90 % par la forêt amazonienne, elle abrite l'une des biodiversités les plus riches de la planète avec jaguars, tapirs, harpies féroces et caïmans. Elle est aussi le site du Centre Spatial Guyanais de Kourou, d'où sont lancées les fusées Ariane — une juxtaposition unique entre haute technologie et nature sauvage préservée.",
  bestPeriods: [
    {
      months: "Aoû – Nov",
      label: "Grande saison sèche",
      color: "#22c55e",
      description: "Meilleure période : temps sec, sentiers praticables, faune abondante au bord des rivières",
      icon: "☀️",
    },
    {
      months: "Fév – Avr",
      label: "Petite saison sèche",
      color: "#f59e0b",
      description: "Accalmie relative — bonne période pour les Îles du Salut et le littoral",
      icon: "⛅",
    },
    {
      months: "Déc – Jan & Mai – Jul",
      label: "Saisons des pluies",
      color: "#ef4444",
      description: "Pluies torrentielles, routes coupées, accès à la forêt profonde difficiles",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "cayenne",
      name: "Cayenne",
      region: "Île de Cayenne",
      data: [
        { month: "Jan", temp: 27, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 350, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 380, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 430, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 290, icon: "⛅" },
        { month: "Jul", temp: 24, rain: 80, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 65, icon: "☀️" },
        { month: "Sep", temp: 25, rain: 55, icon: "☀️" },
        { month: "Oct", temp: 26, rain: 80, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 150, icon: "☀️" },
        { month: "Déc", temp: 27, rain: 380, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Centre Spatial Guyanais — Kourou",
      region: "Kourou",
      description:
        "Le Centre Spatial Guyanais (CSG) de Kourou est la base de lancement de l'Agence Spatiale Européenne (ESA) et le site le plus utilisé au monde pour les lancements commerciaux de satellites. Sa situation géographique idéale, proche de l'Équateur, offre un avantage mécanique optimal pour les mises en orbite géostationnaire. Des visites guidées gratuites sont organisées en dehors des périodes de lancement, permettant d'explorer les installations d'Ariane 5 et 6, et d'assister à des lancements depuis des espaces dédiés au public.",
      wikipedia: "File:Accueil du centre spatial guyanais 2.jpg",
      tags: ["Espace", "Technologie", "Science", "Visite gratuite"],
      mustSee: [
        { name: "Jupiter — zone de préparation des fusées Ariane (visite guidée)", wikipedia: "File:Accueil du centre spatial guyanais 2.jpg" },
        { name: "Musée de l'Espace — histoire des lancements spatiaux depuis Kourou", wikipedia: "File:Centre Spatial Guyanais - 46834152082.jpg" },
        { name: "Observatoire public de lancement — voir une fusée Ariane décoller", wikipedia: "Ariane_5" },
        { name: "Plage des Roches — observatoire public pour les lancements", wikipedia: "Kourou" },
      ],
    },
    {
      id: 2,
      name: "Îles du Salut",
      region: "Archipel du Salut (au large de Kourou)",
      description:
        "L'archipel des Îles du Salut, composé de l'Île Royale, de l'Île Saint-Joseph et de l'Île du Diable, est l'un des sites historiques les plus impressionnants d'Amérique du Sud. Ancienne colonie pénitentiaire française (1852–1953), elles ont rendu célèbre le bagne guyanais à travers le livre Papillon de Henri Charrière. L'Île du Diable, où Alfred Dreyfus fut injustement emprisonné de 1895 à 1899, ne se visite pas mais est visible depuis l'Île Royale où les bâtiments du bagne sont remarquablement préservés dans la végétation tropicale.",
      wikipedia: "File:Île Royale 03.jpg",
      tags: ["Histoire", "Bagne", "Plongée", "Randonnée"],
      mustSee: [
        { name: "Île Royale — bagne colonial préservé dans la jungle", wikipedia: "File:Île Royale 01.jpg" },
        { name: "Île du Diable — prison d'Alfred Dreyfus (vue depuis l'Île Royale)", wikipedia: "File:Île du Diable Dreyfus.jpg" },
        { name: "Île Saint-Joseph — cellules d'isolement en ruine", wikipedia: "File:Ile Saint-Joseph accueil débarcadère.jpg" },
        { name: "Plongée autour des îles — eaux claires, raies et tortues marines", wikipedia: "File:Îles du Salut 10 June DSC 1486 Sea.jpg" },
      ],
    },
    {
      id: 3,
      name: "Fleuve Maroni & villages Amérindiens et Marrons",
      region: "Saint-Laurent-du-Maroni (ouest)",
      description:
        "Le Maroni, fleuve frontière entre la Guyane française et le Suriname, est l'artère vitale de l'intérieur guyanais, peuplé de communautés Wayana, Teko, Aluku et Saramaka. Saint-Laurent-du-Maroni, ancienne ville du bagne, est le point de départ pour les excursions en pirogue vers les villages isolés de l'intérieur. La diversité culturelle de ces populations forestières — langues, artisanat, médecine traditionnelle — est un patrimoine vivant unique.",
      wikipedia: "File:Maroni Fluss Sonnenaufgang.jpg",
      tags: ["Culture amérindienne", "Fleuve", "Pirogue", "Bagne"],
      mustSee: [
        { name: "Camp de la Transportation (Saint-Laurent) — bagne historique sur le Maroni", wikipedia: "File:Saint-Laurent-du-Maroni gendarmerie.JPG" },
        { name: "Navigation en pirogue sur le Maroni — frontière vivante", wikipedia: "File:ALI,_M._(2011-2013)._Parc_Amazonien_de_la_Guyane._Fleuve_Maroni._1_(20).jpg" },
        { name: "Marché de Saint-Laurent — carrefour créole, brésilien et surinamais", wikipedia: "File:Saint-Laurent-du-Maroni (15789323958).jpg" },
      ],
    },
    {
      id: 4,
      name: "Parc Amazonien de Guyane",
      region: "Sud de la Guyane",
      description:
        "Le Parc Amazonien de Guyane est le plus grand parc national de France et l'un des plus vastes espaces protégés d'Amazonie, couvrant 3,4 millions d'hectares de forêt primaire totalement vierge. Il abrite jaguars, tapirs, harpies féroces, loutres géantes et plus de 700 espèces d'oiseaux dans un des écosystèmes les mieux préservés du monde. L'accès se fait uniquement avec des guides agréés par le parc, en pirogue depuis les villages frontières — une aventure exigeante mais inoubliable.",
      wikipedia: "Guiana_Amazonian_Park",
      tags: ["Forêt amazonienne", "Jaguar", "Ornithologie", "Écotourisme"],
      mustSee: [
        { name: "Observation du jaguar et du tapir en forêt primaire", wikipedia: "Jaguar" },
        { name: "Harpie féroce — l'aigle le plus puissant du monde", wikipedia: "Harpy_eagle" },
        { name: "Saül — village isolé, porte d'entrée principale du parc", wikipedia: "Saül,_French_Guiana" },
        { name: "Sentier des Eaux Claires — randonnée en forêt vierge avec guide", wikipedia: "Guiana_Amazonian_Park" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "La Guyane française est un département français : les prix correspondent globalement aux niveaux métropolitains pour la vie quotidienne, voire légèrement supérieurs pour les produits importés. L'avantage majeur : aucun change nécessaire pour les Français, et des liaisons directes fréquentes avec Paris.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (département français)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Chambre chez l'habitant / gîte rural", range: "35–60 €" },
          { label: "Hôtel confort à Cayenne", range: "70–120 €" },
          { label: "Lodge écotouristique en forêt", range: "100–200 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Boui-boui créole / restaurant populaire", range: "8–15 €" },
          { label: "Restaurant standard à Cayenne", range: "15–30 €" },
          { label: "Supermarché (niveau prix métropole)", range: "20–35 €/jour auto-géré" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus public (Cayenne–Kourou)", range: "3–6 €" },
          { label: "Vol intérieur Cayenne–Saül (Air Guyane)", range: "80–160 € A/R" },
          { label: "Pirogue avec guide (par journée)", range: "80–200 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite CSG Kourou (gratuite sans lancement)", range: "0 €" },
          { label: "Excursion Îles du Salut (bateau A/R + journée)", range: "30–50 €" },
          { label: "Trek guidé Parc Amazonien (3 jours)", range: "200–400 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–90 €/j",
        desc: "Gîte ou chambre chez l'habitant, restaurants créoles, transports en commun",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "120–200 €/j",
        desc: "Hôtel confort, restaurants variés, lodges en forêt, guides et excursions",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Cayenne (2j) → Kourou + CSG (1j) → Îles du Salut (1j) → Saint-Laurent/Maroni (2j) → Saül/Parc Amazonien (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "700 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Cayenne (Air France direct)", amount: "300–500 €" },
            { label: "Hébergement (9 nuits)", amount: "315–540 €" },
            { label: "Transports locaux + vol Saül", amount: "120–200 €" },
            { label: "Nourriture + boissons", amount: "160–250 €" },
            { label: "Activités + guides", amount: "105–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 600 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Cayenne (Air France)", amount: "450–700 €" },
            { label: "Hébergement (9 nuits, dont lodges)", amount: "630–1 000 €" },
            { label: "Transports + vols intérieurs", amount: "200–350 €" },
            { label: "Nourriture + restaurants", amount: "200–320 €" },
            { label: "Guides + excursions spécialisées", amount: "250–450 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "8h30 direct depuis Paris-Orly (Air France, Corsair, Air Caraïbes) — le vol le plus court vers l'Amazonie" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — département français, carte d'identité française suffit" },
    { icon: "💰", label: "Monnaie", value: "Euro (EUR) — aucun change, cartes bancaires acceptées partout" },
    { icon: "🗣️", label: "Langue", value: "Français (officiel) — créole guyanais, langues amérindiennes et marronnes dans l'intérieur" },
    { icon: "🔌", label: "Prise électrique", value: "Type E (230V, 50Hz) — même qu'en France métropolitaine, aucun adaptateur nécessaire" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune OBLIGATOIRE. Paludisme dans certaines zones forestières — prophylaxie indispensable. Dengue et chikungunya présents." },
    { icon: "🚀", label: "Lancement spatial", value: "Vérifier le calendrier ESA/Arianespace avant votre voyage — assister à un lancement Ariane est une expérience inoubliable" },
    { icon: "🌿", label: "Forêt intérieure", value: "L'accès au Parc Amazonien se fait obligatoirement avec un guide agréé — réserver au moins 2 mois à l'avance" },
  ],
};
