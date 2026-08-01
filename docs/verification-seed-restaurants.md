# Vérification du seed restaurants — méthode complète

> Document de passation. Il décrit **tout** le chantier de fiabilisation de
> `supabase/seed_restaurants.sql` : le format des données, les outils, le
> processus de vérification ligne par ligne, les règles de tags, le catalogue des
> erreurs déjà rencontrées, et ce qui reste à faire.
>
> Il est écrit pour qu'un agent qui n'a jamais vu ce chantier puisse le reprendre
> sans rien redécouvrir. Lisez-le en entier avant de toucher au fichier.
>
> Dernière mise à jour : 1er août 2026.

---

## 1. Objectif

Le fichier `supabase/seed_restaurants.sql` alimente la table
`static_destination_places` avec des restaurants éditoriaux (`user_id` NULL),
proposés au voyageur sur chaque destination du site.

Le critère de sélection retenu est : **les restaurants les plus connus et les
plus recommandés d'une ville, sur plusieurs gammes de prix.**

Le chantier consiste à garantir, pour chacune des 697 lignes :

1. que l'établissement **existe encore** (pas de fermeture) ;
2. que son **adresse** est exacte et complète (numéro de rue, code postal) ;
3. que ses **coordonnées** le placent au bon endroit sur la carte ;
4. que ses **tags de cuisine** décrivent réellement ce qu'il sert — **c'est le
   point le plus important et le plus souvent faux** ;
5. que sa **gamme de prix** (1/2/3) est plausible ;
6. qu'il porte un **`geoapify_place_id`** permettant de détecter les doublons
   quand un membre propose le même restaurant.

### 1.1 Ce qui n'allait pas dans la première version — À LIRE EN PREMIER

La version encore commitée dans git (`git show HEAD:supabase/seed_restaurants.sql`,
552 lignes) avait une **structure irréprochable** : zéro ligne malformée, zéro
coordonnée manquante, zéro tag hors liste prédéfinie, zéro ligne sans tag.

Le problème n'était donc **pas** la génération du fichier. Il était dans la
**complétude et l'exactitude du contenu** :

| Défaut | Lignes | Part |
|---|---:|---:|
| Sans `geoapify_place_id` → **la détection de doublons ne pouvait pas fonctionner** | 272 | **49 %** |
| Sans tag de cuisine nationale → **invisibles au filtre par cuisine** | 300 | **54 %** |
| Adresse sans numéro de rue → **le voyageur ne trouve pas l'établissement** | 173 | **31 %** |
| Fichier terminé par `rollback;` → **le script s'exécutait sans rien importer** | — | — |

S'y ajoutent, découverts par la vérification web :

- **Des établissements fermés.** Sur les 140 premières lignes contrôlées,
  4 avaient fermé et 3 restaient ambigus — soit environ **3 % de fermetures**.
- **Des sélections faibles.** 43 lignes ont été remplacées par des
  établissements plus connus ou mieux notés, à gamme de prix équivalente.
- **Des tags faux, pas seulement manquants** : `coffee` sur des restaurants
  (13 cas), `fast-food` sur des restaurants assis, `seafood` sur un bistrot à
  steak frites, `vegetarian` sur un restaurant dont le bouillon est à l'os de
  porc. Voir §6.
- **Des adresses fausses**, pas seulement incomplètes : une rue de Miami pour un
  restaurant de Las Vegas, « Commercial Street » pour « Commercial Quay ».

> **Ce que cela signifie concrètement.** Un fichier peut passer tous les
> contrôles automatiques et rester inutilisable. `audit.mjs` valide la
> **forme** ; seule la vérification web valide le **fond**. Les deux sont
> obligatoires.

### 1.2 Les interdits

Chacun correspond à une erreur réellement commise, par moi ou dans la v1.

| ❌ Interdit | Pourquoi |
|---|---|
| **Écrire une donnée de mémoire** — adresse, horaire, cuisine | 5 adresses écrites ainsi, **3 étaient fausses** (§7.5). Toute donnée écrite doit venir d'une source consultée dans le tour en cours. |
| **Corriger en masse** (« tous les restaurants de France → `french` ») | Faux : Flaveur à Nice fait de la cuisine du monde, Jan est d'inspiration sud-africaine. Consigne explicite de l'utilisateur : cas par cas. |
| **Mettre plusieurs noms dans une même recherche** | Le moteur ne répond que sur le premier et ignore les autres (§4.2). **Un établissement = une recherche.** |
| **Inventer un slug de tag** | `audit.mjs` le rejette en BLOQUANT. Pour en créer un, procédure obligatoire en 5 fichiers (§5.4). |
| **Ajouter un tag « par défaut » du pays** | Le tag national se met si l'établissement **sert** cette cuisine, pas s'il s'y trouve (§5.1). |
| **Ajouter plus de 3 tags** | Consigne de sobriété de l'utilisateur. Pas de tag sans preuve explicite. |
| **Renommer un établissement** | Le nom sert à l'appariement Geoapify ; le changer casse la détection de doublons. Signaler, ne pas corriger (§6.7). |
| **Supprimer une ligne** | Décision de l'utilisateur, jamais de l'agent. |
| **Utiliser `isSimilar()` pour identifier un établissement** | Conçu pour la détection de doublons, donc trop permissif : a produit « Barba » → « Barka » (§7.1). |
| **Indexer un cache par numéro de ligne** | A produit 53 divergences absurdes (§7.3). Toujours indexer par `place_id`. |
| **Terminer une itération avec un BLOQUANT dans `audit.mjs`** | Le fichier devient inimportable. |
| **Laisser `rollback;` en fin de fichier** | Le seed n'importe alors rien. Doit être `commit;`. |
| **Traiter une ligne sans la consigner dans `activite.json`** | Elle sera repassée, ou pire, comptée comme faite sans l'être. |
| **Commiter ou pousser sans accord explicite** | Règle de `CLAUDE.md`. **Demander sur quelle branche avant chaque commit.** Un accord pour commit ne vaut pas accord pour push. |

### 1.3 La checklist, ligne par ligne

Pour **chaque** ligne, les sept contrôles ci-dessous. Une seule recherche web
bien formulée en fournit la matière (§4.3).

| # | Contrôle | Ce qui vaut preuve | Si non concluant |
|---|---|---|---|
| 1 | **Activité** — l'établissement existe-t-il encore ? | horaires publiés récemment, avis daté de l'année, présence au guide Michelin de l'année, créneaux disponibles sur OpenTable | consigner `a_verifier` avec ce qui a été trouvé — **ne pas supprimer** |
| 2 | **Adresse** — exacte et complète ? | site officiel en priorité, sinon office de tourisme ou Yelp | compléter ce qui est sûr, consigner le reste |
| 3 | **Coordonnées** — cohérentes avec l'adresse ? | comparer le quartier/le code postal au point stocké | si le libellé contredit la coordonnée, **c'est le libellé qui est faux 9 fois sur 10** (cas The Kitchin) |
| 4 | **Tags de type** — décrivent-ils l'établissement ? | la carte réelle, pas le nom de l'enseigne | retirer un tag faux est aussi une correction (§5.3) |
| 5 | **Tag de cuisine nationale** | ce que la source dit qu'il **sert** | assumer l'absence et la consigner dans `sans_tag_national_assume` |
| 6 | **Gamme de prix** (1/2/3) | fourchette de prix citée par une source | signaler le doute dans `_doutes_gamme`, ne pas modifier sans chiffre |
| 7 | **`geoapify_place_id`** présent ? | — | 58 lignes n'en ont pas ; c'est couvert par le repli de `api/places.js` (§10.2), ne pas bloquer dessus |

