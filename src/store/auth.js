import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
  initialState: {
    userData: null,
  },
  name: "auth",
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = null;
    },
  },
});

export default authslice.reducer;
export const { login, logout } = authslice.actions;
