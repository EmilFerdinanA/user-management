import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
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
    createOrUpdate: (state, action) => {
      const existingIndex = state.users.findIndex(
        (user: User) => user.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.users[existingIndex] = action.payload;
      } else {
        state.users.push({
          id: state.users.length + 1,
          ...action.payload,
        });
      }
    },
    deleteUser: (state, action) => {
      const existingIndex = state.users.findIndex(
        (user: User) => user.id === action.payload
      );

      if (existingIndex !== -1) {
        state.users.splice(existingIndex, 1);
      }
    },
  },
});

export const { createOrUpdate, deleteUser } = userSlice.actions;
export default userSlice;
