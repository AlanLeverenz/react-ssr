import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';


// when we use react-router-config we export an array of objects
export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList
    }
];