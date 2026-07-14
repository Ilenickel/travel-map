export const COMOROS = {
  code: "COM",
  numericId: 174,
  name: { fr: "Comores", en: "Comoros", es: "Comoras" },
  emoji: "🇰🇲",
  capital: { fr: "Moroni", en: "Moroni", es: "Moroni" },
  language: { fr: "Comorien (shiKomori), Arabe, Français", en: "Comorian (shiKomori), Arabic, French", es: "Comorano (shiKomori), árabe, francés" },
  currency: { fr: "Franc comorien (KMF)", en: "Comorian franc (KMF)", es: "Franco comorano (KMF)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1800, tripMid: 3500,
  },
  description: {
    fr: "Les Comores sont un archipel volcanique de l'océan Indien entre Madagascar et le Mozambique : le Karthala (2 361m, l'un des plus grands cratères actifs du monde), les plages de sable blanc et les récifs coralliens préservés, et une culture swahili-arabe unique. L'une des destinations les moins touristiques au monde, encore hors des sentiers battus — une Zanzibar sans les foules.",
    en: "The Comoros are a volcanic archipelago in the Indian Ocean between Madagascar and Mozambique: Karthala (2,361 m, home to one of the world's largest active craters), white-sand beaches, unspoilt coral reefs, and a unique Swahili-Arab culture. One of the least touristy destinations in the world, still far off the beaten track — a Zanzibar without the crowds.",
    es: "Las Comoras son un archipiélago volcánico del océano Índico entre Madagascar y Mozambique: el Karthala (2.361 m, uno de los cráteres activos más grandes del mundo), playas de arena blanca y arrecifes de coral bien conservados, y una cultura suajili-árabe única. Uno de los destinos menos turísticos del mundo, todavía fuera de los circuitos habituales: un Zanzíbar sin las multitudes.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, températures agréables (24–28°C), mer calme côté ouest. Idéal pour plongée et randonnée Karthala.",
        en: "Best time to go: less rain, pleasant temperatures (24–28°C), and calm seas on the western coast. Ideal for diving and hiking on Karthala.",
        es: "Mejor época: menos lluvia, temperaturas agradables (24–28°C), mar en calma en la costa oeste. Ideal para el buceo y la caminata al Karthala.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo" },
      label: { fr: "Mousson et cyclones", en: "Monsoon and cyclones", es: "Monzón y ciclones" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes, risque cyclonique, mer parfois houleuse. Températures chaudes mais humides (28–32°C).",
        en: "Heavy rainfall, cyclone risk, and sometimes rough seas. Hot but humid temperatures (28–32°C).",
        es: "Lluvias abundantes, riesgo de ciclones, mar a veces agitado. Temperaturas cálidas pero húmedas (28–32°C).",
      },
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "moroni",
      name: "Moroni",
      region: { fr: "Grande Comore (Ngazidja)", en: "Grande Comore (Ngazidja)", es: "Gran Comora (Ngazidja)" },
      data: [
        { month: "Jan", temp: 28, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 300, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 280, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Karthala — Le géant volcanique", en: "Karthala — The volcanic giant", es: "Karthala — El gigante volcánico" },
      region: { fr: "Grande Comore", en: "Grande Comore", es: "Gran Comora" },
      description: {
        fr: "Le Karthala (2 361m) est l'un des plus grands volcans actifs du monde en termes de superficie de caldeira (3 × 4 km). L'ascension de 2 jours traverse forêts tropicales, landes de bruyère géante et aboutit à un cratère fumant de dimensions spectaculaires. La dernière éruption majeure date de 2007. Un trekking peu balisé pour aventuriers.",
        en: "Karthala (2,361 m) is one of the world's largest active volcanoes in terms of caldera size (3 × 4 km). The 2-day ascent crosses tropical forest and giant heather moorland before reaching a smoking crater of spectacular scale. The last major eruption was in 2007. A lightly marked trek for adventurous travellers.",
        es: "El Karthala (2.361 m) es uno de los volcanes activos más grandes del mundo en superficie de caldera (3 × 4 km). La ascensión de 2 días atraviesa selva tropical y páramos de brezo gigante antes de llegar a un cráter humeante de dimensiones espectaculares. La última gran erupción fue en 2007. Un trekking poco señalizado para aventureros.",
      },
      wikipedia: "File:Karthala volcano-Comoros.jpg",
      tags: ["Nature", "Randonnée", "Aventure"],
      mustSee: [
        { name: { fr: "Ascension Karthala (2 jours, guide obligatoire)", en: "Karthala ascent (2 days, guide required)", es: "Ascensión al Karthala (2 días, guía obligatorio)" }, wikipedia: "File:Karthala volcano-Comoros.jpg" },
        { name: { fr: "Forêt tropicale humide du flanc du Karthala", en: "Humid tropical forest on Karthala's slopes", es: "Selva tropical húmeda en las laderas del Karthala" }, wikipedia: "File:Hiking to Karthala crater.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mohéli — Plages et tortues", en: "Mohéli — Beaches and turtles", es: "Mohéli — Playas y tortugas" },
      region: { fr: "Île de Mohéli (Mwali)", en: "Mohéli Island (Mwali)", es: "Isla de Mohéli (Mwali)" },
      description: {
        fr: "Mohéli est la plus petite et la moins peuplée des grandes îles comoriennes : son Parc Marin (le seul des Comores) protège les grandes plages où pondent les tortues vertes (de mai à septembre), les dauphins, les dugongs et les baleines à bosse (juillet–septembre). Une île quasi vierge, accessible par petit avion depuis Moroni.",
        en: "Mohéli is the smallest and least populated of the main Comorian islands: its Marine Park (the only one in the country) protects the long beaches where green turtles nest from May to September, as well as dolphins, dugongs and humpback whales (July–September). An almost untouched island, reached by small plane from Moroni.",
        es: "Mohéli es la más pequeña y menos poblada de las principales islas comoranas: su Parque Marino (el único de las Comoras) protege las largas playas donde anidan las tortugas verdes (de mayo a septiembre), los delfines, los dugongos y las ballenas jorobadas (julio–septiembre). Una isla casi virgen, accesible en avioneta desde Moroni.",
      },
      wikipedia: "File:Mohéli-Beach.jpg",
      tags: ["Safari", "Nature"],
      mustSee: [
        { name: { fr: "Ponte des tortues vertes (mai–septembre, nuit)", en: "Green turtle nesting (May–September, at night)", es: "Desove de tortugas verdes (mayo–septiembre, de noche)" }, wikipedia: "File:Green sea turtle (Chelonia mydas) Moorea.jpg" },
        { name: { fr: "Baleines à bosse (juillet–septembre)", en: "Humpback whales (July–September)", es: "Ballenas jorobadas (julio–septiembre)" }, wikipedia: "File:Baleine à bosse et son baleineau 2.jpg" },
        { name: { fr: "Plage de Nioumachoua — parc marin snorkeling", en: "Nioumachoua Beach — marine park snorkelling", es: "Playa de Nioumachoua — esnórquel en el parque marino" }, wikipedia: "File:Panorama mangrove de nioumachoua.jpg" },
        { name: { fr: "Dauphins et dugongs en snorkeling", en: "Snorkelling with dolphins and dugongs", es: "Delfines y dugongos haciendo esnórquel" }, wikipedia: "File:010_Atlantic_bottlenose_dolphin_jumping_at_Pelican_point_Photo_by_Giles_Laurent.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Anjouan — Ylang-Ylang et forêts", en: "Anjouan — Ylang-ylang and forests", es: "Anjouan — Ylang-ylang y bosques" },
      region: { fr: "Île d'Anjouan (Ndzuani)", en: "Anjouan Island (Ndzuani)", es: "Isla de Anjouan (Ndzuani)" },
      description: {
        fr: "Anjouan, la plus parfumée des îles, est l'ile aux fleurs d'ylang-ylang dont l'essence entre dans la composition de Chanel N°5. Elle abrite aussi la forêt de Moya, l'un des derniers refuges du Pigeon bleu des Comores en danger critique. Les falaises de Dzialandzé et la vieille ville de Mutsamudu (architecture swahili-arabe) sont d'autres attraits.",
        en: "Anjouan, the most fragrant of the islands, is the island of ylang-ylang flowers, whose essence is used in Chanel No. 5. It is also home to the Moya forest, one of the last refuges of the critically endangered Comoros blue pigeon. The cliffs of Dzialandzé and the old town of Mutsamudu (with its Swahili-Arab architecture) are other highlights.",
        es: "Anjouan, la más perfumada de las islas, es la isla de las flores de ylang-ylang, cuya esencia forma parte de la composición del Chanel N.º 5. Alberga también el bosque de Moya, uno de los últimos refugios de la paloma azul de las Comoras, en peligro crítico. Los acantilados de Dzialandzé y el casco antiguo de Mutsamudu (de arquitectura suajili-árabe) son otros atractivos.",
      },
      wikipedia: "File:Anjouan.jpg",
      tags: ["Shopping", "Nature", "Architecture"],
      mustSee: [
        { name: { fr: "Distilleries d'ylang-ylang — Chanel N°5 dans sa source", en: "Ylang-ylang distilleries — Chanel No. 5 at the source", es: "Destilerías de ylang-ylang — el Chanel N.º 5 en su origen" }, wikipedia: "File:Cananga odorata 02.JPG" },
        { name: { fr: "Forêt de Moya — réserve naturelle rare", en: "Moya Forest — a rare nature reserve", es: "Bosque de Moya — una reserva natural excepcional" }, wikipedia: "File:Anjouan banner.jpg" },
        { name: { fr: "Mutsamudu — vieille ville swahili-arabe avec fort portugais", en: "Mutsamudu — Swahili-Arab old town with a Portuguese fort", es: "Mutsamudu — casco antiguo suajili-árabe con fuerte portugués" }, wikipedia: "Mutsamudu" },
      ],
    },
    {
      id: 4,
      name: { fr: "Moroni — Médina arabe", en: "Moroni — Arab medina", es: "Moroni — Medina árabe" },
      region: { fr: "Grande Comore", en: "Grande Comore", es: "Gran Comora" },
      description: {
        fr: "Moroni, capitale des Comores, est une petite ville à l'ambiance swahili-arabe : sa médina de Badjanani avec ses ruelles blanches, ses mosquées aux minarets caractéristiques, le port de boutres (boutre = voilier arabe traditionnel), et le marché animé de la Volo-Volo. Un mélange d'Afrique, d'Arabie et de traditions malgaches.",
        en: "Moroni, the Comorian capital, is a small city with a Swahili-Arab feel: the Badjanani medina with its white lanes, mosques with distinctive minarets, the dhow harbour (a dhow is a traditional Arab sailing vessel), and the lively Volo-Volo market. A blend of Africa, Arabia and Malagasy traditions.",
        es: "Moroni, capital de las Comoras, es una pequeña ciudad de ambiente suajili-árabe: su medina de Badjanani con sus callejuelas blancas, sus mezquitas de minaretes característicos, el puerto de dhows (dhow = velero árabe tradicional) y el animado mercado de Volo-Volo. Una mezcla de África, Arabia y tradiciones malgaches.",
      },
      wikipedia: "Moroni,_Comoros",
      tags: ["Architecture", "Culture", "Plage"],
      mustSee: [
        { name: { fr: "Médina de Badjanani — ruelles blanches et mosquées", en: "Badjanani medina — white lanes and mosques", es: "Medina de Badjanani — callejuelas blancas y mezquitas" }, wikipedia: "File:Ancienne Mosquee du Vendredi (10886895544).jpg" },
        { name: { fr: "Port des boutres — voiliers arabes traditionnels", en: "Dhow harbour — traditional Arab sailing vessels", es: "Puerto de los dhows — veleros árabes tradicionales" }, wikipedia: "File:Moroni Friday Mosque Comoros.jpg" },
        { name: { fr: "Ancienne mosquée du vendredi (XIIe s.)", en: "Old Friday Mosque (12th century)", es: "Antigua mezquita del viernes (s. XII)" }, wikipedia: "File:Mosque in Moroni, Comoros (3923026238).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Les Comores sont abordables mais peu développées touristiquement — l'hébergement de qualité est rare et cher pour ce qu'il offre. Les îles sont desservies par de petits avions inter-îles. La franc comorien est arrimé à l'euro.",
      en: "The Comoros are affordable but still underdeveloped for tourism — quality accommodation is scarce and expensive for what it offers. The islands are served by small inter-island planes. The Comorian franc is pegged to the euro.",
      es: "Las Comoras son asequibles pero aún poco desarrolladas turísticamente — el alojamiento de calidad es escaso y caro para lo que ofrece. Las islas se conectan mediante pequeños aviones interislas. El franco comorense está fijado al euro.",
    },
    currency: "KMF",
    exchangeRate: "1€ = 491 KMF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / homestay room", es: "Casa de huéspedes / habitación con familia" }, price: "20–40 €", detail: { fr: "Simple, sans grand confort", en: "Simple, with few comforts", es: "Sencillo, sin grandes comodidades" } },
          { label: { fr: "Hôtel 3★ Moroni (Retaj, Itsandra)", en: "3★ hotel in Moroni (Retaj, Itsandra)", es: "Hotel 3★ en Moroni (Retaj, Itsandra)" }, price: "80–130 €", detail: { fr: "Le meilleur disponible", en: "The best available", es: "Lo mejor disponible" } },
          { label: { fr: "Eco-lodge Mohéli / Anjouan", en: "Eco-lodge in Mohéli / Anjouan", es: "Ecolodge en Mohéli / Anjouan" }, price: "80–150 €", detail: { fr: "Demi-pension souvent incluse", en: "Half board often included", es: "Media pensión a menudo incluida" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Langouste / poisson grillé restaurant local", en: "Lobster / grilled fish at a local restaurant", es: "Langosta / pescado a la parrilla en restaurante local" }, price: "8–15 €", detail: { fr: "Fruits de mer frais abondants", en: "Plenty of fresh seafood", es: "Abundante marisco fresco" } },
          { label: { fr: "Restaurant hôtel Moroni", en: "Hotel restaurant in Moroni", es: "Restaurante de hotel en Moroni" }, price: "15–30 €", detail: { fr: "Cuisine comorienne et internationale", en: "Comorian and international cuisine", es: "Cocina comorense e internacional" } },
          { label: { fr: "Samossas et achards dans la rue", en: "Street samosas and achards", es: "Samosas y achards callejeros" }, price: "0,50–2 €", detail: { fr: "Street food typique", en: "Typical street food", es: "Comida callejera típica" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Vol inter-îles (Moroni–Mohéli ou Anjouan)", en: "Inter-island flight (Moroni–Mohéli or Anjouan)", es: "Vuelo interislas (Moroni–Mohéli o Anjouan)" }, price: "50–100 €", detail: { fr: "A/R, APCM, ICA — petits avions", en: "Return trip, APCM, ICA — small planes", es: "Ida y vuelta, APCM, ICA — aviones pequeños" } },
          { label: { fr: "Taxi-brousse local", en: "Local shared bush taxi", es: "Taxi-brousse local" }, price: "2–10 €", detail: { fr: "Transport entre villages", en: "Transport between villages", es: "Transporte entre pueblos" } },
          { label: { fr: "Location 4x4 avec chauffeur / journée", en: "4x4 with driver / day", es: "Alquiler de 4x4 con chófer / día" }, price: "50–80 €", detail: { fr: "Pour Karthala et les villages", en: "For Karthala and village trips", es: "Para el Karthala y los pueblos" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Ascension Karthala (guide, 2 jours, bivouac)", en: "Karthala ascent (guide, 2 days, bivouac)", es: "Ascenso al Karthala (guía, 2 días, vivac)" }, price: "80–150 €", detail: { fr: "Tout compris", en: "All inclusive", es: "Todo incluido" } },
          { label: { fr: "Plongée Mohéli parc marin (2 plongées)", en: "Diving in Mohéli Marine Park (2 dives)", es: "Buceo en el parque marino de Mohéli (2 inmersiones)" }, price: "70–100 €", detail: { fr: "Bouteilles + guide", en: "Tanks + guide", es: "Botellas + guía" } },
          { label: { fr: "Tour tortues Mohéli (nuit, guide)", en: "Mohéli turtle tour (night, guide)", es: "Tour de tortugas en Mohéli (noche, guía)" }, price: "20–40 €", detail: { fr: "Mai–septembre uniquement", en: "May–September only", es: "Solo de mayo a septiembre" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + taxis", en: "Guesthouse + local food + taxis", es: "Casa de huéspedes + comida local + taxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "120–180 €/j", desc: { fr: "Hôtel 3★ + vols inter-îles + excursions guidées", en: "3★ hotel + inter-island flights + guided excursions", es: "Hotel 3★ + vuelos interislas + excursiones guiadas" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días" },
      route: {
        fr: "Moroni / Grande Comore (4j) → Karthala (2j) → Anjouan (3j) → Mohéli (3j)",
        en: "Moroni / Grande Comore (4d) → Karthala (2d) → Anjouan (3d) → Mohéli (3d)",
        es: "Moroni / Gran Comora (4d) → Karthala (2d) → Anjouan (3d) → Mohéli (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Moroni (via Mayotte ou La Réunion)", en: "Return flight Paris–Moroni (via Mayotte or Réunion)", es: "Vuelo ida y vuelta Madrid–Moroni (vía Mayotte o Reunión)" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)" }, amount: "400–600 €" },
            { label: { fr: "Vols inter-îles (2–3 trajets)", en: "Inter-island flights (2–3 legs)", es: "Vuelos interislas (2–3 trayectos)" }, amount: "200–400 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "250–400 €" },
            { label: { fr: "Guides & activités", en: "Guides & activities", es: "Guías y actividades" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Moroni", en: "Return flight Paris–Moroni", es: "Vuelo ida y vuelta Madrid–Moroni" }, amount: "700–1 200 €" },
            { label: { fr: "Hôtels et lodges (12 nuits)", en: "Hotels and lodges (12 nights)", es: "Hoteles y lodges (12 noches)" }, amount: "900–1 500 €" },
            { label: { fr: "Vols inter-îles + 4x4", en: "Inter-island flights + 4x4", es: "Vuelos interislas + 4x4" }, amount: "400–700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes" }, amount: "400–700 €" },
            { label: { fr: "Plongée, tortues, Karthala", en: "Diving, turtles, Karthala", es: "Buceo, tortugas, Karthala" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~12h via Mayotte (Air Austral) ou La Réunion + inter-îles, ou via Nairobi/Addis (Ethiopian)", en: "~12h via Mayotte (Air Austral) or Réunion + inter-island hop, or via Nairobi/Addis (Ethiopian)", es: "~12h vía Mayotte (Air Austral) o Reunión + interislas, o vía Nairobi/Adís Abeba (Ethiopian)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "Visa à l'arrivée (30€, 45 jours) pour ressortissants français. Passeport obligatoire.", en: "Visa on arrival (€30, 45 days) for French citizens. Passport required.", es: "Visado a la llegada (30€, 45 días) para ciudadanos españoles. Pasaporte obligatorio." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Franc comorien (KMF). 1€ = 491 KMF taux fixe. Espèces indispensables — peu de DAB.", en: "Comorian franc (KMF). €1 = 491 KMF at a fixed rate. Cash is essential — very few ATMs.", es: "Franco comorense (KMF). 1€ = 491 KMF tipo fijo. Efectivo indispensable — pocos cajeros." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Comorien (shiKomori) + Arabe. Français compris dans les administrations et hôtels.", en: "Comorian (shiKomori) + Arabic. French is understood in government offices and hotels.", es: "Comorense (shiKomori) + árabe. El francés se entiende en administraciones y hoteles." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type C/E (européen) — 220V. Coupures de courant fréquentes.", en: "Type C/E (European) — 220V. Power cuts are frequent.", es: "Tipo C/E (europeo) — 220V. Cortes de luz frecuentes." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Antipaludéen indispensable (paludisme présent). Vaccin fièvre jaune recommandé. Eau en bouteille.", en: "Antimalarial medication is essential (malaria is present). Yellow fever vaccination recommended. Bottled water only.", es: "Antipalúdico indispensable (presencia de paludismo). Se recomienda vacuna contra la fiebre amarilla. Agua embotellada." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not safe to drink — bottled water is essential.", es: "No potable — agua embotellada indispensable." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil" }, value: { fr: "Couverture 3G/4G limitée aux zones urbaines. Interîles : couverture aléatoire. SIM Comoros Telecom.", en: "3G/4G coverage is mostly limited to urban areas. Between islands, coverage is patchy. Comoros Telecom SIM card.", es: "Cobertura 3G/4G limitada a zonas urbanas. Entre islas: cobertura irregular. SIM Comoros Telecom." } },
  ],
};
