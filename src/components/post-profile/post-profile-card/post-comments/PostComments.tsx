import { Comment } from "../../../../utils/posts/post.types"
import CommentCard from "./CommentCard"

interface Props {
    comments: Comment[]
}

const PostComments:React.FC<Props> = ({comments}) => {
    return (
        <div className="flex flex-col gap-y-3 mt-3">
            {comments.length > 0 && comments.map((comment, index) => (
                <CommentCard comment={comment}  key={index}/>
            ))}
        </div>
    )
}

export default PostComments