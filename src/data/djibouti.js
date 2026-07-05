export const DJIBOUTI = {
  code: "DJI",
  numericId: 262,
  name: { fr: "Djibouti", en: "Djibouti" },
  emoji: "🇩🇯",
  capital: { fr: "Djibouti", en: "Djibouti" },
  language: { fr: "Français, Arabe, Afar, Somali", en: "French, Arabic, Afar, Somali" },
  currency: { fr: "Franc djiboutien (DJF)", en: "Djiboutian franc (DJF)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 55, budgetMid: 140,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "Djibouti est un petit pays de la Corne de l'Afrique aux paysages lunaires : le lac Assal (153m sous le niveau de la mer, point le plus bas d'Afrique et deuxième le plus salé au monde après la mer Morte), le lac Abbé et ses cheminées de vapeur, les requins baleines du golfe de Tadjourah (novembre à janvier), et la dive sur le légendaire site du Ghoubbet.",
    en: "Djibouti is a small country in the Horn of Africa with lunar landscapes: Lake Assal (153m below sea level, the lowest point in Africa and the second saltiest place in the world after the Dead Sea), Lake Abbé and its steam chimneys, the whale sharks of the Gulf of Tadjourah (November to January), and diving at the legendary Ghoubbet site.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April" },
      label: { fr: "Saison fraîche", en: "Cool season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : températures supportables (25–32°C), mer calme. Requins baleines de novembre à janvier. Randonnées dans les monts du Day possibles.",
        en: "Best time to visit: manageable temperatures (25–32°C), calm seas. Whale sharks from November to January. Hiking in the Day Mountains is possible.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Khamsin — chaleur extrême", en: "Khamsin — extreme heat" },
      color: "#ef4444",
      description: {
        fr: "Températures extrêmes (38–45°C dans les terres), vent chaud et sable. Très difficile pour les activités extérieures. Déconseillé.",
        en: "Extreme temperatures (38–45°C inland), hot winds and sand. Outdoor activities become very difficult. Not recommended.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "djibouti_city",
      name: "Djibouti (ville)",
      region: { fr: "Côte du golfe de Tadjourah", en: "Gulf of Tadjourah coast" },
      data: [
        { month: "Jan", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Avr", temp: 30, rain: 20,  icon: "⛅" },
        { month: "Mai", temp: 33, rain: 10,  icon: "🌡️" },
        { month: "Jun", temp: 38, rain: 5,   icon: "🌡️" },
        { month: "Jul", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 5,   icon: "🌡️" },
        { month: "Oct", temp: 30, rain: 15,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 25,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 20,  icon: "☀️" },
      ],
    },
    {
      id: "lac_assal",
      name: "Lac Assal",
      region: { fr: "Désert de l'Afar (intérieur)", en: "Afar Desert (inland)" },
      data: [
        { month: "Jan", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Fév", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 32, rain: 5,   icon: "🌡️" },
        { month: "Avr", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 42, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 44, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 44, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Nov", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 28, rain: 5,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Requins baleines du golfe de Tadjourah", en: "Whale sharks of the Gulf of Tadjourah" },
      region: { fr: "Golfe de Tadjourah (côte nord)", en: "Gulf of Tadjourah (north coast)" },
      description: {
        fr: "De novembre à janvier, le golfe de Tadjourah accueille l'une des concentrations les plus denses de requins baleines au monde — jusqu'à 50 individus parfois visibles simultanément depuis le bateau. La nage avec le plus grand poisson du monde dans ces eaux claires et chaudes est l'une des expériences marines les plus intenses de la planète.",
        en: "From November to January, the Gulf of Tadjourah hosts one of the densest concentrations of whale sharks in the world — at times, up to 50 can be seen from the boat at once. Swimming with the world's largest fish in these warm, clear waters is one of the planet's most intense marine experiences.",
      },
      wikipedia: "Whale_shark",
      tags: ["Requins baleines", "Plongée", "Nage", "Unique"],
      mustSee: [
        { name: { fr: "Nage avec les requins baleines (nov–janv, Arta Beach)", en: "Swimming with whale sharks (Nov–Jan, Arta Beach)" }, wikipedia: "Whale_shark" },
        { name: { fr: "Plongée Ghoubbet — manta rays et topographie lunaire", en: "Ghoubbet diving — manta rays and lunar topography" }, wikipedia: "File:Okinawa Churaumi aquarium Manta hdsr Vlux5 01.jpg" },
        { name: { fr: "Snorkeling récifs des Sept-Frères (îles coralliennes)", en: "Snorkelling on the Seven Brothers reefs (coral islands)" }, wikipedia: "File:Beach on the Gulf of Tadjoura.jpg" },
        { name: { fr: "Croisière coucher de soleil dans le golfe de Tadjourah", en: "Sunset cruise in the Gulf of Tadjourah" }, wikipedia: "File:Gulf of Tadjoura1.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lac Assal — Point le plus bas d'Afrique", en: "Lake Assal — Africa's lowest point" },
      region: { fr: "Région d'Arta", en: "Arta Region" },
      description: {
        fr: "Le lac Assal (153m sous le niveau de la mer) est le point le plus bas d'Afrique et l'un des endroits les plus arides de la planète. Sa teneur en sel (35%) est 10 fois celle de la mer — on y flotte sans effort. Les cristaux de sel blanc sur les rives bleues et les couleurs du paysage volcanique environnant créent un panorama extraterrestre.",
        en: "Lake Assal (153m below sea level) is the lowest point in Africa and one of the driest places on the planet. Its salinity (35%) is 10 times that of the sea — you float effortlessly. The white salt crystals on the blue shoreline and the colours of the surrounding volcanic landscape create an otherworldly panorama.",
      },
      wikipedia: "File:Lake Assal NASA (cropped).jpg",
      tags: ["Paysage lunaire", "Sel", "Point le plus bas", "Volcanique"],
      mustSee: [
        { name: { fr: "Bain flottant dans le lac Assal (eau ultra-salée)", en: "Floating swim in Lake Assal (ultra-salty water)" }, wikipedia: "File:Lake Assal NASA (cropped).jpg" },
        { name: { fr: "Panorama sur les coulées de lave noire et le sel blanc", en: "View over the black lava flows and white salt" }, wikipedia: "File:Assal Lake, 2024.jpg" },
        { name: { fr: "Caravanes de sel des éleveurs Afar", en: "Afar herders' salt caravans" }, wikipedia: "File:Assal Lake, 2024.jpg" },
        { name: { fr: "Coulée de lave de l'Ardoukoba (volcan récent, 1978)", en: "Ardoukoba lava flow (recent volcano, 1978)" }, wikipedia: "File:Lake Assal NASA (cropped).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lac Abbé — Paysage de science-fiction", en: "Lake Abbé — Sci-fi landscape" },
      region: { fr: "Frontière éthiopienne (ouest)", en: "Ethiopian border (west)" },
      description: {
        fr: "Le lac Abbé est l'une des visions les plus surréelles d'Afrique : des centaines de cheminées calcaires de 50m de hauteur crachent leur vapeur dans un décor volcanique désertique — Steven Spielberg a failli y tourner une scène de Star Wars. Le camp de nuit sous les étoiles et le lever de soleil sur les cheminées sont des moments inoubliables.",
        en: "Lake Abbé is one of Africa's most surreal sights: hundreds of 50m limestone chimneys vent steam into a barren volcanic landscape — Steven Spielberg almost filmed a Star Wars scene here. Spending the night under the stars and watching sunrise over the chimneys are unforgettable moments.",
      },
      wikipedia: "File:Lac Abbe-02.JPG",
      tags: ["Cheminées", "Volcanique", "Star Wars", "Camping"],
      mustSee: [
        { name: { fr: "Cheminées de vapeur à l'aurore (paysage volcanique unique)", en: "Steam chimneys at dawn (a unique volcanic landscape)" }, wikipedia: "File:Abbe-3.jpg" },
        { name: { fr: "Camp de nuit sous les étoiles au bord du lac", en: "Overnight camp under the stars by the lake" }, wikipedia: "File:Tukul Lake Abbe Djibouti.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Monts du Day — Forêt relique", en: "Day Mountains — Relic forest" },
      region: { fr: "Massif du Day (nord)", en: "Day massif (north)" },
      description: {
        fr: "Les monts du Day abritent l'unique forêt de genévriers de Djibouti — vestige d'une époque où le pays était verdoyant. À 1 700m d'altitude, les températures sont radicalement différentes de la côte brûlante. Le parc national du Day abrite le francolin de Djibouti (oiseau endémique en danger critique) et des dik-diks (minuscules antilopes).",
        en: "The Day Mountains are home to Djibouti's only juniper forest — a relic from a time when the country was green. At 1,700m above sea level, temperatures are radically different from the scorching coast. Day National Park shelters the Djibouti francolin (a critically endangered endemic bird) and dik-diks (tiny antelopes).",
      },
      wikipedia: "File:Goda Mountains - National Park of Forêt du Day.jpg",
      tags: ["Forêt", "Oiseaux", "Altitude", "Randonnée"],
      mustSee: [
        { name: { fr: "Forêt de genévriers du Day — seule forêt de Djibouti", en: "Day juniper forest — Djibouti's only forest" }, wikipedia: "File:Goda Mountains - National Park of Forêt du Day.jpg" },
        { name: { fr: "Vue panoramique sur la cuvette de l'Afar", en: "Panoramic view over the Afar basin" }, wikipedia: "File:Dracaena ombet Djibouti.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Djibouti est cher pour la région (carrefour logistique mondial avec présences militaires étrangères). La plupart des produits sont importés. En revanche le franc djiboutien est arrimé au dollar — pas de surprise de change.",
      en: "Djibouti is expensive for the region (a global logistics crossroads with foreign military presences). Most goods are imported. On the other hand, the Djiboutian franc is pegged to the dollar — no exchange-rate surprises.",
    },
    currency: "DJF",
    exchangeRate: "1€ ≈ 198 DJF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / auberge en ville", en: "Guesthouse / city hostel" }, price: "30–60 €", detail: { fr: "Chambres simples, climatisées", en: "Simple air-conditioned rooms" } },
          { label: { fr: "Hôtel 3★ Djibouti ville (Horseed, Djibouti Palace)", en: "3★ hotel in Djibouti City (Horseed, Djibouti Palace)" }, price: "80–150 €", detail: { fr: "Confortable, piscine", en: "Comfortable, with swimming pool" } },
          { label: { fr: "Camp de brousse (lac Abbé, Ghoubbet)", en: "Bush camp (Lake Abbé, Ghoubbet)" }, price: "60–120 €", detail: { fr: "Tentes équipées + demi-pension", en: "Equipped tents + half board" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Skudahkharis (riz + viande chèvre) restaurant somalien", en: "Skudahkharis (rice + goat meat) at a Somali restaurant" }, price: "5–12 €", detail: { fr: "Cuisine locale typique", en: "Typical local cuisine" } },
          { label: { fr: "Restaurant mid-range Djibouti ville", en: "Mid-range restaurant in Djibouti City" }, price: "20–40 €", detail: { fr: "Cuisine française et éthiopienne", en: "French and Ethiopian cuisine" } },
          { label: { fr: "Marché Riyad — poissons du golfe frais", en: "Riyad Market — fresh fish from the gulf" }, price: "5–15 €", detail: { fr: "Langouste et thon du matin", en: "Lobster and tuna caught that morning" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "4x4 + chauffeur/guide (journée lac Assal/Abbé)", en: "4x4 + driver/guide (day trip to Lake Assal/Abbé)" }, price: "100–180 €", detail: { fr: "Indispensable hors ville", en: "Essential outside the city" } },
          { label: { fr: "Taxi en ville", en: "Taxi in town" }, price: "3–8 €", detail: { fr: "Négocier avant de monter", en: "Negotiate before getting in" } },
          { label: { fr: "Train Djibouti–Addis-Abeba (Ethio-Djibouti Rail)", en: "Djibouti–Addis Ababa train (Ethio-Djibouti Rail)" }, price: "20–40 €", detail: { fr: "Voyage de 12h, paysage de l'Afar", en: "12-hour journey, Afar landscapes" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Excursion requins baleines (bateau + guide, matinée)", en: "Whale shark excursion (boat + guide, morning trip)" }, price: "80–130 €", detail: { fr: "Nov–janv, 4h en mer", en: "Nov–Jan, 4 hours at sea" } },
          { label: { fr: "Plongée Ghoubbet (2 plongées, équipement)", en: "Ghoubbet diving (2 dives, equipment)" }, price: "90–140 €", detail: { fr: "Mantas et topographie unique", en: "Mantas and unique topography" } },
          { label: { fr: "Tour lac Abbé (nuit incluse)", en: "Lake Abbé tour (overnight included)" }, price: "120–200 €", detail: { fr: "Transfert 4x4 + camp + guide", en: "4x4 transfer + camp + guide" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "55–90 €/j", desc: { fr: "Guesthouse + cuisine locale + 4x4 partagé", en: "Guesthouse + local food + shared 4x4" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "140–250 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions privées", en: "3★ hotel + restaurants + private excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days" },
      route: {
        fr: "Djibouti ville (2j) → Lac Assal + Ghoubbet (1j) → Lac Abbé avec nuit (2j) → Requins baleines (1j) → retour (1j)",
        en: "Djibouti City (2d) → Lake Assal + Ghoubbet (1d) → Lake Abbé with overnight stay (2d) → Whale sharks (1d) → return (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Djibouti (Air France, Turkish)", en: "Return flight Paris–Djibouti (Air France, Turkish)" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "280–500 €" },
            { label: { fr: "4x4 + guides + transports", en: "4x4 + guides + transport" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–350 €" },
            { label: { fr: "Requins baleines + plongée", en: "Whale sharks + diving" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Djibouti", en: "Return flight Paris–Djibouti" }, amount: "700–1 000 €" },
            { label: { fr: "Hôtels 3★ (7 nuits)", en: "3★ hotels (7 nights)" }, amount: "700–1 200 €" },
            { label: { fr: "Circuits privés 4x4 + guides", en: "Private 4x4 tours + guides" }, amount: "600–1 000 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Plongée & excursions mer", en: "Diving & sea excursions" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~8–10h (Air France direct 3×/semaine, Turkish via Istanbul, Ethiopian via Addis-Abeba).", en: "~8–10h (Air France direct 3x/week, Turkish via Istanbul, Ethiopian via Addis Ababa)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa obligatoire en ligne avant le départ (~76 USD, 31 jours) sur evisa.gouv.dj. Aussi disponible à l'arrivée.", en: "Online e-Visa required before departure (~USD 76, 31 days) on evisa.gouv.dj. Also available on arrival." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc djiboutien (DJF, arrimé au dollar). Dollars USD préférés. Carte bancaire dans les hôtels uniquement.", en: "Djiboutian franc (DJF, pegged to the dollar). US dollars preferred. Credit cards accepted in hotels only." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français et Arabe (officiels). Afar et Somali entre habitants. Français suffisant pour voyager.", en: "French and Arabic (official). Afar and Somali among locals. French is sufficient for travelling." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V. Aucun adaptateur nécessaire pour les appareils français.", en: "Type C/E (European) — 220V. No adapter needed for French devices." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé (risque faible mais présent). Vaccin typhoïde conseillé. Chaleur extrême : hydratation intensive de juin à sept.", en: "Antimalarial treatment recommended (low but present risk). Typhoid vaccine advised. Extreme heat: hydrate heavily from June to September." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille uniquement. Se méfier de la déshydratation en été (boire 4–6L/jour).", en: "Not drinkable — bottled water only. Watch out for dehydration in summer (drink 4–6L/day)." } },
    { icon: "🌡️", label: { fr: "Chaleur", en: "Heat" }, value: { fr: "De juin à septembre, les températures dépassent 40°C dans les terres. Toute activité extérieure doit être planifiée tôt le matin.", en: "From June to September, temperatures exceed 40°C inland. Any outdoor activity should be planned for early in the morning." } },
  ],
};
