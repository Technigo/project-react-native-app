import { createSlice } from "@reduxjs/toolkit";

export const potter = createSlice({
  name: "potter",
  initialState: {
    intro: true,
    userName: "",
    harryPotterApi: []
  },

  reducers: {
    setUsername: (store, action) => {
      store.userName = action.payload;
    },
    setHarryPotterApi: (store, action) => {
        store.harryPotterApi = action.payload;
      },

    setIntro: (store, action) => {
      store.intro = action.payload;
    }
  },
});

//Redux Thunk
export const renderCards = () => {
    return (dispatch) => {
      fetch("http://hp-api.herokuapp.com/api/characters/students")
        .then((res) => res.json())
        .then((data) => dispatch(potter.actions.setHarryPotterApi(data)));
    };
  };
