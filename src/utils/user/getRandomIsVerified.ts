export const getRandomIsVerified = () => {
    const randomNumber = Math.floor(Math.random() * 2+1)
    return randomNumber%2==0
}