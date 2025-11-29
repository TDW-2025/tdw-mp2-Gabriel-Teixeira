import { configureStore } from "@reduxjs/toolkit";
import favoritosReducer from "../slices/favoritosSlice";
import pokemonStatusReducer from "../slices/pokemonSlice";
import votingReducer from "../slices/votingSlice"; 
import { digimonApi } from "../services/digimonApi";
import { pokemonApi } from "../services/pokemonApi";

export const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    pokemonStatus: pokemonStatusReducer, 
    voting: votingReducer, 
    
    [digimonApi.reducerPath]: digimonApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(digimonApi.middleware)
      .concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;