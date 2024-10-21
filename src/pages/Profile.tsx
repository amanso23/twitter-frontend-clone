import UserProfile from "../components/profile/UserProfile"
import RightSideBar from "../components/right-sidebar/RightSideBar"
import TrendingSection from "../components/right-sidebar/trending-section/TrendingSection"

const Profile = () => {

    return (
        <>
            <UserProfile />
            <RightSideBar children={<TrendingSection />} />
        </>
    )
}

export default Profile