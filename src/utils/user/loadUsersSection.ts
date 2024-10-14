import { getRandomsUsers } from "./getRandomsUsers"
import { User } from "./user.types"

export const loadUsersSection = (setUsersSection: (setUsersSection :User[]) => void, sectionName:string) => {
    const usersSection = localStorage.getItem(sectionName) //intentamos obtener el usuario almacenado en el localStorage como "sectionName"

    if (!usersSection) { // si no encontramos ningún item dentro del localStorage con esa key,
        try {
            getRandomsUsers(3).then(users => { // a través de un fetch a la función getRandoUsers, obtenemos 3 usuarios random,
                if (users) { // si no ha ocurrido ningún error en la solicutud
                    localStorage.setItem(sectionName, JSON.stringify(users)) // guardamos los usuarios en el localStorage con la key "sectionName"
                    setUsersSection(users)
                }
            })
        } catch (error) {
            console.error(error);
        }
    } else { //en el caso de que el getItem obtenga el value del localStorage, cargamos los usuarios en nuestro estado
        setUsersSection(JSON.parse(usersSection))
    }
}