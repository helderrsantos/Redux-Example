import {createSlice} from '@reduxjs/toolkit';

export const counter = createSlice({
  name: 'counter',
  initialState: {
    total:0,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.total += 1;
    },
    decrement: state => {
      state.total -= 1;
    },
    incrementByAmount: (state, action) => { 
      state.total += action.payload;
    },
    reset: state=> {
      state.total = 0;
    }
  },
});


// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, reset} = counter.actions;

export const counterReducer = counter.reducer;
