import { useState } from 'react';

// Windows ne fournit pas toujours les glyphs couleur des drapeaux emoji (Segoe UI
// Emoji retombe alors sur le code pays en lettres, ex. "CN" à la place de 🇨🇳).
// On sert donc les drapeaux via Twemoji (SVG), avec repli sur l'emoji brut si
// l'image ne charge pas (offline, CDN bloqué…).
export const TWEMOJI_BASE = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/';

export function emojiToCodepoints(emoji) {
  return Array.from(emoji).map(c => c.codePointAt(0).toString(16)).join('-');
}

// URL de l'image Twemoji d'un emoji — pour les rendus hors React (ex. le
// tooltip D3 de la carte, construit en innerHTML).
export function twemojiUrl(emoji) {
  return `${TWEMOJI_BASE}${emojiToCodepoints(emoji)}.svg`;
}

export default function CountryFlag({ emoji, size = 18, className = '' }) {
  const [errored, setErrored] = useState(false);

  if (!emoji || errored) {
    return <span className={className}>{emoji}</span>;
  }

  return (
    <img
      src={`${TWEMOJI_BASE}${emojiToCodepoints(emoji)}.svg`}
      alt=""
      draggable={false}
      onError={() => setErrored(true)}
      className={className}
      style={{ width: size, height: 'auto', display: 'inline-block', verticalAlign: 'middle', borderRadius: 3 }}
    />
  );
}
