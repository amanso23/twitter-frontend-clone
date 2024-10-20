import { getRandomNumber } from "../../getRandomNumber"
import { getRandomUserWithoutPost } from "../../user/getRandomUserWithoutPost"
import { postComments } from "../data"
import { getRandomText } from "../getRandomText"
import { Comment } from "../post.types"

const MAX_LIKES = 100
const MAX_REPLIES = 40
const MAX_IMPRESSIONS = 400

export const getRandomComment = async(): Promise<Comment> => {
    return {
        user: await getRandomUserWithoutPost(),
        id: crypto.randomUUID(),
        text: getRandomText(postComments),
        likes: getRandomNumber(MAX_LIKES),
        replies: getRandomNumber(MAX_REPLIES),
        impressions: getRandomNumber(MAX_IMPRESSIONS)
    }
}