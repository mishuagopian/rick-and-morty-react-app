import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Character } from "../models/Character";
import {
  getCharacters as fetchCharacters,
  GetCharactersResponse,
  PaginationInfo,
} from "../services/characters";

export interface CharactersState {
  characters: Character[];
  info: PaginationInfo;
  loading: boolean;
  error: boolean;
}

const initialState: CharactersState = {
  characters: [],
  info: {},
  loading: false,
  error: false,
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (_, thunkAPI) => {
    // TODO: Implement filters
    try {
      const { info, results } = await fetchCharacters();
      return { info, results } as GetCharactersResponse;
    } catch (e) {
      const error = `error: ${e}`;
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const reservationsSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCharacters.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.info = payload.info;
      state.characters = payload.results;
    });
    builder.addCase(getCharacters.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {} = reservationsSlice.actions;

export default reservationsSlice.reducer;
