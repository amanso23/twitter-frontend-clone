interface Props {
    selectedItem:string
    setSelectedItem: (payload: string) => void
    item: string
}

const HeaderNavItem: React.FC<Props> = ({item, selectedItem, setSelectedItem}) => {


    return (
        <li 
            className={`${selectedItem === item ? "text-white " : " text-[#6b7075]"} flex-1 text-center px-10 py-3 transition-colors duration-300 hover:bg-[#181818] cursor-pointer font-semibold relative text-lg whitespace-nowrap overflow-hidden`}
            onClick={() => setSelectedItem(item)}
        >   {item}
            {selectedItem === item && <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 rounded-xl bg-[#1d9bf0] mt-2"></span>}
            
        </li>
    )
}

export default HeaderNavItem