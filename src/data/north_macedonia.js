export const NORTH_MACEDONIA = {
  code: "MKD",
  numericId: 807,
  name: "Macédoine du Nord",
  emoji: "🇲🇰",
  capital: "Skopje",
  language: "Macédonien, Albanais",
  currency: "Denar macédonien (MKD)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 600, tripMid: 1200,
  },
  description:
    "La Macédoine du Nord est le secret le mieux gardé des Balkans : le lac d'Ohrid (double UNESCO — patrimoine naturel et culturel, l'un des plus vieux lacs d'Europe), les monastères byzantins des XIe–XIVe siècles dans la campagne, Skopje et son centre baroque néoclassique surprenant, et Mavrovo — le parc national alpin à 90 minutes de la capitale.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Été lacustre et montagnard",
      color: "#22c55e",
      description:
        "Lac d'Ohrid idéal (eau à 24°C), Skopje animée (23–28°C), Mavrovo accessible. Juillet-août les plus chauds mais le lac tempère. Juin et septembre parfaits.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Ski Mavrovo",
      color: "#3b82f6",
      description:
        "Ski à Mavrovo (station des Balkans, 1 255m–2 255m). Lac d'Ohrid sous la brume d'hiver — atmosphère mystique. Températures -5 à -8°C.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "skopje",
      name: "Skopje",
      region: "Vallée du Vardar (capitale)",
      data: [
        { month: "Jan", temp:  1, rain: 40,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 60,  icon: "⛅" },
        { month: "Jun", temp: 23, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 20,  icon: "⛅" },
        { month: "Sep", temp: 22, rain: 35,  icon: "☀️" },
        { month: "Oct", temp: 15, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "ohrid",
      name: "Ohrid",
      region: "Lac d'Ohrid (sud-ouest, UNESCO)",
      data: [
        { month: "Jan", temp:  2, rain: 50,  icon: "❄️" },
        { month: "Fév", temp:  4, rain: 45,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Sep", temp: 20, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Nov", temp:  8, rain: 70,  icon: "⛅" },
        { month: "Déc", temp:  3, rain: 55,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lac d'Ohrid — Double UNESCO",
      region: "Sud-ouest",
      description:
        "Le lac d'Ohrid est l'un des plus vieux lacs du monde (2–3 millions d'années) et l'un des plus profonds des Balkans (293m). Classé double UNESCO (naturel ET culturel), il abrite 200 espèces endémiques dont la truite d'Ohrid. La ville d'Ohrid est une des plus anciennes d'Europe (antique Lychnidos) : 365 églises byzantines, monastères des Xe–XIVe siècles et une vieille ville parfaitement préservée.",
      wikipedia: "File:OhridskoEzeroKarpaSvNikola.jpg",
      tags: ["UNESCO", "Lac", "Byzantin", "Endémique"],
      mustSee: [
        { name: "Église Saint-Jean-de-Kaneo (XIIIe s.) — sur la falaise au-dessus du lac", wikipedia: "File:Iglesia_San_Juan_Kaneo,_Ohrid,_Macedonia_del_Norte,_2014-04-17,_DD_19.jpg" },
        { name: "Monastère de Saint-Naum (Xe s.) — au bord du lac, sources souterraines", wikipedia: "File:Svetinaum.jpg" },
        { name: "Forteresse de Samuel (Xe s.) — panorama sur le lac et les montagnes albanaises", wikipedia: "File:Samuel's Fortress Ohrid 1.jpg" },
        { name: "Plongée dans le lac d'Ohrid — épaves et eaux cristallines à 20m", wikipedia: "File:Museum on Water, Ohrid.JPG" },
      ],
    },
    {
      id: 2,
      name: "Skopje — Capitale baroque et ottomane",
      region: "Capitale",
      description:
        "Skopje est une capitale hors du commun : après le tremblement de terre de 1963 qui détruisit 80% de la ville, le gouvernement yougoslave l'a reconstruite en style moderniste-brutaliste, puis depuis 2010 le projet 'Skopje 2014' a érigé des centaines de statues néoclassiques et de fontaines monumentales. Le vieux bazar ottoman (Čaršija) — le plus grand des Balkans après Istanbul — survit intact.",
      wikipedia: "Skopje",
      tags: ["Bazar ottoman", "Baroque", "Statues", "Moderniste"],
      mustSee: [
        { name: "Čaršija (vieux bazar ottoman) — le plus grand des Balkans après Istanbul", wikipedia: "Old_Bazaar,_Skopje" },
        { name: "Fontaine 'Guerrier sur cheval' (Alexandre le Grand, 22m de haut)", wikipedia: "File:Skopje_-_Warrior_on_a_Horse_(9451253725).jpg" },
        { name: "Forteresse Kale — ruines byzantines dominant le Vardar", wikipedia: "File:Skopje (Скопје, Shkupi) - fortress 2.JPG" },
        { name: "Pont de Pierre — vieux pont ottoman du XVe s. au cœur de la ville", wikipedia: "File:08_Skopje.jpg" },
      ],
    },
    {
      id: 3,
      name: "Monastères byzantins de Macédoine",
      region: "Campagne macédonienne",
      description:
        "La Macédoine du Nord compte plus de 1 000 monastères et églises byzantines des Xe–XIVe siècles, avec des fresques d'une qualité comparable aux plus grandes œuvres de l'art chrétien. Sainte-Sophie d'Ohrid (VIIIe s.), le monastère de Treskavec dans une forêt de montagne, Lesnovo (XIVe s.) avec ses fresques renaissantes — un trésor byzantin inconnu du grand public.",
      wikipedia: "File:Bulgarians_defeat_Byzantines_under_Krenites_and_Kourtikios.jpg",
      tags: ["Byzantin", "Fresques", "Monastères", "Xe-XIVe siècle"],
      mustSee: [
        { name: "Sainte-Sophie d'Ohrid (VIIIe s.) — mosaïques et fresques byzantines", wikipedia: "File:St Sophia (Ohrid).jpg" },
        { name: "Monastère de Treskavec — perché à 1 200m, chambres pour les visiteurs", wikipedia: "Treskavec_Monastery" },
        { name: "Monastère de Lesnovo (1341) — fresques du XIVe s. classées par l'UNESCO", wikipedia: "Lesnovo_Monastery" },
        { name: "Monastère de Saint-Panteleimon (Nerezi, 1164) — fresques protorenaissantes", wikipedia: "File:Gorno_Nerezi,_Saint_Panteleimon_church.jpg" },
      ],
    },
    {
      id: 4,
      name: "Parc national de Mavrovo — Alpes macédoniennes",
      region: "Nord-ouest",
      description:
        "Mavrovo est le plus grand parc national de Macédoine du Nord (73 000 ha) : le lac de Mavrovo créé par un barrage dans un paysage alpin, le lynx des Balkans (l'un des plus rares au monde — moins de 50 individus), et la station de ski (la plus populaire du pays). Le village de Mavrovo avec son église partiellement submergée dans le lac est une image emblématique.",
      wikipedia: "Mavrovo_National_Park",
      tags: ["Parc national", "Ski", "Lynx", "Lac alpin"],
      mustSee: [
        { name: "Lac de Mavrovo — église Saint-Nicolas partiellement submergée", wikipedia: "Mavrovo_Lake" },
        { name: "Ski à Mavrovo (1 255–2 255m) — la station la plus populaire du pays", wikipedia: "File:Iglesia_sumergida_de_San_Nicolás,_lago_Mavrovo,_Macedonia_del_Norte,_2014-04-17,_DD_11.jpg" },
        { name: "Canyon de la Radika — randonnée dans les gorges profondes", wikipedia: "Mavrovo_National_Park" },
        { name: "Monastère de Sv. Jovan Bigorski (XIe s.) — iconostase en bois sculpté unique", wikipedia: "File:The_Church_of_St._John_the_Baptist,_the_Monastery_of_Saint_Jovan_Bigorski,_Macedonia.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Macédoine du Nord est l'un des pays les moins chers des Balkans et d'Europe. Skopje et Ohrid restent très abordables. Le denar fluctue légèrement — les euros sont parfois acceptés dans les hôtels.",
    currency: "MKD",
    exchangeRate: "1€ ≈ 62 MKD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse Ohrid (vue sur le lac)", price: "20–45 €", detail: "Charme local, souvent petit-déjeuner inclus" },
          { label: "Hôtel 3★ Skopje centre", price: "40–75 €", detail: "Bon confort, accès facile au bazar ottoman" },
          { label: "Pension rurale (Mavrovo)", price: "20–40 €", detail: "Demi-pension disponible, nature sauvage" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pastrmajlija (pizza macédonienne à l'agneau) dans une taverne", price: "5–10 €", detail: "Spécialité de Štip, maintenant dans tout le pays" },
          { label: "Tavče gravče (haricots au four) + salate au marché Skopje", price: "4–8 €", detail: "Plat national végétarien macédonien" },
          { label: "Truite d'Ohrid grillée sur le lac (Ohrid)", price: "10–18 €", detail: "Poisson endémique du lac, saveur unique" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Skopje–Ohrid (3h)", price: "6–10 €", detail: "Plusieurs départs par jour" },
          { label: "Bus urbain Skopje (ticket)", price: "0,35 €", detail: "L'un des moins chers d'Europe" },
          { label: "Taxi Skopje (course longue)", price: "5–15 €", detail: "Très abordable, appli Bolt disponible" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée monastère de Saint-Naum ou Sainte-Sophie d'Ohrid", price: "2–4 €", detail: "Sites byzantins remarquablement peu chers" },
          { label: "Balade en barque sur le lac d'Ohrid", price: "8–15 €", detail: "Vue sur les monastères depuis l'eau" },
          { label: "Forfait ski Mavrovo (journée)", price: "20–30 €", detail: "Domaine skiable valable, très abordable" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–55 €/j", desc: "Pension + taverna locale + bus", color: "#22c55e" },
      { type: "Confort", daily: "60–110 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "Skopje (2j) → Lac d'Ohrid (3j) → Monastères campagne (1j) → Mavrovo (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "600 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Skopje (Wizz Air, Ryanair)", amount: "80–200 €" },
            { label: "Hébergement (7 nuits)", amount: "150–280 €" },
            { label: "Transports (bus + taxi)", amount: "60–100 €" },
            { label: "Nourriture + cafés + bière macédonienne", amount: "180–300 €" },
            { label: "Activités + monastères + lac", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 200 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Skopje", amount: "100–250 €" },
            { label: "Hôtels 3★ (7 nuits)", amount: "350–600 €" },
            { label: "Voiture de location (7 jours)", amount: "220–380 €" },
            { label: "Nourriture & restaurants", amount: "300–550 €" },
            { label: "Ski + excursions + sorties", amount: "180–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Wizz Air direct Beauvais/Orly–Skopje, Ryanair). Liaisons régulières." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat officiel)." },
    { icon: "💰", label: "Monnaie",           value: "Denar macédonien (MKD). Euros parfois acceptés dans les hôtels. Espèces indispensables dans les monastères et transports ruraux." },
    { icon: "🗣️", label: "Langue",            value: "Macédonien (alphabet cyrillique). Albanais dans l'ouest. Anglais parlé par les jeunes à Skopje et Ohrid. Moins courant dans les villages." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Pas de précautions particulières. Assurance voyage recommandée (hors UE). Soins corrects à Skopje." },
    { icon: "🏛️", label: "Alexandre le Grand", value: "La question de l'héritage d'Alexandre le Grand est très sensible — les Macédoniens le revendiquent, les Grecs contestent. Les statues monumentales de Skopje reflètent cette identité nationale. Éviter le sujet dans les discussions politiques." },
    { icon: "🦦", label: "Lac d'Ohrid",       value: "Le lac d'Ohrid est si ancien qu'il abrite 200 espèces endémiques introuvables ailleurs. La truite d'Ohrid est protégée — vérifier que le restaurant sert de l'élevage et non de la pêche sauvage." },
  ],
};
