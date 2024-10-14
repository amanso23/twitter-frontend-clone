import { headerNavItems } from "./data"
import HeaderNavItem from "./HeaderNavItem"

interface Props {
    selectedItem: string,
    setSelectedItem: (payload: string) => void
}

const HeaderNav: React.FC<Props> = ({selectedItem, setSelectedItem}) => {

    return (
            <nav className="sticky top-0 flex items-center justify-between border-b-[0.5px] border-[#2f3336] z-10 backdrop-blur-md bg-black/30">
                {headerNavItems.map((item, index) => (
                    <ul className="flex flex-1" key={index}>
                        <HeaderNavItem 
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