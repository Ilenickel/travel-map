-- Persiste le palier de la cascade (searchBestCityPhoto, api/_lib/cityImages.js)
-- ayant fourni la photo retenue : 1-2 = requête ville précise + paysage
-- (fiabilité maximale), 3-4 = ville précise mais sans filtre d'orientation,
-- 5-6 = élargi région/pays (photo qui ne montre plus forcément la ville
-- elle-même). Sert UNIQUEMENT à repérer facilement les correspondances les
-- moins fiables pour une revue ponctuelle plus tard — n'influence aucune
-- logique de résolution.
alter table city_images add column if not exists fallback_tier smallint;
