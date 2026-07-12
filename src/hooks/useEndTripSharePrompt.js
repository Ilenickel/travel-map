import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { shareTripAsTemplates } from '../lib/shareTripTemplate';

// Voyage terminé (own ou partagé) sans réponse encore donnée à la popup de
// partage comme modèle (planning-modèle communautaire, branche planModel) —
// voir EndTripSharePrompt. Affiché sur l'écran principal du site (hors
// planification), pas seulement quand l'utilisateur ouvre son planning : la
// personne qui revient juste pour consulter un autre pays tombe aussi dessus.
export function useEndTripSharePrompt(userId) {
  const [trip, setTrip] = useState(null);

  const load = useCallback(async () => {
    if (!userId) { setTrip(null); return; }
    const today = new Date().toISOString().slice(0, 10);
    const [{ data: ownTrips }, { data: memberEntries }] = await Promise.all([
      supabase.from('trips').select('id, title, end_date, share_prompt_answered').eq('user_id', userId),
      supabase.from('trip_members').select('trips(id, title, end_date, share_prompt_answered)').eq('user_id', userId),
    ]);
    const sharedTrips = (memberEntries || []).map(m => m.trips).filter(Boolean);
    const all = [...(ownTrips || []), ...sharedTrips]
      .filter((t, i, arr) => arr.findIndex(x => x.id === t.id) === i)
      .filter(t => t.end_date && t.end_date < today && !t.share_prompt_answered)
      // Ordre déterministe : sans lui, laquelle de plusieurs voyages en
      // attente est proposée dépendrait de l'ordre de retour (non garanti)
      // de la requête Supabase, et pourrait différer entre cet écran et
      // celui de la page de planification (qui appelle ce même hook
      // séparément).
      .sort((a, b) => a.end_date.localeCompare(b.end_date));
    setTrip(all[0] || null);
  }, [userId]);

  useEffect(() => { load(); }, [load]);

  const answer = useCallback(async (share, criteria = []) => {
    if (!trip) return;
    // `criteria` : critères cochés à la 2e étape de la popup (avec enfants,
    // en couple… voir TRIP_CRITERIA) — enregistrés sur le voyage puis
    // recopiés sur les modèles par le partage (api/trip-templates.js).
    await supabase.from('trips').update(
      share
        ? { auto_share_template: true, share_prompt_answered: true, share_criteria: criteria }
        : { share_prompt_answered: true }
    ).eq('id', trip.id);
    // Partage immédiat en plus d'activer le partage automatique continu :
    // sans ça, un utilisateur qui répond "oui" depuis l'écran principal (pas
    // dans l'éditeur de CE voyage) ne verrait jamais rien partagé tant qu'il
    // ne rouvre pas ce voyage précis pour y déclencher le partage auto.
    if (share) {
      const { data: destinations } = await supabase.from('trip_destinations').select('id, country_code, country_name').eq('trip_id', trip.id);
      shareTripAsTemplates(trip.id, destinations || []);
    }
    load();
  }, [trip, load]);

  return { trip, answer };
}
