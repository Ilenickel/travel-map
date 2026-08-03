-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v19.sql — ADDITIONS + reprise de données
-- ═══════════════════════════════════════════════════════════════
-- CORRECTIF : une dépense « partagée par tout le monde » était enregistrée
-- avec beneficiaries = NULL, et la liste des bénéficiaires était RECALCULÉE à
-- chaque affichage sur les participants ACTUELS du voyage. Conséquence : quand
-- quelqu'un quittait le voyage, sa part des dépenses PASSÉES disparaissait
-- rétroactivement et était redistribuée sur les restants.
--
--   Voyage A/B/C, A paie l'hôtel 300 € pour tout le monde
--     → A +200, B -100, C -100
--   B quitte le voyage
--     → A +150, C -150   (les 100 € que B devait se sont évaporés)
--
-- Le même mécanisme jouait à l'envers à l'arrivée d'un invité en cours de
-- voyage : il se retrouvait redevable de l'hôtel du premier jour, auquel il
-- n'avait pas dormi.
--
-- Correction : la liste des bénéficiaires est désormais FIGÉE à la création
-- de la dépense (beneficiaries n'est plus jamais NULL). Les entrées/sorties
-- ultérieures du groupe ne réécrivent plus le passé.
--
-- shared_by_all conserve, lui, l'INTENTION de départ (« c'était pour tout le
-- monde » vs « c'était pour 3 d'entre nous ») : sans ce drapeau, une dépense
-- figée sur A/B/C basculerait à tort dans les « dépenses partielles » dès
-- qu'un 4e participant rejoint le voyage, et sortirait de la cagnotte commune
-- affichée en haut de l'écran.
ALTER TABLE trip_expenses ADD COLUMN IF NOT EXISTS shared_by_all BOOLEAN;

-- ── Reprise des lignes existantes ────────────────────────────────
-- 1. L'intention : beneficiaries NULL/vide = « tout le monde » (ancienne
--    convention), une liste explicite = un sous-groupe choisi.
UPDATE trip_expenses
SET shared_by_all = (beneficiaries IS NULL OR cardinality(beneficiaries) = 0)
WHERE shared_by_all IS NULL;

-- 2. Les bénéficiaires : on fige les dépenses historiques « tout le monde »
--    sur la composition ACTUELLE du groupe. On ne peut pas faire mieux —
--    l'historique des entrées/sorties n'a jamais été conservé — mais à partir
--    de maintenant ces lignes ne bougeront plus, alors qu'elles se
--    redistribuaient silencieusement à chaque départ.
--    (propriétaire du voyage + membres de trip_members, dédoublonnés.)
UPDATE trip_expenses e
SET beneficiaries = grp.ids
FROM (
  SELECT t.id AS trip_id,
         ARRAY(
           SELECT DISTINCT uid
           FROM unnest(t.user_id || ARRAY(
             SELECT m.user_id FROM trip_members m WHERE m.trip_id = t.id
           )) AS uid
         ) AS ids
  FROM trips t
) grp
WHERE e.trip_id = grp.trip_id
  AND (e.beneficiaries IS NULL OR cardinality(e.beneficiaries) = 0)
  AND cardinality(grp.ids) > 0;
