import { getRandomNumber } from "../../getRandomNumber"
import { getRandomUserWithoutPost } from "../../user/getRandomUserWithoutPost"
import { postTexts } from "../data"
import { getRandomText } from "../getRandomText"

const MAX_LIKES = 100
const MAX_REPLIES = 40

export const getRandomComment = () => {
    return {
        user: getRandomUserWithoutPost(),
        id: crypto.randomUUID(),
        text: getRandomText(postTexts),
        likes: getRandomNumber(MAX_LIKES),
        replies: getRandomNumber(MAX_REPLIES)
    }
}