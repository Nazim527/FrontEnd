import { createSlice } from '@reduxjs/toolkit'
import { getAllProfilesRedux,getPostNameReducer } from './profileThunks'

//! Bilirik ki reducer asinxron emeliyyatlarla isleye bilmir cunki Asinxron Emeliyyatlarin neticelerin bize nece Saniyeden gelib gelmediyini bilmirik ve "Actrion" ise ozluyunde gozlemir bir basa emeliyyati Reducere oturur ve Error qaytarir bizde bu Errorun qarsisini almaq ucun ise "Action" la "Reducer" arasinda bir vasite yeni "Middleware" qoyuruq ve buda ozliyinde yeni bir action gonderecek

const initialState = {
  profiles: [],
  status: "nothing",
  error: ""
}

export const ReduxThunkReducer = createSlice({
  name: 'profiles',
  initialState,
  reducers: {

  },
  extraReducers: { //! Burda bizim Asinxronluqla bagli ne emeliyyatlarimiz varsa onu bura yaziriq
    [getAllProfilesRedux.pending]: (state) => { //! Her 3 veziyyet ucun yaziriq ki her veziyyetde bizim ucun neylesin
      state.status = "Loading.."
    },
    [getAllProfilesRedux.fulfilled]: (state, action) => {
      state.status = "Done",
      state.profiles = action.payload
    },
    [getAllProfilesRedux.rejected]: (state, action) => {
      state.status = "Error",
      state.error = action.payload
    },

    //?Post Name request
    [getPostNameReducer.pending]: (state) => {
      state.status = "Loading.."
    },
    [getPostNameReducer.fulfilled]: (state, action) => {
      state.status = "Done",
      state.profiles.push(action.payload)
    },
    [getPostNameReducer.rejected]: (state, action) => {
      state.status = "Error",
      state.error = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default ReduxThunkReducer.reducer