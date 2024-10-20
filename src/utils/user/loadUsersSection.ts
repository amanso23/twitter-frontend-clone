import { getRandomsUsers } from "./getRandomsUsers"
import { getUserInProfile } from "./getUserInProfile";
import { User } from "./user.types"

export const loadUsersSection = (setUsersSection: (setUsersSection: User[]) => void, sectionName: string, numberOfUsersToShow: number = 3) => {

    const userNameOfUserInProfileView = getUserInProfile() as string

    const fetchAndStoreUsers = async (count: number) => {
        try {
            const users = await getRandomsUsers(count) 
            if (users) { 
                // const existingUsers = JSON.parse(localStorage.getItem(sectionName) || '[]') as User[]; //
                localStorage.setItem(sectionName, JSON.stringify(users))
                return users
            }
        } catch (error) {
            console.error(error)
        }
        return [];
    };


    if (sectionName === "A quién seguir") {
        const usersSection = localStorage.getItem(sectionName)
        if (!usersSection) {
            fetchAndStoreUsers(3).then(users => setUsersSection(users))
        } else {
            setUsersSection(JSON.parse(usersSection))
        }
    } else if (sectionName === "Tal vez te guste") {
        fetchAndStoreUsers(3).then(() => { //realizamos un fetch para obtener los usuarios (random)
            const updatedUsers = JSON.parse(localStorage.getItem(sectionName) || '[]') as User[] //una vez obtenidos recuperamos los usuarios, tanto los ya alamcenados como los nuevos
            const randomUsers = getRandomsFilteredUsers(updatedUsers, numberOfUsersToShow, userNameOfUserInProfileView)
            setUsersSection(randomUsers) //mostramos los tres usuarios random obtenidos 
        }) 
    }
}

const getRandomsFilteredUsers = (users: User[], numberOfUsersToShow: number, userNameOfUserInProfileView: string ) => {
    const filteredUsers = users.filter(user => !user.isFollowed && user.login.username !== userNameOfUserInProfileView ) //filtramos los usuarios a los que no se les siue            
    return filteredUsers.sort(() => 0.5 - Math.random()).slice(0, numberOfUsersToShow); //y obtenemos, además, solo tres usuarios a mostrar que cumplan esas codiciones
}