import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Episode } from "../models/Episode";
import { Character } from "../models/Character";
import { getCharacter as fetchCharacter } from "../services/characters";
import { getEpisode as fetchEpisode } from "../services/episodes";

export interface CharacterState {
  value: Character;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
  episode: Episode;
  episodeLoading: boolean;
  episodeError: boolean;
  episodeErrorMessage?: string;
}

const initialState: CharacterState = {
  value: {} as Character,
  loading: false,
  error: false,
  episode: {} as Episode,
  episodeLoading: false,
  episodeError: false,
};

export const getEpisode = createAsyncThunk(
  "character/getEpisode",
  async (url: string, thunkAPI) => {
    try {
      const episode = await fetchEpisode(url);
      return episode;
    } catch (e) {
      console.log(`error: ${e}`);
      // Asuming everything is 404 Not found
      return thunkAPI.rejectWithValue("No episode found!");
    }
  }
);

export const getCharacter = createAsyncThunk(
  "character/getCharacter",
  async (id: string | number | undefined, thunkAPI) => {
    try {
      const character = await fetchCharacter(id);
      return character;
    } catch (e) {
      console.log(`error: ${e}`);
      // Asuming everything is 404 Not found
      return thunkAPI.rejectWithValue("Not found! Where did you get this URL?");
    }
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    clearState: (state) => {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.value = initialState.value;
      state.episode = initialState.episode;
      state.episodeLoading = initialState.episodeLoading;
      state.episodeError = initialState.episodeError;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacter.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.value = initialState.value;
      state.episode = initialState.episode;
    });
    builder.addCase(getCharacter.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = payload;
      state.value.created = payload.created?.length
        ? new Date(payload.created).toDateString()
        : "";
    });
    builder.addCase(getCharacter.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload as string;
    });
    builder.addCase(getEpisode.pending, (state) => {
      state.episodeLoading = true;
      state.episodeError = false;
      state.episode = initialState.episode;
    });
    builder.addCase(getEpisode.fulfilled, (state, { payload }) => {
      state.episodeLoading = false;
      state.episode = payload;
    });
    builder.addCase(getEpisode.rejected, (state, { payload }) => {
      state.episodeLoading = false;
      state.episodeError = true;
      state.episodeErrorMessage = payload as string;
    });
  },
});

export const { clearState } = characterSlice.actions;

export default characterSlice.reducer;
