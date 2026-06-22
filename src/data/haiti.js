export const HAITI = {
  code: "HTI",
  numericId: 332,
  name: "Haïti",
  emoji: "🇭🇹",
  capital: "Port-au-Prince",
  language: "Créole haïtien, Français",
  currency: "Gourde haïtienne (HTG)",
  timezone: "UTC-5",
  filter: { budgetMin: 35, budgetMid: 70, tripMin: 850, tripMid: 1800 },
  description:
    "Haïti, première république noire du monde fondée en 1804 après une révolution d'esclaves unique dans l'histoire, possède un patrimoine culturel extraordinaire mêlant influences africaines, françaises et taïnos. Le pays abrite des sites classés UNESCO comme la Citadelle Laferrière et le Sans-Souci, témoignages d'une grandeur passée. ⚠️ AVERTISSEMENT SÉCURITÉ : En raison de la violence des gangs et de l'instabilité politique extrême depuis 2021, le voyage en Haïti est fortement déconseillé par la plupart des gouvernements — consultez impérativement les avis officiels avant tout projet de visite.",
  bestPeriods: [
    {
      months: "Déc – Mars",
      label: "Saison sèche",
      color: "#22c55e",
      description: "Période la plus sèche et agréable, températures douces, idéale pour visiter",
      icon: "☀️",
    },
    {
      months: "Avr – Jun & Oct – Nov",
      label: "Saisons des pluies",
      color: "#f59e0b",
      description: "Deux saisons pluvieuses avec risques de crues et d'inondations",
      icon: "🌧️",
    },
    {
      months: "Jun – Nov",
      label: "Saison cyclonique",
      color: "#ef4444",
      description: "Risque élevé d'ouragans — éviter cette période",
      icon: "🌀",
    },
  ],
  weatherCities: [
    {
      id: "port_au_prince",
      name: "Port-au-Prince",
      region: "Ouest",
      data: [
        { month: "Jan", temp: 25, rain: 60, icon: "☀️" },
        { month: "Fév", temp: 25, rain: 55, icon: "☀️" },
        { month: "Mar", temp: 26, rain: 80, icon: "☀️" },
        { month: "Avr", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 90, icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 95, icon: "⛅" },
        { month: "Sep", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 110, icon: "🌧️" },
        { month: "Déc", temp: 24, rain: 65, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Citadelle Laferrière & Sans-Souci",
      region: "Nord",
      description:
        "La Citadelle Laferrière est l'une des plus grandes forteresses de l'hémisphère occidental, construite au début du XIXe siècle par le roi Henri Christophe pour défendre Haïti contre une éventuelle reconquête française. Classée au patrimoine mondial de l'UNESCO avec le palais Sans-Souci, elle témoigne de la grandeur de la première nation noire indépendante. Le site est accessible depuis Cap-Haïtien, à quelques heures de cheval ou de marche dans les montagnes.",
      wikipedia: "Citadelle_Laferrière",
      tags: ["UNESCO", "Histoire", "Architecture", "Randonnée"],
      mustSee: [
        { name: "Citadelle Laferrière — forteresse UNESCO du roi Henri Christophe", wikipedia: "Citadelle_Laferrière" },
        { name: "Palais Sans-Souci — ruines royales du XIXe siècle", wikipedia: "File:Sans-Souci_Palace_front.jpg" },
        { name: "Cap-Haïtien — ancienne capitale coloniale française", wikipedia: "File:View_of_Cap-Haitien.jpg" },
        { name: "Musée du Panthéon National Haïtien — histoire de la révolution", wikipedia: "File:MUPANAH 2018 - Roof.jpg" },
      ],
    },
    {
      id: 2,
      name: "Jacmel",
      region: "Sud-Est",
      description:
        "Jacmel est une ville côtière réputée pour son architecture coloniale préservée, sa scène artistique foisonnante et son célèbre carnaval. La ville abrite de nombreux ateliers d'artistes et est considérée comme la capitale culturelle d'Haïti. Son front de mer pittoresque et ses maisons en fer forgé d'influence victorienne en font une destination unique dans les Caraïbes.",
      wikipedia: "Jacmel",
      tags: ["Art", "Culture", "Architecture", "Plage"],
      mustSee: [
        { name: "Marché de fer de Jacmel — marché artisanal coloré", wikipedia: "Jacmel" },
        { name: "Carnaval de Jacmel — fête culturelle réputée (février)", wikipedia: "File:Kanaval in Jacmel Haiti 2014 01.jpg" },
        { name: "Maisons coloniales — architecture victorienne et fer forgé", wikipedia: "File:HT Jacmel 1010 (9) (17029406128).jpg" },
        { name: "Plage de Cyvadier — plage calme à proximité", wikipedia: "File:HT Jacmel 1010 (60) (16594718984).jpg" },
      ],
    },
    {
      id: 3,
      name: "Île-à-Vache",
      region: "Sud",
      description:
        "Île-à-Vache est une île tropicale paisible au large des Cayes, l'une des rares régions d'Haïti offrant encore un tourisme balnéaire dans des conditions relativement sûres. Ses plages de sable blanc, ses eaux turquoise et son atmosphère tranquille contrastent avec les difficultés du pays continental. Autrefois refuge du pirate Henry Morgan, elle offre une plongée et des paysages naturels remarquables.",
      wikipedia: "File:Ile-a-Vache - Haiti.jpg",
      tags: ["Plage", "Nature", "Plongée", "Île"],
      mustSee: [
        { name: "Plages de sable blanc — eaux turquoise et récifs coralliens", wikipedia: "File:Ile-a-Vache - Haiti.jpg" },
        { name: "Village de pêcheurs — vie locale authentique", wikipedia: "File:Vaches ile dupas.jpg" },
        { name: "Randonnée sur l'île — végétation tropicale et panoramas", wikipedia: "File:Ile-a-Vache Inland Lake - Haiti.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Haïti est l'une des destinations les moins chères des Caraïbes, mais l'instabilité économique et la dévaluation de la gourde rendent les prix très variables. La dollarisation partielle de l'économie est courante dans le secteur touristique.",
    currency: "HTG",
    exchangeRate: "1€ ≈ 135 HTG",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse locale", range: "15–25 €" },
          { label: "Hôtel confort", range: "40–70 €" },
          { label: "Resort / hôtel haut de gamme", range: "100–180 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas local (griot, riz et haricots)", range: "3–6 €" },
          { label: "Restaurant intermédiaire", range: "10–20 €" },
          { label: "Restaurant de style occidental", range: "20–40 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Tap-tap (minibus collectif)", range: "0,50–1 €" },
          { label: "Moto-taxi (trajet court)", range: "1–3 €" },
          { label: "Location de voiture avec chauffeur / jour", range: "60–100 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée Citadelle Laferrière", range: "15–30 €" },
          { label: "Excursion Île-à-Vache (bateau + journée)", range: "25–50 €" },
          { label: "Cours de peinture / atelier artisanal à Jacmel", range: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "35–55 €/j",
        desc: "Guesthouse simple, repas locaux, transports collectifs",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "70–120 €/j",
        desc: "Hôtel correct, restaurants variés, chauffeur privé",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Port-au-Prince → Cap-Haïtien (Citadelle) → Jacmel → Île-à-Vache",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port-au-Prince", amount: "450–650 €" },
            { label: "Hébergement (9 nuits)", amount: "135–225 €" },
            { label: "Transports locaux", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "100–150 €" },
            { label: "Activités + visites", amount: "85–135 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port-au-Prince", amount: "600–850 €" },
            { label: "Hébergement (9 nuits)", amount: "630–900 €" },
            { label: "Transports locaux + chauffeur", amount: "250–350 €" },
            { label: "Nourriture + restaurants", amount: "200–300 €" },
            { label: "Activités + guides", amount: "120–200 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "10–14h avec escale (Miami, New York ou Fort-de-France)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa requis pour les ressortissants français (séjour ≤ 90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Gourde haïtienne (HTG) — USD largement accepté dans le secteur touristique" },
    { icon: "🗣️", label: "Langue", value: "Créole haïtien (langue maternelle), Français (officiel)" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B (110V, 60Hz) — adaptateur nécessaire pour les Européens" },
    { icon: "💊", label: "Santé", value: "Vaccins hépatite A/B, typhoïde, rage recommandés. Paludisme dans certaines zones — prophylaxie conseillée. Eau non potable." },
    { icon: "⚠️", label: "Sécurité", value: "DÉCONSEILLÉ : violence des gangs extrême à Port-au-Prince et dans plusieurs régions depuis 2021. Consultez les avis officiels du MAE avant tout voyage." },
    { icon: "🌀", label: "Cyclones", value: "Saison cyclonique juin–novembre — éviter cette période, risques majeurs" },
  ],
};
