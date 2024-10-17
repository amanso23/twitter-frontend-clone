export const getUserInProfile = (): string | null => {
    const userNameOfUserInProfileView = localStorage.getItem("userNameOfUserInProfileView")

    console.log(userNameOfUserInProfileView);
    
    if(userNameOfUserInProfileView){
        return JSON.parse(userNameOfUserInProfileView)
    }

    return null
}