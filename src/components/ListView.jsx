import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { COUNTRIES } from "../data/index";
import { localizeCountry } from "../lib/localizeCountry";

function parseDailyAvg(data) {
  const str = data.costOfLiving?.budgetSummary?.[0]?.daily ?? "";
  const nums = [...str.matchAll(/\d+/g)].map((m) => parseInt(m[0], 10));
  if (nums.length === 0) return 9999;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

export default function ListView({ onCountryClick, highlightMap, filterActive, favorites, visited = [], hideVisited = false, onCountryHover }) {
  const { t, i18n } = useTranslation("app");
  const [sortBy, setSortBy] = useState("name");
  const [sortDir, setSortDir] = useState(1);

  const toggleSort = (field) => {
    if (sortBy === field) setSortDir((d) => -d);
    else { setSortBy(field); setSortDir(1); }
  };

  const entries = useMemo(() => {
    const list = Object.entries(COUNTRIES).map(([code, data]) => ({
      code,
      data: localizeCountry(data, i18n.language),
      matched: !filterActive || !!highlightMap?.[code],
      color: highlightMap?.[code] ?? null,
      isVisited: visited.includes(code),
    }));

    list.sort((a, b) => {
      if (sortBy === "name") return sortDir * a.data.name.localeCompare(b.data.name, i18n.language);
      if (sortBy === "budget") {
        return sortDir * (parseDailyAvg(a.data) - parseDailyAvg(b.data));
      }
      return 0;
    });

    if (filterActive) {
      list.sort((a, b) => (b.matched ? 1 : 0) - (a.matched ? 1 : 0));
    }

    return hideVisited ? list.filter((e) => !e.isVisited) : list;
  }, [sortBy, sortDir, highlightMap, filterActive, visited, hideVisited, i18n.language]);

  const SortBtn = ({ field, label }) => (
    <button
      className={`list-sort-btn${sortBy === field ? " active" : ""}`}
      onClick={() => toggleSort(field)}
    >
      {label} {sortBy === field ? (sortDir === 1 ? "↑" : "↓") : ""}
    </button>
  );

  return (
    <div className="list-view">
      <div className="list-view-toolbar">
        <span className="list-view-count">
          {filterActive
            ? t("listView.destinationsCountFiltered", { matched: entries.filter((e) => e.matched).length, total: entries.length })
            : t("listView.destinationsCount", { count: entries.length })}
        </span>
        <div className="list-sort-group">
          <span className="list-sort-label">{t("listView.sortLabel")}</span>
          <SortBtn field="name" label={t("listView.sortByName")} />
          <SortBtn field="budget" label={t("listView.sortByBudget")} />
        </div>
      </div>

      <div className="list-grid">
        {entries.map(({ code, data, matched, color, isVisited }) => {
          const dimmed = !matched;
          return (
            <button
              key={code}
              className={`list-card${dimmed ? " list-card-dim" : ""}${favorites.includes(code) ? " list-card-fav" : ""}${isVisited && !hideVisited && !color ? " list-card-visited" : ""}`}
              onClick={() => onCountryClick(code)}
              onMouseEnter={() => onCountryHover?.(code)}
              onMouseLeave={() => onCountryHover?.(null)}
              style={color ? { "--card-color": color } : {}}
            >
              <div className="list-card-top">
                <span className="list-card-emoji">{data.emoji}</span>
                <div className="list-card-meta">
                  <span className="list-card-name">{data.name}</span>
                  <span className="list-card-capital">{data.capital}</span>
                  <span className="list-card-budget">
                    {data.costOfLiving?.budgetSummary?.[0]?.daily ?? "—"}
                  </span>
                </div>
                <div className="list-card-periods">
                  {data.bestPeriods?.map((p) => (
                    <span key={p.months} className="list-card-period-chip" style={{ color: p.color }}>
                      {p.icon} <span className="list-card-period-months">{p.months}</span>
                    </span>
                  ))}
                </div>
                <div className="list-card-badges">
                  {favorites.includes(code) && <span className="list-card-star">⭐</span>}
                  {isVisited && <span className="list-card-visited-badge">✈️</span>}
                </div>
              </div>
              {color && <div className="list-card-bar" style={{ background: color }} />}
              {isVisited && !color && !hideVisited && <div className="list-card-bar list-card-bar-visited" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
