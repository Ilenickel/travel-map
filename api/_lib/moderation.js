// Module de modération de contenu basé sur OpenAI.
// - Moderation API (gratuite) : insultes, haine, NSFW, violence, etc.
// - GPT-4o-mini : détection de propos politiques/géopolitiques (politique stricte),
//   vérification de cohérence factuelle d'une destination (pays ↔ destination ↔
//   description ↔ lieux), et analyse des images (contenu, pertinence, géographie).
//   Toutes les vérifications fonctionnent quelle que soit la langue du contenu.
//
// Toutes les fonctions renvoient soit { ok: true }, soit { ok: false, reason: '...' }.
// En cas d'indisponibilité du service, on lève une ModerationUnavailableError
// pour que l'appelant réponde « réessayez » au lieu de rejeter à tort le contenu.

const OPENAI_BASE = 'https://api.openai.com/v1';
const TEXT_MODEL = 'gpt-4o-mini';

export class ModerationUnavailableError extends Error {
  constructor(message) {
    super(message || 'Service de modération indisponible');
    this.name = 'ModerationUnavailableError';
  }
}

function apiKey() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new ModerationUnavailableError('Clé OpenAI absente côté serveur');
  return key;
}

// Mappe les catégories de la Moderation API gratuite vers un message utilisateur en français.
const MODERATION_CATEGORY_FR = {
  hate: 'propos haineux',
  'hate/threatening': 'propos haineux et menaçants',
  harassment: 'propos injurieux ou harcelants',
  'harassment/threatening': 'menaces',
  sexual: 'contenu à caractère sexuel',
  'sexual/minors': 'contenu sexuel impliquant des mineurs',
  violence: 'contenu violent',
  'violence/graphic': 'contenu violent ou choquant',
  'self-harm': 'contenu lié à l’automutilation',
  'self-harm/intent': 'contenu lié à l’automutilation',
  'self-harm/instructions': 'contenu lié à l’automutilation',
  illicit: 'contenu illicite',
  'illicit/violent': 'contenu illicite et violent',
};

