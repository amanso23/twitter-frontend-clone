import { emojis } from "./data"

interface Props {
    setInputTextAreaValue: (payload: string | ((prevState: string) => string)) => void;
}


const EmojisSelectSection: React.FC<Props> = ({ setInputTextAreaValue }) => {



    return (

        <ul className="md:flex items-center mb-4 whitespace-nowrap hidden">
            {emojis.map((emoji, index) => (
                <li key={index} className="text-xl p-1 cursor-pointer" onClick={(e) => {
                    const target = e.currentTarget
                    if (target) {
                        setInputTextAreaValue((prevState) =>

                            prevState + target.innerText
                        )
                    }

                }}>
                    {emoji}
                </li>
            ))}
        </ul>



    )
}

export default EmojisSelectSection