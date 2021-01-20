// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
import 'babel-polyfill'; // define helper functions
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// create const from express functions
const app = express();

// if browser makes an api request to the server it goes to the proxy
// opts is an optional function
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.header['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

// makes public folder available to client browsers
app.use(express.static('public'));

// tells react-com/server to use the imported renderer function
app.get('*', (req, res) => {
    const store = createStore();

    // some logic to initialize and load data into the store
    // take current incoming path and look at route config object
    // returns an array of components to be rendered
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    })
});  

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 