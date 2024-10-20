import { getRandomDescription } from "./getRandomDescription"
import { getRandomIsVerified } from "./getRandomIsVerified"
import { getRandomNumber } from "../getRandomNumber"
import { UserWithPost } from "./user.types"
import { getRandomPosts } from "../posts/getRandomPosts"
import { getRandomUserPost } from "../posts/getRandomUserPost"

const MAX_FOLLOWERS = 10000
const MAX_FOLLOWING = 1000
const MAX_POST_USER = 5

export const getRandomUser = async() => {

        try{
            const response = await fetch("https://randomuser.me/api/")

            if(!response.ok){
                throw new Error(`${response.statusText}, error en la solicitud`)
            }

            const data = await response.json()

            const result = data.results[0]

            const isVerified = getRandomIsVerified()

            const user: UserWithPost = {
                gender: result.gender || "unknown",
                name: result.name || { title: "", first: "", last: "" },
                location: result.location || { street: "", city: "", state: "", country: "", postcode: "" },
                email: result.email || "noemail@example.com",
                login: result.login || { uuid: "", username: "", password: "" },
                dob: result.dob || { date: "", age: 0 },
                registered: result.registered || { date: "", age: 0 },
                phone: result.phone || "",
                cell: result.cell || "",
                id: result.id || { name: "", value: "" },
                picture: result.picture || { large: "", medium: "", thumbnail: "" },
                nat: result.nat || "unknown",
                isFollowed: false,
                sectionName: "A quién seguir",
                isVerified: isVerified,
                isAfiliated: isVerified ? getRandomIsVerified() : false,
                description: getRandomDescription(),
                social: {
                    following: getRandomNumber(MAX_FOLLOWING),
                    followers: getRandomNumber(MAX_FOLLOWERS) 
                },
                posts: await getRandomPosts(getRandomNumber(MAX_POST_USER), getRandomUserPost)
            }

            console.log(user.posts)
            

            return user

        }catch(error){
            console.error(error)
            throw error
        }

        // const result = users[getRandomNumber(users.length)]

    
}