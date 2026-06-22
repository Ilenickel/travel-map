export const CYPRUS = {
  code: "CYP",
  numericId: 196,
  name: "Chypre",
  emoji: "🇨🇾",
  capital: "Nicosie",
  language: "Grec, Turc",
  currency: "Euro (EUR)",
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 55, budgetMid: 100,
    tripMin: 750, tripMid: 1500,
  },
  description:
    "Chypre est la troisième plus grande île de la Méditerranée, berceau légendaire d'Aphrodite et carrefour de civilisations entre Orient et Occident. Ses plages de sable doré, ses vestiges antiques classés UNESCO à Paphos, ses villages de montagne dans les Troodos et ses vins réputés en font une destination d'une richesse exceptionnelle. L'île reste divisée depuis 1974 entre la République de Chypre au sud et la partie nord sous contrôle turc.",

  bestPeriods: [
    {
      months: "Avril – Juin",
      label: "Printemps chypriote",
      color: "#22c55e",
      description:
        "La meilleure période pour visiter Chypre : températures idéales (20–28°C), mer encore fraîche, fleurs sauvages en bloom et pas encore la chaleur écrasante de l'été. Idéal pour la randonnée dans les Troodos.",
      icon: "☀️",
    },
    {
      months: "Septembre – Novembre",
      label: "Arrière-saison",
      color: "#f59e0b",
      description:
        "La mer reste chaude (24–26°C) et les températures baissent après l'été torride. Période idéale pour les visites culturelles, la route des vins et la randonnée en montagne sans la foule estivale.",
      icon: "🍷",
    },
  ],
  weatherCities: [
    {
      id: "limassol",
      name: "Limassol",
      region: "District de Limassol",
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
      region: "District de Paphos",
      description:
        "Paphos, ville côtière du sud-ouest de Chypre, est classée au patrimoine mondial de l'UNESCO pour ses extraordinaires mosaïques romaines des IIe–IVe siècles. Légendairement liée à Aphrodite, elle abrite le Rocher de l'Aphrodite (lieu de naissance de la déesse) et les Tombeaux des Rois, nécropole taillée dans la roche. La vieille ville et son port pittoresque sont idéaux pour les soirées.",
      wikipedia: "Paphos",
      tags: ["UNESCO", "Antique", "Mosaïques", "Aphrodite"],
      mustSee: [
        { name: "Parc archéologique de Paphos — mosaïques romaines exceptionnelles classées UNESCO", wikipedia: "Paphos_Archaeological_Park" },
        { name: "Tombeaux des Rois — nécropole hellénistique et romaine taillée dans la roche", wikipedia: "Tombs_of_the_Kings_(Paphos)" },
        { name: "Rocher d'Aphrodite (Petra tou Romiou) — lieu de naissance légendaire de la déesse", wikipedia: "Petra_tou_Romiou" },
        { name: "Château de Paphos — forteresse médiévale des Lusignan au bord du port", wikipedia: "Paphos_Castle" },
      ],
    },
    {
      id: 2,
      name: "Troodos",
      region: "District de Nicosie / Limassol",
      description:
        "Les montagnes du Troodos, avec leur point culminant le mont Olympe (1 952 m), offrent un contraste saisissant avec les plages côtières. La région abrite des monastères byzantins ornés de fresques dorées classés UNESCO, des sentiers de randonnée ombragés et des villages viticoles producteurs du célèbre Commandaria, plus vieux vin du monde encore produit.",
      wikipedia: "Troodos_Mountains",
      tags: ["Montagne", "UNESCO", "Randonnée", "Vins"],
      mustSee: [
        { name: "Monastère de Kykkos — plus grand monastère de Chypre, icônes byzantines", wikipedia: "Kykkos_Monastery" },
        { name: "Eglises byzantines du Troodos — 10 églises à fresques classées UNESCO", wikipedia: "Painted_Churches_in_the_Troodos_Region" },
        { name: "Mont Olympe — point culminant de Chypre avec vue panoramique", wikipedia: "File:Mountain Olympus snowy.JPG" },
        { name: "Route des vins de Krasochoria — villages vignerons autour de Limassol", wikipedia: "Commandaria" },
      ],
    },
    {
      id: 3,
      name: "Nicosie",
      region: "District de Nicosie",
      description:
        "Nicosie est la dernière capitale divisée du monde, coupée en deux depuis 1974 par la 'ligne verte' de l'ONU séparant la République de Chypre et la partie nord turque. La vieille ville intra-muros vénitiens recèle des musées, des mosquées et des cafés dans les deux parties. Le passage du checkpoint Ledra Street permet de visiter les deux côtés de la ville.",
      wikipedia: "Nicosia",
      tags: ["Capitale", "Divisée", "Histoire", "Médiéval"],
      mustSee: [
        { name: "Remparts vénitiens de Nicosie — enceinte étoilée du XVIe siècle", wikipedia: "File:Venetian_walls_and_green_parks_Nicosia_Republic_of_Cyprus_Kypros.jpg" },
        { name: "Checkpoint Ledra Street — seul passage entre les deux parties de la ville", wikipedia: "Ledra_Street" },
        { name: "Musée de Chypre — collection archéologique nationale exceptionnelle", wikipedia: "Cyprus_Museum" },
        { name: "Cathédrale Sainte-Sophie (Selimiye) — gothique français reconverti en mosquée", wikipedia: "Selimiye_Mosque,_Nicosia" },
      ],
    },
    {
      id: 4,
      name: "Limassol et route des vins",
      region: "District de Limassol",
      description:
        "Limassol est la deuxième ville de Chypre et son principal port commercial, connue pour sa vie nocturne animée et son carnaval. La route des vins dans l'arrière-pays du Limassol traverse des villages traditionnels producteurs du Commandaria, vin de dessert qui existe depuis l'Antiquité et est reconnu comme le plus vieux vin encore produit dans le monde.",
      wikipedia: "Limassol",
      tags: ["Gastronomie", "Vins", "Plages", "Nightlife"],
      mustSee: [
        { name: "Château médiéval de Limassol — où Richard Cœur de Lion épousa Bérengère", wikipedia: "Limassol_Castle" },
        { name: "Village de Lania — village viticole traditionnel au cœur des Troodos", wikipedia: "File:View of Laneia 2.jpg" },
        { name: "Plage de Kourion — ruines antiques avec vue sur la mer et théâtre gréco-romain", wikipedia: "Kourion" },
        { name: "Amathus — cité antique royale sur la côte est de Limassol", wikipedia: "Amathus" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Chypre est l'une des destinations les plus abordables de la Méditerranée. Les prix sont généralement inférieurs à ceux de la Grèce ou de l'Italie, avec une restauration locale très économique. Les stations balnéaires comme Ayia Napa pratiquent des prix plus élevés en été.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse (dortoir)", price: "15–25 €", detail: "Quelques auberges dans les villes principales" },
          { label: "Guesthouse ou hôtel budget", price: "45–75 €", detail: "Chambre double confortable, bon rapport qualité-prix" },
          { label: "Hôtel confort ou resort balnéaire", price: "85–150 €", detail: "Hôtels avec piscine sur la côte, idéaux en famille" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Meze chypriote (30 petits plats)", price: "15–25 €/personne", detail: "Expérience gastronomique complète dans une taverne traditionnelle" },
          { label: "Souvlaki ou gyros au comptoir", price: "3–6 €", detail: "Repas rapide et savoureux, abordable partout" },
          { label: "Restaurant bord de mer dîner", price: "22–40 €", detail: "Poissons grillés frais, mezé maritimes, vins locaux" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus inter-villes (INTERCITY)", price: "4–8 €", detail: "Liaisons entre Nicosie, Limassol, Paphos et Larnaca" },
          { label: "Location de voiture (journée)", price: "25–50 €", detail: "Indispensable pour explorer les villages du Troodos et les plages isolées" },
          { label: "Taxi aéroport Larnaca–Limassol", price: "40–55 €", detail: "Pas de train, taxi ou bus aéroport nécessaires" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Parc archéologique de Paphos", price: "4,50 €", detail: "Accès aux mosaïques romaines et site archéologique UNESCO" },
          { label: "Croisière catamaran vers le Rocher d'Aphrodite", price: "35–50 €", detail: "Demi-journée avec snorkeling et arrêt baignade" },
          { label: "Dégustation Commandaria en cave", price: "10–20 €", detail: "Visite d'une cave traditionnelle dans les villages du Troodos" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "55–75 €/j",
        desc: "Guesthouse abordable, mezé et souvlakis, bus, quelques sites archéologiques",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "100–150 €/j",
        desc: "Hôtel avec piscine, restaurants bord de mer, location de voiture, excursions",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Larnaca – Nicosie – Paphos – Troodos – Limassol",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Larnaca", amount: "100–180 €" },
            { label: "Hébergement (7 nuits)", amount: "105–175 €" },
            { label: "Transports locaux + location voiture", amount: "120–180 €" },
            { label: "Nourriture + boissons", amount: "175–260 €" },
            { label: "Activités + sites archéologiques", amount: "50–80 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Larnaca", amount: "150–250 €" },
            { label: "Hébergement (7 nuits)", amount: "490–700 €" },
            { label: "Transports locaux + location voiture", amount: "180–250 €" },
            { label: "Nourriture + boissons", amount: "280–400 €" },
            { label: "Activités + excursions", amount: "100–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "3h30–4h de vol direct depuis CDG vers Larnaca ou Paphos" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — zone Schengen (République de Chypre), carte d'identité suffisante" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) au sud — livre turque au nord (partie non reconnue)" },
    { icon: "🗣️", label: "Langue", value: "Grec au sud, turc au nord — l'anglais est très largement parlé partout" },
    { icon: "🔌", label: "Prise électrique", value: "Type G (prise britannique à 3 broches) — adaptateur indispensable" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie (CEAM) valable — bonnes infrastructures médicales" },
    { icon: "🚗", label: "Conduite", value: "Conduite à gauche — héritage britannique, volant à droite" },
    { icon: "🌞", label: "Soleil", value: "Plus de 300 jours de soleil par an — parmi les îles les plus ensoleillées de Méditerranée" },
  ],
};
