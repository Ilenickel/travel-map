export const MAURITIUS = {
  code: "MUS",
  numericId: 480,
  name: { fr: "Île Maurice", en: "Mauritius" },
  emoji: "🇲🇺",
  capital: { fr: "Port-Louis", en: "Port Louis" },
  language: { fr: "Anglais, Français, Créole mauricien", en: "English, French, Mauritian Creole" },
  currency: { fr: "Roupie mauricienne (MUR)", en: "Mauritian Rupee (MUR)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 80, budgetMid: 170,
    tripMin: 2000, tripMid: 6000,
  },
  description: {
    fr: "L'île Maurice est le paradis de l'océan Indien : lagons turquoise protégés par la 3e plus grande barrière de corail du monde, plages de sable blanc encerclées de cocotiers, Blue Bay Marine Park (UNESCO), couleurs de la Terre des 7 couleurs et culture créole métissée, indienne et française.",
    en: "Mauritius is the Indian Ocean's paradise: turquoise lagoons protected by the world's 3rd largest coral reef, white sand beaches ringed with coconut palms, Blue Bay Marine Park (UNESCO), the colours of the Seven Coloured Earths, and a blended Creole, Indian and French culture.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Novembre", en: "May – November" },
      label: { fr: "Saison fraîche et sèche", en: "Cool, dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : températures idéales (22–26°C), peu de pluie, lagons calmes. Idéal pour la plongée et les randonnées.",
        en: "The best time to visit: ideal temperatures (22–26°C), little rain, calm lagoons. Ideal for diving and hiking.",
      },
      icon: "🐢",
    },
    {
      months: { fr: "Décembre – Avril", en: "December – April" },
      label: { fr: "Saison chaude (cyclones possibles)", en: "Hot season (cyclones possible)" },
      color: "#ef4444",
      description: {
        fr: "Chaud et humide (28–32°C), risque de cyclones de janvier à mars. Végétation luxuriante, tarifs plus bas.",
        en: "Hot and humid (28–32°C), cyclone risk from January to March. Lush vegetation, lower prices.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "port_louis",
      name: "Port-Louis",
      region: { fr: "Nord-Ouest", en: "Northwest" },
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
      name: { fr: "Côte Nord — Grand Baie & Trou aux Biches", en: "North Coast — Grand Baie & Trou aux Biches" },
      region: { fr: "Grand Baie / Rivière du Rempart", en: "Grand Baie / Rivière du Rempart" },
      description: {
        fr: "La côte nord est la plus animée de l'île : Trou aux Biches, plage de carte postale avec un lagon transparent, Grand Baie pour le shopping et la vie nocturne, et Tamarin où l'on nage avec les dauphins sauvages le matin — une expérience unique en pleine mer.",
        en: "The north coast is the island's liveliest: Trou aux Biches, a postcard beach with a crystal-clear lagoon, Grand Baie for shopping and nightlife, and Tamarin where you can swim with wild dolphins in the morning — a unique experience out at sea.",
      },
      wikipedia: "File:Grand Baie, La Cuvette Beach.jpg",
      tags: ["Plage", "Dauphins", "Snorkel", "Animé"],
      mustSee: [
        { name: { fr: "Nager avec les dauphins sauvages (Tamarin)", en: "Swimming with wild dolphins (Tamarin)" }, wikipedia: "Indo-Pacific_bottlenose_dolphin" },
        { name: { fr: "Trou aux Biches — lagon turquoise parfait", en: "Trou aux Biches — perfect turquoise lagoon" }, wikipedia: "File:Aerial_view_of_Trou-aux-Biches,_Mauritius_(53697980183).jpg" },
        { name: { fr: "Île Plate et Île Gabriel — snorkel vierge", en: "Île Plate and Île Gabriel — unspoiled snorkelling" }, wikipedia: "File:Trou-aux-Biches (3).jpg" },
        { name: { fr: "Grand Baie Bazaar — shopping & vie nocturne", en: "Grand Baie Bazaar — shopping & nightlife" }, wikipedia: "File:Grand Baie, Bazar.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Sud-Ouest — Black River Gorges & Chamarel", en: "Southwest — Black River Gorges & Chamarel" },
      region: { fr: "Black River / Savanne", en: "Black River / Savanne" },
      description: {
        fr: "Le sud-ouest concentre les beautés naturelles de l'île : le Parc national Black River Gorges (forêt primaire, kestrel de Maurice), la Terre des 7 couleurs de Chamarel (formations de sable volcanique multicolore unique au monde), et La Gaulette pour le kitesurf.",
        en: "The southwest concentrates the island's natural beauty: Black River Gorges National Park (primary forest, Mauritius kestrel), the Chamarel Seven Coloured Earths (a unique multicoloured volcanic sand formation), and La Gaulette for kitesurfing.",
      },
      wikipedia: "Black_River_Gorges_National_Park",
      tags: ["Nature", "Randonnée", "7 couleurs", "Kitesurf"],
      mustSee: [
        { name: { fr: "Terre des 7 couleurs de Chamarel", en: "Chamarel Seven Coloured Earths" }, wikipedia: "Chamarel" },
        { name: { fr: "Chutes de Chamarel (83 m)", en: "Chamarel Falls (83 m)" }, wikipedia: "File:2006-10-02 Chamarel Waterfalls.jpg" },
        { name: { fr: "Kitesurf & windsurf à Le Morne", en: "Kitesurfing & windsurfing at Le Morne" }, wikipedia: "Le_Morne_Brabant" },
        { name: { fr: "Randonnée Black River Gorges — kestrel Maurice", en: "Black River Gorges hike — Mauritius kestrel" }, wikipedia: "Mauritius_kestrel" },
      ],
    },
    {
      id: 3,
      name: "Rodrigues",
      region: "Rodrigues",
      description: {
        fr: "Rodrigues est l'île sœur de Maurice, à 560 km à l'est : un lagon quatre fois plus grand que l'île elle-même, des fonds marins vierges et un calme absolu. Pas d'hôtel de chaîne, juste des guesthouses familiales, une pêche artisanale et la lenteur des Caraïbes en plein Indien.",
        en: "Rodrigues is Mauritius's sister island, 560 km to the east: a lagoon four times bigger than the island itself, pristine seabeds and absolute calm. No chain hotels, just family guesthouses, artisanal fishing and a Caribbean-like slowness in the middle of the Indian Ocean.",
      },
      wikipedia: "File:Rodrigues (21238823983).jpg",
      tags: ["Île", "Lagon", "Authentique", "Calme"],
      mustSee: [
        { name: { fr: "Lagon turquoise — snorkel & kitesurf", en: "Turquoise lagoon — snorkelling & kitesurfing" }, wikipedia: "File:Aerial view of Rodrigues, Mauritius.jpg" },
        { name: { fr: "Île aux Cocos — pique-nique désert", en: "Île aux Cocos — deserted island picnic" }, wikipedia: "File:Île aux Cocos, Rodrigues.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Blue Bay & Îlots du Sud-Est", en: "Blue Bay & Southeast Islets" },
      region: "Grand Port",
      description: {
        fr: "Blue Bay Marine Park est classé UNESCO : la plus belle plage de Maurice, un récif corallien époustouflant en snorkel (coraux cérébral, poissons-perroquets, raies), et des îlots accessibles en bateau — Île aux Cerfs, le plus grand lagon de Maurice.",
        en: "Blue Bay Marine Park is UNESCO-listed: Mauritius's finest beach, a breathtaking coral reef for snorkelling (brain coral, parrotfish, rays), and islets reachable by boat — Île aux Cerfs, Mauritius's largest lagoon.",
      },
      wikipedia: "Blue_Bay_Marine_Park",
      tags: ["UNESCO", "Snorkel", "Récif", "Lagon"],
      mustSee: [
        { name: { fr: "Snorkel Blue Bay Marine Park (UNESCO)", en: "Snorkelling at Blue Bay Marine Park (UNESCO)" }, wikipedia: "Blue_Bay_Marine_Park" },
        { name: { fr: "Île aux Cerfs — lagon géant & excursion bateau", en: "Île aux Cerfs — giant lagoon & boat excursion" }, wikipedia: "Île_aux_Cerfs" },
        { name: { fr: "Plongée sous-marine — requins de récif", en: "Scuba diving — reef sharks" }, wikipedia: "Blacktip_reef_shark" },
        { name: { fr: "Pique-nique îlot désert", en: "Deserted islet picnic" }, wikipedia: "Blue_Bay_Marine_Park" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'île Maurice est l'une des destinations les plus onéreuses de l'océan Indien, dominée par les resorts all-inclusive haut de gamme. Il est toutefois possible de visiter avec un budget moyen en logeant en guesthouse et en mangeant chez l'habitant.",
      en: "Mauritius is one of the priciest destinations in the Indian Ocean, dominated by upscale all-inclusive resorts. It is still possible to visit on a mid-range budget by staying in guesthouses and eating with locals.",
    },
    currency: "MUR",
    exchangeRate: "1€ ≈ 50 MUR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse familiale", en: "Family guesthouse" }, price: "40–70 €", detail: { fr: "Petit-déjeuner inclus", en: "Breakfast included" } },
          { label: { fr: "Hôtel 3★ front de mer", en: "3★ beachfront hotel" }, price: "100–200 €", detail: { fr: "Vue lagon, piscine", en: "Lagoon view, pool" } },
          { label: { fr: "Resort 5★ all-inclusive", en: "5★ all-inclusive resort" }, price: "400–1 000 €/pers", detail: { fr: "Ultra-luxe, plage privée", en: "Ultra-luxury, private beach" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Dholl puri (street food créole)", en: "Dholl puri (Creole street food)" }, price: "1–2 €", detail: { fr: "Plat national de rue", en: "The national street dish" } },
          { label: { fr: "Restaurant local (riz + curry + cari)", en: "Local restaurant (rice + curry)" }, price: "8–15 €", detail: { fr: "Cuisine créole + indienne", en: "Creole + Indian cuisine" } },
          { label: { fr: "Restaurant hôtel gastronomique", en: "Fine dining hotel restaurant" }, price: "40–80 €", detail: { fr: "Fruits de mer, vue mer", en: "Seafood, sea view" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus (réseau national)", en: "Bus (national network)" }, price: "0,5–1 €", detail: { fr: "Couvre toute l'île, lent", en: "Covers the whole island, slow" } },
          { label: { fr: "Location voiture (recommandée)", en: "Car rental (recommended)" }, price: "35–55 €/j", detail: { fr: "Conduite à gauche", en: "Left-hand drive" } },
          { label: { fr: "Vol Port-Louis–Rodrigues", en: "Flight Port Louis–Rodrigues" }, price: "150–250 €", detail: { fr: "A/R Air Mauritius, 1h30", en: "Return trip on Air Mauritius, 1h30" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Nage avec dauphins (excursion matin)", en: "Swimming with dolphins (morning excursion)" }, price: "50–80 €", detail: { fr: "Tamarin, 4h", en: "Tamarin, 4h" } },
          { label: { fr: "Plongée sous-marine (2 plongées)", en: "Scuba diving (2 dives)" }, price: "60–90 €", detail: { fr: "Guide + matériel", en: "Guide + equipment" } },
          { label: { fr: "Kitesurf initiation (2h)", en: "Kitesurfing lesson (2h)" }, price: "80–100 €", detail: { fr: "Le Morne ou La Gaulette", en: "Le Morne or La Gaulette" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Guesthouse + cuisine créole + bus + location voiture", en: "Guesthouse + Creole food + bus + car rental" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "250–400 €/j", desc: { fr: "Hôtel 3★ front de mer + excursions + restos", en: "3★ beachfront hotel + excursions + restaurants" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "700 €+/j", desc: { fr: "Resort 5★ all-inclusive + spa + activités nautic", en: "5★ all-inclusive resort + spa + water activities" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Port-Louis (1j) → Nord & Trou aux Biches (3j) → Chamarel & sud-ouest (2j) → Blue Bay & est (3j) → Rodrigues (3j)",
        en: "Port Louis (1d) → North & Trou aux Biches (3d) → Chamarel & southwest (2d) → Blue Bay & east (3d) → Rodrigues (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Île Maurice (direct)", en: "Return flight Paris–Mauritius (direct)" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "600–900 €" },
            { label: { fr: "Vol + séjour Rodrigues", en: "Flight + stay in Rodrigues" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Location voiture + activités", en: "Car rental + activities" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "6 000 – 9 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Île Maurice (direct)", en: "Return flight Paris–Mauritius (direct)" }, amount: "600–1 000 €" },
            { label: { fr: "Hôtels front de mer (12 nuits)", en: "Beachfront hotels (12 nights)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Rodrigues (vol + lodge)", en: "Rodrigues (flight + lodge)" }, amount: "700–1 200 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails" }, amount: "800–1 200 €" },
            { label: { fr: "Activités & excursions", en: "Activities & excursions" }, amount: "700–1 000 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Île Maurice (Business)", en: "Return flight Paris–Mauritius (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Resorts 5★ all-inclusive (12 nuits)", en: "5★ all-inclusive resorts (12 nights)" }, amount: "7 000–12 000 €" },
            { label: { fr: "Spa & activités nautiques", en: "Spa & water activities" }, amount: "1 000–2 000 €" },
            { label: { fr: "Gastronomie & sorties privées", en: "Fine dining & private outings" }, amount: "800–1 500 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~11h direct (Air Mauritius, Air France)", en: "~11h direct (Air Mauritius, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 90 jours (Français)", en: "No visa needed for 90 days (French citizens)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Roupie mauricienne (1€ ≈ 50 MUR) — €/USD acceptés hôtels", en: "Mauritian Rupee (1€ ≈ 50 MUR) — EUR/USD accepted in hotels" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Créole mauricien + Français + Anglais (tous compris)", en: "Mauritian Creole + French + English (all widely understood)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 230 V (comme UK) — adaptateur recommandé", en: "Type G – 230V (same as UK) — adapter recommended" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Excellente couverture nationale", en: "Excellent nationwide coverage" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable en théorie — eau en bouteille recommandée", en: "Technically drinkable — bottled water recommended" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas de vaccin obligatoire. Dengue possible en saison chaude.", en: "No mandatory vaccines. Dengue fever possible during the hot season." } },
  ],
};
