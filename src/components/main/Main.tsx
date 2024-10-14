import { useState } from "react"
import HeaderNav from "./header/HeaderNav"
import TextArea from "./textarea/TextArea"
import Feed from "./feed/Feed"

const Main = () => {

    const [selectedItem, setSelectedItem] = useState("Para ti")
    
    return (
        <div className="border-[0.5px] border-[#2f3336]">
            <HeaderNav
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            <TextArea />
            {selectedItem === "Para ti" ? <Feed /> : <Feed />}
        </div>
    )
}

export default Main