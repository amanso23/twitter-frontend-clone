import { getRandomNumber } from "../getRandomNumber"
import { getRandomComments } from "./comments/getRandomComments"
import { postImages, postTexts } from "./data"
import { getRandomImage } from "./getRandomImage"
import { getRandomText } from "./getRandomText"
import { Post } from "./post.types"

const MAX_LIKES = 1000
const MAX_REPLIES = 100
const MAX_COMMENTS = 10
const MAX_IMPRESSIONS = 10000

export const getRandomUserPost = async(): Promise<Post> => {

    return {
        id: crypto.randomUUID(),
        text: getRandomText(postTexts),
        image: getRandomImage(postImages),
        comments: await getRandomComments(getRandomNumber(MAX_COMMENTS)),
        likes: getRandomNumber(MAX_LIKES),
        replies: getRandomNumber(MAX_REPLIES),
        impressions: getRandomNumber(MAX_IMPRESSIONS),
        isLiked: false,
        isRetweeted: false
    }
}