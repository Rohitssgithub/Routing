import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import SidebarNavigation from '../sideBarNavigation/SidebarNavigation';
import styles from '../../Component/sideBarNavigation/SidebarNavigation.module.scss'
const Layout = () => {
    return (
        <>
            <div className={styles.mainbodyContainer}>
                <SidebarNavigation />
                <div className={styles.contentDiv}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout