// import { configureStore } from "@reduxjs/toolkit";
// import favoritosReducer from "../slices/favoritosSlice";
// import pokemonStatusReducer from "../slices/pokemonSlice";
// import votingReducer from "../slices/votingSlice";
// import { digimonApi } from "../services/digimonApi";
// import { pokemonApi } from "../services/pokemonApi";

// export const store = configureStore({
//   reducer: {
//     favoritos: favoritosReducer,
//     pokemonStatus: pokemonStatusReducer,
//     voting: votingReducer,

//     [digimonApi.reducerPath]: digimonApi.reducer,
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(digimonApi.middleware)
//       .concat(pokemonApi.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritosReducer from "../slices/favoritosSlice";
import pokemonStatusReducer from "../slices/pokemonSlice";
import votingReducer from "../slices/votingSlice";
import { digimonApi } from "../services/digimonApi";
import { pokemonApi } from "../services/pokemonApi";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const votosPersistConfig = {
  key: "votes",
  storage,
};

const pokemonPersistConfig = {
  key: "pokemonStatus",
  storage,
};

const favoritosPersistConfig = {
  key: "favoritos",
  storage,
};

const rootReducer = combineReducers({
  favoritos: persistReducer(favoritosPersistConfig, favoritosReducer),
  pokemonStatus: persistReducer(pokemonPersistConfig, pokemonStatusReducer),
  voting: persistReducer(votosPersistConfig, votingReducer),

  [digimonApi.reducerPath]: digimonApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(digimonApi.middleware)
      .concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