**Sources contradictoires** — privilégier la plus récente et la plus proche de
l'établissement, et **consigner le doute** plutôt que trancher (§4.4).

### 1.4 Les trois jugements où l'on se trompe le plus

Les contrôles du §1.3 sont mécaniques sauf sur trois points, qui demandent une
décision. Ce sont ceux qui produisent des erreurs même quand la recherche web a
été faite correctement. Chacun a ici un **test explicite**.

#### A. Vrai café, ou restaurant mal tagué ?

> **Ne jamais décider d'après le nom de l'enseigne. Regarder la carte.**

C'est le piège le plus productif du fichier : la première passe avait trouvé
**13 lignes taguées `coffee` qui étaient des restaurants** (§6.1). Une seconde
passe exhaustive a montré qu'il ne fallait surtout pas limiter le contrôle aux
lignes où `coffee` est seul : les combinaisons avec `brunch`, une cuisine
nationale ou `gastronomic` peuvent être tout aussi trompeuses.

| Indice | → vrai café | → restaurant |
|---|---|---|
| Carte | boissons, pâtisseries, petit-déjeuner | plats principaux servis à table |
| Horaires | ferme en fin d'après-midi | service du midi **et** du soir |
| Catégorie Yelp | *Cafes*, *Tea Rooms*, *Coffee* | *Indonesian*, *Spanish*, *Seafood*… |
| Réservation | rarement | OpenTable / TheFork actifs |

Exemples tranchés dans chaque sens :

- **Restaurants** malgré le nom : Cafe Kadijk (indonésien — rendang, satay),
  Els Quatre Gats (63 plats catalans), Cafe Royal (bar à huîtres),
  Cafe Piccante (friterie), Café Bar Las Teresas (bar à tapas).
- **Vrais cafés** confirmés : La Biela (café notable de Buenos Aires),
  Killiney Kopitiam, Grand Café Orient, Lühmanns Teestube, Café Chrysander,
  Inoda Coffee, Café Du Monde.

**Cas particulier — le style n'est pas la cuisine.** Lühmanns Teestube sert un
Cornish Cream Tea à Hambourg : c'est une **ambiance anglaise**, pas de la cuisine
britannique servie en Allemagne. Pas de tag `british`. Sinon tout bar à tapas
hors d'Espagne deviendrait `spanish`.

**L'enjeu n'est jamais de supprimer la ligne.** Les vrais cafés populaires
restent dans le fichier (§11.1) ; ce contrôle sert uniquement à leur donner le
bon tag. Un restaurant tagué `coffee` est trompeur ; un café tagué `coffee` est
juste.

#### B. Assumer l'absence de tag national

> **Si la source ne nomme pas une cuisine nationale, ne pas en inventer une.**

Le réflexe fautif est de déduire le tag du pays d'implantation. Test :

- La source écrit-elle **explicitement** « cuisine tchèque », « italien »,
  « néerlandaise » ? → mettre le tag.
- Écrit-elle « créative », « moderne », « internationale », « du monde »,
  « New American », « personnelle » ? → **pas de tag**, et c'est une réponse
  valide, pas un échec.

Cas tranchés en « pas de tag » : **Field** (Michelin : créative),
**Momofuku** (Yelp : New American), **Flore** (Michelin : personnelle, alors que
**Rijks**, deux tables étoilées de la même ville, reçoit `dutch` parce que le
Michelin parle des « influences qui caractérisent la cuisine néerlandaise »),
**De Plantage** (sud-européen et nord-africain mêlés), **David Bann**,
**Pastva**, **Maitrea**, **The Eatery**.

⚠️ **Une absence assumée DOIT être consignée** dans
`_tags_cuisine_manquante.sans_tag_national_assume` avec sa raison. Sans cela, la
ligne remonte indéfiniment dans la liste « à traiter » et sera repassée en
boucle par chaque agent suivant.

#### C. La source parle-t-elle bien de NOTRE établissement ?

> **Une information ne vaut que si la source cite l'adresse de notre ligne.**

Le piège joue dans les deux sens :

- **Faux positif de fermeture** — une fermeture annoncée peut concerner une
  **autre succursale**. *Leb-i Derya* : c'est celle du Richmond sur Istiklal qui
  a fermé, pas celle de Kumbaracı. *Eggslut* : ce sont les adresses de
  **Singapour** qui ont fermé, pas Las Vegas. Dans les deux cas, conclure trop
  vite aurait supprimé un restaurant ouvert.
- **Fausse confirmation** — plusieurs comptoirs d'une même enseigne :
  *Julia's* a plusieurs comptoirs dans les gares d'Amsterdam, *Alice Pizza*,
  *Polakowski* et *Lanchonete da Cidade* sont des chaînes. Confirmer « c'est
  ouvert » depuis une autre succursale ne prouve rien sur la nôtre.

**Méthode :** croiser le numéro de rue **et** le code postal de la source avec
ceux de la ligne. En cas d'ambiguïté persistante, se fier aux **coordonnées
stockées** (elles se sont révélées justes bien plus souvent que les libellés) et
consigner le doute plutôt que de trancher.

---

## 2. Le fichier cible

### 2.1 Format d'une ligne

Chaque ligne de la liste `VALUES` suit exactement ce gabarit :

```sql
    ('CC', 'destId', 'nom', name_latin|null, array['tag', ...]::text[], budget, 'adresse', lat, lng, 'geoapify_place_id'|null),
```

