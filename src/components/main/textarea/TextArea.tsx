import { useState } from "react"
import Button from "../../comun/Button"
import EmojisSelectSection from "./emojis/EmojisSelectSection"

const TextArea = () => {

    const [inputTextAreaValue, setInputTextAreaValue] = useState("")


    return (
        <div className="grid grid-cols-[80px,1fr]  min-h-36 ">
            <section className="flex justify-center m-4">
                    
                        <img
                            src="https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png?s=200"
                            alt="musk-picture"
                            className="size-12 rounded-full"
                        />
            </section>
            <section className="grid grid-rows-[1fr,70px] mr-6">
                <textarea 
                    wrap="soft"
                    className=" bg-black placeholder:text-[22px] placeholder:text-[#64686d] focus:outline-none w-full resize-none overflow-hidden mt-4 placeholder:text-2xl text-2xl mr-1 border-b-[0.5px] border-[#2f3336]"
                    placeholder="¡¿Qué está pasando?!"
                    value={inputTextAreaValue}
                    onChange={(e) => setInputTextAreaValue(e.currentTarget.value)}
                />
                
                <span className="flex justify-between items-center " >
                    <EmojisSelectSection setInputTextAreaValue={setInputTextAreaValue} />
                    <Button  
                        content="Postear" 
                        className={` ${inputTextAreaValue !== "" ? "bg-[#1d9bf0] text-white hover:bg-[#1d9bf0]"  : "bg-[#0f4e78] text-[#808080] "} px-4 py-1.5 font-bold rounded-full mb-1`}
                        disabled={inputTextAreaValue === ""}
                    />
                </span>
            </section>
        </div>
        
    )
}

export default TextArea