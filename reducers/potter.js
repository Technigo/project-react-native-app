import { createSlice } from "@reduxjs/toolkit";

export const potter = createSlice({
  name: "potter",
  initialState: {
    fan: false,
    loading: false,
    harryPotterApi: [],
  },

  reducers: {
    setHarryPotterApi: (store, action) => {
      store.harryPotterApi = action.payload;
    },

    setIntro: (store, action) => {
      store.fan = action.payload;
    },

    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  },
});

//Redux Thunk
export const renderCards = () => {
  return (dispatch) => {
    dispatch(potter.actions.setLoading(true));
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((res) => res.json())
      .then((data) => dispatch(potter.actions.setHarryPotterApi(data)))
      .finally(() => dispatch(potter.actions.setLoading(false)));
  };
};
