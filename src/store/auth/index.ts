import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  password: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: true,
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
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;
