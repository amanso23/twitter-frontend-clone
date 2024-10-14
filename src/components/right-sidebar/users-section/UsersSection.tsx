import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import SpinLoader from "../../loaders/SpinLoader"
import { User } from "../../../utils/user/user.types"
import { loadUsersSection } from "../../../utils/user/loadUsersSection"

const UsersSection = ({sectionName}:{sectionName: string}) => {

    const [usersSection, setUsersSection] = useState<User[]>([]) //estado que almacena los usurios
    
    useEffect(() => {
        loadUsersSection(setUsersSection, sectionName) //cargamos los usuarios en nuestro estado
    }, [sectionName])

    return (
        <div>
            {usersSection.length > 0 ? (
                <section className="flex flex-col rounded-2xl border-[0.5px] border-[#2f3336] gap-y-2 m-6">
                <h1 className="font-bold text-2xl text-left ml-5 mt-2">{sectionName}</h1>

                <aside className="flex flex-col items-start">
                    {usersSection.length > 0 && usersSection.map((user, index) => (
                        <UserCard user={user} key={index} sectionName={sectionName} />
                    ))}
                </aside>

                <a href="/"  className="text-[#1b8ad5] self-start ml-5 mb-4 hover:underline ">
                        Mostrar más
                </a>

            </section>
            ): <section className="flex justify-center items-center min-h-[296px] border-[0.5px] border-[#2f3336] gap-y-4 m-4 rounded-2xl">
                <SpinLoader />
                </section>}
        </div>
    )
}

export default UsersSection

