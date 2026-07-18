import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WorldMap from "./components/WorldMap";
import CountryPanel from "./components/CountryPanel";
import SearchBar from "./components/SearchBar";
import SearchDropdown from "./components/SearchDropdown";
import FavoritesPanel from "./components/FavoritesPanel";
import ListView from "./components/ListView";
import ComparePanel from "./components/ComparePanel";
import AuthModal from "./components/AuthModal";
import ProfilePanel from "./components/ProfilePanel";
import NotificationPanel from "./components/NotificationPanel";
import AdminAlertsPanel from "./components/AdminAlertsPanel";
import SettingsMenu from "./components/SettingsMenu";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import { SettingsProvider } from "./context/SettingsContext";
import { BadgeProvider } from "./context/BadgeContext";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";
import BadgeUnlockAnimation from "./components/BadgeUnlockAnimation";
import { useNotifications } from "./hooks/useNotifications";
import { useAdminAlerts } from "./hooks/useAdminAlerts";
import { checkBadgeUpgrades } from "./utils/checkBadgeUpgrades";
import { supabase as supabaseClient } from "./lib/supabase";
import { COUNTRIES } from "./data/index";
import { localizeField } from "./lib/localizeCountry";
import { computeHighlights } from "./utils/filter";
import { useFavorites } from "./hooks/useFavorites";
import { useVisited } from "./hooks/useVisited";
import { useEndTripSharePrompt } from "./hooks/useEndTripSharePrompt";
import EndTripSharePrompt from "./components/planning/EndTripSharePrompt";
import PlanningPage from "./pages/PlanningPage";
import "./App.css";

function normalize(str) {
  return str.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase();
}

function prep(name) {
  const n = normalize(name);
  const plurals = ["etats-unis", "pays-bas", "philippines", "maldives",
    "seychelles", "bahamas", "comores", "emirats", "samoa", "fidji",
    "vanuatu", "salomon", "marshall", "trinite"];
  if (plurals.some(p => n.includes(p))) return "aux";
  if (/^[aeiouéèêëàâîïôùûü]/.test(n)) return "en";
  const exceptions = ["mexique","mozambique","cambodge","zimbabwe","belize","suriname","panama","kosovo"];
  if (n.endsWith("e") && !exceptions.some(e => n === e)) return "en";
  return "au";
}

function TopbarAvatar({ user, onClick, refreshKey }) {
  const { t } = useTranslation("app");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const name = displayName || user?.user_metadata?.display_name || user?.email || '?';
  const initials = name[0].toUpperCase();
  const colors = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6'];
  const color = colors[name.charCodeAt(0) % colors.length];

  useEffect(() => {
    if (!user) return;
    supabaseClient.from('profiles').select('avatar_url, display_name').eq('id', user.id).maybeSingle().then(({ data }) => {
      setAvatarUrl(data?.avatar_url ?? null);
      if (data?.display_name) setDisplayName(data.display_name);
    });
  }, [user, refreshKey]);

  return (
    <button className="topbar-profile-btn" onClick={onClick} title={t("topbar.myProfile")}>
      {avatarUrl
        ? <img src={avatarUrl} alt={name} className="topbar-profile-avatar-img" />
        : <div className="topbar-profile-avatar-initials" style={{ background: color }}>{initials}</div>
      }
    </button>
  );
}

