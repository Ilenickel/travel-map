// Suppression d'une destination communautaire par son propriétaire.
// Supprime uniquement les lieux du propriétaire, recalcule l'ownership,
// et ne supprime la destination entière que si plus aucun lieu ne reste.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';

const PHOTO_BUCKET = 'destination-photos';

async function cleanupPhotos(admin, paths) {
  const valid = (paths || []).filter(Boolean);
  if (!valid.length) return;
  try { await admin.storage.from(PHOTO_BUCKET).remove(valid); } catch {}
}

function extractPath(url) {
  if (!url) return null;
  const marker = '/destination-photos/';
  const idx = url.indexOf(marker);
  return idx !== -1 ? url.slice(idx + marker.length) : null;
}

async function recalcOwner(admin, destinationId) {
  const { data } = await admin
    .from('destination_places')
    .select('user_id, created_at')
    .eq('destination_id', destinationId)
    .not('user_id', 'is', null);

  if (!data || !data.length) return null;

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
  return winner;
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
  const { authToken, destinationId } = body;

  if (!destinationId) return res.status(400).json({ ok: false });

  const user = await verifyUser(admin, authToken);
  if (!user) return res.status(401).json({ ok: false, reason: 'Session expirée.' });

  // Vérifier que l'utilisateur est bien le propriétaire actuel
  const { data: dest } = await admin
    .from('user_destinations')
    .select('id, user_id, image_url, name, country_code')
    .eq('id', destinationId)
    .maybeSingle();

  if (!dest) return res.status(404).json({ ok: false, reason: 'Destination introuvable.' });
  if (dest.user_id !== user.id) return res.status(403).json({ ok: false, reason: 'Action non autorisée.' });

  // 1) Récupérer et supprimer uniquement les lieux du propriétaire
  const { data: ownPlaces } = await admin
    .from('destination_places')
    .select('id, image_path, image_url')
    .eq('destination_id', destinationId)
    .eq('user_id', user.id);

  if (ownPlaces?.length) {
    const ids = ownPlaces.map(p => p.id);
    await admin.from('place_votes').delete().in('place_id', ids);
    await admin.from('destination_places').delete().in('id', ids);

    const pathsToClean = ownPlaces.map(p => p.image_path || extractPath(p.image_url)).filter(Boolean);
    await cleanupPhotos(admin, pathsToClean);
  }

  // 2) Vérifier s'il reste des lieux d'autres utilisateurs
  const { data: remaining } = await admin
    .from('destination_places')
    .select('id')
    .eq('destination_id', destinationId)
    .limit(1);

  if (remaining?.length) {
    // Des lieux existent encore → recalcul ownership, la destination reste
    const newOwner = await recalcOwner(admin, destinationId);

    // Notifier le nouveau propriétaire si sa préférence le permet
    if (newOwner) {
      const { data: pref } = await admin
        .from('profiles')
        .select('notif_ownership_transfer')
        .eq('id', newOwner)
        .maybeSingle();
      if (pref?.notif_ownership_transfer !== false) {
        await admin.from('notifications').insert({
          user_id: newOwner,
          type: 'destination_ownership_transfer',
          destination_id: destinationId,
          destination_name: dest.name,
          country_code: dest.country_code,
        });
      }
    }

    return res.status(200).json({ ok: true, deleted: false, newOwner });
  }

  // 3) Plus aucun lieu → suppression complète de la destination
  // Cascade : votes avis → avis → signalements → cover Storage → destination
  const { data: destReviews } = await admin
    .from('destination_reviews')
    .select('id')
    .like('destination_id', `%\\_${destinationId}`);

  if (destReviews?.length) {
    const ids = destReviews.map(r => r.id);
    await admin.from('destination_review_votes').delete().in('review_id', ids);
    await admin.from('destination_reviews').delete().in('id', ids);
  }

  await admin.from('reports').delete().eq('content_type', 'destination').eq('content_id', destinationId);
  await cleanupPhotos(admin, [extractPath(dest.image_url)]);
  await admin.from('user_destinations').delete().eq('id', destinationId);

  return res.status(200).json({ ok: true, deleted: true });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
