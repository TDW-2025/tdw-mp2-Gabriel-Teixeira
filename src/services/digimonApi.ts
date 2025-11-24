import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const digimonApi = createApi({
  reducerPath: "digimonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://digimon-api.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getDigimonList: builder.query<any[], void>({
      query: () => "digimon",
    }),

    getDigimonByName: builder.query<any, string>({
      query: (name) => `digimon/name/${name}`,
    }),
  }),
});

export const { useGetDigimonListQuery, useGetDigimonByNameQuery } = digimonApi;
