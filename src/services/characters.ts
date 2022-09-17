import axios from "axios";

import { Character } from "../models/Character";

const API_URL = "https://rickandmortyapi.com/api";

export interface PaginationInfo {
  count?: number;
  pages?: number;
  next?: "string";
  prev?: "string";
}

export interface GetCharactersResponse {
  info: PaginationInfo;
  results: Character[];
}

// TODO: Implement filters
export const getCharacters = async (
  url = API_URL
): Promise<GetCharactersResponse> =>
  axios.get(`${url}/character`).then(({ data }) => data);
