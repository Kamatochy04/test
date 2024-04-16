import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: string;
  name: string;
  phone: string;
  data: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/product/" }),
  endpoints: (builder) => ({
    setUser: builder.mutation<User, any>({
      query: ({ ...patch }) => ({
        url: `request-buy`,
        method: "POST",
        body: patch,
      }),
    }),
  }),
});

export const { useSetUserMutation } = userApi;
