// Construit le texte d'attribution (tooltip discrète) d'une image Wikipédia/
// Commons — voir useWikipediaImages.js. `meta` peut être :
// - undefined  : pas encore résolu (chargement en cours) → pas de tooltip.
// - { author, license, licenseUrl } : résolu, chaque champ pouvant être null
//   (Wikimedia ne fournit pas toujours l'auteur/la licence, notamment pour
//   les images anciennes du domaine public) → toujours au moins la source.
export function formatWikiAttribution(meta, t) {
  if (!meta) return undefined;
  const { author, license } = meta;
  if (author && license) return t("wikiCredit.full", { author, license });
  if (author) return t("wikiCredit.authorOnly", { author });
  if (license) return t("wikiCredit.licenseOnly", { license });
  return t("wikiCredit.sourceOnly");
}
