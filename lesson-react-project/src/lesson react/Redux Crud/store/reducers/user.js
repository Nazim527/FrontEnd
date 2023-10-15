import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: [
    {id: 1,name: "Nazim", email: "nazim@gmail.com", status: "Accepted"},
    {id: 2,name: "Betul", email: "Betul@gmail.com", status: "Rejected"},
  ],
}

export const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {  
    addNewuser: ((state, {payload}) => {
      state.userData.push(payload)
    }),
    deleteUser: ((state, {payload}) => {
      state.userData = state.userData.filter((user) => user.id === payload)
    })
  },
})

export const { addNewuser,deleteUser } = userReducer.actions
export default userReducer.reducer