// Cache de traduction lazy pour le contenu communautaire (destinations, lieux,
// avis) : traduit uniquement quand consulté dans une autre langue que la
// langue source, puis mémorise le résultat en base (table `translations`).
// Suit le même pattern d'appel HTTP que api/_lib/moderation.js (fetch + erreur
// custom), pour une gestion d'erreur cohérente entre les deux intégrations.
import { createHash } from 'crypto';

const GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2';

// Langues cibles acceptées par les routes publiques de traduction
// (get-translated-content.js, get-place-suggestions.js) : doit rester
// synchronisé avec SUPPORTED_LANGUAGES dans src/i18n/index.js. Sans cette
// liste, une route non authentifiée accepterait n'importe laquelle des 100+
// langues de Google Translate comme cible, ce qui multiplie les cache miss
// (donc les vrais appels facturés) pour un même contenu — chaque nouvelle
// langue ajoutée à l'app doit être ajoutée ICI aussi.
export const SUPPORTED_TARGET_LANGUAGES = ['fr', 'en'];

export class TranslationUnavailableError extends Error {
  constructor(message) {
    super(message || 'Service de traduction indisponible');
    this.name = 'TranslationUnavailableError';
  }
}

function apiKey() {
  const key = process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!key) throw new TranslationUnavailableError('Clé Google Translate absente côté serveur');
  return key;
}

function hashText(text) {
  return createHash('md5').update(text).digest('hex');
}

function currentMonthKey() {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
}

// Réserve `chars` caractères sur le budget mensuel (variable d'env
// GOOGLE_TRANSLATE_MONTHLY_CHAR_LIMIT, illimité si absente). Incrémente
// D'ABORD de façon atomique (RPC Postgres) puis vérifie le nouveau total :
// en cas de dépassement, l'appel est déjà comptabilisé (on ne le retire pas,
// dépassement mineur et ponctuel accepté) mais la traduction n'est pas faite.
async function reserveQuota(admin, chars) {
  const limit = Number(process.env.GOOGLE_TRANSLATE_MONTHLY_CHAR_LIMIT);
  if (!limit || Number.isNaN(limit)) return true; // pas de limite configurée

  const month = currentMonthKey();
  const { data: total, error } = await admin.rpc('increment_translation_usage', { p_month: month, p_chars: chars });
  if (error) {
    console.error('[translation] quota rpc:', error.message);
    return true; // en cas d'erreur du compteur, on ne bloque pas la traduction pour autant
  }
  return Number(total) <= limit;
}

async function callGoogleTranslate(text, targetLanguage, sourceLanguage) {
  let res;
  try {
    const url = `${GOOGLE_TRANSLATE_URL}?key=${apiKey()}`;
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
        ...(sourceLanguage ? { source: sourceLanguage } : {}),
        format: 'text',
      }),
    });
  } catch (err) {
    throw new TranslationUnavailableError(`Réseau Google Translate : ${err.message}`);
  }
  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new TranslationUnavailableError(`Google Translate ${res.status} : ${errText.slice(0, 300)}`);
  }
  const data = await res.json();
  const translation = data?.data?.translations?.[0];
  if (!translation) throw new TranslationUnavailableError('Réponse Google Translate illisible');
  return {
    translatedText: translation.translatedText,
    detectedSourceLanguage: translation.detectedSourceLanguage || sourceLanguage || null,
  };
}

/**
 * Traduit un champ de contenu communautaire avec cache permanent.
 * @param {Object} params
 * @param {import('@supabase/supabase-js').SupabaseClient} params.admin
 * @param {string} params.contentType
 * @param {string} params.contentId
 * @param {string} params.field
 * @param {string} params.sourceText
 * @param {string|null} [params.sourceLanguage] - langue source si connue (sinon détection auto)
 * @param {string} params.targetLanguage
 * @returns {Promise<string>}
 */
export async function getTranslatedField({ admin, contentType, contentId, field, sourceText, sourceLanguage = null, targetLanguage }) {
  if (!sourceText || !sourceText.trim()) return sourceText;
  if (sourceLanguage && sourceLanguage === targetLanguage) return sourceText;

  const hash = hashText(sourceText);

  const { data: cached } = await admin
    .from('translations')
    .select('translated_text, source_hash')
    .match({ content_type: contentType, content_id: String(contentId), field, language: targetLanguage })
    .maybeSingle();

  if (cached && cached.source_hash === hash) return cached.translated_text;

  const withinQuota = await reserveQuota(admin, sourceText.length);
  if (!withinQuota) {
    console.warn('[translation] quota mensuel atteint, repli sur le texte original');
    return sourceText;
  }

  const { translatedText, detectedSourceLanguage } = await callGoogleTranslate(sourceText, targetLanguage, sourceLanguage);

  // Même si le texte est déjà dans la langue cible (détection auto), on met en
  // cache ce résultat (translated_text = sourceText) : sinon, chaque nouvelle
  // consultation de ce contenu dans cette langue redéclencherait un appel
  // Google Translate pour ne rien traduire, gaspillant le quota mensuel.
  await admin.from('translations').upsert(
    {
      content_type: contentType,
      content_id: String(contentId),
      field,
      language: targetLanguage,
      translated_text: translatedText,
      source_language: detectedSourceLanguage,
      source_hash: hash,
      translated_at: new Date().toISOString(),
    },
    { onConflict: 'content_type,content_id,field,language' }
  );

  return translatedText;
}

/**
 * Invalide (supprime) le cache de traduction d'un contenu — à appeler après
 * toute écriture qui modifie un champ déjà traduit et conserve le même id
 * (update/upsert). Best-effort : une erreur ici ne doit pas faire échouer
 * l'écriture principale déjà effectuée.
 */
export async function invalidateTranslations(admin, contentType, contentId) {
  try {
    await admin.from('translations').delete().match({ content_type: contentType, content_id: String(contentId) });
  } catch (err) {
    console.error('[translation] invalidation:', err.message);
  }
}
