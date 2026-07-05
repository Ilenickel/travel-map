export const AFGHANISTAN = {
  code: "AFG",
  numericId: 4,
  name: { fr: "Afghanistan", en: "Afghanistan" },
  emoji: "🇦🇫",
  capital: { fr: "Kaboul", en: "Kabul" },
  language: { fr: "Dari, Pachto", en: "Dari, Pashto" },
  currency: { fr: "Afghani (AFN)", en: "Afghani (AFN)" },
  timezone: "UTC+4:30",
  filter: { budgetMin: 40, budgetMid: 80, tripMin: 900, tripMid: 1800 },
  description: {
    fr: "L'Afghanistan est une terre de contrastes dramatiques, où les majestueuses montagnes de l'Hindu Kush plongent vers des déserts brûlants et des vallées verdoyantes. Carrefour historique de la Route de la Soie, il a vu passer Alexandre le Grand, les armées de Gengis Khan et les caravanes de marchands reliant l'Orient et l'Occident. Depuis la prise du pouvoir par les talibans en août 2021, le pays est effectivement fermé au tourisme international et classé en zone rouge absolue par l'ensemble des gouvernements occidentaux.",
    en: "Afghanistan is a land of dramatic contrasts, where the majestic Hindu Kush mountains plunge into scorching deserts and lush valleys. A historic crossroads of the Silk Road, it has seen Alexander the Great, Genghis Khan's armies and merchant caravans travelling between East and West. Since the Taliban takeover in August 2021, the country has effectively been closed to international tourism and is classified as an absolute red zone by all Western governments.",
  },
  bestPeriods: [
    {
      months: { fr: "Avr–Jun", en: "Apr–Jun" },
      label: { fr: "Printemps (historique)", en: "Spring (historical)" },
      color: "#22c55e",
      description: {
        fr: "Avant 2021 : la meilleure période avec des températures agréables, les lacs de Band-e-Amir remplis et les champs en fleurs dans les vallées.",
        en: "Before 2021: the best time to go, with pleasant temperatures, full lakes at Band-e Amir and flowering fields in the valleys.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Sep–Oct", en: "Sep–Oct" },
      label: { fr: "Automne (historique)", en: "Autumn (historical)" },
      color: "#22c55e",
      description: {
        fr: "Avant 2021 : températures douces, vendanges de grenades dans le Kandahar, couleurs automnales dans les montagnes du Nouristan.",
        en: "Before 2021: mild temperatures, pomegranate harvests around Kandahar, and autumn colours in the mountains of Nuristan.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Nov–Mar", en: "Nov–Mar" },
      label: { fr: "Hiver rigoureux", en: "Harsh winter" },
      color: "#f59e0b",
      description: {
        fr: "Froid intense dans les montagnes, cols fermés par la neige. Kaboul peut descendre bien en dessous de zéro.",
        en: "Bitter cold in the mountains, with passes closed by snow. Kabul can drop well below freezing.",
      },
      icon: "❄️",
    },
  ],
  weatherCities: [
    {
      id: "kabul",
      name: "Kaboul",
      region: { fr: "Est (capitale)", en: "East (capital)" },
      data: [
        { month: "Jan", temp: -3, rain: 35, icon: "❄️" },
        { month: "Fév", temp: 1, rain: 50, icon: "❄️" },
        { month: "Mar", temp: 10, rain: 65, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30, icon: "☀️" },
        { month: "Jun", temp: 25, rain: 5, icon: "☀️" },
        { month: "Jul", temp: 26, rain: 5, icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 5, icon: "☀️" },
        { month: "Sep", temp: 21, rain: 5, icon: "☀️" },
        { month: "Oct", temp: 14, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 25, icon: "⛅" },
        { month: "Déc", temp: 1, rain: 30, icon: "❄️" },
      ],
    },
    {
      id: "kandahar",
      name: "Kandahar",
      region: { fr: "Sud", en: "South" },
      data: [
        { month: "Jan", temp: 5, rain: 15, icon: "❄️" },
        { month: "Fév", temp: 9, rain: 20, icon: "⛅" },
        { month: "Mar", temp: 16, rain: 25, icon: "☀️" },
        { month: "Avr", temp: 22, rain: 15, icon: "☀️" },
        { month: "Mai", temp: 28, rain: 5, icon: "⛅" },
        { month: "Jun", temp: 33, rain: 1, icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 34, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 29, rain: 0, icon: "⛅" },
        { month: "Oct", temp: 21, rain: 5, icon: "☀️" },
        { month: "Nov", temp: 13, rain: 10, icon: "⛅" },
        { month: "Déc", temp: 6, rain: 15, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Bamiyan",
      region: { fr: "Province de Bamiyan", en: "Bamiyan Province" },
      description: {
        fr: "La vallée de Bamiyan était l'un des sites archéologiques les plus émouvants du monde, avec ses deux bouddhas colossaux taillés dans la falaise au VIe siècle — détruits à la dynamite par les talibans en 2001. Les niches béantes dans la falaise ocre témoignent encore de cette perte culturelle irréparable. Autour, des centaines de grottes bouddhistes ornées de fresques et les vestiges d'une cité florissante sur la Route de la Soie en font un site UNESCO d'une valeur exceptionnelle.",
        en: "The Bamiyan Valley was one of the world's most moving archaeological sites, with two colossal Buddhas carved into the cliff in the 6th century—blown up by the Taliban in 2001. The gaping niches in the ochre rock still bear witness to that irreparable cultural loss. Around them, hundreds of Buddhist caves decorated with frescoes and the remains of a once-thriving Silk Road city make this a UNESCO site of exceptional value.",
      },
      wikipedia: "File:Black_Hawk_flying_over_a_valley_in_Bamyan.jpg",
      tags: ["UNESCO", "Bouddhisme", "Archéologie", "Route de la Soie"],
      mustSee: [
        { name: { fr: "Niches des bouddhas de Bamiyan — mémorial des colosses détruits", en: "Bamiyan Buddha niches — memorial to the destroyed colossi" }, wikipedia: "File:Buddha of Bamiyan.jpg" },
        { name: { fr: "Grottes de Bamiyan — monastères rupestres bouddhistes", en: "Bamiyan caves — Buddhist rock-cut monasteries" }, wikipedia: "File:Bamiyan Valley2.jpg" },
        { name: { fr: "Shahr-e Gholghola — citadelle médiévale surnommée 'cité des cris'", en: "Shahr-e Gholghola — medieval citadel nicknamed the 'city of screams'" }, wikipedia: "File:02- Gholghola Mountains.jpg" },
        { name: { fr: "Qala-e Dokhtar — château de la Fille de Bamiyan", en: "Qala-e Dokhtar — Bamiyan's Maiden Fortress" }, wikipedia: "File:Ghal'eh_Dokhtar2.jpg" },
      ],
    },
    {
      id: 2,
      name: "Band-e Amir",
      region: { fr: "Province de Bamiyan", en: "Bamiyan Province" },
      description: {
        fr: "Les lacs de Band-e Amir, surnommés les « diamants de l'Afghanistan », forment une série de six lacs aux eaux bleu azur d'une transparence irréelle, séparés par des barrages naturels de travertin blanc. Perchés à 2 900 mètres d'altitude dans les montagnes de l'Hindu Kush, ils constituent l'un des paysages naturels les plus spectaculaires d'Asie centrale et ont été classés premier parc national d'Afghanistan en 2009.",
        en: "The lakes of Band-e Amir, nicknamed the 'diamonds of Afghanistan', form a chain of six lakes with unreal azure-blue water, separated by natural white travertine dams. Set at 2,900 metres in the Hindu Kush mountains, they are among Central Asia's most spectacular natural landscapes and were designated Afghanistan's first national park in 2009.",
      },
      wikipedia: "Band-e_Amir_National_Park",
      tags: ["Nature", "Lacs", "Randonnée", "Parc national"],
      mustSee: [
        { name: { fr: "Lac Band-e Haibat — le plus grand et le plus sacré", en: "Band-e Haibat Lake — the largest and most sacred" }, wikipedia: "Band-e_Amir_National_Park" },
        { name: { fr: "Lac Band-e Zulfiqar — eaux turquoise entre falaises de travertin", en: "Band-e Zulfiqar Lake — turquoise water between travertine cliffs" }, wikipedia: "File:Band-e-Amir National Park-9.jpg" },
        { name: { fr: "Barrage naturel de Band-e Pudina — cascades blanches", en: "Band-e Pudina natural dam — white cascades" }, wikipedia: "File:Band-e-Amir National Park-5.jpg" },
        { name: { fr: "Vue panoramique depuis la crête ouest — au coucher du soleil", en: "Panoramic view from the western ridge — at sunset" }, wikipedia: "File:DSC8188-Pano Band-E Amir National Park.jpg" },
      ],
    },
    {
      id: 3,
      name: "Hérat",
      region: { fr: "Province de Hérat (Ouest)", en: "Herat Province (West)" },
      description: {
        fr: "Ancienne capitale culturelle de l'empire timouride au XVe siècle, Hérat était surnommée « la Florence de l'Orient » pour son rayonnement artistique et intellectuel. La Grande Mosquée de la Vieille Ville, ses minarets sculptés et sa citadelle reconstruite évoquent une splendeur aujourd'hui éclipsée par les conflits. La ville reste la troisième plus grande d'Afghanistan et un centre économique proche de la frontière iranienne.",
        en: "A former cultural capital of the Timurid Empire in the 15th century, Herat was nicknamed the 'Florence of the East' for its artistic and intellectual brilliance. The Great Mosque of the Old City, its carved minarets and its rebuilt citadel recall a splendour now overshadowed by conflict. The city remains Afghanistan's third largest and an important economic hub near the Iranian border.",
      },
      wikipedia: "Herat",
      tags: ["Histoire", "Architecture", "Timourides", "Islam"],
      mustSee: [
        { name: { fr: "Grande Mosquée de Hérat — joyau de l'architecture islamique", en: "Great Mosque of Herat — a jewel of Islamic architecture" }, wikipedia: "File:Herat Masjidi Jami courtyard.jpg" },
        { name: { fr: "Minarets de Musalla — vestiges d'un complexe timouride du XVe s.", en: "Musalla minarets — remains of a 15th-century Timurid complex" }, wikipedia: "File:Musalla Complex in 2009.jpg" },
        { name: { fr: "Citadelle d'Alexandre (Qala Ikhtiyaruddin) — forteresse reconstruite", en: "Citadel of Alexander (Qala Ikhtiyaruddin) — rebuilt fortress" }, wikipedia: "File:Herat Citadel.jpg" },
        { name: { fr: "Bazar de Hérat — atmosphère de caravansérail millénaire", en: "Herat bazaar — the atmosphere of an age-old caravanserai" }, wikipedia: "Herat" },
      ],
    },
    {
      id: 4,
      name: "Kaboul",
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Kaboul, nichée dans une cuvette à 1 800 mètres d'altitude entre des montagnes arides, fut longtemps une ville cosmopolite à la croisée des cultures persane, turque et indo-bouddhiste. Son musée national, pillé mais partiellement restauré, conserve des trésors inestimables de l'art bactrien et gréco-bouddhiste. La vieille ville, le bazar Mandawi et les jardins de Babur — dernier refuge du tombeau du fondateur de l'empire moghol — témoignent d'une histoire millénaire.",
        en: "Nestled in a basin at 1,800 metres above sea level between arid mountains, Kabul was long a cosmopolitan city at the crossroads of Persian, Turkic and Indo-Buddhist cultures. Its national museum, looted but partly restored, preserves invaluable treasures of Bactrian and Greco-Buddhist art. The old city, Mandawi bazaar and the Gardens of Babur—the final resting place of the Mughal Empire's founder—bear witness to a history stretching back millennia.",
      },
      wikipedia: "Kabul",
      tags: ["Ville", "Musée", "Histoire", "Art bactrien"],
      mustSee: [
        { name: { fr: "Musée national d'Afghanistan — art bactrien et gréco-bouddhiste", en: "National Museum of Afghanistan — Bactrian and Greco-Buddhist art" }, wikipedia: "National_Museum_of_Afghanistan" },
        { name: { fr: "Jardins de Babur — mausolée du fondateur de l'empire moghol", en: "Gardens of Babur — mausoleum of the founder of the Mughal Empire" }, wikipedia: "File:Babur Gardens.jpg" },
        { name: { fr: "Bazar Mandawi — cœur commercial historique de Kaboul", en: "Mandawi Bazaar — Kabul's historic commercial heart" }, wikipedia: "File:Stolica Afganistanu Kabul w 2009 roku 02.jpg" },
        { name: { fr: "Darul Aman — palais en ruine, symbole de la tragédie afghane", en: "Darul Aman — ruined palace, symbol of Afghanistan's tragedy" }, wikipedia: "Darul_Aman_Palace" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "AVERTISSEMENT : L'Afghanistan est classé en zone rouge absolue (formellement déconseillé) par le Ministère des Affaires étrangères français et la quasi-totalité des gouvernements occidentaux. Le tourisme y est actuellement impossible. Les données ci-dessous sont fournies à titre historique et informatif uniquement, basées sur la situation pré-2021.",
      en: "WARNING: Afghanistan is classified as an absolute red zone (formally advised against) by the French Ministry for Europe and Foreign Affairs and by nearly all Western governments. Tourism there is currently impossible. The data below is provided for historical and informational purposes only, based on the pre-2021 situation.",
    },
    currency: "AFN",
    exchangeRate: "1€ ≈ 90–100 AFN (historique)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit (historique)", en: "Accommodation / night (historical)" },
        items: [
          { label: { fr: "Auberge de jeunesse / dortoir", en: "Youth hostel / dorm" }, min: 8, max: 15 },
          { label: { fr: "Guesthouse locale", en: "Local guesthouse" }, min: 20, max: 40 },
          { label: { fr: "Hôtel international", en: "International hotel" }, min: 60, max: 120 },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas local (pulao, kebab)", en: "Local meal (pulao, kebab)" }, min: 2, max: 5 },
          { label: { fr: "Restaurant de qualité moyenne", en: "Mid-range restaurant" }, min: 5, max: 12 },
          { label: { fr: "Restaurant pour expatriés", en: "Expat restaurant" }, min: 15, max: 30 },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus intercity (ex: Kaboul–Bamiyan)", en: "Intercity bus (e.g. Kabul–Bamiyan)" }, min: 5, max: 10 },
          { label: { fr: "4x4 avec chauffeur/guide (journée)", en: "4x4 with driver/guide (per day)" }, min: 50, max: 100 },
          { label: { fr: "Vol intérieur (Kaboul–Hérat)", en: "Domestic flight (Kabul–Herat)" }, min: 60, max: 120 },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Guide local (journée)", en: "Local guide (per day)" }, min: 30, max: 60 },
          { label: { fr: "Entrée musée national", en: "National museum entry" }, min: 2, max: 5 },
          { label: { fr: "Trek accompagné (Hindu Kush)", en: "Guided trek (Hindu Kush)" }, min: 40, max: 80 },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "30–50 €/j",
        desc: { fr: "Budget historique (pré-2021). Actuellement inapplicable — pays fermé au tourisme.", en: "Historical budget (pre-2021). Currently not applicable—the country is closed to tourism." },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "80–150 €/j",
        desc: { fr: "Budget journaliste/ONG avec sécurité renforcée. Actuellement inapplicable.", en: "Journalist/NGO budget with reinforced security. Currently not applicable." },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Kaboul → Bamiyan → Band-e Amir → Hérat", en: "Kabul → Bamiyan → Band-e Amir → Herat" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kaboul", en: "Return flight Paris–Kabul" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "100–180 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "80–130 €" },
            { label: { fr: "Activités + guide", en: "Activities + guide" }, amount: "80–120 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kaboul", en: "Return flight Paris–Kabul" }, amount: "700–900 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "400–600 €" },
            { label: { fr: "Transports (4x4 privé)", en: "Transport (private 4x4)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "150–250 €" },
            { label: { fr: "Activités + guide", en: "Activities + guide" }, amount: "150–250 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: {
        fr: "8–12h via Dubaï, Istanbul ou Delhi (pas de vols directs). Aéroport de Kaboul partiellement opérationnel sous contrôle taliban.",
        en: "8–12h via Dubai, Istanbul or Delhi (no direct flights). Kabul airport is only partially operational under Taliban control.",
      },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: {
        fr: "IMPOSSIBLE — ambassade afghane non fonctionnelle en France. L'Afghanistan est classé zone rouge absolue : tout voyage est formellement déconseillé par le Quai d'Orsay.",
        en: "IMPOSSIBLE — the Afghan embassy in France is not operational. Afghanistan is classified as an absolute red zone: all travel is formally advised against by the French foreign ministry.",
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: {
        fr: "Afghani (AFN). Espèces uniquement. Économie largement informelle sous contrôle taliban.",
        en: "Afghani (AFN). Cash only. The economy is largely informal under Taliban control.",
      },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: {
        fr: "Dari (persan afghan) et Pachto — les deux langues officielles. L'anglais est compris par une minorité éduquée dans les grandes villes.",
        en: "Dari (Afghan Persian) and Pashto—the country's two official languages. English is understood by a small educated minority in the main cities.",
      },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: {
        fr: "Type C/F, 220V — alimentation électrique très instable dans l'ensemble du pays.",
        en: "Type C/F, 220V — the power supply is highly unreliable across the country.",
      },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: {
        fr: "Infrastructure médicale quasi inexistante en dehors de Kaboul. Vaccins recommandés : hépatites A et B, typhoïde, rage. Paludisme dans les zones basses.",
        en: "Medical infrastructure is almost non-existent outside Kabul. Recommended vaccines: hepatitis A and B, typhoid, rabies. Malaria is present in lowland areas.",
      },
    },
    {
      icon: "⚠️",
      label: { fr: "Sécurité", en: "Safety" },
      value: {
        fr: "ZONE ROUGE ABSOLUE. Risques extrêmes d'enlèvements, d'attentats et de conflits armés. Aucun Français ne devrait se rendre en Afghanistan en 2025–2026. Tous les ressortissants occidentaux sont des cibles potentielles.",
        en: "ABSOLUTE RED ZONE. Extreme risks of kidnapping, attacks and armed conflict. No French national should travel to Afghanistan in 2025–2026. All Western nationals are potential targets.",
      },
    },
    {
      icon: "🚫",
      label: { fr: "Restrictions talibanes", en: "Taliban restrictions" },
      value: {
        fr: "Les femmes étrangères doivent porter le hijab intégral. Photographie très restreinte. Alcool interdit. Musique interdite dans l'espace public. Toute activité perçue comme contraire à l'islam rigoriste est proscrite.",
        en: "Foreign women are required to wear full hijab. Photography is heavily restricted. Alcohol is banned. Music is forbidden in public spaces. Any activity perceived as contrary to hardline Islam is prohibited.",
      },
    },
  ],
};
