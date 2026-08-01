// Endpoint unique des lieux (visites ET restaurants), communautaires ou
// statiques : ajout, modification, suppression, vote.
//
// Regroupe ce qui était auparavant add-place.js / delete-place.js /
// vote-place.js. Motif : le plan Vercel Hobby plafonne à 12 fonctions
// serverless, toutes déjà prises — fusionner ces trois routes (même domaine
// métier, seule la méthode diffère) a libéré les slots nécessaires aux
// restaurants (recherche Geoapify + avis notés). L'action demandée arrive dans
// `action`.
//
// Le client a déjà uploadé la photo dans Storage avant d'appeler cet endpoint.
// La modération IA (texte + image) est effectuée ici avant l'insertion/mise à jour.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, checkPlaceCoherence, ModerationUnavailableError } from './_lib/moderation.js';
import { findDuplicatePlace, registerAutoVote } from './_lib/placeDuplicates.js';

const PHOTO_BUCKET = 'destination-photos';

const TABLE_FOR = { community: 'destination_places', static: 'static_destination_places' };

// Doit rester identique à `slugifyTag` de src/lib/cuisineTags.js : les deux
// côtés produisent l'identifiant d'un type de cuisine, et la moindre différence
// créerait deux tags pour la même chose.
function slugifyTag(label) {
  return String(label || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

async function cleanupPhoto(admin, path) {
  if (!path) return;
  try { await admin.storage.from(PHOTO_BUCKET).remove([path]); } catch {}
}

// Recalcule le propriétaire d'une destination communautaire :
// contributeur avec le plus de lieux, égalité → le plus ancien.
async function recalcOwner(admin, destinationId) {
  const { data } = await admin
    .from('destination_places')
    .select('user_id, created_at')
    .eq('destination_id', destinationId)
    .not('user_id', 'is', null);

  if (!data || !data.length) {
    // Plus aucun lieu → pas de recalcul ownership (la destination peut rester orpheline)
    return;
  }

  const counts = {};
  const oldest = {};
  for (const row of data) {
    const uid = row.user_id;
    counts[uid] = (counts[uid] || 0) + 1;
    if (!oldest[uid] || row.created_at < oldest[uid]) oldest[uid] = row.created_at;
  }

  const winner = Object.keys(counts).sort((a, b) => {
    if (counts[b] !== counts[a]) return counts[b] - counts[a];
    return oldest[a] < oldest[b] ? -1 : 1;
  })[0];

  if (winner) {
    await admin.from('user_destinations').update({ user_id: winner }).eq('id', destinationId);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try { admin = getAdminClient(); } catch {
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const action = body.action || 'add';

  const user = await verifyUser(admin, body.authToken);
  if (!user) {
    // La photo éventuellement déjà uploadée par le client est nettoyée ici
    // aussi : sans ça, une session expirée laisserait un orphelin dans Storage.
    await cleanupPhoto(admin, body.imagePath);
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  if (action === 'delete') return handleDelete(admin, user, body, res);
  if (action === 'vote') return handleVote(admin, user, body, res);
  if (action === 'add') return handleAdd(admin, user, body, res);

  return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
}

// ─── Ajout / modification ───────────────────────────────────────────────────
async function handleAdd(admin, user, body, res) {
  const {
    // Présent uniquement en mode édition (modification d'un lieu existant).
    placeId = null,
    // Type de destination : 'community' | 'static'
    destType,
    // Pour 'community' :
    destinationId = null,
    // Pour 'static' :
    countryCode = null,
    staticDestId = null,
    staticDestName = null,
    countryName = null,   // nom du pays en clair (pour la vérification géographique)
    destName = null,      // nom de la destination (community ou static)
    // Lieu à ajouter/modifier
    placeName = '',
    imageUrl = '',
    imagePath = null,
    // Variantes des noms de lieux éditoriaux figés (mustSee) de la destination
    // statique, calculées côté client (voir PlacesList.jsx) : [{ name, matchName }]
    editorialNames = [],
    // ── Champs restaurants (voir supabase/restaurants_v1.sql) ──
    category = 'place',
    nameLatin = null,
    cuisineTags = [],
    // [{ slug, label }] — types créés par le contributeur, à modérer puis à
    // enregistrer dans place_cuisine_tags s'ils n'existent pas déjà.
    newTags = [],
    budgetLevel = null,
    address = null,
    geoapifyPlaceId = null,
    lat = null,
    lng = null,
  } = body;

  const isEdit = !!placeId;
  const isRestaurant = category === 'restaurant';
  const trimmedName = typeof placeName === 'string' ? placeName.trim() : '';
  const trimmedUrl = typeof imageUrl === 'string' ? imageUrl.trim() : '';

  if (!['place', 'restaurant'].includes(category)) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  // La photo reste obligatoire pour un lieu de visite (elle EST la vignette de
  // la liste). Pour un restaurant elle est facultative : la fiche a déjà un
  // nom, une adresse et une cuisine issus de Geoapify, et exiger une photo
  // ferait abandonner la majorité des contributions.
  if (!destType || !trimmedName || (!isRestaurant && !trimmedUrl)) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (destType === 'community' && !isEdit && !destinationId) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (destType === 'static' && !isEdit && (!countryCode || !staticDestId)) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const cleanBudget = Number.isInteger(budgetLevel) && budgetLevel >= 1 && budgetLevel <= 3 ? budgetLevel : null;
  // Types de cuisine : uniquement des identifiants normalisés, dédoublonnés et
  // plafonnés. Le plafond évite qu'un appel forgé n'attache cent tags à une
  // ligne, ce qui saturerait l'affichage de la carte pour tout le monde.
  const cleanCuisineTags = [...new Set(
    (Array.isArray(cuisineTags) ? cuisineTags : [])
      .filter((s) => typeof s === 'string')
      .map((s) => slugifyTag(s))
      .filter(Boolean)
  )].slice(0, 8);
  // Nouveaux types à créer : on ne garde que ceux réellement retenus sur ce
  // restaurant, avec un libellé exploitable.
  const cleanNewTags = (Array.isArray(newTags) ? newTags : [])
    .map((tg) => ({ slug: slugifyTag(tg?.slug || tg?.label), label: String(tg?.label || '').trim().slice(0, 40) }))
    .filter((tg) => tg.slug && tg.label && cleanCuisineTags.includes(tg.slug));
  const cleanAddress = typeof address === 'string' && address.trim() ? address.trim().slice(0, 300) : null;
  // Les coordonnées ne sont acceptées que si elles viennent d'une sélection
  // Geoapify (geoapifyPlaceId présent) : un couple lat/lng envoyé seul serait
  // arbitraire et se retrouverait affiché à tous les visiteurs sur la carte.
  const hasGeo = geoapifyPlaceId && Number.isFinite(lat) && Number.isFinite(lng);

  const editTable = TABLE_FOR[destType];
  if (!editTable) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  // En édition, la ligne existante fournit les identifiants de destination
  // (le client n'a besoin d'envoyer que placeId + placeType).
  let existingPlace = null;
  if (isEdit) {
    // `geoapify_place_id` : identité réelle d'un restaurant (voir la détection
    // de doublon plus bas). Le client ne le renvoie pas en édition — il n'a
    // aucune raison de le connaître — mais sans lui, retoucher le budget d'un
    // McDonald's ferait croire à un doublon du McDonald's d'à côté.
    const editColumns = destType === 'community'
      ? 'id, name, user_id, image_path, destination_id, category, source, geoapify_place_id'
      : 'id, name, user_id, image_path, country_code, static_dest_id, category, source, geoapify_place_id';
    const { data, error: fetchErr } = await admin
      .from(editTable)
      .select(editColumns)
      .eq('id', placeId)
      .maybeSingle();

    if (fetchErr) console.error('[places] fetch existing:', fetchErr);
    if (!data) {
      await cleanupPhoto(admin, imagePath);
      return res.status(404).json({ ok: false, reason: 'Lieu introuvable.' });
    }
    if (data.user_id !== user.id) {
      await cleanupPhoto(admin, imagePath);
      return res.status(403).json({ ok: false, reason: 'Action non autorisée.' });
    }
    existingPlace = data;
  }

  const resolvedDestName = destName || staticDestName || null;
  const resolvedDestinationId = isEdit ? existingPlace.destination_id : destinationId;
  const resolvedCountryCode = isEdit ? existingPlace.country_code : countryCode;
  const resolvedStaticDestId = isEdit ? existingPlace.static_dest_id : staticDestId;
  const country = countryName ? { code: resolvedCountryCode, name: countryName } : null;

  // Modération texte + image
  try {
    const verdict = await moderateContent({
      texts: [
        { label: 'Nom du lieu', value: trimmedName },
        // Les types de cuisine créés à la volée sont affichés à TOUS les
        // utilisateurs dans le sélecteur : leur libellé doit passer la
        // modération au même titre que le nom du lieu.
        ...cleanNewTags.map((tg) => ({ label: 'Type de cuisine', value: tg.label })),
      ],
      images: trimmedUrl ? [{
        url: trimmedUrl,
        expected: trimmedName,
        parent: resolvedDestName,
        labelFr: `photo du lieu « ${trimmedName} »`,
        detail: 'low',
        ...(country ? { country } : {}),
      }] : [],
      country,
    });
    if (!verdict.ok) {
      await cleanupPhoto(admin, imagePath);
      return res.status(200).json({ ok: false, reason: verdict.reason });
    }
  } catch (err) {
    await cleanupPhoto(admin, imagePath);
    if (err instanceof ModerationUnavailableError) {
      return res.status(503).json({ ok: false, unavailable: true, reason: 'La vérification est momentanément indisponible. Réessayez dans un instant.' });
    }
    return res.status(500).json({ ok: false, reason: 'Une erreur est survenue lors de la vérification.' });
  }

  // Cohérence géographique : le lieu est-il bien dans la destination ?
  // Sautée pour un restaurant issu d'une sélection Geoapify : la recherche a
  // déjà été bornée à un cercle autour de la ville (voir restaurant-search.js),
  // les coordonnées sont donc vérifiées par construction — repasser par l'IA
  // coûterait un appel pour rejeter parfois à tort un bistrot inconnu d'elle.
  if (resolvedDestName && countryName && !(isRestaurant && hasGeo)) {
    const coherence = await checkPlaceCoherence({ placeName: trimmedName, destName: resolvedDestName, countryName });
    if (!coherence.ok) {
      await cleanupPhoto(admin, imagePath);
      return res.status(200).json({ ok: false, reason: coherence.reason });
    }
  }

  // Doublon (lexical ou sémantique/traduction) avec un lieu déjà présent dans
  // cette même destination — communautaire (en base) OU éditorial figé
  // (mustSee, sans ligne DB donc `id: null`, pas de vote possible dessus) :
  // pas de nouvelle ligne créée, le soumissionnaire est compté comme votant
  // pour le lieu existant plutôt que de perdre silencieusement sa contribution.
  // La comparaison est faite DANS la même catégorie : un restaurant ne fait pas
  // doublon avec un lieu de visite du même nom (le « Louvre » et le café
  // « Le Louvre » sont deux entrées légitimes).
  let dbPlacesQuery = destType === 'community'
    ? admin.from('destination_places').select('id, name, geoapify_place_id').eq('destination_id', resolvedDestinationId)
    : admin.from('static_destination_places').select('id, name, geoapify_place_id').eq('country_code', resolvedCountryCode).eq('static_dest_id', String(resolvedStaticDestId));
  dbPlacesQuery = dbPlacesQuery.eq('category', category);
  if (isEdit) dbPlacesQuery = dbPlacesQuery.neq('id', placeId);
  const dbPlaces = (await dbPlacesQuery).data || [];
  // Les lieux éditoriaux figés (mustSee) sont des lieux de visite : ils ne
  // peuvent pas faire doublon avec un restaurant.
  const editorialPlaces = isRestaurant ? [] : (Array.isArray(editorialNames) ? editorialNames : [])
    .filter((e) => e && typeof e.name === 'string' && e.name.trim())
    .map((e) => ({ id: null, name: e.name, matchName: typeof e.matchName === 'string' ? e.matchName : e.name }));
  const existingPlaces = [...dbPlaces, ...editorialPlaces];

  // Un restaurant issu d'une sélection Geoapify n'est PAS identifié par son nom
  // mais par son `geoapify_place_id` : une enseigne a plusieurs adresses dans
  // la même ville, et comparer les noms rendait le deuxième McDonald's de Kyoto
  // impossible à proposer (signalé le 2026-07-31). Deux établissements
  // distincts ont deux identifiants distincts ; le même établissement proposé
  // deux fois a le même, et c'est le seul vrai doublon. Le contrôle lexical et
  // sémantique reste en place partout ailleurs — lieux de visite, restaurants
  // sans identifiant (anciens seeds éditoriaux) où le nom est le seul repère
  // disponible, et, depuis le 2026-07-31, en repli quand la comparaison par
  // identifiant ne trouve rien (voir le bloc ci-dessous).
  const establishmentId = geoapifyPlaceId || (isEdit ? existingPlace.geoapify_place_id : null);
  let dup;
  if (isEdit && trimmedName === existingPlace.name) {
    // ÉDITION SANS RENOMMAGE : il n'y a rien à dédoublonner, le lieu existe
    // déjà et son nom ne bouge pas. Sans cette sortie, retoucher le budget d'un
    // restaurant dépourvu d'identifiant Geoapify (ancien seed) le faisait
    // comparer par nom aux autres adresses de la ville : un second McDonald's
    // suffisait à faire échouer l'enregistrement avec « ce lieu existe déjà »
    // (trouvé en TNR le 2026-07-31). Économise en prime l'appel de détection
    // sémantique, qui coûte une requête IA à chaque sauvegarde.
    dup = { duplicate: false };
  } else if (isRestaurant && establishmentId) {
    const same = dbPlaces.find((p) => p.geoapify_place_id && p.geoapify_place_id === establishmentId);
    if (same) {
      dup = { duplicate: true, matchedName: same.name, matchedPlaceId: same.id };
    } else {
      // Les lignes DÉPOURVUES d'identifiant sont invisibles à la comparaison
      // ci-dessus : 58 restaurants du seed éditorial n'ont pas pu être retrouvés
      // chez Geoapify au moment de l'import. Sans ce repli, un membre qui
      // sélectionne l'un d'eux dans la recherche en crée un doublon silencieux.
      // Les lignes portant un AUTRE identifiant restent volontairement exclues :
      // deux identifiants distincts désignent deux établissements distincts,
      // c'est tout l'objet de la comparaison par place_id (le second McDonald's
      // d'une même ville doit rester proposable).
      const unidentified = dbPlaces.filter((p) => !p.geoapify_place_id);
      dup = unidentified.length
        ? await findDuplicatePlace(trimmedName, unidentified)
        : { duplicate: false };
    }
  } else {
    dup = await findDuplicatePlace(trimmedName, existingPlaces);
  }
  if (dup.duplicate) {
    await cleanupPhoto(admin, imagePath);
    if (isEdit) {
      return res.status(200).json({ ok: false, reason: `Ce lieu existe déjà (« ${dup.matchedName} »).` });
    }
    // `matchedPlaceId` est null pour un doublon éditorial figé (mustSee, pas
    // de ligne DB) : rien à voter dessus, contrairement à un doublon communautaire.
    const voted = dup.matchedPlaceId != null;
    if (voted) await registerAutoVote(admin, destType, dup.matchedPlaceId, user.id);
    return res.status(200).json({ ok: true, merged: true, matchedName: dup.matchedName, placeId: dup.matchedPlaceId, voted });
  }

  // Types de cuisine créés par le contributeur : enregistrés maintenant, une
  // fois la modération et la détection de doublon passées — pas avant, sinon un
  // ajout finalement refusé laisserait le tag dans la liste de tout le monde.
  // `ignoreDuplicates` : deux membres peuvent créer le même type en parallèle,
  // le premier arrivé gagne et le second ne doit pas voir son ajout échouer.
  if (isRestaurant && cleanNewTags.length) {
    const { error: tagError } = await admin
      .from('place_cuisine_tags')
      .upsert(
        cleanNewTags.map((tg) => ({ slug: tg.slug, label: tg.label, created_by: user.id })),
        { onConflict: 'slug', ignoreDuplicates: true }
      );
    // Échec non bloquant : le restaurant garde ses tags, seul le libellé
    // personnalisé manquera dans le sélecteur (repli sur le slug lisible).
    if (tagError) console.error('[places] tags cuisine:', tagError);
  }

  // Champs restaurants communs à l'insertion et à la mise à jour.
  const restaurantFields = isRestaurant ? {
    // `name` garde le nom d'origine (« 挽肉と米 ») ; `name_latin` en donne la
    // forme latine (« Hikiniku to come ») quand elle existe. Laquelle afficher
    // dépend de la langue du lecteur et se décide côté client — voir
    // src/lib/restaurants.js.
    name_latin: typeof nameLatin === 'string' && nameLatin.trim() ? nameLatin.trim().slice(0, 100) : null,
    cuisine_tags: cleanCuisineTags,
    budget_level: cleanBudget,
    address: cleanAddress,
    ...(hasGeo ? { geoapify_place_id: geoapifyPlaceId, lat, lng, geocoded_at: new Date().toISOString() } : {}),
  } : {};

  // ─── Édition : mise à jour de la ligne existante ───────────────────────
  if (isEdit) {
    const oldPhotoPath = imagePath ? existingPlace.image_path : null;

    const { error } = await admin
      .from(editTable)
      .update({
        name: trimmedName,
        image_url: trimmedUrl || null,
        image_path: imagePath ?? existingPlace.image_path,
        ...restaurantFields,
      })
      .eq('id', placeId);

    if (error) {
      console.error('[places] update:', error);
      await cleanupPhoto(admin, imagePath);
      return res.status(500).json({ ok: false, reason: "Le lieu n'a pas pu être mis à jour." });
    }

    if (oldPhotoPath) await cleanupPhoto(admin, oldPhotoPath);

    return res.status(200).json({ ok: true, placeId });
  }

  // ─── Ajout ──────────────────────────────────────────────────────────────
  // `source: 'community'` en dur : une recommandation de l'équipe ('editorial')
  // n'est jamais créée par cet endpoint, elle est insérée par un script de seed.
  const commonInsert = {
    user_id: user.id,
    name: trimmedName,
    image_url: trimmedUrl || null,
    image_path: imagePath,
    category,
    source: 'community',
    ...restaurantFields,
  };

  const insertPayload = destType === 'community'
    ? { ...commonInsert, destination_id: destinationId, upvotes: 0, sort_order: 9999 }
    : { ...commonInsert, country_code: countryCode, static_dest_id: String(staticDestId) };

  const { data: newPlace, error } = await admin
    .from(editTable)
    .insert(insertPayload)
    .select('id')
    .single();

  if (error) {
    console.error(`[places] insert ${destType}:`, error);
    await cleanupPhoto(admin, imagePath);
    return res.status(500).json({ ok: false, reason: "Le lieu n'a pas pu être enregistré." });
  }

  return res.status(200).json({ ok: true, placeId: newPlace.id });
}

// ─── Suppression ────────────────────────────────────────────────────────────
async function handleDelete(admin, user, body, res) {
  const { placeId, placeType } = body;
  const table = TABLE_FOR[placeType];
  if (!placeId || !table) return res.status(400).json({ ok: false });

  const columns = placeType === 'community'
    ? 'id, user_id, image_path, destination_id'
    : 'id, user_id, image_path';

  const { data: place } = await admin.from(table).select(columns).eq('id', placeId).maybeSingle();
  if (!place) return res.status(404).json({ ok: false });
  if (place.user_id !== user.id) return res.status(403).json({ ok: false });

  // Votes ET avis : aucune clé étrangère ne les rattache au lieu (cible
  // polymorphe via place_type), la cascade doit donc être explicite — sinon
  // l'identifiant réattribué à un futur lieu hériterait de ces lignes.
  await admin.from('place_votes').delete().eq('place_id', placeId).eq('place_type', placeType);
  const { data: reviews } = await admin
    .from('place_reviews')
    .select('photo_paths')
    .eq('place_id', placeId)
    .eq('place_type', placeType);
  const reviewPhotoPaths = (reviews || []).flatMap((r) => r.photo_paths || []);
  if (reviewPhotoPaths.length) {
    try { await admin.storage.from('review-photos').remove(reviewPhotoPaths); } catch {}
  }
  await admin.from('place_reviews').delete().eq('place_id', placeId).eq('place_type', placeType);

  await admin.from(table).delete().eq('id', placeId);
  await cleanupPhoto(admin, place.image_path);
  if (placeType === 'community' && place.destination_id) await recalcOwner(admin, place.destination_id);

  return res.status(200).json({ ok: true });
}

// ─── Vote ───────────────────────────────────────────────────────────────────
// Cas possibles :
//   - Pas de vote → insère le vote (up ou down)
//   - Même vote_type → supprime le vote (toggle off)
//   - Vote_type différent → change le vote (up↔down)
async function handleVote(admin, user, body, res) {
  const { placeId, placeType, voteType } = body;
  const table = TABLE_FOR[placeType];
  if (!placeId || !table || !['up', 'down'].includes(voteType)) {
    return res.status(400).json({ ok: false });
  }

  const { data: existingRows, error: existingError } = await admin
    .from('place_votes')
    .select('id, vote_type')
    .eq('user_id', user.id)
    .eq('place_id', placeId)
    .eq('place_type', placeType)
    .limit(1);
  // Une lecture échouée ne doit jamais retomber sur "pas de vote existant" :
  // ça aurait tenté un insert alors qu'un vote existe peut-être déjà (conflit
  // de contrainte silencieusement avalé plus bas, faute de vérification).
  if (existingError) return res.status(500).json({ ok: false });
  const existing = existingRows?.[0] ?? null;

  const { data: row, error: rowError } = await admin.from(table).select('upvotes, downvotes').eq('id', placeId).maybeSingle();
  if (rowError) return res.status(500).json({ ok: false });
  if (!row) return res.status(404).json({ ok: false });

  let { upvotes, downvotes } = row;

  if (existing) {
    if (existing.vote_type === voteType) {
      // Même vote → retrait
      const { error: delError } = await admin.from('place_votes').delete().eq('id', existing.id);
      if (delError) return res.status(500).json({ ok: false });
      if (voteType === 'up') upvotes = Math.max(0, upvotes - 1);
      else downvotes = Math.max(0, downvotes - 1);
      const { error: updError } = await admin.from(table).update({ upvotes, downvotes }).eq('id', placeId);
      if (updError) return res.status(500).json({ ok: false });
      return res.status(200).json({ ok: true, action: 'removed', voteType, upvotes, downvotes });
    }
    // Vote différent → changement
    const { error: voteUpdError } = await admin.from('place_votes').update({ vote_type: voteType }).eq('id', existing.id);
    if (voteUpdError) return res.status(500).json({ ok: false });
    if (voteType === 'up') { upvotes++; downvotes = Math.max(0, downvotes - 1); }
    else { downvotes++; upvotes = Math.max(0, upvotes - 1); }
    const { error: updError } = await admin.from(table).update({ upvotes, downvotes }).eq('id', placeId);
    if (updError) return res.status(500).json({ ok: false });
    return res.status(200).json({ ok: true, action: 'changed', voteType, upvotes, downvotes });
  }

  // Pas de vote existant → insertion
  const { error: insError } = await admin.from('place_votes').insert({ user_id: user.id, place_id: placeId, place_type: placeType, vote_type: voteType });
  if (insError) return res.status(500).json({ ok: false });
  if (voteType === 'up') upvotes++;
  else downvotes++;
  const { error: updError } = await admin.from(table).update({ upvotes, downvotes }).eq('id', placeId);
  if (updError) return res.status(500).json({ ok: false });
  return res.status(200).json({ ok: true, action: 'added', voteType, upvotes, downvotes });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
