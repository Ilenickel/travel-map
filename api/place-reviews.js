// Avis notés sur un lieu (aujourd'hui : les restaurants). Publication,
// modification et suppression.
//
// Table dédiée `place_reviews` plutôt qu'une réutilisation de `reviews` (pays)
// ou `destination_reviews` (destination) : ces deux-là portent des colonnes et
// une chaîne de notifications qui n'ont pas de sens pour un lieu. La table est
// en revanche générique (place_id + place_type), pas spécifique aux
// restaurants — voir supabase/restaurants_v1.sql.
//
// Comme moderate-review.js, le navigateur a déjà téléversé ses photos dans le
// bucket `review-photos` avant d'appeler cet endpoint ; si la modération échoue,
// elles sont supprimées.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, ModerationUnavailableError } from './_lib/moderation.js';

const PHOTO_BUCKET = 'review-photos';
const TABLE_FOR = { community: 'destination_places', static: 'static_destination_places' };

async function cleanupPhotos(admin, paths) {
  const valid = (paths || []).filter(Boolean);
  if (!valid.length) return;
  try {
    await admin.storage.from(PHOTO_BUCKET).remove(valid);
  } catch (err) {
    console.error('[place-reviews] cleanup photos:', err.message);
  }
}

// La moyenne et le nombre d'avis sont dénormalisés sur la ligne du lieu : la
// liste des restaurants trie par note sans agréger place_reviews à chaque
// affichage. Fonction SQL plutôt que calcul ici, pour que la lecture et
// l'écriture soient atomiques côté base.
async function recalcRating(admin, placeId, placeType) {
  const { error } = await admin.rpc('recalc_place_rating', { p_place_id: placeId, p_place_type: placeType });
  if (error) console.error('[place-reviews] recalc:', error);
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
    action = 'save',
    placeId,
    placeType,
    countryCode = null,
    countryName = null,
    rating,
    comment = null,
    newPhotos = [],
    photoUrls = [],
    photoPaths = [],
  } = body;

  const newPaths = (newPhotos || []).map((p) => p?.path).filter(Boolean);

  const user = await verifyUser(admin, authToken);
  if (!user) {
    await cleanupPhotos(admin, newPaths);
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  if (!placeId || !TABLE_FOR[placeType]) {
    await cleanupPhotos(admin, newPaths);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  // ─── Suppression ────────────────────────────────────────────────────────
  if (action === 'delete') {
    const { data: existing } = await admin
      .from('place_reviews')
      .select('id, user_id, photo_paths')
      .eq('place_id', placeId)
      .eq('place_type', placeType)
      .eq('user_id', user.id)
      .maybeSingle();

    if (!existing) return res.status(404).json({ ok: false, reason: 'Avis introuvable.' });

    const { error } = await admin.from('place_reviews').delete().eq('id', existing.id);
    if (error) {
      console.error('[place-reviews] delete:', error);
      return res.status(500).json({ ok: false, reason: "L'avis n'a pas pu être supprimé." });
    }
    await cleanupPhotos(admin, existing.photo_paths);
    await recalcRating(admin, placeId, placeType);
    return res.status(200).json({ ok: true });
  }

  // ─── Publication / modification ─────────────────────────────────────────
  const ratingNum = Number(rating);
  if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    await cleanupPhotos(admin, newPaths);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  // Le lieu doit exister : sans cette vérification, un identifiant fabriqué
  // créerait des avis orphelins jamais affichés ni nettoyés.
  const { data: place } = await admin
    .from(TABLE_FOR[placeType])
    .select('id, name')
    .eq('id', placeId)
    .maybeSingle();
  if (!place) {
    await cleanupPhotos(admin, newPaths);
    return res.status(404).json({ ok: false, reason: 'Lieu introuvable.' });
  }

  const trimmedComment = typeof comment === 'string' ? comment.trim() : '';

  try {
    const verdict = await moderateContent({
      texts: [{ label: 'Commentaire', value: trimmedComment }],
      images: (newPhotos || [])
        .filter((p) => p?.url)
        .map((p) => ({ url: p.url, expected: null, labelFr: 'photo de l’avis' })),
      country: countryName && countryCode ? { code: countryCode, name: countryName } : null,
    });
    if (!verdict.ok) {
      await cleanupPhotos(admin, newPaths);
      return res.status(200).json({ ok: false, reason: verdict.reason });
    }
  } catch (err) {
    await cleanupPhotos(admin, newPaths);
    if (err instanceof ModerationUnavailableError) {
      return res.status(503).json({
        ok: false,
        unavailable: true,
        reason: 'La vérification est momentanément indisponible. Réessayez dans un instant.',
      });
    }
    console.error('[place-reviews] modération:', err);
    return res.status(500).json({ ok: false, reason: 'Une erreur est survenue lors de la vérification.' });
  }

  // Les photos retirées lors d'une modification sont supprimées du bucket : les
  // conserver laisserait grossir Storage avec des fichiers plus référencés nulle part.
  const finalUrls = (Array.isArray(photoUrls) ? photoUrls : []).filter(Boolean);
  const finalPaths = (Array.isArray(photoPaths) ? photoPaths : []).filter(Boolean);
  const { data: previous } = await admin
    .from('place_reviews')
    .select('photo_paths')
    .eq('place_id', placeId)
    .eq('place_type', placeType)
    .eq('user_id', user.id)
    .maybeSingle();
  const droppedPaths = (previous?.photo_paths || []).filter((p) => !finalPaths.includes(p));

  const { data: saved, error } = await admin
    .from('place_reviews')
    .upsert(
      {
        place_id: placeId,
        place_type: placeType,
        user_id: user.id,
        rating: ratingNum,
        comment: trimmedComment || null,
        photo_urls: finalUrls,
        photo_paths: finalPaths,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'place_id,place_type,user_id' }
    )
    .select('id')
    .single();

  if (error) {
    console.error('[place-reviews] upsert:', error);
    await cleanupPhotos(admin, newPaths);
    return res.status(500).json({ ok: false, reason: "L'avis n'a pas pu être publié. Réessayez." });
  }

  await cleanupPhotos(admin, droppedPaths);
  await recalcRating(admin, placeId, placeType);

  return res.status(200).json({ ok: true, reviewId: saved.id });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
