import { useState, useRef, useEffect } from 'react';
import { fetchCitySuggestions } from '../../lib/planningUtils';

export default function CitySearchInput({ onSelect, onManual, placeholder, autoFocus }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const debounce = useRef(null);
  const inputRef = useRef(null);

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

  const handleSelect = (r) => {
    onSelect(r.name);
    setQuery('');
    setResults([]);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      onManual(query.trim());
      setQuery('');
      setResults([]);
      setOpen(false);
    }
  };

  return (
    <div className="pp-search-wrap">
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
          placeholder={placeholder || 'Chercher une ville… (ou Entrée pour ajouter)'}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 180)}
        />
        {busy && <span className="pp-search-busy" />}
      </div>
      {open && results.length > 0 && (
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
