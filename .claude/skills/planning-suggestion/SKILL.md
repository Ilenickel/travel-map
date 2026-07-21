---
name: planning-suggestion
description: Génération ou révision de suggestions de planning de voyage (ordre des villes, planning d'une journée, enchaînement d'activités) dans travel-map. À utiliser quand l'utilisateur travaille sur l'algorithme/logique de suggestion d'itinéraire ou de planning journalier.
---

# Suggestions de planning (itinéraire et journée)

## Ordre des villes dans un itinéraire

- Ne pas enchaîner deux villes consécutives si elles sont géographiquement opposées dans le pays (aller-retour illogique).
- Garder un ordre logique basé sur le placement géographique des villes et la facilité de circulation entre elles.
- Ne pas se baser uniquement sur la distance à vol d'oiseau : prendre en compte les moyens de transport rapides (ex: TGV) qui peuvent rendre une ville plus lointaine plus facile d'accès qu'une ville plus proche mais mal desservie.

## Planning d'une journée — enchaînement des activités

- Ne pas enchaîner deux activités opposées géographiquement dans la journée ; privilégier au maximum le regroupement d'activités proches dans une même zone.
- Respecter l'ordre géographique réel des activités proches entre elles, même au sein d'une même zone : l'ordre affiché doit correspondre à un trajet cohérent sur la carte.
  - Exemple concret (Pékin) : ne pas planifier Cité Interdite → Place Tian'anmen → Colline Jingshan, car cela place la Cité Interdite en début de journée alors qu'elle est géographiquement au milieu des deux autres. Le bon ordre est Place Tian'anmen → Cité Interdite → Colline Jingshan.
- Tenir compte de la durée réelle d'une activité : si une activité dure toute la journée, ne pas la planifier uniquement le matin (ou sur un seul créneau trop court).

## Disponibilité horaire des activités

- Vérifier la disponibilité réelle d'une activité selon l'horaire avant de la planifier (ex: les temples ne sont généralement pas disponibles/ouverts le soir).
- Privilégier la planification des activités à caractère nocturne (marchés de nuit, spectacles, quartiers animés le soir, etc.) sur le créneau du soir plutôt que sur un autre moment de la journée.

## Règles générales

- Toujours croiser ces contraintes entre elles (géographie + durée + horaires d'ouverture) plutôt que de les traiter indépendamment.
- En cas de doute sur la faisabilité (transport, horaires), signaler la limite plutôt que de proposer un planning incohérent.
