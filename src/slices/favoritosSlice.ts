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
      const name = action.payload;

      console.log("ACTION: addFavorito");
      console.log("Digimon recebido:", name); 
      console.log("Lista atual (antes):", [...state.items]);

      if (!state.items.includes(name)) {
        console.log(`${name} não estava na lista → adicionando`);
        state.items.push(name);
      } else {
        console.log(`⚠️ ${name} já está na lista → nada a fazer`);
      }

      console.log("Lista atualizada (depois):", [...state.items]);
      console.log("----------------------------------------");
    },

    removeFavorito: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      console.log("ACTION: removeFavorito");
      console.log("Digimon recebido:", name);
      console.log("Lista atual (antes):", [...state.items]);

      if (state.items.includes(name)) {
        console.log(`${name} está na lista → removendo`);
      } else {
        console.log(`${name} não estava na lista → nada para remover`);
      }

      state.items = state.items.filter((n) => n !== name);

      console.log("Lista atualizada (depois):", [...state.items]);
      console.log("----------------------------------------");
    },
  },
});

export const { addFavorito, removeFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;