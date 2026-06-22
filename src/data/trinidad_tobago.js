export const TRINIDAD_TOBAGO = {
  code: "TTO",
  numericId: 780,
  name: "Trinité-et-Tobago",
  emoji: "🇹🇹",
  capital: "Port of Spain",
  language: "Anglais",
  currency: "Dollar de Trinité-et-Tobago (TTD)",
  timezone: "UTC-4",
  filter: { budgetMin: 55, budgetMid: 110, tripMin: 1200, tripMid: 2500 },
  description:
    "Trinité-et-Tobago est un double joyau des Caraïbes situé juste au sud de la ceinture cyclonique, alliant la vibrance culturelle de Trinidad — berceau du Carnaval et du steelpan — à la sérénité naturelle de Tobago et ses récifs coralliens intacts. Trinidad est une mosaïque de cultures africaines, indiennes, chinoises et européennes, reflétée dans sa gastronomie unique et ses fêtes légendaires. Tobago, plus tranquille, offre des plages vierges, des tortues marines et des forêts primaires parmi les mieux préservées des Caraïbes.",
  bestPeriods: [
    {
      months: "Jan – Mai",
      label: "Saison sèche",
      color: "#22c55e",
      description: "Période idéale : temps sec, Carnaval (fév/mars), mer calme, plongée optimale à Tobago",
      icon: "☀️",
    },
    {
      months: "Jun – Déc",
      label: "Saison humide",
      color: "#f59e0b",
      description: "Pluies fréquentes mais courtes, végétation luxuriante, moins de touristes. Trinité-et-Tobago est généralement épargné par les ouragans.",
      icon: "🌦️",
    },
  ],
  weatherCities: [
    {
      id: "port_of_spain",
      name: "Port of Spain",
      region: "Trinidad",
      data: [
        { month: "Jan", temp: 25, rain: 75, icon: "☀️" },
        { month: "Fév", temp: 25, rain: 50, icon: "☀️" },
        { month: "Mar", temp: 26, rain: 45, icon: "☀️" },
        { month: "Avr", temp: 26, rain: 60, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 95, icon: "☀️" },
        { month: "Jun", temp: 23, rain: 200, icon: "⛅" },
        { month: "Jul", temp: 23, rain: 230, icon: "⛅" },
        { month: "Aoû", temp: 23, rain: 210, icon: "⛅" },
        { month: "Sep", temp: 24, rain: 190, icon: "☀️" },
        { month: "Oct", temp: 24, rain: 170, icon: "☀️" },
        { month: "Nov", temp: 24, rain: 160, icon: "☀️" },
        { month: "Déc", temp: 24, rain: 150, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Port of Spain & le Carnaval",
      region: "Trinidad Nord",
      description:
        "Port of Spain s'anime chaque année lors du Carnaval de Trinidad, l'un des plus grands et des plus colorés du monde, célébré deux jours avant le mercredi des Cendres. La ville est aussi le berceau du steelpan, instrument national inventé dans les années 1930, que l'on peut entendre dans les panoramas musicaux du dimanche soir. Le Savannah Queen's Park, le Botanical Garden et les marchés animés de downtown complètent la visite de cette capitale cosmopolite.",
      wikipedia: "Port_of_Spain",
      tags: ["Culture", "Carnaval", "Musique", "Gastronomie"],
      mustSee: [
        { name: "Carnaval de Trinidad — fête de rue mondiale (fév/mars)", wikipedia: "Trinidad_and_Tobago_Carnival" },
        { name: "Queen's Park Savannah — parc central et architecture coloniale", wikipedia: "Queen's_Park_Savannah" },
        { name: "Marché de Chaguanas — centre commercial et gastronomique indo-trinidadien", wikipedia: "Chaguanas" },
      ],
    },
    {
      id: 2,
      name: "Asa Wright Nature Centre",
      region: "Trinidad Nord (forêt tropicale)",
      description:
        "L'Asa Wright Nature Centre est l'un des sanctuaires ornithologiques les plus réputés des Caraïbes, niché dans les contreforts boisés du nord de Trinidad. Plus de 400 espèces d'oiseaux ont été recensées dans la réserve, dont le rare guácharo (oiseau des cavernes) visible dans sa grotte unique en accès contrôlé. La terrasse du lodge offre des observations de colibris, tangaras et manakins à quelques mètres seulement.",
      wikipedia: "Asa_Wright_Nature_Centre",
      tags: ["Nature", "Ornithologie", "Forêt", "Écotourisme"],
      mustSee: [
        { name: "Terrasse d'observation — colibris et tangaras à portée de main", wikipedia: "Asa_Wright_Nature_Centre" },
        { name: "Grotte aux guácharos — oiseaux nocturnes rares", wikipedia: "Oilbird" },
        { name: "Sentiers forestiers — biodiversité tropicale exceptionnelle", wikipedia: "File:Asa_Wright_Nature_Centre,_Northern_Range,_Trinidad,_Trinidad_and_Tobago_-view-3June2006.jpg" },
        { name: "Maracas Bay — plage populaire à 30 min de Port of Spain", wikipedia: "File:Maracas - panoramio.jpg" },
      ],
    },
    {
      id: 3,
      name: "Tobago — Speyside & Coral Gardens",
      region: "Tobago Est",
      description:
        "Speyside, village de pêcheurs niché dans une baie de la côte est de Tobago, est la capitale de la plongée sous-marine de l'île, avec certains des récifs coralliens les mieux préservés des Caraïbes. Little Tobago, îlot accessible en bateau, est un sanctuaire ornithologique protégé où nichent frégates et fous masqués. Le Blue Waters Inn et les plages isolées alentour offrent un cadre paradisiaque loin des foules.",
      wikipedia: "File:Speyside - August 2013 (40).JPG",
      tags: ["Plongée", "Plage", "Nature", "Tortues marines"],
      mustSee: [
        { name: "Speyside — plongée sur les récifs coralliens intacts", wikipedia: "File:Speyside - August 2013 (20).JPG" },
        { name: "Little Tobago — île-sanctuaire ornithologique", wikipedia: "Little_Tobago" },
        { name: "Nidification des tortues luth — Grande Rivière (juin–août)", wikipedia: "Leatherback_sea_turtle" },
        { name: "Buccoo Reef & Nylon Pool — récif accessible en glassbottom boat", wikipedia: "Buccoo_Reef" },
      ],
    },
    {
      id: 4,
      name: "Crown Point & Pigeon Point",
      region: "Tobago Ouest",
      description:
        "Crown Point, porte d'entrée de Tobago, abrite les plages les plus célèbres de l'île, notamment Pigeon Point avec son célèbre ponton de paille avançant sur des eaux turquoise et peu profondes. La zone est idéale pour les débutants en snorkeling et kayak, ainsi que pour la vie nocturne décontractée de l'île. Store Bay, à proximité, est réputée pour ses vendeurs de curried crab and dumplings, plat emblématique tobagonien.",
      wikipedia: "Crown_Point,_Tobago",
      tags: ["Plage", "Snorkeling", "Gastronomie", "Vie nocturne"],
      mustSee: [
        { name: "Pigeon Point Heritage Park — plage iconique aux eaux turquoise", wikipedia: "Pigeon_Point,_Tobago" },
        { name: "Kayak et snorkeling — récifs peu profonds accessibles à tous", wikipedia: "Crown_Point,_Tobago" },
        { name: "Fort Milford — fortification coloniale avec vue panoramique", wikipedia: "File:Stack Rock Fort.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Trinité-et-Tobago est l'un des pays les plus prospères des Caraïbes grâce à son pétrole, ce qui se reflète dans des prix légèrement supérieurs à ses voisins. Tobago est généralement plus chère que Trinidad pour les hébergements en bord de mer.",
    currency: "TTD",
    exchangeRate: "1€ ≈ 7,3 TTD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre chez l'habitant", range: "30–50 €" },
          { label: "Hôtel confort (Trinidad)", range: "70–120 €" },
          { label: "Resort balnéaire (Tobago)", range: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Doubles / roti (street food)", range: "1–3 €" },
          { label: "Restaurant local", range: "8–18 €" },
          { label: "Restaurant gastronomique", range: "25–50 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Maxi-taxi (minibus collectif)", range: "0,50–2 €" },
          { label: "Ferry Trinidad–Tobago (aller simple)", range: "5–8 €" },
          { label: "Location de voiture / jour", range: "40–70 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Plongée (2 bouteilles + équipement)", range: "50–80 €" },
          { label: "Excursion ornithologique (Asa Wright)", range: "30–60 €" },
          { label: "Glassbottom boat Buccoo Reef", range: "15–25 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "55–80 €/j",
        desc: "Guesthouse, street food, maxi-taxis, ferry inter-îles",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "110–200 €/j",
        desc: "Hôtel balnéaire, restaurants variés, voiture de location",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Port of Spain → Asa Wright → Maracas Bay → Ferry → Tobago (Speyside, Crown Point)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port of Spain", amount: "500–700 €" },
            { label: "Hébergement (11 nuits)", amount: "330–550 €" },
            { label: "Transports locaux + ferry", amount: "100–150 €" },
            { label: "Nourriture + boissons", amount: "170–230 €" },
            { label: "Activités + plongée", amount: "100–170 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port of Spain", amount: "700–950 €" },
            { label: "Hébergement (11 nuits)", amount: "1 100–1 600 €" },
            { label: "Transports + voiture de location", amount: "300–450 €" },
            { label: "Nourriture + restaurants", amount: "350–500 €" },
            { label: "Activités + excursions", amount: "200–350 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "10–13h avec escale (London, Amsterdam, Miami ou Fort-de-France)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa requis pour les Français (séjour ≤ 90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Dollar TT (TTD) — cartes acceptées dans les hôtels et grands restaurants" },
    { icon: "🗣️", label: "Langue", value: "Anglais (officiel) — créole trinidadien compris dans les milieux informels" },
    { icon: "🔌", label: "Prise électrique", value: "Type A/B (115V, 60Hz) — adaptateur nécessaire pour les Européens" },
    { icon: "💊", label: "Santé", value: "Vaccins hépatite A, fièvre typhoïde recommandés. Risque de dengue — protection anti-moustiques indispensable." },
    { icon: "🌀", label: "Cyclones", value: "Trinité-et-Tobago est généralement au sud de la ceinture cyclonique — risque faible mais non nul" },
    { icon: "🎉", label: "Carnaval", value: "Carnaval de Trinidad en février/mars — réserver hébergements plusieurs mois à l'avance" },
  ],
};
