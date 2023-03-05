import { configureStore } from '@reduxjs/toolkit'
import ecommReducer from './ecommSlice'

export const store = configureStore({
  reducer: {
    ecomm:ecommReducer
  },
})