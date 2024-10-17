import { getRandomDescription } from "./getRandomDescription"
import { getRandomIsVerified } from "./getRandomIsVerified"
import { getRandomNumber } from "../getRandomNumber"
import { User } from "./user.types"

import { users } from "./data"

const MAX_FOLLOWERS = 10000
const MAX_FOLLOWING = 1000

export const getRandomUserWithoutPost = () => {

        const result = users[getRandomNumber(users.length)]

        const isVerified = getRandomIsVerified()

        const user: User = {
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
        }

        console.log(user);
        

        return user
    
}