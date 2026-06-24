export const BOSNIA_HERZEGOVINA = {
  code: "BIH",
  numericId: 70,
  name: "Bosnie-Herzégovine",
  emoji: "🇧🇦",
  capital: "Sarajevo",
  language: "Bosnien, Serbe, Croate",
  currency: "Mark convertible (BAM)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1500,
  },
  description:
    "La Bosnie-Herzégovine est un carrefour de civilisations unique en Europe : Sarajevo, ville où l'Orient rencontre l'Occident (l'unique capitale européenne avec une mosquée, une cathédrale orthodoxe, une église catholique et une synagogue à 500m les unes des autres), Mostar et son pont ottoman (Stari Most, UNESCO), les chutes de Kravice et les canyons de la Neretva.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Été balkanique",
      color: "#22c55e",
      description:
        "Mostar et la côte herzégovinienne idéales (25–30°C), Sarajevo agréable (20–25°C), cascades et canyons au maximum. Juillet-août chaud à Mostar mais magnifique.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Ski olympique",
      color: "#3b82f6",
      description:
        "Ski à Jahorina et Bjelašnica (stations des JO 1984). Sarajevo sous la neige — atmosphère unique. Températures -5 à -10°C en montagne.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "sarajevo",
      name: "Sarajevo",
      region: "Vallée de la Miljacka (capitale)",
      data: [
        { month: "Jan", temp: -1, rain: 65,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 60,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 75,  icon: "⛅" },
        { month: "Avr", temp: 11, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 16, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 90,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 75,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 17, rain: 80,  icon: "⛅" },
        { month: "Oct", temp: 11, rain: 80,  icon: "⛅" },
        { month: "Nov", temp:  5, rain: 85,  icon: "⛅" },
        { month: "Déc", temp:  0, rain: 75,  icon: "❄️" },
      ],
    },
    {
      id: "mostar",
      name: "Mostar",
      region: "Herzégovine (vallée de la Neretva)",
      data: [
        { month: "Jan", temp:  5, rain: 140, icon: "⛅" },
        { month: "Fév", temp:  7, rain: 110, icon: "⛅" },
        { month: "Mar", temp: 11, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 15, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 45,  icon: "☀️" },
        { month: "Jul", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 35,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Oct", temp: 16, rain: 110, icon: "⛅" },
        { month: "Nov", temp: 10, rain: 155, icon: "⛅" },
        { month: "Déc", temp:  6, rain: 175, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Sarajevo — Carrefour de civilisations",
      region: "Capitale",
      description:
        "Sarajevo est la seule ville d'Europe où l'on peut entendre l'appel à la prière depuis une mosquée ottomane et les cloches d'une cathédrale catholique au même moment : le quartier ottoman de Baščaršija (bazars, fontaines, artisans de cuivre), le coin de l'assassinat de l'Archiduc François-Ferdinand (1914 — déclencheur de la WWI), et la Bibliothèque Nationale incendiée en 1992 — Sarajevo porte l'histoire d'Europe entière.",
      wikipedia: "Sarajevo",
      tags: ["Histoire", "Ottoman", "WWI", "Carrefour", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Baščaršija — grand bazar ottoman du XVe siècle", wikipedia: "Baščaršija" },
        { name: "Pont Latin — lieu de l'assassinat de François-Ferdinand (28 juin 1914)", wikipedia: "Latin_Bridge" },
        { name: "Mosquée Gazi Husrev-beg (1531) — la plus importante des Balkans", wikipedia: "Gazi_Husrev-beg_Mosque" },
      ],
    },
    {
      id: 2,
      name: "Mostar — Stari Most (UNESCO)",
      region: "Herzégovine",
      description:
        "Mostar est la perle de l'Herzégovine : le Stari Most ('Vieux Pont', UNESCO) est un arc de pierre ottoman de 1566 — détruit en 1993 et reconstruit pierre par pierre en 2004 — symbole de la réconciliation bosniaque. Les plongeons depuis le pont (24m de hauteur) par les Mostari (plongeurs locaux) sont un rituel. Le vieux quartier ottoman (Kujundžiluk) est parfaitement préservé.",
      wikipedia: "Mostar",
      tags: ["UNESCO", "Pont ottoman", "Réconciliation", "Neretva", "Architecture"],
      mustSee: [
        { name: "Stari Most (Vieux Pont, UNESCO) — arc ottoman de 1566 reconstruit en 2004", wikipedia: "Stari_Most" },
        { name: "Plongeons des Mostari depuis le pont (24m, spectacle régulier)", wikipedia: "Mostar" },
        { name: "Kujundžiluk — bazar ottoman, artisans et cafés donnant sur la Neretva", wikipedia: "File:Mostar BW 2024-10-01 12-51-16.jpg" },
        { name: "Mosquée Koski Mehmed Pasha — minaret avec vue sur le pont", wikipedia: "File:Mehmed Koski pašina džamija by Pudelek.jpg" },
      ],
    },
    {
      id: 3,
      name: "Kravice et canyons de l'Herzégovine",
      region: "Herzégovine (ouest)",
      description:
        "Les cascades de Kravice sont les chutes les plus impressionnantes des Balkans occidentaux : une demi-lune de 25m de haut sur 120m de large, avec une piscine naturelle turquoise au pied idéale pour la baignade. À proximité : le lac de Jablanica, les canyons de la Neretva, et Počitelj — village fortifié ottoman sur une colline au-dessus du fleuve.",
      wikipedia: "File:Waterfalls Kravica 5, Bosnia and Herzegovina.jpg",
      tags: ["Cascades", "Baignade", "Canyon", "Ottoman", "Nature", "Randonnée"],
      mustSee: [
        { name: "Cascades de Kravice — demi-cercle turquoise de 25m de haut", wikipedia: "File:Kravice-kosk9.jpg" },
        { name: "Počitelj — village fortifié ottoman du XVe siècle", wikipedia: "Počitelj" },
        { name: "Canyon de la Neretva — kayak et rafting depuis Konjic", wikipedia: "Neretva" },
        { name: "Blagaj — source de la Buna sous une falaise avec tekke derviche du XVIe s.", wikipedia: "File:Blagaj tekke 2020.jpg" },
      ],
    },
    {
      id: 4,
      name: "Stations olympiques — Jahorina et Bjelašnica",
      region: "Sarajevo (montagne)",
      description:
        "Jahorina et Bjelašnica sont les deux stations de ski des Jeux Olympiques d'hiver de 1984 — les seuls JO jamais organisés dans un pays qui n'existe plus (Yougoslavie). Certaines infrastructures des JO sont encore visibles (bobsleigh de Trebević, maintenant accessible en télécabine). En été, les montagnes autour de Sarajevo offrent des randonnées dans des prairies alpines.",
      wikipedia: "Jahorina",
      tags: ["JO 1984", "Ski", "Histoire", "Yougoslavie", "Randonnée", "Nature"],
      mustSee: [
        { name: "Piste de bobsleigh des JO 1984 sur Trebević (maintenant sentier graffiti)", wikipedia: "Trebević" },
        { name: "Ski à Jahorina (1 900m) — ancienne piste olympique encore fonctionnelle", wikipedia: "Jahorina" },
        { name: "Bjelašnica (2 067m) — panorama sur Sarajevo et l'Herzégovine", wikipedia: "Bjelašnica" },
        { name: "Téléphérique de Trebević depuis Sarajevo (rénové en 2018)", wikipedia: "File:Sarajevo cable car.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Bosnie-Herzégovine est l'un des pays les moins chers d'Europe : Sarajevo et Mostar restent très abordables malgré la hausse du tourisme post-COVID. Le mark convertible est arrimé à l'euro (1€ = 1,96 BAM). Les euros ne sont pas acceptés — il faut changer.",
    currency: "BAM",
    exchangeRate: "1€ ≈ 1,96 BAM",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Pension familiale (Sarajevo ou Mostar)", price: "25–50 €", detail: "Souvent dans des maisons ottomanes restaurées" },
          { label: "Hôtel 3★ Sarajevo centre", price: "50–90 €", detail: "Bon confort, accès facile à Baščaršija" },
          { label: "Appartement Airbnb (Mostar)", price: "35–70 €", detail: "Vue sur la Neretva dans les bonnes adresses" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Ćevapi (10 pièces) + somun (pain) dans une ćevabdžinica", price: "4–8 €", detail: "Le plat national de Bosnie, partout excellent" },
          { label: "Restaurant turc-bosnien (Baščaršija)", price: "10–20 €", detail: "Burek, klepe (raviolis), dolma" },
          { label: "Baklava + café bosnien sur le bazar", price: "3–5 €", detail: "Tradition ottomane incontournable" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Sarajevo–Mostar (2h30)", price: "8–12 €", detail: "Plusieurs départs par jour" },
          { label: "Tramway Sarajevo (ticket)", price: "1 €", detail: "Réseau historique des années 1880" },
          { label: "Taxi Sarajevo (course courte)", price: "3–8 €", detail: "Très abordable, appli Bolt disponible" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Musée du tunnel de la guerre (Sarajevo)", price: "5–8 €", detail: "Incontournable sur le siège 1992–1995" },
          { label: "Excursion Kravice depuis Mostar (avec transport)", price: "20–35 €", detail: "Demi-journée, baignade incluse" },
          { label: "Tour guidé Sarajevo historique (3h)", price: "15–25 €", detail: "Guide francophone disponible" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Pension + ćevapi + tramway", color: "#22c55e" },
      { type: "Confort", daily: "65–120 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Sarajevo (4j) → Mostar (2j) → Kravice + Blagaj (1j) → Počitelj (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Sarajevo (Wizz Air, Turkish Airlines via Istanbul)", amount: "100–250 €" },
            { label: "Hébergement (8 nuits)", amount: "200–370 €" },
            { label: "Transports (bus + tramway)", amount: "60–110 €" },
            { label: "Nourriture + cafés + baklava", amount: "200–350 €" },
            { label: "Activités + musée tunnel + Kravice", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 500 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Sarajevo", amount: "150–300 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "450–800 €" },
            { label: "Voiture de location + bus", amount: "250–400 €" },
            { label: "Nourriture & restaurants", amount: "350–600 €" },
            { label: "Excursions + stations + sorties", amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 direct (Wizz Air Beauvais–Sarajevo). Sinon via Istanbul (Turkish Airlines) ou Vienne (Austrian Airlines)." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat)." },
    { icon: "💰", label: "Monnaie",           value: "Mark convertible (BAM, arrimé à l'euro à 1,96). Euros non acceptés en général — changer à l'arrivée. Carte bancaire acceptée en ville." },
    { icon: "🗣️", label: "Langue",            value: "Bosnien/Serbe/Croate (mutuellement intelligibles). Anglais parlé par les jeunes. Les guides touristiques parlent souvent français." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Pas de précautions particulières. Assurance voyage recommandée (hors UE). Soins médicaux corrects à Sarajevo." },
    { icon: "🕌", label: "Religions",         value: "Sarajevo est une ville de trois religions : musulmane (Bosniaques), orthodoxe (Serbes), catholique (Croates). Respecter les codes dans les mosquées (couvrir les épaules, retirer chaussures)." },
    { icon: "⚠️", label: "Mines",             value: "Des zones rurales isolées (forêts de montagne) sont encore minées depuis 1992–1995. Rester sur les sentiers balisés et ne pas s'aventurer hors des zones touristiques sans guide local." },
  ],
};
