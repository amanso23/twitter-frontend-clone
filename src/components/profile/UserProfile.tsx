import { useParams } from "react-router-dom"
import { LeftArrow } from "../icons"
import Header from "./header/Header"
import { User } from "../../utils/user/user.types"
import UserProfileCard from "./card/UserProfileCard"

const UserProfile = () => {
    const { name } = useParams();

    const getUsersFromLocalStorage = (sectionName: string): User[] => {
        return JSON.parse(localStorage.getItem(sectionName) || "[]");
    }
    
    const userFromWhoToFollow = getUsersFromLocalStorage("A quién seguir").find(user => {
        return `${user.name.first}${user.name.last}` === name;
    })
    
    const foundUser = userFromWhoToFollow || getUsersFromLocalStorage("Tal vez te guste").find(user => {
        return `${user.name.first}${user.name.last}` === name;
    })

    return (
        <div className="border-[0.5px] border-[#2f3336]">
            {foundUser ? (<Header icon={<LeftArrow className="fill-white hover:bg-[#181919] p-2 rounded-full size-9 m-2" />} name={`${foundUser.name.first} ${foundUser.name.last}`}/>) 
                       : (<Header icon={<LeftArrow className="fill-white hover:bg-[#181919] p-2 rounded-full size-9 m-2" />} />)
            }
            {foundUser ? <UserProfileCard user={foundUser} /> : "" }
            
            
        </div>
    )
}
export default UserProfile