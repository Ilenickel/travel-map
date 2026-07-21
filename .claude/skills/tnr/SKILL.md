---
name: tnr
description: Phase de non-régression (TNR) sur le code non commit du projet travel-map. À utiliser quand l'utilisateur demande une "TNR", "phase de non-reg", "non-régression", ou de vérifier en profondeur ce qui vient d'être codé avant de commit.
---

# Phase de non-régression (TNR)

Objectif : passer en revue l'ensemble du code **non commit** (`git status` / `git diff`) de façon intensive, avant tout commit.

## Étapes

1. Lister tout ce qui n'est pas commit (fichiers modifiés, ajoutés, supprimés) via `git status` et `git diff`. Ne rien ignorer, même les fichiers qui semblent mineurs.
2. Pour chaque changement, chercher les bugs potentiels : erreurs de logique, cas non gérés, mauvaise gestion d'état, fuites de mémoire/listeners, problèmes async, régressions de types.
3. Vérifier la **cohérence** entre ce qui a été demandé (contexte de la conversation / commits récents / historique de la tâche) et ce qui a réellement été implémenté. Signaler tout écart, ajout non demandé, ou fonctionnalité manquante.
4. Analyser l'impact sur le code déjà existant : est-ce que ce changement peut casser un comportement présent avant la modification ? Vérifier les appelants, les usages ailleurs dans le code, les dépendances croisées entre composants/fichiers.
5. Réfléchir aux cas particuliers et cas limites qu'un utilisateur pourrait rencontrer (valeurs vides/nulles, listes vides, données manquantes, mobile vs desktop, langues différentes, thème jour/nuit, utilisateur non connecté, permissions, réseau lent/coupé, etc.) et vérifier qu'ils sont bien anticipés/traités par le code.
6. Corriger les problèmes trouvés.
7. Pour chaque problème trouvé et corrigé, donner un **exemple concret d'utilisation sur le terrain** : décrire le protocole de test, le problème observé avant correction, et le comportement après résolution.

## Règles

- Ne pas se limiter à une lecture superficielle : lire réellement le contenu des diffs, pas seulement les noms de fichiers.
- Ne pas corriger des choses qui n'ont pas de rapport avec la TNR sans le signaler d'abord (voir règles générales du CLAUDE.md : ne pas modifier ce qui n'a pas été demandé).
- Vouvoyer l'utilisateur dans toutes les communications (règle du projet).
- Ne jamais commit ni push dans le cadre de cette skill sans validation explicite séparée.
