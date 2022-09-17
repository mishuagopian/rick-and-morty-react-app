import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Character } from "../models/Character";
import { getCharacter as fetchCharacter } from "../services/characters";

export interface CharacterState {
  value: Character;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

const initialState: CharacterState = {
  value: {} as Character,
  loading: false,
  error: false,
};

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

export const reservationsSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacter.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.value = initialState.value;
    });
    builder.addCase(getCharacter.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    });
    builder.addCase(getCharacter.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload as string;
    });
  },
});

export const {} = reservationsSlice.actions;

export default reservationsSlice.reducer;
