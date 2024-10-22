import { laretalNavItems } from "./data"
import { PlumaSVG, XSVG } from "../../icons"
import Button from "../../comun/Button"
import NavItem from "./NavItem"

interface Props {
    setSelectedItemName: (payload: string) => void
    selectedItemName: string
}

const LateralNav: React.FC<Props> = ({setSelectedItemName, selectedItemName}) => {
    return (
        <nav className="flex flex-col items-center xl:items-start">
            <a href="/home">
                <XSVG className="w-7 h-7 sm:w-8 sm:h-8 m-4 sm:m-5 cursor-pointer" />
            </a>
            {laretalNavItems.map((item, index) => (
                <NavItem
                    key={index}
                    item={item}
                    selectedItemName={selectedItemName}
                    setSelectedItemName={setSelectedItemName}
                />
            ))}
            <Button
                content="Postear"
                className="p-3 sm:p-4 bg-[#1d9bf0] font-bold text-lg sm:text-xl w-10/12 rounded-full mt-2 transition-colors duration-300 hover:bg-[#1a8cd8] hidden xl:block"
            />
            <Button
                content={<PlumaSVG className="w-5 h-5 sm:w-7 sm:h-7" />}
                className="p-3 sm:p-4 bg-[#1d9bf0] font-bold text-lg m-auto rounded-full mt-2 transition-colors duration-300 hover:bg-[#1a8cd8] block xl:hidden"
            />
        </nav>
    )
}

export default LateralNav