async function callOpenAI(path, body) {
  let res;
  try {
    res = await fetch(`${OPENAI_BASE}${path}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new ModerationUnavailableError(`Réseau OpenAI : ${err.message}`);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    // Erreur côté OpenAI (quota, panne, requête invalide) : service considéré indisponible
    throw new ModerationUnavailableError(`OpenAI ${res.status} : ${text.slice(0, 300)}`);
  }
  return res.json();
}

// 1) Moderation API gratuite sur l'ensemble des textes.
async function freeTextModeration(texts) {
  const joined = texts.filter(Boolean).join('\n\n');
  if (!joined.trim()) return { ok: true };
  const data = await callOpenAI('/moderations', {
    model: 'omni-moderation-latest',
    input: joined,
  });
  const result = data?.results?.[0];
  if (!result) return { ok: true };
  if (result.flagged) {
    const cats = Object.entries(result.categories || {})
      .filter(([, v]) => v)
      .map(([k]) => MODERATION_CATEGORY_FR[k] || k);
    const label = cats[0] || 'contenu inapproprié';
    return { ok: false, reason: `Contenu refusé : ${label}.` };
  }
  return { ok: true };
}

// 2) GPT-4o-mini : détection stricte des propos politiques/géopolitiques et autres dérives
//    que la Moderation API gratuite ne couvre pas.
async function strictTextPolicy(fields) {
  const parts = fields
    .filter((f) => f.value && f.value.trim())
    .map((f) => `${f.label} : "${f.value.trim()}"`);
  if (!parts.length) return { ok: true };

  const system = `Tu es un modérateur pour une application de voyage et de tourisme. Le contenu doit rester strictement touristique et bienveillant.
Tu dois REFUSER le contenu s'il contient l'un des éléments suivants :
- insultes, grossièretés, propos injurieux ou méprisants ;
- propos haineux ou discriminatoires (racisme, sexisme, homophobie, religion, etc.) ;
- TOUTE prise de position ou mention politique ou géopolitique : conflits (par ex. Israël-Palestine, Ukraine-Russie), critiques ou éloges de gouvernements, de dirigeants, de partis, d'idéologies, de régimes, propagande, appels à manifester, etc. ;
- spam, publicité, arnaque, liens ou coordonnées commerciales ;
- coordonnées personnelles (téléphone, email, adresse précise).
Sois STRICT sur le politique : même une simple mention d'un conflit ou d'un jugement politique doit être refusée.
N'utilise PAS le simple fait qu'un pays soit cité comme motif de refus : citer un pays comme destination touristique est normal.
Réponds UNIQUEMENT en JSON : {"flagged": boolean, "reason": "phrase courte en français, adressée à l'utilisateur, expliquant le motif du refus"}. Si tout est correct, {"flagged": false, "reason": ""}.`;

  const userMsg = `Contenu à analyser :\n${parts.join('\n')}`;

  const data = await callOpenAI('/chat/completions', {
    model: TEXT_MODEL,
    temperature: 0,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: userMsg },
    ],
  });

  let verdict;
  try {
    verdict = JSON.parse(data.choices?.[0]?.message?.content || '{}');
  } catch {
    throw new ModerationUnavailableError('Réponse de modération illisible');
  }
  if (verdict.flagged) {
    return { ok: false, reason: verdict.reason || 'Le texte contient des propos non autorisés.' };
  }
  return { ok: true };
}

// 3) GPT-4o-mini : vérification de COHÉRENCE FACTUELLE d'une destination.
//    Croise pays déclaré ↔ nom de la destination ↔ description ↔ noms des lieux.
//    Détecte : destination inexistante / dans le mauvais pays, lieu n'appartenant
//    pas à la destination, et caractérisation de la description qui CONTREDIT la
//    réalité connue du lieu (ex. « Arcachon futuriste »). Les ressentis purement
//    évaluatifs et les caractérisations vérifiables (ex. « Chongqing cyberpunk »)
//    restent autorisés.
async function destinationCoherence({ countryName, name, description, placeNames }) {
  const placesBlock = placeNames.length
    ? placeNames.map((p, i) => `  - Lieu ${i + 1} : "${p}"`).join('\n')
    : '  (aucun)';

  const system = `Tu es un expert en géographie et en tourisme mondial. Tu vérifies la COHÉRENCE FACTUELLE d'une fiche de destination touristique soumise par un utilisateur. Analyse le contenu QUELLE QUE SOIT sa langue (français, anglais, espagnol, etc.).
Le pays de publication est imposé par l'application : « ${countryName} ».

REFUSE (flagged=true) UNIQUEMENT si l'un de ces points est faux :
1. PAYS / EXISTENCE — La destination « ${name} » doit être un lieu réel situé en/au « ${countryName} ». Refuse si ce lieu n'existe pas, ou s'il se trouve dans un AUTRE pays (exemple : « Arcachon » publié sous « Chine » alors qu'Arcachon est en France → refus).
2. LIEUX — Chaque lieu listé doit réellement se situer dans « ${name} » ou à proximité immédiate. Refuse si un lieu appartient clairement à un autre endroit (exemple : « Tour Eiffel » déclarée comme lieu d'Arcachon, alors qu'elle est à Paris → refus).
3. DESCRIPTION — Par défaut, ACCEPTE la description. Tu n'as le droit de la refuser que dans deux cas précis :
   a) Elle contient une affirmation factuelle précise et fausse, vérifiable objectivement (« Chongqing est la capitale de la France », « cette ville est au bord de l'océan Pacifique » alors que non).
   b) Elle attribue au lieu une IDENTITÉ qui contredit FRONTALEMENT sa nature réelle et connue, ET tu peux nommer précisément ce que le lieu est en réalité. Exemple : « Arcachon, ville futuriste » → tu peux refuser car Arcachon est une station balnéaire Belle Époque (bassin, ostréiculture, dune du Pilat), ce qui est l'opposé de « futuriste ».

INTERDICTIONS ABSOLUES (ne jamais refuser pour ces motifs) :
- Ne refuse JAMAIS une description au motif qu'elle serait « subjective », « vague », « marketing », « exagérée », « pouvant prêter à confusion » ou « pas assez précise ». Ce ne sont PAS des motifs valables.
- Une caractérisation d'ambiance largement associée au lieu et facilement vérifiable est CORRECTE et doit être ACCEPTÉE. Exemple incontournable : « Chongqing, ville cyberpunk » → ACCEPTE sans hésiter (Chongqing est mondialement reconnue comme LA ville cyberpunk : gratte-ciels dans la brume, autoponts enchevêtrés, métro traversant les immeubles). Ce serait une ERREUR de la refuser.
- Les ressentis évaluatifs (« magnifique », « paradisiaque », « romantique », « incontournable ») sont toujours acceptés.

Règle de décision pour une caractérisation d'identité : refuse UNIQUEMENT si tu es capable d'écrire dans la raison « Ce lieu est en réalité [nature concrète], ce qui contredit [terme] ». Si tu n'es pas capable de nommer une telle contradiction concrète et certaine, ACCEPTE.

Règles générales :
- N'INVENTE PAS d'erreur : un lieu obscur mais plausible (petit village, quartier, site local peu connu) ne doit pas être refusé. Si tu n'es pas certain qu'un lieu existe, ne le refuse pas pour ce seul motif.
- Ne refuse que sur une incohérence claire et vérifiable (mauvais pays, monument célèbre déplacé, fait objectivement faux).

Réponds UNIQUEMENT en JSON : {"flagged": boolean, "reason": "phrase courte en français, adressée à l'utilisateur, expliquant précisément l'incohérence détectée"}. Si tout est cohérent, {"flagged": false, "reason": ""}.`;

  const userMsg = `Pays de publication : « ${countryName} »
Nom de la destination : "${name}"
Description : "${description}"
Lieux déclarés :
${placesBlock}`;

  const data = await callOpenAI('/chat/completions', {
    model: TEXT_MODEL,
    temperature: 0,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: userMsg },
    ],
  });

  let verdict;
  try {
    verdict = JSON.parse(data.choices?.[0]?.message?.content || '{}');
  } catch {
    throw new ModerationUnavailableError('Réponse de modération illisible');
  }
  if (verdict.flagged) {
    return { ok: false, reason: verdict.reason || 'Les informations de la destination sont incohérentes.' };
  }
  return { ok: true };
}

// 4) GPT-4o-mini vision : analyse d'une image (contenu + pertinence + géographie).
//    expected = ce que l'image est censée représenter (nom du lieu / destination), ou null.
//    parent   = nom de la destination parente pour une image de lieu (contexte), ou null.
//    country  = { code, name } pour vérifier la plausibilité géographique.
//    detail   = 'high' (couverture) | 'low' (images de lieux) — 'high' détecte mieux
//               les détails fins (texte/logo discret, monument lointain).
async function moderateImage({ url, expected, parent, country, labelFr, detail = 'high' }) {
  const checks = [
    `1) CONTENU APPROPRIÉ — Aucune nudité, contenu sexuel, violence/gore, symbole haineux, ni texte injurieux ou politique.`,
    `2) IMAGE TROMPEUSE / PARASITE — Aucun texte, message, slogan, watermark, QR code, logo ou publicité incrustés ou cachés dans l'image. Aucune capture d'écran, mème, dessin/illustration, ni photo d'objet, d'écran ou de document sans rapport avec un lieu touristique.`,
  ];
  let n = 3;
  if (expected) {
    const ctxParts = [];
    if (parent && parent !== expected) ctxParts.push(`située dans la destination « ${parent} »`);
    if (country?.name) ctxParts.push(`en/au ${country.name}`);
    const ctx = ctxParts.length ? ` (${ctxParts.join(', ')})` : '';
    checks.push(`${n}) PERTINENCE — L'image est censée représenter « ${expected} »${ctx}. Applique cette distinction :
   • Si l'image montre une scène GÉNÉRIQUE et non identifiable (une plage quelconque, une montagne quelconque, une rue de ville quelconque), ACCEPTE-la dès qu'elle pourrait raisonnablement correspondre à ce type de lieu : tu n'as pas à prouver que c'est exactement cet endroit.
   • En revanche, si l'image montre un LIEU ou un MONUMENT RECONNAISSABLE et IDENTIFIABLE (un site célèbre, un repère géographique connu), il doit réellement se trouver à « ${expected} » ou tout près. REFUSE si ce lieu identifiable est manifestement situé AILLEURS, même dans le même pays. Exemples de refus : la Tour Eiffel pour une destination qui n'est pas Paris ; la Grande Muraille de Chine (près de Pékin) utilisée pour Chongqing, qui en est très éloignée.`);
    n++;
  }
  if (country?.name) {
    checks.push(`${n}) PLAUSIBILITÉ GÉOGRAPHIQUE — Refuse aussi si un monument ou un paysage emblématique appartient de façon certaine à un autre pays que ${country.name}. En cas de doute raisonnable sur une scène générique, accepte.`);
    n++;
  }

  const system = `Tu es un modérateur d'images pour une application de voyage. Tu analyses une image et tu vérifies, dans l'ordre :
