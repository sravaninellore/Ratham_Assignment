import { configureStore } from '@reduxjs/toolkit';
import studentInfoReducer from './studentInfoSlice';

export const store = configureStore({
  reducer: {
    studentInfo: studentInfoReducer,
  },
});
