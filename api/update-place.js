// Modifie un lieu déjà ajouté (statique ou communautaire) par son créateur.
// Repasse par la même modération (texte + image) que l'ajout initial, pour
// qu'une modification ne puisse pas servir à contourner le contrôle IA.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, checkPlaceCoherence, ModerationUnavailableError } from './_lib/moderation.js';
import { findDuplicatePlace } from './_lib/placeDuplicates.js';

const PHOTO_BUCKET = 'destination-photos';

async function cleanupPhoto(admin, path) {
  if (!path) return;
  try { await admin.storage.from(PHOTO_BUCKET).remove([path]); } catch {}
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
  const {
    authToken,
    placeId,
    placeType, // 'community' | 'static'
    placeName = '',
    imageUrl = '',
    imagePath = null, // non-null seulement si une nouvelle photo a été uploadée
    countryName = null,
    destName = null,
    editorialNames = [],
  } = body;

  const trimmedName = typeof placeName === 'string' ? placeName.trim() : '';
  const trimmedUrl = typeof imageUrl === 'string' ? imageUrl.trim() : '';

  if (!placeId || !placeType || !trimmedName || !trimmedUrl) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    await cleanupPhoto(admin, imagePath);
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  const table = placeType === 'community' ? 'destination_places' : 'static_destination_places';
  const { data: place } = await admin
    .from(table)
    .select('id, user_id, image_path, destination_id, country_code, static_dest_id')
    .eq('id', placeId)
    .maybeSingle();

  if (!place) {
    await cleanupPhoto(admin, imagePath);
    return res.status(404).json({ ok: false, reason: 'Lieu introuvable.' });
  }
  if (place.user_id !== user.id) {
    await cleanupPhoto(admin, imagePath);
    return res.status(403).json({ ok: false, reason: 'Action non autorisée.' });
  }

  const country = countryName ? { code: null, name: countryName } : null;

  // Modération texte + image (même contrôle qu'à la création)
  try {
    const verdict = await moderateContent({
      texts: [{ label: 'Nom du lieu', value: trimmedName }],
      images: [{
        url: trimmedUrl,
        expected: trimmedName,
        parent: destName,
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

  // Cohérence géographique
  if (destName && countryName) {
    const coherence = await checkPlaceCoherence({ placeName: trimmedName, destName, countryName });
    if (!coherence.ok) {
      await cleanupPhoto(admin, imagePath);
      return res.status(200).json({ ok: false, reason: coherence.reason });
    }
  }

  // Doublon avec un AUTRE lieu de la même destination (le lieu qu'on modifie
  // est exclu de la comparaison, sinon il se détecterait lui-même).
  const dbPlaces = placeType === 'community'
    ? (await admin.from('destination_places').select('id, name').eq('destination_id', place.destination_id).neq('id', placeId)).data || []
    : (await admin.from('static_destination_places').select('id, name').eq('country_code', place.country_code).eq('static_dest_id', place.static_dest_id).neq('id', placeId)).data || [];
  const editorialPlaces = (Array.isArray(editorialNames) ? editorialNames : [])
    .filter((e) => e && typeof e.name === 'string' && e.name.trim())
    .map((e) => ({ id: null, name: e.name, matchName: typeof e.matchName === 'string' ? e.matchName : e.name }));
  const existingPlaces = [...dbPlaces, ...editorialPlaces];

  const dup = await findDuplicatePlace(trimmedName, existingPlaces);
  if (dup.duplicate) {
    await cleanupPhoto(admin, imagePath);
    return res.status(200).json({ ok: false, reason: `Ce lieu existe déjà (« ${dup.matchedName} »).` });
  }

  // Nouvelle photo fournie : on la remplace et on nettoie l'ancienne.
  const oldPhotoPath = imagePath ? place.image_path : null;

  const { error } = await admin
    .from(table)
    .update({
      name: trimmedName,
      image_url: trimmedUrl,
      image_path: imagePath ?? place.image_path,
    })
    .eq('id', placeId);

  if (error) {
    console.error('[update-place] update:', error);
    await cleanupPhoto(admin, imagePath);
    return res.status(500).json({ ok: false, reason: "Le lieu n'a pas pu être mis à jour." });
  }

  if (oldPhotoPath) await cleanupPhoto(admin, oldPhotoPath);

  return res.status(200).json({ ok: true });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
