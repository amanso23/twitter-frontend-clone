import { getRandomNumber } from "../getRandomNumber"
import { getRandomUserWithoutPost } from "../user/getRandomUserWithoutPost"
import { getRandomComments } from "./comments/getRandomComments"
import { postImages, postTexts } from "./data"
import { getRandomImage } from "./getRandomImage"
import { getRandomText } from "./getRandomText"
import { FeedPost } from "./post.types"

const MAX_LIKES = 1000
const MAX_REPLIES = 100
const MAX_COMMENTS = 10
const MAX_IMPRESSIONS = 10000

export const getRandomPost = (): FeedPost => {

    return {
        user: getRandomUserWithoutPost(),
        id: crypto.randomUUID(),
        text: getRandomText(postTexts),
        image: getRandomImage(postImages),
        comments: getRandomComments(getRandomNumber(MAX_COMMENTS)),
        likes: getRandomNumber(MAX_LIKES),
        replies: getRandomNumber(MAX_REPLIES),
        impressions: getRandomNumber(MAX_IMPRESSIONS),
        isLiked: false
    }
}