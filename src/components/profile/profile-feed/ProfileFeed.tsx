import { Post } from "../../../utils/posts/post.types"
import { User } from "../../../utils/user/user.types"
import SpinLoader from "../../loaders/SpinLoader"
import ProfilePostCard from "./ProfilePostCard"


interface Props{
    posts: Post[]
    user: User
}

const ProfileFeed: React.FC<Props> = ({posts, user}) => {
    return (
        <div className="flex flex-col border-t-[0.5px] b border-[#2f3336]">
            <ul>
            {posts.length > 0 ? (posts.map((post, index) => (
                <li key={index}>
                    <ProfilePostCard post={post} user={user}  />
                </li>
            ))) : <div className="flex justify-center mt-8">
                    <SpinLoader />
                </div>}
            </ul>
        </div>
    )
}

export default ProfileFeed