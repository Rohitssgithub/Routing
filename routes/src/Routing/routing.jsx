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
import { PATH, PORTALS_NAMES } from '../constant/constant';

console.log('PATH', PATH)
export const router = createBrowserRouter([
    {
        path: "/login",
        element: <PublicRoute component={Login} />
    },
    // {
    //     path: "/",
    //     element: <Home />
    // },
    {
        //private routes
        path: "/",
        element: <PrivateRoute component={Layout} />,
        children: [
            ...Object.values(PATH).filter(x => x.private)?.map(portal => ({
                path: portal.path,
                children: [
                    ...Object.values(portal.children)?.map(child => ({
                        path: child.path,
                        element: child.element
                    }),
                        {
                            path: portal.path,
                            element: <Navigate to={Object.values(portal.children)[0].path} />
                        }
                    )]
            })),
            {
                path: "/",
                element: <Navigate to={PATH[PORTALS_NAMES["USER"]].children.USER_LIST.path} />
            },
            // {
            //     path: "*",
            //     element: <Navigate to={PATH[PORTALS_NAMES["CJ_RE"]].children.DAILY_SALES.path} />
            // },
        ]
    },
    // {
    //     path: "/",
    //     element: <Layout />,
    //     children: [
    //         {
    //             path: "/",
    //             element: <PrivateRoute component={Home} />
    //         },
    //         {
    //             path: "/about",
    //             element: <PrivateRoute component={About} />
    //         },
    //         {
    //             path: "/userList",
    //             element: <PrivateRoute component={UserList} />
    //         },

    //     ]
    // },

    {
        path: "*",
        element: <Navigate to="/" />
    },

])