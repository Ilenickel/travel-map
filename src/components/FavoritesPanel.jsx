import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { COUNTRIES } from "../data/index";
import { localizeField } from "../lib/localizeCountry";

function getFlagUrl(emoji) {
  const code = [...emoji]
    .map(c => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65))
    .join('')
    .toLowerCase();
  return `https://flagcdn.com/w40/${code}.png`;
}

export default function FavoritesPanel({ favorites, visited, onSelect, onRemove, onRemoveVisited, onClose, user, onLinkToAccount, linkStatus }) {
  const { t, i18n } = useTranslation("app");
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("favorites");

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const list = activeTab === "favorites" ? favorites : visited;
  const onRemoveItem = activeTab === "favorites" ? onRemove : onRemoveVisited;

  const hasLocalData = (() => {
    try {
      const lf = JSON.parse(localStorage.getItem('triply-favorites') || '[]');
      const lv = JSON.parse(localStorage.getItem('triply-visited') || '[]');
      return lf.length > 0 || lv.length > 0;
    } catch { return false; }
  })();

  const linkBtnLabel = (() => {
    if (linkStatus === 'syncing') return t('favorites.syncing');
    if (linkStatus === 'done')    return t('favorites.linkedSuccess');
    if (linkStatus === 'error')   return t('favorites.linkError');
    return t('favorites.linkToAccount');
  })();

  const linkBtnClass = ['favpanel-link-btn', linkStatus === 'done' ? 'done' : '', linkStatus === 'error' ? 'error' : ''].filter(Boolean).join(' ');

  const emptyMsg = activeTab === "favorites"
    ? { icon: "🗺", lines: [t('favorites.emptyFavoritesLine1'), t('favorites.emptyFavoritesLine2')] }
    : { icon: "✈️", lines: [t('favorites.emptyVisitedLine1'), t('favorites.emptyVisitedLine2')] };

  return (
    <>
      <div className="favorites-panel" ref={ref}>
        {/* En-tête du carnet : titre + compteur global, au-dessus des onglets */}
        <div className="favpanel-hero">
          <span className="favpanel-hero-icon">📔</span>
          <div className="favpanel-hero-text">
            <span className="favpanel-hero-title">{t('favorites.panelTitle')}</span>
            <span className="favpanel-hero-sub">
              {favorites.length + visited.length > 0
                ? t('favorites.panelSubtitle', { count: new Set([...favorites, ...visited]).size })
                : t('favorites.panelSubtitleEmpty')}
            </span>
          </div>
        </div>

        <div className="favorites-panel-tabs">
          <button
            className={`favpanel-tab${activeTab === "favorites" ? " active" : ""}`}
            onClick={() => setActiveTab("favorites")}
          >
            {t('favorites.favoritesTab')}
            {favorites.length > 0 && <span className="favpanel-tab-count">{favorites.length}</span>}
          </button>
          <button
            className={`favpanel-tab${activeTab === "visited" ? " active" : ""}`}
            onClick={() => setActiveTab("visited")}
          >
            {t('favorites.visitedTab')}
            {visited.length > 0 && <span className="favpanel-tab-count">{visited.length}</span>}
          </button>
        </div>

        {list.length === 0 ? (
          <div className="favorites-empty">
            <span className="favorites-empty-icon">{emptyMsg.icon}</span>
            {emptyMsg.lines.map((l, i) => <p key={i}>{l}</p>)}
          </div>
        ) : (
          <ul className="favorites-list">
            {list.map((code) => {
              const rawData = COUNTRIES[code];
              if (!rawData) return null;
              // capital localisée aussi : brute, c'est un objet {fr, en} pour
              // certains pays — le rendre tel quel fait planter React.
              const data = {
                ...rawData,
                name: localizeField(rawData.name, i18n.language),
                capital: localizeField(rawData.capital, i18n.language),
              };
              return (
                <li key={code} className={`favorites-item${activeTab === "visited" ? " visited-item" : ""}`}>
                  <button
                    className="favorites-item-main"
                    onClick={() => { onSelect(code); onClose(); }}
                  >
                    <span className="favorites-item-flag-tile">
                      <img
                        src={getFlagUrl(data.emoji)}
                        alt=""
                        className="favorites-item-flag"
                        width="28"
                        height="20"
                      />
                    </span>
                    <span className="favorites-item-text">
                      <span className="favorites-item-name">{data.name}</span>
                      {data.capital && <span className="favorites-item-capital">{data.capital}</span>}
                    </span>
                    <svg className="favorites-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                  </button>
                  <button
                    className="favorites-item-remove"
                    onClick={() => onRemoveItem(code)}
                    aria-label={t('favorites.removeAriaLabel', { name: data.name })}
                  >
                    ✕
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {user && (
          <div className="favpanel-footer">
            {hasLocalData ? (
              <button
                className={linkBtnClass}
                onClick={onLinkToAccount}
                disabled={linkStatus === 'syncing' || linkStatus === 'done'}
              >
                {linkBtnLabel}
              </button>
            ) : (favorites.length > 0 || visited.length > 0) && !linkStatus ? (
              <span className="favpanel-sync-hint">{t('favorites.syncedHint')}</span>
            ) : linkStatus && (
              <button className={linkBtnClass} disabled>
                {linkBtnLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
