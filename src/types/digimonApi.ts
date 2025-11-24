import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Digimon } from "../types/digimon";

export const digimonApi = createApi({
  reducerPath: "digimonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://digimon-api.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getDigimonList: builder.query<Digimon[], void>({
      query: () => "digimon",
    }),

    getDigimonByName: builder.query<Digimon, string>({
      query: (name) => `digimon/name/${name}`,
    }),
  }),
});

export const { useGetDigimonListQuery, useGetDigimonByNameQuery } = digimonApi;
