export const BENIN = {
  code: "BEN",
  numericId: 204,
  name: { fr: "Bénin", en: "Benin" },
  emoji: "🇧🇯",
  capital: { fr: "Porto-Novo", en: "Porto-Novo" },
  language: { fr: "Français, Fon, Yoruba, Bariba", en: "French, Fon, Yoruba, Bariba" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  description: {
    fr: "Le Bénin est le berceau du vaudou : Ouidah et sa route des esclaves menant au Door of No Return, les palais royaux d'Abomey (UNESCO) du royaume du Dahomey, la cité lacustre de Ganvié (50 000 personnes vivant sur l'eau), et la réserve de la Pendjari pour les lions, éléphants et guépards les plus accessibles d'Afrique de l'Ouest.",
    en: "Benin is the cradle of Vodun: Ouidah and its slave route leading to the Door of No Return, the Royal Palaces of Abomey (UNESCO) from the Kingdom of Dahomey, the stilt city of Ganvié (50,000 people living on the water), and the Pendjari reserve for some of the most accessible lions, elephants and cheetahs in West Africa.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour voyager : harmattan, ciel dégagé, routes praticables. Meilleure saison pour la Pendjari. Températures agréables 25–32°C.",
        en: "Ideal for travelling: harmattan winds, clear skies and passable roads. The best season for Pendjari. Pleasant temperatures of 25–32°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#ef4444",
      description: {
        fr: "Pluies régulières (100–200mm/mois), routes difficiles en brousse, Pendjari peu accessible. Moins favorable.",
        en: "Regular rainfall (100–200mm/month), difficult bush roads, and limited access to Pendjari. Less favourable overall.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "cotonou",
      name: "Cotonou",
      region: { fr: "Littoral (côte)", en: "Littoral (coast)" },
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 100, icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 50,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 80,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "⛅" },
      ],
    },
    {
      id: "natitingou",
      name: "Natitingou",
      region: { fr: "Atacora (nord)", en: "Atacora (north)" },
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 20,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 60,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 230, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Abomey — Palais royaux du Dahomey", en: "Abomey — Royal Palaces of Dahomey" },
      region: { fr: "Zou", en: "Zou" },
      description: {
        fr: "Les palais royaux d'Abomey (UNESCO) sont le témoignage du puissant royaume du Dahomey (XVIIe–XIXe s.) : bas-reliefs en argile racontant les exploits guerriers des rois, musée royal avec des trônes ornés de crânes d'ennemis, et l'histoire des Amazones du Dahomey — armée de femmes guerrières. Un des sites historiques les plus fascinants d'Afrique.",
        en: "The Royal Palaces of Abomey (UNESCO) bear witness to the powerful Kingdom of Dahomey (17th–19th centuries): clay bas-reliefs recounting the kings' military exploits, a royal museum with thrones decorated with enemies' skulls, and the story of the Dahomey Amazons — an army of women warriors. One of the most fascinating historical sites in Africa.",
      },
      wikipedia: "Abomey",
      tags: ["UNESCO", "Histoire", "Royauté", "Amazones"],
      mustSee: [
        { name: { fr: "Palais royal d'Abomey (UNESCO) — bas-reliefs et musée", en: "Royal Palace of Abomey (UNESCO) — bas-reliefs and museum" }, wikipedia: "Royal_Palaces_of_Abomey" },
        { name: { fr: "Histoire des Amazones du Dahomey (Agojie)", en: "History of the Dahomey Amazons (Agojie)" }, wikipedia: "Dahomey_Amazons" },
        { name: { fr: "Trône royal orné de crânes d'ennemis", en: "Royal throne adorned with enemies' skulls" }, wikipedia: "File:Trône du Ghézo, Fon, Bénin, Musée du quai Branly.jpg" },
        { name: { fr: "Temple Nesuxwé — culte des ancêtres royaux", en: "Nesuxwé Temple — worship of the royal ancestors" }, wikipedia: "File:Palais du TOHUIYO AGBALE ADANMANYIKPOWE 01.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Ouidah — Route des esclaves et vaudou", en: "Ouidah — Slave Route and Vodun" },
      region: { fr: "Atlantique", en: "Atlantique" },
      description: {
        fr: "Ouidah fut le plus grand port de la traite négrière d'Afrique de l'Ouest : la Route des Esclaves (3km) mène du centre-ville à la plage du Door of No Return, mémorial émouvant érigé à l'endroit où des millions d'Africains ont embarqué vers les Amériques. Ouidah est aussi la capitale mondiale du vaudou — cérémonies, temples de pythons et féticheurs.",
        en: "Ouidah was the largest slave-trading port in West Africa: the Slave Route (3 km) runs from the town centre to the beach at the Door of No Return, a moving memorial erected where millions of Africans were forced to embark for the Americas. Ouidah is also the world capital of Vodun — with ceremonies, python temples and traditional healers.",
      },
      wikipedia: "File:The city of Ouidah.jpg",
      tags: ["Histoire", "Vaudou", "Mémorial", "Traite"],
      mustSee: [
        { name: { fr: "Door of No Return — mémorial de la traite négrière", en: "Door of No Return — memorial to the slave trade" }, wikipedia: "File:Door of No Return Sign Ouidah (218406275).jpg" },
        { name: { fr: "Temple des Pythons — pythons sacrés en liberté", en: "Temple of Pythons — sacred free-roaming pythons" }, wikipedia: "File:Entrée du Temple des Pythons (Ouidah).jpg" },
        { name: { fr: "Forêt sacrée de Kpasse — vaudou et sculptures", en: "Sacred Forest of Kpasse — Vodun and sculptures" }, wikipedia: "File:Forêt sacrée de Kpassè 01.jpg" },
        { name: { fr: "Musée d'Histoire de Ouidah (ancienne fort portugaise)", en: "Ouidah History Museum (former Portuguese fort)" }, wikipedia: "File:Musee d'Histoire in Ouidah 2015.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Ganvié — La Venise de l'Afrique", en: "Ganvié — The Venice of Africa" },
      region: { fr: "Atlantique", en: "Atlantique" },
      description: {
        fr: "Ganvié est une cité lacustre de 50 000 habitants construite sur pilotis au milieu du lac Nokoué, fondée au XVIIe siècle par les Tofinu pour fuir les razzias des guerriers du Dahomey (qui ne pouvaient traverser l'eau). Marché flottant, pêcheurs en pirogue, maisons sur stilts — un mode de vie aquatique unique au monde.",
        en: "Ganvié is a lake city of 50,000 inhabitants built on stilts in the middle of Lake Nokoué, founded in the 17th century by the Tofinu to escape raids by Dahomey warriors (who could not cross the water). Floating markets, fishermen in pirogues, houses on stilts — a water-based way of life unlike anywhere else in the world.",
      },
      wikipedia: "File:The village of Ganvié on Lake Nokoué.jpg",
      tags: ["Lacustre", "Unique", "Pirogue", "Culture"],
      mustSee: [
        { name: { fr: "Tour en pirogue du village lacustre", en: "Pirogue tour of the stilt village" }, wikipedia: "File:The village of Ganvié on Lake Nokoué.jpg" },
        { name: { fr: "Marché flottant de Ganvié — commerce sur l'eau", en: "Ganvié floating market — trade on the water" }, wikipedia: "File:Benin village on water Ganvié.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Pendjari — Lions et éléphants", en: "Pendjari — Lions and Elephants" },
      region: { fr: "Atacora", en: "Atacora" },
      description: {
        fr: "La réserve de biosphère de la Pendjari est l'un des rares endroits d'Afrique de l'Ouest où observer lions, éléphants, hippopotames, buffles, guépards et hypopotames dans leur environnement naturel. Géré avec African Parks, le parc a vu ses populations animales exploser ces dernières années. Base à Natitingou.",
        en: "The Pendjari Biosphere Reserve is one of the few places in West Africa where you can see lions, elephants, hippos, buffalo, cheetahs and hippopotamuses in their natural habitat. Managed with African Parks, the park has seen its wildlife populations surge in recent years. Base yourself in Natitingou.",
      },
      wikipedia: "Pendjari_National_Park",
      tags: ["Safari", "Lions", "Éléphants", "Nature"],
      mustSee: [
        { name: { fr: "Safari jeep — lions, éléphants, guépards", en: "Jeep safari — lions, elephants, cheetahs" }, wikipedia: "File:Pendjari kuhantilopen.JPG" },
        { name: { fr: "Cascades de Tanougou", en: "Tanougou Falls" }, wikipedia: "File:Pendjari Fluss.JPG" },
        { name: { fr: "Villages Somba / Tata (maisons-château traditionnelles)", en: "Somba / Tata villages (traditional fortress houses)" }, wikipedia: "File:Alyssa K. Barry Koutammakou,Togo.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Bénin est l'une des destinations les plus abordables d'Afrique de l'Ouest. Le franc CFA arrimé à l'euro simplifie le budget. Cotonou est plus chère que l'intérieur du pays. Les safaris à la Pendjari restent raisonnables comparés à l'Afrique de l'Est.",
      en: "Benin is one of the most affordable destinations in West Africa. The CFA franc, pegged to the euro, makes budgeting easier. Cotonou is more expensive than the rest of the country. Safaris in Pendjari remain reasonably priced compared with East Africa.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / basic room" }, price: "15–35 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic air conditioning" } },
          { label: { fr: "Hôtel 3★ confort (Cotonou, Natitingou)", en: "Comfortable 3★ hotel (Cotonou, Natitingou)" }, price: "50–90 €", detail: { fr: "Clim, salle de bain, wifi", en: "Air conditioning, bathroom, Wi-Fi" } },
          { label: { fr: "Lodge Pendjari (African Parks)", en: "Pendjari lodge (African Parks)" }, price: "100–200 €", detail: { fr: "Pension complète, safari inclus", en: "Full board, safari included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Pâte de maïs / sauce arachide dans un buvette", en: "Corn paste / peanut sauce at a local eatery" }, price: "1–3 €", detail: { fr: "Cuisine locale typique", en: "Typical local cuisine" } },
          { label: { fr: "Restaurant mid-range Cotonou", en: "Mid-range restaurant in Cotonou" }, price: "8–18 €", detail: { fr: "Poisson braisé, menu complet", en: "Grilled fish, full meal" } },
          { label: { fr: "Restaurant gastronomique Cotonou", en: "Fine dining restaurant in Cotonou" }, price: "25–50 €", detail: { fr: "Cuisine française et locale", en: "French and local cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Zémidjan (moto-taxi) — trajet urbain", en: "Zémidjan (motorbike taxi) — urban ride" }, price: "0,30–1 €", detail: { fr: "Transport typique Cotonou", en: "Typical Cotonou transport" } },
          { label: { fr: "Bus / minibus (Cotonou–Abomey, 2h)", en: "Bus / minibus (Cotonou–Abomey, 2h)" }, price: "3–6 €", detail: { fr: "Inconfortable mais économique", en: "Uncomfortable but cheap" } },
          { label: { fr: "Location 4x4 avec chauffeur / journée", en: "4x4 rental with driver / day" }, price: "60–100 €", detail: { fr: "Indispensable pour Pendjari", en: "Essential for Pendjari" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite Palais d'Abomey (UNESCO)", en: "Abomey Palaces visit (UNESCO)" }, price: "5–10 €", detail: { fr: "Avec guide francophone", en: "With a French-speaking guide" } },
          { label: { fr: "Safari journée Pendjari (guide + jeep)", en: "Pendjari day safari (guide + jeep)" }, price: "50–80 €", detail: { fr: "Départ Natitingou", en: "Departure from Natitingou" } },
          { label: { fr: "Tour en pirogue Ganvié", en: "Ganvié pirogue tour" }, price: "10–20 €", detail: { fr: "2h depuis Abomey-Calavi", en: "2 hours from Abomey-Calavi" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + cuisine locale + zemidjan", en: "Guesthouse + local food + zemidjan" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Safari", en: "Safari" }, daily: "150–250 €/j", desc: { fr: "Lodge Pendjari pension complète + safaris", en: "Full-board Pendjari lodge + safaris" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Cotonou (2j) → Ouidah (1j) → Ganvié (1j) → Abomey (2j) → Natitingou / Pendjari (4j)",
        en: "Cotonou (2d) → Ouidah (1d) → Ganvié (1d) → Abomey (2d) → Natitingou / Pendjari (4d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Cotonou", en: "Return flight Paris–Cotonou" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–400 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "100–200 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–250 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entrance fees" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 500 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Cotonou", en: "Return flight Paris–Cotonou" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "700–1 100 €" },
            { label: { fr: "4x4 & chauffeur", en: "4x4 & driver" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings" }, amount: "350–600 €" },
            { label: { fr: "Safari Pendjari & excursions", en: "Pendjari safari & excursions" }, amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6–7h (Ethiopian Airlines via Addis, Air France via escale, Corsair direct saison)", en: "~6–7h (Ethiopian Airlines via Addis, Air France with a stopover, seasonal Corsair direct flight)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (~50€). Valable 30 jours.", en: "Visa required — e-Visa available online (~€50). Valid for 30 days." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces essentielles hors Cotonou.", en: "CFA franc (XOF). €1 = 655 XOF at a fixed rate. Cash is essential outside Cotonou." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel) — facile pour francophones. Fon et Yoruba en zone rurale.", en: "French (official) — easy for French speakers. Fon and Yoruba are common in rural areas." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable toute l'année.", en: "Yellow fever vaccination required. Antimalarial medication is essential year-round." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water is essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture acceptable dans les villes. Pendjari : réseau limité. SIM MTN locale recommandée.", en: "Decent coverage in cities. In Pendjari, the network is limited. A local MTN SIM is recommended." } },
  ],
};
