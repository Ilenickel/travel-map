import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useSettings } from '../context/SettingsContext';
import { SUPPORTED_CURRENCIES, CURRENCY_SYMBOLS } from '../lib/currency';
import { SUPPORTED_LANGUAGES } from '../i18n';

// Noms complets pour le libellé (les codes courts seuls ne suffisent plus à
// distinguer clairement les langues une fois au nombre de trois) ; l'icône,
// elle, reste le code à 2 lettres — un drapeau (UK vs US pour l'anglais ?)
// serait ambigu, et ne s'affiche de toute façon pas sur tous les systèmes.
const LANGUAGE_META = {
  fr: { label: 'Français' },
  en: { label: 'English' },
  es: { label: 'Español' },
};

const CURRENCY_LABELS = { EUR: 'Euro', USD: 'Dollar' };

const CHEVRON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Sélecteur repliable générique (langue, devise) : n'affiche que la valeur
// active tant qu'on ne clique pas dessus — indispensable dès qu'on dépasse
// deux ou trois options (ex. futures langues supplémentaires).
function SettingsSelect({ label, options, value, onChange, isOpen, onToggle }) {
  return (
    <div className="settings-group">
      <span className="settings-group-label">{label}</span>
      <div className="settings-select">
        <button
          type="button"
          className={`settings-select-trigger${isOpen ? ' open' : ''}`}
          onClick={onToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="settings-select-icon">{options.find((o) => o.value === value)?.icon}</span>
          <span className="settings-select-value">{options.find((o) => o.value === value)?.label}</span>
          <span className={`settings-select-chevron${isOpen ? ' flipped' : ''}`}>{CHEVRON}</span>
        </button>

        {isOpen && (
          <div className="settings-select-dropdown" role="listbox" aria-label={label}>
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={value === opt.value}
                className={`settings-select-option${value === opt.value ? ' active' : ''}`}
                onClick={() => onChange(opt.value)}
              >
                <span className="settings-select-option-icon">{opt.icon}</span>
                <span className="settings-select-option-label">{opt.label}</span>
                {value === opt.value && <span className="settings-select-option-check">{CHECK}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Bouton de paramétrage (engrenage) de la topbar : remplace l'ancien
// sélecteur fr/en et regroupe langue, devise d'affichage et mode jour/nuit
// dans un même panneau déroulant.
export default function SettingsMenu() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const { currency, changeCurrency, theme, changeTheme } = useSettings();
  const [open, setOpen] = useState(false);
  const [openSelect, setOpenSelect] = useState(null); // 'language' | 'currency' | null
  const wrapperRef = useRef(null);

  // Fermeture au clic hors du panneau ou à Échap.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => { if (!open) setOpenSelect(null); }, [open]);

  const languageOptions = SUPPORTED_LANGUAGES.map((lang) => ({
    value: lang,
    label: LANGUAGE_META[lang]?.label ?? lang.toUpperCase(),
    icon: lang.toUpperCase(),
  }));

  const currencyOptions = SUPPORTED_CURRENCIES.map((c) => ({
    value: c,
    label: `${CURRENCY_LABELS[c] ?? c} (${CURRENCY_SYMBOLS[c]})`,
    icon: CURRENCY_SYMBOLS[c],
  }));

  return (
    <div className="topbar-settings" ref={wrapperRef}>
      <button
        type="button"
        className={`topbar-settings-btn${open ? ' active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={t('settings.buttonLabel')}
        aria-expanded={open}
        title={t('settings.buttonLabel')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      </button>

      {open && (
        <div className="settings-panel" role="menu" aria-label={t('settings.panelTitle')}>
          <div className="settings-panel-title">{t('settings.panelTitle')}</div>

          <SettingsSelect
            label={t('settings.languageLabel')}
            options={languageOptions}
            value={language}
            onChange={(lang) => { changeLanguage(lang); setOpenSelect(null); }}
            isOpen={openSelect === 'language'}
            onToggle={() => setOpenSelect((s) => (s === 'language' ? null : 'language'))}
          />

          <SettingsSelect
            label={t('settings.currencyLabel')}
            options={currencyOptions}
            value={currency}
            onChange={(c) => { changeCurrency(c); setOpenSelect(null); }}
            isOpen={openSelect === 'currency'}
            onToggle={() => setOpenSelect((s) => (s === 'currency' ? null : 'currency'))}
          />

          <div className="settings-group">
            <span className="settings-group-label">{t('settings.themeLabel')}</span>
            {/* Même widget que le switch des préférences de notifications
                (voir .profile-toggle dans ProfilePanel) : un symbole jour/nuit
                de chaque côté plutôt que deux boutons segmentés. */}
            <label className="settings-theme-toggle">
              <span className="settings-theme-icon" aria-hidden="true">☀️</span>
              <span className="profile-toggle">
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={(e) => changeTheme(e.target.checked ? 'dark' : 'light')}
                  aria-label={t('settings.themeLabel')}
                />
                <span className="profile-toggle-track"><span className="profile-toggle-thumb" /></span>
              </span>
              <span className="settings-theme-icon" aria-hidden="true">🌙</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
