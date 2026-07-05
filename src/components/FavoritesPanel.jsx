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
              const data = { ...rawData, name: localizeField(rawData.name, i18n.language) };
              return (
                <li key={code} className={`favorites-item${activeTab === "visited" ? " visited-item" : ""}`}>
                  <button
                    className="favorites-item-main"
                    onClick={() => { onSelect(code); onClose(); }}
                  >
                    <img
                      src={getFlagUrl(data.emoji)}
                      alt=""
                      className="favorites-item-flag"
                      width="28"
                      height="20"
                    />
                    <span className="favorites-item-name">{data.name}</span>
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
