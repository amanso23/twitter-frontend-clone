import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import SpinLoader from "../../loaders/SpinLoader"
import { User } from "../../../utils/user/user.types"
import { loadUsersSection } from "../../../utils/user/loadUsersSection"


const UsersSection = ({sectionName}:{sectionName: string}) => {

    const [usersSection, setUsersSection] = useState<User[] | null >(null) //estado que almacena los usurios
    const [debounceTimer, setDebounceTimer] = useState<ReturnType<typeof setTimeout> | null>(null); // Estado para almacenar el temporizador
  
    useEffect(() => {
        
        if (debounceTimer) {
            clearTimeout(debounceTimer)
        }

        const timer = setTimeout(() => {
            if (sectionName) {
                loadUsersSection(setUsersSection, sectionName)

            }
        }, 500)

        setDebounceTimer(timer)

        return () => {
            clearTimeout(timer)
        }
    }, [sectionName])
    

    return (
        <div>
            {usersSection ? (
                <section className="flex flex-col rounded-2xl border-[0.5px] border-[#2f3336] gap-y-2 m-6">
                <h1 className="font-bold text-2xl text-left ml-5 mt-2">{sectionName}</h1>

            
                    <aside className="flex flex-col items-start">
                        {usersSection?.length > 0 ? usersSection.map((user, index) => (
                            <UserCard user={user} key={index} sectionName={sectionName} />
                        )) : <p className="self-center text-[#1b8ad5] text-xs m-4">Nada que mostrar</p>}
                    </aside>
              
                    {usersSection?.length > 0 &&  
                        <a href="#"  className="text-[#1b8ad5] self-start ml-5 mb-4 hover:underline " >
                        Mostrar más
                        </a> 
                    }
            </section>
            ): <section className="flex justify-center items-center min-h-[296px] border-[0.5px] border-[#2f3336] gap-y-4 m-4 rounded-2xl">
                <SpinLoader />
                </section>}
        </div>
    )
}

export default UsersSection