${checks.join('\n')}
Principe de calibrage :
- TOLÉRANCE ZÉRO sur les points 1 et 2 : tout contenu obscène, choquant, haineux, ainsi que tout texte/logo/message caché, mème, capture ou image parasite doit être refusé sans hésiter.
- BÉNÉFICE DU DOUTE sur les scènes GÉNÉRIQUES uniquement : ne bloque pas une photo non identifiable qui ressemble plausiblement au lieu attendu (plage, montagne, rue quelconques). MAIS si l'image montre un lieu/monument RECONNAISSABLE situé manifestement ailleurs que le lieu attendu (même dans le même pays), REFUSE pour pertinence.
Réponds UNIQUEMENT en JSON : {"flagged": boolean, "category": "..."}. Si l'image est correcte : {"flagged": false, "category": ""}. Si elle est refusée, "category" vaut EXACTEMENT l'une de ces valeurs :
- "inapproprie" : contenu obscène, sexuel, violent, haineux ou choquant (point 1) ;
- "parasite" : texte/slogan/logo/watermark/QR code incrusté, capture d'écran, mème, dessin ou image sans rapport avec un lieu (point 2) ;
- "pertinence" : l'image ne correspond pas au lieu attendu ou est géographiquement incohérente (points 3 et 4).`;

  const data = await callOpenAI('/chat/completions', {
    model: TEXT_MODEL,
    temperature: 0,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: system },
      {
        role: 'user',
        content: [
          { type: 'text', text: `Analyse cette image (${labelFr || 'image'}).` },
          { type: 'image_url', image_url: { url, detail } },
        ],
      },
    ],
  });

  let verdict;
  try {
    verdict = JSON.parse(data.choices?.[0]?.message?.content || '{}');
  } catch {
    throw new ModerationUnavailableError('Réponse de modération illisible');
  }
  if (verdict.flagged) {
    const label = labelFr || 'image';
    const cap = label.charAt(0).toUpperCase() + label.slice(1);
    switch (verdict.category) {
      case 'inapproprie':
        return { ok: false, reason: `${cap} : contenu inapproprié.` };
      case 'parasite':
        return { ok: false, reason: `${cap} : texte, logo ou image parasite détecté.` };
      case 'pertinence':
      default:
        return { ok: false, reason: `${cap} non pertinente.` };
    }
  }
  return { ok: true };
}

