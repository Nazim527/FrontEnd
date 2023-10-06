import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './reducer/counterReducer'
import  favoritesReducer  from './reducer/FavoritesProduc'

export const redux = configureStore({
  reducer: {
    counter: counterReducer, //! Burda key ve value yaziriq
    favorites: favoritesReducer,
  },
})