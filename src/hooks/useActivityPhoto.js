import { useActivityCommunityImages } from './useActivityCommunityImages';
import { useActivityWikiImages } from './useActivityWikiImages';

// Résout la photo d'une activité de suggestion de voyage : priorité à une
// photo communautaire (lieu "à ne pas manquer" ajouté par un membre pour la
// même ville — voir useActivityCommunityImages pour les garde-fous de
// correspondance), repli Wikipédia sinon (voir useActivityWikiImages).
export function useActivityPhoto(activities, countryCode, uiLang) {
  const { getCommunityImage, loading: communityLoading } = useActivityCommunityImages(activities, countryCode);
  const { getActivityImage: getWikiImage, loading: wikiLoading } = useActivityWikiImages(activities, uiLang);

  const getActivityImage = (activity) => {
    const communityUrl = getCommunityImage(activity);
    if (communityUrl) return { src: communityUrl, meta: undefined };
    return getWikiImage(activity);
  };

  return { getActivityImage, loading: communityLoading || wikiLoading };
}
