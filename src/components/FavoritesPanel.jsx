import { useRef, useEffect } from "react";
import { COUNTRIES } from "../data/index";

export default function FavoritesPanel({ favorites, onSelect, onRemove, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <>
      <div className="favorites-backdrop" onClick={onClose} />
      <div className="favorites-panel" ref={ref}>
      <div className="favorites-panel-header">
        <span className="favorites-panel-title">⭐ Favoris</span>
        <span className="favorites-panel-count">
          {favorites.length} pays
        </span>
      </div>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <span className="favorites-empty-icon">🗺</span>
          <p>Aucun favori pour l'instant.</p>
          <p>Cliquez sur ★ dans une fiche pays pour en ajouter.</p>
        </div>
      ) : (
        <ul className="favorites-list">
          {favorites.map((code) => {
            const data = COUNTRIES[code];
            if (!data) return null;
            return (
              <li key={code} className="favorites-item">
                <button
                  className="favorites-item-main"
                  onClick={() => { onSelect(code); onClose(); }}
                >
                  <span className="favorites-item-emoji">{data.emoji}</span>
                  <span className="favorites-item-name">{data.name}</span>
                </button>
                <button
                  className="favorites-item-remove"
                  onClick={() => onRemove(code)}
                  aria-label={`Retirer ${data.name} des favoris`}
                >
                  ✕
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
    </>
  );
}
