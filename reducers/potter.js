import { createSlice } from "@reduxjs/toolkit";

export const potter = createSlice({
  name: "potter",
  initialState: {
    fan: false,
    harryPotterApi: []
  },

  reducers: {
    
    setHarryPotterApi: (store, action) => {
        store.harryPotterApi = action.payload;
      },

    setIntro: (store, action) => {
      store.fan = action.payload;
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
