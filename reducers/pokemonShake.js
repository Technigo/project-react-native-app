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
        (item) => item.id === action.payload.id
      )
      if (!pokemonIsStored) {
        store.favorites = [action.payload, ...store.favorites]
      } else {
        console.log('This pokemon is already in list')
      }
    },
    removeFavorite: (store, action) => {
      console.log('Payload: ', action.payload)
      store.favorites = store.favorites.filter(
        (item) => item.id !== action.payload.id
      )
    }
  }
})
