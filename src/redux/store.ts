import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import localStorageMiddleware from "./middleware/middleware";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
