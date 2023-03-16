import React, {useState} from 'react';
import { AppContext } from './appContext.jsx';

//importation du store
import { store } from '../store.jsx';


//creation et exportation de Composant avec les enfants en props
export const AppContextProvider = ({ children }) => {
  //creation etat  mis à jour avec la valeur de l'etat du store
  const [state, setState] = useState(store.getState());
    //compo abo au modif store, cahque modif store --> fct mes à jours l'etat avec données store
    store.subscribe(() => setState(store.getState()));

  return (
    <AppContext.Provider value={{ dispatch: store.dispatch, getState: () => state }}>
      {children}
    </AppContext.Provider>
  );
};