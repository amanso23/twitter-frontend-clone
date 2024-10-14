import { getRandomUser } from "./getRandomUser"
import { User } from "./user.types"

export const loadLoggedUser = (setLoggedUser: (user: User) => void) => {
    const loggedUser = localStorage.getItem("loggedUser")

    if (!loggedUser) {
        try {
            getRandomUser().then(user => {
                localStorage.setItem("loggedUser", JSON.stringify(user))
                setLoggedUser(user)
            })
        } catch (error) {
            console.error(error);
        }
    } else {
        setLoggedUser(JSON.parse(loggedUser))
    }
}