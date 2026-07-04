import { supabase } from './supabase';

const BUCKET = 'trip-attachments';

// Ces fichiers peuvent être des billets/QR codes nominatifs : on limite volontairement
// aux types qu'on sait afficher/imprimer sans risque (pas de SVG ni HTML, qui peuvent
// embarquer du script) et on plafonne la taille pour éviter un abus de quota Storage.
export const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15 Mo, aligné sur le bucket (v9)
export const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf'];

const EXT_BY_MIME = {
  'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp',
  'image/heic': 'heic', 'application/pdf': 'pdf',
};

// Ne garde que des caractères sûrs pour un chemin Storage : un nom de fichier
// forgé ("../../x" ou contenant "/") ne doit jamais pouvoir sortir du dossier
// {trip_id}/{uploader_id}/{owner_id}/ attendu par les policies storage.objects.
function sanitizeFileName(name) {
  const base = (name || 'fichier').normalize('NFKD').replace(/[^\w.\-]/g, '_');
  return base.slice(-80) || 'fichier';
}

export function validateFile(file) {
  if (!file) return "Aucun fichier sélectionné.";
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return 'Type de fichier non accepté (image JPG/PNG/WEBP/HEIC ou PDF uniquement).';
  }
  if (file.size > MAX_FILE_SIZE) {
    return 'Fichier trop volumineux (15 Mo maximum).';
  }
  return null;
}

// Pièces jointes strictement personnelles (billets/QR codes nominatifs) : même
// pour un voyage à plusieurs, chacun ne voit que ce qu'il a lui-même importé —
// la RLS de trip_attachments filtre déjà sur uploaded_by = auth.uid(), mais on
// filtre aussi ici pour ne jamais dépendre uniquement du serveur en cas d'oubli.
export async function listAttachments({ activityId, lodgingId, uploadedBy }) {
  let query = supabase.from('trip_attachments').select('*').eq('uploaded_by', uploadedBy).order('created_at', { ascending: true });
  query = activityId ? query.eq('activity_id', activityId) : query.eq('lodging_id', lodgingId);
  const { data, error } = await query;
  if (error) { console.error('listAttachments failed:', error); return []; }
  return data || [];
}

export async function uploadAttachment({ tripId, activityId, lodgingId, file, uploadedBy }) {
  if (!uploadedBy) return { error: 'Vous devez être connecté pour ajouter une pièce jointe.' };
  const validationError = validateFile(file);
  if (validationError) return { error: validationError };

  const ownerId = activityId || lodgingId;
  const ext = EXT_BY_MIME[file.type] || 'bin';
  // Le suffixe aléatoire évite une collision si deux fichiers sont envoyés à la même
  // milliseconde pour la même activité (upsert:false ferait échouer le 2e upload sinon).
  const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const path = `${tripId}/${uploadedBy}/${ownerId}/${uniqueSuffix}_${sanitizeFileName(file.name)}.${ext}`.replace(/\.([a-z0-9]+)\.[a-z0-9]+$/i, `.$1`);
  // (le replace ci-dessus évite un double suffixe si le nom original avait déjà la bonne extension)

  const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, file, {
    contentType: file.type,
    upsert: false,
  });
  if (upErr) { console.error('uploadAttachment storage failed:', upErr); return { error: "Échec de l'envoi du fichier." }; }

  const { data, error: dbErr } = await supabase.from('trip_attachments').insert({
    trip_id: tripId,
    activity_id: activityId || null,
    lodging_id: lodgingId || null,
    file_path: path,
    file_name: file.name.slice(0, 200),
    file_size: file.size,
    mime_type: file.type,
    uploaded_by: uploadedBy,
  }).select().single();

  if (dbErr) {
    // Ne laisse pas un fichier orphelin dans le bucket privé si l'insert échoue.
    await supabase.storage.from(BUCKET).remove([path]);
    console.error('uploadAttachment db insert failed:', dbErr);
    return { error: "Échec de l'enregistrement de la pièce jointe." };
  }
  return { data };
}

export async function deleteAttachment(attachment) {
  await supabase.storage.from(BUCKET).remove([attachment.file_path]);
  const { error } = await supabase.from('trip_attachments').delete().eq('id', attachment.id);
  if (error) console.error('deleteAttachment db failed:', error);
  return { error };
}

// Nettoie les fichiers Storage AVANT une suppression (activité, hébergement,
// ville, pays ou voyage entier) qui va cascader en base sur trip_attachments.
// Nécessaire depuis planning_tables_v13.sql : Supabase bloque désormais tout
// DELETE direct sur storage.objects (voir storage.protect_delete()), donc plus
// aucun trigger SQL ne peut faire ce nettoyage à notre place — il n'existe
// plus qu'un seul chemin autorisé, l'API Storage, et il faut l'emprunter AVANT
// que la suppression SQL ne fasse disparaître les lignes trip_attachments
// (qui sont notre seul moyen de connaître les chemins de fichiers à effacer).
//
// Limite assumée : les pièces jointes sont strictement personnelles (RLS
// filtrée sur uploaded_by = auth.uid(), voir planning_tables_v9.sql) — cet
// appel, exécuté avec la session de l'utilisateur qui supprime, ne peut donc
// nettoyer QUE ses propres fichiers. Si un autre membre du voyage avait
// attaché les siens à la même activité, leurs fichiers Storage deviennent
// orphelins (la ligne trip_attachments, elle, disparaît bien via la cascade
// SQL normale) — c'est la contrepartie du modèle "personnel et privé", pas un
// oubli : on ne veut de toute façon pas que la suppression d'un lieu par le
// propriétaire du voyage révèle ou touche les fichiers d'un autre membre.
export async function cleanupAttachmentsStorage({ tripId, activityIds = [], lodgingIds = [] } = {}) {
  let query = supabase.from('trip_attachments').select('file_path');
  if (tripId) {
    query = query.eq('trip_id', tripId);
  } else {
    const filters = [];
    if (activityIds.length) filters.push(`activity_id.in.(${activityIds.join(',')})`);
    if (lodgingIds.length) filters.push(`lodging_id.in.(${lodgingIds.join(',')})`);
    if (!filters.length) return;
    query = query.or(filters.join(','));
  }
  const { data, error } = await query;
  if (error) { console.error('cleanupAttachmentsStorage: lecture échouée:', error); return; }
  if (!data?.length) return;
  const { error: rmErr } = await supabase.storage.from(BUCKET).remove(data.map(r => r.file_path));
  if (rmErr) console.error('cleanupAttachmentsStorage: suppression Storage échouée:', rmErr);
}

// URL signée à courte durée (2 min) : jamais de lien stable/public sur des
// billets ou QR codes potentiellement nominatifs. Générée à la demande au
// moment du clic, jamais mise en cache côté client.
export async function getSignedUrl(filePath, expiresIn = 120) {
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(filePath, expiresIn);
  if (error) { console.error('getSignedUrl failed:', error); return null; }
  return data?.signedUrl || null;
}
