// Helper client pour appeler les fonctions de modération serveur.
// Joint automatiquement le jeton d'accès de l'utilisateur connecté.
import { supabase } from './supabase';

export async function callModeration(endpoint, payload) {
  let authToken = null;
  try {
    const { data } = await supabase.auth.getSession();
    authToken = data?.session?.access_token ?? null;
  } catch {
    authToken = null;
  }

  let res;
  try {
    res = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, authToken }),
    });
  } catch {
    return { ok: false, reason: 'Connexion au service de vérification impossible. Vérifiez votre connexion et réessayez.' };
  }

  try {
    return await res.json();
  } catch {
    return { ok: false, reason: 'Réponse du serveur invalide. Réessayez.' };
  }
}
