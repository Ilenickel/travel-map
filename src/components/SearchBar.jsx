import { useState } from "react";

const MONTHS = [
  "Jan", "Fév", "Mar", "Avr", "Mai", "Jun",
  "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc",
];

const BUDGET_PRESETS = [
  { label: "50€",  value: 50 },
  { label: "100€", value: 100 },
  { label: "200€", value: 200 },
  { label: "400€", value: 400 },
];

export default function SearchBar({ onFilterChange, open: openProp, onOpenChange }) {
  const [openInternal, setOpenInternal] = useState(false);
  const open = openProp !== undefined ? openProp : openInternal;
  const setOpen = (v) => { setOpenInternal(v); onOpenChange?.(v); };
  const [budgetEnabled, setBudgetEnabled] = useState(false);
  const [tripBudget, setTripBudget] = useState(120);
  const [month, setMonth] = useState(null);

  const activeCount = (budgetEnabled ? 1 : 0) + (month !== null ? 1 : 0);

  const emit = (bEnabled, budget, m) => {
    onFilterChange({ tripBudget: bEnabled ? budget : null, month: m });
  };

  const handleBudgetToggle = () => {
    const next = !budgetEnabled;
    setBudgetEnabled(next);
    emit(next, tripBudget, month);
  };

  const handleBudgetChange = (e) => {
    const v = +e.target.value;
    setTripBudget(v);
    if (budgetEnabled) emit(true, v, month);
  };

  const handlePreset = (value) => {
    setTripBudget(value);
    if (!budgetEnabled) {
      setBudgetEnabled(true);
      emit(true, value, month);
    } else {
      emit(true, value, month);
    }
  };

  const handleMonthClick = (i) => {
    const next = month === i ? null : i;
    setMonth(next);
    emit(budgetEnabled, tripBudget, next);
  };

  const handleReset = () => {
    setBudgetEnabled(false);
    setTripBudget(120);
    setMonth(null);
    onFilterChange({ tripBudget: null, month: null });
  };

  return (
    <>
      {open && <div className="filter-backdrop" onClick={() => setOpen(false)} />}
      <div className={`search-bar${open ? " open" : ""}`}>
      <button className="search-toggle" onClick={() => setOpen(!open)}>
        <span className="search-icon">⚙️</span>
        <span>Filtres</span>
        {activeCount > 0 && <span className="filter-badge">{activeCount}</span>}
        <span className={`search-chevron${open ? " up" : ""}`} />
      </button>

      {open && (
        <div className="search-panel">

          {/* ── Budget ── */}
          <div className="filter-group">
            <div className="filter-group-header">
              <span className="filter-group-title">💳 Budget / jour</span>
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
                  {budgetEnabled ? `${tripBudget.toLocaleString("fr-FR")} €` : "—"}
                </span>
              </div>
            </div>
          </div>

          <div className="filter-divider" />

          {/* ── Mois ── */}
          <div className="filter-group">
            <div className="filter-group-header">
              <span className="filter-group-title">📅 Mois de voyage</span>
              {month !== null && (
                <button className="clear-month-btn" onClick={() => { setMonth(null); emit(budgetEnabled, tripBudget, null); }}>
                  ✕
                </button>
              )}
            </div>
            <div className="month-grid">
              {MONTHS.map((m, i) => (
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

          {/* ── Légende + reset ── */}
          {activeCount > 0 && (
            <>
              <div className="filter-divider" />
              <div className="filter-footer">
                <div className="filter-legend">
                  <span><span className="legend-chip good" />Accessible</span>
                  <span><span className="legend-chip ok" />Correct</span>
                  <span><span className="legend-chip tight" />Serré</span>
                  <span><span className="legend-chip dim" />Hors budget</span>
                </div>
                <button className="reset-btn" onClick={handleReset}>
                  Réinitialiser
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
