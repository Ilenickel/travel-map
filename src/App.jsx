import { useState, useCallback, useMemo, useRef } from "react";
import WorldMap from "./components/WorldMap";
import CountryPanel from "./components/CountryPanel";
import SearchBar from "./components/SearchBar";
import SearchDropdown from "./components/SearchDropdown";
import { COUNTRIES } from "./data/index";
import { computeHighlights } from "./utils/filter";
import "./App.css";

function normalize(str) {
  return str.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase();
}

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filters, setFilters] = useState({ tripBudget: null, month: null });
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const searchContainerRef = useRef(null);

  const handleCountryClick = useCallback((code) => setSelectedCountry(code), []);
  const handleClose = useCallback(() => setSelectedCountry(null), []);

  const filterActive = filters.tripBudget !== null || filters.month !== null;

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
        <button
          className={`topbar-filter-btn${filterOpen ? " active" : ""}${filterActive ? " has-filters" : ""}`}
          onClick={() => setFilterOpen((o) => !o)}
          aria-label="Filtres"
        >
          <span>⚙️</span>
          {filterActive && <span className="filter-badge">{(filters.tripBudget !== null ? 1 : 0) + (filters.month !== null ? 1 : 0)}</span>}
        </button>

        <div className="topbar-badge">
          <span className="badge-dot" />
          {countryCount} destination{countryCount > 1 ? "s" : ""} disponible{countryCount > 1 ? "s" : ""}
        </div>
      </header>

      <main className="main">
        <WorldMap
          onCountryClick={handleCountryClick}
          highlightMap={effectiveHighlightMap}
          filterActive={effectiveFilterActive}
          searchActive={searchActive}
        />

        <SearchBar onFilterChange={setFilters} open={filterOpen} onOpenChange={setFilterOpen} />


      </main>

      {selectedCountry && (
        <CountryPanel countryCode={selectedCountry} onClose={handleClose} />
      )}
    </div>
  );
}
