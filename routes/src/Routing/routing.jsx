import React from 'react';
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Error from '../Component/Error/Error';
import Layout from '../Component/Layout/Layout';
import UserList from '../Component/UserList/UserList';
export const router = createBrowserRouter([
    {
        path: "/login",
        element: <PublicRoute component={Login} />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <PrivateRoute component={Home} />
            },
            {
                path: "/about",
                element: <PrivateRoute component={About} />
            },
            {
                path: "/userList",
                element: <PrivateRoute component={UserList} />
            },
            // {
            //     path: "/login",
            //     element: <PublicRoute component={Login} />
            // },

        ]
    },
    {
        path: "*",
        element: <Navigate to="/" />
    },

])