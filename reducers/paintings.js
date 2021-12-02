import { createSlice } from "@reduxjs/toolkit";

const paintings = createSlice({
  name: "paintings",
  initialState: {
    artList: [],
    singleArt: {},
  },
  reducers: {
    storeList: (store, action) => {
      store.artList = action.payload;
    },
    storeSingleItem: (store, action) => {
      store.singleArt = action.payload;
    },
  },
});

export default paintings;
