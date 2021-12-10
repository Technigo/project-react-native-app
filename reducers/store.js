import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

import { pokemonShake } from './pokemonShake'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites']
}

const rootReducer = combineReducers({
  pokemonShake: persistReducer(persistConfig, pokemonShake)
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
