import { createSlice } from "@reduxjs/toolkit";

const refreshSlice = createSlice({
  name: "refresh",
  initialState: {
    // isOn: 0,
  },
  reducers: {
    refreshNews: (state) => {},
  },
});
export const { refreshNews } = refreshSlice.actions;
export default refreshSlice.reducer;