/**
 * Modère un ensemble de textes et d'images, avec vérification optionnelle de
 * cohérence factuelle (pour les destinations communautaires).
 * @param {Object} params
 * @param {{label:string, value:string}[]} [params.texts]
 * @param {{url:string, expected?:string|null, parent?:string|null, labelFr?:string, detail?:string}[]} [params.images]
 * @param {{code:string, name:string}} [params.country]
 * @param {{name:string, description:string, placeNames:string[]}} [params.coherence]
 *        Si fourni (avec un nom de pays valide), déclenche la vérification de
 *        cohérence factuelle pays ↔ destination ↔ description ↔ lieux.
 * @returns {Promise<{ok:true} | {ok:false, reason:string}>}
 */
export async function moderateContent({ texts = [], images = [], country = null, coherence = null }) {
  // a) Moderation API gratuite sur tout le texte
  const free = await freeTextModeration(texts.map((t) => t.value));
  if (!free.ok) return free;

  // b) Politique stricte (politique/géopolitique, insultes subtiles, spam, etc.)
  const strict = await strictTextPolicy(texts);
  if (!strict.ok) return strict;

  // c) Cohérence factuelle (destinations) : la destination existe-t-elle dans le
  //    pays déclaré ? La description et les lieux sont-ils cohérents ?
  if (coherence && country?.name) {
    const coh = await destinationCoherence({
      countryName: country.name,
      name: coherence.name,
      description: coherence.description,
      placeNames: Array.isArray(coherence.placeNames) ? coherence.placeNames : [],
    });
    if (!coh.ok) return coh;
  }

  // d) Images : analysées en parallèle pour limiter la latence, puis on renvoie
  //    le premier problème dans l'ordre des images fournies.
  const validImages = images.filter((img) => img?.url);
  if (validImages.length) {
    const results = await Promise.all(
      validImages.map((img) =>
        moderateImage({
          url: img.url,
          expected: img.expected ?? null,
          parent: img.parent ?? null,
          country,
          labelFr: img.labelFr,
          detail: img.detail ?? 'high',
        })
      )
    );
    const firstBad = results.find((r) => !r.ok);
    if (firstBad) return firstBad;
  }

  return { ok: true };
}
