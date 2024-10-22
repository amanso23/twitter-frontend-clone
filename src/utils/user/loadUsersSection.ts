import { loggedUser } from "../../components/sidebar/user-logged/data"
import { getRandomsUsers } from "./getRandomsUsers"
import { User, UserWithPost } from "./user.types"


export const loadUsersSection = (setUsersSection: (setUsersSection: User[]) => void, sectionName: string) => {

    const fetchAndStoreUsers = async (count: number) => {
        try {
            const users = await getRandomsUsers(count) 
            if (users) {
                const filteredUsers = users.filter(user => user.login.username !== loggedUser.login.username)
                localStorage.setItem(sectionName, JSON.stringify(users))
                return filteredUsers
            }
        } catch (error) {
            console.error(error)
        }
        return []
    }

    if (sectionName === "A quién seguir") {
        const usersSection = localStorage.getItem(sectionName)
        if (!usersSection) {
            fetchAndStoreUsers(3).then(users => setUsersSection(users))
        } else {
            const parseUserSection: UserWithPost[] = JSON.parse(usersSection)
            const filteredSection = parseUserSection.filter(user => user.login.username !== loggedUser.login.username)
            setUsersSection(filteredSection)
        }
    }}