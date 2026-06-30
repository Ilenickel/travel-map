// Supprime un lieu à ne pas manquer dont l'utilisateur est le créateur.
// Recalcule le propriétaire de la destination communautaire si besoin.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';

const PHOTO_BUCKET = 'destination-photos';

async function cleanupPhoto(admin, path) {
  if (!path) return;
  try { await admin.storage.from(PHOTO_BUCKET).remove([path]); } catch {}
}

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
    return res.status(405).json({ ok: false });
  }

  let admin;
  try { admin = getAdminClient(); } catch {
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { authToken, placeId, placeType } = body;

  if (!placeId || !placeType) return res.status(400).json({ ok: false });

  const user = await verifyUser(admin, authToken);
  if (!user) return res.status(401).json({ ok: false, reason: 'Session expirée.' });

  if (placeType === 'community') {
    const { data: place } = await admin
      .from('destination_places')
      .select('id, user_id, image_path, destination_id')
      .eq('id', placeId)
      .maybeSingle();

    if (!place) return res.status(404).json({ ok: false });
    if (place.user_id !== user.id) return res.status(403).json({ ok: false });

    await admin.from('place_votes').delete().eq('place_id', placeId).eq('place_type', 'community');
    await admin.from('destination_places').delete().eq('id', placeId);
    await cleanupPhoto(admin, place.image_path);
    if (place.destination_id) await recalcOwner(admin, place.destination_id);

    return res.status(200).json({ ok: true });
  }

  // Static
  const { data: place } = await admin
    .from('static_destination_places')
    .select('id, user_id, image_path')
    .eq('id', placeId)
    .maybeSingle();

  if (!place) return res.status(404).json({ ok: false });
  if (place.user_id !== user.id) return res.status(403).json({ ok: false });

  await admin.from('place_votes').delete().eq('place_id', placeId).eq('place_type', 'static');
  await admin.from('static_destination_places').delete().eq('id', placeId);
  await cleanupPhoto(admin, place.image_path);

  return res.status(200).json({ ok: true });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
