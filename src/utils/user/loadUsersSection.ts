import { getRandomsUsers } from "./getRandomsUsers"
import { User } from "./user.types"

export const loadUsersSection = (setUsersSection: (setUsersSection: User[]) => void, sectionName: string) => {

    const fetchAndStoreUsers = async (count: number) => {
        try {
            const users = await getRandomsUsers(count) 
            if (users) { 
                localStorage.setItem(sectionName, JSON.stringify(users))
                return users
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
            setUsersSection(JSON.parse(usersSection))
        }
    }}