| Position | Champ | Règles |
|---|---|---|
| 1 | `country_code` | ISO-3 majuscules, doit exister dans `src/data/<pays>.js` |
| 2 | `destination_id` | doit exister dans le tableau `destinations` du pays |
| 3 | `name` | nom dans l'écriture locale (japonais, coréen, chinois, grec… en VO) |
| 4 | `name_latin` | translittération, **`null` si le nom est déjà latin** |
| 5 | `cuisine_tags` | tableau de slugs, voir §5 |
| 6 | `budget_level` | `1` = €, `2` = €€, `3` = €€€ |
| 7 | `address` | adresse postale complète et lisible par un humain |
| 8-9 | `lat`, `lng` | décimaux, jamais `null` (sinon le point n'apparaît pas sur la carte) |
| 10 | `geoapify_place_id` | identifiant Geoapify, `null` toléré (voir §6.2) |

Les apostrophes dans les chaînes sont doublées (`'L''Atelier'`).

Le fichier se termine par `commit;` (et non `rollback;` — piège historique :
la version d'origine ne committait pas).

### 2.2 Comment les données sont utilisées côté site

Il est utile de savoir ce qui casse si un champ est faux :

- **`lat`/`lng`** : `src/components/RestaurantExplorer.jsx` affiche la carte avec
  **Leaflet et des tuiles OpenStreetMap**, et trace les points depuis `lat`/`lng`
  stockés. Il filtre sur `lat != null && lng != null`. Geoapify **n'intervient
  pas** à l'affichage — donc de mauvaises coordonnées mettent un point faux sur
  la carte sans qu'aucune erreur ne soit levée.
- **`address`** : purement affichée. C'est ce que le voyageur lit et recopie.
  Une adresse fausse avec des coordonnées justes est **silencieuse** — d'où
  l'importance de la contrôler explicitement (§4.4).
- **`geoapify_place_id`** : utilisé par `api/places.js` pour refuser un doublon
  quand un membre ajoute un restaurant déjà présent.
- **`cuisine_tags`** : alimentent le filtre par cuisine. Un tag manquant rend
  l'établissement **invisible** au filtre correspondant ; un tag faux le fait
  apparaître au mauvais endroit.
- Les lignes éditoriales ont `user_id` NULL, et `api/places.js` (contrôle
  `data.user_id !== user.id` → 403) empêche tout membre de les modifier.
  **Une erreur dans ce fichier ne sera donc jamais corrigée par la communauté.**

---

## 3. Outils

### 3.1 Emplacement

Les scripts et le fichier de suivi sont dans **`docs/seed-verification/`**, dans
le dépôt. Ils y ont été sortis du scratchpad temporaire de session, qui
disparaît à la fermeture — sans quoi toute la traçabilité aurait été perdue et
les lignes déjà vérifiées auraient été repassées.

```
docs/seed-verification/
├── activite.json            ← LE FICHIER DE SUIVI (§8) — la mémoire du chantier
├── perimetre-fige-2026-08-01.json  ← les 195 lignes déjà vérifiées / les 502 à faire
├── audit.mjs                ← contrôle local, à lancer après chaque modification
├── check.mjs
├── check-address-match.mjs
├── screen-moves.mjs         (abandonné, voir §7.4)
├── verify-ids.mjs
├── backfill.mjs / backfill2.mjs
├── emit.mjs / insert.mjs    (pour ajouter des restaurants)
└── *-cache.json             caches des campagnes Geoapify
```

Les scripts se lancent depuis la racine du dépôt :

```bash
node docs/seed-verification/audit.mjs | head -30
```

Ils lisent leurs caches depuis leur propre répertoire (`import.meta.dirname`),
et le SQL par chemin absolu — vérifier la constante `ROOT` en tête de fichier si
le dépôt est déplacé.

### 3.2 `audit.mjs` — contrôle local, à lancer après CHAQUE modification

Purement local, aucun appel réseau. Il relit le SQL et vérifie :

- que chaque ligne est **bien formée** (le regex du §2.1) ;
- que `country_code`/`destination_id` existent réellement dans `src/data/` ;
- que **chaque tag est un slug prédéfini** de `src/lib/cuisineTags.js` →
  classé **BLOQUANT** ;
- la distance entre les coordonnées et le centre de la destination →
  **MAJEUR** au-delà d'un seuil ;
- les doublons de nom au sein d'une même destination ;
- des statistiques : adresses sans numéro, lignes sans `geoapify_place_id`.

Usage :

```bash
node docs/seed-verification/audit.mjs | head -30
```

**Règle absolue : ne jamais terminer une itération avec un BLOQUANT.** C'est
ainsi qu'on a rattrapé l'ajout du tag `mediterranean` sur El Turco, qui n'existe
pas dans la liste prédéfinie.

Les **15 MAJEUR actuels sont des faux positifs connus** : ce sont des
destinations multi-villes (Jaipur rattaché à IND/1, Miami à USA/4, etc.) où le
« centre » de la destination est loin des restaurants. Ne pas chercher à les
corriger.

### 3.3 Autres scripts

| Script | Rôle | Statut |
|---|---|---|
| `check.mjs` | contrôle gammes / tags / doublons | utilitaire |
| `check-address-match.mjs` | compare l'adresse écrite à celle de l'objet Geoapify pointé par le `place_id` | **utile, voir le piège §7.3** |
| `backfill.mjs`, `backfill2.mjs` | remplissage des `geoapify_place_id` | terminé |
| `verify-ids.mjs` | interroge Place Details sur chaque `place_id` | terminé |
| `screen-moves.mjs` | détecteur de déménagements | **abandonné, voir §7.4** |
| `emit.mjs` | génère des lignes SQL depuis un JSON de candidats | pour ajouter des restaurants |
| `insert.mjs` | insère un bloc de lignes avant la parenthèse fermante du `VALUES` | pour ajouter des restaurants |

---

## 4. Le processus de vérification, ligne par ligne

### 4.1 Choix du lot

On travaille **ville par ville** (couple `country_code`/`destination_id`), pas
ligne par ligne au hasard. Deux raisons : le contexte d'une ville se réutilise
d'une recherche à l'autre, et cela permet de clore proprement une destination
dans le fichier de suivi.

Pour lister les villes ayant le plus de lignes à traiter :

```bash
node -e "
const fs=require('fs');
const world=[...fs.readFileSync('src/lib/cuisineTags.js','utf8')
  .matchAll(/slug: '([^']+)', group: 'world'/g)].map(m=>m[1]);
const by={};
fs.readFileSync('supabase/seed_restaurants.sql','utf8').split(/\r?\n/).forEach((l,i)=>{
  const m=l.match(/^\s*\('([A-Z]{3})', '(\d+)', '((?:[^']|'')*)', (?:null|'(?:[^']|'')*'), array\[([^\]]*)\]::text\[\], (\d),/);
  if(!m)return;
  const t=[...m[4].matchAll(/'([^']+)'/g)].map(x=>x[1]);
  if(t.some(x=>world.includes(x)))return;
  const k=m[1]+'/'+m[2];(by[k]=by[k]||[]).push('L'+(i+1)+' '+m[3]+' ['+t.join(', ')+']');
});
Object.entries(by).sort((a,b)=>b[1].length-a[1].length).slice(0,5)
  .forEach(([k,v])=>{console.log('== '+k+' ('+v.length+')');v.forEach(x=>console.log('   '+x));});
"
```

### 4.2 Une recherche web par établissement

**Règle apprise à la dure : UN SEUL nom d'établissement par recherche.**

On a d'abord tenté des recherches groupées de 5 à 6 noms pour économiser les
appels. Le moteur ne répond que sur **le premier nom** et ignore les autres, ce
qui gonflait artificiellement la liste des « à vérifier ». Réduit à 2-3 noms,
le problème persistait. À un nom par recherche, chaque recherche conclut.

Forme de requête qui marche bien — nom + ville + rue + un mot sur ce qu'on
cherche, **dans la langue du pays** quand c'est possible :

```
"Kantýna" Praha Ambiente řeznictví menu tatarák guláš
"Cafe Kadijk" Amsterdam Kadijksplein 5 Indonesian restaurant menu open
Wierzynek Kraków Rynek Główny 16 restauracja kuchnia polska otwarte 2026
```

Chercher dans la langue locale change beaucoup la qualité des résultats : c'est
en cherchant en tchèque qu'on obtient la carte réelle de Café Louvre (guláš,
svíčková) et donc la preuve du tag `czech`.

### 4.3 Ce qu'on extrait de chaque recherche

Une seule recherche donne **quatre informations** à la fois, il faut penser à
toutes les exploiter :

1. **L'établissement est-il ouvert ?** — horaires cités, avis récents (« Updated
   July 2026 » sur Yelp), présence au guide Michelin de l'année.
2. **Quelle cuisine sert-il ?** — c'est ce qui décide des tags.
3. **Quelle est son adresse exacte ?** — numéro, code postal, parfois l'étage.
4. **Quel est son ordre de prix ?** — pour recouper la gamme.

C'est le gain de méthode le plus important du chantier : au début, activité et
tags étaient traités en deux passes séparées. Les fusionner divise le travail
par deux et **fait tomber des erreurs d'adresse qu'aucune des deux passes ne
cherchait**.

### 4.4 Sources et fiabilité

Classées par confiance décroissante :

