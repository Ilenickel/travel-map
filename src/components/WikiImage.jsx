export default function WikiImage({ src, alt, className }) {
  if (!src) {
    return (
      <div className={`wiki-img-placeholder ${className ?? ""}`} aria-label={alt}>
        <span>🏛</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} decoding="async" />;
}
