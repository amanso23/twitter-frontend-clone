import { useEffect, useState } from "react";
import { User } from "../../../utils/user/user.types";
import Button from "../../comun/Button";
import { updateUsersSection } from "../../../utils/user/updateUsersSection";
import { MailSVG, VerifiedSVG } from "../../icons";
import Bibliography from "../bibliography/Biblioagraphy";
import SocialSection from "../social/SocialSection";
import { loggedUser } from "../../sidebar/user-logged/data";

interface Props {
  user?: User;
  userName?: string;
}

const UserProfileCard: React.FC<Props> = ({ user, userName }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsFollowed(user?.isFollowed || false)
  }, [user?.isFollowed])

  const handleFollowToggle = () => {
    if (user) {
      updateUsersSection(user, isFollowed, user.sectionName);
      setIsFollowed(!isFollowed);
    }
  };

  return (
    <div>
      <div
        className={`${
          user
            ? "bg-[url(https://media1.tenor.com/m/vjLLkjTTPXQAAAAC/x-twitter.gif)]"
            : "bg-[#333639]"
        } bg-cover bg-center min-h-52 relative`}
      >
        {user ? (
          <img
            src={user.picture.large}
            alt="Profile"
            className="absolute bottom-[-60px] md:bottom-[-75px] left-4 size-28 lg:size-40 border-4 border-black rounded-full"
          />
        ) : (
          <span className="absolute bottom-[-60px] md:bottom-[-75px] left-4 size-28 lg:size-40 border-4 border-black rounded-full bg-[#16181c]"></span>
        )}
      </div>

      <div className="flex justify-between items-center relative">
        <div className="flex flex-col items-start m-4 mt-[77px]">
          <div className="flex items-center gap-x-[3px]">
            <h1 className="font-bold text-2xl">
              {user?.name.first} {user?.name.last}
            </h1>
            {user?.isVerified && (
              <VerifiedSVG
                className={`${
                  user.isAfiliated ? "fill-[#e2b719]" : "fill-[#1d9bf0]"
                } size-5 mt-[2px]`}
              />
            )}
          </div>
          <h3 className={` ${user ? "text-[#64686d] " : "text-white font-black text-bold text-[24px]" } text-[#64686d] text-lg`}>
            @{user ? user.login.username : userName}
          </h3>
          {user && (
            <>
              <p className="mt-3 text-left">{user.description}</p>
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
            </>
          )}
        </div>

        {user && (
          <span className="absolute top-4 right-4 flex items-center gap-x-3">
            {user.login.username !== loggedUser.login.username && 
              <span className="border-[0.5px] border-slate-500 p-2 rounded-full cursor-pointer hover:bg-[#181919] transition-colors duration-200">
                <MailSVG className="size-6 fill-white" /> 
              </span>
            }
            {user.login.username === loggedUser.login.username ? <Button className="border-[1px]  px-4 py-[5px] font-medium rounded-full flex items-center justify-center hover:bg-[#181919] transition-colors duration-300 " content="Editar perfil" /> : (
              <Button
              content={
                isFollowed ? (isHovered ? "Dejar de seguir" : "Siguiendo") : "Seguir"
              }
              className={`${
                isFollowed
                  ? "border border-white text-white bg-black hover:bg-[#200a0c] hover:border-[#f4212e] hover:text-[#f4212e] w-[132px] whitespace-nowrap"
                  : "bg-white text-black hover:bg-[#dfe3e4]"
              } px-4 py-[5px] font-medium rounded-full flex items-center justify-center`}
              onClick={handleFollowToggle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
