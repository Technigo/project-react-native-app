import { createSlice } from '@reduxjs/toolkit';

export const trails = createSlice({
  name: 'trails',
  initialState: {
    currentPosition: null,
  },
  reducers: {
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },
  },
});