function AppInner() {
  const { t, i18n } = useTranslation("app");
  const { user, isAdmin, authModalOpen, setAuthModalOpen, signOut } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatarRefreshKey, setAvatarRefreshKey] = useState(0);
  const [notifOpen, setNotifOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [countryInitialTab, setCountryInitialTab] = useState(null);
  const [countryInitialExtra, setCountryInitialExtra] = useState(null);
  const { notifications, unreadCount, markRead, markAllRead, deleteOne, deleteAll, deleteMany, hideOne } = useNotifications(user?.id);
  const { trip: pendingShareTrip, answer: answerSharePrompt } = useEndTripSharePrompt(user?.id);
  const { alerts, refresh: refreshAlerts } = useAdminAlerts(isAdmin);
  const alertsMap = useMemo(() => new Map(alerts.map((a) => [a.content_id, a])), [alerts]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filters, setFilters] = useState({ tripBudget: null, month: null, tags: [] });
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [favPanelOpen, setFavPanelOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const isMobile = () => window.innerWidth <= 768;

  const handleFilterOpen = (v) => {
    setFilterOpen(v);
    if (v && isMobile()) setListOpen(false);
  };
  const handleListOpen = (v) => {
    setListOpen(v);
    if (v && isMobile()) setFilterOpen(false);
  };
  const [compareBase, setCompareBase] = useState(null);
  const { favorites, toggle: toggleFav, remove: removeFav, linkToAccount: linkFavs } = useFavorites(user);
  const { visited, toggle: toggleVisited, remove: removeVisited, linkToAccount: linkVisited } = useVisited(user);
  const [linkStatus, setLinkStatus] = useState(null); // null | 'syncing' | 'done' | 'error'
  const [pendingUpgrades, setPendingUpgrades] = useState([]);

  const handleBadgeUpgrades = useCallback((upgrades) => {
    setPendingUpgrades((prev) => [...prev, ...upgrades]);
  }, []);

  const dismissCurrentUpgrade = useCallback(() => {
    setPendingUpgrades((prev) => prev.slice(1));
  }, []);

  useEffect(() => {
    if (!user) setLinkStatus(null);
  }, [user]);

  const handleLinkToAccount = useCallback(async () => {
    if (!user || linkStatus === 'syncing') return;
    setLinkStatus('syncing');
    try {
      await Promise.all([linkFavs(), linkVisited()]);
      setLinkStatus('done');
      setTimeout(() => setLinkStatus(null), 3000);
    } catch (err) {
      console.error('[handleLinkToAccount]', err);
      setLinkStatus('error');
      setTimeout(() => setLinkStatus(null), 4000);
    }
  }, [user, linkStatus, linkFavs, linkVisited]);
  const handleToggleVisited = useCallback(async (code) => {
    await toggleVisited(code);
    if (user) {
      setTimeout(async () => {
        const upgrades = await checkBadgeUpgrades(user.id);
        if (upgrades.length) handleBadgeUpgrades(upgrades);
      }, 300);
    }
  }, [toggleVisited, user, handleBadgeUpgrades]);

  const [hideVisited, setHideVisited] = useState(false);

  // Sync URL ↔ pays sélectionné + comparaison
  useEffect(() => {
    // Ouverture depuis une page prerendue /pays/[slug] (window.__INITIAL_COUNTRY__ injecté au build)
    if (window.__INITIAL_COUNTRY__ && COUNTRIES[window.__INITIAL_COUNTRY__]) {
      setSelectedCountry(window.__INITIAL_COUNTRY__);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const code = params.get("country");
    if (code && COUNTRIES[code]) setSelectedCountry(code);
    const compare = params.get("compare");
    if (compare) {
      const codes = compare.split(",").filter((c) => COUNTRIES[c]);
      if (codes.length >= 1) setCompareBase(codes[0]);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedCountry) {
      url.searchParams.set("country", selectedCountry);
      // Remettre l'URL sur / si on vient d'une page /pays/[slug]
      if (url.pathname.startsWith("/pays/")) url.pathname = "/";
      const rawName = COUNTRIES[selectedCountry]?.name;
      // prep() encode une règle de grammaire française (en/au/aux) qui n'a pas
      // d'équivalent dans les autres langues — on ne l'utilise donc que pour le
      // titre français, les autres langues suivent un gabarit sans préposition
      // à accorder ("Travel to {{name}}").
      if (rawName) {
        const name = localizeField(rawName, i18n.language);
        document.title = i18n.language === "fr"
          ? `Partir ${prep(localizeField(rawName, "fr"))} ${name} — météo, quand partir, que faire | Triply`
          : t("seo.countryTitle", { name });
      }
    } else {
      url.searchParams.delete("country");
      if (url.pathname.startsWith("/pays/")) url.pathname = "/";
      document.title = t("seo.homeTitle");
    }
    history.replaceState(null, "", url);
  }, [selectedCountry, i18n.language, t]);
  const searchContainerRef = useRef(null);

  const openCountry = useCallback((code, tab = null, extra = null) => {
    setSelectedCountry(code);
    setCountryInitialTab(tab);
    setCountryInitialExtra(extra);
  }, []);
  const handleCountryClick = useCallback((code) => openCountry(code), [openCountry]);
  const handleClose = useCallback(() => setSelectedCountry(null), []);

  const filterActive = filters.tripBudget !== null || filters.month !== null || filters.tags.length > 0;

  const highlightMap = useMemo(
    () => computeHighlights(COUNTRIES, filters),
    [filters]
  );

  const searchActive = searchQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!searchActive) return [];
    const q = normalize(searchQuery.trim());
    const lang = i18n.language;
    return Object.entries(COUNTRIES)
      .map(([code, data]) => ({ code, data: { ...data, name: localizeField(data.name, lang) } }))
      .filter(({ data }) => normalize(data.name).startsWith(q))
      .sort((a, b) => a.data.name.localeCompare(b.data.name, lang));
  }, [searchQuery, searchActive, i18n.language]);

  const searchHighlightMap = useMemo(() => {
    if (!searchActive) return null;
    const map = {};
    for (const { code } of searchResults) map[code] = "#3b82f6";
    return map;
  }, [searchResults, searchActive]);

  const effectiveHighlightMap = searchActive ? searchHighlightMap : highlightMap;
  const effectiveFilterActive = searchActive || filterActive;
  const visitedSet = useMemo(() => new Set(visited), [visited]);

  const handleSearchSelect = useCallback((code) => {
    setSelectedCountry(code);
    setDropdownOpen(false);
  }, []);

  const matchCount = searchResults.length;
  const countryCount = Object.keys(COUNTRIES).length;

  return (
    <BadgeProvider onUpgrades={handleBadgeUpgrades}>
    <div className="app">
      <header className="topbar">
        {/* Gauche : logo */}
        <div className="topbar-left">
          <div className="topbar-brand">
            <img src="/icon.png" alt="" className="brand-icon" />
            <span className="brand-name">Triply</span>
          </div>
          <SettingsMenu />
        </div>

        {/* Centre : recherche */}
        <div className="topbar-search-container" ref={searchContainerRef}>
          <div className="topbar-search-wrapper">
            <span className="topbar-search-icon">🔍</span>
            <input
              type="text"
              className="topbar-search-input"
              placeholder={window.innerWidth <= 768 ? t("topbar.searchPlaceholderShort") : t("topbar.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setDropdownOpen(false); }}
            />
            {searchActive && (
              <button
                className="topbar-search-clear"
                onClick={() => { setSearchQuery(""); setDropdownOpen(false); }}
              >✕</button>
            )}
            {searchActive && matchCount > 0 && (
              <button
                className="topbar-search-count"
                onClick={() => setDropdownOpen((o) => !o)}
              >
                {t("topbar.resultsCount", { count: matchCount })}
              </button>
            )}
          </div>
          {dropdownOpen && searchActive && (
            <SearchDropdown
              results={searchResults}
              onSelect={handleSearchSelect}
              onClose={() => setDropdownOpen(false)}
              containerRef={searchContainerRef}
            />
          )}
        </div>

        {/* Droite : carnet + filtre + liste + badge + connexion */}
        <div className="topbar-controls">
          <div className="topbar-favorites-wrapper">
            <button
              className={`topbar-fav-btn${favPanelOpen ? " active" : ""}`}
              onClick={() => setFavPanelOpen((o) => !o)}
              aria-label={t("topbar.travelbookAriaLabel")}
            >
              <span>📖</span>
              <span className="topbar-fav-label">{t("topbar.travelbookLabel")}</span>
              {(favorites.length > 0 || visited.length > 0) && (
                <span className="fav-count-badge">{favorites.length + visited.length}</span>
              )}
            </button>
            {favPanelOpen && (
              <FavoritesPanel
                favorites={favorites}
                visited={visited}
                onSelect={(code) => openCountry(code)}
                onRemove={removeFav}
                onRemoveVisited={removeVisited}
                onClose={() => setFavPanelOpen(false)}
                user={user}
                onLinkToAccount={handleLinkToAccount}
                linkStatus={linkStatus}
              />
            )}
          </div>
          {/* Bouton filtre — visible sur desktop, caché sur mobile (remplacé par FAB) */}
          <button
            className={`topbar-filter-btn${filterOpen ? " active" : ""}${filterActive ? " has-filters" : ""}`}
            onClick={() => handleFilterOpen(!filterOpen)}
            aria-label={t("topbar.filtersAriaLabel")}
          >
            <span>⚙️</span>
            {filterActive && <span className="filter-badge">{(filters.tripBudget !== null ? 1 : 0) + (filters.month !== null ? 1 : 0) + filters.tags.length}</span>}
          </button>
        </div>

        <div className="topbar-right">
          <button
            className={`topbar-view-btn${listOpen ? " active" : ""}`}
            onClick={() => handleListOpen(!listOpen)}
            aria-label={t("topbar.listViewAriaLabel")}
          >
            <span>📋</span>
            <span className="topbar-view-label">{t("topbar.listLabel")}</span>
          </button>

          <Link to="/planifier" className="topbar-plan-btn" aria-label={t("topbar.planTripAriaLabel")}>
            <span className="topbar-plan-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
              </svg>
            </span>
            <span className="topbar-plan-label">{t("topbar.planLabel")}</span>
          </Link>

          <div className="topbar-badge">
            <span className="badge-dot" />
            {t("topbar.destinationsAvailable", { count: countryCount })}
          </div>

          {user && (
            <div className="notif-wrapper">
              <button
                className={`topbar-notif-btn${notifOpen ? ' active' : ''}`}
                onClick={() => setNotifOpen((o) => !o)}
                aria-label={t("topbar.notificationsAriaLabel")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
                {unreadCount > 0 && (
                  <span className="notif-badge">{unreadCount > 99 ? '99+' : unreadCount}</span>
                )}
              </button>
            </div>
          )}
          {isAdmin && (
            <div className="notif-wrapper">
              <button
                className={`topbar-notif-btn topbar-admin-btn${adminPanelOpen ? ' active' : ''}`}
                onClick={() => setAdminPanelOpen((o) => !o)}
                aria-label={t("topbar.moderationAlertsLabel")}
                title={t("topbar.moderationAlertsLabel")}
              >
                🚨
                {alerts.length > 0 && (
                  <span className="notif-badge admin-notif-badge">{alerts.length > 99 ? '99+' : alerts.length}</span>
                )}
              </button>
            </div>
          )}
          {user
            ? <TopbarAvatar user={user} onClick={() => setProfileOpen(true)} refreshKey={avatarRefreshKey} />
            : <button className="topbar-login-btn" onClick={() => setAuthModalOpen(true)}>{t("topbar.loginButton")}</button>
          }
        </div>
      </header>

      {/* Barre de navigation basse — visible uniquement sur mobile via CSS */}
      <nav className="app-mobile-nav" aria-label={t("topbar.mobileNavLabel")}>
        <button
          className={`app-nav-btn${!listOpen && !filterOpen && !favPanelOpen ? " active" : ""}`}
          onClick={() => { setListOpen(false); setFilterOpen(false); setFavPanelOpen(false); }}
        >
          <span className="app-nav-icon">🗺️</span>
          {t("topbar.navMap")}
        </button>
        <button
          className={`app-nav-btn${listOpen ? " active" : ""}`}
          onClick={() => { setFavPanelOpen(false); handleListOpen(!listOpen); }}
        >
          <span className="app-nav-icon">📋</span>
          {t("topbar.listLabel")}
        </button>
        {/* Planifier au centre, mis en évidence : c'est la feature principale */}
        <Link to="/planifier" className="app-nav-btn app-nav-btn--primary" aria-label={t("topbar.planTripAriaLabel")}>
          <span className="app-nav-primary-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <g transform="translate(24,0) scale(-1,1)">
                <g transform="rotate(-40 12 12)">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13.5 19v-5.5z"/>
                </g>
              </g>
            </svg>
          </span>
          {t("topbar.planLabel")}
        </Link>
        <button
          className={`app-nav-btn${filterOpen ? " active" : ""}${!filterActive ? " filter-attract" : ""}`}
          onClick={() => { setFavPanelOpen(false); handleFilterOpen(!filterOpen); }}
        >
          <span className="app-nav-icon">⚙️</span>
          {t("topbar.navFilters")}
          {filterActive && (
            <span className="app-nav-badge">{(filters.tripBudget !== null ? 1 : 0) + (filters.month !== null ? 1 : 0) + filters.tags.length}</span>
          )}
        </button>
        <button
          className={`app-nav-btn${favPanelOpen ? " active" : ""}`}
          onClick={() => { setListOpen(false); setFilterOpen(false); setFavPanelOpen((o) => !o); }}
        >
          <span className="app-nav-icon">📖</span>
          {t("topbar.travelbookLabel")}
          {(favorites.length > 0 || visited.length > 0) && (
            <span className="app-nav-badge">{favorites.length + visited.length}</span>
          )}
        </button>
      </nav>

      {favPanelOpen && (
        <div className="favorites-backdrop" onClick={() => setFavPanelOpen(false)} />
      )}
      {notifOpen && (
        <div className="favorites-backdrop" onClick={() => setNotifOpen(false)} />
      )}
      {notifOpen && user && (
        <NotificationPanel
          notifications={notifications}
          onClose={() => setNotifOpen(false)}
          onOpenCountry={(code, tab, extra) => {
            openCountry(code, tab || null, extra || null);
            setNotifOpen(false);
          }}
          markRead={markRead}
          markAllRead={markAllRead}
          deleteOne={deleteOne}
          deleteAll={deleteAll}
          deleteMany={deleteMany}
          hideOne={hideOne}
        />
      )}
      {adminPanelOpen && isAdmin && (
        <AdminAlertsPanel
          alerts={alerts}
          onClose={() => setAdminPanelOpen(false)}
          onRefresh={refreshAlerts}
          onNavigate={({ countryCode, tab, extra }) => {
            openCountry(countryCode, tab || null, extra || null);
          }}
        />
      )}

      <main className={`main${listOpen ? " main--list-open" : ""}`}>
        <div className="map-area">
          <WorldMap
            key={listOpen ? "list" : "map"}
            onCountryClick={handleCountryClick}
            highlightMap={effectiveHighlightMap}
            filterActive={effectiveFilterActive}
            searchActive={searchActive}
            hoveredCode={hoveredCountry}
            visitedSet={visitedSet}
            hideVisited={hideVisited}
          />
        </div>
        <SearchBar
          onFilterChange={setFilters}
          open={filterOpen}
          onOpenChange={handleFilterOpen}
          hideVisited={hideVisited}
          onHideVisitedChange={setHideVisited}
          hasVisited={visited.length > 0}
        />
        {listOpen && (<div className="list-panel">
            <ListView
              onCountryClick={handleCountryClick}
              highlightMap={effectiveHighlightMap}
              filterActive={effectiveFilterActive}
              favorites={favorites}
              visited={visited}
              hideVisited={hideVisited}
              onCountryHover={setHoveredCountry}
            />
          </div>
        )}
      </main>

      {selectedCountry && !compareBase && (
        <CountryPanel
          countryCode={selectedCountry}
          onClose={() => { handleClose(); setCountryInitialTab(null); setCountryInitialExtra(null); }}
          isFavorite={favorites.includes(selectedCountry)}
          onToggleFavorite={() => toggleFav(selectedCountry)}
          isVisited={visited.includes(selectedCountry)}
          onToggleVisited={() => handleToggleVisited(selectedCountry)}
          onCompare={() => { setCompareBase(selectedCountry); setSelectedCountry(null); }}
          initialTab={countryInitialTab}
          initialExtra={countryInitialExtra}
          onNavigateCountry={(code, tab, extra) => openCountry(code, tab || null, extra || null)}
          alertIds={alertsMap}
          onAdminAction={refreshAlerts}
        />
      )}


      {authModalOpen && !user && <AuthModal onClose={() => setAuthModalOpen(false)} />}
      {profileOpen && user && (
        <ProfilePanel
          onClose={() => setProfileOpen(false)}
          onSave={() => setAvatarRefreshKey((k) => k + 1)}
          onOpenCountry={(code, tab, extra) => { openCountry(code, tab || null, extra || null); setProfileOpen(false); }}
        />
      )}

      {pendingUpgrades.length > 0 && (
        <BadgeUnlockAnimation upgrade={pendingUpgrades[0]} onDismiss={dismissCurrentUpgrade} />
      )}

      {pendingShareTrip && (
        <EndTripSharePrompt key={pendingShareTrip.id} trip={pendingShareTrip} onAnswer={answerSharePrompt} />
      )}

      {compareBase && (
        <ComparePanel
          baseCode={compareBase}
          initialCodes={(() => {
            const p = new URLSearchParams(window.location.search).get("compare");
            if (p) return p.split(",").filter((c) => COUNTRIES[c]);
            return null;
          })()}
          onClose={() => {
            setCompareBase(null);
            const url = new URL(window.location.href);
            url.searchParams.delete("compare");
            history.replaceState(null, "", url);
          }}
          onCountryClick={(code) => { setCompareBase(null); openCountry(code); }}
        />
      )}
    </div>
    </BadgeProvider>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <LanguageProvider>
          <SettingsProvider>
            <Routes>
              <Route path="/planifier" element={<PlanningPage />} />
              <Route path="*" element={<AppInner />} />
            </Routes>
          </SettingsProvider>
        </LanguageProvider>
      </AuthProvider>
      <ToastContainer />
    </ToastProvider>
  );
}
