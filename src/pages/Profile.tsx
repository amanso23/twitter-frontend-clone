import UserProfile from "../components/profile/UserProfile"
import RightSideBar from "../components/right-sidebar/RightSideBar"

const Profile = () => {

    return (
        <>
            <UserProfile />
            <RightSideBar sectionName="Tal vez te guste" />
        </>
    )
}

export default Profile