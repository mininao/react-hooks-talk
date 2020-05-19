import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Maxence",
    address: "12 Rue du Cheval",
  },
  reducers: {
    update: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { update: updateUserAction } = userSlice.actions;

export default userSlice.reducer;
