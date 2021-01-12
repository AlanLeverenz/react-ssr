import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';


// <div> below only rendered on the client
export default [
    {
        path: '/',
        component: Home,
        exact: true
    }
    {
        path: '/users',
        component: UsersList
    }
];