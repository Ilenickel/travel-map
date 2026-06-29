// Endpoint admin : confirmer une alerte (supprime le contenu) ou la rejeter (fausse alerte).
// Seuls les comptes avec profiles.is_admin = true peuvent appeler cet endpoint.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try { admin = getAdminClient(); }
  catch (err) { return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' }); }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { authToken, action, contentType, contentId } = body;

  if (!authToken || !action || !contentType || !contentId) {
    return res.status(400).json({ ok: false, reason: 'Paramètres manquants.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) return res.status(401).json({ ok: false, reason: 'Session expirée.' });

  const { data: profile } = await admin.from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
  if (!profile?.is_admin) return res.status(403).json({ ok: false, reason: 'Action réservée aux administrateurs.' });

  if (action === 'resolve_navigation') {
    const nav = await resolveNavigation(admin, contentType, contentId);
    if (!nav) return res.status(404).json({ ok: false, reason: 'Contenu introuvable.' });
    return res.status(200).json({ ok: true, nav });
  }

  if (action === 'dismiss_report') {
    const { error } = await admin.from('reports')
      .delete()
      .eq('content_type', contentType)
      .eq('content_id', contentId);
    if (error) return res.status(500).json({ ok: false, reason: 'Erreur lors de la suppression du signalement.' });
    return res.status(200).json({ ok: true });
  }

  if (action === 'delete_content') {
    try {
      await deleteContent(admin, contentType, contentId);
    } catch (err) {
      console.error('[admin-action] delete_content:', err);
      return res.status(500).json({ ok: false, reason: 'Erreur lors de la suppression du contenu.' });
    }
    await admin.from('reports').delete().eq('content_type', contentType).eq('content_id', contentId);
    return res.status(200).json({ ok: true });
  }

  return res.status(400).json({ ok: false, reason: 'Action inconnue.' });
}

async function resolveNavigation(admin, contentType, contentId) {
  if (contentType === 'review') {
    const { data } = await admin.from('reviews').select('country_code').eq('id', contentId).maybeSingle();
    return data?.country_code
      ? { countryCode: data.country_code, tab: 'reviews', extra: { reviewId: contentId } }
      : null;
  }
  if (contentType === 'destination') {
    const { data } = await admin.from('user_destinations').select('country_code').eq('id', contentId).maybeSingle();
    return data?.country_code
      ? { countryCode: data.country_code, tab: 'destinations', extra: { commDestId: contentId } }
      : null;
  }
  if (contentType === 'dest_review') {
    const { data: dr } = await admin.from('destination_reviews').select('destination_id').eq('id', contentId).maybeSingle();
    if (!dr?.destination_id) return null;
    // destination_id = "<countryCode>_<destId>" (ex: "CHN_1").
    // Le code pays est le préfixe ; les destinations peuvent être prédéfinies
    // (absentes de user_destinations), donc on ne dépend PAS de cette table.
    const sepIdx = dr.destination_id.indexOf('_');
    if (sepIdx === -1) return null;
    const countryCode = dr.destination_id.slice(0, sepIdx);
    const destId = dr.destination_id.slice(sepIdx + 1);
    return { countryCode, tab: 'destinations', extra: { destId, reviewId: contentId } };
  }
  return null;
}

async function deleteContent(admin, contentType, contentId) {
  if (contentType === 'review') {
    await admin.from('review_votes').delete().eq('review_id', contentId);
    await admin.from('reviews').delete().eq('id', contentId);

  } else if (contentType === 'dest_review') {
    await admin.from('destination_review_votes').delete().eq('review_id', contentId);
    await admin.from('destination_reviews').delete().eq('id', contentId);

  } else if (contentType === 'destination') {
    const { data: destReviews } = await admin
      .from('destination_reviews')
      .select('id')
      .like('destination_id', `%\\_${contentId}`);
    if (destReviews?.length) {
      const ids = destReviews.map((r) => r.id);
      await admin.from('destination_review_votes').delete().in('review_id', ids);
      await admin.from('destination_reviews').delete().like('destination_id', `%_${contentId}`);
    }

    const { data: dest } = await admin
      .from('user_destinations')
      .select('image_url, destination_places(image_url)')
      .eq('id', contentId)
      .maybeSingle();
    if (dest) {
      const extractPath = (url) => {
        if (!url) return null;
        const marker = `/destination-photos/`;
        const idx = url.indexOf(marker);
        return idx !== -1 ? url.slice(idx + marker.length) : null;
      };
      const filesToDelete = [
        extractPath(dest.image_url),
        ...(dest.destination_places || []).map((p) => extractPath(p.image_url)),
      ].filter(Boolean);
      if (filesToDelete.length) {
        await admin.storage.from('destination-photos').remove(filesToDelete);
      }
    }

    await admin.from('destination_places').delete().eq('destination_id', contentId);
    await admin.from('user_destinations').delete().eq('id', contentId);
  }
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
