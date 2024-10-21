import { UserWithPost } from "../user/user.types"
import { FeedPost } from "./post.types"

export const updateIsLikedAndLikeCount = (sectionName: string, postId: string, postLikes: number, postIsLiked: boolean) => {

    console.log(sectionName)
    
    const posts = localStorage.getItem(sectionName)

    if(sectionName === "feedPosts"){
        const parsePosts: FeedPost[] = JSON.parse(posts || "[]")

        const updatedPosts = parsePosts.map(post => {
            if(post.id === postId){
                return {...post, isLiked: postIsLiked, likes: postLikes}
            }
            return post
        })
    
        localStorage.setItem(sectionName, JSON.stringify(updatedPosts))

    }else if(sectionName === "A quién seguir"){
        
        const parsePosts: UserWithPost[] = JSON.parse(posts || "[]")

        const updatedPosts = parsePosts.map(user => {
            const updatedUserPosts = user.posts.map(post => {
                if(post.id === postId){ 
                    return {...post, isLiked: postIsLiked, likes: postLikes}
                }
                return post
            })
            return {...user, posts: updatedUserPosts}
        })

        console.log(updatedPosts);
        

        localStorage.setItem(sectionName, JSON.stringify(updatedPosts))

    }
}