import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import movieSlice from './features/movieSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  user: userSlice,
  movie: movieSlice
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
