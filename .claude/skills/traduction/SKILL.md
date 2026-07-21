---
name: traduction
description: Ajout ou mise à jour de traductions dans travel-map (fr/en/es et toute nouvelle langue). À utiliser quand l'utilisateur demande d'ajouter une langue, de traduire, ou de compléter des fichiers de traduction manquants.
---

# Ajout / mise à jour de traduction

Le projet gère l'i18n dans `src/i18n/locales/<langue>/` avec des fichiers JSON par domaine (`app.json`, `common.json`, `planning.json`, etc.), plus des traductions ponctuelles ailleurs dans le code (ex: `src/lib/tagTranslations.js`).

## Étapes

1. Identifier tous les fichiers concernés par une traduction : tous les `.js`/`.json` sous `src/i18n/locales/` pour chaque langue existante (actuellement `fr`, `en`, `es`), ainsi que tout fichier `.js` contenant du texte affiché à l'utilisateur (boutons, menus, labels, questions, messages d'erreur, tooltips, placeholders, etc.) — pas seulement les fichiers de locale dédiés.
2. Prendre la version française comme référence de sens (langue source du produit), et comparer avec les traductions `en`/`es` déjà en place pour capter le ton et le niveau de langue utilisés jusqu'ici.
3. Traduire en visant le **sens et l'usage naturel**, jamais du mot à mot :
   - Reformuler pour que la phrase sonne naturelle dans la langue cible.
   - Utiliser des expressions ou tournures idiomatiques typiques de la langue cible quand c'est plus naturel qu'une traduction littérale.
   - Adapter les formulations courtes (boutons, labels de menu) au registre habituellement utilisé dans les UI de cette langue.
   - Garder la cohérence terminologique avec ce qui existe déjà (mêmes mots pour les mêmes concepts d'un fichier à l'autre).
4. Traduire l'intégralité des clés/fichiers concernés, ne pas laisser de clés partielles ou de valeurs restées en français par oubli.
5. Pour une nouvelle langue : créer le dossier `src/i18n/locales/<code langue>/` avec la même structure de fichiers que `fr`/`en`/`es`, enregistrer la langue là où les langues disponibles sont déclarées (voir `src/i18n/index.js`), et traduire l'ensemble des clés existantes.
6. Vérifier qu'aucune clé n'est orpheline ou manquante par rapport aux autres langues (mêmes clés présentes partout).

## Règles

- Vouvoyer l'utilisateur dans les communications, mais respecter le registre habituel du produit (tutoiement/vouvoiement) à l'intérieur des traductions elles-mêmes — se baser sur l'existant.
- Ne pas modifier la structure des fichiers JSON (clés, imbrication) sauf si demandé.
