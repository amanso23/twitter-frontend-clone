import { spacexPosts } from "./data"

import PostCard from "./post/PostCard"

const SpaceXFeed = () => {

    return (
        <div className="flex flex-col border-t-[0.5px] b border-[#2f3336]">
            <ul>
            {(spacexPosts.map((post, index) => (
                <li key={index}>
                    <PostCard post={post} key={index}  />
                </li>
            )))}
            </ul>
        </div>
    )
}

export default SpaceXFeed

