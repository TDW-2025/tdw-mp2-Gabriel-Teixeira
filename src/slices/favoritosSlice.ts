import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoritosState {
  items: string[];
}

const initialState: FavoritosState = {
  items: [],
};

export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<string>) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFavorito: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((name) => name !== action.payload);
    },
  },
});

export const { addFavorito, removeFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
