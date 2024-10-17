export const loadUserInProfile = (username: string) => {
    localStorage.setItem("userNameOfUserInProfileView", JSON.stringify({
        username: username
    }))
}