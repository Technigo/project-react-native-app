import { createSlice } from 'react-redux/toolkit';

export const trails = createSlice({
  name: 'trails',
  initialState: {
    currentPosition: null,
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
