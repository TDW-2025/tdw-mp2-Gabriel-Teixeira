import { configureStore } from "@reduxjs/toolkit";
import favoritosReducer from "../slices/favoritosSlice";
import { digimonApi } from "../services/digimonApi";

export const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    [digimonApi.reducerPath]: digimonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(digimonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
