
import { useEffect, useState } from "react"
import { Post } from "../../../utils/posts/post.types"
import { getParsedNumber } from "../../../utils/user/getParsedFollowingOrFollowers"
import { User } from "../../../utils/user/user.types"
import { BookMarkSVG, CommentSVG, ImpressionsSVG, LikeSVG, RetuitSVG, ShareSVG, VerifiedSVG } from "../../icons"
import confetti from 'canvas-confetti'
import { updateIsLikedAndLikeCount } from "../../../utils/posts/updateIsLikedAndLikeCount"

interface Props {
    post: Post
    user: User
}

const ProfilePostCard: React.FC<Props> = ({post, user}) => {

    const name = `${user.name.first}${user.name.last}`
    const { username } = user.login

    const [isLiked, setIsLiked] = useState(post.isLiked)

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
        updateIsLikedAndLikeCount(user.sectionName, post.id, post.likes, isLiked)
    }, [isLiked])

    
    return (
        <div className="border-t-[0.5px] border-[#2f3336]">
            <div className="grid grid-cols-[60px,1fr] m-4">
                <div className="flex justify-end mr-3">
                    <img 
                        src={user.picture.large}
                        alt={`user-${name}`}
                        className="size-12 rounded-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-x-1">
                        <p className="font-bold truncate">
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
                        <p className="text-[#71767b]">@{username}</p>
                    </div>

                    <a href={`/${name}/status/${post.id}`} className="flex flex-col">
                        <p className="mb-4 text-left" >{post.text}</p>
                        <img 
                            src={post.image} 
                            alt={`post ${post.id}`} 
                            className="rounded-2xl border-[0.5px] border-[#2f3336] aspect-square "
                        />
                    </a>

                    <div className="flex justify-between items-center mt-4 gap-x-12 xl:gap-x-16">
                        <div className="flex items-center justify-between  flex-1">
                            <span className="flex items-center gap-x-1">
                                <CommentSVG className="fill-[#71767b] size-[22px]" />
                                <p className="text-[#71767b]">{getParsedNumber(post.comments.length)}</p>
                            </span>
                            <span className="flex items-center gap-x-1">
                                <RetuitSVG className="fill-[#71767b] size-[22px]" />
                                <p className="text-[#71767b]">{getParsedNumber(post.replies)}</p>
                            </span>
                            <span className={`${isLiked ? "fill-[#f91880] text-[#f91880]  stroke-[#f91880]" : "stroke-2  stroke-[#71767b] text-[#71767b] "} flex items-center gap-x-1 cursor-pointer transition-colors duration-300 hover:text-[#f91880]  hover:stroke-[#f91880]`} onClick={handleClick}>
                                <LikeSVG className="size-[21px]  rounded-full" />
                                <p>{getParsedNumber(post.likes)}</p>
                            </span>
                            <span className="flex items-center gap-x-1">
                                <ImpressionsSVG className="fill-[#71767b] size-[22px]" />
                                <p className="text-[#71767b]">{getParsedNumber(post.impressions)}</p>
                            </span>
                        </div>
                        <div className="flex items-center justify-between gap-x-3">
                            <BookMarkSVG className="size-[22px] fill-[#71767b]" />
                            <ShareSVG className="size-[22px] fill-[#71767b]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePostCard