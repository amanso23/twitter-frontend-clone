import { User } from "./user.types";

export const loadLoggedUserInLocalStorage = (loggedUser: User) => {
    const KEY_NAME = "loggedUser"

    const loggedUserValue = localStorage.getItem(KEY_NAME)

    if(!loggedUserValue){
        localStorage.setItem(KEY_NAME, JSON.stringify(loggedUser))
    }

    return JSON.parse(localStorage.getItem(KEY_NAME) || "undefined")
}