-- Cache des temps de MARCHE réels (Geoapify Routing) entre deux points, utilisé
-- par le connecteur de trajet de la planification et par la liste de
-- restaurants (voir api/_lib/routing.js et src/hooks/useTravelRoutes.js).
--
-- N'est jamais peuplé au-delà de 3,2 km à vol d'oiseau : au-delà, la marche
-- dépasse forcément 45 min et l'interface revient d'elle-même à la distance à
-- vol d'oiseau, sans appel (voir MAX_WALK_HAVERSINE_KM).
--
-- Pourquoi un cache en base plutôt qu'un simple cache mémoire : un itinéraire
-- coûte un crédit Geoapify par appel ET par mode, et les mêmes paires de lieux
-- reviennent sans cesse (un lieu populaire d'une ville est enchaîné avec les
-- mêmes voisins par des milliers de voyageurs). Un cache partagé entre tous les
-- utilisateurs est donc ce qui divise la facture, pas un cache par session.
--
-- Clé = texte dérivé des coordonnées ARRONDIES À 4 DÉCIMALES (~11 m) plutôt
-- qu'une clé composite sur cinq colonnes : elle se construit à l'identique côté
-- client et côté serveur (travelRouteKey), et l'arrondi maximise les hits — deux
-- ajouts du même lieu par deux personnes peuvent différer de quelques mètres
-- selon le géocodeur, sans que ce soit un trajet différent.
--
-- DIRECTIONNEL (A→B et B→A sont deux lignes). La marche est presque toujours
-- symétrique, donc l'économie serait réelle — mais « presque » ne suffit pas :
-- escaliers à sens unique, passerelles, dénivelé (une montée ne se descend pas
-- en autant de temps) rendent l'aller et le retour distincts assez souvent
-- pour qu'une clé symétrique afficherait un temps faux sans qu'on puisse
-- jamais le détecter. Le doublement du nombre de lignes est le prix d'un
-- chiffre juste.
create table if not exists travel_routes (
  route_key   text primary key,
  from_lat    double precision not null,
  from_lng    double precision not null,
  to_lat      double precision not null,
  to_lng      double precision not null,
  -- Un seul mode aujourd'hui. La colonne est conservée (elle fait partie de
  -- route_key) pour qu'ajouter un mode plus tard ne demande que d'élargir cette
  -- contrainte. Le transport en commun a été essayé puis retiré : Geoapify n'a
  -- aucune donnée pour le Japon (mesuré le 2026-08-01), et deviner « voiture »
  -- à sa place induisait le voyageur en erreur — voir l'en-tête de
  -- api/_lib/routing.js.
  mode        text not null check (mode in ('walk')),
  distance_m  integer,
  duration_s  integer,
  -- 'ok'        : itinéraire trouvé (distance_m/duration_s renseignés)
  -- 'not_found' : Geoapify n'a pas su relier les deux points à pied (île, zone
  --               sans voirie cartographiée). Mémorisé pour ne pas retenter en
  --               boucle un calcul voué à l'échec — même principe que les
  --               lat/lng NULL de editorial_place_geocache.
  --
  -- Les pannes PASSAGÈRES (réseau, 5xx, quota) ne sont jamais écrites ici : une
  -- coupure de dix minutes de notre côté ne doit pas figer un résultat dans un
  -- cache partagé par tous les utilisateurs.
  status      text not null default 'ok' check (status in ('ok', 'not_found')),
  computed_at timestamptz not null default now(),
  -- NULL = permanent, le cas d'un itinéraire piéton réussi : un trottoir ne
  -- change pas, et une reprise de la donnée OSM ne déplacerait le temps que de
  -- quelques secondes. Seuls les refus motivés portent une expiration (6 mois,
  -- ROUTE_TTL_MONTHS dans api/_lib/routing.js), le temps qu'un chemin manquant
  -- soit ajouté à OSM.
  expires_at  timestamptz
);

-- Les lignes périmées ne sont JAMAIS supprimées, seulement écrasées par upsert
-- au prochain appel réussi : si Geoapify est indisponible ou le quota épuisé au
-- moment où on rafraîchit, une durée de transport vieille de six mois reste
-- infiniment plus utile qu'un connecteur vide. Cet index sert au diagnostic
-- (combien de lignes à rafraîchir), pas à un ménage automatique.
create index if not exists travel_routes_expiry_idx on travel_routes (expires_at)
  where expires_at is not null;

-- Pas de RLS : table lue et écrite exclusivement par la clé service_role depuis
-- api/geocode-place.js (action 'route'). Le navigateur n'y accède jamais
-- directement — il passe par l'endpoint, qui exige une session valide.
alter table travel_routes enable row level security;
