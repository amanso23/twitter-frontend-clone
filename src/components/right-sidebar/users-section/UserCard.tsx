import { useState } from "react"
import { User } from "../../../utils/user/user.types"
import Button from "../../comun/Button"
import { updateUsersSection } from "../../../utils/user/updateUsersSection"
import { VerifiedSVG } from "../../icons"

interface Props {
    user: User
    sectionName: string

}

const UserCard: React.FC<Props> = ({ user, sectionName }) => {

    const [isFollowed, setIsFollowed] = useState(user.isFollowed)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex items-center justify-between w-full py-3 cursor-pointer transitions-colors duration-300 hover:bg-[#080808] p-4">
            <a
                href={`/${user.name.first}${user.name.last}`}
                className="flex items-center gap-x-2 flex-grow min-w-0"
            >
                <picture>
                    <img
                        src={user?.picture.thumbnail}
                        alt={user?.name.first}
                        className="size-12 rounded-full max-w-none max-h-none"
                    />
                </picture>
                <div className="flex-col text-left hidden xl:flex whitespace-nowrap overflow-hidden min-w-0">
                    <div className="flex items-center gap-x-1 overflow-hidden text-ellipsis">
                        <p className="font-bold hover:underline truncate">
                            {user?.name.first} {user?.name.last}
                        </p>
                        {user.isVerified ? (
                            <VerifiedSVG
                                className={`${user.isAfiliated ? 'fill-[#e2b719]' : 'fill-[#1d9bf0]'
                                    } size-5 mt-[2px]`}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                    <p className="text-[#66676e] truncate">@{user?.login.username}</p>
                </div>
            </a>
            <Button
                content={isFollowed ? (isHovered ? 'Dejar de seguir' : 'Siguiendo') : 'Seguir'}
                className={`${isFollowed
                    ? 'border border-white text-white bg-black hover:bg-[#200a0c] hover:border hover:border-[#f4212e] hover:text-[#f4212e] w-[132px]'
                    : 'bg-white text-black hover:bg-[#dfe3e4]'
                    } px-4 py-[5px] font-medium rounded-full whitespace-nowrap overflow-hidden flex items-center justify-center`}
                onClick={() => {
                    updateUsersSection(user, isFollowed, sectionName);
                    setIsFollowed(!isFollowed);
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>

    )
}

export default UserCard