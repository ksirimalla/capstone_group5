
import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './features/registerReducer'

export const GlobalStore = configureStore({
    reducer: {
      register: registerSlice
    }
  })

export default GlobalStore;