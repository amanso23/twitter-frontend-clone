import { ReactNode } from "react"

interface Props {
    icon: ReactNode
    content: string
    isLink?: boolean
}

const BibliographyItem: React.FC<Props> = ({icon, content, isLink}) => {
    return (
        <span className="flex items-center text-[#64686d] fill-[#64686d] gap-x-1 mt-[-5px] text-[17px]">
            {icon}
            {isLink ? <a href="#" className="cursor-pointer text-[#1d9bf0] hover:underline">{content}</a> : <p>{content}</p> }
        </span>
    )
}

export default BibliographyItem