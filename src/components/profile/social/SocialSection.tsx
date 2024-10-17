import { getParsedNumber } from "../../../utils/user/getParsedFollowingOrFollowers"

interface Props {
    followers: number
    following: number
}

const SocialSection: React.FC<Props> = ({followers, following}) => {
    return (
        <div className="flex gap-x-4 items-center mt-4 cursor-pointer text-[17px]">
            <span className="flex items-center hover:underline gap-x-1">
                <b>{getParsedNumber(following)}</b>
                <p className="text-[#64686d] ">Siguiendo</p>
            </span>
            <span className="flex items-center hover:underline gap-x-1">
                <b>{getParsedNumber(followers)}</b>
                <p className="text-[#64686d]">Seguidores</p>
            </span>

        </div>
    )
}

export default SocialSection