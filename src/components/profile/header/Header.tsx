import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props {
    icon?: ReactNode
    name?: string
}

const Header: React.FC<Props> = ({icon, name}) => {
    return (
        <header className="sticky top-0 flex items-center justify-between z-10 backdrop-blur-md bg-black/30">
            <div className="flex items-center gap-x-6">
                <Link to="/">
                    {icon }
                </Link>
                {name ? (<div className="flex flex-col items-start">
                    <p className="text-white text-xl font-bold">{name}</p>
                    <p className="text-[#71767b]">0 post</p>
                </div>) : <p className="text-xl font-bold">Perfil</p> }
            </div>
        </header>
    )
}

export default Header