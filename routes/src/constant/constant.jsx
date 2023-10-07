import UserList from "../Component/UserList/UserList"
import User from '../Component/User/User'
export const PORTALS_NAMES = {
    "ADMIN": "admin",
    "USER": "user"
}

// portals paths
export const PORTALS = {
    [PORTALS_NAMES["ADMIN"]]: "/admin",
    [PORTALS_NAMES["USER"]]: "/user",
}

export const PATH = {
    DEFAULT: {
        path: "/",
        pageName: "Home",
    },
    LOGIN: {
        path: '/login',
        pageName: "Login",
    },
    [PORTALS_NAMES["ADMIN"]]: {
        path: PORTALS[PORTALS_NAMES["ADMIN"]],
        private: true,
        children: {
            USER_PROFILE: {
                path: PORTALS[PORTALS_NAMES["ADMIN"]] + "/profile",
                element: <User />,
                pageName: "user profile",
                logs: true,
                showGenerateBtn: true,
                sidebar: {
                    show: true
                },
            },
            USER_LIST: {
                path: PORTALS[PORTALS_NAMES["ADMIN"]] + "/userlist",
                pageName: "user list",
                element: <UserList />,
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