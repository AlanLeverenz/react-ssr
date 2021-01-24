import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

// App will render whatever routes it is given
const App = ({ route }) => {
    return ( 
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    )
};

// note: don't need return statement in a single line of code
export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}