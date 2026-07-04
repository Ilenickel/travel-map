// Liste blanche pour toute image envoyée par un utilisateur (destinations, lieux,
// avis). accept="image/*" sur les <input type="file"> n'est qu'une suggestion pour
// la boîte de dialogue du système — ça ne bloque rien côté code, un utilisateur peut
// choisir "tous les fichiers" et sélectionner n'importe quoi. Exclut notamment
// image/svg+xml : un SVG est un document XML qui peut embarquer du <script>, executé
// si le fichier est un jour ouvert en navigation directe (URL publique stable de ces
// buckets) plutôt qu'affiché via <img> (contexte où les scripts ne s'exécutent pas).
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export function validateImageFile(file) {
  if (!file) return "Aucun fichier sélectionné.";
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return 'Format non accepté (JPG, PNG, WEBP ou GIF uniquement).';
  }
  return null;
}
