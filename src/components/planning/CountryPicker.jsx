import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ALL_COUNTRIES, normalizeStr } from '../../lib/planningUtils';
import CountryFlag from './CountryFlag';

export default function CountryPicker({ alreadyAdded = [], onSelect, onClose }) {
  const { t } = useTranslation();
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filtered = q.length < 1
    ? ALL_COUNTRIES.slice(0, 60)
    : ALL_COUNTRIES.filter(c => normalizeStr(c.name).includes(normalizeStr(q)));

  const handleSelect = (country) => {
    if (alreadyAdded.includes(country.code)) return;
    onSelect(country);
    onClose();
  };

  return (
    <div className="pp-country-picker">
      <div className="pp-country-picker-header">
        <span className="pp-country-picker-title">{t('country.addTitle')}</span>
        <button className="pp-icon-btn" onClick={onClose} aria-label={t('country.closeLabel')}>✕</button>
      </div>
      <div className="pp-search-wrap pp-country-picker-search">
        <div className="pp-search-input-row">
          <svg className="pp-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            ref={inputRef}
            className="pp-search-input"
            placeholder={t('country.searchPlaceholder')}
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
      </div>
      <ul className="pp-country-list">
        {filtered.map(c => {
          const added = alreadyAdded.includes(c.code);
          return (
            <li
              key={c.code}
              className={`pp-country-item${added ? ' pp-country-item--added' : ''}`}
              onClick={() => handleSelect(c)}
            >
              <CountryFlag emoji={c.emoji} size={20} className="pp-country-emoji" />
              <span className="pp-country-name">{c.name}</span>
              {added && <span className="pp-country-added-badge">{t('country.added')}</span>}
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="pp-country-empty">{t('country.empty')}</li>
        )}
      </ul>
    </div>
  );
}
