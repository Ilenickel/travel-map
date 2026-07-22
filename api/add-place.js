// Ajoute (ou modifie, si `placeId` est fourni) un lieu à ne pas manquer sur
// une destination (statique ou communautaire). Un seul endpoint pour les deux
// afin de rester sous la limite de fonctions serverless du plan Vercel Hobby.
// Le client a déjà uploadé la photo dans Storage avant d'appeler cet endpoint.
// La modération IA (texte + image) est effectuée ici avant l'insertion/mise à jour.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, checkPlaceCoherence, ModerationUnavailableError } from './_lib/moderation.js';
import { findDuplicatePlace, registerAutoVote } from './_lib/placeDuplicates.js';

const PHOTO_BUCKET = 'destination-photos';

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

  if (!data || !data.length) return;

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
  try { admin = getAdminClient(); } catch (err) {
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const {
    authToken,
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
  } = body;

  const isEdit = !!placeId;
  const trimmedName = typeof placeName === 'string' ? placeName.trim() : '';
  const trimmedUrl = typeof imageUrl === 'string' ? imageUrl.trim() : '';

  if (!destType || !trimmedName || !trimmedUrl) {
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

  const user = await verifyUser(admin, authToken);
  if (!user) {
    await cleanupPhoto(admin, imagePath);
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  // En édition, la ligne existante fournit les identifiants de destination
  // (le client n'a besoin d'envoyer que placeId + placeType).
  let existingPlace = null;
  const editTable = destType === 'community' ? 'destination_places' : 'static_destination_places';
  if (isEdit) {
    const editColumns = destType === 'community'
      ? 'id, user_id, image_path, destination_id'
      : 'id, user_id, image_path, country_code, static_dest_id';
    const { data, error: fetchErr } = await admin
      .from(editTable)
      .select(editColumns)
      .eq('id', placeId)
      .maybeSingle();

    if (fetchErr) console.error('[add-place] fetch existing:', fetchErr);
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
      texts: [{ label: 'Nom du lieu', value: trimmedName }],
      images: [{
        url: trimmedUrl,
        expected: trimmedName,
        parent: resolvedDestName,
        labelFr: `photo du lieu « ${trimmedName} »`,
        detail: 'low',
        ...(country ? { country } : {}),
      }],
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
  if (resolvedDestName && countryName) {
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
  let dbPlacesQuery = destType === 'community'
    ? admin.from('destination_places').select('id, name').eq('destination_id', resolvedDestinationId)
    : admin.from('static_destination_places').select('id, name').eq('country_code', resolvedCountryCode).eq('static_dest_id', String(resolvedStaticDestId));
  if (isEdit) dbPlacesQuery = dbPlacesQuery.neq('id', placeId);
  const dbPlaces = (await dbPlacesQuery).data || [];
  const editorialPlaces = (Array.isArray(editorialNames) ? editorialNames : [])
    .filter((e) => e && typeof e.name === 'string' && e.name.trim())
    .map((e) => ({ id: null, name: e.name, matchName: typeof e.matchName === 'string' ? e.matchName : e.name }));
  const existingPlaces = [...dbPlaces, ...editorialPlaces];

  const dup = await findDuplicatePlace(trimmedName, existingPlaces);
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

  // ─── Édition : mise à jour de la ligne existante ───────────────────────
  if (isEdit) {
    const oldPhotoPath = imagePath ? existingPlace.image_path : null;

    const { error } = await admin
      .from(editTable)
      .update({
        name: trimmedName,
        image_url: trimmedUrl,
        image_path: imagePath ?? existingPlace.image_path,
      })
      .eq('id', placeId);

    if (error) {
      console.error('[add-place] update:', error);
      await cleanupPhoto(admin, imagePath);
      return res.status(500).json({ ok: false, reason: "Le lieu n'a pas pu être mis à jour." });
    }

    if (oldPhotoPath) await cleanupPhoto(admin, oldPhotoPath);

    return res.status(200).json({ ok: true, placeId });
  }

  // ─── Ajout ──────────────────────────────────────────────────────────────
  if (destType === 'community') {
    const { data: newPlace, error } = await admin
      .from('destination_places')
      .insert({
        destination_id: destinationId,
        user_id: user.id,
        name: trimmedName,
        image_url: trimmedUrl,
        image_path: imagePath,
        upvotes: 0,
        sort_order: 9999,
      })
      .select('id')
      .single();

    if (error) {
      console.error('[add-place] insert community:', error);
      return res.status(500).json({ ok: false, reason: "Le lieu n'a pas pu être enregistré." });
    }

    return res.status(200).json({ ok: true, placeId: newPlace.id });
  }

  // Static
  const { data: newPlace, error } = await admin
    .from('static_destination_places')
    .insert({
      user_id: user.id,
      country_code: countryCode,
      static_dest_id: String(staticDestId),
      name: trimmedName,
      image_url: trimmedUrl,
      image_path: imagePath,
    })
    .select('id')
    .single();

  if (error) {
    console.error('[add-place] insert static:', error);
    return res.status(500).json({ ok: false, reason: "Le lieu n'a pas pu être enregistré." });
  }

  return res.status(200).json({ ok: true, placeId: newPlace.id });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
