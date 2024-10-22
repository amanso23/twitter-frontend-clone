
import { useEffect, useState } from "react"
import { Post } from "../../../utils/posts/post.types"
import { getParsedNumber } from "../../../utils/user/getParsedFollowingOrFollowers"
import { User } from "../../../utils/user/user.types"
import { BookMarkSVG, CommentSVG, ImpressionsSVG, LikeSVG, RetuitSVG, ShareSVG, VerifiedSVG } from "../../icons"
import confetti from 'canvas-confetti'
import { updateIsLikedAndLikeCount } from "../../../utils/posts/updateIsLikedAndLikeCount"
import { updateIsRetweetedAndRepliesCount } from "../../../utils/posts/updateIsRetweetedAndRepliesCount"

interface Props {
    post: Post
    user: User
}

const ProfilePostCard: React.FC<Props> = ({ post, user }) => {

    const name = `${user.name.first}${user.name.last}`
    const { username } = user.login

    const [isLiked, setIsLiked] = useState(post.isLiked)
    const [isRetweeted, setIsRetweeted] = useState(post.isRetweeted)

    const handleClickRetweeted = () => {

        setIsRetweeted(!isRetweeted)

        if (!isRetweeted) {
            post.replies += 1
        } else {
            post.replies -= 1
        }
    }

    useEffect(() => {
        updateIsRetweetedAndRepliesCount(user.sectionName, post.id, post.replies, isRetweeted)
    }, [isRetweeted])

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const currentTarget = e.currentTarget

        const { left, top, width, height } = currentTarget.getBoundingClientRect()

        setIsLiked(!isLiked)

        if (!isLiked) {
            confetti({
                particleCount: 80,
                angle: 90,
                spread: 40,
                origin: {
                    x: (left + width / 2) / window.innerWidth,
                    y: (top + height / 2) / window.innerHeight
                },
                gravity: 2,
            })
        }

        if (!isLiked) {
            post.likes += 1
        } else {
            post.likes -= 1
        }
    }

    useEffect(() => {
        updateIsLikedAndLikeCount(user.sectionName, post.id, post.likes, isLiked)
    }, [isLiked])


    return (
        <div className="border-t-[0.5px] border-[#2f3336]">
            <div className="grid grid-cols-[40px,1fr] md:grid-cols-[60px,1fr] m-4 md:m-6 md:gap-4">
                <div className="flex justify-end">
                    <img
                        src={user.picture.large}
                        alt={`user-${name}`}
                        className="size-10 mr-2 md:size-12 rounded-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-x-1 mb-1">
                        <p className="font-bold truncate text-sm md:text-base">{name}</p>
                        {user.isVerified && (
                            <VerifiedSVG
                                className={`${user.isAfiliated ? 'fill-[#e2b719]' : 'fill-[#1d9bf0]'} size-5 mt-[2px]`}
                            />
                        )}
                        <p className="text-[#71767b] text-xs md:text-sm">@{username}</p>
                    </div>

                    <a href={`/${name}/status/${post.id}`} className="flex flex-col">
                        <p className="mb-2 md:mb-4 text-left text-sm md:text-base">{post.text}</p>
                        <img
                            src={post.image}
                            alt={`post ${post.id}`}
                            className="rounded-xl md:rounded-2xl border-[0.5px] border-[#2f3336] w-full aspect-square"
                        />
                    </a>

                    <div className="flex justify-between items-center gap-4 md:gap-x-12 xl:gap-x-16 border-[#2f3336] border-b-[0.5px]">
                        <div className="flex items-center justify-between flex-1 ml-2 md:ml-4 mb-2 md:mb-4 mt-2">
                            <span className="flex items-center gap-x-1 text-[#71767b] fill-[#71767b] transition-colors duration-300 hover:text-[#1d9bf0] hover:fill-[#1d9bf0]">
                                <CommentSVG className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                                <p className="text-xs md:text-base">{getParsedNumber(post.comments.length)}</p>
                            </span>
                            <span
                                className={`${isRetweeted ? "text-[#019966] fill-[#019966]" : "text-[#71767b] fill-[#71767b] hover:text-[#019966] hover:fill-[#019966]"} transition-colors duration-300 flex items-center gap-x-1 cursor-pointer`}
                                onClick={handleClickRetweeted}
                            >
                                <RetuitSVG className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                                <p className="text-xs md:text-base">{getParsedNumber(post.replies)}</p>
                            </span>
                            <span
                                className={`${isLiked ? "fill-[#f91880] text-[#f91880] stroke-[#f91880]" : "stroke-2 stroke-[#71767b] text-[#71767b]"} flex items-center gap-x-1 cursor-pointer transition-colors duration-300 hover:text-[#f91880] hover:stroke-[#f91880]`}
                                onClick={handleClick}
                            >
                                <LikeSVG className="w-5 h-5 md:w-[21px] md:h-[21px]" />
                                <p className="text-xs md:text-base">{getParsedNumber(post.likes)}</p>
                            </span>
                            <span className="flex items-center gap-x-1 text-[#71767b] fill-[#71767b] transition-colors duration-300 hover:text-[#1d9bf0] hover:fill-[#1d9bf0] cursor-pointer">
                                <ImpressionsSVG className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                                <p className="text-xs md:text-base">{getParsedNumber(post.impressions)}</p>
                            </span>
                        </div>
                        <div className="flex items-center justify-between gap-x-2 md:gap-x-3 mr-2 md:mr-4 mb-2 md:mb-4 mt-2">
                            <BookMarkSVG className="w-5 h-5 md:w-[22px] md:h-[22px] fill-[#71767b]" />
                            <ShareSVG className="w-5 h-5 md:w-[22px] md:h-[22px] fill-[#71767b]" />
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default ProfilePostCard