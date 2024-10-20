import { getRandomNumber } from "../getRandomNumber"
import { getRandomPost } from "./getRandomPost"
import { getRandomPosts } from "./getRandomPosts"
import { FeedPost } from "./post.types"

export const loadPostsInLocalStorage = async(setPosts: (payload: FeedPost[]) => void) => {
    const posts = localStorage.getItem("feedPosts")

    const MAX_POST_FEED = 5

    if(!posts){
        const resultPosts = await getRandomPosts(getRandomNumber(MAX_POST_FEED), getRandomPost)
        localStorage.setItem("feedPosts", JSON.stringify(resultPosts))
        setPosts(resultPosts)
    }else{
        setPosts(JSON.parse(posts))
    }
}

