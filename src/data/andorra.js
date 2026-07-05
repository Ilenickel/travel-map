export const ANDORRA = {
  code: "AND",
  numericId: 20,
  name: { fr: "Andorre", en: "Andorra" },
  emoji: "🇦🇩",
  capital: { fr: "Andorre-la-Vieille", en: "Andorra la Vella" },
  language: { fr: "Catalan", en: "Catalan" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70, budgetMid: 130,
    tripMin: 900, tripMid: 1700,
  },
  description: {
    fr: "Andorre est une principauté co-dirigée par la France et l'Espagne, nichée dans les Pyrénées à plus de 1 000 mètres d'altitude. Malgré sa superficie de 468 km², elle offre un domaine skiable parmi les plus grands de la péninsule ibérique avec Grandvalira, des randonnées estivales spectaculaires et un statut de paradis du shopping hors taxes qui attire des millions de visiteurs chaque année. Des églises romanes du XIe siècle témoignent d'un riche patrimoine médiéval.",
    en: "Andorra is a principality co-ruled by France and Spain, nestled in the Pyrenees at over 1,000 metres of altitude. Despite its small size of 468 km², it boasts one of the largest ski areas in the Iberian Peninsula with Grandvalira, spectacular summer hiking, and a tax-free shopping paradise status that draws millions of visitors every year. Eleventh-century Romanesque churches bear witness to a rich medieval heritage.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Saison ski", en: "Ski season" },
      color: "#22c55e",
      description: {
        fr: "La haute saison pour le ski avec le domaine Grandvalira et ses 210 km de pistes. Enneigement garanti à haute altitude, villages animés, shopping détaxé et ambiance montagne incomparable dans les Pyrénées.",
        en: "The high season for skiing with the Grandvalira ski area and its 210 km of slopes. Guaranteed snow at high altitude, lively villages, tax-free shopping and an unmatched mountain atmosphere in the Pyrenees.",
      },
      icon: "⛷️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Randonnée estivale", en: "Summer hiking" },
      color: "#f59e0b",
      description: {
        fr: "L'été dévoile les sommets pyrénéens, les lacs de montagne et des sentiers de grande randonnée à couper le souffle. Le Cirque de Tristaina, les lacs del Pessons et les crêtes frontalières offrent des panoramas exceptionnels.",
        en: "Summer reveals the Pyrenean peaks, mountain lakes, and breathtaking long-distance trails. The Tristaina Cirque, the Pessons lakes and the border ridges offer exceptional panoramas.",
      },
      icon: "🥾",
    },
  ],
  weatherCities: [
    {
      id: "andorra_la_vella",
      name: { fr: "Andorre-la-Vieille", en: "Andorra la Vella" },
      region: "Parròquia d'Andorra la Vella",
      data: [
        { month: "Jan", temp: -1, rain: 60, icon: "❄️" },
        { month: "Fév", temp: 1, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 5, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 9, rain: 80, icon: "⛅" },
        { month: "Mai", temp: 13, rain: 90, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 70, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 55, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 16, rain: 75, icon: "☀️" },
        { month: "Oct", temp: 11, rain: 80, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 70, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Grandvalira",
      region: { fr: "Parròquies d'Encamp et Canillo", en: "Parishes of Encamp and Canillo" },
      description: {
        fr: "Grandvalira est le plus grand domaine skiable de la péninsule ibérique avec 210 km de pistes réparties sur 6 paroisses et 2 stations (Pas de la Casa et Soldeu). Les pistes bien entretenues, les ESF locales et les nombreux restaurants d'altitude en font une destination ski prisée des familles françaises et espagnoles. L'altitude garantit un bon enneigement de décembre à avril.",
        en: "Grandvalira is the largest ski area in the Iberian Peninsula, with 210 km of slopes spread across 6 parishes and 2 resorts (Pas de la Casa and Soldeu). Well-groomed runs, local ski schools and numerous mountain restaurants make it a popular ski destination for French and Spanish families. The altitude guarantees good snow cover from December to April.",
      },
      wikipedia: "File:Grandvalira ski resort, Andorra5.jpg",
      tags: ["Ski", "Sport d'hiver", "Montagne", "Stations"],
      mustSee: [
        { name: { fr: "Soldeu — station principale avec pistes débutants et intermédiaires", en: "Soldeu — main resort with beginner and intermediate slopes" }, wikipedia: "Soldeu" },
        { name: { fr: "Pas de la Casa — station frontalière avec shopping et nightlife animé", en: "Pas de la Casa — border resort with shopping and lively nightlife" }, wikipedia: "File:Pas de la Casa (1).jpg" },
        { name: { fr: "Grau Roig — secteur tranquille avec belle vue sur les pistes", en: "Grau Roig — quiet sector with beautiful views over the slopes" }, wikipedia: "Grau_Roig" },
        { name: { fr: "Piste géante Avet — slalom géant de Coupe du Monde à Soldeu", en: "Avet giant slope — World Cup giant slalom run in Soldeu" }, wikipedia: "File:Grandvalira ski resort, Andorra6.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Andorre-la-Vieille", en: "Andorra la Vella" },
      region: "Parròquia d'Andorra la Vella",
      description: {
        fr: "La capitale d'Andorre est la plus haute capitale d'Europe à 1 023 m d'altitude. Malgré sa petite taille, elle offre un contraste saisissant entre sa vieille ville médiévale autour de la Casa de la Vall et son centre commercial moderne réputé pour le shopping hors taxes. L'Avinguda Meritxell concentre les grandes marques à des prix défiant toute concurrence.",
        en: "Andorra's capital is the highest capital in Europe, at 1,023 m of altitude. Despite its small size, it offers a striking contrast between its medieval old town around the Casa de la Vall and its modern shopping district renowned for tax-free deals. Avinguda Meritxell is lined with major brands at unbeatable prices.",
      },
      wikipedia: "Andorra_la_Vella",
      tags: ["Ville", "Shopping", "Médiéval", "Duty-free"],
      mustSee: [
        { name: { fr: "Casa de la Vall — Parlement historique du XVIe siècle, monument symbolique", en: "Casa de la Vall — historic 16th-century Parliament, a symbolic landmark" }, wikipedia: "Casa_de_la_Vall" },
        { name: { fr: "Église Sant Esteve — église romane au cœur de la vieille ville", en: "Sant Esteve Church — Romanesque church in the heart of the old town" }, wikipedia: "File:Església de Sant Esteve de Bixessarri - 2.jpg" },
        { name: { fr: "Caldea — complexe thermal et spa pyrénéen, plus grand spa d'Europe du Sud", en: "Caldea — Pyrenean thermal spa complex, the largest in Southern Europe" }, wikipedia: "Caldea" },
        { name: { fr: "Avinguda Meritxell — boulevard des shopping duty-free", en: "Avinguda Meritxell — the duty-free shopping boulevard" }, wikipedia: "File:Andorra la vella felul.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Patrimoine roman", en: "Romanesque heritage" },
      region: { fr: "Parròquies de La Massana et Ordino", en: "Parishes of La Massana and Ordino" },
      description: {
        fr: "Andorre conserve un remarquable patrimoine d'églises romanes du XIe–XIIIe siècles, témoignages de sa fondation médiévale. Sant Joan de Caselles, Sant Climent de Pal et Sant Martí de la Cortinada ornées de fresques médiévales authentiques sont accessibles facilement. Le musée national de l'art roman de Catalogne (MNAC) à Barcelone conserve les plus belles œuvres déplacées.",
        en: "Andorra preserves a remarkable heritage of 11th–13th-century Romanesque churches, testament to its medieval origins. Sant Joan de Caselles, Sant Climent de Pal and Sant Martí de la Cortinada, adorned with authentic medieval frescoes, are all easily accessible. The National Museum of Catalan Romanesque Art (MNAC) in Barcelona holds the finest relocated works.",
      },
      wikipedia: "File:QUERALBS - St. Jaume.JPG",
      tags: ["Roman", "Patrimoine", "Médiéval", "Fresques"],
      mustSee: [
        { name: { fr: "Sant Joan de Caselles — tour roman du XIIe siècle avec retable polychrome", en: "Sant Joan de Caselles — 12th-century Romanesque tower with a polychrome altarpiece" }, wikipedia: "Sant_Joan_de_Caselles" },
        { name: { fr: "Sant Climent de Pal — église romane avec clocher carré typique", en: "Sant Climent de Pal — Romanesque church with a typical square bell tower" }, wikipedia: "File:Sant Climent de Pal 2017.jpg" },
        { name: { fr: "Sant Martí de la Cortinada — fresques romanes conservées in situ", en: "Sant Martí de la Cortinada — Romanesque frescoes preserved in situ" }, wikipedia: "File:2013._San_Martí_de_La_Cortinada._Andorra_37.jpg" },
        { name: { fr: "Musée national de l'Andorre à Ordino — histoire et culture andorrane", en: "National Museum of Andorra in Ordino — Andorran history and culture" }, wikipedia: "Ordino" },
      ],
    },
    {
      id: 4,
      name: { fr: "Randonnées et lacs de montagne", en: "Hiking and mountain lakes" },
      region: { fr: "Tout le pays", en: "Throughout the country" },
      description: {
        fr: "En été, Andorre se transforme en paradis de la randonnée avec plus de 600 km de sentiers balisés sillonnant les Pyrénées. Le Cirque de Tristaina avec ses trois lacs glaciaires, les lacs del Pessons en cirque grandiose, et le pic de Coma Pedrosa (2 943 m, point culminant) offrent des expériences inoubliables à des niveaux de difficulté variés.",
        en: "In summer, Andorra becomes a hiking paradise with over 600 km of marked trails winding through the Pyrenees. The Tristaina Cirque with its three glacial lakes, the grand cirque of the Pessons lakes, and Coma Pedrosa peak (2,943 m, the country's highest point) offer unforgettable experiences at varying levels of difficulty.",
      },
      wikipedia: "File:Andorra l Vella-20100128-RM-165853.jpg",
      tags: ["Randonnée", "Lacs", "Montagne", "Nature"],
      mustSee: [
        { name: { fr: "Cirque de Tristaina — trois lacs glaciaires à 2 300 m, randonnée facile", en: "Tristaina Cirque — three glacial lakes at 2,300 m, an easy hike" }, wikipedia: "File:Tristaina 50 Cirque.jpg" },
        { name: { fr: "Lacs del Pessons — cirque de 8 lacs à 2 400 m", en: "Pessons lakes — a cirque of 8 lakes at 2,400 m" }, wikipedia: "File:Circ dels Pessons (Encamp) - 12.jpg" },
        { name: { fr: "Pic de Coma Pedrosa — point culminant d'Andorre (2 943 m)", en: "Coma Pedrosa peak — Andorra's highest point (2,943 m)" }, wikipedia: "Coma_Pedrosa" },
        { name: { fr: "Vallée d'Ordino — village typique andorran avec musée de la forêt", en: "Ordino valley — a typical Andorran village with a forest museum" }, wikipedia: "Ordino" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Andorre est connue pour son shopping hors taxes sur l'alcool, le tabac, l'électronique et les parfums. Les hébergements sont abordables hors saison ski. En hiver, les stations pratiquent des tarifs élevés. La restauration reste dans des prix raisonnables pour des Pyrénées.",
      en: "Andorra is known for its tax-free shopping on alcohol, tobacco, electronics and perfume. Accommodation is affordable outside ski season. In winter, resort prices rise sharply. Dining out remains reasonably priced for the Pyrenees.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / gîte de montagne (dortoir)", en: "Mountain hostel / lodge (dorm)" }, price: "20–35 €", detail: { fr: "Refuges et auberges idéaux pour les randonneurs", en: "Refuges and hostels ideal for hikers" } },
          { label: { fr: "Hôtel 2–3 étoiles hors saison", en: "2–3 star hotel off season" }, price: "55–90 €", detail: { fr: "Bonne offre à Andorre-la-Vieille et dans les paroisses", en: "Good options in Andorra la Vella and the parishes" } },
          { label: { fr: "Hôtel ski en haute saison (décembre–mars)", en: "Ski hotel in high season (December–March)" }, price: "100–180 €", detail: { fr: "Prix plus élevés en période de neige et week-ends", en: "Higher prices during snow season and weekends" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Boulangerie ou snack", en: "Bakery or snack" }, price: "5–10 €", detail: { fr: "Croissants, sandwichs et coca andorrane typiques", en: "Croissants, sandwiches and typical Andorran flatbread" } },
          { label: { fr: "Restaurant montagne, menu midi", en: "Mountain restaurant, lunch menu" }, price: "12–20 €", detail: { fr: "Escudella (pot-au-feu catalan), trinxat, grillades de montagne", en: "Escudella (Catalan stew), trinxat, mountain grilled meats" } },
          { label: { fr: "Restaurant dîner ou chalet d'altitude", en: "Dinner restaurant or mountain chalet" }, price: "22–40 €", detail: { fr: "Cuisine pyrénéenne, raclette, fondues et charcuteries locales", en: "Pyrenean cuisine, raclette, fondue and local cured meats" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus depuis Toulouse ou Barcelone", en: "Bus from Toulouse or Barcelona" }, price: "10–25 €", detail: { fr: "Navettes régulières depuis les gares TGV les plus proches", en: "Regular shuttles from the nearest high-speed rail stations" } },
          { label: { fr: "Bus national andorran (L1–L5)", en: "Andorran national bus (L1–L5)" }, price: "1–3 €", detail: { fr: "Réseau couvrant toutes les paroisses de la principauté", en: "Network covering all parishes of the principality" } },
          { label: { fr: "Forfait ski Grandvalira (journée)", en: "Grandvalira ski pass (day)" }, price: "39–50 €", detail: { fr: "Tarifs réduits en réservant à l'avance en ligne", en: "Discounted rates for online advance booking" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Caldea (spa thermal)", en: "Caldea (thermal spa)" }, price: "35–55 €", detail: { fr: "3h d'accès aux bassins thermaux et jacuzzis extérieurs", en: "3 hours' access to thermal pools and outdoor hot tubs" } },
          { label: { fr: "Location vélo de montagne (VTT)", en: "Mountain bike rental" }, price: "25–40 €", detail: { fr: "VTT électrique disponible pour les pistes estivales", en: "Electric mountain bikes available for summer trails" } },
          { label: { fr: "Visite distillerie ou cave à vins", en: "Distillery or winery tour" }, price: "8–15 €", detail: { fr: "Dégustation de whisky ou vins des Pyrénées", en: "Tasting of whisky or Pyrenean wines" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "70–100 €/j",
        desc: { fr: "Auberge ou refuge, repas simples, bus national, randonnées gratuites", en: "Hostel or refuge, simple meals, national bus, free hiking" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "130–190 €/j",
        desc: { fr: "Hôtel confort, restaurants de montagne, forfait ski ou spa, shopping", en: "Comfort hotel, mountain restaurants, ski pass or spa, shopping" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "5 jours", en: "5 days" },
      route: { fr: "Andorre-la-Vieille – Grandvalira – Ordino – Randonnées", en: "Andorra la Vella – Grandvalira – Ordino – Hiking" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "450 – 650 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Transport A/R depuis Toulouse ou Barcelone", en: "Round-trip transport from Toulouse or Barcelona" }, amount: "30–70 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)" }, amount: "80–140 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "15–25 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "160–240 €" },
            { label: { fr: "Activités (ski ou randonnée + spa)", en: "Activities (skiing or hiking + spa)" }, amount: "80–140 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Transport A/R depuis Paris en voiture ou avion Toulouse", en: "Round-trip transport from Paris by car or flight via Toulouse" }, amount: "80–180 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)" }, amount: "320–480 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "20–40 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "280–400 €" },
            { label: { fr: "Activités (forfait ski + spa Caldea)", en: "Activities (ski pass + Caldea spa)" }, amount: "200–280 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Pas d'aéroport — accès par route depuis Toulouse (3h) ou Barcelone (3h)", en: "No airport — accessible by road from Toulouse (3h) or Barcelona (3h)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa requis — non membre de l'UE mais accord de libre circulation avec France et Espagne", en: "No visa required — not an EU member but has a free movement agreement with France and Spain" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€) — TVA très réduite, paradis du shopping hors taxes", en: "Euro (€) — very low VAT, a tax-free shopping paradise" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Catalan (officiel) — espagnol et français très largement parlés", en: "Catalan (official) — Spanish and French widely spoken" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (identique à la France) — aucun adaptateur nécessaire", en: "Type C/F (same as France) — no adapter needed" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie non valable — assurance voyage recommandée", en: "European health insurance card not valid — travel insurance recommended" } },
    { icon: "🛒", label: { fr: "Shopping", en: "Shopping" }, value: { fr: "Alcool, tabac, parfums, électronique et vêtements à prix très réduits hors taxes", en: "Alcohol, tobacco, perfume, electronics and clothing at heavily discounted tax-free prices" } },
    { icon: "⛷️", label: { fr: "Ski", en: "Skiing" }, value: { fr: "Grandvalira : 210 km de pistes, 1 900–2 640 m d'altitude, parmi les plus abordables des Pyrénées", en: "Grandvalira: 210 km of slopes, 1,900–2,640 m altitude, among the most affordable in the Pyrenees" } },
  ],
};
