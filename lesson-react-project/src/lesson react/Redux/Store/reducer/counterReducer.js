import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 2,
} 

export const counterReducer  = createSlice({
  name: 'counter', //! Bu reducerin adi ne olacak onu qeyd edirik(Isdifade edilmeyeceq sadece Reducer tanimasi ucun)
  initialState, //! Bu educer bilsin ki ilkin deyerleri nelerdir
  reducers: { 
    increment: (state) => { //! Burda state bizim "initialState" demekdir
        state.value += 1 
    },
    decrement: (state) => {
        state.value -= 1
    }
  } //! Mentiqler var ki hansi action bas verdiqde ne edim 
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = counterReducer.actions //? ve deyirik ki action olaraqdan mene incerementi ve decrementi ver
export default counterReducer.reducer //! Export eliyurem counterReducer icindeki Reduceri