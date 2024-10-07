import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: null,
}

export const hmsSlice = createSlice({
  name: 'access_token',
  initialState,
  reducers: {
    setUserToken:(state,action)=>{
        state.access_token = action.payload.access_token
    },
    unSetUserToken:(state,action)=>{
        state.access_token = action.payload.access_token
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserToken , unSetUserToken } = hmsSlice.actions

export default hmsSlice.reducer