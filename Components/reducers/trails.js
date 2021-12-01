import { createSlice } from '@reduxjs/toolkit';

export const trails = createSlice({
  name: 'trails',
  initialState: {
    currentPosition: 'north',
    loading: false,
  },
  reducers: {
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },

    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  },
});
