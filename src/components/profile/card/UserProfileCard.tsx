import { User } from "../../../utils/user/user.types"

interface Props {
    user: User
}

const UserProfileCard: React.FC<Props> = ({user}) => {
    return (
        <div className="border-b-[0.5px] border-[#2f3336] min-h-[600px]">
            <div className={`bg-[url(https://media1.tenor.com/m/vjLLkjTTPXQAAAAC/x-twitter.gif)] bg-cover bg-center min-h-52 relative`}>
                <img
                    src={user.picture.large}
                    alt="Profile"
                    className="absolute bottom-[-60px] md:bottom-[-65px] left-4 size-28 lg:size-36 border-4 border-black rounded-full transform  "
                />
            </div>

            <div className="flex flex-col items-start m-4 mt-[77px]">
                <h1 className="font-bold text-xl">{user.name.first}{user.name.last }</h1>
                <h3 className="text-[#64686d]">@{user.login.username}</h3>
                
            </div>




            
            
        </div>

    )
}

export default UserProfileCard