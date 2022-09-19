import { apiCache } from "./api";

import { Episode } from "../models/Episode";

export const getEpisode = async (url: string): Promise<Episode> => {
  return apiCache.get(url).then(({ data }) => data);
};
