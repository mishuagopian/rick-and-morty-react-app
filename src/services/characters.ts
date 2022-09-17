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
export const getCharacters = async (page = 0): Promise<GetCharactersResponse> =>
  axios.get(`${API_URL}/character?page=${page}`).then(({ data }) => data);
