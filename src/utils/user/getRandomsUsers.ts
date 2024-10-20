import { getRandomUser } from "./getRandomUser"
import { User } from "./user.types"

export const getRandomsUsers = async(cantity: number) => {
    const randomsUsers: User[] = []
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