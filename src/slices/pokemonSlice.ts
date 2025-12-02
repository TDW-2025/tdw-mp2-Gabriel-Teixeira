import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PokemonStatusState {
  favorites: string[];
  caught: string[];
}

const initialState: PokemonStatusState = {
  favorites: [],
  caught: [],
};

export const pokemonStatusSlice = createSlice({
  name: "pokemonStatus",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      console.log("ACTION: toggleFavorite");
      console.log("Pokémon recebido:", name);
      console.log("Lista atual de favoritos (antes):", [...state.favorites]);

      if (state.favorites.includes(name)) {
        console.log(`${name} já era favorito → removendo`);
        state.favorites = state.favorites.filter((f) => f !== name);
      } else {
        console.log(`✔️ ${name} não estava nos favoritos → adicionando`);
        state.favorites.push(name);
      }

      console.log(" Lista atualizada de favoritos (depois):", [
        ...state.favorites,
      ]);
      console.log("----------------------------------------");
    },

    toggleCaught: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      console.log(" ACTION: toggleCaught");
      console.log(" Pokémon recebido:", name);
      console.log(" Lista atual de apanhados (antes):", [...state.caught]);

      if (state.caught.includes(name)) {
        console.log(` ${name} já estava apanhado → removendo`);
        state.caught = state.caught.filter((c) => c !== name);
      } else {
        console.log(`${name} não estava apanhado → adicionando`);
        state.caught.push(name);
      }

      console.log(" Lista atualizada de apanhados (depois):", [
        ...state.caught,
      ]);
      console.log("----------------------------------------");
    },
  },
});

export const { toggleFavorite, toggleCaught } = pokemonStatusSlice.actions;
export default pokemonStatusSlice.reducer;
