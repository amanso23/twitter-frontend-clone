import { User } from "./user.types"

export const getRandomUser = async(): Promise<User> => {
    try{
        const response = await fetch("https://randomuser.me/api/")

        if(!response.ok){
            throw new Error (`${response.status}, error en la solicitud`)
        }

        const data = await response.json()

        data.results[0].isFollowed = false

        return data.results[0]
    }catch(error){
        console.error(error);
        throw error
        
    }

}