| Source | Usage | Réserve |
|---|---|---|
| **Site officiel du restaurant** | adresse, carte, horaires | fait autorité sur le nom et l'adresse |
| **Guide Michelin** (`guide.michelin.com`) | existence, étoile de l'année, type de cuisine | excellent signal d'activité |
| **Office de tourisme** (prague.eu, visitdubai.com, visitlasvegas.com, iamsterdam.com, myswitzerland.com, barcelonaturisme.com) | description de cuisine fiable et neutre | |
| **Yelp** | catégorie de cuisine + date de mise à jour | la mention « Updated July 2026 » est un bon indicateur d'activité |
| **Tripadvisor / OpenTable** | activité, réservations disponibles | OpenTable affichant des créneaux = preuve forte d'ouverture |
| Presse locale, blogs food | contexte, historique | à recouper |
| **Annuaires agrégés** (restaurantguru, findglocal, wanderlog…) | dernier recours | **recopient souvent de vieilles données** |

**Contradictions entre sources** : elles arrivent. Exemples rencontrés —
The Rooftop Guide donnait Leb-i Derya « fermé » alors que Yelp (mai 2026) et
Tripadvisor le donnaient actif ; il s'agissait en fait d'une **autre succursale**
(celle du Richmond sur Istiklal) réellement fermée. En cas de contradiction :
privilégier la source la plus récente et la plus proche de l'établissement, et
**noter le doute dans le fichier de suivi** plutôt que de trancher au jugé.

### 4.5 Application de la correction

Modifications ponctuelles avec l'outil Edit, en ciblant un motif unique :

```
old: 'Kantýna', null, array['burger']::text[]
new: 'Kantýna', null, array['czech', 'grill']::text[]
```

Pour plusieurs lignes d'un coup, un script Python avec **assertion d'unicité**
(indispensable : un motif qui matche deux fois corromprait deux lignes) :

```python
import io
p='supabase/seed_restaurants.sql'
s=io.open(p,encoding='utf-8').read()
subs=[
 ("'Tuju', null, array['gastronomic']::text[]",
  "'Tuju', null, array['gastronomic', 'brazilian']::text[]"),
]
for a,b in subs:
    assert s.count(a)==1, a          # ← ne jamais retirer cette ligne
    s=s.replace(a,b)
io.open(p,'w',encoding='utf-8',newline='\n').write(s)
```

Attention à `newline='\n'` : le fichier doit rester en fins de ligne Unix.

Puis **systématiquement** : `node audit.mjs | head -5` pour vérifier zéro
BLOQUANT.

### 4.6 Consignation

Chaque ligne traitée est écrite dans `activite.json` (§8). **Ne jamais traiter
une ligne sans la consigner** : c'est le seul moyen de ne pas la repasser.

---

## 5. Les règles de tags

Les tags sont la donnée que l'utilisateur a explicitement désignée comme **« TRÈS
IMPORTANTE »**. Ce sont aussi celles où l'on a trouvé le plus d'erreurs.

### 5.1 La règle du tag national

> **On ajoute le tag de cuisine nationale seulement si l'établissement sert la
> cuisine du pays — pas parce qu'il s'y trouve.**

Conséquences pratiques :

- Une pizzeria à Rome → `italian` **oui** (la pizza est de la cuisine italienne).
- Un glacier à Rome → `italian` **non** : `ice-cream` le décrit déjà, ajouter
  `italian` noierait le filtre « cuisine italienne » sous les glaciers.
- Une churrería à Madrid → `spanish` **oui**, parce qu'elle n'avait que `coffee`,
  ce qui la faisait passer pour un simple café alors que les churros con
  chocolate sont sa seule offre et une spécialité espagnole.

La différence entre ces deux derniers cas : **le glacier a déjà un tag de type
qui le décrit, la churrería n'en avait pas.**

### 5.2 Sobriété

> **Deux ou trois tags suffisent. Pas de tag sans preuve explicite dans une
> source.**

Consigne directe de l'utilisateur : *« il faut rajouter ça au cas par cas et pas
en masse pour pas se tromper, mais il ne faut pas trop mettre de tags non plus. »*

**Interdiction formelle de correction en masse.** On a envisagé de déduire le
tag national du pays pour les 275 lignes concernées : c'est faux (Flaveur à Nice
fait de la cuisine du monde, Jan est d'inspiration sud-africaine). Chaque ligne
passe par une recherche.

### 5.3 Retirer un tag est aussi une correction

Ne pas se contenter d'ajouter. Tags retirés à ce jour, chacun sur preuve :

- `vegan` sur **Breka Bakery** — HappyCow : « on ne peut pas y faire un vrai
  repas vegan, la sélection est limitée » ;
- `vegan` sur **A Ma Maison** — le restaurant *adapte* ses plats sur demande, ce
  qui ne fait pas une table vegan ;
- `vegetarian` sur **Soup Curry GARAKU** — les sources japonaises confirment un
  bouillon de carcasse de poulet et d'os de porc (鳥ガラと豚骨), y compris pour le
  plat « 15 légumes » ;
- `bbq` sur **Bar Estadão** et **Figueira Rubaiyat** — aucune source ne mentionne
  de churrasco ;
- `burger` sur **Bar Estadão** (son identité tient à un seul sandwich, le pernil)
  et sur **Ed Red** (steakhouse de bœuf maturé) ;
- `coffee` sur une douzaine de lignes qui n'étaient pas des cafés (§6.1) ;
- `fast-food` sur **Kebab Mahal** et **Cilantro** — ce sont des restaurants assis.

**Avant de retirer un tag, faire la recherche.** J'ai une fois retiré `burger`
de Bar Estadão sur intuition avant de vérifier ; la recherche a confirmé, mais
l'ordre était le mauvais.

#### Règle stricte pour `vegetarian` et `vegan`

> **Arbitrage de l'utilisateur du 1er août 2026 : un omnivore qui propose un
> plat végétarien ne mérite pas le tag.**

Cette règle s'applique aussi aux sous-menus, adaptations sur demande et buffets
partiels : ils renseignent une possibilité de repas, pas l'identité du lieu.

- `vegetarian` exige un établissement sans viande ni poisson, ou une identité
  végétarienne explicitement revendiquée et conforme à la carte.
- `vegan` exige un établissement vegan/plant-based, ou une double identité
  végétarienne et vegan explicitement revendiquée avec une offre vegan
  structurante. Quelques références isolées ne suffisent pas.
- Un établissement intégralement vegan peut porter aussi `vegetarian` lorsque
  les deux filtres sont utiles ; ce n'est pas une déduction à appliquer en
  masse, mais une décision documentée au cas par cas.

La reprise exhaustive des 34 lignes concernées a produit huit corrections :

| Ligne | Constat | Correction |
|---|---|---|
| Sweet Rose Creamery | glacier principalement laitier, quelques parfums sans lait | retrait de `vegan` |
| Aromat | crêperie servant notamment jambon, fromage et œuf | retrait de `vegetarian` |
| Os Tibetanos | restaurant végétarien, mais carte contenant fromages et miel | retrait de `vegan`, maintien de `vegetarian` |
| Chimera | dinde, bœuf, veau et truite à la carte | retrait de `vegetarian` |
| Dalcheeni | plats végétariens **et non végétariens**, viande halal | retrait de `vegetarian` |
| Café De Markten | poulet rôti et halloumi à la carte | retrait de `vegetarian` et `vegan` |
| El Turco | buffet froid végétarien, buffet chaud avec viande et poisson | retrait de `vegetarian` |
| Pastva | restaurant sans viande, mais crème aigre, ricotta et cheddar | `vegan` → `vegetarian` |

Après correction, il reste **28 lignes de régime** : 21 `vegetarian`, 13
`vegan`, dont 6 portent légitimement les deux. Toutes les décisions sont
consignées dans `activite.json` → `_audit_regimes_strict`.

### 5.4 Ajouter un slug au vocabulaire

Parfois, un restaurant n'a pas de tag national **parce que le slug n'existe
pas**. Trois cas rencontrés : `tunisian` (A Ma Maison, franco-tunisien),
`nepalese` (Yak Yeti Yak, premier népalais du Royaume-Uni), `emirati`
(Al Bait Alqadeem — et `lebanese` servait de bouche-trou sur Arabian Tea House,
ce qui était franchement faux).

**Procédure — 5 fichiers, à faire d'un bloc :**

1. `src/lib/cuisineTags.js` : ajouter `{ slug: 'xxx', group: 'world' }` à la
   bonne place (voisinage géographique).
2. Les 4 locales `src/i18n/locales/{fr,en,es,de}/app.json`, sous `cuisineTags`,
   **dans exactement le même ordre**.
3. Vérifier la parité :

```bash
node -e "
const fs=require('fs');
const slugs=[...fs.readFileSync('src/lib/cuisineTags.js','utf8')
  .matchAll(/slug: '([^']+)'/g)].map(m=>m[1]);
for(const l of ['fr','en','es','de']){
  const k=Object.keys(JSON.parse(fs.readFileSync('src/i18n/locales/'+l+'/app.json','utf8')).cuisineTags||{});
  console.log(l,k.length,'ordre identique:',k.join(',')===slugs.join(','));
}
console.log('slugs:',slugs.length);"
```

Les quatre locales doivent afficher le même compte et `ordre identique: true`.
**État actuel : 64 slugs.**

Slugs ajoutés au cours du chantier : `dutch`, `belgian`, `swiss`, `austrian`,
`czech`, `croatian`, `egyptian`, puis `tunisian`, `nepalese`, `emirati`.

### 5.5 Conventions et limites du vocabulaire

- **Pas de slug `scottish`** → utiliser `british` pour l'Écosse (The Kitchin,
  Dogstar, Cafe Royal).
- **Pas de slug `singaporean`** → les lignes de Singapour utilisent l'origine
  ethnique (`chinese`, `indian`), convention à respecter.
- **Pas de slug `mediterranean`** → ne pas l'inventer, `audit.mjs` le rejette.
- **Pas de slug `laotian`** → Queen Mother Cafe (lao-thaï) tagué `thai`.

### 5.6 Quand ne PAS mettre de tag national

Assumer l'absence est un choix légitime, à **consigner** pour ne pas repasser
la ligne. Cas tranchés :

- **Field** (Prague) : le Michelin le classe en cuisine créative, pas tchèque.
- **Momofuku** (Las Vegas) : coréo-américain, Yelp le classe « New American » —
  trop ambigu.
- **Pastva**, **Maitrea** (Prague) : végétarien international ; Maitrea revendique
  aussi une offre vegan structurante, tandis que Pastva sert désormais plusieurs
  recettes avec laitages et ne garde que `vegetarian`.
- **The Eatery** (Prague) : bistrot de saison sans identité nationale.
- **De Plantage** (Amsterdam) : sud-européen et nord-africain mêlés.
- **David Bann** (Édimbourg) : végétarien moderne.
- Boulangeries, glaciers, cafés : `bakery`, `ice-cream`, `coffee` suffisent.

---

## 6. Typologie des erreurs — ce qu'il faut chercher

C'est la partie la plus utile pour reprendre le travail : ces motifs se
**répètent**, il faut les traquer activement.

### 6.1 Le mot « Café » dans le nom entraîne un faux tag `coffee`

**Le filon le plus rentable du chantier.** 32 lignes étaient taguées `coffee`
seul ; **13 n'étaient pas des cafés**, mais de vrais restaurants rendus
invisibles au filtre de leur cuisine :

| Ligne | Réalité | Correction |
|---|---|---|
| Cafe Kadijk (Amsterdam) | restaurant **indonésien** familial (rendang, satay, gado gado) | `indonesian` |
| Els Quatre Gats (Barcelone) | restaurant moderniste de 1897, 63 plats catalans | `spanish` |
| Café Bar Las Teresas (Séville) | bar à tapas de 1870, jamón de Jabugo | `tapas, spanish` |
| Cafe Citta (Cardiff) | pizzeria au feu de bois (*Where to Eat Pizza*, Phaidon) | `pizzeria, italian` |
| Queen Mother Cafe (Toronto) | cuisine **lao-thaï** depuis 1978 | `thai` |
| Cafe Royal (Édimbourg) | bar à huîtres victorien, 200 ans | `seafood, british` |
| Leb-i Derya (Istanbul) | restaurant rooftop turc | `turkish` |
| Cafe Piccante (Édimbourg) | friterie (fish and chips, Mars frit) | `fast-food, british` |
| Casa Julio (Palma) | bar à tapas | `tapas, spanish` |
| Eataly Toronto | marché-restaurants italien | `italian` |
| Le Lodge (Nice) | brasserie française | `french` |
| Grand Cafe Passage (Bruges) | cuisine flamande | `belgian` |
| Al Bait Alqadeem (Dubaï) | restaurant patrimonial émirati | `emirati` |

Le **1er août 2026**, les **68 lignes qui portaient encore `coffee`** ont donc
été revues une par une, y compris toutes les combinaisons. Neuf faux positifs
supplémentaires ont été corrigés :

| Ligne | Réalité | Correction |
|---|---|---|
| Churrería La Andaluza (Madrid) | churrería-pâtisserie, sans activité café autonome démontrée | `pastry, spanish` |
| El Coyote Cafe (Los Angeles) | restaurant mexicain | `mexican` |
| Eggs 'N Things (Honolulu) | restaurant de petit-déjeuner ; quelques cafés accessoires | `brunch, american` |
| Cafe el Popular (Mexico) | restaurant traditionnel familial mexicain | `mexican` |
| Azkatl (Mexico) | restaurant mexicain avec boulangerie-pâtisserie | `bakery, mexican` |
| City Café Natural El Sope (Mexico) | restaurant de cuisine saine et petits-déjeuners | `brunch, mexican` |
| Rick's Cafe (Casablanca) | restaurant et piano-bar, sans activité café centrale | `gastronomic` |
| Peppermill Fireside Lounge (Las Vegas) | restaurant américain/diner et lounge | `brunch, american` |
| Karaköy Güllüoğlu (Istanbul) | maison de baklava et pâtisseries turques | `pastry, turkish` |

**Règle renforcée :** conserver `coffee` seulement si l'établissement revendique
une identité de café/coffee shop/salon de thé, ou si une offre de café autonome
et centrale est documentée. Le nom, la vente de quelques cafés ou l'ancien sens
américain de *coffee shop* pour un diner ne suffisent pas. Les 59 tags `coffee`
restants ont été confirmés ; la liste exhaustive et les justifications sont dans
`activite.json` → `_audit_coffee_complet`.

Cas limite important : **Café De Markten conserve `coffee`**. Son site officiel
le présente comme le café du centre communautaire, lieu où se rencontrer,
travailler et lire, avec carte autonome d'americano, espresso, cappuccino,
latte et flat white, café Fair Trade et café suspendu. Sa carte salée et le
poulet n'annulent pas cette fonction ; le poulet invalide en revanche les tags
`vegetarian` et `vegan`, déjà retirés.

**Comment les lister :**

