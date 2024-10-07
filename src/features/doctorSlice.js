import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  doctors: [],
}

export const doctorsSlice = createSlice({
  name: 'doctors_info',
  initialState,
  reducers: {
    setDoctors:(state,action)=>{
        state.doctors = action.payload.doctors
    },
    unSetDoctors:(state,action)=>{
        state.doctors = action.payload.doctors
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDoctors , unSetDoctors } = doctorsSlice.actions

export default doctorsSlice.reducer