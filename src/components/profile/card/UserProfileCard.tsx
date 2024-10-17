import { useState } from "react"
import { User } from "../../../utils/user/user.types"
import Button from "../../comun/Button"
import { updateUsersSection } from "../../../utils/user/updateUsersSection"
import {MailSVG, VerifiedSVG } from "../../icons"
import Bibliography from "../bibliography/Biblioagraphy"
import SocialSection from "../social/SocialSection"

interface Props {
    user: User
}

const UserProfileCard: React.FC<Props> = ({user}) => {

    const [isFollowed, setIsFollowed] = useState(user.isFollowed)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div>
            <div className={`bg-[url(https://media1.tenor.com/m/vjLLkjTTPXQAAAAC/x-twitter.gif)] bg-cover bg-center min-h-52 relative`}>
                <img
                    src={user.picture.large}
                    alt="Profile"
                    className="absolute bottom-[-60px] md:bottom-[-65px] left-4 size-28 lg:size-36 border-4 border-black rounded-full transform  "
                />
            </div>

            <div className="flex justify-between items-center relative">
                <div className="flex flex-col items-start m-4 mt-[77px]">
                    <div className="flex items-center gap-x-[3px]">
                        <h1 className="font-bold text-2xl">{user.name.first} {user.name.last }</h1>
                        {user.isVerified ? <VerifiedSVG className={`${user.isAfiliated ? "fill-[#e2b719]" : "fill-[#1d9bf0]"} size-5 mt-[2px]`} /> : ""}
                    </div>
                    
                    <h3 className="text-[#64686d] text-lg mt-[-2px]">@{user.login.username}</h3>
                    <p className="mt-3 text-left ">{user.description}</p>

                    <Bibliography 
                        city={user.location.city}
                        country={user.location.country}
                        dobDate={user.dob.date}
                        registeredDate={user.registered.date}
                        email={user.email}     
                    />

                    <SocialSection 
                        followers={user.social.followers}
                        following={user.social.following}
                    />         
                </div>

                <span className="absolute top-4 right-4 flex items-center gap-x-3">

                    <span className="border-[0.5px] border-slate-500 p-2 rounded-full cursor-pointer transition-colors duration-200 hover:bg-[#181919]">
                        <MailSVG className="size-6 fill-white " />
                    </span>
                    <Button
                        content={isFollowed ? isHovered ? "Dejar de seguir" : "Siguiendo" : "Seguir"}
                        className={`${isFollowed ? "border border-white text-white bg-black hover:bg-[#200a0c] hover:border hover:border-[#f4212e] hover:text-[#f4212e] w-[132px]" : "bg-white text-black hover:bg-[#dfe3e4]"} px-4 py-[5px] font-medium rounded-full whitespace-nowrap overflow-hidden  flex items-center justify-center `}
                        onClick={() => {
                            updateUsersSection(user, isFollowed, user.sectionName as string)
                            setIsFollowed(!isFollowed)
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </span>
            </div>
        </div>
    )
}

export default UserProfileCard