import React from 'react';
import { renderRoutes } from 'react-router-config';

// App will render whatever routes it is given
const App = ({ route }) => {
    return ( 
        <div>
            <h1>I'm a header</h1>
            {renderRoutes(route.routes)}
        </div>
    )
};

export default {
    component: App
}