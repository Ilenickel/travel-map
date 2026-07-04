import { useTranslation } from 'react-i18next';
import TripCard from './TripCard';

export default function TripSidebar({ trips, selectedId, userId, onSelect, onCreate, onDelete, onLeaveTrip, onDuplicate }) {
  const { t } = useTranslation();
  return (
    <aside className="pp-sidebar">
      <div className="pp-sidebar-header">
        <div className="pp-sidebar-title-wrap">
          <span className="pp-sidebar-title-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          </span>
          <h2 className="pp-sidebar-title">{t('sidebar.title')}</h2>
        </div>
        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={onCreate}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          {t('sidebar.newButton')}
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
          trips.map(t => (
            <TripCard
              key={t.id}
              trip={t}
              selected={t.id === selectedId}
              userId={userId}
              onSelect={onSelect}
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
