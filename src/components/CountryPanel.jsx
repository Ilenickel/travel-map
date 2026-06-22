import { useEffect, useMemo, useState } from "react";
import { COUNTRIES } from "../data/index";
import WikiImage from "./WikiImage";
import { useWikipediaImages } from "../hooks/useWikipediaImages";
import { weatherRating } from "../utils/weather";

const RATING_EMOJI = { good: "😊", ok: "😐", bad: "😞" };

const MAX_TEMP = 35;
const MAX_RAIN = 250;

export default function CountryPanel({ countryCode, onClose }) {
  const data = COUNTRIES[countryCode];
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDest, setSelectedDest] = useState(null);
  const [activeCity, setActiveCity] = useState(0);
  const [activeBudget, setActiveBudget] = useState(0);
  const [costSubTab, setCostSubTab] = useState("summary");

  useEffect(() => {
    setActiveTab("overview");
    setSelectedDest(null);
    setActiveCity(0);
    setActiveBudget(0);
  }, [countryCode]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!data) return null;

  const tabs = [
    { id: "overview",      label: "🗾 Aperçu" },
    { id: "weather",       label: "🌤 Météo" },
    { id: "cost",          label: "💴 Coût de la vie" },
    { id: "destinations",  label: "📍 Destinations" },
    { id: "practical",     label: "🧳 Pratique" },
  ];

  const cityData = data.weatherCities[activeCity];
  const tripBudget = data.costOfLiving.tripEstimate.budgets[activeBudget];

  // Collect all slugs and batch-fetch in one Wikipedia request
  const allSlugs = useMemo(() => [
    ...data.destinations.map((d) => d.wikipedia),
    ...data.destinations.flatMap((d) => d.mustSee.map((s) => s.wikipedia)),
  ].filter(Boolean), [data]);

  const wikiImages = useWikipediaImages(allSlugs);
  const img = (slug) => wikiImages[slug] ?? null;

  return (
    <>
      <div className="panel-overlay" onClick={onClose} />
      <div className="modal-wrapper">
        <aside className="country-modal">

          {/* Header */}
          <div className="panel-header">
            <WikiImage src={img(data.destinations[0].wikipedia)} alt={data.name} className="panel-header-bg" />
            <div className="panel-header-overlay" />
            <button className="panel-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Fermer">✕</button>
            <div className="panel-header-content">
              <span className="panel-emoji">{data.emoji}</span>
              <h1 className="panel-title">{data.name}</h1>
              <div className="panel-meta">
                <span className="panel-meta-chip">🏙 {data.capital}</span>
                <span className="panel-meta-chip">💬 {data.language}</span>
                <span className="panel-meta-chip">💴 {data.currency}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="panel-tabs-wrapper">
            <nav className="panel-tabs">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={`tab-btn${activeTab === t.id ? " active" : ""}`}
                  onClick={() => { setActiveTab(t.id); setSelectedDest(null); }}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Body */}
          <div className="panel-body">

            {/* ── OVERVIEW ── */}
            {activeTab === "overview" && (
              <div className="tab-content">
                <p className="country-description">{data.description}</p>

                <h3 className="section-title">Meilleures périodes</h3>
                <div className="period-cards">
                  {data.bestPeriods.map((p) => (
                    <div key={p.months} className="period-card" style={{ borderColor: p.color }}>
                      <span className="period-icon">{p.icon}</span>
                      <div>
                        <div className="period-months" style={{ color: p.color }}>{p.months}</div>
                        <div className="period-label">{p.label}</div>
                        <div className="period-desc">{p.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="section-title">Destinations phares</h3>
                <div className="dest-grid-preview">
                  {data.destinations.slice(0, 3).map((dest) => (
                    <div
                      key={dest.id}
                      className="dest-card-mini"
                      onClick={() => { setSelectedDest(dest); setActiveTab("destinations"); }}
                    >
                      <WikiImage src={img(dest.wikipedia)} alt={dest.name} className="dest-card-mini-img" />
                      <div className="dest-card-mini-info">
                        <span className="dest-card-mini-name">{dest.name}</span>
                        <span className="dest-card-mini-region">{dest.region}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── WEATHER ── */}
            {activeTab === "weather" && (
              <div className="tab-content">
                {/* Global bilan */}
                <div className="bilan-section">
                  <h3 className="section-title">Bilan mensuel par ville</h3>
                  <p className="section-intro bilan-legend-row">
                    <span className="bilan-dot good" /><span>Idéal</span>
                    <span className="bilan-dot ok" /><span>Acceptable</span>
                    <span className="bilan-dot bad" /><span>Déconseillé</span>
                    <span className="bilan-note">Chaleur + pluie + humidité</span>
                  </p>
                  <div className="bilan-table">
                    <div className="bilan-header-row">
                      <div className="bilan-city-col" />
                      {data.weatherCities[0].data.map((m) => (
                        <div key={m.month} className="bilan-month-label">{m.month}</div>
                      ))}
                    </div>
                    {data.weatherCities.map((city, idx) => (
                      <div
                        key={city.id}
                        className={`bilan-row${activeCity === idx ? " bilan-row-active" : ""}`}
                        onClick={() => setActiveCity(idx)}
                      >
                        <div className="bilan-city-col">
                          <span className="bilan-city-num">{idx + 1}</span>
                          <span className="bilan-city-name">{city.name}</span>
                        </div>
                        {city.data.map((m) => {
                          const r = weatherRating(m.temp, m.rain);
                          return (
                            <div key={m.month} className={`bilan-cell bilan-${r}`} title={`${m.temp}°C, ${m.rain}mm`}>
                              {RATING_EMOJI[r]}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* City selector */}
                <h3 className="section-title">Détail par ville</h3>
                <div className="city-tabs">
                  {data.weatherCities.map((c, i) => (
                    <button
                      key={c.id}
                      className={`city-tab${activeCity === i ? " active" : ""}`}
                      onClick={() => setActiveCity(i)}
                    >
                      {c.name}
                      <span className="city-tab-region">{c.region}</span>
                    </button>
                  ))}
                </div>

                <div className="weather-chart">
                  {(() => {
                    const cityMaxRain = Math.max(...cityData.data.map(m => m.rain), MAX_RAIN);
                    return cityData.data.map((m) => {
                    const maxTemp = 35;
                    const rainH = Math.round((m.rain / cityMaxRain) * 80);
                    const tempH = Math.max(Math.round(((m.temp + 5) / (maxTemp + 5)) * 80), 4);
                    return (
                      <div key={m.month} className="weather-month">
                        <div className="weather-bars">
                          <div className="bar bar-rain" style={{ height: `${rainH}px` }} title={`${m.rain} mm`} />
                          <div className="bar bar-temp" style={{ height: `${tempH}px` }} title={`${m.temp}°C`} />
                        </div>
                        <span className="weather-temp">{m.temp}°</span>
                        <span className="weather-icon">{m.icon}</span>
                        <span className="weather-month-label">{m.month}</span>
                      </div>
                    );
                  });
                  })()}
                </div>

                <div className="weather-legend">
                  <span><span className="legend-dot rain" />Pluie (mm)</span>
                  <span><span className="legend-dot temp" />Température (°C)</span>
                </div>
              </div>
            )}

            {/* ── COST OF LIVING ── */}
            {activeTab === "cost" && (
              <div className="tab-content">
                {/* Sub-tabs */}
                <div className="cost-subtabs">
                  {[
                    { id: "summary",    label: "💰 Résumé" },
                    { id: "estimate",   label: "🧾 Estimation" },
                    { id: "prices",     label: "🛒 Prix courants" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      className={`cost-subtab-btn${costSubTab === s.id ? " active" : ""}`}
                      onClick={() => setCostSubTab(s.id)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* ── Résumé ── */}
                {costSubTab === "summary" && (
                  <>
                    <p className="section-intro">{data.costOfLiving.intro}</p>

                    <div className="cost-exchange">
                      <span className="cost-exchange-icon">💱</span>
                      <span className="cost-exchange-label">Taux de change</span>
                      <span className="cost-exchange-value">{data.costOfLiving.exchangeRate}</span>
                    </div>

                    <div className="budget-summary">
                      {data.costOfLiving.budgetSummary.map((b) => (
                        <div key={b.type} className="budget-card" style={{ "--budget-color": b.color }}>
                          <div className="budget-type">{b.type}</div>
                          <div className="budget-daily">{b.daily}</div>
                          <div className="budget-desc">{b.desc}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ── Estimation ── */}
                {costSubTab === "estimate" && (
                  <div className="trip-estimate">
                    <h3 className="section-title">
                      Estimation — {data.costOfLiving.tripEstimate.duration}
                    </h3>
                    <p className="trip-route">{data.costOfLiving.tripEstimate.route}</p>

                    <div className="trip-budget-tabs">
                      {data.costOfLiving.tripEstimate.budgets.map((b, i) => (
                        <button
                          key={b.type}
                          className={`trip-budget-tab${activeBudget === i ? " active" : ""}`}
                          style={{ "--tab-color": b.color }}
                          onClick={() => setActiveBudget(i)}
                        >
                          {b.type}
                        </button>
                      ))}
                    </div>

                    <div className="trip-budget-card" style={{ "--budget-color": tripBudget.color }}>
                      <div className="trip-total">
                        <span className="trip-total-label">Total estimé</span>
                        <span className="trip-total-value">{tripBudget.total}</span>
                      </div>
                      <div className="trip-breakdown">
                        {tripBudget.breakdown.map((item) => (
                          <div key={item.label} className="trip-line">
                            <span className="trip-line-label">{item.label}</span>
                            <span className="trip-line-amount">{item.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Prix courants ── */}
                {costSubTab === "prices" && (
                  <>
                    {data.costOfLiving.categories.map((cat) => (
                      <div key={cat.id} className="cost-category">
                        <h3 className="cost-category-title">
                          <span>{cat.icon}</span> {cat.label}
                        </h3>
                        <div className="cost-items">
                          {cat.items.map((item) => (
                            <div key={item.label} className="cost-item">
                              <div className="cost-item-left">
                                <span className="cost-item-label">{item.label}</span>
                                <span className="cost-item-detail">{item.detail}</span>
                              </div>
                              <span className="cost-item-price">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            {/* ── DESTINATIONS ── */}
            {activeTab === "destinations" && (
              <div className="tab-content">
                {selectedDest ? (
                  <div className="dest-detail">
                    <button className="back-btn" onClick={() => setSelectedDest(null)}>← Retour</button>
                    <WikiImage src={img(selectedDest.wikipedia)} alt={selectedDest.name} className="dest-detail-img" />
                    <h2 className="dest-detail-name">{selectedDest.name}</h2>
                    <span className="dest-detail-region">{selectedDest.region}</span>
                    <p className="dest-detail-desc">{selectedDest.description}</p>
                    <div className="dest-tags">
                      {selectedDest.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <h4 className="must-title">À ne pas manquer</h4>
                    <div className="must-list">
                      {selectedDest.mustSee.map((s) => (
                        <div key={s.name} className="must-item">
                          <WikiImage src={img(s.wikipedia)} alt={s.name} className="must-item-img" />
                          <span className="must-item-name">{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="dest-grid">
                    {data.destinations.map((dest) => (
                      <div key={dest.id} className="dest-card" onClick={() => setSelectedDest(dest)}>
                        <WikiImage src={img(dest.wikipedia)} alt={dest.name} className="dest-card-img" />
                        <div className="dest-card-info">
                          <div className="dest-card-top">
                            <span className="dest-card-name">{dest.name}</span>
                            <span className="dest-card-region">{dest.region}</span>
                          </div>
                          <p className="dest-card-desc">{dest.description.slice(0, 90)}…</p>
                          <div className="dest-tags">
                            {dest.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── PRACTICAL ── */}
            {activeTab === "practical" && (
              <div className="tab-content">
                <div className="visa-disclaimer">
                  <span className="visa-disclaimer-icon">⚠️</span>
                  <span>Les informations sur les visas sont indicatives et peuvent évoluer. Vérifiez toujours auprès de l'ambassade ou sur&nbsp;
                    <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" target="_blank" rel="noopener noreferrer">France Diplomatie</a> avant de voyager.
                  </span>
                </div>
                <div className="practical-list">
                  {data.practicalities.map((item) => (
                    <div key={item.label} className="practical-item">
                      <span className="practical-icon">{item.icon}</span>
                      <div className="practical-body">
                        <span className="practical-label">{item.label}</span>
                        <span className="practical-value">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
