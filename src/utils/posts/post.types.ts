import { User } from "../user/user.types"


export interface Post {
    id: string
    text: string
    image: string
    comments: Comment[]
    likes: number
    replies: number
    impressions: number
    isLiked: boolean
}

export interface FeedPost extends Post{
    user: User
}

export interface Comment {
    user: User
    id: string
    text: string
    likes: number
    replies: number
}