import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login/';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
        </BrowserRouter>
    );
}