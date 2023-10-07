import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css'

import { router } from './Routing/routing'
import styles from './Component/sideBarNavigation/SidebarNavigation.module.scss'
import SidebarNavigation from './Component/sideBarNavigation/SidebarNavigation';
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App