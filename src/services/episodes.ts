import axios from "axios";

import { Episode } from "../models/Episode";

export const getEpisode = async (url: string): Promise<Episode> => {
  return axios.get(url).then(({ data }) => data);
};
