import React from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';


// when we use react-router-config we export an array of objects

// using the spread function to itemize the items in the page components
export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users'
    }
];