import React from 'react';

// StaticRouter renames the prop to staticContext
// default the value of staticContext as empty object
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Oops, route not found.</h1>
};

export default {
    component: NotFoundPage
};
