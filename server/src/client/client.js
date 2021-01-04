// Startup point for the client side application - bootup location

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// rendering into the same div as the index.js file does
// hydrate is used to refresh what the server sent to the browser
ReactDOM.hydrate(<Home />, document.querySelector('#root'));





