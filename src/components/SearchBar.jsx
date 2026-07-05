import { useState } from "react";
import { useTranslation } from "react-i18next";
import { monthAbbrevList } from "../lib/monthAbbrev";

// `value` reste en français : c'est la clé comparée aux tags des données pays
// (non traduites tant que la Phase 3 - données pays - n'est pas faite). Seul le
// libellé affiché (`t('search.tags.<key>')`) suit la langue active.
const TAGS = [
  { value: "UNESCO",        key: "unesco",       icon: "🏛️" },
  { value: "Histoire",      key: "history",      icon: "📜" },
  { value: "Nature",        key: "nature",       icon: "🌿" },
  { value: "Randonnée",     key: "hiking",       icon: "🥾" },
  { value: "Plage",         key: "beach",        icon: "🏖️" },
  { value: "Gastronomie",   key: "food",         icon: "🍽️" },
  { value: "Architecture",  key: "architecture", icon: "🏰" },
  { value: "Désert",        key: "desert",       icon: "🏜️" },
  { value: "Safari",        key: "safari",       icon: "🦁" },
  { value: "Ski",           key: "ski",          icon: "⛷️" },
  { value: "Ville",         key: "city",         icon: "🏙️" },
];

const BUDGET_PRESETS = [
  { label: "50€",  value: 50 },
  { label: "100€", value: 100 },
  { label: "200€", value: 200 },
  { label: "400€", value: 400 },
];

