export const PANAMA = {
  code: "PAN",
  numericId: 591,
  name: { fr: "Panama", en: "Panama" },
  emoji: "🇵🇦",
  capital: { fr: "Panama City", en: "Panama City" },
  language: { fr: "Espagnol", en: "Spanish" },
  currency: { fr: "Dollar américain / Balboa (USD)", en: "US dollar / Balboa (USD)" },
  timezone: "UTC-5",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1600, tripMid: 3500,
  },
  description: {
    fr: "Panama, carrefour du monde depuis 1914, est bien plus que son canal légendaire : le Casco Viejo classé UNESCO, les paradis caribéens des îles Kuna Yala et Bocas del Toro, et une biodiversité exceptionnelle (Darién) font de ce trait d'union entre deux continents une destination de voyage d'exception.",
    en: "Panama, a crossroads of the world since 1914, is far more than its legendary canal: the UNESCO-listed Casco Viejo, the Caribbean paradises of the Kuna Yala islands and Bocas del Toro, and exceptional biodiversity (Darién) make this link between two continents an outstanding travel destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Avril", en: "December – April" },
      label: { fr: "Saison sèche Pacifique", en: "Pacific dry season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour Panama City, le canal et les plages Pacifique. Ciel dégagé, chaleur supportable, mer calme.",
        en: "Ideal for Panama City, the canal and the Pacific beaches. Clear skies, bearable heat, calm seas.",
      },
      icon: "⚓",
    },
    {
      months: { fr: "Février – Mars", en: "February – March" },
      label: { fr: "Meilleur côte Caraïbe", en: "Best on the Caribbean coast" },
      color: "#3b82f6",
      description: {
        fr: "Fenêtre sèche sur la côte Caraïbe (Bocas del Toro, San Blas). Eaux translucides, snorkel parfait.",
        en: "Dry window on the Caribbean coast (Bocas del Toro, San Blas). Crystal-clear waters, perfect for snorkelling.",
      },
      icon: "🏝️",
    },
  ],

  weatherCities: [
    {
      id: "panama_city",
      name: "Panama City",
      region: { fr: "Pacifique", en: "Pacific" },
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 10,  icon: "☀️" },
        { month: "Mar", temp: 29, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 210, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "bocas_del_toro",
      name: "Bocas del Toro",
      region: { fr: "Caraïbes Ouest", en: "West Caribbean" },
      data: [
        { month: "Jan", temp: 26, rain: 130, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mar", temp: 27, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 240, icon: "⛅" },
        { month: "Jul", temp: 26, rain: 280, icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 26, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 180, icon: "☀️" },
        { month: "Déc", temp: 26, rain: 140, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Canal de Panama", en: "Panama Canal" },
      region: "Panama City",
      description: {
        fr: "Le Canal de Panama, l'une des plus grandes réalisations d'ingénierie humaine, relie l'Atlantique au Pacifique en 80 km. Les écluses de Miraflores permettent d'observer en direct le transit de porte-conteneurs géants. Le musée interocéanique retrace l'épopée de sa construction.",
        en: "The Panama Canal, one of humanity's greatest engineering achievements, links the Atlantic to the Pacific over 80 km. The Miraflores Locks let you watch giant container ships pass through live. The Interoceanic Museum retraces the epic story of its construction.",
      },
      wikipedia: "File:Panama Canal Gatun Locks.jpg",
      tags: ["Ingénierie", "Histoire", "Icône", "Incontournable"],
      mustSee: [
        { name: { fr: "Écluses de Miraflores — transit en direct", en: "Miraflores Locks — live ship transit" }, wikipedia: "File:Panama Canal Miraflores Locks.jpg" },
        { name: { fr: "Écluses d'Agua Clara (canal élargi)", en: "Agua Clara Locks (expanded canal)" }, wikipedia: "File:Agua Clara Locks 09 2019 0752.jpg" },
        { name: { fr: "Musée interocéanique (Ciudad de Panamá)", en: "Interoceanic Museum (Panama City)" }, wikipedia: "File:Museo_del_Canal.jpg" },
        { name: { fr: "Pont des Amériques — panorama canal", en: "Bridge of the Americas — canal panorama" }, wikipedia: "File:08-029 Puente de las Américas 3.jpg" },
      ],
    },
    {
      id: 2,
      name: "Casco Viejo",
      region: "Panama City",
      description: {
        fr: "Le Casco Viejo, quartier historique de Panama City classé UNESCO, est une péninsule de ruelles coloniales espagnoles, d'hôtels boutiques et de restaurants gastronomiques avec vue sur les gratte-ciels de l'hypermoderne skyline panaméenne — un contraste saisissant entre passé et futur.",
        en: "Casco Viejo, the UNESCO-listed historic quarter of Panama City, is a peninsula of Spanish colonial alleyways, boutique hotels and gourmet restaurants overlooking the skyscrapers of Panama's ultra-modern skyline — a striking contrast between past and future.",
      },
      wikipedia: "Casco_Viejo,_Panama",
      tags: ["UNESCO", "Colonial", "Gastronomie", "Rooftop"],
      mustSee: [
        { name: { fr: "Plaza de la Independencia & cathédrale", en: "Plaza de la Independencia & cathedral" }, wikipedia: "File:Panama Catedral Metropolitana.jpg" },
        { name: { fr: "Rooftop bars — vue skyline + canal", en: "Rooftop bars — skyline + canal views" }, wikipedia: "Casco_Viejo,_Panama" },
        { name: { fr: "Ruines de la vieille ville (Panama Viejo)", en: "Old town ruins (Panama Viejo)" }, wikipedia: "File:Catedral Panamá Viejo.jpg" },
        { name: { fr: "Théâtre National et Palais présidentiel", en: "National Theatre and Presidential Palace" }, wikipedia: "File:National Theater in the Old Town of panama City.jpg" },
      ],
    },
    {
      id: 3,
      name: "Bocas del Toro",
      region: { fr: "Caraïbes Ouest", en: "West Caribbean" },
      description: {
        fr: "L'archipel de Bocas del Toro est le paradis caribéen du Panama : îles coralliennes, eaux turquoise, dauphins dans les lagunes, grenouilles vénéneuses dans la jungle et plages de sable blanc. Bocas Town (Isla Colón) est une ville sur pilotis, colorée et festive.",
        en: "The Bocas del Toro archipelago is Panama's Caribbean paradise: coral islands, turquoise waters, dolphins in the lagoons, poison dart frogs in the jungle and white sand beaches. Bocas Town (Isla Colón) is a colourful, festive town built on stilts.",
      },
      wikipedia: "File:Bocas aerial.jpg",
      tags: ["Île", "Caraïbes", "Snorkel", "Faune"],
      mustSee: [
        { name: { fr: "Red Frog Beach — grenouilles vénéneuses", en: "Red Frog Beach — poison dart frogs" }, wikipedia: "File:Oophaga pumilio 263283848.jpg" },
        { name: { fr: "Dolphin Bay — dauphins dans la lagune", en: "Dolphin Bay — dolphins in the lagoon" }, wikipedia: "File:Dolphin in Cardigan Bay, off New Quay.jpg" },
        { name: { fr: "Snorkel récifs coralliens (Isla Bastimentos)", en: "Snorkelling on coral reefs (Isla Bastimentos)" }, wikipedia: "File:Isla Bastimentos La Mochila.jpg" },
        { name: { fr: "Bocas Town — vie nocturne sur pilotis", en: "Bocas Town — nightlife on stilts" }, wikipedia: "File:Early morning at Bocas del Toro.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "San Blas — Îles Kuna Yala", en: "San Blas — Kuna Yala Islands" },
      region: { fr: "Caraïbes Est", en: "East Caribbean" },
      description: {
        fr: "San Blas (Guna Yala) est un archipel de 365 îles coraliennes géré par le peuple kuna, l'une des rares nations indigènes ayant conservé son autonomie complète. Eaux cristallines, plages désertes, hamacs sur l'eau et commerce des molas (tissus brodés) composent ce paradis hors du temps.",
        en: "San Blas (Guna Yala) is an archipelago of 365 coral islands governed by the Kuna people, one of the few indigenous nations to have retained full autonomy. Crystal-clear waters, deserted beaches, hammocks over the water and trade in molas (embroidered textiles) make up this timeless paradise.",
      },
      wikipedia: "Guna_Yala",
      tags: ["Île", "Culture Kuna", "Paradis", "Authentique"],
      mustSee: [
        { name: { fr: "Île aux cocotiers avec hamacs sur l'eau", en: "Coconut island with hammocks over the water" }, wikipedia: "San_Blas_Islands" },
        { name: { fr: "Molas — textiles brodés des Kunas", en: "Molas — embroidered Kuna textiles" }, wikipedia: "File:Mola_blouse,_Kuna_peoples,_San_Blas_Islands,_Panama,_20th_century,_cotton,_polyester_-_Fernbank_Museum_of_Natural_History_-_DSC09997.JPG" },
        { name: { fr: "Snorkel lagon turquoise (Cocos Bandidos)", en: "Snorkelling in the turquoise lagoon (Cocos Bandidos)" }, wikipedia: "Guna_Yala" },
        { name: { fr: "Communauté Kuna — mode de vie traditionnel", en: "Kuna community — traditional way of life" }, wikipedia: "Guna_people" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Panama utilise le dollar américain et est plus cher que ses voisins centraméricains, surtout Panama City. Mais San Blas et Bocas restent abordables. Le niveau de vie est parmi les plus élevés d'Amérique centrale.",
      en: "Panama uses the US dollar and is more expensive than its Central American neighbours, especially Panama City. But San Blas and Bocas remain affordable. The cost of living is among the highest in Central America.",
    },
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD (Balboa = 1 USD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hostel Panama City (Casco Viejo)", en: "Hostel in Panama City (Casco Viejo)" }, price: "15–30 €", detail: { fr: "Dortoir ou chambre simple", en: "Dorm or single room" } },
          { label: { fr: "Hôtel boutique Casco Viejo", en: "Boutique hotel in Casco Viejo" }, price: "80–150 €", detail: { fr: "Charme colonial, rooftop", en: "Colonial charm, rooftop" } },
          { label: { fr: "Camping San Blas (tout inclus)", en: "San Blas camping (all-inclusive)" }, price: "60–100 €", detail: { fr: "Tente + repas + transfert", en: "Tent + meals + transfer" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Arroz con pollo (local)", en: "Arroz con pollo (local)" }, price: "4–7 €", detail: { fr: "Plat national, copieux", en: "National dish, hearty" } },
          { label: { fr: "Restaurant Panama City (Casco)", en: "Restaurant in Panama City (Casco)" }, price: "15–30 €", detail: { fr: "Cuisine créative ou fruits de mer", en: "Creative cuisine or seafood" } },
          { label: { fr: "Homard frais (San Blas)", en: "Fresh lobster (San Blas)" }, price: "10–20 €", detail: { fr: "Pêche du jour par les Kunas", en: "Day's catch by the Kuna" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Panama City–Bocas del Toro", en: "Bus Panama City–Bocas del Toro" }, price: "15–20 €", detail: { fr: "9h avec transfert bateau", en: "9h including boat transfer" } },
          { label: { fr: "Vol Panama City–Bocas del Toro", en: "Flight Panama City–Bocas del Toro" }, price: "80–150 €", detail: { fr: "A/R, 50 min", en: "Return, 50 min" } },
          { label: { fr: "Excursion San Blas (avion + bateau)", en: "San Blas excursion (plane + boat)" }, price: "100–150 €", detail: { fr: "Journée ou nuit sur île", en: "Day trip or overnight on an island" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite écluses Miraflores", en: "Miraflores Locks visit" }, price: "15–20 €", detail: { fr: "Musée + observation direct", en: "Museum + live observation" } },
          { label: { fr: "Tour bateau San Blas (2j/1n)", en: "San Blas boat tour (2d/1n)" }, price: "80–120 €", detail: { fr: "Nuit sur île, repas inclus", en: "Overnight on an island, meals included" } },
          { label: { fr: "Plongée Bocas del Toro (2 plongées)", en: "Diving in Bocas del Toro (2 dives)" }, price: "60–80 €", detail: { fr: "Guide + équipement", en: "Guide + equipment" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–70 €/j", desc: { fr: "Hostel + cuisine locale + bus + camping San Blas", en: "Hostel + local food + bus + San Blas camping" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "100–160 €/j", desc: { fr: "Boutique hôtel + restaurants + vols intérieurs", en: "Boutique hotel + restaurants + domestic flights" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €+/j", desc: { fr: "Hôtel 5★ + vols privés San Blas + gastronomie", en: "5★ hotel + private flights to San Blas + fine dining" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Panama City & Canal (3j) → Bocas del Toro (3j) → San Blas (3j) → Panama City départ (1j)",
        en: "Panama City & Canal (3d) → Bocas del Toro (3d) → San Blas (3d) → Departure from Panama City (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 600 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Panama City", en: "Return flight Paris–Panama City" }, amount: "550–850 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Transports (bus + vols + bateaux)", en: "Transport (bus + flights + boats)" }, amount: "250–400 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Panama City", en: "Return flight Paris–Panama City" }, amount: "700–1 100 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "900–1 500 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails" }, amount: "500–800 €" },
            { label: { fr: "Vols intérieurs + transferts", en: "Domestic flights + transfers" }, amount: "500–800 €" },
            { label: { fr: "Excursions & plongée", en: "Excursions & diving" }, amount: "400–700 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Panama (Business)", en: "Return flight Paris–Panama (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Hôtels 5★ (10 nuits)", en: "5★ hotels (10 nights)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa" }, amount: "800–1 500 €" },
            { label: { fr: "Vols charter + transferts privés", en: "Charter flights + private transfers" }, amount: "800–1 500 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~13h avec escale (Copa Airlines via Bogotá, Air France via Miami)", en: "~13h with a layover (Copa Airlines via Bogotá, Air France via Miami)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 180 jours (Français)", en: "Visa-free for 180 days (French citizens)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar américain / Balboa (taux 1:1) — espèces recommandées à San Blas", en: "US dollar / Balboa (1:1 rate) — cash recommended in San Blas" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Espagnol (officiel) — kuna à San Blas, anglais à Bocas", en: "Spanish (official) — Kuna in San Blas, English in Bocas" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B – 110 V (comme USA)", en: "Type A/B — 110V (like the US)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Très bon Panama City, limité à San Blas et jungle", en: "Very good in Panama City, limited in San Blas and the jungle" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable à Panama City — non potable dans les îles", en: "Drinkable in Panama City — not drinkable on the islands" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen pour la province du Darién uniquement", en: "Antimalarial only needed for Darién province" } },
  ],
};
