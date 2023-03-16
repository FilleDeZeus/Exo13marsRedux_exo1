import { createSlice } from '@reduxjs/toolkit';

// creation et exportation du slice
export const counterSlice = createSlice({
  // nom du slice
  name: 'counter',
  // etat inital
  initialState: {
    // valeur 0
    value: 0,
  },
  // les reducers
  reducers: {
    // reducer qui incremnte
    incrementer: (state) => {
      // ajoute à la valeur de l'etat +1
      state.value += 1;
    },
    // reducer qui decremente
    decrementer: (state) => {
      // soustrait à la valeur de l'etat +1
      state.value -= 1;
    },
    // reducer qui additionne
    addition: (state, action) => {
      state.value += action.payload;
    },
    //reducer qui soustrait
    soustraction: (state, action) => {
      state.value -= action.payload;
    },
    //reduce qui met à jour l'input
    newValue: (state, action) => {
      state.valueInput = action.payload;
    },
  },
});
// 

