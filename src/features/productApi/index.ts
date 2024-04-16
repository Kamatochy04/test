import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  countBuy: number;
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/product/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<Product, any>({
      query: () => `get`,
    }),
  }),
});

export const { useGetProductQuery } = productApi;
