-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v3 (branche planModel)
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v2.sql
--
-- Pour un voyage à plusieurs (trip_members) : sans cette contrainte, chaque
-- membre qui partage (bouton manuel, ou popup de fin de voyage répondue en
-- même temps par deux personnes avant que share_prompt_answered ne soit
-- passé à true) créerait un doublon du même modèle pour la même ville.
-- Un partage répété du même voyage doit mettre à jour le modèle existant
-- (nouvelles activités si le voyage a été modifié depuis), pas en créer un
-- second — voir api/share-trip-templates.js (upsert sur ce conflit).
--
-- Partiel (WHERE source_trip_id IS NOT NULL) : un modèle dont le voyage
-- source a été supprimé (source_trip_id mis à NULL, ON DELETE SET NULL) ne
-- doit plus jamais entrer en conflit avec quoi que ce soit.
CREATE UNIQUE INDEX IF NOT EXISTS trip_templates_source_city_uniq
  ON trip_templates (source_trip_id, country_code, city_name)
  WHERE source_trip_id IS NOT NULL;
