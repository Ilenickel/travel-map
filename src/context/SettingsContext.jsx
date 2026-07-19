import { createContext, useContext, useCallback, useEffect, useState } from 'react';
import {
  getCurrency, setCurrency as persistCurrency, SUPPORTED_CURRENCIES,
} from '../lib/currency';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

// ─── Paramètres d'affichage globaux (devise, thème) ──────────────
// Même philosophie que LanguageContext : un état React global + une
// persistance locale, ET une persistance profil pour la devise (comme la
// langue) afin qu'un utilisateur connecté la retrouve sur un autre appareil.
// Le thème, lui, reste purement local (pas de notion "correcte" à synchroniser).

export const THEME_STORAGE_KEY = 'triply_theme';
export const SUPPORTED_THEMES = ['dark', 'light'];

function readInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return SUPPORTED_THEMES.includes(stored) ? stored : 'light';
}

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const { user } = useAuth();
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

  // Au login, la devise enregistrée sur le profil (si présente) prime sur le
  // choix local — même logique que LanguageContext pour la langue.
  useEffect(() => {
    if (!user?.id) return;
    supabase.from('profiles').select('currency').eq('id', user.id).maybeSingle()
      .then(({ data }) => {
        if (data?.currency && SUPPORTED_CURRENCIES.includes(data.currency) && data.currency !== getCurrency()) {
          persistCurrency(data.currency);
          setCurrencyState(data.currency);
        }
      });
  }, [user?.id]);

  const changeCurrency = useCallback((c) => {
    if (!SUPPORTED_CURRENCIES.includes(c)) return;
    persistCurrency(c);
    setCurrencyState(c);
    if (user?.id) {
      supabase.from('profiles').update({ currency: c }).eq('id', user.id).then(() => {});
    }
  }, [user?.id]);

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
