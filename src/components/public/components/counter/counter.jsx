import React, { useContext } from 'react';
import { AppContext } from '../../../../appContext/appContext.jsx';
import { counterSlice } from '../../../../slices/counterSlice.jsx';

const { incrementer, decrementer, addition, soustraction, newValue } = counterSlice.actions 
//importation du style
import './public/sass/counter.scss'

//creation et exportation du composant counter
export const Counter = () => {
  //recuperation de dipatch et de getState dans appContext
  const { dispatch, getState } = useContext(AppContext);

  // fonction du btn plus
  const plus = () => {
    // elle dispatch l'action incrementer
    dispatch(incrementer());
  };
  // fonction du btn moins
  const moins = () => {
    // elle dispatch l'action decrementer
    dispatch(decrementer());
  };
  // fonction du btn ajouter
  const ajouter = () => {
    // valeur = la valeur recu dans l'input
    const valeur = Number(getState().counter.valueInput);
    // si valeur est nb entier 
    if (Number.isInteger(valeur)) {
    // elle dispatch l'action addition avec cette valeur
      dispatch(addition(valeur));
    }
  };
  // fonction du btn retirer
  const retirer = () => {
    // valeur = la valeur recu dans l'input
    const valeur = Number(getState().counter.valueInput);
    // si valeur est nb entier 
    if (Number.isInteger(valeur)) {
    // elle dispatch l'action subs avec cette valeur
      dispatch(soustraction(valeur));
    }
  };

  return (
    <div className='counter'>
      {/* affichage de valeur stock dans le state */}
      <h1>Compteur: {getState().counter.value}</h1>
      <input
        type="number"
        onChange={(event) =>
          // qd valeur change mis à jour dans le state
          dispatch(newValue(event.target.value))
        }
        // valeur input pour les fct ajouter et retirer
        value={getState().counter.valueInput}
      />
      <div>
        {/* btn qui utilise fct plus */}
        <button onClick={plus}>+</button>
        {/* btn qui utilise fct moins */}
        <button onClick={moins}>-</button>
      </div>
      <div>
        {/* btn qui utilise fct ajouter */}
        <button onClick={ajouter}>Ajouter</button>
        {/* btn qui utilise fct retirer */}
        <button onClick={retirer}>Retirer</button>
      </div>
      
    </div>
  );
};