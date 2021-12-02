import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
  name: "settings",
  initialState: {
    username: "",
    steps: null,
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
