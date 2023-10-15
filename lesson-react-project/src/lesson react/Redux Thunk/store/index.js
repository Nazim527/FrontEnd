import { configureStore } from '@reduxjs/toolkit'
import  ReduxThunkReducer  from './reducer/profile/profileReducer'

export const reduxThunkStore = configureStore({
  reducer: {
    profile: ReduxThunkReducer
  },
})
