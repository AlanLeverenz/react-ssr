import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

// App will render whatever routes it is given
const App = ({ route }) => {
    return ( 
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    )
};

export default {
    component: App
}