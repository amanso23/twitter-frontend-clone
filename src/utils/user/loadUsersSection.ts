import { getRandomsUsers } from "./getRandomsUsers"
import { getUserInProfile } from "./getUserInProfile";
import { User } from "./user.types"

export const loadUsersSection = (setUsersSection: (setUsersSection: User[]) => void, sectionName: string, numberOfUsersToShow: number = 3) => {

    const userNameOfUserInProfileView = getUserInProfile()

    const MAX_USERS = 20 //máximo de usuarios a almacenar

    const fetchAndStoreUsers = async (count: number) => {
        try {
            const users = await getRandomsUsers(count) 
            if (users) { 
                const existingUsers = JSON.parse(localStorage.getItem(sectionName) || '[]') as User[]; //
                const newUsers = existingUsers.concat(users).slice(0, MAX_USERS)
                localStorage.setItem(sectionName, JSON.stringify(newUsers))
                return newUsers
            }
        } catch (error) {
            console.error(error);
        }
        return [];
    };

    if (sectionName === "A quién seguir") {
        const usersSection = localStorage.getItem(sectionName);
        if (!usersSection) {
            fetchAndStoreUsers(3).then(users => setUsersSection(users));
        } else {
            setUsersSection(JSON.parse(usersSection));
        }
    } else if (sectionName === "Tal vez te guste") {
        const userSection = localStorage.getItem(sectionName);
        const existingUsers = userSection ? JSON.parse(userSection) as User[] : [];

        if (existingUsers.length === 0) { // si no hay usarios para la sección
            fetchAndStoreUsers(3).then(users => { //a través del fetch los obtenemos
                setUsersSection(users) //y los mostramos aniadienlos a la sección
            });
        } else { //en el caso de que si hayan usuarios almacenados en el localStorage
            fetchAndStoreUsers(3).then(() => { //realizamos un fetch para obtener los usuarios (random)
                const updatedUsers = JSON.parse(localStorage.getItem(sectionName) || '[]') as User[]; //una vez obtenidos recuperamos los usuarios, tanto los ya alamcenados como los nuevos
                const filteredUsers = updatedUsers.filter(user => !user.isFollowed && user.login.username !== userNameOfUserInProfileView ) //filtramos los usuarios a los que no se les siue            
                const randomUsers = filteredUsers.sort(() => 0.5 - Math.random()).slice(0, numberOfUsersToShow); //y obtenemos, además, solo tres usuarios a mostrar que cumplan esas codiciones
                setUsersSection(randomUsers); //mostramos los tres usuarios random obtenidos 
            })
        }
    }
}