```bash
node -e "
const fs=require('fs');
fs.readFileSync('supabase/seed_restaurants.sql','utf8').split(/\r?\n/).forEach((l,i)=>{
  const m=l.match(/^\s*\('([A-Z]{3})', '(\d+)', '((?:[^']|'')*)', (?:null|'(?:[^']|'')*'), array\[([^\]]*)\]::text\[\], (\d), '((?:[^']|'')*)'/);
  if(!m)return;
  const t=[...m[4].matchAll(/'([^']+)'/g)].map(x=>x[1]);
  if(t.length===1&&t[0]==='coffee')
    console.log('L'+(i+1),m[1]+'/'+m[2],m[3],'—',m[6].slice(0,50));
});"
```

**Il reste 14 lignes `coffee` seul et 45 lignes où il est combiné**, toutes
incluses dans l'audit exhaustif du 1er août 2026. Ne pas les repasser sans
élément nouveau ; consulter `_audit_coffee_complet` et `_etape3`.

### 6.2 `fast-food` appliqué à des restaurants assis

Même mécanique. **Cilantro** (Édimbourg) était en `fast-food` alors que c'est un
indien-bangladais de 20 couverts primé *Best Asian Restaurant Edinburgh 2023* ;
**Kebab Mahal** est un tandoori pendjabi assis depuis 1979 ; **Polakowski** une
cantine self-service polonaise depuis 1899 (elle avait aussi `coffee`).

### 6.3 Adresses incomplètes ou fausses

**225 adresses sur 697 n'ont pas de numéro de rue dans leur premier segment.**
C'est le défaut le plus répandu du fichier. Chaque vérification web doit
récupérer l'adresse officielle et la comparer.

Erreurs constatées, par gravité :

**Rue entièrement fausse :**
- **L'Atelier de Joël Robuchon** (Las Vegas) : libellé « Ocean Drive, NV 89158 »
  — une rue de Miami avec le code postal d'Aria — pour un restaurant du
  **MGM Grand, 3799 S Las Vegas Blvd, 89109**.
- **The Kitchin** (Édimbourg) : « 76-78 Commercial **Street** » au lieu de
  « 78 Commercial **Quay** ». Le code postal EH6 6LX correspondait à Commercial
  Quay : **le libellé contredisait sa propre coordonnée**.
- **Dogstar** (Édimbourg) : Lindsay Road → Portland Place.
- **Cafe Slavia** (Prague) : Národní třída 1 → Smetanovo nábřeží 1012/2.

**Numéro faux :** Café Louvre (20 → 1987/22), Breka Bakery (818 → 812),
Karaköy Lokantası (37A → 57).

**Code postal faux :** Beachwood Cafe (90028 → 90068), A Ma Maison
(07012 → 07013), Polakowski (31-053 → 31-052), Chimera (31-010 → 31-008),
Breka (V6E 1B0 → V6E 1E5).

**Numéro absent :** Casa Julio, Le Lodge, Polakowski, Chimera, Anniversaire Café,
Sweet Rose Creamery…

**Complément utile :** Maus Hábitos (Porto) est au **4º piso** — sans cette
mention, l'établissement est introuvable sur place.

**Dans tous ces cas, les coordonnées étaient correctes.** Seul le libellé était
faux, donc rien ne le signalait automatiquement.

### 6.4 Gammes de prix mal classées

**Mon Ami Gabi** (Las Vegas) était en gamme 1 (€) alors que c'est un bistrot du
Strip à plus de 40 $ le plat → passé en 2 sur décision de l'utilisateur.
Trois autres reclassements avaient été faits en gamme €€€ (dont Kikunoi Muge
Sanbo). Recouper systématiquement avec les fourchettes de prix citées.

### 6.5 Déménagements

Cinq trouvés, **tous en gamme 3**. Les établissements haut de gamme ont les
moyens de déménager ; les petits ferment. Exemples : Tuju (São Paulo) a quitté
Vila Madalena pour Jardim Paulistano — notre adresse était déjà la bonne ;
Ed Red (Cracovie) a fait Sławkowska → Bocheńska → Rynek Główny 27 — notre
adresse était bonne aussi.

### 6.6 Homonymes et succursales

Piège récurrent. **Leb-i Derya** : la succursale du Richmond a fermé, pas celle
de Kumbaracı. **Julia's** à Amsterdam a plusieurs comptoirs en gare.
**Daikokuya** à Tokyo désigne deux établissements distincts. Toujours vérifier
que la source parle bien de **l'adresse de notre ligne**.

### 6.7 Noms non officiels

**Grand Cafe Passage** (Bruges) s'appelle en réalité *Gran Kaffee De Passage*.
**Non renommé** : le nom sert à l'appariement avec l'objet Geoapify, le changer
risquerait de casser la détection de doublons. À signaler, pas à corriger seul.

---

## 7. Erreurs de méthode commises — à ne pas refaire

### 7.1 Détourner `isSimilar()` pour identifier un établissement

`api/_lib/similarity.js` est conçu pour **détecter des doublons**, donc réglé
pour la sensibilité, pas la précision. L'utiliser pour décider « ce résultat
Geoapify est-il bien mon restaurant ? » a produit **« Barba » → « Barka »**
(ratio 0,80) et **« Bon Bon » → « BON »** (règle de sous-chaîne).

Correctif : matcher strictement — égalité normalisée exacte, inclusion
seulement si `court/long ≥ 0,6`, Levenshtein ≥ 0,88 — **et journaliser une
alerte dès que le nom retenu diffère du nom cherché.**

### 7.2 Normalisation Unicode naïve

`normalize('NFD')` **décompose le hangul en jamo**. Et des classes de caractères
limitées au latin faisaient que les noms grecs, cyrilliques, thaïs et arabes se
normalisaient en **chaîne vide**, produisant de faux « noms différents ».
Correctif : supprimer le NFD et conserver toutes les lettres non latines.

### 7.3 Cache indexé par numéro de ligne — l'erreur la plus grave

`geoapify-cache.json` est indexé par **numéro de ligne**. Des lignes ayant été
ajoutées et supprimées depuis, les numéros ont glissé. Le premier passage de
`check-address-match.mjs` a produit **53 divergences absurdes** — un restaurant
de Hambourg comparé à une adresse de Dubaï, Casablanca contre Hanoï.

Elle n'a été repérée que parce que les résultats étaient **manifestement
insensés**. Après réindexation par `place_id` — seul identifiant stable entre le
cache et le fichier — **zéro divergence réelle sur 222 lignes**.

> **Leçon générale : n'indexer jamais un cache sur un numéro de ligne.** Et
> quand un contrôle produit un taux d'anomalies anormalement élevé, suspecter
> d'abord le contrôle.

### 7.4 Le détecteur de déménagements ne détecte pas les fermetures

`screen-moves.mjs` compare la position d'un homonyme trouvé par recherche à nos
coordonnées stockées. Il a classé 383 lignes « cohérentes » — mais **un
restaurant fermé garde un `place_id` valide** : le cas *Moo* avait un
identifiant Geoapify parfaitement valide **six ans après sa fermeture**.

L'utilisateur a formulé la raison de fond : *« les petits restos, une fermeture
sera plus fréquente qu'un déménagement »*. Le screen a donc été **abandonné pour
les gammes 1 et 2**, remplacé par la vérification web ville par ville.

### 7.5 Écrire une adresse de mémoire

