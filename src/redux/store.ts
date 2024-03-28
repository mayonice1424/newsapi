import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../../../../NEXT/portofolio/src/redux/slice/navbarSlice";
export const store = configureStore({
  reducer: {
    navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;