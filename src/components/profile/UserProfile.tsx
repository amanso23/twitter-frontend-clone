import { useParams } from "react-router-dom"
import { LeftArrow } from "../icons"
import Header from "./header/Header"
import UserProfileCard from "./card/UserProfileCard"
import { getUsersFromLocalStorage } from "../../utils/user/getUsersFromLocalStorage"
import { useEffect, useState } from "react"
import ProfileNav from "./nav/ProfileNav"
import { loadUserInProfile } from "../../utils/user/loadUserInProfile"
import { UserWithPost } from "../../utils/user/user.types"
import ProfileFeed from "./profile-feed/ProfileFeed"


const UserProfile = () => {
    const { name } = useParams()

    const [selectedItem, setSelectedItem] = useState("Posts")
    const [foundUser, setFoundUser] = useState<UserWithPost>()

    useEffect(() => {
        const userFromWhoToFollow = getUsersFromLocalStorage("A quién seguir").find(user => {
            return `${user.name.first}${user.name.last}` === name
        });
    
        let foundUserAux
    
        if (userFromWhoToFollow) {
            foundUserAux = { ...userFromWhoToFollow, sectionName: "A quién seguir" }
        } else {
            const userFromMaybeYouLike = getUsersFromLocalStorage("Tal vez te guste").find(user => {
                return `${user.name.first}${user.name.last}` === name
            });
            if (userFromMaybeYouLike) {
                foundUserAux = { ...userFromMaybeYouLike, sectionName: "Tal vez te guste" }
            }
        }
    
        if (foundUserAux && foundUserAux !== foundUser) {
            setFoundUser(foundUserAux)
        }
    
    }, [name])
    
  
    useEffect(() => {
        if (foundUser) {
            loadUserInProfile(foundUser.login.username)
        }
    }, [foundUser]);
    
    
    return (
        <div className="border-l-[0.5px] border-r-[0.5px]  border-[#2f3336]">
            {foundUser ? (<Header icon={<LeftArrow className="fill-white hover:bg-[#181919] p-2 rounded-full size-9 m-2" />} name={`${foundUser.name.first} ${foundUser.name.last}`} isVerified={foundUser.isVerified} isAfiliated={foundUser.isAfiliated} cantityOfPost={foundUser.posts.length}  />) 
                       : (<Header icon={<LeftArrow className="fill-white hover:bg-[#181919] p-2 rounded-full size-9 m-2" />} />)
            }
            {foundUser ? 
                <UserProfileCard user={foundUser} />
                   
                    : "" }
            {foundUser && <ProfileNav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
            {foundUser && <ProfileFeed posts={foundUser.posts} user={foundUser} />}

            
        </div>
    )
}
export default UserProfile