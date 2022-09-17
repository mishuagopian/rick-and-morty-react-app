import axios from "axios";

import { Character } from "../models/Character";
import { CharacterStateFilters } from "../feature/charactersSlice";

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

export const getCharacters = async (
  filters: CharacterStateFilters,
  page = 0
): Promise<GetCharactersResponse> => {
  let url = `${API_URL}/character?page=${page}`;
  url = filters.name ? `${url}&name=${filters.name}` : url;
  url = filters.status ? `${url}&status=${filters.status.toLowerCase()}` : url;
  url = filters.gender ? `${url}&gender=${filters.gender.toLowerCase()}` : url;
  return axios.get(url).then(({ data }) => data);
};
