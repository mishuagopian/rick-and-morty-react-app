// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppBarState {
  showBackButton: boolean;
  showMenuButton: boolean;
  showMenu: boolean;
}

const initialState: AppBarState = {
  showBackButton: false,
  showMenuButton: false,
  showMenu: false,
};

export const appBarSlice = createSlice({
  name: "appBar",
  initialState,
  reducers: {
    showBackButton: (state, action: PayloadAction<boolean>) => {
      state.showBackButton = action.payload;
    },
    showMenuButton: (state, action: PayloadAction<boolean>) => {
      state.showMenuButton = action.payload;
    },
    showMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload;
    },
  },
});

export const { showBackButton, showMenuButton, showMenu } = appBarSlice.actions;

export default appBarSlice.reducer;
