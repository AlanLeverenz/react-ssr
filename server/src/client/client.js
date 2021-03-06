// Startup point for the client side application - bootup location
import 'babel-polyfill'; // will define helper functions
import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // for asynchronous data actions
import { Provider } from 'react-redux'; // gather state from store
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

// rendering into the same div as the index.js file does
// hydrate is used to refresh what the server sent to the browser
// don't need to import Home component because it is used in Routes
// inserted INTIAL_STATE to pass JSON data from the store

// set base URL
const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk.withExtraArgument(axiosInstance)));

// Provider updates the root app with changes to store
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));
