import { useState } from "react"
import { User } from "../../../utils/user/user.types"
import Button from "../../comun/Button"
import EmojisSelectSection from "./emojis/EmojisSelectSection"

const TextArea = () => {

    const [inputTextAreaValue, setInputTextAreaValue] = useState("")

    const item = localStorage.getItem("loggedUser")
    const loggedUser: User = item ? JSON.parse(item) : null

    return (
        <div className="grid grid-cols-[80px,1fr]  min-h-36 ">
            <section className="flex justify-center m-4">
                    
                        <img
                            src={loggedUser?.picture.thumbnail}
                            alt={loggedUser?.name.first}
                            className="size-12 rounded-full"
                        />
                    
                    
            </section>
            <section className="grid grid-rows-[1fr,70px]">
                <input 
                    type="textarea" 
                    className="w-full bg-black placeholder:text-[22px] placeholder:text-[#64686d] focus:outline-none"
                    placeholder="¡¿Qué está pasando?!"
                    value={inputTextAreaValue}
                    onChange={(e) => setInputTextAreaValue(e.currentTarget.value)}
                />
                
                <span className="flex justify-between items-center mt-2" >
                    <EmojisSelectSection setInputTextAreaValue={setInputTextAreaValue} />
                    <Button  
                        content="Postear" 
                        className={` ${inputTextAreaValue !== "" ? "bg-[#1d9bf0] text-white hover:bg-[#1d9bf0]"  : "bg-[#0f4e78] text-[#808080] "} px-4 py-1.5 font-bold rounded-full  mb-4 mr-4`}
                        disabled={inputTextAreaValue === ""}
                    />
                </span>
            </section>
        </div>
        
    )
}

export default TextArea