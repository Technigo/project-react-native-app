import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
  name: "settings",
  initialState: {
    username: "You",
    steps: 10000,
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setSteps: (state, action) => {
      state.steps = action.payload;
    },
  },
});
