import { useTranslation } from 'react-i18next';

export default function EmptyEditor({ onCreate }) {
  const { t } = useTranslation();
  return (
    <div className="pp-empty-editor">
      <div className="pp-empty-editor-visual">
        <div className="pp-empty-editor-icon">🗺</div>
        <div className="pp-empty-editor-dots">
          <span /><span /><span />
        </div>
      </div>
      <h3 className="pp-empty-editor-title">{t('emptyEditor.title')}</h3>
      <p className="pp-empty-editor-sub">
        {t('emptyEditor.subtitle')}
      </p>
      <button className="pp-btn pp-btn--primary" onClick={onCreate}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        {t('emptyEditor.newTripButton')}
      </button>
    </div>
  );
}
