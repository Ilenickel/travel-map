import { useState } from "react";
import { useTranslation } from "react-i18next";
import { formatWikiAttribution } from "../lib/wikiAttribution";

// `meta` (facultatif) : { author, license, licenseUrl } | undefined — voir
// useWikipediaImages.js. Le crédit reste en tooltip native (`title`) au survol
// sur desktop, mais comme cet attribut n'a aucun équivalent tactile, un badge
// ⓘ tapable affiche la même attribution dans une bulle : c'est ce qui rend le
// crédit accessible sur mobile (obligation des licences CC-BY/CC-BY-SA).
// Le wrapper reçoit le `className` de mise en page à la place de l'<img>
// (dimensions, filter, position...) ; l'image remplit le wrapper.
export default function WikiImage({ src, alt, className, meta }) {
  const { t } = useTranslation("app");
  const [creditOpen, setCreditOpen] = useState(false);

  if (!src) {
    return (
      <div className={`wiki-img-placeholder ${className ?? ""}`} aria-label={alt}>
        <span>🏛</span>
      </div>
    );
  }

  const credit = formatWikiAttribution(meta, t);

  const toggleCredit = (e) => {
    // Les images vivent souvent dans des cartes/boutons cliquables : le tap
    // sur le badge ne doit ni ouvrir la carte ni suivre le lien parent.
    e.preventDefault();
    e.stopPropagation();
    setCreditOpen((o) => !o);
  };

  return (
    <span className={`wiki-img-wrap ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        className="wiki-img-inner"
        decoding="async"
        title={credit}
      />
      {credit && (
        <span
          role="button"
          tabIndex={0}
          className="wiki-credit-btn"
          aria-label={t("wikiCredit.showCredit")}
          onClick={toggleCredit}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleCredit(e); }}
        >
          i
        </span>
      )}
      {creditOpen && (
        <span className="wiki-credit-bubble" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          {credit}
        </span>
      )}
    </span>
  );
}
