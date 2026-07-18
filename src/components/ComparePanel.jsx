import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { COUNTRIES } from "../data/index";
import { weatherRating } from "../utils/weather";
import { localizeCountry, localizeField } from "../lib/localizeCountry";
import { monthAbbrev } from "../lib/monthAbbrev";
import { localizeAmountString } from "../lib/currency";
import { useSettings } from "../context/SettingsContext";
import CountryFlag from "./planning/CountryFlag";
import { useModalHistory } from "../hooks/useModalHistory";

const TAB_DEFS = [
  { id: "resume", labelKey: "tabResume",       icon: "📊" },
  { id: "meteo",  labelKey: "tabWeather",      icon: "🌤" },
  { id: "cout",   labelKey: "tabCostOfLiving", icon: "💰" },
];

function normalize(str) {
  return str.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase();
}

/* ── Recherche pays ── */
function CountrySearch({ onSelect, exclude }) {
  const { t, i18n } = useTranslation("app");
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    if (!q.trim()) return [];
    const nq = normalize(q.trim());
    const lang = i18n.language;
    return Object.entries(COUNTRIES)
      .map(([code, d]) => [code, { ...d, name: localizeField(d.name, lang) }])
      .filter(([code, d]) => !exclude.includes(code) && normalize(d.name).includes(nq))
      .slice(0, 6);
  }, [q, exclude, i18n.language]);

  return (
    <div className="compare-search">
      <input
        className="compare-search-input"
        placeholder={t("topbar.searchPlaceholder")}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoFocus
      />
      {results.length > 0 && (
        <ul className="compare-search-results">
          {results.map(([code, data]) => (
            <li key={code}>
              <button className="compare-search-item" onClick={() => onSelect(code)}>
                <CountryFlag emoji={data.emoji} size={18} />
                <span>{data.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Onglet Résumé ── */
function TabResume({ data }) {
  const { t } = useTranslation("app");
  return (
    <>
      <div className="compare-section">
        <div className="compare-section-title">{t("compare.whenToGo")}</div>
        <div className="compare-periods">
          {data.bestPeriods.map((p) => (
            <div key={p.months} className="compare-period" style={{ borderColor: p.color }}>
              <span>{p.icon}</span>
              <span style={{ color: p.color }}>{p.months}</span>
              <span className="compare-period-label">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="compare-section">
        <div className="compare-section-title">{t("compare.budgetPerDay")}</div>
        <div className="compare-budgets">
          {data.costOfLiving.budgetSummary.map((b) => (
            <div key={b.type} className="compare-budget-row">
              <span className="compare-budget-type" style={{ color: b.color }}>{b.type}</span>
              <span className="compare-budget-daily">{localizeAmountString(b.daily)}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Onglet Météo ── */
function TabMeteo({ data }) {
  return (
    <>
      {data.weatherCities.map((city) => (
        <div key={city.id} className="compare-section">
          <div className="compare-section-title">🌡 {city.name} <span className="compare-city-region">— {city.region}</span></div>
          <div className="compare-weather-grid">
            {city.data.map((m, i) => {
              const r = weatherRating(m.temp, m.rain);
              return (
                <div key={m.month} className={`compare-weather-cell compare-weather-${r}`}>
                  <span className="compare-weather-month">{monthAbbrev(i)}</span>
                  <span className="compare-weather-icon">{m.icon}</span>
                  <span className="compare-weather-temp">{m.temp}°</span>
                  <span className="compare-weather-rain">{m.rain}mm</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

/* ── Onglet Coût de la vie ── */
function TabCout({ data }) {
  const col = data.costOfLiving;
  return (
    <>
      {col.categories?.map((cat) => (
        <div key={cat.id} className="compare-section">
          <div className="compare-section-title">{cat.icon} {cat.label}</div>
          <div className="compare-cat-items">
            {cat.items.slice(0, 4).map((item) => (
              <div key={item.label} className="compare-cat-item">
                <span className="compare-cat-item-label">{item.label}</span>
                <span className="compare-cat-item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

/* ── Colonne pays ── */
function Col({ code, onRemove, canRemove, activeTab, onOpen }) {
  const { t, i18n } = useTranslation("app");
  const data = useMemo(() => localizeCountry(COUNTRIES[code], i18n.language), [code, i18n.language]);
  if (!data) return null;

  const tabContent = () => {
    if (activeTab === "meteo") return <TabMeteo data={data} />;
    if (activeTab === "cout")  return <TabCout  data={data} />;
    return <TabResume data={data} />;
  };

  return (
    <div className="compare-col">
      <div className="compare-col-header">
        <button className="compare-col-open" onClick={onOpen} title={t("compare.openTitle")}>
          <span className="compare-col-emoji"><CountryFlag emoji={data.emoji} size={30} /></span>
          <div className="compare-col-info">
            <div className="compare-col-name">{data.name}</div>
            <div className="compare-col-capital">{data.capital} · {data.currency}</div>
          </div>
        </button>
        {canRemove && (
          <button className="compare-col-remove" onClick={onRemove} title={t("compare.removeCountryTitle")}>✕</button>
        )}
      </div>
      {tabContent()}
    </div>
  );
}

/* ── Colonne vide (ajout d'un pays) ── */
function ColEmpty({ exclude, onAdd }) {
  const { t } = useTranslation("app");
  return (
    <div className="compare-col compare-col-empty">
      <div className="compare-empty-label">{t("compare.chooseCountryToCompare")}</div>
      <CountrySearch onSelect={onAdd} exclude={exclude} />
    </div>
  );
}

/* ── Panel principal ── */
export default function ComparePanel({ baseCode, initialCodes, onClose, onCountryClick }) {
  useModalHistory(onClose);
  useSettings(); // abonnement devise : les montants affichés sont convertis
  const { t } = useTranslation("app");
  const [codes, setCodes] = useState(() =>
    initialCodes && initialCodes.length >= 1 ? initialCodes : [baseCode]
  );
  const [activeTab, setActiveTab] = useState("resume");
  const [addingThird, setAddingThird] = useState(false);
  const [copied, setCopied] = useState(false);

  // Swipe mobile : le corps devient un carrousel scroll-snap (1 pays = 1 page)
  const bodyRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = codes.length + (addingThird ? 1 : 0);

  const handleBodyScroll = (e) => {
    const el = e.currentTarget;
    if (el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setPageIndex(Math.max(0, Math.min(pageCount - 1, idx)));
  };

  const scrollToPage = (i) => {
    const el = bodyRef.current;
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  // À l'ouverture de la colonne d'ajout, amener la page vide à l'écran (mobile)
  useEffect(() => {
    if (addingThird && bodyRef.current) {
      bodyRef.current.scrollTo({ left: bodyRef.current.scrollWidth, behavior: "smooth" });
    }
  }, [addingThird]);

  // Sync URL quand les codes changent
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("compare", codes.join(","));
    url.searchParams.delete("country");
    // history.state (pas null) : préserve le marqueur qu'une modale ouverte
    // par-dessus (useModalHistory) a pu poser sur l'entrée courante — voir
    // la même correction dans App.jsx.
    history.replaceState(history.state, "", url);
  }, [codes]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const removeCode = (code) => {
    if (codes.length === 1) { onClose(); return; }
    setCodes((prev) => prev.filter((c) => c !== code));
    setAddingThird(false);
  };

  const addCode = (code) => {
    setCodes((prev) => [...prev, code]);
    setAddingThird(false);
  };

  const showAddBtn = codes.length < 3 && !addingThird;

  return (
    <div className="compare-overlay" onClick={onClose}>
      <div className="compare-panel" onClick={(e) => e.stopPropagation()}>

        {/* Topbar */}
        <div className="compare-topbar">
          <span className="compare-title">{t("compare.title")}</span>
          <button className="compare-share-btn" onClick={handleCopyLink}>
            {copied ? t("compare.linkCopied") : t("compare.shareButton")}
          </button>
          <button className="compare-close" onClick={onClose}>✕</button>
        </div>

        {/* Onglets partagés */}
        <div className="compare-tabs">
          {TAB_DEFS.map((tab) => (
            <button
              key={tab.id}
              className={`compare-tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{t(`compare.${tab.labelKey}`)}</span>
            </button>
          ))}
        </div>

        {/* Corps : colonnes */}
        <div className="compare-body" ref={bodyRef} onScroll={handleBodyScroll}>
          {codes.map((code, i) => (
            <div key={code} className="compare-col-wrapper">
              {i > 0 && <div className="compare-divider" />}
              <Col
                code={code}
                activeTab={activeTab}
                onRemove={() => removeCode(code)}
                canRemove={codes.length > 1 || addingThird}
                onOpen={() => { onClose(); onCountryClick(code); }}
              />
            </div>
          ))}

          {addingThird && (
            <div className="compare-col-wrapper">
              <div className="compare-divider" />
              <ColEmpty exclude={codes} onAdd={addCode} />
            </div>
          )}
        </div>

        {/* Indicateur de pages (mobile uniquement, dès 2 pays) */}
        {pageCount >= 2 && (
          <div className="compare-dots">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                className={`compare-dot${Math.min(pageIndex, pageCount - 1) === i ? " active" : ""}`}
                onClick={() => scrollToPage(i)}
                aria-label={t("compare.pageIndicator", { page: i + 1, count: pageCount })}
              />
            ))}
          </div>
        )}

        {/* Barre inférieure commune */}
        {showAddBtn && (
          <div className="compare-footer">
            <button className="compare-add-btn" onClick={() => setAddingThird(true)}>
              <span>+</span> {t("compare.addCountryButton")}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
