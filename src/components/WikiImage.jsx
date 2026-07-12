import { useTranslation } from "react-i18next";
import { formatWikiAttribution } from "../lib/wikiAttribution";

// `meta` (facultatif) : { author, license, licenseUrl } | undefined — voir
// useWikipediaImages.js. Affiché en tooltip native (`title`, jamais de HTML
// rendu) : discrète, ne change rien à la mise en page, satisfait l'obligation
// d'attribution des licences CC-BY/CC-BY-SA sans alourdir l'interface.
export default function WikiImage({ src, alt, className, meta }) {
  const { t } = useTranslation("app");

  if (!src) {
    return (
      <div className={`wiki-img-placeholder ${className ?? ""}`} aria-label={alt}>
        <span>🏛</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      decoding="async"
      title={formatWikiAttribution(meta, t)}
    />
  );
}
