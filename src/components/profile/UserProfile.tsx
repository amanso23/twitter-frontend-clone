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
import { getUsersWithPostsFromLocalStorage } from "../../utils/posts/getUsersWithPostsFromLocalStorage"
import { parseFeedPostToUserWithPost } from "../../utils/user/parseFeedPostToUserWithPost"


const UserProfile = () => {
    const { name } = useParams()

    const [selectedItem, setSelectedItem] = useState("Posts")
    const [foundUser, setFoundUser] = useState<UserWithPost>()
    
    useEffect(() => {
        const usersWithPosts = getUsersWithPostsFromLocalStorage();
        const usersToFollow = getUsersFromLocalStorage("A quién seguir");
        const maybeYouLike = getUsersFromLocalStorage("Tal vez te guste");

        // Asegúrate de que usersWithPosts sea un array
        const userWithPost = usersWithPosts.find(userPost =>
            `${userPost.user.name.first}${userPost.user.name.last}` === name
        );

        if (userWithPost) {
            const parsedUser = parseFeedPostToUserWithPost(userWithPost);
            console.log("Usuario encontrado en usersWithPosts:", parsedUser);
            setFoundUser(parsedUser);
            return;
        }

        const userFromWhoToFollow = usersToFollow.find(user =>
            `${user.name.first}${user.name.last}` === name
        );

        if (userFromWhoToFollow) {
            console.log("Usuario encontrado en usersToFollow:", userFromWhoToFollow);
            setFoundUser({ ...userFromWhoToFollow, sectionName: "A quién seguir" });
            return;
        }

        const userFromMaybeYouLike = maybeYouLike.find(user =>
            `${user.name.first}${user.name.last}` === name
        );

        if (userFromMaybeYouLike) {
            console.log("Usuario encontrado en maybeYouLike:", userFromMaybeYouLike);
            setFoundUser({ ...userFromMaybeYouLike, sectionName: "Tal vez te guste" });
            return;

    }}, [name])


    useEffect(() => {
        if (foundUser) {
            loadUserInProfile(foundUser.login.username)
        }

    }, [foundUser]);

        return (
            <div className="border-l-[0.5px] border-r-[0.5px] border-[#2f3336]">
                <Header
                    icon={<LeftArrow className="fill-white hover:bg-[#181919] p-2 rounded-full size-9 m-2" />}
                    name={foundUser ? `${foundUser?.name?.first} ${foundUser?.name?.last}` : 'Perfil'}
                    isVerified={foundUser?.isVerified ?? false} 
                    isAfiliated={foundUser?.isAfiliated ?? false} 
                    cantityOfPost={foundUser?.posts?.length ?? ""} 
                />
            
                <UserProfileCard user={foundUser} userName={name} />  
                {foundUser && <ProfileNav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} 
                <ProfileFeed posts={foundUser?.posts} user={foundUser} /> 
            </div>
        )
        
}

export default UserProfile