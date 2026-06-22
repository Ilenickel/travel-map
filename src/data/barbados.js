export const BARBADOS = {
  code: "BRB",
  numericId: 52,
  name: "Barbade",
  emoji: "🇧🇧",
  capital: "Bridgetown",
  language: "Anglais",
  currency: "Dollar de la Barbade (BBD)",
  timezone: "UTC-4",
  filter: { budgetMin: 80, budgetMid: 160, tripMin: 1600, tripMid: 3000 },
  description:
    "La Barbade est une île des Petites Antilles réputée pour ses plages de sable blanc, ses eaux cristallines et son excellence gastronomique dans un cadre caribéen sophistiqué. Berceau du rhum (la distillerie Mount Gay, fondée en 1703, est la plus ancienne du monde encore en activité), l'île possède une identité culturelle forte mêlant héritage britannique et afro-caribéen. Bridgetown, la capitale, est inscrite au patrimoine mondial de l'UNESCO, et la Barbade est l'une des destinations les mieux organisées et les plus stables des Caraïbes.",
  bestPeriods: [
    {
      months: "Déc – Mai",
      label: "Saison sèche",
      color: "#22c55e",
      description: "Meilleure période : temps ensoleillé, mer calme, humidité agréable — haute saison touristique",
      icon: "☀️",
    },
    {
      months: "Jun – Nov",
      label: "Saison humide",
      color: "#f59e0b",
      description: "Pluies fréquentes mais courtes, prix réduits. La Barbade est relativement protégée des ouragans grâce à sa position orientale dans les Antilles.",
      icon: "🌦️",
    },
  ],
  weatherCities: [
    {
      id: "bridgetown",
      name: "Bridgetown",
      region: "St. Michael",
      data: [
        { month: "Jan", temp: 25, rain: 65, icon: "☀️" },
        { month: "Fév", temp: 25, rain: 45, icon: "☀️" },
        { month: "Mar", temp: 25, rain: 40, icon: "☀️" },
        { month: "Avr", temp: 26, rain: 45, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 65, icon: "☀️" },
        { month: "Jun", temp: 26, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 150, icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 165, icon: "☀️" },
        { month: "Sep", temp: 26, rain: 180, icon: "☀️" },
        { month: "Oct", temp: 26, rain: 175, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 140, icon: "☀️" },
        { month: "Déc", temp: 25, rain: 90, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Bridgetown & le Garrison",
      region: "St. Michael",
      description:
        "Bridgetown, capitale de la Barbade, et son Garrison historique sont inscrits au patrimoine mondial de l'UNESCO depuis 2011 pour leur exceptionnelle architecture militaire et coloniale britannique. Le Garrison Savannah, ancienne parade militaire reconvertie en hippodrome, est entouré de fortifications du XVIIe siècle en excellente conservation. Le quartier de Cheapside avec son marché animé, la cathédrale St. Michael et les maisons coloniales en corail taillé donnent à Bridgetown un charme unique dans les Caraïbes anglaises.",
      wikipedia: "Bridgetown",
      tags: ["UNESCO", "Architecture coloniale", "Histoire", "Culture"],
      mustSee: [
        { name: "Garrison Savannah — hippodrome et fortifications UNESCO", wikipedia: "File:Garrison Savannah stands2, Barbados.jpg" },
        { name: "Musée de la Barbade — histoire de l'île et de l'esclavage", wikipedia: "File:Historic Bridgetown and its Garrison-115163.jpg" },
        { name: "Cathédrale Saint-Michel — architecture coloniale anglicane", wikipedia: "File:Historic Bridgetown and its Garrison-115165.jpg" },
        { name: "Memorial Park", wikipedia: "File:Bridgetown Memorial Park, January 2022.jpg" },
      ],
    },
    {
      id: 2,
      name: "Harrison's Cave & Animal Flower Cave",
      region: "St. Thomas & St. Lucy",
      description:
        "Harrison's Cave est l'une des merveilles naturelles de la Barbade : un réseau de grottes calcaires spectaculaires avec stalactites géantes, stalagmites et rivières souterraines, explorable en tramway électrique. À l'extrême nord de l'île, Animal Flower Cave est la seule grotte côtière accessible de la Barbade, dont le nom vient des anémones de mer (\"fleurs animales\") visibles dans ses bassins naturels avec vue sur l'Atlantique sauvage.",
      wikipedia: "Harrison's_Cave",
      tags: ["Nature", "Grottes", "Géologie", "Famille"],
      mustSee: [
        { name: "Harrison's Cave — grottes calcaires en tramway souterrain", wikipedia: "Harrison's_Cave" },
        { name: "Animal Flower Cave — grottes côtières avec piscines naturelles", wikipedia: "Animal_Flower_Cave" },
        { name: "Welchman Hall Gully — gorge naturelle avec singes verts", wikipedia: "File:WELCHMAN_HALL_GULLY_TROPICAL_PRESERVE_-_BARBADOS.jpg" },
        { name: "Cherry Tree Hill — panorama sur la côte atlantique sauvage", wikipedia: "File:Saint_Andrew,_Barbados_037.jpg" },
      ],
    },
    {
      id: 3,
      name: "Mount Gay & le rhum barbadien",
      region: "St. Lucy / St. Michael",
      description:
        "La Barbade est le berceau du rhum mondial : la distillerie Mount Gay, fondée en 1703, est la plus ancienne distillerie de rhum encore en activité au monde. La visite comprend l'histoire fascinante de la canne à sucre, du commerce triangulaire et de l'art de la distillation. St. Nicholas Abbey, une plantation du XVIIe siècle, est l'un des rares exemples d'architecture jacobéenne en dehors de l'Europe et produit également son propre rhum de plantation.",
      wikipedia: "Mount_Gay_Rum",
      tags: ["Rhum", "Histoire", "Gastronomie", "Plantation"],
      mustSee: [
        { name: "Distillerie Mount Gay — la plus ancienne du monde (1703)", wikipedia: "Mount_Gay_Rum" },
        { name: "St. Nicholas Abbey — plantation jacobéenne du XVIIe siècle", wikipedia: "File:StNicholasAbbey.jpg" },
        { name: "Foursquare Rum Distillery — rhum primé en visite guidée", wikipedia: "Foursquare_Rum_Distillery" },
        { name: "Rum & Rhapsody Tour — circuit officiel des distilleries de l'île", wikipedia: "File:Rum Shop Barbados.JPG" },
      ],
    },
    {
      id: 4,
      name: "Oistins & la côte sud",
      region: "Christ Church",
      description:
        "Oistins est un village de pêcheurs réputé pour son célèbre Fish Fry du vendredi soir, où les habitants et les touristes se retrouvent autour de grillades de poisson, de rhum et de musique soca jusqu'à tard dans la nuit. La côte sud de l'île est bordée de plages de sable blanc calmes (Miami Beach, Dover Beach, Accra Beach) et de bars de plage décontractés. Hastings et Rockley accueillent la majorité des hôtels abordables et des restaurants de bord de mer.",
      wikipedia: "Oistins",
      tags: ["Plage", "Gastronomie", "Vie nocturne", "Ambiance locale"],
      mustSee: [
        { name: "Fish Fry d'Oistins (vendredi soir) — grillades, rhum et soca", wikipedia: "Oistins" },
        { name: "Miami Beach & Accra Beach — plages familiales de la côte sud", wikipedia: "File:Borla Beach Accra.jpg" },
        { name: "Holetown (St. James) — premier établissement européen (1627)", wikipedia: "File:Holetown, Saint James, Barbados-001.jpg" },
        { name: "Barbados Wildlife Reserve — tortues, singes verts et cerfs libres", wikipedia: "Barbados_Wildlife_Reserve" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "La Barbade est l'une des îles caribéennes les plus chères, mais offre un très bon rapport qualité–prix dans sa catégorie haut de gamme. Le Fish Fry d'Oistins reste l'exception abordable : excellente qualité pour quelques dollars barbadiens.",
    currency: "BBD",
    exchangeRate: "1€ ≈ 2,15 BBD (parité fixe 2 BBD = 1 USD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / appartement côte sud", range: "60–100 €" },
          { label: "Hôtel confort côte sud", range: "120–200 €" },
          { label: "Luxury resort côte ouest (Platinum Coast)", range: "300–700 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Fish Fry d'Oistins / rum shop local", range: "8–15 €" },
          { label: "Restaurant de bord de mer intermédiaire", range: "25–50 €" },
          { label: "Gastronomie hôtel 5 étoiles", range: "60–120 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus public (réseau ZR)", range: "0,70 € / trajet" },
          { label: "Taxi depuis l'aéroport (Bridgetown)", range: "15–25 €" },
          { label: "Location de voiture / jour (côté gauche)", range: "50–90 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Harrison's Cave (tramway souterrain)", range: "25–35 €" },
          { label: "Plongée (2 bouteilles, récifs au sud-ouest)", range: "70–110 €" },
          { label: "Dégustation Mount Gay + visite distillerie", range: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "80–120 €/j",
        desc: "Guesthouse côte sud, Fish Fry, bus ZR, Harrison's Cave",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "160–280 €/j",
        desc: "Hôtel balnéaire, restaurants variés, voiture de location, excursions",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Bridgetown (UNESCO) → Côte ouest (Holetown) → Nord de l'île (Animal Flower Cave) → Côte est sauvage → Oistins Fish Fry",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 600 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bridgetown", amount: "600–900 €" },
            { label: "Hébergement (9 nuits)", amount: "540–900 €" },
            { label: "Transports locaux + bus", amount: "80–130 €" },
            { label: "Nourriture + boissons", amount: "200–330 €" },
            { label: "Activités + visites", amount: "180–280 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bridgetown", amount: "800–1 100 €" },
            { label: "Hébergement (9 nuits)", amount: "1 350–2 250 €" },
            { label: "Location voiture + transports", amount: "350–550 €" },
            { label: "Nourriture + restaurants", amount: "350–550 €" },
            { label: "Activités + excursions", amount: "250–400 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "9–12h avec escale (Londres, Lisbonne, Miami ou Fort-de-France — British Airways, Virgin Atlantic, TAP)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa requis pour les Français (séjour ≤ 180 jours) — passeport valide 6 mois minimum" },
    { icon: "💰", label: "Monnaie", value: "Dollar barbadien (BBD, 2 BBD = 1 USD fixe) — USD accepté partout, cartes bancaires généralisées" },
    { icon: "🗣️", label: "Langue", value: "Anglais (officiel) — bajan (créole barbadien) entre locaux" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B (115V, 50Hz) — adaptateur nécessaire pour les Européens" },
    { icon: "💊", label: "Santé", value: "Pas de vaccins tropicaux obligatoires. Dengue présente — protection anti-moustiques recommandée. Eau du robinet potable." },
    { icon: "🏏", label: "Cricket", value: "Le cricket est une religion nationale — assister à un match au Kensington Oval est une expérience culturelle incontournable" },
    { icon: "🚗", label: "Conduite", value: "Circulation à gauche (héritage britannique) — permis de conduire local requis (environ 10 USD, délivré sur présentation du permis français)" },
  ],
};
