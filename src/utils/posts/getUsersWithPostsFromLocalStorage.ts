import { FeedPost } from "./post.types"

export const getUsersWithPostsFromLocalStorage = (): FeedPost[] | [] => {
    const LOCAL_STORAGE_KEY = "feedPosts"
    
    const posts = localStorage.getItem(LOCAL_STORAGE_KEY)

    const parsePosts: FeedPost[] = JSON.parse(posts || "[]")


    return parsePosts

}