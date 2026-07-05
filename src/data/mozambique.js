export const MOZAMBIQUE = {
  code: "MOZ",
  numericId: 508,
  name: { fr: "Mozambique", en: "Mozambique" },
  emoji: "🇲🇿",
  capital: { fr: "Maputo", en: "Maputo" },
  language: { fr: "Portugais, Makua, Changana, Sena", en: "Portuguese, Makua, Changana, Sena" },
  currency: { fr: "Metical (MZN)", en: "Metical (MZN)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 35, budgetMid: 75,
    tripMin: 1200, tripMid: 2800,
  },
  description: {
    fr: "Le Mozambique déroule 2 500 km de côte sur l'océan Indien : l'archipel de Bazaruto (UNESCO) avec ses dunes et ses dugongs, l'archipel des Quirimbas avec ses dhows et ses récifs préservés, et Vilanculos comme base de plongée. Un pays peu fréquenté au sablé doux, marqué par la culture swahili et une hospitalité sincère. À combiner avec les parcs animaliers du Gorongosa.",
    en: "Mozambique unfurls 2,500 km of Indian Ocean coastline: the Bazaruto Archipelago (UNESCO) with its dunes and dugongs, the Quirimbas Archipelago with its dhows and pristine reefs, and Vilanculos as a diving base. A little-visited country with soft sand, shaped by Swahili culture and genuine hospitality. Best combined with the wildlife parks of Gorongosa.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Octobre", en: "April – October" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : ciel dégagé, mer calme, températures agréables (19–26°C). Plongée optimale et accès aux parcs facilité. Baleines à bosse de juillet à octobre.",
        en: "Best period: clear skies, calm sea, pleasant temperatures (19–26°C). Optimal diving and easier access to the parks. Humpback whales from July to October.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Mars", en: "November – March" },
      label: { fr: "Saison des pluies / cyclones", en: "Rainy season / cyclones" },
      color: "#ef4444",
      description: {
        fr: "Pluies et chaleur (27–32°C). Risque cyclonique sur le nord. Routes de brousse impraticables. Plongée dégradée au nord.",
        en: "Rain and heat (27–32°C). Cyclone risk in the north. Bush roads become impassable. Diving conditions worsen in the north.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "maputo",
      name: "Maputo",
      region: { fr: "Sud (capitale)", en: "South (capital)" },
      data: [
        { month: "Jan", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 23, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 19, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 110, icon: "🌧️" },
      ],
    },
    {
      id: "vilanculos",
      name: "Vilanculos",
      region: { fr: "Centre — porte de Bazaruto", en: "Centre — gateway to Bazaruto" },
      data: [
        { month: "Jan", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 80,  icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Archipel de Bazaruto — Dugongs et récifs", en: "Bazaruto Archipelago — Dugongs and reefs" },
      region: { fr: "Inhambane (centre-sud)", en: "Inhambane (central-south)" },
      description: {
        fr: "L'archipel de Bazaruto regroupe cinq îles barrière protégées par un parc national marin (UNESCO) : dunes de sable montant à 100m, récifs coralliens intacts, dugongs (l'une des dernières populations viables d'Afrique orientale), raies manta et dauphins. L'accès depuis Vilanculos se fait en dhow ou en speedboat.",
        en: "The Bazaruto Archipelago comprises five barrier islands protected by a marine national park (UNESCO): sand dunes rising to 100m, untouched coral reefs, dugongs (one of the last viable populations in East Africa), manta rays and dolphins. Access from Vilanculos is by dhow or speedboat.",
      },
      wikipedia: "Bazaruto_Archipelago",
      tags: ["Plongée", "Dugongs", "Île", "UNESCO"],
      mustSee: [
        { name: { fr: "Plongée Two-Mile Reef — raies manta et tortues", en: "Two-Mile Reef diving — manta rays and turtles" }, wikipedia: "File:Nausicaa - raie manta 2.jpg" },
        { name: { fr: "Nage avec les dugongs (espèce menacée)", en: "Swimming with dugongs (endangered species)" }, wikipedia: "Dugong" },
        { name: { fr: "Dunes de l'île Santa Carolina (Ilha do Paraíso)", en: "Santa Carolina Island dunes (Ilha do Paraíso)" }, wikipedia: "File:Bazaruto-Island-banner.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc national de Gorongosa", en: "Gorongosa National Park" },
      region: { fr: "Sofala (centre)", en: "Sofala (centre)" },
      description: {
        fr: "Gorongosa était considéré comme le 'Jardin d'Éden' africain avant la guerre civile. Depuis la paix, il est l'objet d'un projet de restauration écologique exceptionnel : lions, éléphants, hippos et buffles ont été réintroduits avec succès. Le Mont Gorongosa (1 863m) abrite une forêt tropicale humide distincte de la savane.",
        en: "Gorongosa was regarded as Africa's 'Garden of Eden' before the civil war. Since peace returned, it has been the subject of an exceptional ecological restoration project: lions, elephants, hippos and buffalo have been successfully reintroduced. Mount Gorongosa (1,863m) harbours a rainforest distinct from the savannah below.",
      },
      wikipedia: "Gorongosa_National_Park",
      tags: ["Safari", "Faune", "Restauration", "Nature"],
      mustSee: [
        { name: { fr: "Safari en 4x4 — lions et éléphants de Gorongosa", en: "4x4 safari — Gorongosa's lions and elephants" }, wikipedia: "Gorongosa_National_Park" },
        { name: { fr: "Lac Urema — hippos et oiseaux aquatiques", en: "Lake Urema — hippos and waterbirds" }, wikipedia: "File:Mount_Gorongosa,_Gorongosa_National_Park,_Mozambique_(cropped).jpg" },
        { name: { fr: "Mont Gorongosa — randonnée en forêt de brouillard", en: "Mount Gorongosa — cloud forest hiking" }, wikipedia: "File:Gorongosa - Gogogo peak. (4403966914).jpg" },
        { name: { fr: "Camp de nuit en brousse sous les étoiles", en: "Overnight bush camp under the stars" }, wikipedia: "File:Sunset - Gorongosa National Park, Mozambique.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Archipel des Quirimbas — Ibo Island", en: "Quirimbas Archipelago — Ibo Island" },
      region: { fr: "Cabo Delgado (extrême nord)", en: "Cabo Delgado (far north)" },
      description: {
        fr: "Les Quirimbas sont 32 îles coralliennes au nord du Mozambique, dont Ibo Island avec ses forts portugais du XVIe siècle et ses artisans bijoutiers — classée comme l'une des villes les plus préservées d'Afrique. Les récifs des Quirimbas sont parmi les moins altérés de l'océan Indien. Attention aux restrictions de sécurité dans la région depuis 2017.",
        en: "The Quirimbas are 32 coral islands off northern Mozambique, including Ibo Island with its 16th-century Portuguese forts and silversmiths — ranked among the best-preserved towns in Africa. The Quirimbas reefs are among the least disturbed in the Indian Ocean. Note the security restrictions in the region since 2017.",
      },
      wikipedia: "File:Medjumbe Island Pool Deck.jpg",
      tags: ["Histoire", "Plongée", "Île", "Artisanat"],
      mustSee: [
        { name: { fr: "Fort portugais d'Ibo (XVIe s.) et bijoutiers en argent", en: "Ibo's Portuguese fort (16th c.) and silversmiths" }, wikipedia: "File:Ilha do Ibo - sunset-01.jpg" },
        { name: { fr: "Plongée récifs des Quirimbas — coraux intacts", en: "Quirimbas reef diving — pristine corals" }, wikipedia: "File:Quilalea in Mozambique.JPG" },
        { name: { fr: "Balade en dhow au coucher du soleil inter-îles", en: "Sunset dhow ride between the islands" }, wikipedia: "File:Ilha do Ibo-sunset-02.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Maputo — Art déco et gastronomie", en: "Maputo — Art Deco and cuisine" },
      region: { fr: "Capitale (sud)", en: "Capital (south)" },
      description: {
        fr: "Maputo est une capitale surprenante : architecture art déco et moderniste léguée par le Portugal, marché central avec artisanat et bois de rose, restaurants de fruits de mer exceptionnels (langoustes et camarão fraîche), et une scène culturelle animée. La Fortaleza de Maputo (XVIIIe s.) domine la baie.",
        en: "Maputo is a surprising capital: Art Deco and modernist architecture left by Portugal, a central market with crafts and rosewood, exceptional seafood restaurants (lobster and fresh camarão), and a lively cultural scene. The Fortaleza de Maputo (18th c.) overlooks the bay.",
      },
      wikipedia: "Maputo",
      tags: ["Ville", "Art déco", "Gastronomie", "Marché"],
      mustSee: [
        { name: { fr: "Marché central de Maputo — épices et sculptures", en: "Maputo Central Market — spices and carvings" }, wikipedia: "File:Mozambique, Maputo, Zimpeto Market, fruit sellers.jpg" },
        { name: { fr: "Fortaleza de Nossa Senhora da Conceição (XVIII s.)", en: "Fortaleza de Nossa Senhora da Conceição (18th c.)" }, wikipedia: "File:Fortaleza_de_Nossa_Senhora_da_Conceição_(1946)_(4107930945).jpg" },
        { name: { fr: "Avenida Julius Nyerere — architecture coloniale art déco", en: "Avenida Julius Nyerere — colonial Art Deco architecture" }, wikipedia: "File:Av. Julius Nyerere in Maputo, Mozambique.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Mozambique est abordable mais l'hébergement de qualité coûte cher sur les îles (accès par speedboat ou avion léger). La côte nord (Quirimbas) est chère ; le centre et le sud restent accessibles. Le metical fluctue — prévoir dollars ou euros en liquide.",
      en: "Mozambique is affordable, but quality accommodation is pricey on the islands (reachable only by speedboat or light aircraft). The northern coast (Quirimbas) is expensive; the centre and south remain accessible. The metical fluctuates — bring dollars or euros in cash.",
    },
    currency: "MZN",
    exchangeRate: "1€ ≈ 68 MZN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / lodge de brousse simple", en: "Guesthouse / simple bush lodge" }, price: "20–45 €", detail: { fr: "Chambre basique, moustiquaire", en: "Basic room, mosquito net" } },
          { label: { fr: "Lodge 3★ Vilanculos ou Maputo", en: "3★ lodge in Vilanculos or Maputo" }, price: "60–120 €", detail: { fr: "Piscine, vue mer ou jardin", en: "Pool, sea or garden view" } },
          { label: { fr: "Island lodge Bazaruto (Anantara, Azura)", en: "Bazaruto island lodge (Anantara, Azura)" }, price: "400–800 €", detail: { fr: "Tout compris, accès exclusif", en: "All-inclusive, exclusive access" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Camarão grillé (crevettes locales) dans un restaurante", en: "Grilled camarão (local prawns) in a restaurante" }, price: "8–18 €", detail: { fr: "Frais du jour, sauce piri-piri", en: "Fresh catch of the day, piri-piri sauce" } },
          { label: { fr: "Restaurant mid-range Maputo", en: "Mid-range restaurant in Maputo" }, price: "15–30 €", detail: { fr: "Fruits de mer, pão com churrasco", en: "Seafood, pão com churrasco" } },
          { label: { fr: "Marché local — matapa, xima, poisson séché", en: "Local market — matapa, xima, dried fish" }, price: "2–6 €", detail: { fr: "Cuisine mozambicaine typique", en: "Typical Mozambican cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Chapa (minibus collectif) entre villes", en: "Chapa (shared minibus) between towns" }, price: "5–15 €", detail: { fr: "Lent mais économique", en: "Slow but cheap" } },
          { label: { fr: "Bus longue distance (Maputo–Vilanculos)", en: "Long-distance bus (Maputo–Vilanculos)" }, price: "15–25 €", detail: { fr: "8–10h de route", en: "8–10h on the road" } },
          { label: { fr: "Speedboat Vilanculos–Bazaruto (A/R)", en: "Speedboat Vilanculos–Bazaruto (return)" }, price: "40–80 €", detail: { fr: "30–45 min, obligatoire pour les îles", en: "30–45 min, required to reach the islands" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Plongée à Bazaruto (2 plongées, équipement)", en: "Bazaruto diving (2 dives, equipment)" }, price: "70–110 €", detail: { fr: "Récifs intacts, visibilité 30m+", en: "Pristine reefs, 30m+ visibility" } },
          { label: { fr: "Safari Gorongosa (1 jour, 4x4, guide)", en: "Gorongosa safari (1 day, 4x4, guide)" }, price: "50–100 €", detail: { fr: "Entrée + accompagnement", en: "Entry + guide included" } },
          { label: { fr: "Excursion dhow inter-îles (demi-journée)", en: "Inter-island dhow trip (half day)" }, price: "30–60 €", detail: { fr: "Pique-nique sur plage déserte", en: "Picnic on a deserted beach" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + cuisine locale + chapa", en: "Guesthouse + local food + chapa" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–150 €/j", desc: { fr: "Lodge 3★ + restaurants + excursions", en: "3★ lodge + restaurants + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Maputo (2j) → Vilanculos / Bazaruto (5j) → Gorongosa (3j) → Beira ou vol retour (2j)",
        en: "Maputo (2d) → Vilanculos / Bazaruto (5d) → Gorongosa (3d) → Beira or return flight (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Maputo", en: "Return flight Europe–Maputo" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "300–500 €" },
            { label: { fr: "Transports locaux + speedboats", en: "Local transport + speedboats" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–350 €" },
            { label: { fr: "Plongée & safaris", en: "Diving & safaris" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 800 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Europe–Maputo", en: "Return flight Europe–Maputo" }, amount: "600–1 000 €" },
            { label: { fr: "Lodges (12 nuits)", en: "Lodges (12 nights)" }, amount: "900–2 000 €" },
            { label: { fr: "Vols intérieurs + speedboats", en: "Domestic flights + speedboats" }, amount: "400–700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Plongée, dhow, safaris", en: "Diving, dhow, safaris" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~12–14h via Johannesburg (South African, Kenya Airways) ou Addis-Abeba (Ethiopian). Pas de direct.", en: "~12–14h via Johannesburg (South African, Kenya Airways) or Addis Ababa (Ethiopian). No direct flight." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée gratuit (30 jours) pour les Français. Passeport valide 6 mois.", en: "Free visa on arrival (30 days) for French citizens. Passport valid for 6 months." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Metical (MZN). Dollars et euros acceptés dans les lodges. Espèces indispensables hors Maputo.", en: "Metical (MZN). Dollars and euros accepted at lodges. Cash essential outside Maputo." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Portugais (officiel). Anglais parlé dans les zones touristiques. Makua/Changana dans les villages.", en: "Portuguese (official). English spoken in tourist areas. Makua/Changana in villages." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/M (Sud-Africain, 3 broches rondes) — 220V. Adaptateur recommandé.", en: "Type C/M (South African, 3 round pins) — 220V. Adapter recommended." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen indispensable (paludisme présent). Vaccins fièvre jaune, hépatites recommandés. Eau en bouteille.", en: "Antimalarials essential (malaria present). Yellow fever and hepatitis vaccines recommended. Bottled water." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille uniquement.", en: "Not drinkable — bottled water only." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Cabo Delgado (extrême nord) : zone déconseillée formellement (conflit armé depuis 2017). Consulter les avis du MAE avant tout départ.", en: "Cabo Delgado (far north): strongly advised against (armed conflict since 2017). Check official travel advisories before departure." } },
  ],
};
