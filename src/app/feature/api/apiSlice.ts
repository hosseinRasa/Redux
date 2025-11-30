import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type qeryParams = {
  path: string;
  params?: Record<string, string | number>;
  body?: unknown;
};
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer your_token_here");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query<unknown[], string>({
      query: (path) => ({ method: "GET", url: path }),
    }),
    getDataByParams: builder.query<unknown[], qeryParams>({
      query: ({ path, params }) => ({
        url: path,
        params: params,
        method: "GET",
      }),
    }),
    createData: builder.query<unknown[], qeryParams>({
      query: ({ path, body }) => ({
        url: path,
        body: body,
        method: "POST",
      }),
    }),
    updateData: builder.query<unknown[], qeryParams>({
      query: ({ path, body }) => ({
        url: path,
        body: body,
        method: "PATCH",
      }),
    }),
    deleteData: builder.query<unknown[], qeryParams>({
      query: ({ path, body }) => ({
        url: path,
        body: body,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetDataQuery, useGetDataByParamsQuery, useCreateDataQuery, useUpdateDataQuery, useDeleteDataQuery} = apiSlice;
