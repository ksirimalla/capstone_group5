import React from 'react';

import FullLayout from '../layouts/fullLayout';
import ContentLayout from '../layouts/contentLayout';

// Views
import Signup from '../views/home/signup';
import Home from '../views/home/home';


const TODO = () => {
    return "<p>WORK IN PROGRESS</p>"
}

const routes = [
    {
        path: 'admin',
        element: <ContentLayout />,
        children: [
            { path: 'list', element: <TODO /> },
            { path: '', element: <TODO /> },
        ],
    },
    {
        path: 'customer',
        element: <ContentLayout />,
        children: [
            { path: 'list', element: <TODO /> },
            { path: '', element: <TODO /> },
        ],
    },
    {
        path: '/',
        element: <FullLayout />,
        children: [
            { path: 'signup', element: <Signup /> },
            { path: '404', element: <TODO /> },
            { path: '*', element: <TODO /> },
            { path: '', element: <Home /> },
        ],
    },
];

export default routes;
