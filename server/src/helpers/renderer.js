import React from 'react';
import { renderToString } from 'react-dom/server';
// Home component being rendered by Routes compoennt
// import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
// to protect against XSS attacks
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';


// Provider gets state updates from store

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{context}}>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>
    );

    // returns an object with all the tags in the component library
    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>    
    `;
};