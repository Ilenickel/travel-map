export const MAURITIUS = {
  code: "MUS",
  numericId: 480,
  name: "Île Maurice",
  emoji: "🇲🇺",
  capital: "Port-Louis",
  language: "Anglais, Français, Créole mauricien",
  currency: "Roupie mauricienne (MUR)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 170,
    tripMin: 2000, tripMid: 6000,
  },
  description:
    "L'île Maurice est le paradis de l'océan Indien : lagons turquoise protégés par la 3e plus grande barrière de corail du monde, plages de sable blanc encerclées de cocotiers, Blue Bay Marine Park (UNESCO), couleurs de la Terre des 7 couleurs et culture créole métissée, indienne et française.",

  bestPeriods: [
    {
      months: "Mai – Novembre",
      label: "Saison fraîche et sèche",
      color: "#22c55e",
      description:
        "Meilleure période : températures idéales (22–26°C), peu de pluie, lagons calmes. Idéal pour la plongée et les randonnées.",
      icon: "🐢",
    },
    {
      months: "Décembre – Avril",
      label: "Saison chaude (cyclones possibles)",
      color: "#ef4444",
      description:
        "Chaud et humide (28–32°C), risque de cyclones de janvier à mars. Végétation luxuriante, tarifs plus bas.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "port_louis",
      name: "Port-Louis",
      region: "Nord-Ouest",
      data: [
        { month: "Jan", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Fév", temp: 29, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 22, rain: 40,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 40,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 29, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Côte Nord — Grand Baie & Trou aux Biches",
      region: "Grand Baie / Rivière du Rempart",
      description:
        "La côte nord est la plus animée de l'île : Trou aux Biches, plage de carte postale avec un lagon transparent, Grand Baie pour le shopping et la vie nocturne, et Tamarin où l'on nage avec les dauphins sauvages le matin — une expérience unique en pleine mer.",
      wikipedia: "File:Grand Baie, La Cuvette Beach.jpg",
      tags: ["Plage", "Dauphins", "Snorkel", "Animé"],
      mustSee: [
        { name: "Nager avec les dauphins sauvages (Tamarin)", wikipedia: "Indo-Pacific_bottlenose_dolphin" },
        { name: "Trou aux Biches — lagon turquoise parfait", wikipedia: "File:Aerial_view_of_Trou-aux-Biches,_Mauritius_(53697980183).jpg" },
        { name: "Île Plate et Île Gabriel — snorkel vierge", wikipedia: "File:Trou-aux-Biches (3).jpg" },
        { name: "Grand Baie Bazaar — shopping & vie nocturne", wikipedia: "File:Grand Baie, Bazar.JPG" },
      ],
    },
    {
      id: 2,
      name: "Sud-Ouest — Black River Gorges & Chamarel",
      region: "Black River / Savanne",
      description:
        "Le sud-ouest concentre les beautés naturelles de l'île : le Parc national Black River Gorges (forêt primaire, kestrel de Maurice), la Terre des 7 couleurs de Chamarel (formations de sable volcanique multicolore unique au monde), et La Gaulette pour le kitesurf.",
      wikipedia: "Black_River_Gorges_National_Park",
      tags: ["Nature", "Randonnée", "7 couleurs", "Kitesurf"],
      mustSee: [
        { name: "Terre des 7 couleurs de Chamarel", wikipedia: "Chamarel" },
        { name: "Chutes de Chamarel (83 m)", wikipedia: "File:2006-10-02 Chamarel Waterfalls.jpg" },
        { name: "Kitesurf & windsurf à Le Morne", wikipedia: "Le_Morne_Brabant" },
        { name: "Randonnée Black River Gorges — kestrel Maurice", wikipedia: "Mauritius_kestrel" },
      ],
    },
    {
      id: 3,
      name: "Rodrigues",
      region: "Rodrigues",
      description:
        "Rodrigues est l'île sœur de Maurice, à 560 km à l'est : un lagon quatre fois plus grand que l'île elle-même, des fonds marins vierges et un calme absolu. Pas d'hôtel de chaîne, juste des guesthouses familiales, une pêche artisanale et la lenteur des Caraïbes en plein Indien.",
      wikipedia: "File:Rodrigues (21238823983).jpg",
      tags: ["Île", "Lagon", "Authentique", "Calme"],
      mustSee: [
        { name: "Lagon turquoise — snorkel & kitesurf", wikipedia: "File:Aerial view of Rodrigues, Mauritius.jpg" },
        { name: "Île aux Cocos — pique-nique désert", wikipedia: "File:Île aux Cocos, Rodrigues.jpg" },
      ],
    },
    {
      id: 4,
      name: "Blue Bay & Îlots du Sud-Est",
      region: "Grand Port",
      description:
        "Blue Bay Marine Park est classé UNESCO : la plus belle plage de Maurice, un récif corallien époustouflant en snorkel (coraux cérébral, poissons-perroquets, raies), et des îlots accessibles en bateau — Île aux Cerfs, le plus grand lagon de Maurice.",
      wikipedia: "Blue_Bay_Marine_Park",
      tags: ["UNESCO", "Snorkel", "Récif", "Lagon"],
      mustSee: [
        { name: "Snorkel Blue Bay Marine Park (UNESCO)", wikipedia: "Blue_Bay_Marine_Park" },
        { name: "Île aux Cerfs — lagon géant & excursion bateau", wikipedia: "Île_aux_Cerfs" },
        { name: "Plongée sous-marine — requins de récif", wikipedia: "Blacktip_reef_shark" },
        { name: "Pique-nique îlot désert", wikipedia: "Blue_Bay_Marine_Park" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'île Maurice est l'une des destinations les plus onéreuses de l'océan Indien, dominée par les resorts all-inclusive haut de gamme. Il est toutefois possible de visiter avec un budget moyen en logeant en guesthouse et en mangeant chez l'habitant.",
    currency: "MUR",
    exchangeRate: "1€ ≈ 50 MUR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse familiale", price: "40–70 €", detail: "Petit-déjeuner inclus" },
          { label: "Hôtel 3★ front de mer", price: "100–200 €", detail: "Vue lagon, piscine" },
          { label: "Resort 5★ all-inclusive", price: "400–1 000 €/pers", detail: "Ultra-luxe, plage privée" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Dholl puri (street food créole)", price: "1–2 €", detail: "Plat national de rue" },
          { label: "Restaurant local (riz + curry + cari)", price: "8–15 €", detail: "Cuisine créole + indienne" },
          { label: "Restaurant hôtel gastronomique", price: "40–80 €", detail: "Fruits de mer, vue mer" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus (réseau national)", price: "0,5–1 €", detail: "Couvre toute l'île, lent" },
          { label: "Location voiture (recommandée)", price: "35–55 €/j", detail: "Conduite à gauche" },
          { label: "Vol Port-Louis–Rodrigues", price: "150–250 €", detail: "A/R Air Mauritius, 1h30" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Nage avec dauphins (excursion matin)", price: "50–80 €", detail: "Tamarin, 4h" },
          { label: "Plongée sous-marine (2 plongées)", price: "60–90 €", detail: "Guide + matériel" },
          { label: "Kitesurf initiation (2h)", price: "80–100 €", detail: "Le Morne ou La Gaulette" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Guesthouse + cuisine créole + bus + location voiture", color: "#22c55e" },
      { type: "Confort", daily: "250–400 €/j", desc: "Hôtel 3★ front de mer + excursions + restos", color: "#3b82f6" },
      { type: "Luxe", daily: "700 €+/j", desc: "Resort 5★ all-inclusive + spa + activités nautic", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Port-Louis (1j) → Nord & Trou aux Biches (3j) → Chamarel & sud-ouest (2j) → Blue Bay & est (3j) → Rodrigues (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Île Maurice (direct)", amount: "500–800 €" },
            { label: "Hébergement (12 nuits)", amount: "600–900 €" },
            { label: "Vol + séjour Rodrigues", amount: "300–500 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Location voiture + activités", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "6 000 – 9 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Île Maurice (direct)", amount: "600–1 000 €" },
            { label: "Hôtels front de mer (12 nuits)", amount: "2 000–3 500 €" },
            { label: "Rodrigues (vol + lodge)", amount: "700–1 200 €" },
            { label: "Nourriture & cocktails", amount: "800–1 200 €" },
            { label: "Activités & excursions", amount: "700–1 000 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Île Maurice (Business)", amount: "3 000–5 000 €" },
            { label: "Resorts 5★ all-inclusive (12 nuits)", amount: "7 000–12 000 €" },
            { label: "Spa & activités nautiques", amount: "1 000–2 000 €" },
            { label: "Gastronomie & sorties privées", amount: "800–1 500 €" },
            { label: "Extras", amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~11h direct (Air Mauritius, Air France)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Roupie mauricienne (1€ ≈ 50 MUR) — €/USD acceptés hôtels" },
    { icon: "🗣️", label: "Langue",            value: "Créole mauricien + Français + Anglais (tous compris)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 230 V (comme UK) — adaptateur recommandé" },
    { icon: "📱", label: "Réseau",            value: "Excellente couverture nationale" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable en théorie — eau en bouteille recommandée" },
    { icon: "💊", label: "Santé",             value: "Pas de vaccin obligatoire. Dengue possible en saison chaude." },
  ],
};
