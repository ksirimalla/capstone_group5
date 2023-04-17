import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setupUser(state, action) {
      return {...state, ...action.payload} ;
    }
  }
})

export const { setupUser } = userSlice.actions
export default userSlice.reducer