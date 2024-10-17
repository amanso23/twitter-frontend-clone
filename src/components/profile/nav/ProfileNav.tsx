import { profileNavItems } from "./data"
import ProfileNavItem from "./ProfileNavItem"

interface Props {
    selectedItem: string,
    setSelectedItem: (payload: string) => void
}

const HeaderNav: React.FC<Props> = ({selectedItem, setSelectedItem}) => {

    return (
            <nav className="flex items-center justify-between ">
                {profileNavItems.map((item, index) => (
                    <ul className="flex flex-1" key={index}>
                        <ProfileNavItem 
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                            item={item}
                        />
                    </ul> 
                ))}
        </nav>
        
    )
}

export default HeaderNav