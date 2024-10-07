import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  doctorAppoinment: null,
}

export const doctorAppoinmentSlice = createSlice({
  name: 'doctorAppoinmnet_info',
  initialState,
  reducers: {
    setUser:(state,action)=>{
        state.doctorAppoinment = action.payload.doctorAppoinment
    },
    unSetUser:(state,action)=>{
        state.doctorAppoinment = action.payload.doctorAppoinment
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDoctorAppoinment , unSetDoctorAppoinment } = doctorAppoinmentSlice.actions

export default doctorAppoinmentSlice.reducer