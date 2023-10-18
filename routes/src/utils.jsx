export const getToken = () => {
    // let data =  localStorage.getItem("userData");
    // data =  JSON.parse(data)
    // return data
    // return localStorage.getItem('userData')
    const userDataString = localStorage.getItem('userData');
    let userData = JSON.parse(userDataString);
    return userData.token
}

console.log(getToken())

export const combineClasses = (...classes) => {
    return classes.join(" ")
}