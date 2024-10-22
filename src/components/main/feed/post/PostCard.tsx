import { useEffect, useState } from "react"
import { FeedPost } from "../../../../utils/posts/post.types"
import { getParsedNumber } from "../../../../utils/user/getParsedFollowingOrFollowers"
import { VerifiedSVG, CommentSVG, RetuitSVG, LikeSVG, ImpressionsSVG, BookMarkSVG, ShareSVG } from "../../../icons"
import confetti from 'canvas-confetti'
import { Link } from "react-router-dom"
import { updateIsLikedAndLikeCount } from "../../../../utils/posts/updateIsLikedAndLikeCount"
import { updateIsRetweetedAndRepliesCount } from "../../../../utils/posts/updateIsRetweetedAndRepliesCount"

interface Props {
    post: FeedPost
}

const PostCard: React.FC<Props> = ({ post }) => {

    const { user }  = post //obtenemos el usuario
    const { username } = user.login // obtenemos el valor del login del usuario
    const name = `${user.name.first}${user.name.last}` //nombre completo del usuario

    const [isLiked, setIsLiked] = useState(post.isLiked)
    const [isRetweeted, setIsRetweeted] = useState(post.isRetweeted)

    const handleClickRetweeted = () => {
        setIsRetweeted(!isRetweeted)

        if(!isRetweeted){
            post.replies += 1
        }else{
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
        updateIsLikedAndLikeCount(post.user.sectionName, post.id, post.likes, isLiked)
    }, [isLiked])


    return (
        <div className="border-t-[0.5px] border-[#2f3336]">
            <div className="grid grid-cols-[40px,1fr] sm:grid-cols-[60px,1fr] p-3">
                <a href={`/${name}`} className="flex justify-end mr-2 sm:mr-3">
                    <img
                        src={user.picture.large}
                        alt={`post-${post.id}`}
                        className="size-8 md:size-12 rounded-full"
                    />
                </a>

                <div className="flex flex-col">
                    <a href={`/${name}`} className="flex items-center gap-x-1">
                        <p className="font-bold hover:underline truncate text-sm sm:text-base">
                            {name}
                        </p>
                        {post.user?.isVerified ? (
                            <VerifiedSVG
                                className={`${user.isAfiliated ? 'fill-[#e2b719]' : 'fill-[#1d9bf0]'} w-4 h-4 sm:w-5 sm:h-5 mt-[2px]`}
                            />
                        ) : (
                            ''
                        )}
                        <p className="text-[#71767b] text-xs sm:text-sm">@{username}</p>
                    </a>

                    <Link to={`/${name}/status/${post.id}`} >
                        <div className="flex flex-col">
                            <p className="mb-2 text-xs sm:mb-4 sm:text-base text-left">
                                {post.text}
                            </p>
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={`post ${post.id}`}
                                    className="rounded-2xl border-[0.5px] border-[#2f3336] aspect-square object-cover"
                                />
                            )}
                        </div>
                    </Link>

                    <div className="flex justify-between items-center mt-3 gap-x-6 sm:gap-x-12 xl:gap-x-16">
                        <div className="flex items-center justify-between flex-1 gap-2">
                            <a href={`/${name}/status/${post.id}`} className="flex items-center gap-x-1 text-[#71767b] fill-[#71767b] transition-colors duration-300 hover:text-[#1d9bf0] hover:fill-[#1d9bf0] cursor-pointer">
                                <CommentSVG className="w-5 h-5" />
                                <p className="text-xs sm:text-sm">{getParsedNumber(post.comments.length)}</p>
                            </a>
                            <span className={`${isRetweeted ? "text-[#019966] fill-[#019966]" : " text-[#71767b] fill-[#71767b] hover:text-[#019966] hover:fill-[#019966]"} transition-colors duration-300 flex items-center gap-x-1 cursor-pointer`} onClick={handleClickRetweeted}>
                                <RetuitSVG className="w-5 h-5"/>
                                <p className="text-xs sm:text-sm">{getParsedNumber(post.replies)}</p>
                            </span>
                            <span className={`${isLiked ? "fill-[#f91880] text-[#f91880] stroke-[#f91880]" : "stroke-2 stroke-[#71767b] text-[#71767b]"} flex items-center gap-x-1 cursor-pointer transition-colors duration-300 hover:text-[#f91880] hover:stroke-[#f91880]`} onClick={handleClick}>
                                <LikeSVG className="w-5 h-5 rounded-full" />
                                <p className="text-xs sm:text-sm">{getParsedNumber(post.likes)}</p>
                            </span>
                            <span className="flex items-center gap-x-1 text-[#71767b] fill-[#71767b] transition-colors duration-300 hover:text-[#1d9bf0] hover:fill-[#1d9bf0] cursor-pointer">
                                <ImpressionsSVG className="w-5 h-5" />
                                <p className="text-xs sm:text-sm">{getParsedNumber(post.impressions)}</p>
                            </span>
                        </div>
                        <div className="flex items-center justify-between gap-x-2 sm:gap-x-3">
                            <BookMarkSVG className="w-5 h-5 fill-[#71767b]" />
                            <ShareSVG className="w-5 h-5 fill-[#71767b]" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostCard
