import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from '../../Routing/routing';
import { Outlet } from 'react-router-dom';
import styles from '../../Component/sideBarNavigation/SidebarNavigation.module.scss'
import SidebarNavigation from '../../Component/sideBarNavigation/SidebarNavigation';
import BasicModal from '../../Component/Modal/Modal';
import Table from '../../Component/Table/Table';
import axios from 'axios'


const Home = () => {
  

   

    return (
        <>
            <p>home</p>
            {/* <BasicModal /> */}
            
        </>
    )
}

export default Home