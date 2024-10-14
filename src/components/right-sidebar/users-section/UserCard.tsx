import { useState } from "react"
import { User } from "../../../utils/user/user.types"
import Button from "../../comun/Button"
import { updateUsersSection } from "../../../utils/user/updateUsersSection"
import { Link } from "react-router-dom"

interface Props {
    user: User
    sectionName: string
}

const UserCard: React.FC<Props> = ({ user, sectionName }) => {

    const [isFollowed, setIsFollowed] = useState(user.isFollowed)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex items-center justify-between w-full py-3 cursor-pointer transitions-colors duration-300 hover:bg-[#080808] p-4">
            <Link to={`/${user.name.first}${user.name.last}`} className="flex items-center gap-x-2">
                <picture>
                    <img
                        src={user?.picture.thumbnail}
                        alt={user?.name.first}
                        className="size-12 rounded-full"
                    />
                </picture>
                <div className="flex-col text-left hidden xl:flex overflow-hidden truncate ">
                    <p className=" font-bold hover:underline">{user?.name.first} {user?.name.last}</p>
                    <p className="text-[#66676e]">@{user?.login.username}</p>
                </div>
            </Link>
            <Button
                content={isFollowed ? isHovered ? "Dejar de seguir" : "Siguiendo" : "Seguir"}
                className={`${isFollowed ? "border border-white text-white bg-black hover:bg-[#200a0c] hover:border hover:border-[#f4212e] hover:text-[#f4212e]" : "bg-white text-black hover:bg-[#dfe3e4]" } px-4 py-1 font-medium rounded-full whitespace-nowrap overflow-hidden`}
                onClick={() => {
                    updateUsersSection(user, isFollowed, sectionName)
                    setIsFollowed(!isFollowed)
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    )
}

export default UserCard