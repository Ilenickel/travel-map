export const SERBIA = {
  code: "SRB",
  numericId: 688,
  name: { fr: "Serbie", en: "Serbia" },
  emoji: "🇷🇸",
  capital: { fr: "Belgrade", en: "Belgrade" },
  language: { fr: "Serbe", en: "Serbian" },
  currency: { fr: "Dinar serbe (RSD)", en: "Serbian dinar (RSD)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1500,
  },
  description: {
    fr: "La Serbie est la grande inconnue des Balkans : Belgrade, ville à la fois balkanique et européenne, avec sa forteresse de Kalemegdan, sa scène nocturne légendaire sur les bateaux-discothèques de la Sava (splavovi), les monastères médiévaux d'Oplenac et Žiča dans la campagne serbe, Novi Sad et son festival EXIT, les gorges des Portes de Fer (Đerdap) sur le Danube.",
    en: "Serbia is the great unknown of the Balkans: Belgrade, a city both Balkan and European, with its Kalemegdan Fortress, its legendary nightlife on the Sava river's floating clubs (splavovi), the medieval monasteries of Oplenac and Žiča in the Serbian countryside, Novi Sad and its EXIT festival, and the Iron Gates gorge (Đerdap) on the Danube.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Octobre", en: "April – October" },
      label: { fr: "Printemps, été et automne", en: "Spring, summer and autumn" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : juin-août (22–28°C, terrasses, festival EXIT à Novi Sad), mai et septembre-octobre (moins chaud, festivals à Belgrade). Automne magnifique dans les gorges.",
        en: "Best time to visit: June–August (22–28°C, terraces, EXIT festival in Novi Sad), May and September–October (cooler, festivals in Belgrade). Beautiful autumn in the gorges.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February" },
      label: { fr: "Hiver festif", en: "Festive winter" },
      color: "#f59e0b",
      description: {
        fr: "Belgrade se réchauffe avec les bars et clubs couverts. Les fêtes orthodoxes (Noël le 7 janvier, Slava) sont très animées. Températures 0 à -5°C.",
        en: "Belgrade warms up with indoor bars and clubs. Orthodox holidays (Christmas on 7 January, Slava) are very lively. Temperatures 0 to -5°C.",
      },
      icon: "🕯️",
    },
  ],

  weatherCities: [
    {
      id: "belgrade",
      name: "Belgrade",
      region: { fr: "Confluent Sava-Danube (capitale)", en: "Sava-Danube confluence (capital)" },
      data: [
        { month: "Jan", temp:  1, rain: 50,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  9, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 14, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 70,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 80,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 50,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  7, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 55,  icon: "❄️" },
      ],
    },
    {
      id: "novi_sad",
      name: "Novi Sad",
      region: { fr: "Voïvodine (nord, plaine pannonnienne)", en: "Vojvodina (north, Pannonian plain)" },
      data: [
        { month: "Jan", temp:  0, rain: 40,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 14, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 50,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 12, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  1, rain: 45,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Belgrade — Forteresse et vie nocturne", en: "Belgrade — Fortress and nightlife" },
      region: { fr: "Confluence Sava-Danube", en: "Sava-Danube confluence" },
      description: {
        fr: "Belgrade est la capitale la plus animée des Balkans : la forteresse de Kalemegdan (IIe s., reconstruite par les Romains, Byzantins, Ottomans et Autrichiens) domine la confluence Sava-Danube, tandis que la rue Skadarlija (quartier bohème du XIXe s.) regorge de kafanas aux sons des orchestres tziganes. Les splavovi (bateaux-discothèques) sur la Sava ont fait la légende nocturne de la ville.",
        en: "Belgrade is the liveliest capital in the Balkans: Kalemegdan Fortress (2nd century, rebuilt by the Romans, Byzantines, Ottomans and Austrians) overlooks the Sava-Danube confluence, while Skadarlija street (a 19th-century bohemian quarter) is packed with kafanas resounding with Gypsy orchestras. The splavovi (floating clubs) on the Sava built the city's nightlife legend.",
      },
      wikipedia: "Belgrade",
      tags: ["Forteresse", "Vie nocturne", "Bohème", "Danube", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Forteresse de Kalemegdan — 2 000 ans d'histoire au-dessus du Danube", en: "Kalemegdan Fortress — 2,000 years of history above the Danube" }, wikipedia: "Belgrade_Fortress" },
        { name: { fr: "Skadarlija — rue bohème aux kafanas et orchestres tziganes", en: "Skadarlija — bohemian street of kafanas and Gypsy orchestras" }, wikipedia: "Skadarlija" },
        { name: { fr: "Splavovi (bateaux-discothèques) sur la Sava — vie nocturne unique", en: "Splavovi (floating clubs) on the Sava — unique nightlife" }, wikipedia: "File:Splavovi (7).jpeg" },
        { name: { fr: "Église Saint-Sava — l'une des plus grandes cathédrales orthodoxes du monde", en: "Church of Saint Sava — one of the largest Orthodox cathedrals in the world" }, wikipedia: "File:Temple Saint Sava crop.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Novi Sad — Capitale culturelle et EXIT", en: "Novi Sad — Cultural capital and EXIT" },
      region: { fr: "Voïvodine", en: "Vojvodina" },
      description: {
        fr: "Novi Sad, capitale européenne de la culture 2022, est une ville universitaire et multiculturelle : la forteresse de Petrovaradin (XVIII s.) dominant le Danube accueille chaque juillet le festival EXIT (150 000 personnes, l'un des meilleurs festivals de musique d'Europe). Le centre-ville AustroHongrois et le quartier des artistes de Štrand sur le Danube en font une ville très agréable.",
        en: "Novi Sad, European Capital of Culture 2022, is a multicultural university town: Petrovaradin Fortress (18th century), overlooking the Danube, hosts the EXIT festival every July (150,000 people, one of Europe's best music festivals). Its Austro-Hungarian city centre and the artists' Štrand district on the Danube make it a very pleasant city.",
      },
      wikipedia: "Novi_Sad",
      tags: ["Festival", "Culture", "Forteresse", "Danube", "Ville", "Architecture"],
      mustSee: [
        { name: { fr: "Forteresse de Petrovaradin — 'Gibraltar sur le Danube'", en: "Petrovaradin Fortress — the 'Gibraltar on the Danube'" }, wikipedia: "Petrovaradin_Fortress" },
        { name: { fr: "Festival EXIT (juillet) — électro, rock, world music sous la forteresse", en: "EXIT Festival (July) — electro, rock, world music under the fortress" }, wikipedia: "File:Exit festival, 2021.jpg" },
        { name: { fr: "Quartier piéton de Dunavska — cafés et terrasses bordant le Danube", en: "Dunavska pedestrian district — cafés and terraces along the Danube" }, wikipedia: "Novi_Sad" },
        { name: { fr: "Plage Štrand sur le Danube — la plage la plus populaire de Serbie", en: "Štrand beach on the Danube — Serbia's most popular beach" }, wikipedia: "File:Plaža_Štrand_-_panoramio.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Gorges des Portes de Fer — Đerdap", en: "Iron Gates gorge — Đerdap" },
      region: { fr: "Est (frontière roumaine)", en: "East (Romanian border)" },
      description: {
        fr: "Les Portes de Fer (Đerdap) sont les gorges les plus spectaculaires du Danube : 100km de falaises calcaires de 300m de hauteur sculptées par le fleuve sur la frontière serbo-roumaine. La sculpture rupestre de Decebal (l'une des plus grandes d'Europe, 55m de haut) et les vestiges romains de Trajan (Tabula Traiana) sont visibles depuis le bateau. Patrimoine naturel et historique exceptionnel.",
        en: "The Iron Gates (Đerdap) are the Danube's most spectacular gorge: 100km of 300m-high limestone cliffs carved by the river along the Serbian-Romanian border. The Decebalus rock sculpture (one of the largest in Europe, 55m tall) and the Roman remains of Trajan (Tabula Traiana) are visible from the boat. Exceptional natural and historical heritage.",
      },
      wikipedia: "Iron_Gates",
      tags: ["Gorges", "Danube", "Romain", "Nature"],
      mustSee: [
        { name: { fr: "Gorges du Đerdap depuis un bateau — falaises de 300m", en: "Đerdap gorge from a boat — 300m cliffs" }, wikipedia: "Đerdap_National_Park" },
        { name: { fr: "Tête de Decebal sculptée dans la falaise (55m, la plus grande d'Europe)", en: "Decebalus's head carved into the cliff (55m, the largest in Europe)" }, wikipedia: "File:Rock Sculpture of Decebalus (26845769043).jpg" },
        { name: { fr: "Tabula Traiana — inscription romaine de 101-103 apr. J.-C. sur la falaise", en: "Tabula Traiana — Roman inscription from 101–103 AD on the cliff" }, wikipedia: "Tabula_Traiana" },
        { name: { fr: "Lepenski Vir — site néolithique de 9 000 ans dans la gorge", en: "Lepenski Vir — a 9,000-year-old Neolithic site in the gorge" }, wikipedia: "Lepenski_Vir" },
      ],
    },
    {
      id: 4,
      name: { fr: "Monastères médiévaux de Serbie", en: "Medieval monasteries of Serbia" },
      region: { fr: "Šumadija et vallées", en: "Šumadija and valleys" },
      description: {
        fr: "La Serbie compte plus de 200 monastères médiévaux orthodoxes — dont plusieurs candidats à l'UNESCO. Žiča (XIIIe s., rouge sang, couronnement des rois serbes), Studenica (XIIe s., marbres blancs, école médiévale de peinture), et Mileševa (XIIIe s., fresque de l'Ange Blanc — transmise en 1969 dans le premier satellite de communication européen) sont les plus remarquables.",
        en: "Serbia has over 200 medieval Orthodox monasteries — several of them UNESCO candidates. Žiča (13th century, blood-red, coronation site of Serbian kings), Studenica (12th century, white marble, medieval painting school), and Mileševa (13th century, the White Angel fresco — broadcast in 1969 via the first European communications satellite) are the most remarkable.",
      },
      wikipedia: "File:Studenica monastery (Manastir Studenica) - by Pudelek.jpg",
      tags: ["Monastères", "Orthodoxe", "Médiéval", "Fresque", "UNESCO", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Monastère de Studenica (UNESCO) — marbres blancs XIIe siècle", en: "Studenica Monastery (UNESCO) — 12th-century white marble" }, wikipedia: "File:Studenica monastery, 09.jpg" },
        { name: { fr: "Monastère de Žiča — rouge sang, couronnement des rois serbes", en: "Žiča Monastery — blood-red, coronation site of Serbian kings" }, wikipedia: "File:Manastir Žiča (by Pudelek).JPG" },
        { name: { fr: "Fresque de l'Ange Blanc de Mileševa — première image transmise par satellite", en: "The White Angel fresco at Mileševa — the first image ever broadcast by satellite" }, wikipedia: "File:Beli_andjeo2.jpg" },
        { name: { fr: "Monastère de Sopoćani (UNESCO) — fresques byzantines du XIIIe s.", en: "Sopoćani Monastery (UNESCO) — 13th-century Byzantine frescoes" }, wikipedia: "Sopoćani" },
      ],
    },
    {
      id: 5,
      name: { fr: "Kopaonik & Zlatibor", en: "Kopaonik & Zlatibor" },
      region: { fr: "Serbie centrale", en: "Central Serbia" },
      description: {
        fr: "Les montagnes du centre de la Serbie réunissent la grande station de ski de Kopaonik et le plateau authentique de Zlatibor. Villages traditionnels, train historique du Sargan et réserves naturelles spectaculaires y attendent les visiteurs. Un concentré de nature et de traditions serbes.",
        en: "The mountains of central Serbia bring together the major Kopaonik ski resort and the authentic Zlatibor plateau. Traditional villages, the historic Šargan railway and spectacular nature reserves await visitors. A concentrate of Serbian nature and traditions.",
      },
      wikipedia: "Kopaonik",
      tags: ["Ski", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Kopaonik — plus grande station serbe", en: "Kopaonik — Serbia's largest resort" }, wikipedia: "Kopaonik" },
        { name: { fr: "Zlatibor — plateau et village authentique", en: "Zlatibor — plateau and authentic village" }, wikipedia: "Zlatibor" },
        { name: { fr: "Train de Sargan", en: "Šargan railway" }, wikipedia: "File:Sarganska osmica 2.jpg" },
        { name: { fr: "Uvac — gorges et pélicans frisés", en: "Uvac — gorge and Dalmatian pelicans" }, wikipedia: "Uvac_Special_Nature_Reserve" },
        { name: { fr: "Drvengrad — village de Kusturica", en: "Drvengrad — Kusturica's village" }, wikipedia: "File:View from Drvengrad, Serbia.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Serbie est l'une des moins chères d'Europe : Belgrade rivalise avec Bucarest pour le titre de capitale d'Europe le plus abordable. Le dinar fluctue légèrement — les euros sont acceptés dans de nombreux hôtels.",
      en: "Serbia is one of the cheapest countries in Europe: Belgrade rivals Bucharest for the title of most affordable European capital. The dinar fluctuates slightly — euros are accepted in many hotels.",
    },
    currency: "RSD",
    exchangeRate: "1€ ≈ 117 RSD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hostel Belgrade (dortoir ou chambre)", en: "Hostel in Belgrade (dorm or room)" }, price: "15–35 €", detail: { fr: "Nombreux et très bien situés", en: "Numerous and very well located" } },
          { label: { fr: "Hôtel 3★ Belgrade centre", en: "3★ hotel, central Belgrade" }, price: "50–90 €", detail: { fr: "Bon confort, souvent petit-déj inclus", en: "Good comfort, breakfast often included" } },
          { label: { fr: "Appartement Airbnb (Belgrade, 2 pers.)", en: "Airbnb apartment (Belgrade, 2 people)" }, price: "40–80 €", detail: { fr: "Souvent mieux situé qu'un hôtel", en: "Often better located than a hotel" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Pljeskavica (burger serbe géant) dans une pljeskavičarnica", en: "Pljeskavica (giant Serbian burger) at a pljeskavičarnica" }, price: "4–8 €", detail: { fr: "Le fast-food national serbe", en: "Serbia's national fast food" } },
          { label: { fr: "Kafana traditionnelle — cornes d'abondance et viande grillée", en: "Traditional kafana — hearty spreads and grilled meat" }, price: "10–20 €", detail: { fr: "Musique live tzigane certains soirs", en: "Live Gypsy music on some evenings" } },
          { label: { fr: "Burek (feuillleté à la viande ou feta) du matin", en: "Morning burek (meat or feta pastry)" }, price: "2–3 €", detail: { fr: "Petit-déjeuner balkanique universel", en: "A universal Balkan breakfast" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus + tramway Belgrade (ticket)", en: "Bus + tram in Belgrade (ticket)" }, price: "1 €", detail: { fr: "Réseau étendu, très bon marché", en: "Extensive network, very cheap" } },
          { label: { fr: "Train Belgrade–Novi Sad (1h30)", en: "Train Belgrade–Novi Sad (1h30)" }, price: "4–8 €", detail: { fr: "Nouvelle ligne à grande vitesse (350km/h)", en: "New high-speed line (350km/h)" } },
          { label: { fr: "Bus Belgrade–Niš ou Novi Sad (FlixBus)", en: "Bus Belgrade–Niš or Novi Sad (FlixBus)" }, price: "8–15 €", detail: { fr: "Réseau interurbain dense", en: "Dense intercity network" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée forteresse de Kalemegdan (musée)", en: "Kalemegdan Fortress entry (museum)" }, price: "3–5 €", detail: { fr: "Parc autour gratuit", en: "Surrounding park free" } },
          { label: { fr: "Festival EXIT Novi Sad (pass journée)", en: "EXIT Festival, Novi Sad (day pass)" }, price: "40–80 €", detail: { fr: "Juillet, programmation internationale", en: "July, international line-up" } },
          { label: { fr: "Croisière gorges du Đerdap (journée)", en: "Đerdap gorge cruise (day trip)" }, price: "30–60 €", detail: { fr: "Depuis Donji Milanovac", en: "From Donji Milanovac" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Hostel + pljeskavica + transports publics", en: "Hostel + pljeskavica + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "65–120 €/j", desc: { fr: "Hôtel 3★ + kafana + excursions", en: "3★ hotel + kafana + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Belgrade (4j) → Novi Sad (1j) → Monastères de Šumadija (2j) → Gorges Đerdap (1j)",
        en: "Belgrade (4d) → Novi Sad (1d) → Šumadija monasteries (2d) → Đerdap gorge (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Belgrade (Air France, Wizz Air, Air Serbia)", en: "Return flight Paris–Belgrade (Air France, Wizz Air, Air Serbia)" }, amount: "100–250 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "180–330 €" },
            { label: { fr: "Transports (train + bus)", en: "Transport (train + bus)" }, amount: "70–130 €" },
            { label: { fr: "Nourriture + cafés + bière", en: "Food + coffee + beer" }, amount: "180–320 €" },
            { label: { fr: "Activités + festivals", en: "Activities + festivals" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Belgrade", en: "Return flight Paris–Belgrade" }, amount: "150–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "450–800 €" },
            { label: { fr: "Voiture de location + train", en: "Car rental + train" }, amount: "200–400 €" },
            { label: { fr: "Nourriture & kafana + vin", en: "Food & kafana + wine" }, amount: "300–550 €" },
            { label: { fr: "Monastères, croisière, EXIT", en: "Monasteries, cruise, EXIT" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h30 (Air France direct CDG–Belgrade, Air Serbia, Wizz Air). Liaisons quotidiennes.", en: "~2h30 (direct Air France CDG–Belgrade, Air Serbia, Wizz Air). Daily flights." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité valides. Pas encore dans l'UE.", en: "No visa required for French citizens (90 days). Valid passport or ID card. Not yet an EU member." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dinar serbe (RSD). Euros souvent acceptés dans les hôtels. Carte bancaire bien acceptée en ville. Espèces indispensables dans les kafanas et monastères.", en: "Serbian dinar (RSD). Euros often accepted in hotels. Cards widely accepted in towns. Cash essential at kafanas and monasteries." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Serbe (alphabet cyrillique). Anglais bien parlé à Belgrade par les jeunes. Moins courant en province.", en: "Serbian (Cyrillic alphabet). English well spoken by young people in Belgrade. Less common in the countryside." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution particulière. Pas de CEAM (hors UE) — assurance voyage recommandée. Soins médicaux de bonne qualité à Belgrade.", en: "No particular precautions needed. No EHIC (non-EU) — travel insurance recommended. Good-quality healthcare in Belgrade." } },
    { icon: "🎵", label: { fr: "Musique", en: "Music" }, value: { fr: "La Serbie est le pays de la turbo-folk (musique populaire balkanique) et des kafanas avec orchestres live. La scène club de Belgrade (avec les splavovi) est l'une des meilleures d'Europe.", en: "Serbia is the land of turbo-folk (Balkan pop music) and kafanas with live orchestras. Belgrade's club scene (with the splavovi) is one of the best in Europe." } },
    { icon: "🏙️", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Belgrade est l'une des capitales les plus sûres des Balkans. Prudence habituelle dans les foules et les transports en commun. Les monastères sont souvent isolés — guide ou voiture recommandés.", en: "Belgrade is one of the safest capitals in the Balkans. Usual caution in crowds and on public transport. Monasteries are often remote — a guide or car is recommended." } },
  ],
};
