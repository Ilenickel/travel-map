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
  const { authToken, targetUserId } = body;

  if (!targetUserId) return res.status(400).json({ ok: false });

  const follower = await verifyUser(admin, authToken);
  if (!follower) return res.status(401).json({ ok: false, reason: 'Session expirée.' });

  // Ne pas notifier si l'utilisateur s'abonne à lui-même
  if (follower.id === targetUserId) return res.status(200).json({ ok: true });

  // Vérifier la préférence de la cible
  const { data: pref } = await admin
    .from('profiles')
    .select('notif_new_followers')
    .eq('id', targetUserId)
    .maybeSingle();
  if (pref?.notif_new_followers === false) return res.status(200).json({ ok: true });

  // Récupérer le profil du follower
  const { data: followerProfile } = await admin
    .from('profiles')
    .select('id, display_name, avatar_url')
    .eq('id', follower.id)
    .maybeSingle();
  if (!followerProfile) return res.status(200).json({ ok: true });

  const newEntry = {
    id: followerProfile.id,
    name: followerProfile.display_name || 'Voyageur',
    avatar: followerProfile.avatar_url || null,
  };

  // Chercher une notif new_follower non lue existante (sans limite de temps)
  const { data: existing } = await admin
    .from('notifications')
    .select('id, metadata')
    .eq('user_id', targetUserId)
    .eq('type', 'new_follower')
    .eq('read', false)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existing) {
    const followers = existing.metadata?.followers ?? [];
    // Éviter les doublons
    if (followers.find(f => f.id === newEntry.id)) return res.status(200).json({ ok: true });
    await admin
      .from('notifications')
      .update({ metadata: { followers: [newEntry, ...followers] } })
      .eq('id', existing.id);
  } else {
    await admin.from('notifications').insert({
      user_id: targetUserId,
      from_user_id: follower.id,
      type: 'new_follower',
      metadata: { followers: [newEntry] },
    });
  }

  return res.status(200).json({ ok: true });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
