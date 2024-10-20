import { User } from "../../../../utils/user/user.types"
import { VerifiedSVG } from "../../../icons"

interface Props {
    user: User
}

const UserCard: React.FC<Props> = ({user}) => {

    const {username} = user.login
    const name = `${user.name.first}${user.name.last}`

    return (
        <a href={`/${name}`} className="flex items-center gap-x-2 ml-4 mt-4" >
            <img
                src={user.picture.large}
                alt={name}
                className="size-12 rounded-full"
            />
            <div className="flex flex-col items-start">
                <div className="flex items-center gap-x-1">
                    <p className="font-bold hover:underline truncate">
                        {name}
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
                <p className="text-[#71767b]">@{username}</p>
            </div>
        </a>
    )
}

export default UserCard