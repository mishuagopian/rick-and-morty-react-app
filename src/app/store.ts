import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "../feature/charactersSlice";
import characterReducer from "../feature/characterSlice";
import appBarReducer from "../feature/appBarSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
    appBar: appBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
