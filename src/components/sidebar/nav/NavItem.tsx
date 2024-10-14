import { NavItemType } from "./nav.types"

interface Props {
    item: NavItemType
    selectedItemName: string
    setSelectedItemName: (payload: string) => void

}

const NavItem: React.FC<Props> = ({ item, selectedItemName, setSelectedItemName }) => {
    return (
        <li
            className="inline-flex items-center gap-x-5 py-3 px-3 md:px-5 transition-colors rounded-full duration-200 hover:bg-[#181818] cursor-pointer "
            onClick={() => setSelectedItemName(item.name)}
        >
            {item.name === "Inicio" && <span className="absolute w-[7px] h-[7px] rounded-full bg-[#1d9bf0] mb-8 ml-6"></span>}
            <item.icon className={`size-8 stroke-1 stroke-white ${item.name === selectedItemName ? "fill-white" : "stroke-2"}` } />
            <p className={`${item.name === selectedItemName ? "font-bold" : "font-normal"} text-[22px] hidden xl:block text-white whitespace-nowrap  overflow-hidden max-w-[185px]`}>
                {item.name}
            </p>
        </li>
    )
}

export default NavItem