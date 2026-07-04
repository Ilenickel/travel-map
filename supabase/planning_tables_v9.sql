-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v9.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Pièces jointes (billets, réservations, QR codes...) attachées à une
-- activité (lieu OU trajet, la catégorie "transport" est une activité comme
-- une autre) ou à un hébergement.
--
-- Sécurité : ces fichiers sont PERSONNELS (billets/QR codes nominatifs), pas
-- partagés avec le reste du voyage même si celui-ci a plusieurs membres — un
-- billet de train appartient à la personne qui l'a importé, pas à tout le
-- monde qui peut voir/éditer l'activité. Donc :
--   - table trip_attachments : RLS restreinte à uploaded_by = auth.uid()
--     (pas is_trip_owner/is_trip_member comme les autres tables de planning).
--   - bucket Storage PRIVÉ, chemin {trip_id}/{uploader_id}/{activity|lodging_id}/
--     {fichier}, et policies storage.objects qui vérifient le 2e segment
--     (uploader_id) = auth.uid() — même un autre membre du voyage ne peut pas
--     lister ni ouvrir le fichier d'un autre.
--   - accès en lecture uniquement via signed URLs à courte durée de vie.

CREATE TABLE IF NOT EXISTS trip_attachments (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id       UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  activity_id   UUID REFERENCES trip_activities(id) ON DELETE CASCADE,
  lodging_id    UUID REFERENCES trip_lodgings(id) ON DELETE CASCADE,
  file_path     TEXT NOT NULL,
  file_name     TEXT NOT NULL,
  file_size     INTEGER,
  mime_type     TEXT,
  uploaded_by   UUID REFERENCES auth.users(id) NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT now(),
  -- Rattaché à exactement une activité OU un hébergement, jamais les deux ni aucun —
  -- sinon un fichier orphelin n'apparaîtrait nulle part dans l'UI mais resterait
  -- accessible en base et en Storage indéfiniment.
  CONSTRAINT attachment_single_owner CHECK (
    (activity_id IS NOT NULL AND lodging_id IS NULL) OR
    (activity_id IS NULL AND lodging_id IS NOT NULL)
  )
);

CREATE INDEX IF NOT EXISTS idx_trip_attachments_activity ON trip_attachments(activity_id);
CREATE INDEX IF NOT EXISTS idx_trip_attachments_lodging ON trip_attachments(lodging_id);

-- Ce script a pu être joué une première fois avec une version antérieure de ces
-- policies (basées sur is_trip_owner/is_trip_member au lieu de uploaded_by) : on
-- les recrée donc de façon idempotente plutôt que d'échouer sur "already exists".
DROP POLICY IF EXISTS "trip_attachments_own" ON trip_attachments;
DROP POLICY IF EXISTS "trip_attachments_storage_select" ON storage.objects;
DROP POLICY IF EXISTS "trip_attachments_storage_insert" ON storage.objects;
DROP POLICY IF EXISTS "trip_attachments_storage_delete" ON storage.objects;

-- Si le script a déjà tourné une première fois, uploaded_by pouvait être NULL ;
-- on nettoie ces lignes orphelines avant de passer la colonne en NOT NULL
-- (il ne peut s'agir que de tests, un fichier sans propriétaire n'est de toute
-- façon accessible à personne avec la nouvelle policy).
DELETE FROM trip_attachments WHERE uploaded_by IS NULL;
ALTER TABLE trip_attachments ALTER COLUMN uploaded_by SET NOT NULL;

ALTER TABLE trip_attachments ENABLE ROW LEVEL SECURITY;

-- Strictement personnel : seul celui qui a importé le fichier peut le voir,
-- le lister ou le supprimer — même le propriétaire du voyage n'y a pas accès
-- si ce n'est pas lui qui l'a ajouté. L'INSERT vérifie en plus l'appartenance
-- au voyage (impossible d'attacher un fichier à un voyage auquel on n'a pas accès).
CREATE POLICY "trip_attachments_own" ON trip_attachments
  FOR ALL
  USING (uploaded_by = auth.uid())
  WITH CHECK (
    uploaded_by = auth.uid()
    AND (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()))
  );

-- ─── Storage bucket privé ───
-- Convention de chemin : {trip_id}/{uploader_id}/{activity_id|lodging_id}/{timestamp}_{nom}.
-- Le 2e segment (uploader_id) est ce que les policies storage.objects vérifient
-- ci-dessous via storage.foldername(name) — c'est lui qui rend le fichier
-- personnel, pas seulement réservé au voyage.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'trip-attachments', 'trip-attachments', false, 15728640,
  ARRAY['image/jpeg','image/png','image/webp','image/heic','application/pdf']
)
ON CONFLICT (id) DO UPDATE SET
  public = false,
  file_size_limit = 15728640,
  allowed_mime_types = ARRAY['image/jpeg','image/png','image/webp','image/heic','application/pdf'];

CREATE POLICY "trip_attachments_storage_select" ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'trip-attachments'
    AND (storage.foldername(name))[2] = auth.uid()::text
  );

CREATE POLICY "trip_attachments_storage_insert" ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'trip-attachments'
    AND (storage.foldername(name))[2] = auth.uid()::text
    AND (
      is_trip_owner((storage.foldername(name))[1]::uuid, auth.uid())
      OR is_trip_member((storage.foldername(name))[1]::uuid, auth.uid())
    )
  );

CREATE POLICY "trip_attachments_storage_delete" ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'trip-attachments'
    AND (storage.foldername(name))[2] = auth.uid()::text
  );

-- ─── Nettoyage automatique du Storage ───
-- removeActivity/removeLodging/deleteTrip (useTrips.js) ne font qu'un DELETE SQL ;
-- la ligne trip_attachments disparaît alors via ON DELETE CASCADE, mais SANS ce
-- trigger le fichier physique resterait pour toujours dans le bucket (orphelin,
-- invisible dans l'UI, mais continuant à consommer du quota). Le trigger tourne
-- pour CHAQUE suppression de ligne trip_attachments, quelle qu'en soit l'origine
-- (suppression directe, cascade d'activité/hébergement/voyage). SECURITY DEFINER
-- est nécessaire : la suppression d'une activité par le propriétaire du voyage
-- doit pouvoir nettoyer le fichier Storage d'un AUTRE membre (l'uploader), ce que
-- la RLS storage.objects lui interdirait sinon.
CREATE OR REPLACE FUNCTION delete_attachment_storage_object()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM storage.objects WHERE bucket_id = 'trip-attachments' AND name = OLD.file_path;
  RETURN OLD;
END;
$$;

DROP TRIGGER IF EXISTS trg_delete_attachment_storage_object ON trip_attachments;
CREATE TRIGGER trg_delete_attachment_storage_object
  AFTER DELETE ON trip_attachments
  FOR EACH ROW EXECUTE FUNCTION delete_attachment_storage_object();