Cinq adresses ont été écrites de mémoire malgré l'engagement de tout vérifier.
L'utilisateur l'a détecté en posant la question. Vérification a posteriori :
**trois étaient fausses** (Izuu — mauvais quartier ; Karaköy Lokantası —
numéro 37A au lieu de 57 ; Kikunoi Muge Sanbo — code postal et gamme faux).

> **Aucune donnée ne doit être écrite sans source consultée dans le tour en
> cours.**

### 7.6 Recherches groupées

Voir §4.2 : le moteur ne répond que sur le premier nom.

---

## 8. Le fichier de suivi `activite.json`

C'est **la mémoire du chantier**. Sa structure :

| Clé | Contenu |
|---|---|
| `_note`, `_avancement` | statuts et état d'avancement général |
| `_etape3` | **106 entrées** — dictionnaire `"CC/dest Nom" → "statut — détail"`, le journal des vérifications d'activité |
| `_tags_cuisine_manquante.regle` | l'énoncé de la règle du §5.1 |
| `_tags_cuisine_manquante.faits` | **38 entrées** — tags ajoutés/retirés, avec la justification |
| `_tags_cuisine_manquante.sans_tag_national_assume` | **15 entrées** — lignes volontairement sans tag national, **à ne pas repasser** |
| `_coffee_seul` | campagne historique limitée à `coffee` seul ; conservée pour la traçabilité |
| `_audit_coffee_complet` | audit exhaustif des 68 usages restants : règle, 9 retraits et 59 conservations |
| `_tags_vegetarien`, `tags_resolus` | campagne des tags de régime |
| `_audit_regimes_strict` | audit exhaustif des 34 lignes de régime : règle arbitrée, 8 corrections et 28 conservations |
| `_controle_adresse_objet` | résultat du contrôle §7.3 |
| `_screen_demenagements` | résultats du screen abandonné |
| `slugs_ajoutes` | les slugs créés |
| `regle_tags` | la consigne de sobriété |
| `_doutes_gamme` | gammes suspectes non tranchées |
| `_question_cafes_glaciers` | mesure et arbitrage en attente |

**Formulation des entrées** : toujours `statut — preuve`. Exemple :

```json
"GBR/2 Cilantro": "ouvert 16h-22h30 — indien-bangladais, Best Newcomer Scotland 2022, Best Asian Restaurant Edinburgh 2023"
```

Les accents sont volontairement évités dans les valeurs écrites via `node -e`
(échappement shell). Mise à jour type :

```bash
node -e "
const fs=require('fs');
const p='docs/seed-verification/activite.json';
const j=JSON.parse(fs.readFileSync(p,'utf8'));
Object.assign(j._etape3,{ 'CC/dest Nom':'ouvert — preuve' });
Object.assign(j._tags_cuisine_manquante.faits,{ 'CC/dest Nom':'+xxx' });
fs.writeFileSync(p,JSON.stringify(j,null,2));console.log('ok');"
```

---

## 9. Calculer le reste à faire

Deux catégories qui se recouvrent partiellement ; ce script les dédoublonne :

```bash
node -e "
const fs=require('fs');
const j=JSON.parse(fs.readFileSync('docs/seed-verification/activite.json','utf8'));
const done=new Set(Object.keys(j._etape3||{}));
const world=[...fs.readFileSync('src/lib/cuisineTags.js','utf8')
  .matchAll(/slug: '([^']+)', group: 'world'/g)].map(m=>m[1]);
const assume=new Set(Object.keys((j._tags_cuisine_manquante||{}).sans_tag_national_assume||{}));
const cafes=(j._coffee_seul||{}).vrais_cafes_a_garder||[];
let tot=0; const needTag=new Set(), needAct=new Set();
fs.readFileSync('supabase/seed_restaurants.sql','utf8').split(/\r?\n/).forEach(l=>{
  const m=l.match(/^\s*\('([A-Z]{3})', '(\d+)', '((?:[^']|'')*)', (?:null|'(?:[^']|'')*'), array\[([^\]]*)\]::text\[\], (\d),/);
  if(!m)return; tot++;
  const nm=m[3].replace(/''/g,\"'\"), key=m[1]+'/'+m[2]+' '+nm;
  const t=[...m[4].matchAll(/'([^']+)'/g)].map(x=>x[1]);
  const ok=t.some(x=>world.includes(x))||assume.has(key)||cafes.some(v=>v.includes(nm));
  if(!ok) needTag.add(key);
  if(m[5]!=='3'&&!done.has(key)) needAct.add(key);
});
const union=new Set([...needTag,...needAct]);
console.log('TAGS seuls    :',[...needTag].filter(k=>!needAct.has(k)).length);
console.log('ACTIVITE seule:',[...needAct].filter(k=>!needTag.has(k)).length);
console.log('LES DEUX      :',[...needTag].filter(k=>needAct.has(k)).length);
console.log('UNION         :',union.size,'sur',tot);"
```

**État au 1er août 2026, 13h25 :**

| | Lignes |
|---|---:|
| Tags uniquement | 72 |
| Activité uniquement | 320 |
| Les deux | 110 |
| **Reste à traiter** | **502** sur 697 |
| Traitées | 195 (28 %) |

Les 194 lignes de gamme €€€ sont **entièrement vérifiées** côté activité, d'où
le poids des gammes € et €€ dans les 320.

**Villes closes :** Prague (CZE/1), São Paulo (BRA/6), Madrid (ESP/2),
Cracovie (POL/1), Édimbourg (GBR/2), Las Vegas (USA/8), Rome (ITA/1),
Hambourg (DEU/5).
**En cours :** Amsterdam (NLD/1) — 4 lignes faites sur 15.

### Périmètre figé — ne pas repasser le travail déjà fait

`docs/seed-verification/perimetre-fige-2026-08-01.json` contient **la liste
nominative** des lignes, au format `"CC/dest Nom"` (jamais des numéros de ligne :
ils glissent à chaque édition, voir §7.3).

| Clé du fichier | Lignes | À faire |
|---|---:|---|
| `deja_verifiees` | 195 | ❌ **ne pas y toucher** — vérifiées intégralement |
| `restantes_a_confier` | 502 | ✅ **le travail à faire** |
| `partiellement_traitees_opus` | 41 | ⚠️ sous-ensemble des restantes — voir ci-dessous |

