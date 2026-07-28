// Recadrage intelligent des photos Unsplash au format réellement affiché.
//
// Les URLs Unsplash stockées (`image_url`/`thumb_url`, voir cityImages.js /
// countryImages.js) utilisent `fit=max` : ce mode redimensionne SANS jamais
// recadrer, il garde tout le cadre d'origine. Le recadrage final se fait donc
// côté CSS (`background-size: cover` / `object-fit: cover`), qui découpe
// bêtement au centre du conteneur — si le sujet de la photo n'est pas déjà
// centré dans le cadre d'origine, il se fait couper (constaté le 2026-07-28
// sur des photos de pays choisies manuellement, dont le sujet n'était pas
// centré).
//
// Correctif : demander à Unsplash/Imgix un recadrage `fit=crop` avec
// `crop=entropy` (déjà présent dans l'URL mais SANS EFFET tant que fit=max
// est utilisé) et un format cible (largeur/hauteur) correspondant au ratio
// réel d'affichage. L'entropie visuelle (zone la plus "chargée en détails")
// sert alors de repère pour choisir la zone à garder — nettement mieux qu'un
// centre géométrique aveugle, sans intervention manuelle photo par photo.
//
// N'affecte QUE les URLs images.unsplash.com : un lien d'une autre origine
// (ex: à l'avenir une autre source d'images) est renvoyé tel quel plutôt que
// de risquer de casser une URL dont on ne connaît pas le format de requête.
export function cropUnsplashUrl(url, { width, height } = {}) {
  if (!url || !width || !height) return url;
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }
  if (parsed.hostname !== 'images.unsplash.com') return url;

  parsed.searchParams.set('fit', 'crop');
  parsed.searchParams.set('crop', 'entropy');
  parsed.searchParams.set('w', String(Math.round(width)));
  parsed.searchParams.set('h', String(Math.round(height)));
  return parsed.toString();
}
