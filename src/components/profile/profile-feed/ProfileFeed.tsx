import { Post } from "../../../utils/posts/post.types";
import { User } from "../../../utils/user/user.types";
import SpinLoader from "../../loaders/SpinLoader";
import UsersSection from "../../right-sidebar/users-section/UsersSection";
import ProfilePostCard from "./ProfilePostCard";

interface Props {
  posts?: Post[]
  user?: User
}

const ProfileFeed: React.FC<Props> = ({ posts, user }) => {
 
  if (!user) {
    return <div className="flex items-center min-h-screen flex-col">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl mt-20 font-bold ">Esta cuenta no existe</h1>
        <p className="self-start text-[#6a6f74]">Intenta hacer otra búsqueda.</p>
      </div>
      
    </div>
  }

  if (!posts) {
    return (
      <div className="flex justify-center mt-8">
        <SpinLoader />
      </div>
    )
  }

  return (
    <div className="flex flex-col border-t-[0.5px] border-[#2f3336]">
      {posts.length > 0 ? (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <ProfilePostCard post={post} user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <UsersSection sectionName="Tal vez te guste" withBorder={false} withMargin={false} />
      )}
    </div>
  )
}

export default ProfileFeed
