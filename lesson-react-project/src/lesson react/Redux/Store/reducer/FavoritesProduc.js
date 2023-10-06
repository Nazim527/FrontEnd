//!  Bunu sadece ornek olarak hazirlayiram
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoritesProducts: ["Mouse","Keyboard"],
} 

export const favoritesReducer  = createSlice({
  name: 'favorites', 
  initialState, 
  reducers: { 
    addProductToFavorites: (state, action) => {
         state.favoritesProducts.push(action.payload)
    }
  } 
})

// Action creators are generated for each case reducer function
export const { addProductToFavorites} = favoritesReducer.actions //? ve deyirik ki action olaraqdan mene incerementi ve decrementi ver
export default favoritesReducer.reducer 