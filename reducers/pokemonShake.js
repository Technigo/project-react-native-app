import { createSlice } from '@reduxjs/toolkit'

export const pokemonShake = createSlice({
  name: 'pokemonShake',
  initialState: {
    pokemon: {},
    favorites: []
  },
  reducers: {
    setCurrent: (store, action) => {
      store.pokemon = action.payload
    },
    storeFavorite: (store, action) => {
      const pokemonIsStored = store.favorites.find(
        (item) => item.pokemon === action.payload.pokemon
      )
      if (pokemonIsStored) {
        console.log('Pokemon is already in list')
      } else {
        store.favorites = [action.payload, ...store.favorites]
      }
    },
    removeFavorite: (store, action) => {
      // XXXX
    }
  }
})
