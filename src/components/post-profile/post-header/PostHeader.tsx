import { Link } from "react-router-dom"
import { LeftArrow } from "../../icons"

const PostHeader = () => {
    return (
        <header className="sticky top-0 flex items-center  backdrop-blur-md bg-black/30 gap-x-6">
            <Link to="/">
                <LeftArrow className="fill-white hover:bg-[#181919] p-2 rounded-full size-9 m-2" />
            </Link>
            <p className="text-2xl font-bold" >Post</p>
        </header>
    )
}

export default PostHeader