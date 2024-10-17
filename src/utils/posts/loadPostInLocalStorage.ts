import { getRandomPost } from "./getRandomPost"
import { getRandomPosts } from "./getRandomPosts"
import { FeedPost } from "./post.types"

export const loadPostsInLocalStorage = (setPosts: (payload: FeedPost[]) => void) => {
    const posts = localStorage.getItem("posts")

    const MAX_POST_FEED = 5

    if(!posts){
        const resultPosts = getRandomPosts(MAX_POST_FEED, getRandomPost)
        localStorage.setItem("posts", JSON.stringify(resultPosts))
        setPosts(resultPosts)
    }else{
        setPosts(JSON.parse(posts))
    }
}

