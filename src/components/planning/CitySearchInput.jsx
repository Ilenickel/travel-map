import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchCitySuggestions } from '../../lib/planningUtils';
import { scrollIntoViewSoon } from '../../hooks/useScrollIntoViewOnOpen';

export default function CitySearchInput({ onSelect, onManual, placeholder, autoFocus }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const debounce = useRef(null);
  const inputRef = useRef(null);
  const wrapRef = useRef(null);
  // Sur mobile, le clavier virtuel prend la moitié de l'écran : sans ce
  // défilement, le champ (déjà focus AVANT que le clavier n'apparaisse) reste
  // là où il était, et les résultats qui apparaissent EN DESSOUS de lui se
  // retrouvent en grande partie masqués sous le clavier — on ne voit alors
  // plus que le tout premier résultat (voir signalement du 2026-07-23).
  // `block: 'start'` (via scrollIntoViewSoon, défaut) plutôt que 'nearest' :
  // la liste dépasse presque toujours l'espace restant au-dessus du clavier,
  // ancrer le HAUT du champ en haut de l'écran visible maximise le nombre de
  // résultats qui rentrent en dessous, plutôt qu'un scroll minimal insuffisant.
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
      const r = await fetchCitySuggestions(val);
      setResults(r);
      setBusy(false);
    }, 350);
  };

  // Une fois la sélection faite, ce composant disparaît (le parent referme
  // `addingX`) — mais l'écran restait scrollé exactement là où le correctif
  // clavier ci-dessus l'avait amené (haut du champ, pour dégager le clavier),
  // un endroit qui n'a plus de sens une fois la recherche et le clavier partis
  // ("on n'est plus du tout au bon endroit", signalé le 2026-07-23). On
  // ramène donc le conteneur STABLE (survit à la disparition de la recherche,
  // contrairement à `wrapRef`) vers une position raisonnable juste après.
  const scrollBackAfterClose = () => {
    const container = wrapRef.current?.closest('.pp-detail-tab-content, .pp-city-body, .pp-daytrip-body');
    if (container) scrollIntoViewSoon({ current: container }, { behavior: 'smooth', block: 'nearest' });
  };

  const handleSelect = (r) => {
    scrollBackAfterClose();
    onSelect(r.name);
    setQuery('');
    setResults([]);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      scrollBackAfterClose();
      onManual(query.trim());
      setQuery('');
      setResults([]);
      setOpen(false);
    }
  };

  return (
    <div className="pp-search-wrap" ref={wrapRef}>
      <div className="pp-search-input-row">
        <svg className="pp-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <input
          ref={inputRef}
          className="pp-search-input"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || t('city.searchPlaceholderDefault')}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 180)}
        />
        {busy && <span className="pp-search-busy" />}
      </div>
      {dropdownOpen && (
        <ul className="pp-search-dropdown">
          {results.map((r, i) => (
            <li key={i} className="pp-search-item" onMouseDown={() => handleSelect(r)}>
              <span className="pp-search-item-icon">🏙</span>
              <div className="pp-search-item-text">
                <span className="pp-search-item-name">{r.name}</span>
                {r.country && <span className="pp-search-item-sub">{r.country}</span>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
