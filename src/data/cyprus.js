export const CYPRUS = {
  code: "CYP",
  numericId: 196,
  name: { fr: "Chypre", en: "Cyprus" },
  emoji: "🇨🇾",
  capital: { fr: "Nicosie", en: "Nicosia" },
  language: { fr: "Grec, Turc", en: "Greek, Turkish" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 55, budgetMid: 100,
    tripMin: 750, tripMid: 1500,
  },
  description: {
    fr: "Chypre est la troisième plus grande île de la Méditerranée, berceau légendaire d'Aphrodite et carrefour de civilisations entre Orient et Occident. Ses plages de sable doré, ses vestiges antiques classés UNESCO à Paphos, ses villages de montagne dans les Troodos et ses vins réputés en font une destination d'une richesse exceptionnelle. L'île reste divisée depuis 1974 entre la République de Chypre au sud et la partie nord sous contrôle turc.",
    en: "Cyprus is the third-largest island in the Mediterranean, the legendary birthplace of Aphrodite and a crossroads of civilizations between East and West. Its golden-sand beaches, UNESCO-listed ancient remains in Paphos, mountain villages in the Troodos and renowned wines make it an exceptionally rich destination. The island has remained divided since 1974 between the Republic of Cyprus in the south and the Turkish-controlled northern part.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June" },
      label: { fr: "Printemps chypriote", en: "Cypriot spring" },
      color: "#22c55e",
      description: {
        fr: "La meilleure période pour visiter Chypre : températures idéales (20–28°C), mer encore fraîche, fleurs sauvages en bloom et pas encore la chaleur écrasante de l'été. Idéal pour la randonnée dans les Troodos.",
        en: "The best time to visit Cyprus: ideal temperatures (20–28°C), a still-cool sea, wildflowers in bloom and none of summer's crushing heat yet. Perfect for hiking in the Troodos.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November" },
      label: { fr: "Arrière-saison", en: "Shoulder season" },
      color: "#f59e0b",
      description: {
        fr: "La mer reste chaude (24–26°C) et les températures baissent après l'été torride. Période idéale pour les visites culturelles, la route des vins et la randonnée en montagne sans la foule estivale.",
        en: "The sea stays warm (24–26°C) and temperatures drop after the scorching summer. An ideal time for cultural visits, the wine route and mountain hiking without the summer crowds.",
      },
      icon: "🍷",
    },
  ],
  weatherCities: [
    {
      id: "limassol",
      name: "Limassol",
      region: { fr: "District de Limassol", en: "Limassol District" },
      data: [
        { month: "Jan", temp: 13, rain: 90, icon: "⛅" },
        { month: "Fév", temp: 14, rain: 75, icon: "⛅" },
        { month: "Mar", temp: 16, rain: 55, icon: "☀️" },
        { month: "Avr", temp: 19, rain: 25, icon: "☀️" },
        { month: "Mai", temp: 23, rain: 10, icon: "☀️" },
        { month: "Jun", temp: 27, rain: 5, icon: "⛅" },
        { month: "Jul", temp: 31, rain: 5, icon: "⛅" },
        { month: "Aoû", temp: 32, rain: 5, icon: "🌡️" },
        { month: "Sep", temp: 29, rain: 10, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 40, icon: "☀️" },
        { month: "Nov", temp: 20, rain: 70, icon: "☀️" },
        { month: "Déc", temp: 15, rain: 95, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Paphos",
      region: { fr: "District de Paphos", en: "Paphos District" },
      description: {
        fr: "Paphos, ville côtière du sud-ouest de Chypre, est classée au patrimoine mondial de l'UNESCO pour ses extraordinaires mosaïques romaines des IIe–IVe siècles. Légendairement liée à Aphrodite, elle abrite le Rocher de l'Aphrodite (lieu de naissance de la déesse) et les Tombeaux des Rois, nécropole taillée dans la roche. La vieille ville et son port pittoresque sont idéaux pour les soirées.",
        en: "Paphos, a coastal town in southwestern Cyprus, is a UNESCO World Heritage Site for its extraordinary Roman mosaics from the 2nd to 4th centuries. Legend links it to Aphrodite, and it is home to Aphrodite's Rock, said to be the goddess's birthplace, as well as the Tombs of the Kings, a necropolis carved into the rock. The old town and its picturesque harbour are perfect for evening strolls.",
      },
      wikipedia: "Paphos",
      tags: ["UNESCO", "Antique", "Mosaïques", "Aphrodite", "Architecture"],
      mustSee: [
        { name: { fr: "Parc archéologique de Paphos — mosaïques romaines exceptionnelles classées UNESCO", en: "Paphos Archaeological Park — exceptional UNESCO-listed Roman mosaics" }, wikipedia: "Paphos_Archaeological_Park" },
        { name: { fr: "Tombeaux des Rois — nécropole hellénistique et romaine taillée dans la roche", en: "Tombs of the Kings — Hellenistic and Roman necropolis carved into the rock" }, wikipedia: "Tombs_of_the_Kings_(Paphos)" },
        { name: { fr: "Rocher d'Aphrodite (Petra tou Romiou) — lieu de naissance légendaire de la déesse", en: "Aphrodite's Rock (Petra tou Romiou) — the goddess's legendary birthplace" }, wikipedia: "Petra_tou_Romiou" },
        { name: { fr: "Château de Paphos — forteresse médiévale des Lusignan au bord du port", en: "Paphos Castle — medieval Lusignan fortress by the harbour" }, wikipedia: "Paphos_Castle" },
      ],
    },
    {
      id: 2,
      name: "Troodos",
      region: { fr: "District de Nicosie / Limassol", en: "Nicosia / Limassol Districts" },
      description: {
        fr: "Les montagnes du Troodos, avec leur point culminant le mont Olympe (1 952 m), offrent un contraste saisissant avec les plages côtières. La région abrite des monastères byzantins ornés de fresques dorées classés UNESCO, des sentiers de randonnée ombragés et des villages viticoles producteurs du célèbre Commandaria, plus vieux vin du monde encore produit.",
        en: "The Troodos Mountains, crowned by Mount Olympus (1,952 m), offer a striking contrast to the coastal beaches. The region is home to UNESCO-listed Byzantine monasteries adorned with golden frescoes, shaded hiking trails and wine villages producing the famous Commandaria, the oldest wine in the world still being made today.",
      },
      wikipedia: "Troodos_Mountains",
      tags: ["Montagne", "UNESCO", "Randonnée", "Vins", "Ski", "Nature"],
      mustSee: [
        { name: { fr: "Monastère de Kykkos — plus grand monastère de Chypre, icônes byzantines", en: "Kykkos Monastery — Cyprus's largest monastery, home to Byzantine icons" }, wikipedia: "Kykkos_Monastery" },
        { name: { fr: "Eglises byzantines du Troodos — 10 églises à fresques classées UNESCO", en: "Byzantine churches of Troodos — 10 frescoed churches listed by UNESCO" }, wikipedia: "Painted_Churches_in_the_Troodos_Region" },
        { name: { fr: "Mont Olympe — point culminant de Chypre avec vue panoramique", en: "Mount Olympus — Cyprus's highest peak with panoramic views" }, wikipedia: "File:Mountain Olympus snowy.JPG" },
        { name: { fr: "Route des vins de Krasochoria — villages vignerons autour de Limassol", en: "Krasochoria wine route — wine-growing villages around Limassol" }, wikipedia: "Commandaria" },
      ],
    },
    {
      id: 3,
      name: { fr: "Nicosie", en: "Nicosia" },
      region: { fr: "District de Nicosie", en: "Nicosia District" },
      description: {
        fr: "Nicosie est la dernière capitale divisée du monde, coupée en deux depuis 1974 par la 'ligne verte' de l'ONU séparant la République de Chypre et la partie nord turque. La vieille ville intra-muros vénitiens recèle des musées, des mosquées et des cafés dans les deux parties. Le passage du checkpoint Ledra Street permet de visiter les deux côtés de la ville.",
        en: "Nicosia is the world's last divided capital, split in two since 1974 by the UN's 'Green Line', which separates the Republic of Cyprus from the Turkish north. The old town within the Venetian walls is full of museums, mosques and cafés on both sides. Crossing at the Ledra Street checkpoint lets you visit both parts of the city.",
      },
      wikipedia: "Nicosia",
      tags: ["Ville", "Divisée", "Histoire", "Médiéval", "Architecture", "Plage"],
      mustSee: [
        { name: { fr: "Remparts vénitiens de Nicosie — enceinte étoilée du XVIe siècle", en: "Venetian walls of Nicosia — 16th-century star-shaped fortifications" }, wikipedia: "File:Venetian_walls_and_green_parks_Nicosia_Republic_of_Cyprus_Kypros.jpg" },
        { name: { fr: "Checkpoint Ledra Street — seul passage entre les deux parties de la ville", en: "Ledra Street checkpoint — the main crossing between the city's two sides" }, wikipedia: "Ledra_Street" },
        { name: { fr: "Musée de Chypre — collection archéologique nationale exceptionnelle", en: "Cyprus Museum — outstanding national archaeological collection" }, wikipedia: "Cyprus_Museum" },
        { name: { fr: "Cathédrale Sainte-Sophie (Selimiye) — gothique français reconverti en mosquée", en: "Saint Sophia Cathedral (Selimiye) — French Gothic church turned mosque" }, wikipedia: "Selimiye_Mosque,_Nicosia" },
      ],
    },
    {
      id: 4,
      name: { fr: "Limassol et route des vins", en: "Limassol and the wine route" },
      region: { fr: "District de Limassol", en: "Limassol District" },
      description: {
        fr: "Limassol est la deuxième ville de Chypre et son principal port commercial, connue pour sa vie nocturne animée et son carnaval. La route des vins dans l'arrière-pays du Limassol traverse des villages traditionnels producteurs du Commandaria, vin de dessert qui existe depuis l'Antiquité et est reconnu comme le plus vieux vin encore produit dans le monde.",
        en: "Limassol is Cyprus's second-largest city and main commercial port, known for its lively nightlife and carnival. The wine route in the Limassol hinterland winds through traditional villages producing Commandaria, a dessert wine that has existed since antiquity and is considered the oldest wine still produced in the world.",
      },
      wikipedia: "Limassol",
      tags: ["Gastronomie", "Vins", "Plages", "Nightlife"],
      mustSee: [
        { name: { fr: "Château médiéval de Limassol — où Richard Cœur de Lion épousa Bérengère", en: "Limassol medieval castle — where Richard the Lionheart married Berengaria" }, wikipedia: "Limassol_Castle" },
        { name: { fr: "Village de Lania — village viticole traditionnel au cœur des Troodos", en: "Lania village — a traditional wine village in the heart of the Troodos" }, wikipedia: "File:View of Laneia 2.jpg" },
        { name: { fr: "Plage de Kourion — ruines antiques avec vue sur la mer et théâtre gréco-romain", en: "Kourion beach — ancient ruins overlooking the sea and a Greco-Roman theatre" }, wikipedia: "Kourion" },
        { name: { fr: "Amathus — cité antique royale sur la côte est de Limassol", en: "Amathus — royal ancient city on Limassol's eastern coast" }, wikipedia: "Amathus" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Chypre est l'une des destinations les plus abordables de la Méditerranée. Les prix sont généralement inférieurs à ceux de la Grèce ou de l'Italie, avec une restauration locale très économique. Les stations balnéaires comme Ayia Napa pratiquent des prix plus élevés en été.",
      en: "Cyprus is one of the Mediterranean's most affordable destinations. Prices are generally lower than in Greece or Italy, with very budget-friendly local food. Seaside resorts such as Ayia Napa charge higher prices in summer.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Hostel dorm" }, price: "15–25 €", detail: { fr: "Quelques auberges dans les villes principales", en: "A handful of hostels in the main cities" } },
          { label: { fr: "Guesthouse ou hôtel budget", en: "Guesthouse or budget hotel" }, price: "45–75 €", detail: { fr: "Chambre double confortable, bon rapport qualité-prix", en: "Comfortable double room, good value for money" } },
          { label: { fr: "Hôtel confort ou resort balnéaire", en: "Comfort hotel or beach resort" }, price: "85–150 €", detail: { fr: "Hôtels avec piscine sur la côte, idéaux en famille", en: "Hotels with pools on the coast, ideal for families" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Meze chypriote (30 petits plats)", en: "Cypriot meze (30 small dishes)" }, price: "15–25 €/personne", detail: { fr: "Expérience gastronomique complète dans une taverne traditionnelle", en: "A full culinary experience in a traditional taverna" } },
          { label: { fr: "Souvlaki ou gyros au comptoir", en: "Counter-service souvlaki or gyros" }, price: "3–6 €", detail: { fr: "Repas rapide et savoureux, abordable partout", en: "Quick, tasty and affordable just about everywhere" } },
          { label: { fr: "Restaurant bord de mer dîner", en: "Seafront restaurant dinner" }, price: "22–40 €", detail: { fr: "Poissons grillés frais, mezé maritimes, vins locaux", en: "Fresh grilled fish, seafood meze and local wines" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus inter-villes (INTERCITY)", en: "Intercity bus (INTERCITY)" }, price: "4–8 €", detail: { fr: "Liaisons entre Nicosie, Limassol, Paphos et Larnaca", en: "Connections between Nicosia, Limassol, Paphos and Larnaca" } },
          { label: { fr: "Location de voiture (journée)", en: "Car rental (per day)" }, price: "25–50 €", detail: { fr: "Indispensable pour explorer les villages du Troodos et les plages isolées", en: "Essential for exploring Troodos villages and secluded beaches" } },
          { label: { fr: "Taxi aéroport Larnaca–Limassol", en: "Larnaca Airport–Limassol taxi" }, price: "40–55 €", detail: { fr: "Pas de train, taxi ou bus aéroport nécessaires", en: "No train service, so airport taxis or buses are necessary" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Parc archéologique de Paphos", en: "Paphos Archaeological Park" }, price: "4,50 €", detail: { fr: "Accès aux mosaïques romaines et site archéologique UNESCO", en: "Access to the Roman mosaics and UNESCO archaeological site" } },
          { label: { fr: "Croisière catamaran vers le Rocher d'Aphrodite", en: "Catamaran cruise to Aphrodite's Rock" }, price: "35–50 €", detail: { fr: "Demi-journée avec snorkeling et arrêt baignade", en: "Half-day trip with snorkelling and a swimming stop" } },
          { label: { fr: "Dégustation Commandaria en cave", en: "Commandaria winery tasting" }, price: "10–20 €", detail: { fr: "Visite d'une cave traditionnelle dans les villages du Troodos", en: "Visit to a traditional winery in the villages of the Troodos" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "55–75 €/j",
        desc: { fr: "Guesthouse abordable, mezé et souvlakis, bus, quelques sites archéologiques", en: "Affordable guesthouse, meze and souvlaki, buses, a few archaeological sites" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "100–150 €/j",
        desc: { fr: "Hôtel avec piscine, restaurants bord de mer, location de voiture, excursions", en: "Hotel with pool, seafront restaurants, car rental and excursions" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: { fr: "Larnaca – Nicosie – Paphos – Troodos – Limassol", en: "Larnaca – Nicosia – Paphos – Troodos – Limassol" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Larnaca", en: "Return flight Paris–Larnaca" }, amount: "100–180 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "105–175 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental" }, amount: "120–180 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "175–260 €" },
            { label: { fr: "Activités + sites archéologiques", en: "Activities + archaeological sites" }, amount: "50–80 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Larnaca", en: "Return flight Paris–Larnaca" }, amount: "150–250 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "490–700 €" },
            { label: { fr: "Transports locaux + location voiture", en: "Local transport + car rental" }, amount: "180–250 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "280–400 €" },
            { label: { fr: "Activités + excursions", en: "Activities + excursions" }, amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "3h30–4h de vol direct depuis CDG vers Larnaca ou Paphos", en: "3h30–4h direct flight from CDG to Larnaca or Paphos" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa requis — zone Schengen (République de Chypre), carte d'identité suffisante", en: "No visa required — Schengen area (Republic of Cyprus), national ID card is enough" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€) au sud — livre turque au nord (partie non reconnue)", en: "Euro (€) in the south — Turkish lira in the north (unrecognised part)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Grec au sud, turc au nord — l'anglais est très largement parlé partout", en: "Greek in the south, Turkish in the north — English is very widely spoken everywhere" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G (prise britannique à 3 broches) — adaptateur indispensable", en: "Type G (British 3-pin plug) — adapter essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — bonnes infrastructures médicales", en: "European Health Insurance Card (EHIC) accepted — good medical infrastructure" } },
    { icon: "🚗", label: { fr: "Conduite", en: "Driving" }, value: { fr: "Conduite à gauche — héritage britannique, volant à droite", en: "Drive on the left — a British legacy, with right-hand drive cars" } },
    { icon: "🌞", label: { fr: "Soleil", en: "Sunshine" }, value: { fr: "Plus de 300 jours de soleil par an — parmi les îles les plus ensoleillées de Méditerranée", en: "More than 300 days of sunshine a year — one of the sunniest islands in the Mediterranean" } },
  ],
};
