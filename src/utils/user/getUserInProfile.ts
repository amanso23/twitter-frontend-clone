export const getUserInProfile = (): string | null => {
    const userNameOfUserInProfileView = localStorage.getItem("userNameOfUserInProfileView")

    if(userNameOfUserInProfileView){
        return JSON.parse(userNameOfUserInProfileView)
    }

    return null
}