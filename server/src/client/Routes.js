import React from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';


// when we use react-router-config we export an array of objects
export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersListPage
    }
];