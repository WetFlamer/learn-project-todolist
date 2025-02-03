import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // Укажи правильный путь
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
