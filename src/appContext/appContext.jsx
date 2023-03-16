import React from 'react';

export const AppContext = React.createContext({
    dispatch: () => {}, //fct qui distribue action
    getState: () => {} // fct recupere l'etat
});