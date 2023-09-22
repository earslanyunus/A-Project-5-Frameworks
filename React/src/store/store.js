import { configureStore } from '@reduxjs/toolkit'
import authStore from './authStore'
import searchstore from './searchstore'

export const store = configureStore({
  reducer: {authStore , searchstore},
})