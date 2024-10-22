import { FeedPost } from "../posts/post.types";
import { UserWithPost } from "./user.types";

export const parseFeedPostToUserWithPost = (feedPost: FeedPost): UserWithPost => {
    const { 
        gender, 
        name, 
        location, 
        email, 
        login, 
        dob, 
        registered, 
        phone, cell, 
        id, picture, 
        nat, 
        isFollowed, 
        sectionName, 
        isVerified, 
        isAfiliated, 
        description, 
        social
    } = feedPost.user

    const post = {
        id: feedPost.id,
        text: feedPost.text,
        image: feedPost.image,
        comments: feedPost.comments,
        likes: feedPost.likes,
        replies: feedPost.replies,
        impressions: feedPost.impressions,
        isLiked: feedPost.isLiked,
        isRetweeted: feedPost.isRetweeted
    }

    return {
        gender: gender,
        name: name,
        location: location,
        email: email,
        login: login,
        dob: dob,
        registered: registered,
        phone: phone,
        cell: cell,
        id: id,
        picture: picture,
        nat: nat,
        isFollowed: isFollowed,
        sectionName: sectionName,
        isVerified: isVerified,
        isAfiliated: isAfiliated,
        description: description,
        social: social,
        posts: [post]
    }

}