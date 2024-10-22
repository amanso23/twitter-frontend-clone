import { useEffect, useState } from "react"
import confetti from 'canvas-confetti'
import { getParsedNumber } from "../../../utils/user/getParsedFollowingOrFollowers"
import { FeedPost } from "../../../utils/posts/post.types"
import { CommentSVG, RetuitSVG, LikeSVG, ImpressionsSVG, BookMarkSVG, ShareSVG } from "../../icons"
import UserCard from "./user-card/UserCard"
import PostComments from "./post-comments/PostComments"
import { updateIsLikedAndLikeCount } from "../../../utils/posts/updateIsLikedAndLikeCount"
import { updateIsRetweetedAndRepliesCount } from "../../../utils/posts/updateIsRetweetedAndRepliesCount"

interface Props {
    post: FeedPost
}

const PostProfileCard: React.FC<Props> = ({ post }) => {

    const { user }  = post //obtenemos el usuario
    const { comments } = post

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

        if(!isLiked){
            post.likes += 1
        }else{
            post.likes -= 1
        }
    }

    useEffect(() => {
        updateIsLikedAndLikeCount(user.sectionName , post.id, post.likes, isLiked)
    }, [isLiked])

    return (
        <div>
            <div className="grid grid-cols-[1fr] ">
            
                <div className="flex flex-col">

                    <UserCard user={user} />

                        <div className="flex flex-col m-4  border-[#2f3336]">
                            <p className="mb-4 text-left" >{post.text}</p>
                            <img
                                src={post.image}
                                alt={`post ${post.id}`}
                                className="rounded-2xl border-[0.5px] border-[#2f3336] aspect-square "
                            />
                        </div>

                        <div className="flex justify-between items-center gap-x-12 xl:gap-x-16 border-[#2f3336] border-b-[0.5px]">
                            <div className="flex items-center justify-between flex-1 ml-4 mb-4 mt-2">
                                <span className="flex items-center gap-x-1 text-[#71767b] fill-[#71767b] transition-colors duration-300 hover:text-[#1d9bf0] hover:fill-[#1d9bf0]">
                                    <CommentSVG className="size-[22px]" />
                                    <p>{getParsedNumber(post.comments.length)}</p>
                                </span>
                                <span className={`${isRetweeted ? "text-[#019966] fill-[#019966]" : " text-[#71767b] fill-[#71767b] hover:text-[#019966] hover:fill-[#019966]"} transition-colors duration-300  flex items-center gap-x-1 cursor-pointer`} onClick={handleClickRetweeted} >
                                    <RetuitSVG className="size-[22px]"/>
                                    <p>{getParsedNumber(post.replies)}</p>
                                </span>
                                <span className={`${isLiked ? "fill-[#f91880] text-[#f91880]  stroke-[#f91880]" : "stroke-2  stroke-[#71767b] text-[#71767b] "} flex items-center gap-x-1 cursor-pointer transition-colors duration-300 hover:text-[#f91880]  hover:stroke-[#f91880]`} onClick={handleClick}>
                                    <LikeSVG className="size-[21px]  rounded-full" />
                                    <p>{getParsedNumber(post.likes)}</p>
                                </span>
                                <span className="flex items-center gap-x-1 text-[#71767b] fill-[#71767b] transition-colors duration-300 hover:text-[#1d9bf0] hover:fill-[#1d9bf0] cursor-pointer">
                                    <ImpressionsSVG className="size-[22px]" />
                                    <p>{getParsedNumber(post.impressions)}</p>
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-x-3 mr-4 mb-4 mt-2">
                                <BookMarkSVG className="size-[22px] fill-[#71767b]" />
                                <ShareSVG className="size-[22px] fill-[#71767b]" />
                            </div>
                        </div>
                </div>
                <PostComments comments={comments} />
            </div>

        </div>

    )
}

export default PostProfileCard