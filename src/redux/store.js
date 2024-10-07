import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { hmsApi } from '../services/hmsApi'
import hmsReducer from '../features/hmsSlice'
import userReducer from '../features/userSclice'
import doctorsReducer from '../features/doctorSlice'
export const store = configureStore({
  reducer: {
    [hmsApi.reducerPath]: hmsApi.reducer,
    hms:hmsReducer,
    user:userReducer,
    doctors:doctorsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hmsApi.middleware),
})
 
setupListeners(store.dispatch)