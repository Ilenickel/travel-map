import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useSettings } from '../context/SettingsContext';
import { SUPPORTED_CURRENCIES, CURRENCY_SYMBOLS } from '../lib/currency';
import { SUPPORTED_LANGUAGES } from '../i18n';

// Bouton de paramétrage (engrenage) de la topbar : remplace l'ancien
// sélecteur fr/en et regroupe langue, devise d'affichage et mode jour/nuit
// dans un même panneau déroulant.
export default function SettingsMenu() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const { currency, changeCurrency, theme, changeTheme } = useSettings();
  const [open, setOpen] = useState(false);
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

          <div className="settings-group">
            <span className="settings-group-label">{t('settings.languageLabel')}</span>
            <div className="settings-choice" role="group" aria-label={t('settings.languageLabel')}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`settings-choice-btn${language === lang ? ' active' : ''}`}
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="settings-group">
            <span className="settings-group-label">{t('settings.currencyLabel')}</span>
            <div className="settings-choice" role="group" aria-label={t('settings.currencyLabel')}>
              {SUPPORTED_CURRENCIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`settings-choice-btn${currency === c ? ' active' : ''}`}
                  onClick={() => changeCurrency(c)}
                >
                  {c} {CURRENCY_SYMBOLS[c]}
                </button>
              ))}
            </div>
          </div>

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
