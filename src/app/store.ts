import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { productApi } from "../features/productApi";
import { userApi } from "../features/userApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
