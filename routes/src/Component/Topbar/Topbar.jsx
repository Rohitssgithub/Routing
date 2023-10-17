import React, { Fragment, memo, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PATH } from "../../constant/constant";
import { useNavigate } from "react-router-dom";
import styles from './Topbar.module.scss'

const TopBar = (props) => {
    const [currentPath, setCurrentPath] = useState({});
    const location = useLocation();
    const navigate = useNavigate();


    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData)

    const pageName = useMemo(() => {
        let temp = {}
        Object.values(PATH).filter(x => x.private).forEach(portal => {
            const obj = Object.values(portal.children).find(pathData => pathData.path === location.pathname)
            if (obj)
                temp = obj
        })
        setCurrentPath(temp)
        return (temp?.pageName || "") + (temp?.logs ? " - Report Logs" : "")
    }, [location]);


    return (
        <>
            <div className={styles.topbarDiv}>
                <p>{pageName}</p>
                <div>
                    <span>{userData.email}</span>
                    <NavLink
                        className='btn btn-primary'
                        onClick={() => localStorage.clear()} to="/login"
                    >
                        Logout
                    </NavLink>
                </div>
            </div>


        </>
    );
};

export default memo(TopBar);
