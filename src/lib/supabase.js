import { createClient } from '@supabase/supabase-js';

// `trim()` sur les deux valeurs : un saut de ligne collé à la clé au moment de
// la coller dans les variables d'environnement suffit à casser le realtime. La
// clé part alors dans l'URL du WebSocket sous la forme `...40rg%0A`, le JWT
// devient invalide, la connexion est refusée et le client boucle en
// reconnexions (constaté le 2026-08-01 en production). L'appel REST, lui,
// continue de fonctionner : la panne est silencieuse côté fonctionnalités et
// ne se voit que dans la console.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL?.trim(),
  import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()
);
