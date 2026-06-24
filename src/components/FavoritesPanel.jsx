import { useRef, useEffect, useState } from "react";
import { COUNTRIES } from "../data/index";

export default function FavoritesPanel({ favorites, visited, onSelect, onRemove, onRemoveVisited, onClose }) {
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

  const emptyMsg = activeTab === "favorites"
    ? { icon: "🗺", lines: ["Aucun favori pour l'instant.", "Cliquez sur ★ dans une fiche pays pour en ajouter."] }
    : { icon: "✈️", lines: ["Aucun pays visité pour l'instant.", "Cliquez sur ✓ dans une fiche pays pour en ajouter."] };

  return (
    <>
      <div className="favorites-backdrop" onClick={onClose} />
      <div className="favorites-panel" ref={ref}>
        <div className="favorites-panel-tabs">
          <button
            className={`favpanel-tab${activeTab === "favorites" ? " active" : ""}`}
            onClick={() => setActiveTab("favorites")}
          >
            ⭐ Favoris
            {favorites.length > 0 && <span className="favpanel-tab-count">{favorites.length}</span>}
          </button>
          <button
            className={`favpanel-tab${activeTab === "visited" ? " active" : ""}`}
            onClick={() => setActiveTab("visited")}
          >
            ✈️ Visités
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
              const data = COUNTRIES[code];
              if (!data) return null;
              return (
                <li key={code} className={`favorites-item${activeTab === "visited" ? " visited-item" : ""}`}>
                  <button
                    className="favorites-item-main"
                    onClick={() => { onSelect(code); onClose(); }}
                  >
                    <span className="favorites-item-emoji">{data.emoji}</span>
                    <span className="favorites-item-name">{data.name}</span>
                  </button>
                  <button
                    className="favorites-item-remove"
                    onClick={() => onRemoveItem(code)}
                    aria-label={`Retirer ${data.name}`}
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
