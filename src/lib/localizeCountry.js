// Résout les champs bilingues { fr, en } d'un pays en chaîne pour la langue courante.
// Les pays pas encore traduits gardent des chaînes brutes (fr uniquement) : pick()
// les retourne telles quelles, donc cette fonction est sans risque à appliquer partout.
function pick(field, lang) {
  if (field && typeof field === 'object' && !Array.isArray(field)) {
    return field[lang] ?? field.fr ?? field.en ?? '';
  }
  return field;
}

// Exposé pour les cas où l'on n'a besoin de résoudre qu'un seul champ (nom de pays
// dans une liste/recherche/tri) sans reconstruire tout l'objet pays.
export const localizeField = pick;

export function localizeCountry(country, lang) {
  if (!country) return country;

  return {
    ...country,
    name: pick(country.name, lang),
    capital: pick(country.capital, lang),
    language: pick(country.language, lang),
    currency: pick(country.currency, lang),
    description: pick(country.description, lang),
    bestPeriods: (country.bestPeriods || []).map((p) => ({
      ...p,
      months: pick(p.months, lang),
      label: pick(p.label, lang),
      description: pick(p.description, lang),
    })),
    weatherCities: (country.weatherCities || []).map((c) => ({
      ...c,
      region: pick(c.region, lang),
    })),
    destinations: (country.destinations || []).map((d) => ({
      ...d,
      name: pick(d.name, lang),
      region: pick(d.region, lang),
      description: pick(d.description, lang),
      mustSee: (d.mustSee || []).map((m) => ({ ...m, name: pick(m.name, lang) })),
    })),
    costOfLiving: country.costOfLiving && {
      ...country.costOfLiving,
      intro: pick(country.costOfLiving.intro, lang),
      categories: (country.costOfLiving.categories || []).map((cat) => ({
        ...cat,
        label: pick(cat.label, lang),
        items: (cat.items || []).map((it) => ({
          ...it,
          label: pick(it.label, lang),
          detail: pick(it.detail, lang),
        })),
      })),
      budgetSummary: (country.costOfLiving.budgetSummary || []).map((b) => ({
        ...b,
        type: pick(b.type, lang),
        desc: pick(b.desc, lang),
      })),
      tripEstimate: country.costOfLiving.tripEstimate && {
        ...country.costOfLiving.tripEstimate,
        duration: pick(country.costOfLiving.tripEstimate.duration, lang),
        route: pick(country.costOfLiving.tripEstimate.route, lang),
        budgets: (country.costOfLiving.tripEstimate.budgets || []).map((b) => ({
          ...b,
          type: pick(b.type, lang),
          breakdown: (b.breakdown || []).map((item) => ({
            ...item,
            label: pick(item.label, lang),
          })),
        })),
      },
    },
    practicalities: (country.practicalities || []).map((p) => ({
      ...p,
      label: pick(p.label, lang),
      value: pick(p.value, lang),
    })),
  };
}
