import { useEffect, useState } from "react";

// Réactif au resize (contrairement aux checks ponctuels `matchMedia(...).matches`
// utilisés ailleurs dans le code, ex. TripEditor.jsx) : nécessaire ici car le
// résultat conditionne quel rendu (onglets desktop / scroll continu mobile) est monté.
export default function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handleChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handleChange);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", handleChange);
  }, [query]);

  return isMobile;
}
