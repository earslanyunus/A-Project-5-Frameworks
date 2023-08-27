import { configureStore } from '@reduxjs/toolkit'
import authStore from './authStore'

export const store = configureStore({
  reducer: {authStore},
})