// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppBarState {
  showBackButton: boolean;
}

const initialState: AppBarState = {
  showBackButton: false,
};

export const appBarSlice = createSlice({
  name: "appBar",
  initialState,
  reducers: {
    showBackButton: (state, action: PayloadAction<boolean>) => {
      state.showBackButton = action.payload;
    },
  },
});

export const { showBackButton } = appBarSlice.actions;

export default appBarSlice.reducer;
