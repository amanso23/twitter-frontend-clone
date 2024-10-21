
import { trendings } from "./data"
import TrendingCard from "./TrendingCard"

const TrendingSection = () => {
    return (
            <div className="flex flex-col border-[0.5px] border-[#2f3336] m-6 rounded-2xl h-min gap-y-4 sticky top-6"  >
                <h1 className="font-bold text-3xl text-left m-4">
                    Tendencias de España
                </h1>
                <ul className="flex flex-col mt-[-10px]">
                    {trendings.map((trending, index) => (
                        <li key={index}>
                            <TrendingCard trending={trending} index={index} />
                        </li>
                    ))}
                    <a href="#" className="p-3 text-left text-[#1d9bf0] hover:underline">Mostrar mas</a>
                </ul>
            </div>
          
    )
}

export default TrendingSection