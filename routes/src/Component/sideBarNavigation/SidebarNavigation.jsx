import React, { useMemo, useState } from 'react'
import styles from './SidebarNavigation.module.scss'
import { Link, useLocation ,NavLink} from 'react-router-dom';
import { PATH, PORTALS_NAMES, PORTALS } from '../../constant/constant';
console.log(PORTALS_NAMES)


export const sideBarNavigation = Object.values(PORTALS_NAMES).reduce((acc, portalName) => {
    // console.log(Object.values(PATH[portalName].children))
    // return portalName
    const portalData = PATH[portalName];

    if (portalData && portalData.children) {
        acc[portalName] = Object.values(portalData.children)
            .filter(x => x.sidebar)
            .map((pageData, index) => ({
                id: index + 1,
                path: pageData.path,
                pageName: pageData.sidebar.name || pageData.pageName
            }));
    } else {
        // Handle the case where PATH[portalName] or children are undefined
        console.error(`No data found for portal: ${portalName}`);
    }
    return acc
}, {})


const SidebarNavigation = () => {

    const location = useLocation();
    const sidebarObj = useMemo(() => {
        const temp = Object.keys(PORTALS)
        return temp?.length && temp.reduce((acc, item) => {
            acc[item] = false
            return acc
        }, {})
    }, [])
    const [sidebarItemsOpen, setSidebarItemsOpen] = useState(sidebarObj);

    console.log(sidebarItemsOpen)

    console.log(PORTALS)

    return (
        <>
            <div className={styles.mainContainer}>
                <ul>
                    <Link to="/">home</Link >
                    <Link to="/about">about</Link>
                    <Link to="/userList">user</Link>
                    <Link to="/login">login</Link>
                </ul>
                {/* {Object.entries(PORTALS).length && Object.entries(PORTALS).map(([key, value]) => {
                    console.log(PORTALS)
                    return (
                        <div key={key} className={styles.linksDiv}>
                            <NavLink
                                to={location.pathname}
                                className={({ isActive }) =>
                                    combineClasses(styles.portalNavLink, isActive ? styles.portalLinkactive : "")}
                                onClick={() => setSidebarItemsOpen({ ...sidebarItemsOpen, [key]: !sidebarItemsOpen?.[key] })}
                            >
                                <p style={styles.portalName}>{key}</p>
                                {
                                    sidebarItemsOpen?.[key] ?
                                        <img src={downIcon} alt="collapse menu" />
                                        :
                                        <img src={rightIcon} alt="expand menu" />
                                }
                            </NavLink>
                            {sidebarItemsOpen?.[key] && sideBarNavigation?.[key].map((data) => (
                                <NavLink
                                    key={data.id}
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${!isActive && styles.linkHoverEffect} ${isActive && styles.activeLink}`
                                    }
                                    to={data.path}
                                    state={{ previousPath: location.pathname }}
                                >
                                    <img src={data?.icon} alt="" className={styles.icon} />
                                    <p className={styles.pageli}>{data.pageName}</p>
                                </NavLink>
                            ))}
                        </div>
                    )
                })} */}
            </div>
        </>
    )
}

export default SidebarNavigation