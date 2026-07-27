// Cache de traduction lazy pour le contenu communautaire (destinations, lieux,
// avis) : traduit uniquement quand consulté dans une autre langue que la
// langue source, puis mémorise le résultat en base (table `translations`).
// Suit le même pattern d'appel HTTP que api/_lib/moderation.js (fetch + erreur
// custom), pour une gestion d'erreur cohérente entre les deux intégrations.
import { createHash } from 'crypto';
import { translatePlaceNameViaWikipedia } from './wikipediaPlaceName.js';

const GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2';

// Langues cibles acceptées par les routes publiques de traduction
// (get-translated-content.js, get-place-suggestions.js) : doit rester
// synchronisé avec SUPPORTED_LANGUAGES dans src/i18n/index.js. Sans cette
// liste, une route non authentifiée accepterait n'importe laquelle des 100+
// langues de Google Translate comme cible, ce qui multiplie les cache miss
// (donc les vrais appels facturés) pour un même contenu — chaque nouvelle
// langue ajoutée à l'app doit être ajoutée ICI aussi.
export const SUPPORTED_TARGET_LANGUAGES = ['fr', 'en', 'es', 'de'];

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

// Repère un texte VRAISEMBLABLEMENT français (accents ou mots grammaticaux
// courants) — utilisé UNIQUEMENT comme garde-fou avant de forcer `fr` en cas
// de détection automatique suspecte (voir getTranslatedField ci-dessous).
// Aujourd'hui (2026-07-24) tout le contenu communautaire est écrit par un
// seul utilisateur francophone, d'où ce raccourci pragmatique — mais dès que
// des lieux/avis/commentaires arriveront dans d'autres langues, ce texte
// pourra être en anglais/espagnol sans AUCUN marqueur français, et ce test
// empêche alors le forçage `fr` de s'appliquer à tort (il ne se déclenche
// que si un signal français est présent). Le jour où la langue de rédaction
// réelle est connue et stockée par contenu, ce raccourci devra être remplacé
// par cette vraie donnée plutôt que par une devinette sur le texte.
// Repéré le 2026-07-24 : une simple liste de mots-outils français (le, la,
// et, dans...) ne suffit PAS à couvrir des tags courts style "Nom +
// adjectif" ("Ville cyberpunk", "Ville lumière") qui ne contiennent AUCUN
// mot grammatical à reconnaître — d'où l'inversion de la logique : on part
// du principe que c'est du français (vrai à 100% aujourd'hui, un seul
// contributeur francophone) SAUF preuve contraire évidente (marqueur propre
// à une autre langue : ñ/¿/¡ espagnol, ä/ö/ü/ß allemand, script non latin).
// Cette inversion est un compromis assumé pour aujourd'hui : elle protège
// contre les langues clairement identifiables par leurs caractères propres,
// mais PAS contre un texte anglais/espagnol sans caractère distinctif (ex.
// "Cyberpunk city" pourrait être re-deviné comme français à tort). À
// remplacer dès qu'une vraie langue de rédaction par contenu est connue.
function looksFrench(text) {
  // Marqueurs d'une AUTRE langue clairement identifiable : dans ce cas
  // seulement, on renonce au forçage `fr`.
  if (/[ñ¿¡]/i.test(text)) return false; // espagnol
  if (/[äöüß]/i.test(text)) return false; // allemand
  if (/[^\u0000-\u024F\s]/.test(text)) return false; // script non latin (CJK, cyrillique, arabe...)
  return true;
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

  let { translatedText, detectedSourceLanguage } = await callGoogleTranslate(sourceText, targetLanguage, sourceLanguage);

  // Filet de sécurité contre un faux positif d'auto-détection de Google
  // Translate : sur un texte court contenant un mot anglais/international
  // (ex. "Ville cyberpunk"), Google devine parfois à tort que le texte est
  // DÉJÀ dans la langue cible et le renvoie inchangé (detectedSourceLanguage
  // === targetLanguage). Repéré le 2026-07-24 : "Ville cyberpunk" restait
  // affiché tel quel en anglais alors que la version espagnole traduisait
  // bien. Sans ce filet, ce résultat non traduit serait mis en cache pour
  // toujours (même source_hash ensuite). On ne retente qu'une fois, en
  // forçant `fr`, et SEULEMENT si le texte contient un marqueur français
  // repérable (voir looksFrench) : sans cette double condition, un futur
  // texte communautaire réellement déjà en anglais/espagnol (une fois le
  // site multilingue en pratique, pas seulement en configuration) serait à
  // tort retraduit depuis un faux `fr` supposé, ce qui le corromprait.
  if (!sourceLanguage && detectedSourceLanguage === targetLanguage && translatedText === sourceText && targetLanguage !== 'fr' && looksFrench(sourceText)) {
    try {
      const retry = await callGoogleTranslate(sourceText, targetLanguage, 'fr');
      if (retry.translatedText && retry.translatedText !== sourceText) {
        translatedText = retry.translatedText;
        detectedSourceLanguage = 'fr';
      }
    } catch {
      // Retentative best-effort : en cas d'échec, on garde le résultat du premier appel.
    }
  }

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
 * Traduit le NOM d'un lieu communautaire (destination_places /
 * static_destination_places) via Wikipédia (voir wikipediaPlaceName.js),
 * jamais via Google Translate : un nom de lieu est un nom propre, pas du
 * texte descriptif — Google le traduisait littéralement ("High Line" →
 * "Ligne haute"), ce qui n'est pas son vrai nom même consulté en français.
 * Même cache permanent que getTranslatedField (table `translations`), pour
 * ne jamais réinterroger Wikipédia/Wikidata deux fois pour le même lieu/
 * langue. Si Wikipédia n'a aucune correspondance fiable, on met en cache le
 * nom D'ORIGINE (comme getTranslatedField le fait déjà pour un texte déjà
 * dans la langue cible) : mieux vaut garder le nom tel quel que d'inventer
 * une traduction, et ça évite de refaire la même recherche infructueuse à
 * chaque consultation.
 * @param {Object} params
 * @param {import('@supabase/supabase-js').SupabaseClient} params.admin
 * @param {string} params.contentType
 * @param {string} params.contentId
 * @param {string} params.field
 * @param {string} params.sourceText
 * @param {string} params.targetLanguage
 * @returns {Promise<string>}
 */
export async function getTranslatedPlaceName({ admin, contentType, contentId, field, sourceText, targetLanguage }) {
  if (!sourceText || !sourceText.trim()) return sourceText;

  const hash = hashText(sourceText);

  const { data: cached } = await admin
    .from('translations')
    .select('translated_text, source_hash')
    .match({ content_type: contentType, content_id: String(contentId), field, language: targetLanguage })
    .maybeSingle();

  if (cached && cached.source_hash === hash) return cached.translated_text;

  // Pas de quota Google à réserver ici : Wikipédia/Wikidata sont des
  // endpoints publics gratuits, sans clé ni facturation au caractère.
  const translated = await translatePlaceNameViaWikipedia(sourceText, targetLanguage);
  const translatedText = translated || sourceText;

  await admin.from('translations').upsert(
    {
      content_type: contentType,
      content_id: String(contentId),
      field,
      language: targetLanguage,
      translated_text: translatedText,
      source_language: null,
      source_hash: hash,
      translated_at: new Date().toISOString(),
    },
    { onConflict: 'content_type,content_id,field,language' }
  );

  return translatedText;
}

/**
 * Traduit le NOM d'une activité de modèle de planning (trip_template_activities) :
 * contrairement à un nom de lieu communautaire (getTranslatedPlaceName), une
 * activité éditoriale n'est PAS toujours un nom propre repérable sur
 * Wikipédia — à côté de vrais lieux ("Cité Interdite"/"Forbidden City"), on y
 * trouve aussi des plats ("hotpot"), des lieux composés/descriptifs ("Maison
 * de thé du parc du Peuple") ou de simples activités ("Balade en vélo").
 * Wikipédia seul laisserait ces cas-là intacts (aucune correspondance
 * fiable trouvée) — on retombe alors sur Google Translate comme second
 * essai, plutôt que d'afficher tel quel un texte descriptif non traduit.
 * Ordre : 1) Wikipédia (gratuit, fiable pour les vrais noms propres,
 * n'invente jamais une traduction hasardeuse d'un lieu) ; 2) si rien trouvé,
 * Google Translate (quota mensuel, comme getTranslatedField) ; 3) si les
 * deux échouent/indisponibles, repli sur le texte d'origine.
 * @param {Object} params
 * @param {import('@supabase/supabase-js').SupabaseClient} params.admin
 * @param {string} params.contentType
 * @param {string} params.contentId
 * @param {string} params.field
 * @param {string} params.sourceText
 * @param {boolean} [params.isEditorial] - true pour un itinéraire ÉDITORIAL
 *   (toujours saisi en français par l'équipe) : force la langue source à
 *   'fr' pour le repli Google Translate UNIQUEMENT (Wikipédia n'en a pas
 *   besoin). Sans ce forçage, l'auto-détection de Google Translate croit
 *   parfois que ces noms courts et saturés de noms propres ("Tour Eiffel et
 *   Champ de Mars") sont déjà en anglais (peu de mots grammaticaux à
 *   reconnaître) et les renvoie tels quels puisque source == target — bug
 *   déjà rencontré et corrigé une première fois avant l'introduction de
 *   Wikipédia (voir l'historique de resolveSourceLanguage). Absent/`false`
 *   pour un modèle communautaire : aucun indice fiable sur sa langue,
 *   laisser Google Translate auto-détecter.
 * @param {string} params.targetLanguage
 * @returns {Promise<string>}
 */
export async function getTranslatedActivityName({ admin, contentType, contentId, field, sourceText, isEditorial = false, targetLanguage }) {
  if (!sourceText || !sourceText.trim()) return sourceText;

  const hash = hashText(sourceText);

  const { data: cached } = await admin
    .from('translations')
    .select('translated_text, source_hash')
    .match({ content_type: contentType, content_id: String(contentId), field, language: targetLanguage })
    .maybeSingle();

  if (cached && cached.source_hash === hash) return cached.translated_text;

  const viaWikipedia = await translatePlaceNameViaWikipedia(sourceText, targetLanguage);
  let translatedText = viaWikipedia;
  let sourceLanguage = null;

  if (!translatedText) {
    // Pas de correspondance Wikipédia : repli Google Translate, best-effort —
    // une indisponibilité (quota, réseau) ne doit pas faire échouer l'import,
    // juste laisser le texte d'origine.
    try {
      const withinQuota = await reserveQuota(admin, sourceText.length);
      if (withinQuota) {
        const result = await callGoogleTranslate(sourceText, targetLanguage, isEditorial ? 'fr' : null);
        translatedText = result.translatedText;
        sourceLanguage = result.detectedSourceLanguage;

        // Même filet anti-faux-positif que getTranslatedField (voir
        // looksFrench) : un modèle COMMUNAUTAIRE (isEditorial=false) n'a pas
        // de langue source forcée ci-dessus, donc le même risque de
        // détection auto ratée s'applique ("Ville cyberpunk" resté non
        // traduit en anglais). Ne se déclenche que si un marqueur français
        // est repérable dans le texte — sinon, un futur contenu déjà écrit
        // dans une autre langue par un autre contributeur n'est pas touché.
        if (!isEditorial && sourceLanguage === targetLanguage && translatedText === sourceText && targetLanguage !== 'fr' && looksFrench(sourceText)) {
          const retry = await callGoogleTranslate(sourceText, targetLanguage, 'fr');
          if (retry.translatedText && retry.translatedText !== sourceText) {
            translatedText = retry.translatedText;
            sourceLanguage = 'fr';
          }
        }
      }
    } catch (err) {
      console.error('[translation] repli Google Translate échoué:', err.message);
    }
  }


  translatedText = translatedText || sourceText;

  await admin.from('translations').upsert(
    {
      content_type: contentType,
      content_id: String(contentId),
      field,
      language: targetLanguage,
      translated_text: translatedText,
      source_language: sourceLanguage,
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
