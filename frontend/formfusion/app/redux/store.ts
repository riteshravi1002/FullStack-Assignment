// app/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from './counterSlice';
// Import your reducers (slices) here
// import yourReducer from './yourReducerSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    // example: yourReducer,
    counter: counterReducer,
  },
});

// TypeScript setup: define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use dispatch with types
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
