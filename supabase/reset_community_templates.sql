-- ════════════════════════════════════════════════════════════════
-- Reset des plannings-modèles communautaires (branche planModel) — Triply
-- À exécuter dans l'éditeur SQL de Supabase, à la demande, autant de fois
-- que nécessaire pendant la phase de tests.
--
-- Fait TROIS choses indépendantes (sections 1/2/3 ci-dessous), chacune dans
-- sa propre transaction — commentez une section si vous ne voulez pas la
-- relancer à un moment donné.
--
-- Schéma de référence (voir supabase/planning_modele*.sql) :
--   - trip_template_days / trip_template_activities sont en
--     ON DELETE CASCADE sur trip_templates : supprimer une ligne
--     trip_templates supprime automatiquement ses jours/activités, rien à
--     faire de plus pour ça.
--   - trip_templates.parent_template_id (excursion → ville de base) et
--     trip_templates.group_id (ville → voyage groupé) sont en
--     ON DELETE SET NULL, PAS CASCADE : supprimer une ville de base sans
--     gérer ça laisse ses excursions orphelines (toujours visibles, juste
--     détachées) — les sections ci-dessous les suppriment explicitement.
-- ════════════════════════════════════════════════════════════════


-- ─── 1. Supprimer UN modèle précis (+ ses excursions rattachées) ──────────
-- Exemple : le modèle "Londres" retrouvé sous country_code='CHN'.
-- Remplacez l'UUID par celui à supprimer, puis exécutez ce bloc seul.

BEGIN;

DELETE FROM trip_templates
WHERE parent_template_id = '70768fde-2d6f-472f-8eca-0aa087bc77f2';

DELETE FROM trip_templates
WHERE id = '70768fde-2d6f-472f-8eca-0aa087bc77f2';

-- Groupe devenu vide (tous ses membres viennent d'être supprimés) : ménage,
-- sinon il resterait visible sans aucune ville dedans.
DELETE FROM trip_template_groups g
WHERE NOT EXISTS (SELECT 1 FROM trip_templates t WHERE t.group_id = g.id);

COMMIT;


-- ─── 2. Supprimer TOUS les modèles qui ne viennent pas de Triply ──────────
-- is_editorial = false : tout ce qui a été partagé par un compte utilisateur
-- (vos voyages de test inclus), jamais les itinéraires éditoriaux Triply.

BEGIN;

-- Excursions rattachées à une ville non-éditoriale sur le point d'être
-- supprimée (même raison qu'en section 1 : parent_template_id ne cascade
-- pas tout seul).
DELETE FROM trip_templates
WHERE parent_template_id IN (
  SELECT id FROM trip_templates WHERE is_editorial = false
);

DELETE FROM trip_templates
WHERE is_editorial = false;

DELETE FROM trip_template_groups
WHERE is_editorial = false;

-- Groupes éditoriaux devenus vides par ricochet (rare, mais possible si un
-- groupe mixait des villes éditoriales et non-éditoriales).
DELETE FROM trip_template_groups g
WHERE NOT EXISTS (SELECT 1 FROM trip_templates t WHERE t.group_id = g.id);

COMMIT;


-- ─── 3. Réinitialiser les compteurs "Importé N fois" ──────────────────────
-- uses_count est incrémenté à CHAQUE import (voir increment_template_uses_many
-- / increment_template_group_uses, api/trip-templates.js) — vos imports de
-- test pendant cette phase ont gonflé ces chiffres, qui influencent le
-- classement des suggestions pour TOUT LE MONDE (les plus "populaires"
-- remontent en premier). Remise à zéro globale, éditorial inclus (vos tests
-- ont aussi gonflé les compteurs des itinéraires Triply).
-- likes_count n'est PAS touché : il n'est jamais incrémenté par un import
-- (action distincte, pas concernée par ce nettoyage).

BEGIN;

UPDATE trip_templates SET uses_count = 0;
UPDATE trip_template_groups SET uses_count = 0;

COMMIT;
