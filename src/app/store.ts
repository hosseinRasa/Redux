import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./feature/counter/counterSlice.ts";
import { apiSlice } from "./feature/api/apiSlice.ts";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
