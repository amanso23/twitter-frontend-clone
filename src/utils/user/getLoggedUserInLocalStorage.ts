export const getLoggedUserInLocalStorage = () => {
    return JSON.parse(localStorage.getItem("loggedUser") || "undefined")
}