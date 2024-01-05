import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import  ReduxThunkReducer  from './reducer/profile/profileReducer'
import { apiSlice } from '../../RTK Query/featuredTodos/api/apiSlice'

export const reduxThunkStore = configureStore({
  reducer: {
    profile: ReduxThunkReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})
