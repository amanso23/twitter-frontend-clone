import Nav from "./nav/Nav"
import UserLoggedInfo from "./user-logged/UserLoggedInfo"

const SideBar = () => {
    return (
        <div className="sticky top-0 flex flex-col h-screen justify-between">
            <Nav />
            <UserLoggedInfo />
        </div>
    )
}

export default SideBar