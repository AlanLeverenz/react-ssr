// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

import express from 'express';
import renderer from './helpers.js/renderer';

// create const from express functions
const app = express();

// makes public folder available to client browsers
app.use(express.static('public'));

// tells react-com/server to use the imported renderer function
app.get('*', (req, res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 