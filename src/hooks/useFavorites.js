import { useState, useCallback } from "react";

const KEY = "travel-map-favorites";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(load);

  const toggle = useCallback((code) => {
    setFavorites((prev) => {
      const next = prev.includes(code)
        ? prev.filter((c) => c !== code)
        : [...prev, code];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const remove = useCallback((code) => {
    setFavorites((prev) => {
      const next = prev.filter((c) => c !== code);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { favorites, toggle, remove };
}
