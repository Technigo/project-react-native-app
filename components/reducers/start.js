import { createSlice } from '@reduxjs/toolkit';

export const start = createSlice({
  name: 'userPage',
  initialState: {
    username: null,
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
  },
  setLoading: (store, action) => {
    store.loading = action.payload;
  },
});

export const generateActivity = () => {
  return dispatch => {
    dispatch(start.actions.setLoading(true));
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .finally(setLoading(false));
  };
};
