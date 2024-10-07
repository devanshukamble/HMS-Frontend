import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUser:(state,action)=>{
        state.user = action.payload.user
    },
    unSetUser:(state,action)=>{
        state.user = action.payload.user
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser , unSetUser } = userSlice.actions

export default userSlice.reducer