-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v16.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Suivi des dépenses partagées du voyage ("qui a payé quoi") : chaque ligne
-- est une somme payée par un participant (payer_id), saisie par n'importe quel
-- membre. La liste des participants n'est PAS stockée ici : elle est dérivée à
-- l'affichage (propriétaire du voyage + trip_members) — un invité qui rejoint
-- un voyage en cours apparaît donc automatiquement, sans toucher aux montants
-- déjà saisis pour les autres.

CREATE TABLE IF NOT EXISTS trip_expenses (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id     UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  -- Pas de FK vers auth.users : un participant qui quitte le voyage (ou
  -- supprime son compte) ne doit pas faire disparaître les sommes qu'il a
  -- payées — l'historique des comptes du groupe doit rester exact. L'UI
  -- affiche alors "Ancien participant" si le profil n'existe plus.
  payer_id    UUID NOT NULL,
  created_by  UUID NOT NULL,
  label       TEXT,
  amount      NUMERIC(10,2) NOT NULL CHECK (amount > 0),
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS trip_expenses_trip_idx ON trip_expenses(trip_id);

ALTER TABLE trip_expenses ENABLE ROW LEVEL SECURITY;

-- Mêmes règles d'accès que trip_activities/trip_lodgings : le propriétaire du
-- voyage et les membres invités (trip_members) ont tous les droits — chacun
-- peut saisir ou corriger une somme, comme dans un carnet de comptes partagé.
-- is_trip_owner/is_trip_member sont les fonctions SECURITY DEFINER créées en v2.
CREATE POLICY "trip_expenses_own" ON trip_expenses
  FOR ALL
  USING (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()));
