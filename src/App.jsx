import { useState, useCallback, useMemo, useRef, useEffect } from "react";
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
import { AuthProvider, useAuth } from "./context/AuthContext";
import { BadgeProvider } from "./context/BadgeContext";
import BadgeUnlockAnimation from "./components/BadgeUnlockAnimation";
import { useNotifications } from "./hooks/useNotifications";
import { checkBadgeUpgrades } from "./utils/checkBadgeUpgrades";
import { supabase as supabaseClient } from "./lib/supabase";
import { COUNTRIES } from "./data/index";
import { computeHighlights } from "./utils/filter";
import { useFavorites } from "./hooks/useFavorites";
import { useVisited } from "./hooks/useVisited";
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
  const [avatarUrl, setAvatarUrl] = useState(null);
  const name = user?.user_metadata?.display_name || user?.email || '?';
  const initials = name[0].toUpperCase();
  const colors = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6'];
  const color = colors[name.charCodeAt(0) % colors.length];

  useEffect(() => {
    if (!user) return;
    supabaseClient.from('profiles').select('avatar_url').eq('id', user.id).single().then(({ data }) => {
      setAvatarUrl(data?.avatar_url ?? null);
    });
  }, [user, refreshKey]);

  return (
    <button className="topbar-profile-btn" onClick={onClick} title="Mon profil">
      {avatarUrl
        ? <img src={avatarUrl} alt={name} className="topbar-profile-avatar-img" />
        : <div className="topbar-profile-avatar-initials" style={{ background: color }}>{initials}</div>
      }
    </button>
  );
}

function AppInner() {
  const { user, authModalOpen, setAuthModalOpen, signOut } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatarRefreshKey, setAvatarRefreshKey] = useState(0);
  const [notifOpen, setNotifOpen] = useState(false);
  const [countryInitialTab, setCountryInitialTab] = useState(null);
  const { notifications, unreadCount, markRead, markAllRead, deleteOne, deleteAll } = useNotifications(user?.id);
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
      const name = COUNTRIES[selectedCountry]?.name;
      if (name) document.title = `Partir ${prep(name)} ${name} — météo, quand partir, que faire | Triply`;
    } else {
      url.searchParams.delete("country");
      if (url.pathname.startsWith("/pays/")) url.pathname = "/";
      document.title = "Triply — Où partir en vacances ? Idées de voyage & météo par pays";
    }
    history.replaceState(null, "", url);
  }, [selectedCountry]);
  const searchContainerRef = useRef(null);

  const openCountry = useCallback((code, tab = null) => {
    setSelectedCountry(code);
    setCountryInitialTab(tab);
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
    return Object.entries(COUNTRIES)
      .filter(([, data]) => normalize(data.name).startsWith(q))
      .map(([code, data]) => ({ code, data }))
      .sort((a, b) => a.data.name.localeCompare(b.data.name, "fr"));
  }, [searchQuery, searchActive]);

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
        </div>

        {/* Centre : recherche */}
        <div className="topbar-search-container" ref={searchContainerRef}>
          <div className="topbar-search-wrapper">
            <span className="topbar-search-icon">🔍</span>
            <input
              type="text"
              className="topbar-search-input"
              placeholder="Rechercher un pays…"
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
                {matchCount} résultat{matchCount !== 1 ? "s" : ""}
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
              aria-label="Carnet de voyage"
            >
              <span>📖</span>
              <span className="topbar-fav-label">Carnet</span>
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
            aria-label="Filtres"
          >
            <span>⚙️</span>
            {filterActive && <span className="filter-badge">{(filters.tripBudget !== null ? 1 : 0) + (filters.month !== null ? 1 : 0) + filters.tags.length}</span>}
          </button>
        </div>

        <div className="topbar-right">
          <button
            className={`topbar-view-btn${listOpen ? " active" : ""}`}
            onClick={() => handleListOpen(!listOpen)}
            aria-label="Vue liste"
          >
            <span>📋</span>
            <span className="topbar-view-label">Liste</span>
          </button>

          <div className="topbar-badge">
            <span className="badge-dot" />
            {countryCount} destination{countryCount > 1 ? "s" : ""} disponible{countryCount > 1 ? "s" : ""}
          </div>

          {user && (
            <div className="notif-wrapper">
              <button
                className={`topbar-notif-btn${notifOpen ? ' active' : ''}`}
                onClick={() => setNotifOpen((o) => !o)}
                aria-label="Notifications"
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
          {user
            ? <TopbarAvatar user={user} onClick={() => setProfileOpen(true)} refreshKey={avatarRefreshKey} />
            : <button className="topbar-login-btn" onClick={() => setAuthModalOpen(true)}>Connexion</button>
          }
        </div>
      </header>

      {/* FAB filtre — visible uniquement sur mobile via CSS */}
      <button
        className={`mobile-filter-fab${filterOpen ? " active" : ""}${filterActive ? " has-filters" : ""}`}
        onClick={() => handleFilterOpen(!filterOpen)}
        aria-label="Filtres"
      >
        <span>⚙️</span>
        {filterActive && <span className="filter-badge">{(filters.tripBudget !== null ? 1 : 0) + (filters.month !== null ? 1 : 0) + filters.tags.length}</span>}
      </button>

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
          onOpenCountry={(code, tab) => {
            openCountry(code, tab || null);
            setNotifOpen(false);
          }}
          markRead={markRead}
          markAllRead={markAllRead}
          deleteOne={deleteOne}
          deleteAll={deleteAll}
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
          onClose={() => { handleClose(); setCountryInitialTab(null); }}
          isFavorite={favorites.includes(selectedCountry)}
          onToggleFavorite={() => toggleFav(selectedCountry)}
          isVisited={visited.includes(selectedCountry)}
          onToggleVisited={() => handleToggleVisited(selectedCountry)}
          onCompare={() => { setCompareBase(selectedCountry); setSelectedCountry(null); }}
          initialTab={countryInitialTab}
          onNavigateCountry={(code) => openCountry(code)}
        />
      )}


      {authModalOpen && !user && <AuthModal onClose={() => setAuthModalOpen(false)} />}
      {profileOpen && user && (
        <ProfilePanel
          onClose={() => setProfileOpen(false)}
          onSave={() => setAvatarRefreshKey((k) => k + 1)}
          onOpenCountry={(code) => { openCountry(code); setProfileOpen(false); }}
        />
      )}

      {pendingUpgrades.length > 0 && (
        <BadgeUnlockAnimation upgrade={pendingUpgrades[0]} onDismiss={dismissCurrentUpgrade} />
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
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
