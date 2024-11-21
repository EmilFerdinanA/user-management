import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password, users } = action.payload;
      const user = users.find((e: User) => e.username === username);

      if (user) {
        if (user.password === password) {
          state.isAuthenticated = true;
        }
      }
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice;