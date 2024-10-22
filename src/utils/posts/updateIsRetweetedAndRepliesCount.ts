import { UserWithPost } from "../user/user.types"
import { FeedPost } from "./post.types"

export const updateIsRetweetedAndRepliesCount = (sectionName: string, postId: string, postReplies: number, postIsRetweeted: boolean) => {
    
    const posts = localStorage.getItem(sectionName)

    if(sectionName === "feedPosts"){
        const parsePosts: FeedPost[] = JSON.parse(posts || "[]")

        const updatedPosts = parsePosts.map(post => {
            if(post.id === postId){
                return {...post, isRetweeted: postIsRetweeted, replies: postReplies}
            }
            return post
        })
    
        localStorage.setItem(sectionName, JSON.stringify(updatedPosts))

    }else if(sectionName === "A quién seguir"){
        
        const parsePosts: UserWithPost[] = JSON.parse(posts || "[]")

        const updatedPosts = parsePosts.map(user => {
            const updatedUserPosts = user.posts.map(post => {
                if(post.id === postId){ 
                    return {...post, isRetweeted: postIsRetweeted, replies: postReplies}
                }
                return post
            })
            return {...user, posts: updatedUserPosts}
        })

        localStorage.setItem(sectionName, JSON.stringify(updatedPosts))

    }
}