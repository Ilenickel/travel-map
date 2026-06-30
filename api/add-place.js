// Ajoute un lieu à ne pas manquer sur une destination (statique ou communautaire).
// Le client a déjà uploadé la photo dans Storage avant d'appeler cet endpoint.
// La modération IA (texte + image) est effectuée ici avant l'insertion.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, checkPlaceCoherence, ModerationUnavailableError } from './_lib/moderation.js';

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
    // Lieu à ajouter
    placeName = '',
    imageUrl = '',
    imagePath = null,
  } = body;

  const trimmedName = typeof placeName === 'string' ? placeName.trim() : '';
  const trimmedUrl = typeof imageUrl === 'string' ? imageUrl.trim() : '';

  if (!destType || !trimmedName || !trimmedUrl) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (destType === 'community' && !destinationId) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (destType === 'static' && (!countryCode || !staticDestId)) {
    await cleanupPhoto(admin, imagePath);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    await cleanupPhoto(admin, imagePath);
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  const resolvedDestName = destName || staticDestName || null;
  const country = countryName ? { code: countryCode, name: countryName } : null;

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
