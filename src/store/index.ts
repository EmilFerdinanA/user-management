import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/index";
import userSlice from "./user/index";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
