-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v18.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Dépenses saisies dans la devise réellement payée sur place : jusqu'ici il
-- fallait convertir soi-même (5 000 ¥ → « environ 31 € ») avant de saisir.
-- Le formulaire accepte désormais n'importe quelle devise et convertit à
-- l'enregistrement, au taux journalier (open.er-api.com, cf.
-- src/lib/exchangeRates.js).
--
-- `amount` reste la SEULE source de vérité pour tous les calculs (totaux,
-- soldes, qui doit quoi à qui) et reste toujours en EUROS : rien ne change
-- pour les lignes existantes ni pour le code de calcul.
--
-- Les trois colonnes ci-dessous sont purement descriptives — elles gardent la
-- trace de ce qui a été SAISI, pour pouvoir réafficher « 5 000 JPY » sous la
-- dépense. Le taux est figé ici volontairement : une dépense passée doit
-- rester affichée avec le taux du jour où elle a été payée, pas être
-- réécrite chaque fois que le cours bouge.
--
-- NULL sur les trois → dépense saisie directement en euros (cas historique
-- de toutes les lignes déjà en base, et cas courant d'un voyage en zone euro).
ALTER TABLE trip_expenses ADD COLUMN IF NOT EXISTS original_amount NUMERIC;
ALTER TABLE trip_expenses ADD COLUMN IF NOT EXISTS original_currency TEXT;
ALTER TABLE trip_expenses ADD COLUMN IF NOT EXISTS exchange_rate NUMERIC;
