import { laretalNavItems } from "./data"
import { PlumaSVG, XSVG } from "../../icons"
import Button from "../../comun/Button"
import { useState } from "react"
import NavItem from "./NavItem"

const LateralNav = () => {

    const [selectedItemName, setSelectedItemName] = useState("Inicio")

    return (
        <nav className="flex flex-col items-center xl:items-start">
            <a href="/home">
                <XSVG className="size-8 m-5 cursor-pointer" />
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
                className="p-4 bg-[#1d9bf0] font-bold text-xl w-10/12 rounded-full mt-2 transition-colors duration-300 hover:bg-[#1a8cd8] hidden xl:block"
            />
            <Button
                content={<PlumaSVG className="size-7" />}
                className="p-4 bg-[#1d9bf0] font-bold text-xl m-auto  rounded-full mt-2 transition-colors duration-300 hover:bg-[#1a8cd8] block xl:hidden "
            />
        </nav>
    )
}

export default LateralNav