-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v10.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Coût par activité (lieu OU trajet — la catégorie "transport" est une
-- activité comme une autre et un billet de train a un prix).
--
-- Devise unique implicite (euro), comme trip_lodgings.price : l'affichage
-- passe partout par formatPrice (Intl fr-FR/EUR, planningUtils.js). Si une
-- gestion multi-devises devient nécessaire, elle sera ajoutée en même temps
-- que la répartition des dépenses (future fonctionnalité type Tricount, qui
-- lira cette même colonne) — inutile de payer sa complexité maintenant.
--
-- Aucune contrainte NOT NULL : un coût non renseigné (NULL) et un coût de
-- 0 € (activité gratuite volontairement notée) sont deux informations
-- différentes, les deux doivent rester possibles.

ALTER TABLE trip_activities
  ADD COLUMN IF NOT EXISTS cost NUMERIC CHECK (cost >= 0);

-- Pas de nouvelle policy RLS : cost vit dans trip_activities, déjà couverte
-- par les policies existantes (is_trip_owner / is_trip_member).
