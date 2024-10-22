import { FeedPost } from "../posts/post.types";
import { UserWithPost } from "./user.types";

export const parseUserWithPostToFeedPost = (userWithPost: UserWithPost): FeedPost => {
    const { posts, ...userWithoutPosts } = userWithPost
    const post = posts[0]

    return {
        id: post.id,
        text: post.text,
        image: post.image,
        comments: post.comments,
        likes: post.likes,
        replies: post.replies,
        isLiked: post.isLiked,
        impressions: post.impressions,
        user: userWithoutPosts, 
        isRetweeted: post.isRetweeted
    }
}
