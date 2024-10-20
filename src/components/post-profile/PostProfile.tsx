import { useParams } from "react-router-dom"
import PostHeader from "./post-header/PostHeader"
import { getUsersWithPostsFromLocalStorage } from "../../utils/posts/getUsersWithPostsFromLocalStorage"
import { useEffect, useState } from "react"
import { FeedPost } from "../../utils/posts/post.types"
import PostProfileCard from "./post-profile-card/PostProfileCard"
import { getUsersFromLocalStorage } from "../../utils/user/getUsersFromLocalStorage"
import { parseUserWithPostToFeedPost } from "../../utils/user/parseUserWithPostToFeedPost"

const PostProfile = () => {

    const [findedPost, setFindedPost] = useState<FeedPost | null>(null)
    const {postId} = useParams()

    useEffect(() => {
        const posts = getUsersWithPostsFromLocalStorage()
        const usersFromSection = getUsersFromLocalStorage("A quién seguir")

        if (usersFromSection.length > 0) {
            const findedPost = usersFromSection
                .map(user => {
                    const post = user.posts.find(post => post.id === postId)    
                    return post ? { ...user, posts: [post] } : null
                })
                .filter(user => user !== null)
              
               if(findedPost[0]) setFindedPost(parseUserWithPostToFeedPost(findedPost[0]))          
        }
        
        if(posts.length > 0 ){
            const findedPost = posts.find(post => post.id === postId) || null
            if(findedPost) setFindedPost(findedPost)
        }

    }, [postId])

    return (
        <div className="border-[#2f3336] border-l-[0.5px] border-r-[0.5px] z-50">
            <PostHeader />
            {findedPost && <PostProfileCard post={findedPost} />}
        </div>
    )
}

export default PostProfile