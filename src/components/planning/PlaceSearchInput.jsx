import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchPlaceSuggestions } from '../../lib/planningUtils';
import { scrollIntoViewSoon } from '../../hooks/useScrollIntoViewOnOpen';

export default function PlaceSearchInput({ cityHint, onSelect, onManualAdd, placeholder, autoFocus }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const debounce = useRef(null);
  const inputRef = useRef(null);
  const wrapRef = useRef(null);
  // Même correctif que CitySearchInput (voir ce fichier) : sur mobile, le
  // clavier virtuel masque une grande partie des résultats apparus sous le
  // champ, déjà focus AVANT l'ouverture du clavier — on remonte le champ en
  // haut de l'écran visible dès que des résultats apparaissent.
  const dropdownOpen = open && results.length > 0;
  useEffect(() => {
    if (dropdownOpen) scrollIntoViewSoon(wrapRef);
  }, [dropdownOpen]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setOpen(true);
    clearTimeout(debounce.current);
    if (val.length < 2) { setResults([]); setBusy(false); return; }
    setBusy(true);
    debounce.current = setTimeout(async () => {
      const r = await fetchPlaceSuggestions(val, cityHint);
      setResults(r);
      setBusy(false);
    }, 350);
  };

  // Une fois la sélection faite, ce composant disparaît (le parent referme
  // `addingPlace`) — mais l'écran restait scrollé exactement là où le
  // correctif clavier ci-dessus l'avait amené (haut du champ, pour dégager
  // le clavier), un endroit qui n'a plus de sens une fois la recherche et le
  // clavier partis ("on n'est plus du tout au bon endroit", signalé le
  // 2026-07-23). On ramène donc le conteneur STABLE (survit à la disparition
  // de la recherche, contrairement à `wrapRef`) vers une position raisonnable
  // juste après.
  const scrollBackAfterClose = () => {
    const container = wrapRef.current?.closest('.pp-detail-tab-content, .pp-city-body, .pp-daytrip-body');
    if (container) scrollIntoViewSoon({ current: container }, { behavior: 'smooth', block: 'nearest' });
  };

  const handleSelect = (r) => {
    scrollBackAfterClose();
    onSelect(r);
    setQuery('');
    setResults([]);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() && onManualAdd) {
      scrollBackAfterClose();
      onManualAdd(query.trim());
      setQuery('');
      setResults([]);
      setOpen(false);
    }
  };

  return (
    <div className="pp-search-wrap" ref={wrapRef}>
      <div className="pp-search-input-row">
        <svg className="pp-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input
          ref={inputRef}
          className="pp-search-input"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || t('place.searchPlaceholderDefault')}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 180)}
        />
        {busy && <span className="pp-search-busy" />}
      </div>
      {open && results.length > 0 && (
        <ul className="pp-search-dropdown">
          {results.map((r, i) => (
            <li key={i} className="pp-search-item" onMouseDown={() => handleSelect(r)}>
              <span className="pp-search-item-icon">📍</span>
              <div className="pp-search-item-text">
                <span className="pp-search-item-name">{r.name}</span>
                {r.subtitle && <span className="pp-search-item-sub">{r.subtitle}</span>}
              </div>
            </li>
          ))}
        </ul>
      )}
      {open && !busy && query.length >= 2 && results.length === 0 && (
        <div className="pp-search-empty">
          {t('place.noResults', { query })}
        </div>
      )}
    </div>
  );
}