**Les 41 lignes partiellement traitées.** La répartition porte sur le *travail
restant*, pas sur *qui a touché la ligne*. Ces 41 lignes ont déjà reçu une
correction (tag rectifié mais activité non confirmée, ou l'inverse) et
réapparaissent donc dans `restantes_a_confier`. Il faut bien les traiter — mais
**consulter d'abord ce qui a déjà été établi sur elles dans `activite.json`**
avant de relancer une recherche, et ne pas défaire une correction déjà motivée.

Exemples : `NLD/1 Cafe Kadijk` (tag corrigé en `indonesian`, activité confirmée
mais pas encore consignée dans `_etape3`), `USA/8 The Buffet`,
`ITA/1 Gelateria Giolitti`.

⚠️ **Ce fichier ne doit pas être modifié.** Il sert de référence pour établir,
plus tard, quelles lignes ont été vérifiées par quel agent.

### D'où vient le fichier

À ne pas confondre : **le fichier n'a pas été écrit de zéro.** État par rapport
à la version commitée (`git show HEAD:supabase/seed_restaurants.sql`) :

| | Lignes |
|---|---:|
| Version commitée | 552 |
| Version de travail actuelle | **697** |
| ↳ inchangées | 221 |
| ↳ modifiées (surtout `geoapify_place_id`, coordonnées, `name_latin`) | 288 |
| ↳ ajoutées lors des phases d'enrichissement | 188 |
| ↳ supprimées (sélections faibles remplacées) | 43 |

La campagne de vérification décrite ici repasse **toutes** les lignes, y compris
les 188 ajoutées — elles avaient été vérifiées à l'insertion, mais pas selon la
grille complète du §4.3 (activité + cuisine + adresse + prix).

---

## 10. Geoapify

### 10.1 Contraintes

- Plan gratuit : **3 000 crédits par jour**, remis à zéro quotidiennement.
- Endpoint utilisé par l'application : **`/v1/geocode/autocomplete`**.
  **Ne pas utiliser le paramètre `name` de l'API Places** — documenté comme peu
  fiable et vérifié comme tel.
- Autres endpoints utiles : `/v2/place-details`, `/v1/geocode/search`,
  `/v2/places` avec filtre `circle`.
- Clé lue depuis `.env` (`VITE_GEOAPIFY_API_KEY`). **`.env` est gitignoré**
  (ligne 34, motif `.env*`).
- Pour les coordonnées seules, **l'API Overpass d'OpenStreetMap** est gratuite
  et sans quota — voir `q.overpass`.

### 10.2 Les lignes sans `geoapify_place_id`

**639 lignes sur 697 en portent un ; 58 n'en ont pas.** Impact et parade :

- `AddRestaurantModal.jsx:173` (`if (!picked || submitting) return;`) : un membre
  ne peut soumettre **que** des restaurants choisis dans la liste Geoapify. Ils
  ont donc toujours un `place_id`.
- Une ligne éditoriale sans `place_id` est **invisible à la comparaison par
  identifiant**, ce qui laisserait passer un doublon.
- **Correctif en place** dans `api/places.js` (~ligne 311) : quand aucun
  `place_id` ne correspond, on retombe sur la comparaison par nom
  (`findDuplicatePlace`) restreinte aux lignes dépourvues d'identifiant :

```js
} else if (isRestaurant && establishmentId) {
  const same = dbPlaces.find((p) => p.geoapify_place_id && p.geoapify_place_id === establishmentId);
  if (same) {
    dup = { duplicate: true, matchedName: same.name, matchedPlaceId: same.id };
  } else {
    const unidentified = dbPlaces.filter((p) => !p.geoapify_place_id);
    dup = unidentified.length
      ? await findDuplicatePlace(trimmedName, unidentified)
      : { duplicate: false };
  }
} else {
```

---

## 11. Arbitrages rendus par l'utilisateur

Ces décisions sont **prises**. Ne pas les rouvrir, ne pas décider autrement.

### 11.1 Cafés, glaciers, boulangeries — ON LES GARDE

> **Décision de l'utilisateur : un café, un glacier ou une boulangerie a sa
> place dans le fichier s'il est réellement populaire et recommandé. En
> contrepartie, son tag doit être exact pour ne pas être trompeur.**

Le fichier n'est donc pas strictement un fichier de restaurants : c'est un
fichier des **bonnes adresses où manger**, et une institution comme Café Du
Monde, Inoda Coffee (Kyoto), La Biela (Buenos Aires) ou Café Central (Vienne)
est exactement ce que le voyageur cherche.

**Ce que cela n'autorise pas :**

- ❌ Garder un établissement **quelconque** parce qu'il sert du café. Le critère
  de sélection reste « connu et recommandé » (§1).
- ❌ Laisser un tag approximatif sous prétexte que la ligne est conservée.
  **C'est précisément l'inverse** : puisqu'on garde ces lignes, leur tag doit
  être irréprochable, sinon elles polluent les filtres.

**Ce que cela impose :**

- Un vrai café → `coffee` (+ `pastry`, `brunch`, `bakery` si justifié). Pas de
  tag national, sauf s'il sert vraiment une cuisine nationale (§1.4 B).
- Un restaurant qui s'appelle « Café » → le tag de sa **vraie** cuisine, jamais
  `coffee` (§1.4 A). C'est la distinction qui compte, pas la suppression.

Mesure actuelle : **73 lignes (10,5 %)** sont des cafés / glaciers /
boulangeries, dont 41 « purs ». La restauration légère (sandwich, fast-food,
burger, kebab, street-food) pèse **95 lignes (13,6 %)**.

### 11.2 Saisonnalité — ne rien modéliser

Le Plongeoir à Nice n'ouvre que du 12 mars au 15 novembre, Casa Lucio ferme en
août. Le schéma n'a **aucun champ d'horaires** (vérifié : aucune occurrence de
`opening_hours` dans `src/`, `api/`, `supabase/`), donc le voyageur est déjà
censé vérifier avant de s'y rendre. **Décision : ne rien modéliser**, ne pas
ajouter de colonne, ne pas exclure les établissements saisonniers. Les
mentionner dans `activite.json` suffit.

---

## 12. Contraintes de travail

- **Git — règle absolue de `CLAUDE.md` : ne jamais commit ni push sans demande
  explicite, et toujours demander sur quelle branche avant de commiter.** Un
  accord pour commit ne vaut pas accord pour push.
- **Rien n'est commité à ce jour.** Fichiers modifiés : `supabase/seed_restaurants.sql`,
  `api/places.js`, `src/lib/cuisineTags.js`, les 4 `src/i18n/locales/*/app.json`.
- Tous les messages destinés à l'utilisateur sont en français, **au vouvoiement**.
- **Ne pas lancer de sous-agents en boucle** : consigne explicite de
  l'utilisateur pour ne pas épuiser le quota Geoapify sans rien terminer.

---

## 13. Résumé opérationnel — la boucle à exécuter

1. Lister les villes ayant le plus de lignes à traiter (§4.1).
2. Choisir une ville, afficher ses lignes avec `grep -n "('CC', 'dest'"`.
3. Pour chaque ligne : **une** recherche web, dans la langue locale (§4.2).
4. Passer les **sept contrôles de la checklist §1.3** — activité, adresse,
   coordonnées, tags de type, tag national, gamme, `place_id`.
5. Appliquer les corrections avec assertion d'unicité (§4.5).
6. Lancer `audit.mjs`, exiger **zéro BLOQUANT** (§3.2).
7. Consigner chaque ligne dans `activite.json` (§8) — y compris celles laissées
   volontairement sans tag national, et les doutes non tranchés.
8. Recompter le reste (§9), rendre compte, passer à la ville suivante.

**Rythme observé** : environ 4 lignes par itération, une recherche web chacune.
Une ville de 8 à 12 lignes prend deux à trois itérations.

**Ce qu'il faut rendre compte à l'utilisateur** à chaque itération : ce qui a été
corrigé et **sur quelle preuve**, ce qui a été laissé tel quel et pourquoi, les
doutes non tranchés, et le décompte du reste à faire. Ne pas se contenter de
« ville X terminée ».

---

## 14. Ce qui reste faux si l'on ne fait rien

Pour situer l'enjeu, sur les 502 lignes non encore vérifiées, en extrapolant les
taux constatés sur les 195 déjà passées :

- **~3 % de fermetures** non détectées, soit une quinzaine d'établissements
  recommandés qui n'existent plus ;
- **~30 % d'adresses** sans numéro de rue ou fausses ;
- **~20 % de tags** faux ou manquants, dont des restaurants entiers invisibles
  au filtre de leur propre cuisine.

Ces trois défauts sont **silencieux** : aucun contrôle automatique ne les
signale, et comme les lignes éditoriales ne sont pas modifiables par les membres
(§2.2), personne ne les corrigera jamais côté site.
