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
