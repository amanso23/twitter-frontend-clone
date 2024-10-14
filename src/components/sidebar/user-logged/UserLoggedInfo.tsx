import { useEffect, useState } from "react"
import { OptionsSVG } from "../../icons"
import UserLoggedInfoSkeleton from "../../loaders/UserLoggedInfoSkeleton"
import { loadLoggedUser } from "../../../utils/user/loadLoggedUser"
import { User } from "../../../utils/user/user.types"


const UserLoggedInfo = () => {

    const [loggedUser, setLoggedUser] = useState<User>()

    useEffect(() => {
        loadLoggedUser(setLoggedUser)
    }, [])

    return (
        <div>
            {loggedUser ? (
                <section className="flex items-center justify-center xl:justify-between transition-colors rounded-full duration-200 hover:bg-[#181818] mb-4 mr-2 xl:p-3 cursor-pointer">
                    <aside className="flex items-center gap-x-2">
                        <picture>
                            <img
                                src={loggedUser?.picture.thumbnail}
                                alt={loggedUser?.name.first}
                                className="size-12 rounded-full"
                            />
                        </picture>
                        <div className="flex-col text-left hidden xl:flex ">
                            <p className="ml-1">{loggedUser?.name.first} {loggedUser?.name.last}</p>
                            <p className="opacity-60">@{loggedUser?.login.username}</p>
                        </div>
                    </aside>
                    <OptionsSVG className="size-4 xl:size-5 hidden xl:flex " />
                </section>
            ) : <UserLoggedInfoSkeleton />}
        </div>

    )
}

export default UserLoggedInfo