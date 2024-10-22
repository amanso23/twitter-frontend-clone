import { useState } from "react"
import { Comment } from "../../../../utils/posts/post.types"
import { getParsedNumber } from "../../../../utils/user/getParsedFollowingOrFollowers"
import { BookMarkSVG, ImpressionsSVG, LikeSVG, RetuitSVG, ShareSVG, VerifiedSVG } from "../../../icons"

interface Props {
    comment: Comment
}

const CommentCard: React.FC<Props> = ({ comment }) => {
    const [isLiked, setIsLiked] = useState(false)

    const { user } = comment
    const { username } = user.login
    const name = `${user.name.first}${user.name.last}`

    const handleClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className="grid grid-cols-[48px,1fr] md:grid-cols-[60px,1fr] border-b-[0.5px] border-[#2f3336] gap-x-2 p-2 md:p-4">
            <div className="flex justify-end">
                <img
                    src={user.picture.large}
                    alt={name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
            </div>

            <div className="flex flex-col">
                <div className="flex gap-x-1">
                    <p className="font-bold hover:underline truncate text-sm md:text-base">
                        {name}
                    </p>
                    {user.isVerified ? (
                        <VerifiedSVG
                            className={`${user.isAfiliated ? 'fill-[#e2b719]' : 'fill-[#1d9bf0]'} w-4 h-4 md:w-5 md:h-5 mt-[2px]`}
                        />
                    ) : (
                        ''
                    )}
                    <p className="text-[#71767b] text-xs md:text-sm">@{username}</p>
                </div>
                <p className="text-left text-sm md:text-base">{comment.text}</p>

                <div className="flex justify-between items-center gap-x-4 md:gap-x-12 xl:gap-x-16 border-[#2f3336] border-b-[0.5px] mt-2 md:mt-4">
                    <div className="flex items-center justify-between flex-1">
                        <span className="flex items-center gap-x-1 text-xs md:text-sm">
                            <RetuitSVG className="fill-[#71767b] w-5 h-5 md:w-[22px] md:h-[22px]" />
                            <p className="text-[#71767b]">{getParsedNumber(comment.replies)}</p>
                        </span>
                        <span
                            className={`${isLiked ? "fill-[#f91880] text-[#f91880] stroke-[#f91880]" : "stroke-2 stroke-[#71767b] text-[#71767b]"} flex items-center gap-x-1 cursor-pointer transition-colors duration-300 hover:text-[#f91880] hover:stroke-[#f91880]`}
                            onClick={handleClick}
                        >
                            <LikeSVG className="w-5 h-5 md:w-[21px] md:h-[21px] rounded-full" />
                            <p>{getParsedNumber(comment.likes)}</p>
                        </span>
                        <span className="flex items-center gap-x-1 text-xs md:text-sm">
                            <ImpressionsSVG className="fill-[#71767b] w-5 h-5 md:w-[22px] md:h-[22px]" />
                            <p className="text-[#71767b]">{getParsedNumber(comment.impressions)}</p>
                        </span>
                    </div>
                    <div className="flex items-center justify-between gap-x-2 md:gap-x-3">
                        <BookMarkSVG className="w-5 h-5 md:w-[22px] md:h-[22px] fill-[#71767b]" />
                        <ShareSVG className="w-5 h-5 md:w-[22px] md:h-[22px] fill-[#71767b]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
