import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        username: "superadmin",
        password: "password",
        role: "superadmin",
      },
    ],
  },
  reducers: {},
});

export default userSlice;
