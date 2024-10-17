import { Comment } from "../post.types"
import { getRandomComment } from "./getRandomComment"

export const getRandomComments = (count: number): Comment[] => {
    const randomComments: Comment[] = []
    for(let i=0; i<count; i++){
        randomComments.push(getRandomComment())
    }
    return randomComments
}