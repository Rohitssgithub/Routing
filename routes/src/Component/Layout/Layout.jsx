import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import SidebarNavigation from '../sideBarNavigation/SidebarNavigation';
import styles from '../../Component/sideBarNavigation/SidebarNavigation.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Topbar from '../Topbar/Topbar';

const Layout = () => {

    // const { loginUser, loading } = useSelector((state) => state.login)

    // console.log('loginUser', loginUser)
    return (
        <>
            <div className={styles.mainbodyContainer}>
                <SidebarNavigation />

                <div className={styles.contentDiv}>
                    <Topbar />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout