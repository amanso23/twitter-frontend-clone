import { useEffect, useState } from "react"
import { FeedPost } from "../../../utils/posts/post.types"
import SpinLoader from "../../loaders/SpinLoader"

import { loadPostsInLocalStorage } from "../../../utils/posts/loadPostInLocalStorage"
import PostCard from "./post/PostCard"

const Feed = () => {

    const [posts, setPosts] = useState<FeedPost[]>([])

    useEffect(() => {
        loadPostsInLocalStorage(setPosts)
    }, [])

    return (
        <div className="flex flex-col border-t-[0.5px] b border-[#2f3336]">
            <ul>
            {posts.length > 0 ? (posts.map((post, index) => (
                <li key={index}>
                    <PostCard post={post} key={index}  />
                </li>
            ))) : <div className="flex justify-center mt-8">
                    <SpinLoader />
                </div>}
            </ul>
        </div>
    )
}

export default Feed

