export const REUNION = {
  code: "REU",
  numericId: 638,
  name: "La Réunion",
  emoji: "🇷🇪",
  capital: "Saint-Denis",
  language: "Français, Créole réunionnais",
  currency: "Euro (EUR)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 160,
    tripMin: 1800, tripMid: 3500,
  },
  description:
    "La Réunion est une île volcanique française de l'océan Indien : le Piton de la Fournaise (l'un des volcans les plus actifs du monde avec des éruptions quasi annuelles), les trois cirques de montagne (Cilaos, Mafate, Salazie — classés UNESCO Parc national), les ravines et forêts tropicales de liane, et la côte ouest avec ses plages et son lagon protégé. Un territoire français avec une cuisine créole exceptionnelle.",

  bestPeriods: [
    {
      months: "Avril – Novembre",
      label: "Saison fraîche et sèche (côte ouest)",
      color: "#22c55e",
      description:
        "Meilleure période : côte ouest ensoleillée (22–28°C), cirques accessibles, volcan souvent en éruption. Idéal pour la randonnée.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Saison chaude et cyclonique",
      color: "#ef4444",
      description:
        "Risque cyclonique (la Réunion est fréquemment frappée), pluies abondantes sur l'est et les cirques, température 28–32°C. Moins favorable pour la randonnée.",
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "saint_gilles",
      name: "Saint-Gilles (côte ouest)",
      region: "Saint-Paul — côte sous le vent",
      data: [
        { month: "Jan", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Fév", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Mar", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 40,  icon: "☀️" },
        { month: "Déc", temp: 28, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "cilaos",
      name: "Cilaos (cirque)",
      region: "Cirque de Cilaos — altitude 1 200m",
      data: [
        { month: "Jan", temp: 21, rain: 380, icon: "🌧️" },
        { month: "Fév", temp: 21, rain: 420, icon: "🌧️" },
        { month: "Mar", temp: 21, rain: 350, icon: "🌧️" },
        { month: "Avr", temp: 19, rain: 200, icon: "🌧️" },
        { month: "Mai", temp: 17, rain: 130, icon: "☀️" },
        { month: "Jun", temp: 15, rain: 90,  icon: "⛅" },
        { month: "Jul", temp: 14, rain: 70,  icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 16, rain: 80,  icon: "⛅" },
        { month: "Oct", temp: 18, rain: 100, icon: "☀️" },
        { month: "Nov", temp: 19, rain: 180, icon: "☀️" },
        { month: "Déc", temp: 21, rain: 300, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Piton de la Fournaise — Volcan actif",
      region: "Massif de la Fournaise",
      description:
        "Le Piton de la Fournaise (2 632m) est l'un des volcans les plus actifs du monde : des éruptions presque chaque année, certaines spectaculaires avec des coulées de lave rougeoyantes qui atteignent l'océan. La route de la plaine des Cafres et la descente dans l'Enclos Fouqué (caldeira) sont les approches classiques. Un spectacle géologique unique.",
      wikipedia: "File:Reunion PitonFournaise PitonChisny.JPG",
      tags: ["Volcan", "Unique", "Randonnée", "Lave"],
      mustSee: [
        { name: "Piton de la Fournaise — ascension au cratère (si non actif)", wikipedia: "Piton_de_la_Fournaise" },
        { name: "Belvedère de l'Enclos Fouqué — vue sur la caldeira", wikipedia: "File:Route forestière du Volcan - Réunion.jpg" },
        { name: "Coulées de lave solidifiées (paysage volcanique minéral)", wikipedia: "File:Piton Fournaise Crater.jpg" },
        { name: "Éruption nocturne (aléatoire) — spectacle depuis la route", wikipedia: "File:Lava_Fountains_and_Lava_Flows_at_Piton_de_la_Fournaise_2016.jpg" },
      ],
    },
    {
      id: 2,
      name: "Cirque de Mafate — Randonnée sans route",
      region: "Parc National",
      description:
        "Mafate est le seul cirque de La Réunion inaccessible en voiture : ses îlets (hameaux de quelques dizaines d'habitants) ne sont accessibles qu'à pied ou en hélicoptère. Les sentiers GR R1 et R2 traversent des paysages de basalte, de forêts de tamarins et de falaises vertigineuses. Un bivouac d'exception au cœur du Parc National (UNESCO).",
      wikipedia: "File:14-07-2011_Grand_Bénare_(26)_Mafate_(version_améliorée).jpg",
      tags: ["Randonnée", "UNESCO", "Sans voiture", "Bivouac"],
      mustSee: [
        { name: "Ilet à Cordes — village suspendu dans les falaises", wikipedia: "File:Ilet à Cordes - Cilaos.jpg" },
        { name: "Ilet La Nouvelle — cœur de Mafate avec gîtes", wikipedia: "File:Rivière des Galets @ Nouvelle Mafate.jpg" },
        { name: "Sentier du Grand Bénard (2 898m) — panorama sur les 3 cirques", wikipedia: "Piton_des_Neiges" },
        { name: "Bivouac en gîte de montagne Mafate", wikipedia: "Mafate" },
      ],
    },
    {
      id: 3,
      name: "Cilaos — Cirque des eaux thermales",
      region: "Cirque de Cilaos",
      description:
        "Cilaos est le cirque le plus accessible (route de montagne spectaculaire) et le plus touristique : ses sources thermales (centre thermal), ses vins de pays (Chai de Cilaos, uniques à cette altitude), la dentelle de Cilaos artisanale, et les randonnées vers le Piton des Neiges (3 071m, point culminant de l'océan Indien). La route des 400 virages pour y accéder est en elle-même un spectacle.",
      wikipedia: "Cilaos",
      tags: ["Cirque", "Randonnée", "Thermales", "Vin"],
      mustSee: [
        { name: "Route des 400 virages — accès spectaculaire à Cilaos", wikipedia: "File:La_Réunion_-_Route_nationale_5_-04.JPG" },
        { name: "Piton des Neiges (3 071m) — toit de l'océan Indien (bivouac)", wikipedia: "Piton_des_Neiges" },
        { name: "Sources thermales de Cilaos — détente après la rando", wikipedia: "File:Thermes_de_Cilaos.jpg" },
        { name: "Chai de Cilaos — dégustation vin de pays réunionnais", wikipedia: "File:Cilaos_wine.jpg" },
      ],
    },
    {
      id: 4,
      name: "Saint-Gilles & Lagon",
      region: "Côte Ouest",
      description:
        "Saint-Gilles-les-Bains est la capitale balnéaire de La Réunion : le lagon protégé par le récif corallien offre des eaux turquoise idéales pour la baignade et le snorkeling, la plage de l'Ermitage, les sports nautiques, et les restaurants de rougail saucisses et cari de poisson. Le coucher de soleil depuis la côte est exceptionnel.",
      wikipedia: "File:Saint-Gilles les Bains depuis le chemin Summer.jpg",
      tags: ["Plage", "Lagon", "Snorkeling", "Créole"],
      mustSee: [
        { name: "Lagon de Saint-Gilles — snorkeling avec tortues et poissons multicolores", wikipedia: "File:Saint-Gilles-les-Bains 2024 04.jpg" },
        { name: "Plage de l'Ermitage — la plus belle plage de La Réunion", wikipedia: "File:L'Ermitage beach, Réunion.jpg" },
        { name: "Réserve marine — plongée avec requins citron", wikipedia: "File:Lemon shark2.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Réunion est un département français — les prix sont comparables à ceux de la métropole, voire légèrement supérieurs pour l'alimentaire (coût du transport). Les hébergements sont variés : gîtes de montagne très abordables, hôtels de plage plus chers. Pas de problème de change (euro).",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (territoire français)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Gîte de montagne / gîte rural", price: "25–60 €", detail: "Table d'hôte possible, petit-déj" },
          { label: "Chambre d'hôte / B&B", price: "60–100 €", detail: "Souvent avec petit-déj créole" },
          { label: "Hôtel 3★ Saint-Gilles (lagon)", price: "120–200 €", detail: "Vue mer, piscine, accès plage" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Cari de poulet ou rougail saucisses (restaurant local)", price: "8–15 €", detail: "Cuisine créole authentique" },
          { label: "Restaurant mid-range Saint-Denis ou Saint-Gilles", price: "15–30 €", detail: "Menu complet + dessert vanille" },
          { label: "Supermarché (Carrefour, Super-U)", price: "Same as France", detail: "Légèrement plus cher qu'en métropole" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Car Jaune (bus régional)", price: "2–5 €", detail: "Réseau correct sur la côte" },
          { label: "Location de voiture", price: "40–70 €/j", detail: "Indispensable pour les cirques" },
          { label: "Hélicoptère (tour de l'île, 30 min)", price: "80–150 €", detail: "Spectaculaire, prix baisse hors saison" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Randonnée GRR1 / GRR2 (avec guide, journée)", price: "40–80 €", detail: "Mafate ou Cilaos" },
          { label: "Plongée sous-marine Saint-Gilles (2 plongées)", price: "70–110 €", detail: "Requin citron, coraux" },
          { label: "Canyoning (Fleur Jaune, Grand Galet)", price: "50–90 €", detail: "Encadrés, sensation garantie" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Gîte + cuisine créole + transports communs", color: "#22c55e" },
      { type: "Confort", daily: "160–250 €/j", desc: "Chambre d'hôte + restaurants + location voiture + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "350 €+/j", desc: "Hôtel 4★ lagon + excursions privées + héliport", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Saint-Gilles / lagon (3j) → Cilaos (3j) → Mafate / GRR (3j) → Piton de la Fournaise (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Réunion (Corsair, Air Austral, Air France)", amount: "500–900 €" },
            { label: "Gîtes et chambres d'hôte (12 nuits)", amount: "500–800 €" },
            { label: "Location voiture", amount: "300–500 €" },
            { label: "Nourriture", amount: "300–500 €" },
            { label: "Activités & randonnées", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–La Réunion", amount: "600–1 100 €" },
            { label: "Hébergement 3★ et chambre d'hôte (12 nuits)", amount: "1 200–2 000 €" },
            { label: "Location voiture", amount: "400–600 €" },
            { label: "Nourriture & restaurants", amount: "500–800 €" },
            { label: "Activités (plongée, canyoning, hélico)", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~11h direct (Air Austral, Corsair, Air France) — liaisons quotidiennes depuis CDG et Orly" },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — territoire français. Carte nationale d'identité suffisante pour les ressortissants français." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€) — aucun change nécessaire. Carte bancaire acceptée partout." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel). Créole réunionnais entre habitants — compréhensible pour un francophone." },
    { icon: "🔌", label: "Prise électrique",  value: "Type E/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Pas de vaccin obligatoire. Pas de paludisme. Risque dengue en saison des pluies. Crème solaire indispensable." },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable partout — eau de qualité métropolitaine." },
    { icon: "🌀", label: "Cyclones",          value: "Risque cyclonique de novembre à avril. Consulter Météo-France Réunion en cas d'alerte." },
  ],
};
