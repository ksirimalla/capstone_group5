import { createSlice } from '@reduxjs/toolkit'

const registerSlice = createSlice({
  name: 'register',
  initialState: [],
  reducers: {
    createCustomer(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    }
  }
})

export const { createCustomer } = registerSlice.actions
export default registerSlice.reducer