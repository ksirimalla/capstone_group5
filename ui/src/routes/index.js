import React from 'react';

import FullLayout from '../layouts/fullLayout';
import ContentLayout from '../layouts/contentLayout';

// Views
import Signup from '../views/home/signup';
import Login from '../views/home/login';
import Home from '../views/home/home';

import CustomerDashboard from '../views/customer/dashboard';

import AdminDashboard from '../views/admin/dashboard';


const TODO = () => {
    return "<p>WORK IN PROGRESS</p>"
}

const routes = [
    {
        path: 'admin',
        element: <ContentLayout />,
        children: [
            { path: 'list', element: <TODO /> },
            { path: '', element: <AdminDashboard /> },
        ],
    },
    {
        path: 'customer',
        element: <ContentLayout />,
        children: [
            { path: 'list', element: <TODO /> },
            { path: '', element: <CustomerDashboard /> },
        ],
    },
    {
        path: '/',
        element: <FullLayout />,
        children: [
            { path: 'signup', element: <Signup /> },
            { path: 'login', element: <Login /> },
            { path: '404', element: <TODO /> },
            { path: '*', element: <TODO /> },
            { path: '', element: <Home /> },
        ],
    },
];

export default routes;
