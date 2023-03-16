import {counterSlice} from './counterSlice.jsx';
import { configureStore } from '@reduxjs/toolkit';

// reducer de counterSlice
const counterReducer = counterSlice.reducer;

// creation et exportation du store
export const store = configureStore({
    // objt
    reducer : {
        // gere les action du compteur 
    counter : counterReducer,
    },
});