export default function SearchBar({ onFilterChange, open: openProp, onOpenChange, hideVisited, onHideVisitedChange, hasVisited }) {
  const { t, i18n } = useTranslation("app");
  const [openInternal, setOpenInternal] = useState(false);
  const open = openProp !== undefined ? openProp : openInternal;
  const setOpen = (v) => { setOpenInternal(v); onOpenChange?.(v); };
  const [budgetEnabled, setBudgetEnabled] = useState(false);
  const [tripBudget, setTripBudget] = useState(120);
  const [month, setMonth] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const activeCount = (budgetEnabled ? 1 : 0) + (month !== null ? 1 : 0) + selectedTags.length;

  const emit = (bEnabled, budget, m, tags) => {
    onFilterChange({ tripBudget: bEnabled ? budget : null, month: m, tags });
  };

  const handleBudgetToggle = () => {
    const next = !budgetEnabled;
    setBudgetEnabled(next);
    emit(next, tripBudget, month, selectedTags);
  };

  const handleBudgetChange = (e) => {
    const v = +e.target.value;
    setTripBudget(v);
    if (budgetEnabled) emit(true, v, month, selectedTags);
  };

  const handlePreset = (value) => {
    setTripBudget(value);
    if (!budgetEnabled) {
      setBudgetEnabled(true);
      emit(true, value, month, selectedTags);
    } else {
      emit(true, value, month, selectedTags);
    }
  };

  const handleMonthClick = (i) => {
    const next = month === i ? null : i;
    setMonth(next);
    emit(budgetEnabled, tripBudget, next, selectedTags);
  };

  const handleTagClick = (tag) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(next);
    emit(budgetEnabled, tripBudget, month, next);
  };

  const handleReset = () => {
    setBudgetEnabled(false);
    setTripBudget(120);
    setMonth(null);
    setSelectedTags([]);
    onFilterChange({ tripBudget: null, month: null, tags: [] });
  };

  return (
    <>
      {open && <div className="filter-backdrop" onClick={() => setOpen(false)} />}
      <div className={`search-bar${open ? " open" : ""}`}>
      <button className="search-toggle" onClick={() => setOpen(!open)}>
        <span className="search-icon">⚙️</span>
        <span>{t("search.filtersLabel")}</span>
        {activeCount > 0 && <span className="filter-badge">{activeCount}</span>}
        <span className={`search-chevron${open ? " up" : ""}`} />
      </button>

      {open && (
        <div className="search-panel">

          {/* ── Pays visités ── */}
          {hasVisited && (
            <>
              <div className="filter-group filter-group-visited">
                <div className="filter-group-header">
                  <span className="filter-group-title">{t("search.hideVisitedLabel")}</span>
                  <button
                    className={`budget-toggle${hideVisited ? " on" : ""}`}
                    onClick={() => onHideVisitedChange?.(!hideVisited)}
                    aria-pressed={hideVisited}
                  >
                    <span className="budget-toggle-thumb" />
                  </button>
                </div>
              </div>
              <div className="filter-divider" />
            </>
          )}

          {/* ── Budget ── */}
          <div className="filter-group">
            <div className="filter-group-header">
              <span className="filter-group-title">{t("search.budgetPerDayLabel")}</span>
              <button
                className={`budget-toggle${budgetEnabled ? " on" : ""}`}
                onClick={handleBudgetToggle}
                aria-pressed={budgetEnabled}
              >
                <span className="budget-toggle-thumb" />
              </button>
            </div>

            <div className={`budget-control${budgetEnabled ? "" : " disabled"}`}>
              <div className="budget-presets">
                {BUDGET_PRESETS.map((p) => (
                  <button
                    key={p.value}
                    className={`budget-preset-btn${tripBudget === p.value && budgetEnabled ? " active" : ""}`}
                    onClick={() => handlePreset(p.value)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="budget-slider-row">
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={tripBudget}
                  onChange={handleBudgetChange}
                  disabled={!budgetEnabled}
                  className="budget-slider"
                />
                <span className="budget-value">
                  {budgetEnabled ? `${tripBudget.toLocaleString(i18n.language === "fr" ? "fr-FR" : "en-GB")} €` : "—"}
                </span>
              </div>
            </div>
          </div>

          <div className="filter-divider" />

          {/* ── Mois ── */}
          <div className="filter-group">
            <div className="filter-group-header">
              <span className="filter-group-title">{t("search.travelMonthLabel")}</span>
              {month !== null && (
                <button className="clear-month-btn" onClick={() => { setMonth(null); emit(budgetEnabled, tripBudget, null, selectedTags); }}>
                  ✕
                </button>
              )}
            </div>
            <div className="month-grid">
              {monthAbbrevList().map((m, i) => (
                <button
                  key={m}
                  className={`month-btn${month === i ? " active" : ""}`}
                  onClick={() => handleMonthClick(i)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-divider" />

          {/* ── Tags ── */}
          <div className="filter-group">
            <div className="filter-group-header">
              <span className="filter-group-title">{t("search.destinationTypeLabel")}</span>
              {selectedTags.length > 0 && (
                <button className="clear-month-btn" onClick={() => { setSelectedTags([]); emit(budgetEnabled, tripBudget, month, []); }}>
                  ✕
                </button>
              )}
            </div>
            <div className="tag-grid">
              {TAGS.map(({ value, key, icon }) => (
                <button
                  key={value}
                  className={`tag-chip${selectedTags.includes(value) ? " active" : ""}`}
                  onClick={() => handleTagClick(value)}
                >
                  <span>{icon}</span>
                  <span>{t(`search.tags.${key}`)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Légende + reset ── */}
          {activeCount > 0 && (
            <>
              <div className="filter-divider" />
              <div className="filter-footer">
                <div className="filter-legend">
                  <span><span className="legend-chip good" />{t("search.legendIdeal")}</span>
                  <span><span className="legend-chip ok" />{t("search.legendOk")}</span>
                  <span><span className="legend-chip tight" />{t("search.legendTight")}</span>
                  <span><span className="legend-chip dim" />{t("search.legendOutOfCriteria")}</span>
                </div>
                <button className="reset-btn" onClick={handleReset}>
                  {t("search.resetButton")}
                </button>
              </div>
            </>
          )}

        </div>
      )}
    </div>
    </>
  );
}
