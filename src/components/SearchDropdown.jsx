import { useRef, useEffect } from "react";
import { useWikipediaImages } from "../hooks/useWikipediaImages";
import WikiImage from "./WikiImage";

export default function SearchDropdown({ results, onSelect, onClose, containerRef }) {
  const slugs = results.map(({ data }) => data.destinations?.[0]?.wikipedia).filter(Boolean);
  const images = useWikipediaImages(slugs);

  // Close on click outside the whole search container (passed from parent)
  useEffect(() => {
    const handle = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose, containerRef]);

  if (!results.length) return null;

  return (
    <div className="search-dropdown">
      {results.map(({ code, data }) => {
        const slug = data.destinations?.[0]?.wikipedia;
        const imgSrc = slug ? images[slug] : null;
        return (
          <button key={code} className="search-dropdown-item" onClick={() => onSelect(code)}>
            <WikiImage src={imgSrc} alt={data.name} className="search-dropdown-img" />
            <span className="search-dropdown-name">{data.name}</span>
            <span className="search-dropdown-code">{data.emoji} {code}</span>
          </button>
        );
      })}
    </div>
  );
}
