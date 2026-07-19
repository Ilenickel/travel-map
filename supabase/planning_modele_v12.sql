-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v12
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v11.sql
--
-- IMPORT PLUS LONG QUE LE VOYAGE : quand un voyage importé déborde de la date
-- de fin du voyage (ex. voyage de 7 jours, import de 8), le dernier jour
-- importé était perdu en silence (les activités datées au-delà de end_date ne
-- sont affichées nulle part). Le serveur (handleImportTrip,
-- api/trip-templates.js) étend désormais trips.end_date et mémorise ici les
-- jours ainsi AJOUTÉS, pour que la vue par jour les signale d'un badge
-- « jour ajouté par l'import ».
--
-- Tableau de dates (une entrée par jour ajouté) plutôt qu'un simple booléen :
-- plusieurs imports successifs peuvent chacun ajouter leurs propres jours.
-- ════════════════════════════════════════════════════════════════

ALTER TABLE trips ADD COLUMN IF NOT EXISTS import_added_days DATE[];
