import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<any, number>({
      query: (limit = 151) => `pokemon?limit=${limit}`,
    }),

    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    })
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonByNameQuery
} = pokemonApi;
