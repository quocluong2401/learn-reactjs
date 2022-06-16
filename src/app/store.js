import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice';
import counterReducer from '../features/Counter/counterSlice';


const store = configureStore({
  reducer: {
    count: counterReducer,
    user: userReducer,
  },
})
export default store;