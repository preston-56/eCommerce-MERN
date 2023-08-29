import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user";
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});
