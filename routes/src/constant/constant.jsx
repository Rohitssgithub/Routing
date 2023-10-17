import UserList from "../Component/UserList/UserList"
import UserProfile from '../Component/User/UserProfile'
import AdminList from "../Component/Admin/AdminList"
import Admin from '../Component/Admin/Admin'
import Home from "../Pages/Home/Home"
export const PORTALS_NAMES = {
    "ADMIN": "admin",
    "USER": "user",
    // 'HOME':"home"
}

// portals paths
export const PORTALS = {
    // [PORTALS_NAMES["HOME"]]: "/",
    [PORTALS_NAMES["USER"]]: "/user",
    [PORTALS_NAMES["ADMIN"]]: "/admin",
}

export const PATH = {
    DEFAULT: {
        path: "/",
        pageName: "Home",
        element: <Home />
    },
    LOGIN: {
        path: '/login',
        pageName: "Login",
    },
    // [PORTALS_NAMES["HOME"]]: {
    //     path: PORTALS[PORTALS_NAMES["HOME"]],
    //     private: true,
    //     // pageName: "user list",
    //     element: <Home />,
    //     sidebar: {
    //         show: true
    //     }
    // },
    [PORTALS_NAMES["USER"]]: {
        path: PORTALS[PORTALS_NAMES["USER"]],
        private: true,
        children: {
            USER_LIST: {
                path: PORTALS[PORTALS_NAMES["USER"]] + "/userlist",
                element: <UserList />,
                pageName: "user list",
                sidebar: {
                    show: true
                }
            },
            USER_PROFILE: {
                path: PORTALS[PORTALS_NAMES["USER"]] + "/user",
                element: <UserProfile />,
                pageName: "user profile",
                sidebar: {
                    show: true
                },
            },
        },
    },
    [PORTALS_NAMES["ADMIN"]]: {
        path: PORTALS[PORTALS_NAMES["ADMIN"]],
        private: true,
        children: {
            ADMIN_PROFILE: {
                path: PORTALS[PORTALS_NAMES["ADMIN"]] + "/profile",
                element: <Admin />,
                pageName: "Admin profile",
                sidebar: {
                    show: true
                },
            },
            ADMIN_LIST: {
                path: PORTALS[PORTALS_NAMES["ADMIN"]] + "/adminlist",
                pageName: "Admin list",
                element: <AdminList />,
                sidebar: {
                    show: true
                }
            },
        },
    },

}

export const PAGINATION = {
    ROWS_PER_PAGE: [10, 25, 50],
    DEFAULT_ROWS_PER_PAGE: 10,
    DEFAULT_CURRENT_PAGE: 1,
    NO_BREAK_PAGE: 4,
};