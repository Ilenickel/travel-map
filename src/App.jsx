import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import WorldMap from "./components/WorldMap";
import CountryPanel from "./components/CountryPanel";
import SearchBar from "./components/SearchBar";
import SearchDropdown from "./components/SearchDropdown";
import FavoritesPanel from "./components/FavoritesPanel";
import ListView from "./components/ListView";
import ComparePanel from "./components/ComparePanel";
import { COUNTRIES } from "./data/index";
import { computeHighlights } from "./utils/filter";
import { useFavorites } from "./hooks/useFavorites";
import { useVisited } from "./hooks/useVisited";
import "./App.css";

function normalize(str) {
  return str.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase();
}

export default function App() {
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
  const { favorites, toggle: toggleFav, remove: removeFav } = useFavorites();
  const { visited, toggle: toggleVisited, remove: removeVisited } = useVisited();
  const [hideVisited, setHideVisited] = useState(false);

  // Sync URL ↔ pays sélectionné + comparaison
  useEffect(() => {
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
    if (selectedCountry) url.searchParams.set("country", selectedCountry);
    else url.searchParams.delete("country");
    history.replaceState(null, "", url);
  }, [selectedCountry]);
  const searchContainerRef = useRef(null);

  const handleCountryClick = useCallback((code) => setSelectedCountry(code), []);
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
    <div className="app">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-icon">🌍</span>
          <span className="brand-name">TravelMap</span>
        </div>
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
                onSelect={setSelectedCountry}
                onRemove={removeFav}
                onRemoveVisited={removeVisited}
                onClose={() => setFavPanelOpen(false)}
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
          onClose={handleClose}
          isFavorite={favorites.includes(selectedCountry)}
          onToggleFavorite={() => toggleFav(selectedCountry)}
          isVisited={visited.includes(selectedCountry)}
          onToggleVisited={() => toggleVisited(selectedCountry)}
          onCompare={() => { setCompareBase(selectedCountry); setSelectedCountry(null); }}
        />
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
          onCountryClick={(code) => { setCompareBase(null); setSelectedCountry(code); }}
        />
      )}
      <Analytics />
    </div>
  );
}
