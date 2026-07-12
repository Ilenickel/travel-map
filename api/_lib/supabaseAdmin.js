// Client Supabase côté serveur, utilisant la clé service_role (jamais exposée au navigateur).
// Sert à écrire en base APRÈS modération, en contournant les politiques RLS de verrouillage.
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getAdminClient() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    throw new Error('Configuration Supabase serveur manquante (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)');
  }
  return createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// Valide le jeton d'accès envoyé par le navigateur et renvoie l'utilisateur authentifié.
export async function verifyUser(admin, authToken) {
  if (!authToken) return null;
  const token = authToken.replace(/^Bearer\s+/i, '');
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

// Un voyage à plusieurs (trip_members) donne aux membres invités un accès en
// écriture complet (RLS trips_member_write/trip_activities_member/etc., voir
// supabase/planning_tables_v2.sql) — pas seulement au propriétaire. Toute
// route qui vérifie l'accès à un voyage doit accepter les deux, sous peine de
// bloquer silencieusement les membres invités sur des actions qu'ils ont par
// ailleurs le droit de faire (partage/import de planning-modèle, etc.).
export async function verifyTripAccess(admin, tripId, userId) {
  // start_date et share_criteria inclus : utilisés par api/trip-templates.js
  // (share recopie les critères sur les modèles, import-trip cale les dates
  // des villes importées sur le début du voyage) — évite une relecture de la
  // même ligne juste après.
  const { data: trip } = await admin.from('trips').select('id, user_id, start_date, share_criteria').eq('id', tripId).maybeSingle();
  if (!trip) return null;
  if (trip.user_id === userId) return trip;
  const { data: membership } = await admin
    .from('trip_members')
    .select('id')
    .eq('trip_id', tripId)
    .eq('user_id', userId)
    .maybeSingle();
  return membership ? trip : null;
}
