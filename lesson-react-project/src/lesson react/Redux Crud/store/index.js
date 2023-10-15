import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './reducers/user'

//! Redux Persist Start
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // d

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer)

export const reduxCrud = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
})

export let persistor = persistStore(reduxCrud)