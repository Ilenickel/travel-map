export const COMOROS = {
  code: "COM",
  numericId: 174,
  name: { fr: "Comores", en: "Comoros", es: "Comoras", de: "Komoren" },
  emoji: "🇰🇲",
  capital: { fr: "Moroni", en: "Moroni", es: "Moroni", de: "Moroni" },
  language: { fr: "Comorien (shiKomori), Arabe, Français", en: "Comorian (shiKomori), Arabic, French", es: "Comorano (shiKomori), árabe, francés", de: "Komorisch (shiKomori), Arabisch, Französisch" },
  currency: { fr: "Franc comorien (KMF)", en: "Comorian franc (KMF)", es: "Franco comorano (KMF)", de: "Komoren-Franc (KMF)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1800, tripMid: 3500,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
    plongee: 2,
  },
  description: {
    fr: "Les Comores sont un archipel volcanique de l'océan Indien entre Madagascar et le Mozambique : le Karthala (2 361m, l'un des plus grands cratères actifs du monde), les plages de sable blanc et les récifs coralliens préservés, et une culture swahili-arabe unique. L'une des destinations les moins touristiques au monde, encore hors des sentiers battus — une Zanzibar sans les foules.", en: "The Comoros are a volcanic archipelago in the Indian Ocean between Madagascar and Mozambique: Karthala (2,361 m, home to one of the world's largest active craters), white-sand beaches, unspoilt coral reefs, and a unique Swahili-Arab culture. One of the least touristy destinations in the world, still far off the beaten track — a Zanzibar without the crowds.", es: "Las Comoras son un archipiélago volcánico del océano Índico entre Madagascar y Mozambique: el Karthala (2.361 m, uno de los cráteres activos más grandes del mundo), playas de arena blanca y arrecifes de coral bien conservados, y una cultura suajili-árabe única. Uno de los destinos menos turísticos del mundo, todavía fuera de los circuitos habituales: un Zanzíbar sin las multitudes.", de: "Die Komoren sind ein vulkanischer Archipel im Indischen Ozean zwischen Madagaskar und Mosambik: Karthala (2.361 m, einer der größten aktiven Krater der Welt), weiße Sandstrände und erhaltene Korallenriffe sowie eine einzigartige suaheli-arabische Kultur. Eines der am wenigsten touristischen Reiseziele der Welt, immer noch abseits der ausgetretenen Pfade – ein Sansibar ohne Menschenmassen.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre", de: "Mai – Oktober" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Temporada seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, températures agréables (24–28°C), mer calme côté ouest. Idéal pour plongée et randonnée Karthala.", en: "Best time to go: less rain, pleasant temperatures (24–28°C), and calm seas on the western coast. Ideal for diving and hiking on Karthala.", es: "Mejor época: menos lluvia, temperaturas agradables (24–28°C), mar en calma en la costa oeste. Ideal para el buceo y la caminata al Karthala.", de: "Beste Zeit: weniger Regen, angenehme Temperaturen (24–28°C), ruhige See auf der Westseite. Ideal zum Tauchen und Wandern in Karthala.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Mousson et cyclones", en: "Monsoon and cyclones", es: "Monzón y ciclones", de: "Monsun und Zyklone" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes, risque cyclonique, mer parfois houleuse. Températures chaudes mais humides (28–32°C).", en: "Heavy rainfall, cyclone risk, and sometimes rough seas. Hot but humid temperatures (28–32°C).", es: "Lluvias abundantes, riesgo de ciclones, mar a veces agitado. Temperaturas cálidas pero húmedas (28–32°C).", de: "Starker Regen, Zyklongefahr, manchmal raue See. Warme, aber feuchte Temperaturen (28–32°C).",
      },
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "moroni",
      name: "Moroni",
      region: { fr: "Grande Comore (Ngazidja)", en: "Grande Comore (Ngazidja)", es: "Gran Comora (Ngazidja)", de: "Grande Comore (Ngazidja)" },
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
      name: { fr: "Karthala — Le géant volcanique", en: "Karthala — The volcanic giant", es: "Karthala — El gigante volcánico", de: "Karthala – Der Vulkanriese" },
      region: { fr: "Grande Comore", en: "Grande Comore", es: "Gran Comora", de: "Grande Comore" },
      description: {
        fr: "Le Karthala (2 361m) est l'un des plus grands volcans actifs du monde en termes de superficie de caldeira (3 × 4 km). L'ascension de 2 jours traverse forêts tropicales, landes de bruyère géante et aboutit à un cratère fumant de dimensions spectaculaires. La dernière éruption majeure date de 2007. Un trekking peu balisé pour aventuriers.", en: "Karthala (2,361 m) is one of the world's largest active volcanoes in terms of caldera size (3 × 4 km). The 2-day ascent crosses tropical forest and giant heather moorland before reaching a smoking crater of spectacular scale. The last major eruption was in 2007. A lightly marked trek for adventurous travellers.", es: "El Karthala (2.361 m) es uno de los volcanes activos más grandes del mundo en superficie de caldera (3 × 4 km). La ascensión de 2 días atraviesa selva tropical y páramos de brezo gigante antes de llegar a un cráter humeante de dimensiones espectaculares. La última gran erupción fue en 2007. Un trekking poco señalizado para aventureros.", de: "Karthala (2.361 m) ist gemessen an der Caldera-Fläche (3 × 4 km) einer der größten aktiven Vulkane der Welt. Der zweitägige Aufstieg durchquert tropische Wälder, riesige Heidemoore und endet an einem rauchenden Krater von spektakulären Ausmaßen. Der letzte große Ausbruch fand im Jahr 2007 statt. Eine schlecht markierte Wanderung für Abenteurer.",
      },
      wikipedia: "File:Karthala volcano-Comoros.jpg",
      tags: ["Nature", "Randonnée", "Aventure"],
      mustSee: [
        { name: { fr: "Ascension Karthala (2 jours, guide obligatoire)", en: "Karthala ascent (2 days, guide required)", es: "Ascensión al Karthala (2 días, guía obligatorio)", de: "Karthala Ascension (2 Tage, Führer erforderlich)" }, wikipedia: "File:Karthala volcano-Comoros.jpg" },
        { name: { fr: "Forêt tropicale humide du flanc du Karthala", en: "Humid tropical forest on Karthala's slopes", es: "Selva tropical húmeda en las laderas del Karthala", de: "Tropischer Regenwald am Karthala-Hang" }, wikipedia: "File:Hiking to Karthala crater.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mohéli — Plages et tortues", en: "Mohéli — Beaches and turtles", es: "Mohéli — Playas y tortugas", de: "Mohéli – Strände und Schildkröten" },
      region: { fr: "Île de Mohéli (Mwali)", en: "Mohéli Island (Mwali)", es: "Isla de Mohéli (Mwali)", de: "Moheli-Insel (Mwali)" },
      description: {
        fr: "Mohéli est la plus petite et la moins peuplée des grandes îles comoriennes : son Parc Marin (le seul des Comores) protège les grandes plages où pondent les tortues vertes (de mai à septembre), les dauphins, les dugongs et les baleines à bosse (juillet–septembre). Une île quasi vierge, accessible par petit avion depuis Moroni.", en: "Mohéli is the smallest and least populated of the main Comorian islands: its Marine Park (the only one in the country) protects the long beaches where green turtles nest from May to September, as well as dolphins, dugongs and humpback whales (July–September). An almost untouched island, reached by small plane from Moroni.", es: "Mohéli es la más pequeña y menos poblada de las principales islas comoranas: su Parque Marino (el único de las Comoras) protege las largas playas donde anidan las tortugas verdes (de mayo a septiembre), los delfines, los dugongos y las ballenas jorobadas (julio–septiembre). Una isla casi virgen, accesible en avioneta desde Moroni.", de: "Mohéli ist die kleinste und am dünnsten besiedelte der großen komorischen Inseln: Ihr Meerespark (der einzige auf den Komoren) schützt die großen Strände, an denen grüne Schildkröten (von Mai bis September), Delfine, Dugongs und Buckelwale (Juli–September) nisten. Eine fast unberührte Insel, die von Moroni aus mit einem Kleinflugzeug erreichbar ist.",
      },
      wikipedia: "File:Mohéli-Beach.jpg",
      tags: ["Safari", "Nature"],
      mustSee: [
        { name: { fr: "Ponte des tortues vertes (mai–septembre, nuit)", en: "Green turtle nesting (May–September, at night)", es: "Desove de tortugas verdes (mayo–septiembre, de noche)", de: "Nisten der Grünen Meeresschildkröte (Mai–September, nachts)" }, wikipedia: "File:Green sea turtle (Chelonia mydas) Moorea.jpg" },
        { name: { fr: "Baleines à bosse (juillet–septembre)", en: "Humpback whales (July–September)", es: "Ballenas jorobadas (julio–septiembre)", de: "Buckelwale (Juli–September)" }, wikipedia: "File:Baleine à bosse et son baleineau 2.jpg" },
        { name: { fr: "Plage de Nioumachoua — parc marin snorkeling", en: "Nioumachoua Beach — marine park snorkelling", es: "Playa de Nioumachoua — esnórquel en el parque marino", de: "Nioumachoua Beach – Schnorchel-Meerespark" }, wikipedia: "File:Panorama mangrove de nioumachoua.jpg" },
        { name: { fr: "Dauphins et dugongs en snorkeling", en: "Snorkelling with dolphins and dugongs", es: "Delfines y dugongos haciendo esnórquel", de: "Delfine und Dugongs beim Schnorcheln" }, wikipedia: "File:010_Atlantic_bottlenose_dolphin_jumping_at_Pelican_point_Photo_by_Giles_Laurent.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Anjouan — Ylang-Ylang et forêts", en: "Anjouan — Ylang-ylang and forests", es: "Anjouan — Ylang-ylang y bosques", de: "Anjouan – Ylang-Ylang und Wälder" },
      region: { fr: "Île d'Anjouan (Ndzuani)", en: "Anjouan Island (Ndzuani)", es: "Isla de Anjouan (Ndzuani)", de: "Anjouan-Insel (Ndzuani)" },
      description: {
        fr: "Anjouan, la plus parfumée des îles, est l'ile aux fleurs d'ylang-ylang dont l'essence entre dans la composition de Chanel N°5. Elle abrite aussi la forêt de Moya, l'un des derniers refuges du Pigeon bleu des Comores en danger critique. Les falaises de Dzialandzé et la vieille ville de Mutsamudu (architecture swahili-arabe) sont d'autres attraits.", en: "Anjouan, the most fragrant of the islands, is the island of ylang-ylang flowers, whose essence is used in Chanel No. 5. It is also home to the Moya forest, one of the last refuges of the critically endangered Comoros blue pigeon. The cliffs of Dzialandzé and the old town of Mutsamudu (with its Swahili-Arab architecture) are other highlights.", es: "Anjouan, la más perfumada de las islas, es la isla de las flores de ylang-ylang, cuya esencia forma parte de la composición del Chanel N.º 5. Alberga también el bosque de Moya, uno de los últimos refugios de la paloma azul de las Comoras, en peligro crítico. Los acantilados de Dzialandzé y el casco antiguo de Mutsamudu (de arquitectura suajili-árabe) son otros atractivos.", de: "Anjouan, die wohlriechendste der Inseln, ist die Insel der Ylang-Ylang-Blüten, deren Essenz in der Komposition von Chanel N°5 verwendet wird. Hier befindet sich auch der Moya-Wald, einer der letzten Zufluchtsorte der vom Aussterben bedrohten Komoren-Blautaube. Weitere Attraktionen sind die Klippen von Dzialandzé und die Altstadt von Mutsamudu (swahili-arabische Architektur).",
      },
      wikipedia: "File:Anjouan.jpg",
      tags: ["Shopping", "Nature", "Architecture"],
      mustSee: [
        { name: { fr: "Distilleries d'ylang-ylang — Chanel N°5 dans sa source", en: "Ylang-ylang distilleries — Chanel No. 5 at the source", es: "Destilerías de ylang-ylang — el Chanel N.º 5 en su origen", de: "Ylang-Ylang-Destillerien – Chanel Nr. 5 in seiner Quelle" }, wikipedia: "File:Cananga odorata 02.JPG" },
        { name: { fr: "Forêt de Moya — réserve naturelle rare", en: "Moya Forest — a rare nature reserve", es: "Bosque de Moya — una reserva natural excepcional", de: "Moya Forest – seltenes Naturschutzgebiet" }, wikipedia: "File:Anjouan banner.jpg" },
        { name: { fr: "Mutsamudu — vieille ville swahili-arabe avec fort portugais", en: "Mutsamudu — Swahili-Arab old town with a Portuguese fort", es: "Mutsamudu — casco antiguo suajili-árabe con fuerte portugués", de: "Mutsamudu – alte suaheli-arabische Stadt mit portugiesischer Festung" }, wikipedia: "Mutsamudu" },
      ],
    },
    {
      id: 4,
      name: { fr: "Moroni — Médina arabe", en: "Moroni — Arab medina", es: "Moroni — Medina árabe", de: "Moroni – Arabische Medina" },
      region: { fr: "Grande Comore", en: "Grande Comore", es: "Gran Comora", de: "Grande Comore" },
      description: {
        fr: "Moroni, capitale des Comores, est une petite ville à l'ambiance swahili-arabe : sa médina de Badjanani avec ses ruelles blanches, ses mosquées aux minarets caractéristiques, le port de boutres (boutre = voilier arabe traditionnel), et le marché animé de la Volo-Volo. Un mélange d'Afrique, d'Arabie et de traditions malgaches.", en: "Moroni, the Comorian capital, is a small city with a Swahili-Arab feel: the Badjanani medina with its white lanes, mosques with distinctive minarets, the dhow harbour (a dhow is a traditional Arab sailing vessel), and the lively Volo-Volo market. A blend of Africa, Arabia and Malagasy traditions.", es: "Moroni, capital de las Comoras, es una pequeña ciudad de ambiente suajili-árabe: su medina de Badjanani con sus callejuelas blancas, sus mezquitas de minaretes característicos, el puerto de dhows (dhow = velero árabe tradicional) y el animado mercado de Volo-Volo. Una mezcla de África, Arabia y tradiciones malgaches.", de: "Moroni, die Hauptstadt der Komoren, ist eine kleine Stadt mit suaheli-arabischer Atmosphäre: die Badjanani-Medina mit ihren weißen Straßen, ihre Moscheen mit charakteristischen Minaretten, der Dhau-Hafen (Dhau = traditionelles arabisches Segelboot) und der lebhafte Volo-Volo-Markt. Eine Mischung aus afrikanischen, arabischen und madagassischen Traditionen.",
      },
      wikipedia: "Moroni,_Comoros",
      tags: ["Architecture", "Culture", "Plage"],
      mustSee: [
        { name: { fr: "Médina de Badjanani — ruelles blanches et mosquées", en: "Badjanani medina — white lanes and mosques", es: "Medina de Badjanani — callejuelas blancas y mezquitas", de: "Medina von Badjanani – weiße Straßen und Moscheen" }, wikipedia: "File:Ancienne Mosquee du Vendredi (10886895544).jpg" },
        { name: { fr: "Port des boutres — voiliers arabes traditionnels", en: "Dhow harbour — traditional Arab sailing vessels", es: "Puerto de los dhows — veleros árabes tradicionales", de: "Hafen der Dhaus – traditionelle arabische Segelboote" }, wikipedia: "File:Moroni Friday Mosque Comoros.jpg" },
        { name: { fr: "Ancienne mosquée du vendredi (XIIe s.)", en: "Old Friday Mosque (12th century)", es: "Antigua mezquita del viernes (s. XII)", de: "Ehemalige Freitagsmoschee (12. Jahrhundert)" }, wikipedia: "File:Mosque in Moroni, Comoros (3923026238).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Les Comores sont abordables mais peu développées touristiquement — l'hébergement de qualité est rare et cher pour ce qu'il offre. Les îles sont desservies par de petits avions inter-îles. La franc comorien est arrimé à l'euro.", en: "The Comoros are affordable but still underdeveloped for tourism — quality accommodation is scarce and expensive for what it offers. The islands are served by small inter-island planes. The Comorian franc is pegged to the euro.", es: "Las Comoras son asequibles pero aún poco desarrolladas turísticamente — el alojamiento de calidad es escaso y caro para lo que ofrece. Las islas se conectan mediante pequeños aviones interislas. El franco comorense está fijado al euro.", de: "Die Komoren sind erschwinglich, aber touristisch nicht sehr erschlossen – hochwertige Unterkünfte sind rar und teuer für das, was sie bieten. Die Inseln werden von kleinen Flugzeugen zwischen den Inseln angeflogen. Der komorische Franc ist an den Euro gekoppelt.",
    },
    currency: "KMF",
    exchangeRate: "1€ = 491 KMF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / homestay room", es: "Casa de huéspedes / habitación con familia", de: "Gästehaus / Gastfamilie" }, price: "20–40 €", detail: { fr: "Simple, sans grand confort", en: "Simple, with few comforts", es: "Sencillo, sin grandes comodidades", de: "Einfach, ohne großen Komfort" } },
          { label: { fr: "Hôtel 3★ Moroni (Retaj, Itsandra)", en: "3★ hotel in Moroni (Retaj, Itsandra)", es: "Hotel 3★ en Moroni (Retaj, Itsandra)", de: "Hotel 3★ Moroni (Retaj, Itsandra)" }, price: "80–130 €", detail: { fr: "Le meilleur disponible", en: "The best available", es: "Lo mejor disponible", de: "Das Beste, was es gibt" } },
          { label: { fr: "Eco-lodge Mohéli / Anjouan", en: "Eco-lodge in Mohéli / Anjouan", es: "Ecolodge en Mohéli / Anjouan", de: "Öko-Lodge Mohéli / Anjouan" }, price: "80–150 €", detail: { fr: "Demi-pension souvent incluse", en: "Half board often included", es: "Media pensión a menudo incluida", de: "Halbpension oft inklusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Langouste / poisson grillé restaurant local", en: "Lobster / grilled fish at a local restaurant", es: "Langosta / pescado a la parrilla en restaurante local", de: "Lokales Restaurant mit Hummer und gegrilltem Fisch" }, price: "8–15 €", detail: { fr: "Fruits de mer frais abondants", en: "Plenty of fresh seafood", es: "Abundante marisco fresco", de: "Reichlich frische Meeresfrüchte" } },
          { label: { fr: "Restaurant hôtel Moroni", en: "Hotel restaurant in Moroni", es: "Restaurante de hotel en Moroni", de: "Restauranthotel Moroni" }, price: "15–30 €", detail: { fr: "Cuisine comorienne et internationale", en: "Comorian and international cuisine", es: "Cocina comorense e internacional", de: "Komorische und internationale Küche" } },
          { label: { fr: "Samossas et achards dans la rue", en: "Street samosas and achards", es: "Samosas y achards callejeros", de: "Samosas und Gurken auf der Straße" }, price: "0,50–2 €", detail: { fr: "Street food typique", en: "Typical street food", es: "Comida callejera típica", de: "Typisches Streetfood" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Vol inter-îles (Moroni–Mohéli ou Anjouan)", en: "Inter-island flight (Moroni–Mohéli or Anjouan)", es: "Vuelo interislas (Moroni–Mohéli o Anjouan)", de: "Flug zwischen den Inseln (Moroni–Mohéli oder Anjouan)" }, price: "50–100 €", detail: { fr: "A/R, APCM, ICA — petits avions", en: "Return trip, APCM, ICA — small planes", es: "Ida y vuelta, APCM, ICA — aviones pequeños", de: "A/R, APCM, ICA – Kleinflugzeuge" } },
          { label: { fr: "Taxi-brousse local", en: "Local shared bush taxi", es: "Taxi-brousse local", de: "Lokales Buschtaxi" }, price: "2–10 €", detail: { fr: "Transport entre villages", en: "Transport between villages", es: "Transporte entre pueblos", de: "Transport zwischen Dörfern" } },
          { label: { fr: "Location 4x4 avec chauffeur / journée", en: "4x4 with driver / day", es: "Alquiler de 4x4 con chófer / día", de: "4x4-Vermietung mit Fahrer / Tag" }, price: "50–80 €", detail: { fr: "Pour Karthala et les villages", en: "For Karthala and village trips", es: "Para el Karthala y los pueblos", de: "Für Karthala und die Dörfer" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Ascension Karthala (guide, 2 jours, bivouac)", en: "Karthala ascent (guide, 2 days, bivouac)", es: "Ascenso al Karthala (guía, 2 días, vivac)", de: "Ascension Karthala (Führer, 2 Tage, Biwak)" }, price: "80–150 €", detail: { fr: "Tout compris", en: "All inclusive", es: "Todo incluido", de: "Alles inklusive" } },
          { label: { fr: "Plongée Mohéli parc marin (2 plongées)", en: "Diving in Mohéli Marine Park (2 dives)", es: "Buceo en el parque marino de Mohéli (2 inmersiones)", de: "Tauchen Mohéli Marine Park (2 Tauchgänge)" }, price: "70–100 €", detail: { fr: "Bouteilles + guide", en: "Tanks + guide", es: "Botellas + guía", de: "Flaschen + Anleitung" } },
          { label: { fr: "Tour tortues Mohéli (nuit, guide)", en: "Mohéli turtle tour (night, guide)", es: "Tour de tortugas en Mohéli (noche, guía)", de: "Mohéli-Schildkröten-Tour (Nacht, Führer)" }, price: "20–40 €", detail: { fr: "Mai–septembre uniquement", en: "May–September only", es: "Solo de mayo a septiembre", de: "Nur Mai–September" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + taxis", en: "Guesthouse + local food + taxis", es: "Casa de huéspedes + comida local + taxis", de: "Gästehaus + lokale Küche + Taxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "120–180 €/j", desc: { fr: "Hôtel 3★ + vols inter-îles + excursions guidées", en: "3★ hotel + inter-island flights + guided excursions", es: "Hotel 3★ + vuelos interislas + excursiones guiadas", de: "3★ Hotel + Flüge zwischen den Inseln + geführte Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "Moroni / Grande Comore (4j) → Karthala (2j) → Anjouan (3j) → Mohéli (3j)", en: "Moroni / Grande Comore (4d) → Karthala (2d) → Anjouan (3d) → Mohéli (3d)", es: "Moroni / Gran Comora (4d) → Karthala (2d) → Anjouan (3d) → Mohéli (3d)", de: "Moroni / Grande Comore (4 Tage) → Karthala (2 Tage) → Anjouan (3 Tage) → Mohéli (3 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Moroni (via Mayotte ou La Réunion)", en: "Return flight Paris–Moroni (via Mayotte or Réunion)", es: "Vuelo ida y vuelta Madrid–Moroni (vía Mayotte o Reunión)", de: "Hin- und Rückflug Paris–Moroni (über Mayotte oder Réunion)" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "400–600 €" },
            { label: { fr: "Vols inter-îles (2–3 trajets)", en: "Inter-island flights (2–3 legs)", es: "Vuelos interislas (2–3 trayectos)", de: "Flüge zwischen den Inseln (2–3 Fahrten)" }, amount: "200–400 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "250–400 €" },
            { label: { fr: "Guides & activités", en: "Guides & activities", es: "Guías y actividades", de: "Führer und Aktivitäten" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Moroni", en: "Return flight Paris–Moroni", es: "Vuelo ida y vuelta Madrid–Moroni", de: "Hin- und Rückflug Paris–Moroni" }, amount: "700–1 200 €" },
            { label: { fr: "Hôtels et lodges (12 nuits)", en: "Hotels and lodges (12 nights)", es: "Hoteles y lodges (12 noches)", de: "Hotels und Lodges (12 Nächte)" }, amount: "900–1 500 €" },
            { label: { fr: "Vols inter-îles + 4x4", en: "Inter-island flights + 4x4", es: "Vuelos interislas + 4x4", de: "Flüge zwischen den Inseln + 4x4" }, amount: "400–700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Plongée, tortues, Karthala", en: "Diving, turtles, Karthala", es: "Buceo, tortugas, Karthala", de: "Tauchen, Schildkröten, Karthala" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~12h via Mayotte (Air Austral) ou La Réunion + inter-îles, ou via Nairobi/Addis (Ethiopian)", en: "~12h via Mayotte (Air Austral) or Réunion + inter-island hop, or via Nairobi/Addis (Ethiopian)", es: "~12h vía Mayotte (Air Austral) o Reunión + interislas, o vía Nairobi/Adís Abeba (Ethiopian)", de: "ca. 12 Stunden über Mayotte (Air Austral) und Réunion mit einem Anschlussflug zwischen den Inseln oder über Nairobi beziehungsweise Addis Abeba (Ethiopian Airlines)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée (30€, 45 jours) pour ressortissants français. Passeport obligatoire.", en: "Visa on arrival (€30, 45 days) for French citizens. Passport required.", es: "Visado a la llegada (30€, 45 días) para ciudadanos españoles. Pasaporte obligatorio.", de: "Visum bei der Ankunft (30 €, 45 Tage) für französische Staatsangehörige. Reisepass erforderlich." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc comorien (KMF). 1€ = 491 KMF taux fixe. Espèces indispensables — peu de DAB.", en: "Comorian franc (KMF). €1 = 491 KMF at a fixed rate. Cash is essential — very few ATMs.", es: "Franco comorense (KMF). 1€ = 491 KMF tipo fijo. Efectivo indispensable — pocos cajeros.", de: "Komoren-Franc (KMF). 1€ = 491 KMF Festpreis. Notwendiges Bargeld – wenige Geldautomaten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Comorien (shiKomori) + Arabe. Français compris dans les administrations et hôtels.", en: "Comorian (shiKomori) + Arabic. French is understood in government offices and hotels.", es: "Comorense (shiKomori) + árabe. El francés se entiende en administraciones y hoteles.", de: "Komorisch (shiKomori) + Arabisch. Französisch in Verwaltungen und Hotels inbegriffen." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/E (européen) — 220V. Coupures de courant fréquentes.", en: "Type C/E (European) — 220V. Power cuts are frequent.", es: "Tipo C/E (europeo) — 220V. Cortes de luz frecuentes.", de: "Typ C/E (europäisch) – 220 V. Häufige Stromausfälle." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen indispensable (paludisme présent). Vaccin fièvre jaune recommandé. Eau en bouteille.", en: "Antimalarial medication is essential (malaria is present). Yellow fever vaccination recommended. Bottled water only.", es: "Antipalúdico indispensable (presencia de paludismo). Se recomienda vacuna contra la fiebre amarilla. Agua embotellada.", de: "Wesentlicher Antimalariawirkstoff (Malaria vorhanden). Gelbfieberimpfung empfohlen. Wasser in Flaschen." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not safe to drink — bottled water is essential.", es: "No potable — agua embotellada indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Couverture 3G/4G limitée aux zones urbaines. Interîles : couverture aléatoire. SIM Comoros Telecom.", en: "3G/4G coverage is mostly limited to urban areas. Between islands, coverage is patchy. Comoros Telecom SIM card.", es: "Cobertura 3G/4G limitada a zonas urbanas. Entre islas: cobertura irregular. SIM Comoros Telecom.", de: "3G/4G-Abdeckung ist auf städtische Gebiete beschränkt. Interislands: zufällige Abdeckung. SIM Comoros Telecom." } },
  ],
};
