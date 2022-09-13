import {configureStore} from '@reduxjs/toolkit';
import {counterReducer, counterReducerAmount} from './reducers/counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterAmount: counterReducerAmount, 
  },
});

