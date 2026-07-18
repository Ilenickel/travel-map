// Toggle upvote/downvote sur un lieu (community ou static).
// Cas possibles :
//   - Pas de vote → insère le vote (up ou down)
//   - Même vote_type → supprime le vote (toggle off)
//   - Vote_type différent → change le vote (up↔down)
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  let admin;
  try { admin = getAdminClient(); } catch {
    return res.status(500).json({ ok: false });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { authToken, placeId, placeType, voteType } = body;

  if (!placeId || !placeType || !['up', 'down'].includes(voteType)) {
    return res.status(400).json({ ok: false });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) return res.status(401).json({ ok: false, reason: 'Session expirée.' });

  const table = placeType === 'community' ? 'destination_places' : 'static_destination_places';

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
    } else {
      // Vote différent → changement
      const { error: voteUpdError } = await admin.from('place_votes').update({ vote_type: voteType }).eq('id', existing.id);
      if (voteUpdError) return res.status(500).json({ ok: false });
      if (voteType === 'up') { upvotes++; downvotes = Math.max(0, downvotes - 1); }
      else { downvotes++; upvotes = Math.max(0, upvotes - 1); }
      const { error: updError } = await admin.from(table).update({ upvotes, downvotes }).eq('id', placeId);
      if (updError) return res.status(500).json({ ok: false });
      return res.status(200).json({ ok: true, action: 'changed', voteType, upvotes, downvotes });
    }
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
