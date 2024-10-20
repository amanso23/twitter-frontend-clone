import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { VerifiedSVG } from "../../icons"
import { getParsedNumber } from "../../../utils/user/getParsedFollowingOrFollowers"

interface Props {
    icon?: ReactNode
    name?: string
    isVerified?: boolean
    isAfiliated?: boolean
    cantityOfPost?: number | string
}

const Header: React.FC<Props> = ({icon, name, isVerified, isAfiliated, cantityOfPost}) => {
    return (
        <header className="sticky top-0 flex items-center justify-between z-10 backdrop-blur-md bg-black/30">
            <div className="flex items-center gap-x-6">
                <Link to="/">
                    {icon }
                </Link>
                {name ? (<div className="flex flex-col items-start">
                    <div className="flex items-center gap-x-1">
                        <p className="text-white text-xl font-bold">{name}</p>
                        {isVerified ? <VerifiedSVG className={`${isAfiliated ? "fill-[#e2b719]" : "fill-[#1d9bf0]"} size-5 mt-[2px]`} /> : ""}

                    </div>
                    <p className="text-[#71767b]">{cantityOfPost ? getParsedNumber(cantityOfPost as number) + " post" : ""}</p>
                </div>) : <p className="text-xl font-bold">Perfil</p> }
            </div>
        </header>
    )
}

export default Header