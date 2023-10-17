export const getToken = () => {
    // let data =  localStorage.getItem("userData");
    // data =  JSON.parse(data)
    // return data
    return localStorage.getItem('userData')
}

export const combineClasses = (...classes) => {
    return classes.join(" ")
}