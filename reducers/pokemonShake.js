import { createSlice } from '@reduxjs/toolkit'

export const pokemonShake = createSlice({
  name: 'pokemonShake',
  initialState: {
    pokemon: {},
    favorites: [{}]
  },
  reducers: {
    setCurrent: (store, action) => {
      store.pokemon = action.payload
    },
    storeFavorite: (store, action) => {
      // if (pokemon.id !== store.favorites)
      store.favorites = [action.payload, ...store.favorites]
    },
    removeFavorite: (store, action) => {
      // XXXX
    }
  }
})
