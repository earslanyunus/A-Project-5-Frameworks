import { configureStore } from '@reduxjs/toolkit'
import searchstore from './searchstore'

export const store = configureStore({
  reducer: { searchstore},
})