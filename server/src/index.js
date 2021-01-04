// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

// create const from express functions
const app = express();

// makes public folder available to client browsers
app.use(express.static('public'));

// tells react-com/server to render the Home component into an HTML string
app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
    `;

    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 