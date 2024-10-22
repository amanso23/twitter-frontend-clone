import Nav from "./nav/Nav"
import UserLoggedInfo from "./user-logged/UserLoggedInfo"

interface Props {
    setSelectedItemName: (payload: string) => void
    selectedItemName: string
}

const SideBar: React.FC<Props> = ({selectedItemName, setSelectedItemName}) => {
    return (
        <div className="sticky top-0 flex flex-col h-screen justify-between">
            <Nav selectedItemName={selectedItemName} setSelectedItemName={setSelectedItemName}/>
            <UserLoggedInfo />
        </div>
    )
}

export default SideBar