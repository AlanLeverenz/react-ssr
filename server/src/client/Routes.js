import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

// when we use react-router-config we export an array of objects
// using the spread function to itemize the items in the page components
// without a path the App object wil always be displayed


export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

