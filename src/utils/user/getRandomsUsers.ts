import { getRandomUser } from "./getRandomUser"
import { User } from "./user.types"

export const getRandomsUsers = async(cantity: number) => {
    const randomsUsers: User[] = []
    try{
        for(let i = 0; i < cantity; i++){
            const randomUser = await getRandomUser()
            randomsUsers.push(randomUser)
        } 
        return randomsUsers
    }catch(error){
        console.log(error);
    }
}