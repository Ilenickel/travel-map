-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v9
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v8.sql
--
-- ITINÉRAIRES ÉDITORIAUX : pour amorcer les suggestions avant l'arrivée de
-- voyages partagés par de vrais utilisateurs, on peut insérer des itinéraires
-- "maison" (source_trip_id = NULL, created_by = NULL, criteria = NULL —
-- "non renseigné", cohérent avec le sens déjà existant depuis la v8).
--
-- is_editorial distingue ces itinéraires des voyages réels, pour que le
-- client affiche un avertissement ("proposé par Triply, pas par un
-- utilisateur — peut être moins précis") plutôt que de laisser croire à un
-- retour d'expérience réel.
-- ════════════════════════════════════════════════════════════════

ALTER TABLE trip_templates        ADD COLUMN IF NOT EXISTS is_editorial BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE trip_template_groups  ADD COLUMN IF NOT EXISTS is_editorial BOOLEAN NOT NULL DEFAULT false;
