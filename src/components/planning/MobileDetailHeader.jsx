// En-tête plein écran partagé par le détail mobile d'une ville (CityBlock) et
// d'une excursion (DaytripCard) : photo héro + nom + retour + menu, puis bande
// d'onglets — le tout se masque/réapparaît EN BLOC en scrollant (voir
// useHeaderScrollHide), jamais séparément, pour rester cohérent avec la
// disparition simultanée demandée ("nom de la ville, photo, topbar d'onglet").
// Bande d'onglets stylée comme .profile-modal-tabs (App.css, fiche profil
// utilisateur) : conteneur arrondi segmenté, icône + libellé + badge de
// compte, soulignement dégradé sur l'onglet actif — demande du 2026-07-23.
// Largeurs ÉGALES en grille (pas de scroll horizontal) : avec exactement 3 ou
// 4 onglets selon le contexte (ville vs excursion), tous restent NATIVEMENT
// visibles sans avoir à faire défiler la bande — ce qui évitait aussi le
// scroll horizontal qui se faisait détourner en changement de page (pager).
export default function MobileDetailHeader({
  hidden, image, onBack, backLabel, name, badges, menu, titleActions, extra, tabs, activeTab, onTabChange,
}) {
  const mediaStyle = image?.imageUrl ? { backgroundImage: `url(${image.imageUrl})` } : undefined;

  return (
    <div className={`pp-detail-header${hidden ? ' pp-detail-header--hidden' : ''}`}>
      <div className={`pp-detail-hero${image?.imageUrl ? ' has-image' : ''}`} style={mediaStyle}>
        <div className="pp-detail-hero-shade" />
        <button type="button" className="pp-detail-back-btn" onClick={onBack} aria-label={backLabel} title={backLabel}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        {/* Le "⋯" (menu) reste en haut, à côté du retour — les autres actions
            (sélection, détection de zones, date) descendent au niveau du
            badge "X lieux" via titleActions, sur la même ligne à droite
            (demande du 2026-07-24). */}
        <div className="pp-detail-hero-menu">{menu}</div>
        <div className="pp-detail-hero-title-row">
          <div className="pp-detail-hero-titles">
            <div className="pp-detail-hero-name">{name}</div>
            {badges?.length > 0 && <div className="pp-detail-hero-badges">{badges}</div>}
          </div>
          {titleActions && <div className="pp-detail-hero-title-actions">{titleActions}</div>}
        </div>
      </div>
      {extra && <div className="pp-detail-hero-extra">{extra}</div>}
      {tabs?.length > 0 && (
        <div className="pp-detail-tabbar" role="tablist" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`pp-detail-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => onTabChange(tab.key)}
            >
              <span className="pp-detail-tab-icon-wrap">
                <span className={`pp-detail-tab-icon${tab.tone ? ` pp-detail-tab-icon--${tab.tone}` : ''}`} aria-hidden="true">{tab.icon}</span>
                {tab.count > 0 && <span className="pp-detail-tab-count">{tab.count}</span>}
              </span>
              <span className="pp-detail-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
