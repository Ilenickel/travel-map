// Endpoint serveur : modère un avis (pays ou destination) AVANT de l'écrire en base.
// Flux : le navigateur a déjà téléversé ses photos dans le bucket `review-photos`,
// puis appelle cette fonction. Si la modération échoue, les photos fraîchement
// téléversées sont supprimées et un motif de refus est renvoyé.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, ModerationUnavailableError } from './_lib/moderation.js';
import { invalidateTranslations } from './_lib/translation.js';

const PHOTO_BUCKET = 'review-photos';

async function cleanupPhotos(admin, paths) {
  const valid = (paths || []).filter(Boolean);
  if (!valid.length) return;
  try {
    await admin.storage.from(PHOTO_BUCKET).remove(valid);
  } catch (err) {
    console.error('[moderate-review] cleanup photos:', err.message);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try {
    admin = getAdminClient();
  } catch (err) {
    console.error('[moderate-review] config:', err.message);
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const {
    authToken,
    countryCode,
    countryName = null,
    destinationId = null,
    rating,
    comment = null,
    newPhotos = [],
    photoUrls = [],
  } = body;

  const newPaths = (newPhotos || []).map((p) => p?.path).filter(Boolean);

  // 1) Authentification
  const user = await verifyUser(admin, authToken);
  if (!user) {
    await cleanupPhotos(admin, newPaths);
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  // 2) Validation basique
  const ratingNum = Number(rating);
  if (!countryCode || !Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    await cleanupPhotos(admin, newPaths);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  const trimmedComment = typeof comment === 'string' ? comment.trim() : '';

  // 3) Modération
  try {
    const verdict = await moderateContent({
      texts: [{ label: 'Commentaire', value: trimmedComment }],
      images: (newPhotos || [])
        .filter((p) => p?.url)
        .map((p) => ({ url: p.url, expected: null, labelFr: 'photo de l’avis' })),
      country: countryName ? { code: countryCode, name: countryName } : null,
    });

    if (!verdict.ok) {
      await cleanupPhotos(admin, newPaths);
      return res.status(200).json({ ok: false, reason: verdict.reason });
    }
  } catch (err) {
    await cleanupPhotos(admin, newPaths);
    if (err instanceof ModerationUnavailableError) {
      console.error('[moderate-review] indisponible:', err.message);
      return res.status(503).json({
        ok: false,
        unavailable: true,
        reason: 'La vérification est momentanément indisponible. Réessayez dans un instant.',
      });
    }
    console.error('[moderate-review] erreur modération:', err);
    return res.status(500).json({ ok: false, reason: 'Une erreur est survenue lors de la vérification.' });
  }

  // 4) Écriture en base (service_role)
  const finalPhotoUrls = (Array.isArray(photoUrls) ? photoUrls : []).filter(Boolean);
  const row = {
    user_id: user.id,
    rating: ratingNum,
    comment: trimmedComment || null,
    photo_url: finalPhotoUrls[0] ?? null,
    photo_urls: finalPhotoUrls,
    updated_at: new Date().toISOString(),
  };

  let upsertErr;
  let reviewId = null;
  if (destinationId) {
    const { error } = await admin
      .from('destination_reviews')
      .upsert({ ...row, destination_id: destinationId }, { onConflict: 'user_id,destination_id' });
    upsertErr = error;
    if (!error) {
      const { data } = await admin
        .from('destination_reviews')
        .select('id')
        .eq('user_id', user.id)
        .eq('destination_id', destinationId)
        .maybeSingle();
      reviewId = data?.id ?? null;
    }
  } else {
    const { error } = await admin
      .from('reviews')
      .upsert({ ...row, country_code: countryCode }, { onConflict: 'user_id,country_code' });
    upsertErr = error;
    if (!error) {
      const { data } = await admin
        .from('reviews')
        .select('id')
        .eq('user_id', user.id)
        .eq('country_code', countryCode)
        .maybeSingle();
      reviewId = data?.id ?? null;
    }
  }

  if (upsertErr) {
    console.error('[moderate-review] upsert:', upsertErr);
    return res.status(500).json({ ok: false, reason: "L'avis n'a pas pu être publié. Réessayez." });
  }
  if (reviewId) {
    await invalidateTranslations(admin, destinationId ? 'destination_review' : 'review', reviewId);
  }

  return res.status(200).json({ ok: true, reviewId });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
