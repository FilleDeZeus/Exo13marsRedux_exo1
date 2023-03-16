import React from 'react';
import {Counter} from './public/components/counter/counter.jsx';
import './public/sass/page.scss'
import { AppContextProvider } from '../appContext/appContextProvider.jsx';

export const Page = () => {
    return (
        <div className='page'>
            <AppContextProvider>
                <p>Ceci est ma page d'exercice avec @reduxjs/toolkit </p>
                <Counter/>
            </AppContextProvider>
        </div>
    )
}