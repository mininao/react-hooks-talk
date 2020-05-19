import { configureStore } from "@reduxjs/toolkit";
import usererReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: usererReducer,
  },
});
