import { aboutElements } from "./data"

const About = () => {
    return (
            <div className="flex flex-wrap gap-x-3 m-6 mt-10">
                {aboutElements.map((element, index) => (
                    <p className="text-sm text-[#64696d] hover:underline cursor-pointer" key={index}>
                        {element}
                    </p> 
                ))}                
            </div>
    )
}

export default About