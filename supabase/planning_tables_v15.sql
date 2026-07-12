-- ─── Devise d'affichage préférée de l'utilisateur ──────────────────
-- Même logique que la langue (v14) : persistée sur le profil pour qu'un
-- utilisateur connecté retrouve sa devise sur un autre appareil (le choix
-- anonyme, lui, reste en localStorage).
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS currency TEXT NOT NULL DEFAULT 'EUR';
