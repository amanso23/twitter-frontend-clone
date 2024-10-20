import { Comment } from "../post.types"
import { getRandomComment } from "./getRandomComment"

export const getRandomComments = async(count: number): Promise<Comment[]> => {
    const randomComments: Comment[] = []
    for(let i=0; i<count; i++){
        try{
            randomComments.push(await getRandomComment())
        }catch(error){
            console.log(error);
            
        }
        
    }
    return randomComments
}