// Helper client pour les actions admin (signalement + modération manuelle).
import { supabase } from './supabase';
import i18n from '../i18n';

// Source unique des codes de motif de signalement — les libellés (courts pour
// un badge déjà choisi, longs pour le formulaire de choix) vivent dans
// app.json (reasonsShort/reasonsLong), jamais recopiés ici.
export const REPORT_REASON_CODES = [
  'photo_obscene', 'photo_logo', 'photo_wrongplace',
  'insult', 'politics', 'spam', 'wrong_info', 'other',
];

async function getAuthToken() {
  try {
    const { data } = await supabase.auth.getSession();
    return data?.session?.access_token ?? null;
  } catch { return null; }
}

// Signale un contenu (review, dest_review, destination).
// Utilise upsert avec onConflict pour garantir l'unicité (une seule alerte par contenu).
export async function reportContent(contentType, contentId, reason = null, detail = null) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: i18n.t('admin.needLoginToReport', { ns: 'app' }) };

  const { error } = await supabase.from('reports').insert({
    reporter_id: user.id,
    content_type: contentType,
    content_id: contentId,
    ...(reason ? { reason } : {}),
    ...(detail ? { detail } : {}),
  });
  // code 23505 = violation unique constraint (déjà signalé) → on ignore
  if (error && error.code !== '23505') return { ok: false, reason: i18n.t('admin.reportFailed', { ns: 'app' }) };
  return { ok: true };
}

// Résout la navigation vers le contenu d'une alerte (via endpoint admin, sans RLS).
export async function resolveAlertNavigation(contentType, contentId) {
  const authToken = await getAuthToken();
  let res;
  try {
    res = await fetch('/api/admin-action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authToken, action: 'resolve_navigation', contentType, contentId }),
    });
  } catch {
    return { ok: false };
  }
  try { return await res.json(); }
  catch { return { ok: false }; }
}

// Appelle l'endpoint admin (dismiss ou delete).
export async function callAdminAction(action, contentType, contentId) {
  const authToken = await getAuthToken();
  let res;
  try {
    res = await fetch('/api/admin-action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authToken, action, contentType, contentId }),
    });
  } catch {
    return { ok: false, reason: i18n.t('admin.connectionFailed', { ns: 'app' }) };
  }
  try { return await res.json(); }
  catch { return { ok: false, reason: i18n.t('admin.invalidServerResponse', { ns: 'app' }) }; }
}
