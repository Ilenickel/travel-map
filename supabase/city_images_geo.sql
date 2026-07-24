-- Ajoute lat/lng à city_images pour un matching CROSS-LANGUE par coordonnées
-- plutôt que par égalité de chaîne — même principe que city_geocache /
-- handleListCities (api/trip-templates.js) pour la même raison : "Sevilla"
-- (tapé par un visiteur ES) et "Séville" (nom éditorial source, FR) doivent
-- pointer vers LA MÊME photo alors que leurs noms bruts sont totalement
-- différents. Voir api/_lib/cityImages.js (findNearbyCachedImage).
--
-- Le nom (city_name/city_name_key) reste la clé de repli quand le géocodage
-- échoue (ex: clé Geoapify absente, lieu introuvable) — jamais la seule
-- source de vérité désormais.
alter table city_images add column if not exists lat double precision;
alter table city_images add column if not exists lng double precision;

-- Rétro-remplissage des lignes déjà en cache (villes éditoriales) : leurs
-- coordonnées sont déjà connues via trip_templates (city_lat/city_lng), pas
-- besoin de regéocoder via Geoapify pour ça.
update city_images ci
set lat = t.city_lat, lng = t.city_lng
from trip_templates t
where ci.lat is null
  and ci.country_code = t.country_code
  and ci.city_name_key = lower(trim(t.city_name))
  and t.city_lat is not null
  and t.city_lng is not null;

-- Index pour restreindre rapidement la recherche par proximité à un pays
-- avant de calculer les distances en JS (voir findNearbyCachedImage) — la
-- table reste petite (une ligne par ville réelle), pas besoin de PostGIS.
create index if not exists city_images_country_geo_idx on city_images (country_code) where lat is not null;
