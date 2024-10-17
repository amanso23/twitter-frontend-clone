import { getParsedDobDate, getParsedRegisteredDate } from "../../../utils/date/getParsedDate"
import { CalendarSVG, GlobeSVG, LinkSVG, LocationSVG } from "../../icons"
import BibliographyItem from "./BibliographyItem"

interface Props {
    city: string
    country: string
    dobDate: string
    registeredDate: string
    email: string
}

const Bibliography: React.FC<Props> = ({city, country, dobDate, registeredDate, email}) => {
    return (
        <div className="flex flex-wrap gap-x-4 mt-3">
            {location && <BibliographyItem icon={<LocationSVG className="size-5" />} content={`${city}, ${country}`} />}
            {dobDate && <BibliographyItem icon={<GlobeSVG className="size-5" />} content={`Fecha de nacimiento: ${getParsedDobDate(dobDate)}`} />}
            {registeredDate && <BibliographyItem icon={<CalendarSVG className="size-5" />} content={`Se unió en ${getParsedRegisteredDate(registeredDate)}`} />}
            {email && <BibliographyItem icon={<LinkSVG className="size-5" />} content={`${email}`} isLink={true} />}
        </div>
    )
}

export default Bibliography