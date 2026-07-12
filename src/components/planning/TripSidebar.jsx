import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TripCard from './TripCard';

export default function TripSidebar({ trips, selectedId, userId, onSelect, onCreate, onDelete, onLeaveTrip, onDuplicate }) {
  const { t } = useTranslation();
  // Mobile uniquement (le CSS desktop ignore la classe --collapsed) : le bandeau
  // des voyages est replié par défaut pour rendre la hauteur à l'éditeur, et se
  // déplie au tap sur "Mes voyages". Sélectionner un voyage le replie.
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <aside className={`pp-sidebar${mobileOpen ? '' : ' pp-sidebar--collapsed'}`}>
      <div className="pp-sidebar-header">
        {/* Retour à l'accueil — mobile seulement (la topbar y est masquée) */}
        <Link to="/" className="pp-sidebar-home" aria-label={t('topbar.homeButton')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </Link>
        <button
          type="button"
          className="pp-sidebar-title-wrap pp-sidebar-toggle"
          onClick={() => setMobileOpen(o => !o)}
          aria-expanded={mobileOpen}
        >
          <span className="pp-sidebar-title-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          </span>
          <h2 className="pp-sidebar-title">{t('sidebar.title')}</h2>
          <svg className="pp-sidebar-chevron" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ transform: mobileOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </button>
        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={onCreate}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <span className="pp-sidebar-new-label">{t('sidebar.newButton')}</span>
        </button>
      </div>

      <div className="pp-sidebar-list">
        {trips.length === 0 ? (
          <div className="pp-sidebar-empty">
            <div className="pp-sidebar-empty-icon">✈️</div>
            <p>{t('sidebar.emptyTitle')}</p>
            <p className="pp-sidebar-empty-sub">{t('sidebar.emptySub')}</p>
            <button className="pp-btn pp-btn--primary" onClick={onCreate}>
              {t('sidebar.createButton')}
            </button>
          </div>
        ) : (
          trips.map(trip => (
            <TripCard
              key={trip.id}
              trip={trip}
              selected={trip.id === selectedId}
              userId={userId}
              onSelect={(id) => { onSelect(id); setMobileOpen(false); }}
              onDelete={onDelete}
              onLeaveTrip={onLeaveTrip}
              onDuplicate={onDuplicate}
            />
          ))
        )}
      </div>
    </aside>
  );
}
