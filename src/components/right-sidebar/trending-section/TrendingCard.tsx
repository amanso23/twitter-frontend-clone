import { getParsedNumber } from "../../../utils/user/getParsedFollowingOrFollowers"
import { MoreOptions } from "../../icons"
import Separator from "./Separator"
import { Trending } from "./trending.types"

interface Props {
    index: number
    trending: Trending
}

const TrendingCard: React.FC<Props> = ({trending, index}) => {
    return (
        <a href="#" className="flex justify-between cursor-pointer transition-colors duration-400 hover:bg-[#131313] p-3">
            <div className="flex flex-col items-start">
                <div className="flex items-center gap-x-1 text-base text-[#6a6f74]">
                    <p>{index + 1}</p>
                    <Separator />
                    <p>{trending.type}</p>
                    <Separator />
                    <p>Tendencia</p>
                </div>
                <h1 className="font-bold text-xl">{trending.title}</h1>
                <h2 className="text-[#6a6f74]">{getParsedNumber(trending.numberOfPublications)} posts</h2>
            </div>
            <MoreOptions className="size-12 fill-[#6a6f74] mt-1 transition-colors duration-400 hover:fill-[#1d9bf0] hover:bg-[#0a171f] rounded-full p-3" />
        </a>
    )
}

export default TrendingCard