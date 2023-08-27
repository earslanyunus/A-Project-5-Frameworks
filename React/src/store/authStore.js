import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const authStore = createSlice({
  name: 'authStore',
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload
        }
  },
})

export const { login } = authStore.actions

export default authStore.reducer