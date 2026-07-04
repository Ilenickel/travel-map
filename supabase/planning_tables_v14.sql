-- ─── i18n : langue préférée de l'utilisateur ──────────────────────
-- Persistée sur le profil pour qu'un utilisateur connecté retrouve sa langue
-- sur un autre appareil (le choix anonyme, lui, reste en localStorage).
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS language TEXT NOT NULL DEFAULT 'fr';
