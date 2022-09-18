// eslint-disable-next-line import/named
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import {
  Character,
  CharacterGender,
  CharacterStatus,
} from "../models/Character";
import { RootState } from "../app/store";
import {
  getCharacters as fetchCharacters,
  GetCharactersResponse,
  PaginationInfo,
} from "../services/characters";

export interface CharacterStateFilters {
  name?: string;
  status?: CharacterStatus;
  gender?: CharacterGender;
}

export interface CharactersState {
  values: Character[];
  info: PaginationInfo;
  filters: CharacterStateFilters;
  currentPage: number;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

const initialState: CharactersState = {
  values: [],
  info: {},
  filters: {},
  currentPage: 1,
  loading: false,
  error: false,
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (_, thunkAPI) => {
    try {
      const { characters } = thunkAPI.getState() as RootState;
      const { currentPage, filters } = characters;

      const { info, results } = await fetchCharacters(filters, currentPage);
      return { info, results } as GetCharactersResponse;
    } catch (e) {
      console.log(`error: ${e}`);
      // Asuming everything is 404 Not found
      return thunkAPI.rejectWithValue("No results!");
    }
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.currentPage = initialState.currentPage;
      state.filters.name = action.payload;
    },
    setGenderFilter: (state, action: PayloadAction<CharacterGender>) => {
      state.currentPage = initialState.currentPage;
      state.filters.gender = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<CharacterStatus>) => {
      state.currentPage = initialState.currentPage;
      state.filters.status = action.payload;
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
    builder.addCase(getCharacters.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload as string;
      state.values = initialState.values;
      state.info = initialState.info;
    });
  },
});

export const { setPage, setNameFilter, setGenderFilter, setStatusFilter } =
  charactersSlice.actions;

export default charactersSlice.reducer;
