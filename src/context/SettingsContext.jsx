import { createContext, useContext, useCallback, useEffect, useState } from 'react';
import {
  getCurrency, setCurrency as persistCurrency, SUPPORTED_CURRENCIES,
} from '../lib/currency';

// ─── Paramètres d'affichage globaux (devise, thème) ──────────────
// Même philosophie que LanguageContext : un état React global + une
// persistance locale. La langue reste gérée par LanguageContext (elle a une
// persistance profil spécifique) ; ici on porte la devise d'affichage et le
// mode jour/nuit, consommés par le panneau de paramètres et par tous les
// composants qui affichent des montants.

export const THEME_STORAGE_KEY = 'triply_theme';
export const SUPPORTED_THEMES = ['dark', 'light'];

function readInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return SUPPORTED_THEMES.includes(stored) ? stored : 'dark';
}

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [currency, setCurrencyState] = useState(getCurrency());
  const [theme, setThemeState] = useState(readInitialTheme());

  // Le thème s'applique via l'attribut data-theme sur <html> : les feuilles de
  // style (App.css, PlanningPage.css) déclinent leurs variables selon cet
  // attribut. Appliqué dès le montage pour restaurer le choix persisté.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    // La couleur de la barre système (mobile) suit le fond du thème actif.
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f4f1ea' : '#060d18');
  }, [theme]);

  const changeCurrency = useCallback((c) => {
    if (!SUPPORTED_CURRENCIES.includes(c)) return;
    persistCurrency(c);
    setCurrencyState(c);
  }, []);

  const changeTheme = useCallback((t) => {
    if (!SUPPORTED_THEMES.includes(t)) return;
    setThemeState(t);
    if (typeof window !== 'undefined') window.localStorage.setItem(THEME_STORAGE_KEY, t);
  }, []);

  return (
    <SettingsContext.Provider value={{ currency, changeCurrency, theme, changeTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
