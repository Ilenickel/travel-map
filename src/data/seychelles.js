export const SEYCHELLES = {
  code: "SYC",
  numericId: 690,
  name: "Seychelles",
  emoji: "🇸🇨",
  capital: "Victoria",
  language: "Créole seychellois, Anglais, Français",
  currency: "Roupie seychelloise (SCR)",
  timezone: "UTC+4",
  filter: {
    budgetMin: 150, budgetMid: 230,
    tripMin: 3000, tripMid: 7000,
  },
  description:
    "Les Seychelles sont l'archipel le plus exclusif de l'océan Indien : 115 îles granitiques et coralliennes aux plages de granit rose exceptionnelles (Anse Source d'Argent classée plus belle plage du monde), eaux turquoise d'une clarté absolue, tortues géantes d'Aldabra (UNESCO, plus grande population mondiale), et la valée de Mai (UNESCO) avec le coco de mer — le fruit le plus grand du règne végétal.",

  bestPeriods: [
    {
      months: "Avril – Mai",
      label: "Transition calme",
      color: "#22c55e",
      description:
        "Mers calmes, peu de vent, températures agréables 26–30°C, plongée excellente. Meilleure visibilité sous-marine de l'année.",
      icon: "🌊",
    },
    {
      months: "Octobre – Novembre",
      label: "Transition calme (bis)",
      color: "#22c55e",
      description:
        "Autre période idéale : calme entre les deux moussons. Mer lisse, ciel bleu, températures parfaites.",
      icon: "☀️",
    },
    {
      months: "Juin – Août",
      label: "Mousson sud-est",
      color: "#f59e0b",
      description:
        "Vents et houle sur la côte ouest de Mahé et Praslin. Certaines plages moins accessibles. Praslin et La Digue plus exposées. Températures restent chaudes.",
      icon: "💨",
    },
  ],

  weatherCities: [
    {
      id: "mahe",
      name: "Mahé (Victoria)",
      region: "Île principale",
      data: [
        { month: "Jan", temp: 28, rain: 380, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 280, icon: "🌧️" },
        { month: "Mar", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Avr", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Jul", temp: 26, rain: 90,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 80,  icon: "☀️" },
        { month: "Sep", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 310, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "La Digue — Anse Source d'Argent",
      region: "Îles Intérieures",
      description:
        "La Digue est l'île la plus pittoresque des Seychelles : Anse Source d'Argent est classée l'une des plus belles plages du monde — rochers de granit rose sculptés par le vent et la mer, eaux turquoise peu profondes, cocotiers. On se déplace uniquement à vélo ou en oxycart. Une île préservée hors du temps.",
      wikipedia: "File:Grand Anse-La Digue-Seychellen.jpg",
      tags: ["Plage", "Granit", "Vélo", "Paradis"],
      mustSee: [
        { name: "Anse Source d'Argent — la plus photographiée du monde", wikipedia: "File:Anse Source d'Argent 3-La Digue.jpg" },
        { name: "Grand Anse La Digue — plage sauvage côté vent", wikipedia: "File:Seychellen la digue nil daigle.jpg" },
        { name: "Réserve veuve de paradis (espèce endémique)", wikipedia: "Seychelles_paradise_flycatcher" },
        { name: "Tour de l'île à vélo (15km)", wikipedia: "La_Digue" },
      ],
    },
    {
      id: 2,
      name: "Praslin — Vallée de Mai",
      region: "Îles Intérieures",
      description:
        "Praslin abrite la Vallée de Mai (UNESCO), la plus petite zone du patrimoine mondial : une forêt de cocotiers de mer (coco de mer) dont le fruit est le plus grand du règne végétal (25kg). Le black parrot endémique niche ici. Anse Lazio, souvent élue meilleure plage du monde, est à 20 minutes. Les eaux au nord de l'île sont idéales pour la plongée.",
      wikipedia: "Praslin",
      tags: ["UNESCO", "Forêt", "Plage", "Plongée"],
      mustSee: [
        { name: "Vallée de Mai (UNESCO) — forêt de coco de mer (fruit 25kg)", wikipedia: "Vallée_de_Mai" },
        { name: "Anse Lazio — souvent élue plus belle plage du monde", wikipedia: "Anse_Lazio" },
        { name: "Black parrot (perroquet endémique) en vol", wikipedia: "Seychelles_black_parrot" },
        { name: "Plongée Anse Boudin — raies manta et tortues", wikipedia: "Praslin" },
      ],
    },
    {
      id: 3,
      name: "Mahé — Capital et plongée",
      region: "Île principale",
      description:
        "Mahé, la plus grande île, concentre les infrastructures : Victoria la capitale (la plus petite du monde), les marchés de Victoria aux épices et artisanat créole, les jardins botaniques avec tortues géantes géantes en liberté, et la plongée autour des îles voisines. Les plages de Beau Vallon (nord) sont les plus animées des Seychelles.",
      wikipedia: "File:Wind turbines - wind energy - Mahe - Seychelles.jpg",
      tags: ["Ville", "Plongée", "Marchés", "Tortues"],
      mustSee: [
        { name: "Marché de Victoria — épices, artisanat créole", wikipedia: "File:Big Ben Clock Tower - Victoria - Mahe - Seychelles - 01.jpg" },
        { name: "Jardins botaniques — tortues géantes Aldabra en semi-liberté", wikipedia: "File:Green_turtle_Chelonia_mydas_is_basking_on_Punaluu_Beach_Big_Island_of_Hawaii.jpg" },
        { name: "Plongée autour des îlots (requins dormeurs, raies)", wikipedia: "File:Heterodontus francisci.jpg" },
        { name: "Plage Beau Vallon — la plus fréquentée, couchers de soleil", wikipedia: "File:2006-06-23_13-34-02_Seychelles_Beau_Vallon_Beau_Vallon.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Les Seychelles sont l'une des destinations les plus chères d'Afrique et de l'océan Indien. Un voyage abordable est néanmoins possible en restant sur les trois îles principales (Mahé, Praslin, La Digue), en évitant les hôtels de luxe, et en cuisinant partiellement soi-même.",
    currency: "SCR",
    exchangeRate: "1€ ≈ 15–16 SCR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre chez l'habitant", price: "80–130 €", detail: "Self-catering, petit chalet" },
          { label: "Hôtel 3★ (Mahé, Praslin, La Digue)", price: "150–250 €", detail: "Vue mer, piscine, petit-déj" },
          { label: "Resort luxe (Banyan Tree, Six Senses)", price: "600–2 000 €", detail: "Bungalow sur l'eau, all-inclusive" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Rougaille de poisson dans un restaurant local", price: "10–20 €", detail: "Cuisine créole typique" },
          { label: "Restaurant mid-range (Mahé, Praslin)", price: "25–45 €", detail: "Fruits de mer, langouste" },
          { label: "Supermarché / self-catering", price: "15–25 €/j", detail: "Option économique guesthouse" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Ferry Mahé–Praslin (Cat Rose) ou Praslin–La Digue", price: "30–60 €", detail: "A/R, 45–60 min" },
          { label: "Bus local Mahé (réseau public)", price: "0,30–1 €", detail: "Limité mais existant" },
          { label: "Location de vélo La Digue", price: "8–15 €/j", detail: "Transport idéal sur l'île" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Plongée (2 plongées, équipement)", price: "100–150 €", detail: "Richesse marine exceptionnelle" },
          { label: "Entrée Vallée de Mai Praslin (UNESCO)", price: "25 €", detail: "Matinée pour les oiseaux" },
          { label: "Excursion snorkeling en catamaran", price: "60–100 €", detail: "Journée, repas inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "150–220 €/j", desc: "Guesthouse + cuisine locale + ferry + vélo", color: "#22c55e" },
      { type: "Confort", daily: "350–550 €/j", desc: "Hôtel 3★ + restaurants + plongée + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "800 €+/j", desc: "Resort 5★ + tout-inclus + spa + Aldabra", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Mahé (4j) → Praslin (4j) → La Digue (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mahé", amount: "700–1 200 €" },
            { label: "Guesthouses (12 nuits)", amount: "900–1 600 €" },
            { label: "Ferrys inter-îles", amount: "150–300 €" },
            { label: "Nourriture", amount: "500–800 €" },
            { label: "Activités & plongée", amount: "300–600 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "6 000 – 10 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Mahé (Business ou nuit)", amount: "800–1 500 €" },
            { label: "Hôtels 3★ (12 nuits)", amount: "2 000–3 500 €" },
            { label: "Ferrys + transfers", amount: "300–500 €" },
            { label: "Nourriture & restaurants", amount: "900–1 500 €" },
            { label: "Plongée & excursions", amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~10h (Air Seychelles direct, Turkish via Istanbul, Emirates via Dubaï, Air France via escale)" },
    { icon: "🪪", label: "Visa",              value: "Pas de visa requis — permis de séjour à l'arrivée (30 jours renouvelable). Billet retour obligatoire." },
    { icon: "💰", label: "Monnaie",           value: "Roupie seychelloise (SCR). Euros et dollars acceptés partout. Carte bancaire courante." },
    { icon: "🗣️", label: "Langue",            value: "Créole seychellois (vie quotidienne) + Anglais et Français (officiels). Communication très facile." },
    { icon: "🔌", label: "Prise électrique",  value: "Type G (britannique) — 240V. Adaptateur recommandé." },
    { icon: "💊", label: "Santé",             value: "Pas de vaccin obligatoire. Pas de paludisme. Précautions alimentaires standard." },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable sur Mahé. Eau en bouteille recommandée pour les îles extérieures." },
    { icon: "📱", label: "Réseau",            value: "Excellente couverture sur Mahé, Praslin et La Digue. Îles extérieures : réseau satellite uniquement." },
  ],
};
