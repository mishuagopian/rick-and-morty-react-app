// eslint-disable-next-line import/named
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { Character } from "../models/Character";
import { RootState } from "../app/store";
import {
  getCharacters as fetchCharacters,
  GetCharactersResponse,
  PaginationInfo,
} from "../services/characters";

export interface CharactersState {
  values: Character[];
  info: PaginationInfo;
  currentPage: number;
  loading: boolean;
  error: boolean;
}

const initialState: CharactersState = {
  values: [],
  info: {},
  currentPage: 1,
  loading: false,
  error: false,
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (_, thunkAPI) => {
    // TODO: Implement filters
    try {
      const { characters } = thunkAPI.getState() as RootState;
      const currentPage = characters.currentPage;

      const { info, results } = await fetchCharacters(currentPage);
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
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCharacters.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.info = payload.info;
      state.values = payload.results;
    });
    builder.addCase(getCharacters.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { setPage } = reservationsSlice.actions;

export default reservationsSlice.reducer;
