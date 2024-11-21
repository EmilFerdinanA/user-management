import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  password: string;
  role: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        username: "superadmin",
        password: "password",
        role: "superadmin",
      },
    ],
  },
  reducers: {
    create: (state, action) => {
      const exist = state.users.find(
        (user: User) => user.username === action.payload.username
      );

      if (exist) return;

      state.users.push({
        id: state.users.length + 1,
        ...action.payload,
      });
    },
  },
});

export const { create } = userSlice.actions;
export default userSlice;
