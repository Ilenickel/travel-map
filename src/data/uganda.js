export const UGANDA = {
  code: "UGA",
  numericId: 800,
  name: { fr: "Ouganda", en: "Uganda" },
  emoji: "🇺🇬",
  capital: { fr: "Kampala", en: "Kampala" },
  language: { fr: "Swahili, Anglais", en: "Swahili, English" },
  currency: { fr: "Shilling ougandais (UGX)", en: "Ugandan Shilling (UGX)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 180,
    tripMin: 2500, tripMid: 7000,
  },
  description: {
    fr: "L'Ouganda, « la perle de l'Afrique » selon Churchill, est le pays des gorilles de Bwindi et des chimpanzés de Nyungwe. Avec plus de 1 000 espèces d'oiseaux (premier pays africain), la source du Nil Blanc à Jinja, les chutes Murchison et les lions grimpeurs d'Ishasha, c'est la destination de la biodiversité absolue.",
    en: "Uganda, \"the pearl of Africa\" according to Churchill, is the land of the Bwindi gorillas and Nyungwe chimpanzees. With over 1,000 bird species (Africa's top country), the source of the White Nile in Jinja, Murchison Falls and the tree-climbing lions of Ishasha, it is the ultimate biodiversity destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Grande saison sèche", en: "Main dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour les gorilles, chimpanzés et safaris. Sentiers praticables, faune active. Juin = top absolu.",
        en: "Best time for gorillas, chimpanzees and safaris. Trails are passable, wildlife active. June is the absolute peak.",
      },
      icon: "🦍",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February" },
      label: { fr: "Petite saison sèche", en: "Short dry season" },
      color: "#fb923c",
      description: {
        fr: "Bonne période secondaire pour les gorilles. Moins de touristes et tarifs légèrement plus bas.",
        en: "Good secondary period for gorillas. Fewer tourists and slightly lower rates.",
      },
      icon: "🐦",
    },
  ],

  weatherCities: [
    {
      id: "kampala",
      name: { fr: "Kampala", en: "Kampala" },
      region: { fr: "Buganda", en: "Buganda" },
      data: [
        { month: "Jan", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 60,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 170, icon: "☀️" },
        { month: "Mai", temp: 24, rain: 110, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 50,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 60,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Oct", temp: 24, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 24, rain: 140, icon: "☀️" },
        { month: "Déc", temp: 25, rain: 90,  icon: "☀️" },
      ],
    },
    {
      id: "bwindi",
      name: { fr: "Bwindi (Forêt impénétrable)", en: "Bwindi (Impenetrable Forest)" },
      region: { fr: "Uganda Sud-Ouest", en: "Southwestern Uganda" },
      data: [
        { month: "Jan", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 19, rain: 100, icon: "☀️" },
        { month: "Mar", temp: 19, rain: 130, icon: "☀️" },
        { month: "Avr", temp: 19, rain: 150, icon: "☀️" },
        { month: "Mai", temp: 18, rain: 120, icon: "☀️" },
        { month: "Jun", temp: 18, rain: 80,  icon: "☀️" },
        { month: "Jul", temp: 17, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 80,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 100, icon: "☀️" },
        { month: "Oct", temp: 18, rain: 130, icon: "☀️" },
        { month: "Nov", temp: 19, rain: 130, icon: "☀️" },
        { month: "Déc", temp: 19, rain: 90,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Gorilles de Bwindi", en: "Bwindi Gorillas" },
      region: { fr: "Uganda Sud-Ouest", en: "Southwestern Uganda" },
      description: {
        fr: "La Forêt impénétrable de Bwindi (UNESCO) est le sanctuaire le plus important des gorilles de montagne : elle abrite plus de la moitié de la population mondiale (environ 500 individus). Un permis (700$) donne accès à une heure magique avec une famille de gorilles en forêt tropicale.",
        en: "The Bwindi Impenetrable Forest (UNESCO) is the most important sanctuary for mountain gorillas: it is home to more than half of the world's population (around 500 individuals). A permit ($700) grants access to a magical hour with a gorilla family in the rainforest.",
      },
      wikipedia: "Bwindi_Impenetrable_National_Park",
      tags: ["UNESCO", "Gorilles", "Forêt", "Unique"],
      mustSee: [
        { name: { fr: "Trekking gorilles de montagne (permis 700$)", en: "Mountain gorilla trekking ($700 permit)" }, wikipedia: "Mountain_gorilla" },
        { name: { fr: "Visite communautés Batwa (peuple pygmée)", en: "Batwa community visit (pygmy people)" }, wikipedia: "File:Twa dancers.jpg" },
        { name: { fr: "Lodge de luxe — nuit dans la jungle", en: "Luxury lodge — night in the jungle" }, wikipedia: "Bwindi_Impenetrable_National_Park" },
      ],
    },
    {
      id: 2,
      name: { fr: "Queen Elizabeth National Park", en: "Queen Elizabeth National Park" },
      region: { fr: "Uganda Ouest", en: "Western Uganda" },
      description: {
        fr: "Queen Elizabeth est le parc le plus visité d'Ouganda : les lions grimpeurs d'Ishasha (qui dorment dans les figuiers, phénomène rarissime), les chimpanzés du canyon de Kyambura, le canal Kazinga (une des plus belles concentrations d'hippos et de buffles du monde) et les flamants du lac Édouard.",
        en: "Queen Elizabeth is Uganda's most visited park: the tree-climbing lions of Ishasha (which sleep in fig trees, an extremely rare phenomenon), the chimpanzees of Kyambura Gorge, the Kazinga Channel (one of the finest concentrations of hippos and buffalo in the world) and the flamingos of Lake Edward.",
      },
      wikipedia: "File:Crater lake in Queen Elizabeth National Park.jpg",
      tags: ["Lions grimpeurs", "Chimpanzés", "Safari bateau", "Big Five"],
      mustSee: [
        { name: { fr: "Lions grimpeurs d'Ishasha (uniquement ici et Tanzanie)", en: "Ishasha tree-climbing lions (found only here and in Tanzania)" }, wikipedia: "File:Tree-climbing lions (Panthera leo).jpg" },
        { name: { fr: "Safari bateau canal Kazinga — hippos & buffles", en: "Kazinga Channel boat safari — hippos & buffalo" }, wikipedia: "Kazinga_Channel" },
        { name: { fr: "Trek chimpanzés Kyambura Gorge", en: "Kyambura Gorge chimpanzee trek" }, wikipedia: "Chimpanzee" },
        { name: { fr: "Lac Édouard — flamants et pélicans", en: "Lake Edward — flamingos and pelicans" }, wikipedia: "File:Fishermen on Lake Edward.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Chutes Murchison", en: "Murchison Falls" },
      region: { fr: "Uganda Nord-Ouest", en: "Northwestern Uganda" },
      description: {
        fr: "Murchison Falls est le parc national le plus grand d'Ouganda : les chutes Murchison, où le Nil Blanc s'engouffre en entier dans une fissure de 7 m de large pour plonger 43 m plus bas, sont parmi les plus spectaculaires d'Afrique. Le safari bateau jusqu'aux chutes révèle crocodiles du Nil, hippos et girafes.",
        en: "Murchison Falls is Uganda's largest national park: the Murchison Falls, where the entire White Nile forces through a 7 m wide gap before plunging 43 m below, are among the most spectacular in Africa. The boat safari to the falls reveals Nile crocodiles, hippos and giraffes.",
      },
      wikipedia: "Murchison_Falls",
      tags: ["Chutes", "Nil", "Safari bateau", "Girafes"],
      mustSee: [
        { name: { fr: "Chutes Murchison (Nil dans une fissure de 7m)", en: "Murchison Falls (the Nile through a 7 m gap)" }, wikipedia: "Murchison_Falls_National_Park" },
        { name: { fr: "Safari bateau Nil — crocodiles, hippos, oiseaux", en: "Nile boat safari — crocodiles, hippos, birds" }, wikipedia: "Nile_crocodile" },
        { name: { fr: "Girafes de Rothschild (espèce menacée)", en: "Rothschild's giraffe (endangered species)" }, wikipedia: "Rothschild's_giraffe" },
        { name: { fr: "Pêche au Nil — tilapia et capitaine du Nil", en: "Fishing on the Nile — tilapia and Nile perch" }, wikipedia: "Nile_perch" },
      ],
    },
    {
      id: 4,
      name: { fr: "Jinja — Source du Nil", en: "Jinja — Source of the Nile" },
      region: { fr: "Uganda Est", en: "Eastern Uganda" },
      description: {
        fr: "Jinja est la ville où le Nil Blanc prend sa source depuis le lac Victoria : l'endroit le plus symbolique du Nil, que John Hanning Speke identifia en 1862. C'est aussi la capitale des sports extrêmes d'Afrique de l'Est : rafting classe V, kayak, bungee sur le Nil et stand-up paddle.",
        en: "Jinja is the town where the White Nile springs from Lake Victoria: the most symbolic spot on the Nile, identified by John Hanning Speke in 1862. It is also East Africa's extreme sports capital: class V rafting, kayaking, bungee jumping over the Nile and stand-up paddleboarding.",
      },
      wikipedia: "Jinja,_Uganda",
      tags: ["Source du Nil", "Rafting", "Aventure", "Histoire"],
      mustSee: [
        { name: { fr: "Source du Nil Blanc — monument Speke", en: "Source of the White Nile — Speke Monument" }, wikipedia: "File:White_Nile_Fishermen_(18156464842).jpg" },
        { name: { fr: "Rafting classe V sur le Nil (adrénaline max)", en: "Class V rafting on the Nile (maximum adrenaline)" }, wikipedia: "File:Fun Rafting Elo River Magelang.jpg" },
        { name: { fr: "Bungee jumping sur le Nil (44 m)", en: "Bungee jumping over the Nile (44 m)" }, wikipedia: "Bungee_jumping" },
        { name: { fr: "Kayak & stand-up paddle (coucher de soleil)", en: "Kayaking & stand-up paddleboarding (sunset)" }, wikipedia: "Jinja,_Uganda" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Ouganda est moins cher que le Rwanda mais le permis gorilles y coûte 700$ (vs 1 500$). Kampala est une capitale animée avec des options pour tous les budgets. En dehors des parcs, les prix sont très accessibles.",
      en: "Uganda is cheaper than Rwanda, but the gorilla permit costs $700 (vs $1,500). Kampala is a lively capital with options for every budget. Outside the parks, prices are very affordable.",
    },
    currency: "UGX",
    exchangeRate: "1€ ≈ 4 200 UGX",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / hostel Kampala", en: "Guesthouse / hostel in Kampala" }, price: "15–35 €", detail: { fr: "Chambres propres avec clim", en: "Clean rooms with AC" } },
          { label: { fr: "Lodge mid-range parc national", en: "Mid-range national park lodge" }, price: "100–200 €", detail: { fr: "Repas inclus, guides", en: "Meals included, guides" } },
          { label: { fr: "Lodge luxe (Bwindi Gorilla)", en: "Luxury lodge (Bwindi Gorilla)" }, price: "400–1 000 €", detail: { fr: "All-inclusive, vue forêt", en: "All-inclusive, forest view" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Matoke (banane verte, plat national)", en: "Matoke (green banana, national dish)" }, price: "2–5 €", detail: { fr: "Cuisine locale copieuse", en: "Hearty local cuisine" } },
          { label: { fr: "Restaurant Kampala", en: "Restaurant in Kampala" }, price: "8–18 €", detail: { fr: "Cuisine ougandaise ou internationale", en: "Ugandan or international cuisine" } },
          { label: { fr: "Repas lodge jungle (inclus)", en: "Jungle lodge meal (included)" }, price: { fr: "inclus", en: "included" }, detail: { fr: "Gastronomie dans la forêt", en: "Fine dining in the forest" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Matatu (minibus collectif)", en: "Matatu (shared minibus)" }, price: "2–6 €", detail: { fr: "Kampala-Jinja ou villes", en: "Kampala-Jinja or between towns" } },
          { label: { fr: "Vol Entebbe–Kihihi (Bwindi)", en: "Entebbe–Kihihi flight (Bwindi)" }, price: "100–200 €", detail: { fr: "A/R, 1h vs 9h route", en: "Return, 1h vs 9h by road" } },
          { label: { fr: "4x4 avec chauffeur (journée)", en: "4x4 with driver (per day)" }, price: "80–130 €", detail: { fr: "Recommandé pour les parcs", en: "Recommended for the parks" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Permis gorilles Bwindi", en: "Bwindi gorilla permit" }, price: "700 $", detail: { fr: "1h avec une famille — à réserver longtemps à l'avance", en: "1h with a family — book well in advance" } },
          { label: { fr: "Trek chimpanzés Queen Elizabeth", en: "Queen Elizabeth chimpanzee trek" }, price: "100–150 €", detail: { fr: "Demi-journée guidée", en: "Guided half day" } },
          { label: { fr: "Rafting Nil (classe V, journée)", en: "Nile rafting (class V, full day)" }, price: "80–100 €", detail: { fr: "Depuis Jinja — épique", en: "From Jinja — epic" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–100 €/j", desc: { fr: "Guesthouse + matoke + matatu", en: "Guesthouse + matoke + matatu" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "180–350 €/j", desc: { fr: "Lodge mid-range + permis gorilles amorti", en: "Mid-range lodge + amortised gorilla permit" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "600 €+/j", desc: { fr: "Lodge gorilles all-inclusive + expériences privées", en: "All-inclusive gorilla lodge + private experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Entebbe/Kampala (1j) → Murchison Falls (2j) → Queen Elizabeth (2j) → Bwindi gorilles (3j) → Jinja (2j)",
        en: "Entebbe/Kampala (1d) → Murchison Falls (2d) → Queen Elizabeth (2d) → Bwindi gorillas (3d) → Jinja (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Entebbe", en: "Return flight Paris–Entebbe" }, amount: "500–800 €" },
            { label: { fr: "Permis gorilles (1 unité)", en: "Gorilla permit (1 unit)" }, amount: "650 € (700$)" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–650 €" },
            { label: { fr: "Vols intérieurs + transports", en: "Domestic flights + transport" }, amount: "300–500 €" },
            { label: { fr: "Activités & nourriture", en: "Activities & food" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "7 000 – 10 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Entebbe", en: "Return flight Paris–Entebbe" }, amount: "600–1 000 €" },
            { label: { fr: "Permis gorilles (2 unités)", en: "Gorilla permits (2 units)" }, amount: "1 300 € (1 400$)" },
            { label: { fr: "Lodges mid-range (10 nuits)", en: "Mid-range lodges (10 nights)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Vols intérieurs + 4x4", en: "Domestic flights + 4x4" }, amount: "800–1 200 €" },
            { label: { fr: "Chimpanzés + rafting + extras", en: "Chimpanzees + rafting + extras" }, amount: "600–1 000 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "16 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Entebbe (Business)", en: "Return flight Paris–Entebbe (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Permis gorilles (2+ unités)", en: "Gorilla permits (2+ units)" }, amount: "1 300 €+" },
            { label: { fr: "Lodges all-inclusive (10 nuits)", en: "All-inclusive lodges (10 nights)" }, amount: "5 000–9 000 €" },
            { label: { fr: "Vols charters & transferts privés", en: "Charter flights & private transfers" }, amount: "2 000–3 500 €" },
            { label: { fr: "Extras & expériences", en: "Extras & experiences" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~9h (Ethiopian Airlines via Addis, Kenya Airways via Nairobi)", en: "~9h (Ethiopian Airlines via Addis, Kenya Airways via Nairobi)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa en ligne obligatoire (~50$)", en: "Mandatory online e-Visa (~$50)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Shilling ougandais (1€ ≈ 4 200 UGX) — USD acceptés parcs", en: "Ugandan Shilling (1€ ≈ 4,200 UGX) — USD accepted in the parks" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Swahili + Anglais (officiels) + 40 langues locales", en: "Swahili + English (official) + 40 local languages" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 240 V (comme UK)", en: "Type G – 240 V (like the UK)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture Kampala et villes, très limitée forêts", en: "Good coverage in Kampala and towns, very limited in forests" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille obligatoire", en: "Not drinkable — bottled water mandatory" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE", en: "Malaria prophylaxis MANDATORY + yellow fever MANDATORY" } },
  ],
};
