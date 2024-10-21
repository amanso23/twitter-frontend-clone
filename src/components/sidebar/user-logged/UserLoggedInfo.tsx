import { useEffect } from "react"
import { loadLoggedUserInLocalStorage } from "../../../utils/user/loadLoggeUserInLocalStorage"
import { OptionsSVG, VerifiedSVG } from "../../icons"
import { loggedUser } from "./data"

const UserLoggedInfo = () => {

    const name = `${loggedUser.name.first} ${loggedUser.name.last}`
    const { username } = loggedUser.login 

    useEffect(() => {
        loadLoggedUserInLocalStorage(loggedUser)
    }, [])

    return (
        <div>
            <section className="flex items-center justify-center xl:justify-between transition-colors rounded-full duration-200 hover:bg-[#181818] mb-4 mr-2 xl:p-3 cursor-pointer">
                <aside className="flex items-center gap-x-2">
                    <picture>
                        <img
                            src={`${loggedUser.picture.large}`}
                            alt={`image-${loggedUser.name.first}`}
                            className="size-12 rounded-full"
                        />
                    </picture>
                    <div className="flex-col text-left hidden xl:flex ">
                        <div className="flex items-center gap-x-1">
                            <p className=" font-bold ">{name}</p>
                            {loggedUser.isVerified ? loggedUser.isAfiliated ? <VerifiedSVG className="fill-[#e2b719] size-5 mt-[2px]" /> : <VerifiedSVG className="fill-[#1d9bf0] size-5 mt-[2px]" /> : ""}
                            
                        </div>
                        <p className="opacity-60">@{username}</p>
                    </div>
                </aside>
                <OptionsSVG className="size-4 xl:size-5 hidden xl:flex " />
            </section>
        </div>
    )
}

export default UserLoggedInfo