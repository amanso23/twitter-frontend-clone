import { getRandomUser } from "./getRandomUser"
import { User } from "./user.types"
import { loggedUser } from "../../components/sidebar/user-logged/data"

export const getRandomsUsers = async(cantity: number) => {
    const randomsUsers: User[] = [{...loggedUser}]
        for(let i = 0; i < cantity; i++){
            try{
                const randomUser = await getRandomUser()
                randomsUsers.push(randomUser)
            }catch(error){
                console.log(error);
                
            }
            
        } 
    return randomsUsers
    
}