// Startup point for the client side application - bootup location

import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// rendering into the same div as the index.js file does
// hydrate is used to refresh what the server sent to the browser
// don't need to import Home component because it is used in Routes
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#root'));





