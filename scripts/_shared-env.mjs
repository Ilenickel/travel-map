// Chargement partagé de .env pour les scripts de ce dossier (Node ne lit pas
// .env nativement, et ces scripts tournent hors du contexte Vite). Copie
// aussi les clés dans process.env pour les modules réutilisés depuis api/_lib
// (écrits pour tourner en route serveur, où process.env est déjà peuplé).
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, '..');

export function loadEnv() {
  const env = {};
  const raw = readFileSync(join(ROOT, '.env'), 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const i = line.indexOf('=');
    if (i > 0) env[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  Object.assign(process.env, env);
  return env;
}
