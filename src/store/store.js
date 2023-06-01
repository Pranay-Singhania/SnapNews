import { configureStore } from "@reduxjs/toolkit";
import refreshSlice from "./refreshSlice";
const store = configureStore({
  reducers: {
    refreshSlice: refreshSlice,
  },
});
export default store;
