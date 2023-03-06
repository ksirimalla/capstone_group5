import React from 'react';

import FullLayout from '../layouts/fullLayout';
import ContentLayout from '../layouts/contentLayout';

// Views
import Signup from '../views/home/signup';
import Login from '../views/home/login';
import Home from '../views/home/home';

import CustomerDashboard from '../views/customer/dashboard';

import AdminDashboard from '../views/admin/dashboard';
import CustomerList from '../views/admin/customerList';
import ViewCustomer from '../views/admin/viewCustomer';
import EditCustomer from '../views/admin/editCustomer';
import CustomerProfile from '../views/customer/customerProfile';
import EditCustomerProfile from '../views/customer/editCustomerProfile';
import AccountTypeList from '../views/admin/accountTypeList';
import CreateAccountType from '../views/admin/createAccountType';


const TODO = () => {
    return "<p>WORK IN PROGRESS</p>"
}

const routes = [
    {
        path: 'admin',
        element: <ContentLayout />,
        children: [
            { path: 'customers', element: <CustomerList /> },
            { path: 'customer/view/:id', element: <ViewCustomer /> },
            { path: 'customer/edit/:id', element: <EditCustomer /> },
            { path: 'accountTypes', element: <AccountTypeList /> },
            { path: 'accountTypes/create', element: <CreateAccountType /> },
            { path: '', element: <AdminDashboard /> },
        ],
    },
    {
        path: 'customer',
        element: <ContentLayout />,
        children: [
            { path: 'profile', element: <CustomerProfile /> },
            { path: 'edit-profile', element: <EditCustomerProfile /> },
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
