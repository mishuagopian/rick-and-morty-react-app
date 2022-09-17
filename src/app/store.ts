import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "../feature/charactersSlice";
import characterReducer from "../feature/characterSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
