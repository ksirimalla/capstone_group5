
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userSlice from './features/userReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


const reducers = combineReducers({
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, reducers)

const GlobalStore = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
})

export default GlobalStore;