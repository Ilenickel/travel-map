import { useTranslation } from 'react-i18next';
import { HalfStars } from './ReviewItem';
import './../styles/restaurants.css';

// Synthèse d'une notation : moyenne en gros, puis répartition par nombre
// d'étoiles.
//
// Partagée par les avis de restaurant, de destination et de pays. Une moyenne
// seule ne dit pas si elle vient d'un consensus ou de deux camps opposés :
// 4,0 peut être « que des 4 » comme « des 5 et des 3 ». L'histogramme le montre
// immédiatement, et c'est ce qu'on trouve partout ailleurs.
//
// `counts` : tableau de 5 entiers, index 0 = 1 étoile … index 4 = 5 étoiles.

export default function RatingSummary({ average, counts, title = null, subtitle = null }) {
  const { t } = useTranslation('app');
  const safeCounts = Array.isArray(counts) && counts.length === 5 ? counts : [0, 0, 0, 0, 0];
  const total = safeCounts.reduce((a, b) => a + b, 0);
  if (!total) return null;

  return (
    <div className="resto-rating-summary">
      <div className="resto-rating-avg">
        <span className="resto-rating-avg-value">
          {Number(average).toFixed(1).replace('.', ',')}
        </span>
        <HalfStars rating={Number(average)} size={15} />
        <span className="resto-rating-avg-count">
          {t('restaurants.reviewsCount', { count: total })}
        </span>
      </div>

      <div className="resto-rating-bars">
        {(title || subtitle) && (
          <div className="resto-rating-caption">
            {title && <span className="resto-rating-caption-title">{title}</span>}
            {/* Espace explicite : titre et complément se lisent comme une seule
                phrase (« Note globale des voyageurs Tripolar »), et deux <span>
                voisins en JSX se collent l'un à l'autre sans lui. */}
            {title && subtitle ? ' ' : null}
            {subtitle && <span className="resto-rating-caption-sub">{subtitle}</span>}
          </div>
        )}
        {[5, 4, 3, 2, 1].map((star) => {
          const count = safeCounts[star - 1];
          const pct = Math.round((count / total) * 100);
          return (
            <div key={star} className="resto-rating-bar-row">
              <span className="resto-rating-bar-label">{star} ★</span>
              <span className="resto-rating-bar-track">
                <span className="resto-rating-bar-fill" style={{ width: `${pct}%` }} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Répartition par note à partir d'une liste d'avis bruts (`{ rating }`). */
export function ratingCountsFrom(reviews) {
  const counts = [0, 0, 0, 0, 0];
  for (const r of reviews || []) {
    if (r?.rating >= 1 && r.rating <= 5) counts[r.rating - 1] += 1;
  }
  return counts;
}
