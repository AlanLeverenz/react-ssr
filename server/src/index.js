// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
import 'babel-polyfill'; // define helper functions
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// create const from express functions
const app = express();

// makes public folder available to client browsers
app.use(express.static('public'));

// tells react-com/server to use the imported renderer function
app.get('*', (req, res) => {
    const store = createStore();

    // some logic to initialize and load data into the store

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 