import { PATH,PORTALS_NAMES } from '../../constant/constant';


export const Navigations = Object.values(PORTALS_NAMES).reduce((acc, portalName) => {
    acc[portalName] = Object.values(PATH[portalName].children)
        .filter(x => x.sidebar)
        .map((pageData, index) => ({
            id: index + 1,
            path: pageData.path,
            pageName: pageData.sidebar.name || pageData.pageName
        }))
    return acc
}